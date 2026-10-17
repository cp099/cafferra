import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight } from 'lucide-react';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'The Concept', href: '#concept' },
    { name: 'Menu Preview', href: '#menu' },
    { name: 'The Experience', href: '#experience' },
    { name: 'Opening Updates', href: '#updates' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        isScrolled
          ? 'bg-cafferra-cream/90 backdrop-blur-md shadow-sm border-b border-cafferra-forest/10 py-3'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8 flex items-center justify-between">
        <a 
          href="/" 
          aria-label="Cafferra Indo-Western Cafe" 
          className="flex items-center gap-3 group min-h-[44px]"
        >
          <img
            src="/brand/logo-brand.png"
            alt="Cafferra® Official Logo"
            className="h-10 sm:h-12 w-auto object-contain transition-transform duration-200 group-hover:scale-105"
            width="160"
            height="48"
          />
          <span className="hidden lg:inline-block pl-3 border-l border-cafferra-forest/20 text-[10px] font-bold tracking-widest uppercase text-cafferra-forest/70 leading-tight">
            Indo-Western<br />Café
          </span>
        </a>

        <nav className="hidden md:flex items-center gap-8" aria-label="Main Navigation">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-sm font-semibold tracking-wide text-cafferra-forest/80 hover:text-cafferra-forest transition-colors relative py-2 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[1.5px] after:bg-cafferra-sage hover:after:w-full after:transition-all after:duration-200"
            >
              {link.name}
            </a>
          ))}
        </nav>

        <div className="hidden md:flex items-center gap-4">
          <a
            href="#updates"
            className="tactile-btn inline-flex items-center gap-1.5 px-5 py-2.5 min-h-[44px] rounded-full bg-cafferra-forest text-cafferra-cream text-xs font-semibold tracking-wider uppercase hover:bg-cafferra-forest-dark transition-all duration-150 shadow-cafferra-soft"
          >
            <span>Opening Updates</span>
            <ArrowUpRight className="w-3.5 h-3.5 text-cafferra-gold" />
          </a>
        </div>

        <button
          type="button"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden min-w-[44px] min-h-[44px] flex items-center justify-center p-2 text-cafferra-forest focus:outline-none rounded-xl hover:bg-cafferra-forest/5"
          aria-label={mobileMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
          aria-expanded={mobileMenuOpen}
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {mobileMenuOpen && (
        <nav 
          aria-label="Mobile Navigation Drawer"
          className="md:hidden bg-cafferra-cream/98 backdrop-blur-xl border-b border-cafferra-forest/10 px-6 pt-4 pb-8 space-y-3 animate-fade-in"
        >
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className="block text-base font-semibold text-cafferra-forest py-3 border-b border-cafferra-forest/5 min-h-[44px] flex items-center"
            >
              {link.name}
            </a>
          ))}
          <div className="pt-3">
            <a
              href="#updates"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full flex items-center justify-center gap-2 py-3.5 rounded-full bg-cafferra-forest text-cafferra-cream text-xs font-semibold tracking-wider uppercase shadow-cafferra-soft"
            >
              <span>Opening Updates</span>
              <ArrowUpRight className="w-4 h-4 text-cafferra-gold" />
            </a>
          </div>
        </nav>
      )}
    </header>
  );
}
