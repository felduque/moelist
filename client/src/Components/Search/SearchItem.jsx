import React from "react";
import "./Search.css";

export const SearchItem = ({ id, image, title, description }) => {
  return (
    <div className="row mb-3">
      <div className="col-3">
        <img className="img-fluid search-img" src={image} alt={title} />
      </div>
      <div className="col-9 text-white text-start">
        <h5 className="fw-bold">{title}</h5>
        <p className="search_desc">{description}</p>
      </div>
    </div>
  );
};
