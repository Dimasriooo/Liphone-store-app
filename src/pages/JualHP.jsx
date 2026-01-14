import React from 'react';
import PriceForm from '../components/PriceForm';

const JualHP = () => {
  const handleCalculate = (data) => {
      alert("Fitur ini akan diintegrasikan dengan halaman hasil!");
  }

  return (
    <div className="pt-24 pb-12 min-h-screen bg-gray-50 max-w-7xl mx-auto px-4">
      <h1 className="text-3xl font-bold text-center text-gray-800 mb-8">Jual Handphone Bekas</h1>
      <div className="flex justify-center">
          <PriceForm onSubmit={handleCalculate} />
      </div>
      <p className="text-center text-gray-500 mt-8 max-w-2xl mx-auto">
          Dapatkan penawaran harga terbaik untuk HP bekas Anda dengan proses yang transparan, aman, dan cepat. Teknisi kami akan datang ke lokasi Anda.
      </p>
    </div>
  );
};

export default JualHP;
