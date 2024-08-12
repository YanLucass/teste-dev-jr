// components/Navbar.tsx
import React from "react";
import Link from "next/link";
import logo from "../../public/images/logo.png";

const Navbar = () => {
  return (
    <nav
      style={{
        display: "flex",
        alignItems: "center",
        padding: "1rem",
        backgroundColor: "black",
      }}
    >
      <Link href="/">
        <img src={logo.src} alt="Cloudged" width={500} height={200} />
      </Link>
    </nav>
  );
};

export default Navbar;
