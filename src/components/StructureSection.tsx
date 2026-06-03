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
    { icon: AlignJustify, title: "Fabricação de Esteiras", desc: "Projetos customizados", img: "/estrutura6.png" }
  ];

  return (
    <section className="py-24 px-6 bg-[#0A1F44] border-y border-[#123D8D]/30 relative overflow-hidden">
      {/* Dashboard Grid Lines */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold uppercase tracking-widest text-[#E2E8F0] mb-4">
            Nossa Estrutura
          </h2>
          <div className="w-24 h-[2px] bg-[#E60000] mx-auto" />
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-1 md:gap-4 bg-[#123D8D]/20 p-1 md:p-4 rounded-xl border border-white/5 backdrop-blur-sm">
          {items.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, type: "spring", stiffness: 100 }}
              className="bg-[#0A1F44] border border-[#123D8D]/30 rounded-xl overflow-hidden hover:border-[#E60000] transition-all duration-300 group flex flex-col shadow-lg"
            >
              <div className="w-full h-24 md:h-32 bg-[#02050A] overflow-hidden flex items-center justify-center">
                <img src={item.img} alt={item.title} className="max-w-full max-h-full object-contain group-hover:scale-105 transition-transform duration-500" />
              </div>
              
              <div className="p-3 md:p-4 flex flex-col items-center text-center gap-2 bg-[#050B16] flex-1 border-t border-[#123D8D]/30">
                <item.icon className="w-5 h-5 md:w-6 md:h-6 text-[#E60000]" strokeWidth={1.5} />
                <div>
                  <h3 className="text-white font-bold tracking-wider mb-1 text-xs md:text-sm">{item.title}</h3>
                  <p className="text-[#E2E8F0] text-[10px] leading-tight font-mono">{item.desc}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
