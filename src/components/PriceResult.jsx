import React, { useEffect, useState } from 'react';
import { ArrowLeftIcon, CheckCircleIcon } from '@heroicons/react/24/solid';

const PriceResult = ({ result, onBack }) => {
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
      <div className="min-h-[80vh] flex flex-col items-center justify-center bg-gray-50 rounded-3xl">
         <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-b-4 border-blue-600 mb-4"></div>
         <p className="text-gray-600 font-medium">Sedang mengecek harga pasar terbaik...</p>
      </div>
    );
  }

  return (
    <div className="flex items-center justify-center relative w-full">
      <div className="w-full max-w-5xl mx-auto">
        <div className="text-center mb-10">
          <p className="text-blue-600 font-semibold tracking-wider uppercase text-sm mb-2">Pemeriksaan Profesional</p>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900">Harga Dievaluasi!</h2>
        </div>

        <div className="bg-white rounded-3xl shadow-2xl overflow-hidden grid md:grid-cols-2 border border-gray-100">
          {/* Left: Device Info */}
          <div className="bg-gray-50 p-8 flex flex-col items-center justify-center border-r border-gray-100">
             <div className="w-48 h-64 bg-white rounded-2xl mb-6 shadow-sm flex items-center justify-center text-gray-400 overflow-hidden p-4">
               <img src={result?.image || "/logo mitra.jpg"} alt="Phone" className="w-full h-full object-contain mix-blend-multiply" />
             </div>
             <h3 className="text-2xl font-bold text-gray-800 text-center">{result?.model || 'Unknown Model'}</h3>
             <div className="flex gap-2 mt-2">
               <span className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-xs font-bold">{result?.brand || 'Brand'}</span>
               <span className="px-3 py-1 bg-gray-200 text-gray-700 rounded-full text-xs font-bold">{result?.storage || 'Storage'}</span>
               {result?.warranty && <span className="px-3 py-1 bg-green-100 text-green-700 rounded-full text-xs font-bold">{result.warranty}</span>}
             </div>
          </div>

          {/* Right: Price & Actions */}
          <div className="p-10 flex flex-col justify-center space-y-8">
            <div>
              <p className="text-gray-500 mb-2">Estimasi Harga Jual</p>
              <div className="text-4xl lg:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-red-500">
                {result?.priceRange || "Hubungi Admin"}
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
                <button 
                  onClick={() => {
                      const message = `Halo Admin Liphone, saya mau jual HP:
- Model: ${result.model}
- Storage: ${result.storage}
- Garansi: ${result.warranty}
- Estimasi Web: ${result.priceRange}

Saya mau atur jadwal penjemputan/pengecekan. Mohon infonya ya!`;
                      window.open(`https://wa.me/6281234567890?text=${encodeURIComponent(message)}`, '_blank');
                  }}
                  className="w-full bg-orange-500 hover:bg-orange-600 text-white font-bold py-4 rounded-xl shadow-lg shadow-orange-500/20 transition-all flex items-center justify-center gap-2"
                >
                  Atur Penjemputan Sekarang
                </button>
                <button 
                  onClick={() => {
                        const message = `Halo Admin Liphone, saya mau tanya-tanya dulu soal jual HP ${result.model} ini...`;
                        window.open(`https://wa.me/6281234567890?text=${encodeURIComponent(message)}`, '_blank');
                  }}
                  className="w-full bg-green-500 hover:bg-green-600 text-white font-bold py-3.5 rounded-xl transition-all flex items-center justify-center gap-2"
                >
                  <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                     <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91C2.13 13.66 2.59 15.36 3.45 16.86L2.05 22L7.3 20.62C8.75 21.41 10.38 21.83 12.04 21.83C17.5 21.83 21.95 17.38 21.95 11.92C21.95 9.27 20.92 6.78 19.05 4.91C17.18 3.03 14.69 2 12.04 2ZM12.05 20.21C10.43 20.21 8.92 19.78 7.53 18.96L7.2 18.77L4.09 19.58L4.92 16.54L4.55 15.96C3.65 14.53 3.19 12.92 3.19 11.92C3.19 7.03 7.16 3.07 12.04 3.07C14.41 3.07 16.64 4 18.31 5.67C19.99 7.34 20.91 9.57 20.91 11.92C20.91 16.81 16.94 20.21 12.05 20.21ZM16.39 14.54C16.15 14.42 14.97 13.84 14.75 13.73C14.53 13.62 14.37 13.57 14.21 13.81C14.05 14.05 13.59 14.59 13.45 14.75C13.31 14.91 13.17 14.93 12.93 14.81C12.69 14.69 11.92 14.44 11.01 13.63C10.32 13.02 9.85 12.26 9.61 11.85C9.37 11.44 9.58 11.22 9.7 11.1C9.8 11 9.92 10.84 10.04 10.7C10.16 10.56 10.2 10.46 10.28 10.3C10.36 10.14 10.32 10 10.26 9.88C10.2 9.76 9.72 8.58 9.52 8.1C9.32 7.63 9.12 7.69 8.97 7.69C8.82 7.69 8.65 7.69 8.48 7.69C8.31 7.69 8.03 7.75 7.8 8C7.57 8.25 6.92 8.86 6.92 10.1C6.92 11.34 7.82 12.54 7.95 12.71C8.08 12.88 9.75 15.45 12.3 16.55C14.13 17.34 14.86 17.31 15.86 17.16C16.59 17.06 18.11 16.24 18.42 15.35C18.73 14.47 18.73 13.72 18.64 13.57C18.55 13.42 18.39 13.38 18.15 13.26V13.26Z"></path>
                  </svg>
                  Chat Admin (Konsultasi)
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
