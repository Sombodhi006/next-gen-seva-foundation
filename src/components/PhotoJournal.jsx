import React, { useState } from 'react';
import { Camera, MapPin, X, ZoomIn, Heart } from 'lucide-react';
import { PHOTO_GALLERY } from '../data/ngoData';

export default function PhotoJournal() {
  const [selectedPhoto, setSelectedPhoto] = useState(null);
  const [activeFilter, setActiveFilter] = useState('All');

  const categories = ['All', 'Hunger Relief', 'Youth Empowerment', 'Child Joy', 'Creative Arts', 'Volunteers'];

  const filteredPhotos = activeFilter === 'All'
    ? PHOTO_GALLERY
    : PHOTO_GALLERY.filter(p => p.category === activeFilter);

  return (
    <section id="journal" style={{ padding: '5rem 0', backgroundColor: '#FFFFFF' }}>
      <div className="container">
        
        {/* Header */}
        <div style={{ textAlign: 'center', marginBottom: '2.5rem' }}>
          <div className="section-tag gold">
            <Camera size={14} />
            <span>Field Photo Journal</span>
          </div>
          <h2 className="section-title">Raw, Candid & On the Ground</h2>
          <p className="section-subtitle" style={{ margin: '0 auto' }}>
            We don't use stock models. Every photograph here is captured during our real weekend and night drives across Kolkata.
          </p>
        </div>

        {/* Filter Pills */}
        <div style={{
          display: 'flex',
          justifyContent: 'center',
          flexWrap: 'wrap',
          gap: '0.5rem',
          marginBottom: '2.5rem'
        }}>
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveFilter(cat)}
              style={{
                padding: '0.5rem 1.1rem',
                borderRadius: 'var(--radius-full)',
                fontFamily: 'var(--font-heading)',
                fontSize: '0.85rem',
                fontWeight: 600,
                border: activeFilter === cat ? '1px solid var(--color-forest)' : '1px solid var(--border-subtle)',
                backgroundColor: activeFilter === cat ? 'var(--color-forest)' : 'var(--bg-canvas)',
                color: activeFilter === cat ? '#FFFFFF' : 'var(--text-secondary)',
                cursor: 'pointer',
                transition: 'all 0.2s ease'
              }}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Masonry / Grid of Photos */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
          gap: '1.5rem'
        }}>
          {filteredPhotos.map((photo) => (
            <div
              key={photo.id}
              onClick={() => setSelectedPhoto(photo)}
              style={{
                position: 'relative',
                borderRadius: 'var(--radius-lg)',
                overflow: 'hidden',
                backgroundColor: '#000',
                cursor: 'pointer',
                boxShadow: 'var(--shadow-md)',
                transition: 'all 0.3s ease',
                height: '320px'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'scale(1.02)';
                e.currentTarget.style.boxShadow = 'var(--shadow-xl)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'scale(1)';
                e.currentTarget.style.boxShadow = 'var(--shadow-md)';
              }}
            >
              <img
                src={photo.image}
                alt={photo.title}
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                  display: 'block',
                  opacity: 0.94,
                  transition: 'transform 0.4s ease'
                }}
              />

              {/* Gradient Overlay & Details */}
              <div style={{
                position: 'absolute',
                inset: 0,
                background: 'linear-gradient(to top, rgba(11, 37, 26, 0.95) 0%, rgba(11, 37, 26, 0.3) 50%, transparent 100%)',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'flex-end',
                padding: '1.25rem',
                color: '#FFFFFF'
              }}>
                <div style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.35rem',
                  fontSize: '0.72rem',
                  fontWeight: 700,
                  color: 'var(--color-gold)',
                  marginBottom: '0.35rem'
                }}>
                  <MapPin size={12} />
                  <span>{photo.location}</span>
                </div>

                <h4 style={{
                  color: '#FFFFFF',
                  fontSize: '1.05rem',
                  fontWeight: 700,
                  lineHeight: 1.3,
                  marginBottom: '0.35rem'
                }}>
                  {photo.title}
                </h4>

                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  marginTop: '0.5rem',
                  borderTop: '1px solid rgba(255, 255, 255, 0.15)',
                  paddingTop: '0.5rem'
                }}>
                  <span style={{ fontSize: '0.75rem', color: 'rgba(255, 255, 255, 0.75)' }}>
                    {photo.category}
                  </span>
                  <span style={{ display: 'inline-flex', alignItems: 'center', gap: '0.3rem', fontSize: '0.75rem', color: 'var(--color-gold)' }}>
                    <ZoomIn size={14} /> View
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Lightbox Modal */}
        {selectedPhoto && (
          <div 
            className="modal-overlay" 
            onClick={() => setSelectedPhoto(null)}
            style={{ zIndex: 1100 }}
          >
            <div 
              style={{
                maxWidth: '750px',
                width: '100%',
                backgroundColor: '#FFFFFF',
                borderRadius: 'var(--radius-lg)',
                overflow: 'hidden',
                boxShadow: 'var(--shadow-xl)',
                position: 'relative',
                animation: 'fadeIn 0.25s ease-out'
              }}
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close Button */}
              <button
                onClick={() => setSelectedPhoto(null)}
                style={{
                  position: 'absolute',
                  top: '1rem',
                  right: '1rem',
                  width: '36px',
                  height: '36px',
                  borderRadius: '50%',
                  backgroundColor: 'rgba(0, 0, 0, 0.65)',
                  color: '#FFFFFF',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  zIndex: 10,
                  cursor: 'pointer',
                  border: 'none'
                }}
              >
                <X size={20} />
              </button>

              <div style={{ maxHeight: '65vh', overflow: 'hidden', backgroundColor: '#0B251A' }}>
                <img
                  src={selectedPhoto.image}
                  alt={selectedPhoto.title}
                  style={{
                    width: '100%',
                    maxHeight: '65vh',
                    objectFit: 'contain',
                    display: 'block',
                    margin: '0 auto'
                  }}
                />
              </div>

              <div style={{ padding: '1.5rem 1.75rem' }}>
                <div style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.4rem',
                  fontSize: '0.8rem',
                  fontWeight: 700,
                  color: 'var(--color-amber)',
                  marginBottom: '0.3rem'
                }}>
                  <MapPin size={14} />
                  <span>{selectedPhoto.location}</span>
                </div>

                <h3 style={{ fontSize: '1.35rem', fontWeight: 800, color: 'var(--color-forest)', marginBottom: '0.5rem' }}>
                  {selectedPhoto.title}
                </h3>

                <p style={{ fontSize: '0.95rem', color: 'var(--text-secondary)', lineHeight: 1.6 }}>
                  {selectedPhoto.description}
                </p>
              </div>
            </div>
          </div>
        )}

      </div>
    </section>
  );
}
