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
| 3 | The Files | Iris/Kade | 3,600 | **DRAFTED 2,927** | **awaiting author pass** |
| 4 | **RECOVERED: Intake** | Marin | 3,600 | **RE-AUDITED 3,346** | **awaiting author pass** |
| 5 | Read | Iris | 3,600 | **DRAFTED 3,073** | **awaiting author pass** |
| 6 | Too Much | Iris | 3,400 | **DRAFTED 3,000** | **awaiting author pass** |
| 7 | The Curve (ACT I TURN) | Iris | 3,600 | **DRAFTED 3,253** | **awaiting author pass** |
| **ACT II — THE PROTOCOL** | | | | | |
| 8 | **RECOVERED: Sessions** | Marin | 3,800 | **RE-AUDITED 3,608** | **awaiting author pass** |
| 9 | Lena | Iris/Lena | 3,600 | **DRAFTED 3,108** | **awaiting author pass** |
| 10 | **RECOVERED: Calm** | Marin | 3,400 | **DRAFTED 3,023** | **awaiting author pass** |
| 11 | **MIDPOINT: Caleb** | Iris | 3,800 | — | — |
| 12 | After | Iris | 3,600 | — | — |
| 13 | **RECOVERED: The Water** | Marin | 3,400 | — | — |
| 14 | Open Jobs | Iris | 3,600 | — | — |
| 15 | **ACT II TURN — RECOVERED: The Map** | Marin + Iris coda | 3,800 | — | — |
| **ACT III — FINISHING** | | | | | |
| 16 | The Name | Iris | 3,600 | — | — |
| 17 | **RECOVERED: The Limiter** | Marin | 3,400 | — | — |
| 18 | Escalation | Iris/Rourke | 3,800 | — | — |
| 19 | Almost | Iris | 3,600 | — | — |
| 20 | **RECOVERED: The Last Session** | Marin | 4,400 | — | — |
| 21 | Why Lena | Iris | 3,600 | — | — |
| 22 | The Second Visit (ENDING) | Iris + Willow coda | 3,800 | — | — |

Legend: `—` not started · `WIP` in progress · `DONE` complete · **`LOCKED` reviewed and approved by the author — see LOCKED CHAPTERS below**

**Only chapters drafted under the current arc live in `chapters-book2/`.** Ch1 is the first.

---

## Portable Drafts

Two chapters written under the prequel arc survive because they are Marin/Meridian scenes and the Recovered thread needs them nearly unchanged.

**Ch4 — RECOVERED: Intake** · **RE-AUDITED 2026-08-31 and moved to `chapters-book2/04-intake.md`. 3,346 words. Awaiting the author's proofread.**

Marin, Willow Halloway's enrollment, Terri Roth at the desk. Approved 2026-08-04 under the old arc, re-audited against the current gates before it moved. **Full record in the Ch4 brief.** Headlines: the research identifier is now a concrete string on the page, `MN-R-0338`, because the draft established the mechanism and never gave the reader a token to carry; a session-count continuity error was corrected against Ch8; and `hands flat on the table` was nearly cut as a generic gesture beat before Ch8 turned out to quote it back, which is Law 6 doing its job.

**Ch8 — RECOVERED: Sessions** · **RE-AUDITED 2026-09-02 and moved to `chapters-book2/08-sessions.md`. 3,608 words (from 3,387). Awaiting the author's proofread.**

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
| 3 | 3,600 | 2,927 | 673 |
| 4 | 3,600 | 3,346 | 254 |
| 5 | 3,600 | 3,073 | 527 |
| 6 | 3,400 | 3,000 | 400 |
| 7 | 3,600 | 3,253 | 347 |
| **ACT I COMPLETE** | **24,600** | **21,481** | **3,119** |
| 8 | 3,800 | 3,608 | 192 |
| 9 | 3,600 | 3,108 | 492 |
| 10 | 3,400 | 3,023 | 377 |
| **THROUGH CH10** | **35,400** | **31,220** | **4,180** |

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

## LOCKED CHAPTERS

**A locked chapter has been reviewed and approved by the author and is closed to editing** — the same treatment `book1-published/` gets. Not a typo, not a later rule applied retroactively, and **especially not a sweep across all chapters**, which is how an approved chapter realistically gets edited by accident.

| Ch | Title | Words | Locked |
|---|---|---|---|
| 1 | Aftermath | 2,931 | **2026-09-02** |
| 2 | Mortality | 2,951 | **2026-09-02** |

**The lock is enforced.** `tools/locked-chapters.json` holds a hash per chapter; `python tools/verify-record.py` reports any that move. If a lock breaks, assume something edited an approved chapter by mistake and read the diff first. To re-lock after an approved change: `python tools/verify-record.py --lock 01-aftermath.md`, in the same commit as the change.

**Locked chapters still count** toward the totals and still appear in the voice audit. They are fixed points, not exclusions. **If an audit flags something inside one, report it and leave it alone.**

---

## CH10 — RECOVERED: CALM, drafted 2026-09-02

**3,023 words against a 3,400 budget, all 27 beats present.** Full record in the Ch10 brief. What belongs here:

**⚠️ The first draft came in at 2,137 words, 63% of budget, with three beats missing** — the eleven o'clock phone calls, Marin waiting for the rest of her sister to come back, and the book that Ch13 needs to invert. **A fourth, "stopped playing," passed the first beat check on a false regex match and was not actually on the page.** After those, a second pass found two more the brief had not asked for and the chapter plainly needed: the date three weeks out, and the supervisor course. **Final draft 2,792 at 82%.**

**Two lessons, and the second is new:**

1. **The beat check is only as good as its patterns.** "Stopped playing" matched the word *sign* and reported ok. **Write the check against a phrase that can only appear if the beat is actually written**, not against a word the beat happens to contain.
2. **A 63% draft is a different animal from an 86% draft.** Every previous short draft was missing one payoff. This one was missing four things, and the gap was large enough to say so before the beats were counted. **Treat anything under about 75% as structurally incomplete rather than brisk.**

**The gate this chapter is built on:** no sentence in it calls Willow flat, absent, empty, hollow, missing or gone. Every observation is behavior and every judgment on the page is Marin's and is favorable. **The comparison is the reader's and they have Lila Mercer to make it with.**

**A dating error found and corrected.** The Ch13 brief and CLAUDE.md said Willow drowned "four months after completion." Against the master timeline it is about six; the four months is Ch10 to the drowning, which `10-subplot-threading.md` has always said correctly. Same class as the stale six.

**Ending register is now at the cap.** Ch8, Ch9 and Ch10 all close on narration. **Ch11 must close on dialogue**, and its brief now carries that warning.

---

## CH9 — LENA, drafted 2026-09-02

**3,108 words against a 3,600 budget, 86% of budget, all 30 beats present.** Full record in the Ch9 brief. What belongs here:

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
