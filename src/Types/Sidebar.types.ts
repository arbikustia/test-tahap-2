import IconDashboard from '@/assets/icons/chart-pie.svg';

export interface Sidebar {
  image?: string;
  path?: string;
  title: string;
  child?: SidebarDropdown[];
}

export interface SidebarDropdown {
  path: string;
  title: string;
  image?: string;
}

export const LIST_SIDEBAR: Sidebar[] = [
  {
    title: 'Dashboard',
    image: IconDashboard,
    path: '/',
  },
  {
    title: 'E-Commerce',
    image: IconDashboard,
    child: [
      {
        title: 'Shop',
        path: '/shop'
      }
    ]
  }
];
