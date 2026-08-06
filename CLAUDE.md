# WEEPING WILLOW — PROJECT STATUS & CONTEXT

## What This Project Is

A horror/sci-fi novel series called **Weeping Willow**. First three books:
- **Weeping Willow: The Absence** (Book 1) — published
- **Weeping Willow: The Keeping** (Book 2) — **prequel**, in planning
- **Weeping Willow: The Silence** (Book 3) — planning

Series name is "Weeping Willow" — NOT "trilogy." Keeps the door open for future books.

**Reading order is publication order.** Chronological order is The Keeping → The Absence → The Silence.

**Arc pivot (2026-08-04):** Book 2 was formerly "The Hunger," a direct sequel. It is now a prequel that dramatizes Willow's origin and ends one beat before Book 1's first page. Book 3 — The Silence absorbs the escalation material and carries through to the destruction. The superseded arc (both outlines, both sets of 22 briefs, the old threading and dialogue docs, and the unapproved Hunger Ch1 draft) is preserved in `series-bible/archive/` with a README explaining what moved where.

## Workflow

- **Claude** handles: planning, scaffolding, series bible, chapter drafting (Book 2 onward), chapter review/audit, continuity tracking
- **Book 1** prose was drafted by ChatGPT. As of Book 2 (2026-05-14), ChatGPT was dropped — it could not reliably hold the prose hard rules — and **Claude drafts the chapters directly.** `series-bible/12-chatgpt-system-prompt.md` is retained as a consolidated rules reference.
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

## Series Bible (COMPLETE)

All 12 docs in `series-bible/`:

| File | Contents |
|------|----------|
| `01-world.md` | Setting (Lowport, Maine, ~2050), tech, Meridian origin, atmosphere, public awareness arc |
| `02-characters.md` | Full cast: Willow, Iris, Kade, Rourke, Caleb, Lena, Virek, Lila Mercer, Joel, Leah, Enzo, Joe E., Xander, Weston |
| `03-themes-and-tone.md` | Thematic pillars + tone/voice rules |
| `04-book1-outline.md` | "The Absence" — 3-act structure, detailed beats |
| `05-book1-chapter-briefs.md` | 22 chapters, full scene breakdowns + "As Written" blocks for completed chapters |
| `06-book2-outline.md` | "The Keeping" — prequel structure, the two threads, continuity locks from published Book 1 |
| `07-book3-outline.md` | "The Silence" — spread, selection, confrontation, destruction method, locked specifics |
| `08-book2-chapter-briefs.md` | 22 chapters, prequel. POV: Marin 12 / Iris 6 / Willow 3 / Virek 1. Master timeline, word budget, continuity spine |
| `09-book3-chapter-briefs.md` | 22 chapters, full scene breakdowns |
| `10-subplot-threading.md` | 10 arcs tracked across all 66 chapters |
| `11-key-dialogue-notes.md` | Scene-level dialogue direction for ~15 key moments |
| `12-chatgpt-system-prompt.md` | Ready-to-paste system prompt for ChatGPT + drift corrections |
| `character-image-prompts.md` | DALL-E/ChatGPT image prompts — dark gothic painterly style, all 12 characters (16 prompts) |

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

## Book 2 — "The Keeping" (PREQUEL)

**Status:** Planning complete, drafting not started. Outline in `series-bible/06-book2-outline.md`; 22 chapter briefs in `series-bible/08-book2-chapter-briefs.md`. Per-chapter status in `review-progress.md`. Approved chapters save to `chapters-book2/`.

**Premise:** Dr. Marin Halloway works on Meridian's therapeutic memory editing program and enrolls her younger sister **Willow Halloway** as a patient. The treatment works: it strips the emotional charge out of her trauma and leaves her calm, agreeable, functional, and less. Four months later Willow drowns off the Lowport coast. The report says accident, and Marin has no way to determine whether the flattening is what let her walk into the water. The system still holds Willow's complete pre-treatment map, the version that could still feel. Marin removes the integration limiter to reach it. What comes out keeps the name.

Running in parallel, six chapters follow Iris Vale before any of it: intact, feeling, arguing with Lena, taking jobs, until she accepts a contract at a sealed facility on the coast.

**Threads:** Marin 12 chapters · Iris 6 · Willow 3 · Virek 1 (Iris also opens Ch22)

**Length: 70,000–78,000 words.** This is a novel, not a novella. Roughly 3,300 per chapter, reached through fuller scenes rather than padding. Book 1's 23,405 words were a consequence of its fragmented voice; joined prose holds far more per page. Per-chapter budgets and the master timeline are in `08-book2-chapter-briefs.md`. **A chapter under 2,000 words has been written in Book 1's voice and needs rewriting, not expanding.**

**Timeline:** opens Year −6, Meridian goes dark Year −3 (fixed by Book 1 Ch1's "wall calendar stopped three years earlier"), Book 1 opens Year 0.

**What this book explains, and never states:**
- Why the entity is called Willow
- Why she took Iris's love for Lena specifically in Book 1 — recognition, not collateral
- Why she reaches for Lena in Book 3
- What every environmental oddity in Book 1 Ch1 actually is

**Prose rules (adopted 2026-05-14, unchanged):** Book 2 onward follows **SENTENCE VARIETY** and **PROSE CONVENTIONS (HARD RULES)** in `series-bible/03-themes-and-tone.md` (mirrored in `12-chatgpt-system-prompt.md`). No default single-line fragmentation, no "Not X. Just Y." cadence, no "wrong"/"off" as shorthand, no "nodded once," no labeled pauses, no em dashes, no AI-writing tics, no repeated comparative crutches. Book 1 is published and stays as written; do not retro-edit it.

**Book 2 hard audit gates (in addition to the standard passes):**
0. **NO FRAGMENTATION.** Book 1's staccato voice does not carry into Book 2 in any form. Single-line fragment paragraphs are emphasis only, a few per chapter at most. Environmental description, physical sensation, and interiority are written in complete, joined, varied sentences. Highest risk: the three Willow POV chapters (17, 19, 22), where a non-human perspective will tempt fragmentation, and any moment of grief or contact, where the instinct will be to break lines for weight. Read every page aloud. If it reads like a list, rewrite it.
1. **No villainy.** Marin never does the wrong thing in a scene. If a chapter reads like a horror movie about a scientist, it fails.
2. **No Iris foreshadowing.** Her chapters have no unease, no premonition, no Meridian. She has no idea.
3. **The reader must like Willow Halloway.**
4. **Nobody explains the name.** Not once, by anyone.
5. **Continuity locks from published Book 1** — see the table in `06-book2-outline.md`.

**Current state (2026-08-06):** Ch1 — Intake (3,286 words) and Ch2 — Recovery (2,855 words) approved and saved to `chapters-book2/`, As Written blocks added. **Ch3 — Sessions is drafted in `chapter_review.md` (3,387 words) and awaiting author proofread.** On approval: save to `chapters-book2/03-sessions.md`, add the As Written block to the Ch3 brief, then draft Ch4 — Calm.

---

## Book 3 — "The Silence"

**Status:** Planning complete. Outline in `series-bible/07-book3-outline.md`; 22 briefs in `series-bible/09-book3-chapter-briefs.md`.

Picks up weeks after Book 1. Absorbs the escalation material from the retired "Hunger" arc plus the original Book 3 endgame: Willow becomes strategic, the city misdiagnoses the spread and then welcomes it, Lena is partially Taken at the midpoint, Rourke breaks, Kade attempts containment alone and is partially Taken, and Iris opens herself completely so Willow reaches the one thing she cannot process.

**Its engine is dramatic irony.** The reader finished the prequel and knows what Willow is. Iris never learns most of it. Do not let the prose reach for the reader's knowledge.

**Ch1 salvage:** `series-bible/archive/DRAFT-hunger-ch01-aftermath.md` matches the new Book 3 Ch1 brief almost exactly and is reusable with light edits. It runs ~1,500 words and wants expansion.

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

### Book 2 (prequel) specific

- **Marin written as a villain:** "She is not reckless, arrogant, or ambitious. She is competent and grieving. Every step is small and defensible. Rewrite so there is no scene where she does the wrong thing."
- **The lab scene playing as horror:** "No flickering lights, no ominous readouts, no warning ignored for effect. The deviation is paperwork and an afternoon. Make it almost boring."
- **Iris sensing something:** "Cut it. She has no idea. No unease, no premonition, no Meridian. Her chapters are a life. The reader supplies all the dread."
- **The prose reaching for the reader's knowledge:** "Delete the nudge. The reader knows what this is. If the sentence would collapse for someone who hadn't read Book 1, it's doing the reader's job for them."
- **Willow Halloway written as a symbol:** "She's a person. Difficult, funny, scared. Make her annoying. The reader has to like her before she becomes data."
- **The name explained:** "Cut it. Nobody in this series ever explains where the name came from."

## Key Continuity Notes

### Book 2 canon (established 2026-08-04)

- **Dr. Marin Halloway** — Meridian researcher, therapeutic memory editing program. Book 2 POV protagonist. Consumed in Ch17. Never named in Books 1 or 3.
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
