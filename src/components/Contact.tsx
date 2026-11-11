import React, { useState } from 'react';
import { Mail, Copy, Check, ArrowUpRight, MapPin } from 'lucide-react';
import { GithubIcon, LinkedinIcon, YoutubeIcon } from './Icons';
import { PERSONAL_INFO } from '../data/portfolioData';

export const Contact: React.FC = () => {
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(PERSONAL_INFO.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <section id="contact" style={{ padding: '100px 24px 80px', position: 'relative' }}>
      <div style={{ maxWidth: '1000px', margin: '0 auto' }}>
        {/* Section Header */}
        <div style={{ textAlign: 'center', marginBottom: '56px' }}>
          <p
            style={{
              fontFamily: 'Inter, sans-serif',
              fontSize: '11.5px',
              letterSpacing: '0.22em',
              textTransform: 'uppercase',
              color: '#c9b8a0',
              fontWeight: 600,
              marginBottom: '12px'
            }}
          >
            COMMUNICATION & INQUIRIES
          </p>
          <h2
            style={{
              fontFamily: 'Playfair Display, Georgia, serif',
              fontSize: 'clamp(2.4rem, 5vw, 4rem)',
              fontStyle: 'italic',
              fontWeight: 600,
              color: '#f5f3ef',
              lineHeight: 1.15
            }}
          >
            Let's build something <span style={{ color: '#a78b71' }}>exceptional</span>
          </h2>
          <p
            style={{
              fontSize: '15px',
              color: '#d1cdc7',
              maxWidth: '520px',
              margin: '18px auto 0',
              lineHeight: 1.7,
              fontWeight: 300
            }}
          >
            Available for software engineering roles, technical internships, collaborative AI platforms, and creative design commissions.
          </p>
          <div
            style={{
              width: '60px',
              height: '1px',
              backgroundColor: '#a78b71',
              margin: '24px auto 0'
            }}
          />
        </div>

        {/* Contact Glass Card */}
        <div
          className="glass-panel"
          style={{
            padding: 'clamp(32px, 5vw, 60px)',
            borderRadius: '32px',
            textAlign: 'center',
            position: 'relative'
          }}
        >
          {/* Email Container */}
          <div
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '12px',
              padding: '10px 22px',
              borderRadius: '9999px',
              backgroundColor: 'rgba(167, 139, 113, 0.12)',
              border: '1px solid rgba(167, 139, 113, 0.35)',
              marginBottom: '28px',
              flexWrap: 'wrap',
              justifyContent: 'center'
            }}
          >
            <Mail size={16} color="#c9b8a0" />
            <a
              href={`mailto:${PERSONAL_INFO.email}`}
              style={{
                fontFamily: 'Inter, sans-serif',
                fontSize: 'clamp(14px, 2vw, 17px)',
                fontWeight: 600,
                color: '#f5f3ef',
                textDecoration: 'none',
                letterSpacing: '0.04em'
              }}
            >
              {PERSONAL_INFO.email}
            </a>

            <button
              onClick={handleCopyEmail}
              aria-label="Copy email address"
              style={{
                background: 'transparent',
                border: 'none',
                color: copied ? '#4ade80' : '#c9b8a0',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                gap: '4px',
                fontSize: '12px',
                fontWeight: 500,
                marginLeft: '6px'
              }}
            >
              {copied ? <Check size={14} /> : <Copy size={14} />}
              <span>{copied ? 'Copied' : 'Copy'}</span>
            </button>
          </div>

          <p style={{ fontSize: '13.5px', color: '#a3a3a3', marginBottom: '36px' }}>
            Direct inbox responses usually within 24 hours.
          </p>

          {/* Social Profiles Grid */}
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
              gap: '16px',
              maxWidth: '750px',
              margin: '0 auto'
            }}
          >
            <a
              href={PERSONAL_INFO.socials.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="glass-card"
              style={{
                padding: '20px',
                borderRadius: '20px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                textDecoration: 'none',
                color: '#f5f3ef'
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                <LinkedinIcon size={20} color="#c9b8a0" />
                <div style={{ textAlign: 'left' }}>
                  <div style={{ fontSize: '13.5px', fontWeight: 600 }}>LinkedIn</div>
                  <div style={{ fontSize: '11px', color: '#a3a3a3' }}>nikitakumari18</div>
                </div>
              </div>
              <ArrowUpRight size={16} color="#a78b71" />
            </a>

            <a
              href={PERSONAL_INFO.socials.github}
              target="_blank"
              rel="noopener noreferrer"
              className="glass-card"
              style={{
                padding: '20px',
                borderRadius: '20px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                textDecoration: 'none',
                color: '#f5f3ef'
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                <GithubIcon size={20} color="#f5f3ef" />
                <div style={{ textAlign: 'left' }}>
                  <div style={{ fontSize: '13.5px', fontWeight: 600 }}>GitHub</div>
                  <div style={{ fontSize: '11px', color: '#a3a3a3' }}>@nikkita18</div>
                </div>
              </div>
              <ArrowUpRight size={16} color="#a78b71" />
            </a>

            <a
              href={PERSONAL_INFO.socials.youtube}
              target="_blank"
              rel="noopener noreferrer"
              className="glass-card"
              style={{
                padding: '20px',
                borderRadius: '20px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                textDecoration: 'none',
                color: '#f5f3ef'
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                <YoutubeIcon size={20} color="#e8d5b7" />
                <div style={{ textAlign: 'left' }}>
                  <div style={{ fontSize: '13.5px', fontWeight: 600 }}>YouTube</div>
                  <div style={{ fontSize: '11px', color: '#a3a3a3' }}>@cozyblissz</div>
                </div>
              </div>
              <ArrowUpRight size={16} color="#a78b71" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
