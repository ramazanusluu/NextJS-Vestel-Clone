import React from "react";
import { ToastContainer } from "react-toastify";
import Header from "../Header/Header";
import DesktopNav from "../Navbar/DesktopNav/DesktopNav";

function Layout({ children }) {
  return (
    <div>
      <ToastContainer />
      <Header />
      <DesktopNav />
      <div>{children}</div>
    </div>
  );
}

export default Layout;
