import React from 'react';
import { Phone, MapPin, Calendar, Clock, ArrowUpRight } from 'lucide-react';
import { STUDIO_INFO } from '../data/studioData';
import { CornerButton } from './ui/CornerButton';

interface FooterProps {
  onNavigate: (page: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  const handleNav = (page: string) => {
    onNavigate(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#050507] border-t border-zinc-800 text-zinc-400 relative overflow-hidden">
      {/* Decorative accent top glow */}
      <div className="absolute top-0 inset-x-0 h-[1px] bg-gradient-to-r from-transparent via-[#c5a059]/40 to-transparent" />

      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 mb-12">
          {/* Brand & Studio Ethos (Col 1-5) */}
          <div className="lg:col-span-5 space-y-5">
            <div className="flex items-center gap-3.5">
              <img
                src={STUDIO_INFO.logoUrl}
                alt="Morgan Tattoo Studio"
                referrerPolicy="no-referrer"
                className="w-12 h-12 rounded-full border border-[#c5a059]/60 object-cover shadow-[0_0_15px_rgba(197,160,89,0.2)]"
              />
              <div>
                <h3 className="font-heading text-xl font-bold text-white tracking-wide">
                  Morgan Tattoo Studio
                </h3>
                <p className="text-xs text-[#c5a059] font-medium tracking-wider uppercase">
                  Los Angeles, California
                </p>
              </div>
            </div>

            <p className="text-sm text-zinc-300 leading-relaxed max-w-md">
              Specializing in bespoke black & grey realism, delicate fine-line needlework, and custom illustrative tattoo art. Every project is crafted with anatomical precision, sterile hospital-grade protocols, and dedicated artistic integrity.
            </p>

            <div className="pt-2 flex flex-wrap gap-3">
              <CornerButton
                size="sm"
                variant="primary"
                onClick={() => handleNav('booking')}
                icon={<Calendar className="w-3.5 h-3.5" />}
              >
                Request Appointment
              </CornerButton>

              <CornerButton
                size="sm"
                variant="outline"
                asAnchor
                href={STUDIO_INFO.phoneHref}
                icon={<Phone className="w-3.5 h-3.5" />}
              >
                {STUDIO_INFO.phone}
              </CornerButton>
            </div>
          </div>

          {/* Quick Navigation (Col 6-8) */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="text-xs font-heading font-bold text-white uppercase tracking-widest text-[#c5a059]">
              Studio Navigation
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <button
                  onClick={() => handleNav('home')}
                  className="hover:text-[#c5a059] transition-colors cursor-pointer"
                >
                  Home Showcase
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNav('about')}
                  className="hover:text-[#c5a059] transition-colors cursor-pointer"
                >
                  About the Studio & Standards
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNav('portfolio')}
                  className="hover:text-[#c5a059] transition-colors cursor-pointer"
                >
                  Full Tattoo Portfolio
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNav('styles')}
                  className="hover:text-[#c5a059] transition-colors cursor-pointer"
                >
                  Tattoo Styles & Techniques
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNav('faq')}
                  className="hover:text-[#c5a059] transition-colors cursor-pointer"
                >
                  FAQ & Aftercare Protocol
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNav('booking')}
                  className="hover:text-[#c5a059] transition-colors cursor-pointer font-semibold text-zinc-200"
                >
                  Book a Tattoo Session
                </button>
              </li>
            </ul>
          </div>

          {/* Contact, Hours & Verified Socials (Col 9-12) */}
          <div className="lg:col-span-4 space-y-4">
            <h4 className="text-xs font-heading font-bold text-white uppercase tracking-widest text-[#c5a059]">
              Studio & Contact Details
            </h4>

            <div className="space-y-3 text-sm">
              <div className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-[#c5a059] shrink-0 mt-1" />
                <div>
                  <p className="text-white font-medium">Los Angeles, California</p>
                  <p className="text-xs text-zinc-400">Private Studio Sessions by Appointment</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Phone className="w-4 h-4 text-[#c5a059] shrink-0 mt-1" />
                <div>
                  <a
                    href={STUDIO_INFO.phoneHref}
                    className="text-white font-medium hover:text-[#c5a059] transition-colors"
                  >
                    {STUDIO_INFO.phone}
                  </a>
                  <p className="text-xs text-zinc-400">Direct booking & inquiries</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Clock className="w-4 h-4 text-[#c5a059] shrink-0 mt-1" />
                <div className="text-xs space-y-0.5">
                  <p className="text-zinc-300 font-medium">Tuesday – Saturday: 11am – 8pm</p>
                  <p className="text-zinc-400">Sunday: 12pm – 6pm (Consultations)</p>
                </div>
              </div>
            </div>

            {/* Official Social Link (Only Facebook provided) */}
            <div className="pt-2">
              <a
                href={STUDIO_INFO.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-3.5 py-2 rounded-lg bg-zinc-900 border border-zinc-800 text-xs font-medium text-zinc-200 hover:text-white hover:border-[#c5a059] transition-colors"
              >
                <span>Follow on Facebook</span>
                <ArrowUpRight className="w-3.5 h-3.5 text-[#c5a059]" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-zinc-900 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-zinc-400">
          <p>© {new Date().getFullYear()} Morgan Tattoo Studio. All rights reserved. Los Angeles, CA.</p>
          <div className="flex items-center gap-4 text-zinc-400">
            <span>Sterile Practice</span>
            <span aria-hidden="true">·</span>
            <span>Single-Use Needles</span>
            <span aria-hidden="true">·</span>
            <span>Custom Artistry</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
