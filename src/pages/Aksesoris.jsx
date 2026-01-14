import React from 'react';
import { WrenchScrewdriverIcon } from '@heroicons/react/24/outline';

const Aksesoris = () => {
  return (
    <div className="pt-28 pb-12 min-h-screen bg-white text-center">
      <div className="max-w-2xl mx-auto px-4">
          <WrenchScrewdriverIcon className="h-24 w-24 mx-auto text-orange-200 mb-6" />
          <h1 className="text-3xl font-bold text-gray-900 mb-4">Aksesoris & Sparepart</h1>
          <p className="text-gray-600 mb-8">
              Koleksi casing, charger, dan tempered glass premium akan segera hadir di sini.
          </p>
          <a href="/" className="inline-block bg-orange-500 text-white px-6 py-3 rounded-lg hover:bg-orange-600 transition">
              Kembali ke Beranda
          </a>
      </div>
    </div>
  );
};

export default Aksesoris;
