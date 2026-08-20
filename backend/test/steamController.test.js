import { test } from "node:test";
import assert from "node:assert";

import { login, callback } from "../controllers/steamController.js";

// login()/callback() are exercised directly with minimal fake req/res
// objects, exactly as Express would call them - no production code was
// changed to make this possible. The rejection paths tested here
// (missing state, mismatched state) return before ever calling
// validateSteamResponse() or getPlayerSummary(), so these tests make no
// network calls and depend on no external service.
//
// Deliberately NOT covered here: the success path past state validation
// (contacting Steam) and state-reuse rejection - both need
// callbackWithDeps's dependency-injection seam to exercise without a real
// Steam network call, and are covered by test/steamSessionRegeneration.test.js
// instead (see that file's own header comment). This file sticks to the
// rejection paths that return before any of that, so it makes no network
// calls and depends on no external service.

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

test("callback() rejects when no state was ever stored in the session, without contacting Steam", async () => {

    const req = { session: {}, query: {} };
    const res = createMockRes();

    await callback(req, res);

    assert.strictEqual(res.statusCode, 401);
    assert.strictEqual(res.jsonBody.success, false);

});

test("callback() rejects when the request has no state query param at all", async () => {

    const req = { session: { oauthState: "some-stored-state" }, query: {} };
    const res = createMockRes();

    await callback(req, res);

    assert.strictEqual(res.statusCode, 401);
    // a rejected attempt must not consume the still-valid stored state
    assert.strictEqual(req.session.oauthState, "some-stored-state");

});

test("callback() rejects a state that does not match what's stored in the session, without contacting Steam", async () => {

    const req = {
        session: { oauthState: "the-real-stored-state" },
        query: { state: "a-completely-different-value" }
    };
    const res = createMockRes();

    await callback(req, res);

    assert.strictEqual(res.statusCode, 401);
    assert.strictEqual(res.jsonBody.success, false);
    assert.strictEqual(
        req.session.oauthState,
        "the-real-stored-state",
        "a mismatched attempt must not clear the still-valid stored state"
    );

});

test("callback()'s rejection response never includes error details/stack traces", async () => {

    const req = { session: {}, query: {} };
    const res = createMockRes();

    await callback(req, res);

    assert.strictEqual(res.jsonBody.message, "Steam authentication failed");
    assert.strictEqual(Object.keys(res.jsonBody).length, 2, "response body should only contain success and message");

});
