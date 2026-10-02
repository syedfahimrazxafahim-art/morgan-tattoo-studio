import React, { useState, useEffect, useRef, useCallback } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronLeft, ChevronRight, Maximize2, Sparkles } from 'lucide-react';
import { TattooItem } from '../../data/studioData';
import { CornerButton } from './CornerButton';

interface PerspectiveCarouselProps {
  items: TattooItem[];
  onSelectImage?: (item: TattooItem) => void;
  onBookTattoo?: (item?: TattooItem) => void;
  autoPlay?: boolean;
}

export const PerspectiveCarousel: React.FC<PerspectiveCarouselProps> = ({
  items,
  onSelectImage,
  onBookTattoo,
  autoPlay = false
}) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const total = items.length;
  const touchStartX = useRef<number | null>(null);

  const nextSlide = useCallback(() => {
    setActiveIndex((prev) => (prev + 1) % total);
  }, [total]);

  const prevSlide = useCallback(() => {
    setActiveIndex((prev) => (prev - 1 + total) % total);
  }, [total]);

  useEffect(() => {
    if (!autoPlay || isPaused) return;
    const interval = setInterval(nextSlide, 5000);
    return () => clearInterval(interval);
  }, [autoPlay, isPaused, nextSlide]);

  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStartX.current === null) return;
    const diff = touchStartX.current - e.changedTouches[0].clientX;
    if (Math.abs(diff) > 40) {
      if (diff > 0) nextSlide();
      else prevSlide();
    }
    touchStartX.current = null;
  };

  const currentItem = items[activeIndex];

  return (
    <div
      className="relative w-full max-w-6xl mx-auto px-4 py-8 select-none"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
    >
      {/* 3D Carousel Stage */}
      <div className="relative h-[480px] sm:h-[560px] md:h-[620px] flex items-center justify-center [perspective:1400px] overflow-visible">
        {items.map((item, index) => {
          let offset = index - activeIndex;
          if (offset < -Math.floor(total / 2)) offset += total;
          if (offset > Math.floor(total / 2)) offset -= total;

          const isCenter = offset === 0;
          const isVisible = Math.abs(offset) <= 2;

          if (!isVisible) return null;

          const translateX = offset * 260; // offset in px
          const rotateY = offset * -28; // angle degrees
          const scale = isCenter ? 1 : Math.max(0.75, 1 - Math.abs(offset) * 0.14);
          const zIndex = 30 - Math.abs(offset) * 10;
          const opacity = isCenter ? 1 : Math.max(0.35, 1 - Math.abs(offset) * 0.35);

          return (
            <motion.div
              key={item.id}
              className="absolute w-[290px] sm:w-[360px] md:w-[420px] h-[400px] sm:h-[480px] md:h-[540px] cursor-pointer"
              animate={{
                x: translateX,
                rotateY: rotateY,
                scale: scale,
                opacity: opacity,
                zIndex: zIndex,
              }}
              transition={{
                duration: 0.65,
                ease: [0.16, 1, 0.3, 1],
              }}
              onClick={() => {
                if (isCenter) {
                  onSelectImage?.(item);
                } else {
                  setActiveIndex(index);
                }
              }}
            >
              <div
                className={`relative w-full h-full rounded-xl overflow-hidden transition-all duration-300 border ${
                  isCenter
                    ? 'border-[#c5a059]/60 shadow-[0_20px_60px_rgba(0,0,0,0.8),0_0_40px_rgba(197,160,89,0.2)] ring-1 ring-[#c5a059]/40'
                    : 'border-zinc-800 shadow-xl brightness-75 hover:brightness-95'
                } bg-zinc-950 group`}
              >
                {/* Background Artwork */}
                <img
                  src={item.imageUrl}
                  alt={item.title}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-105"
                  loading="lazy"
                />

                {/* Ambient vignette scrim */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/35 to-transparent pointer-events-none" />

                {/* Subtle corner ticks */}
                <div className="absolute top-3 left-3 w-3 h-3 border-t border-l border-[#c5a059]/80" />
                <div className="absolute top-3 right-3 w-3 h-3 border-t border-r border-[#c5a059]/80" />
                <div className="absolute bottom-3 left-3 w-3 h-3 border-b border-l border-[#c5a059]/80" />
                <div className="absolute bottom-3 right-3 w-3 h-3 border-b border-r border-[#c5a059]/80" />

                {/* Center Badge if Active */}
                {isCenter && (
                  <div className="absolute top-4 right-4 z-20 flex items-center gap-1.5 px-3 py-1 bg-black/60 backdrop-blur-md rounded border border-[#c5a059]/40 text-[#c5a059] text-xs font-heading">
                    <Sparkles className="w-3 h-3" />
                    <span>Featured Work</span>
                  </div>
                )}

                {/* Bottom Overlay Details */}
                <div className="absolute bottom-0 inset-x-0 p-5 sm:p-6 z-10">
                  <div className="flex items-center gap-2 text-xs font-medium text-[#c5a059] tracking-wider uppercase mb-1">
                    <span>{item.category}</span>
                    <span aria-hidden="true">·</span>
                    <span className="text-zinc-400">{item.placement}</span>
                  </div>
                  <h3 className="text-lg sm:text-xl font-heading font-bold text-white tracking-wide leading-tight line-clamp-1">
                    {item.title}
                  </h3>

                  {isCenter && (
                    <div className="mt-3 flex items-center justify-between pt-3 border-t border-zinc-800/80">
                      <span className="text-xs text-zinc-400">
                        Healing: <strong className="text-zinc-200">{item.healingTime}</strong>
                      </span>
                      <button
                        type="button"
                        onClick={(e) => {
                          e.stopPropagation();
                          onSelectImage?.(item);
                        }}
                        className="flex items-center gap-1 text-xs font-semibold text-[#c5a059] hover:text-white transition-colors"
                      >
                        <Maximize2 className="w-3.5 h-3.5" />
                        <span>Inspect Artwork</span>
                      </button>
                    </div>
                  )}
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>

      {/* Controller Bar */}
      <div className="mt-8 flex flex-col sm:flex-row items-center justify-between gap-6 border-t border-zinc-800/70 pt-6">
        {/* Caption Info */}
        <div className="text-center sm:text-left">
          <p className="text-xs uppercase tracking-widest text-[#c5a059] font-heading font-semibold">
            {currentItem?.category} — Portfolio Showcase
          </p>
          <p className="text-sm text-zinc-300 font-medium mt-0.5 max-w-md line-clamp-1">
            {currentItem?.description}
          </p>
        </div>

        {/* Carousel Arrows & Action */}
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-2">
            <button
              onClick={prevSlide}
              aria-label="Previous artwork"
              className="w-10 h-10 rounded-lg bg-zinc-900/90 border border-zinc-700/60 hover:border-[#c5a059] text-zinc-300 hover:text-white flex items-center justify-center transition-colors active:scale-95"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <span className="text-xs font-mono text-zinc-400 px-2">
              {String(activeIndex + 1).padStart(2, '0')} / {String(total).padStart(2, '0')}
            </span>
            <button
              onClick={nextSlide}
              aria-label="Next artwork"
              className="w-10 h-10 rounded-lg bg-zinc-900/90 border border-zinc-700/60 hover:border-[#c5a059] text-zinc-300 hover:text-white flex items-center justify-center transition-colors active:scale-95"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>

          <CornerButton
            size="sm"
            variant="primary"
            onClick={() => onBookTattoo?.(currentItem)}
          >
            Request Custom Piece
          </CornerButton>
        </div>
      </div>
    </div>
  );
};
