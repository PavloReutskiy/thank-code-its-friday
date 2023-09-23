/* eslint-disable @next/next/no-img-element */
'use client';
import React from 'react';
import './Navbar.css';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import en from 'public/assets/navbar/en.webp';
// import ua from 'public/assets/navbar/ua.webp';

export const Navbar = (): JSX.Element => {
  const pathname = usePathname();

  return (
    <nav className="my-container font-condensed">
      <div className="flex items-center border-b border-nav_line">
        <div className="flex-grow py-4 text-2xl leading-tight bold-upcase-black whitespace-nowrap">
          {pathname !== '/' ? (
            <Link href="/" className="block">
              thank code <br /> it`s friday
            </Link>
          ) : (
            <span className="block cursor-pointer">thank code <br /> it`s friday</span>
          )}
        </div>

        <div className="hidden md:block spacer"></div>

        <ul className="hidden text-lg bold-upcase-black md:flex md:space-x-7">
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/about">About</Link>
          </li>
          <li>
            <Link href="/contact">Contact</Link>
          </li>
        </ul>

        <div className="hidden md:block spacer"></div>

        <div className="flex items-center md:space-x-7">
          <div className="hidden flex-shrink-0 py-3 md:block">
            <Image
              src={en}
              alt="English language icon"
              width={30}
              height={30}
              aria-label="Switch to Ukrainian"
            />
          </div>

          <div className="hidden text-lg bold-upcase-black md:block">
            <Link href="/subscribe">Subscribe</Link>
          </div>
        </div>

        <div className="flex items-center md:hidden">
          <button
            className="py-3"
            type="button"
            aria-label="Open menu"
          >
            <img
              className="w-9 h-9"
              src="/assets/navbar/burger.svg"
              alt="Burger Icon"
            />
          </button>
        </div>

      </div>
    </nav>
  );
};
