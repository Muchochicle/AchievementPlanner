import { test } from "node:test";
import assert from "node:assert";

import { getPlannerData } from "../utils/plannerCatalog.js";

// backend/catalog/games/company-of-heroes-3.json - 36 real achievements sourced
// from a live ISteamUserStats/GetSchemaForGame/v2 response for appid
// 1677280 (fetched through this app's own services/steamApi.js). None are
// hidden; every description is Steam's own real text.
// difficulty/estimatedTime/missable remain curatorial judgments.
const game = getPlannerData("company-of-heroes-3");

test("getPlannerData('company-of-heroes-3') returns real planner data with 36 curated achievements", () => {

    assert.ok(game, "expected real planner data for company-of-heroes-3");
    assert.ok(Array.isArray(game.achievements));
    assert.strictEqual(game.achievements.length, 36);

});

test("every Company of Heroes 3 achievement has a unique id from 1 to 36 and a unique apiname", () => {

    const ids = game.achievements.map(a => a.id);
    const apinames = game.achievements.map(a => a.apiname);

    assert.deepStrictEqual([...ids].sort((a, b) => a - b), Array.from({ length: 36 }, (_, i) => i + 1));
    assert.strictEqual(new Set(ids).size, 36);
    assert.strictEqual(new Set(apinames).size, 36);

});

test("every Company of Heroes 3 achievement has a valid difficulty (1-5), a positive estimatedTime, and non-empty name/description", () => {

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

test("every one of the 36 Company of Heroes 3 achievement name+description pairs matches the catalog data", () => {

    const officialAchievements = [
        ["0K", "Complete a Mission or Skirmish without losing a Squad"],
        ["Afrikakorps Mastery", "Earn 3000 Perk Points as Afrikakorps."],
        ["Anniehilator", "Silence Anzio Annie"],
        ["British Forces Mastery", "Earn 3000 Perk Points as British."],
        ["But Still They Lead Me Back", "Win 25 Multiplayer or Skirmish matches"],
        ["Carnage", "Kill 1,000 enemy units."],
        ["Company Commander V3", "Use Battlegroup Abilities 100 times"],
        ["Decapitation", "Kill a boss squad before killing any other squad in the wave."],
        ["Defensive Line", "Earn a medal on 5 different maps."],
        ["El Alamost", "Complete the North Africa Operation"],
        ["Fan Of Support", "Purchase a Detachment"],
        ["Full Stop", "Issue an order in Tactical Pause"],
        ["Gung Ho", "Gain 100% loyalty with Buckram"],
        ["Gustav Breaker", "Break the Gustav Line"],
        ["Heroic Stand", "Earn a gold medal."],
        ["Historical Reparation", "Save Monte Cassino"],
        ["Hot Dog!", "Complete the Italy Campaign"],
        ["Impenetrable", "Earn a gold medal without losing any Outposts."],
        ["It Always Leads Me Here", "Win a Multiplayer or Skirmish match"],
        ["Lest We Forget", "Collect all Soldier Stories"],
        ["Master Of Full Stops", "Issue 500 orders in Tactical Pause"],
        ["No Quarter", "Win a Multiplayer or Skirmish match without losing a Victory Point ticket"],
        ["Overwhelming Numbers", "Reach 150 population."],
        ["Slow And Steady", "Gain 100% loyalty with Norton"],
        ["Sweet Victory", "Heal a unit with ice cream"],
        ["Tactical Supremacy", "Activate 20 player abilities in a Final Stand match."],
        ["Terra Nostra", "Gain 100% loyalty with Valenti"],
        ["The Cover-up", "Uncover a conspiracy"],
        ["The First Step", "Complete Mission Zero"],
        ["The Second Step", "Complete Calabria"],
        ["The Way Forward", "Decide where to go after Salerno"],
        ["United Front", "Earn a medal in co-op mode."],
        ["US Forces Mastery", "Earn 3000 Perk Points as Americans."],
        ["Volturno Breaker", "Break the Volturno Line"],
        ["Wehrmacht Mastery", "Earn 3000 Perk Points as Germans."],
        ["You're Missing The Point", "Complete a Mission or Skirmish without reinforcing a Squad"],
    ];

    assert.strictEqual(officialAchievements.length, 36, "sanity check on this test's own reference list");

    const dataPairs = game.achievements
        .map(a => [a.name, a.description])
        .sort((a, b) => a[0].localeCompare(b[0]));

    assert.deepStrictEqual(dataPairs, [...officialAchievements].sort((a, b) => a[0].localeCompare(b[0])));

});
