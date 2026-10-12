import React from 'react';
import { X, Sparkles, CheckCircle2, ShieldCheck, ShoppingCart, Award } from 'lucide-react';
import { trackPixelEvent } from '../utils/pixel';
import { CollectionMode } from '../types';

interface UpgradeOfferModalProps {
  isOpen: boolean;
  onClose: () => void;
  mode: CollectionMode;
  basicCheckoutUrl: string;
}

export const UpgradeOfferModal: React.FC<UpgradeOfferModalProps> = ({
  isOpen,
  onClose,
  mode,
  basicCheckoutUrl
}) => {
  if (!isOpen) return null;

  const upgradeCheckoutUrl = 'https://checkout.wiven.com.br/checkout/cmv4un7au1sqr01psluj76tlr?offer=TM6Y742';

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-black/80 backdrop-blur-sm animate-fade-in"
      onClick={onClose}
    >
      <div 
        className="relative w-full max-w-[420px] bg-gradient-to-b from-[#8f0f0f] via-[#750b0b] to-[#590606] text-white rounded-2xl p-4 sm:p-5 shadow-[0_20px_50px_rgba(0,0,0,0.8)] border-2 border-[#e5b54f] ring-2 ring-[#e5b54f]/30 overflow-hidden max-h-[92vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Ornate corner accents */}
        <div className="absolute top-1.5 left-1.5 w-3 h-3 border-t-2 border-l-2 border-[#ffd700] rounded-tl pointer-events-none" />
        <div className="absolute top-1.5 right-1.5 w-3 h-3 border-t-2 border-r-2 border-[#ffd700] rounded-tr pointer-events-none" />

        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-2.5 right-2.5 p-1.5 rounded-full bg-black/40 hover:bg-black/70 text-white/80 hover:text-white transition-colors cursor-pointer z-10"
          aria-label="Fechar"
        >
          <X className="w-4 h-4" />
        </button>

        {/* Header Alert Badge */}
        <div className="text-center mb-2">
          <span className="inline-flex items-center gap-1 px-3 py-0.5 rounded-full bg-gradient-to-r from-[#ffd700] via-[#f7d057] to-[#e5b54f] text-[#630808] font-abeezee font-black text-[11px] sm:text-xs shadow-md tracking-wider uppercase border border-white">
            <Sparkles className="w-3 h-3" />
            OFERTA RELÂMPAGO EXCLUSIVA
          </span>
        </div>

        {/* Headline */}
        <h3 className="font-georgia text-lg sm:text-xl font-extrabold text-center text-white mb-1.5 leading-snug drop-shadow-md">
          Leve o <span className="text-yellow-300">Pacote Completo</span> com Todos os Bônus por Apenas:
        </h3>

        <p className="font-assistant text-xs text-center text-amber-100/90 mb-3 leading-tight">
          Por apenas <strong className="text-yellow-300 font-extrabold">R$ 8,00 a mais</strong>, você garante acesso vitalício e todos os bônus!
        </p>

        {/* Offer Box */}
        <div className="bg-white/10 rounded-xl p-3 sm:p-3.5 border border-amber-300/30 mb-3 backdrop-blur-md">
          <div className="text-center mb-2">
            <div className="flex items-center justify-center gap-2">
              <span className="text-xs text-neutral-300 line-through">
                De R$ 29,90
              </span>
              <span className="text-[10px] font-bold bg-emerald-600 text-white px-2 py-0.5 rounded-full">
                37% OFF
              </span>
            </div>
            <div className="flex items-baseline justify-center gap-1.5 mt-0.5">
              <span className="font-atkinson text-3xl sm:text-4xl font-extrabold text-yellow-300 drop-shadow-lg">
                R$ 18,90
              </span>
              <span className="font-atkinson font-bold text-base text-white">
                No Pix
              </span>
            </div>
            <span className="text-[11px] text-amber-100 font-medium block">
              ou em até 2x no cartão
            </span>
          </div>

          <div className="space-y-1.5 border-t border-white/10 pt-2 text-xs text-amber-50">
            <div className="flex items-start gap-1.5">
              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
              <span className="font-semibold text-white">
                +150 Receitas exclusivas ({mode === 'natalino' ? 'Amigurumi Natalino' : 'Crochê Católico'})
              </span>
            </div>
            <div className="flex items-start gap-1.5">
              <CheckCircle2 className="w-3.5 h-3.5 text-yellow-300 shrink-0 mt-0.5" />
              <span className="font-bold text-yellow-200">
                🎁 Todos os 5 Bônus Especiais inclusos
              </span>
            </div>
            <div className="flex items-start gap-1.5">
              <CheckCircle2 className="w-3.5 h-3.5 text-yellow-300 shrink-0 mt-0.5" />
              <span className="font-bold text-yellow-200">
                ♾️ Acesso Vitalício (sem mensalidades)
              </span>
            </div>
            <div className="flex items-start gap-1.5">
              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
              <span>Garantia de 14 dias + Entrega Imediata</span>
            </div>
          </div>
        </div>

        {/* Primary CTA Button (Neon Green) */}
        <a
          id="checkout-upgrade-popup-btn"
          href={upgradeCheckoutUrl}
          target="_blank"
          rel="noopener noreferrer"
          onClick={() => {
            trackPixelEvent('InitiateCheckout', {
              content_name: 'Plano Completo Oferta R$ 18,90',
              value: 18.90,
              currency: 'BRL'
            });
            onClose();
          }}
          className="w-full block py-3 px-4 bg-[#00e639] hover:bg-[#00ff44] text-neutral-950 font-abeezee font-black text-sm sm:text-base rounded-full shadow-[0_0_20px_rgba(0,230,57,0.7)] border-2 border-white transition-all transform hover:scale-[1.02] text-center tracking-wide cursor-pointer"
        >
          SIM! QUERO O PLANO COMPLETO POR R$ 18,90
        </a>

        {/* Trust seals */}
        <div className="mt-2.5 flex flex-wrap items-center justify-center gap-2 text-[10px] sm:text-[11px] text-amber-100 font-abeezee">
          <span className="inline-flex items-center gap-1"><ShieldCheck className="w-3 h-3 text-yellow-300" /> Compra segura</span>
          <span>•</span>
          <span className="inline-flex items-center gap-1"><ShoppingCart className="w-3 h-3 text-yellow-300" /> Acesso imediato</span>
          <span>•</span>
          <span className="inline-flex items-center gap-1"><Award className="w-3 h-3 text-yellow-300" /> Garantia 14 dias</span>
        </div>

        {/* Decline / Continue with basic option */}
        <div className="text-center mt-2 pt-1.5 border-t border-white/10">
          <a
            href={basicCheckoutUrl}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => {
              trackPixelEvent('InitiateCheckout', {
                content_name: 'Plano Básico R$ 10,90',
                value: 10.90,
                currency: 'BRL'
              });
              onClose();
            }}
            className="text-[11px] text-amber-200/80 hover:text-white underline transition-colors cursor-pointer inline-block"
          >
            Não quero os bônus, continuar com o Básico por R$ 10,90 →
          </a>
        </div>
      </div>
    </div>
  );
};
