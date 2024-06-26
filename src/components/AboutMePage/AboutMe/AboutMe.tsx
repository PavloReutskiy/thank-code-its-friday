'use client';
import './AboutMe.css';
import Image from 'next/image';
import stack from './stack.json';
import useLocoScroll from '@/hooks/useLocoScroll';
import { BackToTopButton } from '@/components/Common/BackToTopButton';
import { usePageLoadAnimation } from '@/hooks/usePageLoadAnimation';
import { orbitron } from '@/app/[locale]/fonts';
import { useState, useEffect, useMemo } from 'react';
import books from './books.json';
import { BookCard } from '../BookCard/BookCard';
import clsx from 'clsx';

export const AboutMe = (): JSX.Element => {
  const [time, setTime] = useState(new Date().toLocaleTimeString());
  const [isLoaded, setIsLoaded] = useState(false);
  const [activeBookId, setActiveBookId] = useState('01');

  const activeBook = useMemo(() => (
    books.find(item => item.id === activeBookId)
  ), [activeBookId]);

  useLocoScroll();
  usePageLoadAnimation();

  useEffect(() => {
    setIsLoaded(true);
    const timerId = setInterval(() => {
      setTime(new Date().toLocaleTimeString());
    }, 1000);

    return () => clearInterval(timerId);
  }, []);

  return (
    <>
      <main className="loading-animation mx-auto max-w-[85%] xxl:max-w-[1224px] mt-[89px] sm:mt-[113px] xxl:mt-[129px]">
        <section className="mx-auto max-w-[800px] mb-10 md:mb-12 lg:mb-14">
          <h1 className="mb-4 md:mb-6 text-3xl md:text-4xl xl:text-5xl font-semibold text-black">
            About me
          </h1>

          <p className="text-block font-semibold">
            Hi!👋 My name is Pavlo, and I&apos;m delighted to welcome you to my
            blog!
          </p>

          <p className="text-block">
            I work as a Full Stack developer, and my greatest passion in work is
            finding optimal solutions for unconventional tasks. I enjoy deeply
            understanding the essence of things and tools I work with daily. The
            process of exploring how everything works and what motivated
            developers to create a particular tool fascinates me immensely.
          </p>

          <div className="image-wrapper rounded-3xl">
            <Image
              src="/assets/about/about-me.webp"
              alt="A cozy programmer's workspace with dual monitors displaying code, situated
                in a room with wooden shelves full of books and comfortable warm lighting."
              width={400}
              height={400}
              className="rounded-3xl w-full h-auto object-cover object-[50%_75%] max-h-[450px] mt-4 mb-4"
            />
          </div>

          <p className="text-block">
            This blog aims to explore various aspects of programming and the
            latest developments in the IT tools world, presenting this
            information to readers in the simplest and most understandable form.
          </p>

          <p className="text-block">
            While primarily aimed at beginner programmers, I hope that
            experienced professionals will also find something new and useful
            here.
          </p>

          <p className="text-block">
            I&apos;m always open to making new acquaintances, so I&apos;d be
            happy to chat or answer your questions on social media.
          </p>

          <p className="text-block">
            Good luck, and may every line of code lead you to new successes!
          </p>
        </section>

        <section className="mb-10 md:mb-12 lg:mb-14">
          <h2 className="mb-10 md:mb-12 text-2xl md:text-3xl xl:text-4xl font-semibold text-black text-center">
            Technologies I Work With
          </h2>

          <div
            className="stack-wrapper grid grid-cols-4 md:grid-cols-6 gap-x-5 gap-y-8
            justify-center justify-items-center"
          >
            {stack.map(technology => (
              <div
                key={technology.title}
                className="h-full w-auto flex flex-col justify-center items-center gap-3 group"
              >
                <Image
                  src={`/assets/about/${technology.path}`}
                  alt={technology.altText}
                  width={40}
                  height={40}
                  className="w-auto h-12 md:h-14 scale-1 lg:group-hover:scale-90 lg:transition lg:duration-300
                    lg:ease-in-out will-change-transform"
                />
                <span
                  className="
                  text-xs text-gray-500 opacity-0 translate-y-2
                  lg:group-hover:opacity-100 lg:group-hover:translate-y-0
                  lg:transition lg:duration-300 lg:ease-in-out will-change-transform"
                >
                  {technology.title}
                </span>
              </div>
            ))}
          </div>
        </section>

        <section className="mb-10 md:mb-12 lg:mb-14">
          <h2 className="mb-10 md:mb-12 text-2xl md:text-3xl xl:text-4xl font-semibold text-black text-center">
            My bookshelf
          </h2>

          <div className="books">
            <div
              onClick={() => setActiveBookId('01')}
              className={clsx('book', { active: activeBookId === '01' })}
            >
              <span className='book-title'>JavaScript: <br /> The Definitive Guide</span>
              <span className='author'>David Flanagan</span>
            </div>

            <div
              onClick={() => setActiveBookId('02')}
              className={clsx('book book-brown', { active: activeBookId === '02' })}
            >
              <span className='book-title'>
                Clean Code <br />
                <span className="book-subtitle">A Handbook of Agile Software Craftsmanship</span>
              </span>
              <span className='author'>Robert C. Martin</span>
            </div>

            <div
              onClick={() => setActiveBookId('03')}
              className={clsx('book book-blue', { active: activeBookId === '03' })}
            >
              <span className='book-title'>
                Learning React <br />
                <span className="book-subtitle">Modern Patterns for Developing React Apps</span>
              </span>
              <span className='author'>Alex Banks, Eve Porcello</span>
            </div>

            <div
              onClick={() => setActiveBookId('04')}
              className={clsx('book book-yellow', { active: activeBookId === '04' })}
            >
              <span className='book-title'>
                Clean Architecture <br />
                <span className="book-subtitle">A Craftsman&apos;s Guide to Software <br /> Structure and Design</span>
              </span>
              <span className='author'>Robert C. Martin</span>
            </div>

            <div
              onClick={() => setActiveBookId('05')}
              className={clsx('book book-diagonal', { active: activeBookId === '05' })}
            >
              <span className='book-title'>
                Clean Agile <br />
                <span className="book-subtitle">Back to Basics</span>
              </span>
              <span className='author'>Robert C. Martin</span>
            </div>

            <div
              onClick={() => setActiveBookId('06')}
              className={clsx('book book-diagonal-brown', { active: activeBookId === '06' })}
            >
              <span className='book-title'>
                Clean Craftsmanship <br />
                <span className="book-subtitle">Disciplines, Standards, and Ethics</span>
              </span>
              <span className='author'>Robert C. Martin</span>
            </div>

            <div
              onClick={() => setActiveBookId('07')}
              className={clsx('book book-diagonal-blue', { active: activeBookId === '07' })}
            >
              <span className='book-title'>
                The Clean Coder <br />
                <span className="book-subtitle">A Code of Conduct for <br /> Professional Programmers</span>
              </span>
              <span className='author'>Robert C. Martin</span>
            </div>

            <div
              onClick={() => setActiveBookId('08')}
              className={clsx('book book-diagonal-green', { active: activeBookId === '08' })}
            >
              <span className='book-title'>
                Python for Kids <br />
                <span className="book-subtitle">A Playful Introduction to Programming</span>
              </span>
              <span className='author'>Jason R. Briggs</span>
            </div>

            <div className={`clock ${orbitron.className}`}>
              <span className='time'>{isLoaded && time}</span>
            </div>
          </div>
          <div className='shelf'></div>

          {activeBook && <BookCard key={activeBook.id} activeBook={activeBook} />}
        </section>
      </main>

      <BackToTopButton />
    </>
  );
};
