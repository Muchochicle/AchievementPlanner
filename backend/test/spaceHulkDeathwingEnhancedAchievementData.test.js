import { test } from "node:test";
import assert from "node:assert";

import { getPlannerData } from "../utils/plannerCatalog.js";

// backend/catalog/games/space-hulk-deathwing-enhanced.json - 23 real achievements sourced
// from a live ISteamUserStats/GetSchemaForGame/v2 response for appid
// 816090 (fetched through this app's own services/steamApi.js). None are
// hidden; every description is Steam's own real text.
// difficulty/estimatedTime/missable remain curatorial judgments.
const game = getPlannerData("space-hulk-deathwing-enhanced");

test("getPlannerData('space-hulk-deathwing-enhanced') returns real planner data with 23 curated achievements", () => {

    assert.ok(game, "expected real planner data for space-hulk-deathwing-enhanced");
    assert.ok(Array.isArray(game.achievements));
    assert.strictEqual(game.achievements.length, 23);

});

test("every Space Hulk: Deathwing - Enhanced Edition achievement has a unique id from 1 to 23 and a unique apiname", () => {

    const ids = game.achievements.map(a => a.id);
    const apinames = game.achievements.map(a => a.apiname);

    assert.deepStrictEqual([...ids].sort((a, b) => a - b), Array.from({ length: 23 }, (_, i) => i + 1));
    assert.strictEqual(new Set(ids).size, 23);
    assert.strictEqual(new Set(apinames).size, 23);

});

test("every Space Hulk: Deathwing - Enhanced Edition achievement has a valid difficulty (1-5), a positive estimatedTime, and non-empty name/description", () => {

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

test("every one of the 23 Space Hulk: Deathwing - Enhanced Edition achievement name+description pairs matches the catalog data", () => {

    const officialAchievements = [
        ["Bravery!", "Finish a chapter in the main campaign without using a Psygate"],
        ["Broodlord killer", "Kill a Broodlord"],
        ["Brother In Arms", "Perform 1,111 assists in multiplayer mode or the special missions"],
        ["Champion of the Lions", "Unlock all Assault Terminator's abilitiess in multiplayer"],
        ["Chapter pillar", "Unlock all Tactical Terminator abilities in multiplayer"],
        ["Commandant", "Complete the Command branch"],
        ["Crusher of scythe-strain Genestealers", "Kill a scythe-strain Genestealer"],
        ["Destruction Psyker", "Learn Vortex of Doom"],
        ["Devotee", "Complete the Devotion branch"],
        ["Epistolary", "Unlock all of the Librarian's capacities in multiplayer"],
        ["Flame Psyker", "Learn Inferno"],
        ["For Honour!", "Kill 10,000 enemies"],
        ["For the Chapter!", "Kill 666 enemies"],
        ["Great psyker", "Complete the Psy branch"],
        ["Killer of stalker-strain Genestealers", "Kill a stalker-strain Genestealer"],
        ["Killing machine", "Unlock all of the Heavy Weapon Support's abilities in multiplayer"],
        ["Master of Systems", "Lock a door aboard the Olethros"],
        ["Mutant sorcerer hunter", "Kill an hybrid psyker"],
        ["Phoenix light", "Unlock all of the Apothecary's abilities in multiplayer"],
        ["Sanctuary", "Use the Psygate"],
        ["Slayer of warrior-strain Genestealers", "Kill a warrior-strain Genestealer"],
        ["Strong Way", "Destroy a door aboard the Olethros"],
        ["Time lord", "Find all the major relics in the main campaign"],
    ];

    assert.strictEqual(officialAchievements.length, 23, "sanity check on this test's own reference list");

    const dataPairs = game.achievements
        .map(a => [a.name, a.description])
        .sort((a, b) => a[0].localeCompare(b[0]));

    assert.deepStrictEqual(dataPairs, [...officialAchievements].sort((a, b) => a[0].localeCompare(b[0])));

});
