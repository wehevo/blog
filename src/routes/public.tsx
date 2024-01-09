import {
  HomePage, LoginPage
} from '@/pages';

import { AppLayout } from '@/layouts/AppLayout';
import { EmptyLayout } from '@/layouts/EmptyLayout';

export const publicRoutes = [
  {
    path: '/blog',
    element: <HomePage />,
    layout: AppLayout
  },
  {
    path: '/blog/login',
    element: <LoginPage />,
    layout: EmptyLayout
  }
];
