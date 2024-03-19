import './NavLink.css';
import { FC } from 'react';
import Link from 'next/link';
import { useTranslations } from 'next-intl';

type Props = {
  text: string;
};

export const NavLink: FC<Props> = ({ text }): JSX.Element => {
  const t = useTranslations('Navbar');

  return (
    <Link
      href={`/${text}`}
      data-link-alt={t(`${text}`)}
      className='nav-link'
    >
      <span className='link-text'>{t(`${text}`)}</span>
    </Link>
  );
};
