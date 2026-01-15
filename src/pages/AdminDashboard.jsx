import React, { useContext, useState } from 'react';
import { Navigate } from 'react-router-dom';
import { ProductContext } from '../context/ProductContext';

const AdminDashboard = ({ isAdmin, onLogout }) => {
  const { products, addProduct, updateProduct, deleteProduct } = useContext(ProductContext);
  const [showAddForm, setShowAddForm] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [newProduct, setNewProduct] = useState({
      id: null, name: '', price: '', stock: 0, category: 'BestSeller', image: '/logo mitra.jpg', description: ''
  });

  if (!isAdmin) {
    return <Navigate to="/login" replace />;
  }

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      if (file.size > 500000) { // Limit 500kb needed for LocalStorage safety
         alert("Ukuran file terlalu besar! Harap pilih gambar di bawah 500KB agar browser tidak berat.");
         return;
      }
      
      const reader = new FileReader();
      reader.onloadend = () => {
        setNewProduct({ ...newProduct, image: reader.result });
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = (e) => {
      e.preventDefault();
      
      const productData = {
          ...newProduct,
          price: newProduct.price.toString().startsWith('Rp') ? newProduct.price : `Rp ${newProduct.price}`, 
          stock: newProduct.stock,
          category: newProduct.category,
          status: parseInt(newProduct.stock) > 0 ? 'Available' : 'Out of Stock',
          image: newProduct.image,
          description: newProduct.description
      };

      if (isEditing) {
          updateProduct(productData);
          alert("Produk berhasil diperbarui!");
      } else {
          addProduct(productData);
          alert("Produk berhasil ditambahkan!");
      }

      resetForm();
  };

  const handleEdit = (product) => {
      setNewProduct(product);
      setIsEditing(true);
      setShowAddForm(true);
      window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const resetForm = () => {
      setShowAddForm(false);
      setIsEditing(false);
      setNewProduct({ id: null, name: '', price: '', stock: 0, category: 'BestSeller', image: '/logo mitra.jpg', description: '' });
  };

  return (
    <div className="min-h-screen bg-gray-100 pt-24 pb-12 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4">
            <div>
                <h1 className="text-3xl font-bold text-gray-900">Admin Dashboard</h1>
                <p className="text-gray-600">Selamat datang kembali, Admin.</p>
            </div>
            <div className="flex gap-4 w-full md:w-auto">
                <button 
                  onClick={() => {
                      if(showAddForm && !isEditing) resetForm();
                      else if (isEditing) resetForm();
                      else setShowAddForm(true);
                  }}
                  className={`flex-1 md:flex-none text-center ${isEditing ? 'bg-yellow-500 hover:bg-yellow-600' : 'bg-green-600 hover:bg-green-700'} text-white px-6 py-2 rounded-lg transition`}
                >
                  {showAddForm ? (isEditing ? 'Batal Edit' : 'Tutup Form') : '+ Tambah Produk'}
                </button>
                <button 
                    onClick={onLogout} 
                    className="flex-1 md:flex-none bg-red-600 text-white px-6 py-2 rounded-lg hover:bg-red-700 transition"
                >
                    Logout
                </button>
            </div>
        </div>

        {/* Add/Edit Product Form */}
        {showAddForm && (
            <div className="bg-white p-6 rounded-xl shadow-lg mb-8 animate-fadeIn border-l-4 border-blue-500">
                <h3 className="font-bold text-lg mb-4">{isEditing ? 'Edit Produk' : 'Tambah Produk Baru'}</h3>
                <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <input 
                        type="text" placeholder="Nama Produk" required
                        className="border p-2 rounded"
                        value={newProduct.name}
                        onChange={e => setNewProduct({...newProduct, name: e.target.value})} 
                    />
                    <input 
                        type="text" placeholder="Harga (Contoh: 1000000 atau Rp 1.000.000)" required
                        className="border p-2 rounded"
                        value={newProduct.price}
                        onChange={e => setNewProduct({...newProduct, price: e.target.value})} 
                    />
                    <input 
                        type="number" placeholder="Stok" required
                        className="border p-2 rounded"
                        value={newProduct.stock}
                        onChange={e => setNewProduct({...newProduct, stock: e.target.value})} 
                    />
                    <select 
                        className="border p-2 rounded"
                        value={newProduct.category}
                        onChange={e => setNewProduct({...newProduct, category: e.target.value})} 
                    >
                        <option value="BestSeller">Kategori: Best Seller</option>
                        <option value="DailyDeal">Kategori: Daily Deal</option>
                    </select>

                    <div className="col-span-1 md:col-span-2">
                        <textarea 
                            placeholder="Deskripsi Produk (Spesifikasi, Kondisi, dll)"
                            className="border p-2 rounded w-full h-24"
                            value={newProduct.description}
                            onChange={e => setNewProduct({...newProduct, description: e.target.value})}
                        ></textarea>
                    </div>
                    
                    {/* Image Upload Input */}
                    <div className="col-span-1 md:col-span-2">
                        <label className="block text-sm font-medium text-gray-700 mb-1">Upload Gambar Produk</label>
                        <div className="flex gap-4 items-center">
                            <input 
                                type="file" 
                                accepts="image/*"
                                className="block w-full text-sm text-gray-500
                                  file:mr-4 file:py-2 file:px-4
                                  file:rounded-full file:border-0
                                  file:text-sm file:font-semibold
                                  file:bg-blue-50 file:text-blue-700
                                  hover:file:bg-blue-100
                                "
                                onChange={handleImageUpload}
                            />
                            {newProduct.image && (
                                <div className="w-16 h-16 bg-gray-100 rounded-lg overflow-hidden border shrink-0">
                                    <img src={newProduct.image} alt="Preview" className="w-full h-full object-cover" />
                                </div>
                            )}
                        </div>
                        <p className="text-xs text-gray-400 mt-1">*Maksimal 500KB agar performa browser tetap cepat.</p>
                    </div>

                    <button type="submit" className={`col-span-1 md:col-span-2 ${isEditing ? 'bg-yellow-500 hover:bg-yellow-600' : 'bg-blue-600 hover:bg-blue-700'} text-white py-2 rounded font-bold`}>
                        {isEditing ? 'Simpan Perubahan' : 'Simpan Produk'}
                    </button>
                </form>
            </div>
        )}

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
                <h3 className="text-gray-500 text-sm font-medium">Total Produk</h3>
                <p className="text-3xl font-bold text-gray-900 mt-2">142 Unit</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
                <h3 className="text-gray-500 text-sm font-medium">Total Penjualan (Bulan Ini)</h3>
                <p className="text-3xl font-bold text-blue-600 mt-2">Rp 485.2jt</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
                <h3 className="text-gray-500 text-sm font-medium">Pesanan Baru</h3>
                <p className="text-3xl font-bold text-orange-500 mt-2">12 Pending</p>
            </div>
        </div>

        {/* Inventory Table (Desktop) */}
        <div className="hidden md:block bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
            <div className="px-6 py-4 border-b border-gray-200 flex justify-between items-center">
                <h3 className="font-bold text-gray-800">Stok Barang</h3>
                <button className="text-blue-600 text-sm hover:underline">Lihat Semua</button>
            </div>
            <div className="overflow-x-auto">
                <table className="w-full text-left">
                    <thead className="bg-gray-50 text-gray-600 text-sm uppercase">
                        <tr>
                            <th className="px-6 py-3">Nama Produk</th>
                            <th className="px-6 py-3">Harga</th>
                            <th className="px-6 py-3">Stok</th>
                            <th className="px-6 py-3">Status</th>
                            <th className="px-6 py-3">Aksi</th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-200">
                        {products.map((item) => (
                            <tr key={item.id} className="hover:bg-gray-50">
                                <td className="px-6 py-4 font-medium text-gray-900 flex items-center gap-3">
                                    <img src={item.image} alt="" className="w-8 h-8 rounded-full object-cover bg-gray-100" />
                                    {item.name}
                                </td>
                                <td className="px-6 py-4 text-gray-600">{item.price}</td>
                                <td className="px-6 py-4 text-gray-600">{item.stock || 5}</td>
                                <td className="px-6 py-4">
                                    <span className={`px-2 py-1 text-xs font-semibold rounded-full ${item.category === 'BestSeller' ? 'bg-blue-100 text-blue-800' : 'bg-yellow-100 text-yellow-800'}`}>
                                        {item.category}
                                    </span>
                                </td>
                                <td className="px-6 py-4">
                                    <button onClick={() => handleEdit(item)} className="text-blue-600 hover:text-blue-800 text-sm font-medium mr-3">Edit</button>
                                    <button onClick={() => deleteProduct(item.id)} className="text-red-600 hover:text-red-800 text-sm font-bold bg-red-50 px-3 py-1 rounded-lg hover:bg-red-100 transition">Hapus</button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>

        {/* Inventory List (Mobile Card View) */}
        <div className="grid grid-cols-1 gap-4 md:hidden">
            <h3 className="font-bold text-gray-800 mb-2">Stok Barang</h3>
            {products.map((item) => (
                <div key={item.id} className="bg-white p-4 rounded-xl shadow-sm border border-gray-200">
                    <div className="flex items-center gap-4 mb-4">
                        <img src={item.image} alt="" className="w-16 h-16 rounded-lg object-cover bg-gray-100" />
                        <div>
                            <h4 className="font-bold text-gray-900">{item.name}</h4>
                            <span className={`inline-block mt-1 px-2 py-0.5 text-xs font-semibold rounded-full ${item.category === 'BestSeller' ? 'bg-blue-100 text-blue-800' : 'bg-yellow-100 text-yellow-800'}`}>
                                {item.category}
                            </span>
                        </div>
                    </div>
                    
                    <div className="space-y-2 text-sm text-gray-600 mb-4 border-t border-b border-gray-100 py-3">
                        <div className="flex justify-between">
                            <span>Harga:</span>
                            <span className="font-semibold text-gray-900">{item.price}</span>
                        </div>
                        <div className="flex justify-between">
                            <span>Stok:</span>
                            <span className="font-medium text-gray-900">{item.stock || 0} Unit</span>
                        </div>
                        <div className="flex justify-between">
                            <span>Status:</span>
                            <span className={item.stock > 0 ? "text-green-600" : "text-red-600"}>
                                {item.stock > 0 ? "Available" : "Out of Stock"}
                            </span>
                        </div>
                    </div>

                    <div className="flex gap-2">
                        <button onClick={() => handleEdit(item)} className="flex-1 bg-blue-50 text-blue-600 py-2.5 rounded-lg font-medium hover:bg-blue-100 transition">Edit</button>
                        <button onClick={() => deleteProduct(item.id)} className="flex-1 bg-red-50 text-red-600 py-2.5 rounded-lg font-medium hover:bg-red-100 transition">Hapus</button>
                    </div>
                </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
