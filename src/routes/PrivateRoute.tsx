import React from 'react';
import { useLocation, Navigate } from 'react-router-dom';
import { getCookie, setCookie } from '@/utils/cookies';

export function PrivateRoute({
  children
}: React.PropsWithChildren): JSX.Element {
  const isAuthenticated = getCookie('isAuthenticated');
  const { pathname } = useLocation();
  setCookie('visitedURL', pathname);
  console.log('PrivateRoute', isAuthenticated, pathname);
  if ((isAuthenticated === false || isAuthenticated === undefined) && pathname) {
    return <Navigate to={`/blog/login?from=${pathname}`} />;
  }

  return children as JSX.Element;
}
