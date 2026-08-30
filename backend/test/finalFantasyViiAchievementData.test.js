import { test } from "node:test";
import assert from "node:assert";

import { getPlannerData } from "../utils/plannerCatalog.js";

// backend/catalog/games/final-fantasy-vii.json - 36 real achievements sourced
// from a live ISteamUserStats/GetSchemaForGame/v2 response for appid
// 39140 (fetched through this app's own services/steamApi.js). None are
// hidden; every description is Steam's own real text.
// difficulty/estimatedTime/missable remain curatorial judgments.
const game = getPlannerData("final-fantasy-vii");

test("getPlannerData('final-fantasy-vii') returns real planner data with 36 curated achievements", () => {

    assert.ok(game, "expected real planner data for final-fantasy-vii");
    assert.ok(Array.isArray(game.achievements));
    assert.strictEqual(game.achievements.length, 36);

});

test("every FINAL FANTASY VII achievement has a unique id from 1 to 36 and a unique apiname", () => {

    const ids = game.achievements.map(a => a.id);
    const apinames = game.achievements.map(a => a.apiname);

    assert.deepStrictEqual([...ids].sort((a, b) => a - b), Array.from({ length: 36 }, (_, i) => i + 1));
    assert.strictEqual(new Set(ids).size, 36);
    assert.strictEqual(new Set(apinames).size, 36);

});

test("every FINAL FANTASY VII achievement has a valid difficulty (1-5), a positive estimatedTime, and non-empty name/description", () => {

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

test("every one of the 36 FINAL FANTASY VII achievement name+description pairs matches the catalog data", () => {

    const officialAchievements = [
        ["All Creation", "Get Yuffie's last Limit Break"],
        ["Bahamut Zero", "Get materia Bahamut Zero"],
        ["Battle Square", "Start a battle in the Battle Square"],
        ["Beat Rush", "Use Tifa's 1st limit"],
        ["Big Shot", "Use Barret's 1st limit"],
        ["Boost Jump", "Use Cid's 1st limit"],
        ["Braver", "Use Cloud's 1st limit"],
        ["Catastrophe", "Get Barret's last Limit Break"],
        ["Chaos", "Get Vincent's last Limit Break"],
        ["Cosmo Memory", "Get Red XIII's last Limit Break"],
        ["Diamond Weapon", "Defeat the Diamond Weapon"],
        ["Dice", "Use Cait Sith's 1st limit"],
        ["Emerald Weapon", "Defeat the Emerald Weapon"],
        ["End of Game", "Complete FINAL FANTASY VII"],
        ["End of Part I", "Complete the first part of the game"],
        ["End of Part II", "Complete the second part of the game"],
        ["Final Heaven", "Get Tifa's last Limit Break"],
        ["Galian Beast", "Use Vincent's 1st limit"],
        ["Gold Chocobo", "Get a Gold Chocobo"],
        ["Greased Lightning", "Use Yuffie’s 1st limit"],
        ["Great Gospel", "Get Aeris's last Limit Break"],
        ["Healing Wind", "Use Aeris's 1st limit"],
        ["Highwind", "Get Cid's last Limit Break"],
        ["Knights of the Round", "Get materia Knights of the Round"],
        ["Master Materia", "Reach the maximum level of any Materia"],
        ["Master of Gil", "99,999,999 Gil"],
        ["Materia Overlord", "Master all Materias"],
        ["Omnislash", "Get Cloud's last Limit Break"],
        ["Ruby Weapon", "Defeat the Ruby Weapon"],
        ["Sled Fang", "Use Red XIII's 1st limit"],
        ["Slots", "Get Cait Sith's last Limit Break"],
        ["Top Level", "Reach level 99 with any character"],
        ["Ultimate Weapon", "Defeat the Ultimate Weapon"],
        ["Vincent", "Get Vincent on your team"],
        ["Won 1st battle", "Win your first battle"],
        ["Yuffie", "Get Yuffie on your team"],
    ];

    assert.strictEqual(officialAchievements.length, 36, "sanity check on this test's own reference list");

    const dataPairs = game.achievements
        .map(a => [a.name, a.description])
        .sort((a, b) => a[0].localeCompare(b[0]));

    assert.deepStrictEqual(dataPairs, [...officialAchievements].sort((a, b) => a[0].localeCompare(b[0])));

});
