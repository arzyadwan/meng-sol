// src/components/Roadmap.tsx
import React from 'react';
import { motion } from "framer-motion";

interface RoadmapPhaseProps {
  phase: string;
  title: string;
  items: string[];
}

const RoadmapPhase: React.FC<RoadmapPhaseProps> = ({ phase, title, items }) => (
  <motion.div className="text-center"
  initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: false }}
          >
    <h3 className="text-5xl font-bold text-[#543310]">{phase}</h3>
    <p className="text-4xl text-white text-shadow-lg mb-4">{title}</p>
    <ul className="space-y-2 *:text-3xl">
      {items.map((item, index) => (
        <li key={index} className="flex items-center justify-center">
          {item}
        </li>
      ))}
    </ul>
  </motion.div>
);

const Roadmap: React.FC = () => {
  return (
    <section id="roadmap" className="py-20 bg-[#f6e8a2]">
       <div className="container mx-auto">
        <motion.div className="text-5xl md:text-5xl font-bold text-center text-[#543310] mb-12"
        initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: false }}
          >
          Meng Adventure Roadmap
        </motion.div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <RoadmapPhase 
            phase="Phase 1"
            title="Kitten"
            items={['500k mcap , feeding street cats']}
          />
          <RoadmapPhase 
            phase="Phase 2"
            title="Adolescent Cat"
            items={['1M mcap , dev lock']}
          />
          <RoadmapPhase 
            phase="Phase 3"
            title="King Cat"
            items={['2M mcap , lets community drive']}
          />
        </div>
      </div>
    </section>
  );
};

export default Roadmap;