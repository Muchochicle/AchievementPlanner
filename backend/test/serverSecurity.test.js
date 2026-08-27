import { test } from "node:test";
import assert from "node:assert";
import { spawn } from "node:child_process";
import path from "node:path";
import { fileURLToPath } from "node:url";

// Integration tests for the security middleware wired up in server.js
// (helmet, cors, express-session cookie options, express-rate-limit).
// None of this is unit-testable in isolation - it's only real once it's
// actually mounted on the real Express app - so, matching server.test.js's
// existing pattern, each test spawns the real, unmodified server.js as a
// child process (exactly what `npm start` does) and talks to it over real
// HTTP. Every test gets its own dedicated child process/port so that
// shared in-memory state (the rate limiter's per-IP counters, the session
// store) never leaks between tests or makes results depend on run order.

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const SERVER_PATH = path.join(__dirname, "..", "server.js");
const BACKEND_DIR = path.join(__dirname, "..");

// Distinct from the 3000 default and from the ephemeral PORT=0 used in
// server.test.js's own startup test, so a stray leftover process from a
// prior run can never collide with these.
let nextPort = 34561;

const ALLOWED_ORIGIN = "http://127.0.0.1:5500";
const FRONTEND_URL = "http://127.0.0.1:5500";

function startServer(envOverrides = {}) {

    const port = nextPort++;

    const child = spawn("node", [SERVER_PATH], {
        cwd: BACKEND_DIR,
        env: {
            ...process.env,
            PORT: String(port),
            CORS_ORIGIN: ALLOWED_ORIGIN,
            FRONTEND_URL,
            COOKIE_SECURE: "false",
            ...envOverrides
        },
        stdio: ["ignore", "pipe", "pipe"]
    });

    let stderr = "";
    child.stderr.on("data", chunk => { stderr += chunk; });

    const ready = new Promise((resolve, reject) => {

        let stdout = "";

        const timeout = setTimeout(() => {
            reject(new Error(`server did not start in time.\nstdout: ${stdout}\nstderr: ${stderr}`));
        }, 5000);

        child.stdout.on("data", chunk => {

            stdout += chunk;

            if (stdout.includes("Server running on port")) {

                clearTimeout(timeout);
                resolve();

            }

        });

        child.on("error", reject);

        child.on("exit", code => {

            if (code !== null) {

                clearTimeout(timeout);
                reject(new Error(`server exited early with code ${code}.\nstderr: ${stderr}`));

            }

        });

    });

    return { child, port, baseUrl: `http://127.0.0.1:${port}`, ready };

}

async function withServer(envOverrides, fn) {

    const server = startServer(envOverrides);

    try {

        await server.ready;
        await fn(server);

    } finally {

        server.child.kill();

    }

}

test("helmet sets baseline security headers and removes X-Powered-By", async () => {

    await withServer({}, async ({ baseUrl }) => {

        const res = await fetch(`${baseUrl}/`);

        assert.strictEqual(res.headers.get("x-content-type-options"), "nosniff");
        assert.strictEqual(res.headers.get("x-powered-by"), null, "helmet should strip Express's default X-Powered-By header");

        // The one deliberate override from helmet's defaults: this API is
        // called cross-origin by design (see server.js's comment), so CORP
        // must be relaxed rather than left at helmet's same-origin default.
        assert.strictEqual(res.headers.get("cross-origin-resource-policy"), "cross-origin");

    });

});

test("every response carries Cache-Control: no-store, so session-derived responses are never cached by a proxy or shared browser", async () => {

    await withServer({}, async ({ baseUrl }) => {

        const rootRes = await fetch(`${baseUrl}/`);
        assert.strictEqual(rootRes.headers.get("cache-control"), "no-store");

        const meRes = await fetch(`${baseUrl}/api/me`);
        assert.strictEqual(meRes.headers.get("cache-control"), "no-store");

        const loginRes = await fetch(`${baseUrl}/auth/steam/login`, { redirect: "manual" });
        assert.strictEqual(loginRes.headers.get("cache-control"), "no-store");

    });

});

test("CORS: the configured legitimate origin is echoed back with credentials allowed", async () => {

    await withServer({}, async ({ baseUrl }) => {

        const res = await fetch(`${baseUrl}/`, {
            headers: { Origin: ALLOWED_ORIGIN }
        });

        assert.strictEqual(res.headers.get("access-control-allow-origin"), ALLOWED_ORIGIN);
        assert.strictEqual(res.headers.get("access-control-allow-credentials"), "true");

        const body = await res.json();
        assert.strictEqual(body.success, true, "the legitimate origin's request should still reach the real handler");

    });

});

test("CORS regression: a second, comma-separated configured origin is also allowed", async () => {

    const SECOND_ORIGIN = "http://localhost:5500";

    await withServer({ CORS_ORIGIN: `${ALLOWED_ORIGIN},${SECOND_ORIGIN}` }, async ({ baseUrl }) => {

        const res = await fetch(`${baseUrl}/`, {
            headers: { Origin: SECOND_ORIGIN }
        });

        assert.strictEqual(res.headers.get("access-control-allow-origin"), SECOND_ORIGIN);
        assert.strictEqual(res.headers.get("access-control-allow-credentials"), "true");

    });

});

test("CORS regression: a non-configured origin is not granted CORS access", async () => {

    await withServer({}, async ({ baseUrl }) => {

        const res = await fetch(`${baseUrl}/`, {
            headers: { Origin: "http://evil.example.com" }
        });

        // cors() rejects silently at the header level (no browser-enforced
        // block happens server-side) - the tell is the absence of the
        // allow-origin header, which is what makes a real browser's fetch
        // fail client-side for this origin.
        assert.strictEqual(res.headers.get("access-control-allow-origin"), null);

    });

});

test("session cookie carries a ~24h expiry (Max-Age), HttpOnly, and SameSite attributes", async () => {

    await withServer({}, async ({ baseUrl }) => {

        // /auth/steam/login always writes to the session (the oauthState
        // nonce), so it's guaranteed to issue a fresh session cookie.
        const res = await fetch(`${baseUrl}/auth/steam/login`, { redirect: "manual" });

        const setCookieHeaders = res.headers.getSetCookie();
        const sessionCookie = setCookieHeaders.find(c => c.startsWith("connect.sid="));

        assert.ok(sessionCookie, "expected a connect.sid session cookie to be set");

        const attributes = sessionCookie.split(";").map(part => part.trim());

        // express-session's Cookie class serializes the configured maxAge
        // as an absolute `Expires` date (see session/cookie.js), not a
        // `Max-Age` attribute - so the effective lifetime is derived from
        // Expires minus the response's own Date header.
        const expiresAttr = attributes.find(a => a.toLowerCase().startsWith("expires="));
        assert.ok(expiresAttr, "session cookie should declare an Expires date");

        const expires = new Date(expiresAttr.split("=")[1]);
        const responseDate = new Date(res.headers.get("date"));
        const effectiveMaxAgeSeconds = (expires.getTime() - responseDate.getTime()) / 1000;

        const EXPECTED_MAX_AGE_SECONDS = 24 * 60 * 60;

        assert.ok(
            Math.abs(effectiveMaxAgeSeconds - EXPECTED_MAX_AGE_SECONDS) <= 5,
            `expected an effective lifetime near ${EXPECTED_MAX_AGE_SECONDS}s, got ${effectiveMaxAgeSeconds}s`
        );

        assert.ok(attributes.some(a => a.toLowerCase() === "httponly"), "session cookie should be HttpOnly");
        assert.ok(attributes.some(a => a.toLowerCase() === "samesite=lax"), "session cookie should be SameSite=Lax");
        assert.ok(!attributes.some(a => a.toLowerCase() === "secure"), "session cookie should not be Secure when COOKIE_SECURE=false");

    });

});

test("with COOKIE_SECURE=true behind a trusted proxy over HTTPS, the session cookie is SameSite=None and Secure (required for the real split-origin frontend/backend deployment)", async () => {

    await withServer({ COOKIE_SECURE: "true", TRUST_PROXY: "true" }, async ({ baseUrl }) => {

        // X-Forwarded-Proto: https is exactly what Railway's real
        // TLS-terminating edge proxy sends on every request - TRUST_PROXY
        // makes express trust it, which is what lets issecure() (see
        // express-session/index.js) treat this as a real HTTPS connection
        // and actually issue a `secure: true` cookie instead of silently
        // withholding it (the other COOKIE_SECURE=true test above).
        const res = await fetch(`${baseUrl}/auth/steam/login`, {
            redirect: "manual",
            headers: { "X-Forwarded-Proto": "https" }
        });

        const setCookieHeaders = res.headers.getSetCookie();
        const sessionCookie = setCookieHeaders.find(c => c.startsWith("connect.sid="));

        assert.ok(sessionCookie, "expected a connect.sid session cookie to be set over a trusted-proxy HTTPS connection");

        const attributes = sessionCookie.split(";").map(part => part.trim().toLowerCase());

        assert.ok(attributes.some(a => a === "samesite=none"), "session cookie should be SameSite=None when COOKIE_SECURE=true, so the split-origin frontend's cross-site fetch(credentials:include) calls actually carry it");
        assert.ok(attributes.some(a => a === "secure"), "session cookie should be Secure when COOKIE_SECURE=true (required for SameSite=None to be honored at all)");

    });

});

test("with COOKIE_SECURE=true, a plain-HTTP request gets no session cookie at all (fails closed, never sent insecurely)", async () => {

    await withServer({ COOKIE_SECURE: "true" }, async ({ baseUrl }) => {

        // express-session (see issecure() in express-session/index.js) only
        // ever sends a `secure: true` cookie over a connection it can
        // verify is actually HTTPS (directly, or via a trusted proxy hop).
        // This plain-HTTP test connection is neither, so the correct,
        // secure behavior is to silently withhold the cookie entirely -
        // never to send it anyway without the Secure attribute, which
        // would defeat the point of COOKIE_SECURE.
        const res = await fetch(`${baseUrl}/auth/steam/login`, { redirect: "manual" });

        assert.strictEqual(res.status, 302, "the request should still succeed/redirect normally");

        const setCookieHeaders = res.headers.getSetCookie();
        const sessionCookie = setCookieHeaders.find(c => c.startsWith("connect.sid="));

        assert.strictEqual(sessionCookie, undefined, "no session cookie should be set over plain HTTP when COOKIE_SECURE=true");

    });

});

test("/auth/steam/login is rate-limited: requests beyond the window's limit get 429 with a safe JSON body", async () => {

    await withServer({}, async ({ baseUrl }) => {

        const SAFETY_CAP = 30;
        let sawTooMany = false;
        let successCount = 0;

        for (let i = 0; i < SAFETY_CAP && !sawTooMany; i++) {

            const res = await fetch(`${baseUrl}/auth/steam/login`, { redirect: "manual" });

            if (res.status === 429) {

                sawTooMany = true;

                const body = await res.json();
                assert.strictEqual(body.success, false);
                assert.match(body.message, /Too many authentication attempts/);

            } else {

                assert.strictEqual(res.status, 302, "requests within the limit should still redirect to Steam as normal");
                successCount++;

            }

        }

        assert.ok(sawTooMany, `expected a 429 within ${SAFETY_CAP} requests, but every response redirected normally`);
        assert.ok(successCount >= 1 && successCount <= 20, `expected the limit (20) to be reached before the 429, got ${successCount} successes first`);

    });

});

test("rate limiter reports standard RateLimit-* headers that count down toward the limit", async () => {

    await withServer({}, async ({ baseUrl }) => {

        const first = await fetch(`${baseUrl}/auth/steam/login`, { redirect: "manual" });
        const second = await fetch(`${baseUrl}/auth/steam/login`, { redirect: "manual" });

        assert.strictEqual(first.headers.get("ratelimit-limit"), "20");
        assert.strictEqual(first.headers.get("ratelimit-remaining"), "19");
        assert.strictEqual(second.headers.get("ratelimit-remaining"), "18");

    });

});

test("rate limiting on /auth/steam/login does not affect unrelated routes", async () => {

    await withServer({}, async ({ baseUrl }) => {

        for (let i = 0; i < 25; i++) {

            await fetch(`${baseUrl}/auth/steam/login`, { redirect: "manual" });

        }

        // By now /auth/steam/login is well past its limit of 20 - a
        // completely different route must be unaffected, proving the
        // limiter is scoped to /auth/steam and not global.
        const res = await fetch(`${baseUrl}/`);

        assert.strictEqual(res.status, 200);

        const body = await res.json();
        assert.strictEqual(body.success, true);

    });

});

// Finding 19 (PHASE_51-54_AUDIT.md) - /api, /api/games, and /api/podiums
// previously had zero rate limiting at all. The new limiter is
// deliberately generous (300/15min) so it's never realistically hit by
// legitimate traffic - these tests verify it's correctly wired up and
// correctly scoped, not that it actually 429s (300 real requests would
// make this suite needlessly slow for no extra confidence; the exact same
// express-rate-limit mechanism is already proven to 429 correctly by the
// /auth/steam/login tests above).

test("the general API rate limiter reports its own (300/15min) RateLimit-* headers, independent of the stricter auth limiter", async () => {

    await withServer({}, async ({ baseUrl }) => {

        const first = await fetch(`${baseUrl}/api/me`);
        const second = await fetch(`${baseUrl}/api/me`);

        assert.strictEqual(first.headers.get("ratelimit-limit"), "300");
        assert.strictEqual(first.headers.get("ratelimit-remaining"), "299");
        assert.strictEqual(second.headers.get("ratelimit-remaining"), "298");

    });

});

test("the general API rate limiter's counter is shared across /api, /api/games, and /api/podiums - one budget for the whole JSON API, not one per router", async () => {

    await withServer({}, async ({ baseUrl }) => {

        const first = await fetch(`${baseUrl}/api/me`);
        const second = await fetch(`${baseUrl}/api/games`);
        const third = await fetch(`${baseUrl}/api/podiums/global/games-owned`);

        assert.strictEqual(first.headers.get("ratelimit-remaining"), "299");
        assert.strictEqual(second.headers.get("ratelimit-remaining"), "298", "a request to a different sub-router under /api must decrement the same shared counter");
        assert.strictEqual(third.headers.get("ratelimit-remaining"), "297", "a request to yet another sub-router under /api must still decrement the same shared counter");

    });

});

test("the general API rate limiter does not affect /auth/steam/login or / (root), which are outside the /api prefix", async () => {

    await withServer({}, async ({ baseUrl }) => {

        // Warm up the /api counter first.
        await fetch(`${baseUrl}/api/me`);

        const loginRes = await fetch(`${baseUrl}/auth/steam/login`, { redirect: "manual" });
        assert.strictEqual(loginRes.headers.get("ratelimit-limit"), "20", "must still report the stricter auth limiter's own limit, unaffected by the /api one");

        const rootRes = await fetch(`${baseUrl}/`);
        assert.strictEqual(rootRes.status, 200);
        assert.strictEqual(rootRes.headers.get("ratelimit-limit"), null, "the root route is outside /api entirely and must carry no rate-limit headers at all");

    });

});

// Phase 65: server.js's CORS_ORIGIN and steamController.js's FRONTEND_URL
// both fall back to a hardcoded default when the (optional) env var is
// unset, but that hardcoded default used to be port 5500 - which doesn't
// match this project's actual documented/configured local dev port, 5501
// (see .env.example's own "Local (default): ...5501" comments and
// .vscode/settings.json's liveServer.settings.port). A fresh setup that
// only fills in the required env vars and leaves these two optional ones
// unset got silently broken CORS and a post-login redirect to the wrong
// origin. This can't be exercised as a real end-to-end request the way
// the rest of this file's tests are - the machine actually running this
// suite already has its own backend/.env with CORS_ORIGIN/FRONTEND_URL
// explicitly set (as any real dev setup should), so a spawned child
// process's env can't be made to omit them without also bypassing dotenv
// itself. Instead, this asserts directly on the source text for the one
// thing that matters: the literal fallback default matches the documented
// port - the same "read the real file from disk, assert on its content"
// pattern already used by test/skipLink.test.js for an equivalent
// can't-easily-exercise-at-runtime case.
test("CORS_ORIGIN and FRONTEND_URL fallback defaults use port 5501, matching .env.example's documented local dev port", async () => {

    const fs = await import("node:fs");

    const serverSource = fs.readFileSync(path.join(BACKEND_DIR, "server.js"), "utf-8");
    const steamControllerSource = fs.readFileSync(path.join(BACKEND_DIR, "controllers", "steamController.js"), "utf-8");

    assert.match(
        serverSource,
        /process\.env\.CORS_ORIGIN\s*\?\?\s*"http:\/\/127\.0\.0\.1:5501,http:\/\/localhost:5501"/,
        "CORS_ORIGIN's fallback default should be the documented 5501 origins, not a stale 5500"
    );

    assert.match(
        steamControllerSource,
        /process\.env\.FRONTEND_URL\s*\?\?\s*"http:\/\/localhost:5501"/,
        "FRONTEND_URL's fallback default should be the documented 5501 origin, not a stale 5500"
    );

});
