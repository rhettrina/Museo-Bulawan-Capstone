// routes/MainRoutes.jsx
import { createBrowserRouter } from 'react-router-dom';
import LandingLayout from '../layouts/LandingLayout';
import AdminLayout from '../layouts/AdminLayout';
import ProtectedRoute from '../auth/ProtectedRoute';
import Home from '../pages/public/home';
import About from '../pages/public/about';
import Login from '../pages/public/login';
import AdminRoutes from './AdminRoutes';

const router = createBrowserRouter([
  {
    element: <LandingLayout />,
    children: [
      { path: '/', element: <Home /> },
      { path: '/about', element: <About /> },
      { path: '/login', element: <Login /> },
      {
        path: '/admin',
        element: <ProtectedRoute />,
        children: [
          {
            element: <AdminLayout />,
            children: AdminRoutes
          }
        ]
      }
    ]
  }
]);

export default router;