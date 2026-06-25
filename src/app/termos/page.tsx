import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function TermosPage() {
  return (
    <main className="min-h-screen bg-[#050B16] text-white pt-32 pb-20 px-4 sm:px-6">
      <div className="max-w-4xl mx-auto">
        <Link href="/" className="inline-flex items-center gap-2 text-[#E60000] hover:text-white transition-colors mb-8 text-sm font-bold tracking-widest uppercase">
          <ArrowLeft className="w-4 h-4" /> Voltar para o Início
        </Link>
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-8">Termos de Uso</h1>
        <div className="space-y-6 text-[#E2E8F0] font-light leading-relaxed">
          <p>Ao acessar ao site da JCI Industrial, concorda em cumprir estes termos de serviço, todas as leis e regulamentos aplicáveis e concorda que é responsável pelo cumprimento de todas as leis locais aplicáveis.</p>
          <p>Se você não concordar com algum desses termos, está proibido de usar ou acessar este site. Os materiais contidos neste site são protegidos pelas leis de direitos autorais e marcas comerciais aplicáveis.</p>
          <p>É concedida permissão para baixar temporariamente uma cópia dos materiais (informações ou software) no site JCI Industrial, apenas para visualização transitória pessoal e não comercial.</p>
          <p>Esta é a concessão de uma licença, não uma transferência de título e, sob esta licença, você não pode: modificar ou copiar os materiais; usar os materiais para qualquer finalidade comercial ou para exibição pública (comercial ou não comercial); tentar descompilar ou fazer engenharia reversa de qualquer software contido no site.</p>
        </div>
      </div>
    </main>
  );
}
