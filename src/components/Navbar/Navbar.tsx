'use client';
import './Navbar.css';
import { useState, useRef } from 'react';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { Sidebar } from '@/components/Sidebar';
import { LanguageSwitcher } from '../LanguageSwitcher';
import { NavLink } from '../NavLink';
import useHamburgerAnimation from '@/hooks/useHamburgerAnimation';
import useNavbarAnimation from '@/hooks/useNavbarAnimation';

export const Navbar = (): JSX.Element => {
  const pathname = usePathname();
  const navRef = useRef(null);
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const toggleMenu = (): void => {
    setIsOpen(prevState => !prevState);
  };

  useNavbarAnimation(navRef);
  useHamburgerAnimation(isOpen);

  useGSAP(() => {
    if (isOpen) {
      gsap.to('.animateNav', { duration: .5, backgroundPosition: '100% 0', ease: 'power2.in' });
    }

    if (!isOpen) {
      gsap.set('.animateNav', { backgroundPosition: '0% 0' });
    }
  }, [isOpen]);

  return (
    <>
      <nav ref={navRef} className='animateNav nav-main-wrapper'>
        <div className='nav-container'>
          <div className='nav-logo-wrapper'>
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
            <ul role='list' className='nav-links-wrapper'>
              <li role='menuitem'>
                <NavLink text='home' />
              </li>

              <li role='menuitem'>
                <NavLink text='about' />
              </li>

              <li role='menuitem'>
                <NavLink text='contact' />
              </li>
            </ul>

            <div className='flex items-center space-x-8'>
              <div className='flex-shrink-0 py-3 cursor-pointer'>
                <LanguageSwitcher />
              </div>

              <div className='text-lg mt-[2px] md:text-base font-bold text-title_color uppercase leading-normal'>
                <NavLink text='subscribe' />
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
