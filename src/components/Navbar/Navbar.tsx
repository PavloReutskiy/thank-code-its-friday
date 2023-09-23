/* eslint-disable @next/next/no-img-element */
import React from 'react';
import Image from 'next/image';
import en from 'public/assets/navbar/en.webp';
// import ua from 'public/assets/navbar/ua.webp';

export const Navbar = (): JSX.Element => {
  return (
    <nav className="my-container font-condensed">
      <div className="flex justify-between items-center border-b border-nav_line">
        <div className="text-2xl uppercase text-black leading-tight font-bold py-4 whitespace-nowrap flex-grow">
          thank code <br /> it`s friday
        </div>

        <div className="w-36 flex-shrink"></div>

        <ul className="hidden text-lg uppercase text-black font-bold md:flex md:space-x-7">
          <li>Home</li>
          <li>About</li>
          <li>Contact</li>
        </ul>

        <div className="w-36 flex-shrink"></div>

        <div className="flex items-center md:space-x-7">
          <div className="hidden md:block py-3 flex-shrink-0">
            <Image
              src={en}
              alt="English language icon"
              width={30}
              height={30}
            />
          </div>

          <div className="hidden text-lg uppercase text-black font-bold md:block">Subscribe</div>
        </div>

        <div className="flex items-center md:hidden">
          <button className="py-3" type="button">
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
