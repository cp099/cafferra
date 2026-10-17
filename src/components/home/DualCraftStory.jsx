import React from 'react';
import { Coffee, Utensils, Sparkles, GlassWater } from 'lucide-react';
import Badge from '../ui/Badge';

export default function DualCraftStory() {
  const menuCategories = [
    {
      title: 'Indian Classics',
      kannada: 'ಭಾರತೀಯ ತಿನಿಸುಗಳು',
      description: 'Filter coffee, traditional tea, golden crispy dosa, idli, vada, pongal, and familiar comforts.',
      icon: Coffee,
      badge: 'Heritage Recipes',
      items: ['South Indian Filter Kaapi', 'Ghee Roast & Crispy Dosa', 'Steamed Idli & Medu Vada', 'Khara Pongal & Special Chutneys'],
      tagColor: 'bg-cafferra-gold-soft text-cafferra-forest-dark border-cafferra-gold/30',
    },
    {
      title: 'Coffeehouse Favourites',
      kannada: 'ಸ್ಪೆಷಾಲಿಟಿ ಕಾಫಿ',
      description: 'Masterfully pulled espresso, velvety cappuccino, silky latte, americano, and slow-steeped cold coffee.',
      icon: Sparkles,
      badge: 'Modern Barista Craft',
      items: ['Signature Cappuccino', 'Velvety Cafe Latte', 'Iced Spanish Latte', 'Single-Origin Americano'],
      tagColor: 'bg-cafferra-sage-soft text-cafferra-forest border-cafferra-sage/30',
    },
    {
      title: 'Global Café Bites',
      kannada: 'ಪಾಶ್ಚಾತ್ಯ ತಿನಿಸುಗಳು',
      description: 'Gourmet toasted sandwiches, tossed artisan pasta, café burgers, and contemporary Western-style comfort food.',
      icon: Utensils,
      badge: 'Contemporary Kitchen',
      items: ['Creamy Pesto & Arabbiata Pasta', 'Artisan Grilled Sourdough Panini', 'Crispy Gourmet Burgers', 'Garlic Herb Toast'],
      tagColor: 'bg-cafferra-cream-warm text-cafferra-forest border-cafferra-forest/15',
    },
    {
      title: 'Coolers & Refreshers',
      kannada: 'ತಂಪು ಪಾನೀಯಗಳು',
      description: 'Artisanal iced teas, botanical coolers, chilled beverages, and vibrant thirst-quenchers for every mood.',
      icon: GlassWater,
      badge: 'All-Day Sips',
      items: ['Hibiscus Berry Iced Tea', 'Mint Lime Cold Brew', 'Tropical Passion Cooler', 'Creamy Kaapi Frappé'],
      tagColor: 'bg-cafferra-cream text-cafferra-forest border-cafferra-forest/15',
    },
  ];

  return (
    <section id="concept" className="py-24 bg-cafferra-cream border-b border-cafferra-forest/10 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        
        <div className="max-w-3xl mb-16 space-y-4">
          <Badge variant="gold">Indo-Western Concept</Badge>
          <h2 className="font-display text-3xl sm:text-5xl font-extrabold text-cafferra-forest tracking-tight uppercase leading-tight">
            One Café.<br className="hidden sm:inline" /> Two Food Cultures.
          </h2>
          <p className="text-base sm:text-lg text-cafferra-forest/80 font-normal leading-relaxed text-balance">
            Welcome to CAFFERRA, where the comfort of Indian favourites meets the creativity of modern Western café culture. A space created so youngsters who love cappuccino and pasta, and traditional coffee lovers craving hot filter kaapi and crispy dosa, feel equally at home.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 lg:gap-14 mb-20">
          
          {/* Indian Roots */}
          <div className="bg-cafferra-cream-warm/50 rounded-3xl p-8 sm:p-10 border border-cafferra-forest/10 shadow-cafferra-soft flex flex-col justify-between group hover:border-cafferra-gold/50 transition-all duration-300">
            <div className="space-y-6">
              <div className="flex items-center justify-between">
                <span className="text-xs uppercase tracking-widest text-cafferra-gold-dark font-bold">Two Food Cultures · 01</span>
                <span className="text-xs font-semibold px-3 py-1 rounded-full bg-cafferra-gold/20 text-cafferra-forest">Indian Roots</span>
              </div>

              <div className="space-y-2">
                <h3 className="font-display text-2xl sm:text-3xl font-bold text-cafferra-forest uppercase tracking-tight">
                  Authentic South Indian Comforts
                </h3>
                <p className="text-xs font-medium text-cafferra-taupe">
                  ಕಾಫಿ ಮತ್ತು ಸಾಂಪ್ರದಾಯಿಕ ಉಪಹಾರ
                </p>
              </div>

              <p className="text-sm sm:text-base text-cafferra-forest/80 leading-relaxed">
                From the comforting aroma of freshly brewed South Indian filter kaapi in traditional dabarah sets to the irresistible crunch of golden dosas, soft steamed idlis, and crispy vadas. Authentic flavours crafted with heirloom recipes and warm hospitality.
              </p>

              <div className="flex flex-wrap gap-2 pt-2">
                {['Degree Filter Kaapi', 'Artisanal Crispy Dosa', 'Steamed Idli & Vada', 'Authentic Sambar & Chutneys'].map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1 rounded-full text-xs font-medium bg-cafferra-gold-soft text-cafferra-forest-dark border border-cafferra-gold/30"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            <div className="mt-8 rounded-2xl overflow-hidden aspect-[16/10] bg-cafferra-forest/5 relative">
              <img
                src="https://images.unsplash.com/photo-1668236543090-82eba5ee5976?auto=format&fit=crop&w=800&q=80"
                alt="Crispy golden South Indian dosa and traditional accompaniment"
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                loading="lazy"
                decoding="async"
                width="800"
                height="500"
              />
            </div>
          </div>

          {/* Global Flavours */}
          <div className="bg-cafferra-cream-warm/50 rounded-3xl p-8 sm:p-10 border border-cafferra-forest/10 shadow-cafferra-soft flex flex-col justify-between group hover:border-cafferra-sage/40 transition-all duration-300">
            <div className="space-y-6">
              <div className="flex items-center justify-between">
                <span className="text-xs uppercase tracking-widest text-cafferra-sage font-bold">Two Food Cultures · 02</span>
                <span className="text-xs font-semibold px-3 py-1 rounded-full bg-cafferra-sage/20 text-cafferra-forest">Global Flavours</span>
              </div>

              <div className="space-y-2">
                <h3 className="font-display text-2xl sm:text-3xl font-bold text-cafferra-forest uppercase tracking-tight">
                  Modern Western Café Cravings
                </h3>
                <p className="text-xs font-medium text-cafferra-taupe">
                  ಕ್ಯಾಪುಚಿನೋ, ಪಾಸ್ತಾ ಮತ್ತು ಸ್ಯಾಂಡ್ವಿಚ್
                </p>
              </div>

              <p className="text-sm sm:text-base text-cafferra-forest/80 leading-relaxed">
                Skillfully extracted espresso, creamy cappuccinos, iced refreshers, artisan pastas, and gourmet grilled sourdough sandwiches. Created for quick morning coffee breaks, afternoon work sessions, and lively evenings with friends.
              </p>

              <div className="flex flex-wrap gap-2 pt-2">
                {['Velvety Cappuccino', 'Al Dente Pasta', 'Toasted Gourmet Panini', 'Artisanal Cold Brew'].map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1 rounded-full text-xs font-medium bg-cafferra-cream text-cafferra-forest/85 border border-cafferra-forest/10"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            <div className="mt-8 rounded-2xl overflow-hidden aspect-[16/10] bg-cafferra-forest/5 relative">
              <img
                src="https://images.unsplash.com/photo-1554118811-1e0d58224f24?auto=format&fit=crop&w=800&q=80"
                alt="Contemporary cafe table featuring specialty cappuccino and gourmet pasta"
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                loading="lazy"
                decoding="async"
                width="800"
                height="500"
              />
            </div>
          </div>

        </div>

        <div id="menu" className="pt-4 mb-20 scroll-mt-24">
          <div className="text-center max-w-2xl mx-auto mb-12 space-y-3">
            <span className="text-xs font-bold tracking-widest uppercase text-cafferra-gold-dark">
              From Filter Coffee To Cappuccino
            </span>
            <h3 className="font-display text-2xl sm:text-4xl font-extrabold text-cafferra-forest uppercase tracking-tight">
              A Menu For Every Generation
            </h3>
            <p className="text-sm sm:text-base text-cafferra-forest/80">
              Four thoughtfully curated categories bringing together familiar comfort and contemporary discovery.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {menuCategories.map((cat) => {
              const IconComponent = cat.icon;
              return (
                <div
                  key={cat.title}
                  className="p-6 rounded-2xl bg-cafferra-cream-warm/60 border border-cafferra-forest/10 hover:border-cafferra-sage/40 shadow-sm flex flex-col justify-between transition-all duration-300"
                >
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <div className="w-10 h-10 rounded-xl bg-cafferra-sage/15 flex items-center justify-center text-cafferra-forest">
                        <IconComponent className="w-5 h-5" />
                      </div>
                      <span className="text-[10px] font-bold uppercase tracking-wider px-2.5 py-0.5 rounded-full bg-cafferra-cream border border-cafferra-forest/10 text-cafferra-forest">
                        {cat.badge}
                      </span>
                    </div>

                    <div>
                      <h4 className="font-display text-lg font-bold text-cafferra-forest uppercase tracking-tight">
                        {cat.title}
                      </h4>
                      <p className="text-[11px] font-medium text-cafferra-taupe">
                        {cat.kannada}
                      </p>
                    </div>

                    <p className="text-xs text-cafferra-forest/80 leading-relaxed">
                      {cat.description}
                    </p>

                    <div className="space-y-1.5 pt-2 border-t border-cafferra-forest/10">
                      {cat.items.map((item) => (
                        <div key={item} className="flex items-center gap-2 text-xs text-cafferra-forest/85">
                          <span className="w-1.5 h-1.5 rounded-full bg-cafferra-sage" />
                          <span>{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        <div className="mt-12 p-8 sm:p-12 rounded-3xl bg-cafferra-forest text-cafferra-cream relative overflow-hidden shadow-cafferra-card">
          <div className="relative z-10 max-w-2xl space-y-3">
            <p className="text-xs font-bold tracking-widest uppercase text-cafferra-gold">
              One Café · Every Generation
            </p>
            <h4 className="font-display text-2xl sm:text-3xl font-bold uppercase tracking-tight text-cafferra-cream">
              Two Food Cultures. One Welcoming Space.
            </h4>
            <p className="text-sm sm:text-base text-cafferra-cream/80 leading-relaxed">
              Whether you are catching up with friends over cappuccino and pasta, taking a quick coffee break, enjoying a family outing with hot filter coffee and crispy dosa, or simply craving comfort food—CAFFERRA brings traditions and new tastes together where good conversations come naturally.
            </p>
            <div className="pt-2 text-xs font-semibold uppercase tracking-wider text-cafferra-gold/90">
              CAFFERRA. Your kind of coffee. Your kind of food. Your kind of place.
            </div>
          </div>
          
          <div 
            aria-hidden="true" 
            className="absolute -right-8 -bottom-10 opacity-15 pointer-events-none w-64 h-64"
          >
            <img 
              src="/brand/logo-icon-cream.png" 
              alt="" 
              className="w-full h-full object-contain" 
              loading="lazy"
              decoding="async"
            />
          </div>
        </div>

      </div>
    </section>
  );
}
