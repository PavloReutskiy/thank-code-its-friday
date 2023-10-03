/* eslint-disable @next/next/no-img-element */
'use client';
import './Navbar.css';
import { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import gsap from 'gsap';
import en from 'public/assets/navbar/en.webp';
import uk from 'public/assets/navbar/ua.webp';
import { Sidebar } from '@/components/Sidebar';

export const Navbar = (): JSX.Element => {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [language, setLenguage] = useState<boolean>(true);

  const toggleMenu = (): void => {
    setIsOpen(prevState => !prevState);
  };

  useEffect(() => {
    gsap.to('.animateNav', { duration: 1, y: '0%', opacity: 1, ease: 'power2.out' });
  }, []);

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

  const changeLanguage = (newLanguage: LanguageType): void => {
    console.log(newLanguage);
    setLenguage(prevState => !prevState);
  };

  return (
    <nav className="mx-auto w-[85%] font-condensed">
      <div className="
        animateNav opacity-1 translate-y-0 md:opacity-0 md:translate-y-[-100%]
        relative z-20 flex justify-between items-center
        border-b border-slate-400
        max-w-[1224px] mx-auto"
      >
        <div className="relative z-20 py-4 text-2xl leading-tight font-bold text-black uppercase whitespace-nowrap">
          {pathname !== '/' ? (
            <Link
              href="/"
              className="block"
              onClick={():void => setIsOpen(false)}
            >
              thank code <br /> it`s friday
            </Link>
          ) : (
            <span className="block cursor-pointer">thank code <br /> it`s friday</span>
          )}
        </div>

        <div className="hidden md:flex md:items-center md:justify-end md:min-w-[45%]">
          <ul className="flex space-x-6 mr-9 text-lg font-bold text-black uppercase leading-normal">
            <li role="menuitem">
              <Link
                href="/"
                data-link-alt="Home"
                className="link"
              >
                <span className="text">Home</span>
              </Link>
            </li>
            <li role="menuitem">
              <Link
                href="/about"
                data-link-alt="About"
                className="link"
              >
                <span className="text">About</span>
              </Link>
            </li>
            <li role="menuitem">
              <Link
                href="/contact"
                data-link-alt="Contact"
                className="link"
              >
                <span className="text">Contact</span>
              </Link>
            </li>
          </ul>

          <div className="flex items-center space-x-9">
            <div className="flex-shrink-0 py-3 cursor-pointer">
              {language === true ? (
                <Image
                  src={en}
                  alt="English language icon"
                  width={30}
                  height={30}
                  aria-label="Switch to Ukrainian"
                  onClick={(): void => changeLanguage('uk')}
                />
              ) : (
                <Image
                  src={uk}
                  alt="English language icon"
                  width={30}
                  height={30}
                  aria-label="Switch to English"
                  onClick={(): void => changeLanguage('en')}
                />
              )}
            </div>

            <div className="text-lg font-bold text-black uppercase leading-normal">
              <Link
                href="/subscribe"
                data-link-alt="Subscribe"
                className="link"
              >
                <span className="text">Subscribe</span>
              </Link>
            </div>
          </div>
        </div>

        <div
          role="button"
          className="w-7 h-7 relative z-20 md:hidden"
          onClick={toggleMenu}
        >
          <span className="bar1 top-[25%] menu-toggle-styles"></span>
          <span className="bar2 top-[50%] menu-toggle-styles"></span>
          <span className="bar3 top-[75%] menu-toggle-styles"></span>
        </div>
      </div>

      {isOpen && <Sidebar onToggleMenu={toggleMenu} />}
    </nav>
  );
};
