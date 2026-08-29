import { test } from "node:test";
import assert from "node:assert";

import { getPlannerData } from "../utils/plannerCatalog.js";

// backend/catalog/games/nightingale.json - 28 real achievements sourced
// from a live ISteamUserStats/GetSchemaForGame/v2 response for appid
// 1928980 (fetched through this app's own services/steamApi.js).
// This game has no hidden achievements: all 28 ship a real, official
// Steam description, quoted verbatim below.
// difficulty/estimatedTime/missable remain curatorial judgments.
const game = getPlannerData("nightingale");

test("getPlannerData('nightingale') returns real planner data with 28 curated achievements", () => {

    assert.ok(game, "expected real planner data for nightingale");
    assert.ok(Array.isArray(game.achievements));
    assert.strictEqual(game.achievements.length, 28);

});

test("every Nightingale achievement has a unique id from 1 to 28 and a unique apiname", () => {

    const ids = game.achievements.map(a => a.id);
    const apinames = game.achievements.map(a => a.apiname);

    assert.deepStrictEqual([...ids].sort((a, b) => a - b), Array.from({ length: 28 }, (_, i) => i + 1));
    assert.strictEqual(new Set(ids).size, 28);
    assert.strictEqual(new Set(apinames).size, 28);

});

test("every Nightingale achievement has a valid difficulty (1-5), a positive estimatedTime, and non-empty name/description", () => {

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

test("every one of the 28 Nightingale achievement name+description pairs matches the live GetSchemaForGame response", () => {

    const officialAchievements = [
        ["A Safe Haven", "Visit The Watch."],
        ["Act of Defiance", "Procure translations for Puck's mysterious Glyph."],
        ["Ad Astra", "Complete Welkin's Reach Main Quests."],
        ["Balm and Bitterness", "Find a new home for the Being of Welkin's Reach."],
        ["Building Bridges", "Alleviate the tensions between the Village and the Refugee Encampment in Sylvan's Cradle."],
        ["Doctor's Assistant", "Complete 'The Modern Prometheus' Questline"],
        ["Double-Tongued", "Gain approval from both Wilhelmina Sasse and Bass Reeves."],
        ["Faith in Fools", "Complete 'Troubles Within and Without' Questline."],
        ["First Fledgling Steps", "Complete the Abeyance Main Quests."],
        ["Friend of the Grendels", "Complete 'The Matriarch's Lament' Questline."],
        ["Geoarcane Initiate", "Complete 'A Safe Haven' Questline."],
        ["In Grove or Green", "Complete Gloriana's Tears Main Quests."],
        ["Muckraker", "Gain Wilhelmina Sasse's approval by sharing confidential information about Bass Reeves."],
        ["Prospective Squire", "Complete 'St Michael's Chosen' Questline."],
        ["Riddlemaster", "Complete 'The Riddles of Taliesin' Questline."],
        ["Run the Gauntlet", "Face the Fabled Automaton Bishop, the Sun Giant, and the Elder Eoten in The Gauntlet."],
        ["Shelter in the Storm ", "Aid the survivors from the Calcularian Airfleet crash."],
        ["Sheriff's Deputy", "Gain Bass Reeves's approval by warning him about Wilhelmina Sasse's ploy."],
        ["Spirit Communion", "Complete 'Lessons of the Loa' Questline."],
        ["The Devil You Know", "Agree to keep Oisin McAvoy's ugly secret."],
        ["The Histories", "Complete the Hollowed Moor Main Quest."],
        ["The Letter of the Law", "Complete the Quests 'Arm Yourself' and 'Target Practice'."],
        ["The Love of the Unknown", "Complete 'A Gateway to The Watch' Questline."],
        ["The Place They Go Towards", "Complete Sylvan's Cradle Main Quests."],
        ["Through a Glass Darkly", "Share an ugly truth with the Mayor of Magwytch Town."],
        ["Titan of Industry", "Complete Magwytch Marshes Main Quests."],
        ["To Praise Despair", "Uncover the truth about the penitent of Sylvan's Cradle."],
        ["Wolf in Sheep's Clothing", "Uncover the Magwytch Marshes Personnel Files."],
    ];

    assert.strictEqual(officialAchievements.length, 28, "sanity check on this test's own reference list");

    const dataPairs = game.achievements
        .map(a => [a.name, a.description])
        .sort((a, b) => a[0].localeCompare(b[0]));

    assert.deepStrictEqual(dataPairs, [...officialAchievements].sort((a, b) => a[0].localeCompare(b[0])));

});
