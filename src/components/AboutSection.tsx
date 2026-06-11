"use client";

import { motion } from "framer-motion";

export default function AboutSection() {
  const stats = [
    { value: "20+", label: "Anos de experiência" },
    { value: "150+", label: "Clientes ativos" },
    { value: "550m²", label: "De estrutura" },
    { value: "98%", label: "De satisfação" },
  ];

  return (
    <section className="py-20 sm:py-28 lg:py-32 px-4 sm:px-6 bg-[#050B16] relative overflow-hidden">
      <div className="absolute top-0 right-0 w-1/3 h-full bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10 pointer-events-none mix-blend-overlay" />

      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 lg:gap-16 items-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1 }}
        >
          <div className="flex items-center gap-4 mb-6">
            <div className="h-[2px] w-12 bg-[#E60000]" />
            <span className="text-[#E60000] uppercase tracking-[0.2em] text-sm font-bold">Quem Somos</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6 sm:mb-8">
            Engenharia, Tecnologia e{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-[#E2E8F0]">Confiabilidade</span>
          </h2>

          <p className="text-[#E2E8F0] text-base sm:text-lg font-light leading-relaxed mb-10 sm:mb-12">
            A JCI Industrial possui mais de duas décadas de experiência entregando soluções industriais para empresas dos mais diversos segmentos. Nossa estrutura integra engenharia, fabricação, automação, ferramentaria, usinagem e manutenção industrial em um único ecossistema produtivo.
          </p>

          <div className="grid grid-cols-2 gap-6 sm:gap-8">
            {stats.map((stat, i) => (
              <div key={i} className="border-l-2 border-[#E60000] pl-4">
                <div className="text-3xl sm:text-4xl font-black text-white mb-1">{stat.value}</div>
                <div className="text-xs sm:text-sm text-[#E2E8F0] uppercase tracking-wider">{stat.label}</div>
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1, delay: 0.2 }}
          className="relative w-full h-[280px] sm:h-[350px] md:h-[420px] lg:h-[450px] overflow-hidden rounded-xl shadow-2xl group bg-[#0A1F44]"
        >
          <img
            src="/quemsomos.png"
            alt="Instalações JCI Industrial"
            className="w-full h-full object-cover opacity-70 group-hover:opacity-100 mix-blend-luminosity hover:mix-blend-normal transition-all duration-700"
          />
          <div className="absolute top-4 left-4 w-8 h-8 border-t-2 border-l-2 border-[#E60000] opacity-70" />
          <div className="absolute bottom-4 right-4 w-8 h-8 border-b-2 border-r-2 border-[#E60000] opacity-70" />
          <div className="absolute bottom-6 left-6 text-xs font-mono text-[#E60000] tracking-widest uppercase bg-black/50 px-2 py-1 backdrop-blur-sm rounded">
            SYS_OPERATIONAL // 100%
          </div>
        </motion.div>
      </div>
    </section>
  );
}
