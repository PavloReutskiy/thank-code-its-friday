import { FC } from 'react';
import { RecomendedArticles } from '../RecomendedArticles';
import { ContentNavigation } from '@/components/ArticlePage/ContentNavigation';
import { ArticleContent } from '@/components/ArticlePage/ArticleContent';

type Props = {
  article: Article;
  locale: string;
};

export const ArticleMain: FC<Props> = ({ article, locale }) => {
  const {
    content,
    previousArticle,
    nextArticle,
  } = article;

  return (
    <main className="scroll-animation article-main">
      <div className="max-w-[800px] order-2 xl:order-1">
        <ArticleContent content={content} />

        <RecomendedArticles
          previousArticle={previousArticle}
          nextArticle={nextArticle}
          locale={locale}
        />
      </div>

      <ContentNavigation article={article} />
    </main>
  );
};
