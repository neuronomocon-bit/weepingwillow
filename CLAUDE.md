# WEEPING WILLOW — PROJECT STATUS & CONTEXT

## What This Project Is

A horror/sci-fi novel series called **Weeping Willow**. First three books:
- **Weeping Willow: The Absence** (Book 1) — published
- **Weeping Willow: The Ending** (Book 2) — **sequel**, briefs complete, drafting next
- **Weeping Willow: The Silence** (Book 3) — planning

Series name is "Weeping Willow" — NOT "trilogy." Keeps the door open for future books, and Book 3's ambiguous ending is written to hold that door open.

**Reading order is publication order, and chronological order now matches it:** The Absence → The Ending → The Silence.

### Arc history — read this before changing structure

**First pivot (2026-08-04):** Book 2 was "The Hunger," a direct sequel. It became a prequel dramatizing Willow's origin. The diagnosis was correct — the series' emotional bomb was being *reported* in one chapter of Virek talking in a cabin rather than dramatized.

**Second pivot (2026-08-26) — CURRENT.** The prequel was dropped. Book 2 is a **sequel** again, and the origin is delivered as fully dramatized Marin chapters that Iris **recovers off Meridian's drives**. This keeps the dramatization and discards the prequel's three costs: no forward carry (its entire cast appeared in no other book), dramatic irony as the sole engine across 70,000 words, and a Book 3 left carrying two books of plot.

**The same pivot made Willow a killer.** Full reasoning and all seven decisions are in `series-bible/13-arc-revision.md`. **Read that document before touching Book 2 or Book 3 structure.**

Both superseded arcs are preserved in `series-bible/archive/` with a README explaining what moved where.

## Workflow

- **Claude** handles: planning, scaffolding, series bible, chapter drafting (Book 2 onward), chapter review/audit, continuity tracking
- **Book 1** prose was drafted by ChatGPT. As of Book 2 (2026-05-14), ChatGPT was dropped — it could not reliably hold the prose hard rules — and **Claude drafts the chapters directly.** The ChatGPT system prompt is archived at `series-bible/archive/superseded-tooling/`. **It duplicated the prose rules, which is how one copy goes stale;** `03-themes-and-tone.md` is now the only source for them.
- **Process:** Claude drafts a chapter into `chapter_review.md` → author proofreads/edits → on approval the final is saved to `chapters-book2/` and an "As Written" block is added to the brief.

### Manuscript files — single source of truth (changed 2026-08-04)

**`chapters-book2/NN-slug.md` is canonical.** Every correction goes there and only there.

`chapter_review.md` is a **staging file holding one chapter at a time.** It is cleared on approval. It is not an accumulating manuscript.

This is a deliberate change from Book 1, where `chapter_review.md` held the whole running manuscript *alongside* the individual chapter files. That meant every fix had to be applied twice, and the Book 1 review notes record exactly that ("fixes applied to both `chapters/` files and `chapter_review.md`"). Two copies is how one of them silently goes stale.

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
| `03-themes-and-tone.md` | Thematic pillars, tone rules, **SENTENCE VARIETY**, **PROSE CONVENTIONS (HARD RULES)**, POV registers. **The single source for the prose rules.** |
| `04-book1-outline.md` | "The Absence" — 3-act structure, detailed beats |
| `05-book1-chapter-briefs.md` | 22 chapters, full scene breakdowns + "As Written" blocks |
| `06-book2-outline.md` | "The Ending" — **sequel** structure, Present 15 / Recovered 7, continuity locks from published Book 1 |
| `07-book3-outline.md` | "The Silence" — **rewritten 2026-08-27.** New ending (compulsion trap, then the water), Willow's killer escalation, Virek's recognition function |
| `08-book2-chapter-briefs.md` | **All 22 Book 2 briefs.** Master timeline, the investigation spine, Willow's face progression, the audit gates. Merged from two independent sets 2026-08-27. |
| *09 — none* | **Book 3 has no chapter briefs.** The prequel-era set is archived at `archive/arc-02-prequel/`. 22 need writing against the rewritten Book 3 outline. |
| `10-subplot-threading.md` | 11 arcs tracked across all 66 chapters. Rebuilt 2026-08-27 |
| `11-key-dialogue-notes.md` | Scene-level dialogue direction for ~20 key moments. Rebuilt 2026-08-27 |
| *12 — archived* | The ChatGPT system prompt. Dropped 2026-05-14 and **it duplicated the prose rules**, which is how one copy goes stale. In `archive/superseded-tooling/`. |
| `13-arc-revision.md` | **The seven decisions of the 2026-08-26 pivot, plus the three open questions resolved 2026-08-27. Authoritative — outlines are rebuilt from it, not patched.** |
| `character-image-prompts.md` | DALL-E/ChatGPT image prompts — dark gothic painterly style, all 12 characters (16 prompts) |
| `archive/` | Every superseded arc, retired draft, and dropped tool. **Organised by when it died** — `arc-01-hunger/`, `arc-02-prequel/`, `arc-03-superseded/`, `drafts/`, `superseded-tooling/`. Read `archive/README.md` first; it explains why each arc failed. |

**Numbering gaps at 09 and 12 are deliberate.** The numbers are stable identifiers referenced across the bible, so an archived file leaves its slot empty rather than causing a renumber.

## Writing Progress

**Chapters written and reviewed:**
- Book 1 Ch1 — The Gap ✅
- Book 1 Ch2 — Caleb Ward ✅
- Book 1 Ch3 — The First Case ✅
- Book 1 Ch4 — Lila Mercer ✅
- Book 1 Ch5 — Kade ✅
- Book 1 Ch6 — Rourke ✅

- Book 1 Ch7 — The Pattern ✅
- Book 1 Ch8 — Following the Thread ✅

- Book 1 Ch9 — The City Feels It ✅

- Book 1 Ch10 — Lena ✅

- Book 1 Ch11 — Caleb Shift ✅

- Book 1 Ch12 — The Taking of Caleb Ward (MIDPOINT) ✅

- Book 1 Ch13 — After ✅

- Book 1 Ch14 — The Weight ✅

- Book 1 Ch15 — Deterioration ✅

- Book 1 Ch16 — The Realization (ACT II TURN) ✅

- Book 1 Ch17 — Tracking ✅
- Book 1 Ch18 — The Deeper Zone ✅
- Book 1 Ch19 — Closing Distance ✅
- Book 1 Ch20 — Contact ✅
- Book 1 Ch21 — Partial Loss ✅
- Book 1 Ch22 — Exit ✅

**Book 1 — The Absence: COMPLETE (23,405 words / novella)**

**Book 1 — Full proofread/polish pass: COMPLETE (2026-04-04)**
- Question mark convention enforced: Iris/Taken characters use periods on questions (flat affect), warm characters (Rourke, Kade, Lena, Leah) use question marks. Pre-Taking Caleb Ch11 intentionally uses periods as foreshadowing.
- "Not X. Not Y. Z." pattern varied in densest stretch (Ch19-21)
- Duplicate phrase ("She held the contradiction") fixed in Ch15
- Fear-check formula trimmed from 5 to 2 full instances in Act III (Ch17 + Ch22 final); 3 middle instances varied
- Ch19 tightened (~90 lines consolidated)
- Ch7 As Written block reconciled with actual prose

**Book 1 — Deep audit pass: COMPLETE (2026-04-08)**
- 1 typo fixed (Ch1 "dim" → "Dim")
- Lila (Ch4) question mark corrected to period (Taken convention)
- Pre-Taking Caleb Ch11: 5 remaining question marks converted to periods (foreshadowing)
- Kade question marks fixed in Ch7 (3), Ch8 (3), Ch16 (1) — warm character convention
- Ch19 triplet density reduced: removed "Not inferred. Not concluded." (two full triplets within 6 lines → one)
- Ch22 duplicate phrasing varied: "The delay reduced. / Not removed. / Reduced." (identical to Ch21) → "The delay loosened. / Still present. / Less."
- Ch22 restored "alive" in "closer to Willow than anyone else alive" per brief
- Ch22 added missing brief beat: "She did not know which of those should frighten her."
- As Written blocks corrected: Ch20 head-tilt quote, Ch21 phantom negations removed, Ch19 device vibration attribution clarified, Ch22 updated to match new prose
- Individual chapter files saved in `chapters/` folder

**Book 1 — Chapter file review pass: COMPLETE (2026-04-10)**
Reviewing individual chapter files against briefs, audit notes, and conventions. Fixes applied to both `chapters/` files and `chapter_review.md`.
- Punctuation convention refined: full-sentence questions now use question marks for all characters (including flat-affect); short/tonal probes ("How." / "Why." / "Pain.") keep periods. Dialogue tags use "said" not "asked" for flat-affect characters.
- Device/terminal readouts reformatted: inline with colon + italic, not stacked on separate lines
- Ch1: continuity fix ("drove out through the gap in the fence" → "pulled out onto the road" — van parked outside perimeter), scene break added, 5 device readouts inlined
- Ch2: job spec inlined, scene break added, "Local copies," she asked → she said
- Ch3: case file inlined, scene break added, 6 "asked"→"said" fixes, 9 full-sentence questions got question marks, Kade "What."→"What?"
- Ch4: 30 punctuation fixes (full-sentence questions + asked→said + Lila "Yes?"→"Yes."), no scene break needed
- Ch5: 2 full-sentence questions got question marks, 1 split-dialogue question mark, 2 asked→said fixes
- Ch6: 3 full-sentence questions got question marks, 3 asked→said fixes, 1 short/tonal tag removed ("Why," she asked. → "Why.")
- Ch7: "What am I looking at?"→"What are you seeing?" (audio-only call fix), removed ACT II header from chapter file
- Ch8: 2 Iris full-sentence questions got question marks ("What is it?" "What was it?"), 2 Kade questions got question marks ("Alone?" "What?")
- Ch9: 1 fix — "one asked"→"one said" (unnamed flat character). Flat periods on ambient dialogue left intentionally (city-flattening effect)
- Ch10: clean — no fixes needed
- Ch11: 3 asked→said fixes (2 pre-Taking Caleb foreshadowing, 1 Iris), removed malformed "He asked." tag
- Ch12: 1 fix — device readout inlined (Caleb's post-Taking log note)
- Ch13: 3 full-sentence questions got question marks, 1 asked→said, "Just present."→"Functional." (avoided Ch10 repetition)
- Ch14: clean — no fixes needed
- Ch15: clean — no fixes needed
- Ch16: 2 Kade questions got question marks ("And that makes this one thing?" "Where?"), removed ACT III header from chapter file
- Ch17: varied "There was something to find" refrain (repeated from Ch16) → "Not theory now. Not inference. Proximity."
- Ch18: clean — no fixes needed (no dialogue in chapter)
- Ch19: clean — no fixes needed (no dialogue in chapter)
- Ch20: clean — no fixes needed (no dialogue in chapter)
- Ch21: clean — no fixes needed (no dialogue in chapter)
- Ch22: clean — no fixes needed (no dialogue in chapter)
- Chapters reviewed: Ch1–Ch22 — **CHAPTER FILE REVIEW PASS COMPLETE**
- Ch13 closing line rewritten: "The difference between them was not direction. Only distance."

**Book 1 — FINAL STATUS: COMPLETE & PUBLISHED (2026-05-14)**
- Writing: 22 chapters, 23,405 words
- Proofread/polish: complete (2026-04-04)
- Deep audit: complete (2026-04-08)
- Chapter file review: complete (2026-04-10)
- Published: 2026-05-14
- Canonical Book 1 manuscript: individual files in `chapters/` plus the docx exports. `chapter_review.md` has been cleared and now holds the Book 2 working manuscript.

---

## Book 2 — "The Ending" (SEQUEL)

**Status:** Outline rebuilt 2026-08-26 in `series-bible/06-book2-outline.md`. **All 22 chapter briefs written 2026-08-26** in `series-bible/08-book2-chapter-briefs.md`. Drafting can resume at Ch1. Per-chapter status in `review-progress.md`. Approved chapters save to `chapters-book2/`.

**Premise:** Weeks after The Absence. Taken people start dying — not killed, exactly. They stop eating, they walk into traffic, they do not seek treatment, because nothing in them objects to anything anymore. Kade opens the post-shutdown Meridian files and Iris does the only thing she has ever been good at: she recovers the data. What comes off the drives is Dr. Marin Halloway, her therapeutic memory editing program, and her younger sister.

Meanwhile the entity's method is failing. It removes what breaks people and the remainder is still not what it is trying to build, so it increases the dose. Then it starts going back to finish jobs it left open. **Iris is an open job.**

**Threads: Present 15 chapters · Recovered 7 = 22**

**The Recovered thread is the whole design, so get this right:** Marin's seven chapters are **full dramatized scenes** — third person past, complete interiority, no framing device *inside* the chapter. The recovery licenses their existence; it does not narrate them. No voiceover, no document formatting, no timestamps, no cutting back to Iris mid-scene. Iris ends a chapter opening a file, the next chapter is Marin whole, and Iris's next chapter carries the reaction.

Seven beats, no filler: **Intake · Sessions · Calm · The Water · The Map · The Limiter · The Last Session.**

**Length: 78,000–85,000 words**, roughly 3,600 per chapter. Longer than the prequel target because this book now carries plot the prequel deferred. **A chapter under 2,000 words has been written in Book 1's voice and needs rewriting, not expanding.**

**Key structural beats:** Caleb Ward dies at Ch11 (midpoint). Iris finds the name "Willow Halloway" at the Act II turn, Ch15. Marin's consumption is Ch20 and is the longest chapter. Ch22 is Willow returning to finish Iris and failing — the third refusal, which produces the frustration that makes her strategic in Book 3.

**What this book explains, and never states:**
- Why the entity is called Willow — Iris **finds** the name, nobody explains it
- Why she took Iris's love for Lena specifically — recognition, not collateral. Ch21 gets to within one step and stops.
- What every environmental oddity in Book 1 Ch1 actually is

**Prose rules (adopted 2026-05-14, unchanged):** Book 2 onward follows **SENTENCE VARIETY** and **PROSE CONVENTIONS (HARD RULES)** in `series-bible/03-themes-and-tone.md`, which is now the **only** source for them. No default single-line fragmentation, no "Not X. Just Y." cadence, no "wrong"/"off" as shorthand, no "nodded once," no labeled pauses, no em dashes, no AI-writing tics, no repeated comparative crutches. Book 1 is published and stays as written; do not retro-edit it.

**Book 2 hard audit gates (in addition to the standard passes):**
0. **NO FRAGMENTATION.** Book 1's staccato voice does not carry into Book 2 in any form. Single-line fragment paragraphs are emphasis only, a few per chapter at most. Environmental description, physical sensation, and interiority are written in complete, joined, varied sentences. Highest risk: any Willow-adjacent passage, where a non-human perspective will tempt fragmentation, and any moment of grief or contact, where the instinct will be to break lines for weight. Read every page aloud. If it reads like a list, rewrite it.
1. **No villainy.** Marin never does the wrong thing in a scene. If a chapter reads like a horror movie about a scientist, it fails.
2. **No frame device inside a Recovered chapter.** They are scenes, not documents. The moment one opens with a timestamp or breaks to Iris mid-scene, the design has failed.
3. **The reader must like Willow Halloway.**
4. **Nobody explains the name.** Iris *finds* it in Ch15. That is not the same thing, and nobody ever explains it.
5. **No appetite language for the entity.** Satisfaction is completion, not pleasure — never hunger, craving, relish, enjoyment, or savoring. Pleasure would make her a person who enjoys things; satisfaction keeps her a system.
6. **Continuity locks from published Book 1** — see the table in `06-book2-outline.md`.

---

## WHERE WE LEFT OFF (2026-08-27)

**All 22 Book 2 briefs are written, merged, and downstream-consistent. Drafting can start at Ch1. No prose has been written since Book 1 was published.**

**Read first:** `series-bible/08-book2-chapter-briefs.md` — the briefs, plus front matter carrying three things the drafting depends on: the licensing rule, the investigation spine, and what the Recovered thread does *not* dramatize.

### The brief-set collision, and how it resolved

Two complete, independent 22-brief sets were written for this arc in parallel sessions. **The set in `a5f0fd2` is the base and is the stronger of the two.** Four things were merged in from the other: the title, the Ch22 Lena plant, the Act III rename, and a worked prose example. The second set is archived at `series-bible/archive/arc-03-superseded/08-book2-chapter-briefs-SEQUEL-B.md`.

**Root cause worth remembering: a local checkout two commits behind.** Fetch before starting large planning work.

### Decisions in force

Book 2 is a sequel with the origin recovered off the drives · Willow becomes a killer because her protocol is failing · satisfaction not pleasure · her face resolves toward Willow Halloway's · Book 3 ends with the compulsion trap then the water · Caleb dies at Book 2's midpoint · Iris ends ambiguous.

**Made while writing the briefs:**
- **The investigation spine.** Kade's crates hold two media classes: the research archive (intact, filed under research identifiers) and the clinical index that maps identifiers to patients (badly degraded). Iris reads Marin's whole story for eleven chapters with a number where the name should be, and Ch15 is the join resolving. **This is what makes the name found rather than explained.** Ch4's drafted "Can you see it?" exchange is the plant and must be verified as strong enough to carry eleven chapters.
- **Reallocation.** Seven Recovered chapters cannot hold six years, so Pell (Ch7), the shutdown (Ch3), the substrate's growth (Ch5), the read-only months (Ch17) and the reclassification form (Ch14) moved into Present chapters as facts Iris establishes through her profession.
- **Ch11 staging, and it is Iris POV, not Caleb's.** He calls her — flat, no alarm, because a fact requires reporting. She drives, arrives after, and he is still alive and completely emptied. **He answers her questions about his own emptying, accurately, until he stops.** A hollow POV rendered from inside for a whole chapter was considered and rejected.
- **Ch20's source.** Marin left a record before she went down, because documenting is the one thing she always did except for the two parameters she didn't. It licenses Ch20 and it is what Iris reads in Ch21.
- **Ch6 and Ch11 are two different escalations** — the dose and the return — discovered in that order and never conflated.

**Merged in 2026-08-27:**
- **The title: "The Ending."** It names her turn to killing. "The Keeping" was chosen for the prequel and was retired with it. Act III renamed to FINISHING, since the old name was title-derived. Nothing else is keyed to the title.
- **The Ch22 Lena plant.** The place Willow's procedure will not return from is where Iris's love for her sister used to be, so that is where she gets stuck, and being stuck there is how she learns Iris has a sister. **The failure and the plant are the same moment.** Lena is never approached and is never in danger; she is *located*. Book 3's midpoint now arrives caused. **Nothing explains it, and Iris registers only a duration.**

### Drafted prose — disposition

| File | Words | Status |
|---|---|---|
| `chapters-book2/04-intake.md` | 3,286 | **Portable** → Recovered R1, Ch4. Renumbered and moved 2026-08-27. Needs re-audit. |
| `chapter_review.md` (Ch8 — Sessions) | 3,387 | **Portable** → Recovered R2, Ch8. Retitled 2026-08-27. **Never author-proofread.** |
| `archive/drafts/DRAFT-prequel-ch02-recovery.md` | 2,855 | **Retired and moved out of `chapters-book2/`**, because `build-manuscript.js` was picking it up as chapter 2. Salvage assigned to Ch3, Ch5 and Ch19. |

### Next work, in priority order

1. **Draft Book 2 Ch1 — Aftermath.** Expand `archive/drafts/DRAFT-hunger-ch01-aftermath.md` (1,500 words) to 3,400, **by adding scene, not reflection.** That draft belongs to Book 2 Ch1, not Book 3 Ch1.
2. **Re-audit the two portable chapters** (Ch4 Intake, Ch8 Sessions) against the current gates. Ch8 has never had an author pass.
3. **Draft Act I forward** (Ch2, Ch3, Ch5, Ch6, Ch7), assessing length at the end of the act rather than per chapter.
4. **Write the 22 Book 3 briefs** against the rewritten `07-book3-outline.md`. The prequel-era set was archived rather than patched — salvage from `archive/arc-02-prequel/09-book3-chapter-briefs-PREQUEL-ERA.md` is expected to be high, but it is a rewrite, not an edit.

Items 5–7 of the previous list — the Book 3 outline rewrite, `02-characters.md`, and `10`/`11` — are **done**.

### Open questions — current position

1. ~~**The title.**~~ **RESOLVED 2026-08-27: "The Ending."**
2. ~~**Does Lena stay untouched through Book 2?**~~ **RESOLVED: untouched, and located on the last page.** Ch9 unchanged; Book 3's midpoint still has her intact to partially Take.
3. **Does Iris learn who signed the reclassification form?** **Not in Book 2** — the signature is on the degraded index. She gets the decision and not the name. Available to Book 3, and the kind of thing Virek could tell her.

## Book 3 — "The Silence"

**Status:** Outline **rewritten 2026-08-27** in `series-bible/07-book3-outline.md` — new ending, Willow's killer escalation, Virek's recognition function, and everything Book 2 now absorbs removed. **There are no Book 3 briefs.** The prequel-era set was archived at `archive/arc-02-prequel/09-book3-chapter-briefs-PREQUEL-ERA.md` rather than patched, because eight separate things in it were wrong.

Picks up weeks after **Book 2**. Willow becomes strategic and **no longer needs to touch anyone** from the Act I turn; the city misdiagnoses the spread and then welcomes it; Lena is partially Taken at the midpoint; Rourke breaks in public and then does institutional damage; Kade attempts containment alone and is partially Taken; and Iris opens herself completely.

**The ending: the compulsion trap, then the water.** Willow reaches the irreducible core, cannot take it, cannot stop, and **the attempt gives her what she has been assembling toward for six years.** She finishes becoming Willow Halloway, walks past Iris, and goes into the water. **Iris does not kill her. Iris finishes her.**

**Its engine is dramatic irony, reshaped by the pivot.** The reader finishes Book 2 knowing what Willow is — **and so does Iris**, who recovered the whole origin and felt none of it. What she never reaches is why Lena. Do not let the prose reach for the reader's knowledge.

**~~Ch1 salvage~~ — CLAIM WITHDRAWN 2026-08-26.** `archive/drafts/DRAFT-hunger-ch01-aftermath.md` belongs to **Book 2 Ch1**, which is the book that now opens weeks after The Absence. Book 3 opens weeks after *Book 2* and needs a different chapter. See the Book 3 warning above; this whole section predates the pivot.

## How to Review a Chapter

When user says a chapter is in `chapter_review.md`:

1. Read the chapter
2. Read the corresponding brief in `series-bible/05-book1-chapter-briefs.md` (or 08/09 for Books 2/3)
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
5. After approval, add an "As Written" block to the chapter brief with key prose details
6. Commit and push when asked

> **Book 1 note:** The Absence was written before the hard rules and is published — its sparser, more fragmented voice is intentional and stays. The PROSE HARD RULES and sentence-variety checks apply to Book 2 onward only.

## Editing Passes

Each book runs five passes after drafting (the structure Book 1 used, now codified):

1. **First-pass revision** — general quality. Tone drift, pacing, scene-level issues.
2. **Continuity check** — cross-reference all chapters against briefs, bible, and "As Written" blocks. Character knowledge state, timeline, location consistency.
3. **Proofread/polish pass** — punctuation convention enforcement, recurring-pattern variation, duplicate-phrase detection, density trimming.
4. **Deep audit pass** — typo sweep, convention enforcement, PROSE HARD RULES enforcement, "As Written" blocks reconciled.
5. **Chapter file review pass** — individual chapter files reviewed against briefs, final formatting, saved to `chapters/`.

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
- **Willow Halloway** — Marin's younger sister. Patient. Treatment succeeded. Drowned four months later, report says accident, intent never established. Her pre-treatment baseline map is what the entity is grown from.
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
- Caleb's key line: "You don't have to optimize the answer"
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
