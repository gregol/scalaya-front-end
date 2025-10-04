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
        // ZeoMart Design System Colors
        primary: {
          50: '#fefcf3',
          100: '#fef9e7',
          200: '#fdf2c4',
          300: '#fce89d',
          400: '#f8d96b',
          500: '#f5c34b', // Bg / 2 - Primary Yellow
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
          900: '#041e42', // Color/Text-Dark - Dark Navy
          950: '#030f21',
        },
        purple: {
          primary: '#443297', // Bg / Purple Primary
          50: '#f5f3fb',
          100: '#ebe6f7',
          200: '#d7ceef',
          300: '#b8a8e1',
          400: '#957cd0',
          500: '#7658be',
          600: '#6342a6',
          700: '#533589',
          800: '#443297', // Main Purple
          900: '#3a2a74',
          950: '#251b4f',
        },
        // Semantic Colors from Figma
        textDark: '#041E42',
        textLight: '#626974',
        background: {
          white: '#FFFFFF',
          purple: '#443297',
          yellow: '#F5C34B',
          dark: '#112137',
        },
        accent: {
          mint: '#86F1DF', // Limited Edition Tag
          gray: '#D6D6D6',
        },
      },
      fontFamily: {
        sans: ['var(--font-inter)', 'system-ui', 'sans-serif'],
        jost: ['var(--font-jost)', 'sans-serif'],
        poppins: ['var(--font-poppins)', 'sans-serif'],
      },
      fontSize: {
        // ZeoMart Typography Scale
        'xs': ['8px', { lineHeight: '1.21', fontWeight: '700' }], // UI Elements
        'sm': ['13px', { lineHeight: '1.69' }], // Tags
        'base': ['15px', { lineHeight: '1.47' }], // Body Text
        'md': ['16px', { lineHeight: '1.75' }], // Navigation
        'lg': ['18px', { lineHeight: '1.45' }], // Section Headers
        'xl': ['24px', { lineHeight: '1.5' }], // Logo
        '2xl': ['50px', { lineHeight: '1.45' }], // Hero Headlines
      },
      borderRadius: {
        'sm': '4px',
        DEFAULT: '6px',
        'md': '6px',
        'lg': '8px',
      },
      boxShadow: {
        'button': '0px 10px 35px 0px rgba(17, 33, 55, 0.1)',
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


