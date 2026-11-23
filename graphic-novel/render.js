#!/usr/bin/env node
// Files downloaded art, rebuilds, and renders pages to PNG for review.
//   node render.js            -> file downloads + rebuild + render every page that has art
//   node render.js 3 4        -> render only pages 3 and 4
//   node render.js pdf        -> print the whole chapter to ch01-the-gap/the-gap-pilot.pdf
const fs = require('fs');
const path = require('path');
const os = require('os');
const { execFileSync } = require('child_process');

const CH = path.join(__dirname, 'ch01-the-gap');
const DL = path.join(os.homedir(), 'Downloads');
const CHROME = 'C:/Program Files/Google/Chrome/Application/chrome.exe';

// 1. file anything named gn-<id>.<ext> in Downloads
for (const f of fs.readdirSync(DL)) {
  const m = f.match(/^gn-(ref-[a-z]+|p\d\d-\d+)\.(png|jpe?g|webp)$/);
  if (!m) continue;
  const dir = m[1].startsWith('ref-') ? path.join(__dirname, 'refs') : path.join(CH, 'art');
  fs.renameSync(path.join(DL, f), path.join(dir, `${m[1]}.${m[2]}`));
  console.log('filed', m[1]);
}

// 1b. warn if two panels hold the same image (a stale download filed under a new name)
{
  const seen = {};
  for (const f of fs.readdirSync(path.join(CH, 'art'))) {
    const h = require('crypto').createHash('md5').update(fs.readFileSync(path.join(CH, 'art', f))).digest('hex');
    if (seen[h]) console.log(`WARNING duplicate art: ${seen[h]} == ${f}`);
    seen[h] = f;
  }
}

// 2. rebuild
execFileSync(process.execPath, [path.join(__dirname, 'build.js')], { stdio: 'inherit' });

const url = 'file:///' + path.join(CH, 'pages.html').split(path.sep).join('/');
const args = process.argv.slice(2);
const base = ['--headless=new', '--disable-gpu', '--hide-scrollbars',
  `--user-data-dir=${path.join(os.tmpdir(), 'gn-chrome-profile')}`, '--allow-file-access-from-files'];

if (args[0] === 'pdf') {
  const out = path.join(CH, 'the-gap-pilot.pdf');
  const since = Date.now() - 1;
  execFileSync(CHROME, [...base, '--no-pdf-header-footer', '--virtual-time-budget=30000', `--print-to-pdf=${out}`, url], { stdio: 'ignore' });
  // Chrome can return before the file is written; full-size art makes this slow (~185 MB).
  const end = Date.now() + 120000;
  while (Date.now() < end && !(fs.existsSync(out) && fs.statSync(out).mtimeMs > since && fs.statSync(out).size > 0)) {
    execFileSync(process.execPath, ['-e', 'setTimeout(()=>{},500)']);
  }
  console.log(fs.existsSync(out) && fs.statSync(out).mtimeMs > since ? 'wrote' : 'TIMED OUT', out);
  process.exit(0);
}

// 3. render pages (636x984 css px = 6.625in x 10.25in at 96dpi)
fs.mkdirSync(path.join(CH, 'renders'), { recursive: true });
const data = require(path.join(CH, 'panels.js'));
const hasArt = (id) => ['png', 'jpg', 'jpeg', 'webp'].some((e) => fs.existsSync(path.join(CH, 'art', `${id}.${e}`)));
const pages = args.length
  ? args.map(Number)
  : data.pages.filter((pg) => pg.rows.some((r) => r.panels.some((p) => !p.black && hasArt(p.id)))).map((pg) => pg.n);
// Chrome on Windows can return before the screenshot is written, so wait for the file.
const waitFor = (f, since) => {
  const end = Date.now() + 20000;
  while (Date.now() < end) {
    if (fs.existsSync(f) && fs.statSync(f).mtimeMs > since && fs.statSync(f).size > 0) return true;
    execFileSync(process.execPath, ['-e', 'setTimeout(()=>{},300)']);
  }
  return false;
};
for (const n of pages) {
  const out = path.join(CH, 'renders', `page-${String(n).padStart(2, '0')}.png`);
  const since = Date.now() - 1;
  execFileSync(CHROME, [...base, '--force-device-scale-factor=1.5', '--window-size=636,984',
    '--virtual-time-budget=4000', `--screenshot=${out}`, `${url}?p=${n}`], { stdio: 'ignore' });
  console.log(waitFor(out, since) ? 'rendered' : 'TIMED OUT', path.relative(__dirname, out));
}
