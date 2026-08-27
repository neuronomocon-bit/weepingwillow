const fs = require("fs");
const {
  Document,
  Packer,
  Paragraph,
  TextRun,
  HeadingLevel,
  AlignmentType,
  convertInchesToTwip,
} = require("docx");

const inputPath = process.argv[2] || "chapter_review.md";
const outputPath = process.argv[3] || "WeepingWillow_TheAbsence.docx";

const raw = fs.readFileSync(inputPath, "utf8");
const lines = raw.split(/\r?\n/);

const children = [];

// Patterns
const bookTitleRe = /^Weeping Willow/i;
const actRe = /^ACT\s+[IVX]+/i;
const chapterRe = /^Chapter\s+\d+/i;

for (let i = 0; i < lines.length; i++) {
  const line = lines[i];
  const trimmed = line.trim();

  // Skip blank lines — spacing is handled by paragraph after-spacing
  if (trimmed === "") continue;

  // Book title
  if (bookTitleRe.test(trimmed)) {
    children.push(
      new Paragraph({
        children: [
          new TextRun({
            text: trimmed,
            bold: true,
            size: 36, // 18pt
            font: "Times New Roman",
          }),
        ],
        alignment: AlignmentType.CENTER,
        spacing: { after: convertInchesToTwip(0.5) },
      })
    );
    // Add a page break after the title
    children.push(
      new Paragraph({
        children: [],
        pageBreakBefore: true,
      })
    );
    continue;
  }

  // ACT heading
  if (actRe.test(trimmed)) {
    children.push(
      new Paragraph({
        text: trimmed,
        heading: HeadingLevel.HEADING_1,
        spacing: {
          before: convertInchesToTwip(0.4),
          after: convertInchesToTwip(0.2),
        },
        alignment: AlignmentType.CENTER,
      })
    );
    continue;
  }

  // Chapter heading
  if (chapterRe.test(trimmed)) {
    // Page break before each chapter except if it immediately follows an ACT heading
    const prevNonBlank = findPrevNonBlank(lines, i);
    const isAfterAct = prevNonBlank !== null && actRe.test(prevNonBlank.trim());

    children.push(
      new Paragraph({
        text: trimmed,
        heading: HeadingLevel.HEADING_2,
        spacing: {
          before: convertInchesToTwip(0.3),
          after: convertInchesToTwip(0.3),
        },
        alignment: AlignmentType.CENTER,
        pageBreakBefore: !isAfterAct,
      })
    );
    continue;
  }

  // Body text
  children.push(
    new Paragraph({
      children: [
        new TextRun({
          text: trimmed,
          size: 24, // 12pt
          font: "Times New Roman",
        }),
      ],
      spacing: {
        after: convertInchesToTwip(0.12), // Space between paragraphs
        line: 276, // ~1.15 line spacing
      },
      indent: {
        firstLine: convertInchesToTwip(0.0), // No first-line indent — each paragraph is its own block
      },
    })
  );
}

function findPrevNonBlank(lines, index) {
  for (let j = index - 1; j >= 0; j--) {
    if (lines[j].trim() !== "") return lines[j];
  }
  return null;
}

const doc = new Document({
  sections: [
    {
      properties: {
        page: {
          margin: {
            top: convertInchesToTwip(1),
            right: convertInchesToTwip(1),
            bottom: convertInchesToTwip(1),
            left: convertInchesToTwip(1),
          },
          size: {
            width: convertInchesToTwip(6),
            height: convertInchesToTwip(9),
          },
        },
      },
      children,
    },
  ],
});

Packer.toBuffer(doc).then((buffer) => {
  fs.writeFileSync(outputPath, buffer);
  console.log(`Written: ${outputPath}`);
  console.log(`Paragraphs: ${children.length}`);
});
