import React from "react";
import { Link } from "react-router-dom";
import "./CardItem.css";

export const CardItemSidebar = ({ id, image, title, type, demography }) => {
  return (
    <div className="col">
      <Link to={`/${type}/${id}`}>
        <div className="card-inner">
          <div className="position-relative">
            <div className="card-image position-relative">
              <img
                src={image}
                className="content-card-main-banner"
                alt={title}
              />

              <span
                className={`badge rounded-pill ${type} position-absolute pill text-uppercase fw-bold`}
              >
                {type}
              </span>
              <div className="demography text-white position-absolute bottom-0 text-center w-100">
                {demography}
              </div>
            </div>

            <p className="title-card-main text-center mt-3">{title}</p>
          </div>
        </div>
      </Link>
    </div>
  );
};
