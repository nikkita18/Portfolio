export type CategoryType = 'all' | 'dev' | 'design' | 'presentation' | 'video';

export interface DevProject {
  id: string;
  title: string;
  tagline: string;
  description: string;
  fullDescription: string;
  technologies: string[];
  category: 'dev';
  githubUrl: string;
  liveUrl?: string;
  image?: string;
  highlights: string[];
  featured: boolean;
  date: string;
  stars?: number;
}

export interface DesignProject {
  id: string;
  title: string;
  tagline: string;
  description: string;
  category: 'design';
  type: string;
  tools: string[];
  image: string;
  gallery?: string[];
  date: string;
  pdfUrl?: string;
  aspectRatio?: string;
  details: string[];
}

export interface PresentationProject {
  id: string;
  title: string;
  tagline: string;
  description: string;
  category: 'presentation';
  slideCount: number;
  tools: string[];
  coverImage: string;
  slideImages: string[];
  pdfUrl: string;
  pptxUrl?: string;
  date: string;
  topics: string[];
}

export interface VideoProject {
  id: string;
  title: string;
  tagline: string;
  description: string;
  category: 'video';
  format: 'Shorts' | 'Reel';
  youtubeId: string;
  youtubeUrl: string;
  thumbnailUrl: string;
  aspectRatio: string;
  tools: string[];
  date: string;
  duration?: string;
}

export type PortfolioItem = DevProject | DesignProject | PresentationProject | VideoProject;

export interface ExperienceItem {
  id: string;
  role: string;
  organization: string;
  location: string;
  period: string;
  type: 'Internship' | 'Training' | 'Project / Founder';
  description: string;
  bullets: string[];
  skills: string[];
}

export interface EducationItem {
  id: string;
  degree: string;
  institution: string;
  period: string;
  location: string;
  score?: string;
  status: 'Current' | 'Completed';
  highlights: string[];
}

export interface CertificationItem {
  id: string;
  title: string;
  issuer: string;
  date: string;
  credentialId?: string;
  skills: string[];
  highlight?: boolean;
}

export interface AwardItem {
  id: string;
  title: string;
  placement: string;
  organization: string;
  date: string;
  description: string;
}

export interface SkillGroup {
  name: string;
  iconName: string;
  skills: { name: string; note?: string }[];
}

