import { Home } from '@/components/Home';
import type { Metadata } from 'next';

// #region generateMetadata
type Props = {
  params: {
    locale: string;
  };
};

export const generateMetadata = async({ params }: Props): Promise<Metadata> => {
  const { locale } = params;

  return {
    title: 'Thank code it\'s friday | TCIF Blog',
    description: locale === 'en'
      ? 'Welcome to my personal blog dedicated to web development.' +
        'Join me as we explore the world of programming, experiment with new' +
        'technologies and approaches, and grow together as professional web developers.'
      : 'Ласкаво прошу до мого блогу, який присвячено веб-розробці.' +
        'Приєднуйтесь до мене, аби разом досліджувати світ програмування, експериментувати' +
        'з новими технологіями та підходами, та разом рости як професійні веб-розробники.',
    referrer: 'origin-when-cross-origin',
    authors: [{
      name: locale === 'en' ? 'Pavlo Reutskyi' : 'Павло Реуцький',
      url: 'https://thankcodeitsfriday.com/about' }],
    publisher: locale === 'en' ? 'Pavlo Reutskyi' : 'Павло Реуцький',
    metadataBase: new URL('https://thankcodeitsfriday.com/'),
    alternates: {
      canonical: 'https://thankcodeitsfriday.com/',
      languages: {
        'en-US': 'https://thankcodeitsfriday.com/en',
        'uk-UA': 'https://thankcodeitsfriday.com/uk',
      },
    },

    openGraph: {
      images: 'https://thank-code-its-friday-space.fra1.digitaloceanspaces.com/Blog%20main%203.webp',
      title: 'Thank code it\'s friday',
      description: locale === 'en'
        ? 'Welcome to my personal blog dedicated to web development.' +
          'Join me as we explore the world of programming, experiment with new' +
          'technologies and approaches, and grow together as professional web developers.'
        : 'Ласкаво прошу до мого блогу, який присвячено веб-розробці.' +
          'Приєднуйтесь до мене, аби разом досліджувати світ програмування, експериментувати' +
          'з новими технологіями та підходами, та разом рости як професійні веб-розробники.',
      type: 'article',
      siteName: 'Thank Code it\'s Friday Blog',
    },

    twitter: {
      card: 'summary_large_image',
      title: 'Thank code it\'s friday',
      description: locale === 'en'
        ? 'Welcome to my personal blog dedicated to web development.' +
          'Join me as we explore the world of programming, experiment with new' +
          'technologies and approaches, and grow together as professional web developers.'
        : 'Ласкаво прошу до мого блогу, який присвячено веб-розробці.' +
          'Приєднуйтесь до мене, аби разом досліджувати світ програмування, експериментувати' +
          'з новими технологіями та підходами, та разом рости як професійні веб-розробники.',
      images: ['https://thank-code-its-friday-space.fra1.digitaloceanspaces.com/Blog%20main%203.webp'],
    },
  };
};
// #endregion

const HomePage = (): JSX.Element => {
  return (
    <Home />
  );
};

export default HomePage;
