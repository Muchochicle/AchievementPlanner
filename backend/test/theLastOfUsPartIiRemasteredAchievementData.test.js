import { test } from "node:test";
import assert from "node:assert";

import { getPlannerData } from "../utils/plannerCatalog.js";

// backend/catalog/games/the-last-of-us-part-ii-remastered.json - 45 real achievements sourced
// from a live ISteamUserStats/GetSchemaForGame/v2 response for appid
// 2531310 (fetched through this app's own services/steamApi.js). None are
// hidden; every description is Steam's own real text.
// Hidden achievements have no Steam description; where present, their
// description here is researched from community 100% guides and cited in
// the frontend guide header. difficulty/estimatedTime/missable are curatorial.
const game = getPlannerData("the-last-of-us-part-ii-remastered");

test("getPlannerData('the-last-of-us-part-ii-remastered') returns real planner data with 45 curated achievements", () => {

    assert.ok(game, "expected real planner data for the-last-of-us-part-ii-remastered");
    assert.ok(Array.isArray(game.achievements));
    assert.strictEqual(game.achievements.length, 45);

});

test("every The Last of Us Part II Remastered achievement has a unique id from 1 to 45 and a unique apiname", () => {

    const ids = game.achievements.map(a => a.id);
    const apinames = game.achievements.map(a => a.apiname);

    assert.deepStrictEqual([...ids].sort((a, b) => a - b), Array.from({ length: 45 }, (_, i) => i + 1));
    assert.strictEqual(new Set(ids).size, 45);
    assert.strictEqual(new Set(apinames).size, 45);

});

test("every The Last of Us Part II Remastered achievement has a valid difficulty (1-5), a positive estimatedTime, and non-empty name/description", () => {

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

test("every one of the 45 The Last of Us Part II Remastered achievement name+description pairs matches the catalog data", () => {

    const officialAchievements = [
        ["Apprentice", "Learn a player upgrade"],
        ["Archivist", "Find all artifacts and journal entries"],
        ["Arms Master", "Fully upgrade all weapons"],
        ["Become The Hunter", "Kill 12 enemies in a Hunted encounter in No Return"],
        ["Biology Lesson", "Kill a Bloater with the pump shotgun as Bill in No Return"],
        ["Burglar", "Open the safe in Capture without killing any enemies in No Return"],
        ["Dig Two Graves", "Complete the story on Grounded."],
        ["Every Last One of Them", "Collect all the regular story achievements"],
        ["Good Riddance", "Beat all bosses"],
        ["Got Your Back", "Win a round of Holdout without your ally falling below 70% health in No Return"],
        ["High Caliber", "Find all weapons"],
        ["I Would Do It All Over Again", "Complete the story in chronological order"],
        ["In the Field", "Find 12 workbenches"],
        ["Journeyman", "Find all training manuals"],
        ["Looks Good On You", "Put a hat on your companion."],
        ["Master Set", "Find all trading cards"],
        ["May Your Death Be Swift", "Win a Daily Run of No Return on Grounded difficulty"],
        ["May Your Survival Be Long", "Win a Daily Run of No Return"],
        ["Mechanist", "Fully upgrade a weapon"],
        ["Mint Condition", "Find 5 coins"],
        ["Mixed Bag", "Get kills with 5 different weapons in an Assault encounter in No Return"],
        ["Modded", "Complete an encounter with each Mod in No Return"],
        ["Numismatist", "Find all coins"],
        ["Prepared For the Worst", "Find all workbenches"],
        ["Put My Name Up", "Score highly in the archery-target minigame by hitting 11 or more of the paper targets in the time limit."],
        ["Queen Firefly", "Kill 15 enemies with Marlene's assault rifle in one encounter in No Return"],
        ["Relic of the Sages", "Find the Strange Artifact"],
        ["Risk Taker", "Complete five gambits in one run of No Return"],
        ["Roll Call", "Win a run with every character in No Return"],
        ["Safecracker", "Unlock every safe"],
        ["Sharpshooter", "Win the marksmanship competition at the shooting range - nine bullets, no timer, land nine headshots for 90 points."],
        ["Sightseer", "Visit every location in downtown Seattle"],
        ["So Great and Small", "Find the Engraved Ring"],
        ["Specialist", "Learn all player upgrades in one branch"],
        ["Starter Set", "Find 5 trading cards"],
        ["Survival Expert", "Learn all player upgrades"],
        ["Survival Training", "Learn 25 player upgrades"],
        ["Team Abby", "Complete all Abby faction challenge tracks"],
        ["Team Ellie", "Complete all Ellie faction challenge tracks"],
        ["This Make You All Nostalgic?", "Complete the Part I challenge track in No Return"],
        ["Tinkerer", "Upgrade a weapon"],
        ["Tools of the Trade", "Craft every item"],
        ["True Strength", "Get an S rank on an encounter"],
        ["What I Had to Do", "Complete the story"],
        ["You Can't Stop This", "Complete the story with any Permadeath setting"],
    ];

    assert.strictEqual(officialAchievements.length, 45, "sanity check on this test's own reference list");

    const dataPairs = game.achievements
        .map(a => [a.name, a.description])
        .sort((a, b) => a[0].localeCompare(b[0]));

    assert.deepStrictEqual(dataPairs, [...officialAchievements].sort((a, b) => a[0].localeCompare(b[0])));

});
