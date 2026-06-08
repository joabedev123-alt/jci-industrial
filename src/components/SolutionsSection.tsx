"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight, X } from "lucide-react";

const solutions: Array<{title: string, img: string, subtitle?: string, items: string[], gallery?: string[]}> = [
  {
    title: "Correias transportadoras de PVC e Borracha",
    img: "/Correias transportadoras de PVC e Borracha/01.jpeg",
    items: ["PVC", "Borracha", "Lisa", "Corrugada", "Transmissão"],
    gallery: [
      "/Correias transportadoras de PVC e Borracha/01.jpeg",
      "/Correias transportadoras de PVC e Borracha/02.jpeg",
      "/Correias transportadoras de PVC e Borracha/03.jpeg",
      "/Correias transportadoras de PVC e Borracha/04.jpeg",
      "/Correias transportadoras de PVC e Borracha/05.jpeg",
      "/Correias transportadoras de PVC e Borracha/06.jpeg",
      "/Correias transportadoras de PVC e Borracha/07.jpeg",
      "/Correias transportadoras de PVC e Borracha/08.jpeg",
      "/Correias transportadoras de PVC e Borracha/09.jpeg",
      "/Correias transportadoras de PVC e Borracha/10.jpeg"
    ]
  },
  {
    title: "Automação Industrial",
    img: "/automação industrial/01.jpeg",
    subtitle: "Roletes de tração, de retorno, de alívio e outros.",
    items: ["CLPs", "Supervisórios", "Inversores", "Soft Starter", "Painéis elétricos", "Desenvolvimento de software"],
    gallery: [
      "/automação industrial/01.jpeg",
      "/automação industrial/02.jpeg",
      "/automação industrial/03.jpeg",
      "/automação industrial/WhatsApp Image 2026-06-05 at 13.23.03.jpeg",
      "/automação industrial/WhatsApp Image 2026-06-05 at 13.23.04 (1).jpeg",
      "/automação industrial/WhatsApp Image 2026-06-05 at 13.23.04 (2).jpeg",
      "/automação industrial/WhatsApp Image 2026-06-05 at 13.23.04 (3).jpeg",
      "/automação industrial/WhatsApp Image 2026-06-05 at 13.23.04 (4).jpeg",
      "/automação industrial/WhatsApp Image 2026-06-05 at 13.23.04 (5).jpeg",
      "/automação industrial/WhatsApp Image 2026-06-05 at 13.23.04.jpeg",
      "/automação industrial/WhatsApp Image 2026-06-05 at 13.23.05.jpeg"
    ]
  },
  {
    title: "Correias transportadoras de borracha e Revestimento de ROLOS de tração",
    img: "/correrias transportadoras de borracha e Revestimento de ROLOS de trançao/01.jpeg",
    items: ["Correias transportadoras", "Revestimento de rolos", "Borracha", "Tração"],
    gallery: [
      "/correrias transportadoras de borracha e Revestimento de ROLOS de trançao/01.jpeg",
      "/correrias transportadoras de borracha e Revestimento de ROLOS de trançao/02.jpeg",
      "/correrias transportadoras de borracha e Revestimento de ROLOS de trançao/03.jpeg",
      "/correrias transportadoras de borracha e Revestimento de ROLOS de trançao/WhatsApp Image 2026-06-05 at 13.26.13 (1).jpeg",
      "/correrias transportadoras de borracha e Revestimento de ROLOS de trançao/WhatsApp Image 2026-06-05 at 13.26.13.jpeg",
      "/correrias transportadoras de borracha e Revestimento de ROLOS de trançao/WhatsApp Image 2026-06-05 at 13.26.14 (1).jpeg",
      "/correrias transportadoras de borracha e Revestimento de ROLOS de trançao/WhatsApp Image 2026-06-05 at 13.26.14.jpeg"
    ]
  },
  {
    title: "Vulcanização com prensa a quente!",
    img: "/Vulcanização com prensa a quente/01.jpeg",
    subtitle: "Essa intervenção é realizada nas instalações do cliente em diversos tipos de aplicação na indústria e nas operações aeroportuária",
    items: ["Emendas vulcanizadas", "Prensa a quente", "Manutenção preventiva", "Serviços em campo", "Reparos especializados"],
    gallery: [
      "/Vulcanização com prensa a quente/01.jpeg",
      "/Vulcanização com prensa a quente/02.jpeg",
      "/Vulcanização com prensa a quente/03.jpeg",
      "/Vulcanização com prensa a quente/04.jpeg",
      "/Vulcanização com prensa a quente/05.jpeg"
    ]
  },
  {
    title: "Vulcanização à frio em correias transportadoras de borracha",
    img: "/Vulcanização à frio em correias transportadoras de borracha/01.jpeg",
    subtitle: "Vulcanização a frio é adequada para diversas aplicações na indústria: construção, grãos, logísticas, portos, britagem, cerâmicas e fertilizantes",
    items: ["Vulcanização à frio", "Correias de borracha", "Manutenção e Reparo", "Serviços em campo"],
    gallery: [
      "/Vulcanização à frio em correias transportadoras de borracha/01.jpeg",
      "/Vulcanização à frio em correias transportadoras de borracha/02.jpeg",
      "/Vulcanização à frio em correias transportadoras de borracha/03.jpeg",
      "/Vulcanização à frio em correias transportadoras de borracha/04.jpeg",
      "/Vulcanização à frio em correias transportadoras de borracha/05.jpeg",
      "/Vulcanização à frio em correias transportadoras de borracha/06.jpeg",
      "/Vulcanização à frio em correias transportadoras de borracha/07.jpeg",
      "/Vulcanização à frio em correias transportadoras de borracha/08.jpeg",
      "/Vulcanização à frio em correias transportadoras de borracha/09.jpeg"
    ]
  },
  {
    title: "Reparos ( Remache) em correias transportadoras",
    img: "/Reparos ( Remache) em correias transportadoras/01.jpeg",
    subtitle: "Reparos realizados em pequenos pontos para evitar a perca da correia por inteira e ocasionando grandes paradas não programadas!",
    items: ["Reparos com Remache", "Manutenção emergencial", "Costura em correias", "Recuperação de rasgos", "Reparo a frio"],
    gallery: [
      "/Reparos ( Remache) em correias transportadoras/01.jpeg",
      "/Reparos ( Remache) em correias transportadoras/02.jpeg",
      "/Reparos ( Remache) em correias transportadoras/03.jpeg",
      "/Reparos ( Remache) em correias transportadoras/04.jpeg",
      "/Reparos ( Remache) em correias transportadoras/05.jpeg"
    ]
  },
  {
    title: "Usinagem em geral fabricação de peças de reposição e recuperação",
    img: "/Usinagem em geral fabricação de peças de reposição e recuperação/WhatsApp Image 2026-06-08 at 13.10.17.jpeg",
    items: ["Torno, fresa e solda", "Ferramentaria: dispositivos, jigs e ferramentas"],
    gallery: [
      "/Usinagem em geral fabricação de peças de reposição e recuperação/WhatsApp Image 2026-06-08 at 13.10.17 (1).jpeg",
      "/Usinagem em geral fabricação de peças de reposição e recuperação/WhatsApp Image 2026-06-08 at 13.10.17.jpeg",
      "/Usinagem em geral fabricação de peças de reposição e recuperação/WhatsApp Image 2026-06-08 at 13.10.18 (1).jpeg",
      "/Usinagem em geral fabricação de peças de reposição e recuperação/WhatsApp Image 2026-06-08 at 13.10.18 (2).jpeg",
      "/Usinagem em geral fabricação de peças de reposição e recuperação/WhatsApp Image 2026-06-08 at 13.10.18.jpeg"
    ]
  },
  {
    title: "Montagem Industrial e pintura industrial",
    img: "/Montagem Industrial e pintura industrial/01.jpeg",
    subtitle: "Tubulações, soldas API, MIG e MAG. Fornecimento de mão de obra para montagem e calderaria! Mão de obra para operação de equipamentos de torque!",
    items: ["Montagem Industrial", "Pintura Industrial", "Estruturas Metálicas", "Manutenção Industrial"],
    gallery: [
      "/Montagem Industrial e pintura industrial/01.jpeg",
      "/Montagem Industrial e pintura industrial/02.jpeg",
      "/Montagem Industrial e pintura industrial/03.jpeg",
      "/Montagem Industrial e pintura industrial/04.jpeg",
      "/Montagem Industrial e pintura industrial/05.jpeg"
    ]
  },
  {
    title: "Pintura e jateamento Industrial",
    img: "/Pintura e jateamento Industrial/01.jpeg",
    subtitle: "Obedecendo todos os critérios da norma NBR7348/2017. Tipos de pintura: Proteção antichamas, dutos e tubulação, equipamentos de alta temperatura, reparo de caixa d’água, tanques, guarda corpo, pisos industriais e pintura civil.",
    items: ["Pintura Industrial", "Jateamento", "Revestimentos especiais", "Preparação de superfícies"],
    gallery: [
      "/Pintura e jateamento Industrial/01.jpeg",
      "/Pintura e jateamento Industrial/02.jpeg",
      "/Pintura e jateamento Industrial/03.jpeg",
      "/Pintura e jateamento Industrial/04.jpeg",
      "/Pintura e jateamento Industrial/05.jpeg",
      "/Pintura e jateamento Industrial/06.jpeg",
      "/Pintura e jateamento Industrial/07.jpeg",
      "/Pintura e jateamento Industrial/08.jpeg",
      "/Pintura e jateamento Industrial/09.jpeg"
    ]
  },
  {
    title: "Serviço de Torqueamento Industrial com mão de obra especializada e equipamentos de alta tecnologia",
    img: "/Serviço de Torqueamento Industrial com mão de obra especializada e equipamentos de alta tecnologia!/01.jpeg",
    subtitle: "Distribuidor exclusivo das marcas RAD e TorsionX",
    items: ["Torqueamento Industrial", "Mão de obra especializada", "Equipamentos de alta tecnologia", "Manutenção e Ajuste"],
    gallery: [
      "/Serviço de Torqueamento Industrial com mão de obra especializada e equipamentos de alta tecnologia!/01.jpeg",
      "/Serviço de Torqueamento Industrial com mão de obra especializada e equipamentos de alta tecnologia!/02.jpeg",
      "/Serviço de Torqueamento Industrial com mão de obra especializada e equipamentos de alta tecnologia!/03.jpeg",
      "/Serviço de Torqueamento Industrial com mão de obra especializada e equipamentos de alta tecnologia!/04.jpeg",
      "/Serviço de Torqueamento Industrial com mão de obra especializada e equipamentos de alta tecnologia!/05.jpeg",
      "/Serviço de Torqueamento Industrial com mão de obra especializada e equipamentos de alta tecnologia!/06.jpeg",
      "/Serviço de Torqueamento Industrial com mão de obra especializada e equipamentos de alta tecnologia!/07.jpeg",
      "/Serviço de Torqueamento Industrial com mão de obra especializada e equipamentos de alta tecnologia!/08.jpeg",
      "/Serviço de Torqueamento Industrial com mão de obra especializada e equipamentos de alta tecnologia!/09.jpeg",
      "/Serviço de Torqueamento Industrial com mão de obra especializada e equipamentos de alta tecnologia!/10.jpeg",
      "/Serviço de Torqueamento Industrial com mão de obra especializada e equipamentos de alta tecnologia!/11.jpeg",
      "/Serviço de Torqueamento Industrial com mão de obra especializada e equipamentos de alta tecnologia!/12.jpeg"
    ]
  },
  {
    title: "Caldeiraria e serralheria industrial",
    img: "/Caldeiraria e serralheria industrial/01.jpeg",
    items: ["Caldeiraria", "Serralheria", "Estruturas metálicas", "Soldagem industrial"],
    gallery: [
      "/Caldeiraria e serralheria industrial/01.jpeg",
      "/Caldeiraria e serralheria industrial/02.jpeg",
      "/Caldeiraria e serralheria industrial/03.jpeg"
    ]
  }
];

export default function SolutionsSection() {
  const [selectedSolution, setSelectedSolution] = useState<typeof solutions[0] | null>(null);

  return (
    <section className="py-32 bg-[#050B16] relative overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-6 mb-16 flex flex-col items-center text-center">
        <div className="flex items-center justify-center gap-4 mb-4">
          <div className="h-[2px] w-12 bg-[#E60000]" />
          <span className="text-[#E60000] uppercase tracking-[0.2em] text-sm font-bold">Portfólio de Soluções</span>
          <div className="h-[2px] w-12 bg-[#E60000]" />
        </div>
        <h2 className="text-4xl md:text-5xl font-bold">Catálogo <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-[#E2E8F0]">Industrial</span></h2>
      </div>

      <div className="flex flex-wrap justify-center gap-4 pb-12 px-6 max-w-[1400px] mx-auto">
        {solutions.map((sol, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.05, duration: 0.5 }}
            whileHover={{ scale: 0.98 }}
            onClick={() => setSelectedSolution(sol)}
            className="w-full sm:w-[calc(50%-0.5rem)] md:w-[calc(33.333%-0.666rem)] lg:w-[calc(25%-0.75rem)] shrink-0 h-[450px] relative group cursor-pointer bg-[#0A1F44] overflow-hidden rounded-lg border border-white/5 hover:border-[#E60000]/50 transition-colors"
          >
            <img src={sol.img} alt={sol.title} className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent pointer-events-none" />
            
            <div className="absolute bottom-0 left-0 p-8 w-full flex justify-between items-end">
              <div>
                <h3 className="text-xl font-bold text-white max-w-[250px]">{sol.title}</h3>
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

              <div className="w-full md:w-1/2 h-64 md:h-full relative overflow-hidden bg-[#050B16]">
                {selectedSolution.gallery ? (
                  <div className="grid grid-cols-2 gap-2 p-4 h-full overflow-y-auto" style={{ scrollbarWidth: 'thin', scrollbarColor: '#E60000 #0A1F44' }}>
                    {selectedSolution.gallery.map((img, idx) => (
                      <div key={idx} className="overflow-hidden rounded-lg">
                        <img src={img} alt={`${selectedSolution.title} ${idx + 1}`} className="w-full h-32 md:h-48 object-cover hover:scale-110 transition-transform duration-500 cursor-pointer" />
                      </div>
                    ))}
                  </div>
                ) : (
                  <>
                    <img src={selectedSolution.img} alt={selectedSolution.title} className="w-full h-full object-cover mix-blend-luminosity" />
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent to-[#0A1F44] hidden md:block" />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0A1F44] to-transparent md:hidden" />
                  </>
                )}
              </div>

              <div className="w-full md:w-1/2 p-8 md:p-12 flex flex-col justify-center overflow-y-auto">
                <div className="text-xs font-mono text-[#E60000] tracking-[0.2em] uppercase mb-4">Detalhes Técnicos</div>
                <h3 className={`text-3xl md:text-4xl font-bold text-white ${selectedSolution.subtitle ? 'mb-4' : 'mb-8'}`}>{selectedSolution.title}</h3>
                {selectedSolution.subtitle && (
                  <p className="text-[#E2E8F0] text-lg font-light mb-8 leading-relaxed">
                    {selectedSolution.subtitle}
                  </p>
                )}
                
                <ul className="space-y-4 mb-8">
                  {selectedSolution.items.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-3 border-b border-white/5 pb-3">
                      <div className="w-1.5 h-1.5 rounded-full bg-[#E60000] mt-2" />
                      <span className="text-[#E2E8F0] text-lg">{item}</span>
                    </li>
                  ))}
                </ul>

                <a 
                  href={`https://wa.me/5592981387644?text=Olá, gostaria de solicitar uma cotação sobre ${encodeURIComponent(selectedSolution.title)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-8 py-4 bg-[#E60000] text-white font-bold uppercase tracking-widest text-sm hover:bg-white hover:text-[#0A1F44] transition-colors mt-auto w-max rounded-full inline-block"
                >
                  Solicitar Cotação
                </a>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
