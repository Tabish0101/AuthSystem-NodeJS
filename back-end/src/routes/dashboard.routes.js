import { Router } from "express";
import { getProfileController } from "../controllers/dashboard.controller.js";

const router = Router();

router.get("/profile", getProfileController);

export default router;
