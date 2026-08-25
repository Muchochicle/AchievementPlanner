import { test } from "node:test";
import assert from "node:assert";

// createAvatarPicker() transitively reads localStorage (equipped avatar +
// inventory ownership) - not available in plain Node, so this file
// provides a minimal in-memory shim, matching the existing convention
// established in test/profileHeader.test.js / test/avatarManager.test.js.
globalThis.localStorage = {

    data: {},
    getItem(key) { return this.data[key] ?? null; },
    setItem(key, value) { this.data[key] = String(value); },
    removeItem(key) { delete this.data[key]; }

};

const { createAvatarPicker } = await import("../src/components/avatar-picker/avatar-picker.js");
const { equipAvatar } = await import("../src/utils/player/avatar/avatarManager.js");
const { addItem } = await import("../src/utils/player/inventory/inventoryManager.js");
const { CONFIG } = await import("../src/config.js");
const { AVATARS } = await import("../src/data/player/avatars.js");

// CONFIG.DEBUG_UNLOCK_ALL_AVATARS ships `false` by default (see
// test/config.test.js) - a dev-only override that, when enabled, force-
// unlocks every avatar regardless of real ownership (see
// inventoryStorage.js getInventory()). Forced off here regardless, so
// ownership-gating is exercised even if that default ever changes,
// matching the pattern established in avatarManager.test.js.
function withRealOwnership(fn) {

    const original = CONFIG.DEBUG_UNLOCK_ALL_AVATARS;
    CONFIG.DEBUG_UNLOCK_ALL_AVATARS = false;

    try {

        fn();

    } finally {

        CONFIG.DEBUG_UNLOCK_ALL_AVATARS = original;

    }

}

function reset() {

    localStorage.data = {};

}

test("createAvatarPicker marks an unowned avatar as disabled and locked", () => {

    withRealOwnership(() => {

        reset();

        const html = createAvatarPicker();

        // "rookie" is a real, non-default avatar never owned by default.
        const rookieTileMatch = html.match(/<button[^>]*data-avatar-id="rookie"[^>]*>/);

        assert.ok(rookieTileMatch, "expected a tile for the rookie avatar");
        assert.match(rookieTileMatch[0], /disabled/);
        assert.match(rookieTileMatch[0], /avatar-tile--locked/);
        assert.match(rookieTileMatch[0], /aria-pressed="false"/);

    });

});

test("createAvatarPicker marks an owned, equipped avatar as pressed and not disabled", () => {

    withRealOwnership(() => {

        reset();

        addItem("avatars", "veteran");
        equipAvatar("veteran");

        const html = createAvatarPicker();
        const veteranTileMatch = html.match(/<button[^>]*data-avatar-id="veteran"[^>]*>/);

        assert.ok(veteranTileMatch);
        assert.doesNotMatch(veteranTileMatch[0], /disabled/);
        assert.match(veteranTileMatch[0], /aria-pressed="true"/);
        assert.match(html, /Equipped/);

    });

});

test("createAvatarPicker's default avatar is always owned and never disabled, even with no inventory unlocks", () => {

    withRealOwnership(() => {

        reset();

        const html = createAvatarPicker();
        const defaultTileMatch = html.match(/<button[^>]*data-avatar-id="default"[^>]*>/);

        assert.ok(defaultTileMatch);
        assert.doesNotMatch(defaultTileMatch[0], /disabled/);

    });

});

test("createAvatarPicker shows exactly one tile per catalog avatar, each with a unique data-avatar-id", () => {

    withRealOwnership(() => {

        reset();

        const html = createAvatarPicker();
        const ids = [...html.matchAll(/data-avatar-id="([^"]+)"/g)].map(m => m[1]);

        assert.strictEqual(new Set(ids).size, ids.length, "every avatar tile's id must be unique");
        assert.ok(ids.length >= 2, "expected more than just the default avatar in the catalog");

    });

});

test("createAvatarPicker renders inside an accessible group container", () => {

    reset();

    const html = createAvatarPicker();

    assert.match(html, /role="group"/);
    assert.match(html, /aria-label="Choose your avatar"/);

});

// Phase 66 regression: avatar-picker.js never imported escapeHtml at all,
// unlike every sibling card/list component (podium.js, player-widget.js,
// profile-header.js, achievement-card.js, genres.js, search.js,
// profile-badges.js), and interpolated item.name/item.id/item.image/the
// unlock requirement directly into class/data-avatar-id/title/alt/text-node
// positions. AVATARS (src/data/player/avatars.js) is fully static/curated
// today, so this was never live-exploitable - but it's the same
// "defend even though it's currently static" gap genres.js itself
// documents fixing. Temporarily mutates the real, shared AVATARS catalog
// entry (restored in `finally`) since createAvatarPicker() takes no
// injectable data parameter - the same technique is safe here because
// avatarManager.js's getAllAvatars() always reads straight from this
// same module-level object on every call, so no caching hides the change.
test("createAvatarPicker escapes an HTML-injecting avatar name", () => {

    const original = AVATARS.rookie.name;
    AVATARS.rookie.name = `<img src=x onerror=alert(1)>`;

    try {

        withRealOwnership(() => {

            reset();

            const html = createAvatarPicker();

            assert.doesNotMatch(html, /<img src=x onerror=alert\(1\)> avatar/);
            assert.match(html, /&lt;img src=x onerror=alert\(1\)&gt; avatar/);

        });

    } finally {

        AVATARS.rookie.name = original;

    }

});
