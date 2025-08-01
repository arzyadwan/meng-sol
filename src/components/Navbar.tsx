// src/components/Navbar.tsx
import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import logoMeng from "../assets/meng-hero2.png";

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navLinks = [
    { href: "#home", label: "Home" },
    { href: "#about", label: "About" },
    /*{ href: "#tokenomics", label: "Tokenomics" },*/
    { href: "#roadmap", label: "Roadmap" },
  ];

  return (
    <nav className="bg-white/80 backdrop-blur-md shadow-md w-[80%] mx-auto mt-5 rounded-4xl">
      <div className="container mx-auto px-10 py-3 flex justify-between items-center">
        <a
          href="#home"
          className="text-5xl text-[#543310] flex items-center gap-7"
        >
          <img src={logoMeng} className="w-14 h-auto" />
          Meng
        </a>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-6 text-2xl">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-gray-700 hover:text-[#AF8F6F] font-medium"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#howtobuy"
            className="bg-[#AF8F6F] text-white font-bold py-2 px-4 rounded-full hover:bg-[#543310] transition-colors"
          >
            Buy Now
          </a>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white px-6 pb-4">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="block py-2 text-gray-700 hover:text-[#AF8F6F]"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#howtobuy"
            onClick={() => setIsOpen(false)}
            className="block bg-[#AF8F6F] text-white text-center font-bold py-2 px-4 rounded-full hover:bg-[#543310] transition-colors"
          >
            Buy Now
          </a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
