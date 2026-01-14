import React, { useState } from 'react';

const PriceForm = ({ onSubmit }) => {
  const [formData, setFormData] = useState({
    brand: '',
    model: '',
    storage: '',
    warranty: '',
    name: '',
    phone: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData);
  };

  return (
    <div className="bg-white rounded-3xl shadow-2xl p-8 w-full max-w-lg mx-auto transform transition-all hover:scale-[1.01]">
      <div className="mb-6">
        <h3 className="text-xl font-bold text-gray-800">Cek Harga HP Kamu</h3>
        <p className="text-gray-500 text-sm">Dapatkan penawaran terbaik dalam 1 menit</p>
      </div>
      
      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="grid grid-cols-2 gap-4">
          <div className="space-y-1">
            <label className="text-xs font-semibold text-gray-600 uppercase tracking-wide">Brand</label>
            <select name="brand" className="w-full p-3 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all" onChange={handleChange} required>
              <option value="">Pilih Brand</option>
              <option value="Apple">Apple</option>
              <option value="Samsung">Samsung</option>
              <option value="Xiaomi">Xiaomi</option>
            </select>
          </div>
          <div className="space-y-1">
            <label className="text-xs font-semibold text-gray-600 uppercase tracking-wide">Model</label>
            <select name="model" className="w-full p-3 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all" onChange={handleChange} required>
              <option value="">Pilih Model</option>
              <option value="iPhone 13 Pro">iPhone 13 Pro</option>
              <option value="iPhone 14">iPhone 14</option>
              <option value="S23 Ultra">S23 Ultra</option>
            </select>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div className="space-y-1">
             <label className="text-xs font-semibold text-gray-600 uppercase tracking-wide">Storage</label>
            <select name="storage" className="w-full p-3 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all" onChange={handleChange} required>
              <option value="">Penyimpanan</option>
              <option value="128GB">128GB</option>
              <option value="256GB">256GB</option>
              <option value="512GB">512GB</option>
            </select>
          </div>
          <div className="space-y-1">
             <label className="text-xs font-semibold text-gray-600 uppercase tracking-wide">Garansi</label>
            <select name="warranty" className="w-full p-3 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all" onChange={handleChange} required>
              <option value="">Jenis Garansi</option>
              <option value="Resmi">Resmi Indonesia</option>
              <option value="Internasional">Internasional</option>
              <option value="Habis">Sudah Habis</option>
            </select>
          </div>
        </div>

        <div className="space-y-1">
          <label className="text-xs font-semibold text-gray-600 uppercase tracking-wide">Nama Lengkap</label>
          <input 
            type="text" 
            name="name"
            className="w-full p-3 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all placeholder-gray-400"
            placeholder="Masukkan nama anda"
            onChange={handleChange}
            required
          />
        </div>

        <div className="space-y-1">
           <label className="text-xs font-semibold text-gray-600 uppercase tracking-wide">Nomor WhatsApp</label>
           <div className="flex">
             <span className="inline-flex items-center px-4 rounded-l-xl border border-r-0 border-gray-200 bg-gray-100 text-gray-500 font-semibold">
               +62
             </span>
             <input 
               type="tel" 
               name="phone"
               className="w-full p-3 bg-gray-50 border border-gray-200 rounded-r-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all placeholder-gray-400"
               placeholder="812-3456-7890"
               onChange={handleChange}
               required
             />
           </div>
        </div>

        <button 
          type="submit" 
          className="w-full bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white font-bold py-4 rounded-xl shadow-lg shadow-orange-500/30 transition-all transform hover:-translate-y-1 mt-2"
        >
          Cek Harga Sekarang
        </button>
      </form>
    </div>
  );
};

export default PriceForm;
