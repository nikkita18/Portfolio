import React from 'react';
import { GraduationCap, Award, MapPin, Sparkles, Code, Palette, BookOpen } from 'lucide-react';
import { PERSONAL_INFO, EDUCATION_ITEMS, AWARDS } from '../data/portfolioData';

export const About: React.FC = () => {
  return (
    <section id="about" style={{ padding: '100px 24px', position: 'relative' }}>
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
            DISCIPLINE & BACKGROUND
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
            Dual focus:{' '}
            <span style={{ color: '#a78b71' }}>System Engineering</span> &{' '}
            <span style={{ color: '#c9b8a0' }}>Visual Craft</span>
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

        {/* Narrative & Metrics Layout */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 300px), 1fr))',
            gap: '32px',
            marginBottom: '48px'
          }}
        >
          {/* Bio Glass Card */}
          <div
            className="glass-card"
            style={{
              padding: 'clamp(28px, 4vw, 44px)',
              borderRadius: '28px'
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '20px' }}>
              <div className="gold-icon-container">
                <Code size={20} />
              </div>
              <h3 style={{ fontFamily: 'Playfair Display, serif', fontSize: '20px', color: '#f5f3ef', fontWeight: 600 }}>
                Computational Thinking Meets Design
              </h3>
            </div>

            <p style={{ fontSize: '15px', lineHeight: 1.8, color: '#d1cdc7', marginBottom: '20px', fontWeight: 300 }}>
              I view coding and design as complementary expressions of the same problem-solving drive. Software requires architectural rigor, modular logic, and deterministic systems; visual design demands restraint, typography hierarchy, and deliberate narrative flow.
            </p>

            <p style={{ fontSize: '15px', lineHeight: 1.8, color: '#d1cdc7', marginBottom: '24px', fontWeight: 300 }}>
              Whether developing intelligent transportation conflict platforms like <em>AGAHI</em>, prototyping hyperlocal platforms like <em>TinyTasks</em>, or crafting executive keynote slides and event branding, my focus is delivering clean execution without superficial ornament.
            </p>

            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#a78b71', fontSize: '13px', fontWeight: 500 }}>
              <MapPin size={15} />
              <span>Bhubaneswar, Odisha · Ranchi, Jharkhand</span>
            </div>
          </div>

          {/* Education & Verified Milestones */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
            {EDUCATION_ITEMS.map((edu, idx) => (
              <div
                key={idx}
                className="glass-card"
                style={{
                  padding: '24px 28px',
                  borderRadius: '24px',
                  display: 'flex',
                  gap: '18px',
                  alignItems: 'flex-start'
                }}
              >
                <div className="gold-icon-container" style={{ marginTop: '2px' }}>
                  <GraduationCap size={20} />
                </div>
                <div style={{ flex: 1 }}>
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '8px', marginBottom: '4px' }}>
                    <span style={{ fontSize: '11px', letterSpacing: '0.1em', color: '#a78b71', fontWeight: 600 }}>
                      {edu.period}
                    </span>
                    {edu.score && (
                      <span
                        className="glass-pill"
                        style={{ fontSize: '11px', padding: '3px 10px', color: '#c9b8a0', fontWeight: 600 }}
                      >
                        {edu.score}
                      </span>
                    )}
                  </div>
                  <h4 style={{ fontFamily: 'Playfair Display, serif', fontSize: '17px', color: '#f5f3ef', fontWeight: 600, marginBottom: '4px' }}>
                    {edu.degree}
                  </h4>
                  <p style={{ fontSize: '13px', color: '#a3a3a3', marginBottom: '8px' }}>
                    {edu.institution}
                  </p>
                  <p style={{ fontSize: '12px', color: '#c4bfb7', lineHeight: 1.5 }}>
                    {edu.highlights[0]}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Fact Stats Row */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
            gap: '20px'
          }}
        >
          {PERSONAL_INFO.stats.map((stat, idx) => (
            <div
              key={idx}
              className="glass-card"
              style={{
                padding: '24px',
                borderRadius: '22px',
                textAlign: 'center'
              }}
            >
              <div
                style={{
                  fontFamily: 'Playfair Display, Georgia, serif',
                  fontSize: '28px',
                  fontStyle: 'italic',
                  fontWeight: 700,
                  color: '#e8d5b7',
                  marginBottom: '6px'
                }}
              >
                {stat.value}
              </div>
              <div style={{ fontSize: '12px', fontWeight: 600, letterSpacing: '0.08em', color: '#f5f3ef', marginBottom: '4px', textTransform: 'uppercase' }}>
                {stat.label}
              </div>
              <div style={{ fontSize: '11px', color: '#a3a3a3' }}>
                {stat.sub}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
