// Sync layer. Uses Firebase Realtime Database when js/firebase-config.js is filled in.
// Otherwise falls back to a local mode that syncs between tabs on the same device
// (handy for trying the game before Firebase is set up).
import { FIREBASE_CONFIG } from './firebase-config.js';

const FIREBASE_VERSION = '10.12.2';

export const hasFirebase = !!(FIREBASE_CONFIG && FIREBASE_CONFIG.databaseURL);

export async function createDb() {
  return hasFirebase ? createFirebaseDb() : createLocalDb();
}

// ---------------- Firebase ----------------
async function createFirebaseDb() {
  const base = `https://www.gstatic.com/firebasejs/${FIREBASE_VERSION}`;
  const { initializeApp } = await import(`${base}/firebase-app.js`);
  const fb = await import(`${base}/firebase-database.js`);
  const app = initializeApp(FIREBASE_CONFIG);
  const db = fb.getDatabase(app);
  let offset = 0;
  fb.onValue(fb.ref(db, '.info/serverTimeOffset'), s => { offset = s.val() || 0; });
  const r = p => fb.ref(db, p);
  return {
    mode: 'firebase',
    now: () => Date.now() + offset,
    async get(p) { return (await fb.get(r(p))).val(); },
    set(p, v) { return fb.set(r(p), v); },
    update(p, v) { return fb.update(r(p), v); },
    remove(p) { return fb.remove(r(p)); },
    on(p, cb) { return fb.onValue(r(p), s => cb(s.val())); },
    async transaction(p, fn, opts = {}) {
      const res = await fb.runTransaction(r(p), cur => {
        // Firebase may call first with null before it has the real value; returning null
        // makes it retry with the server's value instead of aborting.
        if (cur === null && !opts.allowNull) return null;
        const next = fn(cur);
        return next === undefined ? undefined : next;
      });
      return { committed: res.committed, value: res.snapshot.val() };
    },
    onDisconnectSet(p, v) { fb.onDisconnect(r(p)).set(v); },
    onConnected(cb) { fb.onValue(r('.info/connected'), s => cb(!!s.val())); },
  };
}

// ---------------- Local (same device, between tabs) ----------------
// In-memory database for practice games against the bot (nothing leaves this phone).
export function createMemoryDb() {
  let tree = {};
  return createLocalDb({ memory: { read: () => JSON.parse(JSON.stringify(tree)), write: t => { tree = t; } } });
}

function createLocalDb(opts = {}) {
  const KEY = 'abc-local-db';
  const mem = opts.memory;
  const chan = !mem && typeof BroadcastChannel !== 'undefined' ? new BroadcastChannel('abc-local-db') : null;
  const listeners = new Set();

  const readTree = () => { if (mem) return mem.read(); try { return JSON.parse(localStorage.getItem(KEY)) || {}; } catch { return {}; } };
  const writeTree = t => { if (mem) mem.write(t); else localStorage.setItem(KEY, JSON.stringify(t)); };
  const parts = p => p.split('/').filter(Boolean);
  const getAt = (t, p) => parts(p).reduce((o, k) => (o == null ? undefined : o[k]), t);
  const setAt = (t, p, v) => {
    const ks = parts(p); let o = t;
    for (let i = 0; i < ks.length - 1; i++) { if (o[ks[i]] == null || typeof o[ks[i]] !== 'object') o[ks[i]] = {}; o = o[ks[i]]; }
    if (v === null || v === undefined) delete o[ks[ks.length - 1]]; else o[ks[ks.length - 1]] = v;
  };
  const clone = v => (v === undefined ? null : JSON.parse(JSON.stringify(v)));
  const notify = () => { for (const l of listeners) l(); };
  const changed = () => { notify(); chan && chan.postMessage('change'); };
  if (chan) chan.onmessage = notify;
  if (!mem) window.addEventListener('storage', e => { if (e.key === KEY) notify(); });

  return {
    mode: mem ? 'memory' : 'local',
    now: () => Date.now(),
    async get(p) { return clone(getAt(readTree(), p)); },
    async set(p, v) { const t = readTree(); setAt(t, p, clone(v)); writeTree(t); changed(); },
    async update(p, obj) { const t = readTree(); for (const [k, v] of Object.entries(obj)) setAt(t, `${p}/${k}`, clone(v)); writeTree(t); changed(); },
    async remove(p) { const t = readTree(); setAt(t, p, null); writeTree(t); changed(); },
    on(p, cb) {
      let last;
      const l = () => { const v = clone(getAt(readTree(), p)); const j = JSON.stringify(v); if (j !== last) { last = j; cb(v); } };
      listeners.add(l); setTimeout(l, 0);
      return () => listeners.delete(l);
    },
    async transaction(p, fn) {
      const t = readTree();
      const next = fn(clone(getAt(t, p)));
      if (next === undefined) return { committed: false, value: clone(getAt(t, p)) };
      setAt(t, p, clone(next)); writeTree(t); changed();
      return { committed: true, value: clone(next) };
    },
    onDisconnectSet() {},
    onConnected(cb) { cb(true); },
  };
}
