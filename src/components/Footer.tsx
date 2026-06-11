import { Mail, MapPin, Phone } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[#02050A] pt-20 sm:pt-28 lg:pt-32 pb-10 px-4 sm:px-6 border-t border-[#123D8D]/30 relative overflow-hidden">
      <div className="absolute right-0 top-0 w-1/2 h-full opacity-5 pointer-events-none bg-[url('https://upload.wikimedia.org/wikipedia/commons/thumb/1/1a/Amazonas_in_Brazil.svg/1024px-Amazonas_in_Brazil.svg.png')] bg-no-repeat bg-right bg-contain" />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 sm:gap-12 mb-14 sm:mb-20">
          {/* Logo e descrição */}
          <div className="sm:col-span-2 lg:col-span-1">
            <img
              src="/logo.png"
              alt="JCI Industrial Logo"
              className="h-16 sm:h-20 w-auto object-contain mb-5 drop-shadow-[0_0_15px_rgba(255,255,255,0.2)]"
            />
            <p className="text-[#E2E8F0]/60 leading-relaxed text-sm sm:text-base">
              Engenharia, tecnologia e confiabilidade. Soluções preparadas para atender projetos complexos do Polo Industrial de Manaus.
            </p>
          </div>

          {/* Contato */}
          <div>
            <h5 className="font-bold text-white uppercase tracking-widest mb-5 text-sm">Contato</h5>
            <ul className="space-y-3 text-[#E2E8F0]/80 text-sm font-mono">
              <li className="flex items-center gap-3 hover:text-white transition-colors cursor-pointer">
                <Mail className="w-4 h-4 text-[#E60000] shrink-0" />
                <span className="break-all">vendas@jciindustrial.com.br</span>
              </li>
              {["(92) 98138-7644", "(92) 98443-0276", "(92) 98855-8257"].map((tel) => (
                <li key={tel} className="flex items-center gap-3 hover:text-white transition-colors cursor-pointer">
                  <Phone className="w-4 h-4 text-[#E60000] shrink-0" />
                  {tel}
                </li>
              ))}
              <li className="flex items-center gap-3 hover:text-white transition-colors cursor-pointer">
                <MapPin className="w-4 h-4 text-[#E60000] shrink-0" />
                www.jciindustrial.com.br
              </li>
            </ul>
          </div>

          {/* Estrutura */}
          <div>
            <h5 className="font-bold text-white uppercase tracking-widest mb-5 text-sm">Estrutura</h5>
            <ul className="space-y-3 text-[#E2E8F0]/80 text-sm">
              {["Galpão 550m²", "Ferramentaria", "Automação", "Serralheria"].map((item) => (
                <li key={item}>
                  <a href="#" className="hover:text-[#E60000] transition-colors">{item}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* Certificações */}
          <div>
            <h5 className="font-bold text-white uppercase tracking-widest mb-5 text-sm">Certificações</h5>
            <ul className="space-y-3 text-[#E2E8F0]/80 text-sm">
              {["ISO 9001", "Adequação NR12", "Engenharia Registrada"].map((cert) => (
                <li key={cert} className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-[#25D366] rounded-full shrink-0" />
                  {cert}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t border-[#123D8D]/30 pt-6 sm:pt-8 flex flex-col sm:flex-row justify-between items-center gap-4 text-xs text-[#E2E8F0]/50 font-mono text-center">
          <p>© {new Date().getFullYear()} JCI Industrial. Todos os direitos reservados.</p>

          <div className="flex items-center gap-1 text-sm">
            Produzida com <span className="text-[#E60000]">❤️</span> por
            <a href="https://camaly.com.br/" target="_blank" rel="noopener noreferrer" className="font-bold text-white hover:text-[#E60000] transition-colors tracking-widest ml-1">
              CAMALY
            </a>
          </div>

          <div className="flex gap-4 sm:gap-6">
            <a href="#" className="hover:text-white transition-colors">Privacidade</a>
            <a href="#" className="hover:text-white transition-colors">Termos de Uso</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
