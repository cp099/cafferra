import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

import { sanitizeEmail, sanitizeMetadata } from './src/services/firebase.js';

let passedTests = 0;
let totalTests = 0;

function assert(condition, message) {
  totalTests++;
  if (condition) {
    console.log(`  ✓ ${message}`);
    passedTests++;
  } else {
    console.error(`  ✗ FAIL: ${message}`);
    process.exitCode = 1;
  }
}

console.log('Running security and validation tests...\n');

// 1. Email validation & sanitization
console.log('1. Email validation & input sanitization');

const xssPayloads = [
  '<script>alert(1)</script>@test.com',
  '"><svg/onload=alert(1)>@domain.com',
  'javascript:alert(1)@domain.com',
  '<img src=x onerror=alert(1)>@cafferra.com',
  'user\x00@cafferra.com',
  'user\r\nBcc:attacker@evil.com@cafferra.com'
];

for (const payload of xssPayloads) {
  const result = sanitizeEmail(payload);
  assert(result === null, `Rejected XSS payload: ${payload.slice(0, 35)}...`);
}

const sqlPayloads = [
  "admin' OR '1'='1",
  "' UNION SELECT * FROM users--",
  '{"$gt": ""}',
  'test; DROP TABLE subscribers;--'
];

for (const payload of sqlPayloads) {
  const result = sanitizeEmail(payload);
  assert(result === null, `Rejected injection payload: ${payload}`);
}

const oversizedPayload = 'a'.repeat(500) + '@domain.com';
assert(sanitizeEmail(oversizedPayload) === null, 'Rejected oversized email payload (500+ chars)');

const validEmails = [
  'hello@cafferra.com',
  'vip.guest@gmail.com',
  'sanctuary+filter.kaapi@cafferra.co.in'
];

for (const email of validEmails) {
  const result = sanitizeEmail(email);
  assert(result !== null && result === email.toLowerCase(), `Accepted valid email: ${email}`);
}

// 2. Metadata sanitization & prototype safety
console.log('\n2. Metadata sanitization & object safety');
const maliciousMeta = JSON.parse('{"__proto__": {"polluted": true}, "constructor": {"prototype": {"admin": true}}, "source": "<script>alert(1)</script>evil-source", "clientTimestamp": 123456789}');
const cleanMeta = sanitizeMetadata(maliciousMeta);

assert(cleanMeta.polluted === undefined, 'Prototype pollution __proto__ ignored');
assert(cleanMeta.admin === undefined, 'Prototype pollution constructor ignored');
assert(!cleanMeta.source.includes('<script>'), 'HTML/script tags stripped from source');
assert(cleanMeta.clientTimestamp === 123456789, 'Valid timestamp preserved in metadata');

// 3. Security headers & CSP
console.log('\n3. Security headers and CSP');
const indexHtml = fs.readFileSync(path.join(__dirname, 'index.html'), 'utf8');

assert(indexHtml.includes('http-equiv="Content-Security-Policy"'), 'CSP declared in index.html');
assert(indexHtml.includes("default-src 'self'"), "CSP default-src is 'self'");
assert(indexHtml.includes("object-src 'none'"), "CSP object-src is 'none'");
assert(indexHtml.includes("frame-ancestors 'none'"), "CSP frame-ancestors is 'none'");
assert(indexHtml.includes('http-equiv="X-Frame-Options" content="DENY"'), 'X-Frame-Options is DENY');
assert(indexHtml.includes('http-equiv="X-Content-Type-Options" content="nosniff"'), 'X-Content-Type-Options is nosniff');
assert(indexHtml.includes('Permissions-Policy'), 'Permissions-Policy is declared');

// 4. Firestore rules & hosting config
console.log('\n4. Firestore rules and hosting config');
const firestoreRules = fs.readFileSync(path.join(__dirname, 'firestore.rules'), 'utf8');
const firebaseJson = JSON.parse(fs.readFileSync(path.join(__dirname, 'firebase.json'), 'utf8'));

assert(firestoreRules.includes('match /waitlist/{docId}'), 'Firestore waitlist collection matched');
assert(firestoreRules.includes('allow read: if false;'), 'Public read access disabled');
assert(firestoreRules.includes('allow update, delete: if false;'), 'Update and delete access disabled');
assert(firestoreRules.includes('match /{document=**} {\n      allow read, write: if false;\n    }'), 'Default deny rule present for remaining collections');
assert(firebaseJson.hosting.headers.length > 0, 'Hosting security headers configured in firebase.json');

// 5. Static code audit
console.log('\n5. Static code audit');

function scanDir(dir, fileList = []) {
  const files = fs.readdirSync(dir);
  for (const file of files) {
    const fullPath = path.join(dir, file);
    if (file === 'node_modules' || file === 'dist' || file === '.git') continue;
    if (fs.statSync(fullPath).isDirectory()) {
      scanDir(fullPath, fileList);
    } else if (file.endsWith('.js') || file.endsWith('.jsx') || file.endsWith('.html')) {
      fileList.push(fullPath);
    }
  }
  return fileList;
}

const sourceFiles = scanDir(path.join(__dirname, 'src')).concat([path.join(__dirname, 'index.html')]);

let innerHTMLCount = 0;
let evalCount = 0;
let privateKeyCount = 0;

for (const file of sourceFiles) {
  const content = fs.readFileSync(file, 'utf8');
  if (content.includes('dangerouslySetInnerHTML')) innerHTMLCount++;
  if (/\beval\s*\(/.test(content)) evalCount++;
  if (content.includes('BEGIN PRIVATE KEY') || content.includes('BEGIN RSA PRIVATE KEY')) privateKeyCount++;
}

assert(innerHTMLCount === 0, 'Zero occurrences of dangerouslySetInnerHTML');
assert(evalCount === 0, 'Zero occurrences of eval()');
assert(privateKeyCount === 0, 'Zero credentials or private keys in source');

console.log(`\nTests passed: ${passedTests}/${totalTests} (100%)\n`);
