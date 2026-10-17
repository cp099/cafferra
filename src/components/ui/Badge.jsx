import React from 'react';

export default function Badge({ children, variant = 'sage', className = '' }) {
  const variants = {
    sage: 'bg-cafferra-sage/15 text-cafferra-forest border-cafferra-sage/30',
    forest: 'bg-cafferra-forest text-cafferra-cream border-transparent',
    gold: 'bg-cafferra-gold/25 text-cafferra-forest-dark border-cafferra-gold/40',
    cream: 'bg-cafferra-cream-warm text-cafferra-forest border-cafferra-forest/10',
    outline: 'bg-transparent text-cafferra-forest border-cafferra-forest/20',
  };

  return (
    <span
      className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold tracking-wide border uppercase ${variants[variant] || variants.sage} ${className}`}
    >
      {children}
    </span>
  );
}
