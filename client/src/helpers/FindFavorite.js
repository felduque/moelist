export const FindFavorite = (id, contentType, favorites) => {
  const favorite = favorites.find(
    (favorite) => favorite.id === id && favorite.contentType === contentType
  );

  if (favorite) return true;

  return false;
};
