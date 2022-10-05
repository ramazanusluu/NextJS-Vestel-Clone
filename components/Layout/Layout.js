import React from "react";
import Header from "../Header/Header";

function Layout({ children }) {
  return (
    <>
      <Header />
      <div>
        <main>{children}</main>
      </div>
    </>
  );
}

export default Layout;
