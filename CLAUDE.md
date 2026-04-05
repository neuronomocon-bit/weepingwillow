# WEEPING WILLOW — PROJECT STATUS & CONTEXT

## What This Project Is

A horror/sci-fi novel series called **Weeping Willow**. First three books:
- **Weeping Willow: The Absence** (Book 1)
- **Weeping Willow: The Hunger** (Book 2)
- **Weeping Willow: The Silence** (Book 3)

Series name is "Weeping Willow" — NOT "trilogy." Keeps the door open for future books.

## Workflow

- **Claude** handles: planning, scaffolding, series bible, chapter review/audit, continuity tracking
- **ChatGPT** handles: prose writing, using the system prompt in `series-bible/12-chatgpt-system-prompt.md`
- **Review process:** User drops chapters into `chapter_review.md` for Claude to audit

## Series Bible (COMPLETE)

All 12 docs in `series-bible/`:

| File | Contents |
|------|----------|
| `01-world.md` | Setting (Lowport, Maine, ~2050), tech, Meridian origin, atmosphere, public awareness arc |
| `02-characters.md` | Full cast: Willow, Iris, Kade, Rourke, Caleb, Lena, Virek, Lila Mercer, Joel, Leah, Enzo, Joe E., Xander, Weston |
| `03-themes-and-tone.md` | Thematic pillars + tone/voice rules |
| `04-book1-outline.md` | "The Absence" — 3-act structure, detailed beats |
| `05-book1-chapter-briefs.md` | 22 chapters, full scene breakdowns + "As Written" blocks for completed chapters |
| `06-book2-outline.md` | "The Hunger" — act structure, origin reveal, Willow's choice |
| `07-book3-outline.md` | "The Silence" — final confrontation, destruction method, locked specifics |
| `08-book2-chapter-briefs.md` | 22 chapters, full scene breakdowns |
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

**Book 1 — The Absence: COMPLETE**

**Book 1 — Full proofread/polish pass: COMPLETE (2026-04-04)**
- Question mark convention enforced: Iris/Taken characters use periods on questions (flat affect), warm characters (Rourke, Kade, Lena, Leah) use question marks. Pre-Taking Caleb Ch11 intentionally uses periods as foreshadowing.
- "Not X. Not Y. Z." pattern varied in densest stretch (Ch19-21)
- Duplicate phrase ("She held the contradiction") fixed in Ch15
- Fear-check formula trimmed from 5 to 2 full instances in Act III (Ch17 + Ch22 final); 3 middle instances varied
- Ch19 tightened (~90 lines consolidated)
- Ch7 As Written block reconciled with actual prose

**Next up:** Book 2 Ch1 — Aftermath

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
   - **Fragmentation & bloat check:** Flag sections where single-line/single-word paragraph rhythm becomes monotonous, content is restated without earning the repetition, or low-density prose inflates page count without adding meaning. The sparse style is correct for the series — but it must earn its space. Compound observations are allowed; not every beat needs its own line.
4. Flag any issues: name conflicts, tone drift, missing beats, continuity breaks
5. After approval, add an "As Written" block to the chapter brief with key prose details
6. Commit and push when asked

## Key Continuity Notes

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
- Ch13 "The difference between them was not kind. Only degree."
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
