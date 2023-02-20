import { Router } from "express";
import {
  createAnime,
  getAnime,
  deleteAnime,
  getAnimeById,
  updateAnime,
} from "../../controllers/Anime/anime.controller.js";

const router = Router();

router.post("/anime", createAnime);
router.get("/anime", getAnime);
router.get("/anime/:id", getAnimeById);
router.delete("/anime/:id", deleteAnime);
router.patch("/anime/:id", updateAnime);

export default router;
