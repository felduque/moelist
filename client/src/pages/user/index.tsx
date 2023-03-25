import { UserSidebar } from "@/components/User/UserSidebar";
import React, { useContext } from "react";
// import { NavLink } from "react-router-dom";
// import { Outlet } from "react-router-dom";
import { AuthContext } from "../../utils/context/AuthContext";
import { useAppContext } from "@/utils/state";

const UserPage = () => {
  const { user } = useAppContext();

  return <div>UserPage</div>;
};

export default UserPage;
