import React, { useContext } from 'react';
import { ProductContext } from '../context/ProductContext';

const BestSellers = ({ onProductSelect }) => {
  const { products } = useContext(ProductContext);
  const bestSellers = products.filter(p => p.category === 'BestSeller');

  return (
    <div className="py-10 max-w-7xl mx-auto px-4">
      <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-8">
        5 Pilihan Terbaik Minggu Ini
      </h2>
      
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
        {bestSellers.map((product) => (
          <div 
            key={product.id} 
            onClick={() => onProductSelect(product)}
            className="group relative flex flex-col bg-white rounded-3xl shadow-lg overflow-hidden transition-transform hover:-translate-y-1 cursor-pointer"
          >
            {/* Image Section */}
            <div className="p-6 flex items-center justify-center bg-white h-48 relative">
              <img 
                src={product.image} 
                alt={product.name} 
                className={`max-h-full max-w-full object-contain mix-blend-multiply transition-transform group-hover:scale-110 ${parseInt(product.stock) === 0 ? 'grayscale opacity-50' : ''}`}
              />
              {parseInt(product.stock) === 0 && (
                <div className="absolute inset-0 flex items-center justify-center z-10">
                    <span className="bg-red-600 text-white px-4 py-1 font-bold text-sm transform -rotate-12 rounded shadow-lg uppercase tracking-wider">
                        SOLD OUT
                    </span>
                </div>
              )}
            </div>
            
            {/* Content Section */}
            <div className="flex-1 flex flex-col justify-end bg-gradient-to-b from-blue-50 to-white px-4 pb-4 pt-2">
                 <div className="mb-1">
                    <h3 className="font-bold text-gray-800 text-sm md:text-base leading-tight mb-1">{product.name}</h3>
                    <p className="text-[10px] text-gray-500 line-clamp-2 md:h-8 mb-2 leading-tight">
                        {product.description}
                    </p>
                 </div>
                 
                 <div className="mt-auto">
                    {product.originalPrice && (
                       <p className="text-xs text-gray-400 line-through mb-0.5">{product.originalPrice}</p>
                    )}
                    <div className="flex items-center justify-between">
                       <p className="text-sm md:text-base font-bold text-blue-600">{product.price}</p>
                       <div className="bg-blue-600 rounded-full p-1.5 shadow-md shadow-blue-200">
                          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4 text-white">
                            <path d="M10.75 4.75a.75.75 0 00-1.5 0v4.5h-4.5a.75.75 0 000 1.5h4.5v4.5a.75.75 0 001.5 0v-4.5h4.5a.75.75 0 000-1.5h-4.5v-4.5z" />
                          </svg>
                       </div>
                    </div>
                 </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BestSellers;
