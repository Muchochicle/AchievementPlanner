import express from "express";
import dotenv from "dotenv";
import steamRoutes from "./routes/steam.js";
import session from "express-session";
import apiRoutes from "./routes/api.js";

dotenv.config();

const app = express();

app.use(session({

    secret: "achievementplanner",

    resave: false,

    saveUninitialized: false

}));

app.use("/auth/steam", steamRoutes);
app.use("/api", apiRoutes);

const PORT = process.env.PORT || 3000;

app.get("/", (req, res) => {

    res.json({

        success: true,

        message: "Achievement Planner Backend"

    });

});

app.listen(PORT, () => {

    console.log(`Server running on port ${PORT}`);

});