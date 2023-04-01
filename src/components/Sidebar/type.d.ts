import { SidebarItemType } from '@components/Sidebar/SidebarItem/type';

import { DictionarySide } from '@helpers/dictionary';

interface SidebarProps {
  dictionary: DictionarySide;
}
export type getListItemsType = (dict: DictionarySide) => SidebarItemType[];
