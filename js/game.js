// Pure game logic: no DOM, no network. Shared by the app and the tests.
import { PLACES_THINGS } from './categories-places-things.js';
import { PEOPLE_FUN } from './categories-people-fun.js';
import { MORE } from './categories-more.js';

export const LETTERS = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');
export const MIN_ANSWERS = 3;

export const DEFAULT_SETTINGS = {
  hintStart: 15,    // seconds before the letter count appears (and the 2-point window closes)
  revealEvery: 10,  // seconds between each extra revealed letter
  maxReveal: 0.6,   // never reveal more than this share of the letters
  roundLength: 90,  // seconds before the round ends with no winner
  resultPause: 5,   // seconds the answer is shown before the next letter
  lockout: 2,       // seconds locked out after a wrong guess
  quickLetters: 10, // letters in a quick game
  teamNeed: 2,      // team mode: different answers needed per letter
  skipPenalty: 20,  // team mode: seconds added for skipping a letter
};

// ---------- text matching ----------

export function normalise(str) {
  let s = String(str || '')
    .normalize('NFD').replace(/[̀-ͯ]/g, '')
    .toLowerCase()
    .replace(/&/g, ' and ')
    .replace(/[^a-z0-9 ]+/g, ' ')
    .replace(/\s+/g, ' ')
    .trim();
  s = s.replace(/^the /, '');
  if (/^a \S+ \S/.test(s)) s = s.replace(/^a /, '');
  return s.replace(/ /g, '');
}

export function levenshtein(a, b) {
  if (a === b) return 0;
  if (!a.length) return b.length;
  if (!b.length) return a.length;
  let prev = Array.from({ length: b.length + 1 }, (_, i) => i);
  for (let i = 1; i <= a.length; i++) {
    const cur = [i];
    for (let j = 1; j <= b.length; j++) {
      cur[j] = Math.min(prev[j] + 1, cur[j - 1] + 1, prev[j - 1] + (a[i - 1] === b[j - 1] ? 0 : 1));
    }
    prev = cur;
  }
  return prev[b.length];
}

function typoAllowance(len) {
  if (len <= 4) return 1;
  if (len <= 9) return 2;
  return 3;
}

// ---------- categories ----------

function surnameAliases(name, letter) {
  const words = name.replace(/^the\s+/i, '').split(/\s+/);
  if (words.length < 2) return [];
  const out = [words.slice(1).join(' '), words[words.length - 1]];
  // Only keep aliases that still start with the right letter (Sheeran for S, not "Girls" for Spice Girls)
  return out.filter(a => normalise(a).startsWith(letter.toLowerCase()));
}

export function parseCategory(raw) {
  const letters = {};
  for (const line of raw.data.split('\n')) {
    const m = line.match(/^\s*([A-Z]):(.*)$/);
    if (!m) continue;
    const letter = m[1];
    const [wellPart, obscurePart = ''] = m[2].split('|');
    const entries = [];
    const add = (part, well) => {
      for (const item of part.split(',')) {
        const names = item.split('/').map(s => s.trim()).filter(Boolean);
        if (!names.length) continue;
        const display = names[0];
        const aliasNames = [...names];
        if (raw.people) aliasNames.push(...surnameAliases(display, letter));
        const keys = [...new Set(aliasNames.map(normalise).filter(Boolean))];
        entries.push({ name: display, keys, well });
      }
    };
    add(wellPart, true);
    add(obscurePart, false);
    letters[letter] = entries;
  }
  return { id: raw.id, name: raw.us && !/\bUS\b/.test(raw.name) ? `${raw.name} (US)` : raw.name, rule: raw.rule || '', us: !!raw.us, letters };
}

export const CATEGORIES = [...PLACES_THINGS, ...PEOPLE_FUN, ...MORE].map(parseCategory);
export const CATEGORY_BY_ID = Object.fromEntries(CATEGORIES.map(c => [c.id, c]));

export function playableLetters(cat, minAnswers = MIN_ANSWERS) {
  return LETTERS.filter(l => {
    const e = cat.letters[l] || [];
    return e.length >= Math.max(MIN_ANSWERS, minAnswers) && e.some(x => x.well);
  });
}

// ---------- guesses ----------

// Returns { result: 'correct' | 'valid' | 'invalid' | 'nearmiss', suggestion?, matched? }
export function checkGuess(cat, letter, hiddenName, guess) {
  const g = normalise(guess);
  if (!g) return { result: 'empty' };
  const entries = cat.letters[letter] || [];
  const hidden = entries.find(e => e.name === hiddenName);

  if (hidden && hidden.keys.includes(g)) return { result: 'correct', matched: hidden.name };
  const exact = entries.find(e => e.keys.includes(g));
  if (exact) return { result: 'valid', matched: exact.name };

  // Near miss: closest valid answer for this letter, within a small typo allowance.
  let best = null;
  for (const e of entries) {
    for (const k of e.keys) {
      const d = levenshtein(g, k);
      if (d <= typoAllowance(k.length) && (!best || d < best.d)) best = { d, name: e.name };
    }
  }
  if (best) return { result: 'nearmiss', suggestion: best.name };
  return { result: 'invalid' };
}

// ---------- rounds and hints ----------

export function pickAnswer(cat, letter, rand = Math.random) {
  const well = (cat.letters[letter] || []).filter(e => e.well);
  return well[Math.floor(rand() * well.length)].name;
}

export function letterPositions(name) {
  const pos = [];
  [...name].forEach((ch, i) => { if (/[A-Za-z0-9À-ɏ]/.test(ch)) pos.push(i); });
  return pos;
}

export function revealOrder(name, rand = Math.random) {
  const pos = letterPositions(name);
  for (let i = pos.length - 1; i > 0; i--) {
    const j = Math.floor(rand() * (i + 1));
    [pos[i], pos[j]] = [pos[j], pos[i]];
  }
  return pos;
}

// elapsed in ms since the round started
export function hintState(elapsed, settings, name) {
  const s = settings;
  const total = letterPositions(name).length;
  const cap = Math.floor(total * s.maxReveal);
  const showCount = elapsed >= s.hintStart * 1000;
  let revealed = 0;
  if (showCount) revealed = Math.min(cap, Math.floor((elapsed - s.hintStart * 1000) / (s.revealEvery * 1000)));
  let nextIn = null;
  if (!showCount) nextIn = s.hintStart * 1000 - elapsed;
  else if (revealed < cap) nextIn = s.hintStart * 1000 + (revealed + 1) * s.revealEvery * 1000 - elapsed;
  return { showCount, revealed, cap, nextIn };
}

// Returns an array of words, each an array of { ch, shown, isLetter }
export function maskTokens(name, order, revealedCount) {
  const shown = new Set(order.slice(0, revealedCount));
  const words = [];
  let cur = [];
  [...name].forEach((ch, i) => {
    if (ch === ' ') { if (cur.length) words.push(cur); cur = []; return; }
    const isLetter = /[A-Za-z0-9À-ɏ]/.test(ch);
    cur.push({ ch, isLetter, shown: !isLetter || shown.has(i) });
  });
  if (cur.length) words.push(cur);
  return words;
}

export function pointsFor(elapsed, settings) {
  return elapsed < settings.hintStart * 1000 ? 2 : 1;
}

export function gameLetters(cat, mode, settings, rand = Math.random, minAnswers = MIN_ANSWERS) {
  const all = playableLetters(cat, minAnswers);
  if (mode !== 'quick' || all.length <= settings.quickLetters) return all;
  const pool = [...all];
  for (let i = pool.length - 1; i > 0; i--) {
    const j = Math.floor(rand() * (i + 1));
    [pool[i], pool[j]] = [pool[j], pool[i]];
  }
  return pool.slice(0, settings.quickLetters).sort();
}

export function scoresFrom(history, playerIds) {
  const scores = Object.fromEntries(playerIds.map(id => [id, 0]));
  for (const h of history || []) if (h.winner && h.winner in scores) scores[h.winner] += h.points || 0;
  return scores;
}

export function pickCategory(playedIds, rand = Math.random) {
  let pool = CATEGORIES.filter(c => !(playedIds || []).includes(c.id));
  let reset = false;
  if (!pool.length) { pool = CATEGORIES; reset = true; }
  return { cat: pool[Math.floor(rand() * pool.length)], reset };
}

export function pairKey(a, b) {
  return [a, b].sort().join('_');
}

// Stats key for whoever is in the room: the pair, or a single player on their own
export function statsKeyFor(ids) {
  if (ids.length >= 2) return pairKey(ids[0], ids[1]);
  return `solo_${ids[0]}`;
}

export function fmtTime(ms) {
  const t = Math.max(0, Math.round(ms / 1000));
  return `${Math.floor(t / 60)}:${String(t % 60).padStart(2, '0')}`;
}
