'use client';
import './LastPostPreview.css';
import Link from 'next/link';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import formatData from '@/utils/formatData';
import clsx from 'clsx';
import { FC } from 'react';

type Props = {
  className: string;
  preview: Preview;
};

export const LastPostPreview: FC<Props> = ({ className, preview }): JSX.Element => {
  const router = useRouter();
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
  const tagList = tags.data.map(tag => tag.attributes.tagName);
  const imageUrl = process.env.NEXT_PUBLIC_BASE_URL + url;

  return (
    <Link
      href='/post/react-portals-vs-modal-windows-a-practical-guide'
      className={clsx('block max-w-[1224px] mx-auto cursor-default', className)}
    >
      <section className='
        flex flex-col lg:flex-row lg:gap-8
        px-4 sm:px-5 py-5 sm:py-6 md:p-8 mb-8 md:mb-10
        border border-slate-400 rounded-3xl shadow
        max-w-[1224px] mx-auto
      '>
        <div className='
          max-w-[100%] max-h-[45vw]
          overflow-hidden rounded-3xl flex justify-center items-center mb-4 md:mb-8 lg:mb-0
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
            mb-2.5 md:mb-5
            text-label_color font-sans uppercase text-sm md:text-base xl:text-xl leading-normal font-bold
          '>
            <span className='mr-8'>{formatData(date)}</span>
            <span>{readTime}</span>
          </div>

          <h2 className='
            mb-2 lg:mb-4 xl:max-w-[30ch]
            text-title_color font-sans text-2xl md:text-3xl xl:text-4xl leading-[1.4] font-bold
          '>
            {title}
          </h2>

          <div className='
            flex justify-start gap-x-4 flex-wrap
            mb-2 lg:mb-4
            text-label_color font-sans text-sm lg:text-base xl:text-xl font-normal
          '>
            <button
              type="button"
              onClick={():void => router.push('/tags/programming')}
              className='tag py-1 md:pr-1 md:pl-1'
            >
              <span className='text-rose-500'>#</span>
              {tagList[0]}
            </button>

            <button
              type="button"
              onClick={():void => router.push('/tags/beginners')}
              className='tag py-1 md:pr-1 md:pl-1'
            >
              <span className='text-green-500'>#</span>
              {tagList[1]}
            </button>

            <button
              type="button"
              onClick={():void => router.push('/tags/tutorial')}
              className='tag py-1 md:pr-1 md:pl-1'
            >
              <span className='text-yellow-300'>#</span>
              {tagList[2]}
            </button>

            <button
              type="button"
              onClick={():void => router.push('/tags/react')}
              className='tag py-1 md:pr-1 md:pl-1'
            >
              <span className='text-slate-800'>#</span>
              {tagList[3]}
            </button>
          </div>

          <p className='text-text_color font-sans text-base md:text-xl xl:text-2xl leading-[1.4]'>
            {description}
          </p>
        </div>
      </section>
    </Link>
  );
};
