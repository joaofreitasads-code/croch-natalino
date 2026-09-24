import React, { useState } from 'react';
import { FAQ_ITEMS } from '../data';
import { ChevronDown, ChevronUp, HelpCircle, ShieldCheck, ShoppingCart, Award } from 'lucide-react';

interface FaqSectionProps {
  onCtaClick: () => void;
}

export const FaqSection: React.FC<FaqSectionProps> = ({ onCtaClick }) => {
  const [openIdx, setOpenIdx] = useState<number | null>(0);

  const toggleAccordion = (index: number) => {
    setOpenIdx(openIdx === index ? null : index);
  };

  return (
    <section className="py-16 px-4 bg-[#99583b] text-white border-b border-amber-950">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="font-georgia text-3xl sm:text-4xl md:text-5xl font-extrabold text-white mb-2 uppercase drop-shadow-md">
          PERGUNTAS FREQUENTES
        </h2>

        <p className="font-assistant text-base sm:text-lg text-amber-200 mb-10">
          Tire suas dúvidas antes de garantir sua coleção exclusiva
        </p>

        {/* Accordion Container */}
        <div className="space-y-3 text-left">
          {FAQ_ITEMS.map((item, idx) => {
            const isOpen = openIdx === idx;
            return (
              <div
                key={idx}
                className="rounded-2xl overflow-hidden shadow-md border border-amber-800/40 bg-[#ffeaa9] text-neutral-900 transition-colors"
              >
                <button
                  onClick={() => toggleAccordion(idx)}
                  className="w-full py-4 px-5 sm:px-6 flex items-center justify-between gap-4 font-abeezee font-bold text-base sm:text-lg text-left cursor-pointer hover:bg-[#ffe594] transition-colors"
                >
                  <span className="flex items-center gap-2">
                    <HelpCircle className="w-5 h-5 text-[#99583b] shrink-0" />
                    {item.question}
                  </span>
                  {isOpen ? (
                    <ChevronUp className="w-5 h-5 text-[#99583b] shrink-0" />
                  ) : (
                    <ChevronDown className="w-5 h-5 text-[#99583b] shrink-0" />
                  )}
                </button>

                {isOpen && (
                  <div className="px-5 sm:px-6 pb-5 pt-1 text-sm sm:text-base font-assistant font-medium text-neutral-800 leading-relaxed border-t border-amber-200">
                    {item.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* CTA */}
        <div className="mt-12">
          <button
            onClick={onCtaClick}
            className="w-full sm:w-auto min-w-[280px] sm:min-w-[340px] px-8 py-4 bg-[#008735] hover:bg-[#00bf63] text-white font-abeezee font-bold text-lg md:text-xl rounded-full shadow-lg transition-transform hover:scale-105 animate-pulse-zoom cursor-pointer"
          >
            SIM, EU QUERO AS RECEITAS
          </button>
          <div className="mt-4 flex flex-wrap items-center justify-center gap-3 text-xs sm:text-sm text-amber-200 font-abeezee font-medium">
            <span className="inline-flex items-center gap-1"><ShieldCheck className="w-4 h-4 text-emerald-400" /> Privacidade protegida</span>
            <span>•</span>
            <span className="inline-flex items-center gap-1"><ShoppingCart className="w-4 h-4 text-emerald-400" /> Compra segura</span>
            <span>•</span>
            <span className="inline-flex items-center gap-1"><Award className="w-4 h-4 text-emerald-400" /> Garantia de satisfação</span>
          </div>
        </div>
      </div>
    </section>
  );
};
