import React from "react";
import { Outlet, useLocation } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Navbar from "../components/Navbar";

const MainLayout: React.FC = () => {
  const location = useLocation();
  const hideNavbarPaths = ["/meeting"]; // Add paths where you want to hide the Navbar

  return (
    <>
      {!hideNavbarPaths.includes(location.pathname) && <Navbar />}
      <main className="">
        <Outlet /> {/* Placeholder for nested routes */}
        <ToastContainer />
      </main>
    </>
  );
};

export default MainLayout;