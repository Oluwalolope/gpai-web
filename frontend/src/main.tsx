// src/main.tsx
import React from 'react';
import ReactDOM from 'react-dom/client';
import { RouterProvider } from 'react-router-dom';
import router from './routes';
import './index.css';
import UserDashboardContextProvider from './store/UserDashboardContextProvider';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <UserDashboardContextProvider>
      <RouterProvider router={router} />
    </UserDashboardContextProvider>
  </React.StrictMode>
);
