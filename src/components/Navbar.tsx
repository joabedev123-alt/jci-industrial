"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

const navLinks = [
  { label: "A Empresa", href: "#" },
  { label: "Estrutura", href: "#" },
  { label: "Soluções", href: "#" },
  { label: "Cases", href: "#" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Fecha o menu ao redimensionar para desktop
  useEffect(() => {
    const onResize = () => { if (window.innerWidth >= 768) setMobileMenuOpen(false); };
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  return (
    <motion.header
      initial={{ y: "-100%" }}
      animate={{ y: scrolled ? "-100%" : 0 }}
      transition={{ duration: 0.5, ease: "easeInOut" }}
      className="fixed top-0 w-full z-50 bg-gradient-to-b from-[#050B16]/90 to-transparent backdrop-blur-sm py-4 sm:py-6"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 flex items-center justify-between">
        <a href="#" className="flex items-center gap-2 z-10">
          <img
            src="/logo.png"
            alt="JCI Industrial Logo"
            className="h-12 sm:h-16 md:h-20 w-auto object-contain transition-all duration-300 drop-shadow-[0_0_15px_rgba(255,255,255,0.2)]"
          />
        </a>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-6 lg:gap-8">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-sm font-bold tracking-widest uppercase text-white hover:text-[#E60000] transition-colors"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Hamburger */}
        <button
          className="md:hidden text-white p-2 rounded-lg hover:bg-white/10 transition-colors z-10"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Menu"
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden overflow-hidden bg-[#050B16] border-b border-[#E60000]/20 shadow-2xl"
          >
            <div className="flex flex-col px-4 py-4 gap-1">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-sm font-bold tracking-widest uppercase text-white hover:text-[#E60000] hover:bg-white/5 px-4 py-3 rounded-lg transition-all"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
