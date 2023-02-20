import { Router } from "express";
import {
  createScan,
  getScan,
  getScans,
  updateScan,
} from "../../controllers/Scan/scan.controller.js";

const router = Router();

router.post("/scan", createScan);
router.get("/scan", getScans);
router.get("/scan/:id", getScan);
router.put("/scan/:id", updateScan);

export default router;
