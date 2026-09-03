import { test } from "node:test";
import assert from "node:assert";

// createProfileStats() transitively reads player/avatar state via
// localStorage (see src/utils/player/player.js) - not available in plain
// Node, so this file provides a minimal in-memory shim, matching the
// existing convention established in test/profileHeader.test.js.
// renderProfileStatsState()'s own behavior (including the Games card's
// sub-line no longer repeating the "completed" figure the dedicated 100%
// card already shows) is covered separately in
// backend/test/profileStatsRendering.test.js - this file only covers the
// synchronous createProfileStats() markup, which that one doesn't touch.
globalThis.localStorage = {

    data: {},
    getItem(key) { return this.data[key] ?? null; },
    setItem(key, value) { this.data[key] = String(value); },
    removeItem(key) { delete this.data[key]; }

};

const { createProfileStats } = await import("../src/components/profile-stats/profile-stats.js");

test("createProfileStats renders a Games card and a separate 100% card as two distinct stat tiles", () => {

    const html = createProfileStats();

    assert.match(html, /id="profile-stat-games-owned"/);
    assert.match(html, /id="profile-stat-completed-games"/);
    assert.match(html, /<span>Games<\/span>/);
    assert.match(html, /<span>100%<\/span>/);

});
