import React, { useEffect, useState } from 'react';
import { ArrowLeftIcon, CheckCircleIcon } from '@heroicons/react/24/solid';

const PriceResult = ({ details, onBack }) => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate calculation delay
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1500);
    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return (
      <div className="min-h-[80vh] flex flex-col items-center justify-center bg-gray-50">
         <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-b-4 border-blue-600 mb-4"></div>
         <p className="text-gray-600 font-medium">Sedang mengecek harga pasar terbaik...</p>
      </div>
    );
  }

  return (
    <div className="min-h-[90vh] flex items-center justify-center relative bg-gray-900 py-12 px-4">
      {/* Background */}
      <div 
        className="absolute inset-0 bg-cover bg-center opacity-40"
         style={{ backgroundImage: "url('/eval-bg.png')" }}
      ></div>
      <div className="absolute inset-0 bg-gradient-to-br from-blue-900 via-gray-900 to-black opacity-90"></div>

      <div className="relative z-10 w-full max-w-5xl mx-auto">
        <div className="text-center mb-10 text-white">
          <p className="text-blue-400 font-semibold tracking-wider uppercase text-sm mb-2">Pemeriksaan Profesional</p>
          <h2 className="text-4xl md:text-5xl font-bold">Harga Dievaluasi!</h2>
        </div>

        <div className="bg-white rounded-3xl shadow-2xl overflow-hidden grid md:grid-cols-2">
          {/* Left: Device Info */}
          <div className="bg-gray-50 p-8 flex flex-col items-center justify-center border-r border-gray-100">
             <div className="w-48 h-64 bg-white rounded-2xl mb-6 shadow-sm flex items-center justify-center text-gray-400 overflow-hidden">
               <img src="/iphone%2013.jpg" alt="Phone" className="w-full h-full object-contain mix-blend-normal" />
             </div>
             <h3 className="text-2xl font-bold text-gray-800">{details?.model || 'iPhone 12 Pro Max'}</h3>
             <div className="flex gap-2 mt-2">
               <span className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-xs font-bold">{details?.brand || 'Apple'}</span>
               <span className="px-3 py-1 bg-gray-200 text-gray-700 rounded-full text-xs font-bold">{details?.storage || '128GB'}</span>
             </div>
          </div>

          {/* Right: Price & Actions */}
          <div className="p-10 flex flex-col justify-center space-y-8">
            <div>
              <p className="text-gray-500 mb-2">Estimasi Harga Jual</p>
              <div className="text-4xl lg:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-red-500">
                Rp 5.500.000 <span className="text-gray-400 text-2xl font-normal">~</span> 7.200.000
              </div>
              <p className="text-green-600 text-sm mt-2 flex items-center gap-1">
                <CheckCircleIcon className="h-4 w-4" />
                Harga di atas rata-rata pasar
              </p>
            </div>

            <div className="space-y-4">
              <div className="bg-blue-50 p-4 rounded-xl border border-blue-100">
                <h4 className="font-semibold text-blue-900 mb-1">Langkah Selanjutnya</h4>
                <p className="text-blue-700/80 text-sm">Teknisi kami akan datang ke lokasi Anda untuk pengecekan fisik dan pembayaran instan.</p>
              </div>

              <div className="grid gap-3">
                <button className="w-full bg-orange-500 hover:bg-orange-600 text-white font-bold py-4 rounded-xl shadow-lg shadow-orange-500/20 transition-all flex items-center justify-center gap-2">
                  Atur Penjemputan Sekarang
                </button>
                <button 
                  onClick={onBack}
                  className="w-full bg-white border-2 border-gray-200 hover:border-gray-300 text-gray-600 font-bold py-3.5 rounded-xl transition-all flex items-center justify-center gap-2"
                >
                  <ArrowLeftIcon className="h-5 w-5" />
                  Cek HP Lain
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PriceResult;
