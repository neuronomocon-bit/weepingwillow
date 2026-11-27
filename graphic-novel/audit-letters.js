#!/usr/bin/env node
// Lettering audit: renders every page with balloons and captions drawn as see-through red
// outlines, so whatever the lettering covers (faces above all) is visible underneath.
//   node audit-letters.js ch02-caleb-ward          -> every page
//   node audit-letters.js ch02-caleb-ward 6 11     -> only those pages
// Output: <chapter>/renders/audit/page-NN.png (gitignored with the other renders).
// Added 2026-11-27 after the author found balloons over faces on the Ch2 pages.
const fs = require('fs');
const path = require('path');
const os = require('os');
const { execFileSync } = require('child_process');

const argv = process.argv.slice(2);
const CHAPTER = argv.find((a) => /^ch\d\d-/.test(a)) || 'ch01-the-gap';
const CH = path.join(__dirname, CHAPTER);
const CHROME = 'C:/Program Files/Google/Chrome/Application/chrome.exe';

execFileSync(process.execPath, [path.join(__dirname, 'build.js'), CHAPTER], { stdio: 'inherit' });

const css = `<style id="audit">
  .bal, .cap, .screen { background: rgba(255,0,0,0.06) !important; color: rgba(200,0,0,0.55) !important;
    border-color: #f00 !important; box-shadow: none !important; outline: 2px solid #f00; }
  .bal::before, .bal::after { border-top-color: #f00 !important; opacity: .6; }
</style>`;
const html = fs.readFileSync(path.join(CH, 'pages.html'), 'utf8').replace('</head>', css + '</head>');
const auditHtml = path.join(CH, 'pages-audit.html');
fs.writeFileSync(auditHtml, html);

const data = require(path.join(CH, 'panels.js'));
const pages = argv.filter((a) => /^\d+$/.test(a)).map(Number);
const list = pages.length ? pages : data.pages.map((p) => p.n);
const outDir = path.join(CH, 'renders', 'audit');
fs.mkdirSync(outDir, { recursive: true });
const url = 'file:///' + auditHtml.split(path.sep).join('/');
const base = ['--headless=new', '--disable-gpu', '--hide-scrollbars',
  `--user-data-dir=${path.join(os.tmpdir(), 'gn-chrome-profile')}`, '--allow-file-access-from-files'];
for (const n of list) {
  const out = path.join(outDir, `page-${String(n).padStart(2, '0')}.png`);
  const since = Date.now() - 1;
  execFileSync(CHROME, [...base, '--force-device-scale-factor=1.5', '--window-size=636,984',
    '--virtual-time-budget=4000', `--screenshot=${out}`, `${url}?p=${n}`], { stdio: 'ignore' });
  const end = Date.now() + 20000;
  while (Date.now() < end && !(fs.existsSync(out) && fs.statSync(out).mtimeMs > since)) {
    execFileSync(process.execPath, ['-e', 'setTimeout(()=>{},300)']);
  }
  console.log('audit', path.relative(__dirname, out));
}
fs.unlinkSync(auditHtml);
