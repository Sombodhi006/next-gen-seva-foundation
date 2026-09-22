import React from 'react';
import { Heart, MapPin, ArrowUp, Mail, ShieldCheck } from 'lucide-react';
import InstagramIcon from './InstagramIcon';
import { NGO_CONFIG } from '../data/ngoData';

export default function Footer({ onOpenDonate, onOpenVolunteer }) {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer style={{
      backgroundColor: 'var(--color-forest-dark)',
      color: 'var(--text-on-dark)',
      padding: '4.5rem 0 2.5rem 0',
      borderTop: '1px solid rgba(255, 255, 255, 0.1)',
      position: 'relative'
    }}>
      <div className="container">
        
        {/* Main Footer Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
          gap: '3rem',
          marginBottom: '3.5rem'
        }}>
          
          {/* Brand Info */}
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1rem' }}>
              <img
                src="/logo.svg"
                alt="Next Gen Seva Foundation Emblem"
                style={{ width: '48px', height: '48px', objectFit: 'contain' }}
              />
              <div>
                <div style={{ fontFamily: 'var(--font-heading)', fontWeight: 800, fontSize: '1.25rem', color: '#FFFFFF' }}>
                  NEXT GEN SEVA
                </div>
                <div style={{ fontSize: '0.75rem', color: 'var(--color-gold)', fontWeight: 700, letterSpacing: '0.1em' }}>
                  FOUNDATION • KOLKATA
                </div>
              </div>
            </div>

            <p style={{
              fontSize: '0.9rem',
              color: 'var(--text-on-dark-muted)',
              lineHeight: 1.6,
              marginBottom: '1.25rem'
            }}>
              A youth-powered humanitarian movement in Kolkata. Serving hot food on railway platforms, training kids in self-defense, and celebrating life with orphanages since 2021.
            </p>

            <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', color: 'var(--color-gold)', fontSize: '0.82rem', fontWeight: 700 }}>
              <MapPin size={15} />
              <span>Kolkata (Dum Dum, Sealdah & Basti Environs)</span>
            </div>
          </div>

          {/* Quick Navigation */}
          <div>
            <h4 style={{ color: '#FFFFFF', fontSize: '1.05rem', fontWeight: 700, marginBottom: '1.25rem' }}>
              Our Work
            </h4>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.7rem' }}>
              <li>
                <a href="#drives" style={{ color: 'var(--text-on-dark-muted)', fontSize: '0.9rem', transition: 'color 0.2s' }}>
                  Aahaar Seva (Night Food Drives)
                </a>
              </li>
              <li>
                <a href="#drives" style={{ color: 'var(--text-on-dark-muted)', fontSize: '0.9rem' }}>
                  Project Shakti (Free Karate Dojo)
                </a>
              </li>
              <li>
                <a href="#drives" style={{ color: 'var(--text-on-dark-muted)', fontSize: '0.9rem' }}>
                  Project Khushiyan (Orphanage Birthdays)
                </a>
              </li>
              <li>
                <a href="#drives" style={{ color: 'var(--text-on-dark-muted)', fontSize: '0.9rem' }}>
                  Project Rang (Basti Art Drives)
                </a>
              </li>
              <li>
                <a href="#journal" style={{ color: 'var(--text-on-dark-muted)', fontSize: '0.9rem' }}>
                  Candid Photo Journal
                </a>
              </li>
            </ul>
          </div>

          {/* Connect & Get Involved */}
          <div>
            <h4 style={{ color: '#FFFFFF', fontSize: '1.05rem', fontWeight: 700, marginBottom: '1.25rem' }}>
              Get Involved
            </h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.85rem' }}>
              <button
                onClick={onOpenDonate}
                className="btn btn-primary"
                style={{ padding: '0.75rem 1.4rem', fontSize: '0.9rem', justifyContent: 'flex-start' }}
              >
                <Heart size={16} fill="currentColor" />
                <span>Sponsor a Drive in Kolkata</span>
              </button>

              <button
                onClick={onOpenVolunteer}
                className="btn btn-outline"
                style={{
                  padding: '0.75rem 1.4rem',
                  fontSize: '0.9rem',
                  borderColor: 'rgba(255, 255, 255, 0.3)',
                  color: '#FFFFFF',
                  justifyContent: 'flex-start'
                }}
              >
                <span>Join Sunday Volunteer Team</span>
              </button>

              <a
                href={NGO_CONFIG.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.5rem',
                  color: 'var(--color-gold)',
                  fontSize: '0.9rem',
                  fontWeight: 600,
                  marginTop: '0.25rem'
                }}
              >
                <InstagramIcon size={18} color="#E1306C" />
                <span>Follow @_the_next_gen_seva_foundation_</span>
              </a>
            </div>
          </div>

        </div>

        {/* Bottom Bar: Copyright & Back to Top */}
        <div style={{
          borderTop: '1px solid rgba(255, 255, 255, 0.1)',
          paddingTop: '2rem',
          display: 'flex',
          flexWrap: 'wrap',
          alignItems: 'center',
          justifyContent: 'space-between',
          gap: '1rem'
        }}>
          <div style={{ fontSize: '0.82rem', color: 'rgba(255, 255, 255, 0.6)' }}>
            © {new Date().getFullYear()} Next Gen Seva Foundation. Help Today • Build Tomorrow. All Rights Reserved.
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '1.5rem' }}>
            <span style={{ fontSize: '0.8rem', color: 'rgba(255, 255, 255, 0.6)', display: 'inline-flex', alignItems: 'center', gap: '0.35rem' }}>
              <ShieldCheck size={14} color="var(--color-sprout)" />
              100% Direct Grassroots Impact
            </span>

            <button
              onClick={scrollToTop}
              style={{
                width: '38px',
                height: '38px',
                borderRadius: '50%',
                backgroundColor: 'rgba(255, 255, 255, 0.1)',
                color: '#FFFFFF',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                cursor: 'pointer',
                border: 'none',
                transition: 'background 0.2s ease'
              }}
              aria-label="Scroll back to top"
            >
              <ArrowUp size={18} />
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
}
