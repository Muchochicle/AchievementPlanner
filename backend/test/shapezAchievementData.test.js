import { test } from "node:test";
import assert from "node:assert";

import { getPlannerData } from "../utils/plannerCatalog.js";

// backend/catalog/games/shapez.json - 45 real achievements sourced
// from a live ISteamUserStats/GetSchemaForGame/v2 response for appid
// 1318690 (fetched through this app's own services/steamApi.js). None are
// hidden; every description is Steam's own real text.
// Hidden achievements have no Steam description; where present, their
// description here is researched from community 100% guides and cited in
// the frontend guide header. difficulty/estimatedTime/missable are curatorial.
const game = getPlannerData("shapez");

test("getPlannerData('shapez') returns real planner data with 45 curated achievements", () => {

    assert.ok(game, "expected real planner data for shapez");
    assert.ok(Array.isArray(game.achievements));
    assert.strictEqual(game.achievements.length, 45);

});

test("every shapez achievement has a unique id from 1 to 45 and a unique apiname", () => {

    const ids = game.achievements.map(a => a.id);
    const apinames = game.achievements.map(a => a.apiname);

    assert.deepStrictEqual([...ids].sort((a, b) => a - b), Array.from({ length: 45 }, (_, i) => i + 1));
    assert.strictEqual(new Set(ids).size, 45);
    assert.strictEqual(new Set(apinames).size, 45);

});

test("every shapez achievement has a valid difficulty (1-5), a positive estimatedTime, and non-empty name/description", () => {

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

test("every one of the 45 shapez achievement name+description pairs matches the catalog data", () => {

    const officialAchievements = [
        ["A bit early?", "Produce the shapez.io logo shape before completing level 18."],
        ["Addicted", "Play one  savegame for more than 20 hours"],
        ["Branding specialist 1", "Deliver 25 logo shapes / second to your hub"],
        ["Branding specialist 2", "Deliver 50 logo shapes / second to your hub"],
        ["Can't stop", "Reach level 50"],
        ["Computer Guy", "Have more than 5,000 wires"],
        ["Copy-Pasta", "Place a single blueprint containing at least 1,000 buildings."],
        ["Cutter", "Cut a shape"],
        ["Efficiency 1", "Deliver 25 blueprints shapes / second to your hub"],
        ["Efficiency 2", "Deliver 50 blueprints shapes / second to your hub"],
        ["Even faster", "Have all upgrades on tier 8 or higher"],
        ["Faster", "Have all upgrades on tier 5 or higher"],
        ["Freedom", "Complete level 26, unlocking the free play mode"],
        ["Get rid of them", "Have 1000 shapes trashed"],
        ["Getting into it", "Play one savegame for more than 1 hour"],
        ["GPS", "Place 15 map markers."],
        ["I need trains", "Have a single connected belt at least 500 tiles long."],
        ["I'll use it later", "Have 1 million blueprint shapes stored in your hub"],
        ["I've seen that before ..", "Produce the Microsoft logo shape (RgRyRbRr)."],
        ["Is this the end?", "Reach level 100"],
        ["It's a mess", "Have 100 different shapes stored in your hub"],
        ["It's been a long time", "Play one savegame for more than 10 hours"],
        ["It's piling up", "Have 100k blueprint shapes stored in your hub"],
        ["It's so slow", "Reach & Complete level 12 without upgrading your belts"],
        ["King of Inefficiency", "Use no inverse rotator until level 14"],
        ["MAM (Make Anything Machine)", "Complete any level (after level 26) without modifying your factory"],
        ["Memories from the past", "Produce the old (pre-rework) level 17 shape."],
        ["My eyes no longer hurt", "Enable dark mode in the settings."],
        ["Not an idle game", "Reach & complete level 12 in under 120 minutes"],
        ["Now it's easy", "Place a blueprint"],
        ["Oops", "Deliver a shape to the hub that is neither the current goal nor relevant to any upgrade."],
        ["Painter", "Paint a shape"],
        ["Perfectionist", "Destroy more than 1000 objects at once"],
        ["Preparing to launch", "Deliver 10 rocket shapes / second to your hub"],
        ["Rotater", "Rotate a shape"],
        ["SpaceY", "Deliver 20 rocket shapes / second to your hub"],
        ["Speedrun Master", "Reach & complete level 12 in under 30 minutes"],
        ["Speedrun Novice", "Reach & complete level 12 in under 60 minutes"],
        ["Stack overflow", "Produce a shape with 4 layers"],
        ["Storage", "Store a shape in the storage"],
        ["The logo!", "Produce the shapez.io logo"],
        ["The next dimension", "Open the wires layer"],
        ["To the moon", "Produce the rocket shape"],
        ["Wait, they stack?", "Stack a shape"],
        ["Wires", "Complete level 20, unlocking the wires layer"],
    ];

    assert.strictEqual(officialAchievements.length, 45, "sanity check on this test's own reference list");

    const dataPairs = game.achievements
        .map(a => [a.name, a.description])
        .sort((a, b) => a[0].localeCompare(b[0]));

    assert.deepStrictEqual(dataPairs, [...officialAchievements].sort((a, b) => a[0].localeCompare(b[0])));

});
