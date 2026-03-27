import { useState, useMemo } from 'react';

export default function EMICalculator() {
  const [principal, setPrincipal] = useState(2500000);
  const [rate, setRate] = useState(9.5);
  const [tenure, setTenure] = useState(15);

  const result = useMemo(() => {
    const r = rate / 12 / 100;
    const n = tenure * 12;
    const emi = (principal * r * Math.pow(1 + r, n)) / (Math.pow(1 + r, n) - 1);
    const totalPayment = emi * n;
    const totalInterest = totalPayment - principal;
    return {
      emi: Math.round(emi),
      totalPayment: Math.round(totalPayment),
      totalInterest: Math.round(totalInterest),
    };
  }, [principal, rate, tenure]);

  const formatCurrency = (val) =>
    '₹' + val.toLocaleString('en-IN');

  return (
    <section className="calculator-section" id="calculator">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">EMI Calculator</h2>
          <p className="section-subtitle">
            Plan your finances with our easy-to-use EMI calculator.
          </p>
        </div>

        <div className="calculator-wrapper reveal">
          <div className="calc-inputs">
            <div className="calc-group">
              <label>
                Loan Amount
                <span>{formatCurrency(principal)}</span>
              </label>
              <input
                type="range"
                className="calc-slider"
                min="100000"
                max="10000000"
                step="50000"
                value={principal}
                onChange={(e) => setPrincipal(Number(e.target.value))}
                id="calc-principal"
              />
            </div>
            <div className="calc-group">
              <label>
                Interest Rate (p.a.)
                <span>{rate}%</span>
              </label>
              <input
                type="range"
                className="calc-slider"
                min="5"
                max="24"
                step="0.1"
                value={rate}
                onChange={(e) => setRate(Number(e.target.value))}
                id="calc-rate"
              />
            </div>
            <div className="calc-group">
              <label>
                Loan Tenure
                <span>{tenure} Years</span>
              </label>
              <input
                type="range"
                className="calc-slider"
                min="1"
                max="30"
                step="1"
                value={tenure}
                onChange={(e) => setTenure(Number(e.target.value))}
                id="calc-tenure"
              />
            </div>
          </div>

          <div className="calc-results">
            <div className="emi-display">
              <p className="emi-label">Monthly EMI</p>
              <p className="emi-amount">
                <span>₹</span>{result.emi.toLocaleString('en-IN')}
              </p>
            </div>
            <div className="emi-breakdown">
              <div className="emi-stat">
                <p className="stat-value">{formatCurrency(principal)}</p>
                <p className="stat-label">Principal Amount</p>
              </div>
              <div className="emi-stat">
                <p className="stat-value">{formatCurrency(result.totalInterest)}</p>
                <p className="stat-label">Total Interest</p>
              </div>
              <div className="emi-stat">
                <p className="stat-value">{formatCurrency(result.totalPayment)}</p>
                <p className="stat-label">Total Payment</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
