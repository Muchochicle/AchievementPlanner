import { test } from "node:test";
import assert from "node:assert";

import { getPlannerData } from "../utils/plannerCatalog.js";

// backend/catalog/games/life-is-strange.json - 60 real achievements sourced
// from a live ISteamUserStats/GetSchemaForGame/v2 response for appid
// 319630 (fetched through this app's own services/steamApi.js). None are
// hidden; every description is Steam's own real text.
// difficulty/estimatedTime/missable remain curatorial judgments.
const game = getPlannerData("life-is-strange");

test("getPlannerData('life-is-strange') returns real planner data with 60 curated achievements", () => {

    assert.ok(game, "expected real planner data for life-is-strange");
    assert.ok(Array.isArray(game.achievements));
    assert.strictEqual(game.achievements.length, 60);

});

test("every Life is Strange achievement has a unique id from 1 to 60 and a unique apiname", () => {

    const ids = game.achievements.map(a => a.id);
    const apinames = game.achievements.map(a => a.apiname);

    assert.deepStrictEqual([...ids].sort((a, b) => a - b), Array.from({ length: 60 }, (_, i) => i + 1));
    assert.strictEqual(new Set(ids).size, 60);
    assert.strictEqual(new Set(apinames).size, 60);

});

test("every Life is Strange achievement has a valid difficulty (1-5), a positive estimatedTime, and non-empty name/description", () => {

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

test("every one of the 60 Life is Strange achievement name+description pairs matches the catalog data", () => {

    const officialAchievements = [
        ["Ambient", "Take optional photo #1 in Episode 4: Dark Room"],
        ["Balance", "Take optional photo #3 in Episode 4: Dark Room"],
        ["Blowup", "Take optional photo #5 in Episode 5: Polarized"],
        ["Bokeh", "Take optional photo #5 in Episode 3: Chaos Theory"],
        ["Camera Eye", "Take all optional photos in Episode 3: Chaos Theory"],
        ["Camera Obscura", "Take optional photo #4 in Episode 5: Polarized"],
        ["Chaos Theory", "Finish Episode 3: Chaos Theory"],
        ["Chrysalis", "Finish Episode 1: Chrysalis"],
        ["Close-Ups", "Take optional photo #4 in Episode 1: Chrysalis"],
        ["Colorized", "Take optional photo #8 in Episode 2: Out of Time"],
        ["Compressed", "Take optional photo #5 in Episode 2: Out of Time"],
        ["Dark Room", "Finish Episode 4: Dark Room"],
        ["Dioptric Power", "Take optional photo #6 in Episode 4: Dark Room"],
        ["Dynamic Range", "Take optional photo #7 in Episode 2: Out of Time"],
        ["Field Of View", "Take optional photo #1 in Episode 2: Out of Time"],
        ["Fisheye", "Take optional photo #7 in Episode 4: Dark Room"],
        ["Flash!", "Take optional photo #10 in Episode 3: Chaos Theory"],
        ["Focal Pointed", "Take optional photo #8 in Episode 1: Chrysalis"],
        ["Focused", "Take optional photo #6 in Episode 1: Chrysalis"],
        ["Framed", "Take optional photo #3 in Episode 5: Polarized"],
        ["Full Exposure", "Take optional photo #2 in Episode 2: Out of Time"],
        ["Gamma Value", "Take optional photo #5 in Episode 4: Dark Room"],
        ["Histogrammar", "Take optional photo #4 in Episode 3: Chaos Theory"],
        ["Image Stabilizer", "Take optional photo #4 in Episode 2: Out of Time"],
        ["Incandescent", "Take optional photo #1 in Episode 5: Polarized"],
        ["Iris", "Take optional photo #6 in Episode 5: Polarized"],
        ["Lab Master", "Take all optional photos in Episode 2: Out of Time"],
        ["Lenscrafted", "Take optional photo #2 in Episode 3: Chaos Theory"],
        ["Light Leak", "Take optional photo #10 in Episode 1: Chrysalis"],
        ["Light Meter", "Take optional photo #9 in Episode 5: Polarized"],
        ["Macro Eyes", "Take optional photo #1 in Episode 1: Chrysalis"],
        ["Manually Exposed", "Take optional photo #8 in Episode 4: Dark Room"],
        ["Maximum Aperture", "Take optional photo #9 in Episode 1: Chrysalis"],
        ["Meter Made", "Take optional photo #9 in Episode 2: Out of Time"],
        ["Night Vision", "Take optional photo #2 in Episode 5: Polarized"],
        ["On Display", "Take optional photo #8 in Episode 5: Polarized"],
        ["Optican", "Take optional photo #9 in Episode 3: Chaos Theory"],
        ["Out of Time", "Finish Episode 2: Out of Time"],
        ["Parallax View", "Take optional photo #1 in Episode 3: Chaos Theory"],
        ["Pinholed", "Take optional photo #6 in Episode 3: Chaos Theory"],
        ["Pixelated", "Take optional photo #6 in Episode 2: Out of Time"],
        ["Polarized", "Finish Episode 5: Polarized"],
        ["Processor", "Take optional photo #3 in Episode 2: Out of Time"],
        ["Rangefinder", "Take optional photo #4 in Episode 4: Dark Room"],
        ["RAW Strength", "Take optional photo #7 in Episode 3: Chaos Theory"],
        ["Red Eye", "Take optional photo #5 in Episode 1: Chrysalis"],
        ["Resolution Revolution", "Take optional photo #10 in Episode 2: Out of Time"],
        ["Selfie Awareness", "Take all optional photos in Episode 5: Polarized"],
        ["Sensor", "Take optional photo #7 in Episode 5: Polarized"],
        ["Shutterbug", "Take all optional photos in Episode 4: Dark Room"],
        ["Silhouettes", "Take optional photo #10 in Episode 5: Polarized"],
        ["Slideshow", "Take optional photo #9 in Episode 4: Dark Room"],
        ["Telephotogenic", "Take optional photo #3 in Episode 1: Chrysalis"],
        ["The Reflex", "Take optional photo #3 in Episode 3: Chaos Theory"],
        ["Time-Lapsed", "Take optional photo #2 in Episode 4: Dark Room"],
        ["Tripod", "Take optional photo #10 in Episode 4: Dark Room"],
        ["Viewfinder", "Take optional photo #8 in Episode 3: Chaos Theory"],
        ["Visionary", "Take all optional photos in Episode 1: Chrysalis"],
        ["Wide Angles", "Take optional photo #2 in Episode 1: Chrysalis"],
        ["Zoomed In", "Take optional photo #7 in Episode 1: Chrysalis"],
    ];

    assert.strictEqual(officialAchievements.length, 60, "sanity check on this test's own reference list");

    const dataPairs = game.achievements
        .map(a => [a.name, a.description])
        .sort((a, b) => a[0].localeCompare(b[0]));

    assert.deepStrictEqual(dataPairs, [...officialAchievements].sort((a, b) => a[0].localeCompare(b[0])));

});
