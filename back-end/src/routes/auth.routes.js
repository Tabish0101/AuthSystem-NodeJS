import { Router } from "express";
import {
  loginUserController,
  logoutUserController,
  registerUserController,
  refreshAccessTokenController,
} from "../controllers/auth.controller.js";

const router = Router();

router.post("/register", registerUserController);
router.post("/login", loginUserController);
router.post("/logout", logoutUserController);
router.post("/refresh", refreshAccessTokenController);

export default router;
