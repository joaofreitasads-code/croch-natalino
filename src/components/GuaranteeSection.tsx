import React from 'react';
import { ShieldCheck, ShoppingCart, Award } from 'lucide-react';

interface GuaranteeSectionProps {
  onCtaClick: () => void;
}

export const GuaranteeSection: React.FC<GuaranteeSectionProps> = ({ onCtaClick }) => {
  return (
    <section className="py-16 px-4 bg-[#d8c7a8] border-b border-amber-900/10">
      <div className="max-w-3xl mx-auto text-center">
        {/* Seal Image */}
        <div className="w-44 sm:w-56 mx-auto mb-4">
          <img
            src="https://i.imgur.com/L50hAWa.png"
            alt="Selo de Garantia 14 Dias"
            className="w-full h-auto object-contain drop-shadow-xl"
            loading="lazy"
            decoding="async"
            referrerPolicy="no-referrer"
          />
        </div>

        {/* Heading */}
        <h2 className="font-atkinson text-2xl sm:text-3xl md:text-4xl font-extrabold text-neutral-900 tracking-tight mb-4 leading-snug">
          Você tem <span className="text-[#99583b]">14 dias</span> para experimentar sem riscos
        </h2>

        {/* Text */}
        <p className="font-abeezee text-base sm:text-lg text-neutral-800 font-normal leading-relaxed max-w-2xl mx-auto mb-4">
          Acesse todas as receitas, conheça o material e veja se ele realmente faz sentido para você. Se, dentro de 14 dias, não ficar satisfeita, basta solicitar o reembolso e devolveremos 100% do valor investido. Sua compra é totalmente segura.
        </p>

        <p className="font-abeezee text-xl sm:text-2xl font-bold text-[#e60000] mb-8">
          O risco é todo nosso.
        </p>

        {/* CTA */}
        <button
          onClick={onCtaClick}
          className="w-full sm:w-auto min-w-[280px] sm:min-w-[340px] px-8 py-4 bg-[#00e639] hover:bg-[#00ff44] text-neutral-950 font-abeezee font-black text-lg md:text-xl rounded-full shadow-[0_0_25px_rgba(0,230,57,0.6)] border-2 border-white transition-transform hover:scale-105 animate-pulse-zoom cursor-pointer"
        >
          SIM, EU QUERO AS RECEITAS
        </button>

        <div className="mt-4 flex flex-wrap items-center justify-center gap-3 text-xs sm:text-sm text-neutral-700 font-abeezee font-semibold">
          <span className="inline-flex items-center gap-1"><ShieldCheck className="w-4 h-4 text-emerald-800" /> Privacidade protegida</span>
          <span>•</span>
          <span className="inline-flex items-center gap-1"><ShoppingCart className="w-4 h-4 text-emerald-800" /> Compra segura</span>
          <span>•</span>
          <span className="inline-flex items-center gap-1"><Award className="w-4 h-4 text-emerald-800" /> Garantia de satisfação</span>
        </div>
      </div>
    </section>
  );
};
