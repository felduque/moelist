import { useState, useEffect, Dispatch, SetStateAction } from "react";
import jwt_decode from "jwt-decode";
import { getUserById } from "@/utils/api/user";
import { User } from "@/utils/types";
import { useAppContext } from "@/utils/state";

export const useAuth = (): {
  user?: User;
  setToken: Dispatch<SetStateAction<string | null | undefined>>;
  loading: boolean;
} => {
  const controller = new AbortController();
  const [loading, setLoading] = useState(true);
  const [token, setToken] = useState<string | null>();
  const [user, setUser] = useState<User>();
  const authContext = useAppContext();

  useEffect(() => {
    setToken(localStorage.getItem("token"));
  }, []);

  useEffect(() => {
    setLoading(true);
    if (token) {
      const decoded: any = jwt_decode(token);
      if (decoded.exp * 1000 < Date.now()) {
        localStorage.removeItem("token");
      }
      getUserById(decoded.id)
        .then((res) => {
          setUser(res?.user);
          authContext?.setUser(res?.user!);
          authContext?.setFavorites(res?.favorites || []);
          setTimeout(() => setLoading(false), 700);
        })
        .catch((err) => {
          setTimeout(() => setLoading(false), 700);
        });
    }
    setTimeout(() => setLoading(false), 700);
    return () => {
      controller.abort();
    };
  }, [token]);

  return { user, setToken, loading };
};
