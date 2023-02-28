import { Router } from "express";
import {
  createUser,
  loginUser,
  getUser,
} from "../../controllers/User/user.controller.js";

const router = Router();

router.post("/register", createUser);
router.get("/getuserid/:id", getUser);
router.post("/login", loginUser);

export default router;
