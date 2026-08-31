import { test } from "node:test";
import assert from "node:assert";

import { getPlannerData } from "../utils/plannerCatalog.js";

// backend/catalog/games/dayz.json - 13 real achievements sourced
// from a live ISteamUserStats/GetSchemaForGame/v2 response for appid
// 221100 (fetched through this app's own services/steamApi.js). None are
// hidden; every description is Steam's own real text.
// difficulty/estimatedTime/missable remain curatorial judgments.
const game = getPlannerData("dayz");

test("getPlannerData('dayz') returns real planner data with 13 curated achievements", () => {

    assert.ok(game, "expected real planner data for dayz");
    assert.ok(Array.isArray(game.achievements));
    assert.strictEqual(game.achievements.length, 13);

});

test("every DayZ achievement has a unique id from 1 to 13 and a unique apiname", () => {

    const ids = game.achievements.map(a => a.id);
    const apinames = game.achievements.map(a => a.apiname);

    assert.deepStrictEqual([...ids].sort((a, b) => a - b), Array.from({ length: 13 }, (_, i) => i + 1));
    assert.strictEqual(new Set(ids).size, 13);
    assert.strictEqual(new Set(apinames).size, 13);

});

test("every DayZ achievement has a valid difficulty (1-5), a positive estimatedTime, and non-empty name/description", () => {

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

test("every one of the 13 DayZ achievement name+description pairs matches the catalog data", () => {

    const officialAchievements = [
        ["Act of mercy", "Killed my first infected."],
        ["Babyface", "Shaved my face."],
        ["Bodily Needs", "Ate and drank something."],
        ["Close and personal", "Killed fifteen survivors with any melee weapon."],
        ["Field cook", "Cooked a steak on a stick."],
        ["Geared", "Equipped a firearm, a melee weapon and a backpack."],
        ["Heal the world", "Applied bandages on other survivors thirty times."],
        ["I'm the firestarter", "Ignited fire using a matchbox, a road flare and a hand drill."],
        ["Lobotomy", "Killed twenty survivors or infected with a head-shot."],
        ["Marksman", "Killed a survivor at more than three hundred meters."],
        ["Natural instincts", "Gutted a deer."],
        ["Pacify", "Killed an infected soldier."],
        ["You have the right...", "Handcuffed ten people."],
    ];

    assert.strictEqual(officialAchievements.length, 13, "sanity check on this test's own reference list");

    const dataPairs = game.achievements
        .map(a => [a.name, a.description])
        .sort((a, b) => a[0].localeCompare(b[0]));

    assert.deepStrictEqual(dataPairs, [...officialAchievements].sort((a, b) => a[0].localeCompare(b[0])));

});
