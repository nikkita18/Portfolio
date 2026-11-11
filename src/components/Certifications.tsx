import React from 'react';
import { Award, ShieldCheck, CheckCircle2, Trophy, ExternalLink } from 'lucide-react';
import { AWARDS, CERTIFICATIONS } from '../data/portfolioData';

export const Certifications: React.FC = () => {
  return (
    <section id="credentials" style={{ padding: '100px 24px', position: 'relative' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        {/* Section Header */}
        <div style={{ textAlign: 'center', marginBottom: '64px' }}>
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
            HONORS & ACCREDITATIONS
          </p>
          <h2
            style={{
              fontFamily: 'Playfair Display, Georgia, serif',
              fontSize: 'clamp(2.2rem, 4.5vw, 3.5rem)',
              fontStyle: 'italic',
              fontWeight: 600,
              color: '#f5f3ef',
              lineHeight: 1.2
            }}
          >
            Verified <span style={{ color: '#a78b71' }}>Awards</span> &{' '}
            <span style={{ color: '#c9b8a0' }}>Certifications</span>
          </h2>
          <div
            style={{
              width: '60px',
              height: '1px',
              backgroundColor: '#a78b71',
              margin: '20px auto 0'
            }}
          />
        </div>

        {/* Hackathon Honor Featured Card */}
        {AWARDS.map((award, i) => (
          <div
            key={i}
            className="glass-card"
            style={{
              padding: 'clamp(28px, 4vw, 40px)',
              borderRadius: '28px',
              marginBottom: '40px',
              border: '1px solid rgba(167, 139, 113, 0.35)',
              background: 'linear-gradient(135deg, rgba(167, 139, 113, 0.08) 0%, rgba(18, 18, 20, 0.6) 100%)',
              display: 'flex',
              alignItems: 'center',
              gap: '24px',
              flexWrap: 'wrap'
            }}
          >
            <div
              style={{
                width: '64px',
                height: '64px',
                borderRadius: '18px',
                backgroundColor: 'rgba(167, 139, 113, 0.2)',
                border: '1px solid #a78b71',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: '#e8d5b7',
                flexShrink: 0
              }}
            >
              <Trophy size={32} />
            </div>

            <div style={{ flex: 1, minWidth: '280px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '6px', flexWrap: 'wrap' }}>
                <span className="glass-pill" style={{ fontSize: '11px', padding: '4px 12px', color: '#e8d5b7', fontWeight: 700, backgroundColor: 'rgba(167, 139, 113, 0.25)', border: '1px solid #a78b71' }}>
                  {award.placement}
                </span>
                <span style={{ fontSize: '12px', color: '#a78b71', fontWeight: 600 }}>
                  {award.date}
                </span>
              </div>
              <h3 style={{ fontFamily: 'Playfair Display, serif', fontSize: '22px', color: '#f5f3ef', fontWeight: 600, marginBottom: '6px' }}>
                {award.title}
              </h3>
              <p style={{ fontSize: '13.5px', color: '#c9b8a0', marginBottom: '8px' }}>
                Organized by {award.organization}
              </p>
              <p style={{ fontSize: '14px', color: '#d1cdc7', lineHeight: 1.6, fontWeight: 300 }}>
                {award.description}
              </p>
            </div>
          </div>
        ))}

        {/* Certifications Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '24px'
          }}
        >
          {CERTIFICATIONS.map((cert) => (
            <div
              key={cert.id}
              className="glass-card"
              style={{
                padding: '28px',
                borderRadius: '24px',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between'
              }}
            >
              <div>
                <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', marginBottom: '16px' }}>
                  <div className="gold-icon-container">
                    <ShieldCheck size={20} />
                  </div>
                  <span style={{ fontSize: '11px', color: '#a78b71', fontWeight: 600 }}>
                    {cert.date}
                  </span>
                </div>

                <h4 style={{ fontFamily: 'Playfair Display, serif', fontSize: '17px', color: '#f5f3ef', fontWeight: 600, marginBottom: '6px', lineHeight: 1.4 }}>
                  {cert.title}
                </h4>

                <p style={{ fontSize: '13px', color: '#c9b8a0', marginBottom: '14px' }}>
                  {cert.issuer}
                </p>

                {cert.credentialId && (
                  <p style={{ fontSize: '11px', color: '#a3a3a3', marginBottom: '14px', fontFamily: 'monospace' }}>
                    ID: {cert.credentialId}
                  </p>
                )}
              </div>

              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px', paddingTop: '16px', borderTop: '1px solid rgba(255, 255, 255, 0.05)' }}>
                {cert.skills.map((s, idx) => (
                  <span
                    key={idx}
                    style={{
                      fontSize: '11px',
                      color: '#d1cdc7',
                      backgroundColor: 'rgba(255, 255, 255, 0.04)',
                      padding: '3px 8px',
                      borderRadius: '4px'
                    }}
                  >
                    {s}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

