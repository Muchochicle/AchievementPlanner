import { test } from "node:test";
import assert from "node:assert";

import { getPlannerData } from "../utils/plannerCatalog.js";

// backend/catalog/games/duck-game.json - 18 real achievements sourced
// from a live ISteamUserStats/GetSchemaForGame/v2 response for appid
// 312530 (fetched through this app's own services/steamApi.js).
// 3 of them are hidden and ship no official Steam description;
// those keep their real name with a curatorial (researched) description.
// difficulty/estimatedTime/missable remain curatorial judgments.
const game = getPlannerData("duck-game");

test("getPlannerData('duck-game') returns real planner data with 18 curated achievements", () => {

    assert.ok(game, "expected real planner data for duck-game");
    assert.ok(Array.isArray(game.achievements));
    assert.strictEqual(game.achievements.length, 18);

});

test("every Duck Game achievement has a unique id from 1 to 18 and a unique apiname", () => {

    const ids = game.achievements.map(a => a.id);
    const apinames = game.achievements.map(a => a.apiname);

    assert.deepStrictEqual([...ids].sort((a, b) => a - b), Array.from({ length: 18 }, (_, i) => i + 1));
    assert.strictEqual(new Set(ids).size, 18);
    assert.strictEqual(new Set(apinames).size, 18);

});

test("every Duck Game achievement has a valid difficulty (1-5), a positive estimatedTime, and non-empty name/description", () => {

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

test("every one of the 18 Duck Game achievement name+description pairs matches the catalog data", () => {

    const officialAchievements = [
        ["<3", "Finish 50 whole games."],
        ["Arcade Master", "Get best trophy in all challenges."],
        ["Basement Dweller", "Unlock the arcade basement."],
        ["Books are Fun", "Win a round in a 4 player match by converting all players to your team."],
        ["Complete Gamester (1674)", "Level up the hidden experience system all the way to its maximum - the natural endpoint of repeatedly raising \"little men\" (see That's My Boy and Jukebox Hero); reaching max level unlocks all three of these hidden achievements together if pursued as one long grind."],
        ["Dr. Death", "Kill 3 ducks at the same time with the Death Ray."],
        ["Draw Breaker", "Break 10 draws."],
        ["Duck Gamer", "Spawn 100 times."],
        ["Endurance", "Play through a match that goes to 50 points."],
        ["Flat Top Intervention", "Crush 50 ducks."],
        ["Hot Stuff", "Spend 15 minutes on fire with any one profile."],
        ["Jukebox Hero", "Raise 8 different \"little men\" through their full growth cycle (see That's My Boy) - the same egg-to-adult leveling process repeated 8 times on the same profile."],
        ["Never Mined, I won", "Win a round while standing on a mine."],
        ["Outgoing", "Win 10 online matches."],
        ["Pillow Maker", "Kill 1000 ducks with any one profile."],
        ["Power User", "Play on 10 different custom maps."],
        ["Ritual Duck Gamer", "Spawn 1000 times."],
        ["That's My Boy", "Raise a \"little man\" all the way through its full growth cycle with one profile - the game's hidden leveling system starts you with an egg that hatches and grows as you accumulate experience from matches, eventually maturing into an adult who \"goes to college.\" Reaching that final stage once pops the achievement."],
    ];

    assert.strictEqual(officialAchievements.length, 18, "sanity check on this test's own reference list");

    const dataPairs = game.achievements
        .map(a => [a.name, a.description])
        .sort((a, b) => a[0].localeCompare(b[0]));

    assert.deepStrictEqual(dataPairs, [...officialAchievements].sort((a, b) => a[0].localeCompare(b[0])));

});

test("the 3 hidden Duck Game achievement(s) each keep their real name and a non-empty curatorial description", () => {

    const hiddenNames = ["That's My Boy", "Jukebox Hero", "Complete Gamester (1674)"];

    for (const name of hiddenNames) {
        const achievement = game.achievements.find(a => a.name === name);
        assert.ok(achievement, `expected to find hidden achievement "${name}"`);
        assert.ok(achievement.description?.length > 0, `${name} is missing its curatorial description`);
    }

});
