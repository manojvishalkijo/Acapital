import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft, Car, Zap, Shield, Clock, TrendingUp, CheckCircle, Send, X } from 'lucide-react';
import LoanApplicationForm from '../components/LoanApplicationForm';
import LoanInfoSection from '../components/LoanInfoSection';

const highlights = [
  { icon: Zap, label: '100% Funding', sub: 'On-road price financing' },
  { icon: Clock, label: 'Same Day', sub: 'Approval for new vehicles' },
  { icon: Shield, label: 'New & Used', sub: 'Finance any vehicle' },
  { icon: TrendingUp, label: 'Low EMI', sub: 'Starting ₹1,850/lakh p.m.' },
];

const perks = [
  '100% on-road funding',
  'Starting at 8.75% p.a.',
  'New & used vehicles',
  'Tenure up to 7 years',
  'Zero processing fee offers',
  'Quick same-day approval',
];

// Toyota car image
const HERO_IMG = 'https://images.unsplash.com/photo-1621007947382-bb3c3994e3fb?w=900&auto=format&fit=crop&q=80';

export default function VehicleLoanPage() {
  const navigate = useNavigate();

  return (
    <div className="loan-page">
      <nav className="loan-page-nav">
        <button className="back-btn" onClick={() => navigate('/')}><ArrowLeft size={18} /> Back to Home</button>
        <span className="loan-page-brand">ACapital</span>
      </nav>

      <section className="lp-split-hero vehicle-hero">
        <div className="lp-split-overlay" />
        <div className="lp-split-img">
          <img src={HERO_IMG} alt="Vehicle Loan India" />
          <div className="lp-img-badge">
            <div className="lib-val">7 Yrs</div>
            <div className="lib-label">Max Tenure</div>
          </div>
        </div>
        <div className="lp-split-content">
          <div className="lp-badge"><Car size={14} /> Vehicle Loan</div>
          <h1>Drive Your Dream,<br /><span className="lp-accent">Today Not Tomorrow</span></h1>
          <p>Get up to 100% on-road financing for new and used vehicles. Quick approvals, minimal documentation, and EMIs starting as low as ₹1,850 per lakh per month.</p>

          <div className="lp-perks-grid">
            {perks.map(p => <div className="lp-perk" key={p}><CheckCircle size={15} className="lp-check" />{p}</div>)}
          </div>

          <div className="lp-split-stats">
            <div className="lss-item"><strong>8.75%</strong><span>Starting Rate p.a.</span></div>
            <div className="lss-divider" />
            <div className="lss-item"><strong>100%</strong><span>On-Road Funding</span></div>
            <div className="lss-divider" />
            <div className="lss-item"><strong>1 Day</strong><span>Approval</span></div>
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
            <h2>Your Perfect Ride<br /><span className="lp-accent-dark">Awaits You</span></h2>
            <p>Don't let finances hold you back from your dream vehicle. Our lightning-fast vehicle loans get you on the road faster than you think.</p>
            <div className="lp-trust-row">
              <div className="lp-trust-item"><span>🚗</span>25,000+ Vehicles Financed</div>
              <div className="lp-trust-item"><span>🔒</span>Secure process</div>
              <div className="lp-trust-item"><span>⚡</span>Same-day approval</div>
            </div>
          </div>
          <div className="lp-apply-right">
            <div className="lp-inline-apply">
              <div className="lp-apply-header"><h3>Quick Apply</h3><p>Fill in your details for an instant decision</p></div>
              <LoanApplicationForm loanType="vehicle" loanTitle="Vehicle Loan" />
            </div>
          </div>
        </div>
      </section>

      {/* LOAN INFO */}
      <LoanInfoSection loanType="vehicle" />
    </div>
  );
}
