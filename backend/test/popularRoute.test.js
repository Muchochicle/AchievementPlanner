import { test } from "node:test";
import assert from "node:assert";

import gamesRouter from "../routes/games.js";

// GET /api/games/popular had zero dedicated route-level test coverage
// before this file (see PHASE_46/47/49_AUDIT.md), and its player-count
// fan-out used to be a raw, unbounded Promise.all over the visitor's ENTIRE
// owned Steam library (see PHASE_49_AUDIT.md Finding 4-refined) - a real
// concern only reachable for a logged-in visitor with a non-trivial
// library, which apiGamesRoute.test.js's spawned-server, logged-out-only
// tests can never exercise. This file extracts the real /popular handler
// directly from the router's own stack (confirmed shape: one GET layer per
// path) instead of spawning a server, so `globalThis.fetch` can be mocked
// deterministically - GetNumberOfCurrentPlayers is a real, unauthenticated
// Steam endpoint with no API key gate, so a spawned-server test here would
// make a genuine live network call in CI, which this suite's own
// established convention (see apiGamesRoute.test.js's header comment)
// deliberately avoids for every route.
function getHandler(path) {

    const layer = gamesRouter.stack.find(
        l => l.route?.path === path && l.route.methods.get
    );

    return layer.route.stack[0].handle;

}

const popularHandler = getHandler("/popular");

function jsonResponse(status, body) {

    return {
        ok: status >= 200 && status < 300,
        status,
        json: async () => body
    };

}

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

async function withMockedFetch(fn, run) {

    const original = globalThis.fetch;

    globalThis.fetch = fn;

    try {

        return await run();

    } finally {

        globalThis.fetch = original;

    }

}

function ownedGamesResponse(appids) {

    return jsonResponse(200, {
        response: {
            game_count: appids.length,
            games: appids.map(appid => ({
                appid,
                name: `Test Game ${appid}`,
                playtime_forever: 0,
                rtime_last_played: 0,
                img_icon_url: "x"
            }))
        }
    });

}

test("GET /api/games/popular bounds its player-count fan-out to at most 8 concurrent Steam requests for a visitor with a large owned library", async () => {

    const steamId = "popular-route-test-large-library";
    const appids = Array.from({ length: 20 }, (_, i) => 910000 + i);

    let activeCount = 0;
    let maxActive = 0;

    const fetchMock = async url => {

        if (url.includes("GetOwnedGames")) {

            return ownedGamesResponse(appids);

        }

        if (url.includes("GetNumberOfCurrentPlayers")) {

            activeCount++;
            maxActive = Math.max(maxActive, activeCount);

            // Real overlap only shows up if requests genuinely take time to
            // resolve - without this, a broken "concurrency limit" of any
            // size would look identical to a correctly-bounded one because
            // every call would resolve synchronously before the next starts.
            await new Promise(resolve => setTimeout(resolve, 15));

            activeCount--;

            const appid = Number(new URL(url).searchParams.get("appid"));

            return jsonResponse(200, { response: { result: 1, player_count: appid } });

        }

        throw new Error(`unexpected Steam URL in this test: ${url}`);

    };

    const req = { session: { user: { steamid: steamId } } };
    const res = createMockRes();

    await withMockedFetch(fetchMock, () => popularHandler(req, res));

    assert.strictEqual(res.jsonBody.success, true);
    assert.ok(
        maxActive <= 8,
        `expected the fan-out to be bounded to at most 8 concurrent requests, saw ${maxActive}`
    );
    assert.ok(
        maxActive > 1,
        "expected some real overlap (proving this isn't accidentally fully serial), saw only " + maxActive
    );

});

test("GET /api/games/popular still returns a real, correctly-ranked response when some player-count requests fail - a partial failure never fails the whole request", async () => {

    const steamId = "popular-route-test-partial-failure";
    const appids = [920001, 920002, 920003];

    const fetchMock = async url => {

        if (url.includes("GetOwnedGames")) {

            return ownedGamesResponse(appids);

        }

        if (url.includes("GetNumberOfCurrentPlayers")) {

            const appid = Number(new URL(url).searchParams.get("appid"));

            if (appid === 920002) {

                // A genuine request failure for exactly one of the three
                // games - getCurrentPlayerCount() already catches this
                // internally and resolves null rather than throwing (see
                // steamApi.js), so this must never fail the whole response.
                throw new Error("simulated network failure");

            }

            return jsonResponse(200, { response: { result: 1, player_count: appid } });

        }

        throw new Error(`unexpected Steam URL in this test: ${url}`);

    };

    const req = { session: { user: { steamid: steamId } } };
    const res = createMockRes();

    await withMockedFetch(fetchMock, () => popularHandler(req, res));

    assert.strictEqual(res.jsonBody.success, true, "a single failed Steam call must never turn the whole response into a 500");

    // buildGamesList() always merges in the real 3-game catalog alongside
    // this test's synthetic owned games (see routes/games.js), so the
    // ranking legitimately includes them too - this test only asserts what
    // it's actually targeting: the one game whose count failed is dropped,
    // and the two whose counts succeeded are present.
    const rankedAppids = res.jsonBody.games.map(g => g.appid);

    assert.ok(!rankedAppids.includes(920002), "the game whose count failed must be silently dropped from the ranking, never shown with a fabricated count");
    assert.ok(rankedAppids.includes(920001) && rankedAppids.includes(920003), "the two games whose counts succeeded must still appear in the ranking");

});

test("GET /api/games/popular returns the real catalog-only ranking for a logged-out visitor (no owned-games fan-out at all)", async () => {

    let ownedGamesCalled = false;

    const fetchMock = async url => {

        if (url.includes("GetOwnedGames")) {

            ownedGamesCalled = true;
            return ownedGamesResponse([]);

        }

        if (url.includes("GetNumberOfCurrentPlayers")) {

            const appid = Number(new URL(url).searchParams.get("appid"));
            return jsonResponse(200, { response: { result: 1, player_count: appid } });

        }

        throw new Error(`unexpected Steam URL in this test: ${url}`);

    };

    const req = { session: {} };
    const res = createMockRes();

    await withMockedFetch(fetchMock, () => popularHandler(req, res));

    assert.strictEqual(ownedGamesCalled, false, "a logged-out request must never call GetOwnedGames at all");
    assert.strictEqual(res.jsonBody.success, true);
    assert.ok(Array.isArray(res.jsonBody.games));

    const slugs = res.jsonBody.games.map(g => g.slug).sort();
    assert.deepStrictEqual(slugs, ["celeste", "hades", "hollow-knight", "inside", "portal", "portal-2"], "a logged-out visitor should be ranked among exactly the real catalog");

});
