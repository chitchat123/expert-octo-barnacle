import { SidebarItemType } from '@components/Sidebar/SidebarItem/type';

import { DictionarySide } from '@helpers/dictionary';
import { Locale } from '@helpers/i18n';

interface SidebarProps {
  dictionary: DictionarySide;
  lang: Locale;
}
export type getListItemsType = (dict: DictionarySide) => SidebarItemType[];
