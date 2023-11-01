import './PostPreview.css';
import Link from 'next/link';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import formatData from '@/utils/formatData';
import closures from 'public/assets/main/closures.png';
import { FC } from 'react';
import clsx from 'clsx';

type Props = {
  className: string;
};

export const PostPreview: FC<Props> = ({ className }): JSX.Element => {
  const router = useRouter();
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
            src={closures}
            alt='Developer sitting in front of computer'
            className='object-cover object-center rounded-3xl'
          />
        </div>

        <div className='flex flex-col'>
          <div className='
            mb-2.5 lg:mb-5
            text-label_color font-sans uppercase text-sm lg:text-base xl:text-xl leading-normal font-bold
          '>
            <span className='mr-8'>{formatData('2023-08-12')}</span>
            <span>6 min read</span>
          </div>

          <h2 className='
            mb-2 lg:mb-4 xl:max-w-[600px]
            text-title_color font-sans text-2xl lg:text-3xl xl:text-4xl leading-[1.4] font-bold
          '>
            The Magic of Closures in JavaScript for Beginners
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
              programming
            </button>

            <button
              type="button"
              onClick={():void => router.push('/tags/beginners')}
              className='tag py-1 md:pr-1 md:pl-1'
            >
              <span className='text-green-500'>#</span>
              beginners
            </button>

            <button
              type="button"
              onClick={():void => router.push('/tags/javascript')}
              className='tag py-1 md:pr-1 md:pl-1'
            >
              <span className='text-indigo-700'>#</span>
              javascript
            </button>

            <button
              type="button"
              onClick={():void => router.push('/tags/webdev')}
              className='tag py-1 md:pr-1 md:pl-1'
            >
              <span className='text-amber-400'>#</span>
              webdev
            </button>
          </div>

          <p className='text-text_color font-sans text-base lg:text-xl xl:text-2xl leading-[1.4]'>
            Closures are a very important part of JavaScript that every developer should
            know well. But, this topic often becomes a real challenge for beginners and
            can be difficult to understand. In this article, I want to explain closures
            in JavaScript in a very simple way.
          </p>
        </div>
      </Link>
    </section>
  );
};
