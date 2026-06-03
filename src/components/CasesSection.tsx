"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export default function CasesSection() {
  const cases = [
    {
      title: "Otimização de Linha de Produção",
      problem: "Paradas constantes por falha no sistema de esteiras legado.",
      solution: "Retrofit completo do sistema de transporte com novas esteiras sincronizadas e automação de controle.",
      result: "Redução de 85% no tempo de parada (downtime) e aumento de 30% na capacidade produtiva."
    },
    {
      title: "Adequação NR12 em Fresadoras CNC",
      problem: "Equipamentos antigos operando fora das normas de segurança vigentes.",
      solution: "Projeto mecânico e elétrico para enclausuramento e instalação de sistemas de intertravamento.",
      result: "100% de adequação às normas NR12 sem perda de performance operacional."
    }
  ];

  return (
    <section className="py-32 px-6 bg-[#050B16] border-t border-[#123D8D]/20">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-end gap-8 mb-16">
          <div>
            <div className="flex items-center gap-4 mb-4">
              <div className="h-[2px] w-12 bg-[#E60000]" />
              <span className="text-[#E60000] uppercase tracking-[0.2em] text-sm font-bold">Cases de Sucesso</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold">Resultados na <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-[#E2E8F0]">Prática</span></h2>
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {cases.map((c, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.2 }}
              className="bg-[#0A1F44] border border-white/5 overflow-hidden group"
            >
              <div className="p-8 md:p-10 relative">
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-[#E60000]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                <h3 className="text-2xl font-bold text-white mb-8 pr-12">{c.title}</h3>
                
                <div className="space-y-6">
                  <div>
                    <h4 className="text-xs uppercase tracking-widest text-[#E60000] mb-2 font-mono">Problema</h4>
                    <p className="text-[#E2E8F0]">{c.problem}</p>
                  </div>
                  <div>
                    <h4 className="text-xs uppercase tracking-widest text-[#E60000] mb-2 font-mono">Solução Desenvolvida</h4>
                    <p className="text-[#E2E8F0]">{c.solution}</p>
                  </div>
                  <div className="pt-4 border-t border-white/10">
                    <h4 className="text-xs uppercase tracking-widest text-[#E60000] mb-2 font-mono">Resultado Obtido</h4>
                    <p className="text-white font-bold text-lg">{c.result}</p>
                  </div>
                </div>

                <div className="mt-8 flex items-center gap-2 text-sm text-[#E60000] uppercase tracking-wider font-bold group-hover:translate-x-2 transition-transform cursor-pointer">
                  Ver estudo completo <ArrowRight className="w-4 h-4" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
