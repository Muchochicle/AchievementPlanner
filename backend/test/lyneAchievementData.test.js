import { test } from "node:test";
import assert from "node:assert";

import { getPlannerData } from "../utils/plannerCatalog.js";

// backend/catalog/games/lyne.json - 33 real achievements sourced
// from a live ISteamUserStats/GetSchemaForGame/v2 response for appid
// 266010 (fetched through this app's own services/steamApi.js). None are
// hidden; every description is Steam's own real text.
// Hidden achievements have no Steam description; where present, their
// description here is researched from community 100% guides and cited in
// the frontend guide header. difficulty/estimatedTime/missable are curatorial.
const game = getPlannerData("lyne");

test("getPlannerData('lyne') returns real planner data with 33 curated achievements", () => {

    assert.ok(game, "expected real planner data for lyne");
    assert.ok(Array.isArray(game.achievements));
    assert.strictEqual(game.achievements.length, 33);

});

test("every LYNE achievement has a unique id from 1 to 33 and a unique apiname", () => {

    const ids = game.achievements.map(a => a.id);
    const apinames = game.achievements.map(a => a.apiname);

    assert.deepStrictEqual([...ids].sort((a, b) => a - b), Array.from({ length: 33 }, (_, i) => i + 1));
    assert.strictEqual(new Set(ids).size, 33);
    assert.strictEqual(new Set(apinames).size, 33);

});

test("every LYNE achievement has a valid difficulty (1-5), a positive estimatedTime, and non-empty name/description", () => {

    for (const achievement of game.achievements) {

        assert.ok(
            Number.isInteger(achievement.difficulty) && achievement.difficulty >= 1 && achievement.difficulty <= 5,
            `${achievement.name} has an out-of-range difficulty: ${achievement.difficulty}`
        );

        assert.ok(
            Number.isInteger(achievement.estimatedTime) && achievement.estimatedTime > 0,
            `${achievement.name} has an invalid estimatedTime: ${achievement.estimatedTime}`
        );

        assert.ok(achievement.name?.length > 0, "achievement is missing a name");
        assert.ok(achievement.description?.length > 0, `${achievement.name} is missing a description`);
        assert.ok(achievement.apiname?.length > 0, `${achievement.name} is missing an apiname`);

    }

});

test("every one of the 33 LYNE achievement name+description pairs matches the catalog data", () => {

    const officialAchievements = [
        ["???", "Collect 50 Trytes - the triangular tokens awarded for completing standard puzzle sets and Daily Sets."],
        ["A new look", "Change the palette."],
        ["All Sets Complete", "Complete all level sets."],
        ["Complete A", "Complete Set A."],
        ["Complete B", "Complete Set B."],
        ["Complete C", "Complete Set C."],
        ["Complete D", "Complete Set D."],
        ["Complete E", "Complete Set E."],
        ["Complete F", "Complete Set F."],
        ["Complete G", "Complete Set G."],
        ["Complete H", "Complete Set H."],
        ["Complete I", "Complete Set I."],
        ["Complete J", "Complete Set J."],
        ["Complete K", "Complete Set K."],
        ["Complete L", "Complete Set L."],
        ["Complete M", "Complete Set M."],
        ["Complete N", "Complete Set N."],
        ["Complete O", "Complete Set O."],
        ["Complete P", "Complete Set P."],
        ["Complete Q", "Complete Set Q."],
        ["Complete R", "Complete Set R."],
        ["Complete S", "Complete Set S."],
        ["Complete T", "Complete Set T."],
        ["Complete U", "Complete Set U."],
        ["Complete V", "Complete Set V"],
        ["Complete W", "Complete Set W."],
        ["Complete X", "Complete Set X."],
        ["Complete Y", "Complete Set Y."],
        ["Complete Z", "Complete Set Z."],
        ["Daily - 1", "Complete one Daily Set."],
        ["Daily - 10", "Complete ten Daily Sets."],
        ["Daily - 3", "Complete three Daily Sets."],
        ["Daily - 5", "Complete five Daily Sets."],
    ];

    assert.strictEqual(officialAchievements.length, 33, "sanity check on this test's own reference list");

    const dataPairs = game.achievements
        .map(a => [a.name, a.description])
        .sort((a, b) => a[0].localeCompare(b[0]));

    assert.deepStrictEqual(dataPairs, [...officialAchievements].sort((a, b) => a[0].localeCompare(b[0])));

});
