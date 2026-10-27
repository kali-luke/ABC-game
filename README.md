# ABC Race

An ABC category game for phones, with three modes:

- **Solo**: practise against a bot on one phone.
- **Versus**: both phones get the same category and letter, and you race to type the one hidden answer.
- **Team**: work together to find 2 different answers for every letter, against the clock. Skipping a letter adds 20 seconds. Best times are saved per category.

Versus rules:

- First to the hidden answer scores: 2 points before any hints, 1 point after.
- After 15 seconds the letter count appears, then a letter is revealed every 10 seconds (up to 60%).
- Wrong guesses lock you out for 2 seconds; guesses stay private.
- 25 categories, full A to Z or a quick 10-letter game, with all-time head-to-head and wins per category.

Setup steps are in [SETUP.md](SETUP.md).

## Editing the categories

The answer lists live in `js/categories-places-things.js` and `js/categories-people-fun.js`. Each letter is one line:

```
A: Audi, Aston Martin/Aston, Alfa Romeo/Alfa | Acura, Alpine
```

- Left of `|` are well-known answers. These can be picked as the hidden answer.
- Right of `|` are obscure answers. They count as valid but are never the hidden answer.
- `/` adds other spellings that also count (`United Kingdom/UK`).
- A letter with fewer than 3 answers is skipped.

## Files

- `index.html`, `style.css`: the page
- `js/app.js`: screens and game flow
- `js/game.js`: matching, hints and scoring (no network)
- `js/db.js`: Firebase sync, with a local two-tab mode when Firebase isn't configured
- `js/firebase-config.js`: your Firebase settings
