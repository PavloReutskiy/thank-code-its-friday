import './PostPreview.css';
import Link from 'next/link';
import Image from 'next/image';
import { FC } from 'react';
import clsx from 'clsx';
import { useParams } from 'next/navigation';
import { PostPreviewContent } from '../PostPreviewContent';

type Props = {
  className: string;
  preview: Preview;
};

export const PostPreview: FC<Props> = ({ className, preview }): JSX.Element => {
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
    <div className={clsx('post-wrapper', className)
    }>
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
