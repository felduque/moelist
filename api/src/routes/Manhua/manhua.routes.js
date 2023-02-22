import { Router } from "express";
import {
  getManhua,
  createManhua,
  deleteManhua,
  getManhuaById,
  updateManhua,
} from "../../controllers/Manhua/manhua.controller.js";
import veryToleken from "../../Helpers/valide.js";
const router = Router();

router.get("/manhuas", getManhua);
router.get("/manhua/:id", getManhuaById);
router.post("/manhua", veryToleken, createManhua);
router.patch("/manhua/:id", veryToleken, updateManhua);
router.delete("/manhua/:id", veryToleken, deleteManhua);

export default router;
