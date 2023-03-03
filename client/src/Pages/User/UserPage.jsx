import React, { useState, useContext } from "react";
import { Link, Outlet } from "react-router-dom";
import { UserSidebar } from "../../Components/User/UserSidebar";
import { AuthContext } from "../../utils/context/AuthContext";

import "./UserPage.css";

export const UserPage = () => {
  const [currentTab, setTab] = useState("configurar");
  const { user } = useContext(AuthContext);

  const { id, userName, email, role, avatar } = user;
  return (
    <section className="container-fluid py-5 px-5 text-white">
      <div className="row gap">
        <div className="col-3 ">
          <UserSidebar {...{ userName, email, avatar }} />
        </div>
        <div className="col-9 ps-5">
          <ul className="nav nav-pills nav-fill nav-user">
            <li className="nav-item me-4 bg-dark">
              <Link
                to="/user/settings"
                onClick={() => setTab("configurar")}
                className={`nav-link ${
                  currentTab === "configurar" && "active"
                }`}
                aria-current="page"
              >
                Configurar Perfil
              </Link>
            </li>
            <li className="nav-item bg-dark">
              <Link
                to="/user/favoritos"
                onClick={() => setTab("favorito")}
                className={`nav-link ${currentTab === "favorito" && "active"}`}
              >
                Favoritos
              </Link>
            </li>
            {role === "Author" && (
              <li className="nav-item bg-dark ms-4">
                <Link
                  to="/user/publicar"
                  onClick={() => setTab("publicar")}
                  className={`nav-link ${
                    currentTab === "publicar" && "active"
                  }`}
                >
                  publicar
                </Link>
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
