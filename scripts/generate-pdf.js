#!/usr/bin/env node

const { mdToPdf } = require('md-to-pdf');
const fs = require('fs');
const path = require('path');

const TEMP_DIR = path.join(__dirname, '../_site/pdf-temp');
const OUTPUT_DIR = path.join(__dirname, '../src/pdf');

// PDF styling options
const pdfOptions = {
  dest: '',
  pdf_options: {
    format: 'A4',
    margin: {
      top: '25mm',
      right: '20mm',
      bottom: '25mm',
      left: '20mm'
    },
    printBackground: true,
    preferCSSPageSize: true
  },
  stylesheet: [
    path.join(__dirname, 'pdf-styles.css')
  ],
  body_class: ['professional-cv']
};

async function generatePDF(mdPath, pdfPath, name) {
  console.log(`📄 Generating ${name}...`);

  if (!fs.existsSync(mdPath)) {
    console.error(`❌ Markdown file not found: ${mdPath}`);
    console.error('💡 Run "npm run build" first to generate markdown files');
    return false;
  }

  try {
    const pdf = await mdToPdf(
      { path: mdPath },
      {
        ...pdfOptions,
        dest: pdfPath
      }
    );

    if (pdf) {
      console.log(`✅ ${name} saved to: ${pdfPath}`);
      return true;
    }
  } catch (error) {
    console.error(`❌ Error generating ${name}:`, error.message);
    return false;
  }
}

async function main() {
  console.log('🚀 Starting PDF generation from Markdown...\n');

  // Ensure output directory exists
  if (!fs.existsSync(OUTPUT_DIR)) {
    fs.mkdirSync(OUTPUT_DIR, { recursive: true });
  }

  // Check if temp markdown files exist
  if (!fs.existsSync(TEMP_DIR)) {
    console.error('❌ Markdown templates not found!');
    console.error('💡 Run "npm run build" first to generate markdown files');
    console.error(`   Looking for: ${TEMP_DIR}\n`);
    process.exit(1);
  }

  const classicMd = path.join(TEMP_DIR, 'cv-classic.md');
  const europassMd = path.join(TEMP_DIR, 'cv-europass.md');

  const classicPdf = path.join(OUTPUT_DIR, 'cv-classic.pdf');
  const europassPdf = path.join(OUTPUT_DIR, 'cv-europass.pdf');

  // Generate PDFs
  const results = await Promise.all([
    generatePDF(classicMd, classicPdf, 'Classic CV'),
    generatePDF(europassMd, europassPdf, 'Europass CV')
  ]);

  if (results.every(r => r)) {
    console.log('\n✨ PDF generation completed successfully!');
    console.log(`📁 PDFs saved in: ${OUTPUT_DIR}`);
    console.log('\n💡 Next steps:');
    console.log('   1. Review the generated PDFs');
    console.log('   2. Commit them to the repository');
    console.log('   3. They will be deployed with the next build');
  } else {
    console.error('\n❌ Some PDFs failed to generate');
    process.exit(1);
  }
}

main();
