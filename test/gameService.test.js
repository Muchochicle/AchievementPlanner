import { test } from "node:test";
import assert from "node:assert";

import { getGamesIndex, getPopularGames, getGame } from "../src/utils/gameService.js";

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
