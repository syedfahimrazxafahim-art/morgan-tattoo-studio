import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Search, Filter, Maximize2, Sparkles, Calendar, ArrowRight } from 'lucide-react';
import { PORTFOLIO_ITEMS, TattooItem } from '../data/studioData';
import { LiquidText } from '../components/ui/LiquidText';
import { CornerButton } from '../components/ui/CornerButton';

interface PortfolioPageProps {
  onSelectArtwork: (item: TattooItem) => void;
  onBookSession: (item?: TattooItem) => void;
}

export const PortfolioPage: React.FC<PortfolioPageProps> = ({
  onSelectArtwork,
  onBookSession
}) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const categories = [
    'All',
    'Black & Grey',
    'Fine-Line & Dotwork',
    'Illustrative Realism',
    'Dark Art & Custom'
  ];

  const filteredItems = useMemo(() => {
    return PORTFOLIO_ITEMS.filter((item) => {
      const matchesCategory = selectedCategory === 'All' || item.category === selectedCategory;
      const matchesSearch =
        item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.placement.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesCategory && matchesSearch;
    });
  }, [selectedCategory, searchQuery]);

  return (
    <div className="pt-28 pb-24 min-h-screen bg-[#080809]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Page Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-xs font-heading font-bold uppercase tracking-widest text-[#c5a059]">
            Visual Archive · Los Angeles, CA
          </span>
          <div className="mt-3">
            <LiquidText
              text="The Tattoo Portfolio"
              as="h1"
              className="text-3xl sm:text-5xl md:text-6xl font-bold font-heading text-white"
              highlightWords={['Tattoo', 'Portfolio']}
              highlightClassName="text-[#c5a059]"
            />
          </div>
          <p className="mt-4 text-sm sm:text-base text-zinc-300">
            Explore authentic tattoo works created at Morgan Tattoo Studio. Every piece reflects custom composition, anatomy alignment, and refined needle craftsmanship.
          </p>
        </div>

        {/* Filter & Search Bar */}
        <div className="bg-[#0e0e12] border border-zinc-800 rounded-2xl p-4 sm:p-6 mb-12 shadow-lg">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-4">
            {/* Category Segmented Tabs */}
            <div className="flex flex-wrap items-center gap-2 w-full lg:w-auto">
              {categories.map((cat) => {
                const isActive = selectedCategory === cat;
                return (
                  <button
                    key={cat}
                    onClick={() => setSelectedCategory(cat)}
                    className={`px-4 py-2 rounded-xl text-xs font-semibold tracking-wider transition-all duration-200 cursor-pointer ${
                      isActive
                        ? 'bg-[#c5a059] text-black shadow-[0_0_15px_rgba(197,160,89,0.3)]'
                        : 'bg-zinc-900 text-zinc-400 hover:text-white hover:bg-zinc-800 border border-zinc-800'
                    }`}
                  >
                    {cat}
                  </button>
                );
              })}
            </div>

            {/* Search Box */}
            <div className="relative w-full lg:w-72">
              <Search className="w-4 h-4 text-zinc-400 absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
              <input
                type="text"
                placeholder="Search placement, theme..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full bg-zinc-900/90 border border-zinc-800 focus:border-[#c5a059] rounded-xl pl-10 pr-4 py-2 text-xs text-white placeholder-zinc-500 focus:outline-none transition-colors"
              />
            </div>
          </div>
        </div>

        {/* Artwork Count */}
        <div className="flex items-center justify-between text-xs text-zinc-400 mb-6 px-1">
          <span>
            Showing <strong className="text-white">{filteredItems.length}</strong> authenticated works
          </span>
          {selectedCategory !== 'All' && (
            <span>
              Category: <strong className="text-[#c5a059]">{selectedCategory}</strong>
            </span>
          )}
        </div>

        {/* Gallery Grid */}
        <motion.div layout className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          <AnimatePresence>
            {filteredItems.map((item) => (
              <motion.div
                key={item.id}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.3 }}
                className="group relative bg-[#0e0e12] border border-zinc-800 rounded-2xl overflow-hidden shadow-xl hover:border-[#c5a059]/60 transition-all duration-300 flex flex-col justify-between"
              >
                {/* Image Box */}
                <div
                  className="relative aspect-[3/4] bg-black overflow-hidden cursor-pointer"
                  onClick={() => onSelectArtwork(item)}
                >
                  <img
                    src={item.imageUrl}
                    alt={item.title}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    loading="lazy"
                  />

                  {/* Gradient Scrim */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent pointer-events-none" />

                  {/* Corner Accent Line */}
                  <div className="absolute top-3 left-3 w-3 h-3 border-t border-l border-[#c5a059]/70 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="absolute top-3 right-3 w-3 h-3 border-t border-r border-[#c5a059]/70 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="absolute bottom-3 left-3 w-3 h-3 border-b border-l border-[#c5a059]/70 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="absolute bottom-3 right-3 w-3 h-3 border-b border-r border-[#c5a059]/70 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                  {/* Inspect Button Overlay on Hover */}
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-black/40 backdrop-blur-[2px]">
                    <span className="px-4 py-2 rounded-xl bg-black/80 border border-[#c5a059] text-xs font-semibold text-[#c5a059] flex items-center gap-2 shadow-2xl">
                      <Maximize2 className="w-4 h-4" />
                      <span>Inspect Artwork</span>
                    </span>
                  </div>

                  {/* Top Placement Chip */}
                  <div className="absolute top-4 left-4 z-10">
                    <span className="px-2.5 py-1 rounded bg-black/70 backdrop-blur-md border border-zinc-700 text-[11px] font-medium text-zinc-300">
                      {item.placement}
                    </span>
                  </div>
                </div>

                {/* Card Content & Action */}
                <div className="p-5 flex-1 flex flex-col justify-between">
                  <div>
                    <span className="text-[11px] font-heading font-semibold uppercase tracking-widest text-[#c5a059]">
                      {item.category}
                    </span>
                    <h3
                      onClick={() => onSelectArtwork(item)}
                      className="mt-1 text-base font-heading font-bold text-white group-hover:text-[#c5a059] transition-colors cursor-pointer leading-snug"
                    >
                      {item.title}
                    </h3>
                    <p className="mt-2 text-xs text-zinc-400 line-clamp-2 leading-relaxed">
                      {item.description}
                    </p>
                  </div>

                  {/* Bottom Action Bar */}
                  <div className="mt-5 pt-4 border-t border-zinc-800/80 flex items-center justify-between gap-3">
                    <button
                      type="button"
                      onClick={() => onSelectArtwork(item)}
                      className="text-xs text-zinc-400 hover:text-white transition-colors flex items-center gap-1 cursor-pointer"
                    >
                      <Maximize2 className="w-3 h-3" />
                      <span>Zoom Details</span>
                    </button>

                    <CornerButton
                      size="sm"
                      variant="outline"
                      onClick={() => onBookSession(item)}
                      icon={<ArrowRight className="w-3 h-3" />}
                    >
                      Book Style
                    </CornerButton>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {filteredItems.length === 0 && (
          <div className="py-20 text-center bg-[#0e0e12] border border-zinc-800 rounded-2xl p-8">
            <p className="text-base text-zinc-300 font-medium">No tattoo works found matching your filter.</p>
            <p className="text-xs text-zinc-500 mt-1">Try selecting 'All' or clearing your search term.</p>
            <div className="mt-6">
              <CornerButton
                size="sm"
                variant="primary"
                onClick={() => {
                  setSelectedCategory('All');
                  setSearchQuery('');
                }}
              >
                Reset Filter
              </CornerButton>
            </div>
          </div>
        )}

        {/* Bottom Consultation Strip */}
        <div className="mt-20 p-8 rounded-2xl bg-zinc-900/60 border border-zinc-800 flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h3 className="text-lg font-heading font-bold text-white">Have an original concept in mind?</h3>
            <p className="text-xs text-zinc-400 mt-1">We create custom illustrations and adaptations specifically for your anatomy.</p>
          </div>
          <CornerButton
            size="md"
            variant="primary"
            onClick={() => onBookSession()}
            icon={<Calendar className="w-4 h-4" />}
          >
            Start Custom Booking
          </CornerButton>
        </div>
      </div>
    </div>
  );
};
