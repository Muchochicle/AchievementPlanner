import { test } from "node:test";
import assert from "node:assert";

import { getProfileStats } from "../controllers/profileStatsController.js";

// Mirrors steamController.test.js's convention: the 401/no-session path is
// pure (no network) and tested directly with a fake req/res. The
// authenticated success path calls the real getOwnedGames/Steam API fan-out
// and is verified live against a real account instead, consistent with how
// this suite already treats network-dependent paths (see
// steamController.test.js's login()/callback() comment for the same
// reasoning).
function createMockRes() {

    return {

        statusCode: null,
        jsonBody: null,

        status(code) {
            this.statusCode = code;
            return this;
        },

        json(body) {
            this.jsonBody = body;
            return this;
        }

    };

}

test("getProfileStats returns 401 without contacting Steam when there is no session user", async () => {

    const req = { session: {} };
    const res = createMockRes();

    await getProfileStats(req, res);

    assert.strictEqual(res.statusCode, 401);
    assert.strictEqual(res.jsonBody.success, false);

});

test("getProfileStats returns 401 when session.user exists but has no steamid", async () => {

    const req = { session: { user: {} } };
    const res = createMockRes();

    await getProfileStats(req, res);

    assert.strictEqual(res.statusCode, 401);
    assert.strictEqual(res.jsonBody.success, false);

});
