import { useState, useEffect } from 'react';
import { Sparkles, Menu, X } from 'lucide-react';

export default function Navbar({ onApplyClick }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollTo = (id) => {
    setMobileOpen(false);
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <nav className={`navbar${scrolled ? ' scrolled' : ''}`}>
      <div className="navbar-inner">
        <a href="#" className="navbar-logo">
          <div className="logo-icon">
            <Sparkles size={20} />
          </div>
          ACapital
        </a>

        <div className={`navbar-links ${mobileOpen ? 'mobile-open' : ''}`}>
          <a href="#" onClick={() => scrollTo('hero')}>Home</a>
          <a href="#" onClick={() => scrollTo('loans')}>Loans</a>
          <a href="#" onClick={() => scrollTo('why')}>About</a>
          <a href="#" onClick={() => scrollTo('how')}>How It Works</a>
          <a href="#" onClick={() => scrollTo('contact')}>Contact</a>
        </div>

        <div className="navbar-actions">
          <button className="btn btn-outline-white" onClick={() => scrollTo('calculator')}>
            EMI Calculator
          </button>
          <button className="mobile-toggle" onClick={() => setMobileOpen(!mobileOpen)}>
            {mobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>
    </nav>
  );
}
