import React from "react";
import Header from "../Header/Header";
import DesktopNav from "../Navbar/DesktopNav/DesktopNav";

function Layout({ children }) {
  return (
    <>
      <Header />
      <DesktopNav />
      <div>{children}</div>
    </>
  );
}

export default Layout;
