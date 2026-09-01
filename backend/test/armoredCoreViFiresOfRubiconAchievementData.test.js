import { test } from "node:test";
import assert from "node:assert";

import { getPlannerData } from "../utils/plannerCatalog.js";

// backend/catalog/games/armored-core-vi-fires-of-rubicon.json - 30 real achievements sourced
// from a live ISteamUserStats/GetSchemaForGame/v2 response for appid
// 1888160 (fetched through this app's own services/steamApi.js).
// Hidden achievements have no Steam description; where present, their
// description here is researched from community 100% guides and cited in
// the frontend guide header. difficulty/estimatedTime/missable are curatorial.
const game = getPlannerData("armored-core-vi-fires-of-rubicon");

test("getPlannerData('armored-core-vi-fires-of-rubicon') returns real planner data with 30 curated achievements", () => {

    assert.ok(game, "expected real planner data for armored-core-vi-fires-of-rubicon");
    assert.ok(Array.isArray(game.achievements));
    assert.strictEqual(game.achievements.length, 30);

});

test("every Armored Core VI achievement has a unique id from 1 to 30 and a unique apiname", () => {

    const ids = game.achievements.map(a => a.id);
    const apinames = game.achievements.map(a => a.apiname);

    assert.deepStrictEqual([...ids].sort((a, b) => a - b), Array.from({ length: 30 }, (_, i) => i + 1));
    assert.strictEqual(new Set(ids).size, 30);
    assert.strictEqual(new Set(apinames).size, 30);

});

test("every Armored Core VI achievement has a valid difficulty (1-5), a positive estimatedTime, and non-empty name/description", () => {

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

test("every one of the 30 Armored Core VI achievement name+description pairs matches the catalog data", () => {

    const officialAchievements = [
        ["A New Threat", "Clear the mission 'Attack the Old Spaceport' (Chapter 3)."],
        ["Alea Iacta Est", "Reach the ending 'Alea Iacta Est' (route 1 - one of three mutually exclusive endings)."],
        ["Armored Core", "Unlocked all achievements."],
        ["Asset Holder", "Obtain all parts (unlocks after the weapon, external, internal and expansion collector achievements)."],
        ["Ayre and the Coral", "Clear the mission 'Destroy the Ice Worm' (the final Chapter 3 mission)."],
        ["Combat Log Collector", "Obtain all combat logs (dropped by specific enemy ACs during missions)."],
        ["Contact", "Clear the mission 'Attack the Watchpoint' (the final Chapter 1 mission)."],
        ["Data Log Collector", "Obtain ten data logs (collected during missions)."],
        ["Expansion Collector", "Obtain all four Core Expansions (bought with OST Chips in OS Tuning)."],
        ["External Parts Collector", "Obtain all frame parts (every Head, Core, Arms and Legs)."],
        ["Graphic Designer", "Changed the coloration of your AC."],
        ["Hardware Engineer", "Assembled an AC."],
        ["Illegal Entry", "Clear the mission 'Illegal Entry' (the first mission)."],
        ["Internal Parts Collector", "Obtain all inner parts (every Booster, FCS and Generator)."],
        ["Into Unknown Territory", "Clear the mission 'Underground Exploration - Depths 3' (Chapter 4)."],
        ["Liberator of Rubicon", "Reach the ending 'Liberator of Rubicon' (route 3 - one of three mutually exclusive endings)."],
        ["Master of Arena", "Clear all Arena programs (across the base game, New Game+ and New Game++)."],
        ["MIA", "Clear the mission 'MIA' (New Game++ only)."],
        ["Ocean Crossing", "Clear the mission 'Ocean Crossing' (the final Chapter 2 mission)."],
        ["Operation Wallclimber", "Clear the mission 'Operation Wallclimber' (Chapter 1)."],
        ["Re-education", "Clear the mission 'Reach the Coral Convergence' (the final Chapter 4 mission)."],
        ["Software Engineer", "Upgraded your AC's OS."],
        ["Stargazer", "Clear all missions (requires three playthroughs to access every mission)."],
        ["Testing Complete", "Clear all combat aptitude evaluation programs in the Arena (in your first playthrough)."],
        ["The Fires of Raven", "Reach the ending 'The Fires of Raven' (route 2 - one of three mutually exclusive endings)."],
        ["The Floating City", "Clear the mission 'Take the Uninhabited Floating City' (Chapter 5)."],
        ["The Perfect Mercenary", "Clear all missions with an S Rank rating (via Mission Replay after the story)."],
        ["Training Complete", "Clear all training programs (from the Sortie menu)."],
        ["Tuning Expert", "Perform all OS Tuning upgrades (needs enough OST Chips from Arena)."],
        ["Weapon Collector", "Obtain all weapon parts (every R-Arm, L-Arm, R-Back and L-Back unit)."],
    ];

    assert.strictEqual(officialAchievements.length, 30, "sanity check on this test's own reference list");

    const dataPairs = game.achievements
        .map(a => [a.name, a.description])
        .sort((a, b) => a[0].localeCompare(b[0]));

    assert.deepStrictEqual(dataPairs, [...officialAchievements].sort((a, b) => a[0].localeCompare(b[0])));

});
