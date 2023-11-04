'use client';
import './Home.css';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useEffect, useLayoutEffect, useState } from 'react';
import { PaginationComponent } from '@/components/PaginationComponent';
import { PostPreview } from '@/components/PostPreview';
import { LastPostPreview } from '@/components/LastPostPreview';
import { BackToTopButton } from '../BackToTopButton';

export const Home = (): JSX.Element => {
  const [locoScroll, setLocoScroll] = useState<LocomotiveScroll | null>(null);
  gsap.registerPlugin(ScrollTrigger);

  useLayoutEffect(() => {
    if (window.innerWidth < 769) {
      gsap.set('.header-animation', { opacity: 1, y: 0 });
      return;
    }

    gsap.to('.header-animation', {
      opacity: 1,
      y: 0,
      duration: 1,
      ease: 'power1.inOut',
    });
  }, []);

  useLayoutEffect(() => {
    if (window.innerWidth < 769) {
      gsap.set('.scroll-animation', { opacity: 1, y: 0 });
      return;
    }

    const triggerElements = document.querySelectorAll('.scroll-animation');
    const timeline = gsap.timeline();
    const triggerArray = Array.from(triggerElements);

    timeline.to(triggerArray.slice(0, 3), {
      opacity: 1,
      y: 0,
      delay: .3,
      stagger: .3,
      duration: 1,
      ease: 'power1.inOut',
    });

    triggerArray.forEach((element, index) => {
      if (index > 2) {
        gsap.to(element, {
          scrollTrigger: {
            trigger: element,
            start: 'top 90%',
            toggleActions: 'restart none none reverse',
          },
          opacity: 1,
          y: 0,
          delay: index % 2 === 1 ? 0 : 0.3,
          duration: 1,
        });
      }
    });

    return () => {
      ScrollTrigger.getAll().forEach(st => st.kill());
    };
  }, []);

  useEffect(() => {
    (
      async(): Promise<void> => {
        const LocomotiveScroll = (await import('locomotive-scroll')).default;
        const scroll = new LocomotiveScroll();
        setLocoScroll(scroll);
      }
    )();
  }, []);

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
          header-animation
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
        <LastPostPreview className='scroll-animation' />

        <div className='grid grid-cols-1 md:grid-cols-2 gap-8 md:mb-10 max-w-[1224px] mx-auto'>
          <PostPreview className='scroll-animation' />
          <PostPreview className='scroll-animation' />
          <PostPreview className='scroll-animation' />
          <PostPreview className='scroll-animation' />
          <PostPreview className='scroll-animation' />
          <PostPreview className='scroll-animation' />
          <PostPreview className='scroll-animation' />
          <PostPreview className='scroll-animation' />
          <PostPreview className='scroll-animation' />
          <PostPreview className='scroll-animation' />
        </div>
      </main>

      <nav className='mx-auto max-w-[85%] mb-8 flex justify-center'>
        <PaginationComponent />
      </nav>

      <BackToTopButton locoScroll={locoScroll} />

      <div className='cursor'></div>
    </>
  );
};
