const transliterate = (text: string): string => {
  const transliterationMap: Record<string, string> = {
    а: 'a', б: 'b', в: 'v', г: 'h', ґ: 'g',
    д: 'd', е: 'e', є: 'ie', ж: 'zh', з: 'z',
    и: 'y', і: 'i', ї: 'i', й: 'i', к: 'k',
    л: 'l', м: 'm', н: 'n', о: 'o', п: 'p',
    р: 'r', с: 's', т: 't', у: 'u', ф: 'f',
    х: 'kh', ц: 'ts', ч: 'ch', ш: 'sh', щ: 'shch',
    ю: 'iu', я: 'ia', '\'': '', ь: '', '’': '',
    ...Object.entries({
      А: 'A', Б: 'B', В: 'V', Г: 'H', Ґ: 'G',
      Д: 'D', Е: 'E', Є: 'Ye', Ж: 'Zh', З: 'Z',
      И: 'Y', І: 'I', Ї: 'Yi', Й: 'Y', К: 'K',
      Л: 'L', М: 'M', Н: 'N', О: 'O', П: 'P',
      Р: 'R', С: 'S', Т: 'T', У: 'U', Ф: 'F',
      Х: 'Kh', Ц: 'Ts', Ч: 'Ch', Ш: 'Sh', Щ: 'Shch',
      Ю: 'Yu', Я: 'Ya',
    }).reduce((acc, [key, value]) => ({ ...acc, [key]: value }), {}),
  };

  return text.split('').map(char => transliterationMap[char] || char)
    .join('');
};

export const generateId = (text: string): string => {
  return transliterate(text).toLowerCase()
    .replace(/\s+/g, '-')
    .replace(/[^\w-]+/g, '');
};
