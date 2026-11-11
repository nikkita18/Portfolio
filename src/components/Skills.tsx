import React from 'react';
import { Code2, Globe, Cpu, Terminal, Palette, Video } from 'lucide-react';
import { SKILL_GROUPS } from '../data/portfolioData';

export const Skills: React.FC = () => {
  const getGroupIcon = (iconName: string) => {
    switch (iconName) {
      case 'Code2':
        return <Code2 size={20} />;
      case 'Globe':
        return <Globe size={20} />;
      case 'Cpu':
        return <Cpu size={20} />;
      case 'Terminal':
        return <Terminal size={20} />;
      case 'Palette':
        return <Palette size={20} />;
      case 'Video':
        return <Video size={20} />;
      default:
        return <Code2 size={20} />;
    }
  };

  return (
    <section id="skills" style={{ padding: '100px 24px', position: 'relative' }}>
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
            TECHNICAL & CREATIVE CAPABILITIES
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
            Structured <span style={{ color: '#a78b71' }}>Toolkit</span> &{' '}
            <span style={{ color: '#c9b8a0' }}>Disciplines</span>
          </h2>
          <p
            style={{
              fontSize: '14px',
              color: '#a3a3a3',
              maxWidth: '540px',
              margin: '16px auto 0',
              lineHeight: 1.6
            }}
          >
            Ground truth tools and frameworks verified across actual repository commits, coursework, certifications, and delivered designs.
          </p>
          <div
            style={{
              width: '60px',
              height: '1px',
              backgroundColor: '#a78b71',
              margin: '20px auto 0'
            }}
          />
        </div>

        {/* Grouped Skills Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 300px), 1fr))',
            gap: '24px'
          }}
        >
          {SKILL_GROUPS.map((group, idx) => (
            <div
              key={idx}
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
                <div style={{ display: 'flex', alignItems: 'center', gap: '14px', marginBottom: '20px' }}>
                  <div className="gold-icon-container">
                    {getGroupIcon(group.iconName)}
                  </div>
                  <h3
                    style={{
                      fontFamily: 'Playfair Display, serif',
                      fontSize: '18px',
                      color: '#f5f3ef',
                      fontWeight: 600
                    }}
                  >
                    {group.name}
                  </h3>
                </div>

                <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '12px', padding: 0 }}>
                  {group.skills.map((skill, sIdx) => (
                    <li
                      key={sIdx}
                      style={{
                        display: 'flex',
                        alignItems: 'baseline',
                        justifyContent: 'space-between',
                        paddingBottom: '8px',
                        borderBottom: '1px solid rgba(255, 255, 255, 0.05)'
                      }}
                    >
                      <span style={{ fontSize: '14px', fontWeight: 500, color: '#f5f3ef' }}>
                        {skill.name}
                      </span>
                      {skill.note && (
                        <span style={{ fontSize: '11.5px', color: '#a3a3a3', textAlign: 'right', marginLeft: '12px' }}>
                          {skill.note}
                        </span>
                      )}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
