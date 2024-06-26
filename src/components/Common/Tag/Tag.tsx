'use client';
import './Tag.css';
import { FC } from 'react';
import { useRouter } from 'next/navigation';

type Props = {
  tagName: string;
  color: string;
};

export const Tag: FC<Props> = ({ tagName, color }): JSX.Element => {
  const router = useRouter();

  return (
    <button
      type="button"
      onClick={():void => router.push(`/tags/${tagName}`)}
      className='tag py-1 lg:pr-2 lg:pl-2'
    >
      <span style={{ color }}>#</span>
      {tagName}
    </button>
  );
};
