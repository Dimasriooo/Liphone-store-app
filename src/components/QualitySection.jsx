import React from 'react';
import { StarIcon, GiftIcon, ShieldCheckIcon } from '@heroicons/react/24/outline';

const QualitySection = () => {
  const features = [
    {
      icon: <StarIcon className="w-8 h-8 text-gray-600" />,
      title: "Kondisi Terbaik",
      description: "Diuji oleh para ahli untuk berfungsi dengan sepenuhnya, seperti sedia kala"
    },
    {
      icon: <GiftIcon className="w-8 h-8 text-gray-600" />,
      title: "IMEI Permanen",
      description: "Kami berkomitmen IMEI akan selalu berlaku, jika sinyal hilang, Anda dapat menghubungi kami."
    },
    {
      icon: <ShieldCheckIcon className="w-8 h-8 text-gray-600" />,
      title: "Garansi 1 Tahun",
      description: "Tenang saja, karena kami menjamin perlindungan selama 12 bulan penuh."
    }
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-8 text-center">
          {features.map((feature, index) => (
            <div key={index} className="flex flex-col items-center p-6">
              <div className="w-16 h-16 bg-white rounded-full shadow-sm flex items-center justify-center mb-6">
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">{feature.title}</h3>
              <p className="text-gray-500 leading-relaxed max-w-xs">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default QualitySection;
