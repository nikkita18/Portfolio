import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight, FileText } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

interface NavbarProps {
  activeSection: string;
  onOpenResumeModal: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ activeSection, onOpenResumeModal }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'ABOUT', href: '#about', id: 'about' },
    { label: 'SKILLS', href: '#skills', id: 'skills' },
    { label: 'WORK', href: '#work', id: 'work' },
    { label: 'EXPERIENCE', href: '#experience', id: 'experience' },
    { label: 'CREDENTIALS', href: '#credentials', id: 'credentials' },
    { label: 'CONTACT', href: '#contact', id: 'contact' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#0a0a0a]/85 backdrop-blur-md border-b border-white/10 py-3 shadow-2xl'
          : 'bg-transparent py-4'
      }`}
      style={{ paddingLeft: 'clamp(16px, 4vw, 48px)', paddingRight: 'clamp(16px, 4vw, 48px)' }}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', width: '100%' }}>
        {/* Wordmark */}
        <a
          href="#"
          className="group flex items-center gap-1.5 text-decoration-none"
          style={{ textDecoration: 'none', color: '#f5f3ef' }}
        >
          <span
            className="font-serif italic font-bold tracking-tight"
            style={{ fontFamily: 'Playfair Display, serif', fontSize: 'clamp(1.15rem, 3.5vw, 1.45rem)', fontStyle: 'italic', fontWeight: 700, letterSpacing: '-0.02em', color: '#f5f3ef', whiteSpace: 'nowrap' }}
          >
            Nikita Kumari
          </span>
          <span
            style={{
              width: '5px',
              height: '5px',
              borderRadius: '50%',
              backgroundColor: '#a78b71',
              display: 'inline-block',
              marginLeft: '2px'
            }}
          />
        </a>

        {/* Desktop Center Navigation Links */}
        <nav
          className="nav-desktop"
          style={{ alignItems: 'center', gap: '28px' }}
        >
          {navLinks.map((link) => {
            const isActive = activeSection === link.id;
            return (
              <a
                key={link.id}
                href={link.href}
                className="transition-colors duration-200"
                style={{
                  fontFamily: 'Inter, sans-serif',
                  fontSize: '11.5px',
                  letterSpacing: '0.14em',
                  textTransform: 'uppercase',
                  fontWeight: isActive ? 600 : 400,
                  color: isActive ? '#e8d5b7' : '#a3a3a3',
                  textDecoration: 'none',
                  position: 'relative',
                  padding: '4px 0'
                }}
              >
                {link.label}
                {isActive && (
                  <span
                    style={{
                      position: 'absolute',
                      bottom: '-2px',
                      left: '0',
                      right: '0',
                      height: '1px',
                      backgroundColor: '#a78b71',
                      borderRadius: '1px'
                    }}
                  />
                )}
              </a>
            );
          })}
        </nav>

        {/* Right CTA Actions */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
          <button
            onClick={onOpenResumeModal}
            className="btn-secondary"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '6px',
              fontSize: '11px',
              letterSpacing: '0.08em',
              padding: '7px 14px',
              borderRadius: '9999px',
              background: 'transparent',
              border: '1px solid rgba(255, 255, 255, 0.15)',
              color: '#d1cdc7',
              cursor: 'pointer'
            }}
            title="Preview verified resume"
          >
            <FileText size={13} color="#c9b8a0" />
            <span>CV</span>
          </button>

          <a
            href="#contact"
            className="btn-primary nav-desktop"
            style={{
              fontSize: '12px',
              letterSpacing: '0.08em',
              padding: '9px 20px',
              textDecoration: 'none',
              fontWeight: 600
            }}
          >
            Let's Connect
            <ArrowUpRight size={14} />
          </a>

          {/* Mobile Menu Hamburger */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="nav-mobile-toggle"
            aria-label="Toggle navigation menu"
            style={{
              background: 'rgba(255, 255, 255, 0.05)',
              border: '1px solid rgba(255, 255, 255, 0.15)',
              borderRadius: '8px',
              color: '#f5f3ef',
              padding: '7px 9px',
              cursor: 'pointer',
              alignItems: 'center',
              justifyContent: 'center'
            }}
          >
            {mobileMenuOpen ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div
          style={{
            position: 'absolute',
            top: '100%',
            left: 0,
            right: 0,
            backgroundColor: '#0a0a0a',
            borderBottom: '1px solid rgba(167, 139, 113, 0.25)',
            padding: '24px 32px',
            display: 'flex',
            flexDirection: 'column',
            gap: '18px',
            boxShadow: '0 20px 40px rgba(0,0,0,0.8)'
          }}
        >
          {navLinks.map((link) => (
            <a
              key={link.id}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              style={{
                fontFamily: 'Inter, sans-serif',
                fontSize: '13px',
                letterSpacing: '0.14em',
                textTransform: 'uppercase',
                color: activeSection === link.id ? '#c9b8a0' : '#f5f3ef',
                textDecoration: 'none',
                padding: '6px 0',
                borderBottom: '1px solid rgba(255,255,255,0.05)'
              }}
            >
              {link.label}
            </a>
          ))}
          <div style={{ display: 'flex', gap: '12px', marginTop: '10px' }}>
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenResumeModal();
              }}
              style={{
                flex: 1,
                padding: '12px',
                borderRadius: '9999px',
                border: '1px solid #a78b71',
                background: 'transparent',
                color: '#c9b8a0',
                fontSize: '12px',
                fontWeight: 600,
                letterSpacing: '0.08em',
                cursor: 'pointer'
              }}
            >
              View Resume
            </button>
            <a
              href="#contact"
              onClick={() => setMobileMenuOpen(false)}
              style={{
                flex: 1,
                padding: '12px',
                borderRadius: '9999px',
                background: '#ffffff',
                color: '#0a0a0a',
                fontSize: '12px',
                fontWeight: 600,
                letterSpacing: '0.08em',
                textAlign: 'center',
                textDecoration: 'none'
              }}
            >
              Let's Connect
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
