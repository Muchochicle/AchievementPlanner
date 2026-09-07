import express from "express";

import { getProgress, putProgress, deleteProgress } from "../controllers/playerProgressController.js";

const router = express.Router();

// All three require a logged-in session - enforced inside the controller
// (401 "Not logged in"), same convention as GET /api/profile and
// GET /api/profile/stats. DELETE wipes only this account's stored
// progression row (see deleteProgress / deletePlayerProgress); the session
// itself is left untouched, so the visitor stays logged in.
router.get("/progress", getProgress);
router.put("/progress", putProgress);
router.delete("/progress", deleteProgress);

export default router;
