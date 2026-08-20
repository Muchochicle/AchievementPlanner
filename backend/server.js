import express from "express";
import dotenv from "dotenv";
import session from "express-session";
import cors from "cors";
import helmet from "helmet";
import rateLimit from "express-rate-limit";

import steamRoutes from "./routes/steam.js";
import apiRoutes from "./routes/api.js";
import gamesRoutes from "./routes/games.js";
import podiumsRoutes from "./routes/podiums.js";

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

// Every session cookie is HMAC-signed with this value (see express-session
// below) - too short/guessable and an attacker who can brute-force or
// guess it can forge valid session cookies outright, defeating every other
// session protection in this file. 32 characters is a conservative floor,
// well under the 64-character value backend/.env.example's own generation
// command produces, but well above a value like "changeme" or "secret123"
// slipping through the presence-only check above.
const MIN_SESSION_SECRET_LENGTH = 32;

if (process.env.SESSION_SECRET.trim().length < MIN_SESSION_SECRET_LENGTH) {

    console.error(
        `SESSION_SECRET is too short (must be at least ${MIN_SESSION_SECRET_LENGTH} characters).\n` +
        "Use a long, random value - e.g. `node -e \"console.log(require('crypto').randomBytes(32).toString('hex'))\"`."
    );

    process.exit(1);

}

const app = express();

// Only trust the reverse proxy's forwarded-proto header when explicitly
// configured - required for COOKIE_SECURE=true to work correctly behind a
// TLS-terminating load balancer, but must stay off by default so a plain
// local connection is never misread as already being HTTPS. Also what
// express-rate-limit below uses to identify a real client IP behind a
// proxy - trusting exactly one hop (not permissive/trust-all), so it
// never triggers that package's own misconfiguration warning.
if (process.env.TRUST_PROXY === "true") {

    app.set("trust proxy", 1);

}

// Baseline security headers (X-Content-Type-Options, no X-Powered-By,
// etc.) for a JSON+redirect-only API - no HTML is ever rendered here, so
// most of helmet's defaults are inert but harmless. The one override that
// matters: this API is deliberately called cross-origin (the frontend runs
// on its own origin - see CORS_ORIGIN below), so helmet's default
// same-origin Cross-Origin-Resource-Policy would block those legitimate
// fetches; cors() below already handles origin checking properly, so CORP
// is relaxed to cross-origin rather than duplicating (and conflicting
// with) that check.
app.use(helmet({
    crossOriginResourcePolicy: { policy: "cross-origin" }
}));

const ALLOWED_ORIGINS = (process.env.CORS_ORIGIN ?? "http://127.0.0.1:5500,http://localhost:5500")
    .split(",")
    .map(origin => origin.trim())
    .filter(Boolean);

app.use(cors({
    origin: ALLOWED_ORIGINS,
    credentials: true
}));

// Every response here can reflect the caller's own session (login state,
// personalized game/profile data via req.session.user) - Cache-Control:
// no-store keeps an intermediate proxy or shared cache from ever serving
// one visitor's session-derived response to another, and keeps a shared/
// public computer's browser cache from resurfacing a previous visitor's
// logged-in state after they've logged out or navigated away. Nothing in
// this API is designed to be cached (no ETags/conditional GET support
// anywhere), so this has no functional cost.
app.use((req, res, next) => {

    res.setHeader("Cache-Control", "no-store");

    next();

});

// Bounds how long an idle session can live, so the in-memory session store
// can actually prune expired sessions instead of growing without limit
// (see the rate limiter below for the other half of that fix - together
// they stop a simple repeated-request loop against /auth/steam/login from
// exhausting server memory). 24h is a reasonable "stay logged in for the
// day" window without being effectively permanent.
const SESSION_MAX_AGE_MS = 24 * 60 * 60 * 1000;

app.use(session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: false,
    cookie: {
        sameSite: "lax",
        secure: process.env.COOKIE_SECURE === "true",
        maxAge: SESSION_MAX_AGE_MS
    }
}));

// /auth/steam/login writes to the session (the oauthState nonce) on every
// hit, which persists a new session in the store even for a visitor who
// never completes login - repeatedly requesting this one endpoint is
// otherwise a trivial way to grow server memory without bound. This caps
// it well above what any real login flow (including a few retries) would
// ever need.
const authRateLimiter = rateLimit({
    windowMs: 15 * 60 * 1000,
    limit: 20,
    standardHeaders: true,
    legacyHeaders: false,
    message: {
        success: false,
        message: "Too many authentication attempts. Please try again later."
    }
});

app.use("/auth/steam", authRateLimiter, steamRoutes);

app.use("/api", apiRoutes);

app.use("/api/games", gamesRoutes);

app.use("/api/podiums", podiumsRoutes);

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
