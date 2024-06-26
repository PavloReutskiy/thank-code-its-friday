'use client';
import { SubscribeForm } from '../SubscribeForm';
import { useTranslations } from 'next-intl';
import { SocialLink } from '../SocialLink';
import { NavLink } from '../../Common/NavLink';
import data from './data.json';

export const Footer = (): JSX.Element => {
  const t = useTranslations('Footer');

  return (
    <footer className="min-h-[300px] bg-accent_background">
      <div className="min-h-[300px] max-w-[85%] xxl:max-w-[1224px] mx-auto py-6 lg:pt-10 flex flex-col justify-between">
        <div className="grid grid-cols-1 gap-9 mb-9 sm:grid-cols-2 lg:grid-cols-[2fr_1fr_1fr] lg:gap-15">
          <div className="max-w-[600px] lg:max-w-[450px] sm:col-span-2 lg:col-span-1">
            <SubscribeForm />
          </div>

          <ul
            role="list"
            className="flex flex-col gap-2 font-condensed text-lg font-bold text-text_color uppercase"
          >
            <li role="menuitem">
              <NavLink text="about" />
            </li>
            <li role="menuitem">
              <NavLink text="contact" />
            </li>
            <li role="menuitem">
              <NavLink text="policy" />
            </li>
          </ul>

          <div className="">
            <p className="font-condensed text-lg font-bold text-text_color uppercase mb-2">
              {t('follow')}
            </p>

            <ul className="flex gap-3 mb-6" role="list">
              {data.map(item => (
                <li key={item.iconId} role="menuitem">
                  <SocialLink
                    href={item.href}
                    label={item.label}
                    iconId={item.iconId}
                    className="social-icon"
                  />
                </li>
              ))}
            </ul>

            <p className="font-condensed text-lg font-bold text-text_color uppercase mb-2">
              {t('support')}
            </p>

            <SocialLink
              href="https://u24.gov.ua/"
              label="Link to United24 organization website"
              iconId="icon-united"
              className="united-icon"
            />
          </div>
        </div>

        <p className="text-label_color mx-auto text-center text-sm">
          {t('rights')}
        </p>
      </div>
    </footer>
  );
};
