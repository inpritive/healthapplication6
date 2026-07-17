/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        maatri: {
          50: '#f0fdf9',
          100: '#ccfbf1',
          200: '#99f6e4',
          300: '#5eead4',
          400: '#2dd4bf',
          500: '#14b8a6',
          600: '#0d9488',
          700: '#0f766e',
          800: '#115e59',
          900: '#134e4a',
          950: '#042f2e',
        },
        coral: {
          400: '#fb7185',
          500: '#f43f5e',
          600: '#e11d48',
        },
        gold: {
          400: '#fbbf24',
          500: '#f59e0b',
        },
        sage: {
          100: '#ecfdf5',
          200: '#d1fae5',
          500: '#10b981',
          600: '#059669',
        },
      },
      fontFamily: {
        sans: ['"Noto Sans"', '"Noto Sans Devanagari"', 'system-ui', 'sans-serif'],
        display: ['"Poppins"', '"Noto Sans Devanagari"', 'sans-serif'],
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'spin-slow': 'spin 20s linear infinite',
        'pulse-glow': 'pulse-glow 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        'pulse-glow': {
          '0%, 100%': { opacity: 1, transform: 'scale(1)' },
          '50%': { opacity: 0.8, transform: 'scale(1.05)' },
        },
      },
      boxShadow: {
        'maatri': '0 10px 40px -10px rgba(13, 148, 136, 0.3)',
        'card': '0 4px 20px rgba(0, 0, 0, 0.08)',
        'glow': '0 0 20px rgba(13, 148, 136, 0.5)',
        'coral': '0 10px 40px -10px rgba(244, 63, 94, 0.3)',
        'glass': '0 8px 32px 0 rgba(31, 38, 135, 0.07)',
        'inner-glow': 'inset 0 0 20px rgba(255, 255, 255, 0.5)',
      },
    },
  },
  plugins: [],
}
