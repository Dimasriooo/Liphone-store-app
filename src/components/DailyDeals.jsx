import React from 'react';
import { ChevronRightIcon } from '@heroicons/react/24/solid';

const deals = [
  { id: 1, name: "iPhone 12 Pro", image: "/12 pro.jpeg", price: "Rp 8.500.000", originalPrice: "Rp 10.000.000" },
  { id: 2, name: "iPhone 13 Pink", image: "/13 pink.jpeg", price: "Rp 9.200.000", originalPrice: "Rp 11.500.000" },
  { id: 3, name: "iPhone 15 Pink", image: "/iphone 15 pink.jpeg", price: "Rp 13.500.000", originalPrice: "Rp 15.000.000" },
  { id: 4, name: "iPhone 16", image: "/iphone 16.jpeg", price: "Rp 16.000.000", originalPrice: "Rp 17.500.000" },
  { id: 5, name: "iPhone 13 Blue", image: "/13 blue.jpeg", price: "Rp 9.200.000", originalPrice: "Rp 11.500.000" },
];

const DailyDeals = ({ onProductSelect }) => {
  return (
    <div className="bg-blue-50 py-12 px-4 relative overflow-hidden">
      {/* Decorative background elements if needed */}
      
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-2xl md:text-3xl font-bold text-blue-900">
            Deals Of The Day
          </h2>
          <button className="bg-blue-600 text-white px-4 py-2 rounded-lg text-sm font-semibold hover:bg-blue-700 transition flex items-center gap-1">
            Lihat Semua <ChevronRightIcon className="h-4 w-4" />
          </button>
        </div>

        {/* Deals Container - Horizontal Scroll on mobile, Grid on desktop */}
        <div className="flex gap-4 overflow-x-auto pb-4 md:grid md:grid-cols-5 md:gap-6 hide-scrollbar">
           {/* Promo Banner Card */}
           <div className="min-w-[200px] md:col-span-1 bg-blue-600 rounded-2xl p-6 flex flex-col justify-end text-white shadow-md relative overflow-hidden group cursor-pointer">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500 to-blue-700"></div>
              <div className="relative z-10">
                 <h3 className="text-3xl font-black italic mb-2">DEALS</h3>
                 <p className="font-medium text-sm mb-4">Hemat hingga 50% untuk gadget pilihan!</p>
                 <span className="bg-white text-blue-600 text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">Serbu!</span>
              </div>
           </div>

           {/* Product Cards */}
           {deals.map(item => (
             <div 
               key={item.id} 
               onClick={() => onProductSelect({...item, description: "Promo spesial Deals of The Day. Stok terbatas! Hubungi kami untuk harga terbaik."})}
               className="min-w-[160px] md:col-span-1 bg-white rounded-2xl p-4 shadow-sm hover:shadow-md transition cursor-pointer flex flex-col items-center justify-between"
             >
                <div className="flex flex-col items-center w-full">
                  <img src={item.image} alt={item.name} className="h-32 object-contain mb-4" />
                  <h4 className="font-medium text-gray-800 text-center text-sm line-clamp-2 mb-2">{item.name}</h4>
                </div>
                
                <div className="text-center">
                  <p className="text-xs text-gray-400 line-through">{item.originalPrice}</p>
                  <p className="text-orange-600 font-bold text-sm md:text-base">{item.price}</p>
                </div>
             </div>
           ))}
        </div>
      </div>
    </div>
  );
};

export default DailyDeals;
