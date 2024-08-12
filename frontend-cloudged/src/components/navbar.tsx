// components/Navbar.tsx
import React from "react";
import Link from "next/link";
import Image from "next/image"; // Para usar imagens otimizadas com Next.js
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
        <Image src={logo} alt="Cloudged" width={500} height={200} />
      </Link>
    </nav>
  );
};

export default Navbar;
