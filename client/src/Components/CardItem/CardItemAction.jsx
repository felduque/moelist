import React, { useContext } from "react";
import { HiHeart, HiOutlineHeart } from "react-icons/hi";
import { BsTrashFill } from "react-icons/bs";
import { addFavorite } from "../../Api/User/user";
import { AuthContext } from "../../utils/context/AuthContext";
import "./CardItem.css";

export const CardItemAction = ({
  action,
  contentId,
  type,
  isAdded,
  userId,
}) => {
  const { setFavorites, favorites } = useContext(AuthContext);

  const addToFavorites = async () => {
    const resp = await addFavorite(type, contentId, userId);
    const { contentType, id, demography, title, description } = resp.data;

    if (resp.status === 200)
      setFavorites([
        {
          id,
          contentType,
          demography,
          title,
          description,
        },
        ...favorites,
      ]);
  };

  return isAdded ? (
    action === "add" ? (
      <HiHeart className="position-absolute action added" />
    ) : (
      <BsTrashFill className="position-absolute action" />
    )
  ) : (
    <HiOutlineHeart
      onClick={() => addToFavorites()}
      className="position-absolute action"
    />
  );
};
