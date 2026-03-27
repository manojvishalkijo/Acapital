import { TrendingUp, ShieldCheck, Star, ArrowRight, Plane, Utensils, ShoppingBag } from 'lucide-react';

export default function Hero({ onApplyClick }) {
  return (
    <section className="hero" id="hero">
      {/* LEFT DARK PANEL */}
      <div className="hero-left">
        <div className="hero-tagline">
          <Star size={14} />
          India's Trusted Loan Partner
        </div>

        <h1 className="hero-title">
          Secure. Fast.<br />
          <span className="highlight">Affordable.</span>
        </h1>

        <p className="hero-description">
          Get the best loan deals tailored to your needs. From home loans to
          business funding — we connect you with top lenders for quick approvals
          and competitive rates.
        </p>

        <div className="hero-features">
          <div className="hero-feature">
            <div className="hero-feature-icon">
              <TrendingUp size={20} />
            </div>
            <div>
              <h4>Lowest Interest</h4>
              <p>Starting from 8.5% p.a. with flexible tenure options</p>
            </div>
          </div>
          <div className="hero-feature">
            <div className="hero-feature-icon">
              <ShieldCheck size={20} />
            </div>
            <div>
              <h4>Risk Free</h4>
              <p>100% secure process with trusted banking partners</p>
            </div>
          </div>
        </div>

        <div className="hero-cta">
          <button className="btn btn-lime btn-lg" onClick={() => document.getElementById('loans')?.scrollIntoView({ behavior: 'smooth' })}>
            Apply for Loan
            <ArrowRight size={18} />
          </button>
          <button className="btn btn-outline-white" onClick={() => document.getElementById('loans')?.scrollIntoView({ behavior: 'smooth' })}>
            Explore Plans
          </button>
        </div>

        <div className="hero-social-proof">
          <div className="avatar-stack">
            <span>RK</span>
            <span>PS</span>
            <span>AM</span>
            <span>2K+</span>
          </div>
          <div className="social-proof-text">
            <strong>Friendly</strong> customer support<br />team
          </div>
          <div className="trust-badge">
            <div className="trust-stars">
              {[...Array(5)].map((_, i) => (
                <Star key={i} size={14} fill="currentColor" />
              ))}
            </div>
            <div className="trust-text">
              <strong>4.8 out of 5</strong> from 6.2k reviews
            </div>
          </div>
        </div>
      </div>

      {/* RIGHT LIME PANEL */}
      <div className="hero-right">
        <div className="floating-cards">
          {/* Insight Card */}
          <div className="float-card insight-card">
            <div className="insight-header">
              <h4>Insight</h4>
              <TrendingUp size={16} style={{ color: 'var(--lime-500)' }} />
            </div>
            <p className="insight-amount">Disbursed ₹8,930 Cr Since Jan 2024</p>
            <div className="mini-chart">
              {[35, 50, 40, 65, 55, 80, 90].map((h, i) => (
                <div key={i} className={`bar${i === 6 ? ' active' : ''}`} style={{ height: `${h}%` }} />
              ))}
            </div>
            <div className="chart-labels">
              {['Nov', 'Dec', 'Jan', 'Feb', 'Mar', 'Apr', 'May'].map((m, i) => (
                <span key={m} className={i === 6 ? 'active' : ''}>{m}</span>
              ))}
            </div>
          </div>

          {/* Score Card */}
          <div className="float-card score-card">
            <div className="score-ring">
              <div className="score-ring-inner">800</div>
            </div>
            <p className="score-label">Good Score</p>
          </div>

          {/* Credit Card Visual */}
          <div className="float-card credit-card-vis">
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
              <div className="card-chip" />
              <span className="card-label">CREDIT CARD</span>
            </div>
            <div>
              <div className="card-number">•••• •••• •••• 4829</div>
            </div>
          </div>

          {/* Profile Card */}
          <div className="float-card profile-card">
            <div className="profile-info">
              <div className="profile-avatar">HS</div>
              <div className="profile-details">
                <small>Profile name</small>
                <h4>Hailey Sanders</h4>
              </div>
            </div>
            <div className="profile-qr"></div>
          </div>

          {/* Loan Status Card */}
          <div className="float-card loan-status-card">
            <div className="status-header">
              <h4>Recent Approvals</h4>
            </div>
            <div className="status-list">
              <div className="status-item">
                <div className="status-badge approved">Approved</div>
                <div className="status-info">
                  <span className="status-type">Home Loan</span>
                  <span className="status-amount">₹45,00,000</span>
                </div>
              </div>
              <div className="status-item">
                <div className="status-badge processing">Processing</div>
                <div className="status-info">
                  <span className="status-type">Business Loan</span>
                  <span className="status-amount">₹12,50,000</span>
                </div>
              </div>
              <div className="status-item">
                <div className="status-badge approved">Approved</div>
                <div className="status-info">
                  <span className="status-type">Personal Loan</span>
                  <span className="status-amount">₹3,50,000</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
