import React, { useState, useEffect } from 'react';
import { Menu, X, Phone, Calendar, ArrowRight } from 'lucide-react';
import { STUDIO_INFO } from '../data/studioData';
import { CornerButton } from './ui/CornerButton';

interface NavbarProps {
  currentPage: string;
  onNavigate: (page: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ currentPage, onNavigate }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About Studio' },
    { id: 'portfolio', label: 'Portfolio' },
    { id: 'styles', label: 'Tattoo Styles' },
    { id: 'faq', label: 'FAQ & Aftercare' },
    { id: 'contact', label: 'Contact' },
  ];

  const handleLinkClick = (pageId: string) => {
    onNavigate(pageId);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      <header
        className={`fixed top-0 inset-x-0 z-40 transition-all duration-300 ${
          isScrolled
            ? 'bg-[#080809]/95 backdrop-blur-md border-b border-zinc-800/80 shadow-2xl py-3.5'
            : 'bg-gradient-to-b from-[#080809]/90 to-transparent border-b border-white/5 py-5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Brand Zone: Authentic Logo + Wordmark */}
          <button
            type="button"
            onClick={() => handleLinkClick('home')}
            className="flex items-center gap-3.5 group text-left cursor-pointer"
          >
            <div className="relative w-10 h-10 sm:w-11 sm:h-11 rounded-full overflow-hidden border border-[#c5a059]/60 group-hover:border-[#c5a059] shadow-[0_0_15px_rgba(197,160,89,0.2)] transition-colors">
              <img
                src={STUDIO_INFO.logoUrl}
                alt="Morgan Tattoo Studio Logo"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover"
              />
            </div>
            <div>
              <span className="block font-heading text-base sm:text-lg font-bold tracking-tight text-white group-hover:text-[#c5a059] transition-colors leading-tight">
                Morgan Tattoo Studio
              </span>
              <span className="block text-[10px] tracking-widest uppercase text-zinc-400 font-medium">
                Los Angeles, California
              </span>
            </div>
          </button>

          {/* Nav Links: Desktop 5 items */}
          <nav className="hidden lg:flex items-center gap-7 text-sm font-medium">
            {navLinks.map((link) => {
              const isActive = currentPage === link.id;
              return (
                <button
                  key={link.id}
                  onClick={() => handleLinkClick(link.id)}
                  className={`relative py-1 transition-colors cursor-pointer tracking-wider ${
                    isActive
                      ? 'text-[#c5a059] font-semibold'
                      : 'text-zinc-300 hover:text-white'
                  }`}
                >
                  {link.label}
                  {isActive && (
                    <span className="absolute bottom-0 left-0 right-0 h-[2px] bg-[#c5a059] rounded-full" />
                  )}
                </button>
              );
            })}
          </nav>

          {/* Action Zone: Call + Book CTA */}
          <div className="hidden sm:flex items-center gap-4">
            <a
              href={STUDIO_INFO.phoneHref}
              className="hidden xl:flex items-center gap-2 text-xs font-semibold text-zinc-300 hover:text-[#c5a059] transition-colors px-3 py-1.5 border border-zinc-800 rounded-lg hover:border-zinc-700"
            >
              <Phone className="w-3.5 h-3.5 text-[#c5a059]" />
              <span>{STUDIO_INFO.phone}</span>
            </a>

            <CornerButton
              size="sm"
              variant="primary"
              onClick={() => handleLinkClick('booking')}
              icon={<Calendar className="w-3.5 h-3.5" />}
            >
              Book a Tattoo
            </CornerButton>
          </div>

          {/* Mobile Menu Button */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label={mobileMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
            className="lg:hidden p-2 rounded-lg bg-zinc-900 border border-zinc-800 text-zinc-300 hover:text-white hover:border-[#c5a059] transition-colors"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </header>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-30 lg:hidden bg-black/95 backdrop-blur-xl pt-24 px-6 pb-8 flex flex-col justify-between overflow-y-auto animate-fadeIn">
          <div className="space-y-4">
            <div className="flex items-center gap-3 pb-6 border-b border-zinc-800">
              <img
                src={STUDIO_INFO.logoUrl}
                alt="Morgan Tattoo Studio"
                referrerPolicy="no-referrer"
                className="w-10 h-10 rounded-full border border-[#c5a059]/60 object-cover"
              />
              <div>
                <p className="font-heading font-bold text-white text-base">Morgan Tattoo Studio</p>
                <p className="text-xs text-[#c5a059]">Los Angeles, California</p>
              </div>
            </div>

            <nav className="flex flex-col space-y-3 pt-2">
              {navLinks.map((link) => {
                const isActive = currentPage === link.id;
                return (
                  <button
                    key={link.id}
                    onClick={() => handleLinkClick(link.id)}
                    className={`text-left py-3 px-4 rounded-xl text-base font-medium flex items-center justify-between transition-colors ${
                      isActive
                        ? 'bg-zinc-900 text-[#c5a059] font-bold border border-[#c5a059]/30'
                        : 'text-zinc-300 hover:bg-zinc-900/60 hover:text-white'
                    }`}
                  >
                    <span>{link.label}</span>
                    <ArrowRight className="w-4 h-4 opacity-60" />
                  </button>
                );
              })}
            </nav>
          </div>

          <div className="pt-6 border-t border-zinc-800 space-y-4">
            <a
              href={STUDIO_INFO.phoneHref}
              className="flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-zinc-900 border border-zinc-800 text-sm font-medium text-zinc-200 hover:border-[#c5a059]"
            >
              <Phone className="w-4 h-4 text-[#c5a059]" />
              <span>Call: {STUDIO_INFO.phone}</span>
            </a>

            <CornerButton
              size="lg"
              variant="primary"
              className="w-full"
              onClick={() => handleLinkClick('booking')}
            >
              Book a Tattoo Session
            </CornerButton>
          </div>
        </div>
      )}
    </>
  );
};
