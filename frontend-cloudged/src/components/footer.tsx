// components/Footer.tsx
import React from "react";

const Footer = () => {
  return (
    <footer
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        padding: "0.5rem",
        color: "white",
        backgroundColor: "black",
        position: "fixed",
        width: "100%",
        bottom: 0,
        fontSize: "0.75rem",
        textAlign: "center",
      }}
    >
      <p>&copy; 2024 Cloudged. Todos os direitos reservados.</p>
    </footer>
  );
};

export default Footer;
