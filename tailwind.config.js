/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        // Brand blue sampled from the logo (royal -> azure). Used as accent.
        brand: {
          50: '#eef5ff',
          100: '#dbe9fe',
          200: '#bdd6fe',
          300: '#90b8fd',
          400: '#5e92fa',
          500: '#3b6df4', // primary
          600: '#2451e6',
          700: '#1d3fc4',
          800: '#1e389f',
          900: '#1e337e',
          950: '#16204d',
        },
        // Editorial neutrals — near-white grounds, deep navy ink for text.
        ink: {
          50: '#f6f8fb',
          100: '#eef1f6',
          200: '#dde3ec',
          300: '#c2cad8',
          400: '#8b95a7',
          500: '#5b6678',
          600: '#404a5c',
          700: '#2c3444',
          800: '#1a2030',
          900: '#0f1422', // primary text / footer ground
          950: '#080b14',
        },
      },
      fontFamily: {
        sans: ['Inter', 'Poppins', 'system-ui', 'sans-serif'],
        display: ['Sora', 'Inter', 'sans-serif'],
      },
      letterSpacing: {
        tighter: '-0.03em',
      },
      boxShadow: {
        soft: '0 1px 3px rgba(15,20,34,0.06), 0 10px 30px -12px rgba(15,20,34,0.12)',
        lift: '0 20px 50px -20px rgba(30,51,126,0.28)',
        ring: '0 0 0 1px rgba(15,20,34,0.06)',
      },
      borderRadius: {
        '4xl': '2rem',
      },
      keyframes: {
        float: { '0%,100%': { transform: 'translateY(0)' }, '50%': { transform: 'translateY(-12px)' } },
        marquee: { from: { transform: 'translateX(0)' }, to: { transform: 'translateX(-50%)' } },
        drift1: {
          '0%,100%': { transform: 'translate(0, 0) scale(1)' },
          '33%': { transform: 'translate(6%, -4%) scale(1.08)' },
          '66%': { transform: 'translate(-4%, 5%) scale(0.96)' },
        },
        drift2: {
          '0%,100%': { transform: 'translate(0, 0) scale(1)' },
          '50%': { transform: 'translate(-7%, -6%) scale(1.12)' },
        },
      },
      animation: {
        float: 'float 6s ease-in-out infinite',
        marquee: 'marquee 28s linear infinite',
        drift1: 'drift1 22s ease-in-out infinite',
        drift2: 'drift2 28s ease-in-out infinite',
      },
    },
  },
  plugins: [],
}
