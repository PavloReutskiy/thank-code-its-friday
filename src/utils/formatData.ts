import { format, isThisYear } from 'date-fns';
import { enUS, uk } from 'date-fns/locale';

const formatData = (dateString: string, locale: string | string[]): string => {
  const date = new Date(dateString);
  const formatLocale = locale === 'uk' ? uk : enUS;
  const dateFormat = locale === 'uk' ? 'd MMM' : 'MMM d';

  if (isThisYear(date)) {
    return format(
      date, dateFormat,
      { locale: formatLocale },
    );
  }

  return format(
    date, `${dateFormat} ''yy`,
    { locale: formatLocale },
  );
};

export default formatData;
