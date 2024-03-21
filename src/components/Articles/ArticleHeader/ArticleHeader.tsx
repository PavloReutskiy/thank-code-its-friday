import React, { FC } from 'react';
import { ArticleDateAndReadTime } from '../ArticleDateAndReadTime';
import { ArticleMainImage } from '../ArticleMainImage';
import { ShareButtons } from '../ShareButtons';

type Props = {
  article: Article;
  locale: string;
};

const ArticleHeader: FC<Props> = ({ locale, article }) => {
  const { title, date, readTime, altText, image } = article;

  return (
    <header className="scroll-animation mx-auto max-w-[85%] xxl:max-w-[1224px] mb-8 lg:mb-11 xl:mb-14">
      <h1 className="heading-h1">{title}</h1>

      <div className="flex justify-between items-center max-w-[800px] mx-auto mb-4">
        <ArticleDateAndReadTime
          date={date}
          locale={locale}
          readTime={readTime}
        />

        <ShareButtons title={title} />
      </div>

      <ArticleMainImage
        altText={altText}
        image={image}
      />
    </header>
  );
};

export default ArticleHeader;
