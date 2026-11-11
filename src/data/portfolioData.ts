import {
  DevProject,
  DesignProject,
  PresentationProject,
  VideoProject,
  ExperienceItem,
  EducationItem,
  CertificationItem,
  AwardItem,
  SkillGroup
} from '../types';

export const PERSONAL_INFO = {
  name: 'Nikita Kumari',
  title: 'Computer Science Engineer & Visual Designer',
  roleDescriptor: 'DEVELOPER · DESIGNER · CREATOR',
  headlineItalic: 'Code meets',
  headlineAccent: 'creativity',
  headlineSub: 'Engineered with logic. Polished with aesthetic restraint.',
  bio: "I am a Computer Science & Engineering undergraduate at Siksha 'O' Anusandhan (SOA), Bhubaneswar, with a foundational background from Government Women's Polytechnic, Ranchi. I work across the spectrum of software engineering, artificial intelligence platforms, and visual communication—building robust full-stack applications while crafting purposeful graphic designs, slide decks, and digital media.",
  location: 'Bhubaneswar, Odisha · Ranchi, Jharkhand',
  email: 'itznikita18@gmail.com',
  statusPill: 'PORTFOLIO / 2026',
  stats: [
    { label: 'Degree in Progress', value: 'B.Tech CSE', sub: 'SOA (ITER), Bhubaneswar' },
    { label: 'Technical Foundation', value: 'Diploma CSE', sub: '8.33 CGPA, Ranchi' },
    { label: 'Hackathon Award', value: '3rd Place', sub: 'WELOCITY AI 2026' },
    { label: 'Public Repositories', value: '8+ Projects', sub: 'Open-source on GitHub' }
  ],
  socials: {
    github: 'https://github.com/nikkita18',
    linkedin: 'https://www.linkedin.com/in/nikitakumari18',
    youtube: 'https://youtube.com/@cozyblissz?si=zr_ZAiQXqKhiGfWa',
    email: 'mailto:itznikita18@gmail.com'
  },
  resumePath: '/documents/resume/Nikita_Kumari_CV.pdf'
};

export const SKILL_GROUPS: SkillGroup[] = [
  {
    name: 'Programming & Languages',
    iconName: 'Code2',
    skills: [
      { name: 'Python', note: 'Data structures, scripting, ML' },
      { name: 'Java', note: 'Object-oriented programming' },
      { name: 'JavaScript (ES6+)', note: 'Frontend logic & DOM' },
      { name: 'SQL / MySQL', note: 'Relational data modeling' },
      { name: 'HTML5 & CSS3', note: 'Semantic, responsive layouts' }
    ]
  },
  {
    name: 'Web & Backend Frameworks',
    iconName: 'Globe',
    skills: [
      { name: 'Python Flask', note: 'REST APIs & Jinja2 templating' },
      { name: 'Node.js & Vite', note: 'Modern tooling & frontend workflows' },
      { name: 'Responsive Web Design', note: 'Mobile-first architectures' },
      { name: 'RESTful API Integration', note: 'Client-server communications' },
      { name: 'Web Audio API & Canvas', note: 'Interactive synthesizers & games' }
    ]
  },
  {
    name: 'AI, Machine Learning & Data',
    iconName: 'Cpu',
    skills: [
      { name: 'Machine Learning', note: 'Supervised & unsupervised models' },
      { name: 'NumPy & Pandas', note: 'Data preprocessing & analysis' },
      { name: 'Scikit-learn', note: 'Model training & evaluation' },
      { name: 'Deep Learning & Neural Nets', note: 'NIELIT certified' },
      { name: 'OCI AI Foundations', note: 'Oracle Cloud certified' }
    ]
  },
  {
    name: 'Developer Tools & Platforms',
    iconName: 'Terminal',
    skills: [
      { name: 'Git & GitHub', note: 'Version control & collaboration' },
      { name: 'VS Code', note: 'Primary development environment' },
      { name: 'MySQL Workbench', note: 'Database schema management' },
      { name: 'Vercel & Netlify', note: 'Cloud frontend deployments' },
      { name: 'Linux / Command Line', note: 'Shell scripting & automation' }
    ]
  },
  {
    name: 'Graphic & Visual Design',
    iconName: 'Palette',
    skills: [
      { name: 'Event & Poster Design', note: 'Social creatives & key visuals' },
      { name: 'Speaker Media Kits', note: 'Professional one-sheets & kits' },
      { name: 'Layout & Typography', note: 'Visual hierarchy & contrast' },
      { name: 'Adobe Photoshop', note: 'Asset compositing & retouching' },
      { name: 'Adobe Illustrator & Canva', note: 'Vector graphics & layouts' }
    ]
  },
  {
    name: 'Presentation & Video Editing',
    iconName: 'Video',
    skills: [
      { name: 'Presentation Design', note: 'Multi-slide conference decks' },
      { name: 'Short-Form Video Editing', note: 'Pacing, sound design & cuts' },
      { name: 'YouTube Shorts & Reels', note: '9:16 vertical storytelling' },
      { name: 'Slide Layout & Storylining', note: 'Executive clarity & diagrams' }
    ]
  }
];

export const DEV_PROJECTS: DevProject[] = [
  {
    id: 'agahi',
    title: 'AGAHI — Vision Zero Road Safety Platform',
    tagline: 'Real-Time Traffic Conflict Analytics & SUMO Accident Simulation',
    description: 'An intelligent Vision Zero platform that detects traffic near-misses, calculates Time-to-Collision (TTC) and Post-Encroachment Time (PET), maps collision hotspots via 2D KDE, and simulates scenarios in Eclipse SUMO.',
    fullDescription: 'AGAHI represents an advanced computational engineering effort aimed at urban transportation safety. It ingests traffic video data, runs computer vision tracking, computes deterministic trajectory conflict metrics (TTC and PET), projects spatial risk densities with 2D Kernel Density Estimation heatmaps, and interfaces with the Eclipse SUMO micro-simulator to generate diagnostic accident reconstructions.',
    technologies: ['JavaScript', 'Python', 'Eclipse SUMO', 'Traffic Analytics', 'KDE Heatmaps', 'React/Vite'],
    category: 'dev',
    githubUrl: 'https://github.com/nikkita18/AGAHI',
    image: '/images/projects/agahi_web_heatmap.png',
    highlights: [
      'Time-to-Collision (TTC) & Post-Encroachment Time (PET) analytics',
      '2D Kernel Density Estimation risk heatmaps',
      'Microscopic accident simulation in Eclipse SUMO',
      'AI causality diagnostic engine'
    ],
    featured: true,
    date: '2026'
  },
  {
    id: 'tinytasks',
    title: 'TinyTasks — AI-Powered Micro-Task Platform',
    tagline: 'Hyperlocal task posting and smart individual matching platform',
    description: 'A responsive full-stack platform connecting people who need small everyday tasks done with nearby individuals seeking flexible earning opportunities, featuring smart task categorizing and location matching.',
    fullDescription: 'TinyTasks simplifies the local gig economy for everyday tasks. Designed as an end-to-end web application with clean task categorization (Delivery, Tech Help, Errand Running, Moving), interactive task bidding/claiming flows, and status tracking dashboards for both task posters and local workers.',
    technologies: ['HTML5', 'CSS3', 'JavaScript', 'Responsive UI', 'Geolocation Logic'],
    category: 'dev',
    githubUrl: 'https://github.com/nikkita18/TinyTasks',
    image: '/images/projects/tinytasks-cover.png',
    highlights: [
      'Categorized micro-task posting and bidding interface',
      'Hyperlocal matching workflow for community assistance',
      'Live task status tracking and applicant filtering',
      'Mobile-first responsive glassmorphic UI design'
    ],
    featured: true,
    date: 'Sep 2026'
  },
  {
    id: 'tekno-krraft',
    title: 'Tekno Krraft 2026 // UI Sphere',
    tagline: 'Flagship symposium web interface with 3D interactive sphere',
    description: 'Official competition entry for the Google Developer Group (GDG) SOA ITER recruitment challenge, featuring an interactive canvas sphere and immersive futuristic cyber aesthetics.',
    fullDescription: 'Crafted for the Google Developer Group (GDG) SOA, ITER Chapter Recruitment Challenge under the UI Sphere theme. Features an interactive 3D particle sphere canvas, custom typography, micro-interactions, and event agenda layouts showcasing Code, Cloud, AI & Innovation.',
    technologies: ['JavaScript', 'CSS3 Animation', 'Canvas 3D', 'Vercel Deployment'],
    category: 'dev',
    githubUrl: 'https://github.com/nikkita18/Tekno-Krraft-uisphere',
    liveUrl: 'https://teknokrraftuisphere.vercel.app',
    image: '/images/projects/tekno-krraft-cover.jpg',
    highlights: [
      'Interactive 3D particle sphere rendered via Canvas',
      'Engineered for GDG SOA ITER recruitment challenge',
      'Fluid responsiveness and theme-accurate typography',
      'Live production deployment on Vercel'
    ],
    featured: true,
    date: '2026'
  },
  {
    id: 'spotify-clone',
    title: 'Spotify Web Player Clone & Audio Synthesizer',
    tagline: 'Browser audio player with Web Audio Synth & 5-Band Equalizer',
    description: 'A zero-dependency browser web player reproducing Spotify UI with a built-in Web Audio Synthesizer engine, live frequency visualizers, karaoke-style lyrics, and vinyl turntable animation.',
    fullDescription: 'Built with pure Vanilla JavaScript, HTML5, and CSS3 without heavy external audio libraries. Includes a custom-built Web Audio API synthesis engine that generates audio waves in real time, interactive audio frequency bars, a realistic vinyl turntable playback mode, and an adjustable 5-band graphic equalizer.',
    technologies: ['Vanilla JavaScript', 'Web Audio API', 'HTML5 Canvas', 'CSS3 Audio Visualizers'],
    category: 'dev',
    githubUrl: 'https://github.com/nikkita18/Spotify-Clone',
    liveUrl: 'https://nikkita18.github.io/Spotify-Clone/',
    image: '/images/projects/spotify-cover.jpg',
    highlights: [
      'Standalone Web Audio Synthesizer running zero-dependency in browser',
      'Real-time frequency visualizer and 5-band graphic equalizer',
      'Pixel-accurate Spotify web interface with playlist navigation',
      'Vinyl turntable playback animation and interactive lyrics'
    ],
    featured: true,
    date: 'Aug 2026'
  },
  {
    id: 'tvd-quiz-app',
    title: 'Mystic Falls — The Vampire Diaries Lore Sanctum',
    tagline: 'Interactive supernatural trivia web app with Flask & dynamic scoring',
    description: 'A themed supernatural trivia and lore sanctum based on The Vampire Diaries, featuring multi-tiered quiz challenges, lore archives, bloodline leaderboards, and atmospheric audio.',
    fullDescription: 'Built with Python Flask backend routing and dynamic frontend templating. Features multi-round trivia question banks, live streak tracking, custom animated Mystic Falls UI, dynamic scoring algorithms, and seamless cloud deployment on Vercel.',
    technologies: ['HTML5', 'CSS3', 'JavaScript', 'Python Flask', 'Vercel'],
    category: 'dev',
    githubUrl: 'https://github.com/nikkita18/tvd-quiz-app',
    liveUrl: 'https://tvd-quiz-app.vercel.app',
    image: '/images/projects/tvd-quiz-cover.png',
    highlights: [
      'Multi-tiered supernatural trivia engine with custom scoring',
      'Atmospheric gothic aesthetic with animated elements',
      'Python Flask integration with REST endpoints',
      'Deployed live on Vercel with instant performance'
    ],
    featured: true,
    date: '2026'
  },
  {
    id: 'super-mario-2d',
    title: 'Super Mario Bros. — NES Edition (2D Platformer)',
    tagline: 'Pure HTML5 Canvas 2D platformer with custom physics & audio',
    description: 'A retro recreation of classic NES Super Mario built from scratch using HTML5 Canvas, Vanilla JavaScript, and the Web Audio API without any external game engines.',
    fullDescription: 'Engineered with fundamental game development principles: custom frame-loop timing, Axis-Aligned Bounding Box (AABB) collision detection, gravity and acceleration physics, tilemap level parsing, sprite sheet rendering, and procedural 8-bit sound effects synthesized through the Web Audio API.',
    technologies: ['Vanilla JavaScript', 'HTML5 Canvas', 'Web Audio API', 'AABB Physics', 'Game Loop'],
    category: 'dev',
    githubUrl: 'https://github.com/nikkita18/SuperMario2DGame',
    image: '/images/projects/super-mario-cover.jpg',
    highlights: [
      'Zero-framework physics engine: velocity, gravity, friction',
      'Sprite sheet animation state machine (idle, run, jump)',
      'AABB tilemap collision detection and level progression',
      'Synthesized retro 8-bit sound effects using Web Audio API'
    ],
    featured: false,
    date: 'Sep 2026'
  },
  {
    id: 'ipl-akinator',
    title: 'IPL Akinator — Cricket Player Guessing Game',
    tagline: 'Decision-tree player guessing game with interactive UI',
    description: 'An interactive cricket-player guessing game that predicts IPL players through a dynamic question-and-elimination decision-tree algorithm with responsive real-time feedback.',
    fullDescription: 'Inspired by the 20 questions game format, this application leverages a structured attribute-matching decision tree containing IPL cricketer profiles (batting style, bowling hand, franchise, international caps, strike rate). At each turn, questions bifurcate player sets until the target player is predicted.',
    technologies: ['JavaScript', 'HTML5', 'CSS3', 'Decision Trees', 'Algorithm Design'],
    category: 'dev',
    githubUrl: 'https://github.com/nikkita18/IPL_Akinator',
    image: '/images/projects/ipl-akinator-cover.jpg',
    highlights: [
      'Binary decision-tree filtering algorithm',
      'Comprehensive IPL player attribute dataset',
      'Dynamic question sequencing based on remaining entropy',
      'Mascot animations and reactive state updates'
    ],
    featured: false,
    date: 'Sep 2026'
  }
];

export const ALL_REPOSITORIES = [
  {
    name: 'AGAHI',
    description: 'Vision Zero Road Safety & Digital Twin Platform: Real-Time Traffic Conflict Analytics, Microscopic SUMO Accident Simulation & AI Causality Diagnostic Engine.',
    language: 'JavaScript',
    stars: 0,
    url: 'https://github.com/nikkita18/AGAHI',
    topics: ['traffic-safety', 'sumo-simulation', 'vision-zero', 'analytics']
  },
  {
    name: 'TinyTasks',
    description: 'AI-powered micro-task platform connecting people who need small everyday tasks done with nearby individuals looking to earn quickly and flexibly.',
    language: 'CSS / JS',
    stars: 0,
    url: 'https://github.com/nikkita18/TinyTasks',
    topics: ['micro-tasks', 'hyperlocal', 'fullstack', 'gig-economy']
  },
  {
    name: 'Tekno-Krraft-uisphere',
    description: 'Official competition entry for GDG SOA, ITER Chapter Recruitment Challenge: UI Sphere. Interactive 3D Canvas sphere symposium web experience.',
    language: 'CSS / JS',
    stars: 0,
    url: 'https://github.com/nikkita18/Tekno-Krraft-uisphere',
    liveUrl: 'https://teknokrraftuisphere.vercel.app',
    topics: ['gdg-iter', 'ui-sphere', 'creative-web', 'canvas']
  },
  {
    name: 'Spotify-Clone',
    description: 'Ultra-modern Spotify Web Player clone with built-in Web Audio Synthesizer Engine, dynamic Live Audio Visualizers, Vinyl Turntable, and 5-Band Equalizer.',
    language: 'HTML / JS',
    stars: 0,
    url: 'https://github.com/nikkita18/Spotify-Clone',
    liveUrl: 'https://nikkita18.github.io/Spotify-Clone/',
    topics: ['spotify-clone', 'web-audio-api', 'synthesizer', 'visualizer']
  },
  {
    name: 'tvd-quiz-app',
    description: 'Mystic Falls: The Vampire Diaries Supernatural Trivia & Lore Sanctum web application with dynamic scoring and atmospheric styling.',
    language: 'HTML / Flask',
    stars: 0,
    url: 'https://github.com/nikkita18/tvd-quiz-app',
    liveUrl: 'https://tvd-quiz-app.vercel.app',
    topics: ['quiz-app', 'flask', 'tvd', 'trivia']
  },
  {
    name: 'SuperMario2DGame',
    description: 'NES Edition 2D Platformer built with HTML5 Canvas, Vanilla JavaScript, custom physics, and Web Audio API 8-bit sound generation.',
    language: 'JavaScript',
    stars: 0,
    url: 'https://github.com/nikkita18/SuperMario2DGame',
    topics: ['game-development', 'canvas', 'vanilla-js', 'retro-game']
  },
  {
    name: 'IPL_Akinator',
    description: 'Cricket player guessing game using a decision-tree based attribute elimination algorithm with interactive mascot UI.',
    language: 'JavaScript',
    stars: 0,
    url: 'https://github.com/nikkita18/IPL_Akinator',
    topics: ['decision-tree', 'akinator', 'cricket', 'javascript']
  },
  {
    name: 'nikkita18',
    description: 'Personal GitHub profile configuration repository.',
    language: 'Markdown',
    stars: 0,
    url: 'https://github.com/nikkita18/nikkita18',
    topics: ['profile', 'config']
  }
];

export const DESIGN_PROJECTS: DesignProject[] = [
  {
    id: 'tech-talk-aman-gupta',
    title: 'Future of Technology — Tech Talk Poster',
    tagline: 'High-impact editorial event poster featuring boAt Co-Founder Aman Gupta',
    description: 'Refined typographic event poster designed with subtle warm gradients, elegant serif typography, portrait cutout framing, and structured event metadata hierarchy.',
    category: 'design',
    type: 'Event Poster / Key Visual',
    tools: ['Graphic Design', 'Typography', 'Adobe Photoshop', 'Canva'],
    image: '/images/designs/aman-gupta-tech-talk.png',
    date: '2025',
    aspectRatio: '4/5',
    details: [
      'Bold headline typographic treatment with background repetition',
      'Careful lighting and contrast adjustment on speaker portrait',
      'Grid-aligned scheduling and location metadata',
      'Warm luxury gold/bronze color palette pairing'
    ]
  },
  {
    id: 'live-webinar-aman-gupta',
    title: 'Live Webinar Announcement — CEO boAt',
    tagline: 'Modern dark-mode keynote webinar visual with high-contrast accents',
    description: 'A striking dark-themed webinar banner balancing deep navy tones, electric lime brand accents, outlined typography, and clean date callouts.',
    category: 'design',
    type: 'Social Media Creative / Webinar Banner',
    tools: ['Graphic Design', 'Layout Hierarchy', 'Visual Branding'],
    image: '/images/designs/aman-gupta-live-webinar.png',
    date: '2025',
    aspectRatio: '4/5',
    details: [
      'High-contrast neon brand badge and live indicator',
      'Dual-layer typography with filled and outlined heading styles',
      'Pill-shaped badge styling for time and session scheduling',
      'Optimized for mobile social feeds and Instagram 4:5 ratio'
    ]
  },
  {
    id: 'building-a-startup-workshop',
    title: 'Building a Startup from Scratch Workshop',
    tagline: 'Editorial monochrome-forward masterclass poster with marble textures',
    description: 'Minimalist workshop creative focusing on visual storytelling and identity tips. Employs asymmetric framing, split color blocking, and clean registration CTAs.',
    category: 'design',
    type: 'Workshop & Masterclass Creative',
    tools: ['Graphic Design', 'Editorial Layout', 'Composition'],
    image: '/images/designs/building-startup-workshop.png',
    date: 'Aug 2025',
    aspectRatio: '4/5',
    details: [
      'Asymmetric split-color composition with subtle marble texture',
      'Strong sans-serif headline lockup for instant scanning',
      'Clear session logistics with custom date/time icon pills',
      'Distinct primary registration action container'
    ]
  },
  {
    id: 'abhishek-singha-speaker-kit',
    title: 'Speaker One-Sheet & Executive Media Kit',
    tagline: 'Clean metric-driven personal branding sheet for senior tech speaker',
    description: 'Professional speaker one-sheet featuring Abhishek Raj Singha. Presents key biography points, Top 1% mentor metrics, 50K+ learners data, and platform analytics in a clean card hierarchy.',
    category: 'design',
    type: 'Speaker Media Kit & Brand One-Sheet',
    tools: ['Layout Design', 'Infographic Data Cards', 'Personal Branding'],
    image: '/images/designs/abhishek-singha-speaker-kit.png',
    date: '2025',
    aspectRatio: '1414/2000',
    details: [
      'Arch-frame speaker portrait with elegant dual-tone typography',
      'Bold credential statistics (1% Topmate, 50K+ Learners, 100+ Sessions)',
      'Side-by-side metric cards for LinkedIn and Topmate performance',
      'Corporate partner logo row and footer contact badges'
    ]
  }
];

export const PRESENTATION_PROJECTS: PresentationProject[] = [
  {
    id: 'ai-in-gaming',
    title: 'AI in Gaming: Revolutionizing the Industry',
    tagline: '19-Slide comprehensive presentation deck on AI mechanics, intelligent NPCs & procedural worlds',
    description: 'A 19-slide presentation exploring the transformation of game development through Artificial Intelligence. Covers intelligent NPC behavior, dynamic game mechanics, procedural world generation, player adaptation algorithms, and commercial benefits.',
    category: 'presentation',
    slideCount: 19,
    tools: ['Microsoft PowerPoint', 'Presentation Architecture', 'Visual Diagrams'],
    coverImage: '/images/presentations/ai-in-gaming/slide-1.png',
    slideImages: Array.from({ length: 19 }, (_, i) => `/images/presentations/ai-in-gaming/slide-${i + 1}.png`),
    pdfUrl: '/documents/presentations/ai-in-gaming.pdf',
    date: '2025',
    topics: [
      'AI Foundations in Interactive Entertainment',
      'Intelligent Non-Player Characters (NPCs) & Behavioral Trees',
      'AI-Powered Adaptive Game Mechanics',
      'Procedural Content & Environment Generation',
      'Commercial Benefits and Future Industry Outlook'
    ]
  },
  {
    id: 'graphic-portfolio-deck',
    title: 'Visual Identity & Graphic Design Showcase',
    tagline: '6-Slide editorial portfolio deck exploring minimalism, branding & print design',
    description: 'An editorial design presentation deck emphasizing minimalism, typographic balance, branding systems, and print design philosophy. Showcases disciplined whitespace and visual restraint.',
    category: 'presentation',
    slideCount: 6,
    tools: ['Editorial Presentation', 'Slide Layout', 'Brand Systems'],
    coverImage: '/images/presentations/graphic-portfolio/slide-1.png',
    slideImages: Array.from({ length: 6 }, (_, i) => `/images/presentations/graphic-portfolio/slide-${i + 1}.png`),
    pdfUrl: '/documents/presentations/graphic-portfolio.pdf',
    date: '2025',
    topics: [
      'Design Philosophy: Brevity & Minimalism',
      'Brand Identity Systems & Visual Hierarchy',
      'Editorial Print and Digital Media Applications',
      'Case Studies and Contact Blueprint'
    ]
  }
];

export const VIDEO_PROJECTS: VideoProject[] = [
  {
    id: 'short-1-nature-aesthetic',
    title: 'Aesthetic Serenity — Atmospheric Nature Visuals',
    tagline: 'Cinematic color grading, fluid pacing & organic sound design',
    description: 'A calm, visually rhythmic short-form video edit emphasizing atmospheric landscapes, natural light dynamics, subtle color grading, and ambient sound design.',
    category: 'video',
    format: 'Shorts',
    youtubeId: 'Sk_Ngu4RHKo',
    youtubeUrl: 'https://youtube.com/shorts/Sk_Ngu4RHKo',
    thumbnailUrl: '/images/videos/short-1-nature-aesthetic.jpg',
    aspectRatio: '9/16',
    tools: ['Video Editing', 'Color Grading', 'Pacing & Sound Design'],
    date: '2025'
  },
  {
    id: 'short-2-creative-visual',
    title: 'Visual Flow & Movement Reel',
    tagline: 'Dynamic motion cuts, tempo-matched transitions & mood curation',
    description: 'A short-form creative video edit demonstrating fast rhythmic cutting synced to audio beats, smooth transitions, and visual mood continuity.',
    category: 'video',
    format: 'Shorts',
    youtubeId: 'CkQAGmco5kw',
    youtubeUrl: 'https://youtube.com/shorts/CkQAGmco5kw',
    thumbnailUrl: '/images/videos/short-2-creative-visual.jpg',
    aspectRatio: '9/16',
    tools: ['Video Editing', 'Beat Syncing', 'Motion Transition'],
    date: '2025'
  },
  {
    id: 'short-3-story-reel',
    title: 'Atmospheric Storytelling Short',
    tagline: 'Vertical cinematic composition & narrative micro-pacing',
    description: 'Vertical format storytelling edit crafted for engagement, utilizing balanced typography overlays, controlled focal transitions, and clean audio mastering.',
    category: 'video',
    format: 'Shorts',
    youtubeId: 'LLaSf-qaMas',
    youtubeUrl: 'https://youtube.com/shorts/LLaSf-qaMas',
    thumbnailUrl: '/images/videos/short-3-story-reel.jpg',
    aspectRatio: '9/16',
    tools: ['Video Editing', 'Vertical Framing', 'Audio Mastering'],
    date: '2025'
  }
];

export const HERO_SATELLITES = {
  dev: {
    id: 'tvd-quiz-app',
    badge: 'ENGINEERING',
    title: 'Mystic Falls TVD',
    desc: 'Supernatural Lore Sanctum & Trivia App',
    image: '/images/projects/tvd-quiz-cover.png',
    linkSection: 'work',
    filter: 'dev'
  },
  design: {
    id: 'tech-talk-aman-gupta',
    badge: 'GRAPHIC DESIGN',
    title: 'Tech Talk Poster',
    desc: 'Future of Tech Keynote Visual with Aman Gupta',
    image: '/images/designs/aman-gupta-tech-talk.png',
    linkSection: 'work',
    filter: 'design'
  },
  presentation: {
    id: 'ai-in-gaming',
    badge: 'PRESENTATION',
    title: 'AI in Gaming Deck',
    desc: '19-Slide Industry Architecture Presentation',
    image: '/images/presentations/ai-in-gaming/slide-1.png',
    linkSection: 'work',
    filter: 'presentation'
  },
  video: {
    id: 'short-1-nature-aesthetic',
    badge: 'VIDEO EDIT',
    title: 'Atmospheric Visual',
    desc: 'Cinematic Pacing & Color Grading Edit',
    image: '/images/videos/short-1-nature-aesthetic.jpg',
    linkSection: 'work',
    filter: 'video'
  }
};

export const EXPERIENCE_ITEMS: ExperienceItem[] = [
  {
    id: 'nielit-ml-intern',
    role: 'Machine Learning Intern',
    organization: 'National Institute of Electronics & Information Technology (NIELIT)',
    location: 'Ranchi, Jharkhand (On-site)',
    period: 'Feb 2026 – May 2026',
    type: 'Internship',
    description: 'Completed 4-month Machine Learning Using Python certification and internship, developing predictive and classification models.',
    bullets: [
      'Engineered supervised and unsupervised machine learning pipelines for real-world classification and regression datasets.',
      'Implemented algorithms including linear regression, clustering (K-Means), and multi-layer neural network concepts.',
      'Utilized Python, NumPy, Pandas, and Scikit-learn for exploratory data analysis, feature scaling, and model evaluation metrics.'
    ],
    skills: ['Python', 'Machine Learning', 'NumPy', 'Pandas', 'Scikit-learn', 'Neural Networks']
  },
  {
    id: 'codezeal-python-intern',
    role: 'Summer Intern — Python Development',
    organization: 'Codezeal Technology Pvt. Ltd.',
    location: 'Ranchi, Jharkhand (On-site)',
    period: 'May 2024 – Jun 2024',
    type: 'Internship',
    description: 'Two-month intensive software development internship focused on core Python programming and full-stack web application development.',
    bullets: [
      'Built a full-stack Job Portal web application incorporating user registration, job postings, and search filters.',
      'Designed responsive front-end user interfaces and cleanly coupled them with backend Python business logic.',
      'Gained hands-on experience in real-world software workflows, problem decomposition, and iterative project delivery.'
    ],
    skills: ['Python', 'HTML5', 'CSS3', 'Web Workflows', 'Software Architecture']
  },
  {
    id: 'dzinex-flask-training',
    role: 'App Development Training — Python Flask',
    organization: 'dzinex Tech',
    location: 'Remote / Training',
    period: '2025',
    type: 'Training',
    description: 'Comprehensive practical training on modern web application architecture using Python Flask.',
    bullets: [
      'Developed dynamic, modular web apps using Flask application factories, blueprints, and RESTful routing.',
      'Integrated Jinja2 template inheritance with client-side JavaScript for interactive UI state management.',
      'Constructed backend services with API serialization and clean database access patterns.'
    ],
    skills: ['Python Flask', 'Jinja2', 'REST APIs', 'Backend Development']
  },
  {
    id: 'eepl-dbms-training',
    role: 'Database Management Systems Training',
    organization: 'EEPL Company',
    location: 'Training Program',
    period: '2024',
    type: 'Training',
    description: 'Hands-on practical training covering relational database design, normalization, and complex SQL operations.',
    bullets: [
      'Designed normalized relational schemas (1NF through 3NF) for structured data modeling.',
      'Authored optimized SQL queries involving multi-table JOINs, subqueries, indexing, and aggregate calculations.',
      'Conducted database administration tasks using MySQL, ensuring data integrity and transactional consistency.'
    ],
    skills: ['MySQL', 'SQL', 'Data Modeling', 'Normalization', 'Relational Databases']
  }
];

export const EDUCATION_ITEMS: EducationItem[] = [
  {
    id: 'edu-soa-btech',
    degree: 'B.Tech in Computer Science and Engineering',
    institution: "Siksha 'O' Anusandhan Deemed to be University (SOA), Bhubaneswar",
    period: '2026 – Ongoing (Expected 2029)',
    location: 'Bhubaneswar, Odisha',
    status: 'Current',
    highlights: [
      'Undergraduate CSE curriculum specializing in advanced algorithms, AI systems, and software engineering.',
      'Active participant in technical symposiums, hackathons, and Google Developer Group (GDG) campus initiatives.'
    ]
  },
  {
    id: 'edu-poly-diploma',
    degree: 'Diploma in Computer Science and Engineering',
    institution: "Government Women's Polytechnic, Ranchi",
    period: '2023 – 2026',
    location: 'Ranchi, Jharkhand',
    score: 'CGPA: 8.33 / 10',
    status: 'Completed',
    highlights: [
      'Graduated with distinction (8.33 CGPA) covering core CS foundations, C/Java/Python programming, and DBMS.',
      'Led student technical projects and participated in state-level coding and cybersecurity challenges.'
    ]
  },
  {
    id: 'edu-ssvm-metric',
    degree: 'Matriculation (Secondary Examination)',
    institution: 'Saraswati Shishu Vidya Mandir, Daltonganj',
    period: '2023',
    location: 'Daltonganj, Jharkhand',
    score: '86%',
    status: 'Completed',
    highlights: [
      'Strong academic performance in mathematics, sciences, and computer applications.'
    ]
  }
];

export const AWARDS: AwardItem[] = [
  {
    id: 'award-welocity-2026',
    title: 'WELOCITY AI Hackathon 2026',
    placement: '3rd Place Winner',
    organization: 'AWIB (Women in Business) & Akin Analytics',
    date: 'January 2026',
    description: 'Awarded 3rd place in a national-level AI hackathon, designing and prototyping innovative AI-driven software solutions under intensive time constraints.'
  }
];

export const CERTIFICATIONS: CertificationItem[] = [
  {
    id: 'cert-nielit-ai',
    title: 'Foundation of Artificial Intelligence Technology',
    issuer: 'NIELIT (National Institute of Electronics & Information Technology)',
    date: 'June 2026',
    credentialId: 'AFJHB001603724102455',
    skills: ['Artificial Intelligence', 'Deep Learning', 'Neural Networks'],
    highlight: true
  },
  {
    id: 'cert-oracle-ai',
    title: 'Oracle AI Foundations Associate (OCI 2025)',
    issuer: 'Oracle',
    date: '2025',
    skills: ['AI Concepts', 'Oracle Cloud Infrastructure', 'AI Services Architecture'],
    highlight: true
  },
  {
    id: 'cert-nielit-ml',
    title: 'Machine Learning Using Python',
    issuer: 'NIELIT',
    date: '2026',
    skills: ['Supervised Learning', 'Unsupervised Learning', 'Model Deployment', 'Scikit-learn']
  },
  {
    id: 'cert-delhi-police',
    title: 'Cyber Challenge Delhi Police Hackathon 2024',
    issuer: 'Delhi Police',
    date: '2024',
    skills: ['Cybersecurity', 'Cybercrime Investigation', 'Network Security']
  }
];
