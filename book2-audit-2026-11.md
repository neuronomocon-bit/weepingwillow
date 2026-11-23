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

**Back-check against Book 1 (added with the Ch2 audit): clean.** The café and Lena's unanswered first message match Book 1 Ch22. The second cup rhymes with Caleb's Taking memory in Book 1 Ch12 (coffee on a late shift). Book 1 never shows Caleb's apartment (Ch13 is a bar), so "She had gone through this room before" is off-page and contradicts nothing. The proximity sense matches Book 1 Ch7.

---

## Ch2 — Mortality (2,951 words, locked 2026-09-02)

> **✅ RESOLVED 2026-11-22 on the author's instruction ("fix all of that"). Every item below is applied.** Ch2 2,951 → 2,766 (−185), re-locked; book 71,865, now inside the 68–72k range. The calls the author left to me: 2.1, the department **moved** since the winter (fits Ch2's own funding line); 2.3, *another form* / *a second appointment*. The record is in the Ch2 brief → RULES AUDIT PASS.

**Scope added by the author 2026-11-22: each chapter is also checked for congruence with the chapters before it and with published Book 1.**

**Clean:** em dashes, exclamation points, `the kind of`, `, which`, `nodded once`, `seemed/appeared`, `found/caught herself`, straight quotes, `-body` pronouns in narration. Brief beats all present: the curve, 416 / 3 / 11, five deaths read, "Every one of them has a cause", the February list, the smallest true version, "description with a direction on it", the records room, the redesigned test and Iris's rescue-as-noise beat, the door assessment, the face-down pad. Protected close ("It was a fair test…") present verbatim.

### A — consistency / arithmetic / congruence

| # | Line | Finding |
|---|---|---|
| 2.1 | L3, L9 vs **Book 1 Ch6** | **Lowport Public Health doesn't match the published building.** Book 1 Ch6: *"The building was newer than the surrounding block… This one had been inserted"*, check-in at a wall-mounted terminal, *"No waiting room"*, a narrow efficient corridor with frosted-glass doors. Ch2: a former **bank**, eighty years of polished original stone, a counter with six positions, a queue rail, an elevator retrofitted into the stairwell. Ch2 mentions a smaller office "than the one she had been in during the winter" but never says the department moved buildings. **Book 1 is locked, so Ch2 is the side that has to give:** either say they moved (a line), or rebuild the ground floor to Book 1's. |
| 2.2 | L13 vs Book 1 Ch6 | The previous office "had been chosen for meeting people". Book 1's office was a desk facing the door, *"No attempt to soften the arrangement. No chairs angled for conversation."* That's a soft mismatch, worth reconciling in the same fix as 2.1. |
| 2.3 | L101, L181 | **Count errors in the appointment ladder.** Only the *first* request went unanswered (L5), so "a **fourth unanswered** request" is wrong. This is the first appointment, so "you won't get a **fourth appointment**" is wrong too. (Probably "a fourth request" and "a second appointment"; the author should choose.) |
| 2.4 | L105 | **"five weeks later he had gone eleven days without eating"**: the list is "from five weeks ago" (L97), so five weeks after the list is *now*, and he is already dead. It should be *within* five weeks (the brief says "dead inside five weeks"). Same phrase, two intervals (NUMBERS, one figure per rendering). |
| 2.5 | L143 vs L145 | **Four rows or five?** The shelving is "run in four rows", then a category "turned the corner onto the fifth, and the fifth row was two thirds empty". `02-characters.md` says four rows; the brief says both. |
| 2.6 | L67 | **Punctuation convention:** Rourke is warm and takes question marks, but *"Do you see it."* has a period. `11-key-dialogue-notes.md` L23 cites this exact line as a **flat-affect** example, so either the line or the rule file's example is wrong. |
| 2.7 | L211 | **Punctuation convention:** Iris is flat and takes periods, but *"What did you write?"* has a question mark. |
| 2.8 | L19, L89, L91 | **Blocking.** Rourke stands at the second desk from L19 and turns the screen back toward herself (L89). Then she "went to the second desk and came back", but she's already there. |
| 2.9 | L89 vs L115 | **Blocking.** The screen is turned away from Iris at L89, and at L115 "Iris looked at the plot again". |
| 2.10 | `02-characters.md` L720, brief L354 | **Stale records of the RETIRED test.** Both still say "a predicted death inside six weeks", and the brief adds "Iris recognizes it as the test she would have designed", which is the **opposite** of the current close ("it was not the test she would have designed"). The brief's own review-pass block says the old version "must not come back", and its As Written bullet still describes it. |
| 2.11 | L141 | "the woman from downstairs" is the woman who *came down* to collect her (L9), so she's from upstairs. Minor. |

### B — hard-rule breaches

| # | Line | Rule | Finding |
|---|---|---|---|
| 2.12 | L161 | It's-not-X-it's-Y (prose **and dialogue**) | *"That's not a collaboration," she said. "It's a scientist with a number…"* is the brief's own *"This is not an alliance. It is a scientist…"* leaking into Rourke's mouth. |
| 2.13 | L159 | Contrast framing | *"Not the files. The plot, both lines…"* (brief: "Not the files, the curve"). |
| 2.14 | L57 | Contrast framing | *"A man of fifty-one had stopped eating. Not refused. Stopped."* It's a Not-X-Y punchline, not an exclusion catalog. L59 *"Not run."* is a borderline candidate. |
| 2.15 | L39, L101 | Labeled silences | *"She let it sit there long enough for Iris to do the arithmetic"*; *"Rourke let that stand for a moment without decorating it."* Named pauses. |
| 2.16 | L75, L169 | Gesture vocabulary (cut on sight) | *"Rourke put her hand flat on the desk and left it there"* (hands flat on tables); *"She held up a hand before Iris could take it any further"* (a hand held up). Both are listed by name in `03`. |
| 2.17 | L107 | Duplicate reflection block | *"There was a place where something should have arrived… and it was smooth."* is the Ch1 beat (*"The place where it belonged was smooth"*) three days later, nearly verbatim, and Ch11 uses it again. It must vary or advance. |
| 2.18 | L115 | Hedge in narration | *"a cup she had clearly poured that morning"*. It's 9:20 a.m., so the observation is also empty. It also echoes Ch1's cold coffee. |

### C — caps, overuse, judgment

| # | Line | Finding |
|---|---|---|
| 2.19 | L45, 129, 177 (+13, 149) | **The "said it without X" crutch:** "without any performance in it", "without heat", "without any weight on it", plus "without being told" and "without being asked". 9 `without` in all. |
| 2.20 | L21, 85, 101, 181 | **Self-annotation, 4 against a cap of 2–3** (Rourke is licensed): "I want you to understand before you start", "You should also understand the position I'm actually in", "I'd rather tell you that than have you work it out", "I'm not being hard on you" (disclaimer). |
| 2.21 | narration | **Run-on screen: 12 narration sentences over threshold.** The worst are L107 (5 `and`s), L105 (4 commas, 4 `and`s, 47 words), L145 (4 `and`s), L57 (5 `and`s, 49 words), L159 (5 commas, 5 `and`s), L117, L3, L13, L143. L57 and L159 may survive as accumulation and a list; the rest read as chains. |
| 2.22 | L81, 89, 125, 129 | **The thesis stated three times.** "mechanism" appears 6 times, and Rourke says she has no mechanism at L81, again at L89 ("Two… is a mechanism I do not have"), and the point recurs at L133. One of L81/L89 can go. |
| 2.23 | whole | **"eleven" names five things:** deaths (the chapter's key figure), days ×2, minutes (L7 "early by eleven minutes"), months (L153). The incidental ones dilute the figure (NUMBERS, inverse rule). Ch1 also used "eleven minutes". |
| 2.24 | L7 | **Noticeboard as a checklist:** "Two flu clinics. A number for a helpline." These are fragments stacked as environmental description (SENTENCE VARIETY). |
| 2.25 | L193 | "The assessment was running. Iris could see it running." This is a restatement, and the second sentence is a trailing gloss. Also "The question had not come out of politeness." is a negation-led setup, a split-contrast candidate. |
| 2.26 | narration | **`thing` in narration ×3** (L57, 63, 117), about 10 per 10k against Book 1's 2.1. L57 "as a thing that had happened to him" is the ordinary-noun kind. |
| 2.27 | L5 | "No one offers a quarter past nine to a person they intend to spend long with." This is a present-tense narrator maxim (editorializing), quoted as load-bearing in As Written. It's a judgment call. |

**Congruence checked and fine:** Book 1's "hundreds" of cases → 416 · Rourke assessed Iris in Book 1 Ch6 ("Have you been evaluated?") → the door assessment continues it · Iris's Sleep/Memory/Appetite on Caleb (Ch1) mirrored by Rourke's sleep/appetite/work on Iris, a signaled rhyme · Ch7's printout "folded twice" matches Ch2 (Rourke folds it once, Iris again) · "only person in Lowport" in Ch1 and Ch2 is a known bounded instance (`review-progress.md`) · "the work is the only thing that hasn't changed speed" matches Ch1's short row · Ch2 ends on dialogue, Ch1 on narration.

### Found on the Ch2 re-read, after the fixes

- **Fixed:** cutting the hand-flat line left Rourke's echo *"Every one of them has a cause," she said* directly after Iris's identical line, so it read as Iris repeating herself. It is now tagged *Rourke said*. (A regression from the fix itself.)
- **⚠️ FORWARD ITEM for Ch7 and Ch16, a Book 1 contradiction found from Ch2.** Ch7 L39 has *"Joel, whom she had interviewed for forty minutes in a kitchen with the extractor fan running because the switch was shared with the light"* and Ch16 L121 has *"Joel, in a kitchen in February"*. **That detail belongs to Ch2's dead man** (written 2026-08-27 in Ch2; Ch7 borrowed it 2026-08-31). **Published Book 1 Ch3 puts Joel in a living room, in a chair angled toward a muted television, with Leah moving off toward the kitchen.** Joel is alive in Ch14 and Ch18, so the two men cannot be the same, and as written they share one memory. **Ch2 keeps the kitchen. Ch7 and Ch16 should give Joel Book 1's living room.** Fix it in their audits.
- Checked and congruent with later chapters: Ch6's *"Is he in your set."* uses the membership valve exactly as Ch2 sets it · Ch7's printout *"folded twice"* (Rourke once, Iris again) · Ch7 *"a prediction with the name left out was not a prediction"*, where Iris never submits, so *"no second appointment"* is never triggered · Ch12's Monday meeting is the second appointment, and the test was never failed · Ch12 puts Caleb on *"the second line"* of the February nine-name list, consistent with Ch2's fourth line being the dead man · Ch18's records room, *"unindexed and eleven months behind and filled from the door end backward"*, matches.
