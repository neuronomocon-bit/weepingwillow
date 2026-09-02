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

### Watch — `no one`, the substitution the register fix created

**Book 1: 2.6 per 10k. The drafted chapters hit 7.0 by Ch2.** Sending narration from *nobody* to *no one* moved the tic instead of removing it, which is Law 1 happening in real time, one chapter after the law was written down.

**Counted as a family it was worse than the rate suggested:** three instances, one construction — *an object no one had attended to.* Two were deleted outright and both sentences improved. **Re-count every chapter, as a rate and as a construction.**

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

---

## FULL AUDIT — Ch1 to Ch7, 2026-08-31

**Act I of Book 2 against 23,322 words of published Book 1.** (⚠️ This section originally read *"21,319 words of Book 2"*. Act I is **21,284** words by the counter settled on 2026-09-02; the old figure came from the second, now-retired word counter. The comparison and every finding below are unaffected.) Run with `node tools/voice-audit.js --per-ch`, which is now committed. Everything below was found by frequency comparison; **not one of these was findable by reading Book 2 on its own**, which is the whole argument for the method.

### Closed — the three defects from 2026-08-27

| | Then | Now |
|---|---|---|
| Typography | 420 straight double quotes, 205 straight apostrophes, zero curly | **Zero straight quotes across all seven chapters** |
| Indefinite `-body` forms in narration | 13 | **Zero.** All surviving instances are dialogue |
| The relative-clause coda `, which was` | 7 | **One**, inside a quoted document, where document voice governs |

### Found and fixed — three migrations, all created by our own rules

Full write-up in `03-themes-and-tone.md` → THE THREE MIGRATIONS. In summary:

1. **`nobody` → `no one` → `anyone`.** Book 1 narration says *anyone* once. Book 2's first seven chapters said it **eighteen** times, and **thirteen were one construction**. Reduced to eight and the family broken up.
2. **The em-dash ban relocated the parenthetical into `, which`.** Book 1: 157 em dashes, **zero** `, which`. Book 2: zero em dashes, **eleven** `, which`. Now eight, each of which adds or reverses.
3. **The fragmentation ban relocated emphasis into the copular opener.** *There was a / It was a / That was the / It was the* ran at 37 against Book 1's 9. **Half legitimate:** Book 2 writes *"It was a compliment."* where Book 1 wrote *"A compliment."* Eight stacked-existential *descriptions* were converted; every emphatic single-clause arrival was kept.

### CONTRACTIONS — the open item, measured and now ruled

The measurement the previous entry asked for, split by register and by speaker:

| Form | B1 narration | B1 dialogue | B2 narration | B2 dialogue |
|---|---|---|---|---|
| did not | 98/98 · **50%** exp | 0/15 · 0% | 55/1 · **98%** | 4/7 · 36% |
| was not | 13/9 · 59% | 0/2 · 0% | 32/0 · **100%** | 0/9 · 0% |
| had not | 11/4 · 73% | — | 34/0 · **100%** | 0/2 · 0% |
| could not | 4/3 · 57% | — | 25/0 · **100%** | 0/2 · 0% |
| do not | 3/1 · 75% | 3/37 · 8% | 2/0 · 100% | 3/8 · 27% |
| it is | 1/0 · 100% | 13/43 · 23% | 2/1 · 67% | 23/28 · 45% |

**Two separate findings, and only one of them is a defect.**

**1. Rourke's voice had drifted, and this is a continuity defect against a published book. FIXED.**

She is a returning character with a measured baseline, and the numbers were not close:

| | Book 1 | Book 2 before | Book 2 after |
|---|---|---|---|
| Rourke, dialogue | **7% expanded** | **61%** | **21%** |
| Kade, dialogue | 10% expanded | 30% | 30% |

Book 1's Rourke says *"you're connecting that to these cases"* and *"That's useful. It's part of what we do."* Book 2's was saying *"It is in who is having them"* and *"I am not being hard on you."* **Fourteen conversions by hand in Ch2, not a sweep.** The residual 21% is entirely her **recitation register** — reading findings off a screen, ruling a thing out, defining a term — which is a different speech act from conversation and is correct. *"reduced is not absent"* stays. *"That's not a mechanism"* changed.

**Kade at 30% was left.** His expansions are few and they sit on his weighted lines, *"What I did not do,"* being the clearest. Revisit if he drifts further.

**2. Narration at 98–100% expanded, against Book 1's 50–75%. NOT FIXED. This is the author's call and it is the largest open voice question in the book.**

Book 1's narrator contracts about half the time on *did not* and says *didn't* 86 times in 18,953 words of narration. **Book 2's narrator says it once in 16,631.** This file's own rule already anticipates the split: *past-perfect reflective narration keeps the full form; ordinary action narration contracts.* Book 2 currently has no second half to that rule.

Against changing it: Iris is flat, the narration sits close to her, and the formality is part of how the book sounds. For changing it: Book 1's narration sat close to Iris too, and it contracted. **It would touch roughly a hundred sentences across seven chapters, so it is a voice decision and not a cleanup. Do not sweep it. Decide it, then apply it per sentence.**

### Verified clean

Em dashes in prose **0** · exclamation points **0** · three-dot ellipsis **0** · British `-our` / `-ise` **0** · `-wards` **0** · *grey* **0** · *nodded once* **0** · *the kind of* **0** · labeled pauses **0** · hedging *seemed/appeared to* **0** · chapter ending registers never exceed a run of two.

### Known-good hits — do not re-flag these

**Every audit that runs these checks will surface them again, so they are written down once.**

- **"Willow" spoken aloud in Ch4.** Terri says *"Willow Halloway."* The Book 1 lock is that **the entity's** name is never spoken. Ch4 is a Recovered chapter six years earlier and the person being named is Willow Halloway, alive, at a reception desk. **That is the design, not a violation.**
- **"a description with a direction on it"**, three times across Ch2 and Ch6. Two are Rourke saying it and Iris giving it back; the third is Iris recalling it in Ch6. **The text signals the echo. Rhyme, not repeat.**
- **"the difference is not direction"** in Ch6 is a deliberate echo of published Book 1 Ch13's *"The difference between them was not direction. Only distance."* The negation survives only inside a quoted case note, because Book 2 retired the construction. **Do not restore the banned shape and do not trim the note.**
- **`, which is a first`** in Ch7 sits inside a quoted shift-handover note. Document voice keeps whatever it would really say.

- **Book 1's fragmented voice breaks quotations across sentence boundaries**, so any verifier matching contiguous strings will report false misses against it. Book 1 Ch22 renders the lock as *"She was closer. To Willow. Than anyone else alive."* The record's *"closer to Willow than anyone else alive"* is accurate in substance and will never match as a string. **Check a Book 1 miss by eye before believing it.** That is how the genuine error below was separated from this false one.

### Correction to this file's own PROTECTED LINES list

**"You don't have to optimize the answer" was recorded as a locked line and has never existed in that form.** Published Book 1 Ch2 reads:

> "If something's off, you can just say that. You don't have to—" he gestured vaguely "—optimize the answer."

The line is broken by a gesture and by two em dashes. **Book 1 is correct and locked; the record was wrong.** This is precisely the failure this file warns about, arriving from the direction nobody was watching: not a line falling out of the manuscript, but **a list quoting a line that was never there.** Corrected here and in `CLAUDE.md`. The locked fragment is **"optimize the answer."**

### ⚠️ A new entry for Law 7 — the tool broke a check during this very audit

**Never run a check containing non-ASCII characters through a shell heredoc.** Curly quotes and apostrophes were mangled in transit, and one check reported **zero** instances of a form the corpus contains 86 times. It did not error. It returned a clean, plausible, wrong number, and it was caught only because a second implementation disagreed.

**Write the check to a file and run the file.** `tools/voice-audit.js` is committed for exactly this reason. When a result surprises you, reproduce it a second way before acting on it.

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
| "optimize the answer" | Book 1 Ch2, published. ⚠️ **The full sentence is broken by a gesture and two em dashes** and has never existed as a contiguous string. See the correction above. |
| "Willow Halloway" | Book 3 Ch21, said once, flat, in passing, **never explained** |

**Verify these at every audit — that they are present, and that they still read exactly as written.**

---

## THE ONE THING A SCRIPT CANNOT DO

**Counting catches a class of defect fast and cannot talk itself into a clean result. It also cannot read.**

On the other project the largest single prose tic — 148 instances of the explanatory coda — **was found by a person reading thirty-one chapters in a row**, not by any check, because no check was counting it, because nobody had written the rule down. Every other tic in that book was caught by counting. That one was not.

**Read the whole book at least once, in order, in one pass.** Nothing else finds the thing nobody thought to look for.


---

## THE THIRD METHOD — the author's chapter review, 2026-09-02

**This project had two ways of finding defects and has now been shown a third.**

| | Finds | Cannot see |
|---|---|---|
| **Frequency comparison** against published Book 1 | Voice defects. Constructions this book reaches for that the finished one never does. | Anything true of both books, and anything that is not a word-frequency phenomenon at all. |
| **Beat counting** against the brief and the dialogue notes | Missing beats, unpaid setups, absent payoffs. | Anything present on the page but wrong. |
| **⚠️ The author's chapter review** | **Arithmetic. Chronology. Access chains. Overclaiming. Domain plausibility.** | Nothing yet, which is why it is now part of the process. |

**Seven chapters reviewed. Five carried a hard error. Not one was findable by either of the other two methods**, because every one of them was a perfectly well-formed sentence that happened to be false.

### What the class actually is

1. **Arithmetic that does not add up.** Three retries described as four. A thirty-one-hour benchmark beaten by two hours reported as eleven. Four intervals on a scale with three transitions in it. Band two called four increases below band five.
2. **Chronology against the calendar.** February called ten months back in a March scene. *Nine months* where *nine weeks* was meant. A man deciding four years ago about a three-year-old event.
3. **⚠️ The access chain — a character knowing something no established channel gave them.** This is the most dangerous of the five, because it reads perfectly. Iris concluded a dead man was outside Rourke's cohort in a book that had spent a chapter establishing that Rourke refused her the caseload.
4. **Overclaiming — an inference stated as a fact.** *"No way of agreeing by accident."* *"No mechanism for failing together."* *"The first observation anywhere in the world"*, four paragraphs before she says she is not certain. **This one matters here more than it would elsewhere, because rigor is Iris's characterization. A sentence she could not defend is a defect in her, not just in the prose.**
5. **Domain plausibility.** A repeatable error said to rule out damaged media. A blind scoring pass that was not blind because the case order was itself a date. *No arrest* said of a dead man. Orientation offered as capacity. A platter where a drive was meant, four chapters deep.

### What was built out of it

- **`tools/number-check.js`** pulls every number-bearing sentence out of a chapter so the arithmetic can be read in a column, and `--calendar` does the same for intervals and month names. **Three of the eleven errors would have been visible in that column in a minute.**
- **`tools/verify-record.py` gained a REVIEW LEDGER check**, because the rule that every tracked file moves with the prose was stated and then not followed for seven chapters running.

### The rule that came out of it

**Two of the five categories cannot be mechanized and both are read-aloud questions:**

- **For every fact a character states, name the sentence that gave it to them.** If there is not one, either write it or take the fact out.
- **For every conclusion, ask whether it survives being wrong.** *Could this agree by accident? Could both records fail for one reason I have not thought of?* If the answer is yes and the prose says no, the prose is overclaiming on a character whose whole value is that she does not.

---

## AUDIT LOG — Ch8, Ch9, Ch10, 2026-09-02

**The section above is the Ch1–Ch7 pass, 21,284 words. The corpus is now Ch1 to Ch10, 31,023 words**, against the same 23,322 words of published Book 1. Run `node tools/voice-audit.js --per-ch`.

### The single largest finding: every US-English screen we had was the wrong kind

Three British forms were in the prose and **all of them survived every check**: *nought* (Ch8, five times), *per cent* (Ch7, twice) and *fortnight* (Ch7). A full sweep afterward found twelve more across five chapters, including *car park* three times, *lift* for an elevator, *queue* for a line of people, *storeys*, *travelling*, *cancelling*, *straight away*, *"was sat in the chair"*, and the bare clock forms *"Half eleven"* and *"half six"*.

**Book 1 has zero hits in all fourteen categories.** Every one was a divergence from a published baseline.

**Why nothing caught them.** Every screen in the tool was **morphological** — `-our`, `-ise`, `-wards`, gray/grey, toward/towards. All of them reported clean, correctly. **These are lexical substitutions with no affix to match.** *"Nought point four"* is not a misspelling of anything. It is the wrong word, spelled perfectly.

**This is Law 2 in a new coat**, and it deserves stating in its own terms: **a screen built on word *shape* is blind to a substitution that changes the word.** Eight new categories are now in the tool — British lexis, US/UK ambiguous, `-ll-`, `-ce/-se`, `-re`, `ae/oe`, `-t` past participles, idiom and clock. **The lexical lists are open. Grow them every time one gets through.**

**Three standing false positives, documented so nobody "fixes" them:** `flat` (the adjective, this series' central word), `different to see it` (the American infinitive, not the British comparative), and `a good deal of` (standard American).

### Law 7 collected, twice

- **The protected-lines list had been reporting a defect that was ruled a records error two days earlier.** *"You don't have to optimize the answer"* was corrected in the prose records on 2026-08-31 and **the checker was not**, so every run since printed MISSING against published Book 1. It now matches the fragment `optimize the answer`, which is what is actually locked.
- **The repo had two word counters.** This file's tool matched `[A-Za-z’']+` and `build-manuscript.js` split on whitespace, so every recorded per-chapter figure disagreed with the build total and drifted further with each chapter. **Settled 2026-09-02: the canonical count is whitespace-separated tokens over the chapter body with the heading dropped, which is the build's method.** `tools/voice-audit.js --per-ch` now prints it and **the number in an "As Written" block is that number.** Never count by hand.

### A defect class the frequency method cannot see, and what does see it

**Beat loss.** Ch10's first draft was 2,137 words, 63% of budget, with three brief beats missing and a fourth that the beat check reported present on a **false regex match** (the pattern for "stopped playing" matched the word *sign*). A fifth beat, specified in `11-key-dialogue-notes.md` rather than in the brief, was missing from two consecutive drafts and was found only by checking the chapter against the dialogue notes as well.

**Three rules out of it:**

1. **Write a beat check against a phrase that can only exist if the beat is written**, never against a word the beat happens to contain.
2. **Check the chapter against the brief AND the dialogue notes.** They hold different beats. The brief had the joke; only `11-key-dialogue-notes.md` had Willow saying the good news out loud, which is the chapter's likeability gate.
3. **Treat anything under about 75% of budget as structurally incomplete rather than brisk.** The 86% drafts were each missing one payoff. A 63% draft was missing four things, and the gap alone was diagnostic before any beat was counted.

### The running figure

**Ten chapters at 88% of budget, every one of them under, and not one short of a beat once it was checked.** That is what produced the retarget to 68,000–72,000 rather than a padding instruction.
