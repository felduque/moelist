import React, { useContext } from "react";
import { HiHeart, HiOutlineHeart } from "react-icons/hi";
import { BsTrashFill } from "react-icons/bs";
import { addFavorite, deleteFavorite, getFavorites } from "../../Api/User/user";
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

  const removeFromFavorites = async () => {
    const deleted = await deleteFavorite(type, contentId, userId);

    if (deleted.status === 200) {
      const favCopy = [...favorites];
      const favIndex = favCopy.findIndex(
        (fav) => fav.id == contentId && fav.contentType == type
      );
      favCopy.splice(favIndex, 1);

      setFavorites(favCopy);
    }
  };

  return isAdded ? (
    action === "add" ? (
      <HiHeart className="position-absolute action added" />
    ) : (
      <BsTrashFill
        className="position-absolute action"
        onClick={() => removeFromFavorites()}
      />
    )
  ) : (
    <HiOutlineHeart
      onClick={() => addToFavorites()}
      className="position-absolute action"
    />
  );
};
