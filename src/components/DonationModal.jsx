import React, { useState } from 'react';
import { 
  Heart, X, Check, ShieldCheck, QrCode, CreditCard, 
  Smartphone, Building, Download, Sparkles, AlertCircle, Utensils,
  Palette, ShieldAlert, Cake
} from 'lucide-react';
import confetti from 'canvas-confetti';
import { DONATION_TIERS, NGO_CONFIG } from '../data/ngoData';

const iconMap = {
  Utensils: Utensils,
  Palette: Palette,
  ShieldAlert: ShieldAlert,
  Cake: Cake,
  Heart: Heart
};

export default function DonationModal({ isOpen, onClose, initialTier = null }) {
  const [frequency, setFrequency] = useState('one-time'); // 'one-time' or 'monthly'
  const [currency, setCurrency] = useState('INR'); // 'INR' or 'USD'
  const [selectedTier, setSelectedTier] = useState(initialTier || 250);
  const [customAmount, setCustomAmount] = useState('');
  const [donorName, setDonorName] = useState('');
  const [donorEmail, setDonorEmail] = useState('');
  const [donorPhone, setDonorPhone] = useState('');
  const [paymentStep, setPaymentStep] = useState('select'); // 'select', 'checkout', 'success'
  const [selectedPaymentMethod, setSelectedPaymentMethod] = useState('upi');

  if (!isOpen) return null;

  const currentAmount = customAmount ? parseFloat(customAmount) || 0 : selectedTier;
  const rate = currency === 'USD' ? 0.012 : 1;
  const symbol = currency === 'USD' ? '$' : '₹';

  const formatMoney = (inrVal) => {
    if (currency === 'USD') {
      return `$${Math.round(inrVal * 0.012)}`;
    }
    return `₹${inrVal.toLocaleString('en-IN')}`;
  };

  const calculateDynamicImpact = (amtInInr) => {
    if (amtInInr <= 0) return 'Enter an amount to see its tangible impact.';
    const meals = Math.floor(amtInInr / 50);
    const artKits = Math.floor(amtInInr / 250);
    const karateMonths = Math.floor(amtInInr / 250);
    if (meals < 5) return `Sponsors ${meals} wholesome freshly prepared meals for destitute elders.`;
    if (meals < 15) return `Sponsors ${meals} hot meals or ${artKits} art kits for basti children.`;
    return `Sponsors ${meals} fresh meal boxes or ${karateMonths} months of child self-defense training in Kolkata.`;
  };

  const handleProceedToPay = (e) => {
    e.preventDefault();
    if (!currentAmount || currentAmount < 50) {
      alert('Please enter a valid amount (min ₹50)');
      return;
    }
    setPaymentStep('checkout');
  };

  const handleSimulateSuccess = () => {
    // Fire confetti celebration
    try {
      confetti({
        particleCount: 80,
        spread: 60,
        origin: { y: 0.6 }
      });
    } catch (e) {
      console.log(e);
    }
    setPaymentStep('success');
  };

  const resetModal = () => {
    setPaymentStep('select');
    onClose();
  };

  return (
    <div className="modal-overlay" onClick={resetModal}>
      <div 
        className="modal-content" 
        onClick={(e) => e.stopPropagation()}
        style={{ maxWidth: '640px', padding: 0 }}
      >
        {/* Header Bar */}
        <div style={{
          backgroundColor: 'var(--color-forest)',
          color: '#FFFFFF',
          padding: '1.25rem 1.5rem',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          borderTopLeftRadius: 'var(--radius-lg)',
          borderTopRightRadius: 'var(--radius-lg)',
          position: 'sticky',
          top: 0,
          zIndex: 10
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
              <Heart size={18} fill="currentColor" />
            </div>
            <div>
              <div style={{ fontSize: '1rem', fontWeight: 800 }}>Support Next Gen Seva</div>
              <div style={{ fontSize: '0.75rem', color: 'rgba(255, 255, 255, 0.75)' }}>Kolkata Grassroots Hunger Relief & Youth Empowerment</div>
            </div>
          </div>

          <button 
            onClick={resetModal}
            style={{
              color: 'rgba(255, 255, 255, 0.8)',
              background: 'none',
              border: 'none',
              cursor: 'pointer',
              padding: '0.3rem'
            }}
          >
            <X size={22} />
          </button>
        </div>

        {/* STEP 1: Select Amount & Frequency */}
        {paymentStep === 'select' && (
          <div style={{ padding: '1.5rem 1.75rem' }}>

            {/* Frequency & Currency Selectors */}
            <div style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              marginBottom: '1.5rem',
              flexWrap: 'wrap',
              gap: '0.75rem'
            }}>
              {/* Frequency Toggle */}
              <div style={{
                backgroundColor: 'var(--bg-canvas)',
                borderRadius: 'var(--radius-full)',
                padding: '0.25rem',
                display: 'inline-flex',
                border: '1px solid var(--border-subtle)'
              }}>
                <button
                  type="button"
                  onClick={() => setFrequency('one-time')}
                  style={{
                    padding: '0.45rem 1rem',
                    borderRadius: 'var(--radius-full)',
                    fontSize: '0.85rem',
                    fontWeight: 700,
                    backgroundColor: frequency === 'one-time' ? 'var(--color-forest)' : 'transparent',
                    color: frequency === 'one-time' ? '#FFFFFF' : 'var(--text-secondary)',
                    transition: 'all 0.2s ease'
                  }}
                >
                  One-Time Gift
                </button>
                <button
                  type="button"
                  onClick={() => setFrequency('monthly')}
                  style={{
                    padding: '0.45rem 1rem',
                    borderRadius: 'var(--radius-full)',
                    fontSize: '0.85rem',
                    fontWeight: 700,
                    backgroundColor: frequency === 'monthly' ? 'var(--color-forest)' : 'transparent',
                    color: frequency === 'monthly' ? '#FFFFFF' : 'var(--text-secondary)',
                    transition: 'all 0.2s ease',
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '0.35rem'
                  }}
                >
                  <span>Monthly Ally</span>
                  <span style={{
                    fontSize: '0.65rem',
                    backgroundColor: 'var(--color-gold)',
                    color: '#1A170F',
                    padding: '0.1rem 0.4rem',
                    borderRadius: 'var(--radius-full)',
                    fontWeight: 800
                  }}>Sustain</span>
                </button>
              </div>

              {/* Currency Toggle */}
              <div style={{ display: 'inline-flex', gap: '0.3rem', fontSize: '0.85rem', fontWeight: 700 }}>
                <button
                  onClick={() => setCurrency('INR')}
                  style={{
                    padding: '0.35rem 0.65rem',
                    borderRadius: 'var(--radius-sm)',
                    backgroundColor: currency === 'INR' ? 'rgba(20, 61, 43, 0.1)' : 'transparent',
                    color: currency === 'INR' ? 'var(--color-forest)' : 'var(--text-muted)'
                  }}
                >
                  ₹ INR
                </button>
                <button
                  onClick={() => setCurrency('USD')}
                  style={{
                    padding: '0.35rem 0.65rem',
                    borderRadius: 'var(--radius-sm)',
                    backgroundColor: currency === 'USD' ? 'rgba(20, 61, 43, 0.1)' : 'transparent',
                    color: currency === 'USD' ? 'var(--color-forest)' : 'var(--text-muted)'
                  }}
                >
                  $ USD
                </button>
              </div>
            </div>

            {/* Tiered Amount Cards */}
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(130px, 1fr))',
              gap: '0.65rem',
              marginBottom: '1.25rem'
            }}>
              {DONATION_TIERS.map((tier) => {
                const Icon = iconMap[tier.icon] || Heart;
                const isSelected = !customAmount && selectedTier === tier.amount;
                return (
                  <div
                    key={tier.id}
                    onClick={() => {
                      setSelectedTier(tier.amount);
                      setCustomAmount('');
                    }}
                    style={{
                      border: isSelected ? '2px solid var(--color-forest)' : '1px solid var(--border-medium)',
                      backgroundColor: isSelected ? 'rgba(20, 61, 43, 0.04)' : '#FFFFFF',
                      borderRadius: 'var(--radius-md)',
                      padding: '0.85rem',
                      cursor: 'pointer',
                      transition: 'all 0.2s ease',
                      position: 'relative'
                    }}
                  >
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '0.4rem' }}>
                      <span style={{
                        fontSize: '1.15rem',
                        fontWeight: 800,
                        color: 'var(--color-forest)'
                      }}>
                        {formatMoney(tier.amount)}
                      </span>
                      <Icon size={16} color="var(--color-amber)" />
                    </div>

                    <div style={{ fontSize: '0.8rem', fontWeight: 700, color: 'var(--text-primary)', lineHeight: 1.2, marginBottom: '0.3rem' }}>
                      {tier.title}
                    </div>

                    <div style={{ fontSize: '0.72rem', color: 'var(--text-muted)', lineHeight: 1.3 }}>
                      {tier.tag}
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Custom Amount Field */}
            <div style={{ marginBottom: '1.25rem' }}>
              <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 700, color: 'var(--text-secondary)', marginBottom: '0.4rem' }}>
                Or Enter Custom Contribution:
              </label>
              <div style={{ position: 'relative' }}>
                <span style={{
                  position: 'absolute',
                  left: '1rem',
                  top: '50%',
                  transform: 'translateY(-50%)',
                  fontWeight: 700,
                  fontSize: '1.1rem',
                  color: 'var(--color-forest)'
                }}>
                  {symbol}
                </span>
                <input
                  type="number"
                  placeholder="Enter custom amount (e.g. 500, 2000)"
                  value={customAmount}
                  onChange={(e) => setCustomAmount(e.target.value)}
                  style={{
                    width: '100%',
                    padding: '0.75rem 1rem 0.75rem 2.4rem',
                    borderRadius: 'var(--radius-md)',
                    border: '1px solid var(--border-medium)',
                    fontSize: '1rem',
                    fontWeight: 700,
                    outline: 'none',
                    color: 'var(--color-forest)',
                    backgroundColor: '#FFFFFF'
                  }}
                />
              </div>
            </div>

            {/* Real-time Tangible Impact Box */}
            <div style={{
              backgroundColor: 'var(--color-sprout-soft)',
              border: '1px solid rgba(46, 125, 50, 0.2)',
              borderRadius: 'var(--radius-md)',
              padding: '0.85rem 1rem',
              display: 'flex',
              alignItems: 'center',
              gap: '0.65rem',
              marginBottom: '1.5rem'
            }}>
              <Sparkles size={20} color="var(--color-forest)" style={{ flexShrink: 0 }} />
              <div style={{ fontSize: '0.85rem', color: 'var(--color-forest)', fontWeight: 600 }}>
                {calculateDynamicImpact(customAmount ? parseFloat(customAmount) : selectedTier)}
              </div>
            </div>

            {/* Donor Quick Details */}
            <div className="donor-quick-details" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.75rem', marginBottom: '1.25rem' }}>
              <div>
                <label style={{ display: 'block', fontSize: '0.78rem', fontWeight: 600, color: 'var(--text-secondary)', marginBottom: '0.25rem' }}>
                  Your Name (Optional)
                </label>
                <input
                  type="text"
                  placeholder="Rahul Mukherjee"
                  value={donorName}
                  onChange={(e) => setDonorName(e.target.value)}
                  style={{
                    width: '100%',
                    padding: '0.65rem 0.85rem',
                    borderRadius: 'var(--radius-sm)',
                    border: '1px solid var(--border-medium)',
                    fontSize: '0.88rem'
                  }}
                />
              </div>

              <div>
                <label style={{ display: 'block', fontSize: '0.78rem', fontWeight: 600, color: 'var(--text-secondary)', marginBottom: '0.25rem' }}>
                  Email / Phone for Receipt
                </label>
                <input
                  type="text"
                  placeholder="name@email.com"
                  value={donorEmail}
                  onChange={(e) => setDonorEmail(e.target.value)}
                  style={{
                    width: '100%',
                    padding: '0.65rem 0.85rem',
                    borderRadius: 'var(--radius-sm)',
                    border: '1px solid var(--border-medium)',
                    fontSize: '0.88rem'
                  }}
                />
              </div>
            </div>

            {/* Submit Action */}
            <button
              onClick={handleProceedToPay}
              className="btn btn-primary"
              style={{
                width: '100%',
                padding: '0.95rem',
                fontSize: '1.05rem',
                boxShadow: 'var(--shadow-glow-gold)'
              }}
            >
              <span>Proceed to Support ({formatMoney(currentAmount)})</span>
              <Heart size={18} fill="currentColor" />
            </button>

            {/* Trust Note */}
            <div style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '0.5rem',
              marginTop: '1rem',
              fontSize: '0.76rem',
              color: 'var(--text-muted)'
            }}>
              <ShieldCheck size={15} color="var(--color-sprout)" />
              <span>100% of proceeds go directly to on-ground supplies in Kolkata</span>
            </div>

          </div>
        )}

        {/* STEP 2: Checkout Simulation (UPI / QR / NetBanking / Cards) */}
        {paymentStep === 'checkout' && (
          <div style={{ padding: '1.75rem' }}>
            <div style={{ textAlign: 'center', marginBottom: '1.5rem' }}>
              <div style={{ fontSize: '0.85rem', fontWeight: 700, color: 'var(--color-amber)', textTransform: 'uppercase' }}>
                Simulated Contribution Gateway
              </div>
              <h3 style={{ fontSize: '1.5rem', fontWeight: 800, color: 'var(--color-forest)', margin: '0.25rem 0' }}>
                Confirm {formatMoney(currentAmount)}
              </h3>
              <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>
                {frequency === 'monthly' ? 'Monthly Sustaining Partner' : 'One-Time Direct Humanitarian Gift'}
              </p>
            </div>

            {/* Payment Method Tabs */}
            <div style={{
              display: 'flex',
              gap: '0.5rem',
              marginBottom: '1.5rem',
              backgroundColor: 'var(--bg-canvas)',
              padding: '0.35rem',
              borderRadius: 'var(--radius-md)'
            }}>
              <button
                type="button"
                onClick={() => setSelectedPaymentMethod('upi')}
                style={{
                  flex: 1,
                  padding: '0.65rem 0.5rem',
                  borderRadius: 'var(--radius-sm)',
                  fontSize: '0.82rem',
                  fontWeight: 700,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '0.35rem',
                  backgroundColor: selectedPaymentMethod === 'upi' ? '#FFFFFF' : 'transparent',
                  color: selectedPaymentMethod === 'upi' ? 'var(--color-forest)' : 'var(--text-muted)',
                  boxShadow: selectedPaymentMethod === 'upi' ? 'var(--shadow-sm)' : 'none'
                }}
              >
                <Smartphone size={16} />
                <span>UPI / QR</span>
              </button>

              <button
                type="button"
                onClick={() => setSelectedPaymentMethod('card')}
                style={{
                  flex: 1,
                  padding: '0.65rem 0.5rem',
                  borderRadius: 'var(--radius-sm)',
                  fontSize: '0.82rem',
                  fontWeight: 700,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '0.35rem',
                  backgroundColor: selectedPaymentMethod === 'card' ? '#FFFFFF' : 'transparent',
                  color: selectedPaymentMethod === 'card' ? 'var(--color-forest)' : 'var(--text-muted)',
                  boxShadow: selectedPaymentMethod === 'card' ? 'var(--shadow-sm)' : 'none'
                }}
              >
                <CreditCard size={16} />
                <span>Card / NetBanking</span>
              </button>
            </div>

            {/* UPI QR View */}
            {selectedPaymentMethod === 'upi' ? (
              <div style={{
                textAlign: 'center',
                backgroundColor: 'var(--bg-canvas)',
                padding: '1.5rem',
                borderRadius: 'var(--radius-md)',
                marginBottom: '1.5rem',
                border: '1px dashed var(--border-medium)'
              }}>
                <div style={{
                  width: '140px',
                  height: '140px',
                  margin: '0 auto 1rem auto',
                  backgroundColor: '#FFFFFF',
                  padding: '0.6rem',
                  borderRadius: 'var(--radius-sm)',
                  boxShadow: 'var(--shadow-sm)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  flexDirection: 'column'
                }}>
                  <QrCode size={110} color="var(--color-forest)" />
                </div>
                <div style={{ fontSize: '0.9rem', fontWeight: 800, color: 'var(--color-forest)', marginBottom: '0.2rem' }}>
                  Scan with GPay / PhonePe / Paytm
                </div>
                <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>
                  UPI VPA: <span style={{ fontWeight: 700, color: 'var(--color-amber)' }}>{NGO_CONFIG.upiId}</span>
                </div>
              </div>
            ) : (
              <div style={{
                backgroundColor: 'var(--bg-canvas)',
                padding: '1.25rem',
                borderRadius: 'var(--radius-md)',
                marginBottom: '1.5rem',
                fontSize: '0.85rem',
                color: 'var(--text-secondary)'
              }}>
                <div style={{ marginBottom: '0.85rem' }}>
                  <label style={{ display: 'block', fontSize: '0.75rem', fontWeight: 700, marginBottom: '0.25rem' }}>Card Number</label>
                  <input type="text" placeholder="•••• •••• •••• 4242" disabled value="•••• •••• •••• 4242 (Simulated)" style={{ width: '100%', padding: '0.6rem', borderRadius: 'var(--radius-sm)', border: '1px solid var(--border-medium)' }} />
                </div>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.5rem' }}>
                  <div>
                    <label style={{ display: 'block', fontSize: '0.75rem', fontWeight: 700, marginBottom: '0.25rem' }}>Expiry</label>
                    <input type="text" placeholder="MM/YY" disabled value="12/28" style={{ width: '100%', padding: '0.6rem', borderRadius: 'var(--radius-sm)', border: '1px solid var(--border-medium)' }} />
                  </div>
                  <div>
                    <label style={{ display: 'block', fontSize: '0.75rem', fontWeight: 700, marginBottom: '0.25rem' }}>CVV</label>
                    <input type="password" placeholder="•••" disabled value="•••" style={{ width: '100%', padding: '0.6rem', borderRadius: 'var(--radius-sm)', border: '1px solid var(--border-medium)' }} />
                  </div>
                </div>
              </div>
            )}

            {/* Note about simulated payment */}
            <div style={{
              display: 'flex',
              alignItems: 'flex-start',
              gap: '0.6rem',
              backgroundColor: 'rgba(244, 162, 19, 0.12)',
              padding: '0.75rem',
              borderRadius: 'var(--radius-sm)',
              marginBottom: '1.25rem'
            }}>
              <AlertCircle size={16} color="var(--color-amber)" style={{ flexShrink: 0, marginTop: '2px' }} />
              <div style={{ fontSize: '0.78rem', color: '#6A4305', lineHeight: 1.4 }}>
                <strong>Demo Mode Active:</strong> Clicking below simulates a completed transfer and will instantly generate your downloadable official donation certificate preview.
              </div>
            </div>

            <div style={{ display: 'flex', gap: '0.75rem' }}>
              <button
                onClick={() => setPaymentStep('select')}
                className="btn btn-outline"
                style={{ flex: 1, padding: '0.85rem' }}
              >
                Back
              </button>

              <button
                onClick={handleSimulateSuccess}
                className="btn btn-primary"
                style={{ flex: 2, padding: '0.85rem' }}
              >
                <span>Simulate Successful Donation</span>
                <Check size={18} />
              </button>
            </div>
          </div>
        )}

        {/* STEP 3: Success & Downloadable Tax Receipt Preview */}
        {paymentStep === 'success' && (
          <div style={{ padding: '2rem 1.75rem', textAlign: 'center' }}>
            <div style={{
              width: '64px',
              height: '64px',
              borderRadius: '50%',
              backgroundColor: 'var(--color-sprout-soft)',
              color: 'var(--color-forest)',
              margin: '0 auto 1rem auto',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              boxShadow: '0 0 0 8px rgba(46, 125, 50, 0.1)'
            }}>
              <Check size={32} />
            </div>

            <h3 style={{ fontSize: '1.6rem', fontWeight: 800, color: 'var(--color-forest)', marginBottom: '0.4rem' }}>
              Dhonyobad! Thank You for Your Heart
            </h3>

            <p style={{ fontSize: '0.92rem', color: 'var(--text-secondary)', maxWidth: '440px', margin: '0 auto 1.5rem auto' }}>
              Your contribution of <strong>{formatMoney(currentAmount)}</strong> directly funds meals, uniforms, and warmth for vulnerable communities in Kolkata.
            </p>

            {/* Official Receipt Card Box */}
            <div style={{
              backgroundColor: 'var(--bg-canvas)',
              borderRadius: 'var(--radius-md)',
              border: '1px solid var(--border-medium)',
              padding: '1.25rem',
              textAlign: 'left',
              marginBottom: '1.5rem',
              fontSize: '0.82rem'
            }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', borderBottom: '1px solid var(--border-subtle)', paddingBottom: '0.5rem', marginBottom: '0.5rem' }}>
                <span style={{ fontWeight: 700, color: 'var(--color-forest)' }}>Receipt No:</span>
                <span style={{ fontFamily: 'monospace' }}>NGSF-KOL-{Math.floor(100000 + Math.random() * 900000)}</span>
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.35rem' }}>
                <span style={{ color: 'var(--text-muted)' }}>Donor Name:</span>
                <span style={{ fontWeight: 600 }}>{donorName || 'Generous Supporter'}</span>
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.35rem' }}>
                <span style={{ color: 'var(--text-muted)' }}>Cause / Purpose:</span>
                <span style={{ fontWeight: 600 }}>Kolkata Street Relief & Youth Care</span>
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.35rem' }}>
                <span style={{ color: 'var(--text-muted)' }}>Amount Contributed:</span>
                <span style={{ fontWeight: 800, color: 'var(--color-forest)' }}>{formatMoney(currentAmount)}</span>
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                <span style={{ color: 'var(--text-muted)' }}>Issued By:</span>
                <span style={{ fontWeight: 600 }}>Next Gen Seva Foundation (Reg. 2021)</span>
              </div>
            </div>

            <div style={{ display: 'flex', gap: '0.75rem', justifyContent: 'center' }}>
              <button
                onClick={() => {
                  window.print();
                }}
                className="btn btn-outline"
                style={{ padding: '0.75rem 1.4rem', fontSize: '0.88rem' }}
              >
                <Download size={16} />
                <span>Print / Save Receipt</span>
              </button>

              <button
                onClick={resetModal}
                className="btn btn-forest"
                style={{ padding: '0.75rem 1.4rem', fontSize: '0.88rem' }}
              >
                Close & Return
              </button>
            </div>

          </div>
        )}

      </div>

      <style>{`
        @media (max-width: 600px) {
          .donor-quick-details {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </div>
  );
}
