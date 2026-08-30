import { test } from "node:test";
import assert from "node:assert";

import { getPlannerData } from "../utils/plannerCatalog.js";

// backend/catalog/games/trine-4.json - 39 real achievements sourced
// from a live ISteamUserStats/GetSchemaForGame/v2 response for appid
// 690640 (fetched through this app's own services/steamApi.js). None are
// hidden; every description is Steam's own real text.
// difficulty/estimatedTime/missable remain curatorial judgments.
const game = getPlannerData("trine-4");

test("getPlannerData('trine-4') returns real planner data with 39 curated achievements", () => {

    assert.ok(game, "expected real planner data for trine-4");
    assert.ok(Array.isArray(game.achievements));
    assert.strictEqual(game.achievements.length, 39);

});

test("every Trine 4 achievement has a unique id from 1 to 39 and a unique apiname", () => {

    const ids = game.achievements.map(a => a.id);
    const apinames = game.achievements.map(a => a.apiname);

    assert.deepStrictEqual([...ids].sort((a, b) => a - b), Array.from({ length: 39 }, (_, i) => i + 1));
    assert.strictEqual(new Set(ids).size, 39);
    assert.strictEqual(new Set(apinames).size, 39);

});

test("every Trine 4 achievement has a valid difficulty (1-5), a positive estimatedTime, and non-empty name/description", () => {

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

test("every one of the 39 Trine 4 achievement name+description pairs matches the catalog data", () => {

    const officialAchievements = [
        ["A Badger's Journal", "Complete The Badgerborough"],
        ["A Castle in a Dream", "Complete The Prince's Dream"],
        ["A Dip in the Lake", "Complete Firwood Water"],
        ["A Hedgehog's Seeds", "Complete Goldleaf Garden"],
        ["A Knightly Quest", "Complete The Cursed Manor"],
        ["A Wizard's Quest", "Complete A Wintery Morning"],
        ["Across the Moors", "Complete Craghill Moors"],
        ["An Enterprising Quest", "Complete A Masquerade Night"],
        ["Bits and Pieces", "Collect all Knicknacks throughout Acts I-V"],
        ["Bogged Down", "Complete The Crackling Mire"],
        ["Chasing Shadows", "Complete Haunted Tombs"],
        ["Darker Depths", "Complete The Nightmare Academy"],
        ["Everything is Fine", "Complete Snow-Topped Heights"],
        ["Experienced Hunter", "Collect all experience throughout Acts I-V"],
        ["First Class Delivery", "Collect all Letters throughout Acts I-V"],
        ["Looting Ruins", "Collect all experience in Heatherwood Hall"],
        ["Moths in Moonlight", "Complete Moonlit Forests"],
        ["Running in Ruins", "Complete Heatherwood Hall"],
        ["Suddenly a Bear", "Complete The Blueberry Forest"],
        ["Sweeping Dreams", "Collect all experience in The Prince's Dream"],
        ["The Blueberry Hunt", "Collect all experience in The Blueberry Forest"],
        ["The Craghill Hunt", "Collect all experience in Craghill Moors"],
        ["The Cursed Hunt", "Collect all experience in The Cursed Manor"],
        ["The Golden Hunt", "Collect all experience in Goldleaf Garden"],
        ["The Gossamer Hunt", "Collect all experience in The Gossamer Grove"],
        ["The Haunted Hunt", "Collect all experience in Haunted Tombs"],
        ["The Lakeside Hunt", "Collect all experience in Firwood Water"],
        ["The Masquerade Hunt", "Collect all experience in A Masquerade Night"],
        ["The Mired Hunt", "Collect all experience in The Crackling Mire"],
        ["The Moonlit Hunt", "Collect all experience in Moonlit Forests"],
        ["The Morning Hunt", "Collect all experience in A Wintery Morning"],
        ["The Nightmare Hunt", "Collect all experience in The Nightmare Academy"],
        ["The Potion of Light", "Complete The Gossamer Grove"],
        ["The Snowbound Hunt", "Collect all experience in Snow-Topped Heights"],
        ["The Thorny Hunt", "Collect all experience in The Thorny Hedge Maze"],
        ["The Underground Hunt", "Collect all experience in The Badgerborough"],
        ["Through the Thorns", "Complete The Thorny Hedge Maze"],
        ["To Recover a Prince", "Deal with the Nightmare Prince once and for all"],
        ["Treasure Seeker", "Collect all Treasures throughout Acts I-V"],
    ];

    assert.strictEqual(officialAchievements.length, 39, "sanity check on this test's own reference list");

    const dataPairs = game.achievements
        .map(a => [a.name, a.description])
        .sort((a, b) => a[0].localeCompare(b[0]));

    assert.deepStrictEqual(dataPairs, [...officialAchievements].sort((a, b) => a[0].localeCompare(b[0])));

});
