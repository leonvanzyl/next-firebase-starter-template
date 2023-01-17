import React from "react";
import Footer from "./Footer";
import Meta from "./Meta";
import Nav from "./Nav";

function Layout({ children }) {
  return (
    <>
      <Meta />
      <Nav />
      {children}
      <Footer />
    </>
  );
}

export default Layout;
