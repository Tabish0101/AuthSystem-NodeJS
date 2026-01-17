import { Router } from "express";
import {
  handleLoginUser,
  handleLogoutUser,
  handleRegisterUser,
} from "../controllers/auth.controller.js";

const router = Router();

router.post("/register", handleRegisterUser);
router.post("/login", handleLoginUser);
router.post("/logout", handleLogoutUser);

export default router;
