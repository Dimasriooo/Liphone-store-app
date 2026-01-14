import React from 'react';
import { XMarkIcon } from '@heroicons/react/24/outline';
import { ChatBubbleLeftRightIcon } from '@heroicons/react/24/solid';

const ProductModal = ({ product, onClose }) => {
  if (!product) return null;

  const whatsappNumber = "6285776311877"; // Replace with actual number
  const message = `Halo Liphone, saya minat dengan ${product.name} (Rp ${product.price})`;
  const whatsappLink = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-black/60 backdrop-blur-sm transition-opacity"
        onClick={onClose}
      ></div>

      {/* Modal Content */}
      <div className="relative bg-white rounded-3xl shadow-2xl w-full max-w-2xl overflow-hidden flex flex-col md:flex-row animate-scale-up">
        <button 
          onClick={onClose}
          className="absolute top-4 right-4 z-10 p-2 bg-black/10 hover:bg-black/20 rounded-full transition-colors"
        >
          <XMarkIcon className="h-6 w-6 text-gray-700" />
        </button>

        {/* Image Section */}
        <div className="w-full md:w-1/2 bg-gray-50 flex items-center justify-center p-8">
          <img 
            src={product.image} 
            alt={product.name} 
            className="max-h-64 object-contain mix-blend-multiply"
          />
        </div>

        {/* Details Section */}
        <div className="w-full md:w-1/2 p-8 flex flex-col">
          <div className="mb-auto">
             <h3 className="text-2xl font-bold text-gray-900 mb-2">{product.name}</h3>
             <div className="text-3xl font-extrabold text-blue-600 mb-4">{product.price}</div>
             
             <div className="bg-blue-50 border border-blue-100 rounded-xl p-4 mb-6">
               <h4 className="text-xs font-bold text-blue-800 uppercase tracking-wide mb-2">Deskripsi Produk</h4>
               <p className="text-sm text-gray-700 leading-relaxed">
                 {product.description || "Unit original, kondisi fisik mulus 95-98%. Fungsi normal 100%. Kelengkapan fullset oem. Garansi personal 7 hari."}
               </p>
             </div>
          </div>

          <a 
            href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full bg-[#25D366] hover:bg-[#128C7E] text-white font-bold py-3.5 rounded-xl shadow-lg shadow-green-500/20 transition-all flex items-center justify-center gap-2 group"
          >
            <ChatBubbleLeftRightIcon className="h-6 w-6 group-hover:scale-110 transition-transform" />
            Beli via WhatsApp
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProductModal;
