interface SidebarItemProps {
  state: boolean;
  item: SidebarItemType;
  downItem?: boolean;
}

type SidebarItemType = {
  title: string;
  type?: 'menu' | 'simple';
  href: 'attestation' | 'profile' | 'session' | 'dashboard' | 'news' | 'logout';
  icon: any;
};
