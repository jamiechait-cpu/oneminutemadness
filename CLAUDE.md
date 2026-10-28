# Mr Chait's One Minute MadneSS

Jamie Chait's own classroom study game (Knights Preparatory School, Randburg). Learners play in pairs on school iPads: the Explainer describes three words without saying them while their partner guesses, against a one-minute timer. It is Jamie's game, not a Knights product: Knights branding rules do not apply.

**Live:** https://jamiechait-cpu.github.io/oneminutemadness/ (GitHub Pages, `main` branch, root folder). Pushing to `main` updates every iPad automatically. Kids open the link in Safari and use Share → Add to Home Screen; the Mr Chait icon is the app icon.

## How it plays (agreed with Jamie)

Rolling round (Jamie's change, 28 Oct 2026; the earlier version dealt fixed cards of 3 words, like the printed deck):

1. Home: Mr Chait + logo lockup, "Pick a deck", how-to-play steps, sound toggle.
2. Each round starts face down (card back + START), so the partner can't peek while the iPad is handed over.
3. START flips the card and starts the 60-second ring timer (ticking in the last 10 seconds). **One word at a time** appears, with a yellow "GOT SO FAR" score strip.
4. **GOT IT!** = partner guessed it (ding, score +1, word added as a green chip, next word slides in). **SKIP** passes a stuck word (it goes to the back of the pile and comes round again later). **Oops, undo** brings back the last ticked word and takes the point off. **HINT −10 sec** (yellow pill under the word) shows that word's hint during the round and takes 10 seconds off the clock (`HINT_COST`); the word can still be ticked, the same word never costs twice (undo keeps it shown), the button greys out in the last 10 seconds, and words got with a hint carry a little bulb on their chip. The result panel shows "Hints used: N (−N0 sec)".
5. Time up: buzzer, card shakes, "TIME'S UP!" stamp. The word they were on shows its **hint** with a lock: they finish explaining it but it doesn't count.
6. Result panel: Mr Chait with a speech bubble, "YOU GOT 7!", a random line picked by score tier (`PRAISE` in `src/app.src.html`: 0, 1+, 3+, 6+, 9+, 12+), "Best this game", a NEW BEST ribbon from round 2 on, and chips for every word got (green) and skipped (crossed out). Confetti and fanfare for 5+ or a new best.
7. NEXT ROUND = swap roles.

Decisions: words are dealt one at a time from the whole shuffled deck, never the same topic twice in a row, no repeats until the deck runs out; "best this game" lives only in memory (resets when they pick a deck), so nothing about learners is stored (only the sound on/off choice in localStorage); sound on by default with a mute toggle; no login; screen kept awake during a round. On phones under 400px wide the top-bar chips drop their text labels.

## Files

- `index.html`: the built, self-contained game (fonts, character and icon all inlined; works offline). **Never edit by hand; rebuild it.**
- `src/app.src.html`: the app (HTML/CSS/JS). Placeholders `/*DECKS*/` and `__CHAIT__` are filled by the build.
- `src/decks/*.js`: one file per deck. Each defines `const DECK_xxx = { id, title, short, topics: { KEY: { name, c (colour), t (tint) } }, words: [[topicKey, word, hint], ...] }`. Add new decks to `const DECKS = [...]` in `src/app.src.html` and remove the matching entry from `COMING`.
- `src/assets/`: `chait-original.png` (Jamie's character as he supplied it), `chait-sticker.png` (cut out with white sticker outline, used in the game), `app-icon.png` (180×180 home-screen icon).
- `src/fonts/`: Luckiest Guy (display) and Nunito 700/800/900 (body).
- `tools/build.py`: `python3 tools/build.py` checks every hint and writes `index.html`. Needs Python 3 + Pillow, and Node.

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

Deep purple sunburst world (#241A4D), sunshine yellow #FFD23F, hot pink #FF4F9A; "MR CHAIT'S" in a tilted pink tag over "ONE MINUTE" (yellow) and "MADNESS" with a big pink **SS** (the SS stands for Social Sciences). Mr Chait (cap, beard, black hoodie, blue sneakers, thumbs up) appears in the logo lockup, on the card back, in the card header and in the end-of-round result panel.

## Ideas Jamie has liked / next steps

- Done: random Mr Chait lines by score, and a per-round score (the rolling round).
- Possible next: a team/class leaderboard, or a two-team match mode (the printed version used: 1 point per word, +1 MadneSS bonus for all 3, first to 15 wins).

## Printed version

There is also a printed, laminated card version (30 cards, 6 per A4, card backs and a How to Play/scoreboard sheet) made from the same 90 words. It was built outside this repo; if Jamie wants a new printed deck, rebuild it to match.
