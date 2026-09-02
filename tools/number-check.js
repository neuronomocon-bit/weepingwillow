#!/usr/bin/env node
/*
 * number-check.js — pull every number-bearing sentence out of a chapter so the
 * arithmetic can be read in one place.
 *
 * WHY THIS EXISTS. The author's chapter reviews of Ch1 to Ch7 found eleven hard
 * errors, and NOT ONE of them was findable by the two checks this project
 * already had. The frequency comparison in voice-audit.js finds voice defects.
 * The beat count finds missing beats. Neither can see:
 *
 *   - arithmetic that does not add up (three retries described as four; a
 *     thirty-one hour benchmark beaten by two hours reported as eleven; four
 *     intervals on a scale with three transitions in it)
 *   - an interval that contradicts the calendar (February called ten months
 *     back in a March scene; nine months where nine weeks was meant)
 *   - a figure doing duty for two unrelated sets (206 twice)
 *
 * Every one of those is invisible on the page and obvious in a column.
 *
 *   node tools/number-check.js                    # every chapter
 *   node tools/number-check.js 07-the-curve.md    # one chapter
 *   node tools/number-check.js --calendar         # only interval/month phrases
 *
 * ⚠️ This prints candidates, not defects. It cannot do the arithmetic for you.
 * Its whole value is putting the numbers next to each other so a person can.
 * Read it against THE CALENDAR and the MASTER TIMELINE in
 * series-bible/08-book2-chapter-briefs.md.
 */

const fs = require("fs");
const path = require("path");

const ROOT = path.resolve(__dirname, "..");
const DIR = path.join(ROOT, "chapters-book2");

const WORDNUM =
  "(?:one|two|three|four|five|six|seven|eight|nine|ten|eleven|twelve|thirteen|" +
  "fourteen|fifteen|sixteen|seventeen|eighteen|nineteen|twenty|thirty|forty|" +
  "fifty|sixty|seventy|eighty|ninety|hundred|thousand|half|quarter|dozen)";

const NUMBER = new RegExp("\\b(?:\\d[\\d,.]*|" + WORDNUM + "(?:[- ]" + WORDNUM + ")*)\\b", "i");

// Phrases that place something on the calendar. These are the ones that have
// actually gone wrong, so they get their own pass.
const CALENDAR = new RegExp(
  "\\b(?:" +
    "(?:\\d+|" + WORDNUM + "(?:[- ]" + WORDNUM + ")*)\\s+" +
    "(?:second|minute|hour|day|week|month|year)s?\\s+" +
    "(?:ago|later|back|before|after|earlier|on|since)" +
    "|january|february|march|april|may|june|july|august|september|october|november|december" +
    "|last (?:winter|spring|summer|fall|month|year|week)" +
    "|in the (?:winter|spring|summer|fall)" +
    ")\\b",
  "i"
);

const args = process.argv.slice(2);
const calendarOnly = args.includes("--calendar");
const only = args.find((a) => !a.startsWith("--"));

const files = fs
  .readdirSync(DIR)
  .filter((f) => /^\d/.test(f) && /\.md$/.test(f))
  .filter((f) => !only || f === only)
  .sort();

if (!files.length) {
  console.log("no matching chapter in chapters-book2/");
  process.exit(1);
}

console.log(
  calendarOnly
    ? "CALENDAR PHRASES — check against THE CALENDAR in 08-book2-chapter-briefs.md\n"
    : "NUMBER-BEARING SENTENCES — read the arithmetic in a column\n"
);

let total = 0;
for (const f of files) {
  const raw = fs.readFileSync(path.join(DIR, f), "utf8");
  const body = raw.split(/\r?\n/).slice(1).join(" ");
  const sentences = body
    .replace(/\s+/g, " ")
    .split(/(?<=[.?!”"])\s+/)
    .map((s) => s.trim())
    .filter(Boolean);

  const hits = sentences.filter((s) =>
    calendarOnly ? CALENDAR.test(s) : NUMBER.test(s)
  );

  if (!hits.length) continue;
  total += hits.length;
  console.log("── " + f + "  (" + hits.length + ")");
  for (const h of hits) {
    console.log("   " + (h.length > 150 ? h.slice(0, 150) + "…" : h));
  }
  console.log("");
}

console.log(total + " sentences. Nothing here is a defect until you check it.");
