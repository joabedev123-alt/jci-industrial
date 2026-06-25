"use client";

import { motion } from "framer-motion";
import { Maximize, Wrench, Cpu, Hammer, Box, AlignJustify } from "lucide-react";

export default function StructureSection() {
  const items = [
    { icon: Maximize, title: "Galpão 550m²", desc: "Infraestrutura de ponta", img: "/estrutura1.png" },
    { icon: Wrench, title: "Ferramentaria", desc: "Precisão micrométrica", img: "/estrutura2.png" },
    { icon: Cpu, title: "Automação", desc: "Integração 4.0", img: "/estrutura3.png" },
    { icon: Hammer, title: "Serralheria", desc: "Soldas especiais", img: "/estrutura4.png" },
    { icon: Box, title: "Fabricação de Correias", desc: "Vulcanização", img: "/estrutura5.png" },
    { icon: AlignJustify, title: "Fabricação de Esteiras", desc: "Projetos customizados", img: "/estrutura6.png" },
  ];

  return (
    <section id="estrutura" className="py-20 sm:py-24 px-4 sm:px-6 bg-[#0A1F44] border-y border-[#123D8D]/30 relative overflow-hidden">
      {/* Grid lines decorativas */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-10 sm:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold uppercase tracking-widest text-[#E2E8F0] mb-4">
            Nossa Estrutura
          </h2>
          <div className="w-24 h-[2px] bg-[#E60000] mx-auto" />
        </div>

        {/* Cards de estrutura */}
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 sm:gap-3 md:gap-4 bg-[#123D8D]/20 p-2 sm:p-3 md:p-4 rounded-xl border border-white/5 backdrop-blur-sm mb-8 sm:mb-12">
          {items.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, type: "spring", stiffness: 100 }}
              className="bg-[#0A1F44] border border-[#123D8D]/30 rounded-xl overflow-hidden hover:border-[#E60000] transition-all duration-300 group flex flex-col shadow-lg"
            >
              <div className="p-4 sm:p-5 md:p-6 flex flex-col items-center justify-center text-center gap-2 sm:gap-3 bg-[#050B16] flex-1">
                <item.icon className="w-6 h-6 sm:w-8 sm:h-8 text-[#E60000] mb-1" strokeWidth={1.5} />
                <div>
                  <h3 className="text-white font-bold tracking-wider mb-1 text-xs sm:text-sm md:text-base leading-tight">{item.title}</h3>
                  <p className="text-[#E2E8F0] text-[10px] sm:text-xs leading-relaxed font-mono hidden sm:block">{item.desc}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Galeria de fotos */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6">
          {["01.jpeg", "02.jpeg", "04.jpeg"].map((img, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.2 }}
              className="rounded-xl overflow-hidden border border-[#123D8D]/30 shadow-2xl group"
            >
              <img
                src={`/estrutura/${img}`}
                alt={`Estrutura ${i + 1}`}
                className="w-full h-48 sm:h-56 md:h-64 object-cover group-hover:scale-110 transition-transform duration-700"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
