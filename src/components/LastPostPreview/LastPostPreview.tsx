import Link from 'next/link';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import formatData from '@/utils/formatData';
import portal from 'public/assets/main/portal.png';

export const LastPostPreview = (): JSX.Element => {
  const router = useRouter();

  return (
    <Link
      href='/post/react-portals-vs-modal-windows-a-practical-guide'
      className='block max-w-[1224px] mx-auto cursor-default'
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
            src={portal}
            alt='Developer sitting at a computer in front of an open portal'
            className='object-cover object-center rounded-3xl'
          />
        </div>

        <div className='flex flex-col'>
          <div className='
            mb-2.5 md:mb-5
            text-label_color font-sans uppercase text-sm md:text-base xl:text-xl leading-normal font-bold
          '>
            <span className='mr-8'>{formatData('2023-11-18')}</span>
            <span>5 min read</span>
          </div>

          <h2 className='
            mb-2 xl:max-w-[30ch]
            text-title_color font-sans text-2xl md:text-3xl xl:text-4xl leading-[1.4] font-bold
          '>
            React Portals vs. Modal Windows: A Practical Guide
          </h2>

          <div className='
            flex justify-start gap-x-4 flex-wrap
            mb-2
            text-label_color font-sans text-sm md:text-base xl:text-xl font-normal
          '>
            <button
              type="button"
              onClick={():void => router.push('/tags/programming')}
              className='tag py-1 md:py-2 md:pr-1 md:pl-1'
            >
              <span className='text-rose-500'>#</span>
              javascript
            </button>

            <button
              type="button"
              onClick={():void => router.push('/tags/beginners')}
              className='tag py-1 md:py-2 md:pr-1 md:pl-1'
            >
              <span className='text-green-500'>#</span>
              beginners
            </button>

            <button
              type="button"
              onClick={():void => router.push('/tags/tutorial')}
              className='tag py-1 md:py-2 md:pr-1 md:pl-1'
            >
              <span className='text-yellow-300'>#</span>
              css
            </button>

            <button
              type="button"
              onClick={():void => router.push('/tags/react')}
              className='tag py-1 md:py-2 md:pr-1 md:pl-1'
            >
              <span className='text-slate-800'>#</span>
              react
            </button>
          </div>

          <p className='text-text_color font-sans text-base md:text-xl xl:text-2xl leading-[1.4]'>
            This article compares React Portals and modal windows in web interface development.
            We&apos;ll look at their differences and similarities, explore use cases, and
            help you make the right choice.
          </p>
        </div>
      </section>
    </Link>
  );
};
