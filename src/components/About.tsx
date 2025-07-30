// src/components/About.tsx
import React from 'react';
import MengPlaying from '../assets/meng-playing.png'; // Siapkan gambar Meng yang sedang bermain

const About: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-6 flex flex-col md:flex-row items-center gap-12">
        
        {/* Kolom Gambar */}
        <div className="md:w-1/3 flex justify-center animate-pulse-slow">
          <img src={MengPlaying} alt="Meng the cat playing" className="w-64 h-64 object-cover rounded-full shadow-lg" />
        </div>

        {/* Kolom Teks */}
        <div className="md:w-2/3 text-center md:text-left">
          <h2 className="text-3xl md:text-4xl font-bold text-[#543310] mb-4">
            Siapakah Meng?
          </h2>
          <p className="text-lg text-gray-700 leading-relaxed">
            Meng bukanlah kucing biasa. Dia adalah seekor kucing oren yang bosan dengan transaksi lambat dan biaya mahal. Suatu hari, saat sedang mengejar benang wol digital, ia tersandung ke dalam blockchain Solana.
          </p>
          <p className="mt-4 text-lg text-gray-700 leading-relaxed">
            Di sini, ia menemukan surga: transaksi secepat kilat dan biaya serendah debu. Meng memutuskan untuk tinggal dan menciptakan koinnya sendiri, <span className="font-bold text-[#AF8F6F]">$MENG</span>, untuk dibagikan kepada semua teman-temannya di seluruh dunia. Misinya sederhana: membawa kebahagiaan, meme, dan keuntungan bagi semua yang bergabung dengan 'Pasukan Meng'!
          </p>
        </div>

      </div>
    </section>
  );
};

export default About;