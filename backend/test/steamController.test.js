import { test } from "node:test";
import assert from "node:assert";

import { login, callback, callbackWithDeps } from "../controllers/steamController.js";

// login()/callback() are exercised directly with minimal fake req/res
// objects, exactly as Express would call them - no production code was
// changed to make this possible. The rejection paths tested here
// (missing state, mismatched state) return before ever calling
// validateSteamResponse() or getPlayerSummary(), so these tests make no
// network calls and depend on no external service.
//
// Both endpoints are top-level browser navigations, so a failure now
// redirects the browser to the frontend's index.html?login=failed (the
// frontend renders a real error state + retry there) rather than emitting
// a raw JSON 401/500 on the backend origin. FRONTEND_URL is pinned here so
// that redirect target is deterministic.
//
// Deliberately NOT covered here: the success path past state validation
// (contacting Steam) and state-reuse rejection - both need
// callbackWithDeps's dependency-injection seam to exercise without a real
// Steam network call, and are covered by test/steamSessionRegeneration.test.js
// instead (see that file's own header comment). This file sticks to the
// rejection paths that return before any of that, so it makes no network
// calls and depends on no external service.

process.env.FRONTEND_URL = "https://frontend.example";

const LOGIN_FAILED_URL = "https://frontend.example/index.html?login=failed";

function createMockRes() {

    return {

        statusCode: null,
        jsonBody: null,
        redirectUrl: null,

        status(code) {

            this.statusCode = code;
            return this;

        },

        json(body) {

            this.jsonBody = body;
            return this;

        },

        redirect(url) {

            this.redirectUrl = url;
            return this;

        }

    };

}

test("login() generates a state, stores it in the session, and embeds the same value in the redirect URL", async () => {

    process.env.STEAM_RETURN_URL = "http://localhost:3000/auth/steam/return";
    process.env.STEAM_REALM = "http://localhost:3000";

    const req = { session: {} };
    const res = createMockRes();

    await login(req, res);

    assert.ok(res.redirectUrl, "login() should call res.redirect");
    assert.ok(req.session.oauthState, "login() should store a state in the session");
    assert.match(
        req.session.oauthState,
        /^[0-9a-f]{64}$/,
        "state should be a 64-character hex string (32 cryptographically random bytes)"
    );

    const redirectUrl = new URL(res.redirectUrl);
    const returnTo = new URL(redirectUrl.searchParams.get("openid.return_to"));

    assert.strictEqual(
        returnTo.searchParams.get("state"),
        req.session.oauthState,
        "the return_to URL must carry the exact same state value stored in the session"
    );

});

test("login() generates a different state on each call", async () => {

    process.env.STEAM_RETURN_URL = "http://localhost:3000/auth/steam/return";
    process.env.STEAM_REALM = "http://localhost:3000";

    const reqA = { session: {} };
    const reqB = { session: {} };

    await login(reqA, createMockRes());
    await login(reqB, createMockRes());

    assert.notStrictEqual(reqA.session.oauthState, reqB.session.oauthState);

});

test("callback() redirects to the frontend login-failed page when no state was ever stored, without contacting Steam", async () => {

    const req = { session: {}, query: {} };
    const res = createMockRes();

    await callback(req, res);

    assert.strictEqual(res.redirectUrl, LOGIN_FAILED_URL);
    assert.strictEqual(res.jsonBody, null, "must not also emit a JSON body");

});

test("callback() redirects to login-failed when the request has no state query param at all", async () => {

    const req = { session: { oauthState: "some-stored-state" }, query: {} };
    const res = createMockRes();

    await callback(req, res);

    assert.strictEqual(res.redirectUrl, LOGIN_FAILED_URL);
    // a rejected attempt must not consume the still-valid stored state
    assert.strictEqual(req.session.oauthState, "some-stored-state");

});

test("callback() redirects to login-failed for a state that does not match what's stored, without contacting Steam", async () => {

    const req = {
        session: { oauthState: "the-real-stored-state" },
        query: { state: "a-completely-different-value" }
    };
    const res = createMockRes();

    await callback(req, res);

    assert.strictEqual(res.redirectUrl, LOGIN_FAILED_URL);
    assert.strictEqual(
        req.session.oauthState,
        "the-real-stored-state",
        "a mismatched attempt must not clear the still-valid stored state"
    );

});

test("callback()'s failure redirect carries no error detail - just the fixed ?login=failed marker", async () => {

    const req = { session: {}, query: {} };
    const res = createMockRes();

    await callback(req, res);

    const url = new URL(res.redirectUrl);

    assert.strictEqual(url.pathname, "/index.html");
    assert.strictEqual(url.search, "?login=failed", "no reason/stack/error params leaked into the redirect");

});

// Finding 22 (PHASE_53_AUDIT.md) - claimed_id is extracted after state
// validation AND validateSteamResponse both already passed, so these use
// callbackWithDeps with a fake (always-true) validateSteamResponse to reach
// that point without a real Steam network call - the same seam
// steamSessionRegeneration.test.js already uses. Both tests below return
// before regenerateSession()/getPlayerSummary() would ever run, so a
// minimal fake req.session (no .regenerate()) is sufficient, matching this
// file's existing lightweight rejection-path tests above.

test("callback() redirects to login-failed instead of crashing when openid.claimed_id is missing, even after validation has already passed", async () => {

    const req = {
        session: { oauthState: "the-real-stored-state" },
        query: { state: "the-real-stored-state" }
        // no "openid.claimed_id" at all
    };
    const res = createMockRes();

    await assert.doesNotReject(

        callbackWithDeps(req, res, {

            validateSteamResponse: async () => true,

            getPlayerSummary: async () => {

                throw new Error("must not be called - claimed_id was missing");

            }

        })

    );

    assert.strictEqual(res.redirectUrl, LOGIN_FAILED_URL);

});

test("callback() redirects to login-failed when openid.claimed_id is present but empty", async () => {

    const req = {
        session: { oauthState: "the-real-stored-state" },
        query: { state: "the-real-stored-state", "openid.claimed_id": "" }
    };
    const res = createMockRes();

    await callbackWithDeps(req, res, {

        validateSteamResponse: async () => true,

        getPlayerSummary: async () => {

            throw new Error("must not be called - claimed_id was empty");

        }

    });

    assert.strictEqual(res.redirectUrl, LOGIN_FAILED_URL);

});

test("callback() still extracts steamId correctly from a well-formed claimed_id (regression: the new guard must not reject a valid callback)", async () => {

    const req = {
        session: { oauthState: "the-real-stored-state" },
        query: {
            state: "the-real-stored-state",
            "openid.claimed_id": "https://steamcommunity.com/openid/id/76561198000000000"
        }
    };
    const res = createMockRes();

    let receivedSteamId = null;

    await callbackWithDeps(req, res, {

        validateSteamResponse: async () => true,

        getPlayerSummary: async steamId => {

            receivedSteamId = steamId;

            throw new Error("stop before regenerateSession - only steamId extraction is under test here");

        }

    });

    assert.strictEqual(receivedSteamId, "76561198000000000");

    // getPlayerSummary's thrown error is caught by callbackWithDeps's outer
    // try/catch and now sends the user to the same frontend login-failed
    // page as every other failure (rather than a raw 500 JSON) - proving
    // the guard itself let a well-formed claimed_id straight through to
    // steamId extraction, unlike the two redirect tests above.
    assert.strictEqual(res.redirectUrl, LOGIN_FAILED_URL);
    assert.strictEqual(res.statusCode, null, "no explicit error status - just the redirect");

});
