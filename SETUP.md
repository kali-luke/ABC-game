# Setting up ABC Race

Two parts: GitHub Pages hosts the app, and Firebase syncs the two phones. Both are free.

## 1. Turn on GitHub Pages

1. On GitHub, open the `abc-game` repo and go to **Settings → Pages**.
2. Under **Source**, choose **Deploy from a branch**, pick `main` and `/ (root)`, then **Save**.
3. After a minute the game is live at `https://kali-luke.github.io/abc-game/`.

Until Firebase is set up, the game runs in **local test mode**: it only works between two tabs on the same device.

## 2. Set up Firebase (about 5 minutes)

1. Go to <https://console.firebase.google.com> and sign in with a Google account.
2. **Create a project**, name it `abc-game`. You can turn Google Analytics off.
3. In the left menu open **Build → Realtime Database → Create database**.
   - Location: **Belgium (europe-west1)**.
   - Start in **locked mode**.
4. Open the **Rules** tab, replace everything with the contents of `database.rules.json` from this repo, and press **Publish**.
5. Click the **gear icon → Project settings**. Under **Your apps**, click the **web icon `</>`**, name it `abc-game` (leave Hosting unticked) and click **Register app**.
6. Firebase shows a `firebaseConfig` block. Copy it into `js/firebase-config.js` (replacing the commented lines), or send it to Claude to do it for you. It is safe to commit: Firebase web config is public by design.

Make sure the config includes a `databaseURL` line. If it doesn't, copy the URL shown at the top of the Realtime Database page (it looks like `https://abc-game-xxxx-default-rtdb.europe-west1.firebasedatabase.app`).

## Playing

- One person taps **Create game** and sends the invite link (or the 4-letter code).
- The other opens the link or types the code and taps **Join**.
- On your phone, use **Add to Home Screen** in the browser menu so it opens like an app.

## Notes

- The rules let anyone who knows a game code read and write that game. That's fine for playing at home; tighten them if you ever make it public.
- If a phone locks mid-game, reopen the page: it rejoins automatically.
