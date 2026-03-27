import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft, Briefcase, TrendingUp, Zap, Shield, Clock, CheckCircle, Send, X } from 'lucide-react';
import LoanApplicationForm from '../components/LoanApplicationForm';
import LoanInfoSection from '../components/LoanInfoSection';

const highlights = [
  { icon: TrendingUp, label: 'MSME Focused', sub: 'Tailored for small businesses' },
  { icon: Zap, label: 'Quick Sanction', sub: 'Approval within 72 hours' },
  { icon: Shield, label: 'Collateral-Free', sub: 'Up to ₹50 Lakhs unsecured' },
  { icon: Clock, label: 'Up to 5 Years', sub: 'Flexible repayment tenure' },
];

const perks = [
  'Loans up to ₹5 Crores',
  'Starting at 11% p.a.',
  'Unsecured up to ₹50L',
  'MSME & startup friendly',
  'Working capital options',
  'Govt. subsidy-linked schemes',
];

// Indian business / entrepreneur image
const HERO_IMG = 'https://images.unsplash.com/photo-1521737852567-6949f3f9f2b5?w=800&auto=format&fit=crop';

export default function BusinessLoanPage() {
  const navigate = useNavigate();

  return (
    <div className="loan-page">
      <nav className="loan-page-nav">
        <button className="back-btn" onClick={() => navigate('/')}><ArrowLeft size={18} /> Back to Home</button>
        <span className="loan-page-brand">ACapital</span>
      </nav>

      <section className="lp-split-hero business-hero">
        <div className="lp-split-overlay" />
        <div className="lp-split-img">
          <img src={HERO_IMG} alt="Business Loan India" />
          <div className="lp-img-badge">
            <div className="lib-val">₹5Cr</div>
            <div className="lib-label">Max Amount</div>
          </div>
        </div>
        <div className="lp-split-content">
          <div className="lp-badge"><Briefcase size={14} /> Business Loan</div>
          <h1>Fuel Your Business<br /><span className="lp-accent">Growth Now</span></h1>
          <p>Access business financing up to ₹5 Crores with flexible terms designed for MSMEs, startups, and established businesses. Quick approvals, minimal documentation.</p>

          <div className="lp-perks-grid">
            {perks.map(p => <div className="lp-perk" key={p}><CheckCircle size={15} className="lp-check" />{p}</div>)}
          </div>

          <div className="lp-split-stats">
            <div className="lss-item"><strong>11%</strong><span>Starting Rate p.a.</span></div>
            <div className="lss-divider" />
            <div className="lss-item"><strong>₹50L</strong><span>Unsecured Amount</span></div>
            <div className="lss-divider" />
            <div className="lss-item"><strong>72 Hrs</strong><span>Sanction Time</span></div>
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
            <h2>Scale Your Business<br /><span className="lp-accent-dark">With Confidence</span></h2>
            <p>India's entrepreneurs trust ACapital to fuel their ambitions. Whether you're a startup or an established MSME, we have the right loan for you.</p>
            <div className="lp-trust-row">
              <div className="lp-trust-item"><span>🏭</span>15,000+ Businesses Funded</div>
              <div className="lp-trust-item"><span>🔒</span>Secure & transparent</div>
              <div className="lp-trust-item"><span>⚡</span>72-hr sanction</div>
            </div>
          </div>
          <div className="lp-apply-right">
            <div className="lp-inline-apply">
              <div className="lp-apply-header"><h3>Quick Apply</h3><p>Fill in your details for an instant decision</p></div>
              <LoanApplicationForm loanType="business" loanTitle="Business Loan" />
            </div>
          </div>
        </div>
      </section>

      {/* LOAN INFO */}
      <LoanInfoSection loanType="business" />
    </div>
  );
}
