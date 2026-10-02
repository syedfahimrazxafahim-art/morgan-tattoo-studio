import React from 'react';
import { motion } from 'motion/react';
import { ShieldCheck, HeartHandshake, Sparkles, MapPin, Phone, Calendar, ArrowRight, CheckCircle2 } from 'lucide-react';
import { STUDIO_INFO, PORTFOLIO_ITEMS } from '../data/studioData';
import { LiquidText } from '../components/ui/LiquidText';
import { CornerButton } from '../components/ui/CornerButton';

interface AboutPageProps {
  onNavigate: (page: string) => void;
  onBookSession: () => void;
}

export const AboutPage: React.FC<AboutPageProps> = ({ onNavigate, onBookSession }) => {
  return (
    <div className="pt-28 pb-24 min-h-screen bg-[#080809]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-heading font-bold uppercase tracking-widest text-[#c5a059]">
            Studio Ethos & Discipline
          </span>
          <div className="mt-3">
            <LiquidText
              text="About Morgan Tattoo Studio"
              as="h1"
              className="text-3xl sm:text-5xl md:text-6xl font-bold font-heading text-white"
              highlightWords={['Morgan', 'Tattoo', 'Studio']}
              highlightClassName="text-[#c5a059]"
            />
          </div>
          <p className="mt-4 text-sm sm:text-base text-zinc-300">
            A dedicated private tattoo studio in Los Angeles, California, grounded in anatomical respect, timeless contrast, and patient craftsmanship.
          </p>
        </div>

        {/* Hero Story Block */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-24">
          <div className="lg:col-span-5">
            <div className="relative aspect-[4/5] rounded-2xl overflow-hidden border border-zinc-700/80 shadow-2xl bg-zinc-950 group">
              <img
                src={PORTFOLIO_ITEMS[1].imageUrl}
                alt="Morgan Tattoo Studio Art"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-transparent to-black/30" />

              <div className="absolute bottom-6 left-6 right-6 p-4 rounded-xl bg-black/80 backdrop-blur-md border border-[#c5a059]/40 flex items-center gap-3">
                <img
                  src={STUDIO_INFO.logoUrl}
                  alt="Logo"
                  referrerPolicy="no-referrer"
                  className="w-12 h-12 rounded-full object-cover border border-[#c5a059]"
                />
                <div>
                  <h3 className="text-sm font-heading font-bold text-white">Morgan Tattoo Studio</h3>
                  <p className="text-xs text-[#c5a059]">Los Angeles, CA · Private Studio</p>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-7 space-y-6">
            <h2 className="text-2xl sm:text-3xl font-heading font-bold text-white leading-tight">
              Tattooing as an Anatomical Collaboration
            </h2>

            <p className="text-sm sm:text-base text-zinc-300 leading-relaxed">
              Every body is unique in its musculature, curvature, and skin tone. At Morgan Tattoo Studio, we approach each project not as a flat canvas, but as a three-dimensional sculpture. Whether executing ultra-delicate fine line dotwork or high-contrast black and grey realism, the design is structured to flow naturally with your body's motion.
            </p>

            <p className="text-sm sm:text-base text-zinc-300 leading-relaxed">
              We maintain a calm, focused, and unhurried private studio atmosphere in Los Angeles. This ensures that every collector receives undivided artistic attention, thoroughly discussed placement adjustments, and a comfortable, personalized tattooing experience.
            </p>

            <div className="pt-4 grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="p-4 rounded-xl bg-zinc-900/80 border border-zinc-800">
                <h4 className="text-sm font-heading font-bold text-white flex items-center gap-2">
                  <Sparkles className="w-4 h-4 text-[#c5a059]" /> Bespoke Flash & Stencils
                </h4>
                <p className="text-xs text-zinc-400 mt-1">Every stencil is customized or hand-drawn to match your exact anatomy and proportions.</p>
              </div>

              <div className="p-4 rounded-xl bg-zinc-900/80 border border-zinc-800">
                <h4 className="text-sm font-heading font-bold text-white flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#c5a059]" /> Precision Needle Control
                </h4>
                <p className="text-xs text-zinc-400 mt-1">Calibrated needle depth to minimize skin trauma and optimize crisp, long-term healing.</p>
              </div>
            </div>
          </div>
        </div>

        {/* 3 Core Commitments */}
        <div className="mb-24">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-xs font-heading font-bold uppercase tracking-widest text-[#c5a059]">
              Standard of Care
            </span>
            <h2 className="mt-2 text-2xl sm:text-3xl font-bold font-heading text-white">
              Studio Hygiene & Client Safety
            </h2>
            <p className="mt-2 text-xs text-zinc-400">
              Your safety and comfort are paramount. We strictly enforce certified sterile protocol across every session.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-6 rounded-2xl bg-[#0e0e12] border border-zinc-800 flex flex-col justify-between">
              <div>
                <ShieldCheck className="w-8 h-8 text-[#c5a059] mb-4" />
                <h3 className="text-lg font-heading font-bold text-white">100% Single-Use Disposables</h3>
                <p className="mt-2 text-xs text-zinc-300 leading-relaxed">
                  All needle cartridges, ink caps, barrier films, and gloves are single-use, medically sealed, and disposed of after every client.
                </p>
              </div>
              <div className="mt-6 pt-4 border-t border-zinc-800 text-[11px] text-[#c5a059] font-medium">
                Hospital-grade autoclave sterilization
              </div>
            </div>

            <div className="p-6 rounded-2xl bg-[#0e0e12] border border-zinc-800 flex flex-col justify-between">
              <div>
                <HeartHandshake className="w-8 h-8 text-[#c5a059] mb-4" />
                <h3 className="text-lg font-heading font-bold text-white">Private & Focused Space</h3>
                <p className="mt-2 text-xs text-zinc-300 leading-relaxed">
                  One-on-one sessions in a clean, quiet environment without street distractions. Take breaks as needed throughout your session.
                </p>
              </div>
              <div className="mt-6 pt-4 border-t border-zinc-800 text-[11px] text-[#c5a059] font-medium">
                Comfort-first client experience
              </div>
            </div>

            <div className="p-6 rounded-2xl bg-[#0e0e12] border border-zinc-800 flex flex-col justify-between">
              <div>
                <Sparkles className="w-8 h-8 text-[#c5a059] mb-4" />
                <h3 className="text-lg font-heading font-bold text-white">Premium Inks & Pigments</h3>
                <p className="mt-2 text-xs text-zinc-300 leading-relaxed">
                  We use only high-purity, vegan-friendly carbon blacks and verified grey wash dilutions engineered for long-term clarity.
                </p>
              </div>
              <div className="mt-6 pt-4 border-t border-zinc-800 text-[11px] text-[#c5a059] font-medium">
                Tested color retention
              </div>
            </div>
          </div>
        </div>

        {/* Location & Booking CTA */}
        <div className="p-8 sm:p-12 rounded-3xl bg-[#0e0e12] border border-zinc-800 text-center max-w-4xl mx-auto">
          <h3 className="text-2xl sm:text-3xl font-heading font-bold text-white">
            Located in Los Angeles, California
          </h3>
          <p className="mt-3 text-sm text-zinc-300 max-w-lg mx-auto">
            Bookings are open for custom projects, fine-line concepts, and black & grey realism. Schedule your initial consultation today.
          </p>

          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
            <CornerButton
              size="lg"
              variant="primary"
              onClick={onBookSession}
              icon={<Calendar className="w-4 h-4" />}
            >
              Book a Consultation
            </CornerButton>

            <CornerButton
              size="lg"
              variant="outline"
              onClick={() => onNavigate('portfolio')}
              icon={<ArrowRight className="w-4 h-4" />}
            >
              Browse Gallery
            </CornerButton>
          </div>
        </div>
      </div>
    </div>
  );
};
