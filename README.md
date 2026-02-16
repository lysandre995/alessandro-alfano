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

- NES.css by [nostalgic-css](https://github.com/nostalgic-css/NES.css)
- 98.css by [jdan](https://github.com/jdan/98.css)
- Pokémon sprites and assets are property of Nintendo/Game Freak

---

Built with ❤️ using retro aesthetics
