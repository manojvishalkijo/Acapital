import { useState } from 'react';
import { X, Lock, CheckCircle, Loader2, Send } from 'lucide-react';

export default function ApplicationModal({ isOpen, onClose, loanType, loanTitle }) {
  const [formData, setFormData] = useState({
    fullName: '',
    phone: '',
    email: '',
    loanAmount: '',
    monthlyIncome: '',
    employmentType: '',
    city: '',
    purpose: '',
    agreed: false,
  });
  const [errors, setErrors] = useState({});
  const [submitting, setSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);
  const [closing, setClosing] = useState(false);
  const [whatsappLink, setWhatsappLink] = useState('');

  if (!isOpen) return null;

  const handleClose = () => {
    setClosing(true);
    setTimeout(() => {
      setClosing(false);
      setSuccess(false);
      setWhatsappLink('');
      setFormData({
        fullName: '', phone: '', email: '', loanAmount: '',
        monthlyIncome: '', employmentType: '', city: '', purpose: '', agreed: false,
      });
      setErrors({});
      onClose();
    }, 350);
  };

  const validate = () => {
    const newErrors = {};
    if (!formData.fullName.trim()) newErrors.fullName = 'Name is required';
    if (!formData.phone.match(/^[6-9]\d{9}$/)) newErrors.phone = 'Enter valid 10-digit number';
    if (!formData.email.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)) newErrors.email = 'Enter valid email';
    if (!formData.loanAmount || Number(formData.loanAmount) < 10000) newErrors.loanAmount = 'Minimum ₹10,000';
    if (!formData.employmentType) newErrors.employmentType = 'Select employment type';
    if (!formData.agreed) newErrors.agreed = 'Please accept terms';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (field, value) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
    if (errors[field]) {
      setErrors((prev) => {
        const next = { ...prev };
        delete next[field];
        return next;
      });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validate()) return;
    setSubmitting(true);

    const amount = Number(formData.loanAmount);
    const timestamp = new Date().toLocaleString('en-IN');
    const recipientNumber = '919942888304';
    
    const messageText = `LOAN APPLICATION [NEW]\n` +
      `--------------------------\n` +
      `Name: ${formData.fullName}\n` +
      `Phone: ${formData.phone}\n` +
      `Email: ${formData.email}\n` +
      `City: ${formData.city}\n` +
      `Loan: ${loanTitle || 'General'}\n` +
      `Amount: ₹${amount.toLocaleString('en-IN')}\n` +
      `Income: ₹${Number(formData.monthlyIncome || 0).toLocaleString('en-IN')}\n` +
      `Employment: ${formData.employmentType}\n` +
      `Purpose: ${formData.purpose || 'None'}\n\n` +
      `Time: ${timestamp}`;

    const waLink = `https://wa.me/${recipientNumber}?text=${encodeURIComponent(messageText)}`;
    
    setTimeout(() => {
      window.location.href = waLink;
      setSuccess(true);
      setWhatsappLink(waLink);
      setSubmitting(false);
    }, 800);
  };

  return (
    <div className={`modal-overlay ${closing ? 'closing' : ''}`} onClick={handleClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        {success ? (
          <div className="form-success">
            <div className="success-icon">
              <CheckCircle size={36} />
            </div>
            <h3>Application Ready!</h3>
            <p>
              Your details for <strong>{loanTitle || 'Loan'}</strong> have been prepared.
            </p>
            <p style={{ fontSize: '0.9rem', color: 'var(--gray-600)', marginBottom: '1.5rem' }}>
              We are redirecting you to WhatsApp to complete your application. If the chat doesn't open automatically, please click the button below:
            </p>
            <a 
              className="btn btn-lime btn-lg"
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              style={{ padding: '0.8rem 1.5rem', width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.5rem' }}
            >
               Open WhatsApp Chat
            </a>
            <button
              className="btn btn-gray-outline btn-sm"
              style={{ marginTop: '1rem', border: 'none', background: 'transparent', opacity: 0.6 }}
              onClick={handleClose}
            >
              Close
            </button>
          </div>
        ) : (
          <>
            <div className="modal-header">
              <h2>Apply for {loanTitle || 'Loan'}</h2>
              <button className="modal-close" onClick={handleClose}>
                <X size={20} />
              </button>
            </div>

            <div className="modal-body">
              <form onSubmit={handleSubmit}>
                <div className="form-group">
                  <label>Full Name <span className="required">*</span></label>
                  <input
                    type="text"
                    className={`form-input ${errors.fullName ? 'error' : formData.fullName ? 'valid' : ''}`}
                    placeholder="Enter your full name"
                    value={formData.fullName}
                    onChange={(e) => handleChange('fullName', e.target.value)}
                    id="input-fullName"
                  />
                  <p className={`form-error ${errors.fullName ? 'show' : ''}`}>{errors.fullName}</p>
                </div>

                <div className="form-row">
                  <div className="form-group">
                    <label>Phone Number <span className="required">*</span></label>
                    <input
                      type="tel"
                      className={`form-input ${errors.phone ? 'error' : formData.phone ? 'valid' : ''}`}
                      placeholder="+91 98765 43210"
                      value={formData.phone}
                      onChange={(e) => handleChange('phone', e.target.value.replace(/\D/g, '').slice(0, 10))}
                      id="input-phone"
                    />
                    <p className={`form-error ${errors.phone ? 'show' : ''}`}>{errors.phone}</p>
                  </div>
                  <div className="form-group">
                    <label>Email <span className="required">*</span></label>
                    <input
                      type="email"
                      className={`form-input ${errors.email ? 'error' : formData.email ? 'valid' : ''}`}
                      placeholder="you@email.com"
                      value={formData.email}
                      onChange={(e) => handleChange('email', e.target.value)}
                      id="input-email"
                    />
                    <p className={`form-error ${errors.email ? 'show' : ''}`}>{errors.email}</p>
                  </div>
                </div>

                <div className="form-row">
                  <div className="form-group">
                    <label>Loan Amount (₹) <span className="required">*</span></label>
                    <input
                      type="number"
                      className={`form-input ${errors.loanAmount ? 'error' : formData.loanAmount ? 'valid' : ''}`}
                      placeholder="e.g. 500000"
                      value={formData.loanAmount}
                      onChange={(e) => handleChange('loanAmount', e.target.value)}
                      id="input-loanAmount"
                    />
                    <p className={`form-error ${errors.loanAmount ? 'show' : ''}`}>{errors.loanAmount}</p>
                  </div>
                  <div className="form-group">
                    <label>Monthly Income (₹)</label>
                    <input
                      type="number"
                      className="form-input"
                      placeholder="e.g. 75000"
                      value={formData.monthlyIncome}
                      onChange={(e) => handleChange('monthlyIncome', e.target.value)}
                      id="input-monthlyIncome"
                    />
                  </div>
                </div>

                <div className="form-row">
                  <div className="form-group">
                    <label>Employment Type <span className="required">*</span></label>
                    <select
                      className={`form-input ${errors.employmentType ? 'error' : formData.employmentType ? 'valid' : ''}`}
                      value={formData.employmentType}
                      onChange={(e) => handleChange('employmentType', e.target.value)}
                      id="input-employmentType"
                    >
                      <option value="">Select type</option>
                      <option value="salaried">Salaried</option>
                      <option value="self-employed">Self Employed</option>
                      <option value="business">Business Owner</option>
                      <option value="professional">Professional</option>
                    </select>
                    <p className={`form-error ${errors.employmentType ? 'show' : ''}`}>{errors.employmentType}</p>
                  </div>
                  <div className="form-group">
                    <label>City / Location</label>
                    <input
                      type="text"
                      className="form-input"
                      placeholder="e.g. Mumbai"
                      value={formData.city}
                      onChange={(e) => handleChange('city', e.target.value)}
                      id="input-city"
                    />
                  </div>
                </div>

                <div className="form-group">
                  <label>Purpose / Notes</label>
                  <textarea
                    className="form-input"
                    placeholder="Tell us about your requirement..."
                    rows="3"
                    value={formData.purpose}
                    onChange={(e) => handleChange('purpose', e.target.value)}
                    id="input-purpose"
                    style={{ resize: 'vertical' }}
                  />
                </div>

                <div className="form-checkbox">
                  <input
                    type="checkbox"
                    id="terms-checkbox"
                    checked={formData.agreed}
                    onChange={(e) => handleChange('agreed', e.target.checked)}
                  />
                  <label htmlFor="terms-checkbox">
                    I agree to the Terms & Conditions and Privacy Policy
                  </label>
                </div>
                {errors.agreed && <p className="form-error show" style={{ marginTop: '-0.75rem', marginBottom: '0.75rem' }}>{errors.agreed}</p>}

                <button
                  type="submit"
                  className="form-submit"
                  disabled={submitting}
                  id="btn-submit-application"
                >
                  {submitting ? (
                    <>
                      <div className="spinner" />
                      Processing...
                    </>
                  ) : (
                    <>
                      <Send size={18} />
                      Submit Application
                    </>
                  )}
                </button>

                <div className="form-secure">
                  <Lock size={14} />
                  Your data is secure & encrypted
                </div>
              </form>
            </div>
          </>
        )}
      </div>
    </div>
  );
}
