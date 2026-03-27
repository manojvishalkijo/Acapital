import { Star } from 'lucide-react';

const testimonials = [
  {
    name: 'Rajesh Kumar',
    initials: 'RK',
    role: 'Home Loan Customer',
    text: 'ACapital made my home buying journey incredibly smooth. Got approved in just 2 days with the best interest rate. The team was supportive throughout the process!',
    stars: 5,
  },
  {
    name: 'Priya Sharma',
    initials: 'PS',
    role: 'Personal Loan Customer',
    text: 'Needed urgent funds for a medical emergency. Applied online and the amount was disbursed within 24 hours. Truly grateful for their quick service and empathy.',
    stars: 5,
  },
  {
    name: 'Amit Patel',
    initials: 'AP',
    role: 'Business Loan Customer',
    text: 'As an MSME owner, getting a business loan was always a headache. ACapital connected me with the right lender and I got ₹25L sanctioned in a week. Highly recommend!',
    stars: 5,
  },
];

export default function Testimonials() {
  return (
    <section className="testimonials-section" id="testimonials">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">What Our Customers Say</h2>
          <p className="section-subtitle">
            Real stories from real people who trusted us with their financial goals.
          </p>
        </div>

        <div className="testimonials-grid">
          {testimonials.map((t, index) => (
            <div
              className="testimonial-card reveal"
              key={t.name}
              style={{ transitionDelay: `${index * 0.1}s` }}
            >
              <div className="testimonial-stars">
                {[...Array(t.stars)].map((_, i) => (
                  <Star key={i} size={16} fill="currentColor" />
                ))}
              </div>
              <p className="testimonial-text">"{t.text}"</p>
              <div className="testimonial-author">
                <div className="testimonial-avatar">{t.initials}</div>
                <div className="testimonial-info">
                  <h4>{t.name}</h4>
                  <p>{t.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
