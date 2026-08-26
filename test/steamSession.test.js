import { test } from "node:test";
import assert from "node:assert";

import { getSteamDisplayName, getSteamAvatarUrl, logout } from "../src/utils/steam/steamSession.js";

function mockFetch(impl) {

    const original = globalThis.fetch;
    globalThis.fetch = impl;
    return () => { globalThis.fetch = original; };

}

// Only indirectly exercised before this file (via profileHeader.test.js
// asserting on createProfileHeader()'s rendered HTML) - these are small,
// pure functions with real edge cases worth covering directly, since
// they're the single source both profile-header.js and player-widget.js
// (navbar) rely on to decide whether/what Steam identity to show.

test("getSteamDisplayName returns the persona name when logged in with a name", () => {

    assert.strictEqual(
        getSteamDisplayName({ logged: true, user: { personaname: "Bob" } }),
        "Bob"
    );

});

test("getSteamDisplayName returns null when not logged in, even if a user object is somehow present", () => {

    assert.strictEqual(
        getSteamDisplayName({ logged: false, user: { personaname: "Bob" } }),
        null
    );

});

test("getSteamDisplayName returns null when logged in but the persona name is missing", () => {

    assert.strictEqual(getSteamDisplayName({ logged: true, user: {} }), null);
    assert.strictEqual(getSteamDisplayName({ logged: true, user: null }), null);
    assert.strictEqual(getSteamDisplayName({ logged: true }), null);

});

test("getSteamDisplayName tolerates a missing/undefined/null session entirely", () => {

    assert.strictEqual(getSteamDisplayName(undefined), null);
    assert.strictEqual(getSteamDisplayName(null), null);
    assert.strictEqual(getSteamDisplayName({}), null);

});

test("getSteamAvatarUrl returns the avatar URL when logged in with one", () => {

    assert.strictEqual(
        getSteamAvatarUrl({ logged: true, user: { avatarfull: "https://example.com/a.jpg" } }),
        "https://example.com/a.jpg"
    );

});

test("getSteamAvatarUrl returns null when not logged in", () => {

    assert.strictEqual(
        getSteamAvatarUrl({ logged: false, user: { avatarfull: "https://example.com/a.jpg" } }),
        null
    );

});

test("getSteamAvatarUrl returns null when logged in but the avatar URL is missing", () => {

    assert.strictEqual(getSteamAvatarUrl({ logged: true, user: {} }), null);
    assert.strictEqual(getSteamAvatarUrl({ logged: true, user: null }), null);

});

test("getSteamAvatarUrl tolerates a missing/undefined/null session entirely", () => {

    assert.strictEqual(getSteamAvatarUrl(undefined), null);
    assert.strictEqual(getSteamAvatarUrl(null), null);
    assert.strictEqual(getSteamAvatarUrl({}), null);

});

test("logout() POSTs to /auth/steam/logout with credentials included and returns a ready status on success", async () => {

    const restore = mockFetch(async (url, options) => {

        assert.match(url, /\/auth\/steam\/logout$/);
        assert.strictEqual(options.method, "POST");
        assert.strictEqual(options.credentials, "include");

        return { ok: true, json: async () => ({ success: true }) };

    });

    try {

        const result = await logout();

        assert.strictEqual(result.status, "ready");

    } finally {

        restore();

    }

});

test("logout() returns an error status on a non-ok response, without throwing", async () => {

    const restore = mockFetch(async () => ({ ok: false, json: async () => ({ success: false }) }));

    try {

        const result = await logout();

        assert.strictEqual(result.status, "error");

    } finally {

        restore();

    }

});

test("logout() returns an error status when fetch itself rejects (network failure), without throwing", async () => {

    const restore = mockFetch(async () => { throw new Error("network down"); });

    try {

        const result = await logout();

        assert.strictEqual(result.status, "error");
        assert.match(result.error.message, /network down/);

    } finally {

        restore();

    }

});
