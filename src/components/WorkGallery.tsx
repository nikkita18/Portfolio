import React, { useState } from 'react';
import {
  Code2,
  Palette,
  Presentation,
  Video,
  ExternalLink,
  Play,
  FileText,
  ChevronDown,
  ChevronUp,
  Layers
} from 'lucide-react';
import { GithubIcon } from './Icons';
import {
  DEV_PROJECTS,
  DESIGN_PROJECTS,
  PRESENTATION_PROJECTS,
  VIDEO_PROJECTS,
  ALL_REPOSITORIES
} from '../data/portfolioData';
import { PortfolioItem, CategoryType } from '../types';

interface WorkGalleryProps {
  currentCategory: CategoryType;
  onSelectCategory: (cat: CategoryType) => void;
  onOpenDetailModal: (item: PortfolioItem) => void;
}

export const WorkGallery: React.FC<WorkGalleryProps> = ({
  currentCategory,
  onSelectCategory,
  onOpenDetailModal
}) => {
  const [showAllRepos, setShowAllRepos] = useState(false);

  // Tabs
  const categories: { key: CategoryType; label: string; count: number }[] = [
    {
      key: 'all',
      label: 'All Work',
      count:
        DEV_PROJECTS.length +
        DESIGN_PROJECTS.length +
        PRESENTATION_PROJECTS.length +
        VIDEO_PROJECTS.length
    },
    { key: 'dev', label: 'Development', count: DEV_PROJECTS.length },
    { key: 'design', label: 'Graphic Design', count: DESIGN_PROJECTS.length },
    { key: 'presentation', label: 'Presentations', count: PRESENTATION_PROJECTS.length },
    { key: 'video', label: 'Video Editing', count: VIDEO_PROJECTS.length }
  ];

  return (
    <section id="work" style={{ padding: '100px 24px', position: 'relative' }}>
      <div style={{ maxWidth: '1360px', margin: '0 auto' }}>
        {/* Section Header */}
        <div style={{ textAlign: 'center', marginBottom: '48px' }}>
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
            PORTFOLIO SHOWCASE
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
            Curated <span style={{ color: '#a78b71' }}>Creations</span> &{' '}
            <span style={{ color: '#c9b8a0' }}>Software</span>
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

        {/* Category Filter Pills */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '10px',
            flexWrap: 'wrap',
            marginBottom: '48px'
          }}
        >
          {categories.map((cat) => {
            const isActive = currentCategory === cat.key;
            return (
              <button
                key={cat.key}
                onClick={() => onSelectCategory(cat.key)}
                className={`filter-tab ${isActive ? 'active' : ''}`}
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '8px'
                }}
              >
                <span>{cat.label}</span>
                <span
                  style={{
                    fontSize: '10.5px',
                    opacity: isActive ? 1 : 0.6,
                    backgroundColor: isActive ? 'rgba(167, 139, 113, 0.3)' : 'rgba(255, 255, 255, 0.08)',
                    padding: '2px 7px',
                    borderRadius: '9999px'
                  }}
                >
                  {cat.count}
                </span>
              </button>
            );
          })}
        </div>

        {/* PORTFOLIO GRID */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(min(100%, 320px), 1fr))',
            gap: '28px',
            marginBottom: '64px'
          }}
        >
          {/* 1. DEV PROJECTS */}
          {(currentCategory === 'all' || currentCategory === 'dev') &&
            DEV_PROJECTS.map((proj) => (
              <div
                key={proj.id}
                className="glass-card"
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  overflow: 'hidden',
                  borderRadius: '24px'
                }}
              >
                {/* Thumbnail */}
                <div
                  onClick={() => onOpenDetailModal(proj)}
                  style={{
                    height: '210px',
                    width: '100%',
                    backgroundColor: '#0a0a0a',
                    overflow: 'hidden',
                    position: 'relative',
                    cursor: 'pointer'
                  }}
                >
                  <img
                    src={proj.image}
                    alt={proj.title}
                    style={{
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover',
                      transition: 'transform 0.5s ease'
                    }}
                    onMouseEnter={(e) => (e.currentTarget.style.transform = 'scale(1.05)')}
                    onMouseLeave={(e) => (e.currentTarget.style.transform = 'scale(1)')}
                  />
                  <div
                    style={{
                      position: 'absolute',
                      top: '14px',
                      left: '14px',
                      display: 'flex',
                      gap: '6px'
                    }}
                  >
                    <span
                      className="glass-pill"
                      style={{
                        fontSize: '10px',
                        fontWeight: 600,
                        padding: '4px 10px',
                        color: '#c9b8a0',
                        backgroundColor: 'rgba(10, 10, 10, 0.75)'
                      }}
                    >
                      DEVELOPMENT
                    </span>
                  </div>
                </div>

                {/* Card Content */}
                <div
                  style={{
                    padding: '24px',
                    display: 'flex',
                    flexDirection: 'column',
                    flex: 1,
                    justifyContent: 'space-between'
                  }}
                >
                  <div>
                    <h3
                      onClick={() => onOpenDetailModal(proj)}
                      style={{
                        fontFamily: 'Playfair Display, serif',
                        fontSize: '18.5px',
                        fontWeight: 600,
                        color: '#f5f3ef',
                        marginBottom: '8px',
                        cursor: 'pointer'
                      }}
                    >
                      {proj.title}
                    </h3>
                    <p
                      style={{
                        fontSize: '13.5px',
                        color: '#a3a3a3',
                        lineHeight: 1.6,
                        marginBottom: '16px'
                      }}
                    >
                      {proj.description}
                    </p>

                    {/* Tech Pills */}
                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px', marginBottom: '20px' }}>
                      {proj.technologies.slice(0, 4).map((tech, i) => (
                        <span
                          key={i}
                          style={{
                            fontSize: '11px',
                            color: '#e8d5b7',
                            backgroundColor: 'rgba(255, 255, 255, 0.04)',
                            padding: '3px 9px',
                            borderRadius: '6px',
                            border: '1px solid rgba(255, 255, 255, 0.08)'
                          }}
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Actions */}
                  <div
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      paddingTop: '16px',
                      borderTop: '1px solid rgba(255, 255, 255, 0.06)'
                    }}
                  >
                    <button
                      onClick={() => onOpenDetailModal(proj)}
                      style={{
                        background: 'transparent',
                        border: 'none',
                        color: '#c9b8a0',
                        fontSize: '12px',
                        fontWeight: 600,
                        letterSpacing: '0.06em',
                        cursor: 'pointer',
                        display: 'flex',
                        alignItems: 'center',
                        gap: '4px',
                        padding: 0
                      }}
                    >
                      View Details
                      <ExternalLink size={13} />
                    </button>

                    <div style={{ display: 'flex', gap: '10px' }}>
                      {proj.githubUrl && (
                        <a
                          href={proj.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          aria-label={`GitHub repository for ${proj.title}`}
                          style={{ color: '#a3a3a3', transition: 'color 0.2s' }}
                          onMouseEnter={(e) => (e.currentTarget.style.color = '#f5f3ef')}
                          onMouseLeave={(e) => (e.currentTarget.style.color = '#a3a3a3')}
                        >
                          <GithubIcon size={17} />
                        </a>
                      )}
                      {proj.liveUrl && (
                        <a
                          href={proj.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          aria-label={`Live demo for ${proj.title}`}
                          style={{ color: '#a78b71', transition: 'color 0.2s' }}
                          onMouseEnter={(e) => (e.currentTarget.style.color = '#e8d5b7')}
                          onMouseLeave={(e) => (e.currentTarget.style.color = '#a78b71')}
                        >
                          <ExternalLink size={17} />
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            ))}

          {/* 2. GRAPHIC DESIGN PROJECTS */}
          {(currentCategory === 'all' || currentCategory === 'design') &&
            DESIGN_PROJECTS.map((design) => (
              <div
                key={design.id}
                className="glass-card"
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  overflow: 'hidden',
                  borderRadius: '24px'
                }}
              >
                {/* Thumbnail respecting aspect ratio */}
                <div
                  onClick={() => onOpenDetailModal(design)}
                  style={{
                    height: '240px',
                    width: '100%',
                    backgroundColor: '#050505',
                    overflow: 'hidden',
                    position: 'relative',
                    cursor: 'pointer',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    padding: '8px'
                  }}
                >
                  <img
                    src={design.image}
                    alt={design.title}
                    style={{
                      maxHeight: '100%',
                      maxWidth: '100%',
                      objectFit: 'contain',
                      borderRadius: '8px',
                      transition: 'transform 0.5s ease'
                    }}
                    onMouseEnter={(e) => (e.currentTarget.style.transform = 'scale(1.04)')}
                    onMouseLeave={(e) => (e.currentTarget.style.transform = 'scale(1)')}
                  />
                  <div
                    style={{
                      position: 'absolute',
                      top: '14px',
                      left: '14px',
                      display: 'flex',
                      gap: '6px'
                    }}
                  >
                    <span
                      className="glass-pill"
                      style={{
                        fontSize: '10px',
                        fontWeight: 600,
                        padding: '4px 10px',
                        color: '#c9b8a0',
                        backgroundColor: 'rgba(10, 10, 10, 0.75)'
                      }}
                    >
                      GRAPHIC DESIGN
                    </span>
                  </div>
                </div>

                <div
                  style={{
                    padding: '24px',
                    display: 'flex',
                    flexDirection: 'column',
                    flex: 1,
                    justifyContent: 'space-between'
                  }}
                >
                  <div>
                    <span style={{ fontSize: '11px', color: '#a78b71', fontWeight: 600, letterSpacing: '0.06em' }}>
                      {design.type}
                    </span>
                    <h3
                      onClick={() => onOpenDetailModal(design)}
                      style={{
                        fontFamily: 'Playfair Display, serif',
                        fontSize: '18.5px',
                        fontWeight: 600,
                        color: '#f5f3ef',
                        margin: '4px 0 8px',
                        cursor: 'pointer'
                      }}
                    >
                      {design.title}
                    </h3>
                    <p
                      style={{
                        fontSize: '13.5px',
                        color: '#a3a3a3',
                        lineHeight: 1.6,
                        marginBottom: '16px'
                      }}
                    >
                      {design.tagline}
                    </p>
                  </div>

                  <div
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      paddingTop: '16px',
                      borderTop: '1px solid rgba(255, 255, 255, 0.06)'
                    }}
                  >
                    <button
                      onClick={() => onOpenDetailModal(design)}
                      style={{
                        background: 'transparent',
                        border: 'none',
                        color: '#c9b8a0',
                        fontSize: '12px',
                        fontWeight: 600,
                        letterSpacing: '0.06em',
                        cursor: 'pointer',
                        display: 'flex',
                        alignItems: 'center',
                        gap: '4px',
                        padding: 0
                      }}
                    >
                      View Artwork & Details
                      <ExternalLink size={13} />
                    </button>

                    {design.pdfUrl && (
                      <a
                        href={design.pdfUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{ color: '#a78b71', display: 'flex', alignItems: 'center', gap: '4px', fontSize: '11px', textDecoration: 'none' }}
                      >
                        <FileText size={14} />
                        PDF
                      </a>
                    )}
                  </div>
                </div>
              </div>
            ))}

          {/* 3. PRESENTATION PROJECTS */}
          {(currentCategory === 'all' || currentCategory === 'presentation') &&
            PRESENTATION_PROJECTS.map((pres) => (
              <div
                key={pres.id}
                className="glass-card"
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  overflow: 'hidden',
                  borderRadius: '24px'
                }}
              >
                <div
                  onClick={() => onOpenDetailModal(pres)}
                  style={{
                    height: '210px',
                    width: '100%',
                    backgroundColor: '#0a0a0a',
                    overflow: 'hidden',
                    position: 'relative',
                    cursor: 'pointer'
                  }}
                >
                  <img
                    src={pres.coverImage}
                    alt={pres.title}
                    style={{
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover',
                      transition: 'transform 0.5s ease'
                    }}
                    onMouseEnter={(e) => (e.currentTarget.style.transform = 'scale(1.05)')}
                    onMouseLeave={(e) => (e.currentTarget.style.transform = 'scale(1)')}
                  />
                  <div
                    style={{
                      position: 'absolute',
                      top: '14px',
                      left: '14px',
                      display: 'flex',
                      gap: '6px'
                    }}
                  >
                    <span
                      className="glass-pill"
                      style={{
                        fontSize: '10px',
                        fontWeight: 600,
                        padding: '4px 10px',
                        color: '#c9b8a0',
                        backgroundColor: 'rgba(10, 10, 10, 0.75)'
                      }}
                    >
                      PRESENTATION · {pres.slideCount} SLIDES
                    </span>
                  </div>
                </div>

                <div
                  style={{
                    padding: '24px',
                    display: 'flex',
                    flexDirection: 'column',
                    flex: 1,
                    justifyContent: 'space-between'
                  }}
                >
                  <div>
                    <h3
                      onClick={() => onOpenDetailModal(pres)}
                      style={{
                        fontFamily: 'Playfair Display, serif',
                        fontSize: '18.5px',
                        fontWeight: 600,
                        color: '#f5f3ef',
                        marginBottom: '8px',
                        cursor: 'pointer'
                      }}
                    >
                      {pres.title}
                    </h3>
                    <p
                      style={{
                        fontSize: '13.5px',
                        color: '#a3a3a3',
                        lineHeight: 1.6,
                        marginBottom: '16px'
                      }}
                    >
                      {pres.tagline}
                    </p>
                  </div>

                  <div
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      paddingTop: '16px',
                      borderTop: '1px solid rgba(255, 255, 255, 0.06)'
                    }}
                  >
                    <button
                      onClick={() => onOpenDetailModal(pres)}
                      style={{
                        background: 'transparent',
                        border: 'none',
                        color: '#c9b8a0',
                        fontSize: '12px',
                        fontWeight: 600,
                        letterSpacing: '0.06em',
                        cursor: 'pointer',
                        display: 'flex',
                        alignItems: 'center',
                        gap: '4px',
                        padding: 0
                      }}
                    >
                      Explore Slides
                      <ExternalLink size={13} />
                    </button>

                    <a
                      href={pres.pdfUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{ color: '#a78b71', display: 'flex', alignItems: 'center', gap: '4px', fontSize: '11px', textDecoration: 'none' }}
                    >
                      <FileText size={14} />
                      PDF Deck
                    </a>
                  </div>
                </div>
              </div>
            ))}

          {/* 4. VIDEO PROJECTS */}
          {(currentCategory === 'all' || currentCategory === 'video') &&
            VIDEO_PROJECTS.map((video) => (
              <div
                key={video.id}
                className="glass-card"
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  overflow: 'hidden',
                  borderRadius: '24px'
                }}
              >
                <div
                  onClick={() => onOpenDetailModal(video)}
                  style={{
                    height: '240px',
                    width: '100%',
                    backgroundColor: '#0a0a0a',
                    overflow: 'hidden',
                    position: 'relative',
                    cursor: 'pointer',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center'
                  }}
                >
                  <img
                    src={video.thumbnailUrl}
                    alt={video.title}
                    style={{
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover',
                      transition: 'transform 0.5s ease'
                    }}
                    onMouseEnter={(e) => (e.currentTarget.style.transform = 'scale(1.05)')}
                    onMouseLeave={(e) => (e.currentTarget.style.transform = 'scale(1)')}
                  />

                  {/* Play Button Overlay */}
                  <div
                    style={{
                      position: 'absolute',
                      width: '46px',
                      height: '46px',
                      borderRadius: '50%',
                      backgroundColor: 'rgba(10, 10, 10, 0.75)',
                      border: '1px solid rgba(167, 139, 113, 0.4)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: '#e8d5b7'
                    }}
                  >
                    <Play size={18} fill="#e8d5b7" style={{ marginLeft: '2px' }} />
                  </div>

                  <div
                    style={{
                      position: 'absolute',
                      top: '14px',
                      left: '14px',
                      display: 'flex',
                      gap: '6px'
                    }}
                  >
                    <span
                      className="glass-pill"
                      style={{
                        fontSize: '10px',
                        fontWeight: 600,
                        padding: '4px 10px',
                        color: '#c9b8a0',
                        backgroundColor: 'rgba(10, 10, 10, 0.75)'
                      }}
                    >
                      YOUTUBE SHORTS
                    </span>
                  </div>
                </div>

                <div
                  style={{
                    padding: '24px',
                    display: 'flex',
                    flexDirection: 'column',
                    flex: 1,
                    justifyContent: 'space-between'
                  }}
                >
                  <div>
                    <h3
                      onClick={() => onOpenDetailModal(video)}
                      style={{
                        fontFamily: 'Playfair Display, serif',
                        fontSize: '18.5px',
                        fontWeight: 600,
                        color: '#f5f3ef',
                        marginBottom: '8px',
                        cursor: 'pointer'
                      }}
                    >
                      {video.title}
                    </h3>
                    <p
                      style={{
                        fontSize: '13.5px',
                        color: '#a3a3a3',
                        lineHeight: 1.6,
                        marginBottom: '16px'
                      }}
                    >
                      {video.tagline}
                    </p>
                  </div>

                  <div
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      paddingTop: '16px',
                      borderTop: '1px solid rgba(255, 255, 255, 0.06)'
                    }}
                  >
                    <button
                      onClick={() => onOpenDetailModal(video)}
                      style={{
                        background: 'transparent',
                        border: 'none',
                        color: '#c9b8a0',
                        fontSize: '12px',
                        fontWeight: 600,
                        letterSpacing: '0.06em',
                        cursor: 'pointer',
                        display: 'flex',
                        alignItems: 'center',
                        gap: '4px',
                        padding: 0
                      }}
                    >
                      Watch Video
                      <Play size={13} />
                    </button>

                    <a
                      href={video.youtubeUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{ color: '#a78b71', display: 'flex', alignItems: 'center', gap: '4px', fontSize: '11px', textDecoration: 'none' }}
                    >
                      YouTube
                      <ExternalLink size={13} />
                    </a>
                  </div>
                </div>
              </div>
            ))}
        </div>

        {/* SECONDARY "ALL GITHUB REPOSITORIES" VIEW */}
        <div style={{ marginTop: '20px' }}>
          <div style={{ textAlign: 'center', marginBottom: '24px' }}>
            <button
              onClick={() => setShowAllRepos(!showAllRepos)}
              className="btn-secondary"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                padding: '12px 28px'
              }}
            >
              <GithubIcon size={16} />
              <span>{showAllRepos ? 'Hide Public Repositories' : 'View All GitHub Repositories (8+)'}</span>
              {showAllRepos ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
            </button>
          </div>

          {showAllRepos && (
            <div
              className="glass-panel"
              style={{
                padding: 'clamp(24px, 4vw, 36px)',
                borderRadius: '28px'
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '24px', flexWrap: 'wrap', gap: '12px' }}>
                <div>
                  <h3 style={{ fontFamily: 'Playfair Display, serif', fontSize: '20px', color: '#f5f3ef', fontWeight: 600 }}>
                    Public GitHub Repository Directory
                  </h3>
                  <p style={{ fontSize: '13px', color: '#a3a3a3' }}>
                    Directly synced with @nikkita18 public repositories
                  </p>
                </div>
                <a
                  href="https://github.com/nikkita18"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary"
                  style={{ fontSize: '11px', padding: '8px 18px' }}
                >
                  <GithubIcon size={14} />
                  Open GitHub Profile
                </a>
              </div>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
                {ALL_REPOSITORIES.map((repo, i) => (
                  <div
                    key={i}
                    style={{
                      display: 'flex',
                      alignItems: 'flex-start',
                      justifyContent: 'space-between',
                      flexWrap: 'wrap',
                      gap: '16px',
                      padding: '18px 20px',
                      borderRadius: '16px',
                      backgroundColor: 'rgba(255, 255, 255, 0.02)',
                      border: '1px solid rgba(255, 255, 255, 0.06)'
                    }}
                  >
                    <div style={{ flex: 1, minWidth: '260px' }}>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '6px' }}>
                        <a
                          href={repo.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          style={{
                            fontFamily: 'Inter, sans-serif',
                            fontSize: '15px',
                            fontWeight: 600,
                            color: '#e8d5b7',
                            textDecoration: 'none'
                          }}
                        >
                          {repo.name}
                        </a>
                        <span
                          style={{
                            fontSize: '10.5px',
                            padding: '2px 8px',
                            borderRadius: '9999px',
                            backgroundColor: 'rgba(167, 139, 113, 0.15)',
                            color: '#c9b8a0'
                          }}
                        >
                          {repo.language}
                        </span>
                      </div>
                      <p style={{ fontSize: '13px', color: '#a3a3a3', lineHeight: 1.5, marginBottom: '10px' }}>
                        {repo.description}
                      </p>
                      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px' }}>
                        {repo.topics.map((t, tIdx) => (
                          <span key={tIdx} style={{ fontSize: '10px', color: '#c4bfb7', backgroundColor: 'rgba(255,255,255,0.04)', padding: '2px 8px', borderRadius: '4px' }}>
                            #{t}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div style={{ display: 'flex', gap: '10px', alignItems: 'center' }}>
                      {repo.liveUrl && (
                        <a
                          href={repo.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="btn-secondary"
                          style={{ fontSize: '11px', padding: '6px 14px' }}
                        >
                          <ExternalLink size={12} />
                          Live Demo
                        </a>
                      )}
                      <a
                        href={repo.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn-secondary"
                        style={{ fontSize: '11px', padding: '6px 14px' }}
                      >
                        <GithubIcon size={12} />
                        Repo
                      </a>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};
