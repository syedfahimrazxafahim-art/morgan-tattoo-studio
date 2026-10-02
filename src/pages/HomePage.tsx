import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight, ShieldCheck, Sparkles, MapPin, Phone, Calendar, HeartHandshake, Eye, CheckCircle2 } from 'lucide-react';
import { STUDIO_INFO, PORTFOLIO_ITEMS, TATTOO_STYLES, DEMO_TESTIMONIALS, TattooItem } from '../data/studioData';
import { LiquidText } from '../components/ui/LiquidText';
import { CornerButton } from '../components/ui/CornerButton';
import { PerspectiveCarousel } from '../components/ui/PerspectiveCarousel';

interface HomePageProps {
  onNavigate: (page: string) => void;
  onSelectArtwork: (item: TattooItem) => void;
  onBookSession: (item?: TattooItem) => void;
}

export const HomePage: React.FC<HomePageProps> = ({
  onNavigate,
  onSelectArtwork,
  onBookSession
}) => {
  const featuredItems = PORTFOLIO_ITEMS.filter((item) => item.featured).slice(0, 7);

  return (
    <div className="relative pt-20 overflow-hidden bg-[#080809]">
      {/* 1. HERO SECTION */}
      <section className="relative min-h-[92vh] flex items-center justify-center px-4 sm:px-6 lg:px-8 py-16 bg-radial-vignette">
        {/* Subtle decorative grid lines */}
        <div className="absolute inset-0 bg-grid-pattern opacity-40 pointer-events-none" />

        <div className="relative max-w-6xl mx-auto w-full text-center flex flex-col items-center">
          {/* Studio Tag & Location */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-zinc-900/90 border border-zinc-800/90 text-xs font-semibold text-[#c5a059] mb-6 shadow-sm"
          >
            <MapPin className="w-3.5 h-3.5" />
            <span>Morgan Tattoo Studio · Los Angeles, California</span>
          </motion.div>

          {/* Liquid Text Main Headline */}
          <div className="max-w-4xl">
            <LiquidText
              text="Bespoke Tattoo Craftsmanship in Los Angeles"
              as="h1"
              className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-bold font-heading text-white tracking-tight leading-[1.1]"
              highlightWords={['Tattoo', 'Craftsmanship', 'Los', 'Angeles']}
              highlightClassName="text-[#c5a059]"
            />
          </div>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mt-6 max-w-2xl text-base sm:text-lg text-zinc-300 font-normal leading-relaxed"
          >
            Dedicated to fine-line needlework, deep black & grey realism, and anatomical illustrative design. Every tattoo is custom-composed to honor your body and story.
          </motion.p>

          {/* CTA Group with CornerButtons */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="mt-8 flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto"
          >
            <CornerButton
              size="lg"
              variant="primary"
              onClick={() => onBookSession()}
              icon={<Calendar className="w-4 h-4" />}
            >
              Book a Tattoo Consultation
            </CornerButton>

            <CornerButton
              size="lg"
              variant="outline"
              onClick={() => onNavigate('portfolio')}
              icon={<ArrowRight className="w-4 h-4" />}
            >
              View Full Portfolio
            </CornerButton>
          </motion.div>

          {/* Trust Pillars */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.45 }}
            className="mt-14 pt-8 border-t border-zinc-800/80 grid grid-cols-2 md:grid-cols-4 gap-6 w-full max-w-4xl text-left"
          >
            <div className="flex items-start gap-3">
              <ShieldCheck className="w-5 h-5 text-[#c5a059] shrink-0 mt-0.5" />
              <div>
                <h4 className="text-xs font-heading font-bold text-white uppercase tracking-wider">Hospital-Grade Clean</h4>
                <p className="text-xs text-zinc-400 mt-0.5">100% single-use sterile setup</p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <Sparkles className="w-5 h-5 text-[#c5a059] shrink-0 mt-0.5" />
              <div>
                <h4 className="text-xs font-heading font-bold text-white uppercase tracking-wider">Custom Artwork</h4>
                <p className="text-xs text-zinc-400 mt-0.5">Zero generic duplicate flash</p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <HeartHandshake className="w-5 h-5 text-[#c5a059] shrink-0 mt-0.5" />
              <div>
                <h4 className="text-xs font-heading font-bold text-white uppercase tracking-wider">Private Studio</h4>
                <p className="text-xs text-zinc-400 mt-0.5">Unhurried 1-on-1 sessions</p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <CheckCircle2 className="w-5 h-5 text-[#c5a059] shrink-0 mt-0.5" />
              <div>
                <h4 className="text-xs font-heading font-bold text-white uppercase tracking-wider">Precision Aging</h4>
                <p className="text-xs text-zinc-400 mt-0.5">Crafted to heal sharp & clean</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 2. PERSPECTIVE CAROUSEL: FEATURED TATTOO ARTWORK */}
      <section className="py-20 bg-[#060608] border-y border-zinc-800/80 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-6">
            <span className="text-xs font-heading font-bold uppercase tracking-widest text-[#c5a059]">
              Interactive 3D Showcase
            </span>
            <h2 className="mt-2 text-2xl sm:text-4xl font-bold font-heading text-white">
              Signature Tattoo Portfolio
            </h2>
            <p className="mt-2 text-sm text-zinc-400">
              Drag or click through selected works. Click on any piece to inspect fine details and needlework precision.
            </p>
          </div>

          <PerspectiveCarousel
            items={featuredItems}
            onSelectImage={onSelectArtwork}
            onBookTattoo={onBookSession}
            autoPlay={true}
          />
        </div>
      </section>

      {/* 3. TATTOO STYLES & SPECIALTIES */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14">
          <div>
            <span className="text-xs font-heading font-bold uppercase tracking-widest text-[#c5a059]">
              Artistic Disciplines
            </span>
            <h2 className="mt-2 text-2xl sm:text-4xl font-bold font-heading text-white">
              Tattoo Styles & Craft
            </h2>
          </div>
          <CornerButton
            size="sm"
            variant="outline"
            onClick={() => onNavigate('styles')}
            icon={<ArrowRight className="w-3.5 h-3.5" />}
          >
            Explore Style Guide
          </CornerButton>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {TATTOO_STYLES.map((style) => (
            <div
              key={style.id}
              onClick={() => onNavigate('styles')}
              className="group relative bg-[#0e0e12] border border-zinc-800 rounded-2xl overflow-hidden hover:border-[#c5a059]/60 transition-all duration-300 flex flex-col justify-between cursor-pointer"
            >
              <div className="relative h-48 overflow-hidden bg-black">
                <img
                  src={style.featuredImage}
                  alt={style.name}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0e0e12] via-transparent to-transparent" />
              </div>

              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="text-lg font-heading font-bold text-white group-hover:text-[#c5a059] transition-colors">
                    {style.name}
                  </h3>
                  <p className="mt-2 text-xs text-zinc-300 line-clamp-3 leading-relaxed">
                    {style.description}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-zinc-800/80 flex items-center justify-between text-xs text-[#c5a059] font-medium">
                  <span>View Details</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 4. ABOUT THE STUDIO HIGHLIGHT */}
      <section className="py-20 bg-[#060608] border-y border-zinc-800/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Visual Column */}
            <div className="lg:col-span-5 relative">
              <div className="relative aspect-[4/5] rounded-2xl overflow-hidden border border-zinc-700/80 shadow-2xl bg-zinc-950">
                <img
                  src={PORTFOLIO_ITEMS[3].imageUrl}
                  alt="Morgan Tattoo Studio Craftsmanship"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/20" />
                
                {/* Floating Logo Badge */}
                <div className="absolute top-4 left-4 p-2.5 rounded-xl bg-black/80 backdrop-blur-md border border-[#c5a059]/40 flex items-center gap-3">
                  <img
                    src={STUDIO_INFO.logoUrl}
                    alt="Logo"
                    referrerPolicy="no-referrer"
                    className="w-8 h-8 rounded-full object-cover"
                  />
                  <div>
                    <p className="text-xs font-heading font-bold text-white">Morgan Tattoo Studio</p>
                    <p className="text-[10px] text-[#c5a059]">Los Angeles, CA</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Content Column */}
            <div className="lg:col-span-7 space-y-6">
              <span className="text-xs font-heading font-bold uppercase tracking-widest text-[#c5a059]">
                Ethos & Artistry
              </span>

              <h2 className="text-2xl sm:text-4xl font-bold font-heading text-white leading-tight">
                Honoring the Tattoo Craft with Uncompromising Integrity
              </h2>

              <p className="text-sm sm:text-base text-zinc-300 leading-relaxed">
                At Morgan Tattoo Studio in Los Angeles, every piece is treated as a permanent collaboration between artist and client. We focus on custom compositions that respect your skin tension, anatomical movement, and personal narrative.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                <div className="p-4 rounded-xl bg-zinc-900/60 border border-zinc-800">
                  <h4 className="text-sm font-heading font-bold text-white">Bespoke Design Process</h4>
                  <p className="text-xs text-zinc-400 mt-1">We never replicate generic internet flash. Every stencil is tailored specifically to you.</p>
                </div>
                <div className="p-4 rounded-xl bg-zinc-900/60 border border-zinc-800">
                  <h4 className="text-sm font-heading font-bold text-white">Sterile Health Standards</h4>
                  <p className="text-xs text-zinc-400 mt-1">Strict sterilization, medical-grade barrier films, and certified vegan pigment formulas.</p>
                </div>
              </div>

              <div className="pt-4 flex flex-wrap items-center gap-4">
                <CornerButton
                  size="md"
                  variant="primary"
                  onClick={() => onNavigate('about')}
                  icon={<ArrowRight className="w-4 h-4" />}
                >
                  Read Studio Philosophy
                </CornerButton>

                <CornerButton
                  size="md"
                  variant="outline"
                  asAnchor
                  href={STUDIO_INFO.phoneHref}
                  icon={<Phone className="w-4 h-4" />}
                >
                  {STUDIO_INFO.phone}
                </CornerButton>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. THE TATTOO JOURNEY / PROCESS */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-xs font-heading font-bold uppercase tracking-widest text-[#c5a059]">
            The Journey
          </span>
          <h2 className="mt-2 text-2xl sm:text-4xl font-bold font-heading text-white">
            From Concept to Healed Art
          </h2>
          <p className="mt-2 text-sm text-zinc-400">
            A transparent and professional 4-step workflow designed for your comfort and lasting quality.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative">
          {[
            {
              step: '01',
              title: 'Concept & Inquiry',
              desc: 'Submit your tattoo ideas, placement, approximate sizing, and visual references via our booking portal.'
            },
            {
              step: '02',
              title: 'Design Consultation',
              desc: 'We review anatomy, discuss tonal contrasts, refine line weights, and finalize the custom stencil draft.'
            },
            {
              step: '03',
              title: 'The Tattoo Session',
              desc: 'A calm, private studio environment in Los Angeles with single-use sterile gear and focused craftsmanship.'
            },
            {
              step: '04',
              title: 'Guided Aftercare',
              desc: 'Complete instructions, specialized dermal wraps, and ongoing guidance to ensure your piece heals sharp.'
            }
          ].map((item, idx) => (
            <div
              key={idx}
              className="p-6 rounded-2xl bg-[#0e0e12] border border-zinc-800 relative group hover:border-[#c5a059]/50 transition-colors"
            >
              <span className="font-heading text-3xl font-extrabold text-[#c5a059]/40 group-hover:text-[#c5a059] transition-colors">
                {item.step}
              </span>
              <h3 className="mt-3 text-lg font-heading font-bold text-white">
                {item.title}
              </h3>
              <p className="mt-2 text-xs text-zinc-300 leading-relaxed">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* 6. PROTOTYPE TESTIMONIALS (CLEARLY LABELED DEMO CONTENT) */}
      <section className="py-20 bg-[#060608] border-y border-zinc-800/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-12">
            <div>
              <div className="flex items-center gap-2">
                <span className="text-xs font-heading font-bold uppercase tracking-widest text-[#c5a059]">
                  Client Experiences
                </span>
                <span className="text-[11px] text-zinc-400 border border-zinc-800 px-2 py-0.5 rounded">
                  Demo Prototype Reviews
                </span>
              </div>
              <h2 className="mt-2 text-2xl sm:text-4xl font-bold font-heading text-white">
                Words from Recent Collectors
              </h2>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {DEMO_TESTIMONIALS.map((review) => (
              <div
                key={review.id}
                className="p-6 rounded-2xl bg-[#0e0e12] border border-zinc-800 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center gap-1 text-[#c5a059] mb-4">
                    {Array.from({ length: review.rating }).map((_, i) => (
                      <span key={i} className="text-sm">★</span>
                    ))}
                  </div>
                  <p className="text-sm text-zinc-300 italic leading-relaxed">
                    "{review.quote}"
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-zinc-800/80">
                  <p className="text-sm font-heading font-bold text-white">{review.clientName}</p>
                  <p className="text-xs text-zinc-400">{review.projectType} · {review.location}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. CONVERSION BANNER */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto text-center">
        <div className="p-8 sm:p-12 md:p-16 rounded-3xl bg-gradient-to-b from-[#121217] to-[#0a0a0d] border border-zinc-700/80 shadow-2xl relative overflow-hidden">
          {/* Subtle corner decorations */}
          <div className="absolute top-4 left-4 w-4 h-4 border-t-2 border-l-2 border-[#c5a059]" />
          <div className="absolute top-4 right-4 w-4 h-4 border-t-2 border-r-2 border-[#c5a059]" />
          <div className="absolute bottom-4 left-4 w-4 h-4 border-b-2 border-l-2 border-[#c5a059]" />
          <div className="absolute bottom-4 right-4 w-4 h-4 border-b-2 border-r-2 border-[#c5a059]" />

          <span className="text-xs font-heading font-bold uppercase tracking-widest text-[#c5a059]">
            Begin Your Custom Project
          </span>

          <h2 className="mt-3 text-2xl sm:text-4xl md:text-5xl font-bold font-heading text-white">
            Ready to Bring Your Tattoo Concept to Life?
          </h2>

          <p className="mt-4 max-w-xl mx-auto text-sm sm:text-base text-zinc-300">
            Sessions at Morgan Tattoo Studio in Los Angeles are strictly limited to ensure uncompromising focus on every collector.
          </p>

          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
            <CornerButton
              size="lg"
              variant="primary"
              onClick={() => onBookSession()}
              icon={<Calendar className="w-4 h-4" />}
            >
              Book an Appointment
            </CornerButton>

            <CornerButton
              size="lg"
              variant="outline"
              asAnchor
              href={STUDIO_INFO.phoneHref}
              icon={<Phone className="w-4 h-4" />}
            >
              Call {STUDIO_INFO.phone}
            </CornerButton>
          </div>
        </div>
      </section>
    </div>
  );
};
