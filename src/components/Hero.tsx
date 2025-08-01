import React, { useState } from "react";
import { FaCopy } from "react-icons/fa";

const Hero: React.FC = () => {
  const contractAddress = "SoL123abc...YourMengContractAddress...xyz789";
  const [copied, setCopied] = useState(false);
  const handleCopy = () => {
    navigator.clipboard.writeText(contractAddress);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section
      id="home"
      className="flex flex-col justify-center items-center text-center p-4 h-185
       overflow-hidden relative"
    >
      <div className="flex flex-box justify-between items-center">
        {/*<div className="flex flex-col">
          <h1 className="text-4xl md:text-6xl font-extrabold text-[#543310] max-w-4xl text-left">
            Meng meng meng meng
          </h1>

          <p className="mt-4 text-lg md:text-xl max-w-xl text-left">
            Forget dogs, it's time for cats to rule the crypto world. $MENG brings the speed of Solana and the power of community!
          </p>
        </div>
        {/*<img
          src={HeroImage}
          alt="Meng The Cat"
          className="min-w-50 max-w-100"
        />
        <img
        src={MengSepeda}
        alt="Kucing Mengintip"
        className="absolute bottom-0 left-0 w-70 -scale-x-100" 
      />*/}
      </div>

      {/*<a
      <div className="flex flex-wrap justify-center gap-4 mt-8 text-5xl -mb-20">
        <a
          href="#howtobuy"
          className="bg-[#543310] text-white font-bold py-3 px-8 rounded-full hover:bg-[#744717] transition-colors duration-300 "
        >
          Buy $MENG Now
        </a>
          href="https:
          target="_blank"
          rel="noopener noreferrer"
          className="bg-sky-500 text-white font-bold py-3 px-8 rounded-full hover:bg-sky-600 transition-colors duration-300"
        >
          Join Telegram
      </div>
        </a>*/}
      <div className="flex flex-col mt-150 gap-2">
        <div className="text-3xl text-white font-bold text-shadow-md text-shadow-black">Contract Addres</div>
        <div className="bg-white p-3 rounded-full flex items-center shadow-2xl bottom-0 mb-20">
          <p className="text-sm md:text-base text-gray-600 font-bold break-all px-4">
            {contractAddress}
          </p>
          <button
            onClick={handleCopy}
            className="bg-[#AF8F6F] text-white p-3 rounded-full hover:bg-[#744717] transition-all"
          >
            {copied ? "Copied!" : <FaCopy />}
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
