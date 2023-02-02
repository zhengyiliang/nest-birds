import Result404 from '@/pages/404';
import React, { lazy } from 'react';
import { RouteObject, useRoutes, Navigate } from 'react-router-dom';

const Layout = lazy(() => import('@/layout'));
const Home = lazy(() => import('@/pages/Home'));
const Blog = lazy(() => import('@/pages/Blog'));

const routes: RouteObject[] = [
  {
    path: '/home',
    // index: true,
    // exact: true,
    element: <Home />,
  },
  {
    path: '/',

    element: <Navigate to="/home" />,
  },
  {
    path: '/',
    // exact: true,
    element: <Layout />,
    children: [
      {
        path: '/blog',
        element: <Blog />,
      },
      // {
      //   path: '/*',
      //   element: <Result404 />,
      // },
    ],
  },
  {
    path: '/*',
    element: <Result404 />,
  },
  // {
  //   path: '*'
  // }
];

export default () => useRoutes(routes);
