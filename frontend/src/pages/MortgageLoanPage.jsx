import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft, Building2, TrendingUp, Shield, Clock, Zap, CheckCircle, Send, X } from 'lucide-react';
import LoanApplicationForm from '../components/LoanApplicationForm';
import LoanInfoSection from '../components/LoanInfoSection';

const highlights = [
  { icon: TrendingUp, label: 'High LTV Ratio', sub: 'Up to 75% of property value' },
  { icon: Clock, label: 'Up to 15 Years', sub: 'Extended repayment period' },
  { icon: Shield, label: 'Multi-Purpose', sub: 'Use funds for any purpose' },
  { icon: Zap, label: 'High Limit', sub: 'Loans up to ₹10 Crores' },
];

const perks = [
  'Loans up to ₹10 Crores',
  'Starting at 9.5% p.a.',
  'Retain property possession',
  'Overdraft facility available',
  'Residential & commercial OK',
  'Minimal prepayment charges',
];

// Indian commercial/property image
const HERO_IMG = 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=800&auto=format&fit=crop';

export default function MortgageLoanPage() {
  const navigate = useNavigate();

  return (
    <div className="loan-page">
      <nav className="loan-page-nav">
        <button className="back-btn" onClick={() => navigate('/')}><ArrowLeft size={18} /> Back to Home</button>
        <span className="loan-page-brand"><img src="/logo_transparent.png" alt="ACapital Logo" className="logo-img" /></span>
      </nav>

      <section className="lp-split-hero mortgage-hero">
        <div className="lp-split-overlay" />
        <div className="lp-split-img">
          <img src={HERO_IMG} alt="Mortgage Loan India" />
          <div className="lp-img-badge">
            <div className="lib-val">₹10Cr</div>
            <div className="lib-label">Max Amount</div>
          </div>
        </div>
        <div className="lp-split-content">
          <div className="lp-badge"><Building2 size={14} /> Mortgage Loan</div>
          <h1>Unlock Your Property's<br /><span className="lp-accent">True Value</span></h1>
          <p>Leverage your property to access high-value funds. Competitive rates with flexible tenure — keep your property, gain the liquidity you need.</p>

          <div className="lp-perks-grid">
            {perks.map(p => <div className="lp-perk" key={p}><CheckCircle size={15} className="lp-check" />{p}</div>)}
          </div>

          <div className="lp-split-stats">
            <div className="lss-item"><strong>9.5%</strong><span>Starting Rate p.a.</span></div>
            <div className="lss-divider" />
            <div className="lss-item"><strong>75%</strong><span>Max LTV Ratio</span></div>
            <div className="lss-divider" />
            <div className="lss-item"><strong>15 Yrs</strong><span>Max Tenure</span></div>
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
            <h2>Your Property is<br /><span className="lp-accent-dark">Your Strength</span></h2>
            <p>Use the power of your property to fund business growth, education, or any goal. Safe, transparent, and completely in your control.</p>
            <div className="lp-trust-row">
              <div className="lp-trust-item"><span>🏢</span>₹5000 Cr+ Disbursed</div>
              <div className="lp-trust-item"><span>🔒</span>Bank-grade security</div>
              <div className="lp-trust-item"><span>⚡</span>72-hr sanction</div>
            </div>
          </div>
          <div className="lp-apply-right">
            <div className="lp-inline-apply">
              <div className="lp-apply-header"><h3>Quick Apply</h3><p>Fill in your details for an instant decision</p></div>
              <LoanApplicationForm loanType="mortgage" loanTitle="Mortgage Loan" />
            </div>
          </div>
        </div>
      </section>

      {/* LOAN INFO */}
      <LoanInfoSection loanType="mortgage" />
    </div>
  );
}
