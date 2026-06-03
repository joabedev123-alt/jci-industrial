"use client";

import { motion } from "framer-motion";

export default function ClientsSection() {
  const logos = [
    "INDUSTRIA", "TECHNO", "MANAUS POLO", "LOGISTICA BR", "ENGMAX", "SISTEMAS", "ZONA FRANCA"
  ];

  return (
    <section className="py-12 border-y border-white/5 bg-dark overflow-hidden flex items-center">
      <div className="flex gap-16 whitespace-nowrap px-8 animate-[marquee_20s_linear_infinite]">
        {[...logos, ...logos, ...logos].map((logo, i) => (
          <div key={i} className="text-2xl md:text-3xl font-black text-silver/20 tracking-widest uppercase flex items-center gap-16">
            <span>{logo}</span>
            <div className="w-2 h-2 rounded-full bg-accent" />
          </div>
        ))}
      </div>
      <style jsx global>{`
        @keyframes marquee {
          0% { transform: translateX(0%); }
          100% { transform: translateX(-33.33%); }
        }
      `}</style>
    </section>
  );
}
