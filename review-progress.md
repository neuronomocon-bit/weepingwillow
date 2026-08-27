# Book 2 — Writing & Review Progress

**Reset 2026-08-27. Book 2 is being re-planned from scratch, from the arc up.**

There is no outline, no brief set, and no chapter status to track. `series-bible/06-book2-outline.md` holds the constraints, the salvage inventory, and the record of the three abandoned attempts. This file comes back when there is a chapter list to put in it.

Book 1 — The Absence is complete and published (2026-05-14). Its full review history is preserved in CLAUDE.md and in git.

---

## What was reset

| Was | Now |
|---|---|
| 22 chapter briefs (attempt 3, pushed) | `series-bible/archive/08-book2-chapter-briefs-SEQUEL-A.md` |
| 22 chapter briefs (attempt 3, written in parallel) | `series-bible/archive/08-book2-chapter-briefs-SEQUEL-B.md` |
| Book 2 sequel outline | `series-bible/archive/06-book2-outline-SEQUEL.md` |
| `chapters-book2/01-intake.md`, 3,286 w | `series-bible/archive/DRAFT-intake.md` |
| `chapters-book2/02-recovery.md`, 2,855 w | `series-bible/archive/DRAFT-recovery.md` |
| `chapter_review.md` — "Sessions," 3,387 w | `series-bible/archive/DRAFT-sessions.md` |

`chapters-book2/` is now empty of chapters. `chapter_review.md` is cleared.

**Nothing was deleted.** Everything above is on disk, and all of it is also in git history.

---

## Conventions that survive the reset

These are craft rules, not arc decisions, and they hold regardless of what Book 2 turns out to be.

### Prose hard rules (Book 2 onward)

Full list in `series-bible/03-themes-and-tone.md` → PROSE CONVENTIONS (HARD RULES) and SENTENCE VARIETY. No AI-writing tics; no "it's not X, it's Y" contrast framing; no "wrong"/"off" as atmospheric shorthand; no "the kind of…" or appositive-as-thesis; no labeled silences; no "nodded once"; no narrator editorializing; no duplicate reflection blocks; no exclamation points; no em dashes; no repeated comparative crutches; no bloat or repetition.

**Book 1 is published and stays as written.** Its sparser, more fragmented voice was intentional. These rules are a deliberate craft step up beginning with Book 2, and Book 1 is never retro-edited to them.

### Punctuation

- Full-sentence questions take question marks for all characters, including flat-affect ones
- Short tonal probes keep periods: "How." / "Why." / "Where."
- Dialogue tags use "said," not "asked," for flat-affect characters
- Device and terminal readouts run inline with a colon and italics, not stacked on separate lines
- Scene breaks are `***`

### Length

**A chapter under 2,000 words has been written in Book 1's voice and needs rewriting, not expanding.** Book 1 averaged ~1,060 words per chapter because a page of single-line paragraphs holds a fraction of what a page of joined prose holds. Book 2's length comes from fuller scenes, not padding.

---

## Drafting lessons — hard-won, and they cost rewrites every time they were missed

These were learned on the chapters drafted under attempts 2 and 3. **They are the most valuable thing to survive the reset.**

**1. Run-on comma chains — screen WHILE drafting, not after.** One first draft defaulted to chained `", and X, and Y, and Z"` construction, worst case 6 commas and 5 conjunctions in one 85-word sentence, with 18 sentences needing rewrites. The next chapter then came in with 10 sentences over the threshold *one chapter after the gate was written down*, because the screen was run as a post-pass instead of applied at the sentence.

**Screen:** flag any sentence with 3+ commas, 3+ instances of "and," or 45+ words, then justify or fix each one. Legitimate survivors are colon-introduced lists, serial verbs, deliberate accumulation, and dialogue where a character is genuinely spilling.

**2. The trailing explanatory sentence — check by hand; it passes every mechanical screen.** A good image followed by a line telling the reader what to make of it. The van parked facing out, then a sentence explaining why you park facing out. Thirteen came out of one chapter in the author's pass and four more out of another.

**Screen:** read the last sentence of each paragraph alone and ask whether the paragraph is finished without it. If it is, cut it. The related failure is the trailing clause on an otherwise clean sentence.

The most serious catch of this type: *"Marin thought so at the time and would have said so if anybody had asked her."* Both halves point forward and signal that this gets revisited, which is dramatic irony leaking into the prose. It became *"It was a good answer."*

**3. Length drift.** Every chapter drafted so far landed under budget — 3,286 against 3,800, 2,855 against 3,200, 3,387 against 3,800 — and every cut was correct, and nothing was restored. The fix is fuller scenes at the drafting stage, not restored lines. Assess at the end of an act rather than padding individual chapters.

**4. Book 1 register leaking in.** Scan every chapter for "she noted," "she registered," "Expected/Observed," and "the absence of." **Flat affect is not fragmented prose.** Whatever Iris's state turns out to be in the new plan, she observes in complete sentences.

---

## Workflow

Unchanged. Claude drafts a chapter into `chapter_review.md` from the briefs → the author proofreads and edits → on approval the final saves to `chapters-book2/NN-slug.md` and an "As Written" block is added to the brief.

`chapters-book2/NN-slug.md` is the **single source of truth.** Every correction goes there and only there. To read the book straight through, run `node build-manuscript.js` and read the artifact; `manuscript-book*.md` are gitignored build artifacts and are never hand-edited.
