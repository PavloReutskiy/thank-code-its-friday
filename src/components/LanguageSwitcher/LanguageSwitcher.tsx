'use client';
import { useParams, usePathname, useRouter } from 'next/navigation';
import Image from 'next/image';
import en from 'public/assets/navbar/en.webp';
import uk from 'public/assets/navbar/ua.webp';

export const LanguageSwitcher = (): JSX.Element => {
  const { locale } = useParams();
  const pathname = usePathname();
  const router = useRouter();

  const changeLanguage = (newLocale: LanguageType): void => {
    const days = 30;
    const date = new Date();
    date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
    const expires = `; expires=${date.toUTCString()}`;
    document.cookie = `NEXT_LOCALE=${newLocale};expires=${expires};path=/`;

    if (!locale) {
      router.push(`/${newLocale}${pathname}`);
    } else {
      router.push(pathname.replace(`/${locale}`, `/${newLocale}`));
    }

    router.refresh();
  };

  return (
    locale === 'uk' ? (
      <Image
        src={uk}
        alt="Ukrainian language icon"
        width={30}
        height={30}
        aria-label="Switch to English"
        onClick={(): void => changeLanguage('en')}
      />
    ) : (
      <Image
        src={en}
        alt="English language icon"
        width={30}
        height={30}
        aria-label="Switch to Ukrainian"
        onClick={(): void => changeLanguage('uk')}
      />
    )
  );
};
