'use client';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import todo from 'public/assets/main/todo.png';
// import closures from 'public/assets/main/closures.png';
// import portal from 'public/assets/main/portal.png';
import formatData from '@/utils/formatData';
import './PostPreview.css';
import { gsap } from 'gsap';
import { useEffect } from 'react';
import { PaginationComponent } from '@/components/PaginationComponent';
import { PostPreview } from '@/components/PostPreview';
import { LastPostPreview } from '@/components/LastPostPreview';

const Home = (): JSX.Element => {
  const router = useRouter();

  useEffect(() => {
    const cursor = document.querySelector('.cursor');
    const sectionElements = document.querySelectorAll('section');
    const buttonElements = document.querySelectorAll('section button');

    let posX = 0;
    let posY = 0;
    let mouseX = 0;
    let mouseY = 0;

    gsap.ticker.add(() => {
      posX += (mouseX - posX) / 10;
      posY += (mouseY - posY) / 10;

      gsap.set(cursor, {
        left: posX,
        top: posY,
      });
    });

    const handleMouseMove = (event: MouseEvent):void => {
      mouseX = event.pageX;
      mouseY = event.pageY;
    };

    const handleActiveAdd = ():void => {
      cursor?.classList.add('active');
    };

    const handleActiveRemove = ():void => {
      cursor?.classList.remove('active');
    };

    document.addEventListener('mousemove', handleMouseMove);

    sectionElements.forEach(section => {
      section.addEventListener('mouseenter', handleActiveAdd);
      section.addEventListener('mouseleave', handleActiveRemove);
    });

    buttonElements.forEach(button => {
      button.addEventListener('mouseenter', handleActiveRemove);
      button.addEventListener('mouseleave', handleActiveAdd);
    });

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);

      sectionElements.forEach(section => {
        section.removeEventListener('mouseenter', handleActiveAdd);
        section.removeEventListener('mouseleave', handleActiveRemove);
      });

      buttonElements.forEach(button => {
        button.removeEventListener('mouseenter', handleActiveRemove);
        button.removeEventListener('mouseleave', handleActiveAdd);
      });
    };
  }, []);

  return (
    <>
      <header className='mx-auto max-w-[85%] font-condensed'>
        <h1 className='
          flex flex-col justify-center items-center
          md:flex-row md:gap-6 lg:gap-4
          mt-[89px] sm:mt-[113px] xxl:mt-[129px] mb-4 sm:mb-7 md:mb-10
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

      <main className='mx-auto max-w-[85%] font-condensed mb-8'>
        <LastPostPreview />

        <div className='grid grid-cols-1 md:grid-cols-2 gap-8 md:mb-10 max-w-[1224px] mx-auto'>
          <PostPreview />
          <section className='
            flex flex-col
            px-4 sm:px-5 py-5 sm:py-6 md:p-8
            border border-slate-400 rounded-3xl shadow
          '>
            <Link href='/post/todo-app-why-is-it-a-good-choice-for-a-pet-project?' className='cursor-default'>
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
                    typescript
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
          <PostPreview />
          <PostPreview />
          <PostPreview />
          <PostPreview />
          <PostPreview />
          <PostPreview />
          <PostPreview />
          <PostPreview />
        </div>
      </main>

      <nav className='mx-auto max-w-[85%] mb-8 flex justify-center'>
        <PaginationComponent />
      </nav>

      <div className='cursor'></div>
    </>
  );
};

export default Home;
