/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        cosmic: {
          950: '#04080f',
          900: '#080e1c',
          800: '#0b1220',
          700: '#0f1a2e',
          600: '#162240',
          500: '#1e3055',
        },
        gold: '#fbbf24',
        astro: '#5ee7ff',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        display: ['Cinzel', 'serif'],
        decorative: ['Cinzel Decorative', 'serif'],
      },
      animation: {
        'spin-slow': 'spin-slow 120s linear infinite',
        'spin-reverse': 'spin-reverse 80s linear infinite',
        'float': 'float 6s ease-in-out infinite',
        'float-slow': 'float-slow 8s ease-in-out infinite',
        'twinkle': 'twinkle 4s ease-in-out infinite',
        'shimmer': 'shimmer 4s linear infinite',
        'pulse-ring': 'pulse-ring 3s ease-in-out infinite',
        'glow-pulse': 'glow-pulse 2.5s ease-in-out infinite',
        'beam-rotate': 'beam-rotate 20s linear infinite',
        'slide-up': 'slide-up 0.6s cubic-bezier(0.16,1,0.3,1) both',
      },
      keyframes: {
        'spin-slow': { '100%': { transform: 'rotate(360deg)' } },
        'spin-reverse': { '100%': { transform: 'rotate(-360deg)' } },
        'float': {
          '0%,100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-16px)' },
        },
        'float-slow': {
          '0%,100%': { transform: 'translateY(0px) rotate(0deg)' },
          '50%': { transform: 'translateY(-10px) rotate(2deg)' },
        },
        'twinkle': {
          '0%,100%': { opacity: '0.8', transform: 'scale(1)' },
          '50%': { opacity: '0.1', transform: 'scale(0.4)' },
        },
        'shimmer': {
          '0%': { backgroundPosition: '-300% center' },
          '100%': { backgroundPosition: '300% center' },
        },
        'pulse-ring': {
          '0%': { transform: 'translate(-50%,-50%) scale(0.95)', opacity: '0.6' },
          '50%': { transform: 'translate(-50%,-50%) scale(1.05)', opacity: '0.2' },
          '100%': { transform: 'translate(-50%,-50%) scale(0.95)', opacity: '0.6' },
        },
        'glow-pulse': {
          '0%,100%': { opacity: '0.4' },
          '50%': { opacity: '0.9' },
        },
        'beam-rotate': {
          '0%': { transform: 'translate(-50%,-50%) rotate(0deg)' },
          '100%': { transform: 'translate(-50%,-50%) rotate(360deg)' },
        },
        'slide-up': {
          from: { opacity: '0', transform: 'translateY(30px)' },
          to: { opacity: '1', transform: 'translateY(0)' },
        },
      },
      boxShadow: {
        'glow-cyan': '0 0 30px rgba(94,231,255,0.3)',
        'glow-cyan-lg': '0 0 60px rgba(94,231,255,0.4)',
        'glow-gold': '0 0 30px rgba(251,191,36,0.3)',
        'glow-purple': '0 0 30px rgba(167,139,250,0.3)',
        'card': '0 8px 32px rgba(0,0,0,0.5), inset 0 1px 0 rgba(255,255,255,0.04)',
        'card-hover': '0 16px 48px rgba(0,0,0,0.6), 0 0 0 1px rgba(94,231,255,0.1)',
      },
    },
  },
  plugins: [],
}
