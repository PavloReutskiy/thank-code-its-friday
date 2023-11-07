import { IncomingMessage } from 'http';

const getInitialLanguage = (req?: IncomingMessage): string => {
  let cookieValue = '';

  if (req) {
    const cookieHeader = req.headers.cookie;
    cookieValue = Array.isArray(cookieHeader) ? cookieHeader.join(';') : cookieHeader ?? '';
  } else if (typeof document !== 'undefined') {
    const { cookie } = document;
    cookieValue = cookie;
  }

  const nextLocaleCookie = cookieValue.split('; ').find(row => row.startsWith('NEXT_LOCALE='));
  return nextLocaleCookie ? nextLocaleCookie.split('=')[1] : 'en';
};

export default getInitialLanguage;
