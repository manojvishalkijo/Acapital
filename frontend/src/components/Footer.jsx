import { Sparkles, Globe, MessageCircle, Send, Mail, Phone, MapPin } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const handleScroll = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="footer" id="contact">
      <div className="footer-top">
        <div className="container">
          <div className="footer-grid">
            <div className="footer-brand">
              <a href="#" onClick={() => handleScroll('hero')} className="footer-logo">
                <img src="/logo_transparent.png" alt="ACapital Logo" className="logo-img" />
              </a>
              <p className="footer-description">
                Empowering your financial dreams with transparent, quick, and accessible lending solutions.
                We bridge the gap between your aspirations and your future.
              </p>
              <div className="footer-socials-v2">
                <a href="https://wa.me/919942888304" target="_blank" rel="noopener noreferrer" className="social-icon whatsapp" aria-label="WhatsApp">
                  <MessageCircle size={20} />
                </a>
                <a href="https://www.instagram.com/alwinambrosee?igsh=Mm9samE5MDdpcTAz" target="_blank" rel="noopener noreferrer" className="social-icon instagram" aria-label="Instagram">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"></line></svg>
                </a>
                <a href="https://www.facebook.com/10Autoparts" target="_blank" rel="noopener noreferrer" className="social-icon facebook" aria-label="Facebook">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>
                </a>
                <a href="#" className="social-icon website" aria-label="Website">
                  <Globe size={20} />
                </a>
              </div>
            </div>

            <div className="footer-links-col">
              <h4>Loan Solutions</h4>
              <ul>
                <li><a href="#" onClick={() => handleScroll('loans')}>Personal Loans</a></li>
                <li><a href="#" onClick={() => handleScroll('loans')}>Home Loans</a></li>
                <li><a href="#" onClick={() => handleScroll('loans')}>Business Loans</a></li>
                <li><a href="#" onClick={() => handleScroll('loans')}>Vehicle Loans</a></li>
                <li><a href="#" onClick={() => handleScroll('loans')}>Education Loans</a></li>
              </ul>
            </div>

            <div className="footer-links-col">
              <h4>Quick Navigation</h4>
              <ul>
                <li><a href="#" onClick={() => handleScroll('hero')}>Home</a></li>
                <li><a href="#" onClick={() => handleScroll('why')}>Why Choose Us</a></li>
                <li><a href="#" onClick={() => handleScroll('how')}>How It Works</a></li>
                <li><a href="#" onClick={() => handleScroll('calculator')}>EMI Calculator</a></li>
                <li><a href="#" onClick={() => handleScroll('testimonials')}>Testimonials</a></li>
              </ul>
            </div>

            <div className="footer-links-col">
              <h4>Contact & Support</h4>
              <ul className="footer-contact-info">
                <li>
                  <Mail size={16} className="color-lime" />
                  <span>support@acapital.com</span>
                </li>
                <li>
                  <Phone size={16} className="color-lime" />
                  <span>+91 99428 88304</span>
                </li>
                <li>
                  <MapPin size={16} className="color-lime" />
                  <span>Chennai, Tamil Nadu, India</span>
                </li>
              </ul>
              <div className="footer-newsletter">
                <p>Stay updated with our latest offers</p>
                <div className="newsletter-form">
                  <input type="email" placeholder="Email Address" />
                  <button aria-label="Subscribe"><Send size={18} /></button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="footer-bottom-v2">
        <div className="container">
          <div className="footer-bottom-flex">
            <p>© {currentYear} ACapital. All rights reserved by ACapital Private Limited.</p>
            <div className="footer-legal">
              <a href="#">Privacy Policy</a>
              <span className="dot">•</span>
              <a href="#">Terms of Service</a>
              <span className="dot">•</span>
              <a href="#">Disclaimer</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
