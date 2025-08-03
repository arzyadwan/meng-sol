import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
/*import WhyMeng from "./components/WhyMeng";*/
import HowToBuy from "./components/HowToBuy";
import Roadmap from "./components/Roadmap";
import Footer from "./components/Footer";
import BannerImage from "./assets/background-meng.webp";

function App() {
  const headerBackgroundStyle = {
    backgroundImage: `url(${BannerImage})`,
  };

  return (
    <div className="font-cat tracking-widest text-gray-800 bg-[#F8F4E1]"> {/* Beri warna dasar di sini */}
      
      {/* 1. Wrapper Navbar sekarang di luar dan menjadi sticky untuk seluruh halaman */}
      <div className="hidden md:block sticky top-0 z-50 pt-4 px-4">
        <Navbar />
      </div>

      {/* 2. Div ini HANYA untuk background Hero */}
      <div
        className="relative bg-cover bg-center -mt-[120px] top-0" // Tarik ke atas untuk berada di belakang navbar
        style={headerBackgroundStyle}
      >
        <Hero />
      </div>

      {/* 3. Konten utama dimulai seperti biasa */}
      <main>
        <About />
        {/*<WhyMeng />*/}
        <Roadmap />
        <HowToBuy />
      </main>

      <Footer />
    </div>
  );
}

export default App;
