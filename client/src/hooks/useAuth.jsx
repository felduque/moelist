import { useContext, useState, useEffect } from "react";
import { AuthContext } from "../utils/context/AuthContext";
import jwt_decode from "jwt-decode";
import { getUserById } from "../Api/User/user";

export const useAuth = () => {
  const tokenStorage = localStorage.getItem("token");
  const controller = new AbortController();
  const [loading, setLoading] = useState(true);
  const [token, setToken] = useState(tokenStorage);
  const { user, setUser } = useContext(AuthContext);

  useEffect(() => {
    setLoading(true);
    if (token) {
      const decoded = jwt_decode(token);
      if (decoded.exp * 1000 < Date.now()) {
        localStorage.removeItem("token");
      }
      getUserById(decoded.id)
        .then((res) => {
          console.log(res);
          setUser(res);
          setTimeout(() => setLoading(false), 700);
        })
        .catch((err) => {
          console.log(err);
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
