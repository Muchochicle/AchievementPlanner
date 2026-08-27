import { test } from "node:test";
import assert from "node:assert";

import { getPlannerData } from "../utils/plannerCatalog.js";

// backend/catalog/games/superliminal.json - 27 real achievements sourced
// from a live ISteamUserStats/GetSchemaForGame/v2 response for appid
// 1049410 (fetched through this app's own services/steamApi.js) - 21 of
// 27 ship a real, official Steam description. Environment Saved!, Please
// Recycle, Feeling Blue, Chess Master, Kasparov, and Stars Align are
// hidden achievements Steam never describes publicly (confirmed via the
// same API call) - their descriptions here are curatorial summaries of
// their real, community-documented unlock conditions (cross-checked
// against TrueAchievements' and XboxAchievements' independent
// documentation). difficulty/estimatedTime remain curatorial judgments,
// same convention as every other planner difficulty/time field in this
// catalog.
const superliminal = getPlannerData("superliminal");

test("getPlannerData('superliminal') returns real planner data with 27 curated achievements", () => {

    assert.ok(superliminal, "expected real planner data for superliminal");
    assert.ok(Array.isArray(superliminal.achievements));
    assert.strictEqual(superliminal.achievements.length, 27);

});

test("every Superliminal achievement has a unique id from 1 to 27 and a unique apiname", () => {

    const ids = superliminal.achievements.map(a => a.id);
    const apinames = superliminal.achievements.map(a => a.apiname);

    assert.deepStrictEqual([...ids].sort((a, b) => a - b), Array.from({ length: 27 }, (_, i) => i + 1));
    assert.strictEqual(new Set(ids).size, 27);
    assert.strictEqual(new Set(apinames).size, 27);

});

test("every Superliminal achievement has a valid difficulty (1-5), a positive estimatedTime, and non-empty name/description", () => {

    for (const achievement of superliminal.achievements) {

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

test("every one of the 21 officially-described Superliminal achievement name+description pairs matches the live GetSchemaForGame response", () => {

    // The 6 hidden achievements are excluded here - Steam never exposes a
    // public description for them - and covered by their own dedicated
    // test below instead.
    const officialAchievements = [
        ["Son of Man", "An apple for a head"],
        ["Sugar Crash", "Break a soda can"],
        ["Please Use Other Door", "Find the nook in Optical"],
        ["Fire Safety Achieved", "Pull all the fire alarms"],
        ["Fire Alarmist", "Pull one fire alarm"],
        ["Take Your Trash Elsewhere", "Fail at throwing away trash"],
        ["Fires Extinguished", "Empty all fire extinguishers"],
        ["Soda Connaisseur", "Drink all sodas"],
        ["Wake Up", "Beat the game"],
        ["Superluminal", "Beat the game in under 30 minutes"],
        ["Speed Runner", "Beat the game in under an hour"],
        ["Vaguely Activated Achievement", "Congratulations on doing something!"],
        ["Why Are You Like This?", "Clone an object way too many times"],
        ["Polite Recognition", "Find the hidden trophy"],
        ["Expert Fire Alarmist", "Pull enough fire alarms"],
        ["Biggest Fan", "Finish the game with developer commentary enabled"],
        ["Mindful", "Finish all challenges in Challenge Mode"],
        ["Dr. Pierce's Protege", "Contribute an item to the Workshop"],
        ["Contraband", "Import a 3D model into the game"],
        ["Dream within a Dream", "Play someone else's dream"],
        ["Dream Sculptor", "Upload a dream to the workshop"]
    ];

    assert.strictEqual(officialAchievements.length, 21, "sanity check on this test's own reference list");

    const hiddenNames = new Set([
        "Environment Saved!", "Please Recycle", "Feeling Blue", "Chess Master", "Kasparov", "Stars Align"
    ]);

    const dataPairs = superliminal.achievements
        .filter(a => !hiddenNames.has(a.name))
        .map(a => [a.name, a.description])
        .sort((a, b) => a[0].localeCompare(b[0]));

    const expectedPairs = [...officialAchievements].sort((a, b) => a[0].localeCompare(b[0]));

    assert.deepStrictEqual(dataPairs, expectedPairs);

});

test("the 6 Steam-silent hidden achievements each still have their own real name and a non-empty curatorial description", () => {

    const recycled = superliminal.achievements.find(a => a.apiname === "SodaInRecycling");
    const trashed = superliminal.achievements.find(a => a.apiname === "SodaInTrash");
    const blueprints = superliminal.achievements.find(a => a.apiname === "ClickAllBlueprints");
    const chess = superliminal.achievements.find(a => a.apiname === "CollectAllChessPieces");
    const kasparov = superliminal.achievements.find(a => a.apiname === "WinChessGame");
    const constellations = superliminal.achievements.find(a => a.apiname === "CompleteConstellations");

    assert.ok(recycled && recycled.name === "Environment Saved!" && recycled.description.length > 0);
    assert.ok(trashed && trashed.name === "Please Recycle" && trashed.description.length > 0);
    assert.ok(blueprints && blueprints.name === "Feeling Blue" && blueprints.description.length > 0);
    assert.ok(chess && chess.name === "Chess Master" && chess.description.length > 0);
    assert.ok(kasparov && kasparov.name === "Kasparov" && kasparov.description.length > 0);
    assert.ok(constellations && constellations.name === "Stars Align" && constellations.description.length > 0);

});
