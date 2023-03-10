import { Router } from "express";
import {
  createUser,
  loginUser,
  getUser,
  addFavorite,
  getFavorites,
  deleteFavorite,
} from "../../controllers/User/user.controller.js";

const router = Router();

router.post("/register", createUser);
router.get("/getuserid/:id", getUser);
router.post("/login", loginUser);
router.post("/addfavorite", addFavorite);
router.get("/getfavorites/:id", getFavorites);
router.delete("/deletefavorite", deleteFavorite);

export default router;
