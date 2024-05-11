import './SocialLink.css';
import { FC } from 'react';
import Link from 'next/link';

type Props = {
  href: string;
  iconId: string;
  label: string;
  className: string;
};

export const SocialLink: FC<Props> = ({ href, iconId, label, className }): JSX.Element => {
  return (
    <Link
      href={href}
      target='_blank'
    >
      <svg
        className={className}
        role='img'
        aria-label={label}
      >
        <use xlinkHref={`/assets/sprite.svg#${iconId}`}></use>
      </svg>
    </Link>
  );
};
