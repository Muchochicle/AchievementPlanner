import express from "express";
import {
    login,
    callback,
    profile
} from "../controllers/steamController.js";

const router = express.Router();

router.get("/login", login);

router.get("/return", callback);

router.get("/profile", profile);

export default router;