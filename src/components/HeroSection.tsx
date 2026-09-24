import React from 'react';
import { CollectionMode } from '../types';
import { NATALINO_DATA, CATOLICO_DATA } from '../data';
import { CheckCircle2, ShieldCheck, ShoppingCart, Award } from 'lucide-react';
import { YouTubePlayVideo } from './YouTubePlayVideo';

interface HeroSectionProps {
  mode: CollectionMode;
  onCtaClick: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ mode, onCtaClick }) => {
  const data = mode === 'natalino' ? NATALINO_DATA : CATOLICO_DATA;

  const keyPoints = [
    'Mesmo que você seja iniciante',
    'Passo a passo simples e ilustrado',
    'Receitas organizadas e testadas',
    'Acesso imediato no seu e-mail'
  ];

  return (
    <section className="relative overflow-hidden pt-8 pb-14 px-4 bg-[#f5f1e8] md:bg-[#e4dccd]/60 border-b border-amber-900/10">
      <div className="max-w-4xl mx-auto text-center flex flex-col items-center">
        {/* Category Pill */}
        <div className="inline-block mb-4">
          <span className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-[#ffde59] text-[#230852] font-semibold text-sm md:text-base shadow-md">
            {data.badge}
          </span>
        </div>

        {/* Script Accent Title */}
        <h2 className="font-dancing text-3xl sm:text-4xl md:text-5xl text-[#b26b00] font-bold leading-tight drop-shadow-sm">
          {data.titleHighlight}
        </h2>

        {/* Main Headline */}
        <h1 className="font-georgia text-2xl sm:text-3xl md:text-4xl font-bold uppercase tracking-wide mt-2 text-neutral-900 leading-snug max-w-3xl">
          <span className="text-[#e60000]">{data.titleMain}</span>{' '}
          <span className="text-neutral-900">{data.titleSubtitle}</span>
        </h1>

        {/* Hero Media (Video or Image) */}
        <div className="mt-6 mb-6 max-w-lg w-full relative group">
          <div className="relative mx-auto rounded-2xl overflow-hidden shadow-2xl border-4 border-white/80 bg-neutral-950 transition-transform duration-300 group-hover:scale-[1.01]">
            {data.heroVideo ? (
              <YouTubePlayVideo
                id="hero-video"
                src={data.heroVideo}
                className="w-full h-auto rounded-xl overflow-hidden"
                videoClassName="w-full h-auto object-cover rounded-xl"
              />
            ) : (
              <img
                src={data.heroImage}
                alt={data.titleMain}
                className="w-full h-auto object-cover"
                loading="eager"
                decoding="async"
                fetchPriority="high"
                referrerPolicy="no-referrer"
              />
            )}
          </div>
        </div>

        {/* Subtitle description */}
        <p className="font-assistant text-base sm:text-lg md:text-xl text-neutral-800 font-medium max-w-2xl mx-auto leading-relaxed mb-6">
          {data.description}
        </p>

        {/* Main Pulsing CTA Button */}
        <button
          id="hero-cta-button"
          onClick={onCtaClick}
          className="w-full sm:w-auto min-w-[280px] sm:min-w-[340px] px-8 py-4 bg-[#008735] hover:bg-[#00bf63] text-white font-abeezee font-bold text-lg md:text-xl rounded-full shadow-[0_0_15px_rgba(0,135,53,0.4)] border-2 border-white transition-all transform hover:scale-105 animate-pulse-zoom cursor-pointer"
        >
          SIM, EU QUERO AS RECEITAS
        </button>

        {/* Security badges */}
        <div className="mt-4 flex flex-wrap items-center justify-center gap-2 sm:gap-4 text-xs sm:text-sm text-neutral-700 font-abeezee font-semibold">
          <span className="inline-flex items-center gap-1">
            <ShieldCheck className="w-4 h-4 text-emerald-700" /> Privacidade protegida
          </span>
          <span className="hidden sm:inline">•</span>
          <span className="inline-flex items-center gap-1">
            <ShoppingCart className="w-4 h-4 text-emerald-700" /> Compra segura
          </span>
          <span className="hidden sm:inline">•</span>
          <span className="inline-flex items-center gap-1">
            <Award className="w-4 h-4 text-emerald-700" /> Garantia de satisfação
          </span>
        </div>

        {/* 4 Feature Cards */}
        <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-3 w-full max-w-2xl">
          {keyPoints.map((point, index) => (
            <div
              key={index}
              className="bg-white/95 rounded-2xl p-3.5 px-5 shadow-sm border border-amber-300/60 flex items-center gap-3 text-left transition-transform hover:translate-y-[-2px]"
            >
              <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0" />
              <span className="font-assistant font-semibold text-neutral-900 text-sm sm:text-base">
                {point}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
