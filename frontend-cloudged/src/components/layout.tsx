// components/Layout.tsx
import React from "react";
import Navbar from "./navbar";
import Footer from "./footer";
const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      <Navbar />
      <main>{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
