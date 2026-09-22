import React from 'react';
import { ArrowUpRight, Sparkles, Heart } from 'lucide-react';
import InstagramIcon from './InstagramIcon';
import { NGO_CONFIG } from '../data/ngoData';

export default function InstagramConnect() {
  return (
    <section style={{ padding: '4rem 0', backgroundColor: 'var(--bg-canvas)' }}>
      <div className="container">
        <div style={{
          background: 'linear-gradient(135deg, #143D2B 0%, #0B251A 100%)',
          borderRadius: 'var(--radius-xl)',
          padding: 'clamp(2rem, 4vw, 3.5rem)',
          color: '#FFFFFF',
          position: 'relative',
          overflow: 'hidden',
          boxShadow: 'var(--shadow-xl)',
          border: '1px solid rgba(255, 255, 255, 0.1)'
        }}>

          {/* Background Ambient Glow */}
          <div style={{
            position: 'absolute',
            top: '-30%',
            right: '-10%',
            width: '400px',
            height: '400px',
            background: 'radial-gradient(circle, rgba(225, 48, 108, 0.25) 0%, transparent 70%)',
            pointerEvents: 'none'
          }} />

          <div style={{
            display: 'grid',
            gridTemplateColumns: '1fr',
            gap: '2.5rem',
            alignItems: 'center'
          }} className="insta-banner-grid">

            {/* Left Content */}
            <div>
              <div style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.5rem',
                backgroundColor: 'rgba(255, 255, 255, 0.1)',
                padding: '0.4rem 1rem',
                borderRadius: 'var(--radius-full)',
                fontSize: '0.82rem',
                fontWeight: 700,
                color: 'var(--color-gold)',
                marginBottom: '1rem'
              }}>
                <InstagramIcon size={15} color="#E1306C" />
                <span>Live On-Ground Verification</span>
              </div>

              <h2 style={{
                fontSize: 'clamp(1.8rem, 3vw, 2.5rem)',
                fontWeight: 800,
                color: '#FFFFFF',
                lineHeight: 1.2,
                marginBottom: '1rem'
              }}>
                Follow Our Weekly Kolkata Stories on Instagram
              </h2>

              <p style={{
                fontSize: '1rem',
                color: 'rgba(255, 255, 255, 0.82)',
                lineHeight: 1.6,
                maxWidth: '520px',
                marginBottom: '1.75rem'
              }}>
                Every single distribution drive, karate tournament, and birthday celebration is shared live on our Instagram page with unedited photos and videos.
              </p>

              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem', alignItems: 'center' }}>
                <a
                  href={NGO_CONFIG.instagramUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn"
                  style={{
                    background: 'linear-gradient(45deg, #f09433 0%, #e6683c 25%, #dc2743 50%, #cc2366 75%, #bc1888 100%)',
                    color: '#FFFFFF',
                    padding: '0.85rem 1.8rem',
                    boxShadow: '0 4px 20px rgba(220, 39, 67, 0.35)'
                  }}
                >
                  <InstagramIcon size={18} />
                  <span>Follow @{NGO_CONFIG.instagramHandle}</span>
                  <ArrowUpRight size={16} />
                </a>

                <span style={{ fontSize: '0.85rem', color: 'rgba(255, 255, 255, 0.7)' }}>
                  Active community updates
                </span>
              </div>
            </div>

            {/* Right Mini Reel / Photo Collage */}
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(3, 1fr)',
              gap: '0.75rem'
            }}>
              <div style={{ borderRadius: 'var(--radius-md)', overflow: 'hidden', height: '140px', boxShadow: 'var(--shadow-md)' }}>
                <img src="/images/dumdum_platform_feeding.png" alt="Drive photo" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
              </div>
              <div style={{ borderRadius: 'var(--radius-md)', overflow: 'hidden', height: '140px', boxShadow: 'var(--shadow-md)' }}>
                <img src="/images/free_karate_coaching.png" alt="Drive photo" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
              </div>
              <div style={{ borderRadius: 'var(--radius-md)', overflow: 'hidden', height: '140px', boxShadow: 'var(--shadow-md)' }}>
                <img src="/images/orphanage_birthday_celebration.png" alt="Drive photo" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
              </div>
            </div>

          </div>

        </div>
      </div>

      <style>{`
        @media (min-width: 960px) {
          .insta-banner-grid {
            grid-template-columns: 1.2fr 0.8fr !important;
          }
        }
      `}</style>
    </section>
  );
}
