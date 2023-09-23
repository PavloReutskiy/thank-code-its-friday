/* eslint-disable @next/next/no-img-element */
'use client';
import React, { useState } from 'react';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import en from 'public/assets/navbar/en.webp';
// import ua from 'public/assets/navbar/ua.webp';

export const Navbar = (): JSX.Element => {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="mx-auto w-[85%] font-condensed">
      <div className="flex justify-between items-center border-b border-nav_line">
        <div className="py-4 text-2xl leading-tight font-bold text-black uppercase whitespace-nowrap">
          {pathname !== '/' ? (
            <Link href="/" className="block">
              thank code <br /> it`s friday
            </Link>
          ) : (
            <span className="block cursor-pointer">thank code <br /> it`s friday</span>
          )}
        </div>

        <div className="hidden md:flex md:items-center md:justify-end md:min-w-[45%]">
          <ul className="flex space-x-6 mr-9 text-lg font-bold text-black uppercase leading-normal">
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

        <div className="flex items-center md:hidden">
          <button
            onClick={():void => setIsOpen(true)}
            className="py-5"
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

      {isOpen && (
        <aside className="fixed inset-0 z-50 flex flex-col bg-[#D0E3F7]">
          <div className="flex justify-between items-center mx-auto mb-6 w-[85%] border-b border-slate-400">
            <div className="py-4 text-2xl leading-tight font-bold text-black uppercase whitespace-nowrap">
              {pathname !== '/' ? (
                <Link href="/" className="block">
                  thank code <br /> it`s friday
                </Link>
              ) : (
                <span className="block cursor-pointer">thank code <br /> it`s friday</span>
              )}
            </div>

            <div className="flex items-center">
              <button
                onClick={():void => setIsOpen(false)}
                className="py-5"
                type="button"
                aria-label="Open menu"
              >
                <img
                  className="w-9 h-9"
                  src="/assets/navbar/close.svg"
                  alt="Burger Icon"
                />
              </button>
            </div>
          </div>

          <div className="mx-auto w-[85%]">
            <ul className="flex flex-col text-lg font-bold text-black uppercase leading-normal">
              <li className="py-3">
                <Link href="/">Home</Link>
              </li>
              <li className="py-3">
                <Link href="/about">About</Link>
              </li>
              <li className="py-3">
                <Link href="/contact">Contact</Link>
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
              <Link href="/subscribe">Subscribe</Link>
            </div>
          </div>
        </aside>
      )}
    </nav>
  );
};
