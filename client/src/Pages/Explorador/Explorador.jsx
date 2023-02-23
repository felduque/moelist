import React from "react";
import { ExploradorSidebar } from "../../Components/ExploradorSidebar/ExploradorSidebar";

export const Explorador = () => {
  return (
    <section className="container-fluid bg-dark">
      <div className="row px-3 py-5">
        <div className="col-lg-10">
          <input type="search" className="form-control" />
        </div>
        <div className="col-lg-2">
          <button className="btn btn-primary w-100">search</button>
        </div>
      </div>
      <div className="row">
        <div className="col-lg-3 text-white">
          <ExploradorSidebar />
        </div>
        <div className="col-lg-9 text-white"></div>
      </div>
    </section>
  );
};
