// src/components/HowToBuy.tsx
import React from 'react';
import { FaWallet, FaExchangeAlt } from 'react-icons/fa'; // Menggunakan ikon ETH sebagai representasi kripto umum
import { SiSolana } from 'react-icons/si';

// Sub-komponen untuk setiap langkah
interface StepCardProps {
  step: number;
  icon: React.ReactNode;
  title: string;
  description: string;
}

const StepCard: React.FC<StepCardProps> = ({ step, icon, title, description }) => (
  <div className="relative pl-12">
    <div className="absolute left-0 top-0 flex items-center justify-center w-10 h-10 rounded-full bg-[#AF8F6F] text-white font-bold text-xl">
      {step}
    </div>
    <div className="ml-4">
      <div className="flex items-center mb-2">
        <span className="text-2xl text-[#543310] mr-3">{icon}</span>
        <h3 className="text-xl font-bold text-[#543310]">{title}</h3>
      </div>
      <p className="text-gray-600">{description}</p>
    </div>
  </div>
);


const HowToBuy: React.FC = () => {
  return (
    <section id="howtobuy" className="py-20 bg-[#F8F4E1]">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-[#543310] mb-12">
          Dapatkan $MENG dalam 4 Langkah!
        </h2>
        
        <div className="max-w-2xl mx-auto grid grid-cols-1 gap-10">
          <StepCard 
            step={1}
            icon={<FaWallet />}
            title="Siapkan Dompet Solana"
            description="Download dompet seperti Phantom atau Solflare dari App Store atau Google Play. Buat dompet baru dan amankan seed phrase Anda."
          />
          <StepCard 
            step={2}
            icon={<SiSolana />}
            title="Isi dengan SOL"
            description="Beli Solana (SOL) di bursa favoritmu (seperti Binance, Coinbase, atau Tokocrypto) lalu kirim ke alamat dompet Solana Anda."
          />
          <StepCard 
            step={3}
            icon={<FaExchangeAlt />}
            title="Buka Jupiter / Raydium"
            description="Buka browser di dalam dompet Anda, lalu kunjungi platform DEX seperti Jupiter (jup.ag) atau Raydium. Hubungkan dompet Anda."
          />
           <StepCard 
            step={4}
            icon={<img src="/favicon.ico" alt="Meng Icon" className="w-6 h-6"/>} // Ganti dengan logo Meng Anda
            title="Tukar SOL dengan $MENG"
            description="Tempelkan alamat kontrak $MENG, pilih jumlah SOL yang ingin ditukar, dan klik 'Swap'. Selamat datang di Pasukan Meng!"
          />
        </div>
      </div>
    </section>
  );
};

export default HowToBuy;