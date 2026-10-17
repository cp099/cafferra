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
 * Log structured event to GA4 when consented.
 */
export function logEvent(eventName, params = {}) {
  try {
    const payload = {
      event: eventName,
      timestamp: new Date().toISOString(),
      path: typeof window !== 'undefined' ? window.location.pathname : '/',
      ...params,
    };

    if (typeof import.meta !== 'undefined' && import.meta.env && import.meta.env.DEV) {
      console.log(`[analytics] ${eventName}:`, payload);
    }

    if (typeof window !== 'undefined' && window.gtag && isAnalyticsAllowed()) {
      window.gtag('event', eventName, payload);
    }
  } catch {
    // ignore
  }
}
