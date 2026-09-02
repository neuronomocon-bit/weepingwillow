# WEEPING WILLOW — PROJECT STATUS & CONTEXT

## What This Project Is

A horror/sci-fi novel series called **Weeping Willow**. First three books:
- **Weeping Willow: The Absence** (Book 1) — **published 2026-05-14. Locked in `book1-published/`, reference-only.**
- **Weeping Willow: The Ending** (Book 2) — **sequel**, briefs complete, drafting next
- **Weeping Willow: The Silence** (Book 3) — planning

Series name is "Weeping Willow" — NOT "trilogy." Keeps the door open for future books, and Book 3's ambiguous ending is written to hold that door open.

**Reading order is publication order, and chronological order now matches it:** The Absence → The Ending → The Silence.

### Arc history — read this before changing structure

**First pivot (2026-08-04):** Book 2 was "The Hunger," a direct sequel. It became a prequel dramatizing Willow's origin. The diagnosis was correct — the series' emotional bomb was being *reported* in one chapter of Virek talking in a cabin rather than dramatized.

**Second pivot (2026-08-26) — CURRENT.** The prequel was dropped. Book 2 is a **sequel** again, and the origin is delivered as fully dramatized Marin chapters that Iris **recovers off Meridian's drives**. This keeps the dramatization and discards the prequel's three costs: no forward carry (its entire cast appeared in no other book), dramatic irony as the sole engine across 70,000 words, and a Book 3 left carrying two books of plot.

**The same pivot made Willow a killer.** Full reasoning and all seven decisions are in `series-bible/13-arc-revision.md`. **Read that document before touching Book 2 or Book 3 structure.**

Both superseded arcs are preserved in `series-bible/archive/` with a README explaining what moved where.

## ⚠️ SCOPE — work on Book 2 only

**The active work is Book 2 and its folder.** `chapters-book2/`, `series-bible/`, `review-progress.md`.

**Book 1 is locked in `book1-published/` and is read for context, never edited.** Book 3 has an outline and no briefs and is not being drafted.

---

## Workflow

- **Claude** handles: planning, scaffolding, series bible, chapter drafting (Book 2 onward), chapter review/audit, continuity tracking
- **Book 1** prose was drafted by ChatGPT. As of Book 2 (2026-05-14), ChatGPT was dropped — it could not reliably hold the prose hard rules — and **Claude drafts the chapters directly.** The ChatGPT system prompt is archived at `series-bible/archive/superseded-tooling/`. **It duplicated the prose rules, which is how one copy goes stale;** `03-themes-and-tone.md` is now the only source for them.
- **Process (changed 2026-08-27):** Claude drafts a chapter **straight into `chapters-book2/NN-slug.md`** → author proofreads and edits **in place** → the file stays where it is and an "As Written" block is added to the brief. **There is no staging file.** `chapter_review.md` is retired.

### Manuscript files — single source of truth (changed 2026-08-04)

**`chapters-book2/NN-slug.md` is canonical.** Every correction goes there and only there.

**There is no staging file (changed 2026-08-27).** A chapter is written into `chapters-book2/` and reviewed there. `chapter_review.md` is retired and gone.

**⚠️ The tradeoff, stated plainly:** `build-manuscript.js` picks up every numbered file in `chapters-book2/`, so an in-progress draft is now inside the export path. **Check what the build reports before exporting anything** — it prints the chapter numbers it found on every run.

This is a deliberate change from Book 1, where a review file held the whole running manuscript *alongside* the individual chapter files. That meant every fix had to be applied twice, and the Book 1 review notes record exactly that ("fixes applied to both `chapters/` files and `chapter_review.md`"). Two copies is how one of them silently goes stale. **Removing the staging file removes the last place a second copy could live.**

**To read the book straight through, or to export:**

```
node build-manuscript.js          # -> manuscript-book2.md
node build-manuscript.js book1    # -> manuscript-book1.md
node format-book-v2.js manuscript-book2.md WeepingWillow_TheKeeping.docx
```

`manuscript-book*.md` are **build artifacts and are gitignored. Never hand-edit them.** If something is wrong in the manuscript, fix the chapter file and rebuild. The build script warns on gaps in chapter numbering so a missing chapter cannot silently vanish from an export.

`format-book-v2.js` derives the running header from the manuscript's own title line, so exporting a different book no longer carries the previous book's title in the header.

## Series Bible

Docs in `series-bible/`. **Book 1 material is complete. Book 2 and Book 3 material is mid-rebuild after the 2026-08-26 pivot — see the Status column and `13-arc-revision.md`.**

| File | Contents |
|------|----------|
| `01-world.md` | Setting (Lowport, Maine, ~2050), tech, Meridian origin, atmosphere, public awareness arc |
| `02-characters.md` | Full cast: Willow, Iris, Kade, Rourke, Caleb, Lena, Marin, Willow Halloway, Virek, Feld, Terri, Raman, Pell, Lila Mercer, Joel, Leah, Enzo, Joe E., Xander, Weston |
| `03-themes-and-tone.md` | Thematic pillars, tone rules, **SENTENCE VARIETY**, **PROSE CONVENTIONS (HARD RULES)**, POV registers, and the rules imported 2026-08-27. **The single source for the prose rules.** |
| *04, 05 — moved* | Book 1's outline and chapter briefs are in **`book1-published/`**. Reference-only. |
| `06-book2-outline.md` | "The Ending" — **sequel** structure, Present 15 / Recovered 7, continuity locks from published Book 1 |
| `07-book3-outline.md` | "The Silence" — **rewritten 2026-08-27.** New ending (compulsion trap, then the water), Willow's killer escalation, Virek's recognition function |
| `08-book2-chapter-briefs.md` | **All 22 Book 2 briefs.** Master timeline, the investigation spine, Willow's face progression, the audit gates. Merged from two independent sets 2026-08-27. |
| *09 — none* | **Book 3 has no chapter briefs.** The prequel-era set is archived at `archive/arc-02-prequel/`. 22 need writing against the rewritten Book 3 outline. |
| `10-subplot-threading.md` | 11 arcs tracked across all 66 chapters. Rebuilt 2026-08-27 |
| `11-key-dialogue-notes.md` | Scene-level dialogue direction for ~20 key moments. Rebuilt 2026-08-27 |
| *12 — archived* | The ChatGPT system prompt. Dropped 2026-05-14 and **it duplicated the prose rules**, which is how one copy goes stale. In `archive/superseded-tooling/`. |
| `13-arc-revision.md` | **The seven decisions of the 2026-08-26 pivot, plus the three open questions resolved 2026-08-27. Authoritative — outlines are rebuilt from it, not patched.** |
| `14-audit-method.md` | **How defects are found**, as distinct from what the prose must do. The cross-book comparison method, the seven laws of counting, the measured Book 1 baselines, the locked-line list. Imported 2026-08-27 from the author's other series. |
| `character-image-prompts.md` | DALL-E/ChatGPT image prompts — dark gothic painterly style, all 12 characters (16 prompts) |
| `book1-published/` | **Book 1, locked.** Chapters, exports, outline, briefs, and its full review history. Read for context; never edit. |
| `archive/` | Every superseded arc, retired draft, and dropped tool. **Organised by when it died** — `arc-01-hunger/`, `arc-02-prequel/`, `arc-03-superseded/`, `drafts/`, `superseded-tooling/`. Read `archive/README.md` first; it explains why each arc failed. |

**Numbering gaps at 09 and 12 are deliberate.** The numbers are stable identifiers referenced across the bible, so an archived file leaves its slot empty rather than causing a renumber.

## Book 1 — The Absence: PUBLISHED AND LOCKED

**Published 2026-05-14. 22 chapters, 23,405 words. Its text is law and it is never edited.**

Everything Book 1 is now lives in **`book1-published/`** — the chapters, the docx exports, its outline, its chapter briefs, and its full drafting and review history. **`book1-published/README.md` is the entry point.**

**It is reference-only.** Three things still need it and nothing else may touch it:

1. **Continuity.** The locks Book 2 must land are in KEY CONTINUITY NOTES below, in this file, so the daily ones are here and not there.
2. **The audit baseline.** `14-audit-method.md` measures Book 2 against Book 1's published prose. **That is the single most valuable check this project has, and it stops working if Book 1 moves or changes.**
3. **Reading it.** `node build-manuscript.js book1` still builds it.

**Do not edit anything under `book1-published/`.** Not to fix a typo, not to apply a Book 2 rule retroactively. Book 1's sparser, more fragmented voice was intentional and is published.

## Book 2 — "The Ending" (SEQUEL)

**Status:** Outline rebuilt 2026-08-26 in `series-bible/06-book2-outline.md`. **All 22 chapter briefs written 2026-08-26** in `series-bible/08-book2-chapter-briefs.md`. **ACT I IS DRAFTED AND AUDITED AND ACT II IS UNDER WAY: Ch1 through Ch10, 31,788 words, in `chapters-book2/` awaiting the author's proofread. Ch11 — MIDPOINT: Caleb is next; no pending drafts remain.** Per-chapter status in `review-progress.md`. Chapters are drafted straight into `chapters-book2/` and proofread in place.

**Premise:** Weeks after The Absence. Taken people start dying — not killed, exactly. They stop eating, they walk into traffic, they do not seek treatment, because nothing in them objects to anything anymore. Kade opens the post-shutdown Meridian files and Iris does the only thing she has ever been good at: she recovers the data. What comes off the drives is Dr. Marin Halloway, her therapeutic memory editing program, and her younger sister.

Meanwhile the entity's method is failing. It removes what breaks people and the remainder is still not what it is trying to build, so it increases the dose. Then it starts going back to finish jobs it left open. **Iris is an open job.**

**Threads: Present 15 chapters · Recovered 7 = 22**

**The Recovered thread is the whole design, so get this right:** Marin's seven chapters are **full dramatized scenes** — third person past, complete interiority, no framing device *inside* the chapter. The recovery licenses their existence; it does not narrate them. No voiceover, no document formatting, no timestamps, no cutting back to Iris mid-scene. Iris ends a chapter opening a file, the next chapter is Marin whole, and Iris's next chapter carries the reaction.

Seven beats, no filler: **Intake · Sessions · Calm · The Water · The Map · The Limiter · The Last Session.**

**Length: 68,000–72,000 words** (revised 2026-09-02; was 78,000–85,000), roughly 3,100 per chapter. Still longer than the prequel target because this book carries plot the prequel deferred. **The per-chapter budgets in the briefs are unchanged and are now a ceiling and a diagnostic, not a target.** A chapter at 87% of budget with every brief beat present is finished. **A chapter under 2,000 words has been written in Book 1's voice and needs rewriting, not expanding.**

**Key structural beats:** Caleb Ward dies at Ch11 (midpoint). Iris finds the name "Willow Halloway" at the Act II turn, Ch15. Marin's consumption is Ch20 and is the longest chapter. Ch22 is Willow returning to finish Iris and failing — the third refusal, which produces the frustration that makes her strategic in Book 3.

**What this book explains, and never states:**
- Why the entity is called Willow — Iris **finds** the name, nobody explains it
- Why she took Iris's love for Lena specifically — recognition, not collateral. Ch21 gets to within one step and stops.
- What every environmental oddity in Book 1 Ch1 actually is

**Prose rules (adopted 2026-05-14, unchanged):** Book 2 onward follows **SENTENCE VARIETY** and **PROSE CONVENTIONS (HARD RULES)** in `series-bible/03-themes-and-tone.md`, which is now the **only** source for them. No default single-line fragmentation, no "Not X. Just Y." cadence, no "wrong"/"off" as shorthand, no "nodded once," no labeled pauses, no em dashes, no AI-writing tics, no repeated comparative crutches. Book 1 is published and stays as written; do not retro-edit it.

**Book 2 hard audit gates (in addition to the standard passes):**
0. **NO FRAGMENTATION.** Book 1's staccato voice does not carry into Book 2 in any form. Single-line fragment paragraphs are emphasis only, a few per chapter at most. Environmental description, physical sensation, and interiority are written in complete, joined, varied sentences. Highest risk: any Willow-adjacent passage, where a non-human perspective will tempt fragmentation, and any moment of grief or contact, where the instinct will be to break lines for weight. Read every page aloud. If it reads like a list, rewrite it.
1. **No villainy.** Marin never does the wrong thing in a scene. If a chapter reads like a horror movie about a scientist, it fails.

   **⚠️ CLARIFIED 2026-09-02, off the author's Ch4 review, because getting this wrong in either direction breaks the book.** *"Never does the wrong thing"* governs **how the prose stages her, not whether she is ethically flawless.** She is not. The consent conversation in Ch4 is not adequate informed consent, the research identifier does not de-identify Willow from Marin, and the deviation in Ch17 is undocumented. **All three are intentional and load-bearing.**

   The gate is that **every one of them is what a competent, decent person does under that specific pressure**, and the prose never stages it as a lapse: no hubris, no ignored warning played for effect, no line that knows more than the character. Marin giving her frightened sister the plain version of an answer instead of the version with the intervals in it **is what any decent clinician does**, and it is also the thing that turns out to matter. **Show the choice. Say nothing about it.**

   **The test:** if a reader can see the failure and cannot find a moment where Marin behaved badly, the gate is holding. If the prose points at the failure, it has broken.
2. **No frame device inside a Recovered chapter.** They are scenes, not documents. The moment one opens with a timestamp or breaks to Iris mid-scene, the design has failed.
3. **The reader must like Willow Halloway.**
4. **Nobody explains the name.** Iris *finds* it in Ch15. That is not the same thing, and nobody ever explains it.
5. **No appetite language for the entity.** Satisfaction is completion, not pleasure — never hunger, craving, relish, enjoyment, or savoring. Pleasure would make her a person who enjoys things; satisfaction keeps her a system.
6. **Continuity locks from published Book 1** — see the table in `06-book2-outline.md`.

---

## WHERE WE LEFT OFF (2026-09-02)

**ACT I IS COMPLETE AND ACT II IS UNDER WAY. Ch1 through Ch10 are drafted, audited and pushed. 30,833 words.** They are in `chapters-book2/` awaiting the author's proofread, which happens in place. **There are no pending drafts left** — Ch8 was the last one and it is spent, so every chapter from here is a fresh draft. **Ch11 — MIDPOINT: Caleb is next, and it MUST close on dialogue** (Ch8, Ch9 and Ch10 all close on narration, which is the cap of three).

**All three open decisions were ruled by the author on 2026-09-02 and are recorded below.**

**Read first:** `series-bible/08-book2-chapter-briefs.md` — the briefs, plus front matter carrying the licensing rule, the investigation spine, and what the Recovered thread does *not* dramatize. Then `series-bible/14-audit-method.md` before auditing anything, and `03-themes-and-tone.md` → THE THREE MIGRATIONS before drafting anything.

### Drafted

| Ch | Title | Words | Budget | Under | State |
|---|---|---|---|---|---|
| 1 | Aftermath | 2,931 | 3,400 | 469 | **LOCKED 2026-09-02** |
| 2 | Mortality | 2,951 | 3,400 | 449 | **LOCKED 2026-09-02** |
| 3 | The Files | 3,055 | 3,600 | 545 | **LOCKED 2026-09-02** |
| 4 | **RECOVERED: Intake** | 3,394 | 3,600 | 206 | **LOCKED 2026-09-02** |
| 5 | Read | 3,185 | 3,600 | 415 | **LOCKED 2026-09-02** |
| 6 | Too Much | 3,280 | 3,400 | 120 | Awaiting author pass |
| 7 | The Curve (ACT I TURN) | 3,253 | 3,600 | 347 | Awaiting author pass |
| | **ACT I** | **22,049** | **24,600** | **2,551** | 87% of budget |
| 8 | **RECOVERED: Sessions** | 3,608 | 3,800 | 192 | Re-audited, awaiting author pass |
| 9 | Lena | 3,108 | 3,600 | 492 | Awaiting author pass |
| 10 | **RECOVERED: Calm** | 3,023 | 3,400 | 377 | Awaiting author pass |
| | **THROUGH CH10** | **31,788** | **35,400** | **3,612** | 88% of budget |

### The three decisions, ruled by the author 2026-09-02

**1. Narration contractions — MATCH BOOK 2.**

Book 2's narration runs 98 to 100% expanded on *did not*, *was not*, *had not* and *could not*; Book 1's runs 50 to 75% and says *didn't* 86 times in 18,953 words of narration. **Book 2's own register is the standard.** Nothing is swept in either direction, the hundred-odd Act I sentences stay as written, and Ch8 already conformed.

**The rule in `03-themes-and-tone.md` now has both halves.** *Ordinary action narration contracts; past-perfect reflective narration keeps the full form* is a **Book 1** description. **Book 2 narration keeps the full form as its default, in both registers**, and a contraction in narration is the marked choice. **Dialogue is untouched and runs the other way, as it must.** Do not reopen it by measuring it again.

**2. Length — ACCEPT ~70k. The target is now 68,000–72,000.**

The old 78,000–85,000 came from dividing a target; the briefs describe roughly 3,280-word chapters and always did. Eight chapters in, the average holds at 87% of budget with every beat present every time.

**The per-chapter budgets stay in the briefs unchanged, as a ceiling and a diagnostic rather than a target.** A chapter at 87% with all its beats is finished. **This licenses neither padding nor trimming — a chapter is not too long because the target moved.**

**The brief-by-brief under-specification audit is still worth running and still unrun**, but as a *defect* check, not a length check: Ch6, Ch7 and now Ch8 each gained real material from setups their own briefs had left unpaid.

**3. The Ch8 identifier — resolved by a third option neither original reached.**

Not "the collision resolves against the other entry" and not "reissue Willow's number." **`MN-R-0338` was issued twice**: recycled off a veterans'-cohort course that closed three years earlier, with the closed record left sitting on the live index because records never finished the housekeeping. **Willow's string never changes**, so the reader carries one token from Ch4 to the end, **and Ch15 still earns its three checks**, because what Iris has to establish is the number's *history* rather than the number.

The first join in Ch15 now **returns a man**, provably wrong on dates. Then the reuse. Then the degraded slice. **The record that survives intact is the dead one, because nobody touched it after it closed.** Nothing about that is ever stated. Full mechanism in THE INVESTIGATION SPINE; the Ch15 brief carries the three checks and the warning to run all three flat.

### The drafting discipline that came out of Act I

**Count the brief's beats against the draft BEFORE the word count, not after.** The word count is the symptom that prompts the check and has never once been the defect. Ch6 came in at 2,220 with three beats missing and finished at 3,280; Ch7 came in at 2,329 with three setups unpaid and finished at 3,253; Ch10 came in at 2,137 with **five** things missing and finished at 3,023. **A chapter with a missing beat has no hole in it. It is simply shorter and smooth, and only counting beats finds it.**

**Three refinements from Ch10, which came in at 63% and was the worst case so far:**

1. **Write the beat check against a phrase that can only exist if the beat is written**, never against a word the beat happens to contain. Ch10's check for "stopped playing" matched the word *sign* and reported the beat present when it was not.
2. **Check against the brief AND `11-key-dialogue-notes.md`.** They hold different beats. Ch10's likeability gate — Willow saying the good news out loud — was specified only in the dialogue notes and was missing from two drafts.
3. **Under about 75% of budget is structurally incomplete, not brisk.** The 86% drafts were each missing one payoff. A 63% draft was missing four.

### What the full audit found, 2026-08-31

Full record in `14-audit-method.md`; the mechanisms are in `03-themes-and-tone.md` → THE THREE MIGRATIONS. **The comparison is now a committed tool: `node tools/voice-audit.js --per-ch`.**

- **Three tic migrations, all caused by our own rules.** `nobody` → `no one` → **`anyone`** (18 against Book 1's 1, thirteen of them one construction). The em-dash ban relocating the parenthetical into **`, which`** (11 against Book 1's 0). The fragmentation ban relocating emphasis into the **copular opener** (37 against 9) — **half legitimate**, because Book 2 writes *"It was a compliment."* where Book 1 wrote *"A compliment."*
- **Rourke's voice had drifted and it is a continuity defect against a published book.** Book 1: **7% expanded**. Book 2 was **61%**. Now 21%, and the residual is her recitation register.
- **Ch3 was missing a beat the outline says it owes** — the deliberate site-spread behind Book 1 Ch5's *"From themselves."* Added as evidence, not dialogue. It is now the reason the archive and the index were separated at all.
- **A protected line in the records was wrong.** *"You don't have to optimize the answer"* has never existed as a contiguous string. **The list was wrong, not the book.**
- **⚠️ Never run a check containing curly quotes through a shell heredoc.** One did, reported zero for a form the corpus contains 86 times, and did not error. Caught only because a second implementation disagreed.

### Continuity corrections made this session

Three separate instances of the same **stale six**, all now fixed with the reasoning recorded next to them:

- **Ch5 brief** said *"six years of nobody asking."* The archive has been unread for **three**.
- **Pell**, in both `02-characters.md` and the Ch7 brief, was dated **six years ago** and *"three years before Rourke's set."* He cannot precede the deviation at Year −5, and his Taking is what moves the shutdown to Year −3, so the record is **three and a half years old** and precedes Rourke's earliest case by **about eighteen months.**
- **Ch4** said *"eleven more sessions"* at signing. Ch8 puts two weeks between the baseline and the first session, so it is **twelve.**

**Six is the age of the program, from Willow Halloway's intake at Year −6. It is not the age of anything else.** Check any future six against the master timeline.

### Canon set this session

**The research identifier is `MN-R-0338`.** Willow reads it off the second page of the consent pack in Ch4, in the institutional voice, and calls it a parking space. Iris reads it for eleven chapters with no name attached. **Ch15 resolves it.** House style matches Ch3's asset codes, `MN-C-0412` / `MN-C-0447`.

**~~⚠️ Open, for Ch8's re-audit.~~ RESOLVED 2026-09-02 — see decision 3 above.** The string is stable for the whole book; the number was issued twice, not reissued.

### What the Ch8 re-audit found, 2026-09-02

Full record in the Ch8 "As Written" block. The two findings that are about the *checks* rather than the chapter:

- **⚠️ Three British forms got through every existing screen, two of them into already-audited Ch7.** *nought* (Ch8, five times), *per cent* (Ch7, twice), *fortnight* (Ch7). Book 1 has none and runs *percent* ×5 and *windshield* ×2. **Every US-English screen we had was morphological** — `-our`, `-ise`, `-wards`, gray/grey, toward/towards — and all of them reported clean, correctly. These are **lexical** substitutions with no affix to match. *"Nought point four"* is not a misspelling of anything; it is the wrong word, spelled perfectly. A `British lexis` line is now in `tools/voice-audit.js` and **the list should grow every time one gets through.**
- **The tool had been reporting a defect that was ruled a records error two days earlier (Law 7).** The protected-lines list still carried *"You don't have to optimize the answer"* as a contiguous string, so every run since 2026-08-31 printed MISSING against published Book 1. **The prose was corrected and the checker was not.** Now matches the fragment *"optimize the answer"*.

**And the general form of both, which is the useful part:** a clean screen is evidence about the screen, not about the prose.

### ⚠️ US ENGLISH IS A HARD REQUIREMENT (author, 2026-09-02) — full sweep run

Fourteen categories across both books. **Book 1 has zero hits in every one**, so any hit is a divergence from a published baseline. **Fifteen defects found across six chapters and all fixed.** Beyond the three above: *lift* → elevator, *queue* → line, *travelling*, *car park* ×3, *straight away*, *cancelling*, *storeys*, *"Half eleven"*, *half six* ×2, *half past two* ×2, and *"He was sat in the chair"*.

**Deliberately kept, because converting them is over-correction:** *quarter past nine*, *twenty past five*, *twenty to four*, *twenty to six*, *ten past five*. Those are ordinary American English. **Only the bare *half six* form is British-only.**

**Three standing false positives — do not "fix" them:** **`flat`** (the adjective, this series' central word, never the apartment sense), **`different to see it`** (the American infinitive, not the British comparative) and **`a good deal of`** (standard American).

**Eight new screens are in `tools/voice-audit.js`** and both it and an independent second implementation report clean. Full table in `review-progress.md`. **The lexical lists are open — grow them every time one gets through.**

### Decisions in force

Book 2 is a sequel with the origin recovered off the drives · Willow becomes a killer because her protocol is failing · satisfaction not pleasure · her face resolves toward Willow Halloway's · Book 3 ends with the compulsion trap then the water · Caleb dies at Book 2's midpoint · Iris ends ambiguous · **the title is "The Ending."**

### Pending prose, held outside the working folder

**Nothing pending is a chapter that has come up.** Ch8 was the last one and it is spent. **From Ch9 on, every chapter is a fresh draft.**

| File | Words | Status |
|---|---|---|
| ~~`archive/drafts/DRAFT-sessions-ch8.md`~~ | 3,387 | **SPENT 2026-09-02.** Re-audited and moved to `chapters-book2/08-sessions.md` at 3,608. Gone from the archive. |
| `archive/drafts/DRAFT-prequel-ch02-recovery.md` | 2,855 | Retired. Salvage assigned to Ch3 and Ch5 (both spent) and Ch19 (the R. Oyelaran material, **unspent** — the only live claim on any archived draft). |
| `archive/drafts/DRAFT-hunger-ch01-aftermath.md` | 1,500 | Spent on Ch1. |

### Next work, in priority order

1. **Ch11 — MIDPOINT: Caleb.** A phone call, a drive, and a man answering questions correctly while he ends. Willow barely on the page. **It must close on dialogue** — see the warning in its brief. Willow's face gets its first change and Iris cannot say what settled.
2. **Ch12 to Ch15** to close Act II. Ch15 now carries the three checks and the false positive — read its brief before drafting Ch14.
3. **Write the 22 Book 3 briefs** against the rewritten `07-book3-outline.md`.
4. **The brief-by-brief under-specification audit of all 22.** Still unrun. It is a defect check, not a length check — see decision 2.

### Open questions

1. ~~**The title.**~~ **RESOLVED: "The Ending."**
2. ~~**Does Lena stay untouched through Book 2?**~~ **RESOLVED: untouched, and located on the last page.**
3. **Does Iris learn who signed the reclassification form?** **Not in Book 2** — the signature is on the degraded index. Available to Book 3, and the kind of thing Virek could tell her.
4. ~~**The Act I length shortfall.**~~ **RESOLVED 2026-09-02: accept ~70k.** Target is now 68,000–72,000. See decision 2.
5. ~~**Narration contractions.**~~ **RESOLVED 2026-09-02: match Book 2.** Nothing swept. See decision 1.
6. ~~**The Ch8 identifier reissue.**~~ **RESOLVED 2026-09-02: nothing is reissued; the number was issued twice.** See decision 3.

**No open questions remain on Book 2 except (3).** The next thing that could open one is the under-specification audit.

## Book 3 — "The Silence"

**Status:** Outline **rewritten 2026-08-27** in `series-bible/07-book3-outline.md` — new ending, Willow's killer escalation, Virek's recognition function, and everything Book 2 now absorbs removed. **There are no Book 3 briefs.** The prequel-era set was archived at `archive/arc-02-prequel/09-book3-chapter-briefs-PREQUEL-ERA.md` rather than patched, because eight separate things in it were wrong.

Picks up weeks after **Book 2**. Willow becomes strategic and **no longer needs to touch anyone** from the Act I turn; the city misdiagnoses the spread and then welcomes it; Lena is partially Taken at the midpoint; Rourke breaks in public and then does institutional damage; Kade attempts containment alone and is partially Taken; and Iris opens herself completely.

**The ending: the compulsion trap, then the water.** Willow reaches the irreducible core, cannot take it, cannot stop, and **the attempt gives her what she has been assembling toward for six years.** She finishes becoming Willow Halloway, walks past Iris, and goes into the water. **Iris does not kill her. Iris finishes her.**

**Its engine is dramatic irony, reshaped by the pivot.** The reader finishes Book 2 knowing what Willow is — **and so does Iris**, who recovered the whole origin and felt none of it. What she never reaches is why Lena. Do not let the prose reach for the reader's knowledge.

**~~Ch1 salvage~~ — CLAIM WITHDRAWN 2026-08-26.** `archive/drafts/DRAFT-hunger-ch01-aftermath.md` belongs to **Book 2 Ch1**, which is the book that now opens weeks after The Absence. Book 3 opens weeks after *Book 2* and needs a different chapter. See the Book 3 warning above; this whole section predates the pivot.

## ⚠️ LOCKED CHAPTERS

**A locked chapter has been reviewed and approved by the author and is closed.** It is treated the way `book1-published/` is treated: **read it, never edit it.** Not to fix a typo, not to apply a rule adopted afterward, and above all **not as part of a sweep across all chapters**, which is the realistic way an approved chapter gets edited by accident. The Ch1–Ch7 US-English sweep touched six chapters at once; a lock that was only a label in a status table would not have survived it.

**Locked so far: Ch1 to Ch5 (all 2026-09-02), 15,516 words.** Aftermath, Mortality, The Files, RECOVERED: Intake, Read.

**The lock is enforced, not just recorded.** `tools/locked-chapters.json` holds a hash of each locked chapter and `python tools/verify-record.py` reports any that have moved. If a lock breaks, **the default assumption is that something edited an approved chapter by mistake — read the diff before doing anything else.** When the author has genuinely approved a change:

```
python tools/verify-record.py --lock 01-aftermath.md
```

and re-lock in the same commit as the change.

**A locked chapter still counts** toward the word totals and still appears in `voice-audit.js`. It is a fixed point in the corpus, not an exclusion. **If an audit flags something inside a locked chapter, report it and leave it alone.**

---

## ⚠️ KEEPING THE RECORD CURRENT — a standing instruction (author, 2026-09-02)

**Every change to the prose updates the record in the same commit. Not later, not at the end of the act.**

A chapter is not finished when the prose is finished. It is finished when the brief, the bible, the trackers and the tools all say what is actually true. **The record going stale is the failure mode this project has hit most often**, and every instance of it has been the same shape: a fact was correct when it was written down and something else moved.

**When a chapter is drafted or changed, update all of these in the same sitting:**

| File | What it needs |
|---|---|
| `series-bible/08-book2-chapter-briefs.md` | **The "As Written" block.** Every drafted chapter has one. It is the authoritative record of what is on the page. Also fix any line in the brief the drafting proved wrong. |
| `series-bible/02-characters.md` | **DRAFTED CANON** at the foot of the file — any new concrete, contradictable fact about a person. An index, never a second copy. |
| `series-bible/11-key-dialogue-notes.md` | If the drafting changed a scene this file directs, or if a beat here was missed. **It holds beats the briefs do not.** |
| `series-bible/10-subplot-threading.md` | Only if a drafted chapter diverged from the planned beat. It is a plan, not a record. |
| `series-bible/14-audit-method.md` | Anything learned about **how defects are found**, as distinct from what the prose must do. |
| `series-bible/03-themes-and-tone.md` | Any new tic, migration or ruling. **A new wording goes in the same sitting as the prose fix** (Law 2). |
| `review-progress.md` · `CLAUDE.md` | Status tables, word counts, next work, open questions. |
| `tools/voice-audit.js` | **Law 7: the tooling is part of the corpus.** A new screen goes in when the defect is found, not when it recurs. |

**Word counts have one source.** `node tools/voice-audit.js --per-ch` prints the canonical figure: whitespace-separated tokens over the chapter body, heading dropped, matching `build-manuscript.js`. **The build prints a slightly larger total** (31,831 against 31,788 at Ch10) because it counts the chapter heading lines and the act labels. **That gap is expected. Do not "fix" it.** **Never count by hand and never record a number you did not read off the tool.** Until 2026-09-02 the repo had two counters and every recorded figure was wrong by a few words.

**Check a drafted chapter against the brief AND the dialogue notes.** They hold different beats, and a beat present only in `11-key-dialogue-notes.md` has been missed this way once already.

## How to Review a Chapter

When the user says a chapter is ready to review (it will be in `chapters-book2/`):

1. Read the chapter
2. Read the corresponding brief in `series-bible/08-book2-chapter-briefs.md`, **and the entry in `series-bible/11-key-dialogue-notes.md` if the chapter has one**
3. Audit against:
   - Brief compliance (POV, location, goal, conflict, outcome, emotional beat)
   - Tone compliance (see `03-themes-and-tone.md`: grounded, quiet, absence-as-horror, no spectacle)
   - Character voice consistency (see `02-characters.md`)
   - Willow's physical rules (if applicable)
   - Continuity with prior chapters (check "As Written" blocks in earlier briefs)
   - **PROSE HARD RULES check (Book 2 onward):** Audit against every item in `03-themes-and-tone.md` → PROSE CONVENTIONS (HARD RULES). Sweep explicitly for: AI-writing tics, "it's not X, it's Y" contrast framing, "wrong"/"off" as atmospheric shorthand, "the kind of…" / appositive-as-thesis, labeled silences, "nodded once," narrator editorializing.
   - **Sentence variety check (Book 2 onward):** Flag pages where single-line fragments stack as default prose, or environmental description reads as a checklist instead of flowing sentences. Fragments are emphasis only. Apply the read-aloud test.
   - **Bloat & repetition pass:** Flag prose that doesn't earn its space, and any image/observation/thesis that lands twice without evolution. Recurring beats (fear-checks, "Expected/Observed" logs) must vary or advance — never repeat verbatim.
4. Flag any issues: name conflicts, tone drift, missing beats, continuity breaks, hard-rule violations
5. Add the "As Written" block to the chapter brief, **and everything else in the table above, in the same commit as the prose**
6. Commit and push when asked

> **Book 1 note:** The Absence was written before the hard rules and is published — its sparser, more fragmented voice is intentional and stays. The PROSE HARD RULES and sentence-variety checks apply to Book 2 onward only.

## Editing Passes

Each book runs five passes after drafting (the structure Book 1 used, now codified):

1. **First-pass revision** — general quality. Tone drift, pacing, scene-level issues.
2. **Continuity check** — cross-reference all chapters against briefs, bible, and "As Written" blocks. Character knowledge state, timeline, location consistency.
3. **Proofread/polish pass** — punctuation convention enforcement, recurring-pattern variation, duplicate-phrase detection, density trimming.
4. **Deep audit pass** — typo sweep, convention enforcement, PROSE HARD RULES enforcement, "As Written" blocks reconciled.
5. **Chapter file review pass** — individual chapter files reviewed against briefs and given their final formatting, in place in `chapters-book2/`.

## Drift Corrections

Common drift patterns when ChatGPT drafts, and the correction to give:

- **Too dramatic:** "Pull back. Flatter. Iris doesn't feel this intensely. Underplay it."
- **Too much dialogue:** "Less talking. More silence. Let the scene sit."
- **Too explanatory:** "Cut the exposition. Trust the reader."
- **Willow too villainous:** "Willow is calm. Observational. She believes she's right."
- **Too much action:** "Slow this down. The tension is in proximity, not movement."
- **Purple prose:** "Simpler language. Observations, not performances."
- **Fragmented / staccato prose (CRITICAL):** "Stop writing in single-line fragments as default. Descriptions and environments need full, joined, varied sentences. Fragments are emphasis only. If a page reads like a list, rewrite it."
- **Run-on comma chains (CRITICAL, the overcorrection). Screen WHILE drafting, not after.** The Ch2 first draft came in with 10 sentences over the conjunction threshold, one chapter after this gate was written down, because the screen was run as a post-pass instead of applied at the sentence. Watch the connector as each sentence is built. "Stop using ', and X, and Y, and Z' as the default connector. Chained clauses are one rhythm repeated, which is the same failure as fragmentation from the other direction. Break them with periods, subordination, and participial phrases. Vary the connector." Found in the Ch1 draft at up to 6 commas and 5 conjunctions in one 85-word sentence. **Screen for it: flag any sentence with 3+ commas, 3+ instances of "and," or 45+ words, then justify or fix each one.** Legitimate survivors are colon-introduced lists, serial verbs, deliberate accumulation, and dialogue where a character is genuinely spilling.
- **"It's not X, it's Y" framing:** "Retired. State the affirmation directly. Don't set it up with negations."
- **"Wrong"/"off" as shorthand:** "Show the specific discrepancy. The reader names the wrongness, not the prose."
- **AI-writing tics:** "Read `03-themes-and-tone.md` → PROSE HARD RULES. Strip every tic. Replace with direct observation."
- **Duplicate reflection blocks:** "Don't repeat internal monologue verbatim across chapters. Compress or evolve the callback — one sentence."
- **The trailing explanatory sentence (found in the Ch2 draft, 2026-08-06).** A good image followed by a line telling the reader what to make of it: the van parked facing out, then a sentence explaining why you park facing out; the weather in the next paragraph, then "The weather had turned while she was under it" in front of it. Thirteen of these came out of Ch2 in the author's pass. **It passes every mechanical screen** — the sentences are well formed, varied, and not run-ons — which is why it has to be checked by hand. **Screen for it: read the last sentence of each paragraph alone and ask whether the paragraph is finished without it.** If it is, cut it. The related failure is the trailing clause on an otherwise clean sentence ("...a burst main, and the proof was in a basement under a foot of water").

### Book 2 (sequel) specific

- **Marin written as a villain:** "She is not reckless, arrogant, or ambitious. She is competent and grieving. Every step is small and defensible. Rewrite so there is no scene where she does the wrong thing."
- **The lab scene playing as horror:** "No flickering lights, no ominous readouts, no warning ignored for effect. The deviation is paperwork and an afternoon. Make it almost boring."
- **The Recovered chapter behaving like a document:** "Delete the frame. No timestamp, no file header, no voiceover, no cutting back to Iris. This is a scene. The recovery licenses it existing; it does not narrate it."
- **The entity written with appetite:** "She does not hunger, crave, relish, savor, or enjoy. A complete taking registers as completion. She is finishing, not feeding. Rewrite it clinical."
- **Willow written as cruel:** "She has never intended harm and still does not. She is a researcher increasing a dose that is not working. No malice, no taunting, no relish. The flatness is the horror."
- **Iris feeling the origin:** "She can reconstruct what Marin felt and cannot feel it. Do not let her grieve on the page. She understands it structurally, correctly, and completely, and nothing arrives."
- **The prose reaching for the reader's knowledge:** "Delete the nudge. The reader knows what this is. If the sentence would collapse for someone who hadn't read Book 1, it's doing the reader's job for them."
- **Willow Halloway written as a symbol:** "She's a person. Difficult, funny, scared. Make her annoying. The reader has to like her before she becomes data."
- **The name explained:** "Cut it. Nobody in this series ever explains where the name came from."

## Key Continuity Notes

### Book 2 canon (established 2026-08-04)

> ⚠️ **The chapter numbers in this section are stale.** They refer to the archived prequel structure. The *facts* below — substrate parameters, character details, the deviation, the name — all remain canon and carry into the new Recovered thread. Chapter numbers get reassigned when `08-book2-chapter-briefs.md` is written. Under the new outline: Intake is Ch4, Sessions is Ch8, Calm Ch10, The Water Ch13, The Map Ch15, The Limiter Ch17, The Last Session Ch20.
>
> Marin is no longer the POV protagonist of the book — she is the protagonist of the seven Recovered chapters. Iris carries the other fifteen.

- **Dr. Marin Halloway** — Meridian researcher, therapeutic memory editing program. POV of the seven Recovered chapters. Consumed in the last of them. Never named in Books 1 or 3.
- **Willow Halloway** — Marin's younger sister. Patient. Treatment succeeded. Drowned **about six months after completion** (Year −5.2, and **four months after Ch10** — corrected 2026-09-02; the four months had been attached to completion, which the master timeline does not support). Report says accident, intent never established. Her pre-treatment baseline map is what the entity is grown from.
- **The name:** the entity is called Willow because Willow Halloway was a person. Never explained by anyone in any book. Book 1 uses the name in narration without introduction; Book 3 Ch21 has the entity say "Willow Halloway" once, flat, in passing, never returned to.
- **The deviation:** two parameters, one afternoon, undocumented. Integration limiter removed, autonomy constraint widened. Marin's justification is coherent: patient deceased, no return path, integration required for full-fidelity rendering, sandbox isolated.
- **Willow Halloway's line:** "It's still there. I just can't find the handle on it anymore." She means it as good news.
- **Terri Roth** — Meridian reception/intake. Recurs in Ch1, 3, 6, 8, 15. The ordinary institutional life of the building, and the proof that Meridian was a real workplace staffed by reasonable people. Ch6 is the last time anyone in that building treats Marin as a bereaved sister rather than a colleague. Ch8 she mentions Marin's car in the lot early again, with no suspicion, which is how the reader clocks the visits. Ch15 she clears her desk and asks about openings at the other sites. **She never learns anything and is never used to deliver information.** Not in Books 1 or 3.
- **Dr. Feld** (introduced Ch3) — Willow Halloway's treating clinician. Marin is deliberately off the clinical file and Feld is on it. Thorough, slow, hard to rush, cold on paper and warm in person. She knows Marin observes from the other side of the glass and does not stop her. Not in Books 1 or 3.
- **Substrate parameters (established Ch3, in operational language, as furniture).** Flush window **ninety minutes**. Residual coherence tolerance **2% of session load**; model predicts **under 0.1%**. Virek's shelf sits at **0.4%** across nineteen sessions and does not move. Exclusions, in the order he ran them: sampling head swap, manual flush, clean cycle with no patient material. **Integration limiter** = the partition that keeps the substrate holding a patient's emotional structure *as the patient's* rather than absorbing it as its own; material that was never integrated can be flushed, which is the whole basis of the flush. Roughly four hundred lines of software, substantially unchanged in six years. **Autonomy constraint set to two**, meaning the substrate cannot hold structure without an operator session open. **Raman's review threshold: 1%.** Ch9 changes the limiter and widens autonomy. Ch12 is Virek finding the residue no longer decaying at all.
- **Raman's Ch3 answer, which must stay correct:** the decay model was fitted on the veterans' cohort at a third to a half of current session loads, the expansion cases run heavier, and a load-dependent tail treated as fixed produces a shelf. It explains the observation, names a mechanism, and makes a testable prediction. Nobody in the scene is wrong.
- **Pell** — substrate technician, night rotation. First Taken person in the world (Ch14). Never knows. His supervisor notices two days later that he has stopped being difficult about things he was always difficult about.
- **Dr. Raman** — program director. Correct in every scene. Tells Virek the wind-down completes next spring and the substrate is scheduled for termination, which is true. Pell's Taking then moves the shutdown up by several months.
- **Virek's deferral (Ch12):** escalates once, accepts a good answer, then decides to raise it with Marin directly and decides it can wait because she looks like she is barely holding together. The prose does not mark it.
- **Marin's consumption (Ch16):** she consents. It takes the charge, the structure, the reasoning, and the grief. Her last awareness is that it is doing exactly what the program was designed to do, correctly and gently, and that the relief is enormous. **She is happy.** Do not undercut it.
- **The sealed years:** roughly three years alone. Year −3 to −2 forming; Year −2 to −0.5 excursions, with the fence cut from the inside and eighteen months of small takings across Lowport that resolve nothing; then still. Those takings are why Rourke already has a case category by Book 1 Ch6.
- **The last Iris beat (Ch21):** an uneventful evening at Lena's. Iris feels the ordinary fact of loving her sister and does not mark it. Nothing in the chapter acknowledges that it is the last time.

### Book 1 continuity locks the prequel must land

Cut fence ("not recently") · selective neglect, thin dust, no drifted paper · broad faint dust disruptions matching no maintenance route · standby power rising and falling, relays "not synchronized, not random either" · wall calendar stopped three years earlier · side service door, dead keypad, mechanical lock, bolt "louder than it should have been" · job ref MN-44-7 with redacted client · "Meridian didn't shut down clean" · multiple sites spread deliberately, "From themselves" · Kade's access codes never revoked · relay points and transfer points

### General

- **Question mark convention:** Iris and Taken characters use periods on dialogue questions (flat affect). Warm/emotional characters (Rourke, Kade, Lena, Leah, pre-Taking Caleb) use question marks. Exception: pre-Taking Caleb in Ch11 uses periods as deliberate foreshadowing of his Taking in Ch12.
- Sister is **Lena Vale** (was originally "Mara" in early planning — all refs updated)
- Ch3 victim's wife is **Leah** (renamed from Mara to avoid overlap)
- Ch3 victim is **Joel**, case ref K-01
- Willow's face description template: "Features learned from observation rather than born to them"
- Ch1 Taking memories: kitchen at 19, yellow mug, hospital corridor, red scarf on winter beach, two girls on a staircase
- Ch1 time gap: 14:07 to 14:41
- Caleb's key line, as published in Book 1 Ch2: "If something's off, you can just say that. You don't have to—" he gestured vaguely "—optimize the answer." **The locked fragment is "optimize the answer."** It is broken by a gesture and two em dashes and has never existed as one contiguous sentence; the old one-line quotation here was wrong and was corrected 2026-08-31.
- Iris's report to Kade: "Something has been removed"
- Ch5 Kade's office: second floor, repurposed building, keypad entry, layered maps on wall, boxes with site codes
- Ch5 Meridian scope: multiple sites (primary, secondary storage, offsite data mirrors), six confirmed adjacent locations in Iris's folder
- Ch5 Meridian risk management: sites spread deliberately — "From themselves"
- Ch5 Iris total time inside Meridian: three hours (34-minute gap within that)
- Ch5 Iris self-description: works "more efficiently" now — Kade notes she would have "pushed harder" before Meridian
- Ch5 Iris's closing assessment: "It's moving"
- Ch5 Terms: "Access, retrieval, no questions that get written down"
- Ch6 Rourke's dataset: hundreds of cases, classified as "behavioral flattening, dissociative presentation, emotional attenuation"
- Ch6 Neural imaging: reduced activity in specific emotional processing centers — "not uniform, targeted"
- Ch6 No cases recover fully — treatment is "management"
- Ch6 Rourke detects Iris presenting with same markers (flattened affect, delayed response, reduced emotional variance)
- Ch6 Rourke gives Iris redacted case summaries on tablet — pragmatic, not alliance
- Ch6 Iris emotional check: "Expected: frustration. Observed: none."
- Ch7 Analysis method: time-filtered gradient, directional path (not cluster), infrastructure overlay filtered to Meridian-adjacent systems
- Ch7 Transcript structure: "Question → Answer → Stop" — "Different words. Same shape."
- Ch7 Proximity sense at map: "Location: frontal. Duration: brief. Intensity: minimal."
- Ch7 Act I turn spoken aloud: "It's not a condition." "It's not environmental." "Something is moving." "And it touches people."
- Ch8 Kade's Meridian access codes still work — clearance never revoked
- Ch8 Site types: relay point (data movement), transfer point (equipment) — Kade recognized both from his logistics work
- Ch8 Kade's guilt: "I moved things through here. Crates. Equipment. Data units. Didn't ask what was in them." "Didn't ask why."
- Ch8 Proximity sense at third site: faint shift, doesn't resolve, fades — "Something" / "Nothing"
- Ch8 Iris erosion: watches Kade's pauses, notes them structurally not emotionally, recognizes the gap, does not feel the need to close it
- Ch4 revision: added recovery exchange ("To return to a previous state of function") and "Do you feel like anything is missing" / "No"
- Ch9 City flattening: fewer exchanges, interactions complete and stop, no extension, no overlap
- Ch9 Rourke's notes shifting: fewer qualifiers, shorter, more direct
- Ch9 Iris delays worsening: "duration longer than prior instances" — response to Kade's message delayed
- Ch9 Faulty decision: chose farther site over closer one, couldn't reconstruct the logic, reversed
- Ch9 Memory at intersection: image held, identity did not — can't tell if difference is the city or her
- Ch10 Iris performs throughout — not transparent about the gap, constructs appropriate responses
- Ch10 Key performances: "I still care" (clean, no hesitation), "In the ways that matter," "Showing up. Staying in contact. Maintaining—" (builds from a list)
- Ch10 "I love you" exchange: words matched, tone aligned, no delay — Lena "almost convinced. Then not."
- Ch10 Lena consulted a doctor — described Iris's behavior, told stress or dissociation
- Ch11 Caleb micro-delays: pause a fraction too long, smile stays then drops, answer lands slightly late
- Ch11 Caleb describes the site: "Nothing's broken. Everything's just… off." "Like the system's thinking about it before it does anything."
- Ch11 Iris summary: "Function intact. Continuity intact. Something else — slightly displaced."
- Ch11 Past-tense beat: "He had been the most alive person she knew. The tense registered. Past. She corrected it. He is. The correction held. Not fully."
- Ch12 Caleb's POV — only chapter from his perspective. First on-page Taking.
- Ch12 Taking memories: running as a kid, coffee on a late shift ("the warmth of it, the fact that they had noticed"), job gone wrong (improvised solution)
- Ch12 Taking mechanism: feeling separates from image, then image follows. "Gone."
- Ch12 Final memory: not an event but a state — "the sense that things mattered"
- Ch12 Post-Taking: logs "Response timing remains inconsistent. No confirmed failure." — processes event through reduced framework
- Ch12 Willow silent throughout. Hand on chest, flat, no pressure. Face not retained.
- Ch12 "Nothing in him marked the change. Nothing in him noted the absence."
- Ch13 Post-Taking Caleb: answers clean, immediate, correct — no excess, no deviation, just acceptance
- Ch13 Joke test: "I don't recall" → when prompted, "That's consistent" — not the same as the original, filled with something sufficient
- Ch13 Key test: "If everything went wrong at once" — old Caleb would improvise, this Caleb gives textbook crisis management
- Ch13 "The difference between them was not direction. Only distance."
- Ch14 Rourke scene: 63 new cases, no recoveries, says "No" faster than before. "You used to elaborate" / "The data doesn't require elaboration." Steadiness tightened, not cracked.
- Ch14 Retrieval lag: site address delayed 3-4 seconds. "Duration: longer than prior instances. Category: retrieval lag."
- Ch14 Performing grief: Kade asks "Does it bother you" — Iris says "Yes" with correct tone, no internal state. "She had not been describing a condition. She had been answering."
- Ch14 Two possibilities: dishonest, or she had forgotten to continue. Cannot determine which.
- Ch15 False certainties: phantom case (certain she marked it, no record), false site memory (interior doesn't match exterior), unrecalled conversation with Kade
- Ch15 Burned contact: flagged Iris to Kade, "said you came in wrong" — messages same but order shifted, something missing between
- Ch15 Self-note: "Do not trust sequence." Later reopens — understands words, not the conclusion. Continues without verification.
- Ch15 Map corruption: adjusts marker to fit path, coordinates don't match, leaves it
- Ch15 "Certain. Incorrect. Continuing."
- Ch16 Rebuilds map from verified record only — removes prior adjustments, path remains: one line, no branches
- Ch16 "It's one." — single moving point of contact, selectively affecting individuals
- Ch16 Iris maps her own symptoms onto the path (delay, retrieval lag, performance) — doesn't say it out loud
- Ch16 Kade: "If you're right, we're not tracking something that happened. We're tracking something that's still happening."
- Ch16 "The system had simplified. One."
- Ch16 "She was the only one who could sense it. That was not an advantage. It was a limitation."
- Ch16 "The door had closed."
- Willow reference images: `C:\Users\kriss\Dropbox\weepingwillow\` (true form + human form)
- Image style: dark gothic painterly, near-monochrome, NOT photorealism — Beksinski-adjacent
