// Prints the full prompt for a panel or ref id on one line: node tools-prompt.js p01-1
const { fullPrompt, data, allPanels } = require('./build.js');
const all = [...data.refs, ...allPanels()];
const ctx = process.argv.includes('--ctx');
for (const id of process.argv.slice(2).filter((a) => a !== '--ctx')) {
  const p = all.find((x) => x.id === id);
  if (!p) { console.error('no such id: ' + id); continue; }
  console.log('Generate one image. ' + (ctx ? 'Match the reference sheets earlier in this conversation exactly: same ink style, same Iris, same figure. ' : '') + fullPrompt(p).replace(/\n+/g, ' '));
}
