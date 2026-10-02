import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight, Sparkles, Check, Clock, MapPin, Calendar } from 'lucide-react';
import { TATTOO_STYLES, TattooStyleInfo, TattooItem, PORTFOLIO_ITEMS } from '../data/studioData';
import { LiquidText } from '../components/ui/LiquidText';
import { CornerButton } from '../components/ui/CornerButton';

interface StylesPageProps {
  onSelectArtwork: (item: TattooItem) => void;
  onBookSession: (item?: TattooItem, styleName?: string) => void;
}

export const StylesPage: React.FC<StylesPageProps> = ({ onSelectArtwork, onBookSession }) => {
  return (
    <div className="pt-28 pb-24 min-h-screen bg-[#080809]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-heading font-bold uppercase tracking-widest text-[#c5a059]">
            Technique & Disciplines
          </span>
          <div className="mt-3">
            <LiquidText
              text="Tattoo Styles & Artistry"
              as="h1"
              className="text-3xl sm:text-5xl md:text-6xl font-bold font-heading text-white"
              highlightWords={['Tattoo', 'Styles', 'Artistry']}
              highlightClassName="text-[#c5a059]"
            />
          </div>
          <p className="mt-4 text-sm sm:text-base text-zinc-300">
            A comprehensive breakdown of our specialized styles, technical approaches, and anatomical placement recommendations at Morgan Tattoo Studio.
          </p>
        </div>

        {/* Styles Deep Dive List */}
        <div className="space-y-16">
          {TATTOO_STYLES.map((style, index) => {
            const isEven = index % 2 === 0;
            return (
              <div
                key={style.id}
                className="p-6 sm:p-10 rounded-3xl bg-[#0e0e12] border border-zinc-800 shadow-2xl relative overflow-hidden"
              >
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
                  {/* Visual Preview (Col 1-5 or 8-12) */}
                  <div className={`lg:col-span-5 ${isEven ? 'lg:order-1' : 'lg:order-2'}`}>
                    <div className="relative aspect-[4/5] rounded-2xl overflow-hidden border border-zinc-700/80 bg-black group shadow-xl">
                      <img
                        src={style.featuredImage}
                        alt={style.name}
                        referrerPolicy="no-referrer"
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/20" />

                      <div className="absolute bottom-4 left-4 right-4 p-3.5 rounded-xl bg-black/80 backdrop-blur-md border border-[#c5a059]/40 flex items-center justify-between">
                        <span className="text-xs font-heading font-bold text-white uppercase tracking-wider">
                          {style.name}
                        </span>
                        <span className="text-[11px] text-[#c5a059] font-medium">
                          Studio Portfolio
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Information Details (Col 6-12) */}
                  <div className={`lg:col-span-7 space-y-6 ${isEven ? 'lg:order-2' : 'lg:order-1'}`}>
                    <div>
                      <span className="text-xs font-heading font-bold uppercase tracking-widest text-[#c5a059]">
                        Specialty {String(index + 1).padStart(2, '0')}
                      </span>
                      <h2 className="mt-1 text-2xl sm:text-3xl font-heading font-bold text-white">
                        {style.name}
                      </h2>
                      <p className="mt-1 text-sm font-medium text-zinc-300 italic">
                        "{style.tagline}"
                      </p>
                    </div>

                    <p className="text-sm text-zinc-300 leading-relaxed">
                      {style.description}
                    </p>

                    {/* Techniques Bullet List */}
                    <div className="space-y-2">
                      <h4 className="text-xs font-heading font-bold uppercase tracking-wider text-[#c5a059]">
                        Core Technical Elements
                      </h4>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
                        {style.techniques.map((tech, i) => (
                          <div key={i} className="flex items-center gap-2 text-zinc-300">
                            <span className="w-1.5 h-1.5 rounded-full bg-[#c5a059] shrink-0" />
                            <span>{tech}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Meta Callouts */}
                    <div className="p-4 rounded-xl bg-zinc-900/80 border border-zinc-800 space-y-2 text-xs">
                      <div className="flex items-start gap-2">
                        <MapPin className="w-4 h-4 text-[#c5a059] shrink-0 mt-0.5" />
                        <div>
                          <strong className="text-zinc-200">Recommended Placement:</strong>{' '}
                          <span className="text-zinc-400">{style.idealFor}</span>
                        </div>
                      </div>

                      <div className="flex items-start gap-2">
                        <Clock className="w-4 h-4 text-[#c5a059] shrink-0 mt-0.5" />
                        <div>
                          <strong className="text-zinc-200">Session Insight:</strong>{' '}
                          <span className="text-zinc-400">{style.sessionAdvice}</span>
                        </div>
                      </div>
                    </div>

                    {/* Actions */}
                    <div className="pt-2 flex flex-wrap items-center gap-4">
                      <CornerButton
                        size="md"
                        variant="primary"
                        onClick={() => onBookSession(undefined, style.name)}
                        icon={<Calendar className="w-4 h-4" />}
                      >
                        Book {style.name}
                      </CornerButton>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
