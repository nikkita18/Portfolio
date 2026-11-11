# Nikita Kumari — Personal Portfolio

A luxury, dark gold-on-black personal portfolio for **Nikita Kumari** showcasing both sides of her professional profile:
1. **Computer Science & Engineering** — Web development, Python / ML projects, traffic conflict analytics, and public open-source repositories.
2. **Creative Work** — Graphic design, event branding, keynote presentation decks, and short-form video editing.

Built strictly according to the **Antigravity Visual Design System**:
- **Palette:** Luxury Gold & Obsidian (`#0a0a0a`, `#a78b71`, `#c9b8a0`, `#e8d5b7`, `#f5f3ef`)
- **Typography:** *Playfair Display* (Italic Headings) paired with *Inter* (UI & Body)
- **Background:** Subtle 32px dot-grid overlay at 8% opacity with warm radial ambient lighting
- **Surfaces:** Ultra-clean glassmorphic cards (`rgba(255, 255, 255, 0.03)` with `backdrop-filter: blur(10px)`)
- **Hero Composition:** Central glass panel anchored with responsive SVG neural bezier connections to interactive satellite work cards
- **Interactive Modals:** High-resolution image lightbox, multi-page brochure viewer, 19-slide presentation slide deck navigator, embedded vertical 9:16 YouTube Shorts player, and an inline verified resume reader.

---

## 🛠️ Tech Stack

- **Framework:** React 18 + TypeScript
- **Bundler & Dev Server:** Vite 5
- **Icons:** Lucide React + Bespoke Brand SVGs
- **Styling:** Modular CSS variables and design tokens (`src/styles/index.css`)
- **Assets:** Genuine project media, slide renders, and verified resume from `materials/`

---

## 🚀 Getting Started

### Prerequisites
- Node.js (v18+ recommended)
- npm or pnpm

### Installation

```bash
# Install dependencies
npm install

# Start local development server
npm run dev

# Open in browser at http://localhost:5173
```

### Production Build

```bash
# Typecheck and compile production bundle into dist/
npm run build

# Preview production build locally
npm run preview
```

---

## 📂 Project Structure

```text
NewPortfolio/
├── materials/                        # Original supplied source materials
│   ├── Graphic Desgining/           # Event posters & speaker kits
│   ├── PPT design/                  # Presentation decks (.pptx and .pdf)
│   ├── Profile Links/               # Verified LinkedIn, GitHub & YouTube links
│   ├── Resume/                      # Verified Nikita Kumari CV PDF
│   └── video editing/               # Verified YouTube Shorts links
├── public/
│   ├── documents/
│   │   ├── resume/Nikita_Kumari_CV.pdf
│   │   └── presentations/           # Rendered presentation PDFs
│   └── images/
│       ├── designs/                 # Optimized graphic design assets
│       ├── presentations/           # 19-slide & 6-slide render sequences
│       ├── projects/                # Verified GitHub project screenshots & banners
│       └── videos/                  # Official YouTube Shorts thumbnails
├── src/
│   ├── components/
│   │   ├── Navbar.tsx               # Fixed navigation with active section indicator & mobile drawer
│   │   ├── Hero.tsx                 # Central interactive composition with neural bezier lines
│   │   ├── About.tsx                # Bio, SOA B.Tech & Diploma education milestones
│   │   ├── Skills.tsx               # Grouped toolkit (Languages, Web, AI/ML, Tools, Design, Video)
│   │   ├── WorkGallery.tsx          # Filterable portfolio gallery + All Repositories directory
│   │   ├── Experience.tsx           # Chronological timeline (NIELIT, Codezeal, EEPL, dzinex)
│   │   ├── Certifications.tsx       # WELOCITY AI 3rd Place, NIELIT & Oracle certifications
│   │   ├── ResumeSection.tsx        # Prominent CV download & preview panel
│   │   ├── Contact.tsx              # Verified email with clipboard copy & social shortcuts
│   │   ├── Footer.tsx               # Multi-column editorial footer
│   │   ├── DetailModal.tsx          # Multi-media modal (code, design gallery, slide deck, video)
│   │   ├── ResumeModal.tsx          # Full-screen embedded PDF resume viewer
│   │   └── Icons.tsx                # Crisp brand SVGs for GitHub, LinkedIn, YouTube
│   ├── data/
│   │   └── portfolioData.ts         # Structured data layer grounded in materials
│   ├── styles/
│   │   └── index.css                # Gold design tokens, glass surfaces, dot-grid, animations
│   ├── types/
│   │   └── index.ts                 # Strict TypeScript data models
│   ├── App.tsx                      # Root application layout
│   └── main.tsx                     # Entrypoint
├── ANTIGRAVITY_PORTFOLIO_BRIEF.md   # Design & specification brief
└── package.json
```

---

## 🔍 Verified Profile Information

- **Name:** Nikita Kumari
- **Current Degree:** B.Tech in Computer Science & Engineering, Siksha 'O' Anusandhan (SOA), Bhubaneswar (2026 – Ongoing)
- **Previous Degree:** Diploma in Computer Science & Engineering, Government Women's Polytechnic, Ranchi (CGPA: 8.33 / 10)
- **Email:** `itznikita18@gmail.com`
- **GitHub:** [https://github.com/nikkita18](https://github.com/nikkita18)
- **LinkedIn:** [https://www.linkedin.com/in/nikitakumari18](https://www.linkedin.com/in/nikitakumari18)
- **YouTube:** [https://youtube.com/@cozyblissz](https://youtube.com/@cozyblissz)
- **Hackathon:** 3rd Place Winner, WELOCITY AI Hackathon 2026 (AWIB & Akin Analytics)
- **Featured Projects:**
  - `AGAHI` — Vision Zero Road Safety & Microscopic SUMO Accident Simulation Platform
  - `TinyTasks` — AI-Powered Hyperlocal Micro-Task Platform
  - `Tekno-Krraft-uisphere` — GDG SOA ITER Challenge Interactive 3D Canvas Sphere
  - `Spotify-Clone` — Zero-dependency Web Audio Synthesizer & Audio Visualizer Web Player
  - `tvd-quiz-app` — The Vampire Diaries Supernatural Trivia Lore Sanctum
  - `SuperMario2DGame` — Pure HTML5 Canvas 2D Platformer
  - `IPL-Akinator` — Cricket Player Guessing Game

