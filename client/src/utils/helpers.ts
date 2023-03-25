import { ContentType } from "./types";

export const findFavorite = (
  id: string,
  contentType: string,
  favorites: ContentType[]
) => {
  const favorite = favorites.find(
    (favorite) => favorite.id === id && favorite.contentType === contentType
  );

  if (favorite) return true;

  return false;
};
