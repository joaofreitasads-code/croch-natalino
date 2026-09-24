import React from 'react';
import { CollectionMode, RecipeItem } from '../types';
import { NATALINO_DATA, CATOLICO_DATA } from '../data';

interface RecipeGallerySectionProps {
  mode: CollectionMode;
  onCtaClick: () => void;
}

export const RecipeGallerySection: React.FC<RecipeGallerySectionProps> = ({ mode, onCtaClick }) => {
  const data = mode === 'natalino' ? NATALINO_DATA : CATOLICO_DATA;

  // Row 1: standard sequence
  const row1Recipes = data.recipes;
  // Row 2: shifted sequence for visual variety
  const row2Recipes = [...data.recipes.slice(4), ...data.recipes.slice(0, 4)];

  const renderCard = (recipe: RecipeItem, keyPrefix: string) => (
    <div
      key={`${keyPrefix}-${recipe.id}`}
      className="w-44 sm:w-52 md:w-60 shrink-0 bg-white rounded-2xl overflow-hidden shadow-md border border-[#d4a017]/70 flex flex-col items-center p-3 sm:p-4 select-none pointer-events-auto"
    >
      {/* Recipe Image */}
      <div className="w-full aspect-square rounded-xl overflow-hidden bg-amber-50 mb-2.5 sm:mb-3 flex items-center justify-center">
        <img
          src={recipe.image}
          alt={recipe.title}
          className="w-full h-full object-cover rounded-lg"
          loading="lazy"
          decoding="async"
          referrerPolicy="no-referrer"
          draggable={false}
        />
      </div>

      {/* Number */}
      <span className="text-xs sm:text-sm font-montserrat font-semibold text-[#008735] mb-1">
        {recipe.number}
      </span>

      {/* Title */}
      <h3 className="font-assistant text-xs sm:text-sm md:text-base font-bold text-neutral-900 uppercase tracking-tight text-center leading-tight line-clamp-1 w-full">
        {recipe.title}
      </h3>
    </div>
  );

  return (
    <section className="py-14 bg-[#e4dccd] border-b border-amber-900/10 overflow-hidden">
      <div className="max-w-6xl mx-auto text-center px-4">
        {/* Badge */}
        <div className="inline-block mb-3">
          <span className="px-6 py-2 rounded-full bg-gradient-to-r from-[#99583b] to-[#ead3a7] text-neutral-900 font-abeezee font-bold text-sm md:text-base shadow-md">
            RECEITAS INCLUSAS
          </span>
        </div>

        {/* Title */}
        <h2 className="font-georgia text-3xl sm:text-4xl md:text-5xl font-bold text-[#bf1414] mt-1 mb-2">
          Peças que você pode produzir
        </h2>

        <p className="font-assistant text-base sm:text-lg text-neutral-800 max-w-2xl mx-auto mb-2">
          Uma coleção exclusiva com receitas {mode === 'natalino' ? 'natalinas' : 'católicas'} organizadas passo a passo para você criar peças lindas mesmo sem experiência.
        </p>

        <p className="font-abeezee text-base sm:text-xl font-bold text-neutral-900 mb-2">
          Você recebe modelos prontos para:
        </p>

        {/* Papai Noel no Trenó puxando os carrosseis */}
        <div className="relative max-w-3xl mx-auto mt-4 mb-6 flex flex-col items-center">
          {/* Reins spanning outward to left and right */}
          <div className="w-full relative flex items-center justify-between pointer-events-none">
            {/* Left Reins (Puxando carrossel da esquerda) */}
            <div className="hidden sm:flex flex-1 items-center justify-end pr-2 md:pr-4">
              <div className="relative w-full flex items-center">
                <div className="w-full h-1 bg-gradient-to-r from-amber-200 via-[#e5b54f] to-[#ffd700] rounded-full shadow-[0_0_12px_rgba(255,215,0,0.85)] border-t border-amber-300" />
                <span className="absolute left-1/4 -top-3 text-xs drop-shadow select-none">✨</span>
                <span className="absolute left-2/3 -bottom-3 text-xs drop-shadow select-none">❄️</span>
                <span className="absolute left-2 -top-5 text-[10px] font-bold uppercase tracking-wider text-[#9e1212] bg-white/90 px-2 py-0.5 rounded-full shadow-sm border border-amber-300">
                  ◄ Coleção 1
                </span>
              </div>
            </div>

            {/* Sleigh with Santa */}
            <div className="relative z-20 animate-float-sleigh px-2">
              <div className="relative w-64 sm:w-72 md:w-80 h-44 sm:h-48">
                {/* Back Sleigh Body */}
                <div className="absolute inset-x-4 bottom-6 top-8 bg-gradient-to-br from-[#8a0b0b] to-[#590404] rounded-3xl shadow-2xl border-2 border-[#e5b54f]" />

                {/* Santa amigurumi inside sleigh */}
                <div className="absolute left-1/2 -translate-x-1/2 bottom-10 w-28 sm:w-32 z-10">
                  <img
                    src="https://media.atomicatmedia.net/u/K0g3hTUvVFQ3mhBFVs2JSfKk5WQ2/Pictures/SfdqBW2392920.png?width=300&quality=85"
                    alt="Papai Noel no Trenó"
                    className="w-full h-auto object-contain drop-shadow-[0_12px_20px_rgba(0,0,0,0.5)]"
                    loading="lazy"
                    decoding="async"
                    referrerPolicy="no-referrer"
                  />
                  {/* Santa's hands holding the reins */}
                  <div className="absolute bottom-2.5 -left-1.5 w-3.5 h-3.5 rounded-full bg-white border-2 border-red-700 shadow-sm" />
                  <div className="absolute bottom-2.5 -right-1.5 w-3.5 h-3.5 rounded-full bg-white border-2 border-red-700 shadow-sm" />
                </div>

                {/* Front of Sleigh (Curved ornate red carriage with gold trim) */}
                <div className="absolute inset-x-2 bottom-4 h-24 bg-gradient-to-r from-[#a81313] via-[#8c0e0e] to-[#700909] rounded-b-3xl rounded-tl-[3rem] rounded-tr-[2rem] border-4 border-[#e5b54f] shadow-xl z-20 flex flex-col justify-end p-2.5 overflow-hidden">
                  {/* Fluffy white snow/fur edge */}
                  <div className="absolute top-0 inset-x-0 h-3 bg-white/95 rounded-full shadow-inner flex justify-around">
                    <span className="w-2 h-2 rounded-full bg-amber-100 -mt-0.5" />
                    <span className="w-2 h-2 rounded-full bg-amber-100 -mt-0.5" />
                    <span className="w-2 h-2 rounded-full bg-amber-100 -mt-0.5" />
                  </div>
                  {/* Gold Filigree on Sleigh */}
                  <div className="flex items-center justify-center gap-1.5 text-yellow-300 font-dancing text-base sm:text-lg font-bold drop-shadow">
                    <span>✨</span>
                    <span>Trenó do Noel</span>
                    <span>✨</span>
                  </div>
                </div>

                {/* Golden Sleigh Runners (Patins do trenó) */}
                <div className="absolute -bottom-1 inset-x-0 h-7 z-30 pointer-events-none">
                  <svg viewBox="0 0 320 35" fill="none" className="w-full h-full drop-shadow-md">
                    <path
                      d="M10 25 Q35 25 70 25 L260 25 Q295 25 305 15 Q312 8 308 2 Q302 -1 296 4 Q290 10 270 20"
                      stroke="url(#goldSleighGradient)"
                      strokeWidth="5"
                      strokeLinecap="round"
                    />
                    <line x1="80" y1="25" x2="85" y2="12" stroke="url(#goldSleighGradient)" strokeWidth="4" />
                    <line x1="160" y1="25" x2="160" y2="12" stroke="url(#goldSleighGradient)" strokeWidth="4" />
                    <line x1="240" y1="25" x2="235" y2="12" stroke="url(#goldSleighGradient)" strokeWidth="4" />
                    <defs>
                      <linearGradient id="goldSleighGradient" x1="0" y1="0" x2="1" y2="0">
                        <stop offset="0%" stopColor="#f5d061" />
                        <stop offset="50%" stopColor="#ffd700" />
                        <stop offset="100%" stopColor="#d4af37" />
                      </linearGradient>
                    </defs>
                  </svg>
                </div>
              </div>

              {/* Sleigh shadow on snow */}
              <div className="w-48 h-3 bg-neutral-950/20 rounded-full blur-sm mx-auto -mt-1" />
            </div>

            {/* Right Reins (Puxando carrossel da direita) */}
            <div className="hidden sm:flex flex-1 items-center justify-start pl-2 md:pr-4">
              <div className="relative w-full flex items-center">
                <div className="w-full h-1 bg-gradient-to-r from-[#ffd700] via-[#e5b54f] to-amber-200 rounded-full shadow-[0_0_12px_rgba(255,215,0,0.85)] border-t border-amber-300" />
                <span className="absolute right-1/4 -top-3 text-xs drop-shadow select-none">✨</span>
                <span className="absolute right-2/3 -bottom-3 text-xs drop-shadow select-none">❄️</span>
                <span className="absolute right-2 -top-5 text-[10px] font-bold uppercase tracking-wider text-[#9e1212] bg-white/90 px-2 py-0.5 rounded-full shadow-sm border border-amber-300">
                  Coleção 2 ►
                </span>
              </div>
            </div>
          </div>

          {/* Subtitle tag */}
          <div className="mt-2 inline-flex items-center gap-1.5 px-5 py-1.5 rounded-full bg-gradient-to-r from-[#9e1212] to-[#750b0b] text-yellow-300 font-abeezee font-bold text-xs sm:text-sm shadow-md border-2 border-[#e5b54f]">
            <span>🎅</span>
            <span>Papai Noel conduzindo todas as receitas natalinas</span>
            <span>🎄</span>
          </div>
        </div>
      </div>

      {/* Double Row Infinite Carousel Container */}
      <div className="relative w-full overflow-hidden my-4 py-2">
        {/* Left & Right Soft Blur/Fade Gradients */}
        <div className="pointer-events-none absolute inset-y-0 left-0 w-12 sm:w-24 md:w-36 bg-gradient-to-r from-[#e4dccd] to-transparent z-10" />
        <div className="pointer-events-none absolute inset-y-0 right-0 w-12 sm:w-24 md:w-36 bg-gradient-to-l from-[#e4dccd] to-transparent z-10" />

        {/* Row 1 - Marquee Left */}
        <div className="flex w-max animate-marquee-left mb-4">
          <div className="flex gap-4 sm:gap-6 pr-4 sm:pr-6">
            {row1Recipes.map(recipe => renderCard(recipe, 'r1-a'))}
          </div>
          <div className="flex gap-4 sm:gap-6 pr-4 sm:pr-6" aria-hidden="true">
            {row1Recipes.map(recipe => renderCard(recipe, 'r1-b'))}
          </div>
        </div>

        {/* Row 2 - Marquee Right */}
        <div className="flex w-max animate-marquee-right">
          <div className="flex gap-4 sm:gap-6 pr-4 sm:pr-6">
            {row2Recipes.map(recipe => renderCard(recipe, 'r2-a'))}
          </div>
          <div className="flex gap-4 sm:gap-6 pr-4 sm:pr-6" aria-hidden="true">
            {row2Recipes.map(recipe => renderCard(recipe, 'r2-b'))}
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto text-center px-4">
        {/* "E muito mais..." text */}
        <div className="mt-8 mb-4">
          <p className="font-dancing text-4xl sm:text-5xl text-[#008735] font-bold">
            E muito mais...
          </p>
        </div>

        {/* CTA */}
        <div className="mt-6">
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
