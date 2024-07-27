/* eslint-disable react-refresh/only-export-components */
import App from '@/App';
import { Suspense, lazy } from 'react';
import Loader from '@/Components/Loader';
import { Navigate, createBrowserRouter } from 'react-router-dom';
import Detail from '@/Pages/Home/Detail';
import Menu from '@/Pages/Menu/index'

const Home = lazy(() => import('@/Pages/Home/index'));
const Login = lazy(() => import('@/Pages/Login/index'));


const router = createBrowserRouter([
  {
    path: '/',
    element: <Navigate to="/login" />
  },
  {
    path: '/login',
    element: (
      <Suspense fallback={<Loader />}>
        <Login />
      </Suspense>
    )
  },
  {
    path: '',
    element: <App />,
    children: [
      {
        path: '/home',
        element: (
          <Suspense fallback={<Loader />}>
            <Home />
          </Suspense>
        )
      },
      {
        path: '/detail',
        element: (
          <Suspense fallback={<Loader />}>
            <Detail />
          </Suspense>
        )
      },
      {
        path: '/menu',
        element: (
          <Suspense fallback={<Loader />}>
            <Menu />
          </Suspense>
        )
      },
    ]
  }
]);

export default router;
