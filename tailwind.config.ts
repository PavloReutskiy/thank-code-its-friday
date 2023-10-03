import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    screens: {
      sm: '321px',
      md: '769px',
      nav: '850px',
      lg: '1440px',
    },
    extend: {
      colors: {
        background: '#f5f5f5',
        nav_line: '#d2d2d2',
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        mono: ['Roboto Mono', 'monospace'],
        condensed: ['Roboto Condensed', 'sans-serif'],
      },
      spacing: {
        '10p': '10%',
        '5.6p': '5.6%',
        '7.5p': '7.5%',
      },
    },
  },
  plugins: [],
};
export default config;
