import Link from 'next/link';
import gsap from 'gsap';
import { FC, useEffect } from 'react';

type Props = {
  onToggleMenu: () => void;
};

export const Sidebar: FC<Props> = ({ onToggleMenu }): JSX.Element => {
  useEffect(() => {
    const tl = gsap.timeline();
    tl.to('.sidebar', { duration: .5, x: '0%', ease: 'power2.in' });
    tl.to('.navItem', { duration: .5, opacity: 1, ease: 'power2.in', stagger: .15 });
  }, []);

  return (
    <aside
      role="navigation"
      className="sidebar fixed inset-0 z-10 flex flex-col bg-[#D0E3F7] md:hidden translate-x-full"
    >
      <div className="mt-[92px] pt-6 mx-auto w-[85%]">
        <ul className="flex flex-col space-y-6 pt-3 text-xl font-bold text-black uppercase leading-normal">
          <li role="menuitem" className="navItem opacity-0">
            <Link
              href="/"
              onClick={onToggleMenu}
            >
              Home
            </Link>
          </li>
          <li role="menuitem" className="navItem opacity-0">
            <Link
              href="/about"
              onClick={onToggleMenu}
            >
              About
            </Link>
          </li>
          <li role="menuitem" className="navItem opacity-0">
            <Link
              href="/contact"
              onClick={onToggleMenu}
            >
              Contact
            </Link>
          </li>
          <li role="menuitem" className="navItem opacity-0">
            <Link
              href="/subscribe"
              onClick={onToggleMenu}
            >
              Subscribe
            </Link>
          </li>
        </ul>
      </div>
    </aside>
  );
};
