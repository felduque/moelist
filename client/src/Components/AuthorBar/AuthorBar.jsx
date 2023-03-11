import React from "react";
import { FaUser } from "react-icons/fa";

export const AuthorBar = ({ author, avatar }) => {
  return (
    <div
      className="bg-green 
      autor-bar
      "
    >
      <FaUser className="me-2" />
      <span className="fw-bold author"> {author}</span>
    </div>
  );
};
