import { initializeApp, getApps } from 'firebase/app';
import { getFirestore, collection, addDoc, serverTimestamp } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: import.meta.env?.VITE_FIREBASE_API_KEY || "",
  authDomain: import.meta.env?.VITE_FIREBASE_AUTH_DOMAIN || "cafferra.firebaseapp.com",
  projectId: import.meta.env?.VITE_FIREBASE_PROJECT_ID || "cafferra",
  storageBucket: import.meta.env?.VITE_FIREBASE_STORAGE_BUCKET || "cafferra.firebasestorage.app",
  messagingSenderId: import.meta.env?.VITE_FIREBASE_MESSAGING_SENDER_ID || "770462097442",
  appId: import.meta.env?.VITE_FIREBASE_APP_ID || "1:770462097442:web:352ddf0ef401abb98c6a7b",
};

let app;
let db = null;

try {
  if (firebaseConfig.apiKey && !getApps().length) {
    app = initializeApp(firebaseConfig);
    db = getFirestore(app);
  } else if (getApps().length) {
    app = getApps()[0];
    db = getFirestore(app);
  }
} catch (err) {
  console.warn("Firebase initialization warning (using local fallback):", err);
}

const EMAIL_REGEX = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
const MAX_EMAIL_LENGTH = 100;
const MAX_SOURCE_LENGTH = 50;

/**
 * Validate and normalize email string.
 */
export function sanitizeEmail(raw) {
  if (typeof raw !== 'string') return null;
  if (/[\x00-\x1F\x7F]/.test(raw)) return null;
  const sanitized = raw.trim().toLowerCase();
  if (sanitized.length === 0 || sanitized.length > MAX_EMAIL_LENGTH) return null;
  if (!EMAIL_REGEX.test(sanitized)) return null;
  return sanitized;
}

/**
 * Normalize submission metadata.
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
 * Submit waitlist registration to Firestore with local storage backup.
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
      if (existing.length > 500) existing = existing.slice(-500);
      localStorage.setItem('cafferra_waitlist', JSON.stringify(existing));
    }
  } catch (localErr) {
    console.error("Local storage sync error:", localErr);
  }

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

export function getLocalWaitlist() {
  try {
    return JSON.parse(localStorage.getItem('cafferra_waitlist') || '[]');
  } catch {
    return [];
  }
}
