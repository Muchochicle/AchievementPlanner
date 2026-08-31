import { test } from "node:test";
import assert from "node:assert";

import { getPlannerData } from "../utils/plannerCatalog.js";

// backend/catalog/games/call-of-duty-black-ops-2.json - 35 real achievements sourced
// from a live ISteamUserStats/GetSchemaForGame/v2 response for appid
// 202970 (fetched through this app's own services/steamApi.js). None are
// hidden; every description is Steam's own real text.
// difficulty/estimatedTime/missable remain curatorial judgments.
const game = getPlannerData("call-of-duty-black-ops-2");

test("getPlannerData('call-of-duty-black-ops-2') returns real planner data with 35 curated achievements", () => {

    assert.ok(game, "expected real planner data for call-of-duty-black-ops-2");
    assert.ok(Array.isArray(game.achievements));
    assert.strictEqual(game.achievements.length, 35);

});

test("every Call of Duty: Black Ops II achievement has a unique id from 1 to 35 and a unique apiname", () => {

    const ids = game.achievements.map(a => a.id);
    const apinames = game.achievements.map(a => a.apiname);

    assert.deepStrictEqual([...ids].sort((a, b) => a - b), Array.from({ length: 35 }, (_, i) => i + 1));
    assert.strictEqual(new Set(ids).size, 35);
    assert.strictEqual(new Set(apinames).size, 35);

});

test("every Call of Duty: Black Ops II achievement has a valid difficulty (1-5), a positive estimatedTime, and non-empty name/description", () => {

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

test("every one of the 35 Call of Duty: Black Ops II achievement name+description pairs matches the catalog data", () => {

    const officialAchievements = [
        ["Art of War", "Successfully assassinate SDC Chairman Tian Zhao."],
        ["Back in Time", "Use a future weapon in the past."],
        ["Black Ops II Master", "Complete the campaign on Hardened or Veteran difficulty."],
        ["Blind Date", "Successfully rescue HVI."],
        ["Dead or Alive", "Jailor or executioner. "],
        ["Death from Above", "Stop Menendez once and for all."],
        ["Deep Cover", "Capture Menendez."],
        ["Defender", "Successfully defend FOB Spectre from incursion."],
        ["Desert Storm", "Successfully escort the VIPs to safety."],
        ["Dirty Business", "Listen and think before you shoot."],
        ["Driven by Rage", "Take down Menendez and his operation."],
        ["False Profit", "Capture Manuel Noriega and bring him to justice."],
        ["Family Reunion", "There are two futures."],
        ["Futurist", "Complete all future levels in veteran."],
        ["Gathering Storm", "Investigate the jungle facility."],
        ["Giant Accomplishment", "Complete all challenges in Black Ops II. "],
        ["Good Karma", "Crack the celerium worm."],
        ["Gun Nut", "Complete a level with customized loadout."],
        ["Hey Good Looking", "Plastic surgery avoided."],
        ["High IQ", "Collect all intel."],
        ["Just Gettin' Started", "Complete 1 challenge in any level."],
        ["Late for the Prom", "Escort the president to the secure location in downtown LA."],
        ["Man of the People", "Stop the brutality inflicted by the PDF."],
        ["Mission Complete", "Complete all challenges in a level. "],
        ["No Man Left Behind", "Rescue Woods."],
        ["Old Fashioned", "Complete \"Pyrrhic Victory\", \"Old Wounds\", \"Time And Fate\", and \"Suffer With Me\" in Veteran."],
        ["Shifting Sands", "Gather intel on Raul Menendez from Mullah Rahmaan."],
        ["Ship Shape", "Reinforcements on the way."],
        ["Showdown", "A duel between rivals."],
        ["Singapore Sling", "Successfully neutralize the SDC freighter at Keppel Terminal."],
        ["Sinking Star", "Interrogate Menendez."],
        ["Ten K", "Minimum score of 10k in every mission."],
        ["Ultimate Sacrifice", "Only one can survive."],
        ["Waterlogged", "Gather information on Raul Menendez' suspected terrorist plot."],
        ["What Happens in Colossus...", "Find the Karma weapon."],
    ];

    assert.strictEqual(officialAchievements.length, 35, "sanity check on this test's own reference list");

    const dataPairs = game.achievements
        .map(a => [a.name, a.description])
        .sort((a, b) => a[0].localeCompare(b[0]));

    assert.deepStrictEqual(dataPairs, [...officialAchievements].sort((a, b) => a[0].localeCompare(b[0])));

});
