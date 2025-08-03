// src/components/HowToBuy.tsx
import React from "react";
import { FaWallet, FaExchangeAlt } from "react-icons/fa"; // Menggunakan ikon ETH sebagai representasi kripto umum
import { SiSolana } from "react-icons/si";
import mengpaw from "../assets/meng-paw.png";
import { motion } from "framer-motion";

// Sub-komponen untuk setiap langkah
interface StepCardProps {
  step: number;
  icon: React.ReactNode;
  title: string;
  description: string;
}

const StepCard: React.FC<StepCardProps> = ({
  step,
  icon,
  title,
  description,
}) => (
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
    <section id="howtobuy" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <motion.div className="text-4xl md:text-5xl font-bold text-center text-[#543310] mb-12"
        initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: false }}
          >
          Get $MENG in 4 Steps!
        </motion.div>

        <div className="max-w-2xl mx-auto grid grid-cols-1 gap-10">
          <motion.div className="border-4 border-[#543310] p-2 shadow-2xl rounded-2xl"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: false }}
          >
            <StepCard
              step={1}
              icon={<FaWallet />}
              title="Set up your Wallet"
              description="Download a wallet like Phantom or Solflare from the App Store or Google Play. Create a new wallet and secure your seed phrase."
            />
          </motion.div>
          <motion.div className="border-4 border-[#543310] p-2 shadow-2xl rounded-2xl"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: false }}
          >
            <StepCard
              step={2}
              icon={<SiSolana />}
              title="Fill With SOL"
              description="Buy Solana (SOL) on your favorite exchange (like Binance, Coinbase, or Tokocrypto) and send it to your Solana wallet address."
            />
          </motion.div>
          <motion.div className="border-4 border-[#543310] p-2 shadow-2xl rounded-2xl"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: false }}
          >
            <StepCard
              step={3}
              icon={<FaExchangeAlt />}
              title="Open Jupiter / Raydium"
              description="Open a browser within your wallet, then visit a DEX platform like Jupiter (jup.ag) or Raydium. Connect your wallet."
            />
          </motion.div>
          <motion.div className="border-4 border-[#543310] p-2 shadow-2xl rounded-2xl"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: false }}
          >
            <StepCard
              step={4}
              icon={
                <img src={mengpaw} alt="Meng Icon" className="w-7 h-auto" />
              } // Ganti dengan logo Meng Anda
              title="Exchange SOL for $MENG"
              description="Paste the $MENG contract address, select the amount of SOL you want to swap, and click 'Swap'. Welcome to the Meng Army!"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HowToBuy;
