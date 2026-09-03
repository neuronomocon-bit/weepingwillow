# Book 2 — "The Ending" — Writing & Review Progress

**Arc reset: 2026-08-26** (second reset; the first was 2026-08-04)

Tracking each chapter of Book 2 from draft through review.

**Workflow, changed 2026-08-27: there is no staging file.** Claude drafts each chapter from the briefs in `series-bible/08-book2-chapter-briefs.md` **straight into `chapters-book2/NN-slug.md`**. The author proofreads and edits **in place**. The file does not move on approval; an "As Written" block is added to the brief.

**⚠️ `build-manuscript.js` picks up every numbered file in `chapters-book2/`**, so an unreviewed draft is inside the export path. Read what the build reports before exporting.

Book 1 — "The Absence" is complete and published (2026-05-14). Its review history is preserved in CLAUDE.md and git.

**Book 2 is a sequel.** It opens weeks after Book 1 ends. The origin arrives as seven dramatized Marin chapters that Iris recovers off Meridian's drives. Both superseded arcs — "The Hunger" and the prequel "The Keeping" — are in `series-bible/archive/`.

**Briefs written 2026-08-26; reconciled and merged 2026-08-27.** All 22 are in `series-bible/08-book2-chapter-briefs.md`.

> **Note on the merge.** Two complete, independent brief sets were written for this arc in parallel sessions. The set committed in `a5f0fd2` is the base and is the stronger of the two — its Investigation Spine, its Ch11, its un-warnable Lila Mercer scene, and its account of why the entity cannot complete Iris all survive intact. Four things merged in from the other set: **the title, the Ch22 Lena plant, the Act III rename the title forces, and a worked prose example.** The second set is archived at `series-bible/archive/arc-03-superseded/08-book2-chapter-briefs-SEQUEL-B.md`.

**Title set 2026-08-27: "The Ending."** It names her turn to killing. "The Keeping" was chosen for the prequel and was retired with it. Act and chapter headings use arc names and are not keyed to it.

## Conventions Being Enforced

Book 2 follows the **PROSE CONVENTIONS (HARD RULES)** and **SENTENCE VARIETY** sections in `series-bible/03-themes-and-tone.md`, which is the **single source** for them. These are hard audit gates and supersede Book 1's looser handling of the same patterns.

1. **PROSE HARD RULES:** No AI-writing tics; no "it's not X, it's Y" contrast framing; no "wrong"/"off" as atmospheric shorthand; no "the kind of…" / appositive-as-thesis; no labeled silences; no "nodded once"; no narrator editorializing; no duplicate reflection blocks; no exclamation points; no em dashes; no repeated comparative crutches ("the way…"); no bloat/repetition. Full list in `03-themes-and-tone.md`.

2. **Sentence variety:** Single-line fragments are emphasis only. Environmental description must flow. Apply the read-aloud test.

3. **Punctuation:**
   - **⚠️ CORRECTED 2026-09-02.** This line used to read *"Full-sentence questions use question marks for ALL characters, including flat-affect."* **That is not what the book does and has not been since Ch1.** It contradicted CLAUDE.md and it contradicted eight drafted chapters, which are consistent with each other and with published Book 1. The rule below is the one actually in force, measured off the prose.
   - **Flat-affect characters take periods on questions, full-sentence or not.** Iris throughout the present thread, and post-treatment Willow Halloway: *"Do you see it." "How far behind." "Who writes this." "Where are you." "What time was the first." "When did you last see him before this morning."*
   - **Warm characters take question marks, including on short ones.** Lena, Kade, Rourke, Marin, pre-treatment Willow Halloway: *"How are you sleeping?" "Can you see it?" "Is it going to change me?" "Who are you with?"*
   - Short tonal probes may keep periods in any mouth: "How." / "Why." / "Where."
   - Dialogue tags: "said" not "asked" for flat-affect characters
   - **Book 2 note (CHANGED at the 2026-08-26 reset):** Iris is post-Book-1 and flat throughout this book — the flat-affect convention now applies to her in every present-day chapter. Lena, Kade, and Rourke are warm. In the Recovered chapters, Marin and pre-treatment Willow Halloway are intact and use question marks normally; post-treatment Willow Halloway is flat.

4. **Device/terminal readouts:** inline with colon + italic, not stacked on separate lines

5. **Scene breaks (`***`)** where scene/location transitions occur

## Book 2 — Specific Audit Gates

Checked on every chapter of this book in addition to the standard passes:

- **No villainy.** Marin never does the wrong thing in a scene. No hubris, no ignored warning played for effect, no moment where the tone signals its own importance. If a chapter reads like a horror movie about a scientist, it fails.
- **No frame device inside a Recovered chapter.** They are scenes, not documents. No timestamps, no file headers, no voiceover, no cutting back to Iris mid-scene.
- **No appetite language for the entity.** Satisfaction is completion, not pleasure. Never hunger, craving, relish, savoring, enjoyment.
- **No cruelty.** Willow has never intended harm and still does not. She is increasing a dose that is not working.
- **The reader must like Willow Halloway.** Check every scene she is in.
- **Nobody explains the name.** Iris finds it in Ch15. Nobody explains it, in any chapter, ever.
- **Iris does not feel the origin.** She reconstructs what Marin felt, correctly and completely, and nothing arrives.
- **Continuity locks from published Book 1** (see the table in `06-book2-outline.md`): "Meridian didn't shut down clean," the deliberately spread sites, Kade's live access codes, relay and transfer points, and the fact that "Willow" appears in Book 1 only in Ch21–22 and only in narration.

## Length Target

**68,000–72,000 words** (revised 2026-09-02 by the author; was 78,000–85,000), roughly 3,100 per chapter. **The per-chapter budgets in the table below are unchanged and are now a ceiling and a diagnostic, not a target** — a chapter at 87% of budget with every brief beat present is finished. A chapter under 2,000 words has been written in Book 1's voice and needs rewriting, not expanding.

---

## Chapter Status

| # | Title | Thread | Budget | Draft | Review |
|----|-------|--------|--------|-------|--------|
| **ACT I — WHAT CAME BACK** | | | | | |
| 1 | Aftermath | Iris | 3,400 | **DRAFTED 2,931** | **✅ LOCKED 2026-09-02** |
| 2 | Mortality | Iris/Rourke | 3,400 | **DRAFTED 2,951** | **✅ LOCKED 2026-09-02** |
| 3 | The Files | Iris/Kade | 3,600 | **DRAFTED 3,055** | **✅ LOCKED 2026-09-02** |
| 4 | **RECOVERED: Intake** | Marin | 3,600 | **RE-AUDITED 3,394** | **✅ LOCKED 2026-09-02** |
| 5 | Read | Iris | 3,600 | **DRAFTED 3,185** | **✅ LOCKED 2026-09-02** |
| 6 | Too Much | Iris | 3,400 | **DRAFTED 3,280** | **✅ LOCKED 2026-09-02** |
| 7 | The Curve (ACT I TURN) | Iris | 3,600 | **DRAFTED 3,529** | **✅ LOCKED 2026-09-02** |
| **ACT II — THE PROTOCOL** | | | | | |
| 8 | **RECOVERED: Sessions** | Marin | 3,800 | **RE-AUDITED 3,851** | **✅ LOCKED 2026-09-02** |
| 9 | Lena | Iris/Lena | 3,600 | **DRAFTED 3,329** | **✅ LOCKED 2026-09-02** |
| 10 | **RECOVERED: Calm** | Marin | 3,400 | **DRAFTED 3,042** | **✅ LOCKED 2026-09-02** |
| 11 | **MIDPOINT: Caleb** | Iris | 3,800 | **DRAFTED 3,099** | **✅ LOCKED 2026-09-02** |
| 12 | After | Iris | 3,600 | **DRAFTED 2,734** | **✅ LOCKED 2026-09-02** |
| 13 | RECOVERED: The Water | Marin | 3,400 | **DRAFTED 2,883** | **✅ LOCKED 2026-09-02** |
| 14 | Open Jobs | Iris | 3,600 | **DRAFTED 3,298** | **✅ LOCKED 2026-09-02** |
| 15 | RECOVERED: The Map (ACT II TURN) | Marin + Iris coda | 3,800 | **DRAFTED 2,883** | ✅ **LOCKED 2026-09-03** |
| **ACT III — FINISHING** | | | | | |
| 16 | The Name | Iris | 3,600 | **REVISED 3,955** | ✅ **LOCKED 2026-09-03** |
| 17 | **RECOVERED: The Limiter** | Marin | 3,400 | **REVISED 3,032** | ✅ **LOCKED 2026-09-03** |
| 18 | Escalation | Iris/Rourke | 3,800 | **REVISED 3,577** | ✅ **LOCKED 2026-09-03** |
| 18 | Escalation | Iris/Rourke | 3,800 | — | — |
| 19 | Almost | Iris | 3,600 | **REVISED 3,727** | ✅ **LOCKED 2026-09-03** |
| 20 | **RECOVERED: The Last Session** | Marin | 4,400 | **REVISED 3,807** | ✅ **LOCKED 2026-09-03** |
| 21 | Why Lena | Iris | 3,600 | **REVISED 3,572** | ✅ **LOCKED 2026-09-03** |
| 22 | The Second Visit (ENDING) | Iris + Willow coda | 3,800 | **DRAFTED 3,246** | ⏳ awaiting author review |

Legend: `—` not started · `WIP` in progress · `DONE` complete · **`LOCKED` reviewed and approved by the author — see LOCKED CHAPTERS below**

**Only chapters drafted under the current arc live in `chapters-book2/`.** Ch1 is the first.

---

## Portable Drafts

Two chapters written under the prequel arc survive because they are Marin/Meridian scenes and the Recovered thread needs them nearly unchanged.

**Ch4 — RECOVERED: Intake** · **RE-AUDITED 2026-08-31 and moved to `chapters-book2/04-intake.md`. 3,394 words. Awaiting the author's proofread.**

Marin, Willow Halloway's enrollment, Terri Roth at the desk. Approved 2026-08-04 under the old arc, re-audited against the current gates before it moved. **Full record in the Ch4 brief.** Headlines: the research identifier is now a concrete string on the page, `MN-R-0338`, because the draft established the mechanism and never gave the reader a token to carry; a session-count continuity error was corrected against Ch8; and `hands flat on the table` was nearly cut as a generic gesture beat before Ch8 turned out to quote it back, which is Law 6 doing its job.

**Ch8 — RECOVERED: Sessions** · **RE-AUDITED 2026-09-02 and moved to `chapters-book2/08-sessions.md`. 3,851 words (from 3,387). Awaiting the author's proofread.**

Sessions one through four from the observation side, then the substrate lab. Dr. Feld; Raman first named; the substrate parameters established as furniture. **Full record in the Ch8 brief.** Headlines:

- **All 33 brief beats were verified present before the word count was looked at**, per the Act I discipline. It came in 182 under budget with nothing missing, which under the retarget is a finished chapter.
- **The identifier question resolved to a third option.** `MN-R-0338` was *issued twice*, not reissued. The reader's token never changes and Ch15 still earns its three checks, because the number's history is the contested thing rather than the number. Ch15's brief now carries the first join returning a man.
- **The substrate hall was environmental description written in two fragments** — the book's first hard gate, in a draft that predates the gate. Rewritten joined.
- **Two setups the draft had left unpaid**: the witness chair (the protocol requires one for the first four sessions and nobody was ever in it) and Dr. Feld, who had one line in the only chapter she appears in. Both paid. **This is the third consecutive chapter where the short draft was missing a person or a payoff and not description.**
- **Three British forms got through every existing screen**, two of them into audited Ch7. See the warning below.

**Retired: Ch2 — Recovery** · 2,855 words · **archived 2026-08-27 to `series-bible/archive/drafts/DRAFT-prequel-ch02-recovery.md`**

Built on intact pre-Book-1 Iris, who no longer appears in this book. It was moved out of `chapters-book2/` because that folder is the manuscript source and `build-manuscript.js` was picking it up as chapter 2.

Its salvage is assigned: the crate and manifest physicality goes to **Ch3**; the wet-drive procedure, the ninety-minute bridge, the dead-credential authentication and the thing Iris likes about a dead system answering go to **Ch5**. The **R. Oyelaran** material — a thorough man ignored who went on being thorough anyway — goes to **Ch19**, as the shape of Virek's closed ticket, which is a much better use of it.

---

## Drafting Lessons Carried Forward

Hard-won on Ch1–Ch3 under the old arc. All three still apply and all three cost a full rewrite or a heavy author pass when they were missed.

**1. Run-on comma chains — screen WHILE drafting, not after.** The Ch1 first draft defaulted to chained `", and X, and Y, and Z"` construction, worst case 6 commas / 5 conjunctions / 85 words in one sentence; 18 sentences had to be rewritten. The Ch2 first draft then came in with 10 sentences over the threshold *one chapter after the gate was written down*, because the screen was run as a post-pass instead of applied at the sentence.

**Screen:** flag any sentence with 3+ commas, 3+ instances of "and," or 45+ words, then justify or fix each one. Legitimate survivors are colon-introduced lists, serial verbs, deliberate accumulation, and dialogue where a character is genuinely spilling.

**2. The trailing explanatory sentence — check by hand, it passes every mechanical screen.** A good image followed by a line telling the reader what to make of it. The van parked facing out, then a sentence explaining why you park facing out. Thirteen of these came out of Ch2 in the author's pass; four more out of Ch3.

**Screen:** read the last sentence of each paragraph alone and ask whether the paragraph is finished without it. If it is, cut it. The related failure is the trailing clause on an otherwise clean sentence.

The most serious catch of this type was in Ch3: "Marin thought so **at the time** and would have said so if anybody had asked her." Both halves point forward and signal that this gets revisited, which is dramatic irony in the prose. Cut to "It was a good answer."

**3. Length drift.** Every chapter so far has landed under budget — Ch1 at 3,286 against 3,800, Ch2 at 2,855 against 3,200, Ch3 at 3,387 against 3,800. The cuts were correct every time and nothing was restored, so the fix is fuller scenes at the drafting stage rather than restoring cut lines. Assess at the end of each act rather than padding individual chapters.

**4. Book 1 register leaking in.** Scan every chapter for "she noted," "she registered," "Expected/Observed," and "the absence of." Ch2 was scanned clean. **This gate is now harder, not easier:** Iris is flat in this book, and her Book 1 voice will be actively tempting. Flat affect is not the same as fragmented prose. She observes in complete sentences.

---

## ⚠️ LENGTH — five chapters in, and the diagnosis is starting to name itself

| Ch | Budget | Drafted | Under |
|---|---|---|---|
| 1 | 3,400 | 2,931 | 469 |
| 2 | 3,400 | 2,951 | 449 |
| 3 | 3,600 | 3,055 | 545 |
| 4 | 3,600 | 3,394 | 206 |
| 5 | 3,600 | 3,185 | 415 |
| 6 | 3,400 | 3,280 | 120 |
| 7 | 3,600 | 3,529 | 71 |
| **ACT I COMPLETE** | **24,600** | **22,325** | **2,275** |
| 8 | 3,800 | 3,851 | -51 |
| 9 | 3,600 | 3,329 | 271 |
| 10 | 3,400 | 3,042 | 358 |
| 11 | 3,800 | 3,099 | 701 |
| 12 | 3,600 | 2,734 | 866 |
| 13 | 3,400 | 2,883 | 517 |
| 14 | 3,600 | 3,298 | 302 |
| 15 | 3,800 | 2,883 | 917 |
| **THROUGH CH15** | **53,600** | **47,444** | **6,156** |

*Counts revised 2026-08-31 after the full audit. Ch3 gained 281 words from a beat the outline said it owed and the draft had skipped; every other movement is a few words either way from tic fixes.*

Each was diagnosed rather than padded, and each time the diagnosis found something real, and the something real was never description. **Do not fix this by padding.**

**Ch4 and Ch5 are the two useful data points, and they point the same way.**

Ch4 was not drafted under the current process. It came in at 3,286 under the prequel arc and its re-audit added a beat, not description, and it lands **251 under**.

**Ch5's first draft came in at 2,534**, which is 1,066 under and worse than anything before it. The diagnosis found two beats the brief asks for and the draft had skipped: the refusal to rush had nothing in the chapter to refuse, and the media-condition procedure had been summarised in one sentence instead of rendered. Putting both on the page took it to 3,084. **Nothing that went in was description. It was a consequence and a procedure, exactly as the word-target rule predicts.**

**Five chapters in, the answer is the second of the two possibilities.** The budgets are not set high. **The drafting skips beats and then reads as finished**, because a chapter with a missing beat has no hole in it: it is shorter and it is smooth, and only counting the brief's beats against the page finds it. Every diagnosis so far has found something, and none has failed to.

**What that changes, starting at Ch6: count the brief's beats against the draft before the word count, not after.** The word count is the symptom that prompts the check. It has never once been the defect.

**Ch6 ran that way and it worked.** The first draft came in at 2,220. The beat check found three absences: the flat was never entered, the neighbor was summarised instead of played, and the consequence for Rourke's dataset was missing entirely, which is the finding Ch7 is built on. **The redraft landed at 3,013, which is 387 under, and nothing added was description.** The gap between 1,180 under and 387 under is the difference between a chapter with three beats missing and a chapter that is simply brisk.

**Still assess formally at the end of Act I**, with Ch1 through Ch7 on the page. If the pattern holds after the beat check is applied at drafting time rather than at audit time, the budgets get revisited then.

---

## ⚠️ THREE LIVE DEFECTS — Ch1–Ch4 clear, Ch8 outstanding

> **Status 2026-08-31.** All three are fixed in Ch1, Ch2, Ch3 and Ch4. **`chapters-book2/` now measures: zero straight quotes, zero `, which was` codas, one `no one` per chapter at most, and every surviving `-body` pronoun in dialogue.** `DRAFT-sessions-ch8.md` still carries all three untouched — 200 straight double quotes and 107 straight apostrophes — and gets them when it comes up for its own re-audit.

Found 2026-08-27 by measuring the drafted Book 2 chapters against published Book 1. **None of them is an error in the ordinary sense** — every instance is correct English that no reader would flag. They are series-voice divergences, and only the frequency comparison could surface them. Method and full numbers in `series-bible/14-audit-method.md`.

**1. Typography.** Book 1 is 92% curly (`“ ” ’`). **Both drafted Book 2 chapters are 100% straight** — 420 straight double quotes and 205 straight apostrophes, zero curly. It will show in the docx export. **Convert to curly. Book 1 is published and is not retro-edited**, including the 222 straight quotes sitting in its Ch4, Ch9, Ch14 and Ch15.

**2. Indefinite pronouns.** Book 1 says *somebody*, *anybody*, *everybody* and *nobody* a combined **zero** times, and says *someone* 16 times and *no one* 6. The drafted chapters say the *-body* forms **thirteen** times in 6,853 words and say *no one* zero times.

**Narration says *someone* and *no one*.** Dialogue may keep the *-body* forms where they are a character's own register — Willow Halloway especially, who is the only person in the series who talks like someone with nothing wrong with her.

**3. The relative-clause coda** (`, which was X`). Book 1: **0**. Drafted chapters: **7**, at 10.2 per 10k. It is the trailing-explanation tic wearing a subordinate clause, and the existing screen cannot see it.

**Do not convert them into trailing sentences** — that moves the tic into the thing already banned. Cut, bare appositive, colon, or new sentence, chosen per sentence.

**Also open, measured but NOT yet ruled: contractions.** The drafted chapters run 100% expanded on `was not` / `did not` / `had not` / `is not`; Book 1 runs 51.6% expanded on `did not`. **The measurement is whole-text and does not split narration from dialogue**, and some Book 2 formality is deliberate. Run the split before touching anything. **Never sweep dialogue.**

---

## FULL AUDIT — Ch1 to Ch7, 2026-08-31

**All seven chapters audited against published Book 1.** Method and full numbers in `series-bible/14-audit-method.md`; the three tic migrations are written up in `03-themes-and-tone.md`. The comparison is now a committed tool: `node tools/voice-audit.js --per-ch`.

**Closed:** the three defects from 2026-08-27 are all gone. Zero straight quotes, zero `-body` pronouns in narration, one `, which was` and it is inside a quoted document.

**Fixed in this pass:**

1. **Three tic migrations, every one of them caused by our own rules.** `nobody` → `no one` → **`anyone`** (18 instances against Book 1's 1, and thirteen of them one construction; now 8). The em-dash ban relocating the parenthetical into **`, which`** (11 against Book 1's 0; now 8). The fragmentation ban relocating emphasis into the **copular opener** (37 against Book 1's 9; eight stacked-existential descriptions converted, every emphatic arrival kept).
2. **Rourke's voice had drifted badly and this is a continuity defect against a published book.** Book 1's Rourke is **7% expanded**; Book 2's was **61%**. Fourteen hand conversions in Ch2 brought her to **21%**, and the residual is her recitation register, which is correct.
3. **Ch3 was missing a beat the outline says it owes** — the deliberate site-spread behind Book 1 Ch5's *"From themselves."* Now on the page as evidence rather than dialogue: one code series, six destinations, and nothing that would have been useful beside something else sent to the same address. **+281 words, and it is why the index and the archive were separated in the first place.**
4. **A protected line in the records was wrong.** *"You don't have to optimize the answer"* has never existed as a contiguous string; published Book 1 breaks it with a gesture and two em dashes. Corrected in `CLAUDE.md`, `14-audit-method.md` and the briefs. **The list was wrong, not the book.**
5. **Five As Written quotations had drifted** by concatenating across a dialogue tag. Normalised, and there is now a verifier for it.

**~~Left for the author — the largest open voice question in the book.~~ RULED 2026-09-02: match Book 2.**

Book 2's narration is 98 to 100% expanded on `did not`, `was not`, `had not` and `could not` where Book 1's is 50 to 75%. **Book 2's own register is the standard and nothing is swept in either direction.** The hundred-odd Act I sentences stay as written, Ch8 already conformed, and the rule now has its second half in `03-themes-and-tone.md`: **Book 2 narration keeps the full form as its default, in both registers.** Dialogue is untouched and runs the other way, as it must. **Do not reopen this by measuring it again** — the measurement was never in dispute.

---

## CH8 RE-AUDIT — 2026-09-02

Full record in the Ch8 brief. The chapter's own findings are in the tracker entry above. Two things belong here because they are about the *checks* rather than the chapter:

**⚠️ Three British forms got through every existing screen, and two of them were in already-audited Ch7.** `nought` (Ch8 draft, five times), `per cent` (Ch7, twice) and `fortnight` (Ch7, once). Book 1 has none of them and runs `percent` five times and `windshield` twice.

**Why nothing caught it.** The US-English screens were all **morphological** — `-our`, `-ise`, `-wards`, `gray/grey`, `toward/towards` — and every one of them reported clean, correctly, because these are **lexical** substitutions with no affix to match. *"Nought point four"* is not a misspelling of anything. It is the wrong word, spelled perfectly.

**Fixed:** a `British lexis` line was added to `tools/voice-audit.js` covering *per cent, fortnight, windscreen, nought, maths, whilst, amongst, kerb, storey, aeroplane*. **The list is open and should grow every time one gets through.**

**And the general form of it, which is the more useful lesson:** a clean screen is evidence about the screen, not about the prose.

## REVIEW LEDGER — the author's chapter reviews

**One row per chapter reviewed.** The full record of each is the **AUTHOR'S REVIEW PASS** block in that chapter's brief. This table exists so that a reviewed chapter cannot be locked without the record following it, and `python tools/verify-record.py` checks both.

| Ch | Hard errors found | The one that mattered most |
|---|---|---|
| Ch1 | 0 | No contradiction. Emphasis only: the chapter explained ideas it had already dramatized. `thing` at six times Book 1's rate was the measurable half of that. |
| Ch2 | 2 | **Rourke could not wait for a preventable death.** Also *"ten months ago"* against *"in February"*, which put the scene in the wrong season and set the series calendar. |
| Ch3 | 2 | **She powered a cartridge in the bay and then said nothing gets powered up in the bay.** Also Kade deciding four years ago about a three-year-old event, and *platter* for *drive* across four chapters. |
| Ch4 | 0 | No contradiction. An intent question: the consent gap is real, intentional, and the chapter had to be made to know it. Forced the clarification of Gate 1. |
| Ch5 | 2 | **Off by one on the retries**, and a benchmark beaten by two hours reported as eleven — a bleed off the eleven minutes two paragraphs earlier. |
| Ch6 | 2 | **Iris knew he was outside Rourke's cohort with no channel that could have told her.** Fixed with the one-way check built into Ch2 two revisions earlier. |
| Ch12 | 4 | **A chronology conflict, not an arithmetic slip.** Day 42 is a Tuesday, so Day 45 is a Friday, and the draft said Thursday throughout while spanning a whole week inside a Days 46–48 chapter. Day 48 protected and the later-week material moved onto the spine. **Also surfaced three interval errors in locked chapters.** |
| Ch11 | 3 + 1 | **The one that mattered was not arithmetic.** Iris sat and watched a pulse fall from forty-four to thirty-one without calling anyone, which made her non-intervention the largest moral act on the page and swamped the band-five score. **She cannot accept his refusal, because a refusal requires wanting an outcome and she has spent an hour documenting that he cannot produce one.** She calls; it does not arrive. |
| Ch10 | **0** | **The first with no hard error.** One epistemic breach instead: *"and she meant it"* certified Willow's interior in a chapter built on Marin not being able to tell. **The gate runs both ways — do not name what is missing and do not certify what is there.** All three calendar items checked out. |
| Ch15 | 2 + 1 + **1 gate** | **A locked-chapter terminology contradiction was the interesting one.** Ch15 naming a thirty-year clinical retention made Ch8's *"the retention window ran out"* read as the veteran's record being destroyed — but that record must survive intact for the false join to work. Two clocks, one name. Ch8 re-worded to *allocation hold* and re-locked. Also the joke attached to session four when locked Ch13 puts it in session twelve; *"inside tolerance by a factor of five"* against 4.88; and **a narratorial forecast that graded Marin's choice before the chapter rendered it.** |
| Ch14 | 2 + 1 + **1 structural** | **The most important defect found in this book so far, and no existing check could see it: the central derivation was CIRCULAR.** Iris read Willow's intention off the fact of her return, then used the intention to prove the first result partial — promoting one case to a program, and converting Ch7's *population* escalation intervals into a *subject-level* return window she then quoted to Lila. Rebuilt as observed / consistent with / hypothesis, plus a separately argued decision to act on an unproven model. **Two hard continuity errors:** band two scored in January when the scale is built Ch7 Day 39, and Caleb dying "on the north side" when that is the Ch6 man and he died in his apartment. **The 409 became a 405–409 range**, and *"None finished"* was the hypothesis wearing the clothes of a count. **And the epistemic gate caught a third one** — *"present… in the sense that a room is present"* certifies absence by simile. |
| Ch13 | 1 + 1 | **An interval error and an epistemic overclaim, and the fourth review item found a defect in the record rather than the prose.** Thursday to Monday counted as three days. *Every person who has ever* and *no one has ever measured it* both exceeded Marin, in a paragraph whose own first sentence was already calibrated to her. **And the requested interval sweep showed the record's three Recovered figures did not add: 3 + 4 ≠ 6.** Ch10 → drowning is 3.6 months, rounds to four, printed beside the sum. **A clean chapter can still sit on a stale record.** |
| Ch9 | 3 | **A cascade from our own Ch8 fix.** Moving Marin's quotation to the witness form invalidated Ch9's opening and nothing checked downstream. Also a card ledger that reconciles two locked chapters only if a card came off the row, and an evening timed at three hours forty that ran four forty. |
| Ch8 | 1 | **Marin opened the clinical file she is barred from.** Both neighbouring chapters are locked around it, so the note went to the witness form — which made the beat sharper. Plus three architecture questions settled: the avoidable observation, identifier reuse, and the data behind Raman's answer. |
| Ch7 | 6 | **The blind scoring was not blind** — the summaries arrived in the order Rourke's system produced them, and that order is a date. Plus three arithmetic errors and three overclaims. |
| Ch20 | **0 + 2 local** | **⚠️ THE FIRST CHAPTER IN ACT III TO COME THROUGH CLEAN ON ALL THREE CLASSES** — no structural defect, no confidence-level breach, no missing beat. Two local fixes: **an impossible timestamp** (Marin enters at twenty past four and the folder was one she had brought in *an hour ago*), and ***recorded*** colliding with the chapter's own meaning of the word, since it establishes *record* as a physical artifact upstairs and then says no recording was running. Now ***noted***. **⚠️ AND A RULING THAT CLOSES A QUESTION FOR GOOD: Marin says her sister's name and the word stays off the page**, because withholding it preserves the distinction that she says her sister's name and does not address the entity, and because **the one word absent from every form is absent from the page too.** The author confirmed the POV withdrawal as structurally exact and protected seven lines by name. |
| Ch19 | **1 structural + 4 confidence** | **⚠️ THE MOST DANGEROUS DEFECT FOUND IN THIS BOOK, BECAUSE IT DOES NOT READ AS AN ERROR. IT READS AS A SCENE.** Raman's answer to Virek's four findings was funding, consolidation and a termination date, which is not containment and is therefore negligence — **and once his answer is negligent, Virek closing his own ticket is too**, contradicting the chapter's own *"He had not been wrong about any of it."* **The book's thesis inverts from "nothing in the system was built to catch this" into "these people were bad at their jobs."** Rebuilt so both men are competent: operator authorized and spoken to, isolation verified rather than assumed, clinical configuration checked the same day, integration accounted for by the exclusion list, the change-control gap named as a gap in the form, three monitoring triggers, and a termination date. **The failure now lives in a changed assumption** — Ch14's reclassification removes the termination that the other four statements were standing on. Now a standing rule: **THE COMPETENCE FLOOR** in `14-audit-method.md`, with the incident-response chain to walk. Plus four confidence-level fixes: the witness certified *intact*; *the first time in two years she had been sure of anything*; *had not been anywhere since*; and *the only occasion in six years when Meridian looked*. |
| Ch18 | **0 + 7 domain vocabulary** | **⚠️ SAME CLASS AS CH17, ONE CHAPTER LATER: A TECHNICAL TERM USED AT THE WRONG STRENGTH BY THE CHARACTER WHO WOULD KNOW BETTER.** Rourke is an epidemiologist and the draft had her blur association with prediction, sensitivity with positive predictive value, and a temporal cluster with a common-source exposure. **The worst was the Ch2 payoff, and the brief was the source of it:** the brief said she met the threshold she set for Iris, and she has not, because the test needed a person, a function and a date and she has a population. **The corrected version is better and produced the chapter's best exchange** — *"You found the population." / "I found the population. I can't find the person."* Also: the living-partials range ignored three untested dead (400–403 → **397–403**, and Iris catches it herself); *no shared clinical history* → *none had been identified*; *it isn't a cluster* → *the cluster is real, the exposure model isn't*; *predicts perfectly* → *isn't a predictor*; a resemblance counted as a hit; *speculate and be right* → *speculation better than speculation*; and **the Ch14 one-case-to-a-rule defect repeating**, now refused out loud by Iris. See `14-audit-method.md` → THE DOMAIN-VOCABULARY DEFECT. |
| Ch17 | **0 + 2 technical + 3 calibrations** | **⚠️ THE MACHINE-STATE MODEL, AND THE WORST ONE WOULD HAVE PUT SIX YEARS OF THERAPY ON THE WRONG SIDE OF THE SAFEGUARD.** The draft said working a structure requires taking it in as the machine's own and that the limiter prevents exactly that — but normal treatment works patient structures with the limiter active. **The limiter governs attribution, not operation.** Second: *ninety-three point one* was called impossible by the woman who had just enabled it, when attenuation is what working a structure does; rebuilt to separate the fixed archive value from the moving working value and to end on **"She had not initiated attenuation."** Calibrations: autonomy scoped **per workspace against a site default**; *"no other correct entry"* → *"no more specific entry the form would take"*; *"She was not hiding any of it"* → *"She had not put a false name on anything or taken a record out."* **The full audit is now a table in `01-world.md` → THE SUBSTRATE STATE MODEL, and it governs Ch20.** |
| Ch21 | **2 hard + 1 recalibration** | **⚠️ A DATE CONTRADICTED A LOCKED CHAPTER AND THE SWEEP FOUND A WORSE ERROR UNDERNEATH IT.** The filing date read *eleven days after the seal* against locked Ch20’s **seven weeks** — but the draft then had Iris reconstructing that date **against the autonomous draw, which she cannot know**, because locked Ch5 gives her consumption logs only *to the end* and locked Ch16 works the draw only *between the last logged load and the seal*. **Every recovered system stops in the same week.** Rebuilt into the stronger passage: *"A gap has edges and she can measure them. This does not. It is an end."* Also *"Everything it has ever had is that"* falsified two paragraphs later, now ***the only complete map***. **And the central inference outran its evidence:** recognition was stated as fact when failing clinical columns leaves resemblance a strong model, so it split into *Observed / Documented / Model* with the rivals listed, because *"a model with nothing beside it on the page is a model no one has tested"* — **which unified the chapter, since the third line needs the same comparison and the comparison needs the same missing input.** |
| Ch22 | — | **⏳ DRAFTED 2026-09-03, NOT YET REVIEWED.** |
| Ch16 | **0 + 5 confidence** | **⚠️ A NEW CLASS: no continuity, arithmetic or beat error, and five conclusions stated above their evidence.** Absence of a recoverable trace read as absence of the thing; one observation failing two independent safeguards; a universal exclusion where an expert judgment was available; parallel description taken for identity of mechanism; and an exclusivity claim about who else is alive. **The diagnostic: Iris refuses on the page to build Marin's motive out of nothing for Kade, and the chapter breaks that standard four times within a thousand words of the refusal.** See `14-audit-method.md` → THE CONFIDENCE-LEVEL DEFECT. |

**⚠️ Five of seven chapters carried a hard error, and not one was findable by either check this project already had.** See `14-audit-method.md` → THE THIRD METHOD.

---

## LOCKED CHAPTERS

**A locked chapter has been reviewed and approved by the author and is closed to editing** — the same treatment `book1-published/` gets. Not a typo, not a later rule applied retroactively, and **especially not a sweep across all chapters**, which is how an approved chapter realistically gets edited by accident.

| Ch | Title | Words | Locked |
|---|---|---|---|
| 1 | Aftermath | 2,931 | **2026-09-02** |
| 2 | Mortality | 2,951 | **2026-09-02** |
| 3 | The Files | 3,055 | **2026-09-02** |
| 4 | **RECOVERED: Intake** | 3,394 | **2026-09-02** |
| 5 | Read | 3,185 | **2026-09-02** |
| 6 | Too Much | 3,280 | **2026-09-02** |
| 8 | **RECOVERED: Sessions** | 3,851 | **2026-09-02** |
| 7 | The Curve (ACT I TURN) | 3,529 | **2026-09-02** |
| 9 | Lena | 3,329 | **2026-09-02** |
| 10 | **RECOVERED: Calm** | 3,042 | **2026-09-02** |
| 11 | **MIDPOINT: Caleb** | 3,099 | **2026-09-02** |
| 12 | After | 2,734 | **2026-09-02** |
| 13 | RECOVERED: The Water | 2,883 | **2026-09-02** |
| 14 | Open Jobs | 3,298 | **2026-09-02** |
| 15 | **RECOVERED: The Map** (ACT II TURN) | 2,883 | **2026-09-03** |
| | **ACTS I AND II** | **47,444** | |
| 16 | **The Name** (ACT III OPENS) | 3,955 | **2026-09-03** |
| 17 | **RECOVERED: The Limiter** | 3,032 | **2026-09-03** |
| 18 | Escalation | 3,577 | **2026-09-03** |
| 19 | Almost | 3,727 | **2026-09-03** |
| 20 | **RECOVERED: The Last Session** | 3,807 | **2026-09-03** |
| 21 | Why Lena | 3,572 | **2026-09-03** |
| | **ALL TWENTY-ONE LOCKED — THROUGH CH21** | **69,114** | |

**The lock is enforced.** `tools/locked-chapters.json` holds a hash per chapter; `python tools/verify-record.py` reports any that move. If a lock breaks, assume something edited an approved chapter by mistake and read the diff first. To re-lock after an approved change: `python tools/verify-record.py --lock 01-aftermath.md`, in the same commit as the change.

**Locked chapters still count** toward the totals and still appear in the voice audit. They are fixed points, not exclusions. **If an audit flags something inside one, report it and leave it alone.**

---

## CH21 — WHY LENA, drafted 2026-09-03

**Drafted at 3,203, reviewed by the author the same day, revised to 3,572 against a 3,600 budget, 99%. All 81 beats present and all four negative gates clean. ✅ LOCKED 2026-09-03.**

## CH22 — THE SECOND VISIT (2026-09-03): DRAFTED, AWAITING REVIEW

**3,246 words against a 3,800 budget, 85%. Every beat in the brief and in the dialogue note is present and every negative gate is clean. The book stands at 72,360 words across twenty-two chapters, 91% of budget. ⚠️ BOOK 2 IS DRAFTED END TO END.**

**The gates this chapter is mostly made of:** no appetite language anywhere including the coda · no word in the coda naming the feeling · the entity never named and Lena never named · nobody theorizes about the failure, narration included · Iris never recognizes the face.

**The plant is one measurement.** Two minutes forty, one location, no result, and Iris writes that she does not know what it was doing there. **No line joins it to anything.**

**Book 1 Ch22 is paid as a count:** *Third occasion it has stopped short with me. First with contact and a full sequence, run twice.* Then: *"She had been nearer to it than any living person since the first week of January, and the whole of what that had bought her, in four months, was three sentences and a number on the back of her hand."*

**Four fact errors caught by the sweeps and fixed:** a nine-meter sighting in January against locked Ch11’s ninety meters, in a month with no sighting in it; an invented *nine operator notes*; *twenty-two weeks of record* against a four-month record; and *three days* since the last wall reading when Ch21 is Day 72 and this is Day 74. **Day 74 confirmed a Saturday off Day 42 = Tuesday.**

### ⚠️ THE REVIEW FOUND TWO HARD DEFECTS AND ONE OVERRUNNING INFERENCE

1. **The filing date contradicted locked Ch20** (*eleven days* against Ch20's *seven weeks*), **and the sweep found a worse error underneath it.** The draft had Iris reconstructing the date against the autonomous draw — **which she cannot know**, because locked Ch5 gives her consumption logs only *to the end* and locked Ch16 works the draw only *between the last logged load and the seal*. **Every system she holds stops at the seal.** Rebuilt into what is now the stronger passage: *"A gap has edges and she can measure them. This does not. It is an end."*
2. **"Everything it has ever had is that"** was false two paragraphs later. Now **"The only complete map it has ever had is that."**
3. **⚠️ RECOGNITION WAS STATED AS FACT AND IS A MODEL**, and fixing it unified the chapter. Split into *Observed / Documented / Model*, with the rivals listed, because *"a model with nothing beside it on the page is a model no one has tested."* **And the two failures became one failure:** the third line needs the same comparison, and the comparison needs the same input. **The third card now reads *Model, not finding*.**
4. *"nothing in any system she had touched her again"* read as though a system touched her. Now *"she appeared nowhere again in any system Iris had reached."*

**The author ruled the length sufficient at 3,203 and instructed that nothing be added to approach budget.** The revision added 369 words and all of it was the three fixes.

**⚠️ THE BOOK IS INSIDE ITS TARGET RANGE WITH CH22 STILL TO WRITE.** 68,745 against 68,000–72,000. **Ch22 at the running 90% lands the book near 71,900, and at full budget near 72,100.** Nothing needs cutting; the number is here so it is not a surprise at the end.

### ⚠️ THE NEGATIVE GATES ARE THE POINT OF THIS CHAPTER AND ALL FOUR WERE SCREENED

**The entity is never named on the page. Lena is never connected to danger in any wording. No warn-or-risk language appears anywhere. And there is no almost-had-it phrasing.** The subplot file requires that Iris never consider Lena to be in danger, **and the prose does not mark the not-considering either**, because marking it would be naming the absence.

### Three spec corrections, two of them the brief being wrong

1. **The location said "the leased unit."** Same stale phrase as Ch19. Locked Ch9, Ch16, Ch18 and Ch19 all put her at her own table.
2. **The brief and the dialogue notes contradicted each other on whether Lena is present.** The brief had a phone call; the dialogue note has her in the apartment, four feet from the wall. **Resolved toward the dialogue note, and locked Ch9 settles it:** *"I'm going to stop asking if you're okay. And I'm going to keep coming over."* **A phone call wastes the locked promise, and this is the last Iris-and-Lena scene in the book.**
3. **⚠️ The brief contradicted locked Ch9 outright**, having Lena *"ask if she is okay"* when Ch9 is the scene where she says she will stop asking exactly that. Now: *"She had not asked since the end of March, and she was not going to, and the not-asking had become as much a part of the evenings as the too much food."*

### The failure is an unavailable operation, not reaching and falling short

Two descriptions on the table. The record's, of what went into the machine from the older sister, **named once in the ordinary register, four words long.** And her own case file, which is a boundary and not a content. **The operation is to determine whether they are descriptions of the same category, and it requires the second description to contain what it is a description of.**

> *She did not reach for it. There would have been nothing to reach for and she had stopped doing that in February.*

She clears the substitutes in order, **including Lena's testimony, which could describe it from the outside better than anyone alive and not from the position the operation requires.** Then: ***Cannot determine whether these are the same category. Operation requires an input I do not have. No substitute identified.***

### Two consequences the brief does not ask for

- **⚠️ KADE'S APRIL QUESTION IS ANSWERED.** In Ch16 he asked whether the older one knew what she was going to make and Iris said nothing in the record said either way. **There is a record now.** Nowhere in nine days is there a sentence about what would come of it, *"because the author did not know, and could not have, and would have written it down if she had."* **The answer is no and it is now supported.**
- **⚠️ ROURKE HAS THE MECHANISM SHE SAID SHE WOULD NEVER GET.** Iris works out that handing it over leaves her with a mechanism she cannot source, corroborate or act on, and **the same four hundred people and one more thing she could not say out loud.** Card: ***Would want it. Would be worse off with it. Both true.*** Then ***ask her***, because that is the only version of the problem with a person in it who can decide.

### The drafting pattern, eighth chapter running

First draft **2,465 words, 68%**, the lowest since Ch10. Missing: Kade's answered question, the Rourke problem, **the four cards themselves** (which the first rewrite dropped even though the dialogue note names them as the chapter's spine), and the evidentiary assessment.

**Four interval errors caught by the calendar sweep:** *five months* since January where four is right; *the eighth of January* where the calendar says the first week; **Lena stopping asking in *the middle of April* when Ch9 is Day 42, the end of March**; and the card row turning the corner *in February* when locked Ch9 places it in March.

---

## CH20 — RECOVERED: THE LAST SESSION, drafted 2026-09-03

**3,807 words against a 4,400 budget, 87%. All 111 beats present. ✅ LOCKED 2026-09-03. The book stands at 65,542 words across twenty chapters, 91% of budget. Two chapters left.**

**The review found no structural defect, no confidence-level breach and no missing beat — the first chapter in Act III to come through clean on all three.** Two local fixes: **an impossible timestamp** on the folder, since Marin enters at twenty past four and it was described as one she had brought in *an hour ago*; and ***recorded*** colliding with the chapter's own meaning of the word, because the chapter establishes *record* as a physical artifact upstairs and then says no recording was running. Now ***noted***.

### ⚠️ RULED 2026-09-03: THE NAME STAYS OFF THE PAGE. DO NOT QUOTE IT, EVER.

**The reasoning, recorded so no later pass reopens it:** withholding it preserves the distinction that **Marin says her sister’s name and does not address the entity**, and lets the reader supply the word **without the prose collapsing those two meanings.** It also fits the chapter’s documentary logic: **the one word absent from every form is absent from the page too.** Quoting would be more immediately dramatic and **less exact, and exactness matters more here.**

**The original note:**

*"Somewhere in it she said her sister's name… She said it once."* **The word is not on the page.** Quoting it would put the entity's name in the reader's ear at the moment of consumption, which is powerful, **and also risks implying Marin is addressing the thing in the room.** She is not confused about what is in there and the prose must not let anyone think she is. Withholding it is this book's usual method and the reader supplies it. **One-word change either way.**

### The first draft was 74%, under the incompleteness threshold, with every beat present

**Seventh chapter running on that pattern, and the brief made it worse by specifying that the chapter must not hurry.** The five consequences added:

1. **The seven weeks.** She turned down the consolidation post **in a letter of four lines**, and has been driving out to sit in the lot most days. ***"Twice she had gone as far as the north door and turned around, and both times she had recorded it, with the duration, because a decision you back out of twice is data about the decision."***
2. **The colleagues.** Feld to the northern site, one message about a reference and one about a coat. **Terri to the small site inland, after asking whether there would be anything at all going at either, and she had been at that front desk for eleven years.** *"No one called her, and there was no unkindness in that."*
3. **The reclassification, in the record, with the gate holding.** *"The paperwork had said what was true, and she had also known exactly what the true version would do, and both of those are in the record, in that order, **without a conjunction between them that would tell a reader how to feel about it.**"*
4. **⚠️ WHAT IT ACTUALLY DID, which is the chapter's best new material.** *"In the eleventh month it began giving back."* Her material goes in and **something of her sister's comes back, matched to it, in the position where an answer goes.** ***"It was not an answer. She wrote that down four times in four different sets of words, because it was the sentence a reader would most want her to get wrong."***
5. **The two columns.** Left one longer than expected: four entries, every one a person, **three of them dead**, put in anyway because *"a column you curate is not a column."* Right one had three, and **the third was the record, which did not exist yet** — so she wrote it, and finishing it took the column to two.

### The mechanism is the state model used exactly

**A third entry on the exclusion list**, under the same reason code for material held without an owner, on an interface that *"does not ask what kind of person is behind the number."* Then the session **both ways**: *"It is two fields, and there is no special mode and no warning attached to it… She put herself in both fields."* **She cannot come back up because integrated material cannot be flushed, and she knows it because she wrote the paragraph, on the page before the one about the exclusion list.**

### Two payoffs worth protecting

- **The Ch4 corridor light.** Specified even end to end because *"people walking somewhere frightening should not have to walk through a shadow to get there, and it costs four more fittings,"* **and she made that argument herself.** On standby it runs dark nine feet per span. ***"She went the whole length of it anyway."***
- **Pell is why her consent is informed.** She read the shift log, understood in four seconds, and *"had spent nineteen months teaching it what to reach for."*

### She is happy and the prose does not undercut it

The findings stay correct to the end: sequence right, no pain and no prospect of it, **gentle with nothing attached to the word because whatever would have made it ironic had already gone**, and the correctness *"a specification and not a coincidence and not a mercy."* Then ***"she recorded that she was happy, and it was true, and it was the last finding she made."***

**The closing movement has no interiority in it**, which keeps the POV rule intact after there is no POV left. **No flush, because a flush is a return and there was no longer anywhere for anything to be returned to.** ***"The building had one fewer person in it."***

**No violence, no body, no screaming: verified by screen.**

---

## CH19 — ALMOST, drafted 2026-09-03

**Drafted at 3,349, reviewed by the author the same day, revised to 3,727 against a 3,600 budget, 104%. All 92 beats present. ✅ LOCKED 2026-09-03. The book stands at 61,735 words across nineteen chapters, 91% of budget. Three chapters left.**

### ⚠️ THE REVIEW FOUND A STRUCTURAL DEFECT THAT INVERTED THE BOOK'S THESIS

**Raman's answer was not an answer.** Virek reported residue that had stopped decaying, integration events with no sessions, an autonomy constraint at a value with no change record, and after-hours activity under a named operator with no session records. **The draft had the director reply with funding, consolidation and a termination date**, and write that a program with an end date does not open an investigation it cannot finish.

**Containment does not require a completed investigation, so that answer is negligence** — and with the answer inadequate, **Virek closing his own ticket is negligence too**, which contradicts the chapter's own *"He had not been wrong about any of it."* **The horror stops being "nothing in the system was built to catch this" and becomes "these people were bad at their jobs."**

**Rebuilt so both men are competent and the failure comes from a changed assumption.** Raman now answers the findings in order and verifies before he writes: the operator is the program lead with access by right **and he spoke to her**; isolation **verified rather than assumed**, with a technician's initials on it; clinical configuration checked the same day, limiter active on every clinical identifier, site default still two; integration accounted for by the exclusion list; **the change-control gap named as a gap in the form rather than a breach of it**; three monitoring triggers; and a termination date on the workspace and everything in it. **Virek closes on stated grounds and closing is correct.**

**⚠️ AND THE FAILURE IS NOW WHERE THE SERIES NEEDS IT.** *"Five true statements, and the fifth was carrying the other four, and the fifth was the one that stopped being true."* Ch14's reclassification form removes the termination. **Nobody reopens a closed ticket, because none of the three triggers ever fires in a log anyone reads.** Written up as **THE COMPETENCE FLOOR** in `14-audit-method.md`, with the incident-response chain to walk.

**The coldest beat survived and improved.** The draft had *"No one in that exchange discussed the operator,"* which was part of the negligence problem. **Now the operator was discussed, once, and the record of it is four words:** ***Discussed with the operator.*** *"The answer is not in the record, because a conversation is not a document."* **Marin was asked. What she said is not recoverable and never will be.**

**And a rhyme the rebuild bought for free:** Raman's revision request against the change-control form sits in a list of a hundred and forty items, **nine lines below Ch17's session-type request, raised the previous year by the same man.** Neither actioned. *"The records group had two people."*

### Four confidence-level fixes

| Wrong | Right |
|---|---|
| *She was intact* | *Every function Iris tested came back unreduced* |
| *the first time in two years she had been sure of anything* | *sure of something she could not support* |
| *had not been anywhere since* | *had not appeared anywhere she could reach since* |
| *the only occasion in six years when Meridian looked* | *the only occasion Iris could find* |

### ⚠️ THE BRIEF AND THE SUBPLOT FILE CONTRADICTED EACH OTHER, AND THE RESOLUTION IS THE CHAPTER'S BEST BEAT

The brief says **no sighting and no eye contact.** `10-subplot-threading.md` says **"Looks at Iris and defers."** Both are satisfied because **the encounter is an instrument reading, not a sighting.** Iris sits on the bench where it stood five days earlier and runs the check, and the reading **arrives already at a level instead of climbing**, holds, and comes down on its own schedule. She never sees anything. Then:

> *she sat on the bench with the card in her hand and knew, with a completeness she had no instrument for, that she had been looked at and set aside.*

**That also delivers the Iris arc beat the brief does not carry:** *the first thing she has been certain of in two books, and no way to know whether the certainty is real.* She invokes her own Ch7 rule and **builds the tests on the drive back and none of them will run** — no second observer, no direction in the reading, no measurement of intent anywhere, and no body to corroborate. ***"The only evidence for the certainty was the certainty."*** The card reads ***certain, untestable***, with no category, **because there is no row on the wall for a card like that.**

### Two errors in the brief itself, both corrected in place

1. **"a quarterly substrate review three years after the deviation" is impossible.** The deviation sits at Year −4.67 and the seal at Year −3, **so only nineteen months separate them.** It was also anchored wrong: **locked Ch16 has Iris unable to date the parameter change at all.** She counts from the last logged load, which is a date she owns. **Fourteen months after it puts the ticket about two months before Pell's check, and she notices.**
2. **The location said "the leased unit."** Locked Ch16 and Ch18 both put her at the table with the cards above the doorframe, in her apartment. The leased unit is Kade's bay.

### The consequences the sixth short draft was missing

First draft **2,947 words, 82%, all brief beats present.** Added:

- **There is nothing to tell the witness.** Iris runs the Joel-Lila-Caleb assessment without saying so, and the woman is intact, and **no warning exists for a person who was not touched.** *"You have been useful," Iris said, and it was true, and she left it there.* **The exact inverse of Ch14: there the warning was perfect and could not land; here it would land perfectly and there is nothing to warn about.**
- **The Hide card's second line.** It found her forty minutes from her own door, on a bench, with her name on nothing, and did nothing. She writes on the back because the front is full: ***Second occasion. Not at home. No contact.***
- **⚠️ The coldest beat in the chapter, which nobody specified.** *"A man had put four findings and an operator identifier in front of a director, and the director had replied about a budget, a timetable and a termination date, and had not been wrong about any of them. No one in that exchange discussed the operator."* Then: ***"That was the only occasion in six years when Meridian looked directly at what was happening on the lower level, and what came back was a correct account of the site's finances."***

### The Oyelaran salvage is spent, by inversion

**Better than the rhyme the brief proposed.** Iris knows the shape of a record where somebody was ignored: file, no answer, file again longer, a third with a line at the bottom in a different tone, then the submissions stop. *"It has a rhythm you can see from across a room."* **"This was not that."** He asked once and was answered inside a day and closed his own ticket. **No archived draft carries a live claim now.**

### Also fixed

**Three date errors from the calendar sweep**, all off Ch18 running Days 59–65: *six days after the meeting* → two, *eight days ago* → four, *six days later* → five. **And the British-lexis screen caught `pavement`**, changed to sidewalk, plus `autumn` → fall.

**The cross-book payoff lands here:** Raman's termination promise against Ch14's reclassification form. ***Scheduled for termination. Reclassified as fixed. Not terminated.*** That is why the substrate was still in the building when Iris cut the fence in Book 1. **Open question 3 stays open; the signature is still on the corroded slice.**

---

## CH18 — ESCALATION, drafted 2026-09-03

**Drafted at 3,247, reviewed by the author the same day, revised to 3,577 against a 3,800 budget, 94%. All 64 beats present. ✅ LOCKED 2026-09-03. The book stands at 58,008 words across eighteen chapters, 90% of budget. Four chapters left.**

### ⚠️ THE REVIEW FOUND SEVEN ERRORS AND ALL SEVEN WERE DOMAIN VOCABULARY

No continuity error, no beat missing. **Every one was a technical term used at the wrong strength by the character who would know the difference.** New class, written up in `14-audit-method.md` → THE DOMAIN-VOCABULARY DEFECT. **Ch17's review found the machine wrong and Ch18's found the statistics wrong, and they are the same class.**

**Why it matters more here than elsewhere:** this series runs on competent institutions finding nothing. **If the competent people are written as sloppy, the horror collapses into ordinary incompetence.**

| # | Wrong | Right |
|---|---|---|
| 1 | `400 to 403` computed off six named deaths | **`397 to 403`.** Three dead stood untested against the population, so the floor drops by three. **Iris catches it herself on the page.** |
| 2 | *no shared clinical history* | *no shared clinical history **had been identified***. There is one; it sat in a records room across town. |
| 3 | *It isn't a cluster* | ***The cluster is real. The exposure model isn't.*** Nine in eleven days against four years of base rate is a genuine excess. |
| 4 | *it predicts perfectly* | ***It isn't a predictor.*** Four hundred flattened people are alive. Perfect sensitivity, near-zero positive predictive value. |
| 5 | *or looks like it should have been* counted as a hit | *"I'm not counting a resemblance as a hit."* |
| 6 | *could speculate about the cause and be right* | *whose speculation would be **better than speculation**.* |
| 7 | *nothing you could say to four hundred people* | **Iris refuses the one-case-to-a-rule move out loud**, then weighs *a certain harm against an unproven benefit*. |

### ⚠️ AND THE CH2 PAYOFF WAS WRONG IN THE BRIEF ITSELF

The brief said **"She met the threshold she set for Iris in Ch2, by herself."** She did not. **The test required a person, a function and a date, and she has a population.** The brief is corrected in place.

**The corrected version is stronger and it bought a realization the draft did not have:** she set that bar in forty seconds in March and has spent six hours finding out why she set it where she did. ***"You found the population." / "I found the population. I can't find the person."***

### ⚠️ THREE LOAD-BEARING BEATS CAME FROM `10-subplot-threading.md` AND APPEAR IN NO BRIEF

**Add that file to the pre-drafting grep permanently.** It carried **nine deaths in eleven days**, which is the number the whole chapter is built on; the shape of the public response (*a probable environmental factor, an advisory, a number to call, and a request not to speculate*); and **three witnesses who contradict each other**. The Ch18 brief carries none of the three.

### The spine is arithmetic, and that is where the grief goes

Ch14's card read **405 to 409 living partials**. Kade sends six names. Five are confirmed in Rourke's set, taking four hundred and four to three hundred and ninety-nine. **The sixth is Lila, who was one of the four Iris could never place, and who is placed now by dying.** The margin comes down from four to three and *"it came down for the worst available reason."*

New card: **400 to 403**, with *three unnamed, unplaceable, not in the above* beneath it. **The range is one narrower than it was, every number in it is smaller, and it narrowed because somebody died.**

**And she is inside it.** *"She had put herself in the column in April and had not taken herself out… and she had written it without the inclusion registering as anything at all."*

**Lila is one line and the chapter does not stop.** No scene, no return to the flat. The only comment is a card written in four seconds: ***"Warned one. No change to outcome."***

### Two ways the chapter says the same thing

- **The advisory is true in every sentence.** No shared clinical history, because what they shared came off a caseload with no reason to be the first place to look. *"It was the best available explanation for a set of people who could not be told the real one, and it had a process attached to it now, and a process is a thing that keeps going."*
- **⚠️ Its request not to speculate is addressed more exactly to Iris than to the district it was written for, and she agrees with it.** She has a mechanism, a date, an origin and a name, and no route to say any of it without producing a woman who cut a fence.

### Rourke

**Her public register is the contraction lock made into a scene.** *"She did not use a contraction in the whole of it."* Six minutes, no overclaim, *we do not know* three times with what would be done about it each time. **Completely persuasive**, saying things she stopped believing in Ch12. *"The room believed her. Iris watched about ninety people put something down."*

Then the office, and the Ch2 payoff: **she met the bar she set for Iris, alone, in six hours on a Sunday, off her own data.** *"Nineteen years, and I have never had a finding that was that good and that useless in the same afternoon."*

**⚠️ The close is the inverse of Ch16's.** There, Iris went looking for the true sentence and there was not one. **Here she produces it instantly and it is the wrong thing to give.** Rourke asks twice and gets the same accurate answer, and *"Something else had been wanted… she had no procedure for finding out."* **Do not let a later pass collapse these into one move.**

**⚠️ Ch14's uncalled call is not resolved and must never be.** They share a room for half the chapter and neither mentions it. Verified by grep at drafting.

### The pattern held for the fifth chapter running

First draft **2,881 words, 76%, with every beat already present.** Missing consequences again: Iris's own proximity check at one of the addresses and what a null is worth, Kade's offer to get more names, the advisory landing on her, and **Iris being inside her own range.** **Two date errors caught by the calendar sweep**, both anchored on Ch12 being Day 48 and therefore the *first* week of April.

---

## CH17 — RECOVERED: THE LIMITER, drafted 2026-09-03

**Drafted at 2,776, reviewed by the author the same day, revised to 3,032 against a 3,400 budget, 89%. All 53 beats present. ✅ LOCKED 2026-09-03.**

### ⚠️ THE REVIEW FOUND TWO TECHNICAL CONTRADICTIONS IN THE MACHINE-STATE MODEL

No continuity error, no arithmetic error, no beat missing. **Both defects were in what the substrate does, and both came from a fuzzy account of the limiter.**

1. **The limiter governs attribution, not operation.** The draft said working a structure requires taking it in as the machine's own and that the limiter prevents this, **which would mean six years of therapy had run with the safeguard off.** Treatment works patient structures with the limiter active. Rebuilt: the limiter keeps the attribution attached so the flush can hand the material back, and what an archived map cannot do is use the patient-owned pathway, **because it has no owner.** The exclusion list is the documented route for material with none: calibration sets, phantoms, model-fit synthetics. **Marin puts her sister on the list for things that belong to nobody.**
2. **Ninety-three point one was being called impossible by the woman who had just enabled it.** She had let the instrument work the structure, and attenuation is what working a structure does. Rebuilt to separate the fixed archive value from the moving working value, and to end on an absence rather than an impossibility: ***"The baseline had been acquired at ninety-four or above. The working value was ninety-three point one. She had not initiated attenuation."***

**Three calibrations:** autonomy is now **per workspace against a site default**, and she *"set her workspace to four and left the default where it was"*; *"no other correct entry to make"* became *"no more specific entry the form would take"*; and *"She was not hiding any of it"* became *"She had not put a false name on anything or taken a record out."*

**⚠️ The full technical-state audit is now a table in `01-world.md` → THE SUBSTRATE STATE MODEL**, built across locked Ch5, Ch8, Ch13, Ch15, Ch16 and Ch17. **It governs Ch20**, and it carries the standing bar on using Ch8's 0.4 shelf as evidence of anything.

**The chapter the whole series proceeds from, and nothing in it is a rule being broken.** Both parameter changes are documented features used as designed: one research identifier onto the integration limiter's **exclusion list**, which is per identifier and has existed for six years, and the autonomy constraint from **two to four**, a documented value two of the other sites already run. **The clinical configuration is untouched and no patient is exposed.** Neither change goes into change control because change control covers the clinical configuration, and that is scope rather than judgment.

### The first draft was 65% of budget with every beat already on the page

**Fourth consecutive chapter to do this.** The beat count returned clean and the draft was structurally incomplete, exactly as on Ch13 and Ch15. **What was missing was consequence:**

1. **What four months in the map actually gives her.** The chapter had her going down most nights and never showed what she found. **The addition is the chapter's center: on the fourth night she finds herself in her sister's map, one address, eleven things leaning on it, four of them among the parts that had never been asked to carry anything.**
2. **Virek noticing.** He reconciles bookings against loads every quarter, sees eleven sessions with a blank session type, and asks whether the controlled list needs a tenth entry. **Not suspicion. Housekeeping.** It goes to a two-person records group and dies in a backlog behind an equipment register. **The Ch8 identifier-collision rhyme.**
3. **The building thinning**, so the months are felt rather than summarized.
4. **The instrument having a last day.** The wind-down timetable has moved twice and always in the same direction. **Marin never cites it as a reason and it sits in the reader's hand before March.**

### ⚠️ A locked chapter dated an unwritten one

The deviation was drafted onto a Thursday in **February** and the interval sweep moved it to **March**. Locked Ch16 puts the closure in the fall, the first substrate load in the sixth week after it, and the logged loads at about four months, **and Ch17's last line is the sentence that stops them.** Mid-October plus six weeks plus four months is late March.

**Nothing flagged this**, because the month was in one chapter and the arithmetic in another and both were correct alone. Written up in `14-audit-method.md` → A LOCKED CHAPTER'S NUMBERS DATE THE CHAPTERS THAT HAVE NOT BEEN WRITTEN. **The rule: a locked chapter is not only a fact the new chapter must not contradict, it is a set of measurements the new chapter has to land on.**

### One bible conflict resolved

`11-key-dialogue-notes.md` said **"No dialogue. Marin is alone."** The Ch17 brief and `02-characters.md` both require **Terri's car-in-the-lot exchange.** Resolved and written into the dialogue note: **the no-dialogue rule governs the deviation scene and everything after it.** Terri is the only spoken exchange, Virek arrives as an email, and from the March afternoon to the last line there is none.

### The ending is built entirely out of locked Ch5

Ch5 established that the affective valence scale did not discriminate above ninety-four and that a ceiling value is recorded as *at least*, never as *equal to*. **Marin removes the limiter precisely to see past that ceiling.** The render returns **ninety-three point one**, which is on the wrong side of it, and *"there is no arrangement of a map, a viewer, an instrument or an afternoon in which a fixed value acquired at ceiling resolves downward."*

**Then she stops the session recording, and no reason is given.** Privacy, caution and instinct are all available and the text picks none. **Do not let a later pass explain it.**

---

## CH16 — THE NAME, drafted 2026-09-03

**Drafted at 3,617, reviewed by the author the same day, revised to 3,955 against a 3,600 budget, and ✅ LOCKED 2026-09-03. All 42 beats present plus five review calibrations. Act III is open. The book stands at 51,399 words across sixteen chapters, 90% of budget.**

### ⚠️ THE AUTHOR'S REVIEW FOUND NO CONTINUITY, ARITHMETIC OR BEAT ERROR. ALL FIVE FINDINGS WERE CONFIDENCE LEVELS.

**That is a first for this book and it is a new defect class**, written up in `14-audit-method.md` → THE CONFIDENCE-LEVEL DEFECT. The governing note:

> *Iris must apply to her own origin theory the same rule she applies to Kade — do not build the missing part out of nothing, even when the conclusion is ultimately correct.*

**The chapter has her refuse, out loud, to invent Marin's motive for Kade, and then commits four overclaims of its own within a thousand words of the refusal.** The diagnostic that follows is cheap and general: **when a character states an epistemic rule out loud, grep the same chapter for the sentences that break it.**

| # | Overclaim | Fixed to |
|---|---|---|
| 1 | *"produced nothing"* | *"produced no downstream trace"*, plus a paragraph naming what the search did and did not rule out |
| 2 | Both safeguards failed | **Autonomy constraint only.** *"The draw said nothing about the limiter."* Card reads `Limiter: no finding` |
| 3 | *"A metering fault does not produce a cycle…"* | Four periodic fault modes named, none fits, plus the reconciliation as corroboration. *"She put a metering fault low and did not put it at zero"* |
| 4 | *"There is nothing else in it to run"* | *"Nothing in the archive gives it another instruction"*, with the two-mechanisms objection written in first |
| 5 | *"the only living person who knew"* | Removed. *"She knew where it had come from, and the knowing had not opened a single move"* |

**The limiter now gets its own evidentiary step, and it is Pell** — material came off a man on a night check, was never handed back, and no session was open for it to go back inside. **Marked as evidence and explicitly not as proof.** ⚠️ **Ch8's 0.4 shelf is not used for it and must not be**, because Ch8 deliberately left that observation with a valid load-dependent explanation.

**⚠️ On the length.** The five calibrations took the chapter from 3,617 to 4,115. It was compressed back to **3,955 at the sentence and not by removing anything**, which is 110% of budget and the first chapter in the book to run over. The two ways to reach 3,600 were cutting the calibration, which would undo the review, or cutting a beat, which the rules forbid. **The number is reported rather than met.**

**This is the first chapter in the book to come in at budget rather than under it**, and the reason is worth recording: it is a chapter with no scene in it. Everything before the phone call is one woman reading records at a table, so nothing could be carried by staging and every beat had to be a document. **The three drafting checks in the handoff were run before a word was written, and all three caught something.**

### What the checks caught before drafting

- **Grepping the bible for every chapter that refers back to Ch16** returned the Ch17 access block, which is what fixed the chapter's ceiling: Marin's research-side access is legitimate until the afternoon she changes two parameters, so **Iris must reach "the parameters are not what the documentation says" and stop.** She never reaches intent and no sentence imputes any. Ch17 is intact.
- **Reading the prose rather than the briefs** of the chapters Ch16 reuses produced the chapter's two best beats, neither of which is in any brief: locked Ch5's *"all filed under the same operator identifier"* on the reconciliation, which is what turns the consumables orders into the hinge of the whole chain; and locked Ch5's baseline operator note, *"Subject was laughing,"* which becomes the sentence that stops Lena and proves nothing.
- **Running both tools and reading the FAIL block** confirmed the record was clean going in and named the two trackers that had not moved since Ch15.

### ⚠️ Three defects caught against locked chapters, and no screen could see any of them

Full write-up in `14-audit-method.md` → CHECKING A NEW CLAIM AGAINST OLD PROSE. In summary:

1. **A general claim contradicted an incidental detail in a locked chapter.** A first draft had *"Nothing in it went back to anyone,"* about the program never returning to a finished patient. **Locked Ch5 says *"People who came back a year later."*** Cut and replaced with the escalation claim, which is what the beat was actually for.
2. **A claim about a stretch the character has already said she cannot read.** *"Eighteen months of small work"* — **locked Ch7 has Iris saying *"I cannot read the eighteen months at all."*** Cut.
3. **A document handed to her from outside the archive she actually has.** Locked Ch7 puts the substrate operational archive at **two years**, so Marin's Ch8 shelf log entry at Year −5.8 sits outside it. A first draft used it. **Removed, and the chapter is stronger without it**, because everything it now runs on came off media the locked chapters put in her hands.

Also fixed: *"as bad as it had been in March"* about a form she read on **Day 51, which is early April**; and two figures rendered twice, including **`five months` doing duty for two different intervals in one chapter.**

### Two facts it sets that Act III depends on

- **The access log is now Iris's, and she has read it.** The mechanism Ch15 planted (*two lines and no one reads the log*) is the chapter's spine. She has the read history of `MN-R-0338`, dated, hour by hour, under one operator identifier.
- **The origin is solved and the escalation is not.** *"What the origin did not explain was the only part of it that was killing people."* Ch18 to Ch22 run on that gap, and the chapter states it out loud so nothing later has to invent it.

**Open question 3 is now open on the page.** She goes back to Ch14's reclassification form with a name in hand and the signature field is still on the corroded slice. One sentence, no lingering.

### ⚠️ Reported, not fixed: `half past six` in locked Ch14

The `British clock` screen went from one hit to two when Ch16 was drafted. **Ch16's was changed to `six thirty` on the standing rule that a form a screen would flag does not go in, however good the reason.** The other one is the opening sentence of **locked Ch14** — *"she had been looking at them since half past six"* — and the screen is correct to flag it: the forms the US-English sweep deliberately kept are *quarter past nine*, *twenty past five*, *twenty to four*, *twenty to six* and *ten past five*, and **`half past two` was on the fixed list, not the kept one.** So Ch14's instance was missed by the sweep on 2026-09-02.

**It is reported and left alone.** Ch14 is locked, and this is style rather than a consistency defect, so the standing permission to edit a locked chapter does not reach it. **It needs the author's word.**

---

## CH10 — RECOVERED: CALM, drafted 2026-09-02

**3,042 words against a 3,400 budget, all 27 beats present.** Full record in the Ch10 brief. What belongs here:

**⚠️ The first draft came in at 2,137 words, 63% of budget, with three beats missing** — the eleven o'clock phone calls, Marin waiting for the rest of her sister to come back, and the book that Ch13 needs to invert. **A fourth, "stopped playing," passed the first beat check on a false regex match and was not actually on the page.** After those, a second pass found two more the brief had not asked for and the chapter plainly needed: the date three weeks out, and the supervisor course. **Final draft 2,792 at 82%.**

**Two lessons, and the second is new:**

1. **The beat check is only as good as its patterns.** "Stopped playing" matched the word *sign* and reported ok. **Write the check against a phrase that can only appear if the beat is actually written**, not against a word the beat happens to contain.
2. **A 63% draft is a different animal from an 86% draft.** Every previous short draft was missing one payoff. This one was missing four things, and the gap was large enough to say so before the beats were counted. **Treat anything under about 75% as structurally incomplete rather than brisk.**

**The gate this chapter is built on:** no sentence in it calls Willow flat, absent, empty, hollow, missing or gone. Every observation is behavior and every judgment on the page is Marin's and is favorable. **The comparison is the reader's and they have Lila Mercer to make it with.**

**A dating error found and corrected.** The Ch13 brief and CLAUDE.md said Willow drowned "four months after completion." Against the master timeline it is about six; the four months is Ch10 to the drowning, which `10-subplot-threading.md` has always said correctly. Same class as the stale six.

**Ending register is now at the cap.** Ch8, Ch9 and Ch10 all close on narration. **Ch11 must close on dialogue**, and its brief now carries that warning.

---

## CH9 — LENA, drafted 2026-09-02

**3,329 words against a 3,600 budget, 86% of budget, all 30 beats present.** Full record in the Ch9 brief. What belongs here:

**The chapter's engine is a mechanism the book had already established and had not yet used on Iris.** Retrieval is intact and only the charge is gone, so the one thing she can still give her sister is the account. She searches, finds the memory Lena reached for and failed to hold at dinner, and hands it back whole at the moment it will do the most good. **Ch9 opens with Iris reading Willow Halloway's "I just can't find the handle on it anymore" as a clinical record and closes with Iris doing the same thing to Lena. The prose never connects them.**

**Two record errors found while drafting, both corrected against the prose rather than the other way round:**

1. **The Ch9 brief gave the wrong location** — "Lena's place," when every beat in it requires Iris's apartment. Nobody stays the night on their own couch.
2. **This file's punctuation rule contradicted eight drafted chapters and published Book 1.** It said full-sentence questions take question marks for all characters including flat-affect ones. **The book has never done that**: Iris takes periods on questions of any length, warm characters take question marks on questions of any length, and the drafted chapters are entirely consistent about it. Corrected above.

**Three payoffs the brief did not ask for and the chapter needed** — the Ch8 session record as Iris's opening material, the photograph on the van dashboard from published Book 1 Ch1, and Ch1's card wall. **That is now four consecutive chapters where the under-budget draft was short a payoff rather than short description.** The pattern is stable enough to plan around: draft, count beats, then ask what earlier chapters set up that this one could pay.

---

### FULL US-ENGLISH SWEEP — Ch1 to Ch8, 2026-09-02

**Run after the three above, on the author's instruction that American English is a hard requirement.** Fourteen categories, both books, and **Book 1 has zero hits in every category**, so each one below is a divergence from the published baseline.

**Fifteen defects found and fixed across six chapters.** The three above plus twelve more:

| Chapter | Was | Now |
|---|---|---|
| Ch2 | a **lift** retrofitted into the stairwell | an **elevator** |
| Ch2 | where a **queue** had once been managed | a **line** |
| Ch2 | arrived without **travelling** | **traveling** |
| Ch3 ×2, Ch5 | the **car park** | the **parking lot** |
| Ch4 | not answering **straight away** | **right away** |
| Ch5 | self-**cancelling** | self-**canceling** |
| Ch6 | four **storeys** | four **stories** |
| Ch6 | **"Half eleven."** | **"Eleven thirty."** |
| Ch6 ×2 | at **half six** | at **six thirty** |
| Ch5, Ch6 | at **half past two** | at **two thirty** |
| Ch6 | **"He was sat in the chair"** | **"He was sitting in the chair"** |

**What was deliberately NOT changed, because converting it would be over-correction:** *quarter past nine*, *twenty past five*, *twenty to four*, *twenty to six*, *ten past five*. These are ordinary American English. **Only the bare *half six* / *half eleven* form is British-only**, and *half past two* was converted for register consistency rather than because it was wrong.

**Three standing false positives. Do not "fix" these:**
- **`flat`** — the adjective, and this series' central word (flat affect, flat voice, flat gray). Never the apartment sense.
- **`different to see it…`** — the ordinary American infinitive, not the British comparative. The tool's regex is now restricted to the comparative sense so it stops firing on this.
- **`a good deal of`** — standard American English.

**Confirmed already correct and left alone:** *neighbor*, *harbor*, *gray*, *program*, *practice*, *meters*, *toward*, *gotten* (×10, the US past participle), punctuation inside the closing quote, double quotes for dialogue, periods on *Dr.*

**Eight new screens are committed to `tools/voice-audit.js`** — British lexis, US/UK ambiguous, `-ll-`, `-ce/-se`, `-re`, `ae/oe`, `-t` past participles, idiom and clock. **Both the tool and an independent second implementation now report clean**, which is the check the curly-quote heredoc failure taught us to run. All three of these sat inside a category the audit believed it had covered.

**Also fixed in the tool (Law 7).** The protected-lines list still carried *"You don't have to optimize the answer"* as a contiguous string and had been reporting it MISSING against published Book 1 on every run since the correction. **The prose was corrected on 2026-08-31 and the checker was not**, so the tool spent two days reporting a defect that had already been ruled a records error. It now matches the fragment *"optimize the answer"*, which is what is actually locked.
