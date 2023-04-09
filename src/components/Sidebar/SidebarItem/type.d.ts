import { ReactNode } from 'react';

interface SidebarItemProps {
  state: boolean;
  item: SidebarItemType;
}

type SidebarItemType = {
  title: string;
  type?: 'menu' | 'simple';
  href: 'attestation' | 'profile' | 'session' | 'dashboard';
  icon: ReactNode;
};
