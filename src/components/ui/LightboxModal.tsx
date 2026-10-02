import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, ZoomIn, ZoomOut, Calendar, Sparkles, MapPin, Clock, ArrowRight } from 'lucide-react';
import { TattooItem } from '../../data/studioData';
import { CornerButton } from './CornerButton';

interface LightboxModalProps {
  item: TattooItem | null;
  onClose: () => void;
  onBookItem: (item: TattooItem) => void;
}

export const LightboxModal: React.FC<LightboxModalProps> = ({
  item,
  onClose,
  onBookItem
}) => {
  const [isZoomed, setIsZoomed] = useState(false);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose]);

  if (!item) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-8">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black/90 backdrop-blur-md"
          onClick={onClose}
        />

        {/* Modal Container */}
        <motion.div
          initial={{ scale: 0.94, opacity: 0, y: 20 }}
          animate={{ scale: 1, opacity: 1, y: 0 }}
          exit={{ scale: 0.94, opacity: 0, y: 20 }}
          transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
          className="relative z-10 w-full max-w-5xl bg-[#0e0e12] border border-zinc-700/80 rounded-2xl overflow-hidden shadow-2xl flex flex-col lg:flex-row max-h-[90vh]"
        >
          {/* Close Button */}
          <button
            onClick={onClose}
            aria-label="Close Lightbox"
            className="absolute top-4 right-4 z-30 p-2.5 rounded-full bg-black/70 border border-zinc-700 text-zinc-300 hover:text-white hover:border-[#c5a059] transition-colors"
          >
            <X className="w-5 h-5" />
          </button>

          {/* Image Showcase Section */}
          <div className="relative flex-1 bg-black flex items-center justify-center min-h-[340px] sm:min-h-[460px] lg:min-h-[580px] overflow-hidden group">
            <img
              src={item.imageUrl}
              alt={item.title}
              referrerPolicy="no-referrer"
              className={`w-full h-full object-contain max-h-[75vh] transition-transform duration-500 cursor-zoom-in ${
                isZoomed ? 'scale-150 cursor-zoom-out' : 'scale-100'
              }`}
              onClick={() => setIsZoomed(!isZoomed)}
            />

            {/* Zoom Controls Overlay */}
            <div className="absolute bottom-4 left-4 z-20 flex items-center gap-2 bg-black/60 backdrop-blur-md border border-zinc-800 rounded-lg p-1.5">
              <button
                type="button"
                onClick={() => setIsZoomed(!isZoomed)}
                className="p-1.5 text-zinc-300 hover:text-white transition-colors text-xs flex items-center gap-1.5"
                title={isZoomed ? 'Reset zoom' : 'Magnify detail'}
              >
                {isZoomed ? <ZoomOut className="w-4 h-4" /> : <ZoomIn className="w-4 h-4" />}
                <span className="hidden sm:inline font-mono">{isZoomed ? '150%' : '100%'}</span>
              </button>
            </div>

            <div className="absolute top-4 left-4 z-20 px-3 py-1 bg-black/70 backdrop-blur-md rounded border border-zinc-700 text-xs font-heading text-[#c5a059] uppercase tracking-wider">
              Morgan Tattoo Studio · Los Angeles
            </div>
          </div>

          {/* Details Sidebar */}
          <div className="w-full lg:w-[380px] p-6 sm:p-8 flex flex-col justify-between overflow-y-auto bg-[#101015] border-t lg:border-t-0 lg:border-l border-zinc-800">
            <div>
              {/* Category & Placement */}
              <div className="flex items-center gap-2 text-xs font-semibold text-[#c5a059] tracking-widest uppercase mb-2">
                <span>{item.category}</span>
                <span aria-hidden="true">·</span>
                <span className="text-zinc-400">{item.placement}</span>
              </div>

              <h2 className="text-xl sm:text-2xl font-heading font-bold text-white tracking-tight leading-snug">
                {item.title}
              </h2>

              <p className="mt-4 text-sm text-zinc-300 leading-relaxed">
                {item.description}
              </p>

              {/* Technical Specifications List */}
              <div className="mt-6 space-y-3 pt-6 border-t border-zinc-800 text-xs">
                <div className="flex items-center justify-between py-1 border-b border-zinc-800/60">
                  <span className="text-zinc-400 flex items-center gap-1.5">
                    <MapPin className="w-3.5 h-3.5 text-[#c5a059]" /> Suggested Placement
                  </span>
                  <span className="font-semibold text-zinc-200">{item.placement}</span>
                </div>

                <div className="flex items-center justify-between py-1 border-b border-zinc-800/60">
                  <span className="text-zinc-400 flex items-center gap-1.5">
                    <Clock className="w-3.5 h-3.5 text-[#c5a059]" /> Healing Timeline
                  </span>
                  <span className="font-semibold text-zinc-200">{item.healingTime}</span>
                </div>

                <div className="flex items-center justify-between py-1">
                  <span className="text-zinc-400 flex items-center gap-1.5">
                    <Sparkles className="w-3.5 h-3.5 text-[#c5a059]" /> Craft Standard
                  </span>
                  <span className="font-semibold text-[#c5a059]">Custom Bespoke Piece</span>
                </div>
              </div>

              <div className="mt-6 p-3.5 bg-zinc-900/80 rounded-xl border border-zinc-800 text-xs text-zinc-400 leading-relaxed">
                <strong className="text-zinc-200 font-medium block mb-1">Authentic Studio Work:</strong>
                All pieces are hand-composed by Morgan Tattoo Studio in Los Angeles, California. Designs are customized to each client’s unique anatomical flow.
              </div>
            </div>

            {/* Bottom Actions */}
            <div className="mt-8 pt-4 border-t border-zinc-800 flex flex-col gap-3">
              <CornerButton
                variant="primary"
                size="md"
                className="w-full"
                icon={<ArrowRight className="w-4 h-4" />}
                onClick={() => {
                  onClose();
                  onBookItem(item);
                }}
              >
                Book Similar Tattoo
              </CornerButton>

              <button
                type="button"
                onClick={onClose}
                className="text-xs text-zinc-400 hover:text-white transition-colors text-center py-1"
              >
                Back to Portfolio
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
