import React from "react";
import { Outlet, useLocation } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Navbar from "../components/Navbar";

const MainLayout: React.FC = () => {
  const location = useLocation();
  const hideNavbarPaths = ["/meeting"]; // Add paths where you want to hide the Navbar

  // Check if current path starts with any of the paths in hideNavbarPaths
  const shouldHideNavbar = hideNavbarPaths.some(path => 
    location.pathname === path || location.pathname.startsWith(`${path}?`)
  );

  return (
    <>
      {!shouldHideNavbar && <Navbar />}
      <main className="">
        <Outlet /> {/* Placeholder for nested routes */}
        <ToastContainer />
      </main>
    </>
  );
};

export default MainLayout;