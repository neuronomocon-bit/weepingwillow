// CANONICAL SOURCE for the Ch1 pilot. Everything else in this folder is generated from it.
// Adapted from book1-published/chapters/ch01-the-gap.md. Captions quote the published text.
//
// Panel fields:
//   id      art file name (art/<id>.png)
//   aspect  wide | tall | square   (what to ask the image model for)
//   chars   which character blocks to prepend: iris, figure, lena
//   prompt  the scene, in art-direction language
//   cap     captions [{t, pos}]      pos: tl tr bl br top bottom
//   sfx     sound effects [{t, pos}]
//   screen  device text {lines:[], pos}
//   black   true = solid black panel, no art
//   focus   CSS object-position for the crop (default 'center')
//   reuse   use another panel's art file instead of generating (e.g. the same clock screen)
//   bleed   edges that run off the page with no border, e.g. ['top', 'left', 'right'] (comic pages)
//
// Page fields: comic: true = use the ink-pass art (ink/<id>.png), hand-drawn borders and comic lettering

const P = (h, ...panels) => ({ h, panels });
const c = (w, panel) => ({ w, ...panel });

module.exports = {
  title: 'Weeping Willow: The Absence',
  chapter: 'Chapter 1 — The Gap',

  refs: [
    { id: 'ref-iris', aspect: 'wide', chars: ['iris'],
      prompt: 'Character reference sheet on a plain white background: the same woman shown four times side by side, full body front view, full body three-quarter view, full body back view showing the backpack, and a head-and-shoulders close-up. Identical face, hair and clothing in all four. Neutral standing pose, arms at her sides.' },
    { id: 'ref-figure', aspect: 'tall', chars: ['figure'],
      prompt: 'Creature design reference on a plain white background: the figure standing full length, front view, perfectly still, arms at its sides, plus a small inset close-up of one hand. Calm, quiet, uncanny, not threatening.' },
    { id: 'ref-archive', aspect: 'wide', chars: [],
      prompt: 'Location reference: interior of a long abandoned server archive room. Long parallel rows of tall server racks receding into darkness. Only every third ceiling light is on, laying long bands of white light across the tops of the racks while the aisles between fall into solid black. Tiny status lights on the rack faces. Cable bundles, open wire containment cages, dust on the floor. No people.' },
  ],

  pages: [
    // ---------------------------------------------------------------- 1
    { n: 1, comic: true, rows: [
      P(2.2, c(1, { id: 'p01-1', bleed: ['top', 'left', 'right'], aspect: 'wide', chars: [],
        prompt: 'Establishing shot. In the foreground, a chain-link fence with a person-sized opening cut into it, the cut wire curled inward. Beyond it, across a gravel lot full of weeds and puddles, a low concrete bunker-like research building squats on a coastal bluff, narrow slit windows, rust at the seams. Gray ocean beyond and a flat heavy overcast sky rendered in horizontal hatching.',
        cap: [{ t: 'The fence had been cut and left that way.', pos: 'tl' }] })),
      P(1, c(1, { id: 'p01-2', aspect: 'wide', chars: [],
        prompt: 'Extreme close-up of cut chain-link wire, the cut ends curled inward, edges dulled and pitted by salt and weather. Shallow depth, the background dissolving into stippled fog.',
        cap: [{ t: 'Not recently.', pos: 'tl' }] }),
        c(1, { id: 'p01-3', aspect: 'square', chars: ['iris'],
        prompt: 'Iris seen from behind, standing just outside the opening in the cut fence, small in the frame, looking at the concrete building beyond. Wind tugging at loose strands of her hair.',
        cap: [{ t: 'Someone had gone through it once. No one had bothered to close it after.', pos: 'bl' }] })),
    ] },

    // ---------------------------------------------------------------- 2
    { n: 2, comic: true, rows: [
      P(1.5, c(1, { id: 'p02-1', aspect: 'wide', chars: [],
        prompt: 'The front of the research building, closer: concrete and narrow glass, more bunker than clinic. Rust streaking down from the seams, salt crusted in the window corners, one section of exterior paneling peeled back to show dark damp insulation. Above the sealed main doors a weathered metal sign reading MERIDIAN NEUROLOGICAL RESEARCH, the last letters faded almost away. One door pane cracked from the inside.',
        cap: [{ t: 'The building had been designed to keep things in or out. It was hard to tell which.', pos: 'bl' }] })),
      P(1, c(1.2, { id: 'p02-2', aspect: 'wide', chars: ['iris'],
        prompt: 'Close-up of a gloved hand holding a rugged handheld tablet. The screen is a plain blank glowing rectangle with nothing on it. Rain-dark jacket sleeve. Background out of focus.',
        screen: { lines: ['MN-44-7', 'ON-SITE RECOVERY', 'LOCAL EXTRACTION ONLY', 'NO LIVE NETWORK DEPENDENCY', 'PARTIAL POWER REPORTED', 'NO PERSONNEL EXPECTED', 'CLIENT: ████████'], pos: 'tr' } }),
        c(1, { id: 'p02-3', aspect: 'square', chars: ['iris'],
        prompt: 'Head-and-shoulders close-up of Iris looking down at something in her hands, face calm, flat and unreadable, collar up against the wind.',
        cap: [{ t: 'Routine.', pos: 'br' }] })),
      P(1, c(1, { id: 'p02-4', aspect: 'wide', chars: [],
        prompt: 'A plain work van parked on a gravel shoulder outside the fence, deliberately turned to face the road out. Empty coastal road, flat sky, a few telephone poles.',
        cap: [{ t: 'Her van sat outside the perimeter, facing the road.', pos: 'tl' }, { t: 'Easier to leave.', pos: 'br' }] })),
    ] },

    // ---------------------------------------------------------------- 3
    { n: 3, comic: true, rows: [
      P(1.4, c(1, { id: 'p03-1', aspect: 'wide', chars: ['iris'],
        prompt: 'Wide shot. Iris walking a narrow strip of ground along the side of the concrete building, building wall on the left of frame, a bluff dropping away on the right to a gray ocean breaking white on rocks far below. She is small, mid-stride.',
        cap: [{ t: 'The sound of the water came and went in uneven ways.', pos: 'tl' }] })),
      P(1, c(1, { id: 'p03-2', aspect: 'tall', chars: ['iris'],
        prompt: 'Iris stopped dead, turned toward the sea, listening. Profile view, her face still. Everything around her quiet, the air thick with stippled mist.',
        cap: [{ t: 'She stopped.', pos: 'tl' }] }),
        c(1.4, { id: 'p03-3', aspect: 'wide', chars: [],
        prompt: 'The ocean seen from the top of the bluff, gray water and a white edge where it strikes black rock below. Ordinary, empty, vast.',
        cap: [{ t: 'Gray water. White edge where it struck the rock below.', pos: 'bl' }] })),
      P(1.4, c(1, { id: 'p03-4', aspect: 'wide', chars: [],
        prompt: 'A side service door recessed into the concrete under a loading overhang. Institutional metal door, most of its paint blistered and flaking off. A dead keypad access panel set in the wall beside it. Puddles under the overhang.',
        cap: [{ t: 'The site notes had mentioned a side service door with a dead keypad and a mechanical lock. Better entry. Less exposure.', pos: 'tl' }] })),
    ] },

    // ---------------------------------------------------------------- 4
    { n: 4, comic: true, rows: [
      P(1, c(1, { id: 'p04-1', aspect: 'wide', chars: ['iris'],
        prompt: 'Close-up of gloved hands working: the cover of the dead keypad panel removed, two thin wire leads clipped into its exposed circuitry, running to a small handheld bypass device with a tiny screen. Precise, practiced.',
        cap: [{ t: 'Panel off. Leads in. Manual current.', pos: 'tl' }] }),
        c(1, { id: 'p04-2', aspect: 'square', chars: [],
        prompt: 'Extreme close-up still life of the edge of an old metal door: a worn steel latch tongue retracting into the door, a few short motion lines, scratched paint, deep black shadow around it.', // reworded: the bolt version was refused by ChatGPT
        sfx: [{ t: 'KLAK', pos: 'tr' }] })),
      P(1.3, c(1, { id: 'p04-3', aspect: 'wide', chars: ['iris'],
        prompt: 'Iris with one gloved hand flat on the door push bar, head slightly turned, listening, very still. Medium close shot, the door filling half the frame.',
        cap: [{ t: 'The bolt clicked back. She paused with one hand on the bar, listening.', pos: 'tl' }, { t: 'Nothing from inside.', pos: 'br' }] })),
      P(1.6, c(1, { id: 'p04-4', aspect: 'tall', chars: ['iris'],
        prompt: 'Seen from inside the dark building: the service door open, a rectangle of pale overcast daylight, and Iris in silhouette stepping through it into solid black. The interior is almost entirely ink.',
        cap: [{ t: 'The air changed immediately.', pos: 'bl' }] }),
        c(1, { id: 'p04-5', black: true,
        cap: [{ t: 'She closed the door behind her and the sound of the ocean disappeared.', pos: 'center' }] })),
    ] },

    // ---------------------------------------------------------------- 5
    { n: 5, comic: true, rows: [
      P(1.6, c(1, { id: 'p05-1', aspect: 'wide', chars: ['iris'],
        prompt: 'A long institutional hallway in darkness, lit only by the cone of light from Iris\'s collar lamp and two weak ceiling fixtures far down the corridor. The tile floor is completely dry and matte, covered in a thin, even film of pale dust with no reflections, no puddles, no shine. Painted walls, a row of framed notices clouded behind plastic. Iris small at the near end, seen from behind.',
        cap: [{ t: 'Her headlamp came on with a soft click.', pos: 'tl' }] })),
      P(1, c(1, { id: 'p05-2', aspect: 'square', chars: [],
        prompt: 'Close-up of a tile floor in a headlamp beam: a thin even film of dust and nothing else. No paper, no leaves, no dead insects, no debris in the corners. Unnaturally tidy neglect.',
        cap: [{ t: 'Thin dust. No drifted paper. No blown-in debris. The neglect felt selective.', pos: 'tl' }] }),
        c(1, { id: 'p05-3', aspect: 'square', chars: [],
        prompt: 'A quiet still life of an abandoned office, viewed through the narrow vertical glass pane beside its door. Inside: a desk with an old computer monitor, a coffee mug, and a stack of yellowed papers with curled edges. Dust. A soft glare of light across the glass.' })), // reworded after a refusal
      P(1.1, c(1, { id: 'p05-4', aspect: 'wide', chars: [],
        prompt: 'A stripped, empty office. Bare desk, bare shelves, and on the wall a paper month-grid wall calendar, the only thing left, caught in a beam of light.',
        cap: [{ t: 'A wall calendar stopped three years earlier.', pos: 'br' }] })),
    ] },

    // ---------------------------------------------------------------- 6
    { n: 6, comic: true, rows: [
      P(1, c(1, { id: 'p06-1', aspect: 'square', chars: ['iris'],
        prompt: 'Low angle at a dark corridor junction: a hanging ceiling sign with a plain blank white face and an arrow shape pointing deeper into the building, and Iris standing beneath it looking up at it. Plain solid dark trousers with no pattern. The floor is dry, matte and dusty, with no reflections.',
        screen: { lines: ['DATA ARCHIVE / LOWER ACCESS'], pos: 'tl', style: 'sign' } }),
        c(1, { id: 'p06-2', aspect: 'square', chars: [],
        prompt: 'Close-up in a flashlight beam at an abandoned hospital nurses\' station: the base of a computer monitor stand on a dusty counter, and looped around the stand, the clear focus of the image, a plastic hospital patient wristband with a blank, faded white label. Behind it, out of focus, empty drawers hanging half open and a dark screen. Dry dust everywhere.',
        cap: [{ t: 'A patient wristband.', pos: 'tl' }, { t: 'The label had faded too much to read.', pos: 'bl' }] })),
      P(1.6, c(1, { id: 'p06-3', aspect: 'tall', chars: ['iris'],
        prompt: 'A freight elevator with its doors half parted around a gap of absolute black. Beside it, a concrete stairwell going down, yellow edge strips on each step worn nearly white. Iris on the top step, deliberately not looking at the elevator.',
        cap: [{ t: 'She did not look into it.', pos: 'tl' }] }),
        c(1, { id: 'p06-4', aspect: 'tall', chars: [],
        prompt: 'A stairwell landing wall in a headlamp beam: an official metal placard, and screwed beneath it a second cheaper plastic placard in a different style. Both placard faces plain and blank. Breath of cold mist.',
        screen: { lines: ['AUTHORIZED PERSONNEL ONLY', '—', 'ARCHIVE STORAGE'], pos: 'center', style: 'sign' } })),
    ] },

    // ---------------------------------------------------------------- 7
    { n: 7, comic: true, rows: [
      P(2.4, c(1, { id: 'p07-1', aspect: 'tall', chars: ['iris'],
        prompt: 'Splash. A cavernous server archive seen from a set of open double doors: long rows of tall server racks receding into darkness, only every third ceiling fixture lit, laying long bands of white over the rack tops while the aisles fall to solid black. Tiny status lights pinpricked in the dark. Iris a small silhouette in the doorway in the foreground, letting her eyes adjust.',
        cap: [{ t: 'The server room lights were on.', pos: 'tl' }, { t: 'Every third fixture, maybe.', pos: 'br' }] })),
      P(1, c(1, { id: 'p07-2', focus: 'center 25%', aspect: 'wide', chars: ['iris'],
        prompt: 'Iris crouched on the floor beside her open backpack at the end of a server rack, laying out her kit: a ruggedized portable terminal, a coil of fiber cable, a compact storage array. Focused, competent, her face lit from below by the terminal.',
        cap: [{ t: 'Connect. Wake. Handshake. Authenticate against dead credentials until the machine accepted that no one still living was coming back for it.', pos: 'tl' }] })),
    ] },

    // ---------------------------------------------------------------- 8
    { n: 8, comic: true, rows: [
      P(1, c(1, { id: 'p08-1', aspect: 'wide', chars: [],
        prompt: 'Close-up of a ruggedized laptop terminal on a concrete floor, its screen a plain blank glowing rectangle, cables running out of frame into a server rack.',
        screen: { lines: ['PATIENT MAPPING OUTPUTS', 'MEMORY ARCHITECTURE STUDIES', 'CLINICAL OBSERVATION FOOTAGE', 'TRANSFER ▓▓▓▓▓▓░░░░░░'], pos: 'center' } }),
        c(1, { id: 'p08-2', aspect: 'wide', chars: [],
        prompt: 'Looking across several server rows: three rows over, one ceiling light has just died, leaving a new patch of black in the bands of light. Small and quiet.',
        cap: [{ t: 'A light three rows over fluttered twice, steadied, then went out.', pos: 'bl' }] })),
      P(1, c(1, { id: 'p08-3', aspect: 'square', chars: [],
        prompt: 'Extreme close-up of the corner of a terminal screen showing only a plain blank clock area, glowing softly in black.',
        screen: { lines: ['14:07'], pos: 'center', style: 'clock' }, cap: [{ t: 'That seemed early. She could not say why.', pos: 'bl' }] }),
        c(1.6, { id: 'p08-4', aspect: 'wide', chars: ['iris'],
        prompt: 'Iris crouched in a server aisle, touching the floor with two gloved fingertips. The concrete floor is completely dry and matte, coated in a fine layer of pale dust, with no shine or reflections. In the dust around her are several broad, faint, smeared patches where the dust has been brushed aside and settled again: wide soft swept shapes, like something large was dragged slowly across the floor, that are not footprints and follow no straight path.',
        cap: [{ t: 'At the third rack she noticed marks on the floor.', pos: 'tl' }, { t: 'Not footprints.', pos: 'br' }] })),
      P(1, c(1, { id: 'p08-5', aspect: 'wide', chars: [],
        prompt: 'A server aisle drawn as an unsettling visual paradox, in the spirit of an impossible-architecture etching: the row of racks on the left has clearly more cabinets than the row on the right over the same distance, so their ends drift out of step; the floor tiles bend slightly and stop lining up with the racks; the ceiling light bands fall between the racks instead of over them; and the far end of the aisle sits in a black void much deeper than the room could be. Tilt the camera a few degrees off level. Dry matte dusty floor, no people.',
        cap: [{ t: 'Aisles seemed to run longer. Rack ends aligned, then failed to align.', pos: 'tl' }] })),
    ] },

    // ---------------------------------------------------------------- 9
    { n: 9, comic: true, rows: [
      P(1, c(1, { id: 'p09-1', aspect: 'tall', chars: ['iris'],
        prompt: 'Iris standing perfectly still in a server aisle, head tilted up and to the side, listening. Bands of light over her, black on either side.',
        cap: [{ t: 'Then the hum changed.', pos: 'tl' }] }),
        c(1, { id: 'p09-2', aspect: 'tall', chars: ['iris'],
        prompt: 'Over-the-shoulder shot past Iris toward the open double doors at the far end of the room: a thin vertical slice of pale empty corridor visible between the nearer racks.',
        sfx: [{ t: 'klik', pos: 'tl' }, { t: 'klik', pos: 'br' }],
        cap: [{ t: 'Pale wall. Empty.', pos: 'bl' }] })),
      P(1.2, c(1, { id: 'p09-3', aspect: 'wide', chars: ['iris'],
        prompt: 'Iris turning sharply toward the camera, headlamp beam swinging across black server faces, cable bundles, dust, steel. Motion in the light, the aisle beside her empty.',
        cap: [{ t: 'The progress bar moved slower than the others.', pos: 'tl' }, { t: 'At 28 percent, she heard something that sounded like fabric against concrete.', pos: 'br' }] })),
    ] },

    // ---------------------------------------------------------------- 10
    { n: 10, comic: true, rows: [
      P(1.5, c(1, { id: 'p10-1', aspect: 'square', chars: ['iris', 'figure'],
        prompt: 'The glossy black glass door of a server cabinet fills the frame like a dark mirror. In it, the slightly stretched reflection of Iris with the small light at her collar. Half a step behind her shoulder in the reflection stands THE FIGURE: a pale, female, too-tall, too-narrow shape in a dark long coat, its pale porcelain face blurred and indistinct, short dark hair. It is pale against the black glass, faint and ghostly, easy to miss at first glance. Iris has not noticed it.',
        cap: [{ t: 'Her own reflection moved across the black cabinet glass.', pos: 'tl' }, { t: 'For a second she thought there was a second shape behind it, offset from hers by half a step.', pos: 'bl' }] }),
        c(1, { id: 'p10-2', aspect: 'tall', chars: ['iris'],
        prompt: 'The same black glass cabinet door with Iris\'s thin distorted reflection, and nothing else in it.',
        cap: [{ t: 'Then only her own light remained.', pos: 'bl' }] })),
      P(1, c(1, { id: 'p10-3', aspect: 'wide', chars: ['iris'],
        prompt: 'Iris pulling a headlamp band tight around her head, the lamp now on her forehead, the direct beam stabbing straight ahead into the dark.',
        cap: [{ t: 'The direct beam felt better.', pos: 'br' }] }),
        c(1, { id: 'p10-4', aspect: 'wide', chars: ['iris'],
        prompt: 'Close-up of a rugged handheld tablet in a gloved hand showing a plain architectural floor plan of a room with a solid rear wall marked, lines only, no text, held up in front of a long dark aisle that clearly continues much farther than the plan allows.',
        cap: [{ t: 'The plans still showed a rear service wall fifteen meters ahead.', pos: 'tl' }, { t: 'The row was longer than fifteen meters.', pos: 'br' }] })),
    ] },

    // ---------------------------------------------------------------- 11
    { n: 11, comic: true, rows: [
      P(1.5, c(1, { id: 'p11-1', aspect: 'wide', chars: ['iris'],
        prompt: 'Iris walking down the central aisle of the archive toward the back of the room, headlamp beam sliding over rack labels, warning stickers, old asset tags. A maintenance cart parked against a post as if someone meant to come back for it.',
        cap: [{ t: 'When she looked up, she was already moving.', pos: 'tl' }] })),
      P(1, c(1, { id: 'p11-2', aspect: 'square', chars: ['iris'],
        prompt: 'Iris from behind, slowing, the aisle ahead continuing into a section where almost no lights remain, a deep stillness, enclosed, no visible barrier.',
        cap: [{ t: 'If the plans were right, she should already have reached the rear wall.', pos: 'tl' }, { t: 'She had not.', pos: 'br' }] }),
        c(1, { id: 'p11-3', aspect: 'square', chars: [],
        prompt: 'A smooth pale concrete wall in a headlamp beam, close enough to see trowel lines in the sealant where a vertical seam was filled and painted over. Newer and cleaner than the stained concrete around it.',
        cap: [{ t: 'A wall.', pos: 'tl' }, { t: 'Newer than the surrounding concrete.', pos: 'br' }] })),
      P(1.3, c(1, { id: 'p11-4', aspect: 'wide', chars: ['iris'],
        prompt: 'Iris standing in front of the blank wall, small, her beam moving across it. No handle, no reader, no panel, only continuous wall. Black closing in at the frame edges.',
        cap: [{ t: 'No handle. No badge reader. No visible access panel. Just continuous wall.', pos: 'bl' }] })),
    ] },

    // ---------------------------------------------------------------- 12
    { n: 12, comic: true, rows: [
      P(1.2, c(1, { id: 'p12-1', aspect: 'wide', chars: [],
        prompt: 'Point of view looking back down a very long dark server aisle: at the far far end, a single tiny green status light on the floor, impossibly distant, small and steady.',
        cap: [{ t: 'She looked back. The terminal light sat fixed in the distance, small and green.', pos: 'tl' }] })),
      P(1, c(1, { id: 'p12-2', aspect: 'square', chars: ['iris'],
        prompt: 'Close-up of a rugged handheld tablet in a gloved hand, the screen a plain blank glowing rectangle.',
        screen: { lines: ['TRANSFER STALLED.', 'LINK UNSTABLE.'], pos: 'center' } }),
        c(1.4, { id: 'p12-3', aspect: 'wide', chars: ['iris'],
        prompt: 'Iris slowly rotating her head and headlamp beam toward the gap between racks on her left, body tense, the cold air visible as faint breath.',
        cap: [{ t: 'The air had changed.', pos: 'tl' }, { t: 'On her left now. Close.', pos: 'br' }] })),
      P(1.6, c(0.7, { id: 'p12-4', aspect: 'tall', chars: ['figure'],
        prompt: 'Looking into a narrow, pitch-black gap between two tall server racks. The racks at the edges of the frame are lit by a headlamp. Deep in the black gap, in the center of the frame, a thin vertical strip of a pale figure is visible: the white porcelain edge of a cheek, neck and shoulder, with the rest of the figure hidden behind the rack. The pale strip is the brightest thing in the dark part of the image, bright white against solid black, so the viewer sees it immediately. Absolutely still. No eyes, no features, just the pale edge.',
        cap: [{ t: 'Something pale at the edge of range.', pos: 'tl' }] }),
        c(1, { id: 'p12-5', black: true,
        cap: [{ t: 'Vertical. Still.', pos: 'center' }, { t: 'Not part of the room.', pos: 'bottom' }] })),
    ] },

    // ---------------------------------------------------------------- 13
    { n: 13, comic: true, rows: [
      P(2, c(0.8, { id: 'p13-1', aspect: 'tall', chars: ['figure'],
        prompt: 'Tall narrow panel. In the dark gap between racks, the pale figure resolving from black: a line, then another, the suggestion of shoulders, near human height but slightly too narrow. Its face is turned toward the viewer but lost in shadow, unseen.',
        cap: [{ t: 'Height close to human. Maybe a little too narrow.', pos: 'tl' }, { t: 'No face yet.', pos: 'bl' }] }),
        c(1, { id: 'p13-2', aspect: 'tall', chars: ['iris'],
        prompt: 'Close-up of Iris taking one step backward, her face lit hard from her own headlamp, eyes fixed forward, jaw set, the light beam trembling slightly, the edges of the frame softening and blurring into stipple.',
        cap: [{ t: 'The beam trembled slightly because her hand did. She stilled it.', pos: 'tl' }, { t: 'The room seemed to soften around the edges.', pos: 'br' }] })),
      P(1, c(1, { id: 'p13-3', aspect: 'wide', chars: ['figure'],
        prompt: 'A long pale hand entering a beam of light from total darkness, unhurried, fingers slightly parted, reaching with certainty. Too smooth to be skin, joints too economical. Only the hand and forearm visible.',
        cap: [{ t: 'A hand.', pos: 'tl' }, { t: 'Reaching not with force but with certainty.', pos: 'br' }] }),
        c(1, { id: 'p13-4', aspect: 'square', chars: ['iris', 'figure'],
        prompt: 'Extreme close-up of a gentle touch on a woman\'s wrist. Her forearm is in a heavy dark waxed-canvas jacket sleeve and she wears a dark work glove; the glove ends at her wrist, leaving a narrow band of bare skin on the inside of the wrist between the glove cuff and the sleeve. A long, slender, pale hand with smooth porcelain-like skin rests its fingertips lightly on exactly that band of bare skin. The pale hand has correct human anatomy: FOUR fingers and one thumb, five digits in total, all clearly visible and separated. Quiet, still, intimate. Solid black background.',
        cap: [{ t: 'The contact was cool. That was the first thing.', pos: 'bl' }] })),
    ] },

    // ---------------------------------------------------------------- 14  the taking
    { n: 14, memory: true, comic: true, rows: [
      P(1, c(1.3, { id: 'p14-1', aspect: 'wide', chars: [],
        prompt: 'A memory: a small apartment kitchen, late sun slanting through window blinds in bars of light, a chipped mug on the counter, a doorway to a next room. Drawn softer, the edges dissolving into white paper as if fading.',
        cap: [{ t: 'The kitchen in the apartment she had lived in at nineteen.', pos: 'tl' }] }),
        c(1, { id: 'p14-2', aspect: 'square', chars: [],
        prompt: 'A memory: a paper coffee cup held in two hands, seen from slightly above, in a long hospital corridor that stretches away behind it into soft light. The two hands cup it from opposite sides, fingers side by side, thumbs resting on the front, NOT interlaced and NOT crossing over each other; each hand has four fingers and a thumb. Knit sweater cuffs at the wrists. Edges dissolving into white paper.',
        cap: [{ t: 'A hospital corridor. Bad coffee in a paper cup. A voice saying her name.', pos: 'bl' }] })),
      P(1.5, c(1, { id: 'p14-3', aspect: 'wide', chars: [],
        prompt: 'A memory: a winter beach, rocks slick with ice, a long scarf whipping sideways in a hard wind, a young girl turning back to look toward the viewer, her face bright and open. The scarf is the only solid black shape in the panel. Edges dissolving into white paper.',
        cap: [{ t: 'A girl turning back to look at her, face bright with something immediate and familiar.', pos: 'bl' }] })),
      P(1, c(1, { id: 'p14-4', aspect: 'square', chars: [],
        prompt: 'A memory: a set of keys falling into an open palm. Edges dissolving into white paper.' }),
        c(1, { id: 'p14-5', aspect: 'square', chars: [],
        prompt: 'A memory: a woman seen from behind leaning over a kitchen sink, shoulders hunched as if in grief. Edges dissolving into white paper.' }),
        c(1, { id: 'p14-6', aspect: 'square', chars: [],
        prompt: 'A memory: a bedroom door standing half open onto darkness, a stove light glowing nearby. Edges dissolving into white paper.' })),
      P(0.45, c(1, { id: 'p14-7', black: true,
        cap: [{ t: 'It began to lift. Not the images. The thing inside them.', pos: 'center' }] })),
    ] },

    // ---------------------------------------------------------------- 15
    { n: 15, comic: true, rows: [
      P(1.6, c(1, { id: 'p15-1', aspect: 'wide', chars: ['figure'],
        prompt: 'The only clear view of the figure\'s face in the chapter: a headlamp beam sweeping across it for an instant. A perfectly symmetrical pale face, eyes set exactly where they should be and looking too directly at the viewer, mouth closed, a stillness no human face could hold, the surface smooth like porcelain. Calm. Absolutely still. Surrounded by solid black.',
        cap: [{ t: 'Features learned from observation rather than born to them.', pos: 'bl' }] })),
      P(1, c(1, { id: 'p15-2', aspect: 'square', chars: [],
        prompt: 'A headlamp beam striking the steel face of a server rack, glare and hard metal, nothing else.',
        cap: [{ t: 'Then the beam hit the rack and all she saw was steel.', pos: 'bl' }] }),
        c(1.3, { id: 'p15-3', aspect: 'wide', chars: [],
        prompt: 'A memory: two young sisters sitting side by side on an old wooden staircase with their shoulders touching, rain on a window above them. The smaller, younger girl is turned toward her older sister, mouth open mid-sentence, talking fast and earnestly, waiting for an answer; both of her arms are wrapped around her drawn-up knees, hands clasped and mostly hidden by her sweater sleeves. The older sister listens with her chin on one loosely closed fist. Keep every visible hand simple, relaxed and anatomically correct. Edges dissolving into white paper.',
        cap: [{ t: 'The smaller one saying something fast and earnest and waiting for an answer.', pos: 'tl' }, { t: 'That too began to lift.', pos: 'br' }] })),
      P(1.1, c(1, { id: 'p15-4', aspect: 'wide', chars: ['iris'],
        prompt: 'Extreme close-up of Iris\'s eyes and brow, perfectly still, held in a calm that is not hers, lit flat from below. The lines of the drawing thinning out toward white.',
        cap: [{ t: 'No, Iris thought.', pos: 'tl' }, { t: 'Or meant to think.', pos: 'br' }] })),
    ] },

    // ---------------------------------------------------------------- 16
    { n: 16, comic: true, rows: [
      P(0.6, c(1, { id: 'p16-1', black: true,
        cap: [{ t: 'Then the second ended.', pos: 'center' }] })),
      P(1.6, c(1, { id: 'p16-2', aspect: 'wide', chars: ['iris'],
        prompt: 'Iris on one knee beside her open backpack at the near end of the archive room, breathing hard, one glove off and on the floor, her portable terminal folded halfway shut beside her, her headlamp lying on the concrete by her knee. Ordinary light bands overhead.',
        sfx: [{ t: 'SNAP', pos: 'tr' }],
        cap: [{ t: 'She was on one knee beside her open pack.', pos: 'bl' }] })),
      P(1, c(1, { id: 'p16-3', reuse: 'p08-3', aspect: 'square', chars: [],
        prompt: 'Extreme close-up of the corner of a terminal screen showing only a plain blank clock area, glowing in black.',
        screen: { lines: ['14:41'], pos: 'center', style: 'clock' } }),
        c(1.3, { id: 'p16-4', aspect: 'wide', chars: ['iris'],
        prompt: 'Iris kneeling, staring down at the terminal screen, her bare hand at her wrist, face flat and unreadable.',
        cap: [{ t: 'She stared at it longer than she needed to.', pos: 'tl' }] })),
    ] },

    // ---------------------------------------------------------------- 17
    { n: 17, comic: true, rows: [
      P(1, c(1, { id: 'p17-1', aspect: 'wide', chars: [],
        prompt: 'The same server archive as the location reference, seen from near its open double doors, now looking completely ordinary: rows of tall racks, only every third ceiling light lit, laying bands of white light over the rack tops with the aisles between them in shadow, small status lights, dry dusty floor. No wall visible at the back, no figure, nothing unusual at all. No people.',
        cap: [{ t: 'Racks. Lights. Dust. Nothing else.', pos: 'br' }] }),
        c(1, { id: 'p17-2', aspect: 'square', chars: [],
        prompt: 'A dim institutional hallway floor with a single trail of faint boot prints in the thin dust, where there had been none before. The freight elevator half open around darkness in the background.',
        cap: [{ t: 'Her own boot prints faint in the dust where there had been none when she entered.', pos: 'tl' }] })),
      P(1.3, c(1, { id: 'p17-3', aspect: 'wide', chars: ['iris'],
        prompt: 'Outside the research building, Iris standing under the concrete loading overhang with her pack hanging from one hand, looking out. Fine mist drifts across the gravel lot. Across the lot, the chain-link perimeter fence runs unbroken from one side of the frame to the other, intact and closed, except for one small person-sized opening cut into it, the cut wire curled inward, the same cut fence as page 1. There is no gate and no wide gap. Beyond the fence, outside the perimeter, her work van is parked on the road shoulder facing the road. Low, heavy clouds.',
        cap: [{ t: 'Everything accounted for.', pos: 'br' }] })),
      P(1.3, c(1, { id: 'p17-4', aspect: 'wide', chars: ['iris'],
        prompt: 'Inside the van cab, Iris sitting in the driver\'s seat, engine off, both hands resting on the steering wheel at ten and two, staring ahead through the windshield. Her pack on the passenger seat.',
        cap: [{ t: 'There was a gap.', pos: 'tl' }, { t: 'She could name that much.', pos: 'br' }] })),
    ] },

    // ---------------------------------------------------------------- 18
    { n: 18, comic: true, rows: [
      P(1.2, c(1, { id: 'p18-1', aspect: 'wide', chars: [],
        prompt: 'A small work van on a road through an industrial coastline: storage tanks, crane arms, warehouses, flattened scrub grass, the water visible in broken sections. Overcast.',
        cap: [{ t: 'She drove on habit.', pos: 'tl' }] })),
      P(1, c(1, { id: 'p18-2', aspect: 'square', chars: ['iris'],
        prompt: 'Close-up inside a van at a red light: a gloved hand reaching into the cup holder past an old water bottle and finding a printed photograph tucked underneath it.',
        cap: [{ t: 'She reached into the cup holder for the old bottle of water and found a photograph underneath it.', pos: 'bl' }] }),
        c(1.3, { id: 'p18-3', aspect: 'wide', chars: ['lena', 'iris'],
        prompt: 'A printed photograph with soft, worn, rounded corners fills the frame. In it, two sisters sit on a seawall in summer, wind moving their hair, bright sea behind them. On the left, the older sister (Iris, loose windblown hair, a plain summer shirt) looks straight at the camera with a reserved, closed-mouth, almost neutral expression, NOT smiling, just the faintest hint at the corner of her mouth. On the right, her younger sister in her late twenties, softer rounder face, hair down and blowing, leans in against her shoulder laughing with a wide open smile, as if the person behind the camera just said something stupid on purpose. The contrast between the two expressions is the point. Drawn lighter and gentler than the rest of the chapter, with much more white.' })),
      P(1.3, c(1, { id: 'p18-4', aspect: 'wide', chars: ['iris'],
        prompt: 'Iris in the driver\'s seat holding a photograph in one hand, looking at it, the red light reflected on the windshield as a dark glow. Her face shows recognition and nothing else.',
        cap: [{ t: 'Her sister.', pos: 'tl' }, { t: 'Lena.', pos: 'tl' }, { t: 'Iris knew that immediately.', pos: 'br' }] })),
    ] },

    // ---------------------------------------------------------------- 19
    { n: 19, comic: true, rows: [
      P(1.2, c(1, { id: 'p19-1', aspect: 'wide', chars: [],
        prompt: 'Inside the van: a photograph propped on the dashboard, rain streaking the windshield beyond it, wiper blades mid-sweep, blurred city lights.',
        cap: [{ t: 'Lena. Her sister. The words remained true.', pos: 'tl' }, { t: 'She waited for what should have followed them.', pos: 'br' }] })),
      P(1, c(1, { id: 'p19-2', aspect: 'wide', chars: ['iris'],
        prompt: 'Close-up of Iris\'s face in profile behind the wheel, rain light running across it, expression completely still and level. Not sad. Not numb. Empty.',
        cap: [{ t: 'Nothing came.', pos: 'br' }] })),
      P(1.8, c(1, { id: 'p19-3', aspect: 'wide', chars: ['iris'],
        prompt: 'Final panel. A wet parking lot outside a tired brick apartment building with rusting fire escapes, rain falling in fine ink lines. The van parked, a faint pale rectangle of the photograph visible on the dashboard through the windshield. Iris small, walking away from the van toward the building door with her pack, not looking back.',
        cap: [{ t: 'Then she took the pack, left the photo where it was, and went inside.', pos: 'bl' }] })),
    ] },
  ],
};
