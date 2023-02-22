import React from "react";
import { CardItemSidebar } from "../CardItem/CardItemSidebar";
import "./Sidebar.css";
export const Sidebar = () => {
  const sidebarItems = [];

  const propsA = {
    type: "anime",
  };

  for (let i = 0; i < 6; i++) {
    sidebarItems.push(<CardItemSidebar {...propsA} />);
  }

  return (
    <div className="sidebar-container-rigth">
      <div className="row row-cols-3 row-cols-lg-1 p-3 pt-5">
        {sidebarItems}
      </div>
    </div>
  );
};
