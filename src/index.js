import React from 'react';
import ReactDOM from 'react-dom/client';
import { createHashRouter, RouterProvider } from 'react-router-dom'
import './index.css';
import App from './App.js';

const router = createHashRouter([
  {
    path: '/*',
    element: <App />,
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);