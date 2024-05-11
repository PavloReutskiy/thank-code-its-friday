'use client';
import Link from 'next/link';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { FC } from 'react';
import { LanguageSwitcher } from '../LanguageSwitcher';
import { useTranslations } from 'next-intl';

type Props = {
  onToggleMenu: () => void;
};

export const Sidebar: FC<Props> = ({ onToggleMenu }): JSX.Element => {
  const t = useTranslations('Navbar');

  useGSAP(() => {
    const tl = gsap.timeline();
    tl.to('.sidebar', { duration: 0.5, x: '0%', ease: 'power2.in' });
    tl.to('.navItem', {
      duration: 0.5,
      opacity: 1,
      ease: 'power2.in',
      stagger: 0.15,
    });
  });

  return (
    <aside
      role="navigation"
      className="sidebar fixed inset-0 z-10 flex flex-col bg-accent_colour md:hidden translate-x-full"
    >
      <div className="mt-[92px] pt-6 mx-auto w-[85%]">
        <ul className="flex flex-col text-xl font-bold text-title_color uppercase leading-normal">
          <li role="menuitem" className="navItem py-3 opacity-0">
            <Link href="/" onClick={onToggleMenu}>
              {t('home')}
            </Link>
          </li>

          <li role="menuitem" className="navItem py-3 opacity-0">
            <Link href="/about" onClick={onToggleMenu}>
              {t('about')}
            </Link>
          </li>

          <li role="menuitem" className="navItem py-3 opacity-0">
            <Link href="/contact" onClick={onToggleMenu}>
              {t('contact')}
            </Link>
          </li>
        </ul>

        <div className="navItem py-3 opacity-0">
          <LanguageSwitcher />
        </div>

        <div className="navItem py-3 opacity-0 text-xl font-bold text-title_color uppercase leading-normal">
          <Link href="/subscribe" onClick={onToggleMenu}>
            {t('subscribe')}
          </Link>
        </div>
      </div>
    </aside>
  );
};
