import { FC } from 'react';
import formatData from '@/utils/formatData';

type Props = {
  date: string;
  locale: string | string[];
  readTime: string;
};

export const ArticleDateAndReadTime: FC<Props> = ({ date, locale, readTime }): JSX.Element => {
  return (
    <div className='text-label_color font-sans uppercase text-sm lg:text-base xl:text-l leading-normal font-bold'>
      <span className=''>{formatData(date, locale)}</span>
      <span className='mx-2'>&middot;</span>
      <span>{readTime}</span>
    </div>
  );
};
