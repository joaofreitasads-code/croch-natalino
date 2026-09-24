import React from 'react';
import { Shield, Lock } from 'lucide-react';

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#24130d] text-amber-100/80 py-10 px-4 text-xs sm:text-sm font-assistant text-center border-t border-amber-950">
      <div className="max-w-4xl mx-auto space-y-4">
        <div className="flex items-center justify-center gap-2 text-white font-georgia text-lg font-bold">
          <Lock className="w-4 h-4 text-emerald-400" />
          <span>Artesanato de Crochê • Ambiente 100% Seguro</span>
        </div>

        <p className="max-w-2xl mx-auto text-amber-200/60 text-xs leading-relaxed">
          Este site não é afiliado ao Facebook ou a qualquer entidade da Meta Inc. Depois que você sair do Facebook, a responsabilidade não é deles e sim do nosso site. Fazemos todos os esforços para indicar claramente e mostrar todas as provas do produto e usar resultados reais.
        </p>

        <div className="pt-4 border-t border-amber-900/40 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-amber-300/70">
          <div>
            © {currentYear} Artesanato de Crochê. Todos os direitos reservados.
          </div>
          <div className="flex items-center gap-4">
            <span className="inline-flex items-center gap-1">
              <Shield className="w-3.5 h-3.5 text-emerald-400" /> Pagamento Processado via Kiwify
            </span>
            <span>•</span>
            <span>Certificado SSL 256-bit</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
