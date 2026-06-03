"use client";

import { motion } from "framer-motion";

export default function TimelineSection() {
  const events = [
    { year: "2005", desc: "Início das operações" },
    { year: "2010", desc: "Expansão industrial" },
    { year: "2015", desc: "Automação industrial" },
    { year: "2020", desc: "Novas instalações" },
    { year: "2025", desc: "Referência no PIM" },
  ];

  return (
    <section className="py-32 px-6 bg-dark border-t border-white/5 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-24">
          <h2 className="text-4xl font-bold mb-4">Nossa <span className="text-gradient">Trajetória</span></h2>
          <div className="w-16 h-1 bg-accent mx-auto" />
        </div>

        <div className="relative border-l-2 border-white/10 ml-4 md:ml-1/2 space-y-16">
          {events.map((ev, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: i * 0.2 }}
              className="relative pl-12 md:pl-0"
            >
              {/* Dot */}
              <div className="absolute left-[-9px] md:left-[calc(50%-9px)] top-0 w-4 h-4 rounded-full bg-accent ring-4 ring-dark" />
              
              <div className={`md:w-1/2 ${i % 2 === 0 ? "md:pr-16 md:text-right" : "md:ml-auto md:pl-16 md:text-left"}`}>
                <h3 className="text-3xl font-black text-white mb-2">{ev.year}</h3>
                <p className="text-silver/70 text-lg">{ev.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
