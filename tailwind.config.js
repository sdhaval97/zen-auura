/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        cream: '#FAF7F2',
        obsidian: '#1A1025',
        amethyst: {
          DEFAULT: '#7B5EA7',
          light: '#9B7EC8',
          dark: '#5A3D8A',
        },
        gold: {
          DEFAULT: '#C9A84C',
          light: '#E2C97E',
          dark: '#A07830',
        },
        'rose-quartz': '#E8C4C4',
        sage: '#8A9E8A',
        mist: '#EEE8F4',
        'deep-mist': '#D8CCEE',
      },
      fontFamily: {
        cormorant: ['"Cormorant Garamond"', 'serif'],
        cinzel: ['Cinzel', 'serif'],
        inter: ['Inter', 'sans-serif'],
      },
      backgroundImage: {
        'spiritual-gradient': 'linear-gradient(135deg, #1A1025 0%, #2D1B4E 50%, #1A1025 100%)',
        'hero-gradient': 'linear-gradient(160deg, #0D0818 0%, #2D1B4E 40%, #1A1025 70%, #0D0818 100%)',
        'gold-shimmer': 'linear-gradient(90deg, transparent, rgba(201,168,76,0.3), transparent)',
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'float-delayed': 'float 8s ease-in-out infinite 2s',
        'shimmer': 'shimmer 3s ease-in-out infinite',
        'scroll-marquee': 'scrollMarquee 25s linear infinite',
        'fade-in-up': 'fadeInUp 0.7s ease-out forwards',
        'pulse-soft': 'pulseSoft 4s ease-in-out infinite',
        'spin-slow': 'spin 20s linear infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px) rotate(0deg)' },
          '33%': { transform: 'translateY(-15px) rotate(5deg)' },
          '66%': { transform: 'translateY(-8px) rotate(-3deg)' },
        },
        shimmer: {
          '0%, 100%': { opacity: '0.4' },
          '50%': { opacity: '1' },
        },
        scrollMarquee: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        fadeInUp: {
          from: { opacity: '0', transform: 'translateY(30px)' },
          to: { opacity: '1', transform: 'translateY(0)' },
        },
        pulseSoft: {
          '0%, 100%': { boxShadow: '0 0 20px rgba(123,94,167,0.3)' },
          '50%': { boxShadow: '0 0 50px rgba(123,94,167,0.7), 0 0 80px rgba(201,168,76,0.3)' },
        },
      },
      backdropBlur: {
        xs: '2px',
      },
    },
  },
  plugins: [],
}
