# WEEPING WILLOW — PROJECT STATUS & CONTEXT

## What This Project Is

A horror/sci-fi novel series called **Weeping Willow**. First three books:
- **Weeping Willow: The First Cut** (Book 1)
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
| `02-characters.md` | Full cast: Willow, Iris, Kade, Rourke, Caleb, Lena, Virek, Lila Mercer |
| `03-themes-and-tone.md` | Thematic pillars + tone/voice rules |
| `04-book1-outline.md` | "The First Cut" — 3-act structure, detailed beats |
| `05-book1-chapter-briefs.md` | 22 chapters, full scene breakdowns + "As Written" blocks for completed chapters |
| `06-book2-outline.md` | "The Hunger" — act structure, origin reveal, Willow's choice |
| `07-book3-outline.md` | "The Silence" — final confrontation, destruction method, locked specifics |
| `08-book2-chapter-briefs.md` | 22 chapters, full scene breakdowns |
| `09-book3-chapter-briefs.md` | 22 chapters, full scene breakdowns |
| `10-subplot-threading.md` | 10 arcs tracked across all 66 chapters |
| `11-key-dialogue-notes.md` | Scene-level dialogue direction for ~15 key moments |
| `12-chatgpt-system-prompt.md` | Ready-to-paste system prompt for ChatGPT + drift corrections |

## Writing Progress

**Chapters written and reviewed:**
- Book 1 Ch1 — The Gap ✅
- Book 1 Ch2 — Caleb Ward ✅
- Book 1 Ch3 — The First Case ✅

**Next up:** Book 1 Ch4 — Lila Mercer

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
4. Flag any issues: name conflicts, tone drift, missing beats, continuity breaks
5. After approval, add an "As Written" block to the chapter brief with key prose details
6. Commit and push when asked

## Key Continuity Notes

- Sister is **Lena Vale** (was originally "Mara" in early planning — all refs updated)
- Ch3 victim's wife is **Leah** (renamed from Mara to avoid overlap)
- Ch3 victim is **Joel**, case ref K-01
- Willow's face description template: "Features learned from observation rather than born to them"
- Ch1 Taking memories: kitchen at 19, yellow mug, hospital corridor, red scarf on winter beach, two girls on a staircase
- Ch1 time gap: 14:07 to 14:41
- Caleb's key line: "You don't have to optimize the answer"
- Iris's report to Kade: "Something has been removed"
