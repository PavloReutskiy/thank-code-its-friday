import { Home } from '@/components/Home';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Thank code it\'s friday | TCIF Blog',
  description: 'Welcome to my personal blog dedicated to web development.' +
  'Join me as we explore the world of programming, experiment with new' +
  'technologies and approaches, and grow together as professional web developers.',
  referrer: 'origin-when-cross-origin',
  authors: [{ name: 'Pavlo Reutskyi', url: 'https://thankcodeitsfriday.com/about' }],
  publisher: 'Pavlo Reutskyi',
  metadataBase: new URL('https://thankcodeitsfriday.com/'),
  alternates: {
    canonical: 'https://thankcodeitsfriday.com/',
    languages: {
      'en-US': 'https://thankcodeitsfriday.com/en',
      'uk-UA': 'https://thankcodeitsfriday.com/uk',
    },
  },

  openGraph: {
    images: 'https://thank-code-its-friday-space.fra1.digitaloceanspaces.com/1251976da642f1638a378f503e2fadf5.webp',
    title: 'Thank code it\'s friday',
    description: 'Welcome to my personal blog dedicated to web development.' +
    'Join me as we explore the world of programming, experiment with new' +
    'technologies and approaches, and grow together as professional web developers.',
    type: 'article',
    siteName: 'Thank Code it\'s Friday Blog',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Thank code it\'s friday',
    description: 'Welcome to my personal blog dedicated to web development.' +
    'Join me as we explore the world of programming, experiment with new' +
    'technologies and approaches, and grow together as professional web developers.',
    images: ['https://thank-code-its-friday-space.fra1.digitaloceanspaces.com/1251976da642f1638a378f503e2fadf5.webp'],
  },
};

const HomePage = (): JSX.Element => {
  return (
    <Home />
  );
};

export default HomePage;
