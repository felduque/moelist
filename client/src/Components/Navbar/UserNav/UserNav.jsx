import React from "react";
import { Link } from "react-router-dom";
import { FaUserAlt } from "react-icons/fa";

import "./UserNav.css";
import { useNavigate } from "react-router-dom";

export const UserNav = ({ user }) => {
  const navigate = useNavigate();

  return (
    <>
      {user ? (
        <div className="nav-list-link ">
          <Link
            to={`/user`}
            className="d-none d-sm-block navbar-container__icons__explore user-link"
          >
            <img
              className="navbar-container__icons__explore__img"
              src={user.avatar}
              alt="user.name"
            />
          </Link>

          <ul className="dropdown-menu user-dropdown bg-dark">
            <Link to="/user/" className="dropdown-item text-white">
              Ver Perfil
            </Link>
            {user.role === "Author" && (
              <li className="dropdown-item text-white">Publicar</li>
            )}
            <li className="dropdown-item text-white">Cerrar sesion</li>
          </ul>
        </div>
      ) : (
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
            <h2 className="navbar-text-explorer">Login</h2>
          </button>
        </div>
      )}
    </>
  );
};
