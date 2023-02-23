import React from "react";
import { Link } from "react-router-dom";
import "./CardItem.css";

export const CardItem = ({
  id,
  image,
  title,
  description,
  type,
  demography,
}) => {
  return (
    <div className="col">
      <Link className="text-decoration-none" to={`/${type}/${id}`}>
        <div className="card-item">
          <div className="card-inner">
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

              <div className="demography text-white position-absolute text-center w-100">
                {demography}
              </div>
            </div>

            <p className="title-card-main text-center mt-3">{title}</p>
          </div>

          <div className="hover-desc">
            <strong className="text-white">{title}</strong>
            <span
              className={`badge rounded-pill ${type} my-3 d-block pill text-uppercase fw-bold`}
            >
              {type}
            </span>
            <p className="desc">{description}</p>

            <button
              type="button"
              className={`btn text-uppercase text-white fw-bold d-block ms-auto ${type} button-desc`}
            >
              ver {type}
            </button>
          </div>
        </div>
      </Link>
    </div>
  );
};
