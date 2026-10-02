import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronDown, Sparkles, ShieldCheck, Heart, Calendar, Phone, CheckCircle, AlertTriangle } from 'lucide-react';
import { FAQ_ITEMS, STUDIO_INFO } from '../data/studioData';
import { LiquidText } from '../components/ui/LiquidText';
import { CornerButton } from '../components/ui/CornerButton';

interface FaqPageProps {
  onBookSession: () => void;
}

export const FaqPage: React.FC<FaqPageProps> = ({ onBookSession }) => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const [activeTab, setActiveTab] = useState<'faq' | 'aftercare'>('faq');

  const aftercareStages = [
    {
      stage: 'Days 1 – 3',
      title: 'Initial Healing & Protective Phase',
      steps: [
        'Leave medical wrap / second-skin bandage on as instructed (typically 24 to 72 hours).',
        'If bandage fills with fluid (plasma/ink), that is completely normal.',
        'When removing bandage, do so gently under warm running water.',
        'Wash thoroughly using clean fingertips and mild, fragrance-free antibacterial soap.',
        'Gently pat dry with a clean, single-use paper towel. Never rub with a bath towel.'
      ],
      warning: 'Do not re-bandage unless explicitly directed by the studio.'
    },
    {
      stage: 'Days 4 – 7',
      title: 'Hydration & Flaking Phase',
      steps: [
        'Wash 2-3 times daily and apply a very thin layer of recommended fragrance-free lotion or balm.',
        'Ensure the skin can breathe — do not over-saturate with thick ointments.',
        'Light flaking and micro-scabbing will begin. This is a natural part of the epidermal regeneration.',
        'Wear loose, breathable cotton clothing over the tattoo area.'
      ],
      warning: 'Never pick, scratch, or peel peeling skin flakes.'
    },
    {
      stage: 'Days 8 – 14',
      title: 'Settling & Maturation Phase',
      steps: [
        'Continue applying light unscented moisturizer 2 times daily.',
        'The tattoo will look slightly milky or shiny as new skin cells form over the pigment.',
        'Skin tightness will ease, and deep contrast will begin to stabilize.'
      ],
      warning: 'Avoid swimming pools, hot tubs, ocean water, and saunas until day 21+.'
    },
    {
      stage: 'Days 15 – 30+',
      title: 'Long-Term Preservation & SPF Protection',
      steps: [
        'Your tattoo is now epidermally healed. Sub-dermal healing continues for several weeks.',
        'Apply SPF 50+ mineral sunscreen whenever the tattoo is exposed to sunlight.',
        'Keep skin routinely hydrated with body lotion to maintain rich contrast and deep blacks.'
      ],
      warning: 'Sunlight UV exposure is the #1 cause of tattoo fading over time.'
    }
  ];

  return (
    <div className="pt-28 pb-24 min-h-screen bg-[#080809]">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-xs font-heading font-bold uppercase tracking-widest text-[#c5a059]">
            Client Resources & Guidance
          </span>
          <div className="mt-3">
            <LiquidText
              text="FAQ & Aftercare Protocol"
              as="h1"
              className="text-3xl sm:text-5xl md:text-6xl font-bold font-heading text-white"
              highlightWords={['FAQ', 'Aftercare', 'Protocol']}
              highlightClassName="text-[#c5a059]"
            />
          </div>
          <p className="mt-4 text-sm sm:text-base text-zinc-300">
            Everything you need to know about preparing for your session, pricing structures, and maintaining your tattoo in Los Angeles.
          </p>
        </div>

        {/* Tab Switcher */}
        <div className="flex items-center justify-center mb-12">
          <div className="p-1.5 bg-[#0e0e12] border border-zinc-800 rounded-2xl flex items-center gap-2">
            <button
              onClick={() => setActiveTab('faq')}
              className={`px-6 py-2.5 rounded-xl text-xs font-heading font-bold uppercase tracking-wider transition-all duration-200 cursor-pointer ${
                activeTab === 'faq'
                  ? 'bg-[#c5a059] text-black shadow-[0_0_15px_rgba(197,160,89,0.3)]'
                  : 'text-zinc-400 hover:text-white'
              }`}
            >
              Frequently Asked Questions
            </button>
            <button
              onClick={() => setActiveTab('aftercare')}
              className={`px-6 py-2.5 rounded-xl text-xs font-heading font-bold uppercase tracking-wider transition-all duration-200 cursor-pointer ${
                activeTab === 'aftercare'
                  ? 'bg-[#c5a059] text-black shadow-[0_0_15px_rgba(197,160,89,0.3)]'
                  : 'text-zinc-400 hover:text-white'
              }`}
            >
              Aftercare & Healing Protocol
            </button>
          </div>
        </div>

        {/* Tab 1: FAQ Accordion */}
        {activeTab === 'faq' && (
          <div className="space-y-4">
            {FAQ_ITEMS.map((item, index) => {
              const isOpen = openIndex === index;
              return (
                <div
                  key={index}
                  className="rounded-2xl bg-[#0e0e12] border border-zinc-800 overflow-hidden transition-colors hover:border-zinc-700"
                >
                  <button
                    onClick={() => setOpenIndex(isOpen ? null : index)}
                    className="w-full p-6 text-left flex items-center justify-between gap-4 cursor-pointer"
                  >
                    <span className="font-heading text-base sm:text-lg font-bold text-white tracking-wide">
                      {item.question}
                    </span>
                    <span
                      className={`p-1.5 rounded-full bg-zinc-900 border border-zinc-700 text-[#c5a059] transition-transform duration-300 ${
                        isOpen ? 'rotate-180 bg-[#c5a059] text-black' : ''
                      }`}
                    >
                      <ChevronDown className="w-4 h-4" />
                    </span>
                  </button>

                  <AnimatePresence>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                      >
                        <div className="px-6 pb-6 pt-1 text-sm text-zinc-300 border-t border-zinc-800/60 leading-relaxed">
                          {item.answer}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>
        )}

        {/* Tab 2: Aftercare Protocol */}
        {activeTab === 'aftercare' && (
          <div className="space-y-8">
            <div className="p-6 rounded-2xl bg-[#0e0e12] border border-zinc-800 text-xs text-zinc-300 leading-relaxed">
              <strong className="text-white text-sm block mb-1">Our Healing Philosophy:</strong>
              A tattoo is 50% artist technique and 50% client aftercare. Following these steps diligently guarantees crisp lines, deep dark contrast, and optimal skin recovery.
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {aftercareStages.map((stage, idx) => (
                <div
                  key={idx}
                  className="p-6 sm:p-8 rounded-2xl bg-[#0e0e12] border border-zinc-800 flex flex-col justify-between"
                >
                  <div>
                    <span className="text-xs font-heading font-bold uppercase tracking-widest text-[#c5a059]">
                      {stage.stage}
                    </span>
                    <h3 className="mt-1 text-lg font-heading font-bold text-white">
                      {stage.title}
                    </h3>

                    <ul className="mt-4 space-y-2 text-xs text-zinc-300">
                      {stage.steps.map((step, sIdx) => (
                        <li key={sIdx} className="flex items-start gap-2">
                          <CheckCircle className="w-3.5 h-3.5 text-[#c5a059] shrink-0 mt-0.5" />
                          <span>{step}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="mt-6 pt-4 border-t border-zinc-800 text-[11px] text-amber-300/90 flex items-start gap-2">
                    <AlertTriangle className="w-3.5 h-3.5 shrink-0 mt-0.5 text-amber-400" />
                    <span>{stage.warning}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Bottom CTA */}
        <div className="mt-16 p-8 rounded-2xl bg-zinc-900/60 border border-zinc-800 text-center">
          <h3 className="text-xl font-heading font-bold text-white">Still have questions?</h3>
          <p className="text-xs text-zinc-400 mt-1 max-w-md mx-auto">
            Contact Morgan Tattoo Studio directly or book a free consultation in Los Angeles.
          </p>

          <div className="mt-6 flex flex-wrap items-center justify-center gap-4">
            <CornerButton
              size="md"
              variant="primary"
              onClick={onBookSession}
              icon={<Calendar className="w-4 h-4" />}
            >
              Book a Consultation
            </CornerButton>

            <CornerButton
              size="md"
              variant="outline"
              asAnchor
              href={STUDIO_INFO.phoneHref}
              icon={<Phone className="w-4 h-4" />}
            >
              Call {STUDIO_INFO.phone}
            </CornerButton>
          </div>
        </div>
      </div>
    </div>
  );
};
