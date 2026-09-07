import { test } from "node:test";
import assert from "node:assert";

// createProfilePage() composes profile-header/stats/badges/settings, which
// transitively read player/avatar/inventory state via localStorage - not
// available in plain Node, so this file provides the same minimal
// in-memory shim the other profile-* component tests use. Empty storage is
// enough to exercise default state.
globalThis.localStorage = {

    data: {},
    getItem(key) { return this.data[key] ?? null; },
    setItem(key, value) { this.data[key] = String(value); },
    removeItem(key) { delete this.data[key]; }

};

const { createProfilePage } = await import("../src/components/profile-page/profile-page.js");

test("createProfilePage renders the 'more rewards coming' teaser after the badges section", () => {

    const html = createProfilePage();

    assert.match(html, /profile-rewards-teaser/);
    assert.match(html, /More rewards are on the way/);

    // It must sit after Badges and before the settings/sections area -
    // i.e. within the progression part of the page.
    const badgesIdx = html.indexOf("profile-badges");
    const teaserIdx = html.indexOf("profile-rewards-teaser");
    const sectionsIdx = html.indexOf('id="profile-sections"');

    assert.ok(badgesIdx > -1 && teaserIdx > badgesIdx, "teaser comes after the Badges section");
    assert.ok(sectionsIdx > teaserIdx, "teaser comes before the games/settings area");

});

test("the teaser is plain text - no fake locked tiles, requirements, or named reward systems", () => {

    const html = createProfilePage();

    const teaser = html
        .slice(html.indexOf("profile-rewards-teaser"))
        .slice(0, html.slice(html.indexOf("profile-rewards-teaser")).indexOf("</p>") + 4);

    // Decision constraint: don't imply Frames/Backgrounds/Collectibles
    // already exist, and don't fabricate unlock requirements.
    assert.doesNotMatch(teaser, /\bFrames?\b/i);
    assert.doesNotMatch(teaser, /\bBackgrounds?\b/i);
    assert.doesNotMatch(teaser, /\bCollectibles?\b/i);
    assert.doesNotMatch(teaser, /unlock|require|complete \d|reach level|locked/i);
    // It's one <p>, not a grid of fake reward tiles.
    assert.doesNotMatch(teaser, /<(ul|button|img)\b/i);

});
