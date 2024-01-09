import { NotFound } from '@/pages';
import { EmptyLayout } from '@/layouts/EmptyLayout';

export const fallbackRoute = [
  {
    path: '*',
    element: <NotFound />,
    layout: EmptyLayout
  }
];
