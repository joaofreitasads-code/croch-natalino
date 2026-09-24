import React, { useRef, useState } from 'react';
import { getVideoPoster } from '../utils/optimizeMedia';

interface YouTubePlayVideoProps {
  id: string;
  src: string;
  poster?: string;
  preload?: 'none' | 'metadata' | 'auto';
  className?: string;
  videoClassName?: string;
}

export const YouTubePlayVideo: React.FC<YouTubePlayVideoProps> = ({
  id,
  src,
  poster,
  preload = 'metadata',
  className = '',
  videoClassName = 'w-full h-full object-cover'
}) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  // Automatically derive a lightweight first-frame poster (40KB) if none is provided
  const effectivePoster = poster || getVideoPoster(src);

  const handlePlay = () => {
    if (videoRef.current) {
      videoRef.current.muted = false;
      videoRef.current.volume = 1;
      videoRef.current
        .play()
        .then(() => {
          setIsPlaying(true);
        })
        .catch(() => {
          // If browser strictly blocks unmuted play without previous user sound interaction, retry play
          if (videoRef.current) {
            videoRef.current.play();
            setIsPlaying(true);
          }
        });
    }
  };

  return (
    <div className={`relative ${className}`}>
      <video
        ref={videoRef}
        id={id}
        src={src}
        poster={effectivePoster}
        controls={isPlaying}
        playsInline
        preload={preload}
        onPlay={() => setIsPlaying(true)}
        onPause={() => setIsPlaying(false)}
        onEnded={() => setIsPlaying(false)}
        className={videoClassName}
      >
        Seu navegador não suporta a reprodução deste vídeo.
      </video>

      {/* YouTube Play Overlay */}
      {!isPlaying && (
        <button
          type="button"
          onClick={handlePlay}
          aria-label="Assistir ao vídeo"
          className="absolute inset-0 w-full h-full flex flex-col items-center justify-center bg-black/35 hover:bg-black/25 transition-all cursor-pointer group z-20"
        >
          <div className="flex flex-col items-center justify-center transform group-hover:scale-108 active:scale-98 transition-all duration-200">
            {/* Authentic YouTube Icon SVG */}
            <svg
              viewBox="0 0 68 48"
              className="w-16 h-11 sm:w-20 sm:h-14 drop-shadow-[0_10px_25px_rgba(0,0,0,0.8)] transition-all"
            >
              <path
                d="M66.52,7.74c-0.78-2.93-2.49-5.41-5.42-6.19C55.79,.13,34,0,34,0S12.21,.13,6.9,1.55 C3.97,2.33,2.27,4.81,1.48,7.74C0.06,13.05,0,24,0,24s0.06,10.95,1.48,16.26c0.78,2.93,2.49,5.41,5.42,6.19 C12.21,47.87,34,48,34,48s21.79-0.13,27.1-1.55c2.93-0.78,4.64-3.26,5.42-6.19C67.94,34.95,68,24,68,24S67.94,13.05,66.52,7.74z"
                fill="#FF0000"
                className="group-hover:fill-[#e60000] transition-colors"
              />
              <polygon points="27,33 45,24 27,15" fill="#FFFFFF" />
            </svg>

            {/* Subtitle Underneath the button */}
            <span className="text-white text-xs sm:text-sm font-assistant font-extrabold uppercase tracking-wider bg-black/75 px-3.5 py-1 rounded-full border border-white/30 shadow-lg backdrop-blur-xs mt-2 select-none group-hover:bg-black/90 transition-colors">
              assista o vídeo
            </span>
          </div>
        </button>
      )}
    </div>
  );
};
