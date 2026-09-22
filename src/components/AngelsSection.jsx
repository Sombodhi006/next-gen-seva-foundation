import React from 'react';
import { HeartHandshake, Sparkles, Users, ArrowRight, CheckCircle2 } from 'lucide-react';
import { NGO_CONFIG } from '../data/ngoData';

export default function AngelsSection({ onOpenVolunteer }) {
  return (
    <section id="angels" style={{
      padding: '5rem 0',
      backgroundColor: 'var(--bg-dark-section)',
      color: 'var(--text-on-dark)',
      position: 'relative',
      overflow: 'hidden'
    }}>
      
      {/* Decorative background glow */}
      <div style={{
        position: 'absolute',
        top: '20%',
        left: '-10%',
        width: '500px',
        height: '500px',
        borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(244, 162, 19, 0.08) 0%, transparent 70%)',
        pointerEvents: 'none'
      }} />

      <div className="container">
        <div style={{
          display: 'grid',
          gridTemplateColumns: '1fr',
          gap: '3rem',
          alignItems: 'center'
        }} className="angels-grid">

          {/* Left Column: Real photo of the volunteers ("Angels making it all happen") */}
          <div style={{ position: 'relative' }}>
            <div style={{
              borderRadius: 'var(--radius-xl)',
              overflow: 'hidden',
              boxShadow: 'var(--shadow-xl)',
              border: '2px solid rgba(255, 255, 255, 0.1)',
              position: 'relative'
            }}>
              <img
                src="/images/youth_volunteers_angels.png"
                alt="Youth volunteers of Next Gen Seva Foundation in Kolkata"
                className="angels-main-photo"
                style={{
                  width: '100%',
                  objectFit: 'cover',
                  display: 'block'
                }}
              />
              {/* Badge */}
              <div style={{
                position: 'absolute',
                bottom: '1.25rem',
                left: '1.25rem',
                right: '1.25rem',
                backgroundColor: 'rgba(11, 37, 26, 0.9)',
                backdropFilter: 'blur(8px)',
                padding: '1rem 1.25rem',
                borderRadius: 'var(--radius-md)',
                border: '1px solid rgba(255, 255, 255, 0.15)'
              }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--color-gold)', fontSize: '0.8rem', fontWeight: 800, textTransform: 'uppercase' }}>
                  <Sparkles size={14} />
                  <span>The Angels in Action</span>
                </div>
                <div style={{ fontSize: '0.9rem', color: '#FFFFFF', fontWeight: 600, marginTop: '0.2rem' }}>
                  Core volunteer team packing hundreds of meals for an evening street drive in Kolkata.
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Tribute Narrative & Values */}
          <div>
            <div style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.5rem',
              backgroundColor: 'rgba(244, 162, 19, 0.15)',
              color: 'var(--color-gold)',
              fontSize: '0.85rem',
              fontWeight: 700,
              padding: '0.4rem 1rem',
              borderRadius: 'var(--radius-full)',
              marginBottom: '1rem',
              border: '1px solid rgba(244, 162, 19, 0.3)'
            }}>
              <HeartHandshake size={15} />
              <span>Youth Leadership</span>
            </div>

            <h2 style={{
              fontSize: 'clamp(2rem, 3.5vw, 2.8rem)',
              fontWeight: 800,
              color: '#FFFFFF',
              lineHeight: 1.2,
              marginBottom: '1.25rem'
            }}>
              The Angels Making It All Happen
            </h2>

            <p style={{
              fontSize: '1.05rem',
              color: 'var(--text-on-dark-muted)',
              lineHeight: 1.7,
              marginBottom: '1.75rem'
            }}>
              Next Gen Seva Foundation is powered by college students, fresh graduates, and young working professionals in Kolkata who choose not to look away. When evening falls, they pack fresh meals, load cycles, prepare karate mats, and head out to serve.
            </p>

            {/* Core Values */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', marginBottom: '2.25rem' }}>
              <div style={{ display: 'flex', gap: '0.85rem' }}>
                <CheckCircle2 size={20} color="var(--color-gold)" style={{ flexShrink: 0, marginTop: '2px' }} />
                <div>
                  <h4 style={{ color: '#FFFFFF', fontSize: '1rem', fontWeight: 700 }}>Zero Bureaucracy, 100% Direct Action</h4>
                  <p style={{ color: 'var(--text-on-dark-muted)', fontSize: '0.88rem' }}>No delayed committees. If an elderly person is hungry on a platform tonight, they get fed tonight.</p>
                </div>
              </div>

              <div style={{ display: 'flex', gap: '0.85rem' }}>
                <CheckCircle2 size={20} color="var(--color-gold)" style={{ flexShrink: 0, marginTop: '2px' }} />
                <div>
                  <h4 style={{ color: '#FFFFFF', fontSize: '1rem', fontWeight: 700 }}>Dignity Before Charity</h4>
                  <p style={{ color: 'var(--text-on-dark-muted)', fontSize: '0.88rem' }}>Every meal is served with folded hands and deep respect. We do not demean those we are privileged to serve.</p>
                </div>
              </div>

              <div style={{ display: 'flex', gap: '0.85rem' }}>
                <CheckCircle2 size={20} color="var(--color-gold)" style={{ flexShrink: 0, marginTop: '2px' }} />
                <div>
                  <h4 style={{ color: '#FFFFFF', fontSize: '1rem', fontWeight: 700 }}>Empowering the Next Generation</h4>
                  <p style={{ color: 'var(--text-on-dark-muted)', fontSize: '0.88rem' }}>By teaching karate and art, we ensure today’s slum children grow up with confidence and strength.</p>
                </div>
              </div>
            </div>

            {/* CTA */}
            <button
              onClick={onOpenVolunteer}
              className="btn btn-primary"
              style={{ padding: '0.9rem 2rem', fontSize: '1rem' }}
            >
              <Users size={18} />
              <span>Stand With Us: Join as Volunteer</span>
              <ArrowRight size={16} />
            </button>

          </div>

        </div>
      </div>

      <style>{`
        .angels-main-photo {
          height: 420px;
        }

        @media (min-width: 960px) {
          .angels-grid {
            grid-template-columns: 0.95fr 1.05fr !important;
          }
        }

        @media (max-width: 768px) {
          .angels-main-photo {
            height: 270px !important;
          }
          .angels-grid .btn {
            width: 100% !important;
            justify-content: center !important;
          }
        }
      `}</style>
    </section>
  );
}
