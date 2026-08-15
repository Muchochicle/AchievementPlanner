import express from "express";
import {
    login,
    callback
} from "../controllers/steamController.js";

const router = express.Router();

router.get("/login", login);

router.get("/return", callback);

export default router;