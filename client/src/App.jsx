import React, { useState, useRef } from "react";
import { Home } from "./Pages/Home/Home";
import { Routes, Route } from "react-router-dom";
import { Navbar } from "./Components/Navbar/Navbar";
import { Anime } from "./Pages/CardDetails/CardAnime/Anime";
import { Manga } from "./Pages/CardDetails/CardManga/Manga";
import { Manhua } from "./Pages/CardDetails/CardManhua/Manhua";
import { Manhwa } from "./Pages/CardDetails/CardManhwa/Manhwa";
import { NotFound } from "./Pages/NotFound/NotFound";
import { Explorador } from "./Pages/Explorador/Explorador";
import { AuthContext } from "./utils/context/AuthContext";
import { UserPage } from "./Pages/User/UserPage";
import { AuthenticatedRoute } from "./Components/ProtectedRoutes/AuthenticatedRoute";
import { UserPublication } from "./Components/User/UserPublication";
import { UserFavorites } from "./Components/User/UserFavorites";
import { UserSettings } from "./Components/User/UserSettings";
import { Navigate } from "react-router-dom";
import { AuthorOnlyRoutes } from "./Components/ProtectedRoutes/AuthorOnlyRoutes";

function App() {
  const [user, setUser] = useState();
  const [favorites, setFavorites] = useState([]);
  const mobileMenuCloseRef = useRef();

  return (
    <>
      <AuthContext.Provider
        value={{ user, setUser, favorites, setFavorites, mobileMenuCloseRef }}
      >
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/anime/:id" element={<Anime />} />
          <Route path="/manga/:id" element={<Manga />} />
          <Route path="/manhua/:id" element={<Manhua />} />
          <Route path="/manhwa/:id" element={<Manhwa />} />
          <Route path="/explorador" element={<Explorador />} />
          <Route
            path="/user/:action?"
            element={
              <AuthenticatedRoute>
                <UserPage />
              </AuthenticatedRoute>
            }
          >
            <Route path="configurar" element={<UserSettings />} />
            <Route path="favoritos" element={<UserFavorites />} />
            <Route
              path="publicar"
              element={
                <AuthorOnlyRoutes>
                  <UserPublication />
                </AuthorOnlyRoutes>
              }
            />
            <Route index element={<Navigate to="configurar" />} />
          </Route>

          <Route path="*" element={<NotFound />} />
        </Routes>
      </AuthContext.Provider>
    </>
  );
}

export default App;
