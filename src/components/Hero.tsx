// src/components/Hero.tsx
import React, { useState } from "react";
import { FaCopy } from "react-icons/fa";
import { motion } from "framer-motion";

// NEW: Helper function to truncate the address for display
const truncateAddress = (address: string, chars = 4): string => {
  if (address.length <= chars * 2) {
    return address;
  }
  const start = address.substring(0, chars);
  const end = address.substring(address.length - chars);
  return `${start}...${end}`;
};


const Hero: React.FC = () => {
  const contractAddress = "SoL123abc...YourMengContractAddress...xyz789";
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(contractAddress);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000); // Reset after 2 seconds
  };

  return (
    <section
      id="home"
      // CHANGE: Using min-height and responsive padding for flexibility
      className="flex flex-col justify-center items-center text-center p-4 min-h-[40vh] md:min-h-[100vh] overflow-hidden relative"
    >
      <motion.div
        className="flex flex-col items-center md:gap-2 w-full max-w-lg " // CHANGE: Added max-width
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: false }} // Set to true for animation to run once
      >
        {/* CHANGE: Responsive text size and fixed typo */}
        <h1 className="mt-50 md:mt-100 text-2xl md:text-3xl text-white font-bold text-shadow-md text-shadow-black">
          Contract Address
        </h1>

        {/* --- CHANGE: Responsive Copy Component --- */}
        <div 
          className="bg-white/90 p-2 rounded-lg sm:rounded-full flex flex-col sm:flex-row items-center justify-between gap-2 w-[70%] sm:w-full shadow-2xl"
        >
          {/* Using the truncated address for display */}
          <p className="text-base md:text-lg text-gray-700 font-mono font-bold px-4 sm:py-0">
            {truncateAddress(contractAddress, 8)}
          </p>

          <button
            onClick={handleCopy}
            // CHANGE: Added full width on mobile, responsive text size
            className="bg-[#AF8F6F] text-white p-3 rounded-md sm:rounded-full hover:bg-[#744717] transition-all w-full sm:w-auto flex items-center justify-center gap-2"
          >
            {copied ? "Copied!" : (
              <>
                <FaCopy />
                <span className="sm:hidden">Copy Address</span> {/* Text for mobile */}
              </>
            )}
          </button>
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;