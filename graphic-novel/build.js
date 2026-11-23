#!/usr/bin/env node
// Builds script.md, prompts.md and pages.html from ch01-the-gap/panels.js.
// The style and character blocks live HERE and only here; every prompt gets them verbatim.

const fs = require('fs');
const path = require('path');

const CH = path.join(__dirname, 'ch01-the-gap');
const data = require(path.join(CH, 'panels.js'));

const STYLE_BLOCK =
  'Black and white ink illustration for a gothic horror graphic novel, in an original style. ' +
  'Pure black ink on white paper: no color, no gray wash, no gradients, no digital airbrush. ' +
  'Midtones built only from hatching, crosshatching, stippling and dry-brush texture. ' +
  'Heavy spotted solid blacks covering at least a third of the image, stark white highlights carved out of the black, ' +
  'crisp nib and brush linework with feathered edges, scratchy texture in fog, dust and concrete. ' +
  'High contrast chiaroscuro. Quiet, still, restrained dread; no gore, no glowing eyes, no lens flare. ' +
  'Cinematic comic panel composition. Absolutely no text, letters, numbers, captions, speech balloons, ' +
  'panel borders, signatures or watermarks anywhere in the image.';

// Once the reference sheets and a few pages are in the same ChatGPT conversation, this shorter
// reminder holds the style as well as the full block and is faster to send. Used from p10-1 on.
const CONTINUATION_BLOCK =
  'in the same black and white ink style as the earlier images: pure black ink on white paper, no color, ' +
  'no gray wash, hatching and crosshatching, heavy solid blacks, stark white highlights, crisp linework, high contrast. No text anywhere.';

// Memory panels (p14, p15-3) use a deliberately softer variant.
const MEMORY_BLOCK =
  'drawn softer and lighter, a memory: fine black ink line and hatching on white paper, no color, no gray wash, ' +
  'the edges fading out into blank white paper as if dissolving. No text anywhere.';

const CHAR_BLOCKS = {
  iris:
    'IRIS: a lean woman in her early thirties with a sharp angular face, high cheekbones, straight dark brows and a narrow still mouth; ' +
    'dark hair pulled back in a low loose knot with a few strands fallen forward; wearing a heavy dark waxed-canvas field jacket with the collar turned up ' +
    'and a zipped chest pocket, dark work gloves ending at the wrist, dark cargo trousers, worn boots, a canvas backpack. Watchful, controlled, unreadable expression.',
  figure:
    'THE FIGURE: female-coded and almost human, a little too tall and a little too narrow, limbs slightly too long; a pale seamless surface like cool porcelain or wet stone, ' +
    'smoother than skin, with no veins, pores, wrinkles or knuckle creases; short dark hair lost in shadow; wearing a plain dark long coat that falls below the knee; perfectly symmetrical face with features that look learned rather than born, eyes too direct, mouth closed, no expression. ' +
    'Utterly still. Never claws, teeth, tendrils, horns, glowing eyes or anything monstrous.',
  lena:
    'LENA (the younger sister in the photograph): a woman in her late twenties, hair down and moving in the wind, a wide open smile, leaning in toward her sister.',
};

const ASPECT = {
  wide: 'Landscape format, 3:2.',
  tall: 'Portrait format, 2:3.',
  square: 'Square format, 1:1.',
};

const fullPrompt = (p) =>
  [ASPECT[p.aspect], STYLE_BLOCK, ...(p.chars || []).map((c) => CHAR_BLOCKS[c]), 'SCENE: ' + p.prompt].join('\n\n');

const allPanels = () => data.pages.flatMap((pg) => pg.rows.flatMap((r) => r.panels.map((p) => ({ ...p, page: pg.n }))));

const artFile = (id) => {
  for (const ext of ['png', 'jpg', 'jpeg', 'webp']) {
    const f = path.join(CH, 'art', `${id}.${ext}`);
    if (fs.existsSync(f)) return `art/${id}.${ext}`;
  }
  return null;
};
const refFile = (id) => {
  for (const ext of ['png', 'jpg', 'jpeg', 'webp']) {
    if (fs.existsSync(path.join(__dirname, 'refs', `${id}.${ext}`))) return `../refs/${id}.${ext}`;
  }
  return null;
};

// ------------------------------------------------------------ script.md
function buildScript() {
  const out = [`# ${data.title} — ${data.chapter}`, '', '_Generated from `panels.js`. Do not edit by hand._', ''];
  for (const pg of data.pages) {
    const ps = pg.rows.flatMap((r) => r.panels);
    out.push(`## PAGE ${pg.n} (${ps.length} panel${ps.length > 1 ? 's' : ''})`, '');
    ps.forEach((p, i) => {
      out.push(`**Panel ${i + 1}** \`${p.id}\`${p.black ? ' · solid black' : ` · ${p.aspect}`}`, '');
      if (p.prompt) out.push(p.prompt, '');
      for (const c of p.cap || []) out.push(`> CAPTION: ${c.t}`);
      if (p.screen) out.push(`> ${p.screen.style === 'sign' ? 'SIGN' : 'SCREEN'}: ${p.screen.lines.join(' / ')}`);
      for (const s of p.sfx || []) out.push(`> SFX: ${s.t}`);
      out.push('');
    });
  }
  fs.writeFileSync(path.join(CH, 'script.md'), out.join('\n'));
}

// ------------------------------------------------------------ prompts.md
function buildPrompts() {
  const out = ['# Prompts — Ch1 pilot', '', '_Generated from `panels.js` + the blocks in `build.js`. Do not edit by hand._', '',
    '## The locked style block', '', '```', STYLE_BLOCK, '```', '',
    '## Continuation block (same conversation, after the references)', '', '```', CONTINUATION_BLOCK, '```', '',
    '## Memory block (p14, p15-3)', '', '```', MEMORY_BLOCK, '```', ''];
  const section = (title, list, has) => {
    out.push(`## ${title}`, '');
    for (const p of list) {
      out.push(`### \`${p.id}\` ${has(p.id) ? '✅' : '⬜'}`, '', '```', fullPrompt(p), '```', '');
    }
  };
  section('Reference sheets', data.refs, refFile);
  section('Panels', allPanels().filter((p) => !p.black && !p.reuse), artFile);
  fs.writeFileSync(path.join(CH, 'prompts.md'), out.join('\n'));
}

// ------------------------------------------------------------ pages.html
const esc = (s) => s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');

const inkFile = (id) => (fs.existsSync(path.join(CH, 'ink', `${id}.png`)) ? `ink/${id}.png` : null);

// Hand-drawn panel border: a slightly wobbly rectangle, the same for a given panel every build.
function roughBorder(id, cls = 'bd') {
  let seed = [...id].reduce((a, ch) => (a * 31 + ch.charCodeAt(0)) >>> 0, 7);
  const rnd = () => ((seed = (seed * 1664525 + 1013904223) >>> 0) / 4294967296) - 0.5;
  const side = (x0, y0, x1, y1) => {
    const pts = [];
    for (let i = 0; i < 6; i++) {
      const t = i / 6;
      pts.push(`${(x0 + (x1 - x0) * t + rnd() * 0.5).toFixed(2)},${(y0 + (y1 - y0) * t + rnd() * 0.5).toFixed(2)}`);
    }
    return pts;
  };
  const pts = [...side(0.6, 0.6, 99.4, 0.6), ...side(99.4, 0.6, 99.4, 99.4), ...side(99.4, 99.4, 0.6, 99.4), ...side(0.6, 99.4, 0.6, 0.6)];
  return `<svg class="${cls}" viewBox="0 0 100 100" preserveAspectRatio="none"><polygon points="${pts.join(' ')}"/></svg>`;
}

function panelHtml(p, comic) {
  const groups = {};
  for (const c of p.cap || []) (groups[c.pos] ||= []).push(`<div class="cap">${esc(c.t)}</div>`);
  if (p.screen) (groups[p.screen.pos] ||= []).push(
    `<div class="screen ${p.screen.style || ''}">${p.screen.lines.map(esc).join('<br>')}</div>`);
  const sfx = (p.sfx || []).map((s) => `<div class="sfx sfx-${s.pos}">${esc(s.t)}</div>`).join('');
  const letters = Object.entries(groups).map(([pos, items]) => `<div class="g g-${pos}">${items.join('')}</div>`).join('');

  let art;
  if (p.black) art = '';
  else {
    const f = (comic && inkFile(p.reuse || p.id)) || artFile(p.reuse || p.id);
    art = f
      ? `<img src="${f}" style="object-position:${p.focus || 'center'}" alt="">`
      : `<div class="ph"><b>${p.id}</b><span>${esc(p.prompt.slice(0, 140))}…</span></div>`;
  }
  const bleed = comic ? p.bleed || [] : [];
  const pad = { top: '0.42in', left: '0.38in', right: '0.38in', bottom: '0.5in' };
  const margins = bleed.map((e) => `margin-${e}:-${pad[e]}`).join(';');
  const border = comic && !bleed.length ? roughBorder(p.id) : '';
  const cls = ['panel', p.black ? 'black' : '', bleed.length ? 'bleed' : ''].filter(Boolean).join(' ');
  return `<div class="${cls}" style="flex:${p.w} 1 0;${margins}">${art}${letters}${sfx}${border}</div>`;
}

function buildPages() {
  const total = allPanels().filter((p) => !p.black);
  const done = total.filter((p) => artFile(p.reuse || p.id)).length;
  const pages = data.pages.map((pg) =>
    `<section class="page${pg.memory ? ' memory' : ''}${pg.comic ? ' comic' : ''}" data-n="${pg.n}"><div class="rows">${pg.rows
      .map((r) => `<div class="row" style="flex:${r.h} 1 0">${r.panels.map((p) => panelHtml(p, pg.comic)).join('')}</div>`)
      .join('')}</div><div class="folio">${pg.n}</div></section>`).join('\n');

  const html = `<!DOCTYPE html>
<html lang="en"><head><meta charset="utf-8">
<title>${esc(data.title)} — ${esc(data.chapter)} (graphic novel pilot)</title>
<style>
  @page { size: 6.625in 10.25in; margin: 0; }
  * { box-sizing: border-box; }
  body { margin: 0; background: #2a2a2a; font-family: "Palatino Linotype", Palatino, Georgia, serif; }
  .status { color: #bbb; font: 13px system-ui, sans-serif; text-align: center; padding: 14px; }
  .page { width: 6.625in; height: 10.25in; margin: 24px auto; background: #fff; position: relative;
          padding: 0.42in 0.38in 0.5in; box-shadow: 0 4px 24px rgba(0,0,0,.5); page-break-after: always; overflow: hidden; }
  .rows { display: flex; flex-direction: column; gap: 0.12in; height: 100%; }
  .row { display: flex; gap: 0.12in; min-height: 0; }
  .panel { position: relative; border: 2.5px solid #000; overflow: hidden; background: #fff; min-width: 0; }
  .panel img { width: 100%; height: 100%; object-fit: cover; display: block; }
  .panel.black { background: #000; }
  .memory .panel { border-style: dashed; border-color: #444; }
  .ph { position: absolute; inset: 0; display: flex; flex-direction: column; gap: 6px; padding: 10px;
        background: repeating-linear-gradient(45deg, #f2f2f2 0 6px, #e4e4e4 6px 12px); color: #777; font: 9px/1.3 system-ui, sans-serif; }
  .ph b { font-size: 11px; color: #333; }
  .g { position: absolute; display: flex; flex-direction: column; gap: 5px; max-width: 72%; z-index: 2; }
  .g-tl { top: 7px; left: 7px; } .g-tr { top: 7px; right: 7px; align-items: flex-end; }
  .g-bl { bottom: 7px; left: 7px; } .g-br { bottom: 7px; right: 7px; align-items: flex-end; }
  .g-top { top: 7px; left: 50%; transform: translateX(-50%); align-items: center; }
  .g-bottom { bottom: 9px; left: 50%; transform: translateX(-50%); align-items: center; }
  .g-center { top: 50%; left: 50%; transform: translate(-50%, -50%); align-items: center; max-width: 82%; }
  .cap { background: #fff; border: 1.5px solid #000; padding: 4px 7px; font-size: 9.5pt; line-height: 1.28;
         letter-spacing: .01em; box-shadow: 2px 2px 0 #000; }
  .black .cap { background: #000; color: #fff; border: 0; box-shadow: none; font-style: italic; font-size: 11pt; text-align: center; }
  .screen { background: #000; color: #fff; border: 1.5px solid #fff; outline: 1.5px solid #000; padding: 5px 8px;
            font: 7.5pt/1.35 "Consolas", "Courier New", monospace; letter-spacing: .06em; }
  .screen.clock { font-size: 26pt; letter-spacing: .1em; padding: 4px 12px; }
  .screen.sign { background: #fff; color: #000; border: 2px solid #000; outline: 0; font: bold 8pt/1.4 "Arial Narrow", Arial, sans-serif;
                 letter-spacing: .14em; text-align: center; }
  .sfx { position: absolute; z-index: 2; font: italic 900 26pt/1 "Impact", "Arial Black", sans-serif; color: #fff;
         -webkit-text-stroke: 1.5px #000; letter-spacing: .04em; transform: rotate(-6deg); }
  .sfx-tl { top: 10px; left: 12px; } .sfx-tr { top: 10px; right: 12px; }
  .sfx-bl { bottom: 10px; left: 12px; } .sfx-br { bottom: 10px; right: 12px; }
  .folio { position: absolute; bottom: 0.18in; width: 100%; left: 0; text-align: center; font-size: 8pt; color: #555; }
  .cover { background: #000; color: #eee; display: flex; flex-direction: column; justify-content: center; align-items: center; text-align: center; }
  .cover .s { letter-spacing: .5em; font-size: 10pt; color: #999; } .cover h1 { font-weight: normal; font-size: 44pt; margin: 14px 0; letter-spacing: .06em; }
  .cover .c { font-style: italic; color: #bbb; } .cover .a { margin-top: 2.2in; font-size: 10pt; letter-spacing: .3em; color: #888; }
  /* ---- comic pages: ink art, hand-drawn borders, comic lettering ---- */
  .comic .panel { border: 0; }
  .comic .panel.bleed { border: 0; }
  .comic .bd { position: absolute; inset: 0; width: 100%; height: 100%; z-index: 3; pointer-events: none; overflow: visible; }
  .comic .bd polygon { fill: none; stroke: #000; stroke-width: 3px; stroke-linejoin: round; vector-effect: non-scaling-stroke; }
  .comic .cap { font-family: "Ink Free", "Segoe Print", "Comic Sans MS", cursive; font-weight: bold; text-transform: uppercase;
                font-size: 8.6pt; line-height: 1.22; letter-spacing: .03em; padding: 5px 8px 4px; background: #fff;
                border: 2px solid #000; box-shadow: none; border-radius: 3px 9px 4px 11px / 10px 3px 12px 4px; }
  .comic .black .cap { background: #000; color: #fff; border: 0; }
  .comic .g-tl { top: 9px; left: 9px; } .comic .g-tr { top: 9px; right: 9px; }
  .comic .g-bl { bottom: 9px; left: 9px; } .comic .g-br { bottom: 9px; right: 9px; }
  .comic .bleed .g-tl { top: 0.5in; left: 0.46in; } .comic .bleed .g-tr { top: 0.5in; right: 0.46in; }
  .solo { background: #fff; } .solo .status { display: none; } .solo .page { margin: 0; box-shadow: none; }
  @media print { body { background: #fff; } .status { display: none; } .page { margin: 0; box-shadow: none; } }
</style></head><body>
<div class="status">Ch1 pilot · ${data.pages.length} pages · art ${done}/${total.length} panels · generated from panels.js</div>
<section class="page cover"><div class="s">WEEPING WILLOW</div><h1>THE ABSENCE</h1><div class="c">Chapter One · The Gap</div><div class="a">KRISTOPHER MICHAEL</div></section>
${pages}
<script>
  // pages.html?p=3 shows page 3 alone at print size (used by render.js)
  const m = location.search.match(/p=([0-9]+)/);
  if (m) { document.body.classList.add('solo');
    document.querySelectorAll('section.page, .status').forEach((s) => { if (s.dataset.n !== m[1]) s.remove(); }); }
</script>
</body></html>`;
  fs.writeFileSync(path.join(CH, 'pages.html'), html);
  return { done, total: total.length };
}

module.exports = { fullPrompt, data, allPanels, STYLE_BLOCK, CONTINUATION_BLOCK, MEMORY_BLOCK };
if (require.main !== module) return;

buildScript();
buildPrompts();
const { done, total } = buildPages();
console.log(`Pages: ${data.pages.length} · panels with art: ${done}/${total} · refs: ${data.refs.filter((r) => refFile(r.id)).length}/${data.refs.length}`);
console.log('Wrote script.md, prompts.md, pages.html');
