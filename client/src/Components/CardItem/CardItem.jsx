import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./CardItem.css";
import { useContext } from "react";
import { AuthContext } from "../../utils/context/AuthContext";
import { FindFavorite } from "../../helpers/FindFavorite";
import { CardItemAction } from "./CardItemAction";

export const CardItem = ({
  id,
  image,
  title,
  description,
  demography,
  index,
  contentType,
  action = "add",
  showHover = true,
}) => {
  const { user, favorites } = useContext(AuthContext);

  const isLastOfRow = (index + 1) % 6 === 0;
  const isAdded = FindFavorite(id, contentType, favorites);

  return (
    <div className="col mb-4">
      <div className="card-item text-decoration-none">
        <div className="card-inner text-center">
          <div className="card-image position-relative mb-2">
            <Link to={`/${contentType}/${id}`}>
              <img
                src={image}
                className="content-card-main-banner"
                alt={title}
              />

              <div className="demography text-white position-absolute text-center w-100">
                {demography}
              </div>

              <span
                className={`badge rounded-pill ${contentType} position-absolute pill text-uppercase fw-bold`}
              >
                {contentType}
              </span>
            </Link>

            {user && (
              <CardItemAction
                isAdded={isAdded}
                userId={user.id}
                type={contentType}
                contentId={id}
                action={action}
              />
            )}
          </div>

          <Link
            to={`/${contentType}/${id}`}
            className="fw-bold text-white text-center w-100"
          >
            {title}
          </Link>
        </div>

        {showHover && (
          <div
            className="hover-desc"
            style={{
              right: isLastOfRow ? "100%" : "unset",
              left: !isLastOfRow ? "100%" : "unset",
            }}
          >
            <strong className="text-white">{title}</strong>
            <span
              className={`badge rounded-pill ${contentType} my-3 d-block pill text-uppercase fw-bold`}
            >
              {contentType}
            </span>
            <p className="desc">{description}</p>

            <button
              type="button"
              className={`btn text-uppercase text-white fw-bold d-block ms-auto ${contentType} button-desc`}
            >
              ver {contentType}
            </button>
          </div>
        )}
      </div>
    </div>
  );
};
