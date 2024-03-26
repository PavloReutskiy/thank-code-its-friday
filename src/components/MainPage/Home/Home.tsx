'use client';
import './Home.css';
import { FC, ReactNode } from 'react';
import useLocoScroll from '@/hooks/useLocoScroll';
import { usePageLoadAnimation } from '@/hooks/usePageLoadAnimation';
import useCustomCursorAnimation from '@/hooks/useCustomCursorAnimation';

type Props = {
  children: ReactNode;
  previews: PreviewWithID[];
  currentPage: number;
};

export const Home: FC<Props> = ({
  children,
  previews,
  currentPage,
}): JSX.Element => {
  useLocoScroll();

  usePageLoadAnimation(currentPage);
  useCustomCursorAnimation(previews);

  return (
    <>
      {children}

      <div className="cursor"></div>
    </>
  );
};
