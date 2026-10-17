import React, { useState, useEffect } from 'react';
import { Cookie, Shield, X } from 'lucide-react';
import { getCookieConsent, setCookieConsent } from '../../services/analytics';

export default function CookieBanner({ onOpenPrivacy }) {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    // Check if consent has already been registered
    const consent = getCookieConsent();
    if (!consent) {
      // Delay slightly for smooth entrance after initial page load
      const timer = setTimeout(() => {
        setVisible(true);
      }, 1200);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleAcceptAll = () => {
    setCookieConsent('all');
    setVisible(false);
  };

  const handleEssentialOnly = () => {
    setCookieConsent('essential');
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <aside 
      aria-label="Cookie consent banner"
      className="fixed bottom-4 sm:bottom-6 left-4 right-4 sm:left-auto sm:right-6 sm:max-w-md z-40 bg-cafferra-cream/95 backdrop-blur-xl border border-cafferra-forest/15 rounded-3xl p-5 shadow-2xl animate-fade-in text-cafferra-forest"
    >
      <div className="flex items-start gap-3.5">
        <div className="w-9 h-9 rounded-2xl bg-cafferra-sage/15 flex items-center justify-center flex-shrink-0 text-cafferra-forest">
          <Shield className="w-5 h-5 text-cafferra-sage" />
        </div>
        <div className="flex-1 space-y-1.5">
          <p className="font-display text-xs font-bold uppercase tracking-wider text-cafferra-forest">
            Respecting Your Privacy
          </p>
          <p className="text-xs text-cafferra-taupe leading-relaxed">
            We use minimal cookies and local caching to deliver opening updates and ensure a serene browsing experience.
          </p>
        </div>
        <button
          type="button"
          onClick={handleEssentialOnly}
          className="text-cafferra-forest/40 hover:text-cafferra-forest transition-colors p-1"
          aria-label="Dismiss cookie banner"
        >
          <X className="w-4 h-4" />
        </button>
      </div>

      <div className="mt-4 pt-3 border-t border-cafferra-forest/10 flex flex-wrap items-center justify-between gap-2.5">
        <button
          type="button"
          onClick={onOpenPrivacy}
          className="text-[11px] font-semibold text-cafferra-forest/70 hover:text-cafferra-forest underline decoration-cafferra-sage underline-offset-2"
        >
          Privacy Policy
        </button>
        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={handleEssentialOnly}
            className="px-3.5 py-1.5 rounded-full text-xs font-semibold text-cafferra-forest/80 hover:text-cafferra-forest hover:bg-cafferra-forest/5 transition-colors"
          >
            Essential Only
          </button>
          <button
            type="button"
            onClick={handleAcceptAll}
            className="px-4 py-1.5 rounded-full bg-cafferra-forest text-cafferra-cream text-xs font-semibold uppercase tracking-wider hover:bg-cafferra-forest-dark transition-colors shadow-sm"
          >
            Accept All
          </button>
        </div>
      </div>
    </aside>
  );
}
