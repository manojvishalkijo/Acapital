import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft, Home, TrendingUp, Shield, Clock, Zap, CheckCircle, Send, X } from 'lucide-react';
import LoanApplicationForm from '../components/LoanApplicationForm';
import LoanInfoSection from '../components/LoanInfoSection';

const highlights = [
  { icon: TrendingUp, label: 'From 8.5% p.a.', sub: 'Industry-lowest rates' },
  { icon: Clock, label: 'Up to 30 Years', sub: 'Flexible repayment tenure' },
  { icon: Shield, label: 'Tax Benefits', sub: 'Deduction under 80C & 24' },
  { icon: Zap, label: 'Quick Sanction', sub: 'Approval within 48 hours' },
];

const perks = [
  'Up to ₹5 Crores loan',
  'Starting at 8.5% p.a.',
  'Doorstep documentation',
  'Balance transfer facility',
  'Top-up loan available',
  'No hidden charges',
];

// Hero image – Indian home / luxury residential
const HERO_IMG = 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=900&auto=format&fit=crop&q=80';
// Fallback if primary fails
const HERO_IMG_URL = 'https://images.unsplash.com/photo-1570129477492-45c003edd2be?w=900&auto=format&fit=crop&q=80';


export default function HomeLoanPage() {
  const navigate = useNavigate();

  return (
    <div className="loan-page">
      <nav className="loan-page-nav">
        <button className="back-btn" onClick={() => navigate('/')}><ArrowLeft size={18} /> Back to Home</button>
        <span className="loan-page-brand"><img src="/logo_transparent.png" alt="ACapital Logo" className="logo-img" /></span>
      </nav>

      <section className="lp-split-hero home-hero">
        <div className="lp-split-overlay" />
        <div className="lp-split-img">
          <img
            src={HERO_IMG}
            alt="Home Loan India"
            onError={e => { e.target.src = HERO_IMG_URL; }}
          />
          <div className="lp-img-badge">
            <div className="lib-val">₹5Cr</div>
            <div className="lib-label">Max Amount</div>
          </div>
        </div>
        <div className="lp-split-content">
          <div className="lp-badge"><Home size={14} /> Home Loan</div>
          <h1>Your Dream Home,<br /><span className="lp-accent">Made Affordable</span></h1>
          <p>Finance your perfect home with India's most competitive home loan rates starting at 8.5% p.a. Get up to ₹5 Crores with flexible tenure and tax benefits.</p>

          <div className="lp-perks-grid">
            {perks.map(p => <div className="lp-perk" key={p}><CheckCircle size={15} className="lp-check" />{p}</div>)}
          </div>

          <div className="lp-split-stats">
            <div className="lss-item"><strong>8.5%</strong><span>Starting Rate p.a.</span></div>
            <div className="lss-divider" />
            <div className="lss-item"><strong>30 Years</strong><span>Max Tenure</span></div>
            <div className="lss-divider" />
            <div className="lss-item"><strong>₹1.5L</strong><span>Tax Benefit 80C</span></div>
          </div>
        </div>
      </section>

      <section className="lp-highlights">
        {highlights.map(({ icon: Icon, label, sub }) => (
          <div className="lp-hl-card" key={label}>
            <div className="lp-hl-icon"><Icon size={22} /></div>
            <div><strong>{label}</strong><span>{sub}</span></div>
          </div>
        ))}
      </section>

      <section className="lp-apply-section" id="quick-apply">
        <div className="container lp-apply-wrap">
          <div className="lp-apply-left">
            <h2>Turn the Key to<br /><span className="lp-accent-dark">Your New Home</span></h2>
            <p>Thousands of Indian families have built their dream home with ACapital. Start your journey today with a simple 3-minute application.</p>
            <div className="lp-trust-row">
              <div className="lp-trust-item"><span>🏠</span>10,000+ Homes Financed</div>
              <div className="lp-trust-item"><span>🔒</span>Bank-grade security</div>
              <div className="lp-trust-item"><span>✅</span>48-hr approval</div>
            </div>
          </div>
          <div className="lp-apply-right">
            <div className="lp-inline-apply">
              <div className="lp-apply-header"><h3>Quick Apply</h3><p>Fill in your details for an instant decision</p></div>
              <LoanApplicationForm loanType="home" loanTitle="Home Loan" />
            </div>
          </div>
        </div>
      </section>

      {/* LOAN INFO */}
      <LoanInfoSection loanType="home" />
    </div>
  );
}
