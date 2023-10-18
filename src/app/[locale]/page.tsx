'use client';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import todo from 'public/assets/main/todo.png';
import closures from 'public/assets/main/closures.png';
import portal from 'public/assets/main/portal.png';
import formatData from '@/utils/formatData';
import './PostPreview.css';

const Home = (): JSX.Element => {
  const router = useRouter();
  return (
    <>
      <header className='mx-auto max-w-[85%] font-condensed'>
        <h1 className='
          flex flex-col justify-center items-center
          md:flex-row md:gap-6 lg:gap-4
          mt-4 sm:mt-6 xxl:mt-10 mb-4 sm:mb-7 md:mb-10
          font-bold uppercase text-black text-center leading-none
          drop-shadow-md
        '>
          <div className='
            ml-[-7px]
            text-[105px] sm:text-[160px] md:text-[125px] lg:text-[160px] xl:text-[200px] xxl:text-[245px]
            leading-[0.9] tracking-[-7px] lg:tracking-[-9px] xxl:tracking-[-12px]
          '>
            Blog
          </div>
          <div className='
            md:max-w-[300px] lg:max-w-[370px] xl:max-w-[470px] xxl:max-w-[545px]
            text-[21px] sm:text-[33px] md:text-[45px] lg:text-[55px] xl:text-[70px] xxl:text-[80px]
            md:leading-tight lg:leading-[1.2]
            md:text-left
          '>
            Thank&nbsp;code it’s&nbsp;friday
          </div>
        </h1>
      </header>

      <main className='mx-auto max-w-[85%] font-condensed'>
        <Link href='/post/react-portals-vs-modal-windows-a-practical-guide'>
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
                  programming
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
                  tutorial
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

        <div className='grid grid-cols-1 md:grid-cols-2 gap-8 md:mb-10 max-w-[1224px] mx-auto'>
          <section className='
            flex flex-col
            px-4 sm:px-5 py-5 sm:py-6 md:p-8
            border border-border_color rounded-3xl shadow
          '>
            <Link href='/post/the-magic-of-closures-in-javaScript-for-beginners'>
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

          <section className='
            flex flex-col
            px-4 sm:px-5 py-5 sm:py-6 md:p-8
            border border-slate-400 rounded-3xl shadow
          '>
            <Link href='/post/todo-app-why-is-it-a-good-choice-for-a-pet-project?'>
              <div className='
                max-w-[100%] max-h-[45vw] md:max-h-[25vw] xxl:max-h-[360px]
                overflow-hidden rounded-3xl flex justify-center items-center mb-4 lg:mb-8
              '>
                <Image
                  src={todo}
                  alt='Developer is surrounded by a lot of things in front of the laptop'
                  className='object-cover object-center rounded-3xl'
                />
              </div>

              <div className='flex flex-col'>
                <div className='
                  mb-2.5 lg:mb-5
                  text-label_color font-sans uppercase text-sm lg:text-base xl:text-xl leading-normal font-bold
                '>
                  <span className='mr-8'>{formatData('2023-07-10')}</span>
                  <span>3 min read</span>
                </div>

                <h2 className='
                  mb-2 lg:mb-4 xl:max-w-[600px]
                  text-title_color font-sans text-2xl lg:text-3xl xl:text-4xl leading-[1.4] font-bold
                '>
                  Todo App: Why is it a Good Choice for a Pet Project?
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
                  The Todo App has become a classic, often seen as a clichéd and overused
                  concept for initial projects. But, what if we reconsider and view it
                  from a fresh perspective?
                </p>
              </div>
            </Link>
          </section>
        </div>
      </main>
    </>
  );
};

export default Home;
