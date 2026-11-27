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

## Chapter 3 — "The First Case" (art complete 2026-11-27, awaiting the author's review)

**Status: 90 panels, every one its own image, audited on arrival, CLEAN ink, lettered with no balloon over a face and the slate text printed on the screen. 20 pages; proof at `ch03-the-first-case/ch03-the-first-case.pdf`. Backed up to `Dropbox\weepingwillow\Graphic Novel\Ch03 - The First Case\` (`panels\`, `ink\`, `reference sheets\` with `ref-leah.png` and `ref-joel.png`, and the PDF). Not yet approved; committed 2026-11-27.**

**New characters:** Leah and Joel, with reference sheets in `refs/` and character blocks in `build.js` and `tools-prompt2.js`. **Drift locks** are at the top of `ch03-the-first-case/panels.js` (Joel never leaves his brown leather armchair; the living room's fixed furniture; Iris with no backpack; the house is white wood siding with the window left of the door).

**7 rejects** in `art-rejected/`, each named for its defect: two empty armchairs behind Leah (p04-2, p12-6), Iris gesturing (p07-1), two repeated camera setups (p11-1 against p10-4, p14-5 against p14-3), a brick house (p19-4), and one two-frame image (p09-2, kept as its right half rather than regenerated). **Mirrored instead of regenerated:** p07-4, so Joel looks left toward Leah.

**Lessons for Ch4 (generations are limited, the author's instruction: prompt to avoid redos):**
- **Put the character locks in every prompt, not "same as before".** The full lock (hair, clothes, demeanour) cut redos sharply once it went in. Joel's hair drifted curly across p13 to p15 until "very short, straight, not curly" was added.
- **Say what must NOT be in frame.** The model fills a living room with Joel's armchair even when he is elsewhere, so every Leah-only room shot now says the armchair is out of frame.
- **No "then" in a scene.** "Hand over mouth then lowering" produced two frames in one image. Describe one frozen moment.
- **Vary the camera on purpose.** Two shots of the same setup in a row read as a repeat; name a different angle (overhead, low by the TV, reverse from the kitchen).
- **Fixed layout facts go in the prompt** (window left of the door, wood siding), or the model invents a new house.
- **ChatGPT sometimes accepts a prompt and never generates.** A short "please generate that panel now" fixes it without costing a generation.
- **Pipeline:** send the next prompt as soon as an image is saved and audit while it draws. A reject is queued as a fresh generation right after.

## Chapter 2 — "Caleb Ward" (art complete 2026-11-23, awaiting the author's review)

**Status: all 95 panels have their own art, inked and lettered; 20 pages rendered; proof at `ch02-caleb-ward/ch02-caleb-ward.pdf`. Not yet approved by the author. Backed up to Dropbox 2026-11-27; committed 2026-11-27. Re-copy any panel redone after review.**

**⚠️ NO REPEATS (author, 2026-11-23).** The first script reused 24 images across 101 panels (one Iris shot appeared 12 times). It was rewritten so **every panel has its own image** (`noRepeats: true` in panels.js; `build.js` errors on any `reuse`). Consecutive shots of one person change angle, distance or expression; some short exchanges were merged into one panel (95 panels now). The pre-rewrite script is not kept in the repo; git history has it.

**⚠️ CH2 USES THE `CLEAN` INK MODE** (`ink-pass.py`, chosen automatically for `style: 'ink'` chapters). The HOUSE/DARK pass was **erasing eyes** (p03-2 lost both, p04-2 one) and DARK flipped black backgrounds white (p04-1). The ink-ready art only needs a plain cut plus speckle cleanup. **Ch1 still uses HOUSE/DARK; the author may want it redone to match later.**

**DRIFT LOCKS** are at the top of `ch02-caleb-ward/panels.js` (Caleb in plain blue jeans, never cargo; the chair backward p05 to p11 and forward p12 to p14; Iris's pack off p05 to p14; the van white). **Every image was audited on arrival** against its prompt, the reference sheets, the locks and the panels beside it, and redone if it drifted. **16 rejects** are in `art-rejected/`, each named for its defect: scowling or harsh Iris faces (p06-4, p14-4, p19-5 twice), white-on-black style drift (p09-4, p14-4), backpack straps when the pack is off (p09-4), a chair leg through a boot (p09-2), a chair he was not sitting on (p09-5), eyelines away from the other character (p11-2 twice), a backward thumb (p13-2), a repeat of p07-4 (p08-4), plus the five v1 drift panels (p01-2 dark van; p09-1, p11-1, p14-6, p15-1 cargo pants or wrong chair).

**⚠️ LETTERING NEVER COVERS A FACE (author, 2026-11-27).** The author found balloons over faces on the review read (p07-1 and others). **`node audit-letters.js <chapter> [pages]`** renders every page with the lettering as see-through red outlines into `renders/audit/`, so what sits under a balloon is visible; run it and look at every page after any lettering change. 33 panels were moved off faces. Lettering can now be placed freely (`pos: '@x,y'` in % of the panel, `mw` max width in inches, upward tails `t`/`tl`/`tr` for a balloon below the speaker) and `focus` shifts the crop to give it room.

**⚠️ SIGNS AND SCREENS ARE PRINTED ON THE ART, NEVER BOXED OVER IT (author, 2026-11-27).** The art draws every sign and display blank; the text used to sit in a box on top and hid the sign. A `screen` now takes `box: [x0, y0, x1, y1]` in fractions of the *image* (plus `rot` in degrees, and it may be an array, one per surface), and the page script maps it through the panel's crop and fits the type, so the words sit on the placard or screen itself. **Applied to all 5 in Ch2 and all 7 in Ch1** (Ch1's approved pages changed only in this respect). New art with a sign or screen needs its box measured, and every one checked on the rendered page: a box that runs past the crop gets clipped (Ch1 p08-3 and p06-4 needed a nudge).

**⚠️ No "shape of" in any caption (author, 2026-11-27),** even where Book 1 has it (p17-1, replaced with Book 1's concrete detail). Same family as "the right way".

**Lessons for Ch3, from the audit:**
- **Face drift is fixed by a FRESH generation, not an edit.** Edit mode carries the bad face forward (p19-5 failed twice as an edit, passed first time fresh, with the face described from a good earlier panel).
- **This model draws Iris's eyes looking right.** When she must look left, mirror the composition instead of insisting (p11-2).
- **Iris's prompt needs "brows relaxed and level, never frowning"** or she reads as annoyed.
- **The rendered page is a separate audit.** Short rows crop wide art: p17-2 lost Iris's whole face, and p09-1, p11-1, p04-3 and p20-2 lost heads, until `focus` was set. Balloon collisions appeared only on the page. **Look at every page, not just every image.**
- **Screen direction in the diner:** Caleb screen-left, Iris screen-right, so his close-ups look right and hers look left.

**Workflow tools added:** `tools-prompt.js` (unchanged) and **`tools-prompt2.js`** (short per-panel prompts for an ongoing conversation, `--missing` lists what has no art); **`gn-next.sh <id>`** files the newest download, renders its page and writes a preview to the scratchpad.

**Paused 2026-11-24 by the author, before review. Nothing is committed and nothing is in Dropbox.** Known soft spots for the review: p06-4 (Caleb mostly cropped out) and p13-2 (balloon text touches the ellipse edge).

**Next:** the author reviews `ch02-caleb-ward/pages.html` (or the PDF). On approval, copy `art/`, `ink/`, the PDF and `refs/ref-caleb.png` to `Dropbox\weepingwillow\Graphic Novel\Ch02 - Caleb Ward\`, which is the only backup (images are not in git).

**Tools now take a chapter:** `node build.js ch02-caleb-ward`, `node render.js ch02-caleb-ward [pages|pdf]`, `python ink-pass.py ch02-caleb-ward <ids|--all>`. Default is ch01. Face protect boxes now live per chapter in `<chapter>/ink-protect.json`, and the special panel lists in `ink-pass.py` apply to ch01 only.
