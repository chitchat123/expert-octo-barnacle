`server-only`;
import type { Locale } from './i18n';

const dictionaries = {
  en: () => import('./dictionaries/en.json').then(module => module.default),
  ua: () => import('./dictionaries/ua.json').then(module => module.default),
};

export const getDictionary = async (locale: Locale) => dictionaries[locale]();
