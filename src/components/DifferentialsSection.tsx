"use client";

import { motion } from "framer-motion";
import { Layers, Users, ShieldCheck, Factory, Headset, Clock } from "lucide-react";

export default function DifferentialsSection() {
  const diffs = [
    { icon: Layers, title: "Projetos Sob Medida", desc: "Desenvolvimento customizado para as necessidades específicas da sua operação industrial." },
    { icon: Users, title: "Equipe Especializada", desc: "Engenheiros e técnicos altamente capacitados e experientes no setor industrial." },
    { icon: ShieldCheck, title: "Controle de Qualidade", desc: "Rigorosos processos de inspeção garantindo conformidade e segurança em cada etapa." },
    { icon: Factory, title: "Alta Capacidade Produtiva", desc: "Infraestrutura robusta preparada para atender projetos de grande escala." },
    { icon: Headset, title: "Suporte Técnico", desc: "Acompanhamento integral desde o projeto até a implementação e pós-venda." },
    { icon: Clock, title: "Entrega com Pontualidade", desc: "Compromisso inegociável com os cronogramas estipulados para evitar paradas na sua linha." },
  ];

  return (
    <section className="py-20 sm:py-28 lg:py-32 bg-[#02050A] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-12 sm:mb-16 lg:mb-20">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6">
            Por que a <span className="text-[#E60000]">JCI Industrial?</span>
          </h2>
          <p className="text-[#E2E8F0] max-w-2xl mx-auto text-base sm:text-lg px-2">
            Nossos diferenciais são a base da confiança que construímos com grandes indústrias ao longo de duas décadas.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {diffs.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className="bg-[#050B16] border border-white/5 p-6 sm:p-8 hover:border-[#E60000]/50 hover:bg-[#0A1F44]/50 transition-all duration-300 group rounded-lg"
            >
              <div className="w-12 h-12 sm:w-14 sm:h-14 bg-[#123D8D]/30 flex items-center justify-center mb-5 sm:mb-6 group-hover:bg-[#E60000] transition-colors rounded-lg">
                <item.icon className="w-5 h-5 sm:w-6 sm:h-6 text-[#E60000] group-hover:text-white transition-colors" />
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-white mb-3 sm:mb-4">{item.title}</h3>
              <p className="text-[#E2E8F0] leading-relaxed text-sm sm:text-base">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
