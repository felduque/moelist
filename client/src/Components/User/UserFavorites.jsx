import React, { useEffect, useState } from "react";
import { getFavorites } from "../../Api/User/user";
import { CardItem } from "../CardItem/CardItem";

export const UserFavorites = () => {
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {}, []);

  return (
    <div className="row row-cols-1 row-cols-xl-6">
      {favorites.map((favorite, index) => (
        <CardItem key={favorite.id} {...favorite} index={index} />
      ))}
    </div>
  );
};
