import { test } from "node:test";
import assert from "node:assert";

import { getPlannerData } from "../utils/plannerCatalog.js";

// backend/catalog/games/fobia-st-dinfna-hotel.json - 28 real achievements sourced
// from a live ISteamUserStats/GetSchemaForGame/v2 response for appid
// 1298140 (fetched through this app's own services/steamApi.js).
// Hidden achievements ship no Steam description; their description here is
// researched from community 100% guides and cited in the frontend guide
// header. difficulty/estimatedTime/missable are curatorial.
const game = getPlannerData("fobia-st-dinfna-hotel");

test("getPlannerData('fobia-st-dinfna-hotel') returns real planner data with 28 curated achievements", () => {

    assert.ok(game, "expected real planner data for fobia-st-dinfna-hotel");
    assert.ok(Array.isArray(game.achievements));
    assert.strictEqual(game.achievements.length, 28);

});

test("every Fobia - St. Dinfna Hotel achievement has a unique id from 1 to 28 and a unique apiname", () => {

    const ids = game.achievements.map(a => a.id);
    const apinames = game.achievements.map(a => a.apiname);

    assert.deepStrictEqual([...ids].sort((a, b) => a - b), Array.from({ length: 28 }, (_, i) => i + 1));
    assert.strictEqual(new Set(ids).size, 28);
    assert.strictEqual(new Set(apinames).size, 28);

});

test("every Fobia - St. Dinfna Hotel achievement has a valid difficulty (1-5), a positive estimatedTime, and non-empty name/description", () => {

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

test("every one of the 28 Fobia - St. Dinfna Hotel achievement name+description pairs matches the catalog data", () => {

    const officialAchievements = [
        ["Accumulator", "Open the storage chest"],
        ["Adventurer", "Collect 50 upgrade items"],
        ["Anderson", "Yes, they're drawers... But not just drawers."],
        ["Arachnophobia", "Defeat the Spider Mother boss."],
        ["Armed and dangerous", "Upgrade one weapon to max level"],
        ["Articulated", "Open all articulated stairs"],
        ["Boy Scout", "Survive the Forest section."],
        ["Bug awareness", "Find the bug that is not a bug"],
        ["Cautious", "Save the game 3 times"],
        ["Check-out", "Survive the Hotel"],
        ["Collector", "Find all the Memories"],
        ["Detached", "Discard items 5 times"],
        ["Executioner", "Kill 10 enemies"],
        ["Grandmaster", "Solve the chess puzzle"],
        ["Holy Grail", "Discover all the toy rabbits throughout the environments"],
        ["Improvisation", "Combine 4 items"],
        ["Invincible", "Finish the game without taking damage"],
        ["Jonisvaldo", "Just that, find Jonisvaldo"],
        ["Killer", "Upgrade all weapons to max level"],
        ["Mechanic", "Assemble the 3 gears"],
        ["Miner", "Survive the Underground section."],
        ["Natural born journalist", "Collect all documents from the survivors"],
        ["Nicthophobia", "Use the flashlight for 15 minutes in a single game"],
        ["Pianist", "Defeat the Piano Monster boss."],
        ["Pulsatrix", "Use the night vision camera for 15 minutes in a single game"],
        ["Starter", "Finish the game"],
        ["Violator", "Defeat the Red Light (Aquiles) boss."],
        ["VIP Client", "Finish the game 3 times"],
    ];

    assert.strictEqual(officialAchievements.length, 28, "sanity check on this test's own reference list");

    const dataPairs = game.achievements
        .map(a => [a.name, a.description])
        .sort((a, b) => a[0].localeCompare(b[0]));

    assert.deepStrictEqual(dataPairs, [...officialAchievements].sort((a, b) => a[0].localeCompare(b[0])));

});
