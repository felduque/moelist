import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import { Outlet } from "react-router-dom";
import { UserSidebar } from "../../Components/User/UserSidebar";
import { AuthContext } from "../../utils/context/AuthContext";
import "./UserPage.css";

export const UserPage = () => {
  const { user } = useContext(AuthContext);

  console.log(user);

  return (
    <section className="container-fluid py-5 px-3 p-sm-5 text-white ">
      <div className="row gap">
        <div className="col-12 col-xl-3 ">
          <UserSidebar
            userName={user?.userName}
            avatar={user?.avatar}
            email={user?.email}
          />
        </div>
        <div className="col-12 col-xl-9 px-3 pt-5 pt-xl-0 ps-xl-5">
          <ul className="nav nav-pills nav-fill nav-user gap-3 gap-sm-4">
            <li className="nav-item bg-dark">
              <NavLink
                to="/user/configurar"
                className={`nav-link ${({ isActive }) => isActive && "active"}`}
                aria-current="page"
              >
                Configurar Perfil
              </NavLink>
            </li>
            <li className="nav-item bg-dark">
              <NavLink
                to="/user/favoritos"
                className={`nav-link ${({ isActive }) => isActive && "active"}`}
              >
                Favoritos
              </NavLink>
            </li>
            {user?.role === "Author" && (
              <li className="nav-item bg-dark">
                <NavLink
                  to="/user/publicar"
                  className={`nav-link ${({ isActive }) =>
                    isActive && "active"}`}
                >
                  publicar
                </NavLink>
              </li>
            )}
          </ul>
          <div className="py-4">
            <Outlet />
          </div>
        </div>
      </div>
    </section>
  );
};
