import React, { useState, useEffect } from 'react';
import Navbar from './components/layout/Navbar';
import Hero from './components/home/Hero';
import WaitlistSection from './components/home/WaitlistSection';
import DualCraftStory from './components/home/DualCraftStory';
import CafeExperience from './components/home/CafeExperience';
import Footer from './components/layout/Footer';
import LegalModal from './components/legal/LegalModal';
import CookieBanner from './components/ui/CookieBanner';
import AmbientBackground from './components/ui/AmbientBackground';
import { logEvent } from './services/analytics';

export default function App() {
  const [legalModalOpen, setLegalModalOpen] = useState(false);
  const [legalActiveTab, setLegalActiveTab] = useState('privacy'); // 'privacy' | 'terms'
  const [showCookieBanner, setShowCookieBanner] = useState(false);

  useEffect(() => {
    // Log privacy-conscious initial page view
    logEvent('page_view', { title: 'CAFFERRA — Indian Roots. Global Flavours.' });
  }, []);

  const openPrivacyModal = () => {
    setLegalActiveTab('privacy');
    setLegalModalOpen(true);
    logEvent('legal_view', { tab: 'privacy' });
  };

  const openTermsModal = () => {
    setLegalActiveTab('terms');
    setLegalModalOpen(true);
    logEvent('legal_view', { tab: 'terms' });
  };

  const openCookiePreferences = () => {
    // Clear storage key temporarily to display banner on demand
    try {
      localStorage.removeItem('cafferra_cookie_consent');
    } catch {
      // Ignore
    }
    setShowCookieBanner(true);
  };

  return (
    <div className="min-h-screen flex flex-col bg-cafferra-cream selection:bg-cafferra-gold selection:text-cafferra-forest-dark font-sans text-cafferra-forest relative overflow-x-hidden">
      {/* Light & Relevant Animated Translucent SVG Background */}
      <AmbientBackground />

      <Navbar />
      <main className="flex-1 relative z-10">
        {/* 1. Hero: Brand & Primary Tagline ("Indian Roots. Global Flavours.") */}
        <Hero />

        {/* 2. Opening Announcements & Invitations */}
        <WaitlistSection />

        {/* 3. The Indo-Western Concept & Menu Preview */}
        <DualCraftStory />

        {/* 4. The Cafe Experience & Cultural Bridge */}
        <CafeExperience />
      </main>

      {/* Footer with accessible legal & preferences triggers */}
      <Footer 
        onOpenPrivacy={openPrivacyModal}
        onOpenTerms={openTermsModal}
        onOpenCookies={openCookiePreferences}
      />

      {/* Apple HIG-styled Floating Cookie Consent Banner */}
      <CookieBanner onOpenPrivacy={openPrivacyModal} key={showCookieBanner ? 'manual' : 'auto'} />

      {/* Privacy Policy & Terms Modal */}
      <LegalModal
        isOpen={legalModalOpen}
        onClose={() => setLegalModalOpen(false)}
        activeTab={legalActiveTab}
        onTabChange={(tab) => {
          setLegalActiveTab(tab);
          logEvent('legal_view', { tab });
        }}
      />
    </div>
  );
}
