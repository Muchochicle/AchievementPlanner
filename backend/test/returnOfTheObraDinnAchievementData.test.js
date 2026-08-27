import { test } from "node:test";
import assert from "node:assert";

import { getPlannerData } from "../utils/plannerCatalog.js";

// backend/catalog/games/return-of-the-obra-dinn.json - 16 real
// achievements sourced from a live ISteamUserStats/GetSchemaForGame/v2
// response for appid 653530 (fetched through this app's own
// services/steamApi.js) - 13 of 16 ship a real, official Steam
// description. Captain Did It, Abandon Ship, and Obra Done are hidden
// achievements Steam never describes publicly (confirmed via the same
// API call) - their descriptions here are curatorial summaries of their
// real, community-documented unlock conditions (cross-checked against
// TrueAchievements and the Obra Dinn Fandom wiki), deliberately written
// without revealing any of the game's actual correct fates. difficulty/
// estimatedTime remain curatorial judgments, same convention as every
// other planner difficulty/time field in this catalog.
const obraDinn = getPlannerData("return-of-the-obra-dinn");

test("getPlannerData('return-of-the-obra-dinn') returns real planner data with 16 curated achievements", () => {

    assert.ok(obraDinn, "expected real planner data for return-of-the-obra-dinn");
    assert.ok(Array.isArray(obraDinn.achievements));
    assert.strictEqual(obraDinn.achievements.length, 16);

});

test("every Return of the Obra Dinn achievement has a unique id from 1 to 16 and a unique apiname", () => {

    const ids = obraDinn.achievements.map(a => a.id);
    const apinames = obraDinn.achievements.map(a => a.apiname);

    assert.deepStrictEqual([...ids].sort((a, b) => a - b), Array.from({ length: 16 }, (_, i) => i + 1));
    assert.strictEqual(new Set(ids).size, 16);
    assert.strictEqual(new Set(apinames).size, 16);

});

test("every Return of the Obra Dinn achievement has a valid difficulty (1-5), a positive estimatedTime, and non-empty name/description", () => {

    for (const achievement of obraDinn.achievements) {

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

test("every one of the 13 officially-described Return of the Obra Dinn achievement name+description pairs matches the live GetSchemaForGame response", () => {

    // Captain Did It, Abandon Ship, and Obra Done (the 3 hidden achievements)
    // are excluded here - Steam never exposes a public description for
    // them - and covered by their own dedicated test below instead.
    const officialAchievements = [
        ["Loose Cargo", "Solve all fates in chapter I."],
        ["A Bitter Cold", "Solve all fates in chapter II."],
        ["Murder", "Solve all fates in chapter III."],
        ["The Calling", "Solve all fates in chapter IV."],
        ["Unholy Captives", "Solve all fates in chapter V."],
        ["Soldiers of the Sea", "Solve all fates in chapter VI."],
        ["The Doom", "Solve all fates in chapter VII."],
        ["Escape", "Solve all fates in chapter IX."],
        ["The End", "Solve all fates in chapter X."],
        ["Any 6", "Solve any 6 fates."],
        ["Any 15", "Solve any 15 fates."],
        ["Any 30", "Solve any 30 fates."],
        ["Any 45", "Solve any 45 fates."]
    ];

    assert.strictEqual(officialAchievements.length, 13, "sanity check on this test's own reference list");

    const hiddenNames = new Set(["Obra Done", "Captain Did It", "Abandon Ship"]);

    const dataPairs = obraDinn.achievements
        .filter(a => !hiddenNames.has(a.name))
        .map(a => [a.name, a.description])
        .sort((a, b) => a[0].localeCompare(b[0]));

    const expectedPairs = [...officialAchievements].sort((a, b) => a[0].localeCompare(b[0]));

    assert.deepStrictEqual(dataPairs, expectedPairs);

});

test("the 3 Steam-silent hidden achievements each still have their own real name and a non-empty curatorial description", () => {

    const byApiname = Object.fromEntries(obraDinn.achievements.map(a => [a.apiname, a]));

    const goodEnding = byApiname.ACH_ENDING_GOOD;
    const captain = byApiname.ACH_KILLERCAPTAIN;
    const badEnding = byApiname.ACH_ENDING_BAD;

    assert.ok(goodEnding && goodEnding.name === "Obra Done" && goodEnding.description.length > 0);
    assert.ok(captain && captain.name === "Captain Did It" && captain.description.length > 0);
    assert.ok(badEnding && badEnding.name === "Abandon Ship" && badEnding.description.length > 0);

});
