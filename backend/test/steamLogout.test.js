import { test } from "node:test";
import assert from "node:assert";

import { logout } from "../controllers/steamController.js";

// logout() is exercised the same way login()/callback() are in
// steamController.test.js: a minimal fake req/res, exactly as Express
// would call it, no real Express app or session store involved.

function createMockRes() {

    return {

        statusCode: null,
        jsonBody: null,
        clearedCookies: [],

        status(code) {

            this.statusCode = code;
            return this;

        },

        json(body) {

            this.jsonBody = body;
            return this;

        },

        clearCookie(name) {

            this.clearedCookies.push(name);
            return this;

        }

    };

}

function createMockReq({ destroyError = null } = {}) {

    return {

        session: {

            destroyCalled: false,

            destroy(callback) {

                this.destroyCalled = true;
                callback(destroyError);

            }

        }

    };

}

test("logout() destroys the session, clears the session cookie, and responds with success", async () => {

    const req = createMockReq();
    const res = createMockRes();

    await logout(req, res);

    assert.strictEqual(req.session.destroyCalled, true);
    assert.deepStrictEqual(res.clearedCookies, ["connect.sid"]);
    assert.deepStrictEqual(res.jsonBody, { success: true });
    assert.strictEqual(res.statusCode, null, "no explicit status() call needed - json() alone implies 200");

});

test("logout() is idempotent - it succeeds the same way for a request with no authenticated user", async () => {

    // req.session always exists (the session middleware creates it for
    // every request), even when req.session.user was never set - this is
    // the "click logout twice" / "logout when never logged in" case.
    const req = createMockReq();
    const res = createMockRes();

    await logout(req, res);

    assert.deepStrictEqual(res.jsonBody, { success: true });

});

test("logout() returns a generic 500 (via sendServerError) instead of leaking details when session.destroy() fails", async () => {

    const req = createMockReq({ destroyError: new Error("db is locked") });
    const res = createMockRes();

    await logout(req, res);

    assert.strictEqual(res.statusCode, 500);
    assert.strictEqual(res.jsonBody.success, false);
    assert.doesNotMatch(JSON.stringify(res.jsonBody), /db is locked/);

});
