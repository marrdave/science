# Science Kit Companion

A friendly, offline-capable web app for the "150 Fun Science Experiments" kit (sold as PATIFEED /
UNGLINGA and other brands). Built because the original booklet was lost. It is a **fan-made
companion, not the official manufacturer manual** — always have an adult nearby, age 8+.

Ships with **17 fully-written experiments** the kit genuinely supports, across Chemistry, Physics,
Earth Science and Life & Plants. It's a single self-contained HTML file plus a service worker, so
it's a PWA: it installs to a phone/tablet home screen and works with no signal. Progress (completed
experiments, favourites, notes, badges) is saved on the device.

## What's in it

- Browse / search / filter 17 experiments with difficulty, timings and supervision level
- **Step-by-step focus mode** with live countdown timers for the waiting steps
- Progress tracking with 12 badges and per-category completion
- **Certificate** generator (print / save as PDF) and **printables**: experiment checklist,
  equipment checklist, safety poster, observation sheet
- Export / import / reset progress from **More (Settings)**

## Run it locally

No build step — it's a static site. Serve the folder any way you like, e.g.:

```bash
python3 -m http.server 5173   # then open http://localhost:5173
```

(Opening `index.html` directly works too, but the service worker only registers over http/https.)

## Deploy to Vercel

The repo is a static site with no build. `vercel.json` sets `framework: null`, `buildCommand: null`
and `outputDirectory: "."`, so Vercel just serves the files. Push to the connected repo and it
deploys automatically; open the URL on the tablet and **Add to Home Screen**.

## Project map

```
index.html            ← the whole app: markup, styles, data (EXPERIMENTS) and logic
manifest.webmanifest  ← PWA metadata (name, icons, colours)
sw.js                 ← service worker: precache + offline (bump CACHE to force an update)
icons/                ← app icons (192 / 512)
favicon.svg
vercel.json           ← static-hosting config (no build)
```

## Add or edit an experiment

1. Open `index.html` and find the `EXPERIMENTS` array in the `<script>`.
2. Copy an existing object, give it the next `id` and a unique `slug`, and fill in the fields
   (`kit` / `home` items are `[name, amount]`; home items take a third `true` to render "(approx)").
   Step entries are `[text, seconds]` — `seconds` drives the focus-mode timer (`0` for no timer).
3. Keep amounts conservative. Mark anything you're estimating as approx rather than guessing; leave
   out anything you can't verify.
4. Bump `CACHE` in `sw.js` (e.g. `science-lab-v2`) so tablets fetch the new version, then push.

## How progress is stored

- Saved in the browser's `localStorage` on that one device (key `scienceLabState_v2`) — no accounts,
  no server, no tracking. It does **not** sync between devices.
- Use **More → Back up progress** for a JSON backup and **Restore progress** to move it to another
  device. Clearing that browser's data wipes progress.

## Safety

Every experiment carries a supervision level, safety notes and cleanup steps. General rules baked in:
adult supervision, safety glasses for reactions, never taste anything, never seal a fizzing
container, and keep water beads away from small children and pets.
