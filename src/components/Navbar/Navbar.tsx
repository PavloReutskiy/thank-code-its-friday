/* eslint-disable @next/next/no-img-element */
'use client';
import './Navbar.css';
import { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import gsap from 'gsap';

export const Navbar = (): JSX.Element => {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const tlSidebar = gsap.timeline();

  const toggleMenu = (): void => {
    setIsOpen(prevState => !prevState);
  };

  // #region Nav appearance animation
  useEffect(() => {
    gsap.to('.animateNav', { duration: 1, y: '0%', opacity: 1, ease: 'power2.out' });
  }, []);
  // #endregion

  // #region Gumburger animation
  useEffect(() => {
    if (isOpen) {
      gsap.to('.bar1', { duration: .3, width: '32px', height: '3px', top: '50%', rotate: '45deg' });
      gsap.to('.bar2', { duration: 0, opacity: 0 });
      gsap.to('.bar3', { duration: .3, width: '32px', height: '3px', top: '50%', rotate: '-45deg' });
      // tl.to('.sidebar', { duration: .5, x: '0%', ease: 'power2.in' });
      // tl.to('.navItem', { duration: .5, opacity: 1, ease: 'power2.in', stagger: .15 });
    }

    if (!isOpen) {
      gsap.to('.bar1', { duration: .3, width: '28px', height: '3px', top: '25%', rotate: '0deg' });
      gsap.to('.bar2', { duration: .3, width: '28px', height: '3px', top: '50%', opacity: 1 });
      gsap.to('.bar3', { duration: .3, width: '28px', height: '3px', top: '75%', rotate: '0deg' });
      // tl.to('.navItem', { duration: .3, opacity: 0, ease: 'power2.out', stagger: .1 });
      // tl.to('.sidebar', { duration: .3, x: '100%', ease: 'power2.in' });
    }
  }, [isOpen]);
  // #endregion

  // #region Sidebar animation
  useEffect(() => {
    if (isOpen) {
      tlSidebar.to('.sidebar', { duration: .5, x: '0%', ease: 'power2.in' });
      tlSidebar.to('.navItem', { duration: .5, opacity: 1, ease: 'power2.in', stagger: .15 });
    }
  }, [isOpen, tlSidebar]);
  // #endregion

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
          <ul className="flex space-x-6 text-lg font-bold text-black uppercase leading-normal">
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
            <li role="menuitem">
              <Link
                href="/subscribe"
                data-link-alt="Subscribe"
                className="link"
              >
                <span className="text">Subscribe</span>
              </Link>
            </li>
          </ul>
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

      {isOpen && (
        <aside
          role="navigation"
          className="sidebar fixed inset-0 z-10 flex flex-col bg-[#D0E3F7] md:hidden translate-x-full"
        >
          <div className="mt-[92px] pt-6 mx-auto w-[85%]">
            <ul className="flex flex-col space-y-6 pt-3 text-xl font-bold text-black uppercase leading-normal">
              <li role="menuitem" className="navItem opacity-0">
                <Link
                  href="/"
                  onClick={toggleMenu}
                >
                  Home
                </Link>
              </li>
              <li role="menuitem" className="navItem opacity-0">
                <Link
                  href="/about"
                  onClick={toggleMenu}
                >
                  About
                </Link>
              </li>
              <li role="menuitem" className="navItem opacity-0">
                <Link
                  href="/contact"
                  onClick={toggleMenu}
                >
                  Contact
                </Link>
              </li>
              <li role="menuitem" className="navItem opacity-0">
                <Link
                  href="/subscribe"
                  onClick={toggleMenu}
                >
                  Subscribe
                </Link>
              </li>
            </ul>
          </div>
        </aside>
      )}
    </nav>
  );
};
