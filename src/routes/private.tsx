import { DashboardPage } from '@/pages';
import { AppLayout } from '@/layouts/AppLayout';

export const privateRoutes = [
  {
    path: '/blog/dashboard',
    element: <DashboardPage />,
    layout: AppLayout
  }
];