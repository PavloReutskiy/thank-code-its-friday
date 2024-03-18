'use client';
import './Navbar.css';
import { useState, useEffect, useRef } from 'react';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import gsap from 'gsap';
import { Sidebar } from '@/components/Sidebar';
import { LanguageSwitcher } from '../LanguageSwitcher';
import { useTranslations } from 'next-intl';

export const Navbar = (): JSX.Element => {
  const pathname = usePathname();
  const navRef = useRef(null);
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const t = useTranslations('Navbar');

  const toggleMenu = (): void => {
    setIsOpen(prevState => !prevState);
  };

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }

    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [isOpen]);

  useEffect(() => {
    if (isOpen) {
      gsap.to('.bar1', { duration: .3, width: '32px', height: '3px', top: '50%', rotate: '45deg' });
      gsap.to('.bar2', { duration: 0, opacity: 0 });
      gsap.to('.bar3', { duration: .3, width: '32px', height: '3px', top: '50%', rotate: '-45deg' });
    }

    if (!isOpen) {
      gsap.to('.bar1', { duration: .3, width: '28px', height: '3px', top: '25%', rotate: '0deg' });
      gsap.to('.bar2', { duration: .3, width: '28px', height: '3px', top: '50%', opacity: 1 });
      gsap.to('.bar3', { duration: .3, width: '28px', height: '3px', top: '75%', rotate: '0deg' });
    }
  }, [isOpen]);

  useEffect(() => {
    if (isOpen) {
      gsap.to('.animateNav', { duration: .5, backgroundPosition: '100% 0', ease: 'power2.in' });
    }

    if (!isOpen) {
      gsap.set('.animateNav', { backgroundPosition: '0% 0' });
    }
  }, [isOpen]);

  useEffect(() => {
    let lastScrollTop = 0;

    if (window.innerWidth >= 769) {
      gsap.to(navRef.current, {
        y: '0%',
        opacity: 1,
        duration: 1,
      });
    }

    const handleScroll = (): void => {
      const position = window.scrollY;

      if (window.innerWidth < 769) {
        gsap.set(navRef.current, { opacity: 1, y: 0 });
        return;
      }

      if (position > lastScrollTop) {
        gsap.to(navRef.current, {
          y: '-100%',
          duration: .5,
          delay: .3,
        });
      } else if (position < lastScrollTop) {
        gsap.to(navRef.current, {
          y: '0%',
          duration: .5,
          delay: .3,
        });
      }

      lastScrollTop = position <= 0 ? 0 : position;
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <>
      <nav
        ref={navRef}
        className='
          animateNav z-20
          opacity-1 translate-y-0 md:opacity-0 md:translate-y-[-100%]
          fixed top-0 left-0 right-0 mx-auto max-w-full font-condensed'
      >
        <div className='
          relative z-20 flex justify-between items-center
          border-b border-border_color
          max-w-[85%] xxl:max-w-[1224px] mx-auto
        '>
          <div className='
            relative z-20 py-4
            text-base sm:text-xl leading-tight font-bold text-title_color uppercase whitespace-nowrap
          '>
            {pathname !== '/' ? (
              <Link
                href='/'
                className='block'
                onClick={():void => setIsOpen(false)}
              >
                thank code <br /> it`s friday
              </Link>
            ) : (
              <span className='block cursor-pointer leading-tight text-base sm:text-xl'>
                thank code <br /> it`s friday
              </span>
            )}
          </div>

          <div className='hidden md:flex md:items-center md:justify-end md:min-w-[45%]'>
            <ul className='
              flex space-x-6
              mr-8 mt-[2px]
              text-lg md:text-base font-bold text-title_color uppercase leading-normal
            '>
              <li role='menuitem'>
                <Link
                  href='/'
                  data-link-alt={t('home')}
                  className='link'
                >
                  <span className='link-text'>{t('home')}</span>
                </Link>
              </li>
              <li role='menuitem'>
                <Link
                  href='/about'
                  data-link-alt={t('about')}
                  className='link'
                >
                  <span className='link-text'>{t('about')}</span>
                </Link>
              </li>
              <li role='menuitem'>
                <Link
                  href='/contact'
                  data-link-alt={t('contact')}
                  className='link'
                >
                  <span className='link-text'>{t('contact')}</span>
                </Link>
              </li>
            </ul>

            <div className='flex items-center space-x-8'>
              <div className='flex-shrink-0 py-3 cursor-pointer'>
                <LanguageSwitcher />
              </div>

              <div className='text-lg mt-[2px] md:text-base font-bold text-title_color uppercase leading-normal'>
                <Link
                  href='/subscribe'
                  data-link-alt={t('subscribe')}
                  className='link'
                >
                  <span className='link-text'>{t('subscribe')}</span>
                </Link>
              </div>
            </div>
          </div>

          <div
            role='button'
            className='w-7 h-7 relative z-20 md:hidden'
            onClick={toggleMenu}
          >
            <span className='bar1 top-[25%] menu-toggle-styles'></span>
            <span className='bar2 top-[50%] menu-toggle-styles'></span>
            <span className='bar3 top-[75%] menu-toggle-styles'></span>
          </div>
        </div>
      </nav>

      {isOpen && <Sidebar onToggleMenu={toggleMenu} />}
    </>
  );
};
