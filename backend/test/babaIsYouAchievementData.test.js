import { test } from "node:test";
import assert from "node:assert";

import { getPlannerData } from "../utils/plannerCatalog.js";

// backend/catalog/games/baba-is-you.json - 18 real achievements sourced
// from a live ISteamUserStats/GetSchemaForGame/v2 response for appid
// 736260 (fetched through this app's own services/steamApi.js) - 12 of
// 18 ship a real, official Steam description. B A B A, Baba Is Baba,
// Not Baba, Orb Is Bonus, The End, and What are hidden achievements
// Steam never describes publicly (confirmed via the same API call) -
// their descriptions here are curatorial summaries of their real,
// community-documented unlock conditions (cross-checked against an
// independent Steam Community 100% achievement guide). difficulty/
// estimatedTime remain curatorial judgments, same convention as every
// other planner difficulty/time field in this catalog.
const babaIsYou = getPlannerData("baba-is-you");

test("getPlannerData('baba-is-you') returns real planner data with 18 curated achievements", () => {

    assert.ok(babaIsYou, "expected real planner data for baba-is-you");
    assert.ok(Array.isArray(babaIsYou.achievements));
    assert.strictEqual(babaIsYou.achievements.length, 18);

});

test("every Baba Is You achievement has a unique id from 1 to 18 and a unique apiname", () => {

    const ids = babaIsYou.achievements.map(a => a.id);
    const apinames = babaIsYou.achievements.map(a => a.apiname);

    assert.deepStrictEqual([...ids].sort((a, b) => a - b), Array.from({ length: 18 }, (_, i) => i + 1));
    assert.strictEqual(new Set(ids).size, 18);
    assert.strictEqual(new Set(apinames).size, 18);

});

test("every Baba Is You achievement has a valid difficulty (1-5), a positive estimatedTime, and non-empty name/description", () => {

    for (const achievement of babaIsYou.achievements) {

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

test("every one of the 12 officially-described Baba Is You achievement name+description pairs matches the live GetSchemaForGame response", () => {

    // The 6 hidden achievements are excluded here - Steam never exposes a
    // public description for them - and covered by their own dedicated
    // test below instead.
    const officialAchievements = [
        ["Water Is Sink", "Complete the lake."],
        ["Box Has Key", "Complete the ruins."],
        ["Tree Is Shift", "Complete the forest."],
        ["Lava Is Hot", "Complete the cavern."],
        ["Leaf Is Move", "Complete the forest of fall."],
        ["Cog Is Push", "Complete the solitary isle."],
        ["Bird Is Float", "Complete the mountain."],
        ["Baba Is More", "Complete the abstract area."],
        ["Rocket Is Dust", "Complete the space area."],
        ["Hedge Is Stop", "Complete the garden."],
        ["Baba Is All", "Complete the world map."],
        ["Baba Is End", "Beat the game."]
    ];

    assert.strictEqual(officialAchievements.length, 12, "sanity check on this test's own reference list");

    const hiddenNames = new Set([
        "B A B A", "Baba Is Baba", "Not Baba", "Orb Is Bonus", "The End", "What"
    ]);

    const dataPairs = babaIsYou.achievements
        .filter(a => !hiddenNames.has(a.name))
        .map(a => [a.name, a.description])
        .sort((a, b) => a[0].localeCompare(b[0]));

    const expectedPairs = [...officialAchievements].sort((a, b) => a[0].localeCompare(b[0]));

    assert.deepStrictEqual(dataPairs, expectedPairs);

});

test("the 6 Steam-silent hidden achievements each still have their own real name and a non-empty curatorial description", () => {

    const letters = babaIsYou.achievements.find(a => a.apiname === "BABA_LET");
    const meta = babaIsYou.achievements.find(a => a.apiname === "BABA_META");
    const secret = babaIsYou.achievements.find(a => a.apiname === "BABA_SECRET");
    const bonus = babaIsYou.achievements.find(a => a.apiname === "BABA_BONUS");
    const done = babaIsYou.achievements.find(a => a.apiname === "BABA_DONE");
    const depths = babaIsYou.achievements.find(a => a.apiname === "BABA_DEPTHS");

    assert.ok(letters && letters.name === "B A B A" && letters.description.length > 0);
    assert.ok(meta && meta.name === "Baba Is Baba" && meta.description.length > 0);
    assert.ok(secret && secret.name === "Not Baba" && secret.description.length > 0);
    assert.ok(bonus && bonus.name === "Orb Is Bonus" && bonus.description.length > 0);
    assert.ok(done && done.name === "The End" && done.description.length > 0);
    assert.ok(depths && depths.name === "What" && depths.description.length > 0);

});
