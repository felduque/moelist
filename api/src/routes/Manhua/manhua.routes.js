import { Router } from "express";
import {
  getManhua,
  createManhua,
  deleteManhua,
  getManhuaById,
  updateManhua,
} from "../../controllers/Manhua/manhua.controller.js";

const router = Router();

router.get("/manhua", getManhua);
router.get("/manhua/:id", getManhuaById);
router.post("/manhua", createManhua);
router.patch("/manhua/:id", updateManhua);
router.delete("/manhua/:id", deleteManhua);

export default router;
