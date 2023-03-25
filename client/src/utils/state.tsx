import {
  PropsWithChildren,
  useContext,
  Dispatch,
  SetStateAction,
  useState,
  useRef,
} from "react";
import { AuthContext } from "./context/AuthContext";
import { ContentType, User } from "./types";

export function AppWrapper({ children }: PropsWithChildren) {
  const [user, setUser] = useState<User>();
  const [favorites, setFavorites] = useState<ContentType[]>([]);
  const mobileMenuCloseRef = useRef<HTMLDivElement>(null);

  return (
    <AuthContext.Provider
      value={{
        user,
        setUser,
        favorites,
        setFavorites,
        mobileMenuCloseRef,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export function useAppContext() {
  return useContext(AuthContext);
}
