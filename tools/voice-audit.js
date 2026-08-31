#!/usr/bin/env node
/*
 * voice-audit.js — the cross-book frequency comparison described in
 * series-bible/14-audit-method.md.
 *
 * Measures the drafted Book 2 chapters against the PUBLISHED Book 1 text and
 * reports raw counts plus per-10,000-word rates. Book 1 is the fixed point and
 * is never edited; see the warning in 14-audit-method.md.
 *
 *   node tools/voice-audit.js            # full report
 *   node tools/voice-audit.js --per-ch   # adds a per-chapter table for Book 2
 *
 * EVERYTHING IT PRINTS IS A CANDIDATE, NOT A DEFECT. Read the contexts before
 * ruling on any of it (Law 3). A high count is a reason to read, not to skip.
 *
 * Law 7: this file is part of the tooling, so scan it when you scan the prose.
 */

const fs = require("fs");
const path = require("path");

const ROOT = path.resolve(__dirname, "..");
const BOOK1 = path.join(ROOT, "book1-published", "chapters");
const BOOK2 = path.join(ROOT, "chapters-book2");

// ---------------------------------------------------------------- corpus

function readChapters(dir) {
  return fs
    .readdirSync(dir)
    .filter((f) => /\.md$/.test(f) && /\d/.test(f) && f !== "README.md")
    .sort()
    .map((f) => {
      const raw = fs.readFileSync(path.join(dir, f), "utf8");
      const lines = raw.split(/\r?\n/);
      // drop the chapter heading line; act/chapter headings keep em dashes by rule
      const body = lines.slice(1).join("\n");
      return { file: f, raw, body };
    });
}

const words = (s) => (s.match(/[A-Za-z’']+/g) || []).length;

// Split a body into narration and dialogue. Curly and straight quotes both.
function split(body) {
  const narration = [];
  const dialogue = [];
  const re = /[“"]([^”"]*)[”"]/g;
  let last = 0;
  let m;
  while ((m = re.exec(body)) !== null) {
    narration.push(body.slice(last, m.index));
    dialogue.push(m[1]);
    last = m.index + m[0].length;
  }
  narration.push(body.slice(last));
  return { narration: narration.join(" "), dialogue: dialogue.join(" ") };
}

const count = (s, re) => (s.match(re) || []).length;
const rate = (n, w) => (w === 0 ? 0 : (n * 10000) / w);

// ---------------------------------------------------------------- patterns

// Settled items from the MEASURED BASELINES table in 14-audit-method.md.
const PATTERNS = [
  ["curly “ ”", /[“”]/g],
  ["straight \"", /"/g],
  ["curly ’", /’/g],
  ["straight '", /'/g],
  ["em dash (body)", /—/g],
  ["ellipsis …", /…/g],
  ["three dots ...", /\.\.\./g],
  ["exclamation", /!/g],
  ["toward", /\btoward\b/gi],
  ["towards", /\btowards\b/gi],
  ["-wards (any)", /\b\w+wards\b/gi],
  ["gray", /\bgray\b/gi],
  ["grey", /\bgrey\b/gi],
  ["British -our", /\b(colour|behaviour|honour|favour|neighbour|rumour)\w*\b/gi],
  ["British -ise", /\b(realise|recognise|apologise|organise|analyse)\w*\b/gi],
  ["nodded once", /\bnodded once\b/gi],
  ["the kind of", /\bthe kind of\b/gi],
  [", which was/is", /, which (was|is)\b/gi],
  [", which (any)", /, which\b/gi],
  ["as though / as if", /\bas (though|if)\b/gi],
  ["seemed/appeared to", /\b(seemed|appeared) to\b/gi],
  ["the way [pron]", /\bthe (same )?way (she|he|it|they|a|the|anyone)\b/gi],
  ["labeled pause", /\ba (brief )?(beat|pause)\b/gi],
  ["for the first time", /\bfor the first time\b/gi],
  ["did not answer", /\bdid not answer\b/gi],
  ["shape", /\bshape\b/gi],
  ["structure", /\bstructure\b/gi],
  ["pattern", /\bpattern\b/gi],
  ["weight", /\bweight\b/gi],
  ["absence", /\babsence\b/gi],
];

// Indefinite pronouns are scoped by register, so they are measured split.
const PRONOUNS = [
  ["someone", /\bsomeone\b/gi],
  ["somebody", /\bsomebody\b/gi],
  ["anyone", /\banyone\b/gi],
  ["anybody", /\banybody\b/gi],
  ["everyone", /\beveryone\b/gi],
  ["everybody", /\beverybody\b/gi],
  ["no one", /\bno one\b/gi],
  ["nobody", /\bnobody\b/gi],
];

// Contractions are per-form and per-speaker, never swept. See 03-themes-and-tone.
const CONTRACTIONS = [
  ["did not / didn’t", /\bdid not\b/gi, /\bdidn[’']t\b/gi],
  ["was not / wasn’t", /\bwas not\b/gi, /\bwasn[’']t\b/gi],
  ["had not / hadn’t", /\bhad not\b/gi, /\bhadn[’']t\b/gi],
  ["do not / don’t", /\bdo not\b/gi, /\bdon[’']t\b/gi],
  ["is not / isn’t", /\bis not\b/gi, /\bisn[’']t\b/gi],
  ["it is / it’s", /\bit is\b/gi, /\bit[’']s\b/gi],
];

// ---------------------------------------------------------------- report

function corpusStats(chapters) {
  const body = chapters.map((c) => c.body).join("\n");
  const { narration, dialogue } = split(body);
  return {
    body,
    narration,
    dialogue,
    w: words(body),
    wn: words(narration),
    wd: words(dialogue),
  };
}

function pad(s, n) {
  s = String(s);
  return s.length >= n ? s : s + " ".repeat(n - s.length);
}
function lpad(s, n) {
  s = String(s);
  return s.length >= n ? s : " ".repeat(n - s.length) + s;
}

const b1 = corpusStats(readChapters(BOOK1));
const b2chapters = readChapters(BOOK2);
const b2 = corpusStats(b2chapters);

console.log("VOICE AUDIT — Book 2 drafted against published Book 1");
console.log("Method: series-bible/14-audit-method.md. Rates are per 10,000 words.");
console.log("Everything here is a candidate, not a defect. Read the contexts.\n");
console.log(
  `Book 1 (published, locked): ${b1.w} words  (narration ${b1.wn} / dialogue ${b1.wd})`
);
console.log(
  `Book 2 (${b2chapters.length} chapters drafted): ${b2.w} words  (narration ${b2.wn} / dialogue ${b2.wd})\n`
);

console.log(pad("PATTERN", 24) + lpad("B1", 7) + lpad("rate", 8) + lpad("B2", 7) + lpad("rate", 8) + "  flag");
console.log("-".repeat(62));
for (const [label, re] of PATTERNS) {
  const n1 = count(b1.body, re);
  const n2 = count(b2.body, re);
  const r1 = rate(n1, b1.w);
  const r2 = rate(n2, b2.w);
  // flag when Book 2 runs materially hotter than the published baseline
  let flag = "";
  if (n2 > 0 && n1 === 0) flag = "NEW";
  else if (r1 > 0 && r2 > r1 * 1.5 && n2 >= 3) flag = "HOT";
  console.log(
    pad(label, 24) +
      lpad(n1, 7) +
      lpad(r1.toFixed(1), 8) +
      lpad(n2, 7) +
      lpad(r2.toFixed(1), 8) +
      "  " +
      flag
  );
}

console.log("\nINDEFINITE PRONOUNS — narration is the register that matters");
console.log(pad("", 14) + lpad("B1 narr", 9) + lpad("B1 dlg", 8) + lpad("B2 narr", 9) + lpad("B2 dlg", 8) + "  flag");
console.log("-".repeat(50));
for (const [label, re] of PRONOUNS) {
  const n1n = count(b1.narration, re);
  const n1d = count(b1.dialogue, re);
  const n2n = count(b2.narration, re);
  const n2d = count(b2.dialogue, re);
  const bodyForm = /body\b/.test(label);
  const flag = bodyForm && n2n > 0 ? "*** NARRATION" : "";
  console.log(
    pad(label, 14) + lpad(n1n, 9) + lpad(n1d, 8) + lpad(n2n, 9) + lpad(n2d, 8) + "  " + flag
  );
}

console.log("\nCONTRACTIONS — per form, per register. NEVER SWEEP DIALOGUE.");
console.log(
  pad("FORM", 20) + lpad("B1 narr", 12) + lpad("B1 dlg", 12) + lpad("B2 narr", 12) + lpad("B2 dlg", 12)
);
console.log("-".repeat(68));
for (const [label, expanded, contracted] of CONTRACTIONS) {
  const cell = (s) => {
    const e = count(s, expanded);
    const c = count(s, contracted);
    const t = e + c;
    return t === 0 ? "-" : `${e}/${c} ${Math.round((e / t) * 100)}%`;
  };
  console.log(
    pad(label, 20) +
      lpad(cell(b1.narration), 12) +
      lpad(cell(b1.dialogue), 12) +
      lpad(cell(b2.narration), 12) +
      lpad(cell(b2.dialogue), 12)
  );
}
console.log("(expanded/contracted, and the percentage expanded)");

// ---------------------------------------------------------------- repeats

console.log("\nREPEATED PHRASES — 4 to 6 words, 3+ times, in 2+ Book 2 chapters");
const norm = (s) =>
  s
    .toLowerCase()
    .replace(/[’']/g, "'")
    .replace(/[^a-z' ]+/g, " ")
    .replace(/\s+/g, " ")
    .trim();
const phraseHits = new Map();
for (const ch of b2chapters) {
  const toks = norm(ch.body).split(" ");
  const seen = new Set();
  for (let n = 4; n <= 6; n++) {
    for (let i = 0; i + n <= toks.length; i++) {
      const p = toks.slice(i, i + n).join(" ");
      if (!phraseHits.has(p)) phraseHits.set(p, { n: 0, chapters: new Set() });
      const rec = phraseHits.get(p);
      rec.n++;
      rec.chapters.add(ch.file);
      seen.add(p);
    }
  }
}
const repeats = [...phraseHits.entries()]
  .filter(([p, r]) => r.n >= 3 && r.chapters.size >= 2 && p.split(" ").length >= 5)
  .sort((a, b) => b[1].n - a[1].n || b[0].length - a[0].length)
  .slice(0, 25);
if (repeats.length === 0) console.log("  (none)");
for (const [p, r] of repeats) {
  console.log(`  ${lpad(r.n, 3)}x  [${r.chapters.size} ch]  "${p}"`);
}

console.log("\nMOST REPEATED 3-WORD SENTENCE OPENINGS (Book 2)");
const openings = new Map();
for (const ch of b2chapters) {
  const sents = ch.body.split(/(?<=[.?!”])\s+/);
  for (const s of sents) {
    const t = norm(s).split(" ").slice(0, 3).join(" ");
    if (t.split(" ").length === 3) openings.set(t, (openings.get(t) || 0) + 1);
  }
}
[...openings.entries()]
  .sort((a, b) => b[1] - a[1])
  .slice(0, 12)
  .forEach(([t, n]) => {
    if (n >= 3) console.log(`  ${lpad(n, 3)}x  "${t}"`);
  });

// ---------------------------------------------------------------- endings

console.log("\nCHAPTER ENDING REGISTER — no more than 3 consecutive the same");
let run = 0;
let prev = null;
for (const ch of b2chapters) {
  const paras = ch.body.trim().split(/\n\s*\n/);
  const last = paras[paras.length - 1].trim();
  const reg = /^[“"]/.test(last) || /[”"]\s*$/.test(last) ? "dialogue" : "narration";
  run = reg === prev ? run + 1 : 1;
  prev = reg;
  console.log(`  ${pad(ch.file, 22)} ${pad(reg, 10)} run=${run}${run > 3 ? "   *** OVER CAP" : ""}`);
}

// ---------------------------------------------------------------- locked

console.log("\nPROTECTED LINES — must exist verbatim (14-audit-method.md)");
const LOCKED = [
  ["It hurting is how I know it counted", "B2 Ch4"],
  ["an alarm that never got told the emergency ended", "B2 Ch4"],
  ["What if I don't like who's left", "B2 Ch4"],
  ["It's still there. I just can't find the handle on it anymore", "B2 Ch8 (pending)"],
  ["You don't have to optimize the answer", "B1 Ch2, published"],
];
const flat = (s) => s.replace(/[’']/g, "'").replace(/[“”]/g, '"');
const haystack = flat(b1.body + "\n" + b2.body + "\n" + readPending());
function readPending() {
  const dir = path.join(ROOT, "series-bible", "archive", "drafts");
  if (!fs.existsSync(dir)) return "";
  return fs
    .readdirSync(dir)
    .filter((f) => /\.md$/.test(f))
    .map((f) => fs.readFileSync(path.join(dir, f), "utf8"))
    .join("\n");
}
for (const [line, where] of LOCKED) {
  const ok = haystack.includes(flat(line));
  console.log(`  ${ok ? "present" : "*** MISSING"}   ${pad(where, 18)} "${line}"`);
}

// ---------------------------------------------------------------- per chapter

if (process.argv.includes("--per-ch")) {
  console.log("\nPER-CHAPTER (Book 2)");
  console.log(
    pad("FILE", 22) + lpad("words", 7) + lpad("straight", 9) + lpad("emdash", 8) + lpad("-body narr", 12) + lpad("no one", 8) + lpad(",which was", 11)
  );
  console.log("-".repeat(78));
  for (const ch of b2chapters) {
    const { narration } = split(ch.body);
    console.log(
      pad(ch.file, 22) +
        lpad(words(ch.body), 7) +
        lpad(count(ch.body, /["']/g), 9) +
        lpad(count(ch.body, /—/g), 8) +
        lpad(count(narration, /\b(somebody|anybody|everybody|nobody)\b/gi), 12) +
        lpad(count(ch.body, /\bno one\b/gi), 8) +
        lpad(count(ch.body, /, which (was|is)\b/gi), 11)
    );
  }
}

console.log("");
