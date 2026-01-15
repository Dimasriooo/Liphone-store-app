import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white pt-16 pb-8 border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          {/* Brand & Description */}
          <div className="md:col-span-1 space-y-6">
             <div className="flex items-center gap-2">
                <img src="/logo%20mitra.jpg" alt="Liphone Logo" className="h-16 w-auto rounded-lg object-contain" />
                <span className="font-bold text-2xl tracking-tight">Liphone</span>
             </div>
             <p className="text-gray-400 text-sm leading-relaxed">
               Liphone Store merupakan toko yang bergerak di bidang penjualan handphone dengan fokus pada produk iPhone. Toko ini memanfaatkan media sosial, 
               khususnya TikTok, sebagai sarana utama untuk menampilkan produk, memberikan informasi ketersediaan barang, dan menjangkau pelanggan secara digital.
               Melalui model penjualan berbasis online, Liphone Store memberikan kemudahan bagi konsumen dalam memperoleh informasi produk dan melakukan transaksi. 
               Pemanfaatan platform digital tersebut menunjukkan upaya Liphone Store dalam menyesuaikan diri dengan perkembangan teknologi dan kebutuhan pasar 
               smartphone yang terus berkembang.
             </p>
          </div>

          {/* Quick Links (Optional but good for layout) */}
          <div className="space-y-6">
            <h3 className="text-lg font-bold">Layanan Kami</h3>
            <ul className="space-y-3 text-gray-400 text-sm">
              <li><a href="#" className="hover:text-blue-400 transition-colors">Jual HP Bekas</a></li>
              <li><a href="#" className="hover:text-blue-400 transition-colors">Beli HP Berkualitas</a></li>
              <li><a href="#" className="hover:text-blue-400 transition-colors">Tukar Tambah</a></li>
              <li><a href="#" className="hover:text-blue-400 transition-colors">Garansi & Pengembalian</a></li>
            </ul>
          </div>

          {/* Social Media & Contact */}
          <div className="space-y-6">
            <h3 className="text-lg font-bold">Ikuti Kami</h3>
            <p className="text-gray-400 text-sm">Dapatkan info promo dan stok terbaru di sosial media kami.</p>
            <div className="flex gap-4">
              {/* Instagram */}
              <a href="https://www.instagram.com/liphone_store/" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-pink-600 transition-all group">
                <svg className="w-5 h-5 text-white group-hover:scale-110 transition-transform" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.468.93c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clipRule="evenodd" />
                </svg>
              </a>


              {/* TikTok */}
              <a href="https://www.tiktok.com/@liphone_store?_r=1&_t=ZS-934RPTVLvJl" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-black transition-all group border border-gray-700">
                <svg className="w-5 h-5 text-white group-hover:scale-110 transition-transform" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                   <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.65-1.62-1.03-.09 1 .1 5.3-.08 6.99-.36 2.33-1.69 4.5-3.65 5.86-2.11 1.4-4.7 1.67-6.98.78-4.04-1.57-5.99-6.43-3.6-10.23C4.24 8.79 6.9 7.78 9.3 9.07c.8.39 1.5 1.09 1.76 1.94-.48.24-.95.48-1.42.72-.25-.6-.73-1.07-1.35-1.25-1.21-.36-2.6.24-3.1 1.4-.41.97-.24 2.13.43 2.94.75.92 2.05 1.14 3.16.82 1.25-.37 2.1-1.57 2.13-2.88V.02z"/>
                </svg>
              </a>

              {/* WhatsApp */}
              <a href="https://whatsapp.com/channel/0029VaaMryf7Noa2YKyo8K3Y" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-green-600 transition-all group">
                <svg className="w-5 h-5 text-white group-hover:scale-110 transition-transform" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path fillRule="evenodd" d="M12 2C6.48 2 2 6.48 2 12c0 1.83.49 3.55 1.34 5.05L2.3 22l5.12-1.06c1.44.8 3.07 1.25 4.8.84 5.17-1.16 8.52-6.44 7.28-11.66C18.66 4.97 15.54 2 12 2zm-1.02 16.59l-.4-.23c-2.39-1.4-3.92-3.94-3.95-6.68-.02-1.92.74-3.73 2.12-5.04l.7-.68c.04-.04.09-.05.14-.02l2.36 1.17c.05.02.06.08.03.12l-1.05 1.48c-.03.04-.02.1.02.13.84.71 1.82 1.24 2.9 1.55.05.01.1-.01.12-.06l.57-1.52c.02-.05.08-.07.13-.04l2.42.92c.05.02.07.07.05.12l-1.12 3c-.22.58-.78.96-1.4.94-1.24-.04-2.43-.5-3.64-1.16z" clipRule="evenodd"/>
                   <path d="M12.012 2c-5.506 0-9.989 4.478-9.994 9.985a9.957 9.957 0 001.57 5.289l-1.542 4.633 4.887-1.275a9.96 9.96 0 005.079 1.378h.004c5.503 0 9.985-4.482 9.99-9.99.006-5.522-4.476-9.998-9.994-10.02zm0 18.238h-.003a8.219 8.219 0 01-4.195-1.139l-.302-.178-3.116.813.834-3.033-.195-.312a8.27 8.27 0 01-1.266-4.407c.004-4.551 3.708-8.254 8.261-8.254 4.549 0 8.246 3.696 8.251 8.238.005 4.546-3.694 8.246-8.27 8.273zm4.523-6.19c-.247-.123-1.465-.723-1.691-.805-.227-.083-.392-.124-.557.123-.165.247-.639.804-.783.969-.145.165-.289.185-.536.062-1.258-.621-2.203-1.418-2.929-2.709-.281-.5-.03-.77.206-1.028l.42-.58c.113-.153.21-.32.067-.584-.046-.15-.412-.99-.564-1.353-.149-.356-.302-.303-.414-.308l-.351-.005c-.124 0-.33.047-.505.237-.175.19-1.745 1.579-1.745 3.336 0 2.223 2.053 4.908 2.768 5.485.482.389 2.378 1.956 5.445 2.502.51.09.851.077 1.119.015.395-.091 1.465-.6 1.671-1.18.206-.58.206-1.076.145-1.18-.062-.103-.227-.165-.475-.289z"/>
                </svg>
              </a>

              {/* Google Maps / Location */}
              <a href="https://maps.app.goo.gl/G2Cb1nexJNk551ez9" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-red-600 transition-all group">
                 <svg className="w-5 h-5 text-white group-hover:scale-110 transition-transform" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                   <path fillRule="evenodd" d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" clipRule="evenodd" />
                 </svg>
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 text-center text-gray-500 text-sm">
          <p>&copy; 2026 Liphone Store. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
