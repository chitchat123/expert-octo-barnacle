`server-only`;
import tmp from 'src/helpers/dictionaries/en.json';

import type { Locale } from './i18n';

export type Dictionary = typeof tmp;
export type DictionarySide = typeof tmp.sidebar;
export type DictionaryCtxMenu = typeof tmp.contextMenu;

const dictionaries = {
  en: () => import('./dictionaries/en.json').then(module => module.default),
  ua: () => import('./dictionaries/ua.json').then(module => module.default),
};

export const locales = Object.keys(dictionaries);

export const getDictionary = async (locale: Locale) => dictionaries[locale]();
