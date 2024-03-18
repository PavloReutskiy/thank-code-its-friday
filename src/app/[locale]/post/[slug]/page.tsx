import { Article } from '@/components/Articles/Article';
import { Metadata } from 'next';
import { GET_ARTICLE_METADATA } from '@/graphql/queries';
import getGraphQLClient from '@/utils/getGraphQLClient';

const graphQLClient = getGraphQLClient();

type Props = {
  params: {
    slug: string;
    locale: string;
  };
};

export const generateMetadata = async({
  params,
}: Props): Promise<Metadata> => {
  const { slug, locale } = params;

  try {
    const { articles } = await graphQLClient.request<ArticlesSEOResponse>(GET_ARTICLE_METADATA,
      { slug, locale });

    if (!articles || articles.data.length === 0) {
      return {
        title: 'Not Found',
        description: 'This page is not found',
      };
    }

    const { title, description } = articles.data[0].attributes.SEO;
    const { url } = articles.data[0].attributes.SEO.image.data.attributes;

    const imageUrl = process.env.NODE_ENV === 'production'
      ? url
      : `${process.env.NEXT_PUBLIC_BASE_URL}${url}`;

    return {
      title,
      description,
      referrer: 'origin-when-cross-origin',
      authors: [
        { name: 'Pavlo Reutskyi', url: 'https://thankcodeitsfriday.com/about' },
      ],
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
        images: imageUrl,
        title,
        description,
        type: 'article',
        url: `https://thankcodeitsfriday.com/${locale}/post/${slug}`,
        siteName: 'Thank Code it\'s Friday Blog',
        locale: locale === 'en' ? 'en_US' : 'uk-UA',
      },
      twitter: {
        card: 'summary_large_image',
        title,
        description,
        images: [imageUrl],
      },
    };
  } catch (error) {
    // eslint-disable-next-line no-console
    console.error('Error during GraphQL request:', error);

    return {
      title: 'Error',
      description: 'There was a problem loading the article data.',
    };
  }
};

const Post = (): JSX.Element => {
  return <Article />;
};

export default Post;
