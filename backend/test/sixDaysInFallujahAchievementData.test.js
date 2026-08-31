import { test } from "node:test";
import assert from "node:assert";

import { getPlannerData } from "../utils/plannerCatalog.js";

// backend/catalog/games/six-days-in-fallujah.json - 34 real achievements sourced
// from a live ISteamUserStats/GetSchemaForGame/v2 response for appid
// 1548850 (fetched through this app's own services/steamApi.js). None are
// hidden; every description is Steam's own real text.
// Hidden achievements have no Steam description; where present, their
// description here is researched from community 100% guides and cited in
// the frontend guide header. difficulty/estimatedTime/missable are curatorial.
const game = getPlannerData("six-days-in-fallujah");

test("getPlannerData('six-days-in-fallujah') returns real planner data with 34 curated achievements", () => {

    assert.ok(game, "expected real planner data for six-days-in-fallujah");
    assert.ok(Array.isArray(game.achievements));
    assert.strictEqual(game.achievements.length, 34);

});

test("every Six Days in Fallujah achievement has a unique id from 1 to 34 and a unique apiname", () => {

    const ids = game.achievements.map(a => a.id);
    const apinames = game.achievements.map(a => a.apiname);

    assert.deepStrictEqual([...ids].sort((a, b) => a - b), Array.from({ length: 34 }, (_, i) => i + 1));
    assert.strictEqual(new Set(ids).size, 34);
    assert.strictEqual(new Set(apinames).size, 34);

});

test("every Six Days in Fallujah achievement has a valid difficulty (1-5), a positive estimatedTime, and non-empty name/description", () => {

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

test("every one of the 34 Six Days in Fallujah achievement name+description pairs matches the catalog data", () => {

    const officialAchievements = [
        ["Amusement Park Tactician", "Complete Jolan Amusement Park single-player, playing with an AI fireteam."],
        ["Amusement Park Veteran", "Complete a Jolan Amusement Park mission with Hard AI difficulty."],
        ["Apartment Expert", "Complete a FUBAR Apartment Building Mission with Hard AI difficulty."],
        ["Apartment Tactician", "Complete Apartment Building single-player, playing with an AI fireteam."],
        ["Apartment Veteran", "Complete an Apartment Building mission with Hard AI difficulty."],
        ["Assist", "Complete a fireteam mission playing the ASSIST role, who specializes in CQB."],
        ["Band of Brothers", "Complete a fireteam mission with a full fireteam of players from your Friends List."],
        ["Fire", "Complete a fireteam mission playing the FIRE role, who uses the M249 SAW and specializes in suppression."],
        ["Firewatch Medal", "Complete training."],
        ["First Promotion", "Congratulations! You earned your first stripe!"],
        ["Heal a Teammate", "Interact with a downed teammate to prevent bleeding out and bring them back into the battle."],
        ["HLZ Wolf Tactician", "Complete HLZ Wolf single-player, playing with an AI fireteam."],
        ["HLZ Wolf Veteran", "Complete an HLZ Wolf mission with Hard AI difficulty."],
        ["Jolan Square Expert", "Complete a FUBAR Jolan Public Square Mission with Hard AI difficulty."],
        ["Jolan Square Tactician", "Complete Jolan Public Square single-player, playing with an AI fireteam."],
        ["Jolan Square Veteran", "Complete a Jolan Public Square mission with Hard AI difficulty."],
        ["Objective Virginia Tactician", "Complete Objective Virginia single-player, playing with an AI fireteam."],
        ["Objective Virginia Veteran", "Complete an Objective Virginia mission with Hard AI difficulty."],
        ["Operation al-Fajr Veteran", "Complete the Operation al-Fajr Campaign Mission."],
        ["Own the Night", "Complete a mission during the \"Flare\" Time of Day."],
        ["Phase Line Henry Expert", "Complete a FUBAR Phase Line Henry Mission with Hard AI difficulty."],
        ["Phase Line Henry Tactician", "Complete Phase Line Henry single-player, playing with an AI fireteam."],
        ["Phase Line Henry Veteran", "Complete a Phase Line Henry mission with Hard AI difficulty."],
        ["Proven Leader", "Successfully complete a 4 player fireteam mission as Team Lead with minimal loss."],
        ["Ready", "Complete a fireteam mission playing the READY role, who specializes as the fireteam's scout."],
        ["Ride Out the Storm", "Complete a mission during a Sandstorm."],
        ["Six in Six", "Play Six Days for six hours."],
        ["Slow is Smooth, Smooth is Fast", "Complete a FUBAR mission on Hard AI difficulty, with no deaths."],
        ["Train Station Expert", "Complete a FUBAR Northern Train Station Mission with Hard AI difficulty."],
        ["Train Station Tactician", "Complete Northern Train Station single-player, playing with an AI fireteam."],
        ["Train Station Veteran", "Complete a Northern Train Station mission with Hard AI difficulty."],
        ["Vigilant Resolve Veteran", "Complete the Vigilant Resolve Campaign Mission."],
        ["West Manor Tactician", "Complete West Manor single-player, playing with an AI fireteam."],
        ["West Manor Veteran", "Complete a West Manor mission with Hard AI difficulty."],
    ];

    assert.strictEqual(officialAchievements.length, 34, "sanity check on this test's own reference list");

    const dataPairs = game.achievements
        .map(a => [a.name, a.description])
        .sort((a, b) => a[0].localeCompare(b[0]));

    assert.deepStrictEqual(dataPairs, [...officialAchievements].sort((a, b) => a[0].localeCompare(b[0])));

});
