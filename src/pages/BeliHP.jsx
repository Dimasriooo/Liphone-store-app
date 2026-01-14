import React from 'react';
import { ShoppingBagIcon } from '@heroicons/react/24/outline';

const BeliHP = () => {
  return (
    <div className="pt-28 pb-12 min-h-screen bg-white text-center">
      <div className="max-w-2xl mx-auto px-4">
          <ShoppingBagIcon className="h-24 w-24 mx-auto text-blue-200 mb-6" />
          <h1 className="text-3xl font-bold text-gray-900 mb-4">Halaman Beli HP</h1>
          <p className="text-gray-600 mb-8">
              Halaman ini sedang dalam pengembangan. Nantinya akan menampilkan katalog lengkap handphone yang tersedia dengan fitur filter dan pencarian.
          </p>
          <a href="/" className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition">
              Kembali ke Beranda
          </a>
      </div>
    </div>
  );
};

export default BeliHP;
