import React from 'react';
import { Bell } from 'lucide-react';
import Button from '../ui/Button';

export default function Hero() {
  return (
    <section className="relative min-h-[92vh] flex items-center justify-center pt-28 pb-20 overflow-hidden bg-grain">
      {/* Apple-style subtle ambient depth - strictly non-neon */}
      <div 
        aria-hidden="true" 
        className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[54rem] h-[34rem] bg-gradient-to-b from-cafferra-sage/12 via-cafferra-gold/5 to-transparent rounded-full blur-3xl pointer-events-none" 
      />

      <div className="max-w-6xl mx-auto px-6 sm:px-8 w-full relative z-10 text-center">
        
        {/* Top Status Badge */}
        <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-cafferra-cream-warm border border-cafferra-forest/10 shadow-sm mb-6 animate-fade-in">
          <span className="w-2 h-2 rounded-full bg-cafferra-sage animate-pulse" />
          <span className="text-xs font-bold tracking-widest uppercase text-cafferra-forest">
            Indo-Western Café · CAFFERRA | ಕೆಫೆರಾ
          </span>
        </div>

        {/* 1. THE BRAND & LOGO: PRIMARY HIGHLIGHT OF THE HERO */}
        <div className="space-y-6 max-w-4xl mx-auto mb-10">
          <div className="relative mx-auto flex items-center justify-center pt-2">
            <img 
              src="/brand/logo-brand.png" 
              alt="Cafferra® - Indo-Western Café" 
              className="w-full max-w-[320px] sm:max-w-[460px] md:max-w-[580px] lg:max-w-[660px] h-auto object-contain drop-shadow-sm transition-transform duration-700 hover:scale-[1.02]"
              loading="eager"
              fetchpriority="high"
              decoding="async"
              width="660"
              height="334"
            />
          </div>

          <h1 className="sr-only">CAFFERRA® — Indian Roots. Global Flavours.</h1>

          {/* 2. THE TAGLINE: CLIENT PRIMARY BRAND TAGLINE */}
          <div className="space-y-4 pt-2">
            <h2 className="font-display text-2xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-cafferra-forest uppercase leading-tight">
              Indian Roots. Global Flavours.
            </h2>

            <p className="font-display text-sm sm:text-base font-bold text-cafferra-gold-dark tracking-wide uppercase">
              One Café. Two Food Cultures. A World Of Flavour.
            </p>

            <p className="text-base sm:text-lg text-cafferra-forest/85 font-normal leading-relaxed max-w-2xl mx-auto text-balance">
              Where the warmth of Indian tradition meets the creativity of modern café culture. From freshly brewed South Indian filter coffee and crispy dosa to crafted cappuccinos, sandwiches, and pasta.
            </p>
          </div>
        </div>

        {/* Apple-style Clean Action Controls */}
        <div className="flex flex-wrap items-center justify-center gap-4 mb-14">
          <a href="#updates" className="min-h-[44px] inline-flex">
            <Button variant="primary" size="lg" icon={Bell} className="min-h-[44px]">
              Get Opening Updates
            </Button>
          </a>
          <a href="#concept" className="min-h-[44px] inline-flex">
            <Button variant="outline" size="lg" className="min-h-[44px]">
              Explore The Concept
            </Button>
          </a>
        </div>

        {/* Hero Visual: Apple-Style Hero Cinema Canvas */}
        <div className="relative mx-auto max-w-5xl rounded-[2.5rem] overflow-hidden shadow-cafferra-card border border-cafferra-forest/10 bg-cafferra-cream-warm aspect-[16/9] sm:aspect-[21/9]">
          <img
            src="https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?auto=format&fit=crop&w=1600&q=80"
            alt="Cafferra Indo-Western Cafe welcoming ambiance bringing generations together"
            className="w-full h-full object-cover transition-transform duration-1000 hover:scale-[1.02]"
            loading="lazy"
            decoding="async"
            width="1600"
            height="686"
          />
          
          {/* Subtle bottom gradient overlay for depth */}
          <div className="absolute inset-0 bg-gradient-to-t from-cafferra-forest-dark/70 via-cafferra-forest-dark/20 to-transparent" />
          
          {/* Integrated Bottom Bar: Clean, Apple HIG Aligned */}
          <div className="absolute bottom-6 left-6 right-6 sm:bottom-8 sm:left-8 sm:right-8 flex flex-col sm:flex-row items-center justify-between gap-4 p-5 sm:p-6 rounded-2xl bg-cafferra-cream/95 backdrop-blur-xl border border-white/40 shadow-cafferra-soft">
            <div className="flex items-center gap-4 text-left">
              <div className="w-10 h-10 rounded-xl bg-cafferra-sage/15 flex items-center justify-center flex-shrink-0">
                <img 
                  src="/brand/logo-icon.png" 
                  alt="" 
                  aria-hidden="true"
                  className="w-6 h-6 object-contain" 
                  width="24"
                  height="24"
                />
              </div>
              <div>
                <p className="font-display text-xs sm:text-sm font-bold uppercase tracking-wider text-cafferra-forest">
                  One Café · Every Generation
                </p>
                <p className="text-xs text-cafferra-taupe">
                  Indian Comfort Favourites &amp; Modern Café Culture
                </p>
              </div>
            </div>

            <div className="flex items-center gap-6 text-xs text-cafferra-forest font-semibold uppercase tracking-wider">
              <span className="flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-cafferra-gold" />
                Filter Coffee &amp; Cappuccino
              </span>
              <span className="flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-cafferra-sage" />
                Crispy Dosa &amp; Pasta
              </span>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
