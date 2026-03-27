export default function HowItWorks() {
  const steps = [
    {
      number: 1,
      title: 'Choose Your Loan',
      description: 'Browse our wide range of loan products and select the one that best fits your financial needs.',
    },
    {
      number: 2,
      title: 'Fill the Application',
      description: 'Complete a quick application form with your basic details. It takes less than 2 minutes.',
    },
    {
      number: 3,
      title: 'Get Approved',
      description: 'Our team reviews your application and connects you with the best lender for fast approval.',
    },
  ];

  return (
    <section className="how-section" id="how">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">How It Works</h2>
          <p className="section-subtitle">
            Getting a loan has never been easier. Just 3 simple steps.
          </p>
        </div>

        <div className="steps-container">
          {steps.map((step, index) => (
            <div
              className="step-card reveal"
              key={step.number}
              style={{ transitionDelay: `${index * 0.15}s` }}
            >
              <div className="step-number">{step.number}</div>
              <h3>{step.title}</h3>
              <p>{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
