import React, { useState } from 'react';
import { CollectionMode } from '../types';
import { NATALINO_DATA, CATOLICO_DATA } from '../data';
import { CheckCircle2, XCircle, ShieldCheck, ShoppingCart, Award, Sparkles } from 'lucide-react';
import { UpgradeOfferModal } from './UpgradeOfferModal';

import { trackPixelEvent } from '../utils/pixel';

interface PricingSectionProps {
  mode: CollectionMode;
}

export const PricingSection: React.FC<PricingSectionProps> = ({ mode }) => {
  const data = mode === 'natalino' ? NATALINO_DATA : CATOLICO_DATA;
  const [completePlan, basicPlan] = data.plans;
  const [showUpgradeModal, setShowUpgradeModal] = useState(false);

  return (
    <section id="Ancora" className="py-16 px-4 bg-[#f5f1e8] md:bg-[#d8c7a8]/50 border-b border-amber-900/10 scroll-mt-12">
      <div className="max-w-5xl mx-auto text-center">
        {/* Title in Dancing Script */}
        <h2 className="font-dancing text-4xl sm:text-5xl md:text-6xl font-bold text-[#bd0303] mb-1">
          Sua Escolha
        </h2>

        {/* Subtitle */}
        <h3 className="font-assistant text-xl sm:text-2xl md:text-3xl font-extrabold text-neutral-900 tracking-wide uppercase mb-3">
          ESCOLHA O MELHOR PACOTE PARA VOCÊ
        </h3>

        <p className="font-assistant text-base sm:text-lg text-neutral-700 max-w-xl mx-auto mb-12">
          Comece com o essencial ou leve tudo de uma vez, com mais receitas, gráficos detalhados e 5 bônus exclusivos.
        </p>

        {/* Pricing Cards Grid - Básico first on mobile and desktop */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10 items-stretch">
          {/* Card 1: PACOTE BÁSICO (R$ 10,90) */}
          <div className="bg-[#e4dccd] rounded-3xl p-6 sm:p-8 shadow-xl border-2 border-amber-800/40 flex flex-col justify-between relative order-1 transition-transform hover:scale-[1.01] duration-300">
            <div>
              <h4 className="font-georgia text-2xl sm:text-3xl font-extrabold text-neutral-900 uppercase tracking-wide mb-2 mt-2">
                {basicPlan.title}
              </h4>

              <div className="inline-block bg-red-100/90 text-red-700 font-bold text-xs sm:text-sm px-3.5 py-1 rounded-full mb-6 border border-red-300/80 uppercase tracking-wider">
                Sem os bônus
              </div>

              {/* Features list */}
              <div className="space-y-2.5 text-left mb-6">
                {basicPlan.features.map((feat, idx) => {
                  const isNegative = feat.toLowerCase().includes('sem os bônus') || feat.toLowerCase().includes('sem bônus');
                  return (
                    <div key={idx} className="flex items-start gap-2.5">
                      {isNegative ? (
                        <XCircle className="w-5 h-5 text-red-600 shrink-0 mt-0.5" />
                      ) : (
                        <CheckCircle2 className="w-5 h-5 text-[#008735] shrink-0 mt-0.5" />
                      )}
                      <span
                        className={`font-assistant text-sm sm:text-base leading-snug ${
                          isNegative ? 'font-bold text-red-600' : 'font-semibold text-neutral-900'
                        }`}
                      >
                        {feat}
                      </span>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Price Box */}
            <div className="border-t border-amber-900/20 pt-6">
              <p className="font-abeezee text-base sm:text-lg font-bold text-neutral-800 mb-1">
                De <s className="text-[#e60000]">{basicPlan.originalPrice}</s> por apenas
              </p>

              <div className="flex items-baseline justify-center gap-2 mb-1">
                <span className="font-atkinson font-extrabold text-4xl sm:text-5xl text-[#008a00]">
                  {basicPlan.pixPrice}
                </span>
                <span className="font-atkinson font-bold text-xl sm:text-2xl text-neutral-900">
                  No Pix
                </span>
              </div>

              <p className="font-abeezee text-sm sm:text-base font-bold text-neutral-800 mb-6">
                {basicPlan.installment}
              </p>

              <button
                type="button"
                id="checkout-basico-btn"
                onClick={() => setShowUpgradeModal(true)}
                className="w-full block py-3.5 px-6 bg-[#00e639] hover:bg-[#00ff44] text-neutral-950 font-abeezee font-black text-base sm:text-lg rounded-full shadow-[0_0_20px_rgba(0,230,57,0.55)] border-2 border-white transition-all transform hover:scale-105 text-center cursor-pointer"
              >
                SIM, EU QUERO O PACOTE BÁSICO
              </button>

              <div className="mt-4 flex flex-wrap items-center justify-center gap-2 text-xs text-neutral-700 font-abeezee font-semibold">
                <span className="inline-flex items-center gap-1"><ShieldCheck className="w-3.5 h-3.5 text-emerald-800" /> Privacidade</span>
                <span>•</span>
                <span className="inline-flex items-center gap-1"><ShoppingCart className="w-3.5 h-3.5 text-emerald-800" /> Compra segura</span>
                <span>•</span>
                <span className="inline-flex items-center gap-1"><Award className="w-3.5 h-3.5 text-emerald-800" /> Garantia 14 dias</span>
              </div>
            </div>
          </div>

          {/* Card 2: PACOTE COMPLETO (R$ 29,90 - Mais Escolhido) */}
          <div className="bg-gradient-to-b from-[#a81313] via-[#8f0f0f] to-[#750b0b] text-white rounded-3xl p-6 sm:p-8 shadow-[0_20px_50px_rgba(117,11,11,0.5)] border-4 border-[#e5b54f] ring-2 ring-[#750b0b] ring-offset-2 ring-offset-[#e5b54f]/40 flex flex-col justify-between relative order-2 transition-transform hover:scale-[1.02] duration-300">
            {/* Top Ribbon Badge */}
            <div className="absolute -top-5 left-1/2 -translate-x-1/2">
              <span className="inline-flex items-center gap-1.5 px-6 py-2 rounded-full bg-gradient-to-r from-[#ffd700] via-[#f7d057] to-[#e5b54f] text-[#630808] font-abeezee font-extrabold text-sm sm:text-base shadow-xl tracking-wider border-2 border-white whitespace-nowrap">
                <Sparkles className="w-4 h-4 text-[#630808]" />
                ⭐️ MAIS ESCOLHIDO ⭐️
              </span>
            </div>

            <div className="pt-4">
              <h4 className="font-georgia text-2xl sm:text-3xl font-extrabold text-white uppercase tracking-wide mb-4 drop-shadow-sm">
                {completePlan.title}
              </h4>

              {/* Mockup image without background box */}
              <div className="mb-6 flex items-center justify-center max-w-sm mx-auto">
                <img
                  src={completePlan.image}
                  alt={completePlan.title}
                  className="w-full h-auto max-h-72 sm:max-h-80 object-contain drop-shadow-[0_15px_30px_rgba(0,0,0,0.65)] hover:scale-105 transition-transform duration-300"
                  loading="lazy"
                  decoding="async"
                  referrerPolicy="no-referrer"
                />
              </div>

              {/* Features list */}
              <div className="space-y-2.5 text-left mb-6">
                {completePlan.features.map((feat, idx) => (
                  <div key={idx} className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-5 h-5 text-yellow-300 shrink-0 mt-0.5 drop-shadow-sm" />
                    <span className="font-assistant text-sm sm:text-base font-bold text-white leading-snug drop-shadow-sm">
                      {feat}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Price Box */}
            <div className="border-t border-amber-300/30 pt-6">
              <p className="font-abeezee text-base sm:text-lg font-bold text-white mb-1">
                De <s className="text-amber-200 font-sans">{completePlan.originalPrice}</s> por apenas
              </p>

              <div className="flex items-baseline justify-center gap-2 mb-1">
                <span className="font-atkinson font-extrabold text-4xl sm:text-5xl text-yellow-300 drop-shadow-md">
                  {completePlan.pixPrice}
                </span>
                <span className="font-atkinson font-bold text-xl sm:text-2xl text-white">
                  No Pix
                </span>
              </div>

              <p className="font-abeezee text-sm sm:text-base font-bold text-amber-100 mb-6">
                {completePlan.installment}
              </p>

              <a
                id="checkout-completo-btn"
                href={completePlan.checkoutUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => {
                  trackPixelEvent('InitiateCheckout', {
                    content_name: 'Pacote Completo',
                    value: 29.90,
                    currency: 'BRL'
                  });
                }}
                className="w-full block py-4 px-6 bg-[#00e639] hover:bg-[#00ff44] text-neutral-950 font-abeezee font-black text-lg sm:text-xl rounded-full shadow-[0_0_25px_rgba(0,230,57,0.7)] border-2 border-white transition-all transform hover:scale-105 text-center cursor-pointer tracking-wide"
              >
                SIM, EU QUERO O PACOTE COMPLETO
              </a>

              <div className="mt-4 flex flex-wrap items-center justify-center gap-2 text-xs text-amber-100 font-abeezee font-semibold">
                <span className="inline-flex items-center gap-1"><ShieldCheck className="w-3.5 h-3.5 text-yellow-300" /> Privacidade</span>
                <span>•</span>
                <span className="inline-flex items-center gap-1"><ShoppingCart className="w-3.5 h-3.5 text-yellow-300" /> Compra segura</span>
                <span>•</span>
                <span className="inline-flex items-center gap-1"><Award className="w-3.5 h-3.5 text-yellow-300" /> Garantia 14 dias</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <UpgradeOfferModal
        isOpen={showUpgradeModal}
        onClose={() => setShowUpgradeModal(false)}
        mode={mode}
        basicCheckoutUrl={basicPlan.checkoutUrl}
      />
    </section>
  );
};
