// React
import React from 'react';
import { useState } from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from "react-router-dom";

// Pages
import Home from "./pages/home/Home";
import Dashboard from "./pages/dashboard/Dashboard";
import AboutUs from "./pages/aboutus/AboutUs";
import Profile from "./pages/profile/Profile";

// Components
import Nav from './shared/components/Nav';
import Footer from './shared/components/Footer';

// CSS
import './index.css';

// Routes
const router = createBrowserRouter(
  [
    {
      path: "/home",
      element: <Home/>
    },
    {
      path: "/dashboard",
      element: <Dashboard/> 
    },
    {
      path: "/aboutus",
      element: <AboutUs/>
    }
  ]
);
const routes = {
  home: {
    link: "/home",
    name: "Home"
  },
  dashboard: {
    link: "/dashboard",
    name: "Dashboard"
  },
  aboutus: {
    link: "/aboutus",
    name: "About Us"
  }
};



ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <Nav 
      home={ routes.home }
      dashboard={ routes.dashboard }
      aboutus={ routes.aboutus }
    />
    <RouterProvider router={router} />
    {/* <Footer /> */}
  </React.StrictMode>,
);