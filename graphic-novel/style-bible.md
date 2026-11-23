# Style Bible — Drift Controls

**The art drifts in four ways: style (toward gray painterly or photoreal), character (Iris's face and kit), the figure (toward a stock monster), and text (the model inventing lettering).** Each has a control below. `build.js` prepends the locked blocks to every prompt automatically, so the blocks below are the only place they are written.

## 1. THE LOCKED STYLE BLOCK

Prepended verbatim to every panel prompt. Never paraphrase it per panel.

> STYLE_BLOCK lives in `build.js` as a constant and is printed at the top of `prompts.md`.

What it commits to:

- **Pure black ink on white paper.** No color, no gray wash, no gradients. Midtones are made from hatching, crosshatching, stipple and dry-brush only.
- **Heavy spotted blacks.** At least a third of every panel is solid black. Darkness is ink, not gray.
- **Gothic horror graphic novel, original style.** Crisp nib and brush line, feathered edges, scratchy texture in fog, dust and concrete. Stark white highlights carved out of black.
- **No text, letters, numbers, speech balloons, captions, panel borders, signatures or watermarks** in the image, unless the panel prompt explicitly asks for a sign.
- **Restraint.** No gore, no spectacle, no glowing eyes, no lens flare. The horror is in stillness and wrong geometry.

## 2. CHARACTER SHEETS

### IRIS VALE (Book 1, Ch1)
Woman, early thirties, lean. Sharp angular face, high cheekbones, straight dark brows, narrow mouth that rarely moves. Dark hair pulled back into a low loose knot, a few strands fallen forward. **Heavy dark waxed-canvas field jacket, collar turned up, zipped chest pocket**, dark work gloves that end at the wrist, dark cargo trousers, worn boots, canvas backpack. A small headlamp **clipped to the RIGHT side of her jacket collar (her own right) until page 10, worn on a band around her head after.** In a reflection it shows on the opposite side of the image. Expression: watchful, controlled, unreadable.

### THE FIGURE (Willow, as glimpsed in Ch1)
**Seen only in pieces: a pale vertical shape, a hand, one instant of a face.** Female-coded, almost human, a little too tall and a little too narrow, limbs slightly too long. Surface like cool porcelain or wet stone, faint seamless sheen, smoother than skin. Dark short hair lost in shadow. **A plain dark long coat below the knee** (the coat Book 2's witnesses all agree on). Face perfectly symmetrical, features learned rather than born, eyes looking too directly, mouth closed, no expression at all. **Never claws, teeth, tendrils, glowing eyes, or anything monstrous.** The wrongness is in the economy and the stillness.

### LENA VALE (in the photograph only)
Woman in her late twenties, hair down and moving in wind, open wide smile, leaning in toward her sister's shoulder.

## 3. LOCATION SHEETS

- **Meridian exterior.** Low concrete bunker-like building on a coastal bluff, narrow slit windows, rust at the seams, salt crust, one peeled section of exterior paneling. Chain-link fence with a cut opening curled inward. Gravel lot, weeds, standing water. Flat overcast sky over a gray ocean.
- **Upper corridor.** Institutional tile, painted walls, framed notices, two weak fixtures far down, offices with narrow windows. Thin even dust and nothing else.
- **Server archive.** Long rows of tall server racks, **only every third ceiling fixture lit**, so long bands of white over the rack tops and the aisles between in black. Small status lights. Cable bundles. Open containment cages.

## 4. GENERATION PROCEDURE

1. **Start every ChatGPT session by uploading the reference sheets in `refs/`** and pasting the style block. One conversation per page at most, so the model's context is short and the references are recent.
2. **Generate the references first** (`refs` panels in `panels.js`) and approve them before any page art.
3. **One panel per generation.** Ask for the aspect the panel needs (wide, tall, square). Layout crops with `object-fit: cover`; each panel has a `focus` setting for where to crop.
4. **Reject on sight:** any gray wash or color, any text the prompt did not ask for, Iris without the collar-up jacket, the figure with any monster feature, a face on the figure before page 15.
5. Save as `ch01-the-gap/art/<panel id>.png`. Rebuild and read the page, not the single image. A panel is approved on the page.

## 5. WHAT THE PILOT RUN TAUGHT (2026-11-22)

- **One long ChatGPT conversation is the strongest drift control.** The three reference sheets went in first, and every panel after them was generated in the same conversation. Iris's face, knot, jacket and pack held across 60+ panels without uploading anything.
- **After about 30 panels the full style block stopped being necessary.** The shorter `CONTINUATION_BLOCK` in `build.js` held the look just as well. The memory panels use `MEMORY_BLOCK` on purpose.
- **The model leans toward graphite grays, not pure ink.** Skies and fog come out as soft gray tone despite "no gray wash". It reads as black-and-white and was accepted for the pilot. **A hand redraw, or a threshold pass, would make it true ink.**
- **Clothing drift is the main character drift.** Iris's trousers came out camouflage once (p06-1). The face held.
- **ChatGPT's guardrail refused two harmless panels:** a door bolt (probably read as defeating a lock) and an empty office. Both passed when reworded as still lifes; the wording that passed is in `panels.js`.
- **Ask for "one single image only".** Without it, ChatGPT sometimes returns two variants.
- **Wet floors are the recurring scene drift.** The model makes every interior floor glossy and reflective. Where a caption is about dust, say so outright: *"completely dry and matte, covered in a thin film of pale dust, no reflections, no shine."*
- **"Impossible geometry" needs concrete instructions.** "Aisles that don't line up" came back as a normal aisle twice. What worked was naming the specific errors: more cabinets on one side than the other, floor tiles bending, light bands falling between racks, camera tilted.
- **To make something visible in the dark, say it is the brightest thing in the dark part of the image.** "Pale shape at the edge of the light" came back invisible twice.

## 6. THE COVER WILLOW VS. THE PANEL WILLOW (open decision)

The published cover and the concept art in `Dropbox\weepingwillow\` establish Willow's **true form**: a pale female face, a crown of tendrils radiating up from the head, a dark ribbed biomechanical body. **The Ch1 panels instead draw the near-human glimpse Book 1's text describes** (porcelain face, dark coat, "features learned from observation"). Both are defensible, since Ch1 never shows more than a hand and a face, but a reader holding the cover will notice. **Decide before Ch20 (the full reveal),** whether the panel figure grows toward the cover form or the cover form only appears on covers and splash pages.
