import { test } from "node:test";
import assert from "node:assert";

import { getSteamDisplayName, getSteamAvatarUrl } from "../src/utils/steam/steamSession.js";

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
