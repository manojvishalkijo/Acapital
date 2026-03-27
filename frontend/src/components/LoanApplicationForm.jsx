import { useState } from 'react';
import { Send, Loader2, CheckCircle, Lock, MessageCircle } from 'lucide-react';

export default function LoanApplicationForm({ loanType, loanTitle, onSuccess }) {
  const [formData, setFormData] = useState({
    fullName: '', phone: '', email: '', loanAmount: '',
    monthlyIncome: '', employmentType: '', city: '', agreed: false,
  });
  const [errors, setErrors] = useState({});
  const [submitting, setSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);
  const [whatsappLink, setWhatsappLink] = useState('');

  const handleChange = (field, value) => {
    setFormData(p => ({ ...p, [field]: value }));
    if (errors[field]) setErrors(p => { const n = { ...p }; delete n[field]; return n; });
  };

  const validate = () => {
    const e = {};
    if (!formData.fullName.trim()) e.fullName = 'Name is required';
    if (!formData.phone.match(/^[6-9]\d{9}$/)) e.phone = 'Enter valid 10-digit number';
    if (!formData.email.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)) e.email = 'Valid email required';
    if (!formData.loanAmount || Number(formData.loanAmount) < 10000) e.loanAmount = 'Min ₹10,000';
    if (!formData.employmentType) e.employmentType = 'Select type';
    if (!formData.agreed) e.agreed = 'Please accept terms';
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validate()) return;
    setSubmitting(true);
    
    // Construct WhatsApp message
    const amount = Number(formData.loanAmount);
    const timestamp = new Date().toLocaleString('en-IN');
    const recipientNumber = '919942888304';
    
    const messageText = `LOAN APPLICATION [NEW]\n` +
      `--------------------------\n` +
      `Name: ${formData.fullName}\n` +
      `Phone: ${formData.phone}\n` +
      `Email: ${formData.email}\n` +
      `City: ${formData.city}\n` +
      `Loan: ${loanTitle}\n` +
      `Amount: ₹${amount.toLocaleString('en-IN')}\n` +
      `Income: ₹${Number(formData.monthlyIncome || 0).toLocaleString('en-IN')}\n` +
      `Employment: ${formData.employmentType}\n\n` +
      `Time: ${timestamp}`;

    const waLink = `https://wa.me/${recipientNumber}?text=${encodeURIComponent(messageText)}`;
    
    // Redirect after a short delay for visual feedback
    setTimeout(() => {
      window.location.href = waLink;
      setSuccess(true);
      setWhatsappLink(waLink);
      setSubmitting(false);
      if (onSuccess) onSuccess();
    }, 800);
  };

  if (success) {
    return (
      <div className="laf-success">
        <div className="laf-success-icon"><CheckCircle size={40} /></div>
        <h3>Application Ready!</h3>
        <p>Your details for <strong>{loanTitle}</strong> have been prepared.</p>
        
        <div style={{ marginTop: '1.5rem', display: 'flex', flexDirection: 'column', gap: '0.8rem' }}>
           <p style={{ fontSize: '0.85rem', color: 'var(--gray-600)', textAlign: 'center' }}>
             We are redirecting you to WhatsApp to complete your application. If it doesn't open automatically, click the button below:
           </p>
           <a 
            href={whatsappLink} 
            target="_blank" 
            rel="noopener noreferrer" 
            className="btn btn-lime btn-lg"
            style={{ 
              padding: '1rem', 
              width: '100%', 
              borderRadius: '12px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '0.8rem',
              fontWeight: '600',
              boxShadow: '0 4px 12px rgba(34, 197, 94, 0.2)'
            }}
           >
            <MessageCircle size={20} /> Open WhatsApp Chat
           </a>
        </div>
      </div>
    );
  }

  return (
    <form className="laf-form" onSubmit={handleSubmit} noValidate>
      <div className="laf-row">
        <div className="laf-group">
          <label>Full Name <span>*</span></label>
          <input
            className={`laf-input${errors.fullName ? ' err' : formData.fullName ? ' ok' : ''}`}
            type="text" placeholder="Your full name"
            value={formData.fullName}
            onChange={e => handleChange('fullName', e.target.value)}
            id={`laf-name-${loanType}`}
          />
          {errors.fullName && <p className="laf-err">{errors.fullName}</p>}
        </div>
        <div className="laf-group">
          <label>Phone <span>*</span></label>
          <input
            className={`laf-input${errors.phone ? ' err' : formData.phone ? ' ok' : ''}`}
            type="tel" placeholder="10-digit number"
            value={formData.phone}
            onChange={e => handleChange('phone', e.target.value.replace(/\D/g, '').slice(0, 10))}
            id={`laf-phone-${loanType}`}
          />
          {errors.phone && <p className="laf-err">{errors.phone}</p>}
        </div>
      </div>

      <div className="laf-group">
        <label>Email <span>*</span></label>
        <input
          className={`laf-input${errors.email ? ' err' : formData.email ? ' ok' : ''}`}
          type="email" placeholder="you@email.com"
          value={formData.email}
          onChange={e => handleChange('email', e.target.value)}
          id={`laf-email-${loanType}`}
        />
        {errors.email && <p className="laf-err">{errors.email}</p>}
      </div>

      <div className="laf-row">
        <div className="laf-group">
          <label>Loan Amount (₹) <span>*</span></label>
          <input
            className={`laf-input${errors.loanAmount ? ' err' : formData.loanAmount ? ' ok' : ''}`}
            type="number" placeholder="e.g. 500000"
            value={formData.loanAmount}
            onChange={e => handleChange('loanAmount', e.target.value)}
            id={`laf-amount-${loanType}`}
          />
          {errors.loanAmount && <p className="laf-err">{errors.loanAmount}</p>}
        </div>
        <div className="laf-group">
          <label>Monthly Income (₹)</label>
          <input
            className="laf-input" type="number" placeholder="e.g. 75000"
            value={formData.monthlyIncome}
            onChange={e => handleChange('monthlyIncome', e.target.value)}
            id={`laf-income-${loanType}`}
          />
        </div>
      </div>

      <div className="laf-row">
        <div className="laf-group">
          <label>Employment Type <span>*</span></label>
          <select
            className={`laf-input${errors.employmentType ? ' err' : formData.employmentType ? ' ok' : ''}`}
            value={formData.employmentType}
            onChange={e => handleChange('employmentType', e.target.value)}
            id={`laf-emp-${loanType}`}
          >
            <option value="">Select type</option>
            <option value="salaried">Salaried</option>
            <option value="self-employed">Self Employed</option>
            <option value="business">Business Owner</option>
            <option value="professional">Professional</option>
          </select>
          {errors.employmentType && <p className="laf-err">{errors.employmentType}</p>}
        </div>
        <div className="laf-group">
          <label>City</label>
          <input
            className="laf-input" type="text" placeholder="e.g. Mumbai"
            value={formData.city}
            onChange={e => handleChange('city', e.target.value)}
            id={`laf-city-${loanType}`}
          />
        </div>
      </div>

      <div className="laf-checkbox-row">
        <input
          type="checkbox" id={`laf-terms-${loanType}`}
          checked={formData.agreed}
          onChange={e => handleChange('agreed', e.target.checked)}
        />
        <label htmlFor={`laf-terms-${loanType}`}>I agree to Terms &amp; Conditions and Privacy Policy</label>
      </div>
      {errors.agreed && <p className="laf-err" style={{ marginTop: '-0.5rem', marginBottom: '0.5rem' }}>{errors.agreed}</p>}

      <button type="submit" className="laf-submit" disabled={submitting} id={`laf-submit-${loanType}`}>
        {submitting ? <><div className="laf-spinner" /> Processing...</> : <><Send size={16} /> Submit Application</>}
      </button>

      <div className="laf-secure"><Lock size={12} /> Your data is secure &amp; encrypted</div>
    </form>
  );
}
