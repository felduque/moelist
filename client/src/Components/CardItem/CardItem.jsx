import React from "react";
import { Link } from "react-router-dom";
import "./CardItem.css";
import { HiOutlineHeart } from "react-icons/hi";
import { useContext } from "react";
import { AuthContext } from "../../utils/context/AuthContext";

export const CardItem = ({
  id,
  image,
  title,
  description,
  type,
  demography,
  index,
}) => {
  const { user } = useContext(AuthContext);

  const isLastOfRow = index && (index + 1) % 6 === 0;

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

              {user && (
                <HiOutlineHeart className="position-absolute favorite-heart" />
              )}
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

          <div
            className="hover-desc"
            style={{
              right: isLastOfRow ? "100%" : "unset",
              left: !isLastOfRow ? "100%" : "unset",
            }}
          >
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
