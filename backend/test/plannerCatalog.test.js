import { test } from "node:test";
import assert from "node:assert";

import {
    getPlannerData,
    getAllPlannerSlugs,
    getPlannerDataByAppId
} from "../utils/plannerCatalog.js";

// src/data/games/debug-game.json is a real, checked-in fixture marked
// "internal": true (a developer sandbox with fake achievements) -
// plannerCatalog.js's loadCatalog() is supposed to exclude any such entry
// from every consumer (getPlannerData/getAllPlannerSlugs/
// getPlannerDataByAppId), which is the one thing standing between it and
// showing up as a real game on Home/Games. This had no dedicated test
// before - only indirect coverage via gameMapper.test.js picking
// getAllPlannerSlugs()[0] as a fixture, which never actually asserted the
// exclusion itself.

test("getAllPlannerSlugs never includes the internal debug-game fixture", () => {

    const slugs = getAllPlannerSlugs();

    assert.ok(!slugs.includes("debug-game"), "the internal sandbox fixture must never be listed as a real catalog entry");

});

test("getAllPlannerSlugs still includes the real, non-internal catalog games", () => {

    const slugs = getAllPlannerSlugs();

    // Sanity check that the internal-exclusion filter isn't accidentally
    // excluding everything - these are checked-in, non-internal fixtures
    // (see src/data/games/*.json).
    assert.ok(slugs.includes("hades"));
    assert.ok(slugs.includes("hollow-knight"));
    assert.ok(slugs.includes("portal-2"));

});

test("getPlannerData('debug-game') returns null, not the internal sandbox data", () => {

    assert.strictEqual(getPlannerData("debug-game"), null);

});

test("getPlannerData returns real data for a non-internal catalog slug", () => {

    const data = getPlannerData("hades");

    assert.ok(data, "expected real planner data for a known non-internal game");
    assert.strictEqual(data.name, "Hades");

});

test("getPlannerDataByAppId(-1) (the internal fixture's steamAppId) returns null", () => {

    assert.strictEqual(getPlannerDataByAppId(-1), null);

});

// Phase 40: src/data/games/portal-2.json went from a 3-entry stub to all 51
// of Portal 2's real Steam achievements (verified against the live
// ISteamUserStats/GetSchemaForGame/v2 response for appid 620 - see
// PHASE_40_AUDIT.md). Before this, a player who finished the 3 curated
// achievements got told "100% completion" by getRecommendedAchievement()
// (src/utils/planner/recommendation/recommendation.js) while ~48 real Steam
// achievements remained. These tests exist to catch that regressing back to
// a partial set - through getPlannerData("portal-2"), the same read path
// every consumer (routes/games.js, gameMapper.js) uses.

test("getPlannerData('portal-2') returns the complete 51-achievement curated set, not the old 3-entry stub", () => {

    const data = getPlannerData("portal-2");

    assert.ok(data, "expected real planner data for portal-2");
    assert.strictEqual(
        data.achievements.length,
        51,
        "Portal 2 has 51 real Steam achievements (verified live) - any count below that silently reintroduces the false '100% completion' state in getRecommendedAchievement()"
    );

});

test("getPlannerData('portal-2') achievements have no duplicate id or apiname", () => {

    const { achievements } = getPlannerData("portal-2");

    const ids = achievements.map(a => a.id);
    const apinames = achievements.map(a => a.apiname);

    assert.strictEqual(new Set(ids).size, ids.length, "duplicate achievement id found in portal-2.json");
    assert.strictEqual(new Set(apinames).size, apinames.length, "duplicate achievement apiname found in portal-2.json");

});

test("getPlannerData('portal-2') achievements all carry well-formed Steam-sourced and curatorial fields", () => {

    const { achievements } = getPlannerData("portal-2");

    for (const achievement of achievements) {

        // Steam-sourced fields (copied verbatim from the live schema).
        assert.strictEqual(typeof achievement.apiname, "string");
        assert.ok(achievement.apiname.length > 0, `achievement ${achievement.id} has an empty apiname`);
        assert.strictEqual(typeof achievement.name, "string");
        assert.ok(achievement.name.length > 0, `achievement ${achievement.id} has an empty name`);
        assert.strictEqual(typeof achievement.description, "string");
        assert.ok(achievement.description.length > 0, `achievement ${achievement.id} has an empty description`);

        // Curatorial fields (assigned, not Steam-sourced).
        assert.ok(
            Number.isInteger(achievement.difficulty) && achievement.difficulty >= 1 && achievement.difficulty <= 5,
            `achievement ${achievement.id} has an out-of-range difficulty: ${achievement.difficulty}`
        );
        assert.strictEqual(typeof achievement.missable, "boolean");
        assert.ok(
            Number.isInteger(achievement.estimatedTime) && achievement.estimatedTime > 0,
            `achievement ${achievement.id} has an invalid estimatedTime: ${achievement.estimatedTime}`
        );

    }

});

test("getPlannerDataByAppId(620) resolves to the portal-2 slug with the same complete achievement set", () => {

    const result = getPlannerDataByAppId(620);

    assert.ok(result, "expected a planner entry for Portal 2's appid");
    assert.strictEqual(result.slug, "portal-2");
    assert.strictEqual(result.data.achievements.length, 51);

});
