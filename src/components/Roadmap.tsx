// src/components/Roadmap.tsx
import React from 'react';

interface RoadmapPhaseProps {
  phase: string;
  title: string;
  items: string[];
}

const RoadmapPhase: React.FC<RoadmapPhaseProps> = ({ phase, title, items }) => (
  <div className="text-center">
    <h3 className="text-5xl font-bold text-[#543310]">{phase}</h3>
    <p className="text-4xl text-white text-shadow-lg mb-4">{title}</p>
    <ul className="space-y-2 *:text-3xl">
      {items.map((item, index) => (
        <li key={index} className="flex items-center">
          {item}
        </li>
      ))}
    </ul>
  </div>
);

const Roadmap: React.FC = () => {
  return (
    <section id="roadmap" className="py-20 bg-[#f6e8a2]">
       <div className="container mx-auto px-50">
        <h2 className="text-3xl md:text-5xl font-bold text-center text-[#543310] mb-12 ">
          Meng Adventure Roadmap
        </h2>
        
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