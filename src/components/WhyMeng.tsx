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
          Why Join Meng's Squad?
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <FeatureCard 
            icon={<FaCat />}
            title="The Power of Cat Memes"
            description="Cats rule the internet. $MENG is the king of all cat memes, ready to go viral and be loved by everyone."
          />
          <FeatureCard 
            icon={<FaRocket />}
            title="Fast & Cheap on Solana"
            description="Built on Solana, $MENG transactions are as fast as Meng chasing a laser and the fees are incredibly low. "
          />
          <FeatureCard 
            icon={<FaLock />}
            title="Safe & Trusted"
            description="Liquidity is locked (LP Locked) and the contract is released (Renounced). Sleep soundly like Meng, without worrying about 'rug pulls'."
          />
        </div>
      </div>
    </section>
  );
};

export default WhyMeng;