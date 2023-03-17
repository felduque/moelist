import React from "react";
import { Link } from "react-router-dom";
import "./Footer.css";

export const Footer = () => {
  return (
    <>
      <div className="footer-container py-3">
        <div className="footer-copyrigh-message m-0">
          <p className="m-0">© 2023 MoeList</p>
        </div>
        <Link to="/privacy-policy">Privacy Policy</Link>
      </div>
    </>
  );
};
