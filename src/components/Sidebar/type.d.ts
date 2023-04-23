import { SidebarItemType } from '@components/Sidebar/SidebarItem/type';

import { Dictionary, DictionarySide } from '@helpers/dictionary';
import { Locale } from '@helpers/i18n';

interface SidebarProps {
  dictionary: Dictionary;
  lang: Locale;
}
export type getListItemsType = (dict: DictionarySide) => SidebarItemType[];
