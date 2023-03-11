import { Router } from "express";

import {
  filtersGeneral,
  filterTitle,
} from "../../controllers/Filter/filter.controller.js";

const router = Router();

// Routes

router.get("/filter", filtersGeneral);
router.get("/filter/title", filterTitle);

export default router;
