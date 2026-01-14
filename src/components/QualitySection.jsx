import React from 'react';

const QualitySection = () => {
  return (
    <section className="relative py-24 bg-gray-900 overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center opacity-60 mix-blend-overlay"
        style={{ backgroundImage: "url('/quality-bg.png')" }}
      ></div>
      
      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/80 to-blue-900/40"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
          Kualitas dan pengecekan <br/> secara profesional
        </h2>
        <p className="text-blue-200 text-lg max-w-2xl mx-auto mb-10">
          Setiap perangkat melalui 40+ titik pengecekan ketat oleh teknisi bersertifikat kami untuk memastikan kualitas terbaik.
        </p>
        
        <button className="inline-flex items-center px-8 py-3 border-2 border-white text-base font-medium rounded-full text-white hover:bg-white hover:text-gray-900 transition-colors duration-300">
          Pelajari Standar Kualitas Kami
        </button>
      </div>
    </section>
  );
};

export default QualitySection;
