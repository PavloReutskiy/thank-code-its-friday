import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    screens: {
      sm: '320px',
      md: '768px',
      lg: '1440px',
    },
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      background: '#f5f5f5',
    },
    extend: {
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        mono: ['Roboto Mono', 'monospace'],
        condensed: ['Roboto Condensed', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
export default config;
