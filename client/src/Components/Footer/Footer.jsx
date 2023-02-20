import React from "react";
import "./Footer.css";

export const Footer = () => {
  return (
    <div className="footer-container">
      <div className="footer-container__logo">
        <img
          src="https://www.freepnglogos.com/uploads/logo-ig-png/logo-ig-png-instagram-logo-png-transparent-svg-vector-bie-supply-3.png"
          alt="logo"
        />
      </div>
      <div className="footer-copyrigh-message">
        <p>© 2023 MoeList</p>
      </div>
    </div>
  );
};
