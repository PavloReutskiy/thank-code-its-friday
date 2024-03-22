'use client';
import './Article.css';
import { FC, ReactNode } from 'react';
import useOnLoadPageAnimation from '@/hooks/useOnLoadPageAnimation';

type Props = {
  article: Article;
  children: ReactNode;
};

export const Article: FC<Props> = ({ article, children }): JSX.Element => {
  useOnLoadPageAnimation(article);

  return (
    <div>
      {children}
    </div>
  );
};
