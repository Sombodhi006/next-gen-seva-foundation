import React, { useState, useEffect } from 'react';
import { Utensils, ShieldAlert, Palette, Cake, Users, Award } from 'lucide-react';
import { IMPACT_STATS } from '../data/ngoData';

const iconMap = {
  Utensils: Utensils,
  ShieldAlert: ShieldAlert,
  Palette: Palette,
  Cake: Cake,
  Users: Users,
  Award: Award
};

export default function ImpactStats() {
  const [counts, setCounts] = useState(IMPACT_STATS.map(() => 0));

  useEffect(() => {
    const duration = 1800; // ms
    const steps = 36;
    const intervalTime = duration / steps;
    let step = 0;

    const timer = setInterval(() => {
      step++;
      setCounts(IMPACT_STATS.map(stat => Math.min(stat.value, Math.round((stat.value * step) / steps))));
      if (step >= steps) {
        clearInterval(timer);
      }
    }, intervalTime);

    return () => clearInterval(timer);
  }, []);

  return (
    <section id="impact" style={{ padding: '3.5rem 0', backgroundColor: '#FFFFFF', borderTop: '1px solid var(--border-subtle)', borderBottom: '1px solid var(--border-subtle)' }}>
      <div className="container">
        
        {/* Intro Tag & Title */}
        <div style={{ textAlign: 'center', marginBottom: '2.5rem' }}>
          <div className="section-tag">
            <Award size={14} />
            <span>Kolkata Field Milestones (2021 — Present)</span>
          </div>
          <h2 className="section-title">Small Acts, Compounded Hope</h2>
          <p className="section-subtitle" style={{ margin: '0 auto' }}>
            We do not operate from air-conditioned offices. Every meal, uniform, and drawing sheet is distributed by volunteers stepping directly onto Kolkata’s railway platforms and street corners.
          </p>
        </div>

        {/* Stats Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(210px, 1fr))',
          gap: '1.25rem'
        }}>
          {IMPACT_STATS.map((stat, idx) => {
            const IconComponent = iconMap[stat.icon] || Utensils;
            return (
              <div 
                key={stat.id}
                style={{
                  backgroundColor: 'var(--bg-canvas)',
                  borderRadius: 'var(--radius-lg)',
                  padding: '1.75rem 1.25rem',
                  border: '1px solid var(--border-subtle)',
                  textAlign: 'center',
                  transition: 'all 0.25s ease',
                  position: 'relative',
                  overflow: 'hidden'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-4px)';
                  e.currentTarget.style.boxShadow = 'var(--shadow-md)';
                  e.currentTarget.style.borderColor = 'rgba(20, 61, 43, 0.2)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = 'none';
                  e.currentTarget.style.borderColor = 'var(--border-subtle)';
                }}
              >
                {/* Decorative Icon Circle */}
                <div style={{
                  width: '52px',
                  height: '52px',
                  borderRadius: '50%',
                  backgroundColor: '#FFFFFF',
                  margin: '0 auto 1.25rem auto',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  boxShadow: 'var(--shadow-sm)',
                  color: stat.color
                }}>
                  <IconComponent size={24} />
                </div>

                {/* Animated Stat Value */}
                <div style={{
                  fontFamily: 'var(--font-heading)',
                  fontSize: '2.5rem',
                  fontWeight: 900,
                  color: 'var(--color-forest)',
                  lineHeight: 1,
                  marginBottom: '0.4rem',
                  letterSpacing: '-0.02em'
                }}>
                  {counts[idx].toLocaleString()}{stat.suffix}
                </div>

                {/* Stat Label */}
                <div style={{
                  fontSize: '0.95rem',
                  fontWeight: 700,
                  color: 'var(--text-primary)',
                  marginBottom: '0.35rem'
                }}>
                  {stat.label}
                </div>

                {/* Subtext */}
                <div style={{
                  fontSize: '0.8rem',
                  color: 'var(--text-muted)',
                  lineHeight: 1.4
                }}>
                  {stat.subtext}
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
