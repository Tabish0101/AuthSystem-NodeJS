import { Router } from "express";
import {
  loginUserController,
  handleLogoutUser,
  handleRegisterUser,
} from "../controllers/auth.controller.js";

const router = Router();

router.post("/register", handleRegisterUser);
router.post("/login", loginUserController);
router.post("/logout", handleLogoutUser);

export default router;
