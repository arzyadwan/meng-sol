// src/components/Roadmap.tsx
import React from 'react';

interface RoadmapPhaseProps {
  phase: string;
  title: string;
  items: string[];
}

const RoadmapPhase: React.FC<RoadmapPhaseProps> = ({ phase, title, items }) => (
  <div className="bg-white p-6 rounded-lg shadow-lg border-l-4 border-[#AF8F6F]">
    <h3 className="text-xl font-bold text-[#543310]">{phase}</h3>
    <p className="text-lg text-gray-700 mb-4">{title}</p>
    <ul className="space-y-2">
      {items.map((item, index) => (
        <li key={index} className="flex items-center">
          <span className="text-green-500 mr-2">✓</span>
          {item}
        </li>
      ))}
    </ul>
  </div>
);

const Roadmap: React.FC = () => {
  return (
    <section id="roadmap" className="py-20 bg-white">
       <div className="container mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-[#543310] mb-12">
          Peta Jalan Petualangan Meng
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <RoadmapPhase 
            phase="Fase 1"
            title="Anak Kucing"
            items={['Peluncuran Website & Medsos', 'Fair Launch di Raydium', 'Bangun Komunitas Awal', 'Listing CoinGecko & CMC']}
          />
          <RoadmapPhase 
            phase="Fase 2"
            title="Kucing Remaja"
            items={['1.000+ Holders', 'Kampanye Influencer', 'Kontes Meme Komunitas', 'Trending di Twitter & DexScreener']}
          />
          <RoadmapPhase 
            phase="Fase 3"
            title="Raja Kucing"
            items={['10.000+ Holders', 'CEX Listings', 'Merchandise Meng!', 'Dominasi Dunia Kripto']}
          />
        </div>
      </div>
    </section>
  );
};

export default Roadmap;