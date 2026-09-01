import { test } from "node:test";
import assert from "node:assert";

import { getPlannerData } from "../utils/plannerCatalog.js";

// backend/catalog/games/a-plague-tale-innocence.json - 35 real achievements sourced
// from a live ISteamUserStats/GetSchemaForGame/v2 response for appid
// 752590 (fetched through this app's own services/steamApi.js).
// Hidden achievements have no Steam description; where present, their
// description here is researched from community 100% guides and cited in
// the frontend guide header. difficulty/estimatedTime/missable are curatorial.
const game = getPlannerData("a-plague-tale-innocence");

test("getPlannerData('a-plague-tale-innocence') returns real planner data with 35 curated achievements", () => {

    assert.ok(game, "expected real planner data for a-plague-tale-innocence");
    assert.ok(Array.isArray(game.achievements));
    assert.strictEqual(game.achievements.length, 35);

});

test("every A Plague Tale: Innocence achievement has a unique id from 1 to 35 and a unique apiname", () => {

    const ids = game.achievements.map(a => a.id);
    const apinames = game.achievements.map(a => a.apiname);

    assert.deepStrictEqual([...ids].sort((a, b) => a - b), Array.from({ length: 35 }, (_, i) => i + 1));
    assert.strictEqual(new Set(ids).size, 35);
    assert.strictEqual(new Set(apinames).size, 35);

});

test("every A Plague Tale: Innocence achievement has a valid difficulty (1-5), a positive estimatedTime, and non-empty name/description", () => {

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

test("every one of the 35 A Plague Tale: Innocence achievement name+description pairs matches the catalog data", () => {

    const officialAchievements = [
        ["Alchemist", "Craft 100 ammunitions"],
        ["Alive", "Complete Chapter 11: Alive."],
        ["All That Remains", "Complete Chapter 12: All That Remains."],
        ["Big sister", "Find all the gifts for the orphans"],
        ["Blood Ties", "Complete Chapter 14: Blood Ties."],
        ["Botanist", "Find all the flowers"],
        ["Captain Sidekick", "Stay with the captain"],
        ["Coronation", "Complete Chapter 16: Coronation."],
        ["Curiosities collector", "Find all curiosities"],
        ["Curiosities hunter", "Find 13 curiosities"],
        ["Damaged Goods", "Complete Chapter 6: Damaged Goods."],
        ["Feeding the hungry", "Find a lunch for Hugo"],
        ["Found!", "Play hide-and-seek"],
        ["Handfull of pockets", "Fully upgrade the equipment"],
        ["Herbalist", "Find 6 flowers"],
        ["In the Shadow of Ramparts", "Complete Chapter 9: In the Shadow of Ramparts."],
        ["Knights!", "Complete all chapters"],
        ["Merciful", "Save the dying"],
        ["More practice", "Complete the aiming training"],
        ["Not a toy anymore", "Fully upgrade the sling"],
        ["Our Home", "Complete Chapter 8: Our Home."],
        ["Penance", "Complete Chapter 13: Penance."],
        ["Remembrance", "Complete Chapter 15: Remembrance."],
        ["Resource sharing", "Enter into the 5 alchemist carts"],
        ["Retribution", "Complete Chapter 3: Retribution."],
        ["Savior", "Save a soldier"],
        ["The Apprentice", "Complete Chapter 4: The Apprentice."],
        ["The Blacksmith", "Find Rodric's forge"],
        ["The de Rune Legacy", "Complete Chapter 1: The de Rune Legacy."],
        ["The hard way", "Enter through the main door"],
        ["The Path Before Us", "Complete Chapter 7: The Path Before Us."],
        ["The Ravens' Spoils", "Complete Chapter 5: The Ravens' Spoils."],
        ["The Strangers", "Complete Chapter 2: The Strangers."],
        ["The Way of Roses", "Complete Chapter 10: The Way of Roses."],
        ["Tribute", "Find the tomb"],
    ];

    assert.strictEqual(officialAchievements.length, 35, "sanity check on this test's own reference list");

    const dataPairs = game.achievements
        .map(a => [a.name, a.description])
        .sort((a, b) => a[0].localeCompare(b[0]));

    assert.deepStrictEqual(dataPairs, [...officialAchievements].sort((a, b) => a[0].localeCompare(b[0])));

});
