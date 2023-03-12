import React, { useContext } from "react";
import "./Search.css";

import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../utils/context/AuthContext";

export const SearchItem = ({ id, image, title, description, contentType }) => {
  const { mobileMenuCloseRef } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/${contentType}/${id}`);
    mobileMenuCloseRef.current.click();
  };

  return (
    <div className="row mb-3">
      <div className="col-3">
        <img
          className="img-fluid search-img"
          src={image}
          role="button"
          alt={title}
          onClick={() => handleClick()}
        />
      </div>
      <div className="col-9 text-white text-start">
        <h5 role="button" className="fw-bold" onClick={() => handleClick()}>
          {title}
        </h5>
        <p className="search_desc">{description}</p>
      </div>
    </div>
  );
};
