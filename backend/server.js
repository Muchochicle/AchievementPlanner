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
import { sendServerError } from "./utils/sendServerError.js";
import { registerProcessErrorHandlers } from "./utils/processErrorHandlers.js";
import { registerGracefulShutdown } from "./utils/gracefulShutdown.js";

// Registered first, before anything else in this file runs, so it covers
// the widest possible window - including any error during startup itself,
// not just after the server is listening. Every within-request error path
// in this codebase is already safely caught (route handlers' own
// try/catch -> sendServerError, the global Express error-handling
// middleware below for routing-layer errors) - this is the last-resort net
// for an error OUTSIDE any request's own promise chain (Finding new,
// PHASE_62_AUDIT.md): a bug in a fire-and-forget async call, a timer
// callback, or any other detached code path. See
// utils/processErrorHandlers.js for the full reasoning and the injectable
// version this wraps for testing.
registerProcessErrorHandlers();

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

const ALLOWED_ORIGINS = (process.env.CORS_ORIGIN ?? "http://127.0.0.1:5501,http://localhost:5501")
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

// Setting maxAge above only stamps each session's own cookie.expires - it
// does not, on its own, reclaim any memory. express-session's default
// MemoryStore only ever evicts a session as a side effect of something
// calling .get() on that *exact* session ID again (see
// node_modules/express-session/session/memory.js's getSession()); a
// visitor who logs in once and never returns leaves their session sitting
// in memory forever, until the process restarts (Finding 6,
// PHASE_47-59_AUDIT.md - "MemoryStore session leak"). Constructing the
// store explicitly (instead of letting express-session create an
// unreachable default internally) makes it possible to reach for the
// periodic sweep below - MemoryStore.all() is itself a normal, documented
// Store method ("Get all active sessions"), and its own implementation
// deletes any expired session it encounters while building that list, so
// calling it periodically (even with a no-op callback) prunes every
// expired session as a side effect, using only the store's public
// interface. Same "periodic sweep" pattern already used for cache.js
// (Finding 11, PHASE_51-53_AUDIT.md). This closes the memory-growth half
// of Finding 6 without introducing a new dependency or persistence
// backend - sessions still don't survive a server restart, which remains
// a genuine, still-deferred architecture decision (which persistent store
// to add) if that's ever wanted.
const sessionStore = new session.MemoryStore();

const SESSION_SWEEP_INTERVAL_MS = 60 * 60 * 1000;

const sessionSweepTimer = setInterval(() => {

    sessionStore.all(() => {});

}, SESSION_SWEEP_INTERVAL_MS);

sessionSweepTimer.unref();

app.use(session({
    store: sessionStore,
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

// Every other JSON route (/api, /api/games, /api/podiums) previously had no
// rate limit at all (Finding 19, PHASE_51-54_AUDIT.md) - most of that
// surface is already cheap in practice (indexed SQLite reads, TTL-cached
// Steam data, concurrency-bounded fan-out), but a route-level ceiling is
// still worth having as defense-in-depth against scripted abuse/scanning.
// Sized deliberately generous, well above any real usage pattern traced in
// this app: podiums.html fires 5 parallel requests on a single page load,
// game.js polls once every 60s (~15 requests/15min), and a normal catalog
// browse is a handful of requests - all comfortably inside this ceiling,
// while still bounding a scripted flood. A distinct limiter from
// authRateLimiter above so a burst of normal API traffic can never eat
// into (or be capped by) the much stricter login-attempt budget.
const apiRateLimiter = rateLimit({
    windowMs: 15 * 60 * 1000,
    limit: 300,
    standardHeaders: true,
    legacyHeaders: false,
    message: {
        success: false,
        message: "Too many requests. Please try again later."
    }
});

app.use("/api", apiRateLimiter);

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

// Catch-all for any request that matched no route above - keeps the
// response JSON, consistent with the rest of this API (server.js:72-83),
// instead of Express's default HTML "Cannot GET ..." 404 page.
app.use((req, res) => {

    res.status(404).json({

        success: false,

        message: "Not found"

    });

});

// Registered last, per Express's requirement that error-handling
// middleware (identified by its 4-argument signature) come after every
// other app.use/route mount. Errors thrown by Express's own routing
// machinery - before any route handler's own try/catch ever runs, e.g. a
// URIError from an invalid percent-escape in a :param segment - would
// otherwise fall through to Express's built-in finalhandler, which returns
// the raw stack trace (including absolute filesystem paths) as HTML to the
// client. Routing here through the same sendServerError() every other
// error path already uses keeps the response shape, logging, and generic
// message identical everywhere in this codebase.
app.use((err, req, res, next) => {

    sendServerError(res, err, "global-error-handler");

});

const PORT = process.env.PORT || 3000;

const httpServer = app.listen(PORT, () => {

    console.log(`Server running on port ${PORT}`);

});

// Without this, a failed bind (most commonly EADDRINUSE - another instance
// of this same server, from an earlier terminal/nodemon run, already
// holding the port) surfaces as an unhandled 'error' event on the
// underlying http.Server, which Node re-throws as an uncaught exception.
// Under nodemon that reads as an opaque "app crashed - waiting for file
// changes" with no indication of why. This turns that into one clear,
// actionable line instead.
httpServer.on("error", error => {

    if (error.code === "EADDRINUSE") {

        console.error(
            `Port ${PORT} is already in use - another instance of this server (or something else) is already running.\n` +
            "Stop that process first, or set a different PORT in backend/.env."
        );

    } else {

        console.error(`Server failed to start: ${error.message}`);

    }

    process.exit(1);

});

registerGracefulShutdown(httpServer);
