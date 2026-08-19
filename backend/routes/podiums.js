import express from "express";

import { getGamePodium, getGlobalPodium } from "../controllers/podiumController.js";

const router = express.Router();

router.get("/game/:appid", getGamePodium);
router.get("/global/:category", getGlobalPodium);

export default router;
