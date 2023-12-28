import { Inter, Roboto_Mono, Roboto_Condensed } from 'next/font/google';

export const inter = Inter({
  weight: ['400', '600', '700'],
  subsets: ['latin', 'cyrillic'],
  display: 'swap',
});

export const robotoMono = Roboto_Mono({
  weight: '400',
  subsets: ['latin', 'cyrillic'],
  display: 'swap',
});

export const robotoCondensed = Roboto_Condensed({
  weight: '700',
  subsets: ['latin', 'cyrillic'],
  display: 'swap',
});
