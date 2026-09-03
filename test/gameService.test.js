import { test } from "node:test";
import assert from "node:assert";

// Minimal in-memory sessionStorage so the Task 9 games-index cache can be
// exercised under `node --test` (no DOM). Installed before importing the
// module under test.
class MemoryStorage {
    #map = new Map();
    getItem(k) { return this.#map.has(k) ? this.#map.get(k) : null; }
    setItem(k, v) { this.#map.set(k, String(v)); }
    removeItem(k) { this.#map.delete(k); }
    clear() { this.#map.clear(); }
}
globalThis.sessionStorage = new MemoryStorage();

const { getGamesIndex, getPopularGames, getGame, clearGamesIndexCache } =
    await import("../src/utils/gameService.js");

function mockFetch(impl) {

    const original = globalThis.fetch;
    globalThis.fetch = impl;
    return () => { globalThis.fetch = original; };

}

function jsonResponse(ok, body, status = ok ? 200 : 500) {

    return { ok, status, json: async () => body };

}

test("getGamesIndex returns the unwrapped games array on success", async () => {

    const restore = mockFetch(async () => jsonResponse(true, { games: [{ slug: "hades" }] }));

    try {

        assert.deepStrictEqual(await getGamesIndex(), [{ slug: "hades" }]);

    } finally {

        restore();

    }

});

test("getGamesIndex falls back to an empty array when the response has no 'games' field (malformed data)", async () => {

    const restore = mockFetch(async () => jsonResponse(true, {}));

    try {

        assert.deepStrictEqual(await getGamesIndex(), []);

    } finally {

        restore();

    }

});

test("getGamesIndex throws a clear error on a non-ok response", async () => {

    const restore = mockFetch(async () => jsonResponse(false, {}));

    try {

        await assert.rejects(getGamesIndex(), /Unable to load Steam library/);

    } finally {

        restore();

    }

});

test("getPopularGames returns the unwrapped games array on success", async () => {

    const restore = mockFetch(async () => jsonResponse(true, { games: [{ slug: "portal-2" }] }));

    try {

        assert.deepStrictEqual(await getPopularGames(), [{ slug: "portal-2" }]);

    } finally {

        restore();

    }

});

test("getPopularGames falls back to an empty array when the response has no 'games' field (malformed data)", async () => {

    const restore = mockFetch(async () => jsonResponse(true, {}));

    try {

        assert.deepStrictEqual(await getPopularGames(), []);

    } finally {

        restore();

    }

});

test("getPopularGames throws on a non-ok response", async () => {

    const restore = mockFetch(async () => jsonResponse(false, {}));

    try {

        await assert.rejects(getPopularGames(), /Unable to load popular games/);

    } finally {

        restore();

    }

});

test("getGame aliases the backend's 'title' field to 'name' for existing components, while preserving the rest of the game object", async () => {

    const restore = mockFetch(async url => {

        assert.match(url, /\/api\/games\/hades$/);

        return jsonResponse(true, { game: { slug: "hades", title: "Hades", appid: 1145360 } });

    });

    try {

        const game = await getGame("hades");

        assert.strictEqual(game.name, "Hades");
        assert.strictEqual(game.title, "Hades", "the original title field should still be present");
        assert.strictEqual(game.appid, 1145360);

    } finally {

        restore();

    }

});

test("getGame throws a clear error (not a raw property-access TypeError) when the response is missing the 'game' field", async () => {

    const restore = mockFetch(async () => jsonResponse(true, { success: true }));

    try {

        await assert.rejects(getGame("hades"), error => {

            assert.match(error.message, /Malformed response/);
            assert.ok(!(error instanceof TypeError), "should be an intentional Error, not an accidental TypeError from reading .title off undefined");
            return true;

        });

    } finally {

        restore();

    }

});

test("getGame throws an error carrying the HTTP status when the response isn't ok", async () => {

    const restore = mockFetch(async () => jsonResponse(false, {}, 404));

    try {

        await assert.rejects(
            getGame("does-not-exist"),
            error => {
                assert.match(error.message, /Unable to load game: does-not-exist/);
                assert.strictEqual(error.status, 404);
                return true;
            }
        );

    } finally {

        restore();

    }

});

// ---- Task 9: games-index sessionStorage cache ----

test("getGamesIndex({loggedIn}) serves a cached result on the second call (no second fetch)", async () => {

    sessionStorage.clear();
    let calls = 0;

    const restore = mockFetch(async () => { calls++; return jsonResponse(true, { games: [{ slug: "hades" }] }); });

    try {

        const first = await getGamesIndex({ loggedIn: false });
        const second = await getGamesIndex({ loggedIn: false });

        assert.deepStrictEqual(first, [{ slug: "hades" }]);
        assert.deepStrictEqual(second, [{ slug: "hades" }]);
        assert.strictEqual(calls, 1, "second call must hit the cache, not the network");

    } finally {

        restore();
        sessionStorage.clear();

    }

});

test("getGamesIndex cache is keyed by login state - logging in re-fetches", async () => {

    sessionStorage.clear();
    let calls = 0;

    const restore = mockFetch(async () => {
        calls++;
        return jsonResponse(true, { games: [{ slug: calls === 1 ? "logged-out-view" : "logged-in-view" }] });
    });

    try {

        const out = await getGamesIndex({ loggedIn: false });
        const inn = await getGamesIndex({ loggedIn: true });

        assert.strictEqual(out[0].slug, "logged-out-view");
        assert.strictEqual(inn[0].slug, "logged-in-view");
        assert.strictEqual(calls, 2, "a different login state must not reuse the other state's cache entry");

    } finally {

        restore();
        sessionStorage.clear();

    }

});

test("getGamesIndex() with no loggedIn hint never caches (always a fresh fetch)", async () => {

    sessionStorage.clear();
    let calls = 0;

    const restore = mockFetch(async () => { calls++; return jsonResponse(true, { games: [{ slug: "x" }] }); });

    try {

        await getGamesIndex();
        await getGamesIndex();

        assert.strictEqual(calls, 2);
        assert.strictEqual(sessionStorage.getItem("ap-games-index-v1:out"), null);

    } finally {

        restore();
        sessionStorage.clear();

    }

});

test("clearGamesIndexCache() forces the next call to re-fetch", async () => {

    sessionStorage.clear();
    let calls = 0;

    const restore = mockFetch(async () => { calls++; return jsonResponse(true, { games: [{ slug: "x" }] }); });

    try {

        await getGamesIndex({ loggedIn: true });
        clearGamesIndexCache();
        await getGamesIndex({ loggedIn: true });

        assert.strictEqual(calls, 2);

    } finally {

        restore();
        sessionStorage.clear();

    }

});

test("getGamesIndex does not cache an empty catalog (so a transient empty response can't stick)", async () => {

    sessionStorage.clear();
    let calls = 0;

    const restore = mockFetch(async () => { calls++; return jsonResponse(true, { games: [] }); });

    try {

        await getGamesIndex({ loggedIn: false });
        await getGamesIndex({ loggedIn: false });

        assert.strictEqual(calls, 2, "an empty result must not be cached");

    } finally {

        restore();
        sessionStorage.clear();

    }

});
