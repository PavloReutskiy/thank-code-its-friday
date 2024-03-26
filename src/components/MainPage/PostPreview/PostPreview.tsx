import './PostPreview.css';
import Link from 'next/link';
import Image from 'next/image';
import { FC } from 'react';
import { PostPreviewContent } from '@/components/MainPage/PostPreviewContent';

type Props = {
  preview: Preview;
  locale: string;
};

export const PostPreview: FC<Props> = ({ preview, locale }): JSX.Element => {
  const {
    date,
    readTime,
    title,
    tags,
    description,
    altText,
    slug,
    image,
  } = preview;

  const { url, width, height } = image.data.attributes;
  const imageUrl = process.env.NODE_ENV === 'production' ? url : process.env.NEXT_PUBLIC_BASE_URL + url;

  const tagList = tags.data.map(tag => ({
    name: tag.attributes.tagName,
    color: tag.attributes.color,
  }));

  return (
    <div data-preview className='post-wrapper'>
      <Link href={`/post/${slug}`} className='cursor-default'>
        <div className='post-image-wrapper'>
          <Image
            src={imageUrl}
            width={Number(width)}
            height={Number(height)}
            alt={altText}
            className='object-cover object-center rounded-3xl'
          />
        </div>

        <PostPreviewContent
          date={date}
          locale={locale}
          readTime={readTime}
          title={title}
          tagList={tagList}
          description={description}
        />
      </Link>
    </div>
  );
};
