import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { HomePage } from './pages/HomePage';
import { AboutPage } from './pages/AboutPage';
import { PortfolioPage } from './pages/PortfolioPage';
import { StylesPage } from './pages/StylesPage';
import { BookingPage } from './pages/BookingPage';
import { FaqPage } from './pages/FaqPage';
import { ContactPage } from './pages/ContactPage';
import { LightboxModal } from './components/ui/LightboxModal';
import { TattooItem } from './data/studioData';

export default function App() {
  const [currentPage, setCurrentPage] = useState<string>('home');
  const [selectedArtwork, setSelectedArtwork] = useState<TattooItem | null>(null);
  const [bookingPrefill, setBookingPrefill] = useState<{
    artwork?: TattooItem | null;
    styleName?: string | null;
  }>({});

  // Support browser history / hash if needed, or state routing
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.replace('#', '');
      if (['home', 'about', 'portfolio', 'styles', 'booking', 'faq', 'contact'].includes(hash)) {
        setCurrentPage(hash);
      }
    };

    if (window.location.hash) {
      handleHashChange();
    }

    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const navigateTo = (page: string) => {
    setCurrentPage(page);
    window.location.hash = page;
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleSelectArtwork = (item: TattooItem) => {
    setSelectedArtwork(item);
  };

  const handleBookFromArtwork = (item?: TattooItem, styleName?: string) => {
    setBookingPrefill({
      artwork: item || null,
      styleName: styleName || null,
    });
    navigateTo('booking');
  };

  return (
    <div className="min-h-screen bg-[#080809] text-zinc-100 flex flex-col justify-between selection:bg-[#c5a059]/30 selection:text-[#f3dfbe]">
      {/* Top Navigation */}
      <Navbar currentPage={currentPage} onNavigate={navigateTo} />

      {/* Main Page Content */}
      <main className="flex-grow">
        {currentPage === 'home' && (
          <HomePage
            onNavigate={navigateTo}
            onSelectArtwork={handleSelectArtwork}
            onBookSession={handleBookFromArtwork}
          />
        )}

        {currentPage === 'about' && (
          <AboutPage
            onNavigate={navigateTo}
            onBookSession={() => handleBookFromArtwork()}
          />
        )}

        {currentPage === 'portfolio' && (
          <PortfolioPage
            onSelectArtwork={handleSelectArtwork}
            onBookSession={handleBookFromArtwork}
          />
        )}

        {currentPage === 'styles' && (
          <StylesPage
            onSelectArtwork={handleSelectArtwork}
            onBookSession={handleBookFromArtwork}
          />
        )}

        {currentPage === 'booking' && (
          <BookingPage
            initialArtwork={bookingPrefill.artwork}
            initialStyle={bookingPrefill.styleName}
            onNavigateHome={() => navigateTo('home')}
          />
        )}

        {currentPage === 'faq' && (
          <FaqPage onBookSession={() => handleBookFromArtwork()} />
        )}

        {currentPage === 'contact' && (
          <ContactPage onBookSession={() => handleBookFromArtwork()} />
        )}
      </main>

      {/* Lightbox Modal for Full-Resolution Artwork Inspection */}
      <LightboxModal
        item={selectedArtwork}
        onClose={() => setSelectedArtwork(null)}
        onBookItem={(item) => handleBookFromArtwork(item)}
      />

      {/* Site Footer */}
      <Footer onNavigate={navigateTo} />
    </div>
  );
}
