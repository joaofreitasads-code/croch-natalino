import React from 'react';
import { CollectionMode } from '../types';
import { X, ShieldCheck, ShoppingCart, Award, Sparkles } from 'lucide-react';
import { NATALINO_DATA, CATOLICO_DATA } from '../data';

interface OpportunitySectionProps {
  mode: CollectionMode;
  onCtaClick: () => void;
}

export const OpportunitySection: React.FC<OpportunitySectionProps> = ({ mode, onCtaClick }) => {
  const data = mode === 'natalino' ? NATALINO_DATA : CATOLICO_DATA;

  const notNeeded = [
    'Saber criar receitas de crochê',
    'Desenvolver modelos do zero',
    'Ter anos de experiência',
    'Investir em cursos caros',
    'Perder horas buscando receitas espalhadas na internet'
  ];

  return (
    <section className="py-16 px-4 bg-[#f5f1e8] md:bg-[#e4dccd]/50 border-b border-amber-900/10 overflow-hidden">
      <div className="max-w-5xl mx-auto">
        {/* Main Red Festive Card */}
        <div className="relative bg-gradient-to-br from-[#a81313] via-[#8c0e0e] to-[#700909] text-white rounded-3xl p-6 sm:p-10 md:p-12 shadow-[0_20px_50px_rgba(117,11,11,0.45)] border-4 border-[#e5b54f] ring-2 ring-[#700909] ring-offset-2 ring-offset-[#e5b54f]/40">
          {/* Ornate Christmas Corner Filigrees */}
          <div className="absolute top-3 left-3 w-4 h-4 border-t-2 border-l-2 border-[#ffd700] rounded-tl-sm pointer-events-none" />
          <div className="absolute top-3 right-3 w-4 h-4 border-t-2 border-r-2 border-[#ffd700] rounded-tr-sm pointer-events-none" />
          <div className="absolute bottom-3 left-3 w-4 h-4 border-b-2 border-l-2 border-[#ffd700] rounded-bl-sm pointer-events-none" />
          <div className="absolute bottom-3 right-3 w-4 h-4 border-b-2 border-r-2 border-[#ffd700] rounded-br-sm pointer-events-none" />
          
          <span className="absolute top-2 left-2 text-amber-300/90 text-xs pointer-events-none select-none">✦</span>
          <span className="absolute top-2 right-2 text-amber-300/90 text-xs pointer-events-none select-none">✦</span>
          <span className="absolute bottom-2 left-2 text-amber-300/90 text-xs pointer-events-none select-none">✦</span>
          <span className="absolute bottom-2 right-2 text-amber-300/90 text-xs pointer-events-none select-none">✦</span>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Left: Red Christmas Image */}
            <div className="lg:col-span-5 flex justify-center order-2 lg:order-1">
              <div className="relative max-w-sm w-full group">
                <div className="rounded-2xl overflow-hidden shadow-2xl border-2 border-amber-300/50 bg-black/20 p-2">
                  <img
                    src={data.heroImage || 'https://media.atomicatmedia.net/u/K0g3hTUvVFQ3mhBFVs2JSfKk5WQ2/Pictures/Fjejip6581861.png'}
                    alt="Peças de Amigurumi Natalino"
                    className="w-full h-auto object-contain rounded-xl drop-shadow-2xl group-hover:scale-105 transition-transform duration-300"
                    loading="lazy"
                    decoding="async"
                    referrerPolicy="no-referrer"
                  />
                </div>
              </div>
            </div>

            {/* Right: Content */}
            <div className="lg:col-span-7 text-left order-1 lg:order-2">
              {/* Top Badge */}
              <div className="inline-block mb-3">
                <span className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-gradient-to-r from-[#ffd700] via-[#f7d057] to-[#e5b54f] text-[#630808] font-abeezee font-bold text-xs sm:text-sm shadow-md uppercase tracking-wider border border-amber-200">
                  <Sparkles className="w-4 h-4 text-[#630808]" />
                  Facilidade & Praticidade
                </span>
              </div>

              {/* Main Headline */}
              <h2 className="font-georgia text-2xl sm:text-3xl md:text-4xl font-bold uppercase text-white leading-tight mb-3">
                VOCÊ PODE COMEÇAR A PRODUZIR PARA O NATAL MESMO SEM SER ESPECIALISTA
              </h2>

              {/* Subtitle */}
              <p className="font-assistant text-lg sm:text-xl font-bold text-yellow-300 mb-6">
                Com as receitas certas, você não precisa:
              </p>

              {/* List */}
              <div className="space-y-3.5 mb-2">
                {notNeeded.map((item, idx) => (
                  <div key={idx} className="flex items-center gap-3.5 bg-black/20 rounded-xl p-3 border border-white/10 hover:border-amber-300/40 transition-colors">
                    <div className="w-7 h-7 rounded-full bg-red-950/80 border border-amber-300/60 flex items-center justify-center shrink-0 shadow-inner">
                      <X className="w-4 h-4 text-yellow-300 stroke-[3]" />
                    </div>
                    <span className="font-assistant font-semibold text-white/95 text-base sm:text-lg leading-snug">
                      {item}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="mt-10 text-center">
          <button
            onClick={onCtaClick}
            className="w-full sm:w-auto min-w-[280px] sm:min-w-[340px] px-8 py-4 bg-[#008735] hover:bg-[#00bf63] text-white font-abeezee font-bold text-lg md:text-xl rounded-full shadow-lg transition-transform hover:scale-105 animate-pulse-zoom cursor-pointer"
          >
            SIM, EU QUERO AS RECEITAS
          </button>
          <div className="mt-3 flex items-center justify-center gap-3 text-xs sm:text-sm text-neutral-700 font-abeezee font-semibold">
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
