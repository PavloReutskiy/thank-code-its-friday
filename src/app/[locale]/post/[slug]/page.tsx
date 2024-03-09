import { Article } from '@/components/Articles/Article';
import { GraphQLClient, gql } from 'graphql-request';
import { Metadata } from 'next';

const graphqlAPI = process.env.NEXT_PUBLIC_GRAPHQL_ENDPOINT as string;
const graphQLClient = new GraphQLClient(graphqlAPI, {
  headers: {
    authorization: `Bearer ${process.env.NEXT_PUBLIC_STRAPI_API_TOKEN}`,
  },
});

const getArticleMetadata = gql`
  query GetArticle($locale: I18NLocaleCode!, $slug: String!) {
    articles(filters: { slug: { eq: $slug } }, locale: $locale) {
      data {
        id
        attributes {
          SEO {
            title
            description
            image {
              data {
                attributes {
                  url
                }
              }
            }
          }
        }
      }
    }
  }
`;

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
    const { articles } = await graphQLClient.request<ArticlesSEOResponse>(getArticleMetadata,
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
