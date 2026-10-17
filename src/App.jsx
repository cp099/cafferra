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
  const [legalActiveTab, setLegalActiveTab] = useState('privacy');
  const [showCookieBanner, setShowCookieBanner] = useState(false);

  useEffect(() => {
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
    try {
      localStorage.removeItem('cafferra_cookie_consent');
    } catch {
      // ignore
    }
    setShowCookieBanner(true);
  };

  return (
    <div className="min-h-screen flex flex-col bg-cafferra-cream selection:bg-cafferra-gold selection:text-cafferra-forest-dark font-sans text-cafferra-forest relative overflow-x-hidden">
      <AmbientBackground />
      <Navbar />
      <main className="flex-1 relative z-10">
        <Hero />
        <WaitlistSection />
        <DualCraftStory />
        <CafeExperience />
      </main>
      <Footer 
        onOpenPrivacy={openPrivacyModal}
        onOpenTerms={openTermsModal}
        onOpenCookies={openCookiePreferences}
      />
      <CookieBanner onOpenPrivacy={openPrivacyModal} key={showCookieBanner ? 'manual' : 'auto'} />
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
