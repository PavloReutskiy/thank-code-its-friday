import { Home } from '@/components/MainPage/Home';
import getGraphQLClient from '@/utils/getGraphQLClient';
import type { Metadata } from 'next';
import { GET_ARTICLE_PREVIEWS } from '@/graphql/queries';
import { HomeHeader } from '@/components/MainPage/HomeHeader';
import HomeMain from '@/components/MainPage/HomeMain/HomeMain';
import { PaginationComponent } from '@/components/MainPage/PaginationComponent';
import { BackToTopButton } from '@/components/Common/BackToTopButton';
import { HomeJsonLdComponent } from '@/components/MainPage/HomeJsonLdComponent';

const graphQLClient = getGraphQLClient();

type Props = {
  params: {
    locale: string;
  };
  searchParams: {
    [key: string]: string | string[] | undefined;
  }
};

// #region generateMetadata
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

const getArticlePreviews = async(
  locale: string, page: number, pageSize: number,
): Promise<PreviewsData> => {
  const { articlePreviews } = await graphQLClient.request<ArticlePreviewsResponse>(GET_ARTICLE_PREVIEWS,
    { locale, page, pageSize });

  return articlePreviews;
};

const HomePage = async({ searchParams, params }: Props): Promise<JSX.Element> => {
  const { locale: localeParam } = params;
  const currentPage = Number(searchParams.page ?? '1');
  const currentPageSize = 10;

  const articlePreviews = await getArticlePreviews(
    localeParam, currentPage, currentPageSize,
  );

  const previews = articlePreviews.data;
  const { page, pageCount } = articlePreviews.meta.pagination;

  return (
    <Home previews={previews} currentPage={currentPage} >
      <HomeHeader />
      <HomeMain
        previews={previews}
        page={page}
        locale={localeParam}
      />

      {pageCount > 1 && (
        <PaginationComponent
          count={pageCount}
          page={page}
        />
      )}

      <BackToTopButton />
      <HomeJsonLdComponent locale={localeParam} />
    </Home>
  );
};

export default HomePage;
