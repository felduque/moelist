import { Router } from "express";
import {
  createAnime,
  deleteAnime,
  getAnimeById,
  updateAnime,
  getAllInfo,
} from "../../controllers/Anime/anime.controller.js";
import veryToleken from "../../Helpers/valide.js";

const router = Router();

router.get("/animes", getAllInfo);
router.get("/anime/:id", getAnimeById);
router.post("/anime", veryToleken, createAnime);
router.delete("/anime/:id", veryToleken, deleteAnime);
router.patch("/anime/:id", veryToleken, updateAnime);

export default router;
