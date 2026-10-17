/**
 * Privacy-friendly analytics and event tracking service for Cafferra®
 * Honors user consent, Do Not Track (DNT), and data minimization principles.
 */

const STORAGE_CONSENT_KEY = 'cafferra_cookie_consent';

export function getCookieConsent() {
  try {
    return localStorage.getItem(STORAGE_CONSENT_KEY);
  } catch {
    return null;
  }
}

export function setCookieConsent(consentType) {
  try {
    localStorage.setItem(STORAGE_CONSENT_KEY, consentType);
    logEvent('consent_decision', { decision: consentType });
  } catch (err) {
    console.warn('Unable to persist cookie consent:', err);
  }
}

export function isAnalyticsAllowed() {
  if (typeof navigator !== 'undefined' && (navigator.doNotTrack === '1' || window.doNotTrack === '1')) {
    return false;
  }
  const consent = getCookieConsent();
  return consent === 'all';
}

/**
 * Log a structured user interaction event.
 * Dispatches to Google Analytics if available and consented, with silent debug telemetry.
 *
 * @param {string} eventName - e.g., 'notify_signup', 'cta_click', 'legal_view'
 * @param {object} params - additional contextual metadata
 */
export function logEvent(eventName, params = {}) {
  try {
    const payload = {
      event: eventName,
      timestamp: new Date().toISOString(),
      path: typeof window !== 'undefined' ? window.location.pathname : '/',
      ...params,
    };

    // 1. Log to console during local development or when consent is granted
    if (typeof import.meta !== 'undefined' && import.meta.env && import.meta.env.DEV) {
      console.log(`[Cafferra Analytics] ${eventName}:`, payload);
    }

    // 2. Dispatch to GA4 if loaded and consent granted
    if (typeof window !== 'undefined' && window.gtag && isAnalyticsAllowed()) {
      window.gtag('event', eventName, payload);
    }
  } catch (err) {
    // Analytics failures must never interrupt the user experience
  }
}
