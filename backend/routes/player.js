import express from "express";

import { getProgress, putProgress } from "../controllers/playerProgressController.js";

const router = express.Router();

// Both require a logged-in session - enforced inside the controller (401
// "Not logged in"), same convention as GET /api/profile and
// GET /api/profile/stats.
router.get("/progress", getProgress);
router.put("/progress", putProgress);

export default router;
