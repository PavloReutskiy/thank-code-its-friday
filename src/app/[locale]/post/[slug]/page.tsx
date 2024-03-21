import { Article } from '@/components/Articles/Article';
import { Metadata } from 'next';
import { GET_ARTICLE, GET_ARTICLE_METADATA } from '@/graphql/queries';
import getGraphQLClient from '@/utils/getGraphQLClient';
import ArticleHeader from '@/components/Articles/ArticleHeader/ArticleHeader';

const graphQLClient = getGraphQLClient();

type Props = {
  params: {
    slug: string;
    locale: string;
  };
};

// #region generateMetadata
export const generateMetadata = async({ params }: Props): Promise<Metadata> => {
  const { slug, locale } = params;

  try {
    const { articles } = await graphQLClient.request<ArticlesSEOResponse>(GET_ARTICLE_METADATA,
      { slug, locale });

    if (!articles || articles.data.length === 0) {
      throw new Error('Article not found');
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
    const message = (error instanceof Error) ? error.message : 'Unknown error';
    throw new Error(`Error during GraphQL request: ${message}`);
  }
};
// #endregion

const getArticle = async(locale: string, slug: string): Promise<ArticleData> => {
  const { articles } = await graphQLClient.request<ArticlesResponse>(GET_ARTICLE,
    { slug, locale });

  return articles;
};

const Post = async({ params }: Props): Promise<JSX.Element> => {
  const { slug, locale } = params;

  const articles = await getArticle(locale, slug);
  const article = articles.data[0].attributes;
  console.log('++article', article);

  return (
    <Article article={article} slug={slug}
      locale={locale}>
      <ArticleHeader locale={locale} article={article} />
    </Article>
  ) ;
};

export default Post;
