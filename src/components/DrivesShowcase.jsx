import React, { useState } from 'react';
import { Utensils, ShieldAlert, Cake, Palette, Heart, CheckCircle2, ArrowRight } from 'lucide-react';
import { INITIATIVES } from '../data/ngoData';

const iconTabs = {
  aahaar: Utensils,
  shakti: ShieldAlert,
  khushiyan: Cake,
  rang: Palette,
  poshak: Heart
};

export default function DrivesShowcase({ onOpenDonateWithPlan }) {
  const [activeTab, setActiveTab] = useState(INITIATIVES[0].id);

  const currentInitiative = INITIATIVES.find(i => i.id === activeTab) || INITIATIVES[0];

  return (
    <section id="drives" style={{ padding: '5rem 0', backgroundColor: 'var(--bg-canvas)' }}>
      <div className="container">
        
        {/* Header */}
        <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
          <div className="section-tag">
            <Heart size={14} fill="currentColor" />
            <span>Real On-Ground Initiatives</span>
          </div>
          <h2 className="section-title">What We Do Every Single Week</h2>
          <p className="section-subtitle" style={{ margin: '0 auto' }}>
            We focus on five grassroots pillars in Kolkata, balancing immediate humanitarian survival with long-term confidence and joyful youth empowerment.
          </p>
        </div>

        {/* Tab Navigation Pill Bar */}
        <div style={{
          display: 'flex',
          justifyContent: 'center',
          flexWrap: 'wrap',
          gap: '0.6rem',
          marginBottom: '2.5rem'
        }}>
          {INITIATIVES.map((item) => {
            const Icon = iconTabs[item.id] || Heart;
            const isActive = activeTab === item.id;
            return (
              <button
                key={item.id}
                onClick={() => setActiveTab(item.id)}
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.6rem',
                  padding: '0.75rem 1.4rem',
                  borderRadius: 'var(--radius-full)',
                  fontFamily: 'var(--font-heading)',
                  fontSize: '0.92rem',
                  fontWeight: 700,
                  transition: 'all 0.25s ease',
                  backgroundColor: isActive ? 'var(--color-forest)' : '#FFFFFF',
                  color: isActive ? '#FFFFFF' : 'var(--text-secondary)',
                  border: isActive ? '1px solid var(--color-forest)' : '1px solid var(--border-medium)',
                  boxShadow: isActive ? 'var(--shadow-glow-green)' : 'var(--shadow-sm)',
                  cursor: 'pointer'
                }}
              >
                <Icon size={16} color={isActive ? 'var(--color-gold)' : 'currentColor'} />
                <span>{item.title.split(':')[0]}</span>
              </button>
            );
          })}
        </div>

        {/* Active Initiative Showcase Card */}
        <div style={{
          backgroundColor: '#FFFFFF',
          borderRadius: 'var(--radius-xl)',
          padding: '2.5rem',
          boxShadow: 'var(--shadow-lg)',
          border: '1px solid var(--border-subtle)',
          display: 'grid',
          gridTemplateColumns: '1fr',
          gap: '2.5rem',
          alignItems: 'center'
        }} className="initiative-card-grid">

          {/* Left: Initiative Photos (Main + Sub) */}
          <div style={{ position: 'relative' }}>
            <div style={{
              borderRadius: 'var(--radius-lg)',
              overflow: 'hidden',
              boxShadow: 'var(--shadow-md)',
              position: 'relative'
            }}>
              <img
                src={currentInitiative.image}
                alt={currentInitiative.title}
                style={{
                  width: '100%',
                  height: '380px',
                  objectFit: 'cover',
                  display: 'block'
                }}
              />
              <div style={{
                position: 'absolute',
                top: '1rem',
                left: '1rem',
                backgroundColor: 'rgba(11, 37, 26, 0.85)',
                backdropFilter: 'blur(8px)',
                color: 'var(--color-gold)',
                fontSize: '0.78rem',
                fontWeight: 800,
                textTransform: 'uppercase',
                letterSpacing: '0.08em',
                padding: '0.4rem 0.85rem',
                borderRadius: 'var(--radius-full)',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.4rem'
              }}>
                <span style={{ width: '6px', height: '6px', borderRadius: '50%', backgroundColor: 'var(--color-gold)' }} />
                {currentInitiative.badge}
              </div>

              <div style={{
                position: 'absolute',
                bottom: '1rem',
                right: '1rem',
                backgroundColor: '#FFFFFF',
                color: 'var(--color-forest)',
                fontSize: '0.85rem',
                fontWeight: 800,
                padding: '0.4rem 0.9rem',
                borderRadius: 'var(--radius-md)',
                boxShadow: 'var(--shadow-md)'
              }}>
                {currentInitiative.stats}
              </div>
            </div>
          </div>

          {/* Right: Narrative & Impact Details */}
          <div>
            <h3 style={{
              fontSize: 'clamp(1.5rem, 2.5vw, 2.1rem)',
              fontWeight: 800,
              color: 'var(--color-forest)',
              lineHeight: 1.25,
              marginBottom: '0.75rem'
            }}>
              {currentInitiative.title}
            </h3>

            <p style={{
              fontFamily: 'var(--font-serif)',
              fontSize: '1.1rem',
              fontStyle: 'italic',
              color: 'var(--color-amber)',
              marginBottom: '1.25rem'
            }}>
              "{currentInitiative.tagline}"
            </p>

            <p style={{
              fontSize: '1rem',
              color: 'var(--text-secondary)',
              lineHeight: 1.7,
              marginBottom: '1.75rem'
            }}>
              {currentInitiative.description}
            </p>

            {/* Highlights List */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem', marginBottom: '2rem' }}>
              {currentInitiative.highlights.map((highlight, index) => (
                <div key={index} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.75rem' }}>
                  <CheckCircle2 size={18} color="var(--color-sprout)" style={{ flexShrink: 0, marginTop: '3px' }} />
                  <span style={{ fontSize: '0.94rem', color: 'var(--text-primary)', fontWeight: 500 }}>
                    {highlight}
                  </span>
                </div>
              ))}
            </div>

            {/* Action CTA */}
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem', alignItems: 'center' }}>
              <button
                onClick={() => onOpenDonateWithPlan(currentInitiative.id)}
                className="btn btn-primary"
                style={{ padding: '0.85rem 1.8rem' }}
              >
                <span>{currentInitiative.ctaText}</span>
                <ArrowRight size={16} />
              </button>

              <span style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>
                Directly funds supplies in Kolkata
              </span>
            </div>

          </div>

        </div>

      </div>

      <style>{`
        @media (min-width: 960px) {
          .initiative-card-grid {
            grid-template-columns: 1fr 1fr !important;
          }
        }
      `}</style>
    </section>
  );
}
