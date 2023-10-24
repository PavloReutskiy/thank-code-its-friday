'use client';
import './Navbar.css';
import { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import gsap from 'gsap';
import { Sidebar } from '@/components/Sidebar';
import { LanguageSwitcher } from '../LanguageSwitcher';
import { useTranslations } from 'next-intl';

export const Navbar = (): JSX.Element => {
  const pathname = usePathname();

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

  return (
    <nav className='mx-auto max-w-[85%] font-condensed'>
      <div className='
        relative z-20 flex justify-between items-center
        border-b border-border_color
        max-w-[1224px] mx-auto
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
                <span className='text'>{t('home')}</span>
              </Link>
            </li>
            <li role='menuitem'>
              <Link
                href='/about'
                data-link-alt={t('about')}
                className='link'
              >
                <span className='text'>{t('about')}</span>
              </Link>
            </li>
            <li role='menuitem'>
              <Link
                href='/contact'
                data-link-alt={t('contact')}
                className='link'
              >
                <span className='text'>{t('contact')}</span>
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
                <span className='text'>{t('subscribe')}</span>
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

      {isOpen && <Sidebar onToggleMenu={toggleMenu} />}
    </nav>
  );
};
