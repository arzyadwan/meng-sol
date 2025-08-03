// src/components/Footer.tsx
import React from 'react';
import { FaXTwitter } from "react-icons/fa6";
import { motion } from "framer-motion";

const Footer: React.FC = () => {
  return (
    <motion.div className="bg-[#543310] text-white py-12"
    initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: false }}
          >
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-3xl font-bold mb-4">
          Join the Meng Gang!
        </h2>
        <p className="mb-8 max-w-xl mx-auto">
          Don't miss out on the latest news, memes, and important announcements. Follow us and be part of the cat revolution!
        </p>
        <div className="flex justify-center gap-6 mb-10">
          <a href="https://twitter.com/YourMengCoin" target="_blank" rel="noopener noreferrer" className="text-4xl hover:text-sky-400 transition-colors">
            <FaXTwitter />
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
    </motion.div>
  );
};

export default Footer;