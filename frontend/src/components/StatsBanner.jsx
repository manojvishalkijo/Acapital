import { useEffect, useRef, useState } from 'react';

function AnimatedCounter({ target, suffix = '', prefix = '' }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const hasAnimated = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated.current) {
          hasAnimated.current = true;
          const duration = 2000;
          const startTime = performance.now();

          const animate = (currentTime) => {
            const elapsed = currentTime - startTime;
            const progress = Math.min(elapsed / duration, 1);
            const eased = 1 - Math.pow(1 - progress, 3);
            setCount(Math.floor(eased * target));
            if (progress < 1) requestAnimationFrame(animate);
          };
          requestAnimationFrame(animate);
        }
      },
      { threshold: 0.3 }
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [target]);

  return (
    <span ref={ref}>
      {prefix}{count.toLocaleString('en-IN')}{suffix}
    </span>
  );
}

export default function StatsBanner() {
  const stats = [
    { value: 5000, suffix: '+', label: 'Happy Customers' },
    { value: 500, suffix: ' Cr+', prefix: '₹', label: 'Loans Disbursed' },
    { value: 50, suffix: '+', label: 'Banking Partners' },
    { value: 15, suffix: '+ Yrs', label: 'Experience' },
  ];

  return (
    <section className="stats-banner" id="stats">
      <div className="container">
        <div className="stats-grid">
          {stats.map((stat) => (
            <div className="stat-item" key={stat.label}>
              <h3 className="stat-number">
                <AnimatedCounter
                  target={stat.value}
                  suffix={stat.suffix}
                  prefix={stat.prefix || ''}
                />
              </h3>
              <p className="stat-desc">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
