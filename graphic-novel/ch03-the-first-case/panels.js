// CANONICAL SOURCE for Chapter 3. Adapted from book1-published/chapters/ch03-the-first-case.md.
// Captions and balloons quote the published text, except where the author's rules apply:
//   no "Not X. Just Y.", no "the right way", no "shape of", no repeated "should have been", no "wrong"/"off"
//   as shorthand (replace with Book 1's concrete detail), no em dashes (interruptions use "..."), and no caption
//   that points back at something cut (every "it" and "them" has its referent on the page).
//
// Same panel fields as ch02-caleb-ward/panels.js:
//   say     speech balloons [{t, pos, tail, mw}]   tail: b | bl | br | l | r | t | tl | tr | none (off-panel or voiceover)
//   pos     tl tr bl br top bottom center, or "@x,y" (left/top in % of the panel). mw = max width in inches.
//   screen  {lines, box:[x0,y0,x1,y1], rot}: printed ON the blank screen in the art (box in image fractions,
//           measured once the art exists). Until then it falls back to `pos`.
//   ⚠️ LETTERING NEVER COVERS A FACE. Check with: node audit-letters.js ch03-the-first-case
//   ⚠️ NO REPEATS: every panel has its own art. ⚠️ NO SOLID BLACK PANELS OR PAGES (print-friendly).
// Book 1's own punctuation is kept: Iris asks some questions with periods ("Where."), Leah and Joel use question marks.
// Kade is a voice on the slate only (tail: 'none'). He is never drawn in this chapter.
//
// DRIFT LOCKS for this chapter (check every image against these as it is generated):
//   Iris: dark field jacket, collar up, cargo trousers, gloves; NO BACKPACK in this chapter. She carries her slate
//         (a rugged gray field tablet with a thick rubber bumper, the same one as Ch2 p02-1).
//   Leah: long oatmeal knit cardigan, dark t-shirt, faded jeans, socks; brown hair pulled back loosely.
//   Joel: plain gray long-sleeved henley, dark work trousers, clean-shaven, close-cropped hair graying at the temples.
//   The living room: Joel's armchair (worn brown fabric) angled toward a television on a low stand, the TV ON with a
//         blank white glowing screen (muted, no image needed); a lamp lit although it is daytime; an opening
//         through to a small kitchen with a counter behind. Blinds half drawn. Warm, plain, tidy.
//   Joel does not move from the chair for the whole chapter. His face is pleasant and calm in every panel.
//   Exterior: overcast, damp, gray daylight. Her van is WHITE (Ch1, Ch2).
//   Screen direction in the living room: Joel in his chair screen-RIGHT, Iris standing screen-LEFT, so his close-ups
//         look left and hers look right. Leah moves between them and the kitchen.

const P = (h, ...panels) => ({ h, panels });
const c = (w, panel) => ({ w, ...panel });

module.exports = {
  title: 'Weeping Willow: The Absence',
  chapter: 'Chapter 3 — The First Case',
  cover: 'Chapter Three · The First Case',
  style: 'ink',
  noRepeats: true,

  refs: [
    { id: 'ref-leah', aspect: 'wide', chars: ['leah'],
      prompt: 'Character reference sheet on a plain white background: the same woman shown four times side by side, full body front view, full body three-quarter view, full body back view, and a head-and-shoulders close-up with a worried, kind expression. Identical face, hair and clothing in all four. Standing with her arms loosely folded.' },
    { id: 'ref-joel', aspect: 'wide', chars: ['joel'],
      prompt: 'Character reference sheet on a plain white background: the same man shown four times side by side, full body front view, full body three-quarter view, full body back view, and a head-and-shoulders close-up with a calm, pleasant, blank expression. Identical face, hair and clothing in all four. Standing perfectly still, arms at his sides.' },
  ],

  pages: [
    // ---------------------------------------------------------------- 1  the north side
    { n: 1, comic: true, rows: [
      P(2.0, c(1, { id: 'p01-1', bleed: ['top', 'left', 'right'], aspect: 'wide', chars: [],
        prompt: 'Establishing shot under a flat gray overcast sky: a curving street of narrow two-story row houses on the north side of a small Maine port city, the rows following the curve of the shoreline before turning inland toward older streets. A gray sea at the edge of the frame. Small yards, low fences, wet pavement. No people.',
        cap: [{ t: 'The address sat on the north side of the city, where the houses had been built in rows that followed the curve of the shoreline before turning inward toward older streets.', pos: 'tl' }] })),
      P(1, c(1, { id: 'p01-2', aspect: 'wide', chars: [],
        prompt: 'Close street-level view along a row of small front yards: low picket and wire fences, patchy grass, siding repainted unevenly over the years so each house is a slightly different shade of white, one porch rail freshly painted and the next one peeling. Damp gray day. No people.',
        cap: [{ t: 'Small yards. Low fences. Paint that had been refreshed unevenly over the years.', pos: 'tl' }] }),
        c(1, { id: 'p01-3', aspect: 'square', chars: [],
        prompt: 'A plain WHITE work van (white paint left as clean white paper with black outlines and a few bold shadow shapes) pulled up along the curb of a quiet residential street of narrow row houses. Wet road, overcast sky. The driver is not visible.',
        cap: [{ t: 'Iris parked along the curb and shut off the engine.', pos: 'bl' }] })),
    ] },

    // ---------------------------------------------------------------- 2  the house, the slate
    { n: 2, comic: true, rows: [
      P(1.6, c(1, { id: 'p02-1', aspect: 'tall', chars: [],
        prompt: 'A narrow two-story row house among several nearly identical ones: a narrow front porch with three wooden steps, a single window to the left of the front door with its blinds half drawn, and warm lamplight glowing behind the blinds although it is daytime. Overcast, damp. No people.',
        cap: [{ t: 'Two stories. Narrow porch. A single window to the left of the front door with the blinds half drawn.', pos: 'tl' },
              { t: 'Light inside, though the day did not require it.', pos: 'bl' }] }),
        c(1.2, { id: 'p02-2', aspect: 'tall', chars: [],
        prompt: 'Inside a work van, close view over the steering wheel: a woman\'s gloved hand holds a rugged gray field tablet with a thick rubber bumper; its screen is blank and glowing white. Through the windshield, out of focus, a row house with a porch. Only the hand, a dark jacket cuff and the tablet are visible, no face.',
        screen: { lines: ['CASE REFERENCE: K-01', 'SOURCE: KADE', 'NOTE: "CAME BACK DIFFERENT."', 'FLAG: POSSIBLE MERIDIAN ADJACENCY'], box: [0.27, 0.41, 0.85, 0.70], rot: 3 },
        cap: [{ t: 'No additional detail.', pos: 'bl' }] })),
      P(1, c(1, { id: 'p02-3', aspect: 'wide', chars: ['iris'],
        prompt: 'Iris stepping down out of the driver\'s door of the white van onto a wet curb, the slate tablet in one hand, looking toward the row house, her face flat and level. Medium shot, gray daylight.',
        cap: [{ t: 'That was consistent with Kade. He sent what was needed to locate the problem. The rest was for observation.', pos: 'tl' }] }),
        c(1, { id: 'p02-4', aspect: 'square', chars: [],
        prompt: 'Close insert: a woman\'s gloved hand sliding along a painted wooden porch railing beaded with tiny drops of moisture, her boots on the wooden steps below. No face.',
        cap: [{ t: 'A thin layer of moisture clung to the porch railing when she touched it on her way up the steps.', pos: 'bl' }] })),
    ] },

    // ---------------------------------------------------------------- 3  the door
    { n: 3, comic: true, rows: [
      P(1, c(1, { id: 'p03-1', aspect: 'square', chars: [],
        prompt: 'Tight close-up of a gloved knuckle knocking on a painted wooden front door beside a small brass house number plate with no number on it. No face.',
        sfx: [{ t: 'knk knk', pos: 'tr' }],
        cap: [{ t: 'She knocked.', pos: 'bl' }] }),
        c(1.3, { id: 'p03-2', aspect: 'wide', chars: ['leah'],
        prompt: 'Leah opening her front door partway, seen from the porch, one hand still resting on the inside edge of the door frame as if she paused before opening it; warm lamplight behind her in the hallway. Her face is anxious and hopeful.',
        cap: [{ t: 'A woman stood there, mid-thirties, hair pulled back loosely, one hand still resting on the inside of the frame.', pos: 'bl' }],
        say: [{ t: 'You\'re...', pos: '@5,4', tail: 'r' }] })),
      P(1.3, c(1, { id: 'p03-3', aspect: 'square', chars: ['iris'],
        prompt: 'Iris on the porch from inside the doorway, head and shoulders, gray daylight behind her, collar up, face level and composed, introducing herself.',
        say: [{ t: 'Iris Vale. You contacted Kade.', pos: '@4,72', tail: 't', mw: 1.6 }] }),
        c(1, { id: 'p03-4', aspect: 'square', chars: ['leah'],
        prompt: 'Leah stepping back into her hallway to make space, nodding quickly, pulling the door wide, relief and nerves on her face. Warm interior light.',
        say: [{ t: 'Yes. Yes. Come in.', pos: '@52,38', tail: 'l', mw: 1.2 }] })),
    ] },

    // ---------------------------------------------------------------- 4  the living room
    { n: 4, comic: true, rows: [
      P(1.6, c(1, { id: 'p04-1', aspect: 'wide', chars: ['joel'],
        prompt: 'Wide view of a small, warm, tidy living room: Joel seated in a worn brown armchair on the right, angled toward a television on a low stand; the television is on, its screen a blank white glow. A table lamp lit although it is daytime, blinds half drawn. Through an opening at the back, a small kitchen with a counter. Joel turns his head calmly toward the doorway.',
        cap: [{ t: 'The interior of the house was warm. The heat had been kept on slightly higher than needed.', pos: 'tl' }] })),
      P(1.1, c(1, { id: 'p04-2', aspect: 'wide', chars: ['leah', 'iris'],
        prompt: 'Leah in the living room doorway, flustered, one hand pressed to her chest as she apologizes; Iris beside her, seen from behind one shoulder, still and level.',
        say: [{ t: 'Daniel said you\'d come. I\'m... sorry. I didn\'t... I\'m Leah.', pos: '@30,45', tail: 'tl', mw: 1.4 }, { t: 'Iris.', pos: '@72,42', tail: 't' }] }),
        c(1, { id: 'p04-3', aspect: 'square', chars: ['leah', 'joel'],
        prompt: 'Leah gesturing with an open hand toward Joel in his armchair; Joel looking up at the two women, calm and pleasant.',
        say: [{ t: 'This is... this is Joel.', pos: '@52,3', tail: 'bl', mw: 1.2 }] })),
      P(1.3, c(1, { id: 'p04-4', aspect: 'wide', chars: ['joel'],
        prompt: 'Close-up of Joel in his armchair, turned toward the viewer, a small polite nod, his face pleasant, calm and completely composed. Lamp light on one side of his face.',
        cap: [{ t: 'His voice was clear. Level. Not strained. Not weak.', pos: 'bl' }],
        say: [{ t: 'Hello.', pos: 'tl', tail: 'br' }] })),
    ] },

    // ---------------------------------------------------------------- 5  what happened
    { n: 5, comic: true, rows: [
      P(1, c(1, { id: 'p05-1', aspect: 'wide', chars: ['iris', 'joel'],
        prompt: 'Iris stepping into the living room from the left, standing, looking at Joel; Joel seated in the armchair on the right, looking back at her. Medium-wide, the muted television glowing between them.',
        say: [{ t: 'Can you tell me what happened?', pos: '@32,5', tail: 'l', mw: 1.4 }] })),
      P(1.3, c(1.2, { id: 'p05-2', aspect: 'wide', chars: ['leah', 'joel'],
        prompt: 'Leah standing close beside Joel\'s armchair without touching him, her hand hovering near the chair back, talking, upset; Joel seated, looking up at her.',
        say: [{ t: 'He was gone for two days. He said he was going to meet someone about work. He didn\'t come back.', pos: '@28,33', tail: 'tl', mw: 1.6 }] }),
        c(1, { id: 'p05-3', aspect: 'square', chars: ['leah'],
        prompt: 'Close-up of Leah speaking, her eyes glossy, her brows drawn together, her hands holding her own arms.',
        say: [{ t: 'His phone didn\'t... it just stopped. And then he came home like nothing had happened.', pos: '@4,68', tail: 't', mw: 1.6 }] })),
      P(1, c(1, { id: 'p05-4', aspect: 'wide', chars: ['joel'],
        prompt: 'Joel in profile in his armchair, watching his wife speak (she is off-panel to the left), his face attentive, pleasant and still. The blank white glow of the television on his other side.',
        cap: [{ t: 'Joel watched her while she spoke.', pos: 'bl' }] })),
    ] },

    // ---------------------------------------------------------------- 6  "I am fine"
    { n: 6, comic: true, rows: [
      P(1, c(1, { id: 'p06-1', aspect: 'square', chars: ['iris'],
        prompt: 'Iris standing in the living room, three-quarter view, facing right toward someone off-panel, face level, waiting.',
        say: [{ t: 'And.', pos: 'tl', tail: 'bl' }] }),
        c(1.3, { id: 'p06-2', aspect: 'wide', chars: ['leah'],
        prompt: 'Leah swallowing, mid-sentence, counting off on her fingers with natural five-fingered hands, her face strained and trying to hold steady.',
        say: [{ t: 'And he\'s... he\'s fine. He says he\'s fine. He is fine. He eats. He sleeps. He talks to me. He goes to work.', pos: '@66,2', tail: 'bl', mw: 1.1 }] })),
      P(1.2, c(1, { id: 'p06-3', aspect: 'square', chars: ['joel'],
        prompt: 'Joel from a low angle in his armchair, giving one small confirming nod, face pleasant and empty of strain, hands resting on his knees.',
        say: [{ t: 'I am fine.', pos: '@3,30', tail: 'r', mw: 0.9 }] }),
        c(1.2, { id: 'p06-4', aspect: 'wide', chars: ['iris', 'joel'],
        prompt: 'Over Joel\'s shoulder toward Iris: the back of his close-cropped head and shoulder in the foreground right, Iris standing facing him at left, her eyes on his face.',
        say: [{ t: 'Do you remember where you were?', pos: '@42,22', tail: 'l', mw: 1.2 }, { t: 'Yes.', pos: 'br', tail: 'none' }, { t: 'Where.', pos: 'bl', tail: 'none' }] })),
      P(1, c(1, { id: 'p06-5', aspect: 'wide', chars: ['joel'],
        prompt: 'Medium shot of Joel answering, seated, face level and composed, one hand lifting slightly from his knee and settling again. Lamp behind him.',
        cap: [{ t: 'The words were appropriate. Structured correctly. No hesitation.', pos: 'bl' }],
        say: [{ t: 'I met someone about a contract. We spoke. I returned home.', pos: 'tl', tail: 'br', mw: 2 }] })),
    ] },

    // ---------------------------------------------------------------- 7  "I know what is necessary"
    { n: 7, comic: true, rows: [
      P(1, c(1, { id: 'p07-1', aspect: 'wide', chars: ['iris', 'joel'],
        prompt: 'Two-shot in profile across the living room: Iris standing at left asking, Joel seated at right answering, the television glow between them.',
        say: [{ t: 'Where did you meet?', pos: 'tl', tail: 'bl' }, { t: 'A building near the coast.', pos: '@44,48', tail: 'r', mw: 1.3 }] })),
      P(1.1, c(1, { id: 'p07-2', aspect: 'square', chars: ['iris'],
        prompt: 'Close-up of Iris, face level, a slight tilt of her head, eyes steady.',
        say: [{ t: 'Do you know the address.', pos: '@3,62', tail: 'tr', mw: 1.3 }, { t: 'No.', pos: 'br', tail: 'none' }] }),
        c(1.3, { id: 'p07-3', aspect: 'wide', chars: ['leah'],
        prompt: 'Leah at the edge of the room shaking her head slightly, arms folded tight, exhausted and frustrated.',
        say: [{ t: 'He doesn\'t know anything. He just says it like that every time.', pos: '@2,30', tail: 'r', mw: 1.2 }] })),
      P(1.4, c(1, { id: 'p07-4', aspect: 'wide', chars: ['joel'],
        prompt: 'Close-up of Joel turning his head toward his wife (off-panel left), calm and unbothered, his face pleasant, open and completely without defensiveness.',
        cap: [{ t: 'The sentence was calm. Not defensive. Not reassuring.', pos: 'bl' }],
        say: [{ t: 'I know what is necessary.', pos: '@62,30', tail: 'l', mw: 1.1 }] })),
    ] },

    // ---------------------------------------------------------------- 8  observation
    { n: 8, comic: true, rows: [
      P(1.2, c(1, { id: 'p08-1', aspect: 'wide', chars: ['joel'],
        prompt: 'Close insert on Joel seated: his two hands resting loosely on the knees of his dark work trousers, relaxed shoulders in the gray henley. Face cropped out above the chin.',
        cap: [{ t: 'Hands resting loosely on his knees. No tension in the shoulders. No visible fatigue.', pos: 'tl' }] })),
      P(0.9, c(1, { id: 'p08-2', aspect: 'wide', chars: ['joel'],
        prompt: 'Extreme close-up of Joel\'s eyes and brows only, filling a wide strip: steady, clear, attentive eyes looking straight ahead, perfectly calm.',
        cap: [{ t: 'Blink rate normal. Eye movement steady. No delay in tracking.', pos: 'bl' }] })),
      P(1.3, c(1, { id: 'p08-3', aspect: 'square', chars: ['iris'],
        prompt: 'Iris stepping one pace closer, seen from slightly below, watching Joel\'s face intently, her own face level.',
        say: [{ t: 'Can you describe the person you met?', pos: '@3,72', tail: 't', mw: 1.4 }] }),
        c(1.2, { id: 'p08-4', aspect: 'wide', chars: ['joel'],
        prompt: 'Joel considering for a fraction of a second, eyes moving slightly to one side, then answering simply. Medium close-up in the armchair.',
        say: [{ t: 'They were there.', pos: '@2,4', tail: 'r', mw: 1.1 }, { t: 'What did they look like?', pos: '@72,4', tail: 'none', mw: 0.85 }, { t: 'I do not know.', pos: 'bl', tail: 'tr' }] })),
    ] },

    // ---------------------------------------------------------------- 9  "It is accurate"
    { n: 9, comic: true, rows: [
      P(1, c(1, { id: 'p09-1', aspect: 'wide', chars: ['iris', 'joel'],
        prompt: 'Low wide angle from the floor near the television: Iris standing at left, Joel seated at right in the armchair, both small against the warm, tidy room, the lamp lit.',
        say: [{ t: 'You spoke with them.', pos: '@32,4', tail: 'l', mw: 1.4 }, { t: 'Yes.', pos: 'tr', tail: 'br' },
              { t: 'And you don\'t know what they looked like?', pos: '@32,22', tail: 'l', mw: 1.4 }, { t: 'No.', pos: '@62,30', tail: 'r' }] })),
      P(1.3, c(1.2, { id: 'p09-2', focus: 'center 20%', aspect: 'wide', chars: ['leah'],
        prompt: 'Leah letting out a breath that catches halfway, one hand lowering from her mouth, eyes wide, pleading with someone off-panel.',
        say: [{ t: 'Do you hear that? Do you hear how that sounds?', pos: '@58,4', tail: 'bl', mw: 1.1 }] }),
        c(1, { id: 'p09-3', aspect: 'square', chars: ['joel'],
        prompt: 'Joel looking up at his wife (off-panel left), mild and reasonable, as if correcting a small factual error.',
        say: [{ t: 'It is accurate.', pos: 'tl', tail: 'br' }] })),
      P(1, c(1, { id: 'p09-4', aspect: 'wide', chars: ['leah'],
        prompt: 'Close-up of Leah pressing her lips together, holding back what she wants to say, eyes shining. No dialogue.' })),
    ] },

    // ---------------------------------------------------------------- 10  the checklist
    { n: 10, comic: true, rows: [
      P(1.1, c(1, { id: 'p10-1', aspect: 'wide', chars: ['iris', 'joel'],
        prompt: 'Iris shifting her focus back to Joel, seen from behind Iris\'s shoulder on the left; Joel in the armchair facing her, calm.',
        say: [{ t: 'Do you feel any different?', pos: 'tl', tail: 'br' }, { t: 'No.', pos: 'tr', tail: 'bl' }] })),
      P(1.2, c(1, { id: 'p10-2', aspect: 'square', chars: ['iris'],
        prompt: 'Close-up of Iris in profile facing right, asking a list of clinical questions, face level, mouth slightly open mid-word.',
        say: [{ t: 'Any changes in sleep. Appetite. Focus.', pos: '@38,66', tail: 'tl', mw: 0.85 }, { t: 'Pain.', pos: 'bl', tail: 'tr' }] }),
        c(1, { id: 'p10-3', aspect: 'square', chars: ['joel'],
        prompt: 'Joel perfectly straight-on and symmetrical, a tight head-and-shoulders shot looking directly into the eyes of the viewer, answering each question the same way, his face identical in its calm; plain dark background behind his head.',
        say: [{ t: 'No.', pos: '@6,84', tail: 't' }, { t: 'No.', pos: '@74,84', tail: 't' }] }),
        c(1, { id: 'p10-4', aspect: 'square', chars: ['iris', 'joel'],
        prompt: 'Iris and Joel seen from the side across the space between them, both very still, the television glow on the wall.',
        say: [{ t: 'Gaps in memory.', pos: 'tl', tail: 'bl' }, { t: 'No.', pos: 'tr', tail: 'br' }] })),
      P(1.3, c(1.3, { id: 'p10-5', aspect: 'wide', chars: ['leah'],
        prompt: 'Leah laughing once, sharp and brief, without humor, her hand flung out toward her husband, tears close.',
        say: [{ t: 'That\'s the part. There\'s a gap. There has to be. He was gone for two days.', pos: '@45,4', tail: 'bl', mw: 1.3 }] }),
        c(1, { id: 'p10-6', aspect: 'square', chars: ['joel'],
        prompt: 'Joel not reacting to her tone at all, his face pleasant, eyes level, a slightly different angle from above.',
        cap: [{ t: 'It was simply the same sentence.', pos: 'bl' }],
        say: [{ t: 'I remember what is necessary.', pos: 'tl', tail: 'br', mw: 1.4 }] })),
    ] },

    // ---------------------------------------------------------------- 11  stillness
    { n: 11, comic: true, rows: [
      P(1.5, c(1, { id: 'p11-1', aspect: 'wide', chars: ['iris', 'joel'],
        prompt: 'High overhead view looking almost straight down from the ceiling corner onto the small living room: the top of the head of Joel in his armchair at one side, Iris standing a few feet in front of him, both motionless, long lamp shadows on the rug, the coffee table and the glowing television between them. A long silent beat.',
        cap: [{ t: 'Iris stood in front of him and let the silence settle.', pos: 'tl' }] })),
      P(1.2, c(1, { id: 'p11-2', aspect: 'square', chars: ['joel'],
        prompt: 'Joel seen in full figure from the side in the armchair, sitting completely still: no crossed legs, no shifting, both feet flat, hands on his knees, a statue in a gray henley.',
        cap: [{ t: 'There was something in the way he held himself.', pos: 'tl' }] }),
        c(1.2, { id: 'p11-3', aspect: 'square', chars: ['joel'],
        prompt: 'Close insert of Joel\'s shoulder and the side of his neck and jaw against the armchair, perfectly relaxed and motionless, lamp light falling across the gray fabric of his henley.',
        cap: [{ t: 'No micro-adjustments. No unconscious shifts in posture. None of the unevenness that came from discomfort, from distraction, from internal noise.', pos: 'bl', mw: 1.9 }] })),
      P(0.6, c(1, { id: 'p11-4', black: true, cap: [{ t: 'He was still, without excess.', pos: 'center' }] })),
    ] },

    // ---------------------------------------------------------------- 12  his day
    { n: 12, comic: true, rows: [
      P(1, c(1, { id: 'p12-1', aspect: 'wide', chars: ['iris'],
        prompt: 'Iris standing in the warm living room, medium shot from the right, asking a gentle question, face level.',
        say: [{ t: 'Can you tell me about your day?', pos: '@45,4', tail: 'bl', mw: 1.1 }] })),
      P(1.3, c(1.3, { id: 'p12-2', aspect: 'wide', chars: ['joel'],
        prompt: 'Joel nodding and reciting, medium close-up, calm, pleasant, orderly, his hands still on his knees.',
        say: [{ t: 'I woke at six. I ate breakfast. I left for work at seven. I returned at five. We ate dinner.', pos: '@1,4', tail: 'r', mw: 1.2 }] }),
        c(1, { id: 'p12-3', aspect: 'square', chars: ['joel'],
        prompt: 'Joel seen from low down beside the arm of his armchair, a profile view facing right, the lit lamp just behind his head, gazing calmly ahead at nothing, finished speaking. Darker background with lamp glow.',
        cap: [{ t: 'The sequence was complete.', pos: 'bl' }],
        say: [{ t: 'We are now here.', pos: '@48,62', tail: 'tl', mw: 0.9 }] })),
      P(1.3, c(1.2, { id: 'p12-4', aspect: 'wide', chars: ['leah'],
        prompt: 'Leah shaking her head slowly, mid-sentence, stopping herself, one hand pressed flat against her sternum, grief on her face.',
        say: [{ t: 'He used to... He would talk. He would tell me things. Not like that.', pos: '@45,4', tail: 'bl', mw: 1.3 }] }),
        c(1, { id: 'p12-5', aspect: 'square', chars: ['joel'],
        prompt: 'Joel in his armchair, his head and eyes turned toward the LEFT edge of the image where his wife stands out of frame, his face open and helpful, sincerely asking. Seen from his right side.',
        cap: [{ t: 'The question was sincere.', pos: 'bl' }],
        say: [{ t: 'What would you like me to add?', pos: '@2,40', tail: 'r', mw: 1.0 }] })),
      P(0.9, c(1, { id: 'p12-6', aspect: 'wide', chars: ['leah'],
        prompt: 'Leah with no answer, looking down and away, standing alone at the side of the room with her arms wrapped around herself. No dialogue.' })),
    ] },

    // ---------------------------------------------------------------- 13  bothered, enjoyed
    { n: 13, comic: true, rows: [
      P(1, c(1, { id: 'p13-1', aspect: 'wide', chars: ['iris', 'joel'],
        prompt: 'Over Iris\'s shoulder toward Joel in the armchair: her dark jacketed shoulder and the side of her head in the foreground left, Joel facing her, calm.',
        say: [{ t: 'Tell me about something that bothered you this week.', pos: 'tl', tail: 'br', mw: 1.8 }] })),
      P(1.3, c(1, { id: 'p13-2', aspect: 'wide', chars: ['joel'],
        prompt: 'Joel considering and answering, a low three-quarter view, steady and matter-of-fact.',
        say: [{ t: 'There was a delay in a shipment. It required adjustment.', pos: 'tl', tail: 'br', mw: 1.7 },
              { t: 'Did that bother you.', pos: 'tr', tail: 'none' }, { t: 'It required adjustment.', pos: 'bl', tail: 'tr' }] })),
      P(1.3, c(1, { id: 'p13-3', aspect: 'square', chars: ['iris'],
        prompt: 'Iris from a slightly high angle, face level, eyes fixed on Joel, asking the next question.',
        say: [{ t: 'Tell me about something you enjoyed.', pos: '@3,70', tail: 't', mw: 1.4 }] }),
        c(1.3, { id: 'p13-4', aspect: 'wide', chars: ['joel'],
        prompt: 'Close-up of Joel in three-quarter view from his left side, eyes lowered slightly and unfocused as if looking inward for something and finding only a plain fact, face calm. Lamp light from behind.',
        say: [{ t: 'We had dinner.', pos: '@2,30', tail: 'r', mw: 0.8 }, { t: 'What about it.', pos: '@74,30', tail: 'none' }, { t: 'It was appropriate.', pos: 'bl', tail: 'tr' }] })),
    ] },

    // ---------------------------------------------------------------- 14  the kitchen
    { n: 14, comic: true, rows: [
      P(1.3, c(1, { id: 'p14-1', aspect: 'wide', chars: ['leah'],
        prompt: 'Leah turning away and walking toward the small kitchen at the back of the room, a hand raised to her face, not looking back.',
        cap: [{ t: 'Leah made a sound in her throat and turned away, moving toward the kitchen.', pos: 'tl' }],
        say: [{ t: 'I\'m sorry. I\'m sorry, I just...', pos: '@40,25', tail: 'r', mw: 1.2 }] })),
      P(1.2, c(1, { id: 'p14-2', aspect: 'square', chars: ['leah'],
        prompt: 'Leah from behind at the kitchen counter, both hands resting flat on the surface, head bowed, shoulders tight. A window over the sink with gray light.',
        cap: [{ t: 'She stopped at the counter, hands resting on the surface.', pos: 'bl' }] }),
        c(1, { id: 'p14-3', aspect: 'square', chars: ['joel'],
        prompt: 'Joel in his armchair, head turned to look over his shoulder toward the kitchen doorway at the back of the room, his face exactly as calm as before.',
        cap: [{ t: 'His expression did not change.', pos: 'bl' }] })),
      P(1.3, c(1, { id: 'p14-4', aspect: 'square', chars: ['iris'],
        prompt: 'Iris stepping closer to Joel and speaking quietly, a close-up from his eye level, her face level and attentive.',
        say: [{ t: 'Do you feel concern for her?', pos: '@3,70', tail: 't', mw: 1.3 }] }),
        c(1.3, { id: 'p14-5', aspect: 'wide', chars: ['joel'],
        prompt: 'Low angle from beside the television, looking up at Joel from the front, his face turned toward the right edge of the image (toward the kitchen out of frame) as he answers, composed and courteous; the lamp glowing behind him, blinds behind. No kitchen doorway visible.',
        cap: [{ t: 'The answer was correct.', pos: 'bl' }],
        say: [{ t: 'She is distressed.', pos: '@2,4', tail: 'r', mw: 1.3 }, { t: 'Yes.', pos: '@80,4', tail: 'none' }, { t: 'I will remain present.', pos: '@2,22', tail: 'r', mw: 1.3 }] })),
    ] },

    // ---------------------------------------------------------------- 15  the wrist
    { n: 15, comic: true, rows: [
      P(1.2, c(1, { id: 'p15-1', aspect: 'wide', chars: [],
        prompt: 'Close insert: a woman\'s gloved hand closing around a man\'s bare wrist where it rests on the knee of his dark work trousers, the cuff of a gray henley pushed back; two fingers on the pulse. No faces.',
        cap: [{ t: 'His skin was warm. Pulse steady. No resistance to the contact.', pos: 'tl' }] })),
      P(1.3, c(1, { id: 'p15-2', aspect: 'square', chars: ['joel'],
        prompt: 'Joel looking up from his armchair at someone standing in front of him, a gloved hand resting on his wrist at the bottom of the frame, his face mildly curious and pleasant.',
        say: [{ t: 'Is that required?', pos: '@40,4', tail: 'bl', mw: 1.0 }, { t: 'No.', pos: 'br', tail: 'none' }] }),
        c(1.3, { id: 'p15-3', aspect: 'wide', chars: ['iris', 'joel'],
        prompt: 'Reverse angle from just inside the kitchen doorway looking out into the living room: Joel seated in his armchair seen from behind and to the side, Iris standing a step back from him facing the camera, the lamp lit, the television glowing, everything tidy, nothing out of place.',
        cap: [{ t: 'Nothing in the room was broken.', pos: 'bl' }] })),
      P(1.2, c(1, { id: 'p15-4', aspect: 'square', chars: ['leah'],
        prompt: 'Leah returning from the kitchen to the edge of the living room, face composed with effort, eyes red, asking directly.',
        say: [{ t: 'Can you fix this?', pos: '@2,25', tail: 'r', mw: 0.9 }] }),
        c(1.2, { id: 'p15-5', aspect: 'square', chars: ['iris'],
        prompt: 'Iris seen over the shoulder of Leah (her cardigan shoulder and loose hair in the foreground left), Iris facing her, head and shoulders, honest and level.',
        say: [{ t: 'I don\'t know what this is yet.', pos: 'tl', tail: 'bl', mw: 1.4 }] })),
    ] },

    // ---------------------------------------------------------------- 16  leaving
    { n: 16, comic: true, rows: [
      P(1.2, c(1, { id: 'p16-1', aspect: 'wide', chars: ['leah', 'iris'],
        prompt: 'Leah and Iris facing each other at the edge of the living room, two-shot in profile; Leah with a tired half-smile of recognition, Iris level.',
        say: [{ t: 'Daniel said you would say that.', pos: '@30,4', tail: 'l', mw: 1.0 }, { t: 'I need to observe.', pos: '@44,32', tail: 'r', mw: 0.9 },
              { t: 'For how long?', pos: '@3,62', tail: 'tl' }, { t: 'I don\'t know.', pos: '@76,62', tail: 'tr' }] })),
      P(1.3, c(1, { id: 'p16-2', aspect: 'square', chars: ['leah', 'joel'],
        prompt: 'Leah standing at left, her eyes lowered and turned away from her husband, lips pressed together; Joel seated in his armchair at right still looking steadily and pleasantly at her.',
        cap: [{ t: 'She looked away first.', pos: 'bl' }],
        say: [{ t: 'Okay. Okay.', pos: '@40,4', tail: 'bl', mw: 0.9 }] }),
        c(1, { id: 'p16-3', aspect: 'square', chars: ['iris', 'leah'],
        prompt: 'Iris stepping back toward the door, Leah facing her, hugging her own arms.',
        say: [{ t: 'I\'ll report what I see.', pos: '@36,4', tail: 'l', mw: 1.0 }, { t: 'Please.', pos: 'br', tail: 'tl' }] })),
      P(1.2, c(1, { id: 'p16-4', aspect: 'wide', chars: ['joel'],
        prompt: 'Joel in his armchair inclining his head politely toward the departing visitor, a courteous small smile that does not reach anything, the muted television glowing beside him.',
        cap: [{ t: 'The sentence was polite. Appropriate. Empty.', pos: 'bl' }],
        say: [{ t: 'Thank you for coming.', pos: 'tl', tail: 'br' }] })),
    ] },

    // ---------------------------------------------------------------- 17  the porch
    { n: 17, comic: true, rows: [
      P(1.3, c(1, { id: 'p17-1', aspect: 'wide', chars: ['leah', 'iris'],
        prompt: 'On the narrow front porch in gray daylight: Leah following Iris out of the front door, hugging her cardigan closed against the cold, asking; Iris at the top of the steps.',
        cap: [{ t: 'The air outside felt colder than when she had arrived.', pos: 'bl' }],
        say: [{ t: 'Is he going to stay like this?', pos: '@34,52', tail: 'tl', mw: 1.0 }] })),
      P(1.2, c(1, { id: 'p17-2', aspect: 'square', chars: ['iris'],
        prompt: 'Iris on the porch steps half turned back over her shoulder, seen from below on the street side, gray sky behind her, face level.',
        say: [{ t: 'I don\'t have enough information.', pos: '@2,30', tail: 'r', mw: 0.9 }, { t: 'Right.', pos: 'br', tail: 'none' }] }),
        c(1.2, { id: 'p17-3', aspect: 'square', chars: ['joel'],
        prompt: 'View from the porch through the open front door and down the short hall into the living room: Joel small in his armchair, exactly where he was, facing the glowing blank television.',
        cap: [{ t: 'Joel had not moved from the chair. The television continued to play without sound.', pos: 'tl' }] })),
      P(1, c(1, { id: 'p17-4', aspect: 'wide', chars: ['iris', 'leah'],
        prompt: 'Iris going down the porch steps toward the street, Leah behind her in the doorway with one hand on the frame, as when she first opened it.',
        say: [{ t: 'Call if anything changes.', pos: '@2,60', tail: 'tr', mw: 1.4 }, { t: 'I will.', pos: 'tr', tail: 'b' }] })),
      P(1, c(1, { id: 'p17-5', aspect: 'wide', chars: ['iris'],
        prompt: 'Iris from behind walking along the wet sidewalk to her white van, the row house behind her, not looking back.',
        cap: [{ t: 'Iris stepped off the porch and walked back to the van. She did not look back again.', pos: 'tl' }] })),
    ] },

    // ---------------------------------------------------------------- 18  in the van
    { n: 18, comic: true, rows: [
      P(1, c(1, { id: 'p18-1', aspect: 'wide', chars: [],
        prompt: 'Inside the van: the rugged gray slate tablet lying face down on the passenger seat, the engine off, the keys hanging still in the ignition, rain-flecked windshield. No people.',
        cap: [{ t: 'Inside the vehicle, she set her slate on the passenger seat and did not start the engine immediately.', pos: 'tl' }] })),
      P(1.4, c(1, { id: 'p18-2', aspect: 'wide', chars: ['iris'],
        prompt: 'Close-up of Iris in the driver\'s seat of the van with her eyes closed, head resting back against the headrest, face completely still, gray daylight through the side window. Nothing else in the frame.',
        cap: [{ t: 'Joel\'s voice replayed.', pos: 'tr' }, { t: 'I am fine. I know what is necessary. It is accurate.', pos: 'bl' }] })),
      P(1.1, c(1, { id: 'p18-3', aspect: 'square', chars: [],
        prompt: 'Close-up memory image of the mouth and jaw of Joel (clean-shaven, gray henley collar) mid-word, calm, drawn softer and lighter in fine line, fading out into blank white paper at the edges like a memory.',
        cap: [{ t: 'No strain. No conflict. Nothing missing from the sentence.', pos: 'bl' }] }),
        c(1, { id: 'p18-4', aspect: 'square', chars: [],
        prompt: 'Joel seated in his brown leather armchair in the lamplit living room, seen from the doorway, but drawn only as a faint thin outline with no shading inside him, as if hollow, while the chair and room around him are drawn normally; the edges fade into blank white paper like a memory.',
        cap: [{ t: 'Something missing from the person.', pos: 'bl' }] })),
      P(1.2, c(1, { id: 'p18-5', aspect: 'wide', chars: [],
        prompt: 'Through the van\'s windshield: a quiet residential street of narrow row houses in gray daylight, curtains, a parked car, nobody about.',
        cap: [{ t: 'She opened her eyes. The street remained quiet. Other houses. Other lives moving in patterns that would not intersect with this one.', pos: 'tl' }] })),
    ] },

    // ---------------------------------------------------------------- 19  the pull
    { n: 19, comic: true, rows: [
      P(1, c(1, { id: 'p19-1', aspect: 'wide', chars: [],
        prompt: 'Close insert: a gloved hand resting motionless on the key in a van\'s ignition. The dashboard, the wheel. No face.',
        cap: [{ t: 'She started the engine. Then stopped.', pos: 'tl' }] })),
      P(1.6, c(1, { id: 'p19-2', aspect: 'wide', chars: ['iris'],
        prompt: 'Iris in the driver\'s seat turning her head slightly to look down the street through the side window, eyes shifting to the side, the faintest attention, brows level, as if something just outside her perception were drawing her attention without moving her. Face otherwise level.',
        cap: [{ t: 'There was a pull. Faint. A subtle weight behind her eyes, as if something just outside her perception was drawing her attention without moving her.', pos: '@55,4', mw: 1.8 }] })),
      P(1.2, c(1, { id: 'p19-3', aspect: 'square', chars: [],
        prompt: 'The empty residential street down the block from the van, row houses receding, wet pavement, a gray sky. Completely empty. Nothing visible.',
        cap: [{ t: 'Nothing visible.', pos: 'bl' }] }),
        c(1.2, { id: 'p19-4', aspect: 'square', chars: [],
        prompt: 'The same row house as p02-1 seen through the van\'s rain-streaked side window: white-painted horizontal wooden siding (not brick), a narrow wooden porch with three steps, a single window to the left of the front door with its blinds half drawn and lamplight behind. Porch empty.',
        cap: [{ t: 'The weight remained for a second longer. Then it eased.', pos: 'bl' }] })),
      P(1, c(1, { id: 'p19-5', aspect: 'wide', chars: [],
        prompt: 'A WHITE work van pulling away from the curb on the quiet residential street, seen from behind and a little above. Wet road, gray sky.',
        cap: [{ t: 'The feeling did not return. She put the van in gear and pulled away from the curb.', pos: 'bl' }] })),
    ] },

    // ---------------------------------------------------------------- 20  the call
    { n: 20, comic: true, rows: [
      P(1, c(1, { id: 'p20-1', aspect: 'wide', chars: [],
        prompt: 'Close insert inside the moving van: a gloved hand reaching to the slate tablet clipped to the dashboard, its screen blank and glowing white. The street moving past outside. No face.',
        cap: [{ t: 'At the end of the block, she reached for the slate and opened a channel.', pos: 'tl' }],
        say: [{ t: 'Kade.', pos: 'bl', tail: 'b' }, { t: 'Go.', pos: 'br', tail: 'none' }] })),
      P(1.4, c(1, { id: 'p20-2', aspect: 'wide', chars: ['iris'],
        prompt: 'Iris driving, seen through the windshield from outside the van, both hands on the wheel, eyes on the road, talking, face level.',
        say: [{ t: 'Subject is functional. Cognitive responses intact. Language appropriate. No distress. No awareness of change.', pos: 'tl', tail: 'b', mw: 2.0 },
              { t: 'Family?', pos: 'tr', tail: 'none' }] })),
      P(1.2, c(1, { id: 'p20-3', aspect: 'square', chars: ['iris'],
        prompt: 'Iris driving, side profile from the passenger seat, gray street sliding past the window behind her.',
        say: [{ t: 'Observes difference. Cannot define it.', pos: '@45,4', tail: 'l', mw: 1.1 }, { t: 'Your read.', pos: 'br', tail: 'none' }] }),
        c(1.2, { id: 'p20-4', aspect: 'square', chars: ['iris'],
        prompt: 'Very tight close-up of the face of Iris cropped from her forehead to her upper lip, looking at the road ahead, perfectly steady and distant, gray light.',
        say: [{ t: 'Something has been removed.', pos: '@3,64', tail: 't', mw: 1.2 }] })),
      P(1, c(1, { id: 'p20-5', aspect: 'wide', chars: [],
        prompt: 'The white van small on a long gray coastal road at the edge of the city, the sea beyond, seen from far behind and above.',
        say: [{ t: 'What?', pos: 'tl', tail: 'none' }, { t: 'I don\'t know.', pos: '@30,10', tail: 'b' },
              { t: 'Send me everything.', pos: 'tr', tail: 'none' }, { t: 'I will.', pos: '@62,40', tail: 'b' }] })),
      P(1, c(1, { id: 'p20-6', aspect: 'wide', chars: ['iris'],
        prompt: 'Iris alone driving, seen from the back seat over her shoulder, the road ahead through the windshield, her eyes in the rear-view mirror steady and watchful.',
        cap: [{ t: 'The weight did not return as she drove. But she was aware of the place where it had been.', pos: 'bl' }] })),
    ] },
  ],
};
