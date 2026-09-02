import { test } from "node:test";
import assert from "node:assert";

import { getPlannerData } from "../utils/plannerCatalog.js";

// backend/catalog/games/sludge-life.json - 14 real achievements sourced
// from a live ISteamUserStats/GetSchemaForGame/v2 response for appid
// 1144770 (fetched through this app's own services/steamApi.js).
// Hidden achievements ship no Steam description; their description here is
// researched from community 100% guides and cited in the frontend guide
// header. difficulty/estimatedTime/missable are curatorial.
const game = getPlannerData("sludge-life");

test("getPlannerData('sludge-life') returns real planner data with 14 curated achievements", () => {

    assert.ok(game, "expected real planner data for sludge-life");
    assert.ok(Array.isArray(game.achievements));
    assert.strictEqual(game.achievements.length, 14);

});

test("every SLUDGE LIFE achievement has a unique id from 1 to 14 and a unique apiname", () => {

    const ids = game.achievements.map(a => a.id);
    const apinames = game.achievements.map(a => a.apiname);

    assert.deepStrictEqual([...ids].sort((a, b) => a - b), Array.from({ length: 14 }, (_, i) => i + 1));
    assert.strictEqual(new Set(ids).size, 14);
    assert.strictEqual(new Set(apinames).size, 14);

});

test("every SLUDGE LIFE achievement has a valid difficulty (1-5), a positive estimatedTime, and non-empty name/description", () => {

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

test("every one of the 14 SLUDGE LIFE achievement name+description pairs matches the catalog data", () => {

    const officialAchievements = [
        [" OFF AND ON AGAIN", "Reset every WARP station."],
        ["BIG POCKETS", "Get all items."],
        ["BINGE", "Eat 20 slugs in one session."],
        ["CREEPIN", "Kill the BOSS in Crypt Creeper."],
        ["D.R.E.A.M.", "Steal the diamonds."],
        ["FILL UP THE DECK", "Install every app."],
        ["KISS MY EGGS", "Give 'em a smooch."],
        ["PISS FROM ABOVE", "Urinate from the top of GLUG TOWER."],
        ["THE BAD ENDING", "Boom."],
        ["THE GOOD ENDING", "A way out."],
        ["THE WEIRD ENDING", "Get 'em all."],
        ["TRASH PLAY", "Shoot a basketball into the trash can."],
        ["TRIBUTE TO CIGGY", "Smoke 20 CIGGYS."],
        ["ZOOMHEAD", "Hit every ZOOM spot."],
    ];

    assert.strictEqual(officialAchievements.length, 14, "sanity check on this test's own reference list");

    const dataPairs = game.achievements
        .map(a => [a.name, a.description])
        .sort((a, b) => a[0].localeCompare(b[0]));

    assert.deepStrictEqual(dataPairs, [...officialAchievements].sort((a, b) => a[0].localeCompare(b[0])));

});
