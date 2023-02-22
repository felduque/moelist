import React from "react";
import { Link } from "react-router-dom";
import "./NavMobileMenu.css";
import { RiHome4Fill } from "react-icons/ri";

export const MobileMenu = () => {
  return (
    <div
      class="offcanvas offcanvas-start"
      tabindex="-1"
      id="mobileMenu"
      aria-labelledby="mobileMenu"
    >
      <div class="offcanvas-header">
        <h5 class="offcanvas-title" id="mobileMenuLabel">
          <Link
            to="/"
            className="text-black fw-bold"
            style={{ textDecoration: "none", cursor: "pointer" }}
          >
            MoeList
          </Link>
        </h5>
        <button
          type="button"
          class="btn-close"
          data-bs-dismiss="offcanvas"
          aria-label="Close"
        ></button>
      </div>
      <div class="offcanvas-body">
        <ul className="nav-list-mobile p-0 text-start">
          <Link>
            <RiHome4Fill className="mb-1" /> Explorar
          </Link>
        </ul>

        <input className="form-control" type="text" placeholder="Search" />
      </div>
    </div>
  );
};
