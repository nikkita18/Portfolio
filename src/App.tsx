import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Skills } from './components/Skills';
import { WorkGallery } from './components/WorkGallery';
import { Experience } from './components/Experience';
import { Certifications } from './components/Certifications';
import { ResumeSection } from './components/ResumeSection';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { DetailModal } from './components/DetailModal';
import { ResumeModal } from './components/ResumeModal';
import {
  DEV_PROJECTS,
  DESIGN_PROJECTS,
  PRESENTATION_PROJECTS,
  VIDEO_PROJECTS
} from './data/portfolioData';
import { PortfolioItem, CategoryType } from './types';

export const App: React.FC = () => {
  const [activeSection, setActiveSection] = useState('hero');
  const [selectedItem, setSelectedItem] = useState<PortfolioItem | null>(null);
  const [resumeModalOpen, setResumeModalOpen] = useState(false);
  const [currentCategory, setCurrentCategory] = useState<CategoryType>('all');

  // Track active section for navigation
  useEffect(() => {
    const sectionIds = ['hero', 'about', 'skills', 'work', 'experience', 'credentials', 'contact'];
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 200;
      for (const id of sectionIds) {
        const el = document.getElementById(id);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(id);
            break;
          }
        }
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Handle satellite click in Hero
  const handleSelectSatellite = (filter: 'dev' | 'design' | 'presentation' | 'video', id: string) => {
    setCurrentCategory(filter);

    let targetItem: PortfolioItem | undefined;
    if (filter === 'dev') targetItem = DEV_PROJECTS.find((p) => p.id === id);
    else if (filter === 'design') targetItem = DESIGN_PROJECTS.find((p) => p.id === id);
    else if (filter === 'presentation') targetItem = PRESENTATION_PROJECTS.find((p) => p.id === id);
    else if (filter === 'video') targetItem = VIDEO_PROJECTS.find((p) => p.id === id);

    if (targetItem) {
      setSelectedItem(targetItem);
    } else {
      const workEl = document.getElementById('work');
      if (workEl) workEl.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="relative min-h-screen bg-[#0a0a0a] text-[#f5f3ef]">
      {/* 32px Dot-Grid Background Overlay */}
      <div className="dot-grid-bg" />

      {/* Top Fixed Navigation */}
      <Navbar
        activeSection={activeSection}
        onOpenResumeModal={() => setResumeModalOpen(true)}
      />

      <main>
        {/* Hero with Connected Satellites & Bezier Lines */}
        <Hero
          onSelectSatellite={handleSelectSatellite}
          onOpenResumeModal={() => setResumeModalOpen(true)}
        />

        {/* About Section */}
        <About />

        {/* Skills Grouped Toolkit */}
        <Skills />

        {/* Selected Work Gallery */}
        <WorkGallery
          currentCategory={currentCategory}
          onSelectCategory={(cat) => setCurrentCategory(cat)}
          onOpenDetailModal={(item) => setSelectedItem(item)}
        />

        {/* Experience Timeline */}
        <Experience />

        {/* Awards & Certifications */}
        <Certifications />

        {/* Resume Call-to-Action Panel */}
        <ResumeSection
          onOpenResumeModal={() => setResumeModalOpen(true)}
        />

        {/* Contact Section */}
        <Contact />
      </main>

      {/* Footer */}
      <Footer />

      {/* Project & Media Lightbox / Detail Modal */}
      <DetailModal
        item={selectedItem}
        onClose={() => setSelectedItem(null)}
      />

      {/* Verified Resume PDF Modal */}
      <ResumeModal
        isOpen={resumeModalOpen}
        onClose={() => setResumeModalOpen(false)}
      />
    </div>
  );
};
export default App;

