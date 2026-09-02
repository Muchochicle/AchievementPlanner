import { test } from "node:test";
import assert from "node:assert";

import { getPlannerData } from "../utils/plannerCatalog.js";

// backend/catalog/games/jusant.json - 21 real achievements sourced
// from a live ISteamUserStats/GetSchemaForGame/v2 response for appid
// 1977170 (fetched through this app's own services/steamApi.js).
// Hidden achievements ship no Steam description; their description here is
// researched from community 100% guides and cited in the frontend guide
// header. difficulty/estimatedTime/missable are curatorial.
const game = getPlannerData("jusant");

test("getPlannerData('jusant') returns real planner data with 21 curated achievements", () => {

    assert.ok(game, "expected real planner data for jusant");
    assert.ok(Array.isArray(game.achievements));
    assert.strictEqual(game.achievements.length, 21);

});

test("every Jusant achievement has a unique id from 1 to 21 and a unique apiname", () => {

    const ids = game.achievements.map(a => a.id);
    const apinames = game.achievements.map(a => a.apiname);

    assert.deepStrictEqual([...ids].sort((a, b) => a - b), Array.from({ length: 21 }, (_, i) => i + 1));
    assert.strictEqual(new Set(ids).size, 21);
    assert.strictEqual(new Set(apinames).size, 21);

});

test("every Jusant achievement has a valid difficulty (1-5), a positive estimatedTime, and non-empty name/description", () => {

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

test("every one of the 21 Jusant achievement name+description pairs matches the catalog data", () => {

    const officialAchievements = [
        ["A faint glimmer", "In Chapter 6, squeeze the cold Ballast tight with both climb inputs while in the crater to make it glimmer."],
        ["Acrobat", "Perform more than 200 climbing jumps or double jumps across your playthrough."],
        ["Adventure buddies", "Hug the ballast."],
        ["An ear to the past", "Listen to a shell."],
        ["Angel's carabiner", "Place the second piton at the very top of a wall-run swing (the timing is finicky)."],
        ["Antique gallery manager", "Activate all frescos."],
        ["Avid reader", "Read all letters."],
        ["Awakened memory", "Use the echo on a frozen ballast in Chapter 6."],
        ["Back in motion", "Turn an altar."],
        ["Bogeychoco", "Scare more than 10 chocos back to their burrow."],
        ["Collective climb", "Stop 25 pebbles with a single echo from the ballast."],
        ["Common ground", "Complete all cairns."],
        ["Cycle celebration", "Turn all altars."],
        ["Echo from the past", "Activate a fresco."],
        ["Final ascent", "Read all of Bianca's journal entries."],
        ["First contact", "Read a letter."],
        ["First stone", "Complete a cairn."],
        ["Fresh air", "Restore your stamina mid-climb more than 50 times."],
        ["Restored connection", "Hug the ballast 20 times."],
        ["Sound archeologist", "Listen to all shells."],
        ["Water piper", "Complete the game."],
    ];

    assert.strictEqual(officialAchievements.length, 21, "sanity check on this test's own reference list");

    const dataPairs = game.achievements
        .map(a => [a.name, a.description])
        .sort((a, b) => a[0].localeCompare(b[0]));

    assert.deepStrictEqual(dataPairs, [...officialAchievements].sort((a, b) => a[0].localeCompare(b[0])));

});
