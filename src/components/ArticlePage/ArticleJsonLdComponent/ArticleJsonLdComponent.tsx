import { ArticleJsonLd } from 'next-seo';
import { FC } from 'react';

type Props = {
  article: Article;
  locale: string;
};

export const ArticleJsonLdComponent: FC<Props> = ({ article, locale }) => {
  const {
    title,
    image,
    date,
    slug,
    SEO,
  } = article;

  return (
    <ArticleJsonLd
      useAppDir={true}
      type="BlogPosting"
      url={`https://thankcodeitsfriday.com/${locale}/post/${slug}`}
      title={title}
      images={[image.data.attributes.url]}
      datePublished={date}
      dateModified={date}
      authorName={[
        {
          name: locale === 'en' ? 'Pavlo Reutskyi' : 'Павло Реуцький',
          url: 'https://thankcodeitsfriday.com/about',
        },
      ]}
      description={SEO.description}
    />
  );
};
