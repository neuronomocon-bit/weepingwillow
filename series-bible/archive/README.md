# ARCHIVE — SUPERSEDED SERIES ARC

Archived 2026-08-04, when the series pivoted to a new Book 2 / Book 3 structure.

## What changed

The original plan was:
- **Book 2 — The Hunger:** Willow becomes strategic. Lena targeted at the midpoint. Virek surfaces. The origin is revealed secondhand in one chapter.
- **Book 3 — The Silence:** The quiet world. Iris collapses. Final confrontation and destruction.

The problem identified in review: the trilogy's emotional bomb (Willow was born from grief) was promised in Book 2 by `01-world.md`, `02-characters.md`, and the Book 2 outline, but briefed into Book 3 as a single chapter of Virek talking in a cabin. The most important material in the series was being reported rather than dramatized.

## The new plan

- **Book 2 — The Keeping:** Prequel. Dr. Marin Halloway, Meridian, and how Willow came to exist. Dual thread with Iris intact in the years before Book 1. Ends one beat before Book 1, Chapter 1.
- **Book 3 — The Silence:** Everything after Book 1. Spread, selection, Lena targeted, Iris's collapse, the confrontation, the destruction.

**Book 1 — The Absence is published and unchanged.** It remains chronologically second in the series and first in publication order.

## Files here

| File | Was |
|------|-----|
| `06-book2-outline-HUNGER.md` | Book 2 outline, "The Hunger" |
| `07-book3-outline-SILENCE-original.md` | Book 3 outline, original version |
| `08-book2-chapter-briefs-HUNGER.md` | 22 chapter briefs, "The Hunger" |
| `09-book3-chapter-briefs-SILENCE-original.md` | 22 chapter briefs, Book 3 original |
| `10-subplot-threading-original.md` | 10 arcs across the original 66 chapters |
| `11-key-dialogue-notes-original.md` | Dialogue notes, original Book 2/3 sections |
| `DRAFT-hunger-ch01-aftermath.md` | Claude's draft of "The Hunger" Ch1, never approved |

## Salvage notes

Material worth reusing rather than rewriting:

- **`DRAFT-hunger-ch01-aftermath.md`** maps almost directly onto new Book 3 Ch1. Same beat: Iris weeks after Book 1, the note she doesn't remember writing, the Caleb visit, the unanswered Lena thread. Reusable with light continuity edits.
- **Old Book 3's "quiet world" material** (Weston, the acceptance turn, the emotional volatility index) survives as new Book 3 Ch16.
- **The locked destruction method** (overload through contradiction, the irreducible core) carries forward unchanged.
- **Old Book 2's case characters** (Enzo, Joe E., Xander) carry forward into new Book 3.

---

# SECOND REVISION — 2026-08-26

The prequel was dropped. Book 2 is now a **sequel** again, with Marin's origin delivered as dramatized chapters that Iris recovers off Meridian's drives.

## Why

The prequel's diagnosis was right — the origin needed dramatizing, not reporting — but it cost three things: no forward carry (its entire cast appears in no other book), dramatic irony as the sole engine across 70,000 words, and a Book 3 left carrying two books of plot. The revision keeps the dramatization and discards the stall.

Full reasoning and all seven decisions are in `../13-arc-revision.md`.

## Also changed

- **Willow becomes a killer.** Her method is failing, so she increases the dose. Escalation ladder across all three books.
- **Satisfaction, not pleasure.** A complete taking registers as completion; a partial one does not. She is finishing, not feeding.
- **She resolves physically** toward Willow Halloway's face.
- **New ending:** the compulsion trap, then the water.
- **Caleb Ward dies** at Book 2's midpoint.
- **Iris ends ambiguous.**

## Files added here in this revision

| File | Was |
|------|-----|
| `06-book2-outline-PREQUEL.md` | Book 2 outline, "The Keeping" as prequel |
| `08-book2-chapter-briefs-PREQUEL.md` | 22 chapter briefs, prequel |

## Salvage notes

- **`../../chapters-book2/01-intake.md`** (3,286 w) and the drafted **Ch3 "Sessions"** (3,387 w) are Marin/Meridian scenes and port directly into the new recovered thread as R1 and R2.
- **`chapters-book2/02-recovery.md`** (2,855 w) is retired — it is built on intact pre-Book-1 Iris, who no longer appears. The flooded sub-level job inside it is worth salvaging as a present-day chapter.
- `DRAFT-hunger-ch01-aftermath.md` now maps onto **new Book 2 Ch1**, not Book 3 Ch1. Same beat, and it moved forward a book.

---

# THIRD PASS — 2026-08-27 (rebuild and merge, not a pivot)

No arc change. This pass rebuilt the downstream documents against the 2026-08-26 decisions, and resolved a collision.

## The collision

**Two complete, independent 22-brief sets were written for this arc**, in parallel sessions, because one session started from a checkout two commits behind and did not know the briefs already existed.

They were reconciled rather than one being discarded. **The pushed set (`a5f0fd2`) is the base** — it is the stronger of the two, and its Investigation Spine, its Ch11, its un-warnable Lila Mercer scene, and its account of why the entity cannot complete Iris all survive intact. **Four things merged in from the other set:** the title, the Ch22 Lena plant, the Act III rename, and a worked prose example.

## What was decided

- **Title: "The Ending."** It names her turn to killing. "The Keeping" was retired with the prequel arc. Act III renamed to FINISHING, since the old act name was title-derived. Two colliding section headings — `07-book3-outline.md`'s "THE ENDING" and `13-arc-revision.md`'s "DECISION 5 — THE ENDING" — were renamed.
- **Lena stays untouched through Book 2 and is located on its last page.** The place Willow's procedure will not return from is where Iris's love for her sister used to be, so that is where she gets stuck, and being stuck there is how she learns Iris has a sister. **The failure and the plant are the same moment.**
- **Ch11 is Iris POV, not Caleb's.** A hollow POV rendered from inside for a whole chapter was considered and rejected.

## Files added here in this pass

| File | Was |
|------|-----|
| `08-book2-chapter-briefs-SEQUEL-B.md` | The second, independently written brief set. Superseded by the merge; kept because its Book 3 groundwork and several chapter briefs were the source of the merged material. |
| `10-subplot-threading-PREQUEL.md` | 10 arcs, keyed to the prequel's chapter numbers |
| `11-key-dialogue-notes-PREQUEL.md` | Dialogue notes, prequel Book 2 section |
| `DRAFT-prequel-ch02-recovery.md` | Drafted prequel Ch2 "Recovery" (2,855 w), retired |

## Chapter file moves

- `chapters-book2/01-intake.md` → **`chapters-book2/04-intake.md`**, header renumbered to Ch4
- `chapters-book2/02-recovery.md` → **`archive/DRAFT-prequel-ch02-recovery.md`**. It was moved out of `chapters-book2/` because `build-manuscript.js` picks up every numbered file in that folder and was building the retired draft into the manuscript as chapter 2.
- `chapter_review.md` header renumbered Ch3 → **Ch8** (Sessions, still awaiting its first author proofread)

Its salvage is assigned: crate and manifest physicality to **Ch3**, the wet-drive procedure and the ninety-minute bridge to **Ch5**, and the **R. Oyelaran** material — a thorough man ignored who went on being thorough anyway — to **Ch19**, as the shape of Virek's closed ticket.

## Also on a branch

**`archive/bible-rebuild-2026-08-27`** holds the pre-merge state of the second session's work. Everything from it that survived reconciliation is on main; the branch is kept as the record of what the other set contained before it was merged.

## Still stale, deliberately

**`09-book3-chapter-briefs.md`** carries a staleness banner and has not been rebuilt. Book 3's outline only just changed, and its briefs should follow that deliberately rather than in the same pass. Salvage is expected to be high.
