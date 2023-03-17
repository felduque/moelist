import React, { useState, useRef } from "react";
import { Home } from "./Pages/Home/Home";
import { Routes, Route } from "react-router-dom";
import { Navbar } from "./Components/Navbar/Navbar";
import { AuthContext } from "./utils/context/AuthContext";
import { AuthenticatedRoute } from "./Components/ProtectedRoutes/AuthenticatedRoute";
import { Navigate } from "react-router-dom";
import { AuthorOnlyRoutes } from "./Components/ProtectedRoutes/AuthorOnlyRoutes";
import { Footer } from "./Components/Footer/Footer";
import {
  AnimePage,
  Configurar,
  ExploradorPage,
  Favoritos,
  MangaPage,
  ManhuaPage,
  ManhwaPage,
  NotFoundPage,
  PrivacyPage,
  Publication,
  UserPage,
} from "./helpers/LayLoadedPages";

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
          <Route path="/anime/:id" element={<AnimePage />} />
          <Route path="/manga/:id" element={<MangaPage />} />
          <Route path="/manhua/:id" element={<ManhuaPage />} />
          <Route path="/manhwa/:id" element={<ManhwaPage />} />
          <Route path="/explorador" element={<ExploradorPage />} />
          <Route
            path="/user/:action?"
            element={
              <AuthenticatedRoute>
                <UserPage />
              </AuthenticatedRoute>
            }
          >
            <Route path="configurar" element={<Configurar />} />
            <Route path="favoritos" element={<Favoritos />} />
            <Route
              path="publicar"
              element={
                <AuthorOnlyRoutes>
                  <Publication />
                </AuthorOnlyRoutes>
              }
            />
            <Route index element={<Navigate to="configurar" />} />
          </Route>
          <Route path="/privacy-policy" element={<PrivacyPage />}></Route>
          <Route path="*" element={<NotFoundPage />} />
        </Routes>

        <footer className="container-home-grid__footer">
          <Footer />
        </footer>
      </AuthContext.Provider>
    </>
  );
}

export default App;
