import { Router } from "express";
import {
  loginUserController,
  handleLogoutUser,
  handleRegisterUser,
  refreshAccessTokenController,
} from "../controllers/auth.controller.js";

const router = Router();

router.post("/register", handleRegisterUser);
router.post("/login", loginUserController);
router.post("/logout", handleLogoutUser);
router.post("/refresh", refreshAccessTokenController);

export default router;
