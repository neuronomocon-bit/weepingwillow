// Short per-panel prompt for an ongoing ChatGPT conversation (reference sheets already uploaded there).
// node tools-prompt2.js ch02-caleb-ward p05-4   |   node tools-prompt2.js ch02-caleb-ward --missing
const fs = require('fs'), path = require('path');
const ch = process.argv[2], CH = path.join(__dirname, ch), data = require(path.join(CH, 'panels.js'));
const all = data.pages.flatMap((p) => p.rows.flatMap((r) => r.panels)).filter((p) => !p.black);
const has = (id) => ['png', 'jpg', 'jpeg', 'webp'].some((e) => fs.existsSync(path.join(CH, 'art', `${id}.${e}`)));
if (process.argv[3] === '--missing') { console.log(all.filter((p) => !has(p.id)).map((p) => p.id).join(' ')); process.exit(); }
const p = all.find((x) => x.id === process.argv[3]);
const fmt = { wide: 'landscape 3:2', tall: 'portrait 2:3', square: 'square 1:1' }[p.aspect];
const who = { iris: 'Same Iris as her reference sheet (sharp angular face, dark hair in a low loose knot, heavy dark field jacket with the collar up, plain canvas backpack, dark cargo trousers). Her face is always flat and calm: brows relaxed and level, never frowning, never glaring.',
  leah: 'Same Leah as her reference sheet (mid-thirties, brown hair pulled back loosely, long oatmeal knit cardigan over a dark t-shirt, faded jeans, socks; warm, worried, expressive face).',
  joel: 'Same Joel as his reference sheet (early forties, sturdy, close-cropped dark hair graying at the temples, clean-shaven, plain gray long-sleeved henley, dark work trousers; calm, pleasant, expressionless face, perfectly still).',
  caleb: 'Same Caleb as his reference sheet (curly dark hair, stubble, worn canvas work jacket over a dark t-shirt, plain BLUE JEANS, never cargo trousers, work boots).' };
const pg = +p.id.slice(1, 3);
if (ch === 'ch02-caleb-ward' && pg >= 5 && pg <= 14) who.iris = who.iris.replace('plain canvas backpack, ', '') + ' Her backpack is OFF (set down on the floor), not on her back.';
if (ch === 'ch03-the-first-case') who.iris = who.iris.replace('plain canvas backpack, ', '') + ' No backpack in this chapter.';
const people = (p.chars || []).map((c) => who[c]).join(' ');
const SHORT = process.argv.includes('--short');
console.log([`Generate one single image only, ${fmt}, in this chapter's bold noir comic ink style: solid black shadows, clean contours, no stipple, no gray, simple even face lighting with clear features (both eyes, brows, nose and a visible mouth), natural hands with five fingers, no text anywhere.`,
  people, `SCENE: ${p.prompt}`].filter(Boolean).join(' '));
