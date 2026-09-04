# Alessandro Alfano - Interactive CV

A retro-styled interactive CV/portfolio built with [Eleventy (11ty)](https://www.11ty.dev/) featuring dual nostalgic themes.

🎮 **[View Live Demo](https://alessandroalfano.com/)**

## ✨ Features

- **Dual Retro Themes**: Toggle between NES.css (8-bit Nintendo) and 98.css (Windows 98) aesthetics
- **Interactive Elements**:
  - NES theme: Pokéball that spawns random Pokémon, SNES settings dialog
  - Win98 theme: Desktop icons, Start menu, Clippy assistant
- **Single-Page Layout**: All CV sections in one seamless scrollable page
- **PDF Export**: Download CV in Classic or Europass format
- **Interchangeable formats**: Downloadable vCard (`.vcf`), machine-readable [JSON Resume](https://jsonresume.org/), and build-time QR codes (website + vCard)
- **Fully Responsive**: Mobile-friendly design
- **Static Site**: Fast, lightweight, GitHub Pages ready

## 🚀 Quick Start

### Prerequisites

- Node.js 24+ and npm

### Installation

```bash
# Clone the repository
git clone https://github.com/lysandre995/alessandro-alfano.git
cd alessandro-alfano

# Install dependencies
npm install

# Start development server
npm run dev
```

Visit `http://localhost:8080` to view the site.

### Build for Production

```bash
npm run build
```

The static site will be generated in the `_site/` directory.

## 📁 Project Structure

```
alessandro-alfano/
├── src/
│   ├── _data/
│   │   └── cv.json              # CV content data
│   ├── _includes/
│   │   ├── layouts/
│   │   │   └── base.njk         # Base HTML template
│   │   └── components/          # Nunjucks CV section components
│   ├── assets/
│   │   ├── css/
│   │   │   ├── theme-nes.css    # NES theme styles
│   │   │   ├── theme-98.css     # Windows 98 theme styles
│   │   │   └── layout.css       # Common layout
│   │   ├── js/
│   │   │   ├── theme-toggle.js  # Theme switching
│   │   │   ├── nes-interactions.js
│   │   │   └── win98-interactions.js
│   │   └── images/              # Local image assets
│   └── index.njk                # Main page template
├── .eleventy.js                 # Eleventy configuration
├── .github/workflows/
│   └── deploy.yml               # GitHub Actions CI/CD
└── package.json
```

## 🎨 Customization

### Update CV Content

Edit `src/_data/cv.json` to update your personal information, experience, skills, etc.

### Modify Themes

- **NES theme**: Edit `src/assets/css/theme-nes.css`
- **Win98 theme**: Edit `src/assets/css/theme-98.css`
- **Common styles**: Edit `src/assets/css/layout.css`

### Add/Remove Sections

Edit component includes in `src/index.njk` and create/modify components in `src/_includes/components/`

## 🛠️ Available Scripts

- `npm run dev` - Start development server with live reload
- `npm run build` - Build production site to `_site/`
- `npm run assets` - Regenerate vCard, JSON Resume, and QR codes from `cv.json` into `src/assets/downloads/` (also runs automatically before `dev`/`build`)
- `npm run clean` - Delete `_site/` directory

## 📦 Dependencies

- **[Eleventy](https://www.11ty.dev/)** - Static site generator
- **[NES.css](https://nostalgic-css.github.io/NES.css/)** - NES-style CSS framework
- **[98.css](https://jdan.github.io/98.css/)** - Windows 98 CSS framework

## 🚢 Deployment

The site automatically deploys to GitHub Pages via GitHub Actions on every push to `main`.

## 📄 License

MIT License - See [LICENSE](LICENSE) file for details.

## 👤 Author

**Alessandro Alfano**

- GitHub: [@lysandre995](https://github.com/lysandre995)
- LinkedIn: [Alessandro Alfano](https://www.linkedin.com/in/alessandro-alfano-5b5724159/)

## 🙏 Credits

### Frameworks & Libraries
- **NES.css** by [nostalgic-css](https://github.com/nostalgic-css/NES.css) - 8-bit Nintendo-style CSS framework
- **98.css** by [jdan](https://github.com/jdan/98.css) - Windows 98 style CSS framework
- **Eleventy** by [11ty](https://www.11ty.dev/) - Static site generator

### Assets & Icons

#### Windows 98 Icons
Windows 98-style icons sourced from the [Win98 Icon Theme](https://github.com/grassmunk/Win98SE) by grassmunk.
- Licensed under GPL-3.0
- Icons used: desktop icons (My Computer, folders, recycle bin), start menu icons, system icons
- These icons are recreations/interpretations of the Windows 98 aesthetic and are not official Microsoft assets

#### Clippy Assistant
The Clippy (Office Assistant) graphic is based on Microsoft's original design:
- Clippy is a trademark of Microsoft Corporation
- The SVG implementation used in this project is a recreation for educational and portfolio purposes
- Original Clippy character © Microsoft Corporation
- This project is not affiliated with or endorsed by Microsoft

#### Pokémon Assets
- Pokémon sprites and character designs are property of Nintendo/Game Freak/The Pokémon Company
- Used for educational and portfolio demonstration purposes only
- This project is not affiliated with or endorsed by Nintendo

### Fair Use Statement
This portfolio website uses trademarked characters and design elements (Clippy, Pokémon, Windows 98 aesthetic) under fair use principles for:
- Educational purposes (demonstrating web development skills)
- Non-commercial personal portfolio use
- Transformative use (interactive web implementation)

All trademarks and copyrights belong to their respective owners. If you are a rights holder and have concerns about the use of any assets in this project, please contact me directly.

---

Built with ❤️ using retro aesthetics
