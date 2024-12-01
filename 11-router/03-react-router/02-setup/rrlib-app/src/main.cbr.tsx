import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { RouterProvider, createBrowserRouter, Navigate } from 'react-router';
import './index.css';
import App from './App.tsx';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
  },
  {
    path: '*',
    element: <Navigate to="/" replace />,
  },
]);

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
