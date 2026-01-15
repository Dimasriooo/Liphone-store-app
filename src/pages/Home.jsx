import React, { useState } from 'react';
import Hero from '../components/Hero';
import PriceResult from '../components/PriceResult';
import QualitySection from '../components/QualitySection';
import BuySection from '../components/BuySection';
import ProductModal from '../components/ProductModal';

const Home = ({ onProductSelect }) => {
  const [showResult, setShowResult] = useState(false);
  const [phoneDetails, setPhoneDetails] = useState(null);

  const calculatePrice = (model, storage) => {
    // Base prices (in millions)
    let min = 0;
    let max = 0;
    let img = "/logo mitra.jpg"; // Default image

    // Simple keyword matching for pricing and images
    if (model.includes("iPhone 16 Pro Max")) { min = 18.5; max = 21.0; img = "/16 pro result.png"; }
    else if (model.includes("iPhone 16 Pro")) { min = 16.5; max = 19.0; img = "/16 pro result.png"; }
    else if (model.includes("iPhone 16")) { min = 13.0; max = 15.0; img = "/16 result.png"; }
    
    else if (model.includes("iPhone 15 Pro Max")) { min = 17.0; max = 19.5; img = "/15 pro max.jpeg"; }
    else if (model.includes("iPhone 15 Pro")) { min = 15.0; max = 17.5; img = "/15 pro max.jpeg"; }
    else if (model.includes("iPhone 15")) { min = 11.5; max = 13.5; img = "/iphone 15 result.jpg"; }

    else if (model.includes("iPhone 14 Pro Max")) { min = 14.5; max = 16.5; img = "/13 result.jpg"; } 
    else if (model.includes("iPhone 14 Pro")) { min = 13.0; max = 15.0; img = "/13 result.jpg"; }
    else if (model.includes("iPhone 14")) { min = 9.5; max = 11.5; img = "/13 result.jpg"; }

    else if (model.includes("iPhone 13 Pro")) { min = 10.0; max = 12.0; img = "/12 pro.jpeg"; }
    else if (model.includes("iPhone 13")) { min = 8.0; max = 9.5; img = "/13 result.jpg"; }
    
    else if (model.includes("iPhone 12 Pro")) { min = 8.0; max = 9.5; img = "/12 pro.jpeg"; }
    else if (model.includes("iPhone 12")) { min = 6.0; max = 7.5; img = "/12 pro.jpeg"; }

    else if (model.includes("iPhone 11")) { min = 4.0; max = 5.5; img = "/iphone 11.jpeg"; }
    else if (model.includes("iPhone XR")) { min = 3.2; max = 4.2; img = "/iphone xr.jpeg"; }
    
    else if (model.includes("Samsung S24 Ultra")) { min = 16.0; max = 18.0; }
    else if (model.includes("Samsung")) { min = 5.0; max = 10.0; }
    else { min = 2.0; max = 5.0; }

    // Storage adjustment 
    if (storage === "256GB") { min += 0.5; max += 0.5; }
    if (storage === "512GB") { min += 1.0; max += 1.0; }
    if (storage === "1TB") { min += 2.0; max += 2.0; }

    return {
        range: `Rp ${min.toFixed(1)}jt - Rp ${max.toFixed(1)}jt`,
        image: img
    };
  };

  const handleCalculate = (details) => {
    const { range, image } = calculatePrice(details.model, details.storage);
    setPhoneDetails({
        ...details,
        priceRange: range,
        image: image
    });
    setShowResult(true);
    // Smooth scroll to results
    setTimeout(() => {
        window.scrollTo({ top: window.innerHeight * 0.8, behavior: 'smooth' });
    }, 100);
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
          <PriceResult result={phoneDetails} onBack={handleReset} />
        )}
        <QualitySection />
        <BuySection onProductSelect={onProductSelect} />
      </div>
    </>
  );
};

export default Home;
