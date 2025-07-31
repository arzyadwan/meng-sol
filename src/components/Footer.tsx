// src/components/Footer.tsx
import React from 'react';
import { FaTwitter, FaTelegramPlane } from 'react-icons/fa';

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#543310] text-white py-12">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-3xl font-bold mb-4">
          Join the Meng Gang!
        </h2>
        <p className="mb-8 max-w-xl mx-auto">
          Don't miss out on the latest news, memes, and important announcements. Follow us and be part of the cat revolution!
        </p>
        <div className="flex justify-center gap-6 mb-10">
          <a href="https://twitter.com/YourMengCoin" target="_blank" rel="noopener noreferrer" className="text-4xl hover:text-sky-400 transition-colors">
            <FaTwitter />
          </a>
          <a href="https://t.me/yourtelegramgroup" target="_blank" rel="noopener noreferrer" className="text-4xl hover:text-blue-500 transition-colors">
            <FaTelegramPlane />
          </a>
        </div>
        
        <div className="border-t border-white/20 pt-6">
          <p className="text-sm text-white/70">
            $MENG is a memecoin for entertainment and has no intrinsic value. Invest only what you can afford to lose.
          </p>
          <p className="text-sm mt-2">
            © {new Date().getFullYear()} Meng Coin. All rights reserved by the Meng Gang.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;