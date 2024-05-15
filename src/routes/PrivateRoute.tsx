import React from 'react';
import { useLocation, Navigate } from 'react-router-dom';
import { useCookies } from 'react-cookie';

export function PrivateRoute({
  children
}: React.PropsWithChildren): JSX.Element {
  const [cookies, setCookie] = useCookies(['isAuthenticated', 'visitedURL']);
  const isAuthenticated = cookies.isAuthenticated;
  const { pathname } = useLocation();
  setCookie('visitedURL', pathname);
  // console.log('PrivateRoute', isAuthenticated, pathname);
  if ((isAuthenticated !== 'success') && pathname) {
    return <Navigate to={`/blog/login?from=${pathname}`} />;
  }

  return children as JSX.Element;
}
