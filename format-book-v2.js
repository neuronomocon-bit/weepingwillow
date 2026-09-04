const fs = require("fs");
const {
  Document,
  Packer,
  Paragraph,
  TextRun,
  Header,
  Footer,
  PageNumber,
  AlignmentType,
  TabStopType,
  convertInchesToTwip,
  SectionType,
  NumberFormat,
  Tab,
} = require("docx");

const inputPath = process.argv[2] || "manuscript-book2.md";
const outputPathArg = process.argv[3];

const raw = fs.readFileSync(inputPath, "utf8");
const lines = raw.split(/\r?\n/);

// ─── Constants ───────────────────────────────────────────────────────
const PAGE_W = convertInchesToTwip(6);
const PAGE_H = convertInchesToTwip(9);
const MARGIN_TOP = convertInchesToTwip(0.8);
const MARGIN_BOTTOM = convertInchesToTwip(0.75);
const MARGIN_LEFT = convertInchesToTwip(0.75);
const MARGIN_RIGHT = convertInchesToTwip(0.75);
const CONTENT_WIDTH = convertInchesToTwip(4.5); // 6 - 0.75 - 0.75
const BODY_SIZE = 22; // 11pt
const BODY_LINE = 276; // ~1.15 spacing
const PARA_AFTER = convertInchesToTwip(0.1);

const PAGE_SIZE = { width: PAGE_W, height: PAGE_H };
const PAGE_MARGIN = {
  top: MARGIN_TOP,
  bottom: MARGIN_BOTTOM,
  left: MARGIN_LEFT,
  right: MARGIN_RIGHT,
};

// ─── Regexes ─────────────────────────────────────────────────────────
const bookTitleRe = /^Weeping Willow/i;
const actRe = /^ACT\s+[IVX]+/i;
const chapterRe = /^Chapter\s+(\d+)\s*[—–-]\s*(.+)/i;
const sceneBreakRe = /^[•◦*][\s•◦*]+$/; // matches "• ◦ •" or "* * *" or "***" etc.

// ─── First pass: collect chapters for TOC ────────────────────────────
const chapters = [];
for (const line of lines) {
  const m = line.trim().match(chapterRe);
  if (m) chapters.push({ num: parseInt(m[1]), title: m[2].trim(), full: line.trim() });
}

// ─── Book title for the running header ───────────────────────────────
// Derived from the manuscript's own title line so that exporting a different
// book does not silently carry the previous book's title in the header.
const titleLine = lines.map((l) => l.trim()).find((l) => bookTitleRe.test(l));
const BOOK_TITLE = titleLine || "Weeping Willow";

// ─── Title page parts, split off the same line ───────────────────────
// The running header was derived from the manuscript years before the title
// page was, so a Book 2 export carried "The Absence" on its first page while
// every header above it read correctly. Both now come from one source.
const titleParts = BOOK_TITLE.split(/\s*:\s*/);
const SERIES_LINE = titleParts[0].toUpperCase();
const BOOK_SUBTITLE = titleParts.slice(1).join(": ").trim();

// Default filename follows the same source, so an unnamed export cannot land
// under the wrong book's name either.
const outputPath =
  outputPathArg || BOOK_TITLE.replace(/[^A-Za-z0-9]+/g, "_").replace(/^_|_$/g, "") + ".docx";

// ─── Headers: even (left) = book title, odd (right) = author ────────
function createEvenHeader() {
  return new Header({
    children: [
      new Paragraph({
        alignment: AlignmentType.LEFT,
        children: [
          new TextRun({
            text: BOOK_TITLE,
            font: "Inter",
            size: 16,
            italics: true,
            color: "555555",
          }),
        ],
      }),
    ],
  });
}

function createOddHeader() {
  return new Header({
    children: [
      new Paragraph({
        alignment: AlignmentType.RIGHT,
        children: [
          new TextRun({
            text: "Kristopher Michael",
            font: "Inter",
            size: 16,
            italics: true,
            color: "555555",
          }),
        ],
      }),
    ],
  });
}

// ─── Footers: even (left) = page num left, odd (right) = page num right
function createEvenFooter() {
  return new Footer({
    children: [
      new Paragraph({
        alignment: AlignmentType.LEFT,
        children: [
          new TextRun({
            children: [PageNumber.CURRENT],
            font: "Garamond",
            size: 18,
          }),
        ],
      }),
    ],
  });
}

function createOddFooter() {
  return new Footer({
    children: [
      new Paragraph({
        alignment: AlignmentType.RIGHT,
        children: [
          new TextRun({
            children: [PageNumber.CURRENT],
            font: "Garamond",
            size: 18,
          }),
        ],
      }),
    ],
  });
}

// ─── Blank header/footer ─────────────────────────────────────────────
function blankHeader() {
  return new Header({
    children: [new Paragraph({ children: [new TextRun({ text: "" })] })],
  });
}

function blankFooter() {
  return new Footer({
    children: [new Paragraph({ children: [new TextRun({ text: "" })] })],
  });
}

// ─── Body paragraph ─────────────────────────────────────────────────
function bodyPara(text) {
  return new Paragraph({
    children: [
      new TextRun({ text, font: "Garamond", size: BODY_SIZE }),
    ],
    spacing: { after: PARA_AFTER, line: BODY_LINE },
  });
}

// ─── Drop cap paragraph ─────────────────────────────────────────────
function dropCapPara(text) {
  if (!text || text.length === 0) return bodyPara(text);
  return new Paragraph({
    children: [
      new TextRun({
        text: text[0],
        font: "Garamond",
        size: 56,
        bold: true,
      }),
      new TextRun({
        text: text.slice(1),
        font: "Garamond",
        size: BODY_SIZE,
      }),
    ],
    spacing: { after: PARA_AFTER, line: BODY_LINE },
  });
}

// ─── Scene break ─────────────────────────────────────────────────────
function sceneBreakPara() {
  return new Paragraph({
    children: [
      new TextRun({
        text: "\u2022 \u25E6 \u2022",
        font: "Garamond",
        size: BODY_SIZE,
      }),
    ],
    alignment: AlignmentType.CENTER,
    spacing: {
      before: convertInchesToTwip(0.25),
      after: convertInchesToTwip(0.25),
    },
  });
}

// ═════════════════════════════════════════════════════════════════════
// SECTION 1 — FRONT MATTER (Title Page + Copyright)
// ═════════════════════════════════════════════════════════════════════
const frontMatter = {
  properties: {
    type: SectionType.NEXT_PAGE,
    page: {
      size: PAGE_SIZE,
      margin: PAGE_MARGIN,
      pageNumbers: { start: 1, formatType: NumberFormat.LOWER_ROMAN },
    },
  },
  headers: { default: blankHeader(), first: blankHeader() },
  footers: { default: blankFooter(), first: blankFooter() },
  children: [
    // Title page — push down
    new Paragraph({ children: [], spacing: { before: convertInchesToTwip(2.5) } }),
    new Paragraph({
      alignment: AlignmentType.CENTER,
      spacing: { after: convertInchesToTwip(0.3) },
      children: [new TextRun({ text: SERIES_LINE, font: "Inter", size: 52, bold: true })],
    }),
    new Paragraph({
      alignment: AlignmentType.CENTER,
      spacing: { after: convertInchesToTwip(1.5) },
      children: [new TextRun({ text: BOOK_SUBTITLE, font: "Inter", size: 36 })],
    }),
    new Paragraph({
      alignment: AlignmentType.CENTER,
      children: [new TextRun({ text: "Kris Schiffer", font: "Garamond", size: 28 })],
    }),
    // Copyright page
    new Paragraph({
      pageBreakBefore: true,
      spacing: { before: convertInchesToTwip(3) },
      children: [],
    }),
    new Paragraph({
      alignment: AlignmentType.CENTER,
      spacing: { after: convertInchesToTwip(0.2) },
      children: [new TextRun({ text: BOOK_TITLE, font: "Garamond", size: 20, italics: true })],
    }),
    new Paragraph({
      alignment: AlignmentType.CENTER,
      spacing: { after: convertInchesToTwip(0.15) },
      children: [new TextRun({ text: `Copyright \u00A9 ${new Date().getFullYear()} Kris Schiffer`, font: "Garamond", size: 20 })],
    }),
    new Paragraph({
      alignment: AlignmentType.CENTER,
      spacing: { after: convertInchesToTwip(0.15) },
      children: [new TextRun({ text: "All rights reserved.", font: "Garamond", size: 20 })],
    }),
    new Paragraph({
      alignment: AlignmentType.CENTER,
      spacing: { after: convertInchesToTwip(0.3) },
      children: [
        new TextRun({
          text: "No part of this publication may be reproduced, distributed, or transmitted in any form or by any means without the prior written permission of the author.",
          font: "Garamond",
          size: 18,
        }),
      ],
    }),
    new Paragraph({
      alignment: AlignmentType.CENTER,
      spacing: { after: convertInchesToTwip(0.3) },
      children: [
        new TextRun({
          text: "This is a work of fiction. Names, characters, places, and incidents are products of the author\u2019s imagination or are used fictitiously.",
          font: "Garamond",
          size: 18,
        }),
      ],
    }),
    new Paragraph({
      alignment: AlignmentType.CENTER,
      children: [new TextRun({ text: "First Edition", font: "Garamond", size: 18 })],
    }),
  ],
};

// ═════════════════════════════════════════════════════════════════════
// SECTION 2 — TABLE OF CONTENTS
// ═════════════════════════════════════════════════════════════════════
const tocChildren = [
  new Paragraph({
    alignment: AlignmentType.CENTER,
    spacing: { before: convertInchesToTwip(1), after: convertInchesToTwip(0.5) },
    children: [new TextRun({ text: "CONTENTS", font: "Inter", size: 36, bold: true })],
  }),
];

for (const ch of chapters) {
  tocChildren.push(
    new Paragraph({
      spacing: { after: convertInchesToTwip(0.08) },
      indent: { left: convertInchesToTwip(0.5) },
      children: [
        new TextRun({
          text: `Chapter ${ch.num} \u2014 ${ch.title}`,
          font: "Garamond",
          size: 22,
        }),
      ],
    })
  );
}

const tocSection = {
  properties: {
    type: SectionType.NEXT_PAGE,
    page: {
      size: PAGE_SIZE,
      margin: PAGE_MARGIN,
      pageNumbers: { formatType: NumberFormat.LOWER_ROMAN },
    },
  },
  headers: { default: blankHeader(), first: blankHeader() },
  footers: { default: blankFooter(), first: blankFooter() },
  children: tocChildren,
};

// ═════════════════════════════════════════════════════════════════════
// BODY — one section per chapter
// titlePage: true → first page uses "first" header/footer (blank)
//                    subsequent pages use "default" header/footer (with content)
// ═════════════════════════════════════════════════════════════════════
const bodySections = [];
let sectionChildren = [];
let isFirstBodySection = true;
let needDropCap = false;
let pendingAct = null;

function pushBodySection() {
  if (sectionChildren.length === 0) return;

  const props = {
    type: SectionType.NEXT_PAGE,
    titlePage: true,
    page: {
      size: PAGE_SIZE,
      margin: PAGE_MARGIN,
    },
  };

  // First body section resets page numbering to 1
  if (isFirstBodySection) {
    props.page.pageNumbers = { start: 1, formatType: NumberFormat.DECIMAL };
    isFirstBodySection = false;
  } else {
    props.page.pageNumbers = { formatType: NumberFormat.DECIMAL };
  }

  bodySections.push({
    properties: props,
    headers: {
      default: createOddHeader(),
      even: createEvenHeader(),
      first: blankHeader(),
    },
    footers: {
      default: createOddFooter(),
      even: createEvenFooter(),
      first: blankFooter(),
    },
    children: sectionChildren,
  });
  sectionChildren = [];
}

for (let i = 0; i < lines.length; i++) {
  const trimmed = lines[i].trim();
  if (trimmed === "") continue;

  // Skip book title (already in front matter)
  if (bookTitleRe.test(trimmed)) continue;

  // ACT heading — hold it for next chapter
  if (actRe.test(trimmed)) {
    pendingAct = trimmed;
    continue;
  }

  // Chapter heading — new section
  if (chapterRe.test(trimmed)) {
    pushBodySection();

    if (pendingAct) {
      sectionChildren.push(
        new Paragraph({
          alignment: AlignmentType.CENTER,
          spacing: { before: convertInchesToTwip(1.2), after: convertInchesToTwip(0.4) },
          children: [new TextRun({ text: pendingAct.toUpperCase(), font: "Inter", size: 32, bold: true })],
        })
      );
      pendingAct = null;
    } else {
      sectionChildren.push(
        new Paragraph({ children: [], spacing: { before: convertInchesToTwip(1.5) } })
      );
    }

    sectionChildren.push(
      new Paragraph({
        alignment: AlignmentType.CENTER,
        spacing: { after: convertInchesToTwip(0.4) },
        children: [new TextRun({ text: trimmed, font: "Inter", size: 28 })],
      })
    );

    needDropCap = true;
    continue;
  }

  // Scene break
  if (sceneBreakRe.test(trimmed)) {
    sectionChildren.push(sceneBreakPara());
    continue;
  }

  // Body text
  if (needDropCap) {
    sectionChildren.push(dropCapPara(trimmed));
    needDropCap = false;
  } else {
    sectionChildren.push(bodyPara(trimmed));
  }
}

pushBodySection();

// ═════════════════════════════════════════════════════════════════════
// Build document
// ═════════════════════════════════════════════════════════════════════
const doc = new Document({
  evenAndOddHeaderAndFooters: true,
  styles: {
    default: {
      document: {
        run: { font: "Garamond", size: BODY_SIZE },
      },
    },
  },
  sections: [frontMatter, tocSection, ...bodySections],
});

Packer.toBuffer(doc).then((buffer) => {
  fs.writeFileSync(outputPath, buffer);
  console.log(`Written: ${outputPath}`);
  console.log(`Sections: ${2 + bodySections.length} (front matter + TOC + ${bodySections.length} chapters)`);
  console.log(`Chapters: ${chapters.length}`);

  // Count scene breaks
  const breakCount = lines.filter((l) => sceneBreakRe.test(l.trim())).length;
  console.log(`Scene breaks: ${breakCount}`);
});
