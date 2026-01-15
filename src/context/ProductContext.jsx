import React, { createContext, useState, useEffect } from 'react';

export const ProductContext = createContext();

export const ProductProvider = ({ children }) => {
  // Initial Dummy Data
  const initialProducts = [
    { 
      id: 1, 
      name: "iPhone 13", 
      price: "Rp 8.249.000", 
      originalPrice: "Rp 10.299.000", 
      image: "/iphone 13.jpeg",
      description: "Ready stok iPhone 13 128GB Ex Inter, kondisi mulus 98%. Battery Health 90%+. Kelengkapan Fullset OEM. Garansi sinyal seumur hidup.",
      category: "BestSeller",
      stock: 12
    },
    { 
      id: 2, 
      name: "iPhone 15 Pro Max", 
      price: "Rp 20.999.000", 
      originalPrice: null, 
      image: "/15 pro max.jpeg",
      description: "iPhone 15 Pro Max 256GB Natural Titanium. Garansi Resmi iBox ON sampai 2025. Cycle Count rendah. Fullset Original.",
      category: "BestSeller",
      stock: 5
    },
    { 
      id: 3, 
      name: "iPhone 11", 
      price: "Rp 4.999.000", 
      originalPrice: "Rp 6.999.000", 
      image: "/iphone 11.jpeg",
      description: "Best Seller! iPhone 11 64GB kondisi like new. Face ID ON, True Tone ON. Cocok untuk daily driver pemula iOS.",
      category: "BestSeller",
      stock: 20
    },
    { 
      id: 4, 
      name: "iPhone 16 Pro", 
      price: "Rp 19.499.000", 
      originalPrice: null, 
      image: "/iphone 16 pro.jpeg",
      description: "New Arrival! iPhone 16 Pro Unit display like new. Fungsi 100% normal. Garansi toko 30 hari ganti unit.",
      category: "BestSeller",
      stock: 2
    },
    { 
      id: 5, 
      name: "iPhone XR", 
      price: "Rp 3.299.000", 
      originalPrice: null, 
      image: "/iphone xr.jpeg",
      description: "Pilihan hemat budget. iPhone XR 64GB All Operator. Mesin segel belum pernah bongkar. Bonus case dan tempered glass.",
      category: "BestSeller",
      stock: 8
    },
    { 
      id: 6, 
      name: "iPhone 12 Pro", 
      price: "Rp 8.500.000", 
      originalPrice: "Rp 10.000.000", 
      image: "/12 pro.jpeg",
      description: "Promo spesial Deals of The Day. Stok terbatas!",
      category: "DailyDeal",
      stock: 3
    },
    { 
      id: 7, 
      name: "iPhone 13 Pink", 
      price: "Rp 9.200.000", 
      originalPrice: "Rp 11.500.000", 
      image: "/13 pink.jpeg",
      description: "Warna langka! iPhone 13 Pink 128GB.",
      category: "DailyDeal",
      stock: 1
    },
    { 
      id: 8, 
      name: "iPhone 15 Pink", 
      price: "Rp 13.500.000", 
      originalPrice: "Rp 15.000.000", 
      image: "/iphone 15 pink.jpeg",
      description: "Series 15 warna pink soft, sangat estetik.",
      category: "DailyDeal",
      stock: 4
    },
    { 
      id: 9, 
      name: "iPhone 16", 
      price: "Rp 16.000.000", 
      originalPrice: "Rp 17.500.000", 
      image: "/iphone 16.jpeg",
      description: "iPhone 16 base model, performa kencang harga miring.",
      category: "DailyDeal",
      stock: 0
    },
    { 
      id: 10, 
      name: "iPhone 13 Blue", 
      price: "Rp 9.200.000", 
      originalPrice: "Rp 11.500.000", 
      image: "/13 blue.jpeg",
      description: "Varian warna Blue yang elegan.",
      category: "DailyDeal",
      stock: 6
    },
  ];

  const [products, setProducts] = useState(() => {
    const savedProducts = localStorage.getItem('liphone_products');
    return savedProducts ? JSON.parse(savedProducts) : initialProducts;
  });

  useEffect(() => {
    localStorage.setItem('liphone_products', JSON.stringify(products));
  }, [products]);

  const addProduct = (newProduct) => {
    setProducts([...products, { ...newProduct, id: Date.now() }]);
  };

  const updateProduct = (updatedProduct) => {
    setProducts(products.map(p => p.id === updatedProduct.id ? updatedProduct : p));
  };

  const deleteProduct = (id) => {
    setProducts(products.filter(p => p.id !== id));
  };
  
  // Helper to format IDR
  const formatRupiah = (number) => {
    return new Intl.NumberFormat('id-ID', {
      style: 'currency',
      currency: 'IDR',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(number);
  }

  return (
    <ProductContext.Provider value={{ products, addProduct, updateProduct, deleteProduct, formatRupiah }}>
      {children}
    </ProductContext.Provider>
  );
};
