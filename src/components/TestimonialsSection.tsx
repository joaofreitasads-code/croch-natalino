import React from 'react';
import { Star, Play } from 'lucide-react';
import { YouTubePlayVideo } from './YouTubePlayVideo';

export const TestimonialsSection: React.FC = () => {
  return (
    <section className="py-16 px-4 bg-[#d8c7a8] border-b border-amber-900/10">
      <div className="max-w-6xl mx-auto text-center">
        {/* Badge */}
        <div className="inline-block mb-3">
          <span className="px-6 py-2 rounded-full bg-gradient-to-r from-[#99583b] to-[#ead3a7] text-neutral-900 font-abeezee font-bold text-sm md:text-base shadow-md inline-flex items-center gap-2">
            <Play className="w-4 h-4 fill-neutral-900" /> DEPOIMENTO EM VÍDEO
          </span>
        </div>

        {/* Header */}
        <h2 className="font-georgia text-3xl sm:text-4xl md:text-5xl font-bold text-neutral-950 mt-1">
          Veja o que estão falando
        </h2>

        <h3 className="font-dancing text-4xl sm:text-5xl text-[#008735] font-bold mt-1 mb-6">
          Sobre Nosso Material
        </h3>

        {/* Rating Stars */}
        <div className="flex items-center justify-center gap-1 mb-8 text-amber-500">
          {[...Array(5)].map((_, i) => (
            <Star key={i} className="w-6 h-6 fill-amber-400 text-amber-500" />
          ))}
          <span className="ml-2 font-assistant font-bold text-neutral-900 text-sm">
            4.9 de 5 estrelas
          </span>
        </div>

        {/* Video Layout in 9:16 - Three Video Testimonials Grid */}
        <div className="relative max-w-5xl mx-auto my-6">
          {/* Left Christmas Side Ornaments */}
          <div className="hidden 2xl:flex flex-col items-center gap-6 absolute -left-28 top-1/2 -translate-y-1/2 pointer-events-none z-10">
            <div className="w-24 h-24 rounded-2xl bg-white/60 p-2 shadow-lg backdrop-blur-xs transform -rotate-6 transition-transform hover:rotate-0">
              <img
                src="https://media.atomicatmedia.net/u/K0g3hTUvVFQ3mhBFVs2JSfKk5WQ2/Pictures/SfdqBW2392920.png?width=150&quality=85"
                alt="Papai Noel Amigurumi"
                className="w-full h-full object-contain filter drop-shadow"
                loading="lazy"
                decoding="async"
              />
            </div>
            <div className="w-20 h-20 rounded-2xl bg-white/60 p-2 shadow-lg backdrop-blur-xs transform rotate-3">
              <img
                src="https://media.atomicatmedia.net/u/K0g3hTUvVFQ3mhBFVs2JSfKk5WQ2/Pictures/YQGKEk1981745.png?width=150&quality=85"
                alt="Árvore de Natal Amigurumi"
                className="w-full h-full object-contain filter drop-shadow"
                loading="lazy"
                decoding="async"
              />
            </div>
          </div>

          {/* Right Christmas Side Ornaments */}
          <div className="hidden 2xl:flex flex-col items-center gap-6 absolute -right-28 top-1/2 -translate-y-1/2 pointer-events-none z-10">
            <div className="w-24 h-24 rounded-2xl bg-white/60 p-2 shadow-lg backdrop-blur-xs transform rotate-6 transition-transform hover:rotate-0">
              <img
                src="https://media.atomicatmedia.net/u/K0g3hTUvVFQ3mhBFVs2JSfKk5WQ2/Pictures/AusRdY5814674.png?width=150&quality=85"
                alt="Rena Amigurumi"
                className="w-full h-full object-contain filter drop-shadow"
                loading="lazy"
                decoding="async"
              />
            </div>
            <div className="w-20 h-20 rounded-2xl bg-white/60 p-2 shadow-lg backdrop-blur-xs transform -rotate-3">
              <img
                src="https://media.atomicatmedia.net/u/K0g3hTUvVFQ3mhBFVs2JSfKk5WQ2/Pictures/BkILeM2433386.png?width=150&quality=85"
                alt="Guirlanda Amigurumi"
                className="w-full h-full object-contain filter drop-shadow"
                loading="lazy"
                decoding="async"
              />
            </div>
          </div>

          {/* Clean Borderless 9:16 Videos Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-6 lg:gap-8 max-w-sm sm:max-w-2xl lg:max-w-5xl mx-auto justify-items-center">
            {/* Video 1 */}
            <div className="w-full max-w-[320px] flex flex-col items-center">
              <div className="relative w-full aspect-[9/16] rounded-3xl overflow-hidden shadow-[0_25px_60px_-15px_rgba(0,0,0,0.5)] bg-neutral-950 border-2 border-amber-300/40">
                <YouTubePlayVideo
                  id="depoimento-video-1"
                  src="https://i.imgur.com/d9oJDUL.mp4"
                  preload="none"
                  className="w-full h-full"
                  videoClassName="w-full h-full object-cover"
                />
              </div>
            </div>

            {/* Video 2 */}
            <div className="w-full max-w-[320px] flex flex-col items-center">
              <div className="relative w-full aspect-[9/16] rounded-3xl overflow-hidden shadow-[0_25px_60px_-15px_rgba(0,0,0,0.5)] bg-neutral-950 border-2 border-amber-300/40">
                <YouTubePlayVideo
                  id="depoimento-video-2"
                  src="https://i.imgur.com/erjdJw9.mp4"
                  preload="none"
                  className="w-full h-full"
                  videoClassName="w-full h-full object-cover"
                />
              </div>
            </div>

            {/* Video 3 */}
            <div className="w-full max-w-[320px] flex flex-col items-center sm:col-span-2 lg:col-span-1">
              <div className="relative w-full aspect-[9/16] rounded-3xl overflow-hidden shadow-[0_25px_60px_-15px_rgba(0,0,0,0.5)] bg-neutral-950 border-2 border-amber-300/40">
                <YouTubePlayVideo
                  id="depoimento-video-3"
                  src="https://i.imgur.com/EDc3tyE.mp4"
                  preload="none"
                  className="w-full h-full"
                  videoClassName="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>

          {/* Festive Subtle Accents on mobile/tablet */}
          <div className="flex 2xl:hidden items-center justify-center gap-6 mt-8">
            <div className="w-14 h-14 rounded-xl bg-white/60 p-1.5 shadow-md">
              <img
                src="https://media.atomicatmedia.net/u/K0g3hTUvVFQ3mhBFVs2JSfKk5WQ2/Pictures/SfdqBW2392920.png?width=100&quality=85"
                alt="Papai Noel"
                className="w-full h-full object-contain"
                loading="lazy"
                decoding="async"
              />
            </div>
            <div className="w-14 h-14 rounded-xl bg-white/60 p-1.5 shadow-md">
              <img
                src="https://media.atomicatmedia.net/u/K0g3hTUvVFQ3mhBFVs2JSfKk5WQ2/Pictures/AusRdY5814674.png?width=100&quality=85"
                alt="Rena"
                className="w-full h-full object-contain"
                loading="lazy"
                decoding="async"
              />
            </div>
            <div className="w-14 h-14 rounded-xl bg-white/60 p-1.5 shadow-md">
              <img
                src="https://media.atomicatmedia.net/u/K0g3hTUvVFQ3mhBFVs2JSfKk5WQ2/Pictures/BkILeM2433386.png?width=100&quality=85"
                alt="Guirlanda"
                className="w-full h-full object-contain"
                loading="lazy"
                decoding="async"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
