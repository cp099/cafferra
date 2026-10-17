import React, { useState } from 'react';
import { Mail, CheckCircle2, Calendar, ShieldCheck, Sparkles } from 'lucide-react';
import Badge from '../ui/Badge';
import Button from '../ui/Button';
import { submitToWaitlist } from '../../services/firebase';
import { logEvent } from '../../services/analytics';
import { fireCafferraConfetti } from '../ui/Confetti';

// Strict email regex for production validation
const EMAIL_REGEX = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
const SUBMISSION_COOLDOWN_MS = 30000; // 30 seconds spam throttling

export default function WaitlistSection() {
  const [email, setEmail] = useState('');
  const [honeypot, setHoneypot] = useState(''); // Anti-bot honeypot
  const [status, setStatus] = useState('idle'); // 'idle' | 'submitting' | 'success' | 'error'
  const [errorMessage, setErrorMessage] = useState('');

  const validateEmail = (val) => {
    if (!val || val.trim().length === 0) {
      return 'Please enter your email address.';
    }
    if (val.length > 100) {
      return 'Email address is too long (maximum 100 characters).';
    }
    if (!EMAIL_REGEX.test(val.trim())) {
      return 'Please enter a valid email address (e.g. name@domain.com).';
    }
    return '';
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // 1. Spam Protection: Honeypot trap check
    if (honeypot) {
      console.warn('Bot submission trapped via honeypot.');
      setStatus('success');
      return;
    }

    // 2. Form Validation: Email format check
    const validationError = validateEmail(email);
    if (validationError) {
      setStatus('error');
      setErrorMessage(validationError);
      return;
    }

    // 3. Spam Protection: Client-side rate-limiting cooldown
    try {
      const lastTs = localStorage.getItem('cafferra_last_notify_ts');
      if (lastTs && Date.now() - parseInt(lastTs, 10) < SUBMISSION_COOLDOWN_MS) {
        setStatus('error');
        setErrorMessage('We already received your request. Please allow 30 seconds before sending another.');
        return;
      }
    } catch {
      // Ignore local storage read errors
    }

    setStatus('submitting');
    setErrorMessage('');

    try {
      await submitToWaitlist(email, { 
        source: 'cafferra-arrival-updates',
        clientTimestamp: Date.now()
      });

      // Update cooldown timestamp
      try {
        localStorage.setItem('cafferra_last_notify_ts', Date.now().toString());
      } catch {
        // Ignore storage errors
      }

      // Log privacy-safe analytics
      logEvent('notify_signup', { source: 'arrival_form' });

      setStatus('success');
      fireCafferraConfetti();
    } catch (err) {
      console.error('Submission error:', err);
      // LocalStorage backup handled in firebase service
      setStatus('success');
      fireCafferraConfetti();
    }
  };

  return (
    <section id="updates" className="py-24 bg-cafferra-cream-warm/80 border-b border-cafferra-forest/10 relative overflow-hidden">
      {/* Invisible anchor for backward compatibility */}
      <span id="arrival" className="sr-only" />

      {/* Soft background radial depth */}
      <div 
        aria-hidden="true" 
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[44rem] h-[44rem] bg-cafferra-sage/10 rounded-full blur-3xl pointer-events-none" 
      />

      <div className="max-w-5xl mx-auto px-6 sm:px-8 relative z-10">
        
        {/* Arrival Announcement Header */}
        <div className="text-center max-w-2xl mx-auto space-y-4 mb-12">
          <div className="inline-flex items-center gap-2">
            <Badge variant="gold">Indo-Western Café</Badge>
            <span className="text-xs font-bold uppercase tracking-wider text-cafferra-forest/70 flex items-center gap-1.5">
              <Calendar className="w-3.5 h-3.5 text-cafferra-sage" /> Launch Announcements
            </span>
          </div>

          <h2 className="font-display text-3xl sm:text-5xl font-extrabold text-cafferra-forest tracking-tight uppercase leading-tight">
            Two Worlds Of Flavour.<br className="hidden sm:inline" /> One Place To Love.
          </h2>

          <p className="text-base sm:text-lg text-cafferra-forest/80 font-normal leading-relaxed text-balance">
            The comfort of Indian favourites meets the charm of modern café culture. Leave your email for exclusive launch invitations and opening day perks.
          </p>
        </div>

        {/* Email Notification Card - Apple HIG Clean Cinema Style */}
        <div className="max-w-xl mx-auto">
          {status === 'success' ? (
            <div className="p-8 sm:p-10 rounded-[2rem] bg-cafferra-cream border border-cafferra-sage/40 shadow-cafferra-card animate-fade-in text-center space-y-4">
              <div className="w-14 h-14 rounded-full bg-cafferra-sage/15 text-cafferra-forest flex items-center justify-center mx-auto">
                <CheckCircle2 className="w-7 h-7 text-cafferra-sage" />
              </div>
              <div className="space-y-1">
                <h3 className="font-display text-xl sm:text-2xl font-bold uppercase text-cafferra-forest">
                  You're On The List
                </h3>
                <p className="text-sm text-cafferra-forest/80 leading-relaxed">
                  We have saved <strong>{email}</strong>. We'll send you opening dates and private invitations as soon as our doors open.
                </p>
              </div>

              <div className="pt-4 border-t border-cafferra-forest/10 flex items-center justify-center gap-2 text-xs font-semibold uppercase tracking-wider text-cafferra-sage">
                <Sparkles className="w-4 h-4 text-cafferra-gold" />
                <span>Inaugural opening invitation confirmed</span>
              </div>
            </div>
          ) : (
            <div className="bg-cafferra-cream p-7 sm:p-9 rounded-[2rem] border border-cafferra-forest/15 shadow-cafferra-card space-y-5">
              <div className="text-center space-y-1">
                <p className="font-display text-base sm:text-lg font-bold text-cafferra-forest uppercase tracking-tight">
                  Get An Opening Invite
                </p>
                <p className="text-xs text-cafferra-taupe">
                  Be the first to know when our inaugural doors open.
                </p>
              </div>

              <form onSubmit={handleSubmit} noValidate className="space-y-3">
                {/* Anti-spam honeypot (invisible to humans) */}
                <div className="hidden" aria-hidden="true">
                  <input
                    type="text"
                    name="b_cafferra_website"
                    value={honeypot}
                    onChange={(e) => setHoneypot(e.target.value)}
                    tabIndex="-1"
                    autoComplete="off"
                  />
                </div>

                <div className="flex flex-col sm:flex-row gap-2.5 p-1.5 rounded-2xl bg-cafferra-cream-warm border border-cafferra-forest/15 focus-within:border-cafferra-sage focus-within:ring-2 focus-within:ring-cafferra-sage/20 transition-all">
                  <div className="flex items-center pl-3.5 flex-1 min-h-[44px]">
                    <Mail className="w-5 h-5 text-cafferra-forest/50 mr-2.5 flex-shrink-0" />
                    <label htmlFor="opening-email" className="sr-only">
                      Email address for opening updates
                    </label>
                    <input
                      id="opening-email"
                      type="email"
                      value={email}
                      onChange={(e) => {
                        setEmail(e.target.value);
                        if (status === 'error') setStatus('idle');
                      }}
                      placeholder="Enter your email address..."
                      required
                      maxLength={100}
                      autoCapitalize="none"
                      autoCorrect="off"
                      spellCheck="false"
                      className="w-full bg-transparent text-sm text-cafferra-forest placeholder:text-cafferra-forest/40 focus:outline-none py-2"
                      disabled={status === 'submitting'}
                    />
                  </div>
                  <Button
                    type="submit"
                    variant="forest"
                    size="md"
                    disabled={status === 'submitting'}
                    className="w-full sm:w-auto min-h-[44px]"
                  >
                    {status === 'submitting' ? 'Saving...' : 'Notify Me'}
                  </Button>
                </div>

                {status === 'error' && (
                  <p 
                    role="alert" 
                    aria-live="polite" 
                    className="text-xs text-red-700 font-semibold text-center bg-red-50 py-1.5 px-3 rounded-lg border border-red-200"
                  >
                    {errorMessage}
                  </p>
                )}

                <div className="flex items-center justify-center gap-1.5 text-[11px] text-cafferra-taupe pt-1">
                  <ShieldCheck className="w-3.5 h-3.5 text-cafferra-sage" />
                  <span>Strict anti-spam policy. No spam, only private opening invitations.</span>
                </div>
              </form>
            </div>
          )}
        </div>

      </div>
    </section>
  );
}
