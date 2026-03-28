import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft, User, Zap, Shield, Clock, TrendingUp, CheckCircle, Send, X } from 'lucide-react';
import LoanApplicationForm from '../components/LoanApplicationForm';
import LoanInfoSection from '../components/LoanInfoSection';

const highlights = [
  { icon: Zap, label: 'Instant Approval', sub: 'Decision in under 60 seconds' },
  { icon: Shield, label: 'No Collateral', sub: '100% unsecured loan' },
  { icon: Clock, label: '24-hr Disbursal', sub: 'Money in your account fast' },
  { icon: TrendingUp, label: 'Flexible EMI', sub: 'Tenure up to 60 months' },
];

const perks = [
  'Loan up to ₹40 Lakhs',
  'Starting at 10.5% p.a.',
  'Zero prepayment charges',
  'Minimal documentation',
  'Balance transfer available',
  'Special rates for professionals',
];

// Indian personal image via Unsplash
const HERO_IMG = 'https://images.unsplash.com/photo-1604328698692-f76ea9498e76?w=800&auto=format&fit=crop';

export default function PersonalLoanPage() {
  const navigate = useNavigate();

  return (
    <div className="loan-page">
      {/* NAV */}
      <nav className="loan-page-nav">
        <button className="back-btn" onClick={() => navigate('/')}><ArrowLeft size={18} /> Back to Home</button>
        <span className="loan-page-brand"><img src="/logo_transparent.png" alt="ACapital Logo" className="logo-img" /></span>
      </nav>

      {/* SPLIT HERO */}
      <section className="lp-split-hero personal-hero">
        <div className="lp-split-overlay" />
        {/* LEFT: Image */}
        <div className="lp-split-img">
          <img src={HERO_IMG} alt="Personal Loan India" />
          <div className="lp-img-badge">
            <div className="lib-val">₹40L</div>
            <div className="lib-label">Max Amount</div>
          </div>
        </div>
        {/* RIGHT: Content */}
        <div className="lp-split-content">
          <div className="lp-badge"><User size={14} /> Personal Loan</div>
          <h1>Fulfill Every Dream,<br /><span className="lp-accent">Without Waiting</span></h1>
          <p>Get instant personal loans with zero collateral. Quick approvals, flexible repayment, and competitive interest rates tailored for you.</p>

          <div className="lp-perks-grid">
            {perks.map(p => <div className="lp-perk" key={p}><CheckCircle size={15} className="lp-check" />{p}</div>)}
          </div>

          <div className="lp-split-stats">
            <div className="lss-item"><strong>10.5%</strong><span>Starting Rate p.a.</span></div>
            <div className="lss-divider" />
            <div className="lss-item"><strong>60 Months</strong><span>Max Tenure</span></div>
            <div className="lss-divider" />
            <div className="lss-item"><strong>24 Hrs</strong><span>Disbursal</span></div>
          </div>
        </div>
      </section>

      {/* HIGHLIGHTS */}
      <section className="lp-highlights">
        {highlights.map(({ icon: Icon, label, sub }) => (
          <div className="lp-hl-card" key={label}>
            <div className="lp-hl-icon"><Icon size={22} /></div>
            <div><strong>{label}</strong><span>{sub}</span></div>
          </div>
        ))}
      </section>

      {/* INLINE APPLY SECTION */}
      <section className="lp-apply-section" id="quick-apply">
        <div className="container lp-apply-wrap">
          <div className="lp-apply-left">
            <h2>Ready to <span className="lp-accent-dark">Get Started?</span></h2>
            <p>Join thousands of Indians who trusted ACapital for their personal financing needs. Your application takes less than 3 minutes.</p>
            <div className="lp-trust-row">
              <div className="lp-trust-item"><span>🏆</span>Trusted by 50,000+ Indians</div>
              <div className="lp-trust-item"><span>🔒</span>Bank-grade security</div>
              <div className="lp-trust-item"><span>⚡</span>Instant decision</div>
            </div>
          </div>
          <div className="lp-apply-right">
            <div className="lp-inline-apply">
              <div className="lp-apply-header"><h3>Quick Apply</h3><p>Fill in your details for an instant decision</p></div>
              <LoanApplicationForm loanType="personal" loanTitle="Personal Loan" />
            </div>
          </div>
        </div>
      </section>

      {/* LOAN INFO */}
      <LoanInfoSection loanType="personal" />
    </div>
  );
}
