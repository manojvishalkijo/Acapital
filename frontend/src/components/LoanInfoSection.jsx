import { CheckCircle2, FileText, UserCheck, Clock3, BadgeIndianRupee, Landmark } from 'lucide-react';

const loanData = {
  personal: {
    eligibility: [
      { label: 'Age', value: '21 – 60 Years' },
      { label: 'Min. Salary', value: '₹20,000/month' },
      { label: 'Credit Score', value: '700+' },
      { label: 'Employment', value: 'Salaried / Self-Employed' },
    ],
    documents: [
      'PAN Card & Aadhaar Card',
      'Last 3 months salary slips',
      '6 months bank statement',
      'Employment / offer letter',
      'Passport-size photograph',
    ],
    steps: [
      { num: '01', title: 'Apply Online', desc: 'Fill the simple form with your basic details in under 3 minutes.' },
      { num: '02', title: 'Get Decision', desc: 'Receive an instant approval decision via SMS and email.' },
      { num: '03', title: 'Documents', desc: 'Upload KYC and income documents through our secure portal.' },
      { num: '04', title: 'Disbursal', desc: 'Loan amount credited to your account within 24 hours.' },
    ],
    highlights: [
      { icon: BadgeIndianRupee, text: 'Loans from ₹50,000 to ₹40 Lakhs' },
      { icon: Clock3, text: '24-hour disbursal guarantee' },
      { icon: UserCheck, text: 'Zero collateral required' },
      { icon: Landmark, text: 'Partnered with 50+ top lenders' },
    ],
  },
  home: {
    eligibility: [
      { label: 'Age', value: '21 – 65 Years' },
      { label: 'Min. Income', value: '₹25,000/month' },
      { label: 'Credit Score', value: '720+' },
      { label: 'Employment', value: 'Salaried / Self-Employed' },
    ],
    documents: [
      'PAN Card & Aadhaar Card',
      'Salary slips / ITR (2 years)',
      '12 months bank statement',
      'Property sale agreement',
      'Title deed / NOC from builder',
    ],
    steps: [
      { num: '01', title: 'Apply Online', desc: 'Submit your application with property and income details.' },
      { num: '02', title: 'Property Valuation', desc: 'Our empanelled valuer assesses the property within 48 hrs.' },
      { num: '03', title: 'Sanction Letter', desc: 'Get your home loan sanction letter issued by lender.' },
      { num: '04', title: 'Disbursal', desc: 'Funds disbursed directly to builder / seller account.' },
    ],
    highlights: [
      { icon: BadgeIndianRupee, text: 'Loan up to ₹5 Crores' },
      { icon: Clock3, text: 'Approval within 48 hours' },
      { icon: UserCheck, text: 'Tax benefits under 80C & 24(b)' },
      { icon: Landmark, text: '30-year flexible tenure' },
    ],
  },
  mortgage: {
    eligibility: [
      { label: 'Age', value: '23 – 65 Years' },
      { label: 'Min. Income', value: '₹30,000/month' },
      { label: 'Credit Score', value: '680+' },
      { label: 'Property', value: 'Clear Title Required' },
    ],
    documents: [
      'PAN Card & Aadhaar Card',
      'Property ownership documents',
      'Encumbrance certificate',
      'Income proof / ITR (3 years)',
      'Latest property tax receipt',
    ],
    steps: [
      { num: '01', title: 'Apply Online', desc: 'Provide property and income details for preliminary assessment.' },
      { num: '02', title: 'Legal Verification', desc: 'Legal team verifies property title and ownership documents.' },
      { num: '03', title: 'Valuation', desc: 'Certified valuer assesses fair market value of your property.' },
      { num: '04', title: 'Disbursal', desc: 'Loan credited to your account after mortgage registration.' },
    ],
    highlights: [
      { icon: BadgeIndianRupee, text: 'Loans up to ₹10 Crores' },
      { icon: Clock3, text: 'Sanction in 72 hours' },
      { icon: UserCheck, text: 'Retain full property possession' },
      { icon: Landmark, text: 'Residential & commercial accepted' },
    ],
  },
  vehicle: {
    eligibility: [
      { label: 'Age', value: '21 – 65 Years' },
      { label: 'Min. Income', value: '₹15,000/month' },
      { label: 'Credit Score', value: '650+' },
      { label: 'Employment', value: 'Salaried / Self-Employed' },
    ],
    documents: [
      'PAN Card & Aadhaar Card',
      'Latest 3 months salary slips',
      '6 months bank statement',
      'Vehicle quotation / invoice',
      'Driving licence (if applicable)',
    ],
    steps: [
      { num: '01', title: 'Choose Vehicle', desc: 'Pick your dream vehicle and get the dealer quotation.' },
      { num: '02', title: 'Apply Online', desc: 'Submit your income and KYC details on our platform.' },
      { num: '03', title: 'Same-Day Approval', desc: 'Get approval within hours for new vehicle purchases.' },
      { num: '04', title: 'Drive Away', desc: 'Loan disbursed to dealer — collect your keys the same day.' },
    ],
    highlights: [
      { icon: BadgeIndianRupee, text: '100% on-road price funding' },
      { icon: Clock3, text: 'Same-day approval available' },
      { icon: UserCheck, text: 'New & used vehicles covered' },
      { icon: Landmark, text: 'Tenure up to 7 years' },
    ],
  },
  business: {
    eligibility: [
      { label: 'Age', value: '21 – 65 Years' },
      { label: 'Business Age', value: '2+ Years (preferred)' },
      { label: 'Credit Score', value: '700+ (Owner)' },
      { label: 'Turnover', value: '₹10L+ Preferred' },
    ],
    documents: [
      'PAN Card & Aadhaar (Owner)',
      'Business registration certificate',
      'GST returns (last 12 months)',
      'ITR + financials (2 years)',
      '12 months bank statement',
    ],
    steps: [
      { num: '01', title: 'Apply Online', desc: 'Share your business profile and financing requirement.' },
      { num: '02', title: 'Assessment', desc: 'Our team reviews business financials and credit health.' },
      { num: '03', title: 'Offer Letter', desc: 'Receive a customised loan offer with terms and rate.' },
      { num: '04', title: 'Disbursal', desc: 'Funds credited to your business account within 72 hours.' },
    ],
    highlights: [
      { icon: BadgeIndianRupee, text: 'Unsecured loans up to ₹50 Lakhs' },
      { icon: Clock3, text: 'Sanction within 72 hours' },
      { icon: UserCheck, text: 'MSME & startup friendly' },
      { icon: Landmark, text: 'Working capital & term loans' },
    ],
  },
};

export default function LoanInfoSection({ loanType }) {
  const data = loanData[loanType];
  if (!data) return null;

  return (
    <section className="lis-section">
      <div className="container">

        {/* KEY HIGHLIGHTS */}
        <div className="lis-highlights">
          {data.highlights.map(({ icon: Icon, text }) => (
            <div className="lis-hl-card" key={text}>
              <div className="lis-hl-icon"><Icon size={20} /></div>
              <span>{text}</span>
            </div>
          ))}
        </div>

        <div className="lis-body">
          {/* PROCESS STEPS */}
          <div className="lis-col">
            <h2 className="lis-title">How It Works</h2>
            <div className="lis-steps">
              {data.steps.map(step => (
                <div className="lis-step" key={step.num}>
                  <div className="lis-step-num">{step.num}</div>
                  <div className="lis-step-content">
                    <h4>{step.title}</h4>
                    <p>{step.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* ELIGIBILITY */}
          <div className="lis-col">
            <h2 className="lis-title">Eligibility Criteria</h2>
            <div className="lis-elig-grid">
              {data.eligibility.map(e => (
                <div className="lis-elig-card" key={e.label}>
                  <span>{e.label}</span>
                  <strong>{e.value}</strong>
                </div>
              ))}
            </div>

            <h2 className="lis-title" style={{ marginTop: '2rem' }}>Documents Required</h2>
            <ul className="lis-docs">
              {data.documents.map(doc => (
                <li key={doc}>
                  <CheckCircle2 size={16} className="lis-check" />
                  {doc}
                </li>
              ))}
            </ul>
          </div>
        </div>

      </div>
    </section>
  );
}
