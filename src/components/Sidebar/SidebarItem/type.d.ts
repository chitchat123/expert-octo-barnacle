import { ReactNode } from 'react';

interface SidebarItemProps {
  title: string;
  type: string;
  href: string;
  icon: ReactNode;
  state: boolean;
}
