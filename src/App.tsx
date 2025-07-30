// src/App.tsx
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import WhyMeng from './components/WhyMeng';
import Tokenomics from './components/Tokenomics';
import HowToBuy from './components/HowToBuy';
import Roadmap from './components/Roadmap';
import Footer from './components/Footer';

function App() {
  return (
    <div className="font-cat tracking-widest text-gray-800"> {/* Ganti dengan warna background utama */}
      <div className='sticky top-0 z-50 pt-4 px-4'>
      <Navbar />
      </div>
      <main>
        <Hero />
        <About />
        <WhyMeng />
        <Tokenomics />
        <HowToBuy />
        <Roadmap />
      </main>
      <Footer />
    </div>
  );
}

export default App;