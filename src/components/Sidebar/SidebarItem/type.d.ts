interface SidebarItemProps {
  state?: boolean;
  item: SidebarItemType;
  downItem?: boolean;
}

type SidebarItemType = {
  title: string;
  type?: 'menu' | 'simple';
  href: string;
  icon: any;
};
