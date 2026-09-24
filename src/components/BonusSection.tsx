import React from 'react';
import { CollectionMode } from '../types';
import { NATALINO_DATA, CATOLICO_DATA } from '../data';
import { Gift } from 'lucide-react';

interface BonusSectionProps {
  mode: CollectionMode;
  onCtaClick: () => void;
}

export const BonusSection: React.FC<BonusSectionProps> = ({ mode, onCtaClick }) => {
  const data = mode === 'natalino' ? NATALINO_DATA : CATOLICO_DATA;

  return (
    <section className="py-16 px-4 bg-[#f5f1e8] md:bg-[#e4dccd]/50 border-b border-amber-900/10">
      <div className="max-w-6xl mx-auto text-center">
        {/* Badge */}
        <div className="inline-block mb-3">
          <span className="inline-flex items-center gap-2 px-6 py-2 rounded-full bg-gradient-to-r from-[#a81313] to-[#8f0f0f] border-2 border-[#e5b54f] text-white font-dancing text-2xl sm:text-3xl font-bold shadow-md">
            <Gift className="w-6 h-6 text-yellow-300" />
            Bônus Exclusivos
          </span>
        </div>

        {/* Title */}
        <h2 className="font-georgia text-3xl sm:text-4xl md:text-5xl font-bold text-neutral-900 mt-1 mb-2">
          E ainda tem 5 bônus exclusivos para você
        </h2>

        <p className="font-assistant text-base sm:text-lg text-[#b26b00] font-semibold max-w-3xl mx-auto mb-12">
          Materiais práticos pra organizar sua produção, precificar e vender quando quiser, incluídos sem nenhum custo extra.
        </p>

        {/* 5 Cards Grid with Compact Size and Price Badge Removed */}
        <div className="flex flex-wrap justify-center gap-5 sm:gap-6 max-w-5xl mx-auto">
          {data.bonuses.map((bonus, idx) => (
            <div
              key={idx}
              className="relative w-full sm:w-[calc(50%-0.85rem)] lg:w-[calc(33.333%-1rem)] max-w-[320px] bg-gradient-to-b from-[#a81313] via-[#8f0f0f] to-[#750b0b] text-white rounded-3xl p-4 sm:p-5 shadow-[0_15px_35px_rgba(117,11,11,0.45)] flex flex-col justify-between items-center text-center border-4 border-[#e5b54f] ring-2 ring-[#750b0b] ring-offset-2 ring-offset-[#e5b54f]/40 transition-transform hover:-translate-y-1.5 duration-300 group"
            >
              {/* Ornate Christmas Corner Filigrees */}
              <div className="absolute top-2.5 left-2.5 w-4 h-4 border-t-2 border-l-2 border-[#ffd700] rounded-tl-sm pointer-events-none" />
              <div className="absolute top-2.5 right-2.5 w-4 h-4 border-t-2 border-r-2 border-[#ffd700] rounded-tr-sm pointer-events-none" />
              <div className="absolute bottom-2.5 left-2.5 w-4 h-4 border-b-2 border-l-2 border-[#ffd700] rounded-bl-sm pointer-events-none" />
              <div className="absolute bottom-2.5 right-2.5 w-4 h-4 border-b-2 border-r-2 border-[#ffd700] rounded-br-sm pointer-events-none" />
              
              {/* Corner Star Accents */}
              <span className="absolute top-1.5 left-1.5 text-amber-300/90 text-xs pointer-events-none select-none">✦</span>
              <span className="absolute top-1.5 right-1.5 text-amber-300/90 text-xs pointer-events-none select-none">✦</span>
              <span className="absolute bottom-1.5 left-1.5 text-amber-300/90 text-xs pointer-events-none select-none">✦</span>
              <span className="absolute bottom-1.5 right-1.5 text-amber-300/90 text-xs pointer-events-none select-none">✦</span>

              {/* 1. Bonus Image (Proportionally Compact & Borderless) */}
              <div className="w-full aspect-square max-h-[220px] sm:max-h-[240px] mb-3 flex items-center justify-center">
                <img
                  src={bonus.image}
                  alt={bonus.title}
                  className="w-full h-full object-contain drop-shadow-[0_12px_24px_rgba(0,0,0,0.45)] group-hover:scale-105 transition-transform duration-300"
                  loading="lazy"
                  decoding="async"
                  referrerPolicy="no-referrer"
                />
              </div>

              {/* 2. Copy Container */}
              <div className="flex-1 flex flex-col items-center w-full">
                {/* Yellow Bonus Tag */}
                <div className="inline-block mb-2">
                  <span className="px-3.5 py-0.5 rounded-full bg-gradient-to-r from-[#ffd700] via-[#f7d057] to-[#e5b54f] text-[#630808] font-abeezee font-bold text-xs shadow-md uppercase tracking-wider border border-amber-200">
                    {bonus.number}
                  </span>
                </div>

                {/* Title */}
                <h3 className="font-assistant text-base sm:text-lg font-bold text-white mb-1.5 leading-snug">
                  {bonus.title}
                </h3>

                <div className="w-12 h-0.5 bg-amber-300/60 my-1.5 rounded-full" />

                {/* Description */}
                <p className="font-assistant text-xs sm:text-sm text-amber-100/90 font-normal leading-relaxed">
                  {bonus.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
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
