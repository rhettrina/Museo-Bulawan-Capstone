import { useState } from 'react'
import { RouterProvider } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext';
import router from './routes/MainRoutes';
import './index.css'

const App = () => (
  <AuthProvider>
    <RouterProvider router={router} />
  </AuthProvider>
);

export default App

