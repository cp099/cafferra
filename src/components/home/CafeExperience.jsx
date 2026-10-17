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
      {/* Compatibility anchor */}
      <span id="vibe" className="sr-only" />

      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16 space-y-4">
          <Badge variant="sage">The Experience</Badge>
          <h2 className="font-display text-3xl sm:text-5xl font-extrabold text-cafferra-forest tracking-tight uppercase leading-tight">
            Your Kind Of Coffee.<br /> Your Kind Of Food.<br /> Your Kind Of Place.
          </h2>
          <p className="text-base sm:text-lg text-cafferra-forest/80 font-normal leading-relaxed text-balance">
            CAFFERRA brings together the comforting familiarity of Indian culinary classics and the vibrant creativity of contemporary Western café culture in one welcoming space.
          </p>
        </div>

        {/* Asymmetrical Gallery & Pillars Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left: 4 Pillars List */}
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

          {/* Right: Photo Composition & Kannada Tribute Card */}
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

              {/* Kannada Cultural Tribute Card from Client Brief */}
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

            <div className="space-y-6 sm:pt-10">
              <div className="rounded-3xl overflow-hidden aspect-square shadow-cafferra-soft border border-cafferra-forest/10 bg-cafferra-forest/5">
                <img
                  src="https://images.unsplash.com/photo-1521017432531-fbd92d768814?auto=format&fit=crop&w=800&q=80"
                  alt="Outdoor cafe patio with people enjoying cold beverages, coffee, and comfort food"
                  className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                  loading="lazy"
                  decoding="async"
                  width="800"
                  height="800"
                />
              </div>
              <div className="rounded-3xl overflow-hidden aspect-[4/3] shadow-cafferra-soft border border-cafferra-forest/10 bg-cafferra-forest/5">
                <img
                  src="https://images.unsplash.com/photo-1541167760496-1628856ab772?auto=format&fit=crop&w=800&q=80"
                  alt="Barista pouring latte art cappuccino with precision"
                  className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                  loading="lazy"
                  decoding="async"
                  width="800"
                  height="600"
                />
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
