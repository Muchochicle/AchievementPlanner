import { test } from "node:test";
import assert from "node:assert";

import { getPlannerData } from "../utils/plannerCatalog.js";

// backend/catalog/games/beat-hazard.json - 63 real achievements sourced
// from a live ISteamUserStats/GetSchemaForGame/v2 response for appid
// 49600 (fetched through this app's own services/steamApi.js). None are
// hidden; every description is Steam's own real text.
// difficulty/estimatedTime/missable remain curatorial judgments.
const game = getPlannerData("beat-hazard");

test("getPlannerData('beat-hazard') returns real planner data with 63 curated achievements", () => {

    assert.ok(game, "expected real planner data for beat-hazard");
    assert.ok(Array.isArray(game.achievements));
    assert.strictEqual(game.achievements.length, 63);

});

test("every Beat Hazard achievement has a unique id from 1 to 63 and a unique apiname", () => {

    const ids = game.achievements.map(a => a.id);
    const apinames = game.achievements.map(a => a.apiname);

    assert.deepStrictEqual([...ids].sort((a, b) => a - b), Array.from({ length: 63 }, (_, i) => i + 1));
    assert.strictEqual(new Set(ids).size, 63);
    assert.strictEqual(new Set(apinames).size, 63);

});

test("every Beat Hazard achievement has a valid difficulty (1-5), a positive estimatedTime, and non-empty name/description", () => {

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

test("every one of the 63 Beat Hazard achievement name+description pairs matches the catalog data", () => {

    const officialAchievements = [
        ["100!", "Complete 100 tracks"],
        ["1st Track Cleared", "Complete your first track"],
        ["25!", "Complete 25 tracks"],
        ["50!", "Complete 50 tracks"],
        ["A Real Dare Devil", "In Normal Mode get the Dare Devil multiplier 10 times"],
        ["A Real Mine Sweeper", "Hit 50 mines in one track without losing a life"],
        ["Boss Dance", "Survive with 4 bosses on the screen in Boss Rush mode"],
        ["Boss King", "Get to Wave 30 in Boss Rush mode"],
        ["Boss Slayer", "Kill 8 bosses in 1 game"],
        ["Brutal Boss Kill", "Kill a boss before it fires"],
        ["Cash Grab", "Get $10,000 in the bank"],
        ["Coming Through!", "Reach 15 Minutes in Survival Mode"],
        ["Completely Insane", "Complete a 4+ minute track on Insane difficulty"],
        ["Cool Tracks!", "Visit a musicians website from the Credits screen"],
        ["Death Blossom Shadow Mission", "Complete The Death Blossom Shadow Mission"],
        ["Death By A Thousand Cuts", "Get 10,000 kills using Micro Missiles"],
        ["Death Star", "Get 10,000 kills using the Ultra Beam power up"],
        ["Don't Panic", "Don't fire for 60 seconds"],
        ["Don't Stop Me Now", "Reach 10 Minutes in Survival Mode"],
        ["Dragon Fire Shadow Mission", "Complete The Dragon Fire Shadow Mission"],
        ["Dude of Hazard", "Score 10 Million Points"],
        ["Elite!", "Reach the rank of Elite"],
        ["Go Platinum", "In Normal Mode score 1 million points in one track"],
        ["Half Way There", "Reach the rank of Senior Officer"],
        ["High 5", "Accumulate 5 hours of play"],
        ["I'm Just Starting", "Reach 5 Minutes in Survival Mode"],
        ["Juggernaut Shadow Mission", "Complete  The Juggernaut Shadow Mission"],
        ["Mad MAXED", "Max out all the Perks"],
        ["Millionare", "Score 1 Million Points"],
        ["Mosquito Shadow Mission", "Complete  The Mosquito Shadow Mission"],
        ["Music Tour", "Score at least 1,000,000 on each built in track"],
        ["Muti Millionare", "Score 5 Million Points"],
        ["Perfect", "Complete a track of at least 3 minutes without losing a life"],
        ["Perk MAXED", "Buy all the upgrades for a Perk"],
        ["Perks!", "Unlock all the Perks"],
        ["Pwnage", "Get a 1,000 kill streak"],
        ["Razorburn Shadow Mission", "Complete The Razorburn Shadow Mission"],
        ["Reflection", "Reflect 150 projectiles with 1 Shield burst"],
        ["Shadow Rank Covert Agent", "Level up to Shadow Covert Agent"],
        ["Shadow Rank Operative", "Level up to Shadow Operative"],
        ["Shadow Rank Rookie", "Level up to Shadow Rookie"],
        ["Shadow Rank Shadow Captain", "Level up to Shadow Captain"],
        ["Shadow Rank Shadow Commander", "Level up to Shadow Commander"],
        ["Shadow Rank Shadow Force Elite", "Level up to Shadow Force Elite"],
        ["Shadow Rank Shadow Officer", "Level up to Shadow Officer"],
        ["Slick Shadow Mission", "Complete  The Slick Shadow Mission"],
        ["Speedy Shadow Mission", "Complete  The Speedy Shadow Mission"],
        ["Star Runner Shadow Mission", "Complete The Star Runner Shadow Mission"],
        ["Striptease", "Strip 2 bosses of their turrets and keep them alive for 60s"],
        ["Survival Champion!", "Reach 20 Minutes in Survival Mode"],
        ["Survive Christmas 10", "In Survival Mode last 10 mins while playing to a Christmas Radio Station"],
        ["Survive Christmas 15", "In Survival Mode last 15 mins while playing to a Christmas Radio Station"],
        ["Survive Christmas 20", "In Survival Mode last 20 mins while playing to a Christmas Radio Station"],
        ["Survive Christmas 5", "In Survival Mode last 5 mins while playing to a Christmas Radio Station"],
        ["The Collector Shadow Mission", "Complete The Collector Shadow Mission"],
        ["The First Hour", "Accumulate 1 hour of play"],
        ["The First Step", "Level up"],
        ["Tough Guy", "Complete a 4+ minute track on Suicidal difficulty"],
        ["Tug of War", "Have a 10 second tug of war with a Stalker"],
        ["Ultra Beam of Death", "Kill 150 enemies with 1 Ultra Beam blast"],
        ["Untouchable", "Reflect 10,000 projectiles using the Reflect Shield power up"],
        ["Veteran", "Accumulate 10 hours of play"],
        ["x100", "Get a x100 Multiplier"],
    ];

    assert.strictEqual(officialAchievements.length, 63, "sanity check on this test's own reference list");

    const dataPairs = game.achievements
        .map(a => [a.name, a.description])
        .sort((a, b) => a[0].localeCompare(b[0]));

    assert.deepStrictEqual(dataPairs, [...officialAchievements].sort((a, b) => a[0].localeCompare(b[0])));

});
