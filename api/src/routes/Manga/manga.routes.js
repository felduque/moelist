import { Router } from "express";
import {
  createManga,
  getMangaById,
  getMangas,
  updateManga,
  deleteManga,
} from "../../controllers/Manga/manga.controller.js";
const router = Router();

router.get("/manga", getMangas);
router.get("/manga/:id", getMangaById);
router.post("/manga", createManga);
router.patch("/manga/:id", updateManga);
router.delete("/manga/:id", deleteManga);
export default router;
