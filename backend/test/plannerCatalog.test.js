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
