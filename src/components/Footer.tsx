import { Mail, MapPin, Phone, MessageSquare } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[#02050A] pt-32 pb-12 px-6 border-t border-[#123D8D]/30 relative overflow-hidden">
      {/* Abstract Map Concept */}
      <div className="absolute right-0 top-0 w-1/2 h-full opacity-5 pointer-events-none bg-[url('https://upload.wikimedia.org/wikipedia/commons/thumb/1/1a/Amazonas_in_Brazil.svg/1024px-Amazonas_in_Brazil.svg.png')] bg-no-repeat bg-right bg-contain" />
      
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-20">
          <div className="lg:col-span-1">
            <img 
              src="/logo.png" 
              alt="JCI Industrial Logo" 
              className="h-20 w-auto object-contain mb-6 drop-shadow-[0_0_15px_rgba(255,255,255,0.2)]" 
            />
            <p className="text-[#E2E8F0]/60 mb-6 leading-relaxed">
              Engenharia, tecnologia e confiabilidade. Soluções preparadas para atender projetos complexos do Polo Industrial de Manaus.
            </p>
          </div>

          <div>
            <h5 className="font-bold text-white uppercase tracking-widest mb-6 text-sm">Contato</h5>
            <ul className="space-y-4 text-[#E2E8F0]/80 text-sm font-mono">
              <li className="flex items-center gap-3 hover:text-white transition-colors cursor-pointer">
                <Phone className="w-4 h-4 text-[#E60000]" />
                (92) 3636-6883
              </li>
              <li className="flex items-center gap-3 hover:text-white transition-colors cursor-pointer">
                <MessageSquare className="w-4 h-4 text-[#E60000]" />
                (92) 98138-7644
              </li>
              <li className="flex items-center gap-3 hover:text-white transition-colors cursor-pointer">
                <Mail className="w-4 h-4 text-[#E60000]" />
                vendas@jciindustrial.com.br
              </li>
              <li className="flex items-center gap-3 hover:text-white transition-colors cursor-pointer">
                <MapPin className="w-4 h-4 text-[#E60000]" />
                www.jciindustrial.com.br
              </li>
            </ul>
          </div>

          <div>
            <h5 className="font-bold text-white uppercase tracking-widest mb-6 text-sm">Estrutura</h5>
            <ul className="space-y-3 text-[#E2E8F0]/80 text-sm">
              <li><a href="#" className="hover:text-[#E60000] transition-colors">Galpão 550m²</a></li>
              <li><a href="#" className="hover:text-[#E60000] transition-colors">Ferramentaria</a></li>
              <li><a href="#" className="hover:text-[#E60000] transition-colors">Automação</a></li>
              <li><a href="#" className="hover:text-[#E60000] transition-colors">Serralheria</a></li>
            </ul>
          </div>

          <div>
            <h5 className="font-bold text-white uppercase tracking-widest mb-6 text-sm">Certificações</h5>
            <ul className="space-y-3 text-[#E2E8F0]/80 text-sm">
              <li className="flex items-center gap-2"><div className="w-2 h-2 bg-[#25D366] rounded-full" /> ISO 9001</li>
              <li className="flex items-center gap-2"><div className="w-2 h-2 bg-[#25D366] rounded-full" /> Adequação NR12</li>
              <li className="flex items-center gap-2"><div className="w-2 h-2 bg-[#25D366] rounded-full" /> Engenharia Registrada</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-[#123D8D]/30 pt-8 flex flex-col md:flex-row justify-between items-center gap-6 text-xs text-[#E2E8F0]/50 font-mono">
          <p>© {new Date().getFullYear()} JCI Industrial. Todos os direitos reservados.</p>
          
          <div className="flex items-center gap-1 text-sm">
            Produzida com <span className="text-[#E60000]">❤️</span> por 
            <a href="https://camaly.com.br/" target="_blank" rel="noopener noreferrer" className="font-bold text-white hover:text-[#E60000] transition-colors tracking-widest ml-1">
              CAMALY
            </a>
          </div>

          <div className="flex gap-6">
            <a href="#" className="hover:text-white transition-colors">Política de Privacidade</a>
            <a href="#" className="hover:text-white transition-colors">Termos de Uso</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
