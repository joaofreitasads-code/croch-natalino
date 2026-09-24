import React from 'react';
import { CollectionMode } from '../types';
import { ShieldCheck, ShoppingCart, Award } from 'lucide-react';
import { optimizeImageUrl } from '../utils/optimizeMedia';

interface BenefitsGridProps {
  mode: CollectionMode;
  onCtaClick: () => void;
}

export const BenefitsGrid: React.FC<BenefitsGridProps> = ({ mode, onCtaClick }) => {
  const benefits = [
    {
      emoji: '⭐️',
      title: 'Criar peças lindas feitas pelas próprias mãos',
      description: mode === 'natalino'
        ? 'Produza papai noel, decoração e peças natalinas exclusivas com acabamento profissional.'
        : 'Produza bolsas, decoração e peças religiosas exclusivas com extrema perfeição.'
    },
    {
      emoji: '🤩',
      title: 'Transformar seu crochê em renda extra',
      description: mode === 'natalino'
        ? 'Muitas mulheres estão vendendo peças natalinas artesanais para amigas, familiares e encomendas.'
        : 'Muitas mulheres estão vendendo peças religiosas artesanais para amigas, igrejas e paróquias.'
    },
    {
      emoji: '😌',
      title: mode === 'natalino'
        ? 'Levar o verdadeiro espírito do natal para sua casa'
        : 'Levar mais espiritualidade para sua casa',
      description: mode === 'natalino'
        ? 'Decore seu ambiente com peças natalinas delicadas, aconchegantes e emocionantes.'
        : 'Decore seu ambiente com peças católicas delicadas, cheias de fé e devoção.'
    },
    {
      emoji: '⏰',
      title: 'Economizar tempo com receitas prontas',
      description: 'Nada de perder horas tentando descobrir pontos ou decifrar gráficos difíceis sozinha na internet.'
    },
    {
      emoji: '😍',
      title: 'Presentear pessoas especiais',
      description: 'Crie presentes únicos, afetivos e inesquecíveis, carregados de significado e amor.'
    }
  ];

  return (
    <section className="py-16 px-4 bg-[#f5f1e8] md:bg-[#d8c7a8]/40 border-b border-amber-900/10">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="font-georgia text-2xl sm:text-3xl md:text-4xl font-bold uppercase text-neutral-900 mb-8 max-w-2xl mx-auto leading-snug">
          Mesmo sem ser avançada no crochê você vai:
        </h2>

        {/* Imagem principal da seção */}
        <div className="max-w-3xl mx-auto rounded-3xl overflow-hidden shadow-2xl border-4 border-[#e5b54f] bg-white p-2 sm:p-4 transition-transform hover:scale-[1.01] duration-300">
          <img
            src={optimizeImageUrl('https://i.imgur.com/S5NsZjA.png', 800)}
            alt="Mesmo sem ser avançada no crochê você vai conseguir"
            className="w-full h-auto object-contain rounded-2xl"
            loading="lazy"
            decoding="async"
            referrerPolicy="no-referrer"
          />
        </div>

        {/* Copy estruturada diretamente embaixo da imagem */}
        <div className="mt-8 max-w-3xl mx-auto bg-white/95 rounded-3xl p-6 sm:p-8 shadow-xl border-2 border-[#e5b54f]/80 text-left">
          <div className="space-y-4 sm:space-y-5">
            {benefits.map((benefit, idx) => (
              <div key={idx} className="flex items-start gap-3 sm:gap-4 pb-4 border-b border-amber-100 last:border-b-0 last:pb-0">
                <span className="flex-shrink-0 w-8 h-8 rounded-full bg-emerald-600 text-white flex items-center justify-center font-bold text-sm shadow-md mt-0.5">
                  ✓
                </span>
                <div>
                  <h3 className="font-georgia font-bold text-base sm:text-lg text-neutral-900 leading-snug">
                    {benefit.title}
                  </h3>
                  <p className="font-assistant text-sm sm:text-base text-neutral-700 leading-relaxed mt-1">
                    {benefit.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="mt-10">
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
