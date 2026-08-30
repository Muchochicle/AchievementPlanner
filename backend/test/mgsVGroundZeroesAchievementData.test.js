import { test } from "node:test";
import assert from "node:assert";

import { getPlannerData } from "../utils/plannerCatalog.js";

// backend/catalog/games/mgs-v-ground-zeroes.json - 16 real achievements sourced
// from a live ISteamUserStats/GetSchemaForGame/v2 response for appid
// 311340 (fetched through this app's own services/steamApi.js). None are
// hidden; every description is Steam's own real text.
// difficulty/estimatedTime/missable remain curatorial judgments.
const game = getPlannerData("mgs-v-ground-zeroes");

test("getPlannerData('mgs-v-ground-zeroes') returns real planner data with 16 curated achievements", () => {

    assert.ok(game, "expected real planner data for mgs-v-ground-zeroes");
    assert.ok(Array.isArray(game.achievements));
    assert.strictEqual(game.achievements.length, 16);

});

test("every Metal Gear Solid V: Ground Zeroes achievement has a unique id from 1 to 16 and a unique apiname", () => {

    const ids = game.achievements.map(a => a.id);
    const apinames = game.achievements.map(a => a.apiname);

    assert.deepStrictEqual([...ids].sort((a, b) => a - b), Array.from({ length: 16 }, (_, i) => i + 1));
    assert.strictEqual(new Set(ids).size, 16);
    assert.strictEqual(new Set(apinames).size, 16);

});

test("every Metal Gear Solid V: Ground Zeroes achievement has a valid difficulty (1-5), a positive estimatedTime, and non-empty name/description", () => {

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

test("every one of the 16 Metal Gear Solid V: Ground Zeroes achievement name+description pairs matches the catalog data", () => {

    const officialAchievements = [
        ["Accomplished", "Clear all missions (including Side Ops and Extra Ops)"],
        ["Depth", "Clear the \"Eliminate the Renegade Threat\" Side Op by extracting both targets"],
        ["Downfall", "Clear the \"Ground Zeroes\" mission"],
        ["Extraction", "In the \"Destroy the Anti-Air Emplacements\" Side Op, rescue and extract all prisoners via chopper"],
        ["Genesis", "Clear a Side Op or Extra Op"],
        ["Hero", "Clear all missions (including Side Ops and Extra Ops) with a S-rank"],
        ["Hidden", "Clear the \"Jamais Vu\" Extra Op with 0 enemy combat statuses"],
        ["Infiltration", "Clear the \"Classified Intel Acquisition\" Side Op while riding in the back of a truck"],
        ["Information", "Obtain all cassette tapes"],
        ["Insignia", "Obtain all XOF unit patches"],
        ["Pacifist", "Clear the \"Intel Operative Rescue\" Side Op without killing a single enemy"],
        ["Reminiscence", "Recreate all scenes in the \"Déjà-Vu\" Extra Op"],
        ["Rescue", "In the \"Ground Zeroes\" mission, rescue the prisoner to be executed and extract him via chopper"],
        ["Reunion", "Reunite with Chico or Paz"],
        ["Skilled", "Clear any mission (including Side Ops and Extra Ops) with a S-rank"],
        ["Unlocked", "Unlock all trials"],
    ];

    assert.strictEqual(officialAchievements.length, 16, "sanity check on this test's own reference list");

    const dataPairs = game.achievements
        .map(a => [a.name, a.description])
        .sort((a, b) => a[0].localeCompare(b[0]));

    assert.deepStrictEqual(dataPairs, [...officialAchievements].sort((a, b) => a[0].localeCompare(b[0])));

});
