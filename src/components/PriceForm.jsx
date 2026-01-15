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

  // Data Models
  const modelsByBrand = {
      Apple: {
          "iPhone 16 Series": ["iPhone 16 Pro Max", "iPhone 16 Pro", "iPhone 16 Plus", "iPhone 16"],
          "iPhone 15 Series": ["iPhone 15 Pro Max", "iPhone 15 Pro", "iPhone 15 Plus", "iPhone 15"],
          "iPhone 14 Series": ["iPhone 14 Pro Max", "iPhone 14 Pro", "iPhone 14 Plus", "iPhone 14"],
          "iPhone 13 Series": ["iPhone 13 Pro Max", "iPhone 13 Pro", "iPhone 13", "iPhone 13 Mini"],
          "iPhone 12 Series": ["iPhone 12 Pro Max", "iPhone 12 Pro", "iPhone 12", "iPhone 12 Mini"],
          "iPhone 11 Series": ["iPhone 11 Pro Max", "iPhone 11 Pro", "iPhone 11"],
          "iPhone X/SE Series": ["iPhone XS Max", "iPhone XS", "iPhone XR", "iPhone X", "iPhone SE (2020/2022)"],
          "Older Models": ["iPhone 8 Plus", "iPhone 8", "iPhone 7 Plus", "iPhone 7"]
      }
      // Samsung: {
      //     "Galaxy S24 Series": ["Samsung S24 Ultra", "Samsung S24 Plus", "Samsung S24"],
      //     "Galaxy S23 Series": ["Samsung S23 Ultra", "Samsung S23 Plus", "Samsung S23", "Samsung S23 FE"],
      //     "Galaxy S22 Series": ["Samsung S22 Ultra", "Samsung S22 Plus", "Samsung S22"],
      //     "Galaxy Z Fold Series": ["Samsung Z Fold 6", "Samsung Z Fold 5", "Samsung Z Fold 4", "Samsung Z Fold 3"],
      //     "Galaxy Z Flip Series": ["Samsung Z Flip 6", "Samsung Z Flip 5", "Samsung Z Flip 4", "Samsung Z Flip 3"],
      //     "Galaxy S21 Series": ["Samsung S21 Ultra", "Samsung S21 Plus", "Samsung S21", "Samsung S21 FE"]
      // }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === 'brand') {
        // Reset model when brand changes
        setFormData(prev => ({ ...prev, brand: value, model: '' }));
    } else {
        setFormData(prev => ({ ...prev, [name]: value }));
    }
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
            <select name="brand" className="w-full p-3 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all" onChange={handleChange} value={formData.brand} required>
              <option value="">Pilih Brand</option>
              <option value="Apple">Apple</option>
              {/* <option value="Samsung">Samsung</option> */}
            </select>
          </div>
          <div className="space-y-1">
            <label className="text-xs font-semibold text-gray-600 uppercase tracking-wide">Model</label>
            <select 
                name="model" 
                className={`w-full p-3 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all ${!formData.brand && 'opacity-50 cursor-not-allowed'}`} 
                onChange={handleChange} 
                value={formData.model}
                disabled={!formData.brand}
                required
            >
              <option value="">{formData.brand ? "Pilih Model" : "Pilih Brand Dulu"}</option>
              {formData.brand && modelsByBrand[formData.brand] && Object.entries(modelsByBrand[formData.brand]).map(([series, models]) => (
                  <optgroup key={series} label={series}>
                      {models.map(model => (
                          <option key={model} value={model}>{model}</option>
                      ))}
                  </optgroup>
              ))}
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
              <option value="1TB">1TB</option>
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
