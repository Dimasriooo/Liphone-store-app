import React, { useState } from 'react';
import { MagnifyingGlassIcon, UserIcon, XMarkIcon } from '@heroicons/react/24/outline';
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
  const location = useLocation();
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  const isActive = (path) => location.pathname === path ? 'text-blue-600 font-bold' : 'text-gray-500 hover:text-blue-600';

  const handleSearch = (e) => {
    e.preventDefault();
    if(searchQuery.trim()) {
        alert(`Mencari: "${searchQuery}"\nFitur pencarian lengkap akan segera hadir!`);
        setIsSearchOpen(false);
        setSearchQuery('');
    }
  }

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link to="/" className="flex-shrink-0 flex items-center gap-2 cursor-pointer">
            <img src="/logo%20mitra.jpg" alt="Logo" className="h-12 w-auto object-contain rounded-md" />
            <span className="font-bold text-2xl text-gray-800 tracking-tight">Liphone</span>
          </Link>

          {/* Menu */}
          <div className="hidden md:flex space-x-8">
            <Link to="/" className={`${isActive('/')} transition-colors`}>Home</Link>
            <Link to="/jual-hp" className={`${isActive('/jual-hp')} transition-colors`}>Jual HP</Link>
            <Link to="/beli-hp" className={`${isActive('/beli-hp')} transition-colors`}>Beli HP</Link>
            <Link to="/aksesoris" className={`${isActive('/aksesoris')} transition-colors`}>Beli Aksesoris</Link>
            <Link to="/contact" className={`${isActive('/contact')} transition-colors`}>Hubungi Kami</Link>
          </div>

          {/* Icons */}
          <div className="flex items-center space-x-4">
            {/* Search Bar Input (visible when toggled) */}
            <div className={`transition-all duration-300 ease-in-out ${isSearchOpen ? 'w-64 opacity-100' : 'w-0 opacity-0 overflow-hidden'}`}>
                <form onSubmit={handleSearch} className="relative">
                    <input 
                        type="text" 
                        placeholder="Cari iPhone..." 
                        className="w-full bg-gray-100 rounded-full py-1.5 px-4 pr-8 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                    />
                    <button type="button" onClick={() => setIsSearchOpen(false)} className="absolute right-2 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600">
                        <XMarkIcon className="h-4 w-4" />
                    </button>
                </form>
            </div>

            <button onClick={() => !isSearchOpen && setIsSearchOpen(true)} className="text-gray-400 hover:text-blue-600 transition-colors">
              <MagnifyingGlassIcon className="h-6 w-6" />
            </button>
            
            <Link to="/profile" className="text-gray-400 hover:text-blue-600 transition-colors">
              <UserIcon className="h-6 w-6" />
            </Link>
            {/* Cart Icon Removed as requested */}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
