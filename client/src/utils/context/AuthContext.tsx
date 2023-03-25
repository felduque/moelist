import { createContext } from "react";
import { ContentType, User } from "../types";

type AuthContextType = {
  user?: User;
  setUser: (user: User) => void;
  favorites: ContentType[];
  setFavorites: (favorites: ContentType[]) => void;
  mobileMenuCloseRef?: any;
};

export const AuthContext = createContext<AuthContextType>({
  setUser: () => {},
  favorites: [],
  setFavorites: () => {},
});
