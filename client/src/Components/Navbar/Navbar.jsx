import React from "react";
import "./Navbar.css";
import { RiHome4Fill } from "react-icons/ri";
import { FaBars, FaUserAlt } from "react-icons/fa";
import { BsDiscord } from "react-icons/bs";
import { Link } from "react-router-dom";

import { LoginRegisterModal } from "../LoginRegisterModal/LoginRegisterModal";

import { MobileMenu } from "../MobileMenu/MobileMenu";
import { useState } from "react";
import { Search } from "../Search/Search";

export const Navbar = () => {
  const [formType, setFormType] = useState("login");

  return (
    <>
      <div className="container-fluid navbar-container py-3">
        <div className="row align-items-center">
          <div className="offset-xl-3 col-9 col-xl-6 d-flex align-items-center ">
            <div className="navbar-container__logo">
              <Link
                to="/"
                style={{ textDecoration: "none", cursor: "pointer" }}
              >
                <h1 className="title-logo-moelist-navbar">MoesList</h1>
              </Link>
            </div>
            <div className="navbar-container__search d-none d-sm-block">
              <Search />
            </div>
            <div className="nav-list text-center">
              <Link
                to="/explorador"
                className="nav-list-link  d-none d-sm-block"
              >
                <div className="navbar-container__icons__home">
                  <RiHome4Fill className="navbar-container__icons_home__icon" />
                </div>
                <div className="navbar-container__icons__explore">
                  <h2 className="navbar-text-explorer">Explorar</h2>
                </div>
              </Link>
              <div className="nav-list-link  d-none d-sm-block">
                <div className="navbar-container__icons__home">
                  <FaUserAlt className="navbar-container__icons_home__icon" />
                </div>
                <button
                  type="button"
                  className="text-decoration-none btn p-0"
                  data-bs-toggle="modal"
                  data-bs-target="#modal"
                >
                  <h2 className="navbar-text-explorer">Cuenta</h2>
                </button>
              </div>
            </div>
          </div>
          <div className="col-3 d-flex justify-content-end align-items-center">
            <div className="nav-list-link d-sm-none">
              <button
                className="btn p-0"
                type="button"
                data-bs-toggle="offcanvas"
                data-bs-target="#mobileMenu"
                aria-controls="offcanvas"
              >
                <FaBars className="navbar-container__icons_home__icon" />
              </button>

              <MobileMenu />
            </div>
            <a
              href="https://discord.gg/UfdnmZ5DJE"
              target="_blank"
              className="nav-list-link discord"
            >
              <BsDiscord className="navbar-container__icons_home__icon " />
            </a>
          </div>
        </div>
      </div>

      <LoginRegisterModal formType={formType} setFormType={setFormType} />
    </>
  );
};
