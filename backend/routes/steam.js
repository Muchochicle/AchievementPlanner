import express from "express";
import {
    login,
    callback,
    logout
} from "../controllers/steamController.js";

const router = express.Router();

router.get("/login", login);

router.get("/return", callback);

router.post("/logout", logout);

export default router;