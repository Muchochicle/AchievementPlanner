import { test } from "node:test";
import assert from "node:assert";

import { getPlannerData } from "../utils/plannerCatalog.js";

// backend/catalog/games/sniper-elite-nazi-zombie-army.json - 26 real achievements sourced
// from a live ISteamUserStats/GetSchemaForGame/v2 response for appid
// 227100 (fetched through this app's own services/steamApi.js). None are
// hidden; every description is Steam's own real text.
// difficulty/estimatedTime/missable remain curatorial judgments.
const game = getPlannerData("sniper-elite-nazi-zombie-army");

test("getPlannerData('sniper-elite-nazi-zombie-army') returns real planner data with 26 curated achievements", () => {

    assert.ok(game, "expected real planner data for sniper-elite-nazi-zombie-army");
    assert.ok(Array.isArray(game.achievements));
    assert.strictEqual(game.achievements.length, 26);

});

test("every Sniper Elite: Nazi Zombie Army achievement has a unique id from 1 to 26 and a unique apiname", () => {

    const ids = game.achievements.map(a => a.id);
    const apinames = game.achievements.map(a => a.apiname);

    assert.deepStrictEqual([...ids].sort((a, b) => a - b), Array.from({ length: 26 }, (_, i) => i + 1));
    assert.strictEqual(new Set(ids).size, 26);
    assert.strictEqual(new Set(apinames).size, 26);

});

test("every Sniper Elite: Nazi Zombie Army achievement has a valid difficulty (1-5), a positive estimatedTime, and non-empty name/description", () => {

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

test("every one of the 26 Sniper Elite: Nazi Zombie Army achievement name+description pairs matches the catalog data", () => {

    const officialAchievements = [
        ["..My BOOMSTICK!", "Kill any 100 enemy with the shotgun"],
        ["Bottles of Blood", "Find and shoot all the bottles of blood"],
        ["Don't mention the Z word!", "Successfully complete Chapter 1 with 4  players"],
        ["Explosive Personality!", "Kill a suicide grunt by hitting his grenade"],
        ["Good, bad, I'm the guy with the gun.", "Kill 20 Elites in co-op"],
        ["Groovy!", "Pick up a shotgun"],
        ["Have you come in contact with...the infected?", "Own 2 Nazi Zombie Army games"],
        ["I have given them the last Reichs.", "Get at least 10 for 1 explosive kill in 4 player co-op"],
        ["I ran it under a cold tap.", "Get at least 20 for 1 explosive kill in 4 player co-op"],
        ["I will not negotiate with the Undead", "Kill 5000 enemies"],
        ["I’m coming to get you Barbara!", "Kill 1000 enemies"],
        ["Like a drunk who's lost a bet.", "Kill 20 enemies as they revive"],
        ["Nazi Army Gold", "Collect all Gold Bars"],
        ["No more room in hell", "Successfully complete Chapter 5 with 4  players"],
        ["Play it Thule", "Successfully complete Chapter 3 with 4  players"],
        ["Resurrect this!", "Kill the Occult General"],
        ["Resurrection Day", "Successfully complete Chapter 2 with 4  players"],
        ["Send...more...Paramedics..", "Successfully complete All Chapters 4 players on Elite Difficulty"],
        ["Soul survivor", "Kick 50 enemies down in co-op"],
        ["The pen is mightier than the sidearm", "Successfully complete Chapter 4 with 4  players"],
        ["The Preacher says BOOM!", "Pick up the Preacher"],
        ["They're all messed up", "Get at least 15 for 1 explosive kill in 4 player co-op"],
        ["We got this by the ass!", "Kill 500 enemy grunts"],
        ["You got rid of those stiffs yet?", "Kill 100 skeletons with explosives"],
        ["You’ve got red on you", "Kill 2000 enemy grunts in co-op"],
        ["Your blood pressure is zero over zero.", "Kill 20 Snipers in co-op"],
    ];

    assert.strictEqual(officialAchievements.length, 26, "sanity check on this test's own reference list");

    const dataPairs = game.achievements
        .map(a => [a.name, a.description])
        .sort((a, b) => a[0].localeCompare(b[0]));

    assert.deepStrictEqual(dataPairs, [...officialAchievements].sort((a, b) => a[0].localeCompare(b[0])));

});
