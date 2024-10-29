import React from "react";
import { Outlet, useLocation } from "react-router-dom";
import { Footer, Header, LandHeader } from "../components";
import { ScrollToTop } from "react-router-scroll-to-top";
import { ToastContainer } from "react-toastify";

const UserLayout = () => {
  const location = useLocation();



  return (
    <div className="app">
      <LandHeader />
      <ScrollToTop />
      <ToastContainer
        position="top-right"
        autoClose={2000}
        hideProgressBar={false}
        closeOnClick
      />
      <Outlet />
      <Footer />
    </div>
  );
};

export default UserLayout;
