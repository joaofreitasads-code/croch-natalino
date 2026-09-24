import React from 'react';
import { CollectionMode } from '../types';
import { NATALINO_DATA, CATOLICO_DATA } from '../data';
import { ShieldCheck, ShoppingCart, Award } from 'lucide-react';

interface RecipeStructureSectionProps {
  mode: CollectionMode;
  onCtaClick: () => void;
}

export const RecipeStructureSection: React.FC<RecipeStructureSectionProps> = ({ mode, onCtaClick }) => {
  const data = mode === 'natalino' ? NATALINO_DATA : CATOLICO_DATA;

  return (
    <section className="py-14 px-4 bg-[#f3efe6] md:bg-[#e4dccd]/80 border-b border-amber-900/10">
      <div className="max-w-5xl mx-auto text-center">
        {/* Section Header */}
        <h2 className="font-georgia text-3xl sm:text-4xl md:text-5xl font-bold uppercase text-[#bf1414] tracking-tight">
          Veja o que você vai receber
        </h2>

        {/* Structure badge */}
        <div className="mt-4 mb-2 inline-block">
          <span className="inline-block px-6 py-2 rounded-full bg-gradient-to-r from-[#99583b] to-[#ead3a7] text-neutral-900 font-abeezee font-bold text-sm sm:text-base shadow-md">
            {data.structureBadge}
          </span>
        </div>

        {/* Script Highlight */}
        <h3 className="font-dancing text-4xl sm:text-5xl text-[#008735] font-bold mt-1 mb-3">
          Clara e Bonitas
        </h3>

        <p className="font-assistant text-base sm:text-lg text-neutral-700 max-w-2xl mx-auto mb-10">
          {data.structureSubtitle}
        </p>

        {/* Steps Grid */}
        <div className={`grid grid-cols-1 ${data.structureSteps.length === 3 ? 'md:grid-cols-3' : 'sm:grid-cols-2 lg:grid-cols-4'} gap-6`}>
          {data.structureSteps.map((step, idx) => (
            <div
              key={idx}
              className="bg-gradient-to-b from-[#9e1212] via-[#870e0e] to-[#700909] text-white rounded-2xl p-4 sm:p-5 shadow-xl border-2 border-[#e5b54f] flex flex-col justify-between hover:shadow-2xl transition-all duration-300 hover:scale-[1.02]"
            >
              {/* Image Preview */}
              <div className="rounded-xl overflow-hidden mb-4 bg-white shadow-inner flex items-center justify-center p-2 border border-amber-300/40">
                <img
                  src={step.image}
                  alt={step.title}
                  className="w-full h-auto max-h-72 object-contain rounded-lg"
                  loading="lazy"
                  decoding="async"
                  referrerPolicy="no-referrer"
                />
              </div>

              {/* Badge for page */}
              <div className="mb-3">
                <span className="inline-block w-full py-1.5 px-2 rounded-full bg-gradient-to-r from-[#ffd700] via-[#f7d057] to-[#e5b54f] text-[#630808] font-abeezee font-bold text-xs tracking-wide shadow-sm border border-white">
                  {step.pageNumber}
                </span>
              </div>

              {/* Title & Desc */}
              <h4 className="font-dancing text-2xl sm:text-3xl text-white font-bold mb-2 drop-shadow-sm">
                {step.title}
              </h4>
              <p className="font-assistant text-sm text-white font-medium leading-relaxed drop-shadow-sm">
                {step.description}
              </p>
            </div>
          ))}
        </div>

        {/* CTA Button */}
        <div className="mt-12">
          <button
            onClick={onCtaClick}
            className="w-full sm:w-auto min-w-[280px] sm:min-w-[340px] px-8 py-4 bg-[#008735] hover:bg-[#00bf63] text-white font-abeezee font-bold text-lg md:text-xl rounded-full shadow-lg transition-transform hover:scale-105 animate-pulse-zoom cursor-pointer"
          >
            SIM, EU QUERO AS RECEITAS
          </button>
          <div className="mt-3 flex items-center justify-center gap-3 text-xs sm:text-sm text-neutral-600 font-abeezee font-semibold">
            <span className="inline-flex items-center gap-1"><ShieldCheck className="w-4 h-4 text-emerald-700" /> Privacidade protegida</span>
            <span>•</span>
            <span className="inline-flex items-center gap-1"><ShoppingCart className="w-4 h-4 text-emerald-700" /> Compra segura</span>
            <span>•</span>
            <span className="inline-flex items-center gap-1"><Award className="w-4 h-4 text-emerald-700" /> Garantia de satisfação</span>
          </div>
        </div>
      </div>
    </section>
  );
};
