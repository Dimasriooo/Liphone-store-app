import React, { useState } from 'react';
import Hero from '../components/Hero';
import PriceResult from '../components/PriceResult';
import QualitySection from '../components/QualitySection';
import BuySection from '../components/BuySection';
import ProductModal from '../components/ProductModal';

const Home = ({ onProductSelect }) => {
  const [showResult, setShowResult] = useState(false);
  const [phoneDetails, setPhoneDetails] = useState(null);

  const handleCalculate = (details) => {
    setPhoneDetails(details);
    setShowResult(true);
  };

  const handleReset = () => {
    setShowResult(false);
    setPhoneDetails(null);
  }

  return (
    <>
      <div className="pt-20"> 
        {!showResult ? (
          <Hero onCalculate={handleCalculate} />
        ) : (
          <PriceResult details={phoneDetails} onBack={handleReset} />
        )}
        <QualitySection />
        <BuySection onProductSelect={onProductSelect} />
      </div>
    </>
  );
};

export default Home;
