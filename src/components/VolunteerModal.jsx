import React, { useState } from 'react';
import { Users, X, Check, HeartHandshake, Sparkles, Send, MessageCircle } from 'lucide-react';
import { NGO_CONFIG } from '../data/ngoData';

export default function VolunteerModal({ isOpen, onClose }) {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [locality, setLocality] = useState('');
  const [role, setRole] = useState('Weekend Night Food Distribution');
  const [isSubmitted, setIsSubmitted] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name || !phone) {
      alert('Please enter your name and phone number so we can reach you.');
      return;
    }
    setIsSubmitted(true);
  };

  const resetAndClose = () => {
    setIsSubmitted(false);
    onClose();
  };

  return (
    <div className="modal-overlay" onClick={resetAndClose}>
      <div 
        className="modal-content" 
        onClick={(e) => e.stopPropagation()}
        style={{ maxWidth: '540px', padding: 0 }}
      >
        {/* Header */}
        <div style={{
          backgroundColor: 'var(--color-forest)',
          color: '#FFFFFF',
          padding: '1.25rem 1.5rem',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          borderTopLeftRadius: 'var(--radius-lg)',
          borderTopRightRadius: 'var(--radius-lg)'
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
            <div style={{
              width: '32px',
              height: '32px',
              borderRadius: '50%',
              backgroundColor: 'rgba(255, 255, 255, 0.15)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: 'var(--color-gold)'
            }}>
              <Users size={18} />
            </div>
            <div>
              <div style={{ fontSize: '1.05rem', fontWeight: 800 }}>Join Our Kolkata Volunteer Force</div>
              <div style={{ fontSize: '0.75rem', color: 'rgba(255, 255, 255, 0.75)' }}>Step onto the ground with passionate changemakers</div>
            </div>
          </div>

          <button 
            onClick={resetAndClose}
            style={{ color: 'rgba(255, 255, 255, 0.8)', background: 'none', border: 'none', cursor: 'pointer' }}
          >
            <X size={22} />
          </button>
        </div>

        {/* Content Body */}
        {!isSubmitted ? (
          <form onSubmit={handleSubmit} style={{ padding: '1.75rem' }}>
            <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)', lineHeight: 1.5, marginBottom: '1.5rem' }}>
              Whether you can spare 2 hours on a Sunday evening or want to coach kids in karate or art, your hands make the difference.
            </p>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', marginBottom: '1.5rem' }}>
              <div>
                <label style={{ display: 'block', fontSize: '0.82rem', fontWeight: 700, color: 'var(--text-secondary)', marginBottom: '0.3rem' }}>
                  Full Name *
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Sourav Sen"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  style={{
                    width: '100%',
                    padding: '0.75rem',
                    borderRadius: 'var(--radius-sm)',
                    border: '1px solid var(--border-medium)',
                    fontSize: '0.95rem'
                  }}
                />
              </div>

              <div className="volunteer-contact-grid" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.75rem' }}>
                <div>
                  <label style={{ display: 'block', fontSize: '0.82rem', fontWeight: 700, color: 'var(--text-secondary)', marginBottom: '0.3rem' }}>
                    WhatsApp Number *
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="+91 98300..."
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    style={{
                      width: '100%',
                      padding: '0.75rem',
                      borderRadius: 'var(--radius-sm)',
                      border: '1px solid var(--border-medium)',
                      fontSize: '0.95rem'
                    }}
                  />
                </div>

                <div>
                  <label style={{ display: 'block', fontSize: '0.82rem', fontWeight: 700, color: 'var(--text-secondary)', marginBottom: '0.3rem' }}>
                    Kolkata Locality
                  </label>
                  <input
                    type="text"
                    placeholder="e.g. Dum Dum, Salt Lake"
                    value={locality}
                    onChange={(e) => setLocality(e.target.value)}
                    style={{
                      width: '100%',
                      padding: '0.75rem',
                      borderRadius: 'var(--radius-sm)',
                      border: '1px solid var(--border-medium)',
                      fontSize: '0.95rem'
                    }}
                  />
                </div>
              </div>

              <div>
                <label style={{ display: 'block', fontSize: '0.82rem', fontWeight: 700, color: 'var(--text-secondary)', marginBottom: '0.3rem' }}>
                  How Would You Like to Contribute?
                </label>
                <select
                  value={role}
                  onChange={(e) => setRole(e.target.value)}
                  style={{
                    width: '100%',
                    padding: '0.75rem',
                    borderRadius: 'var(--radius-sm)',
                    border: '1px solid var(--border-medium)',
                    fontSize: '0.95rem',
                    backgroundColor: '#FFFFFF'
                  }}
                >
                  <option value="Weekend Night Food Distribution">Weekend Night Food Distribution (Dum Dum / Platforms)</option>
                  <option value="Children Karate & Self-Defense Coaching">Children's Karate & Self-Defense Coaching</option>
                  <option value="Basti Art & Drawing Workshops">Basti Art & Drawing Workshops</option>
                  <option value="Orphanage Birthday Coordination">Orphanage Birthday Coordination</option>
                  <option value="Clothes & Winter Relief Drives">Clothes & Winter Relief Drives</option>
                  <option value="Social Media, Reels & Photography">Social Media, Reels & Photography</option>
                </select>
              </div>
            </div>

            <button
              type="submit"
              className="btn btn-forest"
              style={{
                width: '100%',
                padding: '0.9rem',
                fontSize: '1rem',
                boxShadow: 'var(--shadow-glow-green)'
              }}
            >
              <Send size={16} />
              <span>Submit Volunteer Request</span>
            </button>
          </form>
        ) : (
          <div style={{ padding: '2.5rem 1.75rem', textAlign: 'center' }}>
            <div style={{
              width: '64px',
              height: '64px',
              borderRadius: '50%',
              backgroundColor: 'var(--color-sprout-soft)',
              color: 'var(--color-forest)',
              margin: '0 auto 1.25rem auto',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              boxShadow: '0 0 0 8px rgba(46, 125, 50, 0.1)'
            }}>
              <Check size={32} />
            </div>

            <h3 style={{ fontSize: '1.5rem', fontWeight: 800, color: 'var(--color-forest)', marginBottom: '0.5rem' }}>
              Welcome to the Family, {name}!
            </h3>

            <p style={{ fontSize: '0.92rem', color: 'var(--text-secondary)', maxWidth: '420px', margin: '0 auto 1.5rem auto', lineHeight: 1.6 }}>
              Our volunteer coordinator in Kolkata will message you on WhatsApp (<strong>{phone}</strong>) for our next upcoming weekend drive.
            </p>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
              <a
                href={NGO_CONFIG.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-outline"
                style={{ width: '100%', padding: '0.8rem' }}
              >
                <span>Follow Drive Updates on Instagram</span>
              </a>

              <button
                onClick={resetAndClose}
                className="btn btn-forest"
                style={{ width: '100%', padding: '0.8rem' }}
              >
                Close
              </button>
            </div>
          </div>
        )}

      </div>

      <style>{`
        @media (max-width: 500px) {
          .volunteer-contact-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </div>
  );
}
