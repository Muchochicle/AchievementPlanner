import { test } from "node:test";
import assert from "node:assert";

import { getPlannerData } from "../utils/plannerCatalog.js";

// backend/catalog/games/styx-master-of-shadows.json - 33 real achievements sourced
// from a live ISteamUserStats/GetSchemaForGame/v2 response for appid
// 242640 (fetched through this app's own services/steamApi.js). None are
// hidden; every description is Steam's own real text.
// Hidden achievements have no Steam description; where present, their
// description here is researched from community 100% guides and cited in
// the frontend guide header. difficulty/estimatedTime/missable are curatorial.
const game = getPlannerData("styx-master-of-shadows");

test("getPlannerData('styx-master-of-shadows') returns real planner data with 33 curated achievements", () => {

    assert.ok(game, "expected real planner data for styx-master-of-shadows");
    assert.ok(Array.isArray(game.achievements));
    assert.strictEqual(game.achievements.length, 33);

});

test("every Styx: Master of Shadows achievement has a unique id from 1 to 33 and a unique apiname", () => {

    const ids = game.achievements.map(a => a.id);
    const apinames = game.achievements.map(a => a.apiname);

    assert.deepStrictEqual([...ids].sort((a, b) => a - b), Array.from({ length: 33 }, (_, i) => i + 1));
    assert.strictEqual(new Set(ids).size, 33);
    assert.strictEqual(new Set(apinames).size, 33);

});

test("every Styx: Master of Shadows achievement has a valid difficulty (1-5), a positive estimatedTime, and non-empty name/description", () => {

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

test("every one of the 33 Styx: Master of Shadows achievement name+description pairs matches the catalog data", () => {

    const officialAchievements = [
        ["Akenash's Atrium", "Finished mission 1"],
        ["Army of clones", "Create 30 clones"],
        ["Born in the shadow", "Extinguish 30 torches"],
        ["Conflagration", "Finished mission 6"],
        ["Deliverance", "Finished mission 3"],
        ["Dodge this", "Kill an enemy who was bound by a clone"],
        ["Dose of his own medicine", "Kill an Inquisitor in an open sword duel."],
        ["Expendable", "Let 15 clones die"],
        ["Goblin snack", "Give an orc one of your clones to eat"],
        ["Goblin-tossing", "Kill an enemy with an aerial kill"],
        ["Great power...", "Unlock all skills"],
        ["Indigestion", "Kill an enemy by poisoning the food"],
        ["Like looking through a wall", "Manage to disable three guards, or more, inside a clone's smoke bomb"],
        ["Master key", "Finished mission 2"],
        ["Music Lover", "Look at the World Tree for a long time (an easter egg)."],
        ["My precious", "Gather all the treasures"],
        ["Outstanding duelist", "Kill 20 enemies in open (sword-duel) combat."],
        ["Passkey", "Unlock 20 doors"],
        ["Pretentious", "Do not use any item during a mission"],
        ["Reminiscences", "Finish the introduction"],
        ["Renaissance", "Finish mission 7, the final mission ('Renaissance')."],
        ["Serial killer", "Eliminate 200 enemies in total - your kills and your clones' kills both count."],
        ["Sharpshooter", "Kill more than 40 guards with throwing knives."],
        ["Sticky-fingered", "Pick pocket 15 guards"],
        ["Sudden silence…", "Perform 50 silent kills (muffled sneak-attack kills only)."],
        ["Suicide mission", "Eliminate a guard with a booby trapped clone"],
        ["The architect", "Finished mission 5"],
        ["The creator", "Finished mission 4"],
        ["Tidy up your room!", "No body found during a mission"],
        ["Unquenched thirst", "Drink 20 vials of amber"],
        ["Unseen, unknown", "Unlock the Insignia of the Shadow for each mission"],
        ["Watch out below! ", "Kill two or more enemies by making a chandelier drop on them"],
        ["Wrong turn", "Kill an enemy with a covered kill"],
    ];

    assert.strictEqual(officialAchievements.length, 33, "sanity check on this test's own reference list");

    const dataPairs = game.achievements
        .map(a => [a.name, a.description])
        .sort((a, b) => a[0].localeCompare(b[0]));

    assert.deepStrictEqual(dataPairs, [...officialAchievements].sort((a, b) => a[0].localeCompare(b[0])));

});
