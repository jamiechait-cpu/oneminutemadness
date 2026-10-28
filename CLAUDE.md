# Mr Chait's One Minute MadneSS

Jamie Chait's own classroom study game (Knights Preparatory School, Randburg). Learners play in pairs on school iPads: the Explainer describes three words without saying them while their partner guesses, against a one-minute timer. It is Jamie's game, not a Knights product: Knights branding rules do not apply.

**Live:** https://jamiechait-cpu.github.io/oneminutemadness/ (GitHub Pages, `main` branch, root folder). Pushing to `main` updates every iPad automatically. Kids open the link in Safari and use Share → Add to Home Screen; the Mr Chait icon is the app icon.

## How it plays (agreed with Jamie)

1. Home: Mr Chait + logo lockup, "Pick a deck", how-to-play steps, sound toggle.
2. Each round starts face down (card back + START). Words are only shown after START, so the partner can't peek while the iPad is handed over.
3. START flips the card and starts the 60-second ring timer (ticking in the last 10 seconds).
4. Each of the 3 words has a tick button. Tapping it = partner guessed it (ding). Tapping again undoes a mistake.
5. All 3 ticked: round ends with "MADNESS! ALL 3!", fanfare, confetti, and Mr Chait pops up ("MadneSS! Legends!").
6. Time up: buzzer, card shakes, every un-ticked word reveals its **hint** and its tick becomes a lock. They may keep describing with the hint but cannot tick it. Mr Chait pops up ("Use the hint! Keep going!").
7. NEXT ROUND deals a new face-down card.

Decisions: **no points/scoring yet** (Jamie wants to trial it first, then maybe add scoring); words are **shuffled into fresh cards every game** (each card = 3 words from 3 different topics, no repeats until the deck runs out); sound on by default with a mute toggle; no login and nothing about learners is stored (only the sound on/off choice in localStorage); screen kept awake during a round.

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
- Topic colours used so far: Explorers #F07F1E, Population #1FA463, Climate #2389D6, Democracy #8A3FB5, Medicine #E0303F.

## Current decks

- **Grade 6 Social Sciences** (`g6ss`, 90 words): Explorers 18, Population 18, Climate 18, Democracy 20, Medicine 16. Matches his Grade 6 SS exam sections.
- Coming soon (shown greyed out on the home screen): Grade 7 Social Sciences, Grade 7 EMS.

## Look

Deep purple sunburst world (#241A4D), sunshine yellow #FFD23F, hot pink #FF4F9A; "MR CHAIT'S" in a tilted pink tag over "ONE MINUTE" (yellow) and "MADNESS" with a big pink **SS** (the SS stands for Social Sciences). Mr Chait (cap, beard, black hoodie, blue sneakers, thumbs up) appears in the logo lockup, on the card back, in the card header and in end-of-round pop-ups.

## Ideas Jamie has liked / next steps

- More Mr Chait catchphrases, picked at random, so the pop-ups don't get stale.
- Points/scoring once he has trialled it (the printed version used: 1 point per word, +1 MadneSS bonus for all 3, first to 15 wins).
- New decks: Grade 7 SS, Grade 7 EMS.

## Printed version

There is also a printed, laminated card version (30 cards, 6 per A4, card backs and a How to Play/scoreboard sheet) made from the same 90 words. It was built outside this repo; if Jamie wants a new printed deck, rebuild it to match.
