import React, { useState, useEffect } from 'react';
import { CollectionMode } from '../types';
import { Sparkles } from 'lucide-react';

interface TopBannerProps {
  currentMode: CollectionMode;
  onSelectMode: (mode: CollectionMode) => void;
}

export const TopBanner: React.FC<TopBannerProps> = ({ currentMode, onSelectMode }) => {
  const [currentDate, setCurrentDate] = useState('');
  const [timeLeft, setTimeLeft] = useState({ minutes: 14, seconds: 59 });

  useEffect(() => {
    const today = new Date();
    const day = String(today.getDate()).padStart(2, '0');
    const month = String(today.getMonth() + 1).padStart(2, '0');
    const year = today.getFullYear();
    setCurrentDate(`${day}/${month}/${year}`);

    const interval = setInterval(() => {
      setTimeLeft(prev => {
        if (prev.seconds > 0) {
          return { ...prev, seconds: prev.seconds - 1 };
        } else if (prev.minutes > 0) {
          return { minutes: prev.minutes - 1, seconds: 59 };
        }
        return { minutes: 14, seconds: 59 };
      });
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <header className="sticky top-0 z-50 shadow-md">
      {/* Red announcement ribbon */}
      <div className="bg-[#bd0303] md:bg-[#ff3131] text-white py-2 px-3 text-center transition-colors">
        <div className="max-w-5xl mx-auto flex flex-col sm:flex-row items-center justify-center gap-1 sm:gap-3 text-sm sm:text-base font-assistant font-semibold">
          <div className="flex items-center gap-1.5">
            <Sparkles className="w-4 h-4 text-yellow-300 animate-pulse" />
            <span>OFERTA ESPECIAL DISPONÍVEL SÓ HOJE:</span>
            <span className="bg-yellow-300 text-red-900 px-2 py-0.5 rounded font-bold">
              {currentDate || 'HOJE'}
            </span>
          </div>
          <div className="text-xs sm:text-sm text-yellow-100 font-medium">
            (Expira em: {String(timeLeft.minutes).padStart(2, '0')}:{String(timeLeft.seconds).padStart(2, '0')})
          </div>
        </div>
      </div>

      {/* Collection toggle selector bar */}
      <nav className="bg-[#2a0846] text-white py-2.5 px-3 border-b border-purple-900/40">
        <div className="max-w-4xl mx-auto flex items-center justify-between flex-wrap gap-2 text-xs sm:text-sm">
          <span className="text-amber-200 font-medium hidden md:inline">
            ✨ Escolha a Coleção:
          </span>
          <div className="flex items-center gap-2 mx-auto md:mx-0 w-full md:w-auto justify-center">
            <button
              id="mode-toggle-natalino"
              onClick={() => onSelectMode('natalino')}
              className={`flex-1 md:flex-initial px-3.5 py-1.5 rounded-full font-semibold transition-all text-xs sm:text-sm cursor-pointer ${
                currentMode === 'natalino'
                  ? 'bg-emerald-600 text-white shadow-lg ring-2 ring-emerald-300 scale-102'
                  : 'bg-purple-950/70 text-purple-200 hover:bg-purple-900'
              }`}
            >
              🎄 Coleção Amigurumi Natalino
            </button>
            <button
              id="mode-toggle-catolico"
              onClick={() => onSelectMode('catolico')}
              className={`flex-1 md:flex-initial px-3.5 py-1.5 rounded-full font-semibold transition-all text-xs sm:text-sm cursor-pointer ${
                currentMode === 'catolico'
                  ? 'bg-amber-600 text-white shadow-lg ring-2 ring-amber-300 scale-102'
                  : 'bg-purple-950/70 text-purple-200 hover:bg-purple-900'
              }`}
            >
              ✝️ Coleção Crochê Católico
            </button>
          </div>
        </div>
      </nav>
    </header>
  );
};
