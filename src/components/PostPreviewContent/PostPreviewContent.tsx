import { FC } from 'react';
import './PostPreviewContent.css';
import formatData from '@/utils/formatData';
import { Tag } from '../Tag';

type Props = {
  date: string;
  locale: string | string[];
  readTime: string;
  title: string;
  tagList: {
    name: string;
    color: string;
  }[]
  description: string;
};

export const PostPreviewContent: FC<Props> = ({
  date,
  locale,
  readTime,
  title,
  tagList,
  description,
}): JSX.Element => {
  return (
    <div className='flex flex-col'>
      <div className='post-preview-label-wrapper'>
        <span className='mr-8'>{formatData(date, locale)}</span>
        <span>{readTime}</span>
      </div>

      <h2 className='post-preview-title'>
        {title}
      </h2>

      <div className='post-preview-tags-wrapper'>
        {tagList.map(tag => (
          <Tag
            key={tag.name}
            tagName={tag.name}
            color={tag.color}
          />
        ))}
      </div>

      <p className='post-preview-description'>
        {description}
      </p>
    </div>
  );
};
