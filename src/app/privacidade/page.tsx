import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function PrivacidadePage() {
  return (
    <main className="min-h-screen bg-[#050B16] text-white pt-32 pb-20 px-4 sm:px-6">
      <div className="max-w-4xl mx-auto">
        <Link href="/" className="inline-flex items-center gap-2 text-[#E60000] hover:text-white transition-colors mb-8 text-sm font-bold tracking-widest uppercase">
          <ArrowLeft className="w-4 h-4" /> Voltar para o Início
        </Link>
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-8">Política de Privacidade</h1>
        <div className="space-y-6 text-[#E2E8F0] font-light leading-relaxed">
          <p>A sua privacidade é importante para nós. É política da JCI Industrial respeitar a sua privacidade em relação a qualquer informação sua que possamos coletar no site JCI Industrial, e outros sites que possuímos e operamos.</p>
          <p>Solicitamos informações pessoais apenas quando realmente precisamos delas para lhe fornecer um serviço. Fazemo-lo por meios justos e legais, com o seu conhecimento e consentimento. Também informamos por que estamos coletando e como será usado.</p>
          <p>Apenas retemos as informações coletadas pelo tempo necessário para fornecer o serviço solicitado. Quando armazenamos dados, protegemos dentro de meios comercialmente aceitáveis ​​para evitar perdas e roubos, bem como acesso, divulgação, cópia, uso ou modificação não autorizados.</p>
          <p>Não compartilhamos informações de identificação pessoal publicamente ou com terceiros, exceto quando exigido por lei.</p>
        </div>
      </div>
    </main>
  );
}
