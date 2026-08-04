#!/usr/bin/env node
/**
 * build-manuscript.js
 *
 * Concatenates the approved per-chapter files into a single manuscript file
 * for reading and for docx export.
 *
 * The output is a BUILD ARTIFACT. Never hand-edit it. Every correction goes
 * into the per-chapter file under chapters-book2/ (or chapters/), which is
 * the single source of truth. Regenerate this file instead of patching it.
 *
 *   node build-manuscript.js            # Book 2 (default)
 *   node build-manuscript.js book1      # Book 1
 *
 * Then:
 *   node format-book-v2.js manuscript-book2.md WeepingWillow_TheKeeping.docx
 */

const fs = require("fs");
const path = require("path");

const BOOKS = {
  book1: {
    title: "Weeping Willow: The Absence",
    dir: "chapters",
    out: "manuscript-book1.md",
    // Book 1 is published. Act headers were deliberately kept out of the
    // chapter files and are not reinserted here.
    acts: [],
  },
  book2: {
    title: "Weeping Willow: The Keeping",
    dir: "chapters-book2",
    out: "manuscript-book2.md",
    acts: [
      { before: 1, label: "ACT I — THE PROGRAM" },
      { before: 8, label: "ACT II — THE DEVIATION" },
      { before: 16, label: "ACT III — WHAT REMAINED" },
    ],
  },
};

const key = (process.argv[2] || "book2").toLowerCase();
const book = BOOKS[key];

if (!book) {
  console.error(`Unknown book "${key}". Known: ${Object.keys(BOOKS).join(", ")}`);
  process.exit(1);
}

if (!fs.existsSync(book.dir)) {
  console.error(`Chapter directory not found: ${book.dir}`);
  process.exit(1);
}

// Collect chapter files, ordered by their number. Handles both naming
// conventions in the repo: Book 1's "ch01-the-gap.md" and Book 2's
// "01-intake.md". README and anything unnumbered is skipped.
const numRe = /^(?:ch)?(\d+)[-_]/i;
const files = fs
  .readdirSync(book.dir)
  .filter((f) => f.toLowerCase().endsWith(".md") && numRe.test(f))
  .map((f) => ({ file: f, num: parseInt(f.match(numRe)[1], 10) }))
  .sort((a, b) => a.num - b.num);

if (files.length === 0) {
  console.error(`No numbered chapter files in ${book.dir}/`);
  process.exit(1);
}

// Warn on gaps so a missing chapter cannot silently vanish from an export.
const nums = files.map((f) => f.num);
const gaps = [];
for (let n = nums[0]; n < nums[nums.length - 1]; n++) {
  if (!nums.includes(n)) gaps.push(n);
}

const parts = [book.title, ""];
let words = 0;

for (const { file, num } of files) {
  const act = book.acts.find((a) => a.before === num);
  if (act) parts.push(act.label, "");

  const text = fs.readFileSync(path.join(book.dir, file), "utf8").trim();
  words += text.split(/\s+/).filter(Boolean).length;
  parts.push(text, "");
}

fs.writeFileSync(book.out, parts.join("\n") + "\n", "utf8");

console.log(`${book.out}`);
console.log(`  ${files.length} chapter${files.length === 1 ? "" : "s"}: ${nums.join(", ")}`);
console.log(`  ${words.toLocaleString()} words`);
if (gaps.length) console.log(`  WARNING missing chapter numbers: ${gaps.join(", ")}`);
