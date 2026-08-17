import express from "express";
import dotenv from "dotenv";
import session from "express-session";
import cors from "cors";

import steamRoutes from "./routes/steam.js";
import apiRoutes from "./routes/api.js";
import gamesRoutes from "./routes/games.js";

dotenv.config();

const REQUIRED_ENV_VARS = [
    "STEAM_API_KEY",
    "STEAM_RETURN_URL",
    "STEAM_REALM",
    "SESSION_SECRET"
];

const missingEnvVars = REQUIRED_ENV_VARS.filter(
    name => !process.env[name]?.trim()
);

if (missingEnvVars.length > 0) {

    console.error(
        `Missing required environment variable(s): ${missingEnvVars.join(", ")}.\n` +
        "Copy backend/.env.example to backend/.env and fill in the values."
    );

    process.exit(1);

}

const app = express();

const ALLOWED_ORIGINS = [
    "http://127.0.0.1:5500",
    "http://localhost:5500"
];

app.use(cors({
    origin: ALLOWED_ORIGINS,
    credentials: true
}));

app.use(session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: false,
    cookie: {
        sameSite: "lax",
        secure: false
    }
}));

app.use("/auth/steam", steamRoutes);

app.use("/api", apiRoutes);

app.use("/api/games", gamesRoutes);

app.get("/", (req, res) => {

    res.json({
        success: true,
        message: "Achievement Planner Backend"
    });

});

app.get("/api/me", (req, res) => {

    if (!req.session.user) {

        return res.json({
            logged: false
        });

    }

    res.json({
        logged: true,
        user: req.session.user
    });

});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {

    console.log(`Server running on port ${PORT}`);

});