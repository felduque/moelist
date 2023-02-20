import React from "react";
import { Home } from "./Pages/Home/Home";
import { Routes, Route } from "react-router-dom";
import { Navbar } from "./Components/Navbar/Navbar";
import { Anime } from "./Pages/CardDetails/CardAnime/Anime";
import { Manga } from "./Pages/CardDetails/CardManga/Manga";
import { Manhua } from "./Pages/CardDetails/CardManhua/Manhua";
import { Manhwa } from "./Pages/CardDetails/CardManhwa/Manhwa";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/anime/:id" element={<Anime />} />
        <Route path="/manga/:id" element={<Manga />} />
        <Route path="/manhua/:id" element={<Manhua />} />
        <Route path="/manhwa/:id" element={<Manhwa />} />
      </Routes>
    </>
  );
}

export default App;
