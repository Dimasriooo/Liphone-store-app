import React from 'react';

const products = [
  { 
    id: 1, 
    name: "Apple iPhone 13", 
    price: "Rp 8.249.000", 
    original: "Rp 10.299.000", 
    image: "/iphone 13.jpeg",
    description: "Ready stok iPhone 13 128GB Ex Inter, kondisi mulus 98%. Battery Health 90%+. Kelengkapan Fullset OEM. Garansi sinyal seumur hidup."
  },
  { 
    id: 2, 
    name: "Apple iPhone 15 Pro Max", 
    price: "Rp 20.999.000", 
    original: null, 
    image: "/15 pro max.jpeg",
    description: "iPhone 15 Pro Max 256GB Natural Titanium. Garansi Resmi iBox ON sampai 2025. Cycle Count rendah. Fullset Original."
  },
  { 
    id: 3, 
    name: "Apple iPhone 11", 
    price: "Rp 4.999.000", 
    original: "Rp 6.999.000", 
    image: "/iphone 11.jpeg",
    description: "Best Seller! iPhone 11 64GB kondisi like new. Face ID ON, True Tone ON. Cocok untuk daily driver pemula iOS."
  },
  { 
    id: 4, 
    name: "Apple iPhone 16 Pro", 
    price: "Rp 19.499.000", 
    original: null, 
    image: "/iphone 16 pro.jpeg",
    description: "New Arrival! iPhone 16 Pro Unit display like new. Fungsi 100% normal. Garansi toko 30 hari ganti unit."
  },
  { 
    id: 5, 
    name: "Apple iPhone XR", 
    price: "Rp 3.299.000", 
    original: null, 
    image: "/iphone xr.jpeg",
    description: "Pilihan hemat budget. iPhone XR 64GB All Operator. Mesin segel belum pernah bongkar. Bonus case dan tempered glass."
  },
];

const BestSellers = ({ onProductSelect }) => {
  return (
    <div className="py-10 max-w-7xl mx-auto px-4">
      <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-8">
        5 Pilihan Terbaik Minggu Ini
      </h2>
      
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
        {products.map((product) => (
          <div 
            key={product.id} 
            onClick={() => onProductSelect(product)}
            className="group relative flex flex-col bg-white rounded-3xl shadow-lg overflow-hidden transition-transform hover:-translate-y-1 cursor-pointer"
          >
            {/* Image Section */}
            <div className="p-6 flex items-center justify-center bg-white h-48">
              <img 
                src={product.image} 
                alt={product.name} 
                className="max-h-full max-w-full object-contain"
              />
            </div>

            {/* Content Section - Blue Footer style */}
            <div className="mt-auto bg-gradient-to-r from-blue-600 to-blue-400 p-4 text-white rounded-t-3xl relative z-10">
               {/* Decorative Curve Effect (Optional, simulated with margin or pseudo elements if needed, sticking to simpler CSS for now) */}
               
               <div className="text-center space-y-1">
                 <h3 className="text-xs md:text-sm font-semibold opacity-90 truncate px-1">
                   {product.name}
                 </h3>
                 <div className="font-bold text-lg md:text-xl">
                   {product.price}
                 </div>
                 {product.original && (
                   <div className="text-xs opacity-75 line-through">
                     {product.original}
                   </div>
                 )}
               </div>
            </div>
            
            {/* Hover overlay hint */}
            <div className="absolute inset-0 bg-black/5 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none"></div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BestSellers;
