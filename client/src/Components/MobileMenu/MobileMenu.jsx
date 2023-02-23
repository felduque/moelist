import React from "react";
import { Link } from "react-router-dom";
import "./NavMobileMenu.css";
import { RiHome4Fill } from "react-icons/ri";
import { FaUserAlt } from "react-icons/fa";
import { IoIosClose } from "react-icons/io";

export const MobileMenu = () => {
  return (
    <div
      className="offcanvas offcanvas-start bg-dark"
      id="mobileMenu"
      aria-labelledby="mobileMenu"
    >
      <div className="offcanvas-header">
        <h5 className="offcanvas-title" id="mobileMenuLabel">
          <Link
            to="/"
            className="text-white fw-bold"
            style={{ textDecoration: "none", cursor: "pointer" }}
          >
            MoeList
          </Link>
        </h5>
        <IoIosClose
          type="button"
          className="btn p-0 text-white fs-1"
          data-bs-dismiss="offcanvas"
          aria-label="Close"
        />
      </div>
      <div className="offcanvas-body">
        <ul className="nav-list-mobile p-0 text-start ">
          <Link>
            <RiHome4Fill className="mb-1" /> Explorar
          </Link>
          <li className="nav-list-mobile p-0 text-start fw-bold">
            <button
              type="button"
              className="btn p-0 fw-bold text-white"
              data-bs-toggle="modal"
              data-bs-target="#modal"
            >
              <FaUserAlt className="mb-1" /> Cuenta
            </button>
          </li>
        </ul>

        <input
          className="form-control d-inline-block mt-1"
          type="text"
          placeholder="Search"
        />
      </div>
    </div>
  );
};
