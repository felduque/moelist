import React, { useContext, useRef } from "react";
import { Link } from "react-router-dom";
import "./NavMobileMenu.css";
import { RiHome4Fill } from "react-icons/ri";
import { FaUserAlt } from "react-icons/fa";
import { IoIosClose } from "react-icons/io";
import { Search } from "../Search/Search";
import { AuthContext } from "../../utils/context/AuthContext";

export const MobileMenu = () => {
  const { user } = useContext(AuthContext);
  const closeMobile = useRef();

  return (
    <div
      className="offcanvas offcanvas-start bg-dark"
      id="mobileMenu"
      aria-labelledby="mobileMenu"
    >
      <div className="offcanvas-inner">
        <div className="offcanvas-header">
          <h5
            className="offcanvas-title"
            id="mobileMenuLabel"
            onClick={() => closeMobile.current.click()}
          >
            <Link
              to="/"
              className="text-white fw-bold"
              style={{ textDecoration: "none", cursor: "pointer" }}
            >
              MoeList
            </Link>
          </h5>

          <button
            className="btn p-0 text-white fs-1"
            data-bs-dismiss="offcanvas"
            aria-label="Close"
            ref={closeMobile}
          >
            <IoIosClose type="button" />
          </button>
        </div>
        <div className="offcanvas-body">
          <ul className="nav-list-mobile p-0 text-start ">
            <li onClick={() => closeMobile.current.click()}>
              <Link to={"/explorador"} className="text-white">
                <RiHome4Fill className="mb-1 " /> Explorar
              </Link>
            </li>

            <li
              className="nav-list-mobile p-0  fw-bold"
              onClick={closeMobile.current.click()}
            >
              {user ? (
                <Link
                  to={"/user"}
                  type="button"
                  className="btn p-0 fw-bold text-white text-start"
                >
                  <FaUserAlt className="mb-1" /> Cuenta
                </Link>
              ) : (
                <button
                  type="button"
                  className="btn p-0 fw-bold text-white"
                  data-bs-toggle="modal"
                  data-bs-target="#modal"
                >
                  <FaUserAlt className="mb-1" /> Cuenta
                </button>
              )}
            </li>
          </ul>

          <Search />
        </div>
      </div>
    </div>
  );
};
