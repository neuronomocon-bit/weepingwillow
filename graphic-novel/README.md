# Weeping Willow: The Absence — Graphic Novel (Pilot)

A standalone adaptation project. **It reads Book 1 and never edits it.** Nothing in this folder is read by any tool in the parent project, and nothing outside this folder is changed by anything in it.

## Status

**Pilot: Chapter 1, "The Gap."** Black-and-white gothic horror ink. Art generated with ChatGPT's image model; script, layout, lettering and drift control done here.

## The one rule this folder borrows from the novel project

**One source of truth.** Every panel lives in exactly one place: `ch01-the-gap/panels.js`. The readable script, the prompt list and the lettered page layout are all **generated** from it by `build.js`. Never hand-edit the generated files; edit `panels.js` and rebuild.

```
node graphic-novel/build.js            # -> script.md, prompts.md, pages.html
```

Open `ch01-the-gap/pages.html` in a browser to read the pilot. Print it to PDF (Letter or 6.625 x 10.25, no margins, background graphics on) for a proof.

## Layout

| Path | What it is |
|---|---|
| `style-bible.md` | **The drift controls.** The locked style block, the character and location sheets, and the generation procedure. Read before generating anything. |
| `ch01-the-gap/panels.js` | **Canonical.** Pages, panel grid, per-panel scene prompt, captions, SFX, screen text. |
| `ch01-the-gap/script.md` | Generated. The comic script, page by page, panel by panel. |
| `ch01-the-gap/prompts.md` | Generated. The full prompt for every panel, style block and character blocks already prepended. |
| `ch01-the-gap/pages.html` | Generated. The lettered pages. Missing art shows as a labelled placeholder. |
| `ch01-the-gap/art/` | Generated images, named by panel id (`p01-1.png`). |
| `refs/` | Reference sheets (Iris, the figure, the server room). Uploaded into ChatGPT to anchor every session. |

## Why the lettering is not in the art

Image models letter badly and inconsistently, and a caption that changes means regenerating art. **All captions, screen text and sound effects are set in HTML over the art**, so the words can be edited without touching an image and the art never carries text it could get wrong.

## Rights note

Purely AI-generated imagery has weak copyright protection in the US; the script, adaptation, selection and arrangement are the author's. Amazon KDP requires AI-content disclosure. Decide positioning before publishing.

## Generation log — Ch1 pilot, 2026-11-22

- **All 73 panels generated** in one ChatGPT conversation ("Generate Character Sheet" in the author's ChatGPT history), plus the three reference sheets in `refs/`. p16-3 reuses p08-3's clock screen by design (`reuse` in `panels.js`), so 72 distinct images.
- **Regenerated:** p03-1 (the first attempt duplicated the p03-2 scene), p10-1 (the second shape in the reflection was missing).
- **Refused by ChatGPT, then reworded:** p04-2 and p05-3. The wording that passed is in `panels.js`.
- **Prompt wording drifted a little from `panels.js` during the run.** Most panels were sent with small additions such as "one single image only", "blank screen" or "no people", and from p10 on with the shorter continuation block. `panels.js` remains the record of each panel's *intent*; the exact text sent is in the ChatGPT conversation.
- **Drift pass, same day.** All 72 images were reviewed on contact sheets and **nine were redone** because they contradicted their caption or missed their beat: p05-1 and p08-4 (wet, glossy floors where the captions describe thin dry dust), p06-1 (camouflage trousers), p06-2 (the wristband was missing), p08-5 (an ordinary aisle where the beat is wrong geometry), p10-1 (the reflection showed a dark male shape instead of the pale figure), p12-4 (the sliver was invisible), p17-1 (every light on in an archive lit by every third fixture), p18-3 (Iris smiling in the photo, where the book has her "without quite smiling"). **p17-3 was redone after the author caught it:** the fence had a gap wide enough to drive through, where Book 1 has one person-sized cut and the van parked outside the perimeter. p08-5 and p12-4 each took two retries. **The replaced originals and the failed retries are in `ch01-the-gap/art-rejected/`.** `panels.js` now carries the exact wording that produced each kept image.
- **Headlamp side made consistent (author caught it).** Before p10-3 the lamp is clipped to her jacket, and it must always be on **her right collar**. p06-1, p07-2, p08-4 and p09-3 had it on her left, so they were **mirrored horizontally** rather than regenerated, which cannot introduce drift (originals in `art-rejected/*-lamp-left.png`). p10-1 and p10-2 are reflections, so the lamp correctly shows on the other side of the image. From p10-3 to p13 it is on her forehead, and on p16-2 it lies on the floor.
- **Hands fixed (author caught two).** p13-4 (the touch had three fingers, and no glove where Book 1 says the glove ends) and p15-3 (the younger sister's gesturing hand was malformed) were regenerated. A sweep of all 18 panels with visible hands then found p14-2 (hands around the cup interlocked impossibly), also regenerated. Gesturing and interlocked hands fail most; prompts now ask for simple, relaxed poses and name the digit count.
- **Still accepted as-is:** gray tone in skies and fog throughout, and glossy floors in panels whose captions don't depend on the floor. p12-4's sliver is darker than the book's "pale", but the presence is unmistakable.

## Redrawing by hand

The layout only cares about file names. **Draw a panel, save it as `ch01-the-gap/art/<panel id>.png`, run `node render.js`, and the lettering lands on your drawing unchanged.** Captions are never in the art, so nothing has to be redrawn around text. Hand-drawn panels would also carry full copyright, which the generated images do not.

## Tools

```
node build.js            # regenerate script.md, prompts.md, pages.html
node render.js           # file gn-<id>.png downloads from ~/Downloads, rebuild, render pages to renders/
node render.js 3 4       # render specific pages
node render.js pdf       # print the chapter to ch01-the-gap/the-gap-pilot.pdf
node tools-prompt.js p05-1 --ctx   # print one panel's full prompt on one line
```

## Dropbox copy

Final panels and reference sheets are mirrored to `Dropbox\weepingwillow\Graphic Novel\Ch01 - The Gap\` (`panels\`, `reference sheets\`). **The images are not in git** (`.gitignore` excludes `art/`, `art-rejected/`, `refs/`, renders and the PDF; about 350 MB). Dropbox is their only backup. **To set up a fresh checkout, copy `panels\` into `ch01-the-gap/art/` and `reference sheets\` into `refs/`**, then run `node build.js`. After any regeneration, copy the changed panel to Dropbox too.

## Ink pass — LOCKED HOUSE STYLE (2026-11-22)

**Approved by the author on page 1.** `python ink-pass.py <ids>` (or `--all`) turns panels into true black-and-white comic ink, written to `ch01-the-gap/ink/<id>.png` as 1-bit PNG, plus a side-by-side `-compare.png`. Not in git; regenerate from `art/`.

The house settings (`HOUSE` in `ink-pass.py`) were tuned on p01-1 with the author: edge-preserving smoothing, Levels, a local threshold that keeps the drawing's own hatch strokes, solid black for true darks, clean paper for near-white, a shape-aware cleanup that removes pebbles and stipple but keeps strokes (the author asked for the ground simplified as far as possible), then contours smoothed at 3x. Memory panels (`MEMORY_PANELS`) get a separate fine-line setting. Faces and hands that must keep detail go in `ink-protect.json`. Vector tracing (`--svg`, needs `pip install vtracer`) went blobby and is not used by the layout.

**Comic page mode:** set `comic: true` on a page in `panels.js` and the build uses the ink art, hand-drawn borders, borderless `bleed` panels and uppercase hand-lettered captions. **All 19 pages are converted (2026-11-22).** Three treatments are chosen per panel: `HOUSE` (27 panels: exteriors, close-ups), `DARK` for low-key panels with median tone under 40 (37 panels, mostly the server room; its solid-black cut is set relative to the panel so it doesn't crush to black), and `MEMORY` (8 panels). **Faces** listed in `ink-protect.json` get a comic face treatment (skin smoothed flat, strong feature lines, solid shadows) instead of the panel setting. `MEMORY_REGIONS` draws part of a present-day panel in the memory style (the photo on the dashboard, p19-1). After the author's 2026-11-22 review, `DARK` was made heavier (more solid black, less stipple), and p04-4's silhouette and p11-3's lit wall were moved to `VOID_PANELS`. `VOID_PANELS` (the figure, the hand, the touch, the face, the too-long aisle) are low-key but stay on `HOUSE`, because the black void is the scene. The caption font (Ink Free) is a placeholder; choose a licensed comic font before publishing.
