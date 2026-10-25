import * as G from './game.js';
import { createDb, createMemoryDb, hasFirebase } from './db.js';

// ---------------- helpers ----------------
const $ = s => document.querySelector(s);
const esc = s => String(s ?? '').replace(/[&<>"']/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
// In local mode both tabs share localStorage, so identity lives in sessionStorage (one player per tab).
const idStore = hasFirebase ? localStorage : sessionStorage;
const store = {
  get(k, d, s = localStorage) { try { const v = s.getItem('abc-' + k); return v == null ? d : JSON.parse(v); } catch { return d; } },
  set(k, v, s = localStorage) { try { s.setItem('abc-' + k, JSON.stringify(v)); } catch {} },
};
const newId = () => Math.random().toString(36).slice(2, 10) + Date.now().toString(36).slice(-4);
const CODE_CHARS = 'ABCDEFGHJKLMNPQRSTUVWXYZ';

let toastTimer;
function toast(msg) {
  const t = $('#toast'); t.textContent = msg; t.classList.add('on');
  clearTimeout(toastTimer); toastTimer = setTimeout(() => t.classList.remove('on'), 2600);
}

// ---------------- app state ----------------
const me = store.get('pid', null, idStore) || newId();
store.set('pid', me, idStore);
let myName = store.get('name', '', idStore);

let db, mainDb;
let botMode = false;       // practice game against the bot, held only in this phone's memory
const BOT_ID = 'bot';
const BOT_SPEEDS = {
  slow:   { min: 25, max: 75, miss: 0.25, label: 'Slow' },
  medium: { min: 12, max: 50, miss: 0.15, label: 'Medium' },
  fast:   { min: 5,  max: 28, miss: 0.05, label: 'Fast' },
};
let botPlan = null;
let roomCode = null;
let room = null;           // latest snapshot of rooms/{code}
let unsubRoom = null;
let stats = null;          // stats for this pair
let unsubStats = null, statsKey = null;
let currentKey = null;     // which screen is built
const ui = { lockUntil: 0, tried: [], feedback: null, lastPulse: {}, pulseUntil: 0, pulseName: '' };
const attempts = {};       // throttle for shared transactions

const S = () => ({ ...G.DEFAULT_SETTINGS, ...((room && room.state && room.state.settings) || {}) });
const playerIds = () => Object.keys((room && room.players) || {}).sort((a, b) => (room.players[a].joinedAt || 0) - (room.players[b].joinedAt || 0));
const opponentId = () => playerIds().find(id => id !== me);
const nameOf = id => (room && room.players && room.players[id] && room.players[id].name) || 'Player';
const catOf = st => G.CATEGORY_BY_ID[st.categoryId];
const roomPath = (p = '') => `rooms/${roomCode}${p ? '/' + p : ''}`;

// ---------------- boot ----------------
(async function boot() {
  try { db = mainDb = await createDb(); }
  catch (e) { console.error(e); $('#app').innerHTML = `<main class="screen"><p class="center">Couldn't connect. Check your internet and reload.</p></main>`; return; }
  const hashCode = (location.hash || '').replace('#', '').toUpperCase();
  if (/^[A-Z]{4}$/.test(hashCode)) {
    const r = await db.get(`rooms/${hashCode}`);
    if (r && r.players && r.players[me]) { enterRoom(hashCode); }
    else { render(); const c = $('#code'); if (c) c.value = hashCode; }
  } else render();
  setInterval(tick, 200);
  document.addEventListener('visibilitychange', () => { if (!document.hidden) tick(); });
})();

// ---------------- room lifecycle ----------------
function randomCode() { let c = ''; for (let i = 0; i < 4; i++) c += CODE_CHARS[Math.floor(Math.random() * CODE_CHARS.length)]; return c; }

function readName() {
  const n = ($('#name') && $('#name').value.trim()) || myName;
  if (!n) { toast('Enter your name first'); $('#name') && $('#name').focus(); return null; }
  myName = n.slice(0, 16); store.set('name', myName, idStore);
  return myName;
}

async function createRoom() {
  if (!readName()) return;
  let code;
  for (let i = 0; i < 10; i++) { code = randomCode(); if (!(await db.get(`rooms/${code}/meta`))) break; }
  const now = db.now();
  await db.set(`rooms/${code}`, {
    meta: { host: me, createdAt: now },
    players: { [me]: { name: myName, joinedAt: now, online: true } },
    state: { status: 'lobby', mode: store.get('mode', 'full'), settings: { ...G.DEFAULT_SETTINGS, ...store.get('settings', {}) }, gameNo: 0 },
  });
  enterRoom(code);
}

async function joinRoom() {
  if (!readName()) return;
  const code = ($('#code').value || '').trim().toUpperCase();
  if (!/^[A-Z]{4}$/.test(code)) { toast('Codes are 4 letters'); return; }
  const r = await db.get(`rooms/${code}`);
  if (!r || !r.meta) { toast('No game with that code'); return; }
  const players = r.players || {};
  if (!players[me] && Object.keys(players).length >= 2) { toast('That game is already full'); return; }
  await db.update(`rooms/${code}/players/${me}`, { name: myName, joinedAt: (players[me] && players[me].joinedAt) || db.now(), online: true });
  enterRoom(code);
}

function enterRoom(code) {
  roomCode = code;
  if (!botMode) history.replaceState(null, '', '#' + code);
  ui.tried = []; ui.feedback = null; ui.pulseReady = false; ui.lastPulse = {};
  if (unsubRoom) unsubRoom();
  unsubRoom = db.on(roomPath(), v => {
    if (!v || !v.meta) { leaveRoom(true); toast('That game has ended'); return; }
    room = v;
    watchStats();
    watchPulses();
    render();
  });
  db.onConnected(connected => {
    if (!connected || !roomCode) return;
    db.onDisconnectSet(roomPath(`players/${me}/online`), false);
    db.update(roomPath(`players/${me}`), { online: true });
  });
}

async function leaveRoom(silent) {
  const code = roomCode;
  if (botMode) {
    if (unsubRoom) unsubRoom(); unsubRoom = null;
    if (unsubStats) unsubStats(); unsubStats = null; statsKey = null; stats = null;
    botMode = false; botPlan = null; db = mainDb; roomCode = null; room = null;
    render(); return;
  }
  if (unsubRoom) unsubRoom(); unsubRoom = null;
  if (unsubStats) unsubStats(); unsubStats = null; statsKey = null; stats = null;
  if (code && !silent && room && room.state && ['lobby', 'finished'].includes(room.state.status)) {
    await db.remove(`rooms/${code}/players/${me}`);
    const left = await db.get(`rooms/${code}/players`);
    if (!left) await db.remove(`rooms/${code}`);
  } else if (code && !silent) {
    await db.update(`rooms/${code}/players/${me}`, { online: false });
  }
  roomCode = null; room = null;
  history.replaceState(null, '', location.pathname + location.search);
  render();
}

function watchStats() {
  const ids = playerIds();
  if (ids.length < 2) return;
  const key = G.pairKey(ids[0], ids[1]);
  if (key === statsKey) return;
  if (unsubStats) unsubStats();
  statsKey = key;
  const pairs = store.get('pairs', []);
  if (!botMode && !pairs.includes(key)) store.set('pairs', [...pairs, key].slice(-10));
  unsubStats = db.on(`stats/${key}`, v => { stats = v; if (currentKey && currentKey.startsWith('final')) updateFinal(); });
}

function watchPulses() {
  const pulses = room.pulse || {};
  // First snapshot after joining: just remember existing pulses, don't flash them.
  for (const [id, p] of Object.entries(pulses)) {
    if (id === me || !p) continue;
    const prev = ui.lastPulse[id];
    ui.lastPulse[id] = p.t;
    if (ui.pulseReady && p.t !== prev && room.state.status === 'playing' && p.idx === room.state.idx) {
      ui.pulseName = nameOf(id); ui.pulseUntil = Date.now() + 1300;
    }
  }
  ui.pulseReady = true;
}

// ---------------- game actions (all shared writes are transactions) ----------------
function makeRound(cat, letter, startAt) {
  const answer = G.pickAnswer(cat, letter);
  return { letter, answer, order: G.revealOrder(answer), startAt };
}

async function startGame() {
  const ids = playerIds();
  if (ids.length < 2) { toast('Waiting for a second player'); return; }
  const key = G.pairKey(ids[0], ids[1]);
  const pairStats = (await db.get(`stats/${key}`)) || {};
  const { cat, reset } = G.pickCategory(pairStats.played || []);
  const settings = S();
  const letters = G.gameLetters(cat, room.state.mode, settings);
  const res = await db.transaction(roomPath('state'), cur => {
    if (!cur || cur.status === 'playing' || cur.status === 'result') return undefined;
    return {
      ...cur, status: 'playing', gameNo: (cur.gameNo || 0) + 1, categoryId: cat.id, letters, idx: 0,
      round: makeRound(cat, letters[0], db.now() + 3500), history: [], statsDone: false,
    };
  });
  if (res.committed && res.value) {
    await db.transaction(`stats/${key}/played`, cur => (reset || !cur ? [cat.id] : [...cur, cat.id]), { allowNull: true });
  }
}

async function claimWin(idx, who = me) {
  const res = await db.transaction(roomPath('state'), cur => {
    if (!cur || cur.status !== 'playing' || cur.idx !== idx || !cur.round || cur.round.winner) return undefined;
    const now = db.now();
    if (now < cur.round.startAt) return undefined;
    const settings = { ...G.DEFAULT_SETTINGS, ...(cur.settings || {}) };
    if (now > cur.round.startAt + settings.roundLength * 1000 + 500) return undefined;
    const points = G.pointsFor(now - cur.round.startAt, settings);
    return {
      ...cur, status: 'result',
      round: { ...cur.round, winner: who, points, resultAt: now },
      history: [...(cur.history || []), { letter: cur.round.letter, answer: cur.round.answer, winner: who, points }],
    };
  });
  return !!(res.committed && res.value && res.value.round && res.value.round.winner === who && res.value.idx === idx);
}

function timeoutRound(idx) {
  return db.transaction(roomPath('state'), cur => {
    if (!cur || cur.status !== 'playing' || cur.idx !== idx || cur.round.winner) return undefined;
    const settings = { ...G.DEFAULT_SETTINGS, ...(cur.settings || {}) };
    const now = db.now();
    if (now < cur.round.startAt + settings.roundLength * 1000) return undefined;
    return {
      ...cur, status: 'result', round: { ...cur.round, resultAt: now, points: 0 },
      history: [...(cur.history || []), { letter: cur.round.letter, answer: cur.round.answer, points: 0 }],
    };
  });
}

function advance(idx) {
  return db.transaction(roomPath('state'), cur => {
    if (!cur || cur.status !== 'result' || cur.idx !== idx) return undefined;
    const settings = { ...G.DEFAULT_SETTINGS, ...(cur.settings || {}) };
    const now = db.now();
    if (now < cur.round.resultAt + settings.resultPause * 1000) return undefined;
    if (idx + 1 >= cur.letters.length) return { ...cur, status: 'finished', finishedAt: now };
    const cat = G.CATEGORY_BY_ID[cur.categoryId];
    return { ...cur, status: 'playing', idx: idx + 1, round: makeRound(cat, cur.letters[idx + 1], now + 400) };
  });
}

async function recordStats() {
  const st = room.state, gameNo = st.gameNo;
  const ids = playerIds();
  if (ids.length < 2) return;
  const claim = await db.transaction(roomPath('state'), cur => {
    if (!cur || cur.status !== 'finished' || cur.gameNo !== gameNo || cur.statsDone) return undefined;
    return { ...cur, statsDone: true };
  });
  if (!claim.committed || !claim.value) return;
  const scores = G.scoresFrom(st.history, ids);
  const [a, b] = ids;
  const winner = scores[a] === scores[b] ? null : (scores[a] > scores[b] ? a : b);
  await db.transaction(`stats/${G.pairKey(a, b)}`, cur => {
    const s = cur || {};
    s.names = { ...(s.names || {}), [a]: nameOf(a), [b]: nameOf(b) };
    s.games = (s.games || 0) + 1;
    s.wins = s.wins || {};
    s.cats = s.cats || {};
    if (winner) {
      s.wins[winner] = (s.wins[winner] || 0) + 1;
      s.cats[st.categoryId] = s.cats[st.categoryId] || {};
      s.cats[st.categoryId][winner] = (s.cats[st.categoryId][winner] || 0) + 1;
    } else s.draws = (s.draws || 0) + 1;
    return s;
  }, { allowNull: true });
}

function attempt(key, fn) {
  const t = Date.now();
  if (attempts[key] && t - attempts[key] < 1500) return;
  attempts[key] = t;
  Promise.resolve(fn()).catch(e => console.warn(key, e));
}

// ---------------- guessing ----------------
async function submitGuess(text) {
  const st = room.state;
  if (st.status !== 'playing') return;
  const now = db.now();
  if (now < st.round.startAt) return;
  if (Date.now() < ui.lockUntil) { const g = $('#guess'); g.classList.remove('shake'); void g.offsetWidth; g.classList.add('shake'); return; }
  const r = G.checkGuess(catOf(st), st.round.letter, st.round.answer, text);
  if (r.result === 'empty') return;
  if (r.result === 'correct') {
    const idx = st.idx;
    const won = await claimWin(idx);
    if (!won) { ui.feedback = { kind: 'invalid', text: 'Too slow!' }; updatePlay(); }
    return;
  }
  if (r.result === 'nearmiss') {
    ui.feedback = { kind: 'near', text: 'Did you mean', suggestion: r.suggestion };
    updatePlay(); return;
  }
  ui.feedback = r.result === 'valid' ? { kind: 'valid', text: `✓ ${r.matched} is valid, but not it` } : { kind: 'invalid', text: `✗ Not valid` };
  if (r.result === 'valid' && !ui.tried.includes(r.matched)) ui.tried.push(r.matched);
  ui.lockUntil = Date.now() + S().lockout * 1000;
  ui.typed = '';
  db.set(roomPath(`pulse/${me}`), { t: db.now(), idx: st.idx });
  updatePlay();
}

// ---------------- tick ----------------
function tick() {
  if (!room || !room.state) return;
  const st = room.state, s = S(), now = db.now();
  if (st.status === 'playing' && st.round && !st.round.winner && now >= st.round.startAt + s.roundLength * 1000) {
    attempt(`to-${st.gameNo}-${st.idx}`, () => timeoutRound(st.idx));
  }
  if (st.status === 'result' && st.round && now >= (st.round.resultAt || 0) + s.resultPause * 1000) {
    attempt(`adv-${st.gameNo}-${st.idx}`, () => advance(st.idx));
  }
  if (st.status === 'finished' && !st.statsDone) attempt(`stats-${st.gameNo}`, recordStats);
  if (botMode) botTick();
  if (currentKey && currentKey.startsWith('play')) updatePlay();
  if (currentKey && currentKey.startsWith('result')) updateResult();
}

// ---------------- rendering ----------------
function screenKey() {
  if (!roomCode || !room || !room.state) return 'home';
  const st = room.state;
  if (st.status === 'lobby') return 'lobby';
  if (st.status === 'playing') return `play:${st.gameNo}:${st.idx}`;
  if (st.status === 'result') return `result:${st.gameNo}:${st.idx}`;
  if (st.status === 'finished') return `final:${st.gameNo}`;
  return 'home';
}

function render() {
  const key = screenKey();
  if (key !== currentKey) {
    currentKey = key;
    const kind = key.split(':')[0];
    ({ home: buildHome, lobby: buildLobby, play: buildPlay, result: buildResult, final: buildFinal })[kind]();
  }
  const kind = currentKey.split(':')[0];
  if (kind === 'lobby') updateLobby();
  if (kind === 'play') updatePlay();
  if (kind === 'result') updateResult();
  if (kind === 'final') updateFinal();
}

function scorebarHTML() {
  return `<header class="scorebar">
    <div class="pl me" id="pl-me"><span class="nm"></span><span class="sc">0</span></div>
    <div class="progress" id="progress"></div>
    <div class="pl them" id="pl-them"><span class="nm"></span><span class="sc">0</span></div>
  </header>`;
}

function updateScorebar() {
  const st = room.state, opp = opponentId();
  const scores = G.scoresFrom(st.history, playerIds());
  const set = (el, id) => {
    if (!el) return;
    el.querySelector('.nm').textContent = id ? nameOf(id) : '—';
    el.querySelector('.sc').textContent = id ? scores[id] || 0 : 0;
    el.classList.toggle('offline', !!(id && room.players[id] && room.players[id].online === false));
  };
  set($('#pl-me'), me); set($('#pl-them'), opp);
  const p = $('#progress');
  if (p && st.letters) p.textContent = `${st.idx + 1} / ${st.letters.length}`;
}

// ----- home -----
async function buildHome() {
  $('#app').innerHTML = `<main class="screen home">
    <h1 class="logo">ABC<span>Race</span></h1>
    <p class="tagline">Same letter, same category. First to the hidden answer wins.</p>
    <label>Your name<input id="name" maxlength="16" autocomplete="off" value="${esc(myName)}" placeholder="e.g. Luke"></label>
    <button id="create" class="primary">Create game</button>
    <div class="or">or join with a code</div>
    <div class="row">
      <input id="code" maxlength="4" placeholder="CODE" autocomplete="off" autocorrect="off" autocapitalize="characters" spellcheck="false">
      <button id="join">Join</button>
    </div>
    <button id="practice">Practice vs bot</button>
    <div class="records" id="records"></div>
    <div class="spacer"></div>
    ${hasFirebase ? '' : `<p class="note">Local test mode: Firebase isn't set up yet, so games only work between two tabs on this device. See SETUP.md to play across phones.</p>`}
  </main>`;
  $('#create').onclick = createRoom;
  $('#join').onclick = joinRoom;
  $('#practice').onclick = startPractice;
  $('#code').addEventListener('keydown', e => { if (e.key === 'Enter') joinRoom(); });
  // all-time records for pairs this device has played
  const pairs = store.get('pairs', []);
  const rows = [];
  for (const key of pairs.slice().reverse()) {
    const s = await db.get(`stats/${key}`);
    if (!s || !s.games) continue;
    const ids = key.split('_');
    const mine = ids.includes(me) ? me : null;
    const other = ids.find(i => i !== me);
    if (!mine) continue;
    const nm = (s.names && s.names[other]) || 'Opponent';
    rows.push(`<div class="record"><span>You vs ${esc(nm)}</span><b>${(s.wins && s.wins[me]) || 0} – ${(s.wins && s.wins[other]) || 0}${s.draws ? ` <span class="muted small">(${s.draws} drawn)</span>` : ''}</b></div>`);
  }
  const el = $('#records');
  if (el && currentKey === 'home') el.innerHTML = rows.join('');
}

// ----- lobby -----
function buildLobby() {
  const isHost = room.meta.host === me;
  const s = S();
  const field = (k, label, step = 1) => `<span>${label}</span><input type="number" inputmode="decimal" step="${step}" min="0" data-k="${k}" value="${s[k]}" ${isHost ? '' : 'disabled'}>`;
  $('#app').innerHTML = `<main class="screen lobby">
    ${botMode ? `<h2 class="center" style="margin-top:20px">Practice vs bot</h2>
    <p class="muted center small">Plays on this phone only. Nothing counts towards your record.</p>
    <div class="seg seg3" id="botspeed">${Object.entries(BOT_SPEEDS).map(([k, v]) => `<button data-speed="${k}">${v.label}</button>`).join('')}</div>`
    : `<p class="muted center">Game code</p>
    <div class="room-code">${esc(roomCode)}</div>
    <button id="share">Send invite link</button>`}
    <ul class="players" id="players"></ul>
    <div class="seg" id="mode">
      <button data-mode="full" ${isHost ? '' : 'disabled'}>A to Z</button>
      <button data-mode="quick" ${isHost ? '' : 'disabled'}>Quick 10</button>
    </div>
    <details>
      <summary>Timings</summary>
      <div class="timings">
        ${field('hintStart', 'Letter count appears after (s)')}
        ${field('revealEvery', 'Reveal a letter every (s)')}
        ${field('maxReveal', 'Max share of letters revealed', 0.1)}
        ${field('roundLength', 'Round ends after (s)')}
        ${field('resultPause', 'Answer shown for (s)')}
        ${field('lockout', 'Lockout after wrong guess (s)')}
      </div>
    </details>
    <div class="spacer"></div>
    ${isHost ? `<button id="start" class="primary">Start game</button>` : `<p class="center muted" id="waitmsg">Waiting for ${esc(nameOf(room.meta.host))} to start…</p>`}
    <button id="leave" class="link">Leave</button>
  </main>`;
  if (botMode) {
    document.querySelectorAll('#botspeed button').forEach(b => b.onclick = () => {
      store.set('botSpeed', b.dataset.speed);
      db.update(roomPath('state'), { botSpeed: b.dataset.speed });
    });
  } else $('#share').onclick = share;
  $('#leave').onclick = () => leaveRoom(false);
  if (isHost) {
    $('#start').onclick = startGame;
    document.querySelectorAll('#mode button').forEach(b => b.onclick = () => {
      store.set('mode', b.dataset.mode);
      db.update(roomPath('state'), { mode: b.dataset.mode });
    });
    document.querySelectorAll('.timings input').forEach(inp => inp.onchange = () => {
      const v = parseFloat(inp.value);
      if (!(v >= 0)) return;
      const settings = { ...S(), [inp.dataset.k]: v };
      store.set('settings', settings);
      db.update(roomPath('state'), { settings });
    });
  }
}

function updateLobby() {
  const ids = playerIds();
  const list = ids.map(id => `<li><span>${esc(nameOf(id))}${id === me ? ' <span class="muted small">(you)</span>' : ''}</span><span class="muted small">${room.meta.host === id ? 'host' : ''}</span></li>`);
  if (ids.length < 2) list.push(`<li class="waiting">Waiting for player 2… share the code</li>`);
  $('#players').innerHTML = list.join('');
  document.querySelectorAll('#mode button').forEach(b => b.classList.toggle('on', b.dataset.mode === (room.state.mode || 'full')));
  document.querySelectorAll('#botspeed button').forEach(b => b.classList.toggle('on', b.dataset.speed === (room.state.botSpeed || 'medium')));
  const st = $('#start'); if (st) st.disabled = ids.length < 2;
  if (room.meta.host !== me) {
    const s = S();
    document.querySelectorAll('.timings input').forEach(inp => { inp.value = s[inp.dataset.k]; });
  }
}

async function share() {
  const url = `${location.origin}${location.pathname}#${roomCode}`;
  const text = `Join my ABC Race game: code ${roomCode}`;
  try {
    if (navigator.share) { await navigator.share({ title: 'ABC Race', text, url }); return; }
    await navigator.clipboard.writeText(`${text} ${url}`);
    toast('Invite link copied');
  } catch { /* cancelled */ }
}

// ----- play -----
function buildPlay() {
  const st = room.state, cat = catOf(st);
  ui.tried = []; ui.feedback = null; ui.lockUntil = 0;
  $('#app').innerHTML = `<main class="screen play">
    ${scorebarHTML()}
    <div class="cat"><div class="cat-name">${esc(cat.name)}</div><div class="rule">${esc(cat.rule)}</div></div>
    <div class="big-letter" id="letter">${esc(st.round.letter)}</div>
    <div class="timer" id="timer"><div class="bar"></div></div>
    <div class="hint" id="hint"></div>
    <div class="guess-display" id="guess"><span class="txt" id="typed"></span><span class="caret"></span><span class="ph" id="ph">Type your answer</span></div>
    <div class="feedback" id="feedback"></div>
    <div class="tried" id="tried"></div>
    <div class="pulse" id="pulse"></div>
    <div class="kb" id="kb"></div>
  </main>`;
  ui.typed = ''; ui.digits = false;
  renderKeyboard();
  $('#feedback').addEventListener('pointerdown', e => {
    const b = e.target.closest('.suggest');
    if (b) { e.preventDefault(); ui.typed = b.dataset.v; submitGuess(b.dataset.v); }
  });
}

// ----- in-game keyboard (no phone keyboard, so no jumping and no autocorrect) -----
const KB_LETTERS = ['QWERTYUIOP', 'ASDFGHJKL', 'ZXCVBNM'];
const KB_DIGITS = ['1234567890', 'ASDFGHJKL', 'ZXCVBNM'];
function renderKeyboard() {
  const rows = ui.digits ? KB_DIGITS : KB_LETTERS;
  const key = (k, cls = '', label = k) => `<button type="button" class="key ${cls}" data-k="${esc(k)}">${label}</button>`;
  $('#kb').innerHTML = `
    <div class="kb-row">${[...rows[0]].map(c => key(c)).join('')}</div>
    <div class="kb-row">${[...rows[1]].map(c => key(c)).join('')}</div>
    <div class="kb-row">${[...rows[2]].map(c => key(c)).join('')}${key('back', 'wide', '⌫')}</div>
    <div class="kb-row">${key('digits', 'mid', ui.digits ? 'ABC' : '123')}${key(' ', 'space', 'space')}${key('go', 'go', 'Go')}</div>`;
  const kb = $('#kb');
  kb.onpointerdown = e => {
    const b = e.target.closest('.key');
    if (!b) return;
    e.preventDefault();
    pressKey(b.dataset.k);
    b.classList.add('down');
    if (b.dataset.k === 'back') ui.backHold = setTimeout(() => { ui.typed = ''; updatePlay(); }, 550);
  };
  const up = () => { clearTimeout(ui.backHold); kb.querySelectorAll('.down').forEach(x => x.classList.remove('down')); };
  kb.onpointerup = up; kb.onpointercancel = up; kb.onpointerleave = up;
}

function pressKey(k) {
  if (!room || room.state.status !== 'playing') return;
  if (k === 'go') { submitGuess(ui.typed); return; }
  if (k === 'digits') { ui.digits = !ui.digits; renderKeyboard(); return; }
  if (k === 'back') ui.typed = ui.typed.slice(0, -1);
  else if (k === ' ') { if (ui.typed && !ui.typed.endsWith(' ')) ui.typed += ' '; }
  else if (ui.typed.length < 40) ui.typed += k;
  if (ui.feedback && ui.feedback.kind !== 'near') ui.feedback = null;
  updatePlay();
}

// Physical keyboards (computer) still work
document.addEventListener('keydown', e => {
  if (!currentKey || !currentKey.startsWith('play') || e.metaKey || e.ctrlKey || e.altKey) return;
  if (document.activeElement && document.activeElement.tagName === 'INPUT') return;
  if (e.key === 'Enter') { e.preventDefault(); pressKey('go'); }
  else if (e.key === 'Backspace') { e.preventDefault(); pressKey('back'); }
  else if (e.key === ' ') { e.preventDefault(); pressKey(' '); }
  else if (/^[a-z0-9&'.-]$/i.test(e.key)) { e.preventDefault(); pressKey(e.key.toUpperCase()); }
});

let wasWaiting = false;
function updatePlay() {
  if (!room || room.state.status !== 'playing') return;
  const st = room.state, s = S(), now = db.now();
  updateScorebar();
  const elapsed = now - st.round.startAt;
  const letterEl = $('#letter');
  if (elapsed < 0) {
    letterEl.className = 'big-letter wait';
    letterEl.textContent = `Get ready… ${Math.ceil(-elapsed / 1000)}`;
    $('#hint').innerHTML = '';
    $('#timer .bar').style.width = '100%';
    wasWaiting = true;
    return;
  }
  if (wasWaiting || letterEl.classList.contains('wait')) {
    wasWaiting = false;
    letterEl.className = 'big-letter';
    letterEl.textContent = st.round.letter;
  }
  const remaining = Math.max(0, s.roundLength * 1000 - elapsed);
  $('#timer .bar').style.width = `${(remaining / (s.roundLength * 1000)) * 100}%`;
  $('#timer').classList.toggle('low', remaining < 15000);

  const h = G.hintState(elapsed, s, st.round.answer);
  let hintHTML;
  if (!h.showCount) {
    hintHTML = `<div class="hint-note">2 points up for grabs · hints in ${Math.ceil(h.nextIn / 1000)}s</div>`;
  } else {
    const words = G.maskTokens(st.round.answer, st.round.order, h.revealed);
    hintHTML = `<div class="mask">${words.map(w => `<div class="word">${w.map(c =>
      `<span class="ch ${c.isLetter ? (c.shown ? 'shown' : '') : 'punct'}">${c.shown ? esc(c.ch) : ''}</span>`).join('')}</div>`).join('')}</div>
      <div class="hint-note">${h.nextIn != null ? `Next letter in ${Math.ceil(h.nextIn / 1000)}s · ` : ''}1 point now</div>`;
  }
  const hint = $('#hint');
  if (hint.dataset.html !== hintHTML) { hint.innerHTML = hintHTML; hint.dataset.html = hintHTML; }

  const locked = Date.now() < ui.lockUntil;
  $('#guess').classList.toggle('locked', locked);
  const go = document.querySelector('.key.go');
  if (go) { go.textContent = locked ? `${Math.ceil((ui.lockUntil - Date.now()) / 1000)}s` : 'Go'; go.classList.toggle('locked', locked); }
  if ($('#typed').textContent !== ui.typed) $('#typed').textContent = ui.typed;
  $('#ph').style.display = ui.typed ? 'none' : '';

  const f = ui.feedback;
  let fHTML = '';
  if (f) fHTML = f.kind === 'near'
    ? `${esc(f.text)} <button type="button" class="suggest" data-v="${esc(f.suggestion)}">${esc(f.suggestion)}</button>?`
    : esc(f.text);
  const fb = $('#feedback');
  if (fb.dataset.html !== fHTML) { fb.innerHTML = fHTML; fb.dataset.html = fHTML; fb.className = `feedback ${f ? f.kind : ''}`; }
  const triedHTML = ui.tried.length ? `Tried: ${ui.tried.map(esc).join(', ')}` : '';
  if ($('#tried').innerHTML !== triedHTML) $('#tried').innerHTML = triedHTML;

  const pulse = $('#pulse');
  const on = Date.now() < ui.pulseUntil;
  pulse.textContent = on ? `${ui.pulseName} guessed ✗` : '';
  pulse.classList.toggle('on', on);
}

// ----- result -----
function buildResult() {
  const st = room.state, r = st.round;
  const who = r.winner ? (r.winner === me ? 'me' : 'them') : 'none';
  const line = r.winner ? `${esc(r.winner === me ? 'You' : nameOf(r.winner))} +${r.points}` : 'Nobody got it';
  $('#app').innerHTML = `<main class="screen result">
    ${scorebarHTML()}
    <div class="cat"><div class="cat-name">${esc(catOf(st).name)}</div></div>
    <div class="big-letter">${esc(r.letter)}</div>
    <div class="answer-label">The answer was</div>
    <div class="answer">${esc(r.answer)}</div>
    <div class="winner-line ${who}">${line}</div>
    <div class="spacer"></div>
    <div class="next" id="next"></div>
  </main>`;
  updateResult();
}

function updateResult() {
  if (!room || room.state.status !== 'result') return;
  updateScorebar();
  const st = room.state;
  const left = Math.max(0, Math.ceil(((st.round.resultAt || 0) + S().resultPause * 1000 - db.now()) / 1000));
  const last = st.idx + 1 >= st.letters.length;
  $('#next').textContent = last ? `Final scores in ${left}s` : `Next letter (${st.letters[st.idx + 1]}) in ${left}s`;
}

// ----- final -----
function buildFinal() {
  $('#app').innerHTML = `<main class="screen final">
    <div class="headline" id="headline"></div>
    <div class="final-scores" id="final-scores"></div>
    <div class="card" id="h2h"><h3>All-time</h3><div class="muted">Saving…</div></div>
    <div class="card" id="catwins"><h3>Wins by category</h3><div class="muted">—</div></div>
    <div class="spacer"></div>
    <button id="again" class="primary">Play again</button>
    <button id="leave" class="link">Leave</button>
  </main>`;
  $('#again').onclick = startGame;
  $('#leave').onclick = () => leaveRoom(false);
  updateFinal();
}

function updateFinal() {
  if (!room || room.state.status !== 'finished' || !$('#headline')) return;
  const st = room.state, opp = opponentId(), ids = playerIds();
  const scores = G.scoresFrom(st.history, ids);
  const mine = scores[me] || 0, theirs = opp ? scores[opp] || 0 : 0;
  $('#headline').textContent = mine === theirs ? "It's a draw!" : (mine > theirs ? 'You win!' : `${nameOf(opp)} wins!`);
  $('#final-scores').innerHTML = `<div class="me">${esc(nameOf(me))}<b>${mine}</b></div><div class="them">${esc(opp ? nameOf(opp) : '—')}<b>${theirs}</b></div>`;
  if (stats && opp) {
    const w = stats.wins || {};
    $('#h2h').innerHTML = `<h3>All-time</h3><table class="stat-table"><tr><td>${esc(nameOf(me))}</td><td class="n me">${w[me] || 0}</td></tr>
      <tr><td>${esc(nameOf(opp))}</td><td class="n them">${w[opp] || 0}</td></tr>
      ${stats.draws ? `<tr><td class="muted">Draws</td><td class="n">${stats.draws}</td></tr>` : ''}</table>`;
    const rows = Object.entries(stats.cats || {})
      .map(([id, c]) => ({ name: (G.CATEGORY_BY_ID[id] || { name: id }).name, a: c[me] || 0, b: c[opp] || 0 }))
      .sort((x, y) => (y.a + y.b) - (x.a + x.b));
    $('#catwins').innerHTML = `<h3>Wins by category</h3>${rows.length ? `<table class="stat-table">
      <tr><td class="muted small">Category</td><td class="n me small">${esc(nameOf(me))}</td><td class="n them small">${esc(nameOf(opp))}</td></tr>
      ${rows.map(r => `<tr><td>${esc(r.name)}</td><td class="n me">${r.a}</td><td class="n them">${r.b}</td></tr>`).join('')}</table>` : '<div class="muted">No category wins yet</div>'}`;
  }
}

// ---------------- practice bot ----------------
async function startPractice() {
  if (!readName()) return;
  botMode = true;
  db = createMemoryDb();
  const now = db.now();
  const code = 'PRAC';
  await db.set(`rooms/${code}`, {
    meta: { host: me, createdAt: now },
    players: {
      [me]: { name: myName, joinedAt: now, online: true },
      [BOT_ID]: { name: 'Bot', joinedAt: now + 1, online: true },
    },
    state: {
      status: 'lobby', mode: store.get('mode', 'full'), botSpeed: store.get('botSpeed', 'medium'),
      settings: { ...G.DEFAULT_SETTINGS, ...store.get('settings', {}) }, gameNo: 0,
    },
  });
  enterRoom(code);
}

function makeBotPlan(st) {
  const s = S();
  const sp = BOT_SPEEDS[st.botSpeed] || BOT_SPEEDS.medium;
  const answerAt = Math.random() < sp.miss ? null : (sp.min + Math.random() * (sp.max - sp.min)) * 1000;
  const end = Math.min(answerAt ?? s.roundLength * 1000, s.roundLength * 1000);
  const wrong = [];
  const n = Math.floor(Math.random() * 4); // 0 to 3 wrong guesses
  for (let i = 0; i < n; i++) wrong.push({ at: 2000 + Math.random() * Math.max(0, end - 3000), done: false });
  return { key: `${st.gameNo}-${st.idx}`, answerAt, wrong, done: false };
}

function botTick() {
  const st = room && room.state;
  if (!st || st.status !== 'playing' || !st.round) return;
  const key = `${st.gameNo}-${st.idx}`;
  if (!botPlan || botPlan.key !== key) botPlan = makeBotPlan(st);
  const elapsed = db.now() - st.round.startAt;
  if (elapsed < 0) return;
  for (const w of botPlan.wrong) {
    if (!w.done && elapsed >= w.at) { w.done = true; db.set(roomPath(`pulse/${BOT_ID}`), { t: db.now(), idx: st.idx }); }
  }
  if (!botPlan.done && botPlan.answerAt != null && elapsed >= botPlan.answerAt) {
    botPlan.done = true;
    claimWin(st.idx, BOT_ID);
  }
}
