// src/components/Hero.tsx

import HeroImage from "../assets/meng-hero2.png"; // Simpan gambar di folder assets
import MengSepeda from "../assets/meng-minum.png"

const Hero: React.FC = () => {

  return (
    <section
      id="home"
      className="flex flex-col justify-center items-center text-center p-4 h-185
       overflow-hidden relative"
    >
      <div className="flex flex-box justify-between items-center">
        <div className="flex flex-col">
          <h1 className="text-4xl md:text-6xl font-extrabold text-[#543310] max-w-4xl text-left">
            Meng meng meng meng
          </h1>

          <p className="mt-4 text-lg md:text-xl max-w-xl text-left">
            Forget dogs, it's time for cats to rule the crypto world. $MENG brings the speed of Solana and the power of community!
          </p>
        </div>
        <img
          src={HeroImage}
          alt="Meng The Cat"
          className="min-w-50 max-w-100"
        />
        <img
        src={MengSepeda}
        alt="Kucing Mengintip"
        className="absolute bottom-0 left-0 w-70 -scale-x-100" // <-- KELAS UTAMA DI SINI
      />
      </div>

      <div className="flex flex-wrap justify-center gap-4 mt-8 text-5xl -mb-20">
        <a
          href="#howtobuy"
          className="bg-[#543310] text-white font-bold py-3 px-8 rounded-full hover:bg-[#744717] transition-colors duration-300 "
        >
          Buy $MENG Now
        </a>
        {/*<a
          href="https://t.me/yourtelegramgroup"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-sky-500 text-white font-bold py-3 px-8 rounded-full hover:bg-sky-600 transition-colors duration-300"
        >
          Join Telegram
        </a>*/}
      </div>
    </section>
  );
};

export default Hero;
