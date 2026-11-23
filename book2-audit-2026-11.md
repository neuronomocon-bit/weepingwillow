# BOOK 2 — RULES AUDIT, 2026-11-22

**Read-only audit. Every chapter is locked; nothing here has been applied.** Findings are logged for the author to rule on later. A fix to a locked chapter needs the four standing-permission conditions in `CLAUDE.md` (consistency defects only), or a fresh authorization from the author for anything stylistic.

Checked against: `03-themes-and-tone.md` (hard rules, sentence variety, epistemic gate, caps, time markers, numbers, word overuse), `14-audit-method.md` (known-good hits, protected lines, split contrast framing), the chapter's brief and As Written block in `08-book2-chapter-briefs.md`, and `11-key-dialogue-notes.md`.

Severity: **A** = consistency or arithmetic defect (could qualify under standing permission) · **B** = hard-rule breach (style, needs the author's authorization) · **C** = cap, overuse or judgment call.

---

## Ch1 — Aftermath (2,931 words, locked 2026-09-02)

> **✅ RESOLVED 2026-11-22 on the author's instruction ("fix all", blocks A, B and C). Every item below is applied.** 1.8 was ruled a **Book 3 plant** (no prose change) and is recorded in `07-book3-outline.md`, `09-book3-chapter-briefs.md` and `CLAUDE.md`. Ch1 is now 2,735 words (−196), re-locked; the book is 72,050. The record is updated in the brief (As Written + RULES AUDIT PASS block), `02`, `03`, `11`, `14`, `CLAUDE.md`, `review-progress.md` and the vault. 1.27 needed no change once the closing sentence lost a clause (now 2 `and`s).

**Clean:** em dashes, exclamation points, `the kind of`, labeled silences, `nodded once`, `seemed/appeared/as if`, `found/caught herself`, self-annotation, `, which` codas, British forms, straight quotes. `verify-record.py` reports the lock intact.

### A — consistency / arithmetic

| # | Line | Finding |
|---|---|---|
| 1.1 | L41 | **The word count doesn't fit the message.** Yesterday's message is *"Call me when you can."*, which is five words, but "the request was in the first three words and the restraint was in the last four." That's seven words. The As Written block repeats the same count. |
| 1.2 | L53 | **"Three words and a name."** *See Caleb. Today.* is three words, and one of them is the name. |
| 1.3 | L29 vs L31 | **The payment schedule contradicts itself.** L29 says someone paid "for a decade, on time, every quarter". L31 says the payments went quarterly only four months after the shutdown, which was three years ago. |
| 1.4 | L29, L67, L181 | **Building or empty lot?** L29 says "The building had been bought eleven years ago." The same sentence group, L67 and L181 call it an "empty lot" and "a lot". |
| 1.5 | L29, L67 | **One figure, three renderings:** "eleven years ago", "for a decade", "for ten years". |
| 1.6 | L73 | **"since spring"**, but Day 21 is early March (the calendar table). This means either last spring, a year ago, or it's a slip. |
| 1.7 | L109 | Joel and Lila were assessed "a long time ago now". By the calendar that was at most about 8–9 weeks ago. It may be her subjective sense, but it reads as narration. |
| 1.8 | L29–31, whole book | **The industrial-road parcel is never paid off.** It has a Meridian name on the holding chain, an 80 × 20 m footprint and its own access road, and it's explicitly deferred ("it would keep") and carried into the closing paragraph. No later chapter returns to it. Ch3's storage yard "off the industrial road" is a different site (Kade's leased bay), which makes the two easy to confuse. Either it's a Book 3 plant that should be recorded as one, or it's a dropped setup. |

### B — hard-rule breaches

| # | Line | Rule | Finding |
|---|---|---|---|
| 1.9 | L131 | Epistemic gate 2 (do not certify what is there) | **"The consideration was real"** vouches for Caleb's interior. ⚠️ Ch11 depends on this line (`11-key-dialogue-notes.md` L213: "where the consideration was real"), so any fix ripples into Ch11. |
| 1.10 | L123 | Epistemic gate 1 (do not name what is missing) | **"Whatever had emptied Caleb"** uses a verb form of a banned word. Ch22 L141 has the same verb ("the thing that had emptied four h…"), so check whether the two are a deliberate pair. |
| 1.11 | L141 | Gate 1 | "There was nothing behind it." The narration names the absence, and "He had said it because it followed" already renders it. |
| 1.12 | L159 | Gates 1/2 | "She meant it as little as he did… neither of them was troubled by that" certifies Caleb's interior. |
| 1.13 | L121 | Gate 1, editorializing | "as he took everything now" is a narrator generalization about the Taken man. |
| 1.14 | L101, L149 | Gate 3 (not by image either) | "a room no one fully inhabited" and "the shape of concern with the concern lifted out". **Both were cleared before** (the room line is protected in `03` → `no one`; the concern line is load-bearing in As Written). Image gate 3 was added later, off Ch14. **Law 5: they were cleared against a different question.** The author should re-rule on them; this isn't a recommendation to cut. |
| 1.15 | L15 | Split contrast framing | "The cards along the doorframe were not instructions. They were measurements." This is one of the two Ch1 split-contrast hits already reported in `14-audit-method.md` and left alone. |
| 1.16 | L87, L181–183 | Split contrast framing | "The category had not changed. The circumstances had." and "That had not changed. What had changed was the instrument." The second is probably the other known hit. L87 has the same shape, so check whether the tool counts it. |

### C — caps, overuse, judgment

| # | Line | Finding |
|---|---|---|
| 1.17 | L11, 41, 77, 101, 125, 165, 177 | **"three weeks" appears 7 times; the time-marker cap is 5.** L165 and L177 argue about the interval and stay. L77, L101 and L125 are scene-setting, and deletion is the preferred fix. "second week" appears 3 times (L25, L45, L123), which is at the substitute cap. |
| 1.18 | L17, 35, 45, 123, 177 | **"rather than" appears 5 times.** It's a soft contrast frame repeated as a crutch. |
| 1.19 | L11, 87, 181–183 | **The "had (not) changed" frame appears 3 times**: "None of it had changed", "The category had not changed", "That had not changed. What had changed". A repeated construction. |
| 1.20 | L17, 45, 79, 177 | **The measurement philosophy is stated as a maxim four times** ("what she could not measure was not available…", "a measurement you take only when you expect a result is not a measurement", "the simpler the measure, the less of her own state…", "A thing checked on a schedule produced a series…"). Repetition without evolution; one or two are enough. L45 is also a trailing explanatory sentence. |
| 1.21 | L29, 101, 109, 169 | **4 triplets; the cap is 1.** "for a decade, on time, every quarter" · "Surfaces clear, nothing left out mid-task, the chairs square" · "Sleep. Memory. Appetite." · "was sound, and was hers, and was not what it replaced". |
| 1.22 | L31, L171 | **"the way" / "the same way" appears 2 times; the cap is 1.** |
| 1.23 | L11, 87, 157 | Trailing explanatory sentence candidates (paragraph finished without them): "She had walked out… the men with the van had loaded the van every morning since." · "The category had not changed. The circumstances had." · "He would say them to the next person in the same shape." |
| 1.24 | L29, L31 | **"standing charges" is a British utility term** (the US equivalent is fixed or service charges), and it sits beside "no utility connection she could find", so what is being paid for doesn't hold together. The US-English sweeps only screened spellings. |
| 1.25 | whole | **"second" appears 12 times**: second layer, second system, second week ×3, second try, second coffee/cup ×4, second card. The cup at Iris's sink (L59) and Caleb's second cup (L103, L155) may read as an unintended echo of the protected Ch11 setup. Law 6: does the text signal it? |
| 1.26 | L175 | She writes the convergence card "because the wall was the only place it would keep" and then puts it in her pocket. That's a small logic snag; it reads fine if she pins it later. |
| 1.27 | L183 | The closing sentence has 3 `and`s and 31 words, and ends on a summarizing declarative. This is probably justified accumulation; log it for the chapter-ending register count across chapters. |
| 1.28 | L67 | "between now and four": "four" here is a time, in a chapter that uses "four" nine times (meters, months, seconds, cards, words, steps, units, blocks). Minor ambiguity. |

**Not flagged (checked and fine):** "one of them was always wrong" (L31) is a factual judgment and permitted · `thing` at 4 matches the post-review figure · `instrument` once plus "damaged instrument" in the same closing sentence is the controlling metaphor's single landing · "Do you want anything," with no question mark follows the flat-affect punctuation convention · fragment density is within emphasis limits · Ch1 brief beats all present (list, cards, note, two possibilities, three-second turn, Caleb settled, Lena thread unanswered, convergence, scheduled check).
