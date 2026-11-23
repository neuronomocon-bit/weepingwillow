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
