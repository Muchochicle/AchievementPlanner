import { test } from "node:test";
import assert from "node:assert";

import { getPlannerData } from "../utils/plannerCatalog.js";

// backend/catalog/games/rogue-legacy.json - 29 real achievements sourced
// from a live ISteamUserStats/GetSchemaForGame/v2 response for appid
// 241600 (fetched through this app's own services/steamApi.js) - all 29
// ship a real, official Steam description. Rogue Legacy, like The Stanley
// Parable, RiME, and A Hat in Time, has zero hidden achievements, so the
// full list is checked here in one pass. difficulty/estimatedTime remain
// curatorial judgments, same convention as every other planner
// difficulty/time field in this catalog.
const rogueLegacy = getPlannerData("rogue-legacy");

test("getPlannerData('rogue-legacy') returns real planner data with 29 curated achievements", () => {

    assert.ok(rogueLegacy, "expected real planner data for rogue-legacy");
    assert.ok(Array.isArray(rogueLegacy.achievements));
    assert.strictEqual(rogueLegacy.achievements.length, 29);

});

test("every Rogue Legacy achievement has a unique id from 1 to 29 and a unique apiname", () => {

    const ids = rogueLegacy.achievements.map(a => a.id);
    const apinames = rogueLegacy.achievements.map(a => a.apiname);

    assert.deepStrictEqual([...ids].sort((a, b) => a - b), Array.from({ length: 29 }, (_, i) => i + 1));
    assert.strictEqual(new Set(ids).size, 29);
    assert.strictEqual(new Set(apinames).size, 29);

});

test("every Rogue Legacy achievement has a valid difficulty (1-5), a positive estimatedTime, and non-empty name/description", () => {

    for (const achievement of rogueLegacy.achievements) {

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

test("every one of the 29 official Rogue Legacy achievement name+description pairs matches the live GetSchemaForGame response", () => {

    const officialAchievements = [
        ["Biophobia", "Die 20 times or more."],
        ["Decidophobia", "Put at least one point in every skill in the manor."],
        ["Plutophobia", "Reach level 50 or higher."],
        ["Aurophilia", "Open your very first gold chest."],
        ["Gymnophobia", "Have one piece of equipment in every item slot."],
        ["Disposophobia", "Find all blueprints (purchase not necessary)."],
        ["Rhabdophilia", "Earn your very first Enchantress rune."],
        ["Cainotophilia", "Have one rune equipped in every item slot."],
        ["Ommetaphobia", "Defeat the boss in Castle Hamson."],
        ["Phasmophobia", "Defeat the boss in the Forest Abkhazia."],
        ["Pyrophobia", "Defeat the boss in the Maya."],
        ["Blennophobia", "Defeat the boss in the Land of Darkness."],
        ["Paterphobia", "Defeat the last boss."],
        ["Zoophobia", "Defeat all the minibosses."],
        ["Geminiphobia", "Beat the game… twice."],
        ["Bibliophilia", "Read the last journal entry."],
        ["Alektorophobia", "Kill a chicken."],
        ["Barophobia", "Use the special class at least once."],
        ["Atelophobia", "Choose a hero with no traits."],
        ["Somniphobia", "Play the game for at least 20 hours."],
        ["Coulrophilia", "Beat one of the clown's games at least once."],
        ["Gnosiophilia", "Find all the runes (purchase not necessary)."],
        ["Syngenesophobia", "Defeat the brothers."],
        ["Chemophobia", "Defeat the trademarked chemical."],
        ["Ostiophobia", "Defeat the son."],
        ["Scotomaphobia", "Defeat the doppleganger."],
        ["Astrophobia", "Defeat the asteroids."],
        ["Katagelasticism", "Mock the traitor."],
        ["Thanatophobia", "WITHOUT using the Architect, complete the game dying 15 times or less"]
    ];

    assert.strictEqual(officialAchievements.length, 29, "sanity check on this test's own reference list");

    const dataPairs = rogueLegacy.achievements
        .map(a => [a.name, a.description])
        .sort((a, b) => a[0].localeCompare(b[0]));

    const expectedPairs = [...officialAchievements].sort((a, b) => a[0].localeCompare(b[0]));

    assert.deepStrictEqual(dataPairs, expectedPairs);

});
