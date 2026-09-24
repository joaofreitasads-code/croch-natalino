import React, { useState } from 'react';
import { CollectionMode } from '../types';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { optimizeImageUrl } from '../utils/optimizeMedia';

interface EarningsSectionProps {
  mode: CollectionMode;
  onCtaClick: () => void;
}

const EARNINGS_TESTIMONIALS = [
  {
    id: 1,
    image: optimizeImageUrl('https://i.imgur.com/sTf3c5Z.png', 600),
    alt: 'Depoimento de aluna faturando com amigurumi'
  },
  {
    id: 2,
    image: optimizeImageUrl('https://i.imgur.com/vupEp1Y.png', 600),
    alt: 'Depoimento de faturamento e encomendas'
  },
  {
    id: 3,
    image: optimizeImageUrl('https://i.imgur.com/b6RI7q6.png', 600),
    alt: 'Depoimento de aluna com vendas e encomendas de Natal'
  },
  {
    id: 4,
    image: optimizeImageUrl('https://i.imgur.com/d6jU16R.png', 600),
    alt: 'Depoimento de aluna com resultados reais'
  }
];

export const EarningsSection: React.FC<EarningsSectionProps> = ({ mode, onCtaClick }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [touchStart, setTouchStart] = useState<number | null>(null);
  const [touchEnd, setTouchEnd] = useState<number | null>(null);

  const handlePrev = () => {
    setCurrentIndex(prev => (prev === 0 ? EARNINGS_TESTIMONIALS.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex(prev => (prev === EARNINGS_TESTIMONIALS.length - 1 ? 0 : prev + 1));
  };

  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchEnd(null);
    setTouchStart(e.targetTouches[0].clientX);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    const distance = touchStart - touchEnd;
    if (distance > 40) {
      handleNext();
    }
    if (distance < -40) {
      handlePrev();
    }
  };

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

        {/* Depoimentos / Comprovações de Faturamento em Mockup de Celular */}
        <div className="mt-14 mb-4">
          <div className="inline-block mb-3">
            <span className="px-5 py-1.5 rounded-full bg-white/95 text-neutral-900 font-abeezee font-bold text-xs sm:text-sm shadow-md uppercase tracking-wider border border-amber-900/15">
              Resultados Reais de Alunas
            </span>
          </div>

          <h3 className="font-georgia text-2xl sm:text-3xl md:text-4xl font-bold text-neutral-950 mb-2">
            Veja quem já está faturando na prática
          </h3>
          <p className="font-assistant text-base sm:text-lg text-neutral-700 max-w-xl mx-auto mb-8">
            Depoimentos de quem colocou a mão na massa e já está vendendo suas peças:
          </p>

          {/* Smartphone Mockup com Borda de Natal e Bezel Ultra-Fino */}
          <div className="relative max-w-xl mx-auto flex items-center justify-center mt-6 px-1 sm:px-4">
            {/* Container da Borda de Natal */}
            <div className="relative w-full max-w-[340px] xs:max-w-[380px] sm:max-w-[430px] md:max-w-[460px]">
              {/* Seta Esquerda (Anterior) */}
              <button
                type="button"
                onClick={handlePrev}
                className="absolute -left-3 sm:-left-6 md:-left-8 top-1/2 -translate-y-1/2 p-2 sm:p-3.5 md:p-4 rounded-full bg-gradient-to-br from-[#ffd700] via-[#f7d057] to-[#e5b54f] text-[#630808] hover:text-black shadow-[0_8px_20px_rgba(0,0,0,0.35)] hover:scale-110 active:scale-95 transition-all border-2 border-white cursor-pointer z-40 shrink-0"
                aria-label="Depoimento Anterior"
              >
                <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7" />
              </button>

              {/* Seta Direita (Próximo) */}
              <button
                type="button"
                onClick={handleNext}
                className="absolute -right-3 sm:-right-6 md:-right-8 top-1/2 -translate-y-1/2 p-2 sm:p-3.5 md:p-4 rounded-full bg-gradient-to-br from-[#ffd700] via-[#f7d057] to-[#e5b54f] text-[#630808] hover:text-black shadow-[0_8px_20px_rgba(0,0,0,0.35)] hover:scale-110 active:scale-95 transition-all border-2 border-white cursor-pointer z-40 shrink-0"
                aria-label="Próximo Depoimento"
              >
                <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7" />
              </button>

              {/* Brilho dourado festivo atrás da moldura */}
              <div className="absolute -inset-3 bg-gradient-to-b from-[#ffd700]/30 via-[#bf1414]/20 to-[#ffd700]/30 rounded-[50px] blur-xl pointer-events-none" />

              {/* Guirlandas de Natal decorativas nos cantos superiores */}
              <div className="absolute -top-3.5 -left-3.5 sm:-top-5 sm:-left-5 z-30 w-12 sm:w-16 h-12 sm:h-16 pointer-events-none drop-shadow-[0_8px_15px_rgba(0,0,0,0.4)] select-none">
                <img
                  src="https://media.atomicatmedia.net/u/K0g3hTUvVFQ3mhBFVs2JSfKk5WQ2/Pictures/BkILeM2433386.png?width=120&quality=85"
                  alt="Guirlanda Natalina"
                  className="w-full h-full object-contain -rotate-12"
                  loading="lazy"
                  decoding="async"
                />
              </div>
              <div className="absolute -top-3.5 -right-3.5 sm:-top-5 sm:-right-5 z-30 w-12 sm:w-16 h-12 sm:h-16 pointer-events-none drop-shadow-[0_8px_15px_rgba(0,0,0,0.4)] select-none">
                <img
                  src="https://media.atomicatmedia.net/u/K0g3hTUvVFQ3mhBFVs2JSfKk5WQ2/Pictures/BkILeM2433386.png?width=120&quality=85"
                  alt="Guirlanda Natalina"
                  className="w-full h-full object-contain rotate-12"
                  loading="lazy"
                  decoding="async"
                />
              </div>

              {/* Laço / Tag Festiva de Natal no Topo */}
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 z-30">
                <span className="inline-flex items-center gap-1.5 px-3.5 sm:px-5 py-1 rounded-full bg-gradient-to-r from-[#ffd700] via-[#f7d057] to-[#e5b54f] text-[#630808] font-abeezee font-black text-[11px] sm:text-sm shadow-xl tracking-wider uppercase border-2 border-white whitespace-nowrap">
                  <span>🎄</span>
                  <span>COMPROVANTE REAL DE ALUNA</span>
                  <span>🎁</span>
                </span>
              </div>

              {/* Moldura Festiva de Natal (Vermelho Rubi & Dourado com Cantos Decorados) */}
              <div className="relative pt-4 sm:pt-5 pb-2 sm:pb-3 px-1.5 sm:px-3 rounded-[34px] sm:rounded-[48px] bg-gradient-to-b from-[#8f0f0f] via-[#750b0b] to-[#590606] border-[3px] sm:border-4 border-[#ffd700] ring-2 sm:ring-4 ring-[#ffd700]/30 shadow-[0_25px_60px_-10px_rgba(117,11,11,0.65)]">
                {/* Smartphone Ultra-Fino Branco com Bezel Mínimo */}
                <div
                  className="relative bg-white rounded-[28px] sm:rounded-[38px] p-0.5 sm:p-1.5 shadow-2xl border border-neutral-200 touch-pan-y"
                  onTouchStart={handleTouchStart}
                  onTouchMove={handleTouchMove}
                  onTouchEnd={handleTouchEnd}
                >
                  {/* Speaker Pill / Dynamic Island Ultra-Fina */}
                  <div className="relative z-20 flex items-center justify-center pt-1 pb-1">
                    <div className="w-14 sm:w-20 h-2 sm:h-3 bg-neutral-900 rounded-full flex items-center justify-end pr-1.5 gap-1 shadow-inner">
                      <div className="w-1 h-1 rounded-full bg-[#2563eb]" />
                      <div className="w-1 sm:w-1.5 h-1 sm:h-1.5 rounded-full bg-neutral-800" />
                    </div>
                  </div>

                  {/* Tela Quase Sem Borda (Edge-to-Edge) com Carrossel Suave Sem Piscar */}
                  <div className="relative w-full rounded-[24px] sm:rounded-[32px] overflow-hidden bg-white shadow-sm">
                    <div
                      className="flex transition-transform duration-300 ease-out will-change-transform"
                      style={{ transform: `translateX(-${currentIndex * 100}%)` }}
                    >
                      {EARNINGS_TESTIMONIALS.map((item) => (
                        <div key={item.id} className="w-full shrink-0 flex items-center justify-center">
                          <img
                            src={item.image}
                            alt={item.alt}
                            className="w-full h-auto object-contain rounded-[22px] sm:rounded-[30px]"
                            loading="eager"
                            decoding="async"
                            referrerPolicy="no-referrer"
                          />
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Home Bar Discreta na Parte Inferior */}
                  <div className="pt-1.5 pb-0.5 flex justify-center">
                    <div className="w-16 sm:w-24 h-1 bg-neutral-300 rounded-full" />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Indicador de Depoimento e Bolinhas */}
          <div className="mt-5 flex flex-col items-center gap-2">
            <span className="text-xs sm:text-sm font-abeezee font-bold text-neutral-800 uppercase tracking-wider">
              Depoimento {currentIndex + 1} de {EARNINGS_TESTIMONIALS.length}
            </span>
            <div className="flex items-center justify-center gap-2">
              {EARNINGS_TESTIMONIALS.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setCurrentIndex(idx)}
                  className={`h-2.5 rounded-full transition-all duration-300 cursor-pointer ${
                    idx === currentIndex
                      ? 'w-8 bg-[#008735] shadow-[0_0_10px_rgba(0,135,53,0.6)]'
                      : 'w-2.5 bg-neutral-400 hover:bg-neutral-600'
                  }`}
                  aria-label={`Ir para depoimento ${idx + 1}`}
                />
              ))}
            </div>
          </div>
        </div>

        {/* CTA Button */}
        <div className="mt-10">
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
