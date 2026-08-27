import { test } from "node:test";
import assert from "node:assert";

import { getPlannerData } from "../utils/plannerCatalog.js";

// backend/catalog/games/griftlands.json - 13 real achievements sourced
// from a live ISteamUserStats/GetSchemaForGame/v2 response for appid
// 601840 (fetched through this app's own services/steamApi.js) - all 13
// ship a real, official Steam description; Griftlands has no
// Steam-hidden achievements at all. difficulty/estimatedTime remain
// curatorial judgments, same convention as every other planner
// difficulty/time field in this catalog.
const griftlands = getPlannerData("griftlands");

test("getPlannerData('griftlands') returns real planner data with 13 curated achievements", () => {

    assert.ok(griftlands, "expected real planner data for griftlands");
    assert.ok(Array.isArray(griftlands.achievements));
    assert.strictEqual(griftlands.achievements.length, 13);

});

test("every Griftlands achievement has a unique id from 1 to 13 and a unique apiname", () => {

    const ids = griftlands.achievements.map(a => a.id);
    const apinames = griftlands.achievements.map(a => a.apiname);

    assert.deepStrictEqual([...ids].sort((a, b) => a - b), Array.from({ length: 13 }, (_, i) => i + 1));
    assert.strictEqual(new Set(ids).size, 13);
    assert.strictEqual(new Set(apinames).size, 13);

});

test("every Griftlands achievement has a valid difficulty (1-5), a positive estimatedTime, and non-empty name/description", () => {

    for (const achievement of griftlands.achievements) {

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

test("every one of the 13 Griftlands achievement name+description pairs matches the live GetSchemaForGame response", () => {

    const officialAchievements = [
        ["Fist 'o Bricks", "Apply 100 or more damage with a single hit."],
        ["No Upgrades", "Complete the campaign or brawl without upgrading any cards."],
        ["Soluble Fish", "Incept 99 Doubt upon a single opponent."],
        ["Just Cards", "Beat the campaign without installing any grafts or assigning any perks."],
        ["Brawler", "Beat any brawl on maximum prestige."],
        ["Beloved", "Get 20 people to love you in campaign or brawl."],
        ["Archenemy", "Get 20 people to hate you in campaign or brawl."],
        ["Machinist", "Win a combat by playing only item cards."],
        ["Efficiency", "Win any campaign or brawl with 7 or less cards in your battle deck."],
        ["Impervious", "Gain 99 Defense in battle."],
        ["To The Oshnudrome!", "Win any campaign in under 30 minutes."],
        ["Counterplay", "Defeat a boss without playing any attack cards."],
        ["Total Upgrades", "Complete the campaign or brawl with all your cards and grafts upgraded."]
    ];

    assert.strictEqual(officialAchievements.length, 13, "sanity check on this test's own reference list - Griftlands has no Steam-hidden achievements");

    const dataPairs = griftlands.achievements
        .map(a => [a.name, a.description])
        .sort((a, b) => a[0].localeCompare(b[0]));

    const expectedPairs = [...officialAchievements].sort((a, b) => a[0].localeCompare(b[0]));

    assert.deepStrictEqual(dataPairs, expectedPairs);

});
