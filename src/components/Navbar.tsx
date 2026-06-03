"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: "-100%" }}
      animate={{ y: scrolled ? "-100%" : 0 }}
      transition={{ duration: 0.5, ease: "easeInOut" }}
      className="fixed top-0 w-full z-50 bg-gradient-to-b from-[#050B16]/80 to-transparent py-6"
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        <a href="#" className="flex items-center gap-2">
          <img 
            src="/logo.png" 
            alt="JCI Industrial Logo" 
            className="h-16 md:h-24 w-auto object-contain transition-all duration-300 drop-shadow-[0_0_15px_rgba(255,255,255,0.2)]" 
          />
        </a>

        <nav className="hidden md:flex items-center gap-8">
          <a href="#" className="text-sm font-bold tracking-widest uppercase text-white hover:text-[#E60000] transition-colors">A Empresa</a>
          <a href="#" className="text-sm font-bold tracking-widest uppercase text-white hover:text-[#E60000] transition-colors">Estrutura</a>
          <a href="#" className="text-sm font-bold tracking-widest uppercase text-white hover:text-[#E60000] transition-colors">Soluções</a>
          <a href="#" className="text-sm font-bold tracking-widest uppercase text-white hover:text-[#E60000] transition-colors">Cases</a>
        </nav>

        <button 
          className="md:hidden text-white"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-[#050B16] border-b border-[#E60000]/20 p-6 flex flex-col gap-4 shadow-2xl">
          <a href="#" className="text-sm font-bold tracking-widest uppercase text-white hover:text-[#E60000]">A Empresa</a>
          <a href="#" className="text-sm font-bold tracking-widest uppercase text-white hover:text-[#E60000]">Estrutura</a>
          <a href="#" className="text-sm font-bold tracking-widest uppercase text-white hover:text-[#E60000]">Soluções</a>
          <a href="#" className="text-sm font-bold tracking-widest uppercase text-white hover:text-[#E60000]">Cases</a>
        </div>
      )}
    </motion.header>
  );
}
