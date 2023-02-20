import { Router } from "express";
import {
  createManhwa,
  deleteManhwa,
  getManhwas,
  getManhwasById,
  updateManhwa,
} from "../../controllers/Manhwa/Manhwa.controller.js";
const router = Router();

router.get("/manhwa", getManhwas);
router.get("/manhwa/:id", getManhwasById);
router.post("/manhwa", createManhwa);
router.patch("/manhwa/:id", updateManhwa);
router.delete("/manhwa/:id", deleteManhwa);

export default router;
