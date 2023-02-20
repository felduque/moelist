import React from "react";
import "./Navbar.css";
import { RiHome4Fill } from "react-icons/ri";
import { Link } from "react-router-dom";
export const Navbar = () => {
  return (
    <div className="navbar-container">
      <div className="navbar-container__logo">
        <Link to="/" style={{ textDecoration: "none", cursor: "pointer" }}>
          <h1 className="title-logo-moelist-navbar">MoesList</h1>
        </Link>
      </div>
      <div className="navbar-container__search">
        <input
          className="navbar-container__search__input"
          type="text"
          placeholder="Search"
        />
      </div>

      <div className="navbar-container__icons__home">
        <RiHome4Fill className="navbar-container__icons_home__icon" />
      </div>
      <div className="navbar-container__icons__explore">
        <h2 className="navbar-text-explorer">Explorar</h2>
      </div>
      <div className="navbar-container__icons__profile">
        <h2 className="navbar-text-profile">Profile</h2>
      </div>
    </div>
  );
};
