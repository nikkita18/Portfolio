# Antigravity Build Brief — Personal Portfolio
**Project folder:** `NewPortfolio/`  
**Assets folder:** `NewPortfolio/materials/`  
**Primary instruction:** Build the complete portfolio described below. Treat this brief and the supplied UI reference as the source of truth.

---

## 1. Project goal

Create a polished, responsive, single-page personal portfolio for **Nikita Kumari** that presents both sides of her profile:

1. **Computer Science & Development** — web development, Python/software projects, technical skills, GitHub repositories and live demos.
2. **Creative Work** — graphic design, presentation/PPT design and video editing.

The result should feel like one cohesive personal brand, not four unrelated mini-portfolios. It must be easy for a recruiter, collaborator, client or hackathon judge to understand who Nikita is, what she can build, what she can design, and how to contact her.

This is a real portfolio, not a SaaS landing page. Adapt any template components that imply subscriptions, product features, a company team or free trials into meaningful portfolio equivalents. **Do not invent pricing, customers, team members, product features, testimonials or metrics.**

## 2. Non-negotiable visual direction

Use the supplied dark luxury gold-on-black UI reference as the design source. **Do not replace, reinterpret or substantially change its visual style.** Preserve its overall composition, atmosphere, typography pairing, gold/bronze palette, dot-grid background, glass layers, neural connection motif and restrained premium motion.

### Design tokens

```css
:root {
  --bg: #0a0a0a;
  --gold: #a78b71;
  --gold-light: #c9b8a0;
  --gold-hover: #e8d5b7;
  --text: #f5f3ef;
  --muted: #a3a3a3;
  --glass: rgba(255, 255, 255, 0.03);
  --glass-border: rgba(255, 255, 255, 0.1);
  --ease-standard: cubic-bezier(0.4, 0, 0.2, 1);
}
```

- Background: `#0a0a0a`.
- Add a subtle radial dot-grid overlay with 32px spacing and white at 8% opacity. Keep it understated and avoid visual noise.
- Headings: **Playfair Display**, italic where shown in the reference.
- Body/UI: **Inter**, weights 300–700.
- Gold accents only: `#a78b71`, `#c9b8a0`, `#e8d5b7`.
- Glass cards: `rgba(255,255,255,0.03)`, `backdrop-filter: blur(10px)`, `1px solid rgba(255,255,255,0.1)`.
- Use generous corner radii in the 24–48px range for large glass surfaces, while keeping smaller controls refined.
- Central glow: `0 0 100px rgba(167,139,113,0.2)` where appropriate.
- Standard transitions: `cubic-bezier(0.4,0,0.2,1)`.
- Entrance reveals: `power4.out` if GSAP is used; otherwise reproduce the same restrained easing with CSS/IntersectionObserver.
- Maintain strong contrast and clear text hierarchy.
- Small uppercase labels and role metadata should use wide tracking.
- No blue/purple gradients, neon, rainbow accents, bright pastel palettes or unrelated colors.
- Avoid excessive shadows, excessive animation, clutter and unnecessary decoration.
- Respect `prefers-reduced-motion`; all content must remain accessible without animation.
- Do not add generic AI imagery or stock photos just to fill space. Use Nikita's supplied work and genuine project screenshots/media wherever possible.

### Reference-specific components to preserve

**Navigation**
- Fixed, full-width top navigation.
- Horizontal padding around 24–48px, responsive on mobile.
- Text wordmark in bold italic Playfair Display.
- Center navigation links in Inter, around 11px, uppercase and widely tracked.
- Right-side CTA pill: white background, black text, fully rounded.
- Portfolio CTA should say **“Let’s Connect”** or **“View Resume”**, not “Start Free Trial”.
- Mobile navigation must be usable and keyboard accessible.

**Hero**
- Keep the reference's central interactive composition: one central glass panel with floating satellite media/project cards around it.
- Use SVG bezier connection paths between the central panel and satellites. Paths use `stroke-width: 2.5`, a gold gradient from `#c9b8a0` to `#a78b71`, and a subtle `pulsing-branch` opacity animation between 0.4 and 0.7.
- Optional secondary dashed paths: `stroke-dasharray: 5 15`.
- Use the satellite cards to preview actual work: one development project, one design, one presentation and one video edit, selected from the supplied materials and verified GitHub projects.
- Cards should be approximately 220–340px wide where layout permits, with grayscale media transitioning to color on hover over about 0.7s, scale to 1.05 and a restrained gold glow.
- The central card should adapt to the portfolio identity rather than looking like an AI product dashboard.
- Headline size: `clamp(2.5rem, 8vw, 6rem)`, Playfair Display italic, with selected words in base gold.
- Include a short, truthful introduction and two CTAs: an outlined secondary CTA and solid white primary CTA.
- A small floating status pill may say **“OPEN TO OPPORTUNITIES”** only if this is appropriate and supported by the resume/current materials. Otherwise use a neutral label such as **“PORTFOLIO / 2026”**. Do not show a fake live system status.

**Cards and grids**
- Glassmorphic cards with the specified blur, border and surface.
- Hover should brighten the border and subtly scale/animate the icon or media.
- Use gold-tinted icon containers, but do not let icons become the visual focus.
- Use clean grid-based sections with intentional whitespace.

**Footer**
- Multi-column on desktop, responsive stacked layout on mobile.
- Include wordmark, short descriptor, navigation, social links and a contact CTA.
- A “Join Digest” newsletter form is not required; do not create a non-functional email collection form. Replace it with a genuine contact link/button.

## 3. Content sourcing and accuracy rules

The `materials/` folder is the source of truth for supplied assets. Inspect it before building. It may contain:
- Graphic design exports (PNG/JPG/PDF).
- PPT/presentation exports and source files.
- YouTube Shorts or other video-editing links.
- Resume.
- LinkedIn, GitHub and YouTube URLs or notes.

### Required source-of-truth workflow

1. Inspect the complete `NewPortfolio/materials/` folder recursively. Identify file names, file types, dimensions where relevant, and any text/links embedded in documents.
2. Read the resume and extract accurate education, skills, internships, work experience, certifications, achievements and contact details. Use the resume as a primary source for dates and formal details.
3. Use the supplied LinkedIn URL as the profile link. If publicly accessible profile information is available, use it to cross-check experience, education, certifications and achievements. LinkedIn may block automated access; do not attempt to bypass login, scrape private data or invent details. If inaccessible, use the resume and supplied materials, and link to the public profile.
4. Use the supplied GitHub URL/username to inspect **all public repositories** through GitHub's public profile/repository pages or public API. Collect repository name, description, language, topics, README, primary technologies, recent activity where useful, and live demo/deployment links when actually present. Inspect repositories enough to understand what each project does; do not infer a project's purpose from its name alone.
5. Use the supplied YouTube URL/channel to identify relevant editing work and use the supplied Shorts/video links. Do not claim ownership of videos unless the materials/profile make that clear.
6. Cross-check duplicate or conflicting information. Prefer the resume for formal dates and education; use the user's supplied links and project READMEs for project facts.
7. Do not fabricate numbers, performance metrics, client names, job titles, employment dates, awards, project features, repository links or demo URLs.
8. If a detail cannot be verified, omit it or label it clearly as unavailable. Do not leave visible placeholder text in the finished site.
9. Do not publish private contact information unless it is explicitly included for public portfolio use in the supplied resume/materials. Never expose API tokens, secrets, private repository data or credentials.
10. Add external links only after validating that they resolve to the intended public destination. Use safe external-link behavior (`target="_blank"` with `rel="noopener noreferrer"` where appropriate).

### Profile facts available as initial context — verify against supplied materials

- Name: **Nikita Kumari**.
- Current education: **B.Tech in Computer Science & Engineering, ITER, Siksha 'O' Anusandhan (SOA)**, lateral entry; expected graduation 2029.
- Previous education: Diploma in Computer Science & Engineering, Government Women’s Polytechnic, Ranchi; 2023–2026.
- Interests span web development, Python/software development, visual design, presentation design and video editing.
- Known project examples to verify and include if the repositories/materials support them:
  - **The Vampire Diaries Trivia Web App** — Flask/MySQL-based quiz application.
  - **TinyTasks** — local micro-task platform concept; solo-founder project. Present it accurately as a concept/prototype/project according to the available implementation; do not imply a launched business if it is not launched.
  - **IPL Akinator** — cricket-player guessing project; verify implementation and current repository.
  - **Sonic / Spotify Clone** — a music-player web project. A previously shared repository is `https://github.com/nikkita18/Spotify-Clone` and a previously shared deployment is `https://nikkita18.github.io/Spotify-Clone/`; validate both before using.
- Known GitHub username from prior work: **nikkita18**. Confirm against the actual supplied GitHub URL.
- Known LinkedIn profile from prior work: `https://www.linkedin.com/in/nikitakumari18/`. Confirm against supplied materials.
- Relevant achievement to verify: **3rd place at Break the Pattern**, a GDG Ranchi / Women Techmakers event. Confirm exact event naming and date from resume/LinkedIn/materials before publishing.
- Include other internships, freelance/creator work, certificates, hackathons and achievements only when verified in the resume, public profiles or supplied materials.

These are starting clues, not permission to publish unverified claims. If the resume or source links show newer or corrected information, use the verified current information.

## 4. Information architecture — one-page portfolio

Build a smooth-scrolling single-page site with anchored navigation. Sections should feel like a deliberate editorial story.

### A. Hero — “Code meets creativity”

- Wordmark: **Nikita Kumari** (or a restrained monogram if it fits the reference).
- Eyebrow label: `DEVELOPER · DESIGNER · CREATOR` (adjust wording if the verified profile suggests a more accurate descriptor).
- Create a strong headline that communicates the combination of building with code and bringing ideas to life through design. Avoid generic claims such as “visionary”, “ninja” or “AI expert”.
- A concise intro: B.Tech CSE student with a mix of technical project work and visual/content creation. Keep it natural and factual.
- Satellite previews should link to actual portfolio items.
- CTAs:
  - `Explore My Work` → work section.
  - `View Resume` → open/download the supplied resume.
- Social shortcuts: GitHub, LinkedIn, YouTube, only using verified supplied links.

### B. About

- Short first-person bio, warm, confident and professional without sounding like a corporate template.
- Explain the combination of computer science, web development and creative work.
- Mention current education and previous diploma only with verified dates.
- Include a small facts row for verified education/current focus/location if the resume explicitly supports publishing it.
- Do not overstate expertise or years of experience.

### C. Skills / toolkit

Organize skills into clear groups rather than one giant tag cloud:
- **Programming:** Python, Java, JavaScript and any other languages confirmed by resume/GitHub.
- **Web & Backend:** HTML, CSS, Flask, SQL/MySQL and any verified frameworks/tools.
- **Tools & Platforms:** Git, GitHub, VS Code, Canva, Antigravity and other verified tools.
- **Design:** graphic design, layout, typography, social media creatives, presentation design, thumbnail design — include only skills evidenced by supplied work.
- **Video:** video editing, short-form editing, YouTube content — include tools only if confirmed.
- **Additional:** AI/ML, cloud or other subjects only if verified and presented at an accurate proficiency level.

Use a refined layout consistent with the glass cards. Avoid progress bars or fake percentages for skill proficiency. Do not claim “expert” without evidence.

### D. Selected work — main portfolio gallery

Create a clear category filter or tab system:
- `All`
- `Development`
- `Graphic Design`
- `Presentations`
- `Video Editing`

The default `All` view should show a curated selection, not every asset at once. Each item should have:
- Thumbnail/preview.
- Project title.
- Category.
- One- or two-sentence factual description.
- Tools/technologies, when known.
- Relevant date/year, only when known.
- A meaningful action: `View Project`, `View Design`, `Watch Video`, `View Slides`, `GitHub`, `Live Demo` or `Read Case Study`.

Clicking an item should open a polished detail modal or dedicated project-detail route with a larger preview and full context. Include accessible close behavior, keyboard focus management and Escape-to-close. Do not make the visitor leave the portfolio just to see an image or PDF preview.

#### D1. Development projects

- Populate from **all public GitHub repositories**, but curate the main visual display to the strongest and most relevant projects.
- Provide a secondary `All repositories` view/list so the portfolio can represent the complete public GitHub body of work without overwhelming the landing page.
- Each repository entry should show:
  - Repository name and accurate summary.
  - Primary language and relevant stack.
  - GitHub repository link.
  - Live demo link only if verified.
  - Optional README/technical details.
- Do not display empty repositories, forks or tutorial copies as original projects without clear labeling.
- Mark forks/templates appropriately.
- If a project is private or unavailable, do not expose it.

#### D2. Graphic design

- Use actual image files from `materials/` as the portfolio previews.
- Display image previews directly on the page; do not force visitors to open an external link to see a design.
- Use responsive `object-fit` behavior that respects the artwork's original aspect ratio. Avoid cropping important text or visual content.
- Clicking opens a large image viewer/lightbox with title, description and any known context.
- If multiple images belong to one design campaign/project, group them in a gallery/carousel.
- Optimize images to WebP/AVIF where practical while retaining source files.
- Include external Canva links only when explicitly supplied and verified.

#### D3. Presentation / PPT design

- Use slide-one or a generated preview image as the card thumbnail.
- Show a readable PDF preview or embedded viewer in the detail view when supported.
- Include a `Open presentation` or `View PDF` action.
- Keep the original PPT/PPTX downloadable only if it is appropriate and supplied for public sharing.
- Preserve the original slide ratio and do not distort previews.
- If only a PDF is available, do not pretend an editable PowerPoint file exists.

#### D4. Video editing

- Use the supplied YouTube Shorts/video links as the video source.
- Create attractive thumbnails using official video thumbnails where accessible, or use supplied local thumbnails. Do not download/rehost copyrighted video without permission.
- On click, open an embedded YouTube player or a clear external `Watch on YouTube` action.
- Do not autoplay with sound.
- Show title, format/type of edit and tools only when known.
- If the video is a YouTube Short, preserve the vertical 9:16 viewing format in the detail view.
- Do not embed a raw MP4 unless one is actually supplied and is suitable for web delivery.

### E. Experience

Build a chronological timeline or editorial experience list from verified resume/LinkedIn details:
- Internship(s).
- Freelance/creative work, if documented.
- Founder/project experience such as TinyTasks, accurately labeled.
- Relevant leadership, community or event roles, if verified.

For each entry show role, organization, dates and a short description. Use precise distinctions between employment, internship, freelance work, volunteering, founder work and participation. Never convert event participation into employment.

### F. Achievements & certifications

- Show verified awards, hackathon placements, event selections, certificates and notable learning credentials.
- Use a restrained list/grid with certificate thumbnails only when supplied.
- Keep issuer, title and date accurate.
- Do not inflate participation certificates into awards or imply a certification grants professional accreditation.

### G. Resume CTA

- A prominent but elegant resume panel near the lower part of the page.
- Use the exact supplied resume file.
- Provide `View Resume` and `Download Resume`.
- Ensure the file opens correctly and has a descriptive filename.
- Do not reproduce sensitive personal details from the resume elsewhere on the page.

### H. Contact

- A concise invitation to collaborate, discuss projects or connect.
- Use only verified public contact details from the supplied resume/materials.
- Include LinkedIn, GitHub, YouTube and email if supplied.
- Do not include a fake contact form. If a form is implemented, it must genuinely submit and provide clear success/error feedback; otherwise use direct email/contact links.

## 5. Media and asset handling

Use the existing `NewPortfolio/materials/` directory as the source collection. Organize copies/optimized web assets into the app's public asset structure without deleting or modifying the originals.

Suggested structure (adapt to the existing project rather than overwriting it):

```text
NewPortfolio/
├── materials/                  # Original supplied files; preserve these
├── public/
│   ├── images/
│   │   ├── profile/
│   │   ├── designs/
│   │   ├── presentations/
│   │   └── projects/
│   ├── documents/
│   │   └── resume/
│   └── thumbnails/
├── src/
│   ├── components/
│   ├── data/
│   ├── pages/                  # only if the existing framework uses pages
│   └── styles/
└── README.md
```

- Preserve original filenames in an asset manifest or map them to clean descriptive names.
- Build a data-driven portfolio: project cards and media galleries should come from structured data files, not be hard-coded repeatedly into components.
- Use image dimensions/aspect ratios to select appropriate layouts.
- Add lazy loading for below-the-fold images and videos.
- Provide useful alt text for every meaningful image.
- Avoid huge local videos and huge unoptimized images.
- Do not commit `.env`, API keys, tokens or credentials.
- If a remote API is used, prefer public unauthenticated GitHub endpoints for public data. Respect rate limits and use a local build-time data snapshot if necessary.
- The finished site should not depend on a private LinkedIn session to render.

## 6. Functional and interaction requirements

- Responsive desktop, tablet and mobile layouts.
- Fixed navigation with working anchor links and active-section indication.
- Smooth scrolling that respects reduced-motion settings.
- Functional category filtering.
- Functional image lightbox/gallery.
- Functional presentation/PDF preview.
- Functional YouTube embeds or outbound video links.
- Working GitHub repository and live demo links.
- Working resume view/download.
- Working social/contact links.
- Keyboard navigation, visible focus states, semantic landmarks and accessible button labels.
- Good contrast for body text and muted text.
- Avoid layout shift: reserve media aspect ratios and dimensions.
- Loading, empty and error states for remote data.
- No dead buttons, fake toggles, placeholder cards or decorative controls that appear functional but do nothing.
- No fabricated live notifications or fake statistics.
- Keep animations subtle and purposeful.

## 7. Technical implementation guidance

1. First inspect the existing project files and determine the framework, package manager and current state. Do not overwrite a working project or replace its setup without reason.
2. If the project is empty, use a maintainable modern frontend setup already supported by the local environment. Prefer React + TypeScript + Vite if no framework exists, with modular components and clean CSS.
3. Use Lucide or another restrained icon set only if already installed or necessary; do not add icon clutter.
4. Use CSS variables for the design tokens above.
5. Use GSAP only if it is already installed or the project benefits from it; otherwise use CSS and IntersectionObserver. Avoid adding large dependencies for minor effects.
6. Create structured data files for:
   - profile/about information,
   - skills,
   - projects/repositories,
   - design assets,
   - presentations,
   - videos,
   - experience,
   - achievements/certifications,
   - social/contact links.
7. Add a GitHub data-fetch/build script if useful. Handle rate limits, failures and missing descriptions gracefully. Do not expose secrets in frontend code.
8. Add a README with setup, development, build and deployment instructions.
9. Run the app, inspect it in the browser, test every section and interaction, fix console errors and verify mobile responsiveness.
10. Do not stop after generating a static mockup. Deliver a working, populated portfolio.

## 8. Visual quality checklist

Before considering the work complete, verify:

- [ ] It unmistakably follows the supplied black/gold/bronze reference.
- [ ] Playfair Display italic headings and Inter UI/body typography are used consistently.
- [ ] Dot-grid overlay is subtle and correctly spaced.
- [ ] Glass surfaces use the specified transparency, blur and border.
- [ ] Hero has a central focal point and connected satellite previews.
- [ ] Neural SVG lines are responsive and do not obstruct text or controls.
- [ ] No blue/purple/other off-palette accents have crept in.
- [ ] The page feels like a personal creative-technologist portfolio, not an AI SaaS product.
- [ ] Real supplied designs and presentation work are visible in the page.
- [ ] Videos are watchable from their cards/detail views.
- [ ] Public GitHub projects are represented accurately, with a curated featured selection and an all-repositories view.
- [ ] Resume, experience, education and achievements are grounded in supplied evidence.
- [ ] Every CTA and external link works.
- [ ] Layout is polished on narrow mobile screens.
- [ ] Motion is restrained and reduced-motion preferences are respected.
- [ ] No placeholder content, invented facts, broken media or fake functionality remains.

## 9. Final instruction to Antigravity

Work autonomously through the full implementation. Start by auditing `NewPortfolio/` and `NewPortfolio/materials/`, then verify the supplied profile links and resume, build the content inventory, implement the complete portfolio, and test it.

**The design reference is a strict visual constraint. Preserve its exact design language and gold-on-black direction; only adapt the meaning of sections/components so they make sense for a personal portfolio.**

If a source is inaccessible or a fact cannot be verified, do not guess. Continue building with verified information and leave the unsupported item out. At the end, report:
- what sections and features were implemented,
- which source links/repositories were successfully inspected,
- any assets or profile details that could not be accessed,
- how to run/build/deploy the portfolio,
- any remaining tasks that genuinely require Nikita's input.
