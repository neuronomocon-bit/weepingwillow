// CANONICAL SOURCE for Chapter 2. Adapted from book1-published/chapters/ch02-caleb-ward.md.
// Captions and balloons quote the published text, except where the author's tic rules apply
// (no "Not X. Just Y.", no "should have been", no em dashes: interruptions use "...").
//
// Same panel fields as ch01 (see ch01-the-gap/panels.js), plus:
//   say     speech balloons [{t, pos, tail}]   tail: b | bl | br | l | r | none (off-panel or voiceover)
//   reuse   use another panel's art: 'p05-2' (this chapter) or 'ch01-the-gap/p02-2' (another chapter)
// Iris speaks questions with periods ("How."); Caleb uses question marks. That is Book 1's convention.
//
// style: 'ink' = prompts ask for ink-ready art (see INK_STYLE_BLOCK in build.js).

const P = (h, ...panels) => ({ h, panels });
const c = (w, panel) => ({ w, ...panel });

module.exports = {
  title: 'Weeping Willow: The Absence',
  chapter: 'Chapter 2 — Caleb Ward',
  cover: 'Chapter Two · Caleb Ward',
  style: 'ink',

  refs: [
    { id: 'ref-caleb', aspect: 'wide', chars: ['caleb'],
      prompt: 'Character reference sheet on a plain white background: the same man shown four times side by side, full body front view, full body three-quarter view, full body back view, and a head-and-shoulders close-up with his easy half-grin. Identical face, hair and clothing in all four. Relaxed standing pose.' },
  ],

  pages: [
    // ---------------------------------------------------------------- 1
    { n: 1, comic: true, rows: [
      P(2.0, c(1, { id: 'p01-1', bleed: ['top', 'left', 'right'], aspect: 'wide', chars: [],
        prompt: 'Establishing shot under a flat gray sky. A row of low warehouses built in mismatched stages: corrugated steel, patched brick, poured concrete. A loading yard with shallow puddles reflecting the sky. In the foreground a forklift stands idle near the bay doors, one tire half flat, its forks resting on the ground as if it set something down and never picked it back up. No people.',
        cap: [{ t: 'The second site sat three blocks inland from the river, behind a row of low warehouses that had been built in stages and never finished to the same standard twice.', pos: 'tl' }] })),
      P(1, c(1, { id: 'p01-2', aspect: 'wide', chars: [],
        prompt: 'A plain dark work van parked along a curb outside a small, shabby distribution building in a warehouse district. Gray afternoon. No people visible.',
        cap: [{ t: 'Iris parked along the curb and killed the engine.', pos: 'bl' }] }),
        c(1, { id: 'p01-3', aspect: 'square', chars: [],
        prompt: 'A brick wall where old signage was removed, leaving a cleaner rectangle; a cheap plastic placard is bolted over it, its corners curling, its face plain and blank.',
        screen: { lines: ['HARBOR DATA STORAGE', 'TEMPORARY FACILITY'], pos: 'center', style: 'sign' },
        cap: [{ t: 'Temporary had been there long enough for the edges to curl.', pos: 'bl' }] })),
    ] },

    // ---------------------------------------------------------------- 2
    { n: 2, comic: true, rows: [
      P(1, c(1, { id: 'p02-1', reuse: 'ch01-the-gap/p02-2',
        screen: { lines: ['HD-12-3', 'ON-SITE RECOVERY', 'PARTIAL NETWORK INTEGRITY', 'LOCAL BACKUP PRIORITY', 'TWO-PERSON ACCESS RECOMMENDED'], pos: 'tr' },
        cap: [{ t: 'The second line had been the reason for the additional name on the assignment.', pos: 'bl' }] })),
      P(1.7, c(1, { id: 'p02-2', aspect: 'tall', chars: ['caleb'],
        prompt: 'Caleb leaning against the frame of an open side door of the warehouse, one foot braced behind him against the wall, looking down at a phone in his hand, relaxed. Full figure, gray daylight on him, the doorway behind him solid black.',
        cap: [{ t: 'Caleb Ward.', pos: 'tl' }],
        say: [{ t: 'Door\'s already done. Lock was decorative.', pos: 'br', tail: 'bl' }] }),
        c(1.2, { id: 'p02-3', aspect: 'tall', chars: ['iris', 'caleb'],
        prompt: 'Iris walking past Caleb into the dark doorway of the warehouse, her face flat; Caleb pushing off the doorframe to fall in beside her, a faint amused half-smile. Medium two-shot.',
        cap: [{ t: 'His voice held the same casual tone she remembered. Slightly amused, even when nothing required it.', pos: 'tl' }] })),
    ] },

    // ---------------------------------------------------------------- 3
    { n: 3, comic: true, rows: [
      P(1.5, c(1, { id: 'p03-1', aspect: 'wide', chars: ['iris', 'caleb'],
        prompt: 'Wide interior of a warehouse used as makeshift data storage: one large open space broken up by temporary partitions and hanging plastic sheeting, metal server racks, cable runs stapled along the walls. The floor recently swept. Iris and Caleb small, walking side by side toward the racks at the back. Flickering fluorescent light, deep black shadows.',
        say: [{ t: 'Power\'s spotty. Whole place is running off something they shouldn\'t be trusting.', pos: 'tl', tail: 'br' },
              { t: 'Lights flicker every few seconds. If anything reboots, we start over.', pos: 'tr', tail: 'bl' }] })),
      P(1, c(1, { id: 'p03-2', aspect: 'wide', chars: ['iris', 'caleb'],
        prompt: 'Medium two-shot: Iris and Caleb walking side by side between temporary partitions in the warehouse, Iris looking straight ahead, Caleb talking with an easy expression, hands loose.',
        say: [{ t: 'Local copies.', pos: 'tl', tail: 'bl' },
              { t: 'Mostly. Some of it tries to phone home, but whatever it\'s calling doesn\'t pick up.', pos: 'tr', tail: 'br' }] }),
        c(1, { id: 'p03-3', reuse: 'p03-2',
        say: [{ t: 'That\'s fine.', pos: 'tl', tail: 'bl' }, { t: 'Yeah. Usually is.', pos: 'tr', tail: 'br' }] })),
      P(1.2, c(1, { id: 'p03-4', aspect: 'wide', chars: ['caleb'],
        prompt: 'Caleb pointing toward the back of the warehouse where a main cluster of server racks stands, and a smaller rack off to the right; casual gesture, looking back over his shoulder toward the viewer.',
        say: [{ t: 'Main cluster\'s there. Smaller node off to the right. We can split it or you can take both.', pos: 'tl', tail: 'br' }] })),
    ] },

    // ---------------------------------------------------------------- 4
    { n: 4, comic: true, rows: [
      P(1, c(1, { id: 'p04-1', aspect: 'square', chars: ['iris'],
        prompt: 'Head-and-shoulders close-up of Iris, face calm, flat and unreadable, eyes level, in the dim warehouse light. Plain black background.',
        say: [{ t: 'I\'ll take both.', pos: 'tl', tail: 'bl' }] }),
        c(1, { id: 'p04-2', aspect: 'square', chars: ['caleb'],
        prompt: 'Head-and-shoulders close-up of Caleb with a small, dry, knowing half-smile, eyebrows slightly raised, not unkind. Plain black background.',
        say: [{ t: 'Of course you will.', pos: 'tr', tail: 'br' }] })),
      P(1.1, c(1.2, { id: 'p04-3', aspect: 'wide', chars: ['iris'],
        prompt: 'Iris crouched by her open canvas pack at the base of a central cluster of server racks, laying out her kit: a ruggedized laptop with a blank glowing screen, a coil of fiber cable, a compact storage drive. Seen from a few steps away.',
        cap: [{ t: 'They moved toward the racks together, then separated without needing to say it.', pos: 'tl' }] }),
        c(1, { id: 'p04-4', aspect: 'tall', chars: ['caleb'],
        prompt: 'Caleb at the edge of the warehouse, studying a breaker panel mounted crookedly on a concrete column, one hand on the panel door.',
        say: [{ t: 'Let me know if anything drops.', pos: 'tl', tail: 'none' }, { t: 'I\'ll keep an eye on it.', pos: 'bl', tail: 'r' }] })),
      P(0.9, c(1, { id: 'p04-5', reuse: 'ch01-the-gap/p08-1',
        screen: { lines: ['NODE 1', 'TRANSFER STARTED'], pos: 'center' },
        cap: [{ t: 'The system responded cleanly. No resistance. No hesitation.', pos: 'bl' }] })),
    ] },

    // ---------------------------------------------------------------- 5
    { n: 5, comic: true, rows: [
      P(1.4, c(1, { id: 'p05-1', aspect: 'wide', chars: ['iris', 'caleb'],
        prompt: 'In the warehouse: in the foreground Iris kneels at her laptop by the server racks, her back three-quarters to us; behind her, a few steps away, Caleb sits on a metal chair turned backward, arms folded over the backrest, chin near his arms, watching her. Fluorescent light, deep black shadows.',
        cap: [{ t: 'Behind her, Caleb dragged a chair over and sat with it turned backward, arms folded over the backrest.', pos: 'tl' }],
        say: [{ t: 'Client say what they\'re after?', pos: 'tr', tail: 'br' }] })),
      P(1, c(1, { id: 'p05-2', aspect: 'square', chars: ['iris'],
        prompt: 'Iris in profile at her laptop, the screen light on her face, working, not looking up. Flat, focused expression. Dark warehouse behind her.',
        say: [{ t: 'Everything tagged to archive clusters four through nine.', pos: 'tl', tail: 'bl' }] }),
        c(1, { id: 'p05-3', aspect: 'square', chars: ['caleb'],
        prompt: 'Caleb sitting on a chair turned backward, arms folded over the backrest, head tilted, watching someone off-panel with mild curiosity. Medium close-up.',
        say: [{ t: 'Ambitious.', pos: 'tr', tail: 'bl' }] }),
        c(1, { id: 'p05-4', reuse: 'p05-2',
        say: [{ t: 'They usually are.', pos: 'tl', tail: 'bl' }] })),
      P(1, c(1, { id: 'p05-5', reuse: 'p05-1', focus: 'right center',
        cap: [{ t: 'Caleb watched her for a while.', pos: 'tl' }, { t: 'She felt it without looking up.', pos: 'br' }] })),
    ] },

    // ---------------------------------------------------------------- 6  the Meridian questions
    { n: 6, comic: true, rows: [
      P(1, c(1, { id: 'p06-1', reuse: 'p05-3', say: [{ t: 'You were out on the coast yesterday.', pos: 'tl', tail: 'br' }] }),
        c(1, { id: 'p06-2', reuse: 'p05-2', say: [{ t: 'Yes.', pos: 'tl', tail: 'bl' }] })),
      P(1, c(1, { id: 'p06-3', reuse: 'p05-3', say: [{ t: 'Meridian.', pos: 'tl', tail: 'br' }] }),
        c(1, { id: 'p06-4', reuse: 'p05-2', say: [{ t: 'Yes.', pos: 'tl', tail: 'bl' }] })),
      P(1, c(1, { id: 'p06-5', reuse: 'p05-3', say: [{ t: 'How was it?', pos: 'tl', tail: 'br' }] }),
        c(1, { id: 'p06-6', reuse: 'p05-2', say: [{ t: 'Intact enough.', pos: 'tl', tail: 'bl' }] })),
      P(1.2, c(1, { id: 'p06-7', reuse: 'p05-1',
        say: [{ t: 'That\'s not what I asked.', pos: 'tr', tail: 'br' }],
        cap: [{ t: 'She adjusted a cable, checked the transfer rate, and let the question sit for a second before answering.', pos: 'bl' }] })),
    ] },

    // ---------------------------------------------------------------- 7
    { n: 7, comic: true, rows: [
      P(1, c(1, { id: 'p07-1', reuse: 'p05-2', say: [{ t: 'Systems responded. Data was recoverable.', pos: 'tl', tail: 'bl' }] }),
        c(1, { id: 'p07-2', aspect: 'square', chars: ['caleb'],
        prompt: 'Close-up of Caleb, head tilted slightly to one side, studying someone off-panel, a question in his eyes, mouth closed. Plain black background.',
        say: [{ t: 'Anything weird?', pos: 'tr', tail: 'bl' }] })),
      P(1, c(1, { id: 'p07-3', reuse: 'p04-1', say: [{ t: 'No.', pos: 'tl', tail: 'bl' }] }),
        c(1.4, { id: 'p07-4', reuse: 'p05-3', say: [{ t: 'Place has a reputation. People don\'t like going in there.', pos: 'tl', tail: 'br' }] })),
      P(1.3, c(1, { id: 'p07-5', reuse: 'p05-1',
        say: [{ t: 'People don\'t like most of these places.', pos: 'tl', tail: 'b' },
              { t: 'Yeah, but Meridian\'s a different flavor. Medical, memory work, that kind of thing. Makes people uneasy.', pos: 'tr', tail: 'br' }] })),
      P(1, c(1, { id: 'p07-6', reuse: 'p05-2', say: [{ t: 'It\'s not active.', pos: 'tl', tail: 'bl' }] }),
        c(1, { id: 'p07-7', reuse: 'p07-2', say: [{ t: 'That doesn\'t mean it\'s empty.', pos: 'tr', tail: 'bl' }] })),
    ] },

    // ---------------------------------------------------------------- 8
    { n: 8, comic: true, rows: [
      P(1.2, c(1, { id: 'p08-1', aspect: 'wide', chars: ['iris'],
        prompt: 'Iris glancing up from her laptop toward someone off-panel, her face turned toward the viewer, eyes level and unreadable, the screen lighting her chin. Medium close-up, dark warehouse behind.',
        cap: [{ t: 'She glanced at him then.', pos: 'tl' }] })),
      P(1, c(1, { id: 'p08-2', reuse: 'p05-3',
        cap: [{ t: 'His expression hadn\'t changed. He was watching to see what she would do with it.', pos: 'tl' }] }),
        c(1, { id: 'p08-3', reuse: 'p05-2', say: [{ t: 'It was empty.', pos: 'tl', tail: 'bl' }] })),
      P(1, c(1, { id: 'p08-4', reuse: 'p05-1', focus: 'right center',
        say: [{ t: 'Okay.', pos: 'tr', tail: 'br' }], cap: [{ t: 'He didn\'t challenge it.', pos: 'bl' }] }),
        c(1, { id: 'p08-5', reuse: 'ch01-the-gap/p08-1',
        screen: { lines: ['NODE 1  30%', 'NODE 2  22%'], pos: 'center' } })),
    ] },

    // ---------------------------------------------------------------- 9
    { n: 9, comic: true, rows: [
      P(1.2, c(1, { id: 'p09-1', focus: 'center top', aspect: 'wide', chars: ['caleb'],
        prompt: 'Caleb leaning back on a metal chair, balancing it on its two back legs, hands laced behind his head, looking at someone off-panel with friendly curiosity. Full figure in the warehouse, fluorescent light.',
        say: [{ t: 'You sleep?', pos: 'tl', tail: 'br' }, { t: 'Yes.', pos: 'tr', tail: 'none' }] })),
      P(1, c(1, { id: 'p09-2', reuse: 'p09-1', focus: 'center top',
        say: [{ t: 'How long?', pos: 'tl', tail: 'br' }, { t: 'Enough.', pos: 'tr', tail: 'none' }] }),
        c(1, { id: 'p09-3', reuse: 'p09-1', focus: 'center top',
        say: [{ t: 'Define enough.', pos: 'tl', tail: 'br' }] })),
      P(1, c(1, { id: 'p09-4', reuse: 'p05-2', cap: [{ t: 'She did not answer.', pos: 'bl' }] }),
        c(1, { id: 'p09-5', reuse: 'p05-3', sfx: [{ t: 'clack', pos: 'bl' }],
        say: [{ t: 'Sorry. Not trying to run diagnostics on you.', pos: 'tr', tail: 'bl' }] })),
      P(1, c(1, { id: 'p09-6', reuse: 'p05-2', say: [{ t: 'It\'s fine.', pos: 'tl', tail: 'bl' }] }),
        c(1, { id: 'p09-7', reuse: 'p07-2', say: [{ t: 'You just seem...', pos: 'tr', tail: 'bl' }] })),
    ] },

    // ---------------------------------------------------------------- 10
    { n: 10, comic: true, rows: [
      P(1, c(1, { id: 'p10-1', reuse: 'p04-1', cap: [{ t: 'She waited.', pos: 'bl' }] }),
        c(1, { id: 'p10-2', reuse: 'p07-2', say: [{ t: '...different.', pos: 'tr', tail: 'bl' }] })),
      P(1, c(1, { id: 'p10-3', reuse: 'p04-1', say: [{ t: 'How.', pos: 'tl', tail: 'bl' }] }),
        c(1.3, { id: 'p10-4', aspect: 'wide', chars: ['caleb'],
        prompt: 'Caleb shrugging, palms turned up a little, a searching, slightly uneasy look, sitting backward on a chair. Medium shot.',
        say: [{ t: 'Slower, maybe. Or just... quieter in a way you weren\'t before.', pos: 'tr', tail: 'bl' }] })),
      P(1.5, c(1, { id: 'p10-5', reuse: 'p05-1',
        cap: [{ t: 'She checked the integrity readout again, though it did not require checking.', pos: 'bl' }],
        say: [{ t: 'I\'m working.', pos: 'tl', tail: 'b' }, { t: 'Yeah.', pos: 'tr', tail: 'br' },
              { t: 'That\'s the focus.', pos: 'tl', tail: 'b' }, { t: 'Yeah.', pos: 'tr', tail: 'br' }] })),
    ] },

    // ---------------------------------------------------------------- 11
    { n: 11, comic: true, rows: [
      P(1.4, c(1, { id: 'p11-1', aspect: 'wide', chars: ['caleb'],
        prompt: 'Caleb walking a slow circuit of the warehouse, hands in his pockets, pausing at an interior window cut into a partition wall that looks out onto another dim section of the building. He nudges a crate back into place with his foot.',
        cap: [{ t: 'He stood and walked a slow circuit around the room, hands in his pockets.', pos: 'tl' }],
        say: [{ t: 'Say something.', pos: 'tr', tail: 'bl' }] })),
      P(1, c(1, { id: 'p11-2', reuse: 'p08-1', say: [{ t: 'About what.', pos: 'tl', tail: 'bl' }] }),
        c(1, { id: 'p11-3', reuse: 'p07-2', say: [{ t: 'Anything.', pos: 'tr', tail: 'bl' }] }),
        c(1, { id: 'p11-4', reuse: 'p08-1', say: [{ t: 'Why.', pos: 'tl', tail: 'bl' }] })),
      P(1.2, c(1, { id: 'p11-5', aspect: 'wide', chars: ['caleb'],
        prompt: 'Close-up of Caleb with a small, warm, slightly sad smile, standing by a window in the dim warehouse, looking at someone off-panel.',
        say: [{ t: 'Because you usually would have by now.', pos: 'tl', tail: 'br' }] })),
    ] },

    // ---------------------------------------------------------------- 12
    { n: 12, comic: true, rows: [
      P(1.2, c(1, { id: 'p12-1', reuse: 'p08-1',
        cap: [{ t: 'She considered that.', pos: 'tl' }],
        say: [{ t: 'The power distribution here is unstable. If the secondary node drops, we lose part of the transfer.', pos: 'br', tail: 'bl' }] })),
      P(1, c(1, { id: 'p12-2', reuse: 'p11-5', say: [{ t: 'That tracks.', pos: 'tl', tail: 'br' }, { t: 'That\'s not what I meant.', pos: 'tr', tail: 'br' }] }),
        c(1, { id: 'p12-3', reuse: 'p04-1', say: [{ t: 'I know.', pos: 'tl', tail: 'bl' }] })),
      P(1.3, c(1, { id: 'p12-4', aspect: 'wide', chars: ['caleb'],
        prompt: 'Caleb sitting forward on the metal chair now (turned the normal way), forearms on his knees, telling a story with an amused expression, one hand mid-gesture with natural relaxed fingers. Medium shot in the warehouse.',
        say: [{ t: 'You remember that job on Dock Nine?', pos: 'tl', tail: 'br' }, { t: 'Yes.', pos: 'tr', tail: 'none' }] })),
    ] },

    // ---------------------------------------------------------------- 13  Dock Nine
    { n: 13, comic: true, rows: [
      P(1.3, c(1, { id: 'p13-1', reuse: 'p12-4',
        say: [{ t: 'Guy who tried to run his whole operation through one unsecured relay?', pos: 'tl', tail: 'br' }, { t: 'Yes.', pos: 'tr', tail: 'none' },
              { t: 'He kept telling us it was "temporary."', pos: 'tl', tail: 'br' }, { t: 'That\'s common.', pos: 'tr', tail: 'none' }] })),
      P(1, c(1, { id: 'p13-2', reuse: 'p12-4', focus: 'left center',
        say: [{ t: 'He had that sign up in the office. Remember? "Temporary solutions become permanent problems."', pos: 'tl', tail: 'b' }, { t: 'Yes.', pos: 'br', tail: 'none' }] })),
      P(1, c(1, { id: 'p13-3', reuse: 'p05-3', say: [{ t: 'And then he ignored it.', pos: 'tl', tail: 'br' }] }),
        c(1, { id: 'p13-4', reuse: 'p05-2', say: [{ t: 'Yes.', pos: 'tl', tail: 'bl' }] })),
      P(1, c(1, { id: 'p13-5', reuse: 'p11-5', say: [{ t: 'That was funny.', pos: 'tl', tail: 'br' }] }),
        c(1, { id: 'p13-6', reuse: 'p04-1', say: [{ t: 'It was inconsistent.', pos: 'tl', tail: 'bl' }] }),
        c(1, { id: 'p13-7', reuse: 'p11-5', say: [{ t: 'Yeah. That\'s one way to put it.', pos: 'tl', tail: 'br' }] })),
    ] },

    // ---------------------------------------------------------------- 14
    { n: 14, comic: true, rows: [
      P(1, c(1, { id: 'p14-1', reuse: 'ch01-the-gap/p08-1', screen: { lines: ['NODE 1', 'COMPLETE'], pos: 'center' },
        cap: [{ t: 'The first node completed.', pos: 'bl' }] }),
        c(1.2, { id: 'p14-2', reuse: 'p05-1',
        say: [{ t: 'You always do that the same way.', pos: 'tr', tail: 'br' }, { t: 'Yes.', pos: 'tl', tail: 'b' }] })),
      P(1, c(1, { id: 'p14-3', reuse: 'p05-3', say: [{ t: 'Same order. Same timing.', pos: 'tl', tail: 'br' }, { t: 'Never seen you rush it.', pos: 'bl', tail: 'none' }] }),
        c(1, { id: 'p14-4', reuse: 'p05-2', say: [{ t: 'It reduces errors.', pos: 'tl', tail: 'bl' }] }),
        c(1, { id: 'p14-5', reuse: 'p05-3', say: [{ t: 'Good system.', pos: 'tl', tail: 'br' }] })),
      P(1.4, c(1, { id: 'p14-6', aspect: 'wide', chars: ['iris', 'caleb'],
        prompt: 'Iris standing, snapping shut a hard equipment case packed with her kit; Caleb rising from the chair and stretching his arms over his head. Warehouse, fluorescent light.',
        say: [{ t: 'Done.', pos: 'tl', tail: 'bl' }, { t: 'That\'s it?', pos: 'tr', tail: 'br' }, { t: 'Yes.', pos: 'tl', tail: 'bl' },
              { t: 'Easy day.', pos: 'tr', tail: 'br' }, { t: 'Relative.', pos: 'tl', tail: 'bl' }, { t: 'Sure.', pos: 'tr', tail: 'br' }] })),
    ] },

    // ---------------------------------------------------------------- 15
    { n: 15, comic: true, rows: [
      P(1.5, c(1, { id: 'p15-1', aspect: 'wide', chars: ['iris', 'caleb'],
        prompt: 'Outside the warehouse in the gray afternoon: Caleb locking the side door behind them with a key, Iris standing a step away with her equipment case. Puddles, corrugated steel walls.',
        cap: [{ t: 'Caleb locked the door out of habit even though it had not held when they arrived.', pos: 'tl' }],
        say: [{ t: 'Food?', pos: 'tr', tail: 'bl' }] })),
      P(1, c(1, { id: 'p15-2', aspect: 'square', chars: ['iris'],
        prompt: 'Head-and-shoulders of Iris outside in gray daylight, a brief pause before answering, face flat, collar up against the damp.',
        say: [{ t: 'Brief.', pos: 'tl', tail: 'bl' }] }),
        c(1.3, { id: 'p15-3', aspect: 'wide', chars: ['caleb'],
        prompt: 'Caleb outside in gray daylight, grinning wide, pointing a thumb over his shoulder down the street.',
        say: [{ t: 'Diner around the corner. It qualifies.', pos: 'tr', tail: 'bl' }] })),
    ] },

    // ---------------------------------------------------------------- 16
    { n: 16, comic: true, rows: [
      P(1.3, c(1, { id: 'p16-1', aspect: 'wide', chars: ['iris', 'caleb'],
        prompt: 'A narrow street built for trucks, a parts supplier and a machine repair shop, and a small diner with a hand-painted sign and a front window fogged at the edges. Iris and Caleb small, walking toward it without talking. Gray afternoon.',
        cap: [{ t: 'A diner with a hand-painted sign and a window that fogged at the edges even when the door stayed closed.', pos: 'tl' }] })),
      P(1, c(1, { id: 'p16-2', aspect: 'wide', chars: [],
        prompt: 'Interior of a narrow, long diner: a counter with stools on one side, booths on the other, coffee pots, a pie case. Warm, worn, quiet. No people in focus.',
        cap: [{ t: 'The air smelled like coffee, grease, and something sweet that had been baked earlier and was no longer warm.', pos: 'tl' }] }),
        c(1, { id: 'p16-3', aspect: 'wide', chars: ['iris', 'caleb'],
        prompt: 'Iris and Caleb sitting across from each other in a diner booth, seen from the side so both faces are visible; Caleb leaning back, relaxed; Iris upright, hands flat on the table. A waitress setting down two water glasses.',
        cap: [{ t: 'A waitress filled water glasses without asking.', pos: 'tl' }], say: [{ t: 'Coffee.', pos: 'tr', tail: 'br' }] })),
      P(1.3, c(1, { id: 'p16-4', reuse: 'p16-3',
        say: [{ t: 'You sure you\'re good?', pos: 'tr', tail: 'br' }, { t: 'Yes.', pos: 'tl', tail: 'bl' },
              { t: 'That\'s your answer for everything.', pos: 'tr', tail: 'br' }, { t: 'Yes.', pos: 'tl', tail: 'bl' }] }),
        c(1, { id: 'p16-5', aspect: 'square', chars: ['caleb'],
        prompt: 'Caleb in a diner booth, smiling, but the smile is smaller and does not reach his eyes. Close-up.',
        say: [{ t: 'Alright. We\'ll go with that.', pos: 'tl', tail: 'br' }] })),
    ] },

    // ---------------------------------------------------------------- 17  the laugh
    { n: 17, comic: true, rows: [
      P(1, c(1, { id: 'p17-1', reuse: 'p16-3',
        cap: [{ t: 'Caleb talked about another job he had taken the week before. He described it in detail, because he liked the shape of the story.', pos: 'tl' }] })),
      P(1, c(1, { id: 'p17-2', aspect: 'wide', chars: ['iris'],
        prompt: 'Iris in a diner booth, listening across the table, still and attentive, face composed and unreadable, a coffee cup untouched in front of her. Medium close-up.',
        cap: [{ t: 'She followed the sequence. The way he set it up, the point where it would turn, the part where he expected a reaction.', pos: 'tl' }] })),
      P(1.8, c(1, { id: 'p17-3', aspect: 'wide', chars: ['caleb'],
        prompt: 'Caleb in a diner booth laughing out loud, head tipped back a little, a big easy open grin, eyes crinkled, completely alive and warm. The most vivid, joyful image of him. Medium close-up.',
        say: [{ t: '...and then the whole thing just shuts down like it\'s embarrassed. Guy looks at me like I did it on purpose.', pos: 'tl', tail: 'br' }],
        cap: [{ t: 'He laughed.', pos: 'br' }] })),
    ] },

    // ---------------------------------------------------------------- 18  the stillness
    { n: 18, comic: true, rows: [
      P(1, c(1, { id: 'p18-1', reuse: 'p17-2', cap: [{ t: 'She knew, with clarity, that she used to respond to this.', pos: 'tl' }] }),
        c(1, { id: 'p18-2', reuse: 'p17-2', cap: [{ t: 'She waited.', pos: 'tl' }] }),
        c(1, { id: 'p18-3', reuse: 'p17-2', cap: [{ t: 'The place where that response belonged remained still.', pos: 'tl' }] })),
      P(1.3, c(1, { id: 'p18-4', aspect: 'wide', chars: ['caleb'],
        prompt: 'Caleb in a diner booth, his laugh fading into a smile, looking across the table with a moment of expectation in his eyes, as if waiting for something that does not come. Medium close-up.',
        cap: [{ t: 'For a second, something like expectation held there.', pos: 'tl' }, { t: 'Then he let it go.', pos: 'br' }] })),
      P(1, c(1.3, { id: 'p18-5', reuse: 'p16-5', say: [{ t: 'Anyway. You had to be there.', pos: 'tl', tail: 'br' }] }),
        c(1, { id: 'p18-6', reuse: 'p17-2', say: [{ t: 'Yes.', pos: 'tl', tail: 'bl' }] })),
    ] },

    // ---------------------------------------------------------------- 19  outside the diner
    { n: 19, comic: true, rows: [
      P(1.3, c(1, { id: 'p19-1', aspect: 'wide', chars: ['iris', 'caleb'],
        prompt: 'A gray street outside the diner, trucks and damp air; Iris and Caleb standing beside her parked work van, facing each other. Medium-wide shot.',
        cap: [{ t: 'The street had not changed.', pos: 'tl' }],
        say: [{ t: 'Next one\'s yours or mine?', pos: 'tr', tail: 'br' }, { t: 'Mine.', pos: 'tl', tail: 'bl' },
              { t: 'Send it over when you have it.', pos: 'tr', tail: 'br' }, { t: 'I will.', pos: 'tl', tail: 'bl' }] })),
      P(1.4, c(1.3, { id: 'p19-2', aspect: 'wide', chars: ['caleb'],
        prompt: 'Close-up of Caleb by the van in gray daylight, serious for once, looking straight at someone just off-panel with honest concern, one hand making a vague open gesture with natural fingers.',
        say: [{ t: 'Hey.', pos: 'tl', tail: 'br' },
              { t: 'If something\'s off, you can just say that. You don\'t have to... optimize the answer.', pos: 'tr', tail: 'bl' }] }),
        c(1, { id: 'p19-3', aspect: 'square', chars: ['iris'],
        prompt: 'Close-up of Iris by the van in gray daylight, face completely level and composed, answering calmly, eyes steady.',
        say: [{ t: 'I\'m fine.', pos: 'tl', tail: 'bl' }] })),
      P(1, c(1, { id: 'p19-4', reuse: 'p19-2', focus: 'center 35%', cap: [{ t: 'He studied her face for a moment.', pos: 'bl' }],
        say: [{ t: 'Alright. Drive safe.', pos: 'tr', tail: 'bl' }] }),
        c(1, { id: 'p19-5', reuse: 'p19-3', say: [{ t: 'You too.', pos: 'tl', tail: 'bl' }] })),
    ] },

    // ---------------------------------------------------------------- 20
    { n: 20, comic: true, rows: [
      P(1.2, c(1, { id: 'p20-1', aspect: 'wide', chars: ['caleb'],
        prompt: 'A van side mirror filling the frame; in the mirror, small, Caleb walking away down the gray street back toward the diner, hands in his pockets, shoulders slightly hunched against the damp.',
        cap: [{ t: 'In the side mirror, she saw him turn and head back toward the diner, hands in his pockets.', pos: 'tl' }] })),
      P(1.1, c(1, { id: 'p20-2', aspect: 'wide', chars: ['iris'],
        prompt: 'Iris in the driver\'s seat of her van stopped at a red traffic light, both hands resting on the wheel, staring ahead through the windshield, face still. Gray street outside.',
        cap: [{ t: 'At the first light, she stopped.', pos: 'tl' }] })),
      P(1, c(1, { id: 'p20-3', reuse: 'p17-3', cap: [{ t: 'The moment at the table replayed. His voice. The timing. The point where the laugh had come.', pos: 'bl' }] }),
        c(1, { id: 'p20-4', reuse: 'p20-2', focus: 'center 30%', cap: [{ t: 'She waited again, as if the response might arrive late.', pos: 'bl' }] })),
      P(0.5, c(1, { id: 'p20-5', black: true, cap: [{ t: 'It did not.', pos: 'center' }] })),
      P(1, c(1, { id: 'p20-6', aspect: 'wide', chars: [],
        prompt: 'A small dark work van pulling away from a traffic light on a gray, damp street in a warehouse district, seen from behind, the light just turned. Wet road, low sky.',
        cap: [{ t: 'The light changed. She drove on.', pos: 'br' }] })),
    ] },
  ],
};
