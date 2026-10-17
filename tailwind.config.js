/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        cafferra: {
          forest: '#354C38',
          'forest-dark': '#243426',
          'forest-deep': '#1D2A1F',
          sage: '#6E8755',
          'sage-light': '#8BA76E',
          'sage-soft': '#E7EFE0',
          gold: '#EBC869',
          'gold-dark': '#8A6510',
          'gold-soft': '#FDF5DF',
          cream: '#FFFAEA',
          'cream-warm': '#F5EED7',
          'cream-card': '#FAF4E3',
          taupe: '#544E48',
          'taupe-light': '#7A726A',
        },
      },
      fontFamily: {
        display: ['"Akira Expanded"', 'sans-serif'],
        sans: ['"Manrope"', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        'cafferra-soft': '0 8px 30px rgba(53, 76, 56, 0.05)',
        'cafferra-card': '0 12px 36px rgba(53, 76, 56, 0.08)',
        'cafferra-hover': '0 20px 48px rgba(53, 76, 56, 0.12)',
        'cafferra-glow': '0 0 24px rgba(235, 200, 105, 0.25)',
      },
      borderRadius: {
        '2xl': '1.25rem',
        '3xl': '1.75rem',
        '4xl': '2.25rem',
      },
      animation: {
        'fade-in': 'fadeIn 0.7s ease-out forwards',
        'steam': 'steam 3s ease-in-out infinite',
        'float-slow': 'floatSlow 6s ease-in-out infinite',
        'spin-ultra-slow': 'spinSlow 90s linear infinite',
        'ambient-drift-1': 'ambientDrift1 24s ease-in-out infinite',
        'ambient-drift-2': 'ambientDrift2 28s ease-in-out infinite',
        'ambient-steam': 'ambientSteam 12s ease-in-out infinite',
        'ambient-float': 'ambientFloat 16s ease-in-out infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0', transform: 'translateY(12px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        steam: {
          '0%, 100%': { transform: 'translateY(0) scale(1)', opacity: '0.4' },
          '50%': { transform: 'translateY(-8px) scale(1.05)', opacity: '0.8' },
        },
        floatSlow: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-6px)' },
        },
        spinSlow: {
          'from': { transform: 'rotate(0deg)' },
          'to': { transform: 'rotate(360deg)' },
        },
        ambientDrift1: {
          '0%, 100%': { transform: 'translate3d(0, 0, 0)' },
          '50%': { transform: 'translate3d(-20px, 15px, 0)' },
        },
        ambientDrift2: {
          '0%, 100%': { transform: 'translate3d(0, 0, 0) scale(1)' },
          '50%': { transform: 'translate3d(18px, -18px, 0) scale(1.04)' },
        },
        ambientSteam: {
          '0%, 100%': { transform: 'translateY(0) scaleY(1)', opacity: '0.65' },
          '50%': { transform: 'translateY(-14px) scaleY(1.03)', opacity: '0.9' },
        },
        ambientFloat: {
          '0%, 100%': { transform: 'translate3d(0, 0, 0) rotate(0deg)' },
          '50%': { transform: 'translate3d(-8px, -12px, 0) rotate(-1.5deg)' },
        },
      },
    },
  },
  plugins: [],
};
