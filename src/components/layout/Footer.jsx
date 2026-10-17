import React from 'react';
import { ArrowUp, ShieldCheck, FileText, Cookie } from 'lucide-react';

export default function Footer({ onOpenPrivacy, onOpenTerms, onOpenCookies }) {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-cafferra-forest-deep text-cafferra-cream border-t border-cafferra-forest/30 pt-16 pb-12 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 pb-16 border-b border-cafferra-forest/40">
          <div className="md:col-span-6 space-y-6">
            <img
              src="/brand/logo-cream-brand.png"
              alt="Cafferra® Registered Brandmark"
              className="h-11 sm:h-14 w-auto object-contain"
              loading="lazy"
              decoding="async"
              width="180"
              height="55"
            />
            <p className="text-sm text-cafferra-cream/80 max-w-sm leading-relaxed">
              An Indo-Western Café bringing together the warmth of Indian culinary traditions and the creativity of modern café culture. Your kind of coffee. Your kind of food. Your kind of place.
            </p>
            <div className="flex flex-wrap items-center gap-3">
              <span className="px-3 py-1 rounded-full text-xs font-semibold bg-cafferra-forest text-cafferra-gold border border-cafferra-gold/30 uppercase tracking-widest">
                Indo-Western Café
              </span>
              <span className="text-xs text-cafferra-cream/70 tracking-wider uppercase font-medium">
                CAFFERRA | ಕೆಫೆರಾ
              </span>
            </div>
          </div>

          <div className="md:col-span-3 space-y-4">
            <h4 className="font-display text-sm font-bold uppercase tracking-wider text-cafferra-gold">
              Navigation
            </h4>
            <ul className="space-y-2.5 text-xs sm:text-sm text-cafferra-cream/80">
              <li>
                <a href="#concept" className="hover:text-cafferra-cream transition-colors py-1 inline-block">
                  The Concept
                </a>
              </li>
              <li>
                <a href="#menu" className="hover:text-cafferra-cream transition-colors py-1 inline-block">
                  Menu Preview
                </a>
              </li>
              <li>
                <a href="#experience" className="hover:text-cafferra-cream transition-colors py-1 inline-block">
                  The Experience
                </a>
              </li>
              <li>
                <a href="#updates" className="hover:text-cafferra-cream transition-colors py-1 inline-block">
                  Opening Updates
                </a>
              </li>
            </ul>
          </div>

          <div className="md:col-span-3 space-y-4">
            <h4 className="font-display text-sm font-bold uppercase tracking-wider text-cafferra-gold">
              Legal &amp; Privacy
            </h4>
            <ul className="space-y-2.5 text-xs sm:text-sm text-cafferra-cream/80">
              <li>
                <button
                  type="button"
                  onClick={onOpenPrivacy}
                  className="hover:text-cafferra-cream transition-colors py-1 inline-flex items-center gap-1.5 text-left"
                >
                  <ShieldCheck className="w-3.5 h-3.5 text-cafferra-sage" />
                  <span>Privacy Policy</span>
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={onOpenTerms}
                  className="hover:text-cafferra-cream transition-colors py-1 inline-flex items-center gap-1.5 text-left"
                >
                  <FileText className="w-3.5 h-3.5 text-cafferra-sage" />
                  <span>Terms of Service</span>
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={onOpenCookies}
                  className="hover:text-cafferra-cream transition-colors py-1 inline-flex items-center gap-1.5 text-left"
                >
                  <Cookie className="w-3.5 h-3.5 text-cafferra-sage" />
                  <span>Cookie Preferences</span>
                </button>
              </li>
            </ul>

            <div className="pt-2 text-xs text-cafferra-cream/70 space-y-1">
              <p className="font-semibold text-cafferra-cream/90">cafferra.com</p>
              <p className="text-cafferra-sage-light tracking-widest uppercase font-bold text-[11px]">
                INDIAN ROOTS. GLOBAL FLAVOURS.®
              </p>
            </div>
          </div>
        </div>

        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-cafferra-cream/70">
          <p>
            © Cafferra®. All Rights Reserved. Indian Roots. Global Flavours is a proprietary trademark.
          </p>
          <div className="flex items-center gap-6">
            <button
              onClick={scrollToTop}
              className="inline-flex items-center gap-1.5 hover:text-cafferra-gold transition-colors font-semibold tracking-wide py-1"
              aria-label="Scroll back to top of page"
            >
              <span>Back to Top</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
