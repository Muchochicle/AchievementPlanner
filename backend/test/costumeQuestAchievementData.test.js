import { test } from "node:test";
import assert from "node:assert";

import { getPlannerData } from "../utils/plannerCatalog.js";

// backend/catalog/games/costume-quest.json - 21 real achievements sourced
// from a live ISteamUserStats/GetSchemaForGame/v2 response for appid
// 115100 (fetched through this app's own services/steamApi.js). None are
// hidden; every description is Steam's own real text.
// difficulty/estimatedTime/missable remain curatorial judgments.
const game = getPlannerData("costume-quest");

test("getPlannerData('costume-quest') returns real planner data with 21 curated achievements", () => {

    assert.ok(game, "expected real planner data for costume-quest");
    assert.ok(Array.isArray(game.achievements));
    assert.strictEqual(game.achievements.length, 21);

});

test("every Costume Quest achievement has a unique id from 1 to 21 and a unique apiname", () => {

    const ids = game.achievements.map(a => a.id);
    const apinames = game.achievements.map(a => a.apiname);

    assert.deepStrictEqual([...ids].sort((a, b) => a - b), Array.from({ length: 21 }, (_, i) => i + 1));
    assert.strictEqual(new Set(ids).size, 21);
    assert.strictEqual(new Set(apinames).size, 21);

});

test("every Costume Quest achievement has a valid difficulty (1-5), a positive estimatedTime, and non-empty name/description", () => {

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

test("every one of the 21 Costume Quest achievement name+description pairs matches the catalog data", () => {

    const officialAchievements = [
        ["All Decked Out", "Collect all Creepy Treat Cards."],
        ["Battle Buds", "Defeat a monster in combat with a friend by your side."],
        ["Binary Bouncer", "Use the Robot Costume to Boost off of 15 different ramps."],
        ["Birdbrain Beatdown", "Defeat Araxia in battle."],
        ["Chompin' Champ", "Win all prizes in Bobbing for Apples."],
        ["Do the Monster Bash", "Get the jump on 10 different monsters by pail bashing them to initiate combat."],
        ["Downsized!", "Defeat BoJonn in battle. "],
        ["Dozer Dodger", "Defeat Metxel in battle."],
        ["Dressed to Quest", "Acquire 5 Costumes."],
        ["Jeepers Peepers", "Acquire the Eyeball costume."],
        ["Leave some for the rest of us! ", "Collect a total of over 4,000 candies."],
        ["Make it Work", "Win the Autumn Haven Mall Costume Contest."],
        ["Mask-O'-Raider", "Complete all Quests in the game. "],
        ["Master of Disguise", "Use every Costume Ability in battle. "],
        ["Playin' Hooky", "Use the Pirate hook on 5 unique ziplines."],
        ["Revolutionary Hero", "Complete all quests in Repugia."],
        ["Short Stack", "Find the mysterious visitor in the cliffs of Repugia."],
        ["Sweet Justice", "Beat the game."],
        ["The Last Gourdian", "Acquire the Pumpkin Costume."],
        ["They'll be worth a lot someday", "Collect all Battle Stamps. "],
        ["Tisn't the Season", "Play Costume Quest on Christmas."],
    ];

    assert.strictEqual(officialAchievements.length, 21, "sanity check on this test's own reference list");

    const dataPairs = game.achievements
        .map(a => [a.name, a.description])
        .sort((a, b) => a[0].localeCompare(b[0]));

    assert.deepStrictEqual(dataPairs, [...officialAchievements].sort((a, b) => a[0].localeCompare(b[0])));

});
