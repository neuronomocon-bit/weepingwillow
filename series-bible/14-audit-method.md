# AUDIT METHOD — how defects are found

**Created 2026-08-27.** `03-themes-and-tone.md` says what the prose must and must not do. **This file says how to find out whether it did.** They are different problems and keeping them apart is deliberate.

Everything here was earned on the author's other series — the NeonVeil / Veil Protocol books at `C:\Users\kschiffer\Projects\book2` and `book3` — where each rule was written after an error that actually happened. Weeping Willow has the same shape of risk and none of the scar tissue.

---

## THE CENTRAL METHOD — compare Book 2 against published Book 1

**Reading Book 2 on its own can never find a voice defect, because nothing in it is wrong.**

The defects that matter most are not errors. They are constructions this book reaches for that the published one never does: perfectly good English, unremarkable to any reader, and a different narrator. **The only thing that surfaces them is frequency comparison against the finished book.**

On the other series this single method found **four separate defects** — a whole-manuscript drift into British spelling, a `-ward`/`-wards` split, an indefinite-pronoun inversion, and a register split on `nobody`/`no one` — **and prevented four false positives**, where a word that looked like drift turned out to be house style.

**It has already found two in Weeping Willow, on the day it was adopted.** See MEASURED BASELINES below.

**Book 1 is the authority.** 22 chapters, 23,322 words, published and unchanged, **locked in `book1-published/`.** ⚠️ **This measurement is why that folder must never be edited.** A "fix" applied to Book 1 destroys the fixed point every comparison depends on. Every question of the form *"is this the series' voice or this book's habit?"* is answered by counting both.

---

## THE SEVEN LAWS OF COUNTING

Every one of these is a lesson someone paid for.

### 1. A tic does not shrink when you cap one spelling. It migrates.

Cap *"six months"* and it comes back as *"since the winter"*. Cap that and it returns as *"half a year"*. **Every substitute passed the per-chapter cap while the book as a whole got steadily worse.**

**Count the family, not the phrase.** One project's voice-flatness beat was reported fixed, then reappeared as `voice did not change` ×5 plus four other spellings — twelve in one semantic family, with no check counting them together.

**And count book-wide, not per chapter.** A per-chapter cap is structurally blind to migration.

### 2. A rule enforced by enumeration only catches the forms that were enumerated.

The self-annotation tic had two documented families and a third, larger one that nothing was counting — because the check had been built from the two that had been written down. It reached eight uses across five chapters while every audit reported clean.

**When a tic is found in a new wording, the wording goes into the rules file in the same sitting as the prose fix.** Not later.

### 3. A high count is evidence, not a verdict.

Four Britishisms were missed because they were **dismissed by count without reading a single context**. *Flat* returned 57 hits, looked like flat palms and flat voices, and hid a British *flat* meaning apartment.

**A high count is a reason to read the contexts, not a reason to skip them.** The words most likely to hide a wrong sense are exactly the ones with an innocent homonym doing volume.

**The mirror case is equally real.** One phrase ran at five times the prior book's rate and was left entirely alone, because that book was *about* the thing the phrase names. **The count was earned.**

### 4. Never write to a number — when cutting as much as when drafting.

Converting twenty instances of one formula into twenty instances of another is not a fix. One attempt produced six identical replacements and had to be redone; another would have turned 23 foreign words into 23 instances of a native tic.

**Spread across genuinely different constructions, and prefer deleting to substituting.** Removing a marker entirely improved every sentence it touched.

### 5. A cleared item is cleared against the question that was asked, not for good.

`nobody` was cleared as in-voice because the published book used it. **True, and the wrong question.** It cleared the *word* and never asked *where the word sits*. Splitting every use into spoken and narrated turned it into a 160-instance defect.

**A ruling that clears a WORD does not clear the CONSTRUCTIONS it sits in.**

### 6. Repeat or rhyme? Ask whether the text signals the echo.

A phrase appearing verbatim in two chapters is not automatically a defect. One project found a genuine repeat — an identical paragraph opener in two chapters — and almost destroyed its best structural rhyme in the same pass, where a character says the same line in two chapters and the second is the payoff of the first.

**The test: does the text signal the echo?** If it does, it is a rhyme and it stays. If it does not, it is a repeat.

**Weeping Willow runs on deliberate echoes** — Book 1 Ch12 against Book 2 Ch11, the "As Written" callbacks, Marin's procurement meeting in Ch4 and Ch17. **Every one of those is a rhyme and none of them may be trimmed for symmetry.**

### 7. A habit is not a check.

A control character got into an audit script and silently disabled the check it was part of, which then reported clean for a full run — because the scan was habitually run over the prose folder and not over the tools.

**Scan the file you wrote, not the files you meant to change.**

---

## MEASURED BASELINES — Weeping Willow, 2026-08-27

Book 1 published (23,322 words) against the two drafted Book 2 chapters (6,853 words). **Rates are per 10,000 words.**

### Settled — Book 1 is the target

| | Book 1 | Book 2 drafted | Verdict |
|---|---|---|---|
| `toward` / `towards` | 40 / **0** | 1 / 0 | ✓ Always `-ward` |
| `gray` / `grey` | 5 / **0** | 2 / 0 | ✓ US |
| British `-our`, `-ise` | **0** | **0** | ✓ No drift |
| Exclamation points | **0** | **0** | ✓ Ban confirmed by the text |
| Ellipsis `…` / three dots | 7 / **0** | 0 / 0 | ✓ Single character |
| "nodded once" | 23 | **0** | ✓ Correctly retired for Book 2 |
| "the kind of" | 4 | **0** | ✓ Correctly retired |
| Em dashes in prose | 157 | **0** | ✓ Book 2's ban is holding; the only two in the drafts are chapter headers, which the rule permits |

### ⚠️ Two live defects, found by this method on the day it was adopted

**1. Typography.** Book 1 is 92% curly (`“ ” ’`); **the two drafted Book 2 chapters are 100% straight.** 420 straight double quotes and 205 straight apostrophes against zero curly. It will show in the docx export.

**2. Indefinite pronouns.** Book 1 says *somebody*, *anybody*, *everybody* and *nobody* a combined **zero** times. The drafted Book 2 chapters say them **thirteen** times in 6,853 words, and have displaced *no one* entirely (Book 1: 6, Book 2: 0).

**3. The relative-clause coda** (`, which was X`). Book 1: **0**. Book 2 drafted: **7**, at 10.2 per 10k.

**All three are fixed as part of the Ch4 and Ch8 re-audit** and are recorded in `review-progress.md`.

### Open — measured, not yet ruled

**Contractions.** The drafted chapters run 100% expanded on `was not`, `did not`, `had not` and `is not`; Book 1 runs 51.6% expanded on `did not` and 14.3% on `do not`. **The measurement is whole-text and does not separate narration from dialogue**, and Book 1's contracted forms are concentrated in dialogue. Some of Book 2's formality is also deliberate — Iris is flat, Marin is clinical.

**Run the narration/dialogue split before anyone rules on it.** Do not sweep.

---

## HOW TO RUN THE COMPARISON

No script is committed to this repo yet. The measurement is a short throwaway that reads `book1-published/chapters/*.md` against `chapters-book2/*.md`, strips chapter and act headers, and reports raw counts plus per-10k rates for a list of patterns.

**What to measure, at minimum:** the pattern lists in the baseline table above · repeated 3-to-6 word phrases occurring three or more times across two or more chapters · the most repeated three-word sentence openings · em dashes per 1,000 words · quote and apostrophe style · the coda forms.

**Everything it prints is a candidate, not a defect.** A repeated phrase may be a motif, a locked line, or a character's own register. **Read the contexts before ruling on any of it.**

**⚠️ If a check is ever committed, add it in the same sitting as the rule it enforces.** Three false all-clears on the other project were caused by rules that existed only as sentences: a banned *phrase* sat in a chapter through two audits that both recorded it clean, because every audit checked banned words and none checked banned phrases.

---

## RECORDS AND PROSE MUST NOT DRIFT APART

**This project's oldest failure mode, and it has already happened here once.**

Book 1 kept the whole manuscript in a review file *alongside* the individual chapter files. Every fix had to be applied twice, and the Book 1 review notes record exactly that. **Two copies is how one of them silently goes stale.** It was fixed by making `chapters-book2/NN-slug.md` the single source of truth.

**The same risk now sits in the "As Written" blocks.** They quote the prose verbatim, in the briefs, and nothing re-verifies them. On the other project a sweep changed a line that the continuity file carried as locked, and five recorded quotes no longer existed in the manuscript.

**After any bulk prose edit, check that every quoted line in the briefs still exists in the chapter files.** The apostrophe style is the trap: the briefs use straight, the prose uses curly, so a naive comparison can never match a quotation containing an apostrophe. **Normalise both sides before comparing.**

**One manuscript.** `chapters-book2/` is the only copy of Book 2's prose. `manuscript-book2.md` is a build artifact, is gitignored, and is never hand-edited.

---

## PROTECTED LINES

**A protected-lines list is a liability unless something re-verifies it.** On the other project, two "protected" lines had silently fallen out of the manuscript and survived several audits that way. **The failure mode is not someone deleting a line on purpose. It is a line quietly not being there any more while every audit reports clean.**

Weeping Willow's locked lines, which must exist verbatim and must not be improved:

| Line | Where |
|---|---|
| "It's still there. I just can't find the handle on it anymore." | Book 2 Ch8. **She means it as good news.** |
| "It hurting is how I know it counted." | Book 2 Ch4 |
| "an alarm that never got told the emergency ended" | Book 2 Ch4 |
| "What if I don't like who's left." | Book 2 Ch4, delivered light enough to be taken as a joke |
| "You don't have to optimize the answer" | Book 1 Ch2, published |
| "Willow Halloway" | Book 3 Ch21, said once, flat, in passing, **never explained** |

**Verify these at every audit — that they are present, and that they still read exactly as written.**

---

## THE ONE THING A SCRIPT CANNOT DO

**Counting catches a class of defect fast and cannot talk itself into a clean result. It also cannot read.**

On the other project the largest single prose tic — 148 instances of the explanatory coda — **was found by a person reading thirty-one chapters in a row**, not by any check, because no check was counting it, because nobody had written the rule down. Every other tic in that book was caught by counting. That one was not.

**Read the whole book at least once, in order, in one pass.** Nothing else finds the thing nobody thought to look for.
