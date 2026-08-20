import { test } from "node:test";
import assert from "node:assert";

// createProfileHeader() transitively reads player/avatar state via
// localStorage (see src/utils/player/player.js) - not available in plain
// Node, so this file provides a minimal in-memory shim (empty storage is
// enough to exercise default player state) purely so the escaping fix can
// be verified directly, without pulling in a full DOM/browser test runner
// for one component. No production code is affected by this shim - it
// only exists in this test file's own process.
globalThis.localStorage = {

    data: {},
    getItem(key) { return this.data[key] ?? null; },
    setItem(key, value) { this.data[key] = value; },
    removeItem(key) { delete this.data[key]; }

};

const { createProfileHeader } = await import("../src/components/profile-header/profile-header.js");

test("createProfileHeader escapes an HTML-injecting Steam persona name", () => {

    const html = createProfileHeader({
        logged: true,
        user: { personaname: `<script>alert(1)</script>`, avatarfull: "https://example.com/avatar.jpg" }
    });

    assert.doesNotMatch(html, /<script>alert\(1\)<\/script>/);
    assert.match(html, /&lt;script&gt;alert\(1\)&lt;\/script&gt;/);

});

test("createProfileHeader prevents an attribute-breakout payload in the Steam avatar src", () => {

    const html = createProfileHeader({
        logged: true,
        user: { personaname: "Bob", avatarfull: `x" onerror="alert(1)` }
    });

    assert.doesNotMatch(html, /onerror="alert\(1\)"/);
    assert.match(html, /src="x&quot; onerror=&quot;alert\(1\)"/);

});

test("createProfileHeader still renders a normal logged-in session correctly", () => {

    const html = createProfileHeader({
        logged: true,
        user: { personaname: "Bob", avatarfull: "https://example.com/avatar.jpg" }
    });

    assert.match(html, /profile-steam-name">Bob</);
    assert.match(html, /src="https:\/\/example\.com\/avatar\.jpg"/);

});

test("createProfileHeader renders the logged-out state without touching Steam fields at all", () => {

    const html = createProfileHeader({ logged: false });

    assert.match(html, /Not connected to Steam/);

});
