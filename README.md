# CAFFERRA® | ಕೆಫೆರಾ
### System Operations & Live Health Status Dashboard
*Indian Roots. Global Flavours. — Indo-Western Café*

---

### 🌐 Live Infrastructure Status

| System | Indicator | Service / Provider | Target / Endpoint |
| :--- | :---: | :--- | :--- |
| **Production Web Gateway** | ![Production Status](https://img.shields.io/website?down_color=red&down_message=offline&label=Site&up_color=brightgreen&up_message=Operational&url=https%3A%2F%2Fcafferra.com) | GitHub Pages Anycast Edge CDN | [cafferra.com](https://cafferra.com) |
| **CI/CD Deployment** | [![Deploy Cafferra to GitHub Pages](https://github.com/cp099/cafferra/actions/workflows/deploy.yml/badge.svg)](https://github.com/cp099/cafferra/actions/workflows/deploy.yml) | GitHub Actions Runner (Node 20) | [Build & Deploy Job](https://github.com/cp099/cafferra/actions) |
| **SSL / TLS Certificate** | ![SSL Status](https://img.shields.io/badge/SSL-Active%20(TLS%201.3)-2ea44f?logo=letsencrypt) | Let's Encrypt Automated Authority | `https://cafferra.com` |
| **Security Audit** | ![Security Audit](https://img.shields.io/badge/Audit-33%2F33%20Passed-354C38?logo=shield) | Input Validation & CSP Tests | `npm run test:security` |
| **Database & Waitlist** | ![Firestore](https://img.shields.io/badge/Firestore-Operational-FFCA28?logo=firebase) | Google Cloud Firestore | Collection: `waitlist` (Locked Rules) |
| **Analytics & Telemetry** | ![Analytics](https://img.shields.io/badge/GA4-Active-E37400?logo=googleanalytics) | Google Analytics 4 | Measurement Protocol |

---

### 🔒 Security Scorecard

| Security Control | Policy Configuration | Status |
| :--- | :--- | :---: |
| **Content Security Policy (CSP)** | `default-src 'self'; script-src 'self' ...; frame-ancestors 'none'` | 🟢 Active |
| **Clickjacking Protection** | `X-Frame-Options: DENY` & `frame-ancestors 'none'` | 🟢 Enforced |
| **MIME Sniffing Prevention** | `X-Content-Type-Options: nosniff` | 🟢 Enforced |
| **Referrer Hardening** | `strict-origin-when-cross-origin` | 🟢 Enforced |
| **Browser Permissions Policy** | `camera=(), microphone=(), geolocation=(), payment=()` | 🟢 Locked |
| **Input Sanitization & Anti-XSS** | Strict regex validation & payload neutralization | 🟢 100% Passed |
| **Prototype Pollution Defenses** | Blocked `__proto__`, `constructor`, `prototype` mutation | 🟢 100% Passed |
| **Database Access Control** | Public reads/updates blocked; write-only validated ingestion | 🟢 Sealed |

---

### ⚡ Architecture & Deployment Specs

- **Production Domain**: [https://cafferra.com](https://cafferra.com) (Apex) / `https://www.cafferra.com` (Subdomain)
- **Edge Routing**: Anycast IPs `185.199.108.153` – `185.199.111.153`
- **Application Engine**: React 18 + Vite 5 + Tailwind CSS
- **SPA Fallback Handler**: Custom 404 Route Preservation (`public/404.html`)
- **Automated Build Runtime**: 29 seconds via GitHub Actions Single-Job Pipeline

---

> **System Health**: All services operational. Zero active incidents reported.
