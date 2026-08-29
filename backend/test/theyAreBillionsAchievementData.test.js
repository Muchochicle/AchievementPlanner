import { test } from "node:test";
import assert from "node:assert";

import { getPlannerData } from "../utils/plannerCatalog.js";

// backend/catalog/games/they-are-billions.json - 34 real achievements sourced
// from a live ISteamUserStats/GetSchemaForGame/v2 response for appid
// 644930 (fetched through this app's own services/steamApi.js).
// This game has no hidden achievements: all 34 ship a real, official
// Steam description, quoted verbatim below.
// difficulty/estimatedTime/missable remain curatorial judgments.
const game = getPlannerData("they-are-billions");

test("getPlannerData('they-are-billions') returns real planner data with 34 curated achievements", () => {

    assert.ok(game, "expected real planner data for they-are-billions");
    assert.ok(Array.isArray(game.achievements));
    assert.strictEqual(game.achievements.length, 34);

});

test("every They Are Billions achievement has a unique id from 1 to 34 and a unique apiname", () => {

    const ids = game.achievements.map(a => a.id);
    const apinames = game.achievements.map(a => a.apiname);

    assert.deepStrictEqual([...ids].sort((a, b) => a - b), Array.from({ length: 34 }, (_, i) => i + 1));
    assert.strictEqual(new Set(ids).size, 34);
    assert.strictEqual(new Set(apinames).size, 34);

});

test("every They Are Billions achievement has a valid difficulty (1-5), a positive estimatedTime, and non-empty name/description", () => {

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

test("every one of the 34 They Are Billions achievement name+description pairs matches the live GetSchemaForGame response", () => {

    const officialAchievements = [
        ["Best General", "Win a Survival game (Score Factor >= 100%) with no casualties. No Attack Towers allowed."],
        ["Colony Mayor Level 1", "Build a colony with 1.000 colonists."],
        ["Colony Mayor Level 2", "Build a colony with 2.000 colonists."],
        ["Colony Mayor Level 3", "Build a colony with 5.000 colonists."],
        ["Colony Mayor Level 4", "Build a colony with 10.000 colonists."],
        ["For Quintus! Level 1", "Win The New Empire Campaign with a score of 10.000 victory points."],
        ["For Quintus! Level 2", "Win The New Empire Campaign with a score of 25.000 victory points."],
        ["For Quintus! Level 3", "Win The New Empire Campaign with a score of 40.000 victory points."],
        ["For Quintus! Level 4", "Win The New Empire Campaign with a score of 70.000 victory points."],
        ["Giant Slayer Level 1", "Kill an Infected Giant."],
        ["Giant Slayer Level 2", "Kill two Infected Giant on the same map."],
        ["Giant Slayer Level 3", "Kill three Infected Giant on the same map."],
        ["Infected Killer Level 1", "10.000 infected killed!"],
        ["Infected Killer Level 10", "100 Millions infected killed!"],
        ["Infected Killer Level 2", "50.000 infected killed!"],
        ["Infected Killer Level 3", "100.000 infected killed!"],
        ["Infected Killer Level 4", "500.000 infected killed!"],
        ["Infected Killer Level 5", "1 Million infected killed!"],
        ["Infected Killer Level 6", "2 Millions infected killed!"],
        ["Infected Killer Level 7", "5 Millions infected killed!"],
        ["Infected Killer Level 8", "10 Millions infected killed!"],
        ["Infected Killer Level 9", "50 Millions infected killed!"],
        ["No Towers Needed", "Win a Survival game (Score Factor >= 200%) without using Attack Towers like Ballista or Executor."],
        ["Open Mind", "Win a Survival game (Score Factor >= 100%) without using walls, gates and towers."],
        ["Peaceful", "Win a Survival game (Score Factor >= 100%) with no new units trained."],
        ["Ranger Revenge", "Win a Survival game (Score Factor >= 100%) with just Rangers in your army. No Attack Towers allowed."],
        ["Sniper Slaughter", "Win a Survival game (Score Factor >= 100%) with just Snipers in your army. No Attack Towers allowed."],
        ["Soldier Wrath", "Win a Survival game (Score Factor >= 100%) with just Soldiers in your army. No Attack Towers allowed."],
        ["Survivor Level 1", "Win a Survival game on Easy mode."],
        ["Survivor Level 2", "Win a Survival game on Accesible mode."],
        ["Survivor Level 3", "Win a Survival game on Challenging mode."],
        ["Survivor Level 4", "Win a Survival game on Brutal mode."],
        ["The Most Wonderful Colony", "Build the six wonders in your colony."],
        ["Unstoppable ", "Win a Survival game (Score Factor >= 100%) without pausing the game."],
    ];

    assert.strictEqual(officialAchievements.length, 34, "sanity check on this test's own reference list");

    const dataPairs = game.achievements
        .map(a => [a.name, a.description])
        .sort((a, b) => a[0].localeCompare(b[0]));

    assert.deepStrictEqual(dataPairs, [...officialAchievements].sort((a, b) => a[0].localeCompare(b[0])));

});
