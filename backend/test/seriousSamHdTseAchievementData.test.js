import { test } from "node:test";
import assert from "node:assert";

import { getPlannerData } from "../utils/plannerCatalog.js";

// backend/catalog/games/serious-sam-hd-tse.json - 70 real achievements sourced
// from a live ISteamUserStats/GetSchemaForGame/v2 response for appid
// 41010 (fetched through this app's own services/steamApi.js). None are
// hidden; every description is Steam's own real text.
// difficulty/estimatedTime/missable remain curatorial judgments.
const game = getPlannerData("serious-sam-hd-tse");

test("getPlannerData('serious-sam-hd-tse') returns real planner data with 70 curated achievements", () => {

    assert.ok(game, "expected real planner data for serious-sam-hd-tse");
    assert.ok(Array.isArray(game.achievements));
    assert.strictEqual(game.achievements.length, 70);

});

test("every Serious Sam HD: TSE achievement has a unique id from 1 to 70 and a unique apiname", () => {

    const ids = game.achievements.map(a => a.id);
    const apinames = game.achievements.map(a => a.apiname);

    assert.deepStrictEqual([...ids].sort((a, b) => a - b), Array.from({ length: 70 }, (_, i) => i + 1));
    assert.strictEqual(new Set(ids).size, 70);
    assert.strictEqual(new Set(apinames).size, 70);

});

test("every Serious Sam HD: TSE achievement has a valid difficulty (1-5), a positive estimatedTime, and non-empty name/description", () => {

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

test("every one of the 70 Serious Sam HD: TSE achievement name+description pairs matches the catalog data", () => {

    const officialAchievements = [
        ["1337 Fragger", "Frag a total of 1337 players."],
        ["Backstabber", "Frag 100 players with a knife from behind."],
        ["Balls of Steel", "Find all 3 Cannons in Teotihuacan - The City of the Gods."],
        ["Beast Hunt Beginner", "Win a Beast Hunt match on any level."],
        ["Beast Hunt Master", "Win a Beast Hunt match on all game levels."],
        ["Bird Hunter", "Kill 100 Harpies with the Sniper rifle."],
        ["Bone Crusher", "Kill 300 Kleers with the Cannon."],
        ["Braveheart", "Deliver the final blow to Mordekai with the Knife."],
        ["Burn Baby, Burn", "Burn 500 enemies to death."],
        ["Butcher", "Frag 100 players with a knife."],
        ["Capture The Flag Beginner", "Win a CTF match with at least 2 players on each team."],
        ["Capture The Flag Master", "Win 25 CTF matches with at least 2 players on each team."],
        ["Cathedral King", "Complete The Grand Cathedral level on serious difficulty without dying or loading."],
        ["Co-op Beginner", "Complete any level in at least 3 player cooperative game."],
        ["Coin-op Co-op", "Complete a Coin-op cooperative game on normal or higher difficulty."],
        ["Coin-op Gold Rush", "Pick up 100 gold coins in Coin-op Cooperative game."],
        ["Coin-op Life Saver", "Pick up at least 10 extra life items in Cooperative Coin-op game."],
        ["Cooperative Survival Beginner", "Earn at least a bronze medal on any level in cooperative Survival."],
        ["Cooperative Survival Master", "Earn gold medals on all Survival levels in cooperative Survival."],
        ["Crazy Fragger", "Frag a total of 500 players."],
        ["Deathmatch Beginner", "Complete a deathmatch game with at least 1 frag."],
        ["Deathmatch Champion", "Win 1000 Deathmatch games."],
        ["Deathmatch Duelist", "Win 25 1-on-1 Deathmatches."],
        ["Deathmatch Marathon", "Complete a Deathmatch with frag limit set to at least 200. (Frag limit must be reached!)"],
        ["Deathmatch Marathon Winner", "Win a Deathmatch Marathon."],
        ["Deathmatch Master", "Win 100 deathmatch games."],
        ["Deathmatch Veteran", "Complete 100 Deathmatches."],
        ["Desperate Fragger", "Frag 25 players with a knife while having no more than 10 health left."],
        ["Diverse Fragger", "Frag 100 different players."],
        ["Flag Thief", "Score a total of 100 points in CTF matches."],
        ["Frag Combo", "Perform 4 frags with each being no more than 10 seconds apart from the previous frag in at least 4 player Deathmatch."],
        ["Fragger", "Frag a total of 100 players."],
        ["Game Master", "Complete the game."],
        ["Grudge", "Frag the same player 5 times in a row in at least 4 player match."],
        ["Heavy Weight Champion", "Hold the Burden for at least 10 minutes in My Burden match with at least 3 players."],
        ["Instant Kill Beginner", "Make at least 3 kills in one Instant Kill match."],
        ["Instant Kill Master", "Win 100 Instant Kill matches."],
        ["Instant Kill Pro", "Frag 10 players without being killed in at least 4 player Instant Kill match."],
        ["Last Man Standing Beginner", "Win one round in Last Man Standing game with at least 4 players."],
        ["Last Man Standing Master", "Win 100 Last Man Standing matches with at least 4 players."],
        ["Last Team Standing Beginner", "Earn a round for your team in Last Team Standing game with at least 2 players on each team."],
        ["Last Team Standing Master", "Win 100 Last Team Standing matches with at least 2 players on each team."],
        ["Look Ma, I won!", "Win a Deathmatch."],
        ["Look, it's a secret", "Find at least 80 secrets in single player."],
        ["Matador", "Kill 50 Syrian Werebulls with a knife."],
        ["Medieval Master", "Complete the Medieval episode in single player or cooperative."],
        ["My Burden Beginner", "Win one My Burden match with at least 3 players."],
        ["My Burden Master", "Win 100 My Burden matches with at least 3 players."],
        ["Nemesis", "Frag the same player 10 times during a single round in at least 4 player match."],
        ["Persia Master", "Complete the Persia episode in single player or cooperative."],
        ["Rocket Jumper", "Perform 100 rocket jumps."],
        ["Rocket Man", "Get all 3 Rocket launchers in Palenque - Sierra de Chiapas."],
        ["Royal Frag Combo", "Frag all players in a single frag combo."],
        ["Sam I am", "Accumulate a total of 100,001 enemy kills and frags combined."],
        ["Serious Beginner", "Complete any level in single player."],
        ["Serious Fragger", "Frag a total of 1000 players."],
        ["Serious Run", "Complete the game in single player by beating estimated time on each level."],
        ["Serious Sam", "Complete the game in single player on serious difficulty."],
        ["South America Master", "Complete the South America episode in single player or cooperative."],
        ["Space Marine", "Kill 1000 enemies with the Laser gun."],
        ["Survival Beginner", "Earn at least a bronze medal on any level in single player Survival."],
        ["Survival Master", "Earn gold medals on all Survival levels in single player Survival."],
        ["Swordsman", "Frag 100 players in a knife-to-knife fight."],
        ["Team Beast Hunt Beginner", "Win a Team Beast Hunt match on any level with least 2 players on each team."],
        ["Team Beast Hunt Master", "Win a Team Beast Hunt match on all game levels with least 2 players on each team."],
        ["Team Deathmatch Beginner", "Win one Team Deathmatch with at least 2 players on each team."],
        ["Team Deathmatch Master", "Win 100 Team Deathmatches with at least 2 players on each team."],
        ["Top Secret", "Find all secrets in single player."],
        ["Treasure Diving", "Find a secret under water."],
        ["Untouchable", "Win an at least 4 player Deathmatch by reaching frag limit of at least 25 without dying."],
    ];

    assert.strictEqual(officialAchievements.length, 70, "sanity check on this test's own reference list");

    const dataPairs = game.achievements
        .map(a => [a.name, a.description])
        .sort((a, b) => a[0].localeCompare(b[0]));

    assert.deepStrictEqual(dataPairs, [...officialAchievements].sort((a, b) => a[0].localeCompare(b[0])));

});
