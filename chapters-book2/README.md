Book 2 chapter files. **This is the active manuscript folder and the only one being worked on.**

Book 1 is published and locked in `book1-published/`. It is read for context and never edited.

**These files are the single source of truth, and they are where chapters are drafted, reviewed and kept.** Every correction goes here and only here.

**There is no staging file (changed 2026-08-27).** Claude drafts straight into this folder; the author proofreads in place; the file does not move. `chapter_review.md` is retired.

**⚠️ `build-manuscript.js` picks up every numbered file here**, so an unreviewed draft is inside the export path. It prints the chapter numbers it found on every run. Read that line before exporting.

To read the book straight through run `node build-manuscript.js`; the artifact is gitignored and is never hand-edited.

**Filenames are `NN-slug.md` where NN is the final chapter number.** `build-manuscript.js` picks up every numbered file in this folder, so a retired or superseded draft left here gets built into the manuscript. Retired drafts go to `series-bible/archive/`.

**Book 2 is "The Ending"** — a sequel (second pivot, 2026-08-26; title set 2026-08-27). It opens weeks after The Absence, and the origin arrives as seven dramatized Marin chapters that Iris recovers off Meridian's drives.

- Outline: `series-bible/06-book2-outline.md`
- Briefs: `series-bible/08-book2-chapter-briefs.md`
- Decisions: `series-bible/13-arc-revision.md`
- Progress: `review-progress.md`

Both superseded arcs — "The Hunger" and the prequel — are archived in `series-bible/archive/` with a README explaining what moved where.
