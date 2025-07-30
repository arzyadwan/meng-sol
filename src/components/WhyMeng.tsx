// src/components/WhyMeng.tsx
import React from 'react';
// Pastikan Anda sudah install react-icons: npm install react-icons
import { FaCat, FaRocket, FaLock } from 'react-icons/fa';

// Sub-komponen untuk setiap kartu fitur agar kode lebih bersih
interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const FeatureCard: React.FC<FeatureCardProps> = ({ icon, title, description }) => (
  <div className="bg-white rounded-lg shadow-xl p-8 text-center transform hover:scale-105 transition-transform duration-300">
    <div className="flex justify-center items-center mb-4 text-5xl text-[#AF8F6F]">
      {icon}
    </div>
    <h3 className="text-2xl font-bold text-[#543310] mb-2">{title}</h3>
    <p className="text-gray-600">{description}</p>
  </div>
);

const WhyMeng: React.FC = () => {
  return (
    <section id="why" className="py-20 bg-[#F8F4E1]"> {/* Warna background utama */}
      <div className="container mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-[#543310] mb-12">
          Mengapa Bergabung dengan Pasukan Meng?
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <FeatureCard 
            icon={<FaCat />}
            title="Kekuatan Meme Kucing"
            description="Kucing menguasai internet. $MENG adalah raja dari semua meme kucing, siap menjadi viral dan dicintai semua orang."
          />
          <FeatureCard 
            icon={<FaRocket />}
            title="Cepat & Murah di Solana"
            description="Dibangun di atas Solana, transaksi $MENG secepat Meng mengejar laser dan biayanya sangat murah."
          />
          <FeatureCard 
            icon={<FaLock />}
            title="Aman & Terpercaya"
            description="Likuiditas dikunci (LP Locked) dan kontrak dilepaskan (Renounced). Tidur nyenyak seperti Meng, tanpa khawatir 'rug pull'."
          />
        </div>
      </div>
    </section>
  );
};

export default WhyMeng;