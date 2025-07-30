// src/components/Tokenomics.tsx
import React from 'react';

const Tokenomics: React.FC = () => {
  return (
    <section id="tokenomics" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-[#543310] mb-12">
          Meng-onomics
        </h2>
        
        <div className="flex flex-col md:flex-row items-center justify-center gap-12">
          
          {/* Visual Pie Chart Sederhana */}
          <div className="w-64 h-64 relative flex items-center justify-center">
            {/* Ini hanya representasi visual, bisa diganti dengan library chart seperti Recharts */}
            <div className="absolute top-0 left-0 w-full h-full rounded-full bg-[#AF8F6F]"></div>
            <div 
              className="absolute top-0 left-0 w-full h-full rounded-full" 
              style={{ clipPath: 'polygon(50% 50%, 50% 0%, 100% 0%, 100% 10%, 50% 50%)' }} // 10% slice
            >
              <div className="w-full h-full rounded-full bg-[#E4D4C8]"></div>
            </div>
            <div className="z-10 bg-white w-40 h-40 rounded-full flex flex-col items-center justify-center shadow-inner">
               <span className="text-2xl font-bold text-[#543310]">1 Miliar</span>
               <span className="text-sm text-gray-600">Total Supply</span>
            </div>
          </div>

          {/* Detail Token */}
          <div className="max-w-md">
            <ul className="text-lg space-y-4">
              <li className="flex items-center">
                <span className="w-4 h-4 rounded-full bg-[#AF8F6F] mr-3"></span>
                <strong>90% Liquidity Pool:</strong> Dimasukkan ke LP & dikunci.
              </li>
              <li className="flex items-center">
                <span className="w-4 h-4 rounded-full bg-[#E4D4C8] mr-3"></span>
                <strong>10% Marketing & CEX:</strong> Untuk pertumbuhan ekosistem.
              </li>
              <li className="mt-6 border-t pt-4">
                <p className="font-bold text-xl text-green-600">Pajak Transaksi: 0% Beli / 0% Jual</p>
                <p className="text-sm text-gray-500">Trading bebas hambatan untuk semua 'Pasukan Meng'!</p>
              </li>
            </ul>
          </div>
          
        </div>
      </div>
    </section>
  );
};

export default Tokenomics;