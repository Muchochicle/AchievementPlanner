import { test } from "node:test";
import assert from "node:assert";

import { getPlannerData } from "../utils/plannerCatalog.js";

// backend/catalog/games/venba.json - 15 real achievements sourced
// from a live ISteamUserStats/GetSchemaForGame/v2 response for appid
// 1491670 (fetched through this app's own services/steamApi.js). None are
// hidden; every description is Steam's own real text.
// Hidden achievements have no Steam description; where present, their
// description here is researched from community 100% guides and cited in
// the frontend guide header. difficulty/estimatedTime/missable are curatorial.
const game = getPlannerData("venba");

test("getPlannerData('venba') returns real planner data with 15 curated achievements", () => {

    assert.ok(game, "expected real planner data for venba");
    assert.ok(Array.isArray(game.achievements));
    assert.strictEqual(game.achievements.length, 15);

});

test("every Venba achievement has a unique id from 1 to 15 and a unique apiname", () => {

    const ids = game.achievements.map(a => a.id);
    const apinames = game.achievements.map(a => a.apiname);

    assert.deepStrictEqual([...ids].sort((a, b) => a - b), Array.from({ length: 15 }, (_, i) => i + 1));
    assert.strictEqual(new Set(ids).size, 15);
    assert.strictEqual(new Set(apinames).size, 15);

});

test("every Venba achievement has a valid difficulty (1-5), a positive estimatedTime, and non-empty name/description", () => {

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

test("every one of the 15 Venba achievement name+description pairs matches the catalog data", () => {

    const officialAchievements = [
        ["Agni Prithvi Puttu", "Successfully “Launch” puttu."],
        ["Annanukku oru Oothappammm!", "In Chapter 7, prepare the oothappam with every topping except green chillies."],
        ["Arambikalama?", "Make the dinner spread."],
        ["Doomscroll", "Read all the texts in Kavin's phone."],
        ["Family Beef", "Successfully make the biriyani."],
        ["Fermented Feelings", "Successfully finish cooking the Dosas."],
        ["Flavor Text", "Read the flavor text in every level."],
        ["Hair off the Head", "Complete the park level."],
        ["Like it was Yesterday", "Complete one recipe without messing up."],
        ["Paavalan Would Be Proud", "Earn Silicon Heartbreak, Doomscroll and Flavor Text within the same playthrough."],
        ["Put Chutney", "Successfully make idlis."],
        ["Queen of the Six Tastes", "Complete every recipe without messing up once. "],
        ["Silicon Heartbreak", "Read all the texts in Venba's phone."],
        ["Taking Stock", "Successfully finish cooking the Chicken Rasam."],
        ["Vada Poche", "\"Launch\" a crumbling puttu."],
    ];

    assert.strictEqual(officialAchievements.length, 15, "sanity check on this test's own reference list");

    const dataPairs = game.achievements
        .map(a => [a.name, a.description])
        .sort((a, b) => a[0].localeCompare(b[0]));

    assert.deepStrictEqual(dataPairs, [...officialAchievements].sort((a, b) => a[0].localeCompare(b[0])));

});
