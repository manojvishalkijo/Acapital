import { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';

import Navbar from './components/Navbar';
import Hero from './components/Hero';
import LoanProducts from './components/LoanProducts';
import WhyChooseUs from './components/WhyChooseUs';
import HowItWorks from './components/HowItWorks';
import EMICalculator from './components/EMICalculator';
import Testimonials from './components/Testimonials';
import StatsBanner from './components/StatsBanner';
import Footer from './components/Footer';
import ApplicationModal from './components/ApplicationModal';

import PersonalLoanPage from './pages/PersonalLoanPage';
import HomeLoanPage from './pages/HomeLoanPage';
import MortgageLoanPage from './pages/MortgageLoanPage';
import VehicleLoanPage from './pages/VehicleLoanPage';
import BusinessLoanPage from './pages/BusinessLoanPage';

function HomePage() {
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedLoan, setSelectedLoan] = useState({ id: '', title: '' });

  const openModal = (loanId = '', loanTitle = 'Loan') => {
    setSelectedLoan({ id: loanId, title: loanTitle });
    setModalOpen(true);
    document.body.style.overflow = 'hidden';
  };

  const closeModal = () => {
    setModalOpen(false);
    document.body.style.overflow = '';
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add('visible');
        });
      },
      { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
    );
    const revealElements = document.querySelectorAll('.reveal');
    revealElements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => {
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) entry.target.classList.add('visible');
          });
        },
        { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
      );
      const revealElements = document.querySelectorAll('.reveal:not(.visible)');
      revealElements.forEach((el) => observer.observe(el));
      return () => observer.disconnect();
    }, 100);
    return () => clearTimeout(timer);
  });

  return (
    <div className="app">
      <Navbar onApplyClick={() => openModal('', 'Loan')} />
      <Hero onApplyClick={() => openModal('', 'Loan')} />
      <LoanProducts onApply={(id, title) => openModal(id, title)} />
      <StatsBanner />
      <WhyChooseUs />
      <HowItWorks />
      <EMICalculator />
      <Testimonials />
      <Footer />
      <ApplicationModal
        isOpen={modalOpen}
        onClose={closeModal}
        loanType={selectedLoan.id}
        loanTitle={selectedLoan.title}
      />
    </div>
  );
}

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/loans/personal" element={<PersonalLoanPage />} />
      <Route path="/loans/home" element={<HomeLoanPage />} />
      <Route path="/loans/mortgage" element={<MortgageLoanPage />} />
      <Route path="/loans/vehicle" element={<VehicleLoanPage />} />
      <Route path="/loans/business" element={<BusinessLoanPage />} />
    </Routes>
  );
}

export default App;
