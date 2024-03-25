'use client';
import './LastPostPreview.css';
import Link from 'next/link';
import Image from 'next/image';
import clsx from 'clsx';
import { FC } from 'react';
import { useParams } from 'next/navigation';
import { PostPreviewContent } from '@/components/MainPage/PostPreviewContent';

type Props = {
  className: string;
  preview: Preview;
};

export const LastPostPreview: FC<Props> = ({ className, preview }): JSX.Element => {
  const { locale } = useParams();

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
    <Link
      href={`/post/${slug}`}
      className={clsx('block max-w-[1224px] mx-auto cursor-default', className)}
    >
      <div data-preview className='last-post-wrapper'>
        <div className='last-post-image-wrapper'>
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
      </div>
    </Link>
  );
};
