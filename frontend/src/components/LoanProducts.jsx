import { useNavigate } from 'react-router-dom';
import {
  User, Home, Building2, Car, Briefcase, ArrowRight
} from 'lucide-react';

const loanTypes = [
  {
    id: 'personal',
    title: 'Personal Loan',
    icon: User,
    route: '/loans/personal',
    description: 'Quick disbursal personal loans with zero collateral. Fulfill your dreams with hassle-free financing.',
    features: ['No Collateral', '24hr Approval', 'Flexible EMI'],
    rate: 'From 10.5%',
  },
  {
    id: 'home',
    title: 'Home Loan',
    icon: Home,
    route: '/loans/home',
    description: 'Make your dream home a reality with our competitive home loan rates and flexible repayment options.',
    features: ['From 8.5% p.a.', 'Up to 30 yrs', 'Tax Benefits'],
    rate: 'From 8.5%',
  },
  {
    id: 'mortgage',
    title: 'Mortgage Loan',
    icon: Building2,
    route: '/loans/mortgage',
    description: 'Unlock the value of your property with high-value loans at competitive interest rates.',
    features: ['High LTV', '15 Yr Tenure', 'Flexible Use'],
    rate: 'From 9.5%',
  },
  {
    id: 'vehicle',
    title: 'Vehicle Loan',
    icon: Car,
    route: '/loans/vehicle',
    description: 'Drive your dream vehicle with attractive interest rates and minimal documentation for new & used.',
    features: ['100% Funding', 'Same Day OK', 'Low EMI'],
    rate: 'From 8.75%',
  },
  {
    id: 'business',
    title: 'Business Loan',
    icon: Briefcase,
    route: '/loans/business',
    description: 'Fuel your business growth with customized financing for expansion and working capital needs.',
    features: ['MSME Friendly', 'Quick Sanction', 'High Limits'],
    rate: 'From 11%',
  },
];

export default function LoanProducts({ onApply }) {
  const navigate = useNavigate();

  const handleApply = (loan) => {
    navigate(loan.route);
  };

  return (
    <section className="loans-section" id="loans">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">We Facilitate All Loan Types</h2>
          <p className="section-subtitle">
            Choose from a range of financial products tailored to your needs.
            Quick approvals, competitive rates, and expert guidance.
          </p>
        </div>

        <div className="loans-grid loans-grid-5">
          {loanTypes.map((loan, index) => {
            const IconComp = loan.icon;
            return (
              <div
                className="loan-card reveal"
                key={loan.id}
                style={{ transitionDelay: `${index * 0.08}s` }}
                onClick={() => handleApply(loan)}
              >
                <div className="loan-card-rate">{loan.rate}</div>
                <div className="loan-card-icon">
                  <IconComp size={26} />
                </div>
                <h3>{loan.title}</h3>
                <p>{loan.description}</p>
                <div className="loan-card-features">
                  {loan.features.map((f) => (
                    <span key={f}>{f}</span>
                  ))}
                </div>
                <button
                  className="btn-apply"
                  onClick={(e) => { e.stopPropagation(); handleApply(loan); }}
                  id={`apply-${loan.id}`}
                >
                  Apply Now
                  <ArrowRight size={16} />
                </button>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export { loanTypes };
