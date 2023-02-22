import React from "react";
import { Link } from "react-router-dom";
import "./CardItem.css";

export const CardItem = ({ id, image, title, description, type }) => {
  return (
    <div className="col">
      <Link to={`/${type}/${id}`}>
        <div className="card-item">
          <div className="card-inner">
            <div className="card-image position-relative">
              <img
                src="https://picsum.photos/200/300"
                className="content-card-main-banner"
                alt="One Piece"
              />

              <span
                className={`badge rounded-pill ${type} position-absolute pill text-uppercase fw-bold`}
              >
                {type}
              </span>

              <div className="demography text-white position-absolute text-center w-100">
                Seinen
              </div>
            </div>

            <p className="title-card-main text-center mt-3">
              One Piece efffffffe fe fe
            </p>
          </div>

          <div className="hover-desc">
            <strong className="text-white">One Piece</strong>
            <span
              className={`badge rounded-pill ${type} my-3 d-block pill text-uppercase fw-bold`}
            >
              {type}
            </span>
            <p className="desc">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Et sit
              accusamus dolores. Sequi, aliquam ipsum! Cum debitis quaerat
              praesentium harum reiciendis doloremque repudiandae, architecto
              illum iusto repellat officia, laboriosam mollitia.
            </p>

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
