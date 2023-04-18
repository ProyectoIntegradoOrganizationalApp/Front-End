// React
import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from "react-router-dom";

// Pages
import Home from "./pages/home/Home";
import Dashboard from "./pages/dashboard/Dashboard";
import Profile from "./pages/profile/Profile";

// Componentes
import Nav from './components/Nav';

// CSS
import './index.css';

// Rutas
const router = createBrowserRouter([
  {
    path: "/home",
    element: <Home/>
  },
  {
    path: "/dashboard",
    element: <Dashboard/> 
  },
  {
    path: "/profile",
    element: <Profile/>
  }
]);

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <Nav/>
    <RouterProvider router={router} />
    <Footer />
  </React.StrictMode>,
);