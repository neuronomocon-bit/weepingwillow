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

### ⚠️ THE BASELINE IS A NOVELLA AND THE THING BEING MEASURED IS A NOVEL — added 2026-09-03

**Book 1 is 23,405 words. Book 2 is 72,360.** The comparison is still sound, because **every rate here is per 10k and a rate is length-invariant.** That is the whole reason the method uses rates rather than counts, and nothing about the form difference weakens it.

**What the form difference does change is the noise floor on the Book 1 side.** A per-10k rate computed over 23,405 words rests on very few instances: **Book 1's *no one* at 2.6 per 10k is about six occurrences in the entire book, and its *, which was* at 0 is an absence measured across a quarter of Book 2's length.**

**So the asymmetry to hold in mind:** a Book 2 rate is a measurement; **a low Book 1 rate is a measurement with wide error bars, and a Book 1 zero is not proof the form was avoided — it may be proof the book was too short to contain one.**

**The rule that follows:** **a Book 1 baseline under about ten absolute instances is a weak baseline.** Treat a Book 2 excess over it as a prompt to read the contexts, never as a finding on its own. **Count the family and read the constructions**, which is what the *no one* case above actually turned on — three instances of one construction, not a rate.

**This does not license ignoring the baseline.** The high-count patterns (`thing`, the copular opener, contractions, em dashes) have hundreds of instances on both sides and are as reliable as they look.

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

**⚠️ COMPLETE: Ch1 to Ch10 were reviewed, revised and locked on 2026-09-02.** Eleven hard errors across five chapters. The per-chapter table is the REVIEW LEDGER in `review-progress.md`; the full record of each is the AUTHOR'S REVIEW PASS block in that chapter's brief.

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

### ⚠️ What locking does to a revision, found on Ch8

**A locked chapter is a constraint on the fix, and that is a feature.** Ch8's review found Marin opening a clinical file she is barred from. The obvious repair is to rename the file — but **Ch4 is locked and puts her off the clinical record, and Ch5 is locked and says her identifier carries nine operator notes and that no other identifier carries more than one.** So the note could go in neither, and the search had to continue until it found a third record class that already existed in the protocol.

**The result is better than either obvious fix**, because the witness form makes a sentence true that was not available before: the note is not an observation of a session she witnessed, because Willow said it in a corridor afterward, to her sister.

**The lesson: when a fix is blocked by locked chapters on both sides, the constraint is usually pointing at something the book already has and has not used.** Look for it before you consider unlocking anything.

### ⚠️ THE INFERENCE CHAIN IS A DEFECT CLASS OF ITS OWN, AND IT IS THE HARDEST ONE YET

**Ch14's central derivation was circular and passed every check this project had.** Iris read Willow's intention off the fact of her return, then used that intention to prove the first result had been incomplete. **The beat count passed** — the brief's beats were all present. **The frequency comparison passed.** **The number check passed, because every number in it was arithmetically correct.** The defect was in the *provenance of a conclusion*, not in any sentence.

**Two named sub-classes, both found in one chapter:**

1. **One case promoted to a program.** Caleb establishes a single return. The draft turned it into universal intention and a citywide roster of unfinished subjects. **The test: for every general claim, count the cases it actually rests on, and check whether the prose says that number out loud.**
2. **⚠️ A DATA TYPE SILENTLY CHANGING LEVEL.** Ch7's intervals are between *increases across a population*. Ch14 used them as intervals between *visits to one person*, and then quoted a return window off them to a character. **The numbers were real and the arithmetic was right and the level was wrong.** Nothing flags this: it is the access-chain defect one layer up, where the channel exists but carries a different kind of fact than the one being claimed.

**The fix is never to soften the plot's answer.** The model stays; what changes is that the chapter separates **observed**, **consistent with**, and **hypothesis**, and then argues the decision to act on an unproven model as its own question with its own standard. **Iris acting responsibly on one confirmed return while stating exactly what remains unknown is more frightening than certainty, and it is more in character.** Rigor is her characterization, so an unearned conclusion is a defect in her before it is a defect in the plot.

**⚠️ And the gate ran a third time.** *"present… in the sense that a room is present"* certified Lila's absence by image rather than by adjective. **Do not name what is missing and do not certify what is there — including by simile.**

### ⚠️ CONTRAST FRAMING SURVIVES A PERIOD, AND NO SCREEN WAS LOOKING ACROSS ONE

`03-themes-and-tone.md` has banned **`X was not Y. It was Z.`** since Book 2 began, and it was listed there explicitly. **Every screen we had looked inside a single sentence**, so the split form read as two clean declaratives and passed. Ch14 carried *"four was not a ceiling. It was a stage."* through three passes.

**`contrast framing, split` is now a line in `tools/voice-audit.js`.** With it running: **Book 1 four, Book 2 six** — a *lower* rate than the published baseline, so this is not a runaway tic. **But it is banned outright for Book 2 regardless of rate**, and the six are all in locked chapters (Ch1 ×2, Ch5 ×2, Ch7, Ch12). **They are reported and left alone: this is style, not a consistency defect, so the standing permission does not reach them.**

### ⚠️ A CHECK CAN BE TURNED OFF BY THE THING IT IS CHECKING

`verify-record.py` cross-checks each brief's recorded word count against the prose. It found the header with `re.search(r'As Written \(([\d,]+) words', blk)` — **an exact-case literal.** Ch13, Ch14 and Ch15 were written with headers reading `**AS WRITTEN (drafted <date>, N words)**`, which matches neither the capitalization nor the word order. **The check reported `has no As Written block` and the count comparison never ran for any of the three.**

**Two separate failures, and the second is the one worth keeping:**

1. **The checker was brittle** — it demanded a house style nothing enforced. It is now case-insensitive and finds the count anywhere in the header line, with a comment saying not to tighten it back up.
2. **⚠️ THE FAILURES WERE ON SCREEN FOR THREE CHAPTERS AND WERE FILTERED OUT OF THE OUTPUT BEING READ.** Every run was piped through `grep -v "^  ok"` or `tail`, which cut the FAIL block out of the middle. **The tool was working and reporting correctly and nobody looked at that part of it.**

**So: read the whole of a verifier's output before a commit, or grep for `FAIL` explicitly.** A convenience filter that hides a category of result is the same defect as a screen that cannot match — and it is harder to notice, because the tool is not broken.

**This is the third instance of one shape:** the curly-quote heredoc, the `\b` backspace, and now a check disabled by a header rename. **A clean screen is evidence about the screen.**

### ⚠️ `\b` IN A PYTHON STRING IS A BACKSPACE, AND THE SCREEN REPORTED CLEAN

The screen above was written into `voice-audit.js` by a Python script and reported **0 against a corpus containing seven instances.** The cause: in a non-raw Python string `\b` is **0x08**, so the regex literal in the file demanded a literal backspace character on both ends and could never match. **`\s` in the same string survived intact**, because `\s` is not a valid Python escape and is left alone — which is why the line *looked* right in every editor and in `grep`. It took `cat -A` to see the `^H`.

**This is the sibling of the curly-quote heredoc failure and it has the same shape: a tool reported clean and the corpus was not.** Two rules follow:

1. **Write regexes into tool files with a Python raw string (`r"..."`) or not with Python at all.**
2. **⚠️ A NEW SCREEN IS NOT TRUSTED UNTIL IT HAS CAUGHT A KNOWN INSTANCE.** Before believing a zero, feed the screen the defect that motivated it. A screen that has never matched anything has not been tested; it has only been written.

### ⚠️ AND IT RUNS THE OTHER WAY TOO: THE PAYOFF CAN BE BURIED IN AN EARLIER CHAPTER'S DIALOGUE

**Ch15's single most important beat is a line of Ch4 dialogue that no brief anywhere mentions.** Marin promised her sister, out loud, *"I will not be opening it, and there's a log that would show it if I did"*, and Willow asked whether anyone would read the log, and Marin said probably not. **Ch15 is Marin opening it.** The first draft missed it entirely and came in at 43% of budget.

**So the rule from Ch14 has a second half.** Obligations live in the notes of chapters that pay them off; **payoffs live in the prose of chapters that planted them, in dialogue, unmarked, because at the time it was just a character being honest.** A brief records structure. **It does not record every promise a character happened to make.**

**The check, before drafting any chapter with a returning character or object:** read the prose of the chapter that introduced it, not the brief for it. **Ch4 is nine hundred words of consent conversation and it contains at least three things Ch15 needed.**

### ⚠️ A CHAPTER'S OBLIGATIONS CAN LIVE IN A LATER CHAPTER'S NOTES

**Ch14 owed a beat that appears nowhere in the Ch14 brief.** The **Ch22** dialogue note explains why Iris neither runs nor fights at the climax: *"both were assessed and discarded in writing, in Ch14, when she still had a working process and no fear to interfere with it."* **Ch22 is eight chapters downstream and it is the only place that obligation is written down.** Had it been missed, Ch22 would have had to invent the assessment retroactively or lose its best structural payoff.

**The rule already said to check the brief AND `11-key-dialogue-notes.md`. It now says more than that: check the notes for EVERY chapter that refers back to the one being drafted.** A grep of both bible files for the chapter number, before drafting, costs a minute. **Setups are recorded where they pay off at least as often as where they are planted.**

### ⚠️ A CHAPTER CAN PASS ITS BEAT COUNT AND STILL BE MISSING WHAT ITS OWN EVENTS WOULD CAUSE

**Ch13 came in at 2,255 words, 66% of budget, with every single brief beat and dialogue note already on the page.** The beat count returned zero missing and the shortfall was real. **This is the second variant of the Act I diagnosis and it needs a separate check**, because the first variant (Ch6, Ch7: a beat is absent and the chapter is simply shorter and smooth) is found by counting the brief, and this one is not.

**What was missing was consequence, not beat.** Willow Halloway died and (1) the last person who saw her every day was never asked, and (2) **Meridian, an institution with a process, never noticed that a patient in its own completed cohort had died.** The brief did not ask for either. The book's entire thesis — institutions behaving correctly and finding nothing — required both. Adding them took the chapter to 2,887 and gave it the structure it had been missing: **four empty results in escalating order** (the recording, the person, the institution, and then the reason none of them can find anything).

**The check, and run it after the beat count returns clean:** ask what the chapter's events would *cause* in the world of the book — who would be told, what process would start, who would call — and then ask whether the chapter shows any of it. **A brief describes what happens. It does not describe what happening means for everyone else in the building.**

**⚠️ Reordering movements to fix structure re-breaks chronology.** Moving Ch13's review block after Neal's Thursday put Raman's Wednesday out of sequence, and adding a movement made the closing scene chronologically earlier than three sections preceding it. **Re-run the weekday and interval pass after any structural reorder, not just after drafting.**

### ⚠️ THE INTERVAL PHRASE IS THE MOST RELIABLE DEFECT IN THIS BOOK

**Every present-day chapter says how long ago something was, and by Ch12 four of those were wrong.** *Ten months* where five weeks was meant (Ch2). *Nine months* where nine weeks was meant (Ch7). *Nine days* where six and eight were meant (Ch11, twice). *Three weeks* where two was meant (Ch6). **Not one was visible on the page.** Each is a well-formed phrase that reads as considered, and the only way to catch one is to compute it.

**Why this book in particular:** Iris measures intervals as a character trait, so the prose is full of them, and **the drafting instinct reaches for a round number that sounds right.** *Nine days* sounds like a considered figure. It is nearly always wrong.

**The sweep, and run it on every chapter before the commit:** pull every `N days|weeks|months ago|earlier|later|after` out of the chapter, name what each one is measuring from, and subtract the Day numbers. `tools/number-check.js --calendar` finds the phrases; **the timeline in `08-book2-chapter-briefs.md` is what they get checked against.** A scratch script that prints each phrase beside its chapter's Day number does the whole book in one pass.

**⚠️ And weekdays are the same class.** Ch12 put Caleb's death on a Thursday when Day 42 is a Tuesday and Day 45 is therefore a Friday, which is also what that chapter's own brief said. **Fix the spine first and the weekday references second, or you will chase them one at a time.**

### ⚠️ A FIX IN ONE CHAPTER IS A CHANGE TO EVERY CHAPTER THAT DEPENDS ON IT

**Found on Ch9, and the cascade was ours.** The Ch8 review moved Marin's corridor quotation from the session file onto a witness form, which is administrative, which is the degraded index. **That was the right fix and it silently invalidated the opening of Ch9**, where Iris was still reading the same quotation off the research archive and counting it against four hundred and eleven research records.

**Nothing caught it. The author's Ch9 review did, one chapter later.**

**The rule, and it is cheap to follow:** after revising a chapter, **grep the other chapters for the facts the revision changed.** For Ch8 that was three strings — `MN-R-0338`, *session file*, *outcome measures* — and any one of them would have surfaced Ch9's opening in seconds.

**⚠️ Do it before the commit, in the same sitting.** A cascade is not a new defect, it is the old one moving, and it is at its cheapest in the minute after the change that caused it.

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

---

## ⚠️ CHECKING A NEW CLAIM AGAINST OLD PROSE — added 2026-09-03, off the Ch16 drafting

**Three defects were caught while drafting Ch16 and not one of them was findable by any screen this project has.** All three are the same shape from three directions: **a sentence that is true about the chapter being written and false about the book it is being written into.** They were caught only because the handoff's rule to read the *prose* of the chapters a new chapter reuses was followed before drafting.

### 1. A general claim can contradict an incidental detail in a locked chapter

The draft had *"Nothing in it went back to anyone"*, meaning the treatment program never returned to a patient it had finished with. It reads as an obvious fact about a clinical program and it is the exact contrast the chapter needs against an entity that does return.

**Locked Ch5 says: *"People who stopped after two. People who came back a year later."***

The claim was false, in the manuscript, in a chapter that had already shipped. **The frequency comparison cannot see it, the beat count cannot see it, and the number check cannot see it, because there is no number in it and it is a perfectly well-formed sentence.**

**The rule: before writing any sentence of the form *"nothing in X ever…"* or *"everything in X was…"*, grep the locked chapters for what they already say about X.** A general claim about a body of material is a claim about every chapter that has described it. This is the inference-chain class from Ch14 turned outward: not a conclusion resting on too few cases, but **a conclusion resting on cases the book has already contradicted in passing.**

### 2. A character can claim knowledge of a stretch she has already said she cannot read

The draft had the entity escalating across *"eighteen months of small work"*. **Locked Ch7 has Iris saying, out loud, to Kade: *"it stops for eighteen months and I cannot read the eighteen months at all."***

**This is the access-chain defect with the channel running backward.** The usual form is a character knowing something no sentence gave them. This form is a character knowing something a sentence explicitly took away, which is worse, because the removal was staged as a beat and the reader may remember it.

**The rule: an established ignorance is an access-chain fact and it decays the same way.** When a chapter makes a point of what a character cannot see, that gap goes on the list with everything she can.

### 3. A document can be handed to a character from outside the archive she actually holds

The first draft gave Iris the substrate log entry Marin files in Ch8 — the shelf at zero point four, the exclusions, the director's account, the review threshold. It is the natural thing to reach for and the reader would never question it.

**Locked Ch7 puts the substrate group's operational archive at *"two years"*.** Ch8 sits at Year −5.8 and the seal is at Year −3, so that entry is nearly three years outside what she has.

**The rule: when a chapter hands a character a document, check the span and the condition of the archive that document sits in, not just whether the document exists.** Recovered material in this book comes off four distinct bodies with four different fates, and the drafting instinct treats them as one library. **The chapter was better without it**, because everything it now runs on came off media the locked chapters put in her hands.

### And the corollary to the NUMBERS rule

`03-themes-and-tone.md` says **one rendering per figure, locked on first use.** Ch16 needed the inverse stated as well.

**One figure per rendering.** The draft used *"five months"* for the length of the read-only stretch and again, four paragraphs later, for how long the substrate loads went on being logged. **Both were arithmetically correct and they were different intervals wearing one phrase**, in a chapter whose entire method is a reader following dates. Changed to four months for the second. It also carried *"a little under eight months"* and *"Eight months"* for one interval, which is the original rule failing in the ordinary direction.

**Both halves are cheap to check and only by reading the number-check column with the question *which one is this?* against every repeated phrase.**

---

## ⚠️ THE CONFIDENCE-LEVEL DEFECT — added 2026-09-03, off the author's Ch16 review

**Ch16 carried no continuity error, no arithmetic error and no missing beat. Every one of the five findings in the author's review was the same thing: a conclusion stated at a higher confidence than the chapter's own evidence supports.**

This is the fourth defect class this project has had to name, and it is the closest sibling to OVERCLAIMING, which was written up off Ch11. **The difference is worth keeping.** Overclaiming was individual sentences asserting more than they could carry. **This is the shape of a whole derivation**, where each step is defensible and the chain quietly gains certainty it never earned.

### The diagnostic, and it is the useful part

**When a character states an epistemic rule out loud, grep the same chapter for the sentences that break it.**

Ch16 has Iris refuse, on the page, to tell Kade what Marin was doing in that basement:

> *"I do not have it, and I am not going to build it for you out of nothing, because if I build it you will carry it around as though I found it."*

**And within a thousand words on either side of that line the chapter said the reads *"produced nothing"*, that both safeguards had failed, that there was *"nothing else in it to run"*, and that she was *"the only living person"* who knew.** The author's summary is the rule: *Iris must apply to her own origin theory the same rule she applies to Kade.*

**A character who is given a scene of epistemic scruple becomes a standard the rest of the chapter is measured against.** That is a good thing to write and it is expensive, because it makes every unearned claim elsewhere in the chapter visible to a careful reader.

### The five sub-classes, in the order they will bite again

1. **⚠️ ABSENCE OF RECOVERABLE EVIDENCE STATED AS ABSENCE OF THE THING.** *"None of them had produced anything"* off a search that establishes only that nothing was filed. **This book is about a woman reading a damaged archive, so this one is structural, not incidental.** Every negative finding she reaches is a negative finding *about the record*. The fix is always the same and always short: name what the search covered. `produced no downstream trace`.
2. **⚠️ ONE OBSERVATION PROVING TWO INDEPENDENT PROPOSITIONS.** Nineteen months of unattended load contradicts the autonomy constraint and says nothing about the integration limiter. The draft failed both off one measurement. **The test: when a conclusion names two things, cover one and ask whether the evidence still reaches the other.**
3. **A UNIVERSAL EXCLUSION WHERE AN EXPERT JUDGMENT WAS AVAILABLE.** *"A metering fault does not produce a cycle…"* is false as stated, because some faults are periodic. **The calibrated version is stronger and more in character**: name the fault modes, say none of the ones she can name fits, put it low, and say out loud that low is not zero.
4. **PARALLEL DESCRIPTION TAKEN FOR IDENTITY OF MECHANISM.** Two accounts of one transformation are powerful evidence and are not proof that the two things are the same thing. **The fix was not to weaken the finding but to write the objection first and then list the evidence that is not a description.**
5. **AN EXCLUSIVITY CLAIM ABOUT PEOPLE THE CHAPTER HAS NOT ACCOUNTED FOR.** *"the only living person who knew"* required knowing Marin's present status, which happens in Ch20, and required excluding every other Meridian employee while the reclassification signature is an open question. **Softeners do not fix this.** *"As far as anything in that room showed"* hedges the sentence and supplies no evidence. **The claim was simply removed and nothing was lost, because exclusivity was not carrying the emotional point.**

### And a pacing consequence, which is the same defect felt rather than seen

The author named it separately: **a run of successive statements each landing as final** — *visits*, both parameters, *one direction only*, *nothing else in it to run*, *the origin end to end*. **Calibrating them made the chain read as more rigorous rather than less decisive**, which is the general lesson and the opposite of what a drafter fears.

### The check to run before any chapter where a character reaches a conclusion

For every conclusion on the page, in order:

1. **Name the observation it rests on**, in one sentence.
2. **Name the gap between the two.** If there is no gap, it is a record and not a conclusion.
3. **Ask whether it survives being wrong** (the Ch11 rule, still live).
4. **Ask whether the character elsewhere in this chapter states a standard this sentence fails** (the new one).

**None of the four can be mechanized and all four are fast.**

---

## ⚠️ A LOCKED CHAPTER'S NUMBERS DATE THE CHAPTERS THAT HAVE NOT BEEN WRITTEN — added 2026-09-03, off Ch17

**The cascade rule has always run backward:** *a fix in one chapter is a change to every chapter that depends on it*, so after revising, grep the others. **Ch17 showed it runs forward as well, and that direction is easier to miss, because the constraint is invisible until you compute it.**

Ch17's deviation was drafted onto *an ordinary Thursday afternoon in February*, which sounded considered and was free of any conflict on the page. **Locked Ch16 dates it.** Ch16 puts the closure in the fall, the first substrate load in the sixth week after it, and the logged loads running *about four months* before they stop, **and Ch17's last line is the sentence that stops them.** Mid-October, plus six weeks, plus four months, is **late March**.

**Nothing flagged this.** The month appeared in one chapter and the arithmetic in another, both were correct in isolation, and the only way to see it was to add up a locked chapter's intervals and ask what date they force.

**The rule: before drafting, pull every interval that a locked chapter states about the period the new chapter covers, and compute the dates they imply. Those are constraints, not context.** In a book with two threads six years apart and a present-day calendar fixed to the day, the numbers already written down decide more of an unwritten chapter than the brief does.

**And the general form, which is worth keeping separate from the backward rule:** a locked chapter is not only a fact the new chapter must not contradict. **It is a set of measurements the new chapter has to land on.**

---

## ⚠️ THE DOMAIN-VOCABULARY DEFECT — added 2026-09-03, off the author's Ch18 review

**Ch17's review found the machine wrong. Ch18's found the statistics wrong. They are the same class and it now has a name.**

**A technical term used at the wrong strength by a character who would know the difference does not just misstate the domain. It makes the character less competent than the book needs them to be.** Rourke is an epidemiologist with nineteen years in the job. **She knows association from prediction, sensitivity from positive predictive value, a temporal cluster from a common-source exposure, and a population risk group from a person-level forecast.** A draft that blurs those has quietly demoted her, and the chapter's whole design rests on her being good.

**This is why the class matters more here than it would elsewhere.** This series runs on institutions behaving correctly and finding nothing. **If the competent people are written as sloppy, the horror collapses into ordinary incompetence** and the book becomes a story about a bad public-health department.

### The four errors, generalized

1. **A count that does not account for what it could not test.** Ch18's living-partials range was computed off six named deaths while **three dead people stood untested against the population.** The floor has to drop by the untested. **The rule: when a range excludes cases you could not check, the floor is the number you get when every unchecked case goes the worst way.**
2. **A negative finding stated as a negative fact.** *"No shared clinical history"* against *"no shared clinical history had been identified."* **The first is false and the second is the chapter's thesis.** This is the Ch16 sub-class (*absence of a recoverable trace stated as absence of the thing*) arriving in an institutional document rather than in a character's head, **and a chapter that insists every sentence of a document is true cannot afford one that is not.**
3. **A real phenomenon denied because one model of it fails.** *"It isn't a cluster"* when the cluster is real and the **exposure model** is what fails. **The rule: name the model that failed, never the observation.**
4. **A predictor claimed off sensitivity alone.** *"It predicts perfectly"* with four hundred members of the risk group alive. **Perfect sensitivity among the placeable deaths, near-zero positive predictive value.** And its sibling: **a case counted as a hit because it *resembles* the outcome**, which defines the predictor by the thing it is supposed to predict.

### The check, and it is cheap

**Take every domain term in a chapter and ask what it would have to be true of.** Cluster, predict, perfect, shared, met, significant, confirmed, ruled out, baseline, association. **Then ask whether the character saying it would accept that usage from a junior.**

**⚠️ And the strongest version of a corrected claim is almost always better drama than the wrong one.** Ch18's Rourke was written as having met the test she set in Ch2. **She has not: the test required a person, a function and a date, and she has a population.** Correcting it produced the chapter's best line and a realization the draft did not have:

> *"That was the bar, and I set it in about forty seconds in this room, and I have spent six hours on a Sunday finding out why I set it there."*
>
> ***"You found the population." / "I found the population. I can't find the person."***

**She now understands her own test better than when she wrote it.** That is not available in the version where she simply meets it.

### ⚠️ And Law 7 collected again, in the same session

**The curly-quote heredoc failure recurred.** A beat-check file was patched through a bash heredoc containing `isn’t` and the assertion failed on the apostrophe. **This file has warned about it since 2026-08-31 and it still happened**, because the heredoc is the fastest way to edit a scratch file and the warning lives four hundred lines away from the habit.

**The fix that actually works: write scratch check files with the Write tool, never through a shell heredoc.** The mangling is silent when it does not assert, and the last time it did not assert it returned a clean, plausible, wrong zero.

---

## ⚠️ THE COMPETENCE FLOOR — added 2026-09-03, off the author's Ch19 review

**This series has one structural requirement and every institutional scene in it is load-bearing on that requirement: everybody behaves competently on the facts available, and the catastrophe happens anyway.** `06-book2-outline.md` states it as a rule. `02-characters.md` says of Raman, *"Do not write Raman as an obstacle or a company man. The reason nobody stops this is that everyone involved is behaving reasonably."*

**⚠️ SO AN INSTITUTIONAL RESPONSE THAT IS INADEQUATE TO THE RISK AS VISIBLE AT THE TIME DOES NOT JUST WEAKEN A SCENE. IT INVERTS THE BOOK.** The horror stops being *nothing in the system was built to catch this* and becomes *these people were bad at their jobs*, which is a different and much smaller book, and which the reader will reach without help.

### What Ch19 got wrong

Virek reported residue that had stopped decaying, integration events with no sessions, an autonomy constraint at a value with no change record, and after-hours activity under a named operator with no session records. **The draft had the program director reply with funding, consolidation and a termination date**, and write that a program with an end date does not open an investigation it cannot finish.

**Containment does not require a completed investigation.** A director can suspend a workspace, preserve logs, identify the operator, verify whether clinical work is affected, and restore a documented configuration, all inside a day. Doing none of that is negligence.

**And it cascades.** With the answer inadequate, the man who accepts it is negligent too, so the chapter's own line — *"He had not been wrong about any of it"* — is contradicted by the scene that precedes it.

### The check, and it is a chain

**When an institution in this book responds to a risk, walk the incident-response chain and confirm the response touches every link:**

**anomaly → containment → operator → affected systems → immediate mitigation → monitoring → ownership → closure criteria → and what later changed.**

**A competent answer touches all of them.** Ch19's rebuilt version does: operator authorized and spoken to, isolation verified rather than assumed, clinical configuration checked the same day, integration accounted for by a documented mechanism, the change-control gap named as a gap in the form, three monitoring triggers, and a termination date.

### ⚠️ And the rule that makes the rebuild better than the original

**Put the failure in a changed assumption, never in a missing step.**

Ch19's answer now rests on five true statements, and **the fifth is carrying the other four**: everything in that workspace is going to be destroyed in the spring. Ch14's reclassification form is what removes it. **Nobody reopens a closed ticket, because none of the three monitoring triggers ever fires in a log anyone reads.**

**That is the series' actual mechanism** — a correct decision, taken on verified facts, invalidated later by an administrative change nobody connects back to it. **It is available in every institutional scene and it is always stronger than having somebody drop the ball.**


## ⚠️ AN INVENTED FIGURE READS EXACTLY LIKE A RECALLED ONE — added 2026-09-03, off the Ch22 drafting

**Two numbers went into the Ch22 draft that had never existed anywhere**, and both of them read as continuity rather than as invention, because they were in the house register and sat in sentences whose other facts were correct.

- ***"the joins that had been visible in January at nine meters"*** — there is no January sighting, and **locked Ch11 puts the only distance sighting in the book at ninety meters.** A figure one order of magnitude off a locked one, in a month with no sighting in it.
- ***"nine operator notes"*** in the inventory of recovered material. **Locked Ch5 and Ch7 give that inventory exactly**: four hundred and eleven session records, seventy-two months of consumption logs, the substrate group's whole operational archive. *Nine operator notes* is a plausible item that was never acquired.

**Neither was findable by any screen this project has.** The frequency comparison sees voice. `number-check.js` prints the sentence and cannot know the figure is fictional. The beat count sees a beat that is present. **A wrong number in a well-formed sentence surrounded by right numbers is invisible.**

**THE CHECK, and run it before any other screen on a new draft:**

```
grep -oh "[a-z-]* hundred and [a-z-]*\|[a-z]* meters\|[a-z]* months" chapters-book2/*.md | sort | uniq -c | sort -rn
```

**Put every figure in the new chapter next to every figure in the locked corpus and make each one either match a locked figure or be a measurement the chapter itself takes.** There is no third category. Ch22's *nineteen seconds*, *two minutes forty* and *eleven minutes* are all measurements the chapter takes on the page, which is why they are safe. Everything else has to trace to a locked line.

## ⚠️ THE FIRST OCCURRENCE OF ANYTHING IS ITSELF A FACT THE RECORD-KEEPERS REACT TO — added 2026-09-03, off the Ch22 drafting

Willow speaks three lines in Ch22. **Nothing has spoken in either book before that.** The first draft rendered the lines and moved on, and the missing beat was not the dialogue but **Iris writing it down verbatim, and knowing while she wrote it that it was the only one of its kind** — no voice in Rourke's four hundred and sixteen, none from the paramedic, none from the neighbor, and none from the woman at the transit stop who held a conversation and could not reproduce a syllable.

**The general form:** when a chapter contains the first instance of something in the whole book, a character who keeps records will register the firstness, not just the thing. **The draft will render the thing and drop the firstness**, because the draft is inside the scene and the firstness is a property of the corpus.

**The diagnostic:** after drafting, ask what happens in this chapter that has not happened before in the book, then check whether anybody on the page notices that it has not.

## ⚠️ A CHARACTER'S HORIZON IS SET BY WHERE HER SOURCES STOP — added 2026-09-03, off the author's Ch21 review

The Ch21 draft had Iris reconstructing a date **against the autonomous draw, running on for two years and four months after the building was sealed.** She cannot know that. **Locked Ch5 gives her seventy-two months of consumption logs *to the end*; locked Ch16 works the draw only *between the last logged load and the seal*. Every recovered system stops in the same week.**

This is the access-chain defect with a different shape: not *who told her*, but *how far does the thing that told her reach*. **A source that is genuinely hers can still not cover the period she is using it for**, and that reads perfectly, because the source is real and the fact is true.

**The diagnostic:** for every fact a character states about a period, name the system that covers **that period**, not the system that covers the subject.

**And the fix was better than the error**, which is the usual result: *"After that there is nothing. A gap has edges and she can measure them. This does not. It is an end."*


## ⚠️ A CODA THAT GROWS INTO A SCENE RELOCATES THE BOOK'S FINAL IMAGE — added 2026-09-03, off the author's Ch22 review

**Ch22's coda passed every check this project has.** Under its 400-word ceiling at 283 words. No appetite language. No word naming the feeling. The sister touched in one clause and not as a thought. Every negative gate clean.

**And it ended the book on the wrong character.**

The closing line was *"She went down the stairs and out onto the street, and she went on holding the shape of a smaller one held by a larger one."* The brief required **the final image to belong to Iris even though the coda is Willow's**, and specified **a paragraph, not a scene**. The draft's coda was **seven paragraphs and it ended in physical action**, which is a scene, and a scene competes for the last image and wins.

**The consequence the word count could not see:** the book stopped closing on a woman declared permanently incomplete and started closing on **the entity carrying its new information toward the sequel.** The author: *"The plant becomes the destination rather than the residue of Iris's failed completion."*

**THE RULE. A word ceiling does not enforce a form.** A coda, an epigraph, a frame, any short unit appended to a chapter — **the constraint that matters is whether it is doing scene work, not how long it is.** The tells: **it has movement in it, it has a sequence of moments, and it ends on an action.** Any one of those turns an afterimage into an ending, and **the last ending in a book is the one the reader keeps.**

**THE CHECK, and it takes ten seconds:** read only the final sentence of the chapter and ask **whose book it just ended.** If that is not the answer the brief specifies, the coda has taken the ending regardless of its length.

**The fix is a relocation, not a cut.** Ch22's coda went to five paragraphs and 273 words with no action in it, and the last movement gives the unresolved value an address instead of putting the entity on a street: *"the two of them at one address, and the address is a room with the lamp turned off and a woman in it who has been gone over twice and has nothing further in her to remove."* **The coda stays Willow's and the image is Iris's**, which is what the brief asked for and what only reading the last sentence alone would have caught.
