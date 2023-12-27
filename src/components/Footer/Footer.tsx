'use client';
import { SubscribeForm } from '../SubscribeForm';
import Link from 'next/link';
import { useTranslations } from 'next-intl';
import Image from 'next/image';

export const Footer = (): JSX.Element => {
  const t = useTranslations('Footer');

  return (
    <footer className='min-h-[300px] bg-accent_background'>
      <div className='min-h-[300px] max-w-[85%] xxl:max-w-[1224px] mx-auto py-6 lg:pt-10 flex flex-col justify-between'>
        <div className='grid grid-cols-1 gap-9 mb-9 sm:grid-cols-2 lg:grid-cols-[2fr_1fr_1fr] lg:gap-15'>
          <div className='max-w-[600px] lg:max-w-[450px] sm:col-span-2 lg:col-span-1'>
            <SubscribeForm className='grid grid-cols-1 gap-5 sm:grid-cols-[2fr_1fr] sm:gap-1' />
          </div>

          <ul className='flex flex-col gap-2' role='list'>
            <li role='menuitem'>
              <Link
                href='/about'
                data-link-alt={t('about')}
                className='font-condensed text-lg font-bold text-text_color uppercase link'
              >
                <span className='text'>{t('about')}</span>
              </Link>
            </li>
            <li role='menuitem'>
              <Link
                href='/contact'
                data-link-alt={t('contact')}
                className='font-condensed text-lg font-bold text-text_color uppercase link'
              >
                <span className='text'>{t('contact')}</span>
              </Link>
            </li>
            <li role='menuitem'>
              <Link
                href='/contact'
                data-link-alt={t('policy')}
                className='font-condensed text-lg font-bold text-text_color uppercase link'
              >
                <span className='text'>{t('policy')}</span>
              </Link>
            </li>
          </ul>

          <div className=''>
            <p className='font-condensed text-lg font-bold text-text_color uppercase mb-2'>{t('follow')}</p>

            <ul className='flex gap-3 mb-6' role='list'>
              <li role='menuitem'>
                <Link
                  href='https://www.linkedin.com/in/pavlo-reutskyi-294657278/'
                  target='_blank'
                >
                  <Image
                    src='/assets/footer/linkedin.svg'
                    width={34}
                    height={34}
                    alt='Linkedin logo'
                    className='object-cover object-center'
                  />
                </Link>
              </li>
              <li role='menuitem'>
                <Link
                  href='https://dev.to/pavloreutskiy'
                  target='_blank'
                >
                  <Image
                    src='/assets/footer/dev.svg'
                    width={34}
                    height={34}
                    alt='DEV logo'
                    className='object-cover object-center'
                  />
                </Link>
              </li>
              <li role='menuitem'>
                <Link
                  href='https://github.com/PavloReutskiy'
                  target='_blank'
                >
                  <Image
                    src='/assets/footer/git-hub.svg'
                    width={34}
                    height={34}
                    alt='GitHub logo'
                    className='object-cover object-center'
                  />
                </Link>
              </li>
              <li role='menuitem'>
                <Link
                  href='https://www.buymeacoffee.com/pavloreutskiy'
                  target='_blank'
                >
                  <Image
                    src='/assets/footer/buy-me-a-coffee.svg'
                    width={34}
                    height={34}
                    alt='Buy me a coffe logo'
                    className='object-cover object-center'
                  />
                </Link>
              </li>
            </ul>

            <p className='font-condensed text-lg font-bold text-text_color uppercase mb-2'>{t('support')}</p>
            <Link
              href='https://u24.gov.ua/'
              target='_blank'
            >
              <Image
                src='/assets/footer/united24.svg'
                width={154}
                height={20}
                alt='United 25 logo'
                className='object-cover object-center'
              />
            </Link>
          </div>

        </div>

        <p className='text-label_color mx-auto text-center text-sm'>{t('rights')}</p>
      </div>
    </footer>
  );
};
