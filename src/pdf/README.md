# Professional CV PDFs

This folder contains professional PDF versions of the CV generated from `src/_data/cv.json`.

## 📄 PDF Files

- `cv-classic.pdf` - Classic professional CV format
- `cv-europass.pdf` - Europass standard CV format

## 🔄 Regenerating PDFs

When you update CV data in `src/_data/cv.json`, regenerate the PDFs:

```bash
# 1. Build the site to generate markdown templates
npm run build

# 2. Generate professional PDFs from markdown
npm run pdf
```

## ⚙️ How it works

1. **Eleventy** processes `src/pdf/templates/*.njk` with CV data
2. Generates clean **Markdown** files in `_site/pdf-temp/`
3. **md-to-pdf** converts Markdown to professional PDFs with custom styling
4. PDFs are saved to `src/pdf/` ready to commit

## 🎨 PDF Styling

PDFs use professional typography and layout:
- Georgia serif font for readability
- Proper page breaks and margins
- Professional color scheme (blues and grays)
- Optimized for A4 print
- Clean, ATS-friendly formatting

Styling is defined in `scripts/pdf-styles.css`.

## 🚀 Deployment

After generating PDFs:
1. Review them for quality and accuracy
2. Commit them to git
3. They'll be deployed automatically with the next build

PDFs are accessible at:
- https://yourdomain.com/cv-classic.pdf
- https://yourdomain.com/cv-europass.pdf

## 📝 Templates

Templates are in `src/pdf/templates/`:
- `classic-cv.njk` - Traditional CV layout
- `europass-cv.njk` - Europass standard format

Modify these to customize PDF content and structure.
