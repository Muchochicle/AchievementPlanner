import { test } from "node:test";
import assert from "node:assert";

import { getPlannerData } from "../utils/plannerCatalog.js";

// backend/catalog/games/towerfall.json - 30 real achievements sourced
// from a live ISteamUserStats/GetSchemaForGame/v2 response for appid
// 251470 (fetched through this app's own services/steamApi.js).
// This game has no hidden achievements: all 30 ship a real, official
// Steam description, quoted verbatim below.
// difficulty/estimatedTime/missable remain curatorial judgments.
const game = getPlannerData("towerfall");

test("getPlannerData('towerfall') returns real planner data with 30 curated achievements", () => {

    assert.ok(game, "expected real planner data for towerfall");
    assert.ok(Array.isArray(game.achievements));
    assert.strictEqual(game.achievements.length, 30);

});

test("every TowerFall achievement has a unique id from 1 to 30 and a unique apiname", () => {

    const ids = game.achievements.map(a => a.id);
    const apinames = game.achievements.map(a => a.apiname);

    assert.deepStrictEqual([...ids].sort((a, b) => a - b), Array.from({ length: 30 }, (_, i) => i + 1));
    assert.strictEqual(new Set(ids).size, 30);
    assert.strictEqual(new Set(apinames).size, 30);

});

test("every TowerFall achievement has a valid difficulty (1-5), a positive estimatedTime, and non-empty name/description", () => {

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

test("every one of the 30 TowerFall achievement name+description pairs matches the catalog data", () => {

    const officialAchievements = [
        ["Ascension", "Discover Ascension"],
        ["Battle Stenography", "Earn 90% of the awards in Versus mode"],
        ["Cataclysm", "[Dark World Expansion] Complete Cataclysm in Dark World mode"],
        ["Creation Myth", "Discover TowerForge"],
        ["Crimson Shield", "Earn 8 red skulls in Quest mode"],
        ["Dark World Conquerors", "[Dark World Expansion] Complete the four main stages of Dark World mode on Legendary difficulty"],
        ["Demented Thespian", "Unlock the Cyan Archer"],
        ["Demon Queen", "Unlock the Purple Archer"],
        ["Dex Check", "Beat 10 diamond times in Trials mode"],
        ["Dream Team", "[Dark World Expansion] Complete the four main stages of Dark World mode on Hardcore difficulty"],
        ["Exuluna", "Unlock the White Archer"],
        ["Fabled Recluse", "Unlock the Yellow Archer"],
        ["Golden Goddess", "Earn 14 red skulls in Quest mode"],
        ["High Treason", "Put on the King's crown"],
        ["Lady Abigail", "[Dark World Expansion] Complete Dreadwood in Dark World mode"],
        ["Last Stand", "[Dark World Expansion] Complete Cataclysm in Dark World mode, on Legendary difficulty with no continues"],
        ["Massive Mythology", "Play 5,000 rounds of Versus mode"],
        ["Omens", "Discover Moonstone"],
        ["Overlords", "[Dark World Expansion] Complete Dark Gauntlet in Dark World mode, on Legendary difficulty with 2 or more curses active"],
        ["Rapture", "Complete Ascension in Quest mode"],
        ["Reaper's Crown", "Earn a gold skull on King's Court in Quest mode"],
        ["Serpent Hymns", "Discover Sunken City"],
        ["Sleepy Master", "Fall asleep in combat"],
        ["Speed of Light", "Hyper Jump across a level"],
        ["Tall Tales", "Play 1,000 rounds of Versus mode"],
        ["The Blind Lich", "[Dark World Expansion] Complete Darkfang in Dark World mode"],
        ["Thief's Badge", "Beat 30 diamond times in Trials mode"],
        ["Time Lord", "[Dark World Expansion] Complete all 48 stages in Trials mode, with a total best time of under 3:00"],
        ["Way of the Order", "Complete the first 3 towers of Quest mode"],
        ["Wretched Seer", "[Dark World Expansion] Complete The Amaranth in Dark World mode"],
    ];

    assert.strictEqual(officialAchievements.length, 30, "sanity check on this test's own reference list");

    const dataPairs = game.achievements
        .map(a => [a.name, a.description])
        .sort((a, b) => a[0].localeCompare(b[0]));

    assert.deepStrictEqual(dataPairs, [...officialAchievements].sort((a, b) => a[0].localeCompare(b[0])));

});
