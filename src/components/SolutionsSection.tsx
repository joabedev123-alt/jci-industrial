"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight, X } from "lucide-react";

const solutions: Array<{title: string, img: string, subtitle?: string, items: string[]}> = [
  {
    title: "Projetos Mecânicos",
    img: "https://images.unsplash.com/photo-1537462715879-360eeb61a0ad?auto=format&fit=crop&q=80&w=800",
    items: ["Projetos especiais", "Layout produtivo", "Cálculo estrutural", "Adequação NR12"]
  },
  {
    title: "Automação Industrial",
    img: "/rolete.png",
    subtitle: "Roletes de tração, de retorno, de alívio e outros.",
    items: ["CLPs", "Supervisórios", "Inversores", "Soft Starter", "Painéis elétricos", "Desenvolvimento de software"]
  },
  {
    title: "Esteiras Transportadoras",
    img: "https://images.unsplash.com/photo-1581092334651-ddf26d9a09d0?auto=format&fit=crop&q=80&w=800",
    items: ["Esteiras transportadoras", "Transportador por gravidade", "Transportador com roletes", "Esteiras em perfil de alumínio"]
  },
  {
    title: "Correias Transportadoras",
    img: "/correia1.png",
    subtitle: "Correias de transmissão, de PVC, lisa, corrugada, de borracha.",
    items: ["PVC", "Borracha", "Lisa", "Corrugada", "Sincronizadas", "Transmissão"]
  },
  {
    title: "Correias Vulcanizadas",
    img: "https://images.unsplash.com/photo-1581091226033-d5c48150dbaa?auto=format&fit=crop&q=80&w=800",
    items: ["Emendas vulcanizadas", "Revestimentos", "Taliscas", "Perfis especiais"]
  },
  {
    title: "Correntes Industriais",
    img: "https://images.unsplash.com/photo-1517520287167-4bbf64a00d66?auto=format&fit=crop&q=80&w=800",
    items: ["Corrente de rolo", "Corrente de bucha", "Corrente silenciosa", "Corrente de lâminas", "Múltiplas carreiras"]
  },
  {
    title: "Engrenagens",
    img: "https://images.unsplash.com/photo-1585834898144-82a9d80d21e2?auto=format&fit=crop&q=80&w=800",
    items: ["Engrenagem simples", "Engrenagem dupla", "Coroa", "Pinhão"]
  },
  {
    title: "Roletes Industriais",
    img: "https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?auto=format&fit=crop&q=80&w=800",
    items: ["Tração", "Retorno", "Alívio", "Especiais"]
  },
  {
    title: "Mancais",
    img: "https://images.unsplash.com/photo-1611078519658-00a26e6de3bb?auto=format&fit=crop&q=80&w=800",
    items: ["Mancais comerciais", "Mancais especiais fabricados sob medida"]
  },
  {
    title: "Ferramentaria e Usinagem",
    img: "https://images.unsplash.com/photo-1581092160562-40aa08e78837?auto=format&fit=crop&q=80&w=800",
    items: ["Desenvolvimento", "Fabricação", "Peças especiais", "Dispositivos industriais"]
  },
  {
    title: "Estruturas em Alumínio",
    img: "https://images.unsplash.com/photo-1516216628859-9bccecc13c46?auto=format&fit=crop&q=80&w=800",
    items: ["Bancadas", "Torres para robôs", "Estruturas industriais", "Bases especiais"]
  },
  {
    title: "Estruturas Metálicas",
    img: "https://images.unsplash.com/photo-1504307651254-35680f356f27?auto=format&fit=crop&q=80&w=800",
    items: ["ISO Tanque", "Carenagens", "Divisórias", "Alambrados", "Proteções industriais"]
  },
  {
    title: "Movelaria Industrial",
    img: "https://images.unsplash.com/photo-1553413077-190dd305871c?auto=format&fit=crop&q=80&w=800",
    items: ["Carro plataforma", "Carro de serviço pesado", "Carro de cilindros", "Carro WIP", "Carro Kitting"]
  }
];

export default function SolutionsSection() {
  const [selectedSolution, setSelectedSolution] = useState<typeof solutions[0] | null>(null);

  return (
    <section className="py-32 bg-[#050B16] relative overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-6 mb-16">
        <div className="flex items-center gap-4 mb-4">
          <div className="h-[2px] w-12 bg-[#E60000]" />
          <span className="text-[#E60000] uppercase tracking-[0.2em] text-sm font-bold">Portfólio de Soluções</span>
        </div>
        <h2 className="text-4xl md:text-5xl font-bold">Catálogo <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-[#E2E8F0]">Industrial</span></h2>
      </div>

      <div className="flex gap-4 overflow-x-auto pb-12 px-6 snap-x snap-mandatory" style={{ scrollbarWidth: 'none' }}>
        {solutions.map((sol, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.05, duration: 0.5 }}
            whileHover={{ scale: 0.98 }}
            onClick={() => setSelectedSolution(sol)}
            className="min-w-[280px] md:min-w-[350px] h-[450px] relative group cursor-pointer snap-center bg-[#0A1F44] overflow-hidden"
          >
            <img src={sol.img} alt={sol.title} className="absolute inset-0 w-full h-full object-cover opacity-40 group-hover:opacity-60 transition-opacity duration-700 mix-blend-luminosity" />
            <div className="absolute inset-0 bg-gradient-to-t from-[#050B16] via-transparent to-transparent opacity-90" />
            
            <div className="absolute bottom-0 left-0 p-8 w-full flex justify-between items-end">
              <div>
                <h3 className="text-xl font-bold text-white max-w-[250px]">{sol.title}</h3>
                <p className={`text-[#E2E8F0] mt-2 ${sol.subtitle ? 'text-xs font-light pr-12' : 'text-xs font-mono uppercase tracking-widest'}`}>
                  {sol.subtitle || `${sol.items.length} Categorias`}
                </p>
              </div>
              <div className="w-10 h-10 rounded-full bg-[#E60000] flex items-center justify-center transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300 shrink-0">
                <ArrowUpRight className="w-5 h-5 text-white" />
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      <AnimatePresence>
        {selectedSolution && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-[#050B16]/90 backdrop-blur-md flex items-center justify-center p-4 md:p-12"
          >
            <motion.div 
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: 50, opacity: 0 }}
              className="bg-[#0A1F44] w-full max-w-5xl h-[80vh] md:h-[600px] flex flex-col md:flex-row relative border border-[#123D8D]"
            >
              <button 
                onClick={() => setSelectedSolution(null)}
                className="absolute top-4 right-4 z-10 w-10 h-10 bg-black/50 hover:bg-[#E60000] text-white flex items-center justify-center transition-colors rounded-full"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="w-full md:w-1/2 h-64 md:h-full relative overflow-hidden">
                <img src={selectedSolution.img} alt={selectedSolution.title} className="w-full h-full object-cover mix-blend-luminosity" />
                <div className="absolute inset-0 bg-gradient-to-r from-transparent to-[#0A1F44] hidden md:block" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0A1F44] to-transparent md:hidden" />
              </div>

              <div className="w-full md:w-1/2 p-8 md:p-12 flex flex-col justify-center overflow-y-auto">
                <div className="text-xs font-mono text-[#E60000] tracking-[0.2em] uppercase mb-4">Detalhes Técnicos</div>
                <h3 className="text-3xl md:text-4xl font-bold text-white mb-8">{selectedSolution.title}</h3>
                
                <ul className="space-y-4 mb-8">
                  {selectedSolution.items.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-3 border-b border-white/5 pb-3">
                      <div className="w-1.5 h-1.5 rounded-full bg-[#E60000] mt-2" />
                      <span className="text-[#E2E8F0] text-lg">{item}</span>
                    </li>
                  ))}
                </ul>

                <button className="px-8 py-4 bg-[#E60000] text-white font-bold uppercase tracking-widest text-sm hover:bg-white hover:text-[#0A1F44] transition-colors mt-auto w-max rounded-full">
                  Solicitar Cotação
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
