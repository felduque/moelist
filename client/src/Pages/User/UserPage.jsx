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
          <ul class="nav nav-pills nav-fill nav-user">
            <li class="nav-item me-4 bg-dark">
              <Link
                to="/user/settings"
                onClick={() => setTab("configurar")}
                class={`nav-link ${currentTab === "configurar" && "active"}`}
                aria-current="page"
                href="#"
              >
                Configurar Perfil
              </Link>
            </li>
            <li class="nav-item bg-dark">
              <Link
                to="/user/favoritos"
                onClick={() => setTab("favorito")}
                class={`nav-link ${currentTab === "favorito" && "active"}`}
                href="#"
              >
                Favoritos
              </Link>
            </li>
            {role === "Author" && (
              <Link to="/user/publicar" class="nav-item">
                <a
                  onClick={() => setTab("publicar")}
                  class={`nav-link ${currentTab === "publicar" && "active"}`}
                  href="#"
                >
                  publicar
                </a>
              </Link>
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
