import React from 'react';
import { CollectionMode } from '../types';
import { optimizeImageUrl } from '../utils/optimizeMedia';

interface EarningsSectionProps {
  mode: CollectionMode;
  onCtaClick: () => void;
}

export const EarningsSection: React.FC<EarningsSectionProps> = ({ mode, onCtaClick }) => {
  return (
    <section className="py-16 px-4 bg-[#d8c7a8] border-b border-amber-900/10">
      <div className="max-w-5xl mx-auto text-center">
        {/* Badge */}
        <div className="inline-block mb-3">
          <span className="px-5 py-2 rounded-full border border-[#99583b] bg-gradient-to-r from-emerald-800 to-amber-800 text-white font-montserrat font-bold text-xs sm:text-sm tracking-wider shadow-sm uppercase">
            POSSIBILIDADE DE GANHO
          </span>
        </div>

        {/* Title */}
        <h2 className="font-georgia text-3xl sm:text-4xl md:text-5xl font-bold text-[#bf1414] mt-1">
          Quanto você pode Faturar
        </h2>

        <h3 className="font-dancing text-4xl sm:text-5xl text-[#008735] font-bold mt-1 mb-4">
          No conforto da sua casa
        </h3>

        <p className="font-assistant text-base sm:text-lg text-neutral-800 max-w-2xl mx-auto mb-10">
          Duas formas práticas de produção e venda sem sair de casa, lucrando o ano todo com {mode === 'natalino' ? 'amigurumi natalino' : 'crochê católico'}.
        </p>

        {/* 2 Ways Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left">
          {/* Forma 1 - Imagem Cenário de Renda Extra */}
          <div className="rounded-3xl overflow-hidden shadow-xl border-2 border-[#d4a017]/50 bg-white flex items-center justify-center transition-all duration-300 hover:shadow-2xl hover:scale-[1.01]">
            <img
              src={optimizeImageUrl('https://i.imgur.com/9q6Kqcn.png', 700)}
              alt="Cenário de Renda Extra - Transforme suas horas livres em encomendas de Natal"
              className="w-full h-auto object-contain rounded-3xl"
              loading="lazy"
              decoding="async"
              referrerPolicy="no-referrer"
            />
          </div>

          {/* Forma 2 - Imagem Cenário Renda Extra / Lucrativa */}
          <div className="rounded-3xl overflow-hidden shadow-xl border-2 border-emerald-600/50 bg-white flex items-center justify-center transition-all duration-300 hover:shadow-2xl hover:scale-[1.01]">
            <img
              src={optimizeImageUrl('https://i.imgur.com/eH834Pc.png', 700)}
              alt="Cenário de Faturamento e Encomendas"
              className="w-full h-auto object-contain rounded-3xl"
              loading="lazy"
              decoding="async"
              referrerPolicy="no-referrer"
            />
          </div>
        </div>

        {/* CTA Button */}
        <div className="mt-12">
          <button
            onClick={onCtaClick}
            className="w-full sm:w-auto min-w-[280px] sm:min-w-[340px] px-8 py-4 bg-[#008735] hover:bg-[#00bf63] text-white font-abeezee font-bold text-lg md:text-xl rounded-full shadow-lg transition-transform hover:scale-105 animate-pulse-zoom cursor-pointer"
          >
            SIM, EU QUERO AS RECEITAS
          </button>
        </div>
      </div>
    </section>
  );
};
