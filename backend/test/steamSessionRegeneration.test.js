import { test } from "node:test";
import assert from "node:assert";
import express from "express";
import session from "express-session";

import { login, callbackWithDeps } from "../controllers/steamController.js";

// login() reads these directly from process.env (see services/steamAuth.js)
// - set the same way steamController.test.js already does for its own
// direct calls to login().
process.env.STEAM_RETURN_URL = "http://localhost:3000/auth/steam/return";
process.env.STEAM_REALM = "http://localhost:3000";

// Integration test for the session-fixation defense in
// controllers/steamController.js: a successful callback must regenerate
// the session ID before writing req.session.user, so a session ID that
// existed (and could have been fixed by an attacker) before login is
// worthless afterwards.
//
// This is deliberately NOT unit-tested with a fake req.session (that only
// proves regenerateSession() calls session.regenerate(), not that the
// resulting session actually behaves correctly end-to-end). Instead it
// wires up the *real* express-session middleware - identical cookie
// options to server.js's own - around the real login()/callbackWithDeps()
// handlers, and drives it over real HTTP with a real cookie jar, so what's
// verified is the actual client-observable behavior: the session cookie
// issued after a successful login is a different cookie than the one
// issued before it, and the pre-login cookie no longer grants access to
// the authenticated session afterwards.
//
// Only the Steam-network calls (validateSteamResponse, getPlayerSummary)
// are faked, via callbackWithDeps's existing dependency-injection seam -
// no production code was changed to make this possible.
//
// This file is also what closes the two gaps steamController.test.js's
// own header comment documents as deliberately not covered there: the
// "matching state proceeds past validation to a full successful login"
// path (every test below exercises it, just with the network calls
// faked rather than hitting real Steam) and "an already-consumed state
// is rejected on reuse" (see the replay test below).

function buildTestApp(deps) {

    const app = express();

    app.use(session({
        secret: "test-only-secret-not-used-in-production",
        resave: false,
        saveUninitialized: false,
        cookie: {
            sameSite: "lax",
            secure: false,
            maxAge: 24 * 60 * 60 * 1000
        }
    }));

    app.get("/auth/steam/login", login);
    app.get("/auth/steam/return", (req, res) => callbackWithDeps(req, res, deps));
    app.get("/me", (req, res) => {

        res.json({
            logged: Boolean(req.session.user),
            user: req.session.user ?? null
        });

    });

    return app;

}

function startTestApp(app) {

    return new Promise((resolve, reject) => {

        const server = app.listen(0, "127.0.0.1", () => resolve(server));
        server.on("error", reject);

    });

}

function stopTestApp(server) {

    return new Promise(resolve => server.close(resolve));

}

function extractCookie(res) {

    const setCookieHeaders = res.headers.getSetCookie();
    const sessionCookie = setCookieHeaders.find(c => c.startsWith("connect.sid="));

    assert.ok(sessionCookie, "expected a connect.sid cookie to be set");

    return sessionCookie.split(";")[0];

}

const FAKE_PROFILE = {
    steamid: "76561198000000000",
    personaname: "Test Player",
    avatarfull: "https://example.com/avatar.jpg",
    profileurl: "https://steamcommunity.com/id/testplayer"
};

const fakeDeps = {
    validateSteamResponse: async () => true,
    getPlayerSummary: async () => FAKE_PROFILE
};

// callback() derives steamId from openid.claimed_id (see
// controllers/steamController.js), exactly as Steam's real redirect would
// carry it - required on every simulated callback request below.
function callbackUrl(baseUrl, state) {

    return `${baseUrl}/auth/steam/return?state=${state}&openid.claimed_id=${encodeURIComponent(`https://steamcommunity.com/openid/id/${FAKE_PROFILE.steamid}`)}`;

}

test("a successful login regenerates the session cookie - the pre-login cookie is not reused for the authenticated session", async () => {

    const app = buildTestApp(fakeDeps);
    const server = await startTestApp(app);
    const baseUrl = `http://127.0.0.1:${server.address().port}`;

    try {

        const loginRes = await fetch(`${baseUrl}/auth/steam/login`, { redirect: "manual" });
        const preLoginCookie = extractCookie(loginRes);

        const state = new URL(
            new URL(loginRes.headers.get("location")).searchParams.get("openid.return_to")
        ).searchParams.get("state");

        assert.ok(state, "login() should have embedded a state in the redirect URL");

        const callbackRes = await fetch(callbackUrl(baseUrl, state), {
            redirect: "manual",
            headers: { Cookie: preLoginCookie }
        });

        assert.strictEqual(callbackRes.status, 302, "a valid callback should redirect back to the frontend");

        const postLoginCookie = extractCookie(callbackRes);

        assert.notStrictEqual(
            postLoginCookie,
            preLoginCookie,
            "the session cookie issued after a successful login must differ from the pre-login one"
        );

    } finally {

        await stopTestApp(server);

    }

});

test("after regeneration, req.session.user is populated and reachable via the new cookie", async () => {

    const app = buildTestApp(fakeDeps);
    const server = await startTestApp(app);
    const baseUrl = `http://127.0.0.1:${server.address().port}`;

    try {

        const loginRes = await fetch(`${baseUrl}/auth/steam/login`, { redirect: "manual" });
        const preLoginCookie = extractCookie(loginRes);

        const state = new URL(
            new URL(loginRes.headers.get("location")).searchParams.get("openid.return_to")
        ).searchParams.get("state");

        const callbackRes = await fetch(callbackUrl(baseUrl, state), {
            redirect: "manual",
            headers: { Cookie: preLoginCookie }
        });

        const postLoginCookie = extractCookie(callbackRes);

        const meRes = await fetch(`${baseUrl}/me`, {
            headers: { Cookie: postLoginCookie }
        });
        const meBody = await meRes.json();

        assert.strictEqual(meBody.logged, true);
        assert.deepStrictEqual(meBody.user, FAKE_PROFILE);

    } finally {

        await stopTestApp(server);

    }

});

test("the pre-login (fixed) session ID is worthless after login - it never sees the authenticated user", async () => {

    const app = buildTestApp(fakeDeps);
    const server = await startTestApp(app);
    const baseUrl = `http://127.0.0.1:${server.address().port}`;

    try {

        const loginRes = await fetch(`${baseUrl}/auth/steam/login`, { redirect: "manual" });
        const preLoginCookie = extractCookie(loginRes);

        const state = new URL(
            new URL(loginRes.headers.get("location")).searchParams.get("openid.return_to")
        ).searchParams.get("state");

        await fetch(callbackUrl(baseUrl, state), {
            redirect: "manual",
            headers: { Cookie: preLoginCookie }
        });

        // Simulates an attacker who fixed preLoginCookie in the victim's
        // browser before the victim logged in: after the real login
        // completes, replaying that same, still-syntactically-valid
        // cookie must not grant access to the now-authenticated session.
        const meRes = await fetch(`${baseUrl}/me`, {
            headers: { Cookie: preLoginCookie }
        });
        const meBody = await meRes.json();

        assert.strictEqual(meBody.logged, false, "the pre-login session must never observe the post-login user");

    } finally {

        await stopTestApp(server);

    }

});

test("a consumed oauthState cannot be replayed - a second callback with the same state and original cookie is rejected", async () => {

    const app = buildTestApp(fakeDeps);
    const server = await startTestApp(app);
    const baseUrl = `http://127.0.0.1:${server.address().port}`;

    try {

        const loginRes = await fetch(`${baseUrl}/auth/steam/login`, { redirect: "manual" });
        const preLoginCookie = extractCookie(loginRes);

        const state = new URL(
            new URL(loginRes.headers.get("location")).searchParams.get("openid.return_to")
        ).searchParams.get("state");

        const firstAttempt = await fetch(callbackUrl(baseUrl, state), {
            redirect: "manual",
            headers: { Cookie: preLoginCookie }
        });

        assert.strictEqual(firstAttempt.status, 302, "the first, legitimate use of the state should succeed");

        // Replays the exact same callback URL and the same pre-login
        // cookie a second time - simulating an attacker who intercepted
        // and replayed the callback request. steamController.js deletes
        // oauthState from the session as soon as it's checked, before any
        // further async work (see the "one-time use" comment there), so
        // this must be rejected even though the cookie itself is
        // syntactically valid and was never regenerated for this replay.
        const replayAttempt = await fetch(callbackUrl(baseUrl, state), {
            redirect: "manual",
            headers: { Cookie: preLoginCookie }
        });

        assert.strictEqual(replayAttempt.status, 401, "a replayed callback reusing an already-consumed state must be rejected");

        const body = await replayAttempt.json();
        assert.strictEqual(body.success, false);

    } finally {

        await stopTestApp(server);

    }

});

test("two independent logins each get their own distinct regenerated session", async () => {

    const app = buildTestApp(fakeDeps);
    const server = await startTestApp(app);
    const baseUrl = `http://127.0.0.1:${server.address().port}`;

    try {

        async function completeLogin() {

            const loginRes = await fetch(`${baseUrl}/auth/steam/login`, { redirect: "manual" });
            const preLoginCookie = extractCookie(loginRes);

            const state = new URL(
                new URL(loginRes.headers.get("location")).searchParams.get("openid.return_to")
            ).searchParams.get("state");

            const callbackRes = await fetch(callbackUrl(baseUrl, state), {
                redirect: "manual",
                headers: { Cookie: preLoginCookie }
            });

            return extractCookie(callbackRes);

        }

        const [cookieA, cookieB] = await Promise.all([completeLogin(), completeLogin()]);

        assert.notStrictEqual(cookieA, cookieB, "concurrent independent logins must not collide on the same regenerated session");

    } finally {

        await stopTestApp(server);

    }

});
