import React from 'react';
import Badge from '../ui/Badge';

export default function CafeExperience() {
  const pillars = [
    {
      number: '01',
      title: 'For The Modern Café Explorer',
      description: 'Artisan cappuccinos, handcrafted pastas, toasted gourmet sandwiches, and a vibrant aesthetic space for work, coffee breaks, and catching up with friends.',
    },
    {
      number: '02',
      title: 'For Traditional Comfort Lovers',
      description: 'Authentic South Indian degree filter coffee in brass dabarahs, crispy dosas, and comforting classics served with warmth and heirloom perfection.',
    },
    {
      number: '03',
      title: 'Where Generations Meet',
      description: 'A welcoming space where college students, parents, and grandparents sit together—enjoying their personal favourites under one roof.',
    },
    {
      number: '04',
      title: 'Acoustic Warmth & Conversations',
      description: 'Comfortable seating, unhurried hospitality, and curated low-tempo soundscapes designed for effortless, memorable conversations.',
    },
  ];

  return (
    <section id="experience" className="py-24 bg-cafferra-cream border-t border-cafferra-forest/10 relative overflow-hidden">
      <span id="vibe" className="sr-only" />

      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        
        <div className="max-w-3xl mb-16 space-y-4">
          <Badge variant="sage">The Experience</Badge>
          <h2 className="font-display text-3xl sm:text-5xl font-extrabold text-cafferra-forest tracking-tight uppercase leading-tight">
            Your Kind Of Coffee.<br /> Your Kind Of Food.<br /> Your Kind Of Place.
          </h2>
          <p className="text-base sm:text-lg text-cafferra-forest/80 font-normal leading-relaxed text-balance">
            CAFFERRA brings together the comforting familiarity of Indian culinary classics and the vibrant creativity of contemporary Western café culture in one welcoming space.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          <div className="lg:col-span-5 space-y-6">
            {pillars.map((pillar) => (
              <div 
                key={pillar.number}
                className="flex items-start gap-5 p-5 rounded-2xl bg-cafferra-cream-warm/50 border border-cafferra-forest/10 hover:border-cafferra-sage/40 transition-colors shadow-sm"
              >
                <span className="font-display font-bold text-sm text-cafferra-sage pt-0.5">
                  {pillar.number}
                </span>
                <div className="space-y-1">
                  <h3 className="font-display text-base font-bold text-cafferra-forest uppercase tracking-tight">
                    {pillar.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-cafferra-forest/75 leading-relaxed">
                    {pillar.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-6 relative">
            <div className="space-y-6">
              <div className="rounded-3xl overflow-hidden aspect-[4/5] shadow-cafferra-soft border border-cafferra-forest/10 bg-cafferra-forest/5">
                <img
                  src="https://images.unsplash.com/photo-1554118811-1e0d58224f24?auto=format&fit=crop&w=800&q=80"
                  alt="Vibrant cafe interior with warm lighting, wood tables, and guests enjoying conversations"
                  className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                  loading="lazy"
                  decoding="async"
                  width="800"
                  height="1000"
                />
              </div>

              <div className="p-6 rounded-3xl bg-cafferra-forest text-cafferra-cream space-y-2.5 shadow-cafferra-soft">
                <div className="flex items-center justify-between">
                  <span className="text-[11px] font-bold uppercase tracking-widest text-cafferra-gold">
                    CAFFERRA | ಕೆಫೆರಾ
                  </span>
                  <span className="text-[10px] uppercase tracking-wider px-2 py-0.5 rounded-full bg-white/10 text-cafferra-gold-soft">
                    ಕರ್ನಾಟಕ
                  </span>
                </div>
                <h4 className="font-bold text-sm sm:text-base text-cafferra-cream leading-snug">
                  ಭಾರತೀಯ ಬೇರುಗಳು. ಜಾಗತಿಕ ರುಚಿಗಳು.
                </h4>
                <p className="text-xs text-cafferra-cream/80 leading-relaxed font-normal">
                  ಸಾಂಪ್ರದಾಯಿಕ ಫಿಲ್ಟರ್ ಕಾಫಿ ಮತ್ತು ರುಚಿಕರ ದೋಸೆಯಿಂದ ಹಿಡಿದು ಆಧುನಿಕ ಕ್ಯಾಪುಚಿನೋ, ಪಾಸ್ತಾ ಮತ್ತು ಸ್ಯಾಂಡ್ವಿಚ್ಗಳವರೆಗೆ—CAFFERRAದಲ್ಲಿ ಭಾರತೀಯ ರುಚಿ ಮತ್ತು ಪಾಶ್ಚಾತ್ಯ ಕೆಫೆ ಸಂಸ್ಕೃತಿಯ ಸುಂದರ ಸಂಗಮ. ಎಲ್ಲಾ ತಲೆಮಾರುಗಳಿಗೂ ಇಷ್ಟವಾಗುವ ರುಚಿ.
                </p>
              </div>
            </div>

            <div className="space-y-6 sm:pt-12">
              <div className="rounded-3xl overflow-hidden aspect-square shadow-cafferra-soft border border-cafferra-forest/10 bg-cafferra-forest/5">
                <img
                  src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=800&q=80"
                  alt="Warm cafe ambiance with seating, plants, and natural light"
                  className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                  loading="lazy"
                  decoding="async"
                  width="800"
                  height="800"
                />
              </div>

              <div className="p-6 rounded-3xl bg-cafferra-cream-warm border border-cafferra-forest/10 space-y-2">
                <span className="text-xs font-bold uppercase tracking-wider text-cafferra-sage">
                  Gatherings &amp; Community
                </span>
                <p className="text-sm font-semibold text-cafferra-forest leading-snug">
                  From morning filter kaapi rituals to evening pasta &amp; conversations.
                </p>
                <p className="text-xs text-cafferra-forest/75 leading-relaxed">
                  A place where traditional tastes and modern lifestyles thrive together effortlessly.
                </p>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
