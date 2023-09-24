/* eslint-disable @next/next/no-img-element */
'use client';
import './Navbar.css';
import React, { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import gsap from 'gsap';
import en from 'public/assets/navbar/en.webp';
// import ua from 'public/assets/navbar/ua.webp';

export const Navbar = (): JSX.Element => {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const tl = gsap.timeline();

  const toggleMenu = (): void => {
    setIsOpen(prevState => !prevState);
  };

  useEffect(() => {
    if (isOpen) {
      gsap.to('.bar1', { duration: .3, width: '32px', height: '3px', top: '65%', rotate: '45deg' });
      gsap.to('.bar2', { duration: 0, opacity: 0 });
      gsap.to('.bar3', { duration: .3, width: '32px', height: '3px', top: '65%', rotate: '-45deg' });
    } else {
      gsap.to('.bar1', { duration: .3, width: '28px', height: '3px', top: '40%', rotate: '0deg' });
      gsap.to('.bar2', { duration: .3, width: '28px', height: '3px', top: '65%', opacity: 1 });
      gsap.to('.bar3', { duration: .3, width: '28px', height: '3px', top: '90%', rotate: '0deg' });
    }
  }, [isOpen, tl]);

  return (
    <nav className="mx-auto w-[85%] font-condensed">
      <div className="flex justify-between items-center border-b border-nav_line max-w-[1224px] mx-auto">
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
              <Link href="/">Home</Link>
            </li>
            <li role="menuitem">
              <Link href="/about">About</Link>
            </li>
            <li role="menuitem">
              <Link href="/contact">Contact</Link>
            </li>
          </ul>

          <div className="flex items-center space-x-9">
            <div className="flex-shrink-0 py-3">
              <Image
                src={en}
                alt="English language icon"
                width={30}
                height={30}
                aria-label="Switch to Ukrainian"
              />
            </div>

            <div className="text-lg font-bold text-black uppercase leading-normal">
              <Link href="/subscribe">Subscribe</Link>
            </div>
          </div>
        </div>

        <div className="w-7 h-7 relative z-20 md:hidden" onClick={toggleMenu}>
          <span className="bar1 top-[40%] menuToggleStyles"></span>
          <span className="bar2 top-[65%] menuToggleStyles"></span>
          <span className="bar3 top-[90%] menuToggleStyles"></span>
        </div>
      </div>

      {isOpen && (
        <aside role="navigation" className="fixed inset-0 z-10 flex flex-col bg-[#D0E3F7] md:hidden">
          <div className="mt-[92px] pt-6 border-t border-slate-400 mx-auto w-[85%]">
            <ul className="flex flex-col text-lg font-bold text-black uppercase leading-normal">
              <li role="menuitem" className="py-3">
                <Link
                  href="/"
                  onClick={toggleMenu}
                >
                  Home
                </Link>
              </li>
              <li role="menuitem" className="py-3">
                <Link
                  href="/about"
                  onClick={toggleMenu}
                >
                  About
                </Link>
              </li>
              <li role="menuitem" className="py-3">
                <Link
                  href="/contact"
                  onClick={toggleMenu}
                >
                  Contact
                </Link>
              </li>
            </ul>

            <div className="py-3">
              <Image
                src={en}
                alt="English language icon"
                width={30}
                height={30}
                aria-label="Switch to Ukrainian"
              />
            </div>

            <div className="py-3 text-lg font-bold text-black uppercase leading-normal">
              <Link
                href="/subscribe"
                onClick={toggleMenu}
              >
                Subscribe
              </Link>
            </div>
          </div>
        </aside>
      )}
    </nav>
  );
};
