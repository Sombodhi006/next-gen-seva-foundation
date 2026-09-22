import React, { useState, useEffect } from 'react';
import { Heart, Users } from 'lucide-react';

export default function MobileBottomBar({ onOpenDonate, onOpenVolunteer }) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show only after scrolling down 250px
      if (window.scrollY > 250) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  if (!isVisible) return null;

  return (
    <div 
      className="mobile-sticky-bottom-bar"
      style={{
        position: 'fixed',
        bottom: 0,
        left: 0,
        right: 0,
        zIndex: 90,
        backgroundColor: 'rgba(255, 255, 255, 0.95)',
        backdropFilter: 'blur(12px)',
        WebkitBackdropFilter: 'blur(12px)',
        borderTop: '1px solid rgba(20, 61, 43, 0.12)',
        padding: '0.65rem 1rem env(safe-area-inset-bottom, 0.65rem) 1rem',
        boxShadow: '0 -4px 20px rgba(0, 0, 0, 0.08)',
        display: 'none',
        alignItems: 'center',
        gap: '0.6rem',
        animation: 'fadeIn 0.25s ease-out'
      }}
    >
      <button
        onClick={() => onOpenVolunteer()}
        style={{
          flex: 1,
          padding: '0.75rem 0.5rem',
          borderRadius: 'var(--radius-full)',
          border: '1.5px solid var(--color-forest)',
          color: 'var(--color-forest)',
          fontSize: '0.88rem',
          fontWeight: 700,
          backgroundColor: '#FFFFFF',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          gap: '0.4rem',
          cursor: 'pointer'
        }}
      >
        <Users size={16} />
        <span>Volunteer</span>
      </button>

      <button
        onClick={() => onOpenDonate(250)}
        className="btn-primary"
        style={{
          flex: 1.5,
          padding: '0.75rem 0.5rem',
          borderRadius: 'var(--radius-full)',
          border: 'none',
          fontSize: '0.9rem',
          fontWeight: 800,
          color: '#1A170F',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          gap: '0.4rem',
          cursor: 'pointer',
          boxShadow: '0 3px 12px rgba(244, 162, 19, 0.4)'
        }}
      >
        <Heart size={16} fill="currentColor" />
        <span>Sponsor (₹250)</span>
      </button>

      <style>{`
        @media (max-width: 768px) {
          .mobile-sticky-bottom-bar {
            display: flex !important;
          }
        }
      `}</style>
    </div>
  );
}
