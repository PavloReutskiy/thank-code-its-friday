import { WebPageJsonLd } from 'next-seo';
import { FC } from 'react';

type Props = {
  locale: string;
};

export const HomeJsonLdComponent: FC<Props> = ({ locale }) => {
  return (
    <WebPageJsonLd
      useAppDir={true}
      description={
        locale === 'en'
          ? 'Welcome to my personal blog dedicated to web development.' +
            'Join me as we explore the world of programming, experiment with new' +
            'technologies and approaches, and grow together as professional web developers.'
          : 'Ласкаво прошу до мого блогу, який присвячено веб-розробці.' +
            'Приєднуйтесь до мене, аби разом досліджувати світ програмування, експериментувати' +
            'з новими технологіями та підходами, та разом рости як професійні веб-розробники.'
      }
      id='https://thankcodeitsfriday.com'
      lastReviewed='2023-07-10T08:00:00+08:00'
      reviewedBy={{
        type: 'Person',
        name: locale === 'en' ? 'Pavlo Reutskyi' : 'Павло Реуцький',
      }}
    />
  );
};
