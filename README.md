# Science Kit Companion

A friendly, offline-capable web app for the "150 Fun Science Experiments" kit (sold as PATIFEED /
UNGLINGA and other brands). Built because the original booklet was lost. It is a **fan-made
companion, not the official manufacturer manual** — always have an adult nearby, age 8+.

Ships with **17 fully-written experiments** the kit genuinely supports, across Chemistry, Physics,
Earth Science and Life & Plants. It's a PWA, so it installs to a phone/tablet home screen and works
with no signal. Progress (completed experiments, favourites, notes, badges) is saved on the device.

## Run it locally

```bash
npm install
npm run dev      # opens http://localhost:5173
```

Build a production copy:

```bash
npm run build    # outputs to dist/
npm run preview  # serve the built copy locally
```

## Deploy to Vercel

1. Push this folder to a Git repo (GitHub/GitLab/Bitbucket).
2. In Vercel: **New Project → import the repo.** It auto-detects Vite —
   build command `npm run build`, output directory `dist`. No env vars needed.
3. Deploy. That URL is your app; open it on the tablet and **Add to Home Screen**.

Because `registerType: "autoUpdate"` is set, when you push new experiments and the tablet is online,
it quietly fetches the update and uses it on the next launch.

## Add or edit an experiment (the whole point of it growing)

1. Open `src/data/experiments.ts`.
2. Copy an existing object, give it the next `id` and a unique `slug`, and fill in the fields
   (see the `Experiment` type in `src/types.ts`).
3. Keep amounts conservative. If you're estimating a quantity, mark it `approx: true` so it renders
   with an "(approx)" note. For anything you can't verify, leave it out rather than guess.
4. Commit and push. The library, the "X of N" counter, and the milestone badges all update
   themselves — the top "Master Scientist" badge automatically re-pegs to the new total.

Categories are fixed to: `Chemistry`, `Physics`, `Earth Science`, `Life & Plants`. Add a new one in
`src/types.ts` (the `Category` union) and give it an accent colour in `src/styles.css` if you need
another.

## How progress is stored

- Saved in the browser's `localStorage` on that one device — no accounts, no server, no tracking.
- It does **not** sync between devices. One tablet = one shared progress list.
- Clearing that browser's data wipes progress. Use **Settings → Export progress** to keep a backup
  JSON, and **Import progress** to restore it.
- To move to synced, multi-child progress later, swap `src/lib/storage.ts` for a small backend
  (e.g. Supabase). Nothing else has to change — the app only ever touches `loadState`/`saveState`.

## Safety

Every experiment carries a supervision level, safety notes, and cleanup steps. General rules baked
into the app: adult supervision, goggles for reactions, never taste anything, never seal a fizzing
container, and keep water beads away from small children and pets. Use kit chemicals only while
sealed and clearly labelled.

## Project map

```
src/
  data/experiments.ts   ← the content (edit this to grow the library)
  data/meta.ts          ← achievements + equipment checklist
  types.ts              ← the data shapes
  lib/storage.ts        ← localStorage load/save (swap for a backend later)
  components/           ← Tile, Detail (focus-mode steps + timers), shared bits
  App.tsx               ← state, views, navigation
  styles.css            ← the design system
```
