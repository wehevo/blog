import { DashboardPage } from '@/pages';
import { EmptyLayout } from '@/layouts/EmptyLayout';

export const privateRoutes = [
  {
    path: '/blog/dashboard',
    element: <DashboardPage />,
    layout: EmptyLayout
  }
];