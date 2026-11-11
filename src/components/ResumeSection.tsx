import React, { useState } from 'react';
import { FileText, Download, Eye, ExternalLink, Check, Copy } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

interface ResumeSectionProps {
  onOpenResumeModal: () => void;
}

export const ResumeSection: React.FC<ResumeSectionProps> = ({ onOpenResumeModal }) => {
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(PERSONAL_INFO.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <section id="resume" style={{ padding: '80px 24px', position: 'relative' }}>
      <div style={{ maxWidth: '1000px', margin: '0 auto' }}>
        <div
          className="glass-panel"
          style={{
            padding: 'clamp(32px, 5vw, 56px)',
            borderRadius: '36px',
            border: '1px solid rgba(167, 139, 113, 0.35)',
            background: 'linear-gradient(135deg, rgba(167, 139, 113, 0.1) 0%, rgba(18, 18, 20, 0.8) 100%)',
            boxShadow: '0 20px 50px rgba(0, 0, 0, 0.7), 0 0 60px rgba(167, 139, 113, 0.15)'
          }}
        >
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              flexWrap: 'wrap',
              gap: '28px'
            }}
          >
            <div style={{ flex: 1, minWidth: '280px' }}>
              <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', marginBottom: '14px' }}>
                <span className="glass-pill" style={{ fontSize: '11px', padding: '4px 14px', color: '#e8d5b7', fontWeight: 600 }}>
                  OFFICIAL CURRICULUM VITAE
                </span>
              </div>
              <h3
                style={{
                  fontFamily: 'Playfair Display, Georgia, serif',
                  fontSize: 'clamp(1.8rem, 3.5vw, 2.5rem)',
                  fontStyle: 'italic',
                  fontWeight: 600,
                  color: '#f5f3ef',
                  marginBottom: '12px'
                }}
              >
                Comprehensive <span style={{ color: '#a78b71' }}>Resume & Credentials</span>
              </h3>
              <p
                style={{
                  fontSize: '14.5px',
                  color: '#d1cdc7',
                  lineHeight: 1.7,
                  maxWidth: '520px',
                  fontWeight: 300
                }}
              >
                Includes detailed academic coursework, NIELIT and Codezeal internship achievements, technical project architectures, and certified AI proficiencies.
              </p>
            </div>

            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                gap: '12px',
                minWidth: '220px'
              }}
            >
              <button
                onClick={onOpenResumeModal}
                className="btn-primary"
                style={{ width: '100%' }}
              >
                <Eye size={16} />
                <span>Preview Resume</span>
              </button>

              <a
                href={PERSONAL_INFO.resumePath}
                download="Nikita_Kumari_CV.pdf"
                className="btn-secondary"
                style={{ width: '100%' }}
              >
                <Download size={16} />
                <span>Download PDF</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

