import React from "react";
import "./Search.css";

import { Link } from "react-router-dom";

export const SearchItem = ({ id, image, title, description, contentType }) => {
  return (
    <div className="row mb-3">
      <Link to={`/${contentType}/${id}`} className="col-3">
        <img className="img-fluid search-img" src={image} alt={title} />
      </Link>
      <div to={`/${contentType}/${id}`} className="col-9 text-white text-start">
        <Link className="fw-bold">{title}</Link>
        <p className="search_desc">{description}</p>
      </div>
    </div>
  );
};
