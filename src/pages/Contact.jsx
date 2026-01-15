import React from 'react';
import { EnvelopeIcon, PhoneIcon, MapPinIcon, ClockIcon } from '@heroicons/react/24/outline';

const Contact = () => {
  return (
    <div className="pt-24 pb-16 min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Hubungi Kami</h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Punya pertanyaan seputar produk atau ingin konsultasi? Tim Liphone Store siap membantu Anda.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          
          {/* Left Column: Contact Info & Map */}
          <div className="space-y-8">
            {/* Contact Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 flex flex-col items-center text-center">
                <div className="w-12 h-12 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center mb-4">
                  <PhoneIcon className="h-6 w-6" />
                </div>
                <h3 className="font-bold text-gray-900 mb-1">WhatsApp</h3>
                <p className="text-gray-500 text-sm mb-3">Respon cepat 24/7</p>
                <a href="https://wa.me/6285776311877" target="_blank" rel="noreferrer" className="text-blue-600 font-semibold hover:underline">0857-7631-1877</a>
              </div>

              <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 flex flex-col items-center text-center">
                <div className="w-12 h-12 bg-orange-100 text-orange-600 rounded-full flex items-center justify-center mb-4">
                  <EnvelopeIcon className="h-6 w-6" />
                </div>
                <h3 className="font-bold text-gray-900 mb-1">Email</h3>
                <p className="text-gray-500 text-sm mb-3">Untuk kerjasama bisnis</p>
                <a href="mailto:Alifsyawal99@gmail.com" className="text-orange-600 font-semibold hover:underline">Alifsyawal99@gmail.com</a>
              </div>
            </div>

            {/* Store Location & Hours */}
            <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
               <div className="p-6 border-b border-gray-100">
                  <h3 className="font-bold text-lg text-gray-900 flex items-center gap-2 mb-4">
                    <MapPinIcon className="h-5 w-5 text-gray-500" />
                    Lokasi Toko
                  </h3>
                  <p className="text-gray-600 mb-4">
                    Jl. Poin Mas No.27, Mampang, Kec. Pancoran Mas, Kota Depok, Jawa Barat 16436
                  </p>
                  <div className="rounded-xl overflow-hidden h-48 bg-gray-200">
                    <iframe 
                      title="Lokasi Liphone Store"
                      src="https://maps.google.com/maps?q=Jl.%20Poin%20Mas%20No.27,%20Mampang,%20Kec.%20Pancoran%20Mas,%20Kota%20Depok,%20Jawa%20Barat%2016436&t=&z=15&ie=UTF8&iwloc=&output=embed"
                      width="100%" 
                      height="100%" 
                      style={{border:0}} 
                      allowFullScreen="" 
                      loading="lazy"
                    ></iframe>
                  </div>
               </div>
               <div className="p-6 bg-gray-50">
                  <h3 className="font-bold text-lg text-gray-900 flex items-center gap-2 mb-3">
                    <ClockIcon className="h-5 w-5 text-gray-500" />
                    Jam Operasional
                  </h3>
                  <ul className="space-y-2 text-sm text-gray-600">
                    <li className="flex justify-between"><span>Senin - Jumat</span> <span className="font-medium text-gray-900">10:00 - 21:00</span></li>
                    <li className="flex justify-between"><span>Sabtu</span> <span className="font-medium text-gray-900">10:00 - 22:00</span></li>
                    <li className="flex justify-between"><span>Minggu</span> <span className="font-medium text-gray-900">11:00 - 20:00</span></li>
                  </ul>
               </div>
            </div>
          </div>

          {/* Right Column: Message Form */}
          <div className="bg-white rounded-3xl shadow-lg p-8 border border-gray-100 h-fit">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Kirim Pesan</h2>
            <form className="space-y-6" onSubmit={(e) => {
              e.preventDefault();
              const name = e.target[0].value;
              const userEmail = e.target[1].value;
              const msg = e.target[2].value;
              const subject = `Pesan Baru dari Website Liphone: ${name}`;
              const body = `Nama: ${name}\nEmail: ${userEmail}\n\nPesan:\n${msg}`;
              window.open(`mailto:Alifsyawal99@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`);
            }}>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Nama Lengkap</label>
                <input type="text" required className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition" placeholder="Contoh: Budi Santoso" />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
                <input type="email" required className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition" placeholder="budi@example.com" />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Pesan / Pertanyaan</label>
                <textarea rows={4} required className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition" placeholder="Tulis pesan Anda di sini..."></textarea>
              </div>

              <button type="submit" className="w-full bg-blue-600 text-white font-bold py-4 rounded-xl shadow-lg shadow-blue-500/30 hover:bg-blue-700 transition transform hover:-translate-y-0.5">
                Kirim Pesan via Email
              </button>
            </form>
          </div>

        </div>

        {/* FAQ Section */}
        <div className="mt-20 max-w-3xl mx-auto">
          <h2 className="text-2xl font-bold text-center text-gray-900 mb-8">Sering Ditanyakan (FAQ)</h2>
          <div className="space-y-4">
            <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
               <details className="group">
                  <summary className="flex justify-between items-center font-medium cursor-pointer list-none p-6">
                     <span>Apakah handphone di Liphone Store bergaransi?</span>
                     <span className="transition group-open:rotate-180">
                        <svg fill="none" height="24" shapeRendering="geometricPrecision" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24"><path d="M6 9l6 6 6-6"></path></svg>
                     </span>
                  </summary>
                  <div className="text-gray-600 p-6 pt-0 animate-fadeIn">
                     Ya, semua unit handphone bekas kami bergaransi toko 7-30 hari (tergantung unit), meliputi garansi mesin dan sinyal. Kami juga menjamin keaslian sparepart 100% original.
                  </div>
               </details>
            </div>
            
            <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
               <details className="group">
                  <summary className="flex justify-between items-center font-medium cursor-pointer list-none p-6">
                     <span>Apakah bisa tukar tambah (Trade-in)?</span>
                     <span className="transition group-open:rotate-180">
                        <svg fill="none" height="24" shapeRendering="geometricPrecision" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24"><path d="M6 9l6 6 6-6"></path></svg>
                     </span>
                  </summary>
                  <div className="text-gray-600 p-6 pt-0 animate-fadeIn">
                     Tentu! Anda bisa menukar handphone lama Anda (khusus iPhone) dengan unit baru di toko kami. Silakan datang langsung ke toko untuk pengecekan fisik dan taksiran harga.
                  </div>
               </details>
            </div>

            <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
               <details className="group">
                  <summary className="flex justify-between items-center font-medium cursor-pointer list-none p-6">
                     <span>Bisa kirim ke luar kota?</span>
                     <span className="transition group-open:rotate-180">
                        <svg fill="none" height="24" shapeRendering="geometricPrecision" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24"><path d="M6 9l6 6 6-6"></path></svg>
                     </span>
                  </summary>
                  <div className="text-gray-600 p-6 pt-0 animate-fadeIn">
                     Bisa banget. Kami melayani pengiriman ke seluruh Indonesia menggunakan ekspedisi JNE/J&T dengan asuransi keamanan dan packing kayu gratis.
                  </div>
               </details>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Contact;
