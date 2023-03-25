import { useAppContext } from "@/utils/state";
import { FC } from "react";

export const UserSidebar = () => {
  const { user } = useAppContext();

  return <div>UserSidebar</div>;
};
