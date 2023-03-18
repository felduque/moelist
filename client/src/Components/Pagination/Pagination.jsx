import React from "react";
import ReactPaginate from "react-paginate";
import "./Pagination.css";

export const Pagination = ({
  pages,
  onPageChange,
  totalItems,
  itemsPerPage,
  initialPage = 0,
}) => {
  return (
    totalItems > itemsPerPage && (
      <ReactPaginate
        breakLabel="..."
        className="pagination"
        nextLabel="Siguiente"
        forcePage={initialPage}
        previousLabel="Anterior"
        activeClassName="active-page"
        onPageChange={({ selected }) => onPageChange(selected)}
        pageRangeDisplayed={5}
        pageCount={pages}
        renderOnZeroPageCount={false}
      />
    )
  );
};
