// CANONICAL SOURCE for Chapter 2. Adapted from book1-published/chapters/ch02-caleb-ward.md.
// Captions and balloons quote the published text, except where the author's tic rules apply
// (no "Not X. Just Y.", no "should have been", no em dashes: interruptions use "...").
//
// Same panel fields as ch01 (see ch01-the-gap/panels.js), plus:
//   say     speech balloons [{t, pos, tail, mw}]   tail: b | bl | br | l | r | t | tl | tr | none (off-panel or voiceover)
//   pos     tl tr bl br top bottom center, or "@x,y" (left/top in % of the panel). mw = max width in inches.
//   ⚠️ LETTERING NEVER COVERS A FACE (author, 2026-11-27). Check with: node audit-letters.js <chapter>
// Iris speaks questions with periods ("How."); Caleb uses question marks. That is Book 1's convention.
//
// style: 'ink' = prompts ask for ink-ready art (INK_STYLE_BLOCK in build.js) and ink-pass.py uses CLEAN.
//
// ⚠️ NO REPEATS (author, 2026-11-23). Every panel has its own art: no `reuse`, not even across chapters.
// Consecutive shots of the same person change the angle, distance or expression. build.js refuses a
// reuse while noRepeats is set. Several short exchanges share one panel instead of repeating a face.
//
// DRIFT LOCKS for this chapter (check every image against these as it is generated):
//   Caleb: canvas work jacket, dark t-shirt, BLUE JEANS (never cargo trousers), work boots.
//   Iris: dark field jacket, collar up, plain canvas backpack, cargo trousers; bare hands when typing.
//   The chair: turned BACKWARD from p05 to p11 (backrest in front of his chest); facing FORWARD p12 to p14.
//   Her van is WHITE (Ch1).

const P = (h, ...panels) => ({ h, panels });
const c = (w, panel) => ({ w, ...panel });

module.exports = {
  title: 'Weeping Willow: The Absence',
  chapter: 'Chapter 2 — Caleb Ward',
  cover: 'Chapter Two · Caleb Ward',
  style: 'ink',
  noRepeats: true,

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
        prompt: 'A plain WHITE work van (white paint, left as clean white paper with black outlines and a few bold shadow shapes) parked along a curb outside a small, shabby distribution building in a warehouse district. Gray afternoon, wet street. No people visible.',
        cap: [{ t: 'Iris parked along the curb and killed the engine.', pos: 'bl' }] }),
        c(1, { id: 'p01-3', aspect: 'square', chars: [],
        prompt: 'A brick wall where old signage was removed, leaving a cleaner rectangle; a cheap plastic placard is bolted over it, its corners curling, its face plain and blank.',
        screen: { lines: ['HARBOR DATA STORAGE', 'TEMPORARY FACILITY'], box: [0.28, 0.41, 0.71, 0.62], rot: -2, style: 'sign' },
        cap: [{ t: 'Temporary had been there long enough for the edges to curl.', pos: 'bl' }] })),
    ] },

    // ---------------------------------------------------------------- 2
    { n: 2, comic: true, rows: [
      P(1, c(1, { id: 'p02-1', aspect: 'wide', chars: [],
        prompt: 'Inside a work van, over-the-shoulder view from behind the driver\'s seat: a woman\'s gloved hand holds a rugged gray field tablet with a thick rubber bumper against the steering wheel; its screen is blank and glowing white. Through the windshield, out of focus, the shabby warehouse building. Only the hand, a dark jacket sleeve and the tablet are visible, no face.',
        screen: { lines: ['HD-12-3', 'ON-SITE RECOVERY', 'PARTIAL NETWORK INTEGRITY', 'LOCAL BACKUP PRIORITY', 'TWO-PERSON ACCESS RECOMMENDED'], box: [0.36, 0.42, 0.69, 0.69] },
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
        say: [{ t: 'Local copies.', pos: '@3,45', tail: 'tr' },
              { t: 'Mostly. Some of it tries to phone home, but whatever it\'s calling doesn\'t pick up.', pos: 'br', tail: 'none' }] }),
        c(1, { id: 'p03-3', aspect: 'wide', chars: ['iris', 'caleb'],
        prompt: 'Low angle from behind and below: Iris and Caleb seen from the back as they walk away from us down a narrow aisle between sheets of hanging plastic toward a wall of dark server racks; a fluorescent tube overhead. Iris walks straight, Caleb has his head turned toward her, his face in profile with a small amused smile.',
        say: [{ t: 'That\'s fine.', pos: 'tl', tail: 'bl' }, { t: 'Yeah. Usually is.', pos: 'tr', tail: 'br' }] })),
      P(1.2, c(1, { id: 'p03-4', focus: 'center top', aspect: 'wide', chars: ['caleb'],
        prompt: 'Caleb pointing toward the back of the warehouse where a main cluster of server racks stands, and a smaller rack off to the right; casual gesture, looking back over his shoulder toward the viewer.',
        say: [{ t: 'Main cluster\'s there. Smaller node off to the right. We can split it or you can take both.', pos: '@44,4', tail: 'l' }] })),
    ] },

    // ---------------------------------------------------------------- 4
    { n: 4, comic: true, rows: [
      P(1, c(1, { id: 'p04-1', aspect: 'square', chars: ['iris'],
        prompt: 'Head-and-shoulders close-up of Iris, face calm, flat and unreadable, eyes level, in the dim warehouse light. Plain black background.',
        say: [{ t: 'I\'ll take both.', pos: 'tl', tail: 'bl' }] }),
        c(1, { id: 'p04-2', aspect: 'square', chars: ['caleb'],
        prompt: 'Head-and-shoulders close-up of Caleb with a small, dry, knowing half-smile, eyebrows slightly raised, not unkind. Plain black background.',
        say: [{ t: 'Of course you will.', pos: 'tr', tail: 'br' }] })),
      P(1.4, c(1.2, { id: 'p04-3', focus: 'center top', aspect: 'wide', chars: ['iris'],
        prompt: 'Iris crouched by her open canvas pack at the base of a central cluster of server racks, laying out her kit: a ruggedized laptop with a blank glowing screen, a coil of fiber cable, a compact storage drive. Seen from a few steps away.',
        cap: [{ t: 'They moved toward the racks together, then separated without needing to say it.', pos: '@51,3', mw: 1.5 }] }),
        c(1, { id: 'p04-4', aspect: 'tall', chars: ['caleb'],
        prompt: 'Caleb at the edge of the warehouse, studying a breaker panel mounted crookedly on a concrete column, one hand on the panel door.',
        say: [{ t: 'Let me know if anything drops.', pos: 'tl', tail: 'none' }, { t: 'I\'ll keep an eye on it.', pos: 'bl', tail: 'r' }] })),
      P(0.9, c(1, { id: 'p04-5', aspect: 'wide', chars: [],
        prompt: 'Close insert, eye level with a server rack: a ruggedized laptop sits on a black flight case pushed up against the rack, its screen blank and glowing white; a thick fiber cable runs from the laptop into a port on the rack, where a row of tiny status lights glow. A woman\'s bare fingers rest on the keyboard at the edge of frame. No face.',
        screen: { lines: ['NODE 1', 'TRANSFER STARTED'], box: [0.25, 0.19, 0.55, 0.48], rot: -2 },
        cap: [{ t: 'The system responded cleanly. No resistance. No hesitation.', pos: 'bl' }] })),
    ] },

    // ---------------------------------------------------------------- 5
    { n: 5, comic: true, rows: [
      P(1.4, c(1, { id: 'p05-1', aspect: 'wide', chars: ['iris', 'caleb'],
        prompt: 'In the warehouse: in the foreground Iris kneels at her laptop by the server racks, her back three-quarters to us; behind her, a few steps away, Caleb sits on a metal chair turned backward, arms folded over the backrest, chin near his arms, watching her. Fluorescent light, deep black shadows.',
        cap: [{ t: 'Behind her, Caleb dragged a chair over and sat with it turned backward, arms folded over the backrest.', pos: 'tl' }],
        say: [{ t: 'Client say what they\'re after?', pos: 'br', tail: 'none' }] })),
      P(1, c(1, { id: 'p05-2', aspect: 'square', chars: ['iris'],
        prompt: 'Iris in profile at her laptop, the screen light on her face, working, not looking up. Flat, focused expression. Dark warehouse behind her.',
        say: [{ t: 'Everything tagged to archive clusters four through nine.', pos: '@6,45', tail: 't', mw: 1.6 }] }),
        c(1, { id: 'p05-3', aspect: 'square', chars: ['caleb'],
        prompt: 'Caleb sitting on a chair turned backward, arms folded over the backrest, head tilted, watching someone off-panel with mild curiosity. Medium close-up.',
        say: [{ t: 'Ambitious.', pos: 'tr', tail: 'bl' }] }),
        c(1, { id: 'p05-4', aspect: 'square', chars: ['iris'],
        prompt: 'Iris at the smaller server rack, reaching up to seat a fiber cable into a port at shoulder height, seen from a low angle, her face three-quarters toward us, eyes on the port, mouth set. Rack status lights in the dark behind her.',
        say: [{ t: 'They usually are.', pos: '@4,40', tail: 'tr', mw: 1.1 }] })),
      P(1, c(1, { id: 'p05-5', aspect: 'wide', chars: ['iris', 'caleb'],
        prompt: 'Over-the-shoulder shot from behind Caleb: in the foreground, large and dark, the back of his head and his shoulder and forearms folded over the backrest of his backward chair; in the background, small and lit, Iris working at the server racks with her back to him, not looking round.',
        cap: [{ t: 'Caleb watched her for a while.', pos: 'tl' }, { t: 'She felt it without looking up.', pos: 'br' }] })),
    ] },

    // ---------------------------------------------------------------- 6  the Meridian questions
    { n: 6, comic: true, rows: [
      P(1, c(1, { id: 'p06-1', aspect: 'wide', chars: ['caleb'],
        prompt: 'Very close, from a low angle: Caleb\'s chin resting on his forearms, which are folded on top of the backrest of a backward metal chair; only his eyes lift toward someone off-panel, casual, friendly, curious. Dark warehouse behind.',
        say: [{ t: 'You were out on the coast yesterday.', pos: '@2,8', tail: 'r', mw: 1.05 }, { t: 'Yes.', pos: 'tr', tail: 'none' }] }),
        c(1, { id: 'p06-2', aspect: 'square', chars: [],
        prompt: 'Extreme close insert: a woman\'s bare fingers pressing a fiber-optic connector into a port on a server rack until it clicks; a tiny status light beside it. Strong black shadows. No face.',
        say: [{ t: 'Meridian.', pos: 'tl', tail: 'none' }, { t: 'Yes.', pos: 'br', tail: 'none' }] })),
      P(1, c(1, { id: 'p06-3', aspect: 'square', chars: ['caleb'],
        prompt: 'Caleb seen from his left side in profile, sitting astride a metal chair turned backward, both arms draped over the backrest, one hand loosely holding the opposite wrist, an easy questioning look toward the right of the frame.',
        say: [{ t: 'How was it?', pos: 'tl', tail: 'br' }] }),
        c(1.4, { id: 'p06-4', focus: 'left center', aspect: 'wide', chars: ['iris', 'caleb'],
        prompt: 'Iris from the front and slightly below, kneeling at her laptop, her face lit from beneath by the white screen, eyes down on it, expression flat; behind her, small and in deep shadow, Caleb on his backward chair.',
        say: [{ t: 'Intact enough.', pos: 'tr', tail: 'bl' }, { t: 'That\'s not what I asked.', pos: '@2,3', tail: 'b', mw: 1.1 }] })),
      P(1.2, c(1, { id: 'p06-5', aspect: 'wide', chars: ['iris'],
        prompt: 'Iris\'s hands at work, medium-close from above: one hand straightening a cable where it enters the laptop, the other hovering over the keyboard, the white screen at the edge of frame; the cuff of her dark jacket. Her face is cut off by the top of the frame.',
        cap: [{ t: 'She adjusted a cable, checked the transfer rate, and let the question sit for a second before answering.', pos: 'bl' }] })),
    ] },

    // ---------------------------------------------------------------- 7
    { n: 7, comic: true, rows: [
      P(1, c(1, { id: 'p07-1', aspect: 'square', chars: ['iris'],
        prompt: 'Close-up of Iris looking down at a screen just below the frame, her face lit from below by its white light, eyes lowered, mouth level and neutral. Black background.',
        say: [{ t: 'Systems responded. Data was recoverable.', pos: '@1,56', tail: 'r', mw: 0.95 }] }),
        c(1, { id: 'p07-2', aspect: 'square', chars: ['caleb'],
        prompt: 'Close-up of Caleb, head tilted slightly to one side, studying someone off-panel, a question in his eyes, mouth closed. Plain black background.',
        say: [{ t: 'Anything weird?', pos: '@1,35', tail: 'r', mw: 0.75 }] })),
      P(0.7, c(1, { id: 'p07-3', aspect: 'wide', chars: ['iris'],
        prompt: 'Extreme close-up strip across Iris\'s eyes and straight dark brows only, filling the frame side to side, eyes steady and level, giving nothing away. Solid black around them.',
        say: [{ t: 'No.', pos: 'tl', tail: 'bl' }] })),
      P(1, c(1, { id: 'p07-4', aspect: 'wide', chars: ['caleb'],
        prompt: 'Medium shot of Caleb shifting his weight on a backward metal chair, rocking it slightly, one hand gripping the top of the backrest, the other open in a loose half-gesture, talking, eyebrows lifted. Racks and flight cases behind him.',
        say: [{ t: 'Place has a reputation. People don\'t like going in there.', pos: 'tl', tail: 'br' }] })),
      P(1.3, c(1, { id: 'p07-5', aspect: 'wide', chars: ['iris', 'caleb'],
        prompt: 'High overhead view looking down into the warehouse: on the left Iris kneels small at her laptop by the server racks, on the right Caleb sits small on his backward chair, a wide stretch of swept concrete floor and plastic sheeting between them. Fluorescent tubes cast hard pools of light.',
        say: [{ t: 'People don\'t like most of these places.', pos: 'tl', tail: 'b', mw: 1.45 },
              { t: 'Yeah, but Meridian\'s a different flavor. Medical, memory work, that kind of thing. Makes people uneasy.', pos: '@33,3', tail: 'br' }] })),
      P(1, c(1, { id: 'p07-6', aspect: 'wide', chars: ['iris'],
        prompt: 'Iris from behind, kneeling at her laptop facing a tall wall of dark server racks, small in the frame, the racks towering over her, rows of tiny lights. We see only her back and the side of her head.',
        say: [{ t: 'It\'s not active.', pos: 'tl', tail: 'b' }] }),
        c(1, { id: 'p07-7', focus: 'center top', aspect: 'square', chars: ['caleb'],
        prompt: 'Close-up of Caleb leaning forward over the backrest of his chair, serious now, no smile, eyes steady on someone off-panel, the light hard on one side of his face.',
        say: [{ t: 'That doesn\'t mean it\'s empty.', pos: 'tr', tail: 'bl' }] })),
    ] },

    // ---------------------------------------------------------------- 8
    { n: 8, comic: true, rows: [
      P(1.2, c(1, { id: 'p08-1', aspect: 'wide', chars: ['iris'],
        prompt: 'Iris glancing up from her laptop toward someone off-panel, her face turned toward the viewer, eyes level and unreadable, the screen lighting her chin. Medium close-up, dark warehouse behind.',
        cap: [{ t: 'She glanced at him then.', pos: 'tl' }] })),
      P(1, c(1, { id: 'p08-2', aspect: 'square', chars: ['caleb'],
        prompt: 'Caleb seen straight on from where Iris kneels, slightly below his eye line, sitting on his backward chair, his face open and patient, a very faint smile, simply watching.',
        cap: [{ t: 'His expression hadn\'t changed. He was watching to see what she would do with it.', pos: 'bl' }] }),
        c(1, { id: 'p08-3', aspect: 'square', chars: ['iris'],
        prompt: 'Iris in right-side profile turning her face back down toward her laptop screen, the white light catching the edge of her cheek and nose, a loose strand of hair across her temple. Black background.',
        say: [{ t: 'It was empty.', pos: 'tl', tail: 'bl' }] })),
      P(1, c(1, { id: 'p08-4', aspect: 'square', chars: ['caleb'],
        prompt: 'Tight close-up of Caleb in left three-quarter view, looking down and away for a moment with a small accepting nod, lips pressed into a short half-smile, letting it go. No hands in frame. Dark background.',
        say: [{ t: 'Okay.', pos: 'tr', tail: 'bl' }], cap: [{ t: 'He didn\'t challenge it.', pos: 'bl' }] }),
        c(1.3, { id: 'p08-5', aspect: 'wide', chars: [],
        prompt: 'Two ruggedized laptops side by side on a black flight case, each with a blank glowing white screen, cables running from each into two different server racks behind them. Seen at an angle, low and close. No people.',
        screen: [{ lines: ['NODE 1', '30%'], box: [0.28, 0.36, 0.49, 0.61] }, { lines: ['NODE 2', '22%'], box: [0.62, 0.43, 0.78, 0.61] }] })),
    ] },

    // ---------------------------------------------------------------- 9
    { n: 9, comic: true, rows: [
      P(1.2, c(1, { id: 'p09-1', focus: 'center top', aspect: 'wide', chars: ['caleb'],
        prompt: 'Caleb sitting astride a metal chair that is turned BACKWARD (the backrest is in front of his chest), tipping the chair back on two legs, one hand holding the top of the backrest and the other hand behind his head, looking at someone off-panel with friendly curiosity. Full figure in the warehouse, his whole head and boots well inside the frame with space above him.',
        say: [{ t: 'You sleep?', pos: 'tl', tail: 'br' }, { t: 'Yes.', pos: 'tr', tail: 'none' }] })),
      P(1, c(1, { id: 'p09-2', aspect: 'square', chars: [],
        prompt: 'Low insert at floor level: two legs of a metal chair tilted up off the swept concrete, the other two balancing, a man\'s worn work boots and the hems of his blue jeans hooked around the chair legs. Hard shadow on the floor.',
        say: [{ t: 'How long?', pos: 'tl', tail: 'none' }, { t: 'Enough.', pos: 'br', tail: 'none' }] }),
        c(1, { id: 'p09-3', focus: 'center top', aspect: 'square', chars: ['caleb'],
        prompt: 'Close-up of Caleb from slightly below, tipped back on his chair with one hand behind his head, one eyebrow raised, a teasing grin.',
        say: [{ t: 'Define enough.', pos: 'tl', tail: 'br' }] })),
      P(1, c(1, { id: 'p09-4', aspect: 'square', chars: ['iris'],
        prompt: 'Iris seen from slightly above, kneeling over her laptop and typing, her face turned down and still, giving no sign she heard anything. Light from the screen, black around her.',
        cap: [{ t: 'She did not answer.', pos: 'bl' }] }),
        c(1.3, { id: 'p09-5', aspect: 'wide', chars: ['caleb'],
        prompt: 'Caleb letting his backward chair drop forward onto all four legs, leaning his forearms on the backrest, one hand raised in a small apologetic wave, a sheepish smile. Medium shot.',
        sfx: [{ t: 'clack', pos: 'bl' }],
        say: [{ t: 'Sorry. Not trying to run diagnostics on you.', pos: '@38,64', tail: 'tl', mw: 1.6 }, { t: 'It\'s fine.', pos: 'tl', tail: 'none' }] })),
      P(1, c(1, { id: 'p09-6', aspect: 'wide', chars: ['caleb'],
        prompt: 'Caleb in three-quarter view, mouth slightly open as if starting a sentence and stopping, eyes searching for a word, his brow drawn a little. Medium close-up, warehouse dark behind.',
        say: [{ t: 'You just seem...', pos: 'tr', tail: 'bl' }] })),
    ] },

    // ---------------------------------------------------------------- 10
    { n: 10, comic: true, rows: [
      P(1, c(1, { id: 'p10-1', aspect: 'square', chars: ['iris'],
        prompt: 'Iris turning her head over her shoulder toward someone off-panel and simply holding still, waiting, eyes level, mouth closed. Medium close-up, lit from one side, black behind.',
        cap: [{ t: 'She waited.', pos: 'bl' }] }),
        c(1, { id: 'p10-2', aspect: 'square', chars: ['caleb'],
        prompt: 'Caleb looking down and to the side for a second, rubbing the back of his neck with one hand, a faint uncomfortable smile, as if choosing a word carefully.',
        say: [{ t: '...different.', pos: 'tr', tail: 'bl' }] })),
      P(1, c(1, { id: 'p10-3', aspect: 'square', chars: ['iris'],
        prompt: 'Iris straight on, full face, frontal and symmetrical, perfectly still and expressionless, eyes looking directly at the viewer. Plain black background.',
        say: [{ t: 'How.', pos: 'tl', tail: 'bl' }] }),
        c(1.3, { id: 'p10-4', aspect: 'wide', chars: ['caleb'],
        prompt: 'Caleb shrugging, palms turned up a little, a searching, slightly uneasy look, sitting backward on a chair. Medium shot.',
        say: [{ t: 'Slower, maybe. Or just... quieter in a way you weren\'t before.', pos: '@1,3', tail: 'r', mw: 1.15 }] })),
      P(1.5, c(1, { id: 'p10-5', aspect: 'wide', chars: [],
        prompt: 'Close insert on a ruggedized laptop: its screen blank and glowing white, a woman\'s bare fingertip resting on the trackpad below it, the rest of her hand in shadow. A cable runs out of frame. No face.',
        cap: [{ t: 'She checked the integrity readout again, though it did not require checking.', pos: 'bl' }],
        say: [{ t: 'I\'m working.', pos: 'tl', tail: 'none' }, { t: 'Yeah.', pos: 'tr', tail: 'none' },
              { t: 'That\'s the focus.', pos: 'tl', tail: 'none' }, { t: 'Yeah.', pos: 'tr', tail: 'none' }] })),
    ] },

    // ---------------------------------------------------------------- 11
    { n: 11, comic: true, rows: [
      P(1.4, c(1, { id: 'p11-1', focus: 'center top', aspect: 'wide', chars: ['caleb'],
        prompt: 'Caleb walking a slow circuit of the warehouse, hands in the pockets of his blue jeans, pausing at an interior window cut into a partition wall that looks out onto another dim section of the building. He nudges a crate back into place with his boot. Full figure.',
        cap: [{ t: 'He stood and walked a slow circuit around the room, hands in his pockets.', pos: 'bl', mw: 2.6 }],
        say: [{ t: 'Say something.', pos: 'tr', tail: 'bl' }] })),
      P(1, c(1.3, { id: 'p11-2', aspect: 'wide', chars: ['iris', 'caleb'],
        prompt: 'Iris at the server racks looking back over her shoulder across the room; far behind her, small, Caleb stands at an interior window with his hands in his pockets. Long space between them, hard fluorescent light.',
        say: [{ t: 'About what.', pos: 'tl', tail: 'bl' }, { t: 'Anything.', pos: '@47,3', tail: 'br' }] }),
        c(1, { id: 'p11-3', aspect: 'square', chars: ['iris'],
        prompt: 'Close-up of Iris looking directly at someone off-panel to the right, her face fully turned toward him now, calm and flat, eyes steady.',
        cap: [{ t: 'She looked at him.', pos: 'tl' }],
        say: [{ t: 'Why.', pos: 'bl', tail: 'r' }] })),
      P(1.2, c(1, { id: 'p11-4', aspect: 'wide', chars: ['caleb'],
        prompt: 'Close-up of Caleb with a small, warm, slightly sad smile, standing by a window in the dim warehouse, looking at someone off-panel.',
        say: [{ t: 'Because you usually would have by now.', pos: 'tl', tail: 'br', mw: 1.5 }] })),
    ] },

    // ---------------------------------------------------------------- 12
    { n: 12, comic: true, rows: [
      P(1.2, c(1, { id: 'p12-1', aspect: 'wide', chars: ['iris'],
        prompt: 'Iris standing beside the smaller server rack with one bare hand resting flat on its side, looking at it rather than at anyone, speaking matter-of-factly. Medium shot, rack lights in the dark, a crooked breaker panel on a column in the background.',
        cap: [{ t: 'She considered that.', pos: 'tl' }],
        say: [{ t: 'The power distribution here is unstable. If the secondary node drops, we lose part of the transfer.', pos: 'br', tail: 'bl' }] })),
      P(1, c(1.3, { id: 'p12-2', aspect: 'wide', chars: ['caleb'],
        prompt: 'Caleb by the interior window, seen from the other side, half his face lit, looking down at the floor with a small rueful smile and a slow nod.',
        say: [{ t: 'That tracks.', pos: 'tl', tail: 'br' }, { t: 'That\'s not what I meant.', pos: '@2,24', tail: 'r', mw: 1.1 }] }),
        c(1, { id: 'p12-3', aspect: 'square', chars: ['iris'],
        prompt: 'Iris in left profile, turned back to the rack, her face half in shadow, eyes lowered, quiet. Black background with a few rack lights.',
        say: [{ t: 'I know.', pos: 'tl', tail: 'bl' }] })),
      P(1.3, c(1, { id: 'p12-4', focus: 'center top', aspect: 'wide', chars: ['caleb'],
        prompt: 'Caleb sitting forward on the metal chair now (turned the normal way), forearms on his knees, telling a story with an amused expression, one hand mid-gesture with natural relaxed fingers. Medium shot in the warehouse.',
        say: [{ t: 'You remember that job on Dock Nine?', pos: 'tl', tail: 'br', mw: 1.6 }, { t: 'Yes.', pos: 'tr', tail: 'none' }] })),
    ] },

    // ---------------------------------------------------------------- 13  Dock Nine
    { n: 13, comic: true, rows: [
      P(1.3, c(1, { id: 'p13-1', aspect: 'wide', chars: ['caleb'],
        prompt: 'Medium close-up of Caleb sitting forward on a chair facing the normal way, both hands held up in front of him shaping a small box in the air, grinning at the memory, eyes bright.',
        say: [{ t: 'Guy who tried to run his whole operation through one unsecured relay?', pos: 'tl', tail: 'br', mw: 1.5 }, { t: 'Yes.', pos: 'tr', tail: 'none' },
              { t: 'He kept telling us it was "temporary."', pos: 'tl', tail: 'br', mw: 1.5 }, { t: 'That\'s common.', pos: 'tr', tail: 'none' }] })),
      P(1, c(1.7, { id: 'p13-2', focus: 'center top', aspect: 'square', chars: ['caleb'],
        prompt: 'Caleb shaking his head and laughing quietly, one hand sketching a rectangle in the air like a sign on a wall, eyes half closed with amusement.',
        say: [{ t: 'He had that sign up in the office. Remember? "Temporary solutions become permanent problems."', pos: '@60,2', tail: 'bl', mw: 1.4 }, { t: 'Yes.', pos: 'br', tail: 'none' }] }),
        c(1, { id: 'p13-3', aspect: 'wide', chars: ['iris', 'caleb'],
        prompt: 'Over Iris\'s shoulder: in the foreground the dark back of her head, knot of hair and jacket collar, out of focus; beyond her Caleb on his forward-facing chair, leaning in, enjoying the punchline.',
        say: [{ t: 'And then he ignored it.', pos: '@3,3', tail: 'br', mw: 1.2 }, { t: 'Yes.', pos: 'bl', tail: 'none' }] })),
      P(1, c(1, { id: 'p13-4', aspect: 'square', chars: ['caleb'],
        prompt: 'Close-up of Caleb looking at someone off-panel for a beat, his grin settling, hopeful, waiting to see if she will smile too.',
        say: [{ t: 'That was funny.', pos: 'tl', tail: 'br' }] }),
        c(1, { id: 'p13-5', aspect: 'square', chars: ['iris'],
        prompt: 'Iris in three-quarter view, eyes on her laptop screen below frame, not on him, mouth flat, the screen light on her face.',
        say: [{ t: 'It was inconsistent.', pos: 'tl', tail: 'bl' }] }),
        c(1, { id: 'p13-6', aspect: 'square', chars: ['caleb'],
        prompt: 'Caleb looking down with a short breath out through his nose, a small crooked smile, letting it go, his hands loose between his knees.',
        say: [{ t: 'Yeah. That\'s one way to put it.', pos: '@4,34', tail: 't', mw: 1.5 }] })),
    ] },

    // ---------------------------------------------------------------- 14
    { n: 14, comic: true, rows: [
      P(1, c(1, { id: 'p14-1', aspect: 'square', chars: [],
        prompt: 'Close insert, seen from the side: a woman\'s bare hand pressing one key on a ruggedized laptop, its screen blank and glowing white; a coiled fiber cable beside it. No face.',
        screen: { lines: ['NODE 1', 'COMPLETE'], box: [0.77, 0.10, 0.97, 0.38], rot: -4 },
        cap: [{ t: 'The first node completed.', pos: 'bl' }] }),
        c(1.2, { id: 'p14-2', aspect: 'wide', chars: ['caleb'],
        prompt: 'Caleb sitting forward on his normal-facing chair, elbow on his knee and chin propped on his fist, watching someone off-panel work with quiet interest. Medium shot.',
        say: [{ t: 'You always do that the same way.', pos: '@61,24', tail: 'l', mw: 1.1 }, { t: 'Yes.', pos: 'tl', tail: 'none' }] })),
      P(1, c(1.3, { id: 'p14-3', aspect: 'wide', chars: [],
        prompt: 'Close insert from above: a woman\'s bare hands coiling a fiber cable into a neat, even loop over her palm and elbow, precise and practiced, an open hard equipment case below with foam cutouts. No face.',
        say: [{ t: 'Same order. Same timing.', pos: 'tl', tail: 'none' }, { t: 'Yes.', pos: 'tl', tail: 'none' }, { t: 'Never seen you rush it.', pos: 'bl', tail: 'none' }] }),
        c(1, { id: 'p14-4', aspect: 'square', chars: ['iris'],
        prompt: 'Iris looking up briefly from the equipment case, face neutral and matter-of-fact, medium close-up, light from above.',
        say: [{ t: 'It reduces errors.', pos: '@4,37', tail: 'tr', mw: 1.4 }] }),
        c(1, { id: 'p14-5', aspect: 'square', chars: ['caleb'],
        prompt: 'Caleb nodding to himself, looking off toward the racks rather than at her, a small approving smile.',
        say: [{ t: 'Yeah.', pos: 'tl', tail: 'none' }, { t: 'Good system.', pos: '@35,56', tail: 'tl', mw: 1 }] })),
      P(1.4, c(1, { id: 'p14-6', aspect: 'wide', chars: ['iris', 'caleb'],
        prompt: 'Iris standing, snapping shut the latches of a hard equipment case packed with her kit; behind her Caleb has just risen from the chair and stretches, ONE arm raised straight up over his head and the other hand on the small of his back, wearing blue jeans. Warehouse, fluorescent light.',
        say: [{ t: 'Done.', pos: 'tl', tail: 'bl' }, { t: 'That\'s it?', pos: 'tr', tail: 'br' }, { t: 'Yes.', pos: 'tl', tail: 'bl' },
              { t: 'Easy day.', pos: 'tr', tail: 'br' }, { t: 'Relative.', pos: 'tl', tail: 'bl' }, { t: 'Sure.', pos: 'tr', tail: 'br' }] })),
    ] },

    // ---------------------------------------------------------------- 15
    { n: 15, comic: true, rows: [
      P(1.5, c(1, { id: 'p15-1', aspect: 'wide', chars: ['iris', 'caleb'],
        prompt: 'Outside the warehouse in the gray afternoon: Caleb, in blue jeans, locking the side door behind them with a key, Iris standing a step away holding her hard equipment case. Puddles, corrugated steel walls.',
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
        cap: [{ t: 'A waitress filled water glasses without asking.', pos: 'bl' }], say: [{ t: 'Coffee.', pos: '@60,2', tail: 'br' }] })),
      P(1.3, c(1.3, { id: 'p16-4', aspect: 'wide', chars: ['caleb'],
        prompt: 'Caleb from across the table, leaning back in the diner booth with one arm stretched along the top of the seat back, a water glass in front of him, looking straight at the viewer with friendly concern.',
        say: [{ t: 'You sure you\'re good?', pos: 'tl', tail: 'br' }, { t: 'Yes.', pos: 'tr', tail: 'none' },
              { t: 'That\'s your answer for everything.', pos: 'bl', tail: 'none' }, { t: 'Yes.', pos: 'br', tail: 'none' }] }),
        c(1, { id: 'p16-5', aspect: 'square', chars: ['caleb'],
        prompt: 'Caleb in a diner booth, smiling, but the smile is smaller and does not reach his eyes. Close-up.',
        say: [{ t: 'Alright. We\'ll go with that.', pos: 'tl', tail: 'br' }] })),
    ] },

    // ---------------------------------------------------------------- 17  the laugh
    { n: 17, comic: true, rows: [
      P(1, c(1, { id: 'p17-1', aspect: 'wide', chars: [],
        prompt: 'Looking down on a diner table: two plates of food, coffee cups, water glasses. On one side a man\'s hands are mid-gesture over his plate, telling a story, fork held loosely; on the other side a woman\'s hands rest still and flat beside her plate. Faces out of frame.',
        cap: [{ t: 'Caleb talked about another job he had taken the week before. A warehouse near the rail line. Bad wiring. He described it in detail.', pos: 'tl' }] })),
      P(1, c(1, { id: 'p17-2', focus: 'center 12%', aspect: 'wide', chars: ['iris'],
        prompt: 'Iris in a diner booth, listening across the table, still and attentive, face composed and unreadable, a coffee cup untouched in front of her. Medium close-up.',
        cap: [{ t: 'She followed the sequence. The way he set it up, the point where it would turn, the part where he expected a reaction.', pos: 'bl' }] })),
      P(1.8, c(1, { id: 'p17-3', aspect: 'wide', chars: ['caleb'],
        prompt: 'Caleb in a diner booth laughing out loud, head tipped back a little, a big easy open grin, eyes crinkled, completely alive and warm. The most vivid, joyful image of him. Medium close-up.',
        say: [{ t: '...and then the whole thing just shuts down like it\'s embarrassed. Guy looks at me like I did it on purpose.', pos: '@52,3', tail: 'bl' }],
        cap: [{ t: 'He laughed.', pos: 'br' }] })),
    ] },

    // ---------------------------------------------------------------- 18  the stillness
    { n: 18, comic: true, rows: [
      P(1, c(1, { id: 'p18-1', aspect: 'square', chars: ['iris'],
        prompt: 'Extreme close-up of Iris\'s face from the nose up, eyes open and fixed across the table, nothing moving in them. Diner light, soft dark behind.',
        cap: [{ t: 'She knew, with clarity, that she used to respond to this.', pos: 'tl' }] }),
        c(1, { id: 'p18-2', aspect: 'square', chars: [],
        prompt: 'Close insert: a woman\'s hand resting motionless on a diner table beside a full coffee cup, fingers relaxed and flat, the coffee untouched. No face.',
        cap: [{ t: 'She waited.', pos: 'tl' }] }),
        c(1, { id: 'p18-3', aspect: 'square', chars: ['iris'],
        prompt: 'Iris in the diner booth seen a little further back, straight on and centered, sitting upright and completely still, her face blank and composed, the booth around her empty of motion.',
        cap: [{ t: 'The place where that response belonged remained still.', pos: '@4,40', mw: 1.6 }] })),
      P(1.3, c(1, { id: 'p18-4', aspect: 'wide', chars: ['caleb'],
        prompt: 'Caleb in a diner booth, his laugh fading into a smile, looking across the table with a moment of expectation in his eyes, as if waiting for something that does not come. Medium close-up.',
        cap: [{ t: 'For a second, something like expectation held there.', pos: 'tl' }, { t: 'Then he let it go.', pos: 'br' }] })),
      P(1, c(1.3, { id: 'p18-5', aspect: 'wide', chars: ['caleb'],
        prompt: 'Caleb picking his fork back up and looking down at his plate, the smile gone small and private, shoulders a little lower. Medium shot in the diner booth.',
        say: [{ t: 'Anyway. You had to be there.', pos: 'tl', tail: 'br' }] }),
        c(1, { id: 'p18-6', aspect: 'square', chars: ['iris', 'caleb'],
        prompt: 'Wide quiet two-shot from the end of the diner booth: Iris and Caleb facing each other across the table in profile, Caleb eating, Iris upright and still, the length of the empty diner behind them.',
        say: [{ t: 'Yes.', pos: 'tl', tail: 'bl' }, { t: 'Yeah.', pos: 'tr', tail: 'br' }] })),
    ] },

    // ---------------------------------------------------------------- 19  outside the diner
    { n: 19, comic: true, rows: [
      P(1.3, c(1, { id: 'p19-1', aspect: 'wide', chars: ['iris', 'caleb'],
        prompt: 'A gray street outside the diner, trucks and damp air; Iris and Caleb standing beside her parked WHITE work van, facing each other. Medium-wide shot.',
        cap: [{ t: 'The street had not changed.', pos: 'tl' }],
        say: [{ t: 'Next one\'s yours or mine?', pos: '@1,14', tail: 'r', mw: 1.9 }, { t: 'Mine.', pos: '@73,14', tail: 'l' },
              { t: 'Send it over when you have it.', pos: '@1,36', tail: 'r', mw: 1.9 }, { t: 'I will.', pos: '@73,36', tail: 'l' }] })),
      P(1.4, c(1.3, { id: 'p19-2', aspect: 'wide', chars: ['caleb'],
        prompt: 'Close-up of Caleb by the van in gray daylight, serious for once, looking straight at someone just off-panel with honest concern, one hand making a vague open gesture with natural fingers.',
        say: [{ t: 'Hey.', pos: 'tl', tail: 'br' },
              { t: 'If something\'s off, you can just say that. You don\'t have to... optimize the answer.', pos: '@48,52', tail: 'tl', mw: 1.6 }] }),
        c(1, { id: 'p19-3', aspect: 'square', chars: ['iris'],
        prompt: 'Close-up of Iris by the van in gray daylight, face completely level and composed, answering calmly, eyes steady.',
        say: [{ t: 'I\'m fine.', pos: 'tl', tail: 'bl' }] })),
      P(1, c(1.3, { id: 'p19-4', aspect: 'wide', chars: ['caleb'],
        prompt: 'Caleb a step further back on the wet sidewalk, side view, sliding his hands into the pockets of his blue jeans, giving a small nod, his face still studying her. Gray street behind.',
        cap: [{ t: 'He studied her face for a moment.', pos: 'bl' }],
        say: [{ t: 'Alright. Drive safe.', pos: 'tr', tail: 'bl' }] }),
        c(1, { id: 'p19-5', aspect: 'square', chars: ['iris'],
        prompt: 'Iris opening the driver\'s door of a white work van, half turned back over her shoulder toward someone off-panel, face neutral. Gray daylight.',
        say: [{ t: 'You too.', pos: 'tl', tail: 'bl' }] })),
    ] },

    // ---------------------------------------------------------------- 20
    { n: 20, comic: true, rows: [
      P(1.2, c(1, { id: 'p20-1', aspect: 'wide', chars: ['caleb'],
        prompt: 'A van side mirror filling the frame; in the mirror, small, Caleb walking away down the gray street back toward the diner, hands in his pockets, shoulders slightly hunched against the damp.',
        cap: [{ t: 'In the side mirror, she saw him turn and head back toward the diner, hands in his pockets.', pos: 'tl' }] })),
      P(1.1, c(1, { id: 'p20-2', focus: 'center 15%', aspect: 'wide', chars: ['iris'],
        prompt: 'Iris in the driver\'s seat of her van stopped at a red traffic light, both hands resting on the wheel, staring ahead through the windshield, face still. Gray street outside.',
        cap: [{ t: 'At the first light, she stopped.', pos: 'tl' }] })),
      P(1, c(1, { id: 'p20-3', aspect: 'square', chars: ['caleb'],
        prompt: 'Caleb laughing in the diner booth, seen from directly across the table at her eye level (a different, closer angle than before), mouth open in laughter, and the whole image fading out into blank white paper at its edges like a memory.',
        cap: [{ t: 'The moment at the table replayed. His voice. The timing. The point where the laugh had come.', pos: 'bl' }] }),
        c(1, { id: 'p20-4', aspect: 'square', chars: [],
        prompt: 'Close insert: a woman\'s two hands resting still on the steering wheel of a van, dark jacket cuffs, the windshield beyond out of focus with a traffic light glowing in it. No face.',
        cap: [{ t: 'She waited again, as if the response might arrive late.', pos: 'bl' }] })),
      P(0.5, c(1, { id: 'p20-5', black: true, cap: [{ t: 'It did not.', pos: 'center' }] })),
      P(1, c(1, { id: 'p20-6', aspect: 'wide', chars: [],
        prompt: 'A small WHITE work van pulling away from a traffic light on a gray, damp street in a warehouse district, seen from behind, the light just turned. Wet road, low sky.',
        cap: [{ t: 'The light changed. She drove on.', pos: 'br' }] })),
    ] },
  ],
};
