import { Sparkles, Globe, MessageCircle, Send, ExternalLink } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="footer" id="contact">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-brand">
            <a href="#" className="navbar-logo">
              <div className="logo-icon">
                <Sparkles size={20} />
              </div>
              ACapital
            </a>
            <p>
              Your trusted financial partner for all types of loans.
              We connect you with the best lenders to make your dreams come true.
              Quick approvals, competitive rates, and expert guidance.
            </p>
          </div>

          <div className="footer-col">
            <h4>Loans</h4>
            <a href="#">Home Loan</a>
            <a href="#">Personal Loan</a>
            <a href="#">Business Loan</a>
            <a href="#">Car Loan</a>
            <a href="#">Education Loan</a>
            <a href="#">Gold Loan</a>
          </div>

          <div className="footer-col">
            <h4>Company</h4>
            <a href="#">About Us</a>
            <a href="#">How It Works</a>
            <a href="#">Careers</a>
            <a href="#">Blog</a>
            <a href="#">Press</a>
          </div>

          <div className="footer-col">
            <h4>Support</h4>
            <a href="#">Contact Us</a>
            <a href="#">FAQs</a>
            <a href="#">Terms & Conditions</a>
            <a href="#">Privacy Policy</a>
            <a href="#">Grievance</a>
          </div>
        </div>

        <div className="footer-bottom">
          <p>© 2026 ACapital. All rights reserved.</p>
          <div className="footer-socials">
            <a href="#" aria-label="Website"><Globe size={16} /></a>
            <a href="#" aria-label="Chat"><MessageCircle size={16} /></a>
            <a href="#" aria-label="Reach us"><Send size={16} /></a>
            <a href="#" aria-label="External"><ExternalLink size={16} /></a>
          </div>
        </div>
      </div>
    </footer>
  );
}
