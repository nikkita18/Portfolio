import React, { useEffect } from 'react';
import { X, Download, ExternalLink, FileText, CheckCircle2 } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ResumeModal: React.FC<ResumeModalProps> = ({ isOpen, onClose }) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'auto';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div
      className="modal-overlay"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="resume-modal-title"
    >
      <div
        className="modal-content"
        onClick={(e) => e.stopPropagation()}
        style={{
          maxWidth: '1020px',
          padding: 'clamp(24px, 4vw, 40px)',
          height: '92vh',
          display: 'flex',
          flexDirection: 'column'
        }}
      >
        {/* Header */}
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '20px', flexWrap: 'wrap', gap: '14px' }}>
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '4px' }}>
              <span className="glass-pill" style={{ fontSize: '10.5px', padding: '3px 12px', color: '#c9b8a0', fontWeight: 600 }}>
                VERIFIED RESUME
              </span>
            </div>
            <h2 id="resume-modal-title" style={{ fontFamily: 'Playfair Display, serif', fontSize: '24px', color: '#f5f3ef' }}>
              Nikita Kumari — Curriculum Vitae
            </h2>
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
            <a
              href={PERSONAL_INFO.resumePath}
              download="Nikita_Kumari_CV.pdf"
              className="btn-primary"
              style={{ fontSize: '11px', padding: '8px 18px' }}
            >
              <Download size={14} />
              Download PDF
            </a>
            <a
              href={PERSONAL_INFO.resumePath}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary"
              style={{ fontSize: '11px', padding: '8px 18px' }}
            >
              <ExternalLink size={14} />
              Open In Tab
            </a>
            <button
              onClick={onClose}
              aria-label="Close resume preview"
              style={{
                background: 'rgba(255, 255, 255, 0.08)',
                border: '1px solid rgba(255, 255, 255, 0.15)',
                borderRadius: '50%',
                width: '36px',
                height: '36px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: '#f5f3ef',
                cursor: 'pointer'
              }}
            >
              <X size={18} />
            </button>
          </div>
        </div>

        {/* Embedded PDF Viewer */}
        <div
          style={{
            flex: 1,
            width: '100%',
            borderRadius: '16px',
            overflow: 'hidden',
            border: '1px solid rgba(167, 139, 113, 0.3)',
            backgroundColor: '#151518',
            position: 'relative'
          }}
        >
          <iframe
            src={`${PERSONAL_INFO.resumePath}#toolbar=0&navpanes=0&scrollbar=1`}
            title="Nikita Kumari Resume"
            style={{
              width: '100%',
              height: '100%',
              border: 'none'
            }}
          />
        </div>
      </div>
    </div>
  );
};

