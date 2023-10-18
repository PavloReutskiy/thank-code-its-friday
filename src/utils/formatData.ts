import { format, isThisYear } from 'date-fns';

const formatData = (dateString: string): string => {
  const date = new Date(dateString);

  if (isThisYear(date)) {
    return format(date, 'MMM d');
  }

  return format(date, 'MMM d \'\'yy');
};

export default formatData;
