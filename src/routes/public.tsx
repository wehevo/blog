import { HomePage, LoginPage } from '@/pages';
import BlogDetail from '@/pages/Blog/Detail';

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
  },
  {
    path: '/blog/post/:slug',
    element: <BlogDetail />,
    layout: AppLayout
  }
];
