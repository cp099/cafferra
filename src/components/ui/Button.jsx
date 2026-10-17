import React from 'react';

export default function Button({
  children,
  variant = 'primary',
  size = 'md',
  onClick,
  type = 'button',
  disabled = false,
  className = '',
  icon: Icon,
}) {
  const baseStyles = 'inline-flex items-center justify-center font-medium tracking-wide transition-all duration-150 rounded-full select-none disabled:opacity-50 disabled:cursor-not-allowed tactile-btn';

  const sizes = {
    sm: 'px-4 py-2 text-xs',
    md: 'px-6 py-3 text-sm',
    lg: 'px-8 py-4 text-base font-semibold',
  };

  const variants = {
    primary: 'bg-cafferra-sage text-cafferra-cream hover:bg-cafferra-sage-light shadow-cafferra-soft',
    forest: 'bg-cafferra-forest text-cafferra-cream hover:bg-cafferra-forest-dark shadow-cafferra-soft',
    gold: 'bg-cafferra-gold text-cafferra-forest-dark hover:bg-cafferra-gold-dark font-semibold shadow-cafferra-soft',
    outline: 'border border-cafferra-forest/30 text-cafferra-forest hover:bg-cafferra-forest/5',
    ghost: 'text-cafferra-forest hover:bg-cafferra-forest/5',
  };

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`${baseStyles} ${sizes[size]} ${variants[variant]} ${className}`}
    >
      {Icon && <Icon className="w-4 h-4 mr-2" />}
      {children}
    </button>
  );
}
