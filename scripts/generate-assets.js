#!/usr/bin/env node

/**
 * Build-time generator for interchangeable CV artifacts.
 *
 * Reads src/_data/cv.json and produces, into src/assets/downloads/:
 *   - alessandro-alfano.vcf   vCard 3.0 contact file
 *   - resume.json             JSON Resume (jsonresume.org schema)
 *   - qr-website.svg          QR code for the website URL
 *   - qr-vcard.svg            QR code encoding the vCard itself
 *
 * All outputs are deterministic from cv.json, so they can be committed
 * and are served statically via Eleventy's src/assets passthrough.
 */

const fs = require('fs');
const path = require('path');
const QRCode = require('qrcode');

const CV_PATH = path.join(__dirname, '../src/_data/cv.json');
const OUT_DIR = path.join(__dirname, '../src/assets/downloads');

const cv = JSON.parse(fs.readFileSync(CV_PATH, 'utf8'));

// --- vCard (3.0) -----------------------------------------------------------
function buildVCard() {
  const [firstName, ...rest] = cv.identity.fullName.split(' ');
  const lastName = rest.join(' ');
  const loc = cv.contact.location;
  const web = cv.contact.web;

  // CRLF line endings per RFC 6350 / vCard spec.
  const lines = [
    'BEGIN:VCARD',
    'VERSION:3.0',
    `N:${lastName};${firstName};;;`,
    `FN:${cv.identity.fullName}`,
    `TITLE:${cv.identity.tagline}`,
    `EMAIL;TYPE=INTERNET:${cv.contact.email}`,
    `TEL;TYPE=CELL:${cv.contact.phone}`,
    `ADR;TYPE=HOME:;;;${loc.city};${loc.province};;${loc.country}`,
    `URL:${web.website}`,
    `X-SOCIALPROFILE;TYPE=github:${web.github}`,
    `X-SOCIALPROFILE;TYPE=linkedin:${web.linkedin}`,
    `NOTE:${cv.summary.short}`,
    'END:VCARD'
  ];
  return lines.join('\r\n') + '\r\n';
}

// --- JSON Resume (jsonresume.org) ------------------------------------------
function buildJsonResume() {
  const web = cv.contact.web;
  const loc = cv.contact.location;

  const profiles = [
    { network: 'GitHub', username: 'lysandre995', url: web.github },
    { network: 'LinkedIn', username: 'alessandro-alfano', url: web.linkedin }
  ];

  const work = cv.experience.map((job) => ({
    name: job.company,
    position: job.role,
    location: job.location,
    description: job.companyDescription,
    startDate: job.period.start,
    ...(job.period.end ? { endDate: job.period.end } : {}),
    summary: job.focus,
    highlights: job.responsibilities
  }));

  const education = cv.education.formal.map((edu) => ({
    institution: edu.institution,
    url: edu.url,
    area: edu.degree,
    studyType: 'Degree',
    startDate: String(edu.period.start),
    ...(edu.period.end ? { endDate: String(edu.period.end) } : {}),
    ...(edu.subjects || edu.note
      ? { courses: [edu.subjects, edu.note].filter(Boolean) }
      : {})
  }));

  // Flatten the grouped technicalSkills structure into JSON Resume skills[].
  const skills = [];
  for (const group of Object.values(cv.technicalSkills)) {
    const keywords = [];
    for (const [key, val] of Object.entries(group)) {
      if (key === 'label') continue;
      if (Array.isArray(val)) keywords.push(...val);
    }
    if (keywords.length) skills.push({ name: group.label, keywords });
  }

  const languages = cv.languages.map((l) => ({
    language: l.name,
    fluency: l.level
  }));

  const projects = [];
  const allProjects = [
    ...(cv.projects.featured || []),
    ...(cv.projects.university || []),
    ...(cv.projects.public || [])
  ];
  for (const p of allProjects) {
    const url = p.url || (p.urls && (p.urls.source || p.urls.live));
    projects.push({
      name: p.name,
      description: p.description || '',
      ...(p.technologies ? { keywords: p.technologies } : {}),
      ...(url ? { url } : {})
    });
  }

  const volunteer = (cv.theater || []).map((t) => ({
    organization: t.organization,
    position: t.role,
    ...(t.url ? { url: t.url } : {}),
    startDate: t.period.start,
    ...(t.period.end ? { endDate: t.period.end } : {}),
    summary: t.description
  }));

  const certificates = cv.certifications.map((c) => ({
    name: c.name,
    date: c.date,
    issuer: c.issuer
  }));

  const interests = Object.values(cv.interests)
    .flat()
    .map((i) => ({
      name: i.activity,
      ...(i.details ? { keywords: [i.details] } : {})
    }));

  return {
    $schema: 'https://raw.githubusercontent.com/jsonresume/resume-schema/v1.0.0/schema.json',
    basics: {
      name: cv.identity.fullName,
      label: cv.identity.tagline,
      email: cv.contact.email,
      phone: cv.contact.phone,
      url: web.website,
      summary: cv.summary.extended,
      location: {
        city: loc.city,
        region: loc.province,
        countryCode: 'IT'
      },
      profiles
    },
    work,
    volunteer,
    education,
    certificates,
    skills,
    languages,
    projects,
    interests,
    meta: {
      canonical: web.website,
      version: 'v1.0.0',
      lastModified: new Date().toISOString().slice(0, 10)
    }
  };
}

async function main() {
  fs.mkdirSync(OUT_DIR, { recursive: true });

  // vCard
  const vcard = buildVCard();
  fs.writeFileSync(path.join(OUT_DIR, 'alessandro-alfano.vcf'), vcard, 'utf8');
  console.log('✅ vCard        -> alessandro-alfano.vcf');

  // JSON Resume
  const resume = buildJsonResume();
  fs.writeFileSync(
    path.join(OUT_DIR, 'resume.json'),
    JSON.stringify(resume, null, 2) + '\n',
    'utf8'
  );
  console.log('✅ JSON Resume  -> resume.json');

  // QR codes (static SVG, generated at build time)
  const qrOpts = { type: 'svg', margin: 1, errorCorrectionLevel: 'M' };

  const websiteSvg = await QRCode.toString(cv.contact.web.website, qrOpts);
  fs.writeFileSync(path.join(OUT_DIR, 'qr-website.svg'), websiteSvg, 'utf8');
  console.log('✅ QR (website) -> qr-website.svg');

  // vCard QR uses a lower ECC level because the payload is larger.
  const vcardSvg = await QRCode.toString(vcard, {
    ...qrOpts,
    errorCorrectionLevel: 'L'
  });
  fs.writeFileSync(path.join(OUT_DIR, 'qr-vcard.svg'), vcardSvg, 'utf8');
  console.log('✅ QR (vCard)   -> qr-vcard.svg');

  console.log(`\n📁 Assets written to: ${OUT_DIR}`);
}

main().catch((err) => {
  console.error('❌ Asset generation failed:', err);
  process.exit(1);
});
