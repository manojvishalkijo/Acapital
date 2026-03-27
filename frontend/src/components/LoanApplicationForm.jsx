import { Send, Loader2, CheckCircle, Lock, MessageCircle } from 'lucide-react';
import { db } from '../firebase';
import { collection, addDoc, serverTimestamp } from 'firebase/firestore';

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

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validate()) return;
    setSubmitting(true);
    
    try {
      // 1. Calculate Priority & Classification logic (Moved from backend)
      const amount = Number(formData.loanAmount);
      let priority = 'Cool';
      if (amount >= 2000000) priority = 'Hot (High Value)';
      else if (amount >= 500000) priority = 'Warm (Quality)';

      let classification = 'Retail';
      if (amount >= 5000000) classification = 'Premier';
      else if (loanTitle && (loanTitle.toLowerCase().includes('business') || loanTitle.toLowerCase().includes('mortgage')))
          classification = 'Enterprise';

      // 2. Save directly to Firebase Firestore
      const leadData = {
        ...formData,
        loanTitle: loanTitle || 'Not specified',
        priority,
        classification,
        timestamp: serverTimestamp(),
      };

      await addDoc(collection(db, 'leads'), leadData);

      // 3. Generate WhatsApp Logic (Moved from backend)
      const recipientNumber = '918838921974';
      const timeStr = new Date().toISOString().replace('T', ' ').substring(0, 19);
      const messageText = `LOAN APPLICATION [NEW]
--------------------------
PRIORITY: ${priority}
CLASS: ${classification}

CUSTOMER DETAILS:
Name: ${formData.fullName}
Phone: ${formData.phone}
City: ${formData.city}
Loan: ${loanTitle}
Amount: Rs. ${amount.toLocaleString('en-IN')}

Time: ${timeStr}
(View in Firebase Console)`;

      const waLink = `https://wa.me/${recipientNumber}?text=${encodeURIComponent(messageText)}`;
      
      setWhatsappLink(waLink);
      setSuccess(true);

      // Trigger WhatsApp tab
      window.open(waLink, '_blank');

    } catch (error) {
      console.error('Submission Error:', error);
      alert('Firebase Error: Make sure your configuration in firebase.js is correct.');
    } finally {
      setSubmitting(false);
    }
  };

  if (success) {
    return (
      <div className="laf-success">
        <div className="laf-success-icon"><CheckCircle size={40} /></div>
        <h3>Application Received!</h3>
        <p>Your details for <strong>{loanTitle}</strong> have been saved to our secure database.</p>
        
        {whatsappLink && (
          <div style={{ marginTop: '1.5rem', display: 'flex', flexDirection: 'column', gap: '0.8rem' }}>
             <p style={{ fontSize: '0.8rem', color: 'var(--gray-500)' }}>Client Notification (Optional)</p>
             <a 
              href={whatsappLink} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="btn btn-lime btn-sm"
              style={{ padding: '0.75rem', width: '100%', borderRadius: '10px' }}
             >
              <MessageCircle size={16} /> Send to WhatsApp
             </a>
          </div>
        )}
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
