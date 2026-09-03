import { test } from "node:test";
import assert from "node:assert";

// createProfileBadges() transitively reads player state via localStorage
// (see src/utils/player/player.js) - not available in plain Node, so this
// file provides a minimal in-memory shim, matching the existing convention
// established in test/profileHeader.test.js / test/player.test.js.
globalThis.localStorage = {

    data: {},
    getItem(key) { return this.data[key] ?? null; },
    setItem(key, value) { this.data[key] = String(value); },
    removeItem(key) { delete this.data[key]; }

};

const { createProfileBadges } = await import("../src/components/profile-badges/profile-badges.js");
const { getPlayer, savePlayer, resetPlayer, unlockBadge } = await import("../src/utils/player/player.js");

test("createProfileBadges shows the empty state and no list when the player has no badges yet", () => {

    resetPlayer();

    const html = createProfileBadges();

    assert.match(html, /No badges earned yet\. Keep a daily streak going, or 100%-complete a game, to earn your first badge\./);
    assert.doesNotMatch(html, /profile-badges-list/);

});

test("createProfileBadges renders a single earned badge in the list, not the empty state, with its own icon", () => {

    resetPlayer();
    unlockBadge("Perfectionist");

    const html = createProfileBadges();

    assert.match(html, /<ul class="profile-badges-list">/);
    assert.match(html, /<li class="profile-badge">🏆 Perfectionist<\/li>/);
    assert.doesNotMatch(html, /No badges earned yet/);

});

test("createProfileBadges renders every earned badge, in the order they're stored, and falls back to a plain medal for an unrecognized name", () => {

    resetPlayer();

    const player = getPlayer();
    player.badges = ["Perfectionist", "Committed", "Speedrunner"];
    savePlayer(player);

    const html = createProfileBadges();

    const matches = [...html.matchAll(/<li class="profile-badge">(.*?) ([^<]*)<\/li>/g)]
        .map(match => [match[2], match[1]]);

    assert.deepStrictEqual(matches, [
        ["Perfectionist", "🏆"],
        ["Committed", "🔥"],
        ["Speedrunner", "🏅"]
    ]);

});

test("createProfileBadges escapes an HTML-injecting badge name", () => {

    // Phase 65 regression: badge names come straight from the
    // achievement-planner-player localStorage entry (player.badges) and
    // were interpolated with no escapeHtml() call, unlike every other
    // display value in this component tree. Today the only code path that
    // populates badges is a hardcoded literal (unlockBadge("Perfectionist")
    // in gameCompletion.js), but unlike player.title (unconditionally
    // recomputed from the level on every load), a stored badge name is
    // never revalidated - so a badge name tampered with via devtools would
    // otherwise render unescaped into innerHTML on the player's own
    // Profile page.
    resetPlayer();

    const player = getPlayer();
    player.badges = [`<img src=x onerror=alert(1)>`];
    savePlayer(player);

    const html = createProfileBadges();

    assert.doesNotMatch(html, /<img src=x onerror=alert\(1\)>/);
    assert.match(html, /&lt;img src=x onerror=alert\(1\)&gt;/);

});
