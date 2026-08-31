import { test } from "node:test";
import assert from "node:assert";

import { getPlannerData } from "../utils/plannerCatalog.js";

// backend/catalog/games/serious-sam-hd-tfe.json - 35 real achievements sourced
// from a live ISteamUserStats/GetSchemaForGame/v2 response for appid
// 41000 (fetched through this app's own services/steamApi.js). None are
// hidden; every description is Steam's own real text.
// difficulty/estimatedTime/missable remain curatorial judgments.
const game = getPlannerData("serious-sam-hd-tfe");

test("getPlannerData('serious-sam-hd-tfe') returns real planner data with 35 curated achievements", () => {

    assert.ok(game, "expected real planner data for serious-sam-hd-tfe");
    assert.ok(Array.isArray(game.achievements));
    assert.strictEqual(game.achievements.length, 35);

});

test("every Serious Sam HD: TFE achievement has a unique id from 1 to 35 and a unique apiname", () => {

    const ids = game.achievements.map(a => a.id);
    const apinames = game.achievements.map(a => a.apiname);

    assert.deepStrictEqual([...ids].sort((a, b) => a - b), Array.from({ length: 35 }, (_, i) => i + 1));
    assert.strictEqual(new Set(ids).size, 35);
    assert.strictEqual(new Set(apinames).size, 35);

});

test("every Serious Sam HD: TFE achievement has a valid difficulty (1-5), a positive estimatedTime, and non-empty name/description", () => {

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

test("every one of the 35 Serious Sam HD: TFE achievement name+description pairs matches the catalog data", () => {

    const officialAchievements = [
        ["1337 Fragger", "Frag a total of 1337 players."],
        ["Backstabber", "Frag 100 players with a knife from behind."],
        ["Butcher", "Frag 100 players with a knife."],
        ["Cannon Expert", "Pierce at least 10 enemies with a single cannonball."],
        ["Co-op Beginner", "Complete any level in co-op."],
        ["Co-op Hippy", "Complete The Great Pyramid in co-op with blood option set to hippy."],
        ["Crazy Fragger", "Frag a total of 500 players."],
        ["Deathmatch Champion", "Win 1000 deathmatch games."],
        ["Deathmatch Duelist", "Win 25 1-on-1 deathmatches."],
        ["Deathmatch Marathon", "Complete a deathmatch with frag limit set to at least 200. (Frag limit must be reached!)"],
        ["Deathmatch Marathon Winner", "Win a deathmatch marathon."],
        ["Deathmatch Master", "Win 100 deathmatch games."],
        ["Deathmatch Veteran", "Complete 100 deathmatches."],
        ["Desperate Fragger", "Frag 25 players with a knife while having no more than 10 health left."],
        ["Diverse Fragger", "Frag 100 different players in deathmatch."],
        ["Frag Combo", "Perform 4 frags with each being no more than 10 seconds apart from the previous frag in at least 4 player deathmatch."],
        ["Fragger", "Frag a total of 100 players."],
        ["Game Master", "Complete the game."],
        ["Grudge", "Frag the same player 5 times in a row in at least 4 player deathmatch."],
        ["I am invincible", "Complete the game in single player without firing a single bullet or shell."],
        ["Look Ma, I won!", "Win a deathmatch."],
        ["Look, it's a secret", "Find at least 50 secrets in single player."],
        ["Metropolis King", "Complete Metropolis level in single player on serious difficulty without loading."],
        ["Nemesis", "Frag the same player 10 times during a single round in at least 4 player deathmatch."],
        ["Perfect Kill", "Kill all enemies in Karnak in single player."],
        ["Rocket Jumper", "Perform 100 rocket jumps."],
        ["Royal Frag Combo", "Frag all players in a single frag combo."],
        ["Serious Beginner", "Complete any level in single player."],
        ["Serious Co-op", "Complete a co-op game on serious difficulty and extra enemy strength on 400%."],
        ["Serious Fragger", "Frag a total of 1000 players."],
        ["Serious Run", "Complete the game in single player by beating estimated time on each level."],
        ["Serious Sam", "Complete the game in single player on serious difficulty."],
        ["Swimming Instructor", "Drown an enemy."],
        ["Swordsman", "Frag 100 players in a knife-to-knife fight."],
        ["Untouchable", "Win an at least 4 player deathmatch by reaching frag limit of at least 25 without dying."],
    ];

    assert.strictEqual(officialAchievements.length, 35, "sanity check on this test's own reference list");

    const dataPairs = game.achievements
        .map(a => [a.name, a.description])
        .sort((a, b) => a[0].localeCompare(b[0]));

    assert.deepStrictEqual(dataPairs, [...officialAchievements].sort((a, b) => a[0].localeCompare(b[0])));

});
