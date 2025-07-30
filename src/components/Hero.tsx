// src/components/Hero.tsx
import React, { useState } from "react";
import HeroImage from "../assets/meng-hero.png"; // Simpan gambar di folder assets
import { FaCopy } from "react-icons/fa"; // Install react-icons: npm install react-icons

const Hero: React.FC = () => {
  const contractAddress = "SoL123abc...YourMengContractAddress...xyz789";
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(contractAddress);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000); // Reset status setelah 2 detik
  };

  return (
    <section
      id="home"
      className="flex flex-col items-center justify-center min-h-screen text-center p-4"
    >
      <div className="flex flex-box justify-between">
        <div className="flex flex-col">
          <h1 className="text-4xl md:text-6xl font-extrabold text-[#AF8F6F] max-w-4xl text-left">
            Meng: Kucing Tercepat di Solana!
          </h1>

          <p className="mt-4 text-lg md:text-xl max-w-2xl text-left">
            Lupakan anjing, saatnya kucing menguasai dunia kripto. $MENG hadir
            dengan kecepatan Solana dan kekuatan komunitas!
          </p>
        </div>
        <img
          src={HeroImage}
          alt="Meng The Cat"
          className="w-48 md:w-64 mb-6 animate-bounce"
        />
      </div>

      <div className="flex flex-wrap justify-center gap-4 mt-8">
        <a
          href="#howtobuy"
          className="bg-[#543310] text-white font-bold py-3 px-8 rounded-full hover:bg-[#744717] transition-colors duration-300 "
        >
          Buy $MENG Now
        </a>
        <a
          href="https://t.me/yourtelegramgroup"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-sky-500 text-white font-bold py-3 px-8 rounded-full hover:bg-sky-600 transition-colors duration-300"
        >
          Join Telegram
        </a>
      </div>

      <div className="mt-8 bg-white/60 p-3 rounded-full flex items-center shadow-md">
        <p className="text-sm md:text-base text-gray-600 font-mono break-all px-4">
          {contractAddress}
        </p>
        <button
          onClick={handleCopy}
          className="bg-[#AF8F6F] text-white p-3 rounded-full hover:bg-[#744717] transition-all"
        >
          {copied ? "Copied!" : <FaCopy />}
        </button>
      </div>
    </section>
  );
};

export default Hero;
