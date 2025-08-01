import React from "react";
import MengAbout from "../assets/meng-berenang.png";
import { motion } from "framer-motion";

const About: React.FC = () => {
  return (
    <section id="about" className="bg-white">
      <div className="container mx-auto px-40 flex py-15 flex-col md:flex-row items-center gap-12">
        {/* Kolom Gambar */}
        <motion.div
          className="md:w-1/3 flex justify-center"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: false }}
        >
          <img
            src={MengAbout}
            alt="Meng the cat playing"
            className="w-100 h-auto -scale-x-100 shadow-2xl border-4"
          />
        </motion.div>

        {/* Kolom Teks */}
        <div
          className="md:w-2/3 text-center md:text-left"
          
        >
          <motion.div className="text-3xl md:text-4xl font-bold text-[#543310] mb-4"
          initial={{opacity:0, scale:0}}
          whileInView={{opacity:1, scale:1}}
          transition={{ duration: 1, ease:"easeIn"}}
          viewport={{once: false}}>
            Whose Meng?
          </motion.div>
          <motion.div className="text-2xl text-gray-700"
          initial={{opacity:0, x:50}}
          whileInView={{opacity:1, x:0}}
          transition={{ duration: 1, ease:"easeIn"}}
          viewport={{once: false}}
          >
            Meng is no ordinary cat. He's an orange tabby fed up with slow
            transactions and high fees. One day, while chasing a digital thread,
            he stumbles upon the Solana blockchain.
          </motion.div>
          <motion.div className="mt-4 text-2xl text-gray-700"
          initial={{opacity:0, x:50}}
          whileInView={{opacity:1, x:0}}
          transition={{ duration: 1.5, ease:"easeIn"}}
          viewport={{once: false}}
          >
            Here, he found paradise: lightning-fast transactions and dust-free
            fees. Meng decided to stay and create his own coin,{" "}
            <span className="font-bold text-[#AF8F6F]">$MENG</span>, to share
            with all his friends around the world. His mission was simple: bring
            happiness, memes, and profits to all who join the 'Meng Army'!
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
