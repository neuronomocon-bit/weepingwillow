# ARCHIVE

**Nothing here is current. Nothing here has been deleted.**

Book 2 has been planned three times. This folder holds every superseded version, plus prose drafted under retired arcs, plus tooling that is no longer used. It is organised by *when it died*, not by what it is.

**Restructured 2026-08-27.** It was previously a flat folder of thirteen files spanning three arcs, which had become impossible to read.

---

## What is live, for contrast

| | Status |
|---|---|
| **Book 1 — The Absence** | Published 2026-05-14. 22 chapters in `chapters/`, 23,405 words. Its text is law. |
| **Book 2 — The Ending** | Sequel. Outline and all 22 briefs current. **Drafting starts at Ch1.** |
| **Book 3 — The Silence** | Outline current (rewritten 2026-08-27). **No chapter briefs — 22 need writing.** |

---

## `arc-01-hunger/` — retired 2026-08-04

The original plan. Book 2 was **"The Hunger,"** a direct sequel in which Willow becomes strategic, Lena is targeted at the midpoint, and the origin is revealed secondhand in a single chapter.

**Why it died:** the series' emotional bomb — that Willow was born from grief — was *reported* rather than dramatized. One chapter of a man talking in a cabin. The diagnosis was correct, and every later arc is downstream of it.

| File | Was |
|---|---|
| `06-book2-outline-HUNGER.md` | Book 2 outline |
| `08-book2-chapter-briefs-HUNGER.md` | 22 briefs |
| `07-book3-outline-SILENCE-original.md` | Book 3 outline, first version |
| `09-book3-chapter-briefs-SILENCE-original.md` | Book 3 briefs, first version |
| `10-subplot-threading-original.md` | 10 arcs across 66 chapters |
| `11-key-dialogue-notes-original.md` | Dialogue notes |

---

## `arc-02-prequel/` — retired 2026-08-26

Book 2 became **"The Keeping,"** a prequel: twelve Marin Halloway chapters and six of intact pre-Book-1 Iris, ending one beat before Book 1's first page.

**Why it died:** three costs. No forward carry — its entire cast appears in no other book. Dramatic irony as the sole engine across 70,000 words, with the Iris thread explicitly forbidden from carrying tension. And a Book 3 left holding two books of plot.

| File | Was |
|---|---|
| `06-book2-outline-PREQUEL.md` | Book 2 outline |
| `08-book2-chapter-briefs-PREQUEL.md` | 22 briefs. **Still referenced:** Ch4's "As Written" block lives here and is load-bearing for the drafted Intake chapter. |
| `09-book3-chapter-briefs-PREQUEL-ERA.md` | Book 3 briefs. Archived 2026-08-27 rather than patched: eight separate things in it were wrong against the rewritten outline. **Salvage is expected to be high** — the Lena midpoint, the Willow conversation, and the closing Iris/Lena image all survive with edits. |
| `10-subplot-threading-PREQUEL.md` | 10 arcs, keyed to the prequel's chapter numbers |
| `11-key-dialogue-notes-PREQUEL.md` | Dialogue notes |

---

## `arc-03-superseded/` — superseded 2026-08-27

Not a dead arc. **The current arc, with a duplicate.**

Two complete, independent 22-brief sets were written for the sequel in parallel sessions, because one session started from a checkout two commits behind and did not know the briefs already existed. They were reconciled rather than one being discarded.

| File | Was |
|---|---|
| `08-book2-chapter-briefs-SEQUEL-B.md` | The second set. Four things from it were merged into the live briefs: the title, the Ch22 Lena plant, the Act III rename, and a worked prose example. Kept as the record of what it contained before the merge. |

The pre-merge state of that session's wider work is on the git branch **`archive/bible-rebuild-2026-08-27`**.

---

## `drafts/` — prose that is still live

**This is the only folder here with live value, and it holds two different kinds of thing.**

**Pending chapters** are finished prose for the current arc, waiting on an author pass. They are not retired and they belong in `chapters-book2/` the moment they come up.

**Salvage** is prose from dead arcs whose *material* is assigned forward to chapters not yet drafted.

| File | Words | Assigned to |
|---|---|---|
| `DRAFT-hunger-ch01-aftermath.md` | ~1,500 | **Book 2 Ch1.** A near-exact match for the brief. Wants roughly 1,900 more words, taken from the apartment and the drive, **not** from the Caleb scene, whose flatness is doing the work. |
| `DRAFT-sessions-ch8.md` | 3,387 | **Book 2 Ch8. PENDING, not retired.** Drafted 2026-08-06, never author-proofread. Move it to `chapters-book2/08-sessions.md` when it comes up, after a re-audit against the current gates. |
| `DRAFT-intake-ch4.md` | 3,286 | **Book 2 Ch4. PENDING, not retired.** Approved 2026-08-04 under the *prequel* arc and never re-audited against the sequel gates. Taken out of `chapters-book2/` on 2026-08-27 so the working folder holds only chapters drafted under the current arc. Its "As Written" block is in `arc-02-prequel/08-book2-chapter-briefs-PREQUEL.md` under Chapter 1. |
| `DRAFT-prequel-ch02-recovery.md` | 2,855 | **Ch3** (crate and manifest physicality), **Ch5** (the wet-drive procedure, the ninety-minute bridge, the dead-credential authentication), and **Ch19** (the R. Oyelaran material — a thorough man ignored who went on being thorough anyway — reused as the shape of Virek's closed ticket). |

`DRAFT-prequel-ch02-recovery.md` was moved out of `chapters-book2/` on 2026-08-27 because `build-manuscript.js` picks up every numbered file in that folder and was building the retired draft into the manuscript as chapter 2. **Retired drafts do not live in `chapters-book2/`.**

`chapters-book2/` now holds only chapters drafted under the current arc and reviewed in place. **Ch1 — Aftermath is the first.**

---

## `superseded-tooling/`

| File | Why |
|---|---|
| `12-chatgpt-system-prompt.md` | ChatGPT drafted Book 1's prose and was dropped on 2026-05-14 — it could not reliably hold the prose hard rules, defaulting to single-line fragmentation and AI-tics despite the prompt. The file also **duplicated the hard rules**, which is exactly how one copy goes stale. `03-themes-and-tone.md` is now the single source. |
| `format-book.js` | Superseded by `format-book-v2.js`, which derives the running header from the manuscript's own title line instead of hardcoding it. Nothing referenced v1. |

---

## Rules for this folder

1. **Archive, do not delete.** Git has everything anyway, but a named file in a labelled folder is findable and a reflog entry is not.
2. **Archive by when it died.** A file that stops being true gets a dated folder and a reason, not a rename in place.
3. **Never leave a retired draft in `chapters-book2/`.** The build script picks up every numbered file there.
4. **If a live document points at something here, use the full path.** These paths moved once already.
