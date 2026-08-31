import { test } from "node:test";
import assert from "node:assert";

import { getPlannerData } from "../utils/plannerCatalog.js";

// backend/catalog/games/kingdom-classic.json - 34 real achievements sourced
// from a live ISteamUserStats/GetSchemaForGame/v2 response for appid
// 368230 (fetched through this app's own services/steamApi.js). None are
// hidden; every description is Steam's own real text.
// difficulty/estimatedTime/missable remain curatorial judgments.
const game = getPlannerData("kingdom-classic");

test("getPlannerData('kingdom-classic') returns real planner data with 34 curated achievements", () => {

    assert.ok(game, "expected real planner data for kingdom-classic");
    assert.ok(Array.isArray(game.achievements));
    assert.strictEqual(game.achievements.length, 34);

});

test("every Kingdom: Classic achievement has a unique id from 1 to 34 and a unique apiname", () => {

    const ids = game.achievements.map(a => a.id);
    const apinames = game.achievements.map(a => a.apiname);

    assert.deepStrictEqual([...ids].sort((a, b) => a - b), Array.from({ length: 34 }, (_, i) => i + 1));
    assert.strictEqual(new Set(ids).size, 34);
    assert.strictEqual(new Set(apinames).size, 34);

});

test("every Kingdom: Classic achievement has a valid difficulty (1-5), a positive estimatedTime, and non-empty name/description", () => {

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

test("every one of the 34 Kingdom: Classic achievement name+description pairs matches the catalog data", () => {

    const officialAchievements = [
        [" On the Second Day I Got a Gift", "Get free walls on the second day."],
        ["By Day Six I Was Rich", "Have more gold than you can carry by day six."],
        ["By the Seventh Day I Cleared an Acre", "Clear an acre of land before the end of day seven."],
        ["Day C", "Survive past day 100"],
        ["Day L", "Survive past day 50"],
        ["Day LV", "Survive past day 55"],
        ["Day LX", "Survive past day 60"],
        ["Day LXV", "Survive past day 65"],
        ["Day LXX", "Survive past day 70"],
        ["Day LXXV", "Survive past day 75"],
        ["Day LXXX", "Survive past day 80"],
        ["Day LXXXV", "Survive past day 85"],
        ["Day V", "Survive past day 5. "],
        ["Day X", "Survive past day 10"],
        ["Day XC", "Survive past day 90"],
        ["Day XCV", "Survive past day 95"],
        ["Day XL", "Survive past day 40"],
        ["Day XLV", "Survive past day 45"],
        ["Day XV", "Survive past day 15"],
        ["Day XX", "Survive past day 20"],
        ["Day XXV", "Survive past day 25"],
        ["Day XXX", "Survive past day 30"],
        ["Day XXXV", "Survive past day 35"],
        ["For Five Days I Turned the Other Cheek", "Kill nothing until day six."],
        ["On the Eighth Day I Fumbled", "A nimble ruler will never let his money touch the ground."],
        ["On the First Day I Built an Army", "Recruit 8 archers on the first day."],
        ["On the Fourth Day We Had a Feast", "Hunt 20 deer before the end of day four."],
        ["On the Ninth Day I First Ran", "Do not let your steed run away before this day."],
        ["On the Third Day I Lit a Fire", "Do not start your camp until day 3."],
        ["Safe in 25", "Secure the crown by making your kingdom safe from harm."],
        ["Safe in 30", "Secure the crown by making your kingdom safe from harm."],
        ["Safe in 35", "Secure the crown by making your kingdom safe from harm."],
        ["Safe in 40", "Secure the crown by making your kingdom safe from harm."],
        ["The Tenth Day We Fought Back", "Destroy by this day from whence they came!"],
    ];

    assert.strictEqual(officialAchievements.length, 34, "sanity check on this test's own reference list");

    const dataPairs = game.achievements
        .map(a => [a.name, a.description])
        .sort((a, b) => a[0].localeCompare(b[0]));

    assert.deepStrictEqual(dataPairs, [...officialAchievements].sort((a, b) => a[0].localeCompare(b[0])));

});
