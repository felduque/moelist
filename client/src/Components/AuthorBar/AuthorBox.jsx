import React from "react";

export const AuthorBox = ({ type, author }) => {
  return (
    <>
      <div className={`py-2 fs-5 mb-4 fw-bold ${type}`}> {author} </div>
    </>
  );
};
