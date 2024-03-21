'use client';
import { FC } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { toast } from 'react-toastify';
import { useTranslations } from 'next-intl';

type Props = {
  title: string;
};

export const ShareButtons: FC<Props> = ({ title }): JSX.Element => {
  const pathname = usePathname();
  const t = useTranslations('Post');

  const baseUrl = process.env.NEXT_PUBLIC_DOMAIN;
  const fullUrl = `${baseUrl}${pathname}`;
  const shareUrl = `https://t.me/share/url?url=${encodeURIComponent(fullUrl)}&text=${encodeURIComponent(`Article: ${title}`)}`;

  const handleURLCopy = async():Promise<void> => {
    try {
      await navigator.clipboard.writeText(fullUrl);
      toast.success('Copied to Clipboard!');
    } catch (errorURLCopy) {
      toast.error(`Copy failed: ${errorURLCopy}`);
    }
  };

  return (
    <div className='flex justify-between items-center gap-3'>
      <p className='text-label_color font-sans text-sm lg:text-base xl:text-l leading-normal font-bold'>
        {t('share')}:
      </p>

      <Link href={shareUrl} target="_blank">
        <button type='button' className='flex items-center'>
          <Image
            src='/assets/telegram-icon.svg'
            width={25}
            height={25}
            alt='Link icon'
            className=''
          />
        </button>
      </Link>

      <Link
        role='button'
        href={`mailto:?subject=${
          encodeURIComponent(title)
        }&body=${
          encodeURIComponent('Check out this article: ') +
          encodeURIComponent(fullUrl)}`}>
        <Image
          src='/assets/email-icon.svg'
          width={25}
          height={25}
          alt='Email icon'
          className=''
        />
      </Link>

      <button type='button' onClick={handleURLCopy}>
        <Image
          src='/assets/link-icon.svg'
          width={25}
          height={25}
          alt='Link icon'
          className=''
        />
      </button>
    </div>
  );
};
