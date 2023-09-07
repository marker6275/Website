import React from 'react';
import ReactDOM from 'react-dom/client';
import { createHashRouter, RouterProvider } from 'react-router-dom'
import './index.css';
import Home from './pages/Home';
import Music from './pages/Music';
import Contact from './pages/Contact';
import Future from './pages/Future';

const router = createHashRouter([
  {
    path: '/',
    element: <Home/>
  },
  {
    path: '/music',
    element: <Music/> 
  },
  {
    path: '/contact',
    element: <Contact/>
  },
  {
    path: '/future',
    element: <Future/>
  }
])

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);