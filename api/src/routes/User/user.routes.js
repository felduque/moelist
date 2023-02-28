import { Router } from "express";
import {
  createUser,
  loginUser,
  getUser,
  addFavorite,
  getFavorites,
} from "../../controllers/User/user.controller.js";

const router = Router();

router.post("/register", createUser);
router.get("/getuserid/:id", getUser);
router.post("/login", loginUser);
router.post("/addfavorite", addFavorite);
router.get("/getfavorites/:id", getFavorites);

export default router;
