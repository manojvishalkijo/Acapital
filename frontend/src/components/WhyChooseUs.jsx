import { Zap, Shield, Clock, HeadphonesIcon, Percent, Award } from 'lucide-react';

const features = [
  {
    icon: Zap,
    title: 'Instant Approval',
    description: 'Get your loan approved within 24 hours with our streamlined digital process and minimal paperwork.',
  },
  {
    icon: Percent,
    title: 'Best Interest Rates',
    description: 'We partner with 50+ banks to bring you the most competitive rates starting from just 8.5% p.a.',
  },
  {
    icon: Shield,
    title: '100% Secure',
    description: 'Your data is encrypted and protected with bank-grade security. We never share your information.',
  },
  {
    icon: Clock,
    title: 'Quick Disbursal',
    description: 'Once approved, funds are transferred directly to your account within 2-3 business days.',
  },
  {
    icon: HeadphonesIcon,
    title: 'Expert Guidance',
    description: 'Our dedicated relationship managers guide you through every step of the loan process.',
  },
  {
    icon: Award,
    title: 'Trusted by Thousands',
    description: 'Serving 5000+ happy customers with ₹500 Cr+ disbursed across India since 2010.',
  },
];

export default function WhyChooseUs() {
  return (
    <section className="why-section" id="why">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Why Choose ACapital?</h2>
          <p className="section-subtitle">
            We make the loan process simple, transparent, and lightning fast.
          </p>
        </div>

        <div className="why-grid">
          {features.map((feature, index) => {
            const IconComp = feature.icon;
            return (
              <div
                className="why-card reveal"
                key={feature.title}
                style={{ transitionDelay: `${index * 0.1}s` }}
              >
                <div className="why-card-icon">
                  <IconComp size={24} />
                </div>
                <h3>{feature.title}</h3>
                <p>{feature.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
