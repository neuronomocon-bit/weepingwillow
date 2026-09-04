# Audit Method
**How defects are actually found — as distinct from what the prose must do.**
**Full source: `series-bible/14-audit-method.md`.**

---

## The central method
**Compare Book 2 against published Book 1 by frequency.** Reading Book 2 alone cannot find a voice defect, **because nothing in it is wrong.** Only the comparison surfaces one. On the day this method was adopted it found three real defects.

**The tool:** `node tools/voice-audit.js --per-ch`.

> [!warning] That check stops working if Book 1 is edited or moved
> Book 1 is the fixed point the measurement depends on.

## The three methods, and what each cannot see
1. **The frequency comparison** finds voice defects
2. **The beat count** finds missing beats
3. **The third method** — the author's chapter review — finds everything else

**Neither of the first two can see arithmetic, chronology, an access chain, an overclaim, or a domain implausibility, because every one of those is a well-formed sentence that happens to be false.**

## The five hard-error categories, in the order they will bite again
1. **Arithmetic** — three retries called four; a two-hour margin reported as eleven; four intervals on a scale with three transitions
2. **Chronology** — February called ten months back in a March scene. **The calendar is a locked table. Check every interval against [[Master Timeline]]**
3. **⚠️ The access chain** — a character knowing something no channel gave them. **The most dangerous, because it reads perfectly. For every fact a character states, name the sentence that gave it to them**
4. **Overclaiming** — inference stated as fact. **Rigor is [[Iris Vale]]'s characterization, so a sentence she could not defend is a defect in her**
5. **Domain plausibility** — a repeatable error said to rule out media damage; a blind pass that was not blind; *no arrest* said of a dead man

## The confidence-level defect
> *Iris must apply to her own origin theory the same rule she applies to Kade — do not build
> the missing part out of nothing, even when the conclusion is ultimately correct.*

Ch16 had her refuse, out loud, to invent Marin's motive, **and then break that standard four times within a thousand words of the refusal.**

> **The diagnostic, and it is cheap: when a character states an epistemic rule out loud, grep
> the same chapter for the sentences that break it.**

**Five sub-classes:**
1. **Absence of a recoverable trace stated as absence of the thing.** *"produced nothing"* off a search that only establishes nothing was filed. **Structural in this book: every negative finding Iris reaches is a finding about the record**
2. **One observation proving two independent propositions.** Cover one and ask whether the evidence still reaches the other
3. **A universal exclusion where an expert judgment was available.** *"A metering fault does not…"* is false as stated. Name the fault modes, put it low, say low is not zero
4. **Parallel description taken for identity of mechanism.** **Fix by writing the objection first, never by weakening the finding**
5. **An exclusivity claim about people the chapter has not accounted for.** *"the only living person who knew"* needed Marin's status. **Softeners do not fix this; the claim came out and nothing was lost**

## The inference chain
Ch14's derivation was circular and **passed the beat count, the frequency comparison and the number check, because every sentence was well formed and every number arithmetically correct.**

Two sub-classes in one chapter: **one case promoted to a program**, and **a data type silently changing level** (population intervals used as individual intervals, then quoted as a return window).

> **For every general claim, count the cases it rests on and check the prose says that number
> out loud. And check that a number still means what it meant in the chapter it came from.**

## The domain-vocabulary defect
**Two reviews in a row found the same class: a domain term used at the wrong strength by the character who would know better.**

> **The check: take every domain term in the chapter, ask what it would have to be true of, and
> ask whether the character saying it would accept that usage from a junior.**

## The competence floor
> [!warning] The most dangerous defect found so far
> An institutional response that is inadequate to the risk **as visible at the time** does not
> weaken a scene, **it inverts the book** — from *nothing in the system was built to catch this*
> into *these people were bad at their jobs.*

**Walk the incident-response chain on every institutional scene:** anomaly → containment → operator → affected systems → immediate mitigation → monitoring → ownership → closure criteria → **and what later changed.**

**Put the failure in a changed assumption, never in a missing step.**

## Checking a new claim against old prose
> **Before writing *"nothing in X ever…"* or handing a character a document, grep the locked
> chapters for what they already say about X.**

1. **A general claim contradicting an incidental detail in a locked chapter.** A draft said the program never went back to a finished patient. **Locked Ch5 says *"People who came back a year later."***
2. **A claim about a stretch the character has already said she cannot read.** **An established ignorance is an access-chain fact and decays the same way**
3. **A document handed to her from outside the archive she holds**

## The coda defect
> [!warning] A coda that grows into a scene relocates the book's final image
> Ch22's coda was inside its word ceiling and every negative gate passed, **and it still ended
> the book on the wrong character**, because seven paragraphs closing on physical action is a
> scene, and a scene competes for the last image. **The ceiling was never the constraint. The form was.**

## A fix recorded more broadly than it was made
`format-book-v2.js` had the book's name hardcoded in four places. One was fixed and the note said the class was handled, **so the export was treated as safe and the other three were never looked for.** The first Book 2 export put **"The Absence" on its title page** while all seventy running headers read correctly.

> **When a fix is recorded, the record states which sites were changed, not which class of
> problem was addressed.** And: **grep for the literal the fix removed.**
>
> **Verify a document by reading the text inside it, not the summary the builder prints.**

## Two rules that came out of our own mistakes
- **⚠️ A fix in one chapter is a change to every chapter that depends on it.** The Ch8 record-architecture fix silently invalidated Ch9's opening and nothing caught it. **After revising, grep the other chapters for the facts you changed, before the commit**
- **⚠️ The gate runs both ways.** Do not name what is missing and **do not certify what is there.** Ch10 had *"and she meant it"* about Willow, in a chapter built on nobody being able to tell

## Two general forms worth memorizing
> [!warning] A clean screen is evidence about the screen, not about the prose
> Every US-English screen was **morphological** and reported clean, correctly, while three
> **lexical** British forms sat in the text.

> [!warning] Never run a check containing curly quotes through a shell heredoc
> One did, reported zero for a form the corpus contains 86 times, **and did not error.**
> Caught only because a second implementation disagreed.

**And Law 7: the tooling is part of the corpus.** A protected-lines list was wrong about published Book 1 for two days after the prose was corrected. **A new screen goes in when the defect is found, not when it recurs.**

## The drafting discipline
**Count the brief's beats against the draft BEFORE the word count, not after.** The word count is the symptom that prompts the check and **has never once been the defect.**

- **Write the beat check against a phrase that can only exist if the beat is written**, never against a word the beat happens to contain
- **Check against the brief AND `11-key-dialogue-notes.md`.** They hold different beats
- **Under about 75% of budget is structurally incomplete, not brisk**

## The tools
| | |
|---|---|
| `node tools/voice-audit.js --per-ch` | frequency comparison, US-English screens, **the canonical word count** |
| `node tools/number-check.js --calendar` | every number-bearing sentence, and intervals |
| `python tools/verify-record.py` | word cross-check, review ledger, tracker staleness, **lock hashes** |

## Connections
[[Prose Rules]] · [[Locked Figures]] · [[Master Timeline]] · [[Book 2 - The Ending]]
