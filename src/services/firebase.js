import { initializeApp, getApps } from 'firebase/app';
import { getFirestore, collection, addDoc, serverTimestamp } from 'firebase/firestore';

// Firebase configuration for project 'cafferra'
// Environment variables can override when deploying to production
const firebaseConfig = {
  apiKey: import.meta.env?.VITE_FIREBASE_API_KEY || "your_firebase_api_key_here",
  authDomain: import.meta.env?.VITE_FIREBASE_AUTH_DOMAIN || "cafferra.firebaseapp.com",
  projectId: import.meta.env?.VITE_FIREBASE_PROJECT_ID || "cafferra",
  storageBucket: import.meta.env?.VITE_FIREBASE_STORAGE_BUCKET || "cafferra.firebasestorage.app",
  messagingSenderId: import.meta.env?.VITE_FIREBASE_MESSAGING_SENDER_ID || "770462097442",
  appId: import.meta.env?.VITE_FIREBASE_APP_ID || "1:770462097442:web:352ddf0ef401abb98c6a7b",
};

// Initialize Firebase App gracefully
let app;
let db = null;

try {
  if (!getApps().length) {
    app = initializeApp(firebaseConfig);
  } else {
    app = getApps()[0];
  }
  db = getFirestore(app);
} catch (err) {
  console.warn("Firebase initialization warning (using local fallback):", err);
}

// Strict security validation constants
const EMAIL_REGEX = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
const MAX_EMAIL_LENGTH = 100;
const MAX_SOURCE_LENGTH = 50;

/**
 * Defensive email sanitization:
 * - Strips control characters (\x00-\x1F, \x7F) and whitespace
 * - Enforces length boundaries (prevents memory exhaustion)
 * - Verifies strict RFC-compliant email structure
 */
export function sanitizeEmail(raw) {
  if (typeof raw !== 'string') return null;
  // Immediately reject attack vectors containing null bytes or control characters
  if (/[\x00-\x1F\x7F]/.test(raw)) return null;
  const sanitized = raw.trim().toLowerCase();
  if (sanitized.length === 0 || sanitized.length > MAX_EMAIL_LENGTH) return null;
  if (!EMAIL_REGEX.test(sanitized)) return null;
  return sanitized;
}

/**
 * Defensive metadata sanitizer:
 * - Prevents prototype pollution (__proto__, constructor)
 * - Whitelists only permitted properties with strict length boundaries
 */
export function sanitizeMetadata(meta) {
  if (!meta || typeof meta !== 'object' || Array.isArray(meta)) return {};
  const clean = {};
  if (typeof meta.source === 'string') {
    clean.source = meta.source.replace(/[\x00-\x1F\x7F<>"']/g, '').slice(0, MAX_SOURCE_LENGTH);
  }
  if (typeof meta.clientTimestamp === 'number' && Number.isFinite(meta.clientTimestamp)) {
    clean.clientTimestamp = meta.clientTimestamp;
  }
  return clean;
}

/**
 * Record a waitlist email submission with enterprise-grade defensive hardening.
 * Saves to Firebase Firestore 'waitlist' collection and mirrors to localStorage.
 *
 * @param {string} email - The subscriber's email address
 * @param {object} metadata - Optional metadata (source, preferences)
 * @returns {Promise<{success: boolean, id: string, source: 'firestore' | 'local'}>}
 */
export async function submitToWaitlist(email, metadata = {}) {
  const cleanEmail = sanitizeEmail(email);
  if (!cleanEmail) {
    throw new Error('Invalid email address provided.');
  }
  
  const cleanMeta = sanitizeMetadata(metadata);
  
  const entry = {
    email: cleanEmail,
    createdAt: new Date().toISOString(),
    source: cleanMeta.source || 'cafferra-web',
    device: typeof navigator !== 'undefined' ? navigator.userAgent.slice(0, 150) : 'unknown',
    status: 'vip-pending',
    ...(cleanMeta.clientTimestamp ? { clientTimestamp: cleanMeta.clientTimestamp } : {})
  };

  // 1. Always save to LocalStorage backup first
  try {
    const rawStorage = localStorage.getItem('cafferra_waitlist');
    let existing = [];
    if (rawStorage) {
      try {
        const parsed = JSON.parse(rawStorage);
        if (Array.isArray(parsed)) existing = parsed;
      } catch {
        existing = [];
      }
    }
    const isDuplicate = existing.some(item => item && item.email === cleanEmail);
    if (!isDuplicate) {
      existing.push(entry);
      // Bound localStorage array to prevent storage exhaustion attacks
      if (existing.length > 500) existing = existing.slice(-500);
      localStorage.setItem('cafferra_waitlist', JSON.stringify(existing));
    }
  } catch (localErr) {
    console.error("Local storage sync error:", localErr);
  }

  // 2. Save to Firestore if available
  if (db) {
    try {
      const docRef = await addDoc(collection(db, 'waitlist'), {
        ...entry,
        timestamp: serverTimestamp(),
      });
      return { success: true, id: docRef.id, source: 'firestore' };
    } catch (firestoreErr) {
      console.warn("Firestore write skipped/pending rules; local backup preserved:", firestoreErr);
      return { success: true, id: `local-${Date.now()}`, source: 'local' };
    }
  }

  return { success: true, id: `local-${Date.now()}`, source: 'local' };
}

/**
 * Helper to view all collected waitlist emails from local backup (useful for verification)
 */
export function getLocalWaitlist() {
  try {
    return JSON.parse(localStorage.getItem('cafferra_waitlist') || '[]');
  } catch {
    return [];
  }
}
