import React, { useState, useEffect } from 'react';
import { X, Sparkles, CheckCircle2, ShieldCheck, ShoppingCart, Award } from 'lucide-react';
import { trackPixelEvent } from '../utils/pixel';
import { CollectionMode } from '../types';

interface ExitPopupProps {
  mode: CollectionMode;
}

export const ExitPopup: React.FC<ExitPopupProps> = ({ mode }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [hasTriggered, setHasTriggered] = useState(false);

  useEffect(() => {
    // Check if already shown in this session
    const shown = sessionStorage.getItem('exit_popup_shown');
    if (shown) {
      setHasTriggered(true);
      return;
    }

    // Desktop exit-intent detection (mouse leaving top of window)
    const handleMouseLeave = (e: MouseEvent) => {
      if (e.clientY <= 15 && !hasTriggered) {
        setIsOpen(true);
        setHasTriggered(true);
        sessionStorage.setItem('exit_popup_shown', 'true');
      }
    };

    // Mobile fallback timer (show after 35 seconds of browsing)
    const timer = setTimeout(() => {
      if (!sessionStorage.getItem('exit_popup_shown')) {
        setIsOpen(true);
        setHasTriggered(true);
        sessionStorage.setItem('exit_popup_shown', 'true');
      }
    }, 35000);

    document.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      document.removeEventListener('mouseleave', handleMouseLeave);
      clearTimeout(timer);
    };
  }, [hasTriggered]);

  const closePopup = () => {
    setIsOpen(false);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/75 backdrop-blur-sm animate-fade-in">
      <div 
        className="relative w-full max-w-lg bg-gradient-to-b from-[#8f0f0f] via-[#750b0b] to-[#590606] text-white rounded-3xl p-6 sm:p-8 shadow-[0_25px_60px_rgba(0,0,0,0.65)] border-4 border-[#e5b54f] ring-4 ring-[#e5b54f]/30 overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Ornate corner accents */}
        <div className="absolute top-2 left-2 w-4 h-4 border-t-2 border-l-2 border-[#ffd700] rounded-tl pointer-events-none" />
        <div className="absolute top-2 right-2 w-4 h-4 border-t-2 border-r-2 border-[#ffd700] rounded-tr pointer-events-none" />

        {/* Close button */}
        <button
          onClick={closePopup}
          className="absolute top-4 right-4 p-2 rounded-full bg-black/30 hover:bg-black/60 text-white/80 hover:text-white transition-colors cursor-pointer z-10"
          aria-label="Fechar"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Header Alert Badge */}
        <div className="text-center mb-3">
          <span className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-gradient-to-r from-[#ffd700] via-[#f7d057] to-[#e5b54f] text-[#630808] font-abeezee font-extrabold text-xs sm:text-sm shadow-md tracking-wider uppercase border border-white">
            <Sparkles className="w-3.5 h-3.5" />
            ESPERE! NÃO VÁ EMBORA AINDA!
          </span>
        </div>

        {/* Headline */}
        <h3 className="font-georgia text-2xl sm:text-3xl font-extrabold text-center text-white mb-2 leading-tight drop-shadow-md">
          Liberamos um Super Desconto de <span className="text-yellow-300">Última Chance</span>
        </h3>

        <p className="font-assistant text-sm sm:text-base text-center text-amber-100/90 mb-5 leading-relaxed">
          Para que você não fique sem o material de {mode === 'natalino' ? 'Amigurumi Natalino' : 'Crochê Católico'}, liberamos uma condição especial e exclusiva agora mesmo:
        </p>

        {/* Offer Box */}
        <div className="bg-white/10 rounded-2xl p-4 sm:p-5 border border-amber-300/30 mb-5 backdrop-blur-md">
          <div className="text-center mb-3">
            <span className="text-xs font-bold text-amber-200 uppercase tracking-widest block mb-1">
              OFERTA EXCLUSIVA DO POP-UP
            </span>
            <div className="flex items-center justify-center gap-2">
              <span className="text-sm sm:text-base text-neutral-300 line-through">
                De R$ 37,90
              </span>
              <span className="text-xs font-semibold bg-emerald-600 text-white px-2 py-0.5 rounded-full">
                MAIS DE 55% OFF
              </span>
            </div>
            <div className="flex items-baseline justify-center gap-2 mt-1">
              <span className="font-atkinson text-4xl sm:text-5xl font-extrabold text-yellow-300 drop-shadow-lg">
                R$ 16,90
              </span>
              <span className="font-atkinson font-bold text-lg sm:text-xl text-white">
                No Pix
              </span>
            </div>
            <span className="text-xs text-amber-100 font-semibold block mt-0.5">
              ou em até 2x no cartão
            </span>
          </div>

          <div className="space-y-2 border-t border-white/10 pt-3 text-xs sm:text-sm text-amber-50">
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-yellow-300 shrink-0" />
              <span>+150 Receitas exclusivas com passo a passo</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-yellow-300 shrink-0" />
              <span>Todos os 5 Bônus Especiais inclusos</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-yellow-300 shrink-0" />
              <span>Garantia incondicional de 14 dias</span>
            </div>
          </div>
        </div>

        {/* CTA Button */}
        <a
          id="checkout-popup-btn"
          href="https://checkout.wiven.com.br/checkout/cmudrduc701t501oir4uij9xz?offer=A6867K2"
          target="_blank"
          rel="noopener noreferrer"
          onClick={() => {
            trackPixelEvent('InitiateCheckout', {
              content_name: 'Oferta Especial Saída R$ 16,90',
              value: 16.90,
              currency: 'BRL'
            });
            closePopup();
          }}
          className="w-full block py-4 px-6 bg-[#008735] hover:bg-[#00bf63] text-white font-abeezee font-extrabold text-base sm:text-lg rounded-full shadow-[0_4px_20px_rgba(0,135,53,0.6)] border-2 border-white transition-all transform hover:scale-[1.03] text-center animate-pulse-zoom cursor-pointer"
        >
          QUERO APROVEITAR POR R$ 16,90
        </a>

        {/* Trust seals */}
        <div className="mt-3 flex flex-wrap items-center justify-center gap-3 text-[11px] sm:text-xs text-amber-100 font-abeezee">
          <span className="inline-flex items-center gap-1"><ShieldCheck className="w-3.5 h-3.5 text-yellow-300" /> Compra segura</span>
          <span>•</span>
          <span className="inline-flex items-center gap-1"><ShoppingCart className="w-3.5 h-3.5 text-yellow-300" /> Acesso imediato</span>
          <span>•</span>
          <span className="inline-flex items-center gap-1"><Award className="w-3.5 h-3.5 text-yellow-300" /> Garantia 14 dias</span>
        </div>

        {/* Decline link */}
        <div className="text-center mt-3">
          <button
            onClick={closePopup}
            className="text-xs text-amber-200/70 hover:text-white underline transition-colors cursor-pointer"
          >
            Não, prefiro perder essa oportunidade única
          </button>
        </div>
      </div>
    </div>
  );
};
