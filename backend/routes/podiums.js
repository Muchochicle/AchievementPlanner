import express from "express";

import { getGamePodium, getGlobalPodium, getProgressionPodium } from "../controllers/podiumController.js";

const router = express.Router();

router.get("/game/:appid", getGamePodium);
router.get("/global/:category", getGlobalPodium);
router.get("/progression/:metric", getProgressionPodium);

export default router;
