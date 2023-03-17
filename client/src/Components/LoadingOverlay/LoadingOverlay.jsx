import React from "react";
import "./LoadingOverlay.css";
import ScaleLoader from "react-spinners/ScaleLoader";

export const LoadingOverlay = ({ children, loading = true }) => {
  return (
    <>
      {loading && (
        <div className="loading-overlay">
          <div className="loading-spinner">
            <ScaleLoader color="var(--primary-color)" />
          </div>
        </div>
      )}
      {children}
    </>
  );
};
