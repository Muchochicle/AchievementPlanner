import { test } from "node:test";
import assert from "node:assert";

import { getPlannerData } from "../utils/plannerCatalog.js";

// backend/catalog/games/feist.json - 40 real achievements sourced
// from a live ISteamUserStats/GetSchemaForGame/v2 response for appid
// 327060 (fetched through this app's own services/steamApi.js). None are
// hidden; every description is Steam's own real text.
// Hidden achievements have no Steam description; where present, their
// description here is researched from community 100% guides and cited in
// the frontend guide header. difficulty/estimatedTime/missable are curatorial.
const game = getPlannerData("feist");

test("getPlannerData('feist') returns real planner data with 40 curated achievements", () => {

    assert.ok(game, "expected real planner data for feist");
    assert.ok(Array.isArray(game.achievements));
    assert.strictEqual(game.achievements.length, 40);

});

test("every FEIST achievement has a unique id from 1 to 40 and a unique apiname", () => {

    const ids = game.achievements.map(a => a.id);
    const apinames = game.achievements.map(a => a.apiname);

    assert.deepStrictEqual([...ids].sort((a, b) => a - b), Array.from({ length: 40 }, (_, i) => i + 1));
    assert.strictEqual(new Set(ids).size, 40);
    assert.strictEqual(new Set(apinames).size, 40);

});

test("every FEIST achievement has a valid difficulty (1-5), a positive estimatedTime, and non-empty name/description", () => {

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

test("every one of the 40 FEIST achievement name+description pairs matches the catalog data", () => {

    const officialAchievements = [
        ["Allrounder", "Complete level 3 «tools of the woods» without dying"],
        ["Archaeologist", "Complete level 9 «ruins of the past» without dying"],
        ["Avalanche rider", "Complete level 8 «all good comes from above» without dying"],
        ["Avenger", "Defeat all beasts"],
        ["Barbecue", "Lure 10 ticks into a fenlight"],
        ["Brief visit", "Complete level 7 «trespassing» in under 4m 10s"],
        ["Dancing in the rain", "Complete level 4 «down by the lake» in under 3m 45s"],
        ["Early Bird", "Complete level 1 «after a long night» without dying"],
        ["Escape artist", "Free yourself from the crate in under a minute"],
        ["Fire eater", "Complete level 10 «playing with fire» without dying"],
        ["Fire walk with me", "Complete level 10 «playing with fire» in under 3m 30s"],
        ["Flycatcher", "Catch a fly in mid-air"],
        ["Good head on your shoulders", "Don't get squashed by a hanging weight"],
        ["Hard luck", "Die during the quake after defeating a beast"],
        ["Intruder", "Complete level 7 «trespassing» without dying"],
        ["It was never meant to work like this", "Defeat the teleporting beast with a fly"],
        ["Jump start", "Complete level 1 «after a long night» in under 2m 30s"],
        ["Lumberjack", "Complete level 5 «a bad hair day» without dying"],
        ["Natural born brawler", "Defeat the three beasts in the ruins without the use of traps"],
        ["Never feel lonely again", "Free your mate"],
        ["Ouch!", "Defeat a beast with a stick"],
        ["Parkour", "Complete level 5 «a bad hair day» in under  4m 50s"],
        ["Pure luck!", "Avoid all the pit traps"],
        ["Raid through the ruins", "Complete level 9 «ruins of the past» in under 4m 30s"],
        ["Relay race", "Complete level 2 «a picnic» in under 2m 10s"],
        ["Rollercoaster", "Complete level 8 «all good comes from above» in under 1m 45s"],
        ["Run like hell", "Escape the collapsing mine without being crushed "],
        ["Short break", "Complete level 6 «dwellers in the dark» in under 4m 00s"],
        ["Spelunker", "Complete level 6 «dwellers in the dark» without dying"],
        ["Steeplechase", "Complete level 3 «tools of the woods» in under 4m 00"],
        ["Stockpile", "Use all burs by the river"],
        ["Strong cover", "Don't get hit by a dart trap before the cave"],
        ["Take a ride on the wild side", "Grab a beast's fur, hold tight, and take it for a ride"],
        ["Trapper", "Complete level 2 «a picnic» without dying"],
        ["Troublemaker", "Provoke an inchworm to hit another"],
        ["Vegetarian", "Complete a chapter without eating a midge"],
        ["Ward off the evil", "Parry a sting projectile"],
        ["Watch your toes", "Roll a boulder over a fly"],
        ["Water strider", "Complete level 4 «down by the lake» without dying"],
        ["Who placed it there anyway?", "Find a pine in the mine"],
    ];

    assert.strictEqual(officialAchievements.length, 40, "sanity check on this test's own reference list");

    const dataPairs = game.achievements
        .map(a => [a.name, a.description])
        .sort((a, b) => a[0].localeCompare(b[0]));

    assert.deepStrictEqual(dataPairs, [...officialAchievements].sort((a, b) => a[0].localeCompare(b[0])));

});
