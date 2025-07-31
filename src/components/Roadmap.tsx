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
    <section id="roadmap" className="py-20 bg-[#F8F4E1]">
       <div className="container mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-[#543310] mb-12">
          Meng Adventure Roadmap
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <RoadmapPhase 
            phase="Phase 1"
            title="Kitten"
            items={['Website & Social Media Launch', 'Fair Launch on Raydium', 'Building an Initial Community', 'CoinGecko & CMC Listing']}
          />
          <RoadmapPhase 
            phase="Phase 2"
            title="Adolescent Cat"
            items={['1,000+ Holders', 'Influencer Campaign', 'Community Meme Contest', 'Trending on Twitter & DexScreener']}
          />
          <RoadmapPhase 
            phase="Phase 3"
            title="King Cat"
            items={['10,000+ Holders', 'CEX Listings', 'Merchandise Meng!', 'Crypto World Domination']}
          />
        </div>
      </div>
    </section>
  );
};

export default Roadmap;