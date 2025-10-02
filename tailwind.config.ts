import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/ui/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#fefcf3',
          100: '#fef9e7',
          200: '#fdf2c4',
          300: '#fce89d',
          400: '#f8d96b',
          500: '#f5c34b',
          600: '#eba92f',
          700: '#d18a1f',
          800: '#a96d1d',
          900: '#89591d',
          950: '#4d2f0c',
        },
        navy: {
          50: '#f0f5fa',
          100: '#e0ebf5',
          200: '#c1d7eb',
          300: '#92b8db',
          400: '#5c94c7',
          500: '#3775b0',
          600: '#275d94',
          700: '#204a78',
          800: '#1e4064',
          900: '#041e42',
          950: '#030f21',
        },
        purple: {
          primary: '#443297',
        },
      },
      fontFamily: {
        sans: ['var(--font-inter)', 'system-ui', 'sans-serif'],
        jost: ['var(--font-jost)', 'sans-serif'],
        poppins: ['var(--font-poppins)', 'sans-serif'],
      },
      animation: {
        'fade-in': 'fadeIn 0.2s ease-in',
        'slide-in': 'slideIn 0.3s ease-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideIn: {
          '0%': { transform: 'translateY(-10px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
      },
    },
  },
  plugins: [],
};

export default config;


