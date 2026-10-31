# Mr Chait's One Minute MadneSS

Jamie Chait's own classroom study game (Knights Preparatory School, Randburg). Learners play Team Blue vs Team Red on school iPads (the Explainer describes words one at a time without saying them while their team guesses, one minute per turn), or study on their own with Beat the Clock (see the meaning, tap the word). It is Jamie's game, not a Knights product: Knights branding rules do not apply.

**Live:** https://jamiechait-cpu.github.io/oneminutemadness/ (GitHub Pages, `main` branch, root folder). Pushing to `main` updates every iPad automatically. Kids open the link in Safari and use Share → Add to Home Screen; the Mr Chait icon is the app icon.

## How it plays (agreed with Jamie)

**Red vs Blue match** (the kids' idea, 29 Oct 2026) is the main mode. The rolling round (28 Oct) is what each turn uses; the original version dealt fixed cards of 3 words, like the printed deck.

1. Home: Mr Chait + logo lockup, "Pick a deck", how-to-play steps, sound toggle.
2. Tapping a deck opens **How do you want to play?**: **TEAMS** (Red vs Blue) or **ON MY OWN** (Beat the Clock, below). TEAMS opens the **match setup**: blue Mr Chait VS red Mr Chait (red mirrored), "First to how many points?" (5 / 10 / 15 / 20 / 25, default 10), START MATCH. A small link underneath, "or just play in pairs (no teams)", runs the rolling round without teams.
3. **Team Blue always goes first**, then turns alternate Blue, Red, Blue... Each turn starts face down with "TEAM BLUE'S TURN" and that team's Mr Chait, and a team-coloured START. The top bar shows the match score (Blue pill, "FIRST TO 10", Red pill).
4. A turn is one minute of the rolling round: one word at a time. **GOT IT!** = 1 point. **SKIP** sends the word to the back of the pile. **Oops, undo** takes back the last tick. **HINT −10 sec** shows the hint and takes 10 seconds off the clock (`HINT_COST`); the word can still be ticked, it never costs twice, and the button is locked in the last 10 seconds. The score strip is in the team colour and shows "Match: 7 of 10 · 3 to win".
5. Time up: buzzer, "TIME'S UP!", the hint for the last word (locked). Then the team's Mr Chait says "BLUE GOT 6!" with a random line by score (`PRAISE`), and a **SCORE UPDATE** board pops up: both teams' bars grow to the new totals, a "+6" badge, and "Blue needs 3 more · Red needs 5 more". The button says "TEAM RED'S TURN".
6. **Winning is instant**: the moment a team's total reaches the target, mid-turn, the match ends. The win screen shows "BLUE WINS!" stamp, a bouncing team Mr Chait, "WHOOOHOOO! MADNESS!", confetti and a fanfare, and the final score.
7. Under that is the **score sheet**: points, turns, skips and hints per team, and each team's **words to study**. These are the words they skipped, ran out of time on, or needed a hint for, each with its hint as the meaning, tagged Skipped / Out of time / Needed a hint. Then REMATCH (same target) or "Pick a different deck".
8. In a match, the Decks button needs a second tap ("Tap again to quit") so nobody loses the score by accident. No pop-up dialogs.

Pairs (no teams) keeps the old result panel: "YOU GOT 7!", best this game, NEW BEST from round 2.

**ON MY OWN: Beat the Clock** (the kids asked to study alone, 29 Oct 2026). It is the game flipped round: the **hint (meaning) shows and they tap the word** from four buttons.
- Setup: Mr Chait "BEAT THE CLOCK!", topic chips ("All topics" or any mix; tapping a topic from "All" picks just that one; at least one stays on), "N words in play · Your best on this device: 12", START.
- 60 seconds. The three wrong options come from the same topic, so they can't guess by topic. Right = ding, +1, next; there's a streak line ("🔥 3 in a row!"). Wrong = the tapped button goes red, the right one goes green, a 1.4 s pause (that's the time penalty), and the word comes back about 3 questions later.
- Score sheet: "YOU GOT 9!" with a random line by score, NEW BEST ribbon and confetti; stats (right, wrong, accuracy, best streak); **words to study** (each wrong word with "You picked: …", its meaning, and "Got it later ✓" if they fixed it); "You knew these" chips; PLAY AGAIN or Change topics.
- Personal best is saved on the device in localStorage (`omm-best-<deck>-<topic keys>`), just a number, no names.

**Cycle test practice: Test Practice** (Jamie's idea, 31 Oct 2026): a learner redoes one of Jamie's cycle tests on their own. It has its own "Cycle test practice" section on the home screen, under the decks.
- Each written test question became 1 or 2 tap-the-answer questions (4 options, or 2 for weather/climate), in test order, with **no clock**. Pick sections or the whole test.
- After every tap, the **memo line** shows, right or wrong ("NOT QUITE · Answer: …"), then NEXT. Missed questions come back for another go at the end, until all are right.
- Score = **right first time** out of the total; best is kept on the device (`omm-best-<test id>-<section keys>`). The test sheet lists **questions to revise** by section (what they picked, the answer, the memo line), then JUST MY MISTAKES (redo only those; doesn't count for the best), redo the whole thing, or change sections.
- Files: `src/tests/*.js`, one per test: `const TEST_xxx = { id, title, sub, short, sections: { KEY: { name, c, t } }, qs: [[section, 'Q3', question, right answer, [wrong answers], memo line], ...] }`. Section keys reuse the matching deck's topic keys (same icon and colour). Add new ones to `const TESTS = [...]`. The build checks each question has a memo and 1 to 3 wrong answers, none repeated, and that its pictures exist.
- **Grade 6 SS Term 3 cycle test** (`g6ss-ct3`, 42 questions: Explorers 12, Population 23, Climate 7). Jamie: astrolabe was not taught (left out); "carols might rain" is **climate**; Section B Q8 (where would you live) left out: no right answer. The test's graph questions (Q10–11) **compared an expansive and a constrictive population pyramid**, like his "Reading Population Pyramids" task, so they are 12 questions on that task's Pyramid A (expansive) and Pyramid C (constrictive), with the pyramids on screen (labelled "Test: population pyramids").
- Pictures: a test can have `pics: { A: '__TESTIMG_<file>__' }` (the build inlines `src/assets/tests/<file>.png`), and a question's 7th field lists the pictures to show, e.g. `['A', 'C']`. Tap a picture to zoom; tap anywhere to close. 2 or 3 options are allowed (shape names, grow/shrink); they keep a fixed alphabetical order.
- Usage counter event: `test/<test id>`, titled "Test practice: Grade 6 SS Cycle Test (Term 3)".

Decisions: words are dealt from the whole shuffled deck, never the same topic twice in a row, no repeats until the deck runs out; the match lives only in memory; the only things kept in localStorage are the sound on/off choice and the solo personal-best numbers (no names, nothing about learners); no login; screen kept awake during a turn. Team colours: blue #1E63E0 (dark #0F3C99, tint #E3ECFD), red #E6262E (dark #9A1117, tint #FDE4E5). On phones under 400px wide the top-bar chips drop their text labels.

## Usage counter (GoatCounter)

Jamie asked (30 Oct 2026) to see how many times the game is opened per day. It uses **GoatCounter**: free for non-commercial use, no cookies, nothing about learners.
- Live code: `mrchait` (dashboard https://mrchait.goatcounter.com, Jamie's account). Switch: `GOATCOUNTER = '<site code>'` at the top of `tools/build.py`, then rebuild. Empty = no counter at all. The build adds GoatCounter's `count.js` (from gc.zgo.at) to the head; the dashboard is `https://<code>.goatcounter.com`.
- Counted: every open (page view `/`), plus one event per game started: `teams/<deck id>`, `solo/<deck id>` (On my own), `pairs/<deck id>`, titled e.g. "Teams: Grade 7 Social Sciences". REMATCH and PLAY AGAIN count as new games.
- `track()` in `src/app.src.html` does nothing if the script isn't loaded (no code, offline, or blocked by a school filter), so the game never depends on it. Offline plays aren't counted.

## Files

- `index.html`: the built, self-contained game (fonts, character and icon all inlined; works offline). **Never edit by hand; rebuild it.**
- `src/app.src.html`: the app (HTML/CSS/JS). Placeholders `/*DECKS*/` and `__CHAIT__` are filled by the build.
- `src/decks/*.js`: one file per deck. Each defines `const DECK_xxx = { id, title, short, topics: { KEY: { name, c (colour), t (tint) } }, words: [[topicKey, word, hint], ...] }`. Add new decks to `const DECKS = [...]` in `src/app.src.html` and remove the matching entry from `COMING`.
- `src/assets/`: `chait-original.png` (Jamie's character as he supplied it), `chait-sticker.png` (cut out with white sticker outline, used in the game), `chait-blue-original.png` / `chait-red-original.png` (Jamie's team versions) and their `-sticker.png` cut-outs (placeholders `__CHAIT_BLUE__`, `__CHAIT_RED__`), `app-icon.png` (180×180 home-screen icon).
- `src/fonts/`: Luckiest Guy (display) and Nunito 700/800/900 (body).
- `tools/build.py`: `python3 tools/build.py` checks every hint and every test question, and writes `index.html`. Needs Python 3 + Pillow, and Node.

## Rules for decks and hints

- Words come only from what Jamie actually taught (his notes / exam sections). Keep each word short enough for one or two lines on a phone.
- A hint must **never contain the word or any part of it** (the build blocks this). Hints are 1–2 plain sentences a Grade 6 can read, written so the Explainer can use them to describe the word.
- Jamie checks new hints before the kids see them: send him the list first.
- Topic colours used so far: Explorers #F07F1E, Population #1FA463, Climate #2389D6, Democracy #8A3FB5, Medicine #E0303F; The Cape #0E9F9A, Disasters #E8562A, Slave Trade #4C5FD5; Money Words #1FA463, Costs & Prices #F07F1E, Budgets & Saving #2389D6, Business #8A3FB5, Marketing #E0306E.
- Topic keys are single letters and must be unique across ALL decks, because each key has its own icon in `ICONS` in `src/app.src.html` (used: E P C D M, K Q S, A R B N Y). A new topic needs a new key and a new icon.
- New decks go on a branch first; merge to `main` only after Jamie has approved the hints.

## Current decks

- **Grade 6 Social Sciences** (`g6ss`, 90 words): Explorers 18, Population 18, Climate 18, Democracy 20, Medicine 16. Matches his Grade 6 SS exam sections.
- **Grade 7 Social Sciences** (`g7ss`, 73 words): The Cape 23, Disasters 27, Slave Trade 23. Matches the Nov 2026 Grade 7 SS exam sections. Not taught, so left out: frontier wars, hurricanes, tornadoes, slavery at the Cape, trekboers.
- **Grade 7 EMS** (`g7ems`, 74 words): Money Words 14, Costs & Prices 11, Budgets & Saving 14, Business 17, Marketing 18. Only Financial Literacy and Entrepreneurship, the two strands Jamie chose for the Nov 2026 EMS exam (no Economy strand).
- Long words (any part over 9 letters) get a slightly smaller font on phones (`.word.long`) so they wrap between words, not mid-word.

## Look

Deep purple sunburst world (#241A4D), sunshine yellow #FFD23F, hot pink #FF4F9A; "MR CHAIT'S" in a tilted pink tag over "ONE MINUTE" (yellow) and "MADNESS" with a big pink **SS** (the SS stands for Social Sciences). Mr Chait (cap, beard, black hoodie, blue sneakers, thumbs up) appears in the logo lockup, on the card back, in the card header and in the end-of-round result panel. In a match, the blue or red Mr Chait replaces him for that team's turn, result and win screen.

## Ideas Jamie has liked / next steps

- Done: Test Practice for the Grade 6 SS Term 3 cycle test (31 Oct). Next tests the same way: Jamie sends the paper + memo.
- Done: random Mr Chait lines by score, the rolling round, the hint button, the Red vs Blue match with score sheet and words to study (live 29 Oct), ON MY OWN Beat the Clock.
- Planned: picture words. Jamie is making simple AI images (square, white background, no text) named after the word; about one word in four shows the picture with the word in small text underneath, so the partner still says the exact term.
- Possible next: give Red one last turn when Blue wins first (equal turns), or a class leaderboard.
- Also made (outside the repo): an A4 "SCAN ME!" QR poster in the game's style that opens the live link.

## Printed version

There is also a printed, laminated card version (30 cards, 6 per A4, card backs and a How to Play/scoreboard sheet) made from the same 90 words. It was built outside this repo; if Jamie wants a new printed deck, rebuild it to match.
