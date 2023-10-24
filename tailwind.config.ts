import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    screens: {
      xsm: '321px',
      sm: '501px',
      md: '769px',
      lg: '951px',
      xl: '1201px',
      xxl: '1440px',
    },
    extend: {
      colors: {
        background: '#f5f5f5',
        accent_colour: '#D0E3F7',
        label_color: '#7F7F7F',
        title_color: '#333333',
        text_color: '#151515',
        border_color: '#94a3b8',
      },
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
