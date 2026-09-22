import React, { useState, useEffect } from 'react';
import { Heart, Menu, X, ArrowUpRight, Sparkles } from 'lucide-react';
import InstagramIcon from './InstagramIcon';
import { NGO_CONFIG } from '../data/ngoData';

export default function Navbar({ onOpenDonate, onOpenVolunteer }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Our Drives', href: '#drives' },
    { label: 'Field Journal', href: '#journal' },
    { label: 'The Angels', href: '#angels' },
    { label: 'Impact & Trust', href: '#impact' },
    { label: 'FAQs', href: '#faqs' },
  ];

  return (
    <header 
      style={{
        position: 'sticky',
        top: 0,
        zIndex: 100,
        backgroundColor: isScrolled ? 'rgba(250, 247, 242, 0.95)' : 'transparent',
        backdropFilter: isScrolled ? 'blur(16px)' : 'none',
        WebkitBackdropFilter: isScrolled ? 'blur(16px)' : 'none',
        borderBottom: isScrolled ? '1px solid rgba(20, 61, 43, 0.08)' : '1px solid transparent',
        transition: 'all 0.3s ease',
        padding: isScrolled ? '0.75rem 0' : '1.25rem 0'
      }}
    >
      <div className="container" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        
        {/* Brand & Logo */}
        <a href="#" style={{ display: 'flex', alignItems: 'center', gap: '0.85rem', textDecoration: 'none' }}>
          <img 
            src="/logo.svg" 
            alt="Next Gen Seva Foundation Logo" 
            style={{ width: '48px', height: '48px', objectFit: 'contain' }}
          />
          <div>
            <div style={{ 
              fontFamily: 'var(--font-heading)', 
              fontWeight: 800, 
              fontSize: '1.2rem', 
              color: 'var(--color-forest)', 
              letterSpacing: '0.02em',
              lineHeight: 1.1
            }}>
              NEXT GEN SEVA
            </div>
            <div style={{ 
              fontSize: '0.72rem', 
              fontWeight: 700, 
              color: 'var(--color-amber)', 
              letterSpacing: '0.12em',
              textTransform: 'uppercase'
            }}>
              Kolkata • Help Today • Build Tomorrow
            </div>
          </div>
        </a>

        {/* Desktop Nav Links */}
        <nav style={{ display: 'none', alignItems: 'center', gap: '2rem' }} className="desktop-nav">
          {navLinks.map((link) => (
            <a 
              key={link.label} 
              href={link.href}
              style={{
                fontFamily: 'var(--font-heading)',
                fontSize: '0.95rem',
                fontWeight: 600,
                color: 'var(--text-secondary)',
                transition: 'color 0.2s ease',
                position: 'relative',
              }}
              onMouseEnter={(e) => e.currentTarget.style.color = 'var(--color-forest)'}
              onMouseLeave={(e) => e.currentTarget.style.color = 'var(--text-secondary)'}
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Actions (Instagram, Volunteer, Donate CTA) */}
        <div style={{ display: 'none', alignItems: 'center', gap: '0.85rem' }} className="desktop-actions">
          {/* Direct Instagram Link */}
          <a
            href={NGO_CONFIG.instagramUrl}
            target="_blank"
            rel="noopener noreferrer"
            title="Follow our Kolkata drives on Instagram"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.4rem',
              padding: '0.6rem 0.9rem',
              borderRadius: 'var(--radius-full)',
              backgroundColor: 'rgba(20, 61, 43, 0.05)',
              border: '1px solid rgba(20, 61, 43, 0.1)',
              color: 'var(--color-forest)',
              fontSize: '0.85rem',
              fontWeight: 600,
              transition: 'all 0.2s ease'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = 'rgba(20, 61, 43, 0.1)';
              e.currentTarget.style.transform = 'translateY(-1px)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = 'rgba(20, 61, 43, 0.05)';
              e.currentTarget.style.transform = 'translateY(0)';
            }}
          >
            <InstagramIcon size={16} color="#E1306C" />
            <span>@_the_next_gen...</span>
            <ArrowUpRight size={14} opacity={0.6} />
          </a>

          {/* Volunteer Button */}
          <button
            onClick={onOpenVolunteer}
            style={{
              padding: '0.65rem 1.1rem',
              borderRadius: 'var(--radius-full)',
              border: '1.5px solid var(--color-forest)',
              color: 'var(--color-forest)',
              fontSize: '0.9rem',
              fontWeight: 700,
              cursor: 'pointer',
              backgroundColor: 'transparent',
              transition: 'all 0.2s ease'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = 'rgba(20, 61, 43, 0.08)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = 'transparent';
            }}
          >
            Volunteer
          </button>

          {/* Donate CTA */}
          <button
            onClick={onOpenDonate}
            className="btn btn-primary"
            style={{
              padding: '0.65rem 1.35rem',
              fontSize: '0.9rem',
              boxShadow: 'var(--shadow-glow-gold)'
            }}
          >
            <Heart size={16} fill="currentColor" />
            <span>Donate Now</span>
          </button>
        </div>

        {/* Mobile Hamburger Toggle */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }} className="mobile-toggle">
          <button
            onClick={onOpenDonate}
            className="btn btn-primary"
            style={{
              padding: '0.5rem 0.9rem',
              fontSize: '0.82rem'
            }}
          >
            <Heart size={14} fill="currentColor" />
            <span>Donate</span>
          </button>

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            style={{
              padding: '0.5rem',
              color: 'var(--color-forest)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center'
            }}
            aria-label="Toggle Navigation Menu"
          >
            {mobileMenuOpen ? <X size={26} /> : <Menu size={26} />}
          </button>
        </div>

      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div 
          style={{
            position: 'fixed',
            top: '72px',
            left: 0,
            right: 0,
            backgroundColor: '#FFFFFF',
            borderBottom: '1px solid rgba(20, 61, 43, 0.1)',
            padding: '1.5rem',
            boxShadow: 'var(--shadow-xl)',
            display: 'flex',
            flexDirection: 'column',
            gap: '1.25rem',
            animation: 'fadeIn 0.2s ease-out'
          }}
        >
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              style={{
                fontFamily: 'var(--font-heading)',
                fontSize: '1.1rem',
                fontWeight: 600,
                color: 'var(--color-forest)',
                paddingBottom: '0.5rem',
                borderBottom: '1px solid rgba(20, 61, 43, 0.05)'
              }}
            >
              {link.label}
            </a>
          ))}

          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem', marginTop: '0.5rem' }}>
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenVolunteer();
              }}
              className="btn btn-outline"
              style={{ width: '100%' }}
            >
              Join as Kolkata Volunteer
            </button>

            <a
              href={NGO_CONFIG.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn"
              style={{
                width: '100%',
                backgroundColor: 'rgba(20, 61, 43, 0.05)',
                color: 'var(--color-forest)',
                display: 'inline-flex',
                gap: '0.5rem'
              }}
            >
              <InstagramIcon size={18} color="#E1306C" />
              Follow on Instagram
            </a>
          </div>
        </div>
      )}

      {/* Inline media query CSS for desktop nav display */}
      <style>{`
        @media (min-width: 960px) {
          .desktop-nav { display: flex !important; }
          .desktop-actions { display: flex !important; }
          .mobile-toggle { display: none !important; }
        }
      `}</style>
    </header>
  );
}
