import React from 'react';
import { CollectionMode } from '../types';

interface ForWhomSectionProps {
  mode: CollectionMode;
}

export const ForWhomSection: React.FC<ForWhomSectionProps> = ({ mode }) => {
  const items = [
    {
      emoji: '💰',
      text: 'Quem deseja até fazer renda extra vendendo sob encomenda'
    },
    {
      emoji: '🧶',
      text: 'Quem deseja aprender crochê e aprimorar seus pontos'
    },
    {
      emoji: '😍',
      text: 'Mulheres que amam artesanato e trabalhos manuais'
    },
    {
      emoji: '😌',
      text: 'Quem procura um hobby relaxante, terapêutico e prazeroso'
    },
    {
      emoji: mode === 'natalino' ? '🎄' : '📿',
      text: mode === 'natalino'
        ? 'Mulheres apaixonadas por peças natalinas e encantos de fim de ano'
        : 'Católicas apaixonadas por peças religiosas, devoção e sacralidade'
    },
    {
      emoji: '🎁',
      text: 'Quem quer produzir presentes especiais e inesquecíveis para a família'
    }
  ];

  return (
    <section className="py-16 px-4 bg-[#f5f1e8] border-b border-amber-900/10">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="font-georgia text-2xl sm:text-3xl md:text-4xl font-bold uppercase text-neutral-900 tracking-wide mb-3">
          ESTE MATERIAL É PARA VOCÊ QUEM:
        </h2>

        <div className="w-36 h-0.5 bg-[#d4a017] mx-auto mb-10" />

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-left">
          {items.map((item, idx) => (
            <div
              key={idx}
              className="bg-white rounded-2xl p-4 sm:p-5 shadow-md border border-amber-200/80 flex items-center gap-4 transition-transform hover:scale-[1.02] duration-200"
            >
              <span className="text-3xl sm:text-4xl shrink-0">{item.emoji}</span>
              <p className="font-assistant text-base sm:text-lg font-semibold text-neutral-900">
                {item.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
