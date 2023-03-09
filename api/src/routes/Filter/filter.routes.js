import { Router } from "express";

import { filtersGeneral } from "../../controllers/Filter/filter.controller.js";

const router = Router();

// Routes

router.get("/filter", filtersGeneral);

export default router;
