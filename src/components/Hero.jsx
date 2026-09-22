import React from 'react';
import { Heart, Users, MapPin, Sparkles, ArrowRight, ShieldCheck } from 'lucide-react';
import { NGO_CONFIG } from '../data/ngoData';

export default function Hero({ onOpenDonate, onOpenVolunteer }) {
  return (
    <section style={{ position: 'relative', overflow: 'hidden', padding: '2.5rem 0 4rem 0' }}>
      
      {/* Background Decorative Ambient Blurs */}
      <div 
        style={{
          position: 'absolute',
          top: '-10%',
          right: '-5%',
          width: '550px',
          height: '550px',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(244, 162, 19, 0.12) 0%, rgba(20, 61, 43, 0) 70%)',
          filter: 'blur(60px)',
          zIndex: -1,
          pointerEvents: 'none'
        }}
      />
      <div 
        style={{
          position: 'absolute',
          bottom: '0%',
          left: '-5%',
          width: '450px',
          height: '450px',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(46, 125, 50, 0.1) 0%, rgba(20, 61, 43, 0) 70%)',
          filter: 'blur(50px)',
          zIndex: -1,
          pointerEvents: 'none'
        }}
      />

      <div className="container">
        <div style={{
          display: 'grid',
          gridTemplateColumns: '1fr',
          gap: '3rem',
          alignItems: 'center'
        }} className="hero-grid">

          {/* Left Column: Mission Narrative & CTAs */}
          <div>
            {/* Location & Established Badge */}
            <div style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.6rem',
              backgroundColor: '#FFFFFF',
              padding: '0.45rem 1rem',
              borderRadius: 'var(--radius-full)',
              boxShadow: 'var(--shadow-sm)',
              border: '1px solid rgba(20, 61, 43, 0.1)',
              marginBottom: '1.5rem'
            }}>
              <span style={{
                width: '8px',
                height: '8px',
                borderRadius: '50%',
                backgroundColor: '#22C55E',
                display: 'inline-block',
                boxShadow: '0 0 0 3px rgba(34, 197, 94, 0.2)'
              }} />
              <MapPin size={15} color="var(--color-forest)" />
              <span style={{ fontSize: '0.86rem', fontWeight: 700, color: 'var(--color-forest)' }}>
                Kolkata Grassroots • Active Since 2021
              </span>
            </div>

            {/* Main Headline */}
            <h1 style={{
              fontSize: 'clamp(2.5rem, 5vw, 4rem)',
              fontWeight: 900,
              color: 'var(--color-forest)',
              letterSpacing: '-0.025em',
              lineHeight: 1.12,
              marginBottom: '1.25rem'
            }}>
              Help Today. <br />
              <span style={{
                background: 'linear-gradient(135deg, var(--color-amber) 0%, var(--color-gold) 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                display: 'inline-block'
              }}>
                Build Tomorrow.
              </span>
            </h1>

            {/* Sub-headline */}
            <p style={{
              fontSize: 'clamp(1.05rem, 1.4vw, 1.25rem)',
              color: 'var(--text-secondary)',
              lineHeight: 1.65,
              maxWidth: '560px',
              marginBottom: '2rem'
            }}>
              From late-night food drives on Dum Dum station platforms to free karate dojos for basti youth and birthday smiles in orphanages — we are Kolkata youth dedicated to restoring hope with our own hands.
            </p>

            {/* Action Buttons */}
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem', alignItems: 'center', marginBottom: '2.5rem' }}>
              <button
                onClick={onOpenDonate}
                className="btn btn-primary"
                style={{
                  padding: '0.95rem 2rem',
                  fontSize: '1.05rem'
                }}
              >
                <Heart size={18} fill="currentColor" />
                <span>Sponsor a Meal (₹250)</span>
              </button>

              <button
                onClick={onOpenVolunteer}
                className="btn btn-forest"
                style={{
                  padding: '0.95rem 1.8rem',
                  fontSize: '1.02rem'
                }}
              >
                <Users size={18} />
                <span>Join as Kolkata Volunteer</span>
              </button>
            </div>

            {/* Trust Highlights */}
            <div style={{
              display: 'flex',
              flexWrap: 'wrap',
              gap: '1.5rem',
              borderTop: '1px solid rgba(20, 61, 43, 0.1)',
              paddingTop: '1.5rem'
            }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
                <div style={{
                  width: '32px',
                  height: '32px',
                  borderRadius: '50%',
                  backgroundColor: 'var(--color-sprout-soft)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: 'var(--color-forest)'
                }}>
                  <ShieldCheck size={18} />
                </div>
                <div>
                  <div style={{ fontSize: '0.88rem', fontWeight: 700, color: 'var(--color-forest)' }}>100% Direct Relief</div>
                  <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>Every rupee goes to field supplies</div>
                </div>
              </div>

              <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
                <div style={{
                  width: '32px',
                  height: '32px',
                  borderRadius: '50%',
                  backgroundColor: 'var(--color-gold-light)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: 'var(--color-amber)'
                }}>
                  <Sparkles size={18} />
                </div>
                <div>
                  <div style={{ fontSize: '0.88rem', fontWeight: 700, color: 'var(--color-forest)' }}>Youth-Led Impact</div>
                  <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>50+ volunteer students & professionals</div>
                </div>
              </div>
            </div>

          </div>

          {/* Right Column: Real Kolkata Field Work Visual Grid */}
          <div style={{ position: 'relative' }}>

            {/* Main Featured Photo (Dum Dum Platform Feeding) */}
            <div style={{
              borderRadius: 'var(--radius-xl)',
              overflow: 'hidden',
              boxShadow: 'var(--shadow-xl)',
              position: 'relative',
              backgroundColor: '#FFFFFF',
              border: '3px solid #FFFFFF'
            }}>
              <img
                src="/images/dumdum_platform_feeding.png"
                alt="Late night food distribution at Dum Dum railway station platform"
                style={{
                  width: '100%',
                  height: '420px',
                  objectFit: 'cover',
                  display: 'block'
                }}
              />
              {/* Overlay Gradient & Caption */}
              <div style={{
                position: 'absolute',
                bottom: 0,
                left: 0,
                right: 0,
                padding: '1.5rem',
                background: 'linear-gradient(to top, rgba(11, 37, 26, 0.92) 0%, rgba(11, 37, 26, 0.4) 60%, transparent 100%)',
                color: '#FFFFFF'
              }}>
                <div style={{
                  display: 'inline-block',
                  backgroundColor: 'var(--color-gold)',
                  color: '#1A170F',
                  fontWeight: 800,
                  fontSize: '0.72rem',
                  textTransform: 'uppercase',
                  letterSpacing: '0.08em',
                  padding: '0.2rem 0.6rem',
                  borderRadius: 'var(--radius-sm)',
                  marginBottom: '0.4rem'
                }}>
                  Live Drive Spot: Dum Dum Station
                </div>
                <h3 style={{ color: '#FFFFFF', fontSize: '1.15rem', fontWeight: 700, marginBottom: '0.2rem' }}>
                  Aahaar Seva: Warmth in the Darkest Hours
                </h3>
                <p style={{ color: 'rgba(255, 255, 255, 0.85)', fontSize: '0.85rem' }}>
                  Hand-delivering fresh dinner packs to destitute elders on railway platforms.
                </p>
              </div>
            </div>

            {/* Overlapping Floating Card 1: Free Karate Champions */}
            <div 
              className="glass-card animate-float"
              style={{
                position: 'absolute',
                top: '-20px',
                right: '-15px',
                padding: '0.75rem',
                borderRadius: 'var(--radius-lg)',
                display: 'flex',
                alignItems: 'center',
                gap: '0.8rem',
                maxWidth: '260px',
                boxShadow: 'var(--shadow-lg)',
                backgroundColor: 'rgba(255, 255, 255, 0.94)'
              }}
            >
              <img
                src="/images/free_karate_coaching.png"
                alt="Free youth karate students"
                style={{
                  width: '60px',
                  height: '60px',
                  borderRadius: 'var(--radius-md)',
                  objectFit: 'cover'
                }}
              />
              <div>
                <div style={{ fontSize: '0.75rem', fontWeight: 800, color: 'var(--color-sprout)', textTransform: 'uppercase' }}>
                  Project Shakti
                </div>
                <div style={{ fontSize: '0.88rem', fontWeight: 800, color: 'var(--color-forest)', lineHeight: 1.2 }}>
                  120+ Kids in Free Karate
                </div>
                <div style={{ fontSize: '0.72rem', color: 'var(--text-muted)' }}>
                  Self-defense & belts
                </div>
              </div>
            </div>

            {/* Overlapping Floating Card 2: Orphanage Celebrations */}
            <div 
              className="glass-card"
              style={{
                position: 'absolute',
                bottom: '-25px',
                left: '-15px',
                padding: '0.75rem 1rem',
                borderRadius: 'var(--radius-lg)',
                display: 'flex',
                alignItems: 'center',
                gap: '0.85rem',
                maxWidth: '280px',
                boxShadow: 'var(--shadow-lg)',
                backgroundColor: 'rgba(255, 255, 255, 0.94)'
              }}
            >
              <img
                src="/images/orphanage_birthday_celebration.png"
                alt="Orphanage birthday celebration"
                style={{
                  width: '56px',
                  height: '56px',
                  borderRadius: 'var(--radius-md)',
                  objectFit: 'cover'
                }}
              />
              <div>
                <div style={{ fontSize: '0.72rem', fontWeight: 800, color: 'var(--color-amber)', textTransform: 'uppercase' }}>
                  Project Khushiyan
                </div>
                <div style={{ fontSize: '0.88rem', fontWeight: 800, color: 'var(--color-forest)' }}>
                  Orphanage Birthdays
                </div>
                <div style={{ fontSize: '0.72rem', color: 'var(--text-muted)' }}>
                  Cakes, gifts & love
                </div>
              </div>
            </div>

          </div>

        </div>
      </div>

      <style>{`
        @media (min-width: 960px) {
          .hero-grid {
            grid-template-columns: 1.1fr 0.9fr !important;
          }
        }
      `}</style>
    </section>
  );
}
