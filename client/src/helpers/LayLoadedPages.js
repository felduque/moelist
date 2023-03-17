import loadable from "@loadable/component";

export const UserPage = loadable(() => import("../Pages/User/UserPage"), {
  resolveComponent: (components) => components.UserPage,
});

export const ExploradorPage = loadable(
  () => import("../Pages/Explorador/Explorador"),
  {
    resolveComponent: (components) => components.Explorador,
  }
);

export const Configurar = loadable(
  () => import("../Components/User/UserSettings"),
  {
    resolveComponent: (components) => components.UserSettings,
  }
);

export const Favoritos = loadable(
  () => import("../Components/User/UserFavorites"),
  {
    resolveComponent: (components) => components.UserFavorites,
  }
);

export const Publication = loadable(
  () => import("../Components/User/UserPublication"),
  {
    resolveComponent: (components) => components.UserPublication,
  }
);

export const AnimePage = loadable(
  () => import("../Pages/CardDetails/CardAnime/Anime"),
  {
    resolveComponent: (components) => components.Anime,
  }
);

export const MangaPage = loadable(
  () => import("../Pages/CardDetails/CardManga/Manga"),
  {
    resolveComponent: (components) => components.Manga,
  }
);

export const ManhuaPage = loadable(
  () => import("../Pages/CardDetails/CardManhua/Manhua"),
  {
    resolveComponent: (components) => components.Manhua,
  }
);

export const ManhwaPage = loadable(
  () => import("../Pages/CardDetails/CardManhwa/Manhwa"),
  {
    resolveComponent: (components) => components.Manhwa,
  }
);

export const PrivacyPage = loadable(() => import("../Pages/Privacy/Privacy"), {
  resolveComponent: (components) => components.Manhwa,
});

export const NotFoundPage = loadable(
  () => import("../Pages/NotFound/NotFound"),
  {
    resolveComponent: (components) => components.Manhwa,
  }
);
