import React from "react";
import "./CardItem.css";

export const CardItemSidebar = ({ type }) => {
  return (
    <div className="col">
      <div className="card-inner">
        <div className="position-relative">
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
            <div className="demography text-white position-absolute bottom-0 text-center w-100">
              Seinen
            </div>
          </div>

          <p className="title-card-main text-center mt-3">
            One Piece efffffffe fe fe
          </p>
        </div>
      </div>

      <div></div>
    </div>
  );
};
