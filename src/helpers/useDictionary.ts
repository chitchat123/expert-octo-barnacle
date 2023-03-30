import { useEffect, useState } from 'react';

import { Dictionary, getDictionary } from '@helpers/dictionary';
import { Locale } from '@helpers/i18n';

export const useDictionary = (locale: Locale) => {
  const [dict, setDict] = useState<Dictionary | undefined>(undefined);
  useEffect(() => {
    getDictionary(locale || 'en').then(res => setDict(res as Dictionary));
  }, []);
  return dict;
};
