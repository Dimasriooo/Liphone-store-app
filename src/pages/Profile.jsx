import React from 'react';
import { UserCircleIcon } from '@heroicons/react/24/outline';

const Profile = () => {
  return (
    <div className="pt-28 pb-12 min-h-screen bg-gray-50">
      <div className="max-w-3xl mx-auto px-4">
          <div className="bg-white rounded-2xl shadow-sm p-8 flex flex-col items-center text-center">
             <UserCircleIcon className="h-32 w-32 text-gray-300 mb-4" />
             <h1 className="text-2xl font-bold text-gray-900">Guest User</h1>
             <p className="text-gray-500 mb-6">Anda belum login</p>
             
             <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full max-w-lg">
                 <button className="bg-blue-600 text-white py-3 rounded-xl font-semibold hover:bg-blue-700 transition">Login</button>
                 <button className="bg-white border border-gray-300 text-gray-700 py-3 rounded-xl font-semibold hover:bg-gray-50 transition">Register</button>
             </div>
             
             <div className="mt-8 pt-8 border-t border-gray-100 w-full text-left">
                 <h3 className="font-bold text-gray-800 mb-4">Menu Profile</h3>
                 <ul className="space-y-3 text-gray-600">
                     <li className="p-3 hover:bg-gray-50 rounded-lg cursor-pointer">Riwayat Transaksi</li>
                     <li className="p-3 hover:bg-gray-50 rounded-lg cursor-pointer">Alamat Tersimpan</li>
                     <li className="p-3 hover:bg-gray-50 rounded-lg cursor-pointer">Pengaturan Akun</li>
                     <li className="p-3 hover:bg-gray-50 rounded-lg cursor-pointer text-red-500">Bantuan</li>
                 </ul>
             </div>
          </div>
      </div>
    </div>
  );
};

export default Profile;
