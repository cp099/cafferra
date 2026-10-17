import React, { useEffect } from 'react';
import { X, ShieldCheck, FileText } from 'lucide-react';

export default function LegalModal({ isOpen, onClose, activeTab = 'privacy', onTabChange }) {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-cafferra-forest-deep/70 backdrop-blur-md animate-fade-in"
      role="dialog"
      aria-modal="true"
      aria-labelledby="legal-modal-title"
      onClick={onClose}
    >
      <div 
        className="relative w-full max-w-3xl max-h-[85vh] bg-cafferra-cream rounded-3xl border border-cafferra-forest/20 shadow-2xl flex flex-col overflow-hidden text-cafferra-forest"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center justify-between px-6 sm:px-8 py-5 border-b border-cafferra-forest/10 bg-cafferra-cream-warm">
          <div className="flex items-center gap-3">
            <button
              type="button"
              onClick={() => onTabChange && onTabChange('privacy')}
              className={`inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider transition-all ${
                activeTab === 'privacy'
                  ? 'bg-cafferra-forest text-cafferra-cream shadow-sm'
                  : 'text-cafferra-forest/70 hover:text-cafferra-forest'
              }`}
            >
              <ShieldCheck className="w-3.5 h-3.5" />
              <span>Privacy Policy</span>
            </button>
            <button
              type="button"
              onClick={() => onTabChange && onTabChange('terms')}
              className={`inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider transition-all ${
                activeTab === 'terms'
                  ? 'bg-cafferra-forest text-cafferra-cream shadow-sm'
                  : 'text-cafferra-forest/70 hover:text-cafferra-forest'
              }`}
            >
              <FileText className="w-3.5 h-3.5" />
              <span>Terms of Service</span>
            </button>
          </div>

          <button
            type="button"
            onClick={onClose}
            className="p-2 rounded-full text-cafferra-forest/70 hover:text-cafferra-forest hover:bg-cafferra-forest/10 transition-colors"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="overflow-y-auto px-6 sm:px-8 py-6 space-y-6 text-sm text-cafferra-taupe leading-relaxed">
          {activeTab === 'privacy' ? (
            <div className="space-y-6 text-left">
              <div>
                <h3 id="legal-modal-title" className="font-display text-xl sm:text-2xl font-bold uppercase text-cafferra-forest tracking-tight mb-2">
                  Privacy Policy
                </h3>
                <p className="text-xs text-cafferra-sage font-semibold uppercase tracking-wider">
                  Official Cafferra® Policy
                </p>
              </div>

              <section className="space-y-2">
                <h4 className="font-display text-sm font-bold uppercase tracking-wider text-cafferra-forest">
                  1. Overview &amp; Commitment
                </h4>
                <p>
                  At <strong>Cafferra®</strong> (operated in relation to <em>cafferra.com</em>), we take your personal privacy seriously. This Privacy Policy details how we handle the information you provide when you interact with our pre-launch brand showcase and sign up for opening notifications.
                </p>
              </section>

              <section className="space-y-2">
                <h4 className="font-display text-sm font-bold uppercase tracking-wider text-cafferra-forest">
                  2. Information We Collect
                </h4>
                <p>
                  We believe in extreme data minimization. The only personal data we proactively collect on this site is:
                </p>
                <ul className="list-disc pl-5 space-y-1">
                  <li><strong>Email Address:</strong> When voluntarily submitted to receive opening notifications, launch dates, and inaugural cafe updates.</li>
                  <li><strong>Technical Telemetry:</strong> Anonymized device type, browser metadata, and interaction timestamps to ensure security, prevent spam, and optimize mobile responsiveness.</li>
                </ul>
              </section>

              <section className="space-y-2">
                <h4 className="font-display text-sm font-bold uppercase tracking-wider text-cafferra-forest">
                  3. How We Use Your Information
                </h4>
                <p>
                  Your email is strictly utilized to:
                </p>
                <ul className="list-disc pl-5 space-y-1">
                  <li>Send launch dates and inaugural invitations for our upcoming flagship cafes.</li>
                  <li>Provide opening announcements and location updates.</li>
                  <li>Maintain anti-spam security and verify genuine subscriber interest.</li>
                </ul>
                <p className="font-medium text-cafferra-forest">
                  We will NEVER sell, lease, monetize, or distribute your email address to third-party advertisers.
                </p>
              </section>

              <section className="space-y-2">
                <h4 className="font-display text-sm font-bold uppercase tracking-wider text-cafferra-forest">
                  4. Data Storage &amp; Infrastructure
                </h4>
                <p>
                  Data submitted via our website is stored using secure cloud infrastructure via Google Cloud / Firebase Firestore. Communications occur over TLS 1.3 / HTTPS encryption.
                </p>
              </section>

              <section className="space-y-2">
                <h4 className="font-display text-sm font-bold uppercase tracking-wider text-cafferra-forest">
                  5. Your Rights (Access, Correction &amp; Deletion)
                </h4>
                <p>
                  Under international privacy standards (including GDPR and India's Digital Personal Data Protection Act), you hold full ownership of your data. You may request immediate removal from our opening list at any time by contacting our privacy team at <a href="mailto:privacy@cafferra.com" className="text-cafferra-forest underline font-semibold">privacy@cafferra.com</a>.
                </p>
              </section>

              <section className="space-y-2">
                <h4 className="font-display text-sm font-bold uppercase tracking-wider text-cafferra-forest">
                  6. Contact Us
                </h4>
                <p>
                  For inquiries regarding this privacy framework, write to <a href="mailto:privacy@cafferra.com" className="text-cafferra-forest underline font-semibold">privacy@cafferra.com</a>.
                </p>
              </section>
            </div>
          ) : (
            <div className="space-y-6 text-left">
              <div>
                <h3 id="legal-modal-title" className="font-display text-xl sm:text-2xl font-bold uppercase text-cafferra-forest tracking-tight mb-2">
                  Terms of Service
                </h3>
                <p className="text-xs text-cafferra-sage font-semibold uppercase tracking-wider">
                  Official Terms
                </p>
              </div>

              <section className="space-y-2">
                <h4 className="font-display text-sm font-bold uppercase tracking-wider text-cafferra-forest">
                  1. Acceptance of Terms
                </h4>
                <p>
                  By accessing or browsing <em>cafferra.com</em>, you agree to be bound by these Terms of Service and all applicable laws and regulations. If you do not agree with any of these terms, please discontinue use of this site.
                </p>
              </section>

              <section className="space-y-2">
                <h4 className="font-display text-sm font-bold uppercase tracking-wider text-cafferra-forest">
                  2. Brand Identity &amp; Intellectual Property
                </h4>
                <p>
                  All visual assets, logotypes, wordmarks, and design motifs—including the brand name <strong>Cafferra®</strong> and the proprietary tagline <strong>INDIAN ROOTS. GLOBAL FLAVOURS.®</strong>—are the exclusive intellectual property of Cafferra. Unauthorized duplication, imitation, commercial exploitation, or scraping is strictly prohibited.
                </p>
              </section>

              <section className="space-y-2">
                <h4 className="font-display text-sm font-bold uppercase tracking-wider text-cafferra-forest">
                  3. Nature of Website &amp; Coming Soon Disclaimer
                </h4>
                <p>
                  <em>cafferra.com</em> serves as an informational digital presence and announcement portal for CAFFERRA Indo-Western Café flagships. The website does not currently process commercial food transactions, table reservations, or deliveries. Descriptions of menu concepts (South Indian classics, specialty coffee, and global café bites) represent planned culinary offerings subject to continuous perfection.
                </p>
              </section>

              <section className="space-y-2">
                <h4 className="font-display text-sm font-bold uppercase tracking-wider text-cafferra-forest">
                  4. Opening Updates &amp; Communications
                </h4>
                <p>
                  Subscribing your email address represents a voluntary opt-in to receive updates regarding our launch timeline and store openings. We reserve the right to modify or discontinue email communications at our sole discretion.
                </p>
              </section>

              <section className="space-y-2">
                <h4 className="font-display text-sm font-bold uppercase tracking-wider text-cafferra-forest">
                  5. Limitation of Liability
                </h4>
                <p>
                  In no event shall Cafferra, its founders, or affiliates be liable for any direct or indirect damages arising out of the use or inability to use the materials on this digital showcase.
                </p>
              </section>

              <section className="space-y-2">
                <h4 className="font-display text-sm font-bold uppercase tracking-wider text-cafferra-forest">
                  6. Contact &amp; Legal Notices
                </h4>
                <p>
                  For formal inquiries or trademark licensing, contact <a href="mailto:legal@cafferra.com" className="text-cafferra-forest underline font-semibold">legal@cafferra.com</a>.
                </p>
              </section>
            </div>
          )}
        </div>

        <div className="px-6 sm:px-8 py-4 border-t border-cafferra-forest/10 bg-cafferra-cream-warm flex items-center justify-between">
          <p className="text-[11px] text-cafferra-taupe">
            © Cafferra®. All Rights Reserved. Indian Roots. Global Flavours is a proprietary trademark.
          </p>
          <button
            type="button"
            onClick={onClose}
            className="px-5 py-2 rounded-full bg-cafferra-forest text-cafferra-cream text-xs font-semibold uppercase tracking-wider hover:bg-cafferra-forest-dark transition-colors"
          >
            I Understand
          </button>
        </div>
      </div>
    </div>
  );
}
