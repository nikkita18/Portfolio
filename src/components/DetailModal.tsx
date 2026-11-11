import React, { useEffect, useState } from 'react';
import { X, ExternalLink, ArrowLeft, ArrowRight, Download, FileText, Play, Layers } from 'lucide-react';
import { GithubIcon } from './Icons';
import { PortfolioItem, DevProject, DesignProject, PresentationProject, VideoProject } from '../types';

interface DetailModalProps {
  item: PortfolioItem | null;
  onClose: () => void;
}

export const DetailModal: React.FC<DetailModalProps> = ({ item, onClose }) => {
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);
  const [currentGalleryIndex, setCurrentGalleryIndex] = useState(0);

  useEffect(() => {
    setCurrentSlideIndex(0);
    setCurrentGalleryIndex(0);
  }, [item]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };
    if (item) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'auto';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [item, onClose]);

  if (!item) return null;

  return (
    <div
      className="modal-overlay"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-title"
    >
      <div
        className="modal-content"
        onClick={(e) => e.stopPropagation()}
        style={{
          padding: 'clamp(24px, 4vw, 44px)',
          position: 'relative'
        }}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          aria-label="Close modal dialog"
          style={{
            position: 'absolute',
            top: '20px',
            right: '20px',
            background: 'rgba(255, 255, 255, 0.06)',
            border: '1px solid rgba(255, 255, 255, 0.15)',
            borderRadius: '50%',
            width: '38px',
            height: '38px',
            color: '#f5f3ef',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            cursor: 'pointer',
            zIndex: 20,
            transition: 'all 0.2s'
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.backgroundColor = 'rgba(167, 139, 113, 0.3)';
            e.currentTarget.style.borderColor = '#a78b71';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.06)';
            e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.15)';
          }}
        >
          <X size={18} />
        </button>

        {/* 1. DEVELOPMENT PROJECT VIEW */}
        {item.category === 'dev' && (() => {
          const dev = item as DevProject;
          return (
            <div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '12px' }}>
                <span className="glass-pill" style={{ fontSize: '10.5px', padding: '4px 12px', color: '#c9b8a0', fontWeight: 600 }}>
                  SOFTWARE REPOSITORY · {dev.date}
                </span>
              </div>

              <h2 id="modal-title" style={{ fontFamily: 'Playfair Display, serif', fontSize: 'clamp(1.8rem, 3.5vw, 2.4rem)', color: '#f5f3ef', marginBottom: '10px' }}>
                {dev.title}
              </h2>

              <p style={{ fontSize: '14.5px', color: '#a78b71', marginBottom: '24px', fontWeight: 500 }}>
                {dev.tagline}
              </p>

              {dev.image && (
                <div
                  style={{
                    width: '100%',
                    maxHeight: '380px',
                    borderRadius: '20px',
                    overflow: 'hidden',
                    marginBottom: '28px',
                    backgroundColor: '#0a0a0a',
                    border: '1px solid rgba(255, 255, 255, 0.1)'
                  }}
                >
                  <img
                    src={dev.image}
                    alt={dev.title}
                    style={{ width: '100%', height: '100%', objectFit: 'contain' }}
                  />
                </div>
              )}

              <div style={{ marginBottom: '28px' }}>
                <h4 style={{ fontSize: '12px', letterSpacing: '0.14em', textTransform: 'uppercase', color: '#c9b8a0', marginBottom: '10px' }}>
                  Architecture & Implementation
                </h4>
                <p style={{ fontSize: '15px', lineHeight: 1.8, color: '#d1cdc7', fontWeight: 300 }}>
                  {dev.fullDescription}
                </p>
              </div>

              {dev.highlights && dev.highlights.length > 0 && (
                <div style={{ marginBottom: '28px' }}>
                  <h4 style={{ fontSize: '12px', letterSpacing: '0.14em', textTransform: 'uppercase', color: '#c9b8a0', marginBottom: '12px' }}>
                    Key Engineering Highlights
                  </h4>
                  <ul style={{ listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: '8px' }}>
                    {dev.highlights.map((h, i) => (
                      <li key={i} style={{ display: 'flex', alignItems: 'center', gap: '10px', fontSize: '14px', color: '#f5f3ef' }}>
                        <span style={{ width: '5px', height: '5px', borderRadius: '50%', backgroundColor: '#a78b71' }} />
                        {h}
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              <div style={{ marginBottom: '32px' }}>
                <h4 style={{ fontSize: '12px', letterSpacing: '0.14em', textTransform: 'uppercase', color: '#a3a3a3', marginBottom: '10px' }}>
                  Tech Stack
                </h4>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                  {dev.technologies.map((t, i) => (
                    <span key={i} className="glass-pill" style={{ fontSize: '12px', padding: '5px 14px', color: '#e8d5b7' }}>
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              {/* Actions */}
              <div style={{ display: 'flex', gap: '14px', flexWrap: 'wrap', paddingTop: '20px', borderTop: '1px solid rgba(255, 255, 255, 0.08)' }}>
                {dev.githubUrl && (
                  <a
                    href={dev.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-primary"
                  >
                    <GithubIcon size={16} />
                    View Repository
                  </a>
                )}
                {dev.liveUrl && (
                  <a
                    href={dev.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-secondary"
                  >
                    <ExternalLink size={15} />
                    Open Live Deployment
                  </a>
                )}
              </div>
            </div>
          );
        })()}

        {/* 2. GRAPHIC DESIGN VIEW */}
        {item.category === 'design' && (() => {
          const design = item as DesignProject;
          const displayImage = design.gallery ? design.gallery[currentGalleryIndex] : design.image;
          return (
            <div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '12px' }}>
                <span className="glass-pill" style={{ fontSize: '10.5px', padding: '4px 12px', color: '#c9b8a0', fontWeight: 600 }}>
                  {design.type} · {design.date}
                </span>
              </div>

              <h2 id="modal-title" style={{ fontFamily: 'Playfair Display, serif', fontSize: 'clamp(1.8rem, 3.5vw, 2.4rem)', color: '#f5f3ef', marginBottom: '8px' }}>
                {design.title}
              </h2>

              <p style={{ fontSize: '14px', color: '#a78b71', marginBottom: '24px' }}>
                {design.tagline}
              </p>

              {/* Main Artwork Preview */}
              <div
                style={{
                  width: '100%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  backgroundColor: '#050505',
                  borderRadius: '20px',
                  padding: '16px',
                  border: '1px solid rgba(255, 255, 255, 0.08)',
                  marginBottom: '20px'
                }}
              >
                <img
                  src={displayImage}
                  alt={design.title}
                  style={{
                    maxHeight: '65vh',
                    maxWidth: '100%',
                    objectFit: 'contain',
                    borderRadius: '12px'
                  }}
                />
              </div>

              {/* Multi-page Thumbnail Switcher (if gallery present) */}
              {design.gallery && design.gallery.length > 1 && (
                <div style={{ marginBottom: '24px' }}>
                  <p style={{ fontSize: '11px', letterSpacing: '0.1em', textTransform: 'uppercase', color: '#a3a3a3', marginBottom: '8px' }}>
                    Select Page:
                  </p>
                  <div style={{ display: 'flex', gap: '10px', overflowX: 'auto', paddingBottom: '6px' }}>
                    {design.gallery.map((gImg, idx) => (
                      <button
                        key={idx}
                        onClick={() => setCurrentGalleryIndex(idx)}
                        style={{
                          width: '70px',
                          height: '90px',
                          borderRadius: '8px',
                          overflow: 'hidden',
                          border: currentGalleryIndex === idx ? '2px solid #a78b71' : '1px solid rgba(255,255,255,0.1)',
                          background: '#0a0a0a',
                          padding: 0,
                          cursor: 'pointer',
                          opacity: currentGalleryIndex === idx ? 1 : 0.6,
                          transition: 'all 0.2s'
                        }}
                      >
                        <img src={gImg} alt={`Page ${idx + 1}`} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                      </button>
                    ))}
                  </div>
                </div>
              )}

              <p style={{ fontSize: '15px', lineHeight: 1.8, color: '#d1cdc7', marginBottom: '20px', fontWeight: 300 }}>
                {design.description}
              </p>

              {design.details && design.details.length > 0 && (
                <div style={{ marginBottom: '24px' }}>
                  <h4 style={{ fontSize: '12px', letterSpacing: '0.14em', textTransform: 'uppercase', color: '#c9b8a0', marginBottom: '10px' }}>
                    Design Considerations
                  </h4>
                  <ul style={{ listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: '8px' }}>
                    {design.details.map((d, i) => (
                      <li key={i} style={{ display: 'flex', alignItems: 'center', gap: '10px', fontSize: '13.5px', color: '#f5f3ef' }}>
                        <span style={{ width: '5px', height: '5px', borderRadius: '50%', backgroundColor: '#a78b71' }} />
                        {d}
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Tools & Actions */}
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '14px', paddingTop: '20px', borderTop: '1px solid rgba(255, 255, 255, 0.08)' }}>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                  {design.tools.map((t, i) => (
                    <span key={i} className="glass-pill" style={{ fontSize: '11px', padding: '4px 12px', color: '#c9b8a0' }}>
                      {t}
                    </span>
                  ))}
                </div>

                {design.pdfUrl && (
                  <a
                    href={design.pdfUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-gold"
                  >
                    <FileText size={15} />
                    Open PDF Document
                  </a>
                )}
              </div>
            </div>
          );
        })()}

        {/* 3. PRESENTATION SLIDES VIEW */}
        {item.category === 'presentation' && (() => {
          const pres = item as PresentationProject;
          const currentSlide = pres.slideImages[currentSlideIndex] || pres.coverImage;
          return (
            <div>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '12px' }}>
                <span className="glass-pill" style={{ fontSize: '10.5px', padding: '4px 12px', color: '#c9b8a0', fontWeight: 600 }}>
                  KEYNOTE PRESENTATION · {pres.slideCount} SLIDES
                </span>
                <span style={{ fontSize: '12px', color: '#a3a3a3' }}>
                  Slide {currentSlideIndex + 1} of {pres.slideCount}
                </span>
              </div>

              <h2 id="modal-title" style={{ fontFamily: 'Playfair Display, serif', fontSize: 'clamp(1.8rem, 3.5vw, 2.4rem)', color: '#f5f3ef', marginBottom: '8px' }}>
                {pres.title}
              </h2>

              <p style={{ fontSize: '14px', color: '#a78b71', marginBottom: '24px' }}>
                {pres.tagline}
              </p>

              {/* Slide Screen Viewer */}
              <div
                style={{
                  position: 'relative',
                  backgroundColor: '#050505',
                  borderRadius: '20px',
                  overflow: 'hidden',
                  border: '1px solid rgba(255, 255, 255, 0.1)',
                  marginBottom: '16px',
                  aspectRatio: '16/9',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center'
                }}
              >
                <img
                  src={currentSlide}
                  alt={`Slide ${currentSlideIndex + 1}`}
                  style={{ width: '100%', height: '100%', objectFit: 'contain' }}
                />

                {/* Left/Right Slide Controls */}
                <button
                  onClick={() => setCurrentSlideIndex((prev) => Math.max(0, prev - 1))}
                  disabled={currentSlideIndex === 0}
                  aria-label="Previous slide"
                  style={{
                    position: 'absolute',
                    left: '16px',
                    top: '50%',
                    transform: 'translateY(-50%)',
                    background: 'rgba(10, 10, 10, 0.7)',
                    border: '1px solid rgba(255, 255, 255, 0.2)',
                    borderRadius: '50%',
                    width: '42px',
                    height: '42px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: currentSlideIndex === 0 ? 'rgba(255,255,255,0.2)' : '#f5f3ef',
                    cursor: currentSlideIndex === 0 ? 'not-allowed' : 'pointer',
                    transition: 'all 0.2s'
                  }}
                >
                  <ArrowLeft size={18} />
                </button>

                <button
                  onClick={() => setCurrentSlideIndex((prev) => Math.min(pres.slideCount - 1, prev + 1))}
                  disabled={currentSlideIndex === pres.slideCount - 1}
                  aria-label="Next slide"
                  style={{
                    position: 'absolute',
                    right: '16px',
                    top: '50%',
                    transform: 'translateY(-50%)',
                    background: 'rgba(10, 10, 10, 0.7)',
                    border: '1px solid rgba(255, 255, 255, 0.2)',
                    borderRadius: '50%',
                    width: '42px',
                    height: '42px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: currentSlideIndex === pres.slideCount - 1 ? 'rgba(255,255,255,0.2)' : '#f5f3ef',
                    cursor: currentSlideIndex === pres.slideCount - 1 ? 'not-allowed' : 'pointer',
                    transition: 'all 0.2s'
                  }}
                >
                  <ArrowRight size={18} />
                </button>
              </div>

              {/* Slide Scrubber Strip */}
              <div
                style={{
                  display: 'flex',
                  gap: '8px',
                  overflowX: 'auto',
                  paddingBottom: '12px',
                  marginBottom: '24px'
                }}
              >
                {pres.slideImages.map((sImg, sIdx) => (
                  <button
                    key={sIdx}
                    onClick={() => setCurrentSlideIndex(sIdx)}
                    style={{
                      width: '84px',
                      height: '48px',
                      borderRadius: '8px',
                      overflow: 'hidden',
                      flexShrink: 0,
                      border: currentSlideIndex === sIdx ? '2px solid #a78b71' : '1px solid rgba(255,255,255,0.1)',
                      background: '#0a0a0a',
                      padding: 0,
                      cursor: 'pointer',
                      opacity: currentSlideIndex === sIdx ? 1 : 0.5,
                      transition: 'all 0.2s'
                    }}
                  >
                    <img src={sImg} alt={`Thumbnail ${sIdx + 1}`} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                  </button>
                ))}
              </div>

              <p style={{ fontSize: '15px', lineHeight: 1.8, color: '#d1cdc7', marginBottom: '24px', fontWeight: 300 }}>
                {pres.description}
              </p>

              {pres.topics && (
                <div style={{ marginBottom: '28px' }}>
                  <h4 style={{ fontSize: '12px', letterSpacing: '0.14em', textTransform: 'uppercase', color: '#c9b8a0', marginBottom: '10px' }}>
                    Core Deck Sections
                  </h4>
                  <ul style={{ listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: '8px' }}>
                    {pres.topics.map((top, idx) => (
                      <li key={idx} style={{ display: 'flex', alignItems: 'center', gap: '10px', fontSize: '13.5px', color: '#f5f3ef' }}>
                        <span style={{ width: '5px', height: '5px', borderRadius: '50%', backgroundColor: '#a78b71' }} />
                        {top}
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              <div style={{ display: 'flex', gap: '14px', flexWrap: 'wrap', paddingTop: '20px', borderTop: '1px solid rgba(255, 255, 255, 0.08)' }}>
                <a
                  href={pres.pdfUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary"
                >
                  <FileText size={16} />
                  Open Full PDF Presentation
                </a>
              </div>
            </div>
          );
        })()}

        {/* 4. VIDEO EDIT VIEW */}
        {item.category === 'video' && (() => {
          const video = item as VideoProject;
          return (
            <div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '12px' }}>
                <span className="glass-pill" style={{ fontSize: '10.5px', padding: '4px 12px', color: '#c9b8a0', fontWeight: 600 }}>
                  YOUTUBE SHORTS · VERTICAL 9:16 · {video.date}
                </span>
              </div>

              <h2 id="modal-title" style={{ fontFamily: 'Playfair Display, serif', fontSize: 'clamp(1.8rem, 3.5vw, 2.4rem)', color: '#f5f3ef', marginBottom: '8px' }}>
                {video.title}
              </h2>

              <p style={{ fontSize: '14px', color: '#a78b71', marginBottom: '24px' }}>
                {video.tagline}
              </p>

              {/* Embedded YouTube Player in 9:16 Vertical Container */}
              <div
                style={{
                  display: 'flex',
                  justifyContent: 'center',
                  marginBottom: '28px'
                }}
              >
                <div
                  style={{
                    width: 'min(360px, 90vw)',
                    aspectRatio: '9/16',
                    borderRadius: '24px',
                    overflow: 'hidden',
                    border: '1px solid rgba(167, 139, 113, 0.3)',
                    backgroundColor: '#000000',
                    boxShadow: '0 20px 50px rgba(0,0,0,0.8), 0 0 40px rgba(167, 139, 113, 0.2)'
                  }}
                >
                  <iframe
                    src={`https://www.youtube.com/embed/${video.youtubeId}?autoplay=0&rel=0`}
                    title={video.title}
                    allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    style={{
                      width: '100%',
                      height: '100%',
                      border: 'none'
                    }}
                  />
                </div>
              </div>

              <p style={{ fontSize: '15px', lineHeight: 1.8, color: '#d1cdc7', marginBottom: '24px', fontWeight: 300 }}>
                {video.description}
              </p>

              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '14px', paddingTop: '20px', borderTop: '1px solid rgba(255, 255, 255, 0.08)' }}>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                  {video.tools.map((t, i) => (
                    <span key={i} className="glass-pill" style={{ fontSize: '11px', padding: '4px 12px', color: '#c9b8a0' }}>
                      {t}
                    </span>
                  ))}
                </div>

                <a
                  href={video.youtubeUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary"
                >
                  <ExternalLink size={15} />
                  Watch on YouTube
                </a>
              </div>
            </div>
          );
        })()}
      </div>
    </div>
  );
};
