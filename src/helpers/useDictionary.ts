import { useEffect, useState } from 'react';

import { getDictionary } from '@helpers/dictionary';
import { Locale } from '@helpers/i18n';

export const useDictionary = (locale: Locale) => {
  const [dict, setDict] = useState<{ [key: string]: string } | undefined>(
    undefined
  );
  useEffect(() => {
    getDictionary(locale || 'en').then(res => setDict(res));
  }, []);
  return dict;
};
