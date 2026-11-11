import React from 'react';
import { ArrowUpRight, Code2, Palette, Video, Presentation, Sparkles, FileText } from 'lucide-react';
import { GithubIcon, LinkedinIcon, YoutubeIcon } from './Icons';
import { PERSONAL_INFO, HERO_SATELLITES } from '../data/portfolioData';

interface HeroProps {
  onSelectSatellite: (filter: 'dev' | 'design' | 'presentation' | 'video', id: string) => void;
  onOpenResumeModal: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onSelectSatellite, onOpenResumeModal }) => {
  return (
    <section
      id="hero"
      style={{
        position: 'relative',
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        paddingTop: '110px',
        paddingBottom: '80px',
        overflow: 'hidden'
      }}
    >
      {/* Central gold radial ambient glow */}
      <div
        className="central-glow"
        style={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          width: 'min(900px, 90vw)',
          height: 'min(700px, 80vh)',
          borderRadius: '50%',
          background: 'radial-gradient(ellipse at center, rgba(167, 139, 113, 0.14) 0%, rgba(167, 139, 113, 0.04) 50%, transparent 75%)',
          filter: 'blur(70px)',
          pointerEvents: 'none',
          zIndex: 1
        }}
      />

      <div
        style={{
          width: '100%',
          maxWidth: '1440px',
          margin: '0 auto',
          padding: '0 clamp(16px, 3vw, 24px)',
          position: 'relative',
          zIndex: 2
        }}
      >
        {/* SVG Neural Bezier Connection Network (Desktop and Tablet) */}
        <div
          className="neural-svg-container"
          style={{
            position: 'absolute',
            inset: 0,
            pointerEvents: 'none',
            zIndex: 1
          }}
        >
          <svg
            width="100%"
            height="100%"
            viewBox="0 0 1440 900"
            fill="none"
            preserveAspectRatio="xMidYMid meet"
            style={{ width: '100%', height: '100%', overflow: 'visible' }}
          >
            <defs>
              <linearGradient id="neuralGold" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#c9b8a0" stopOpacity="0.85" />
                <stop offset="50%" stopColor="#a78b71" stopOpacity="0.7" />
                <stop offset="100%" stopColor="#e8d5b7" stopOpacity="0.4" />
              </linearGradient>

              <filter id="goldGlowFilter" x="-20%" y="-20%" width="140%" height="140%">
                <feGaussianBlur stdDeviation="3.5" result="blur" />
                <feComposite in="SourceGraphic" in2="blur" operator="over" />
              </filter>
            </defs>

            {/* Path 1: Central panel left to Dev Satellite (AGAHI) */}
            <path
              d="M 450 440 C 320 440, 240 310, 180 260"
              stroke="url(#neuralGold)"
              strokeWidth="2.5"
              fill="none"
              className="pulsing-branch"
              filter="url(#goldGlowFilter)"
            />
            {/* Secondary dashed trajectory */}
            <path
              d="M 470 420 C 350 390, 260 290, 190 280"
              stroke="#a78b71"
              strokeWidth="1.2"
              strokeDasharray="5 15"
              strokeOpacity="0.35"
              fill="none"
            />

            {/* Path 2: Central panel right to Design Satellite (Aman Gupta Tech Talk) */}
            <path
              d="M 990 420 C 1120 400, 1200 290, 1260 250"
              stroke="url(#neuralGold)"
              strokeWidth="2.5"
              fill="none"
              className="pulsing-branch-alt"
              filter="url(#goldGlowFilter)"
            />
            <path
              d="M 980 450 C 1100 460, 1210 320, 1250 280"
              stroke="#c9b8a0"
              strokeWidth="1.2"
              strokeDasharray="6 14"
              strokeOpacity="0.3"
              fill="none"
            />

            {/* Path 3: Central panel bottom-left to Presentation Satellite (AI in Gaming) */}
            <path
              d="M 490 560 C 380 620, 290 680, 200 710"
              stroke="url(#neuralGold)"
              strokeWidth="2.5"
              fill="none"
              className="pulsing-branch"
              filter="url(#goldGlowFilter)"
            />

            {/* Path 4: Central panel bottom-right to Video Satellite (Shorts) */}
            <path
              d="M 950 560 C 1060 620, 1160 670, 1240 700"
              stroke="url(#neuralGold)"
              strokeWidth="2.5"
              fill="none"
              className="pulsing-branch-alt"
              filter="url(#goldGlowFilter)"
            />

            {/* Nodes at anchor coordinates */}
            <circle cx="180" cy="260" r="4.5" fill="#e8d5b7" filter="url(#goldGlowFilter)" />
            <circle cx="1260" cy="250" r="4.5" fill="#e8d5b7" filter="url(#goldGlowFilter)" />
            <circle cx="200" cy="710" r="4.5" fill="#c9b8a0" filter="url(#goldGlowFilter)" />
            <circle cx="1240" cy="700" r="4.5" fill="#c9b8a0" filter="url(#goldGlowFilter)" />
          </svg>
        </div>

        {/* Main Composition Grid */}
        <div
          style={{
            position: 'relative',
            zIndex: 3,
            display: 'grid',
            gridTemplateColumns: '1fr',
            gap: '24px',
            alignItems: 'center'
          }}
        >
          {/* SATELLITES ON LARGE SCREENS (Absolute layout mirroring reference) */}
          <div
            className="desktop-satellites"
            style={{
              position: 'absolute',
              inset: 0,
              pointerEvents: 'none',
              zIndex: 10
            }}
          >
            {/* Satellite 1: Top-Left (Development: AGAHI) */}
            <div
              onClick={() => onSelectSatellite('dev', HERO_SATELLITES.dev.id)}
              className="satellite-card glass-card"
              style={{
                position: 'absolute',
                left: '20px',
                top: '60px',
                width: '270px',
                padding: '16px',
                borderRadius: '20px',
                cursor: 'pointer',
                pointerEvents: 'auto'
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '10px' }}>
                <span style={{ fontSize: '10px', letterSpacing: '0.14em', color: '#c9b8a0', fontWeight: 600 }}>
                  {HERO_SATELLITES.dev.badge}
                </span>
                <Code2 size={13} color="#a78b71" />
              </div>
              <div
                style={{
                  width: '100%',
                  height: '110px',
                  borderRadius: '12px',
                  overflow: 'hidden',
                  backgroundColor: '#0a0a0a',
                  marginBottom: '10px'
                }}
              >
                <img
                  src={HERO_SATELLITES.dev.image}
                  alt={HERO_SATELLITES.dev.title}
                  className="satellite-media"
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                />
              </div>
              <h4 style={{ fontFamily: 'Playfair Display, serif', fontSize: '15px', fontWeight: 600, color: '#f5f3ef', marginBottom: '4px' }}>
                {HERO_SATELLITES.dev.title}
              </h4>
              <p style={{ fontSize: '11px', color: '#a3a3a3', lineHeight: 1.4 }}>
                {HERO_SATELLITES.dev.desc}
              </p>
            </div>

            {/* Satellite 2: Top-Right (Graphic Design: Aman Gupta Poster) */}
            <div
              onClick={() => onSelectSatellite('design', HERO_SATELLITES.design.id)}
              className="satellite-card glass-card"
              style={{
                position: 'absolute',
                right: '20px',
                top: '50px',
                width: '260px',
                padding: '16px',
                borderRadius: '20px',
                cursor: 'pointer',
                pointerEvents: 'auto'
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '10px' }}>
                <span style={{ fontSize: '10px', letterSpacing: '0.14em', color: '#c9b8a0', fontWeight: 600 }}>
                  {HERO_SATELLITES.design.badge}
                </span>
                <Palette size={13} color="#a78b71" />
              </div>
              <div
                style={{
                  width: '100%',
                  height: '110px',
                  borderRadius: '12px',
                  overflow: 'hidden',
                  backgroundColor: '#0a0a0a',
                  marginBottom: '10px'
                }}
              >
                <img
                  src={HERO_SATELLITES.design.image}
                  alt={HERO_SATELLITES.design.title}
                  className="satellite-media"
                  style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center 20%' }}
                />
              </div>
              <h4 style={{ fontFamily: 'Playfair Display, serif', fontSize: '15px', fontWeight: 600, color: '#f5f3ef', marginBottom: '4px' }}>
                {HERO_SATELLITES.design.title}
              </h4>
              <p style={{ fontSize: '11px', color: '#a3a3a3', lineHeight: 1.4 }}>
                {HERO_SATELLITES.design.desc}
              </p>
            </div>

            {/* Satellite 3: Bottom-Left (Presentation: AI in Gaming) */}
            <div
              onClick={() => onSelectSatellite('presentation', HERO_SATELLITES.presentation.id)}
              className="satellite-card glass-card"
              style={{
                position: 'absolute',
                left: '40px',
                bottom: '10px',
                width: '270px',
                padding: '16px',
                borderRadius: '20px',
                cursor: 'pointer',
                pointerEvents: 'auto'
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '10px' }}>
                <span style={{ fontSize: '10px', letterSpacing: '0.14em', color: '#c9b8a0', fontWeight: 600 }}>
                  {HERO_SATELLITES.presentation.badge}
                </span>
                <Presentation size={13} color="#a78b71" />
              </div>
              <div
                style={{
                  width: '100%',
                  height: '110px',
                  borderRadius: '12px',
                  overflow: 'hidden',
                  backgroundColor: '#0a0a0a',
                  marginBottom: '10px'
                }}
              >
                <img
                  src={HERO_SATELLITES.presentation.image}
                  alt={HERO_SATELLITES.presentation.title}
                  className="satellite-media"
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                />
              </div>
              <h4 style={{ fontFamily: 'Playfair Display, serif', fontSize: '15px', fontWeight: 600, color: '#f5f3ef', marginBottom: '4px' }}>
                {HERO_SATELLITES.presentation.title}
              </h4>
              <p style={{ fontSize: '11px', color: '#a3a3a3', lineHeight: 1.4 }}>
                {HERO_SATELLITES.presentation.desc}
              </p>
            </div>

            {/* Satellite 4: Bottom-Right (Video: Shorts edit) */}
            <div
              onClick={() => onSelectSatellite('video', HERO_SATELLITES.video.id)}
              className="satellite-card glass-card"
              style={{
                position: 'absolute',
                right: '40px',
                bottom: '10px',
                width: '260px',
                padding: '16px',
                borderRadius: '20px',
                cursor: 'pointer',
                pointerEvents: 'auto'
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '10px' }}>
                <span style={{ fontSize: '10px', letterSpacing: '0.14em', color: '#c9b8a0', fontWeight: 600 }}>
                  {HERO_SATELLITES.video.badge}
                </span>
                <Video size={13} color="#a78b71" />
              </div>
              <div
                style={{
                  width: '100%',
                  height: '110px',
                  borderRadius: '12px',
                  overflow: 'hidden',
                  backgroundColor: '#0a0a0a',
                  marginBottom: '10px'
                }}
              >
                <img
                  src={HERO_SATELLITES.video.image}
                  alt={HERO_SATELLITES.video.title}
                  className="satellite-media"
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                />
              </div>
              <h4 style={{ fontFamily: 'Playfair Display, serif', fontSize: '15px', fontWeight: 600, color: '#f5f3ef', marginBottom: '4px' }}>
                {HERO_SATELLITES.video.title}
              </h4>
              <p style={{ fontSize: '11px', color: '#a3a3a3', lineHeight: 1.4 }}>
                {HERO_SATELLITES.video.desc}
              </p>
            </div>
          </div>

          {/* CENTRAL HERO GLASS PANEL */}
          <div
            className="glass-panel"
            style={{
              maxWidth: '780px',
              width: '100%',
              margin: '0 auto',
              padding: 'clamp(24px, 5vw, 64px)',
              textAlign: 'center',
              position: 'relative',
              borderRadius: 'clamp(24px, 4vw, 44px)',
              boxShadow: '0 24px 60px rgba(0, 0, 0, 0.7), 0 0 80px rgba(167, 139, 113, 0.15)',
              border: '1px solid rgba(255, 255, 255, 0.12)'
            }}
          >
            {/* Top Status Pill */}
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', marginBottom: '20px' }}>
              <div
                className="glass-pill"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '8px',
                  padding: '6px 16px',
                  fontSize: '11px',
                  fontWeight: 600,
                  letterSpacing: '0.14em',
                  color: '#e8d5b7'
                }}
              >
                <span
                  style={{
                    width: '6px',
                    height: '6px',
                    borderRadius: '50%',
                    backgroundColor: '#a78b71',
                    boxShadow: '0 0 10px #a78b71'
                  }}
                />
                {PERSONAL_INFO.statusPill}
              </div>
            </div>

            {/* Sub-headline Eyebrow */}
            <p
              style={{
                fontFamily: 'Inter, sans-serif',
                fontSize: '11.5px',
                letterSpacing: '0.2em',
                textTransform: 'uppercase',
                color: '#c9b8a0',
                marginBottom: '14px',
                fontWeight: 600
              }}
            >
              {PERSONAL_INFO.roleDescriptor}
            </p>

            {/* Main Headline: Playfair Display Italic */}
            <h1
              style={{
                fontFamily: 'Playfair Display, Georgia, serif',
                fontSize: 'clamp(1.85rem, 6vw, 5.2rem)',
                fontStyle: 'italic',
                fontWeight: 600,
                lineHeight: 1.15,
                letterSpacing: '-0.02em',
                marginBottom: '20px',
                color: '#f5f3ef'
              }}
            >
              {PERSONAL_INFO.headlineItalic}
              <br />
              <span
                style={{
                  color: '#a78b71',
                  textShadow: '0 0 40px rgba(167, 139, 113, 0.45)',
                  display: 'inline-block'
                }}
              >
                {PERSONAL_INFO.headlineAccent}
              </span>
            </h1>

            {/* Intro paragraph */}
            <p
              style={{
                fontFamily: 'Inter, sans-serif',
                fontSize: 'clamp(14px, 1.4vw, 16px)',
                lineHeight: 1.7,
                color: '#d1cdc7',
                maxWidth: '560px',
                margin: '0 auto 36px',
                fontWeight: 300
              }}
            >
              B.Tech in Computer Science & Engineering undergraduate at Siksha 'O' Anusandhan (SOA), Bhubaneswar. Synthesizing full-stack software and machine learning models with disciplined visual design, conference decks, and media storytelling.
            </p>

            {/* Two Action CTAs */}
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '16px',
                flexWrap: 'wrap',
                marginBottom: '32px'
              }}
            >
              <a href="#work" className="btn-secondary">
                Explore Selected Work
              </a>
              <button onClick={onOpenResumeModal} className="btn-primary">
                View Resume
                <ArrowUpRight size={15} />
              </button>
            </div>

            {/* Social Shortcuts */}
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '14px',
                flexWrap: 'wrap',
                paddingTop: '20px',
                borderTop: '1px solid rgba(255, 255, 255, 0.08)'
              }}
            >
              <a
                href={PERSONAL_INFO.socials.github}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub profile"
                style={{ color: '#a3a3a3', transition: 'color 0.2s', display: 'flex', alignItems: 'center', gap: '6px', textDecoration: 'none', fontSize: '12px' }}
                onMouseEnter={(e) => (e.currentTarget.style.color = '#e8d5b7')}
                onMouseLeave={(e) => (e.currentTarget.style.color = '#a3a3a3')}
              >
                <GithubIcon size={16} />
                <span>GitHub</span>
              </a>

              <span style={{ color: 'rgba(255,255,255,0.15)' }}>•</span>

              <a
                href={PERSONAL_INFO.socials.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn profile"
                style={{ color: '#a3a3a3', transition: 'color 0.2s', display: 'flex', alignItems: 'center', gap: '6px', textDecoration: 'none', fontSize: '12px' }}
                onMouseEnter={(e) => (e.currentTarget.style.color = '#e8d5b7')}
                onMouseLeave={(e) => (e.currentTarget.style.color = '#a3a3a3')}
              >
                <LinkedinIcon size={16} />
                <span>LinkedIn</span>
              </a>

              <span style={{ color: 'rgba(255,255,255,0.15)' }}>•</span>

              <a
                href={PERSONAL_INFO.socials.youtube}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="YouTube channel"
                style={{ color: '#a3a3a3', transition: 'color 0.2s', display: 'flex', alignItems: 'center', gap: '6px', textDecoration: 'none', fontSize: '12px' }}
                onMouseEnter={(e) => (e.currentTarget.style.color = '#e8d5b7')}
                onMouseLeave={(e) => (e.currentTarget.style.color = '#a3a3a3')}
              >
                <YoutubeIcon size={16} />
                <span>YouTube</span>
              </a>
            </div>
          </div>
        </div>

        {/* MOBILE & TABLET SATELLITE CARDS STRIP (Visible on < xl screens) */}
        <div
          className="mobile-satellites"
          style={{
            marginTop: '40px',
            gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
            gap: '16px'
          }}
        >
          {Object.entries(HERO_SATELLITES).map(([key, sat]) => (
            <div
              key={key}
              onClick={() => onSelectSatellite(sat.filter as any, sat.id)}
              className="glass-card"
              style={{
                padding: '16px',
                borderRadius: '20px',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                gap: '14px'
              }}
            >
              <div
                style={{
                  width: '60px',
                  height: '60px',
                  borderRadius: '12px',
                  overflow: 'hidden',
                  flexShrink: 0,
                  backgroundColor: '#0a0a0a'
                }}
              >
                <img
                  src={sat.image}
                  alt={sat.title}
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                />
              </div>
              <div>
                <span style={{ fontSize: '9.5px', letterSpacing: '0.12em', color: '#c9b8a0', fontWeight: 600 }}>
                  {sat.badge}
                </span>
                <h4 style={{ fontFamily: 'Playfair Display, serif', fontSize: '14px', fontWeight: 600, color: '#f5f3ef' }}>
                  {sat.title}
                </h4>
                <p style={{ fontSize: '11px', color: '#a3a3a3' }}>{sat.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
