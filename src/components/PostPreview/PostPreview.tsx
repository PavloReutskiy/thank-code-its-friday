import Link from 'next/link';
import Image from 'next/image';
import formatData from '@/utils/formatData';
import { FC } from 'react';
import clsx from 'clsx';
import { Tag } from '../Tag';
import { useParams } from 'next/navigation';

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
    image,
  } = preview;

  const { url, width, height } = image.data.attributes;
  const imageUrl = process.env.NEXT_PUBLIC_BASE_URL + url;

  const tagList = tags.data.map(tag => ({
    name: tag.attributes.tagName,
    color: tag.attributes.color,
  }));

  return (
    <section className={clsx(`
      flex flex-col px-4 sm:px-5 py-5 sm:py-6 md:p-8
      border border-border_color rounded-3xl shadow`, className)
    }>
      <Link href='/post/the-magic-of-closures-in-javaScript-for-beginners' className='cursor-default'>
        <div className='
          max-w-[100%] max-h-[45vw] md:max-h-[25vw] xxl:max-h-[360px]
          overflow-hidden rounded-3xl flex justify-center items-center mb-4 lg:mb-8
        '>
          <Image
            src={imageUrl}
            width={Number(width)}
            height={Number(height)}
            alt={altText}
            className='object-cover object-center rounded-3xl'
          />
        </div>

        <div className='flex flex-col'>
          <div className='
            mb-2.5 lg:mb-5
            text-label_color font-sans uppercase text-sm lg:text-base xl:text-xl leading-normal font-bold
          '>
            <span className='mr-8'>{formatData(date, locale)}</span>
            <span>{readTime}</span>
          </div>

          <h2 className='
            mb-2 lg:mb-4 xl:max-w-[600px]
            text-title_color font-sans text-2xl lg:text-3xl xl:text-4xl leading-[1.4] font-bold
          '>
            {title}
          </h2>

          <div className='
            flex justify-start gap-x-4 lg:gap-x-1 flex-wrap
            mb-2 lg:mb-4
            text-label_color font-sans text-sm lg:text-base xl:text-xl font-normal
          '>
            {tagList.map(tag => (
              <Tag
                key={tag.name}
                tagName={tag.name}
                color={tag.color}
              />
            ))}
          </div>

          <p className='text-text_color font-sans text-base lg:text-xl xl:text-2xl leading-[1.4]'>
            {description}
          </p>
        </div>
      </Link>
    </section>
  );
};
