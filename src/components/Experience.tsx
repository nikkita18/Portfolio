import React from 'react';
import { Briefcase, Calendar, MapPin, CheckCircle2 } from 'lucide-react';
import { EXPERIENCE_ITEMS } from '../data/portfolioData';

export const Experience: React.FC = () => {
  return (
    <section id="experience" style={{ padding: '100px 24px', position: 'relative' }}>
      <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
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
            CAREER & FORMAL TRAINING
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
            Industry <span style={{ color: '#a78b71' }}>Experience</span> &{' '}
            <span style={{ color: '#c9b8a0' }}>Trainings</span>
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

        {/* Editorial Timeline */}
        <div style={{ position: 'relative', display: 'flex', flexDirection: 'column', gap: '32px' }}>
          {/* Subtle connecting vertical line on desktop */}
          <div
            className="timeline-line"
            style={{
              position: 'absolute',
              top: '30px',
              bottom: '30px',
              left: '28px',
              width: '1px',
              backgroundColor: 'rgba(167, 139, 113, 0.25)',
              zIndex: 1
            }}
          />

          {EXPERIENCE_ITEMS.map((exp, idx) => (
            <div
              key={exp.id}
              className="glass-card"
              style={{
                padding: 'clamp(24px, 4vw, 36px)',
                borderRadius: '24px',
                position: 'relative',
                zIndex: 2,
                marginLeft: '0px'
              }}
            >
              <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                {/* Header row */}
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '12px' }}>
                  <div style={{ display: 'flex', gap: '16px', alignItems: 'flex-start' }}>
                    <div className="gold-icon-container" style={{ marginTop: '2px' }}>
                      <Briefcase size={20} />
                    </div>
                    <div>
                      <h3 style={{ fontFamily: 'Playfair Display, serif', fontSize: '20px', color: '#f5f3ef', fontWeight: 600, marginBottom: '4px' }}>
                        {exp.role}
                      </h3>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '8px', flexWrap: 'wrap' }}>
                        <span style={{ fontSize: '14.5px', fontWeight: 600, color: '#c9b8a0' }}>
                          {exp.organization}
                        </span>
                        <span style={{ color: 'rgba(255,255,255,0.2)' }}>•</span>
                        <span style={{ fontSize: '13px', color: '#a3a3a3', display: 'flex', alignItems: 'center', gap: '4px' }}>
                          <MapPin size={13} />
                          {exp.location}
                        </span>
                      </div>
                    </div>
                  </div>

                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                    <span
                      className="glass-pill"
                      style={{
                        fontSize: '11px',
                        padding: '5px 14px',
                        color: '#e8d5b7',
                        fontWeight: 600,
                        display: 'flex',
                        alignItems: 'center',
                        gap: '6px'
                      }}
                    >
                      <Calendar size={12} />
                      {exp.period}
                    </span>
                  </div>
                </div>

                {/* Description */}
                <p style={{ fontSize: '14.5px', color: '#d1cdc7', lineHeight: 1.6, fontWeight: 300 }}>
                  {exp.description}
                </p>

                {/* Bullets */}
                <ul style={{ listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: '10px' }}>
                  {exp.bullets.map((b, bIdx) => (
                    <li
                      key={bIdx}
                      style={{
                        display: 'flex',
                        alignItems: 'flex-start',
                        gap: '12px',
                        fontSize: '13.5px',
                        color: '#f5f3ef',
                        lineHeight: 1.5
                      }}
                    >
                      <span
                        style={{
                          width: '5px',
                          height: '5px',
                          borderRadius: '50%',
                          backgroundColor: '#a78b71',
                          marginTop: '7px',
                          flexShrink: 0
                        }}
                      />
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>

                {/* Skills tags */}
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', paddingTop: '12px', borderTop: '1px solid rgba(255, 255, 255, 0.05)' }}>
                  {exp.skills.map((skill, sIdx) => (
                    <span
                      key={sIdx}
                      style={{
                        fontSize: '11.5px',
                        color: '#c9b8a0',
                        backgroundColor: 'rgba(167, 139, 113, 0.1)',
                        border: '1px solid rgba(167, 139, 113, 0.2)',
                        padding: '3px 10px',
                        borderRadius: '6px'
                      }}
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
