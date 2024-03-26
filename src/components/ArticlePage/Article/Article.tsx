'use client';
import './Article.css';
import { FC, ReactNode } from 'react';
import { usePageLoadAnimation } from '@/hooks/usePageLoadAnimation';

type Props = {
  article: Article;
  children: ReactNode;
};

export const Article: FC<Props> = ({ children }): JSX.Element => {
  usePageLoadAnimation();

  return <div>{children}</div>;
};
