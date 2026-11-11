import React from 'react';
import { ArrowUp, Mail } from 'lucide-react';
import { GithubIcon, LinkedinIcon, YoutubeIcon } from './Icons';
import { PERSONAL_INFO } from '../data/portfolioData';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer
      style={{
        borderTop: '1px solid rgba(255, 255, 255, 0.08)',
        backgroundColor: '#070708',
        padding: '70px 24px 40px',
        position: 'relative',
        zIndex: 10
      }}
    >
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
            gap: '40px',
            marginBottom: '50px'
          }}
        >
          {/* Col 1: Wordmark & Bio */}
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '4px', marginBottom: '14px' }}>
              <span
                style={{
                  fontFamily: 'Playfair Display, serif',
                  fontSize: '1.6rem',
                  fontStyle: 'italic',
                  fontWeight: 700,
                  color: '#f5f3ef'
                }}
              >
                Nikita Kumari
              </span>
              <span style={{ width: '6px', height: '6px', borderRadius: '50%', backgroundColor: '#a78b71' }} />
            </div>

            <p style={{ fontSize: '13.5px', color: '#a3a3a3', lineHeight: 1.7, maxWidth: '320px', marginBottom: '20px' }}>
              Computer Science & Engineering student at Siksha 'O' Anusandhan (SOA), Bhubaneswar. Building software platforms and visual communications.
            </p>

            <div style={{ display: 'flex', gap: '14px' }}>
              <a
                href={PERSONAL_INFO.socials.github}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                style={{ color: '#a3a3a3', transition: 'color 0.2s' }}
                onMouseEnter={(e) => (e.currentTarget.style.color = '#f5f3ef')}
                onMouseLeave={(e) => (e.currentTarget.style.color = '#a3a3a3')}
              >
                <GithubIcon size={18} />
              </a>
              <a
                href={PERSONAL_INFO.socials.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                style={{ color: '#a3a3a3', transition: 'color 0.2s' }}
                onMouseEnter={(e) => (e.currentTarget.style.color = '#f5f3ef')}
                onMouseLeave={(e) => (e.currentTarget.style.color = '#a3a3a3')}
              >
                <LinkedinIcon size={18} />
              </a>
              <a
                href={PERSONAL_INFO.socials.youtube}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="YouTube"
                style={{ color: '#a3a3a3', transition: 'color 0.2s' }}
                onMouseEnter={(e) => (e.currentTarget.style.color = '#f5f3ef')}
                onMouseLeave={(e) => (e.currentTarget.style.color = '#a3a3a3')}
              >
                <YoutubeIcon size={18} />
              </a>
              <a
                href={`mailto:${PERSONAL_INFO.email}`}
                aria-label="Email"
                style={{ color: '#a3a3a3', transition: 'color 0.2s' }}
                onMouseEnter={(e) => (e.currentTarget.style.color = '#f5f3ef')}
                onMouseLeave={(e) => (e.currentTarget.style.color = '#a3a3a3')}
              >
                <Mail size={18} />
              </a>
            </div>
          </div>

          {/* Col 2: Navigation Links */}
          <div>
            <h4 style={{ fontSize: '12px', letterSpacing: '0.14em', textTransform: 'uppercase', color: '#c9b8a0', fontWeight: 600, marginBottom: '18px' }}>
              Navigation
            </h4>
            <ul style={{ listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: '10px' }}>
              {['About', 'Skills', 'Work', 'Experience', 'Credentials', 'Contact'].map((item, i) => (
                <li key={i}>
                  <a
                    href={`#${item.toLowerCase()}`}
                    style={{
                      fontSize: '13px',
                      color: '#a3a3a3',
                      textDecoration: 'none',
                      transition: 'color 0.2s'
                    }}
                    onMouseEnter={(e) => (e.currentTarget.style.color = '#e8d5b7')}
                    onMouseLeave={(e) => (e.currentTarget.style.color = '#a3a3a3')}
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Selected Work Categories */}
          <div>
            <h4 style={{ fontSize: '12px', letterSpacing: '0.14em', textTransform: 'uppercase', color: '#c9b8a0', fontWeight: 600, marginBottom: '18px' }}>
              Specializations
            </h4>
            <ul style={{ listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: '10px' }}>
              {[
                'Full-Stack Web Development',
                'Machine Learning & Data Modeling',
                'Graphic & Poster Design',
                'Executive Slide Architecture',
                'Short-Form Video Editing'
              ].map((spec, i) => (
                <li key={i} style={{ fontSize: '13px', color: '#a3a3a3' }}>
                  {spec}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div
          style={{
            paddingTop: '28px',
            borderTop: '1px solid rgba(255, 255, 255, 0.05)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            flexWrap: 'wrap',
            gap: '16px'
          }}
        >
          <div style={{ fontSize: '12px', color: '#737373' }}>
            © {new Date().getFullYear()} Nikita Kumari. Crafted with precision in gold and obsidian.
          </div>

          <button
            onClick={scrollToTop}
            aria-label="Scroll back to top"
            style={{
              background: 'transparent',
              border: '1px solid rgba(255, 255, 255, 0.1)',
              borderRadius: '50%',
              width: '36px',
              height: '36px',
              color: '#c9b8a0',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              transition: 'all 0.2s'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.borderColor = '#a78b71';
              e.currentTarget.style.color = '#f5f3ef';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.1)';
              e.currentTarget.style.color = '#c9b8a0';
            }}
          >
            <ArrowUp size={16} />
          </button>
        </div>
      </div>
    </footer>
  );
};
