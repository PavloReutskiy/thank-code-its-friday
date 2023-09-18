import type { Config } from 'tailwindcss';

/*
до 320px: стандартные стили
от 321px до 767px: стили после sm:
от 768px до 1440px: стили после md:
от 1440px и выше: стили после lg:
*/

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
    extend: {},
  },
  plugins: [],
};
export default config;
