import { test } from "node:test";
import assert from "node:assert";

import { getPlannerData } from "../utils/plannerCatalog.js";

// backend/catalog/games/dorfromantik.json - 85 real achievements
// sourced from a live ISteamUserStats/GetSchemaForGame/v2 response for
// appid 1455840 (fetched through this app's own services/steamApi.js) -
// all 85 ship a real, official Steam description. Dorfromantik has no
// Steam-hidden achievements at all; the list is almost entirely
// numbered milestone tiers (roman-numeral I..VII families).
// difficulty/estimatedTime remain curatorial judgments, same
// convention as every other planner difficulty/time field in this
// catalog.
const dorfromantik = getPlannerData("dorfromantik");

test("getPlannerData('dorfromantik') returns real planner data with 85 curated achievements", () => {

    assert.ok(dorfromantik, "expected real planner data for dorfromantik");
    assert.ok(Array.isArray(dorfromantik.achievements));
    assert.strictEqual(dorfromantik.achievements.length, 85);

});

test("every Dorfromantik achievement has a unique id from 1 to 85 and a unique apiname", () => {

    const ids = dorfromantik.achievements.map(a => a.id);
    const apinames = dorfromantik.achievements.map(a => a.apiname);

    assert.deepStrictEqual([...ids].sort((a, b) => a - b), Array.from({ length: 85 }, (_, i) => i + 1));
    assert.strictEqual(new Set(ids).size, 85);
    assert.strictEqual(new Set(apinames).size, 85);

});

test("every Dorfromantik achievement has a valid difficulty (1-5), a positive estimatedTime, and non-empty name/description", () => {

    for (const achievement of dorfromantik.achievements) {

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

test("every one of the 85 official Dorfromantik achievement name+description pairs matches the live GetSchemaForGame response", () => {

    const officialAchievements = [
        ["True Fan I", "Finish 5 sessions with a score of at least 5000."],
        ["True Fan II", "Finish 10 sessions with a score of at least 5000."],
        ["True Fan III", "Finish 25 sessions with a score of at least 5000."],
        ["True Fan IV", "Finish 50 sessions with a score of at least 5000."],
        ["Champion I", "Gain a highscore of 2500 points."],
        ["Champion II", "Gain a highscore of 10000 points."],
        ["Champion III", "Gain a highscore of 15000 points."],
        ["Champion IV", "Gain a highscore of 20000 points."],
        ["Champion V", "Gain a highscore of 30000 points."],
        ["Landscaper I", "Place down 100 tiles in total."],
        ["Landscaper II", "Place down 250 tiles in total."],
        ["Landscaper III", "Place down 500 tiles in total."],
        ["Engineer I", "Form a train route with at least 10 train tracks."],
        ["Engineer II", "Form a train route with at least 25 train tracks."],
        ["Engineer IV", "Form a train route with at least 75 train tracks."],
        ["Engineer III", "Form a train route with at least 50 train tracks."],
        ["Ocean I", "Form a water body with at least 15 water segments."],
        ["Ocean II", "Form a water body with at least 30 water segments."],
        ["Ocean III", "Form a water body with at least 60 water segments."],
        ["Ocean IV", "Form a water body with at least 100 water segments."],
        ["Farmer I", "Form a field group with at least 25 fields."],
        ["Farmer II", "Form a field group with at least 50 fields."],
        ["Farmer III", "Form a field group with at least 100 fields."],
        ["Farmer IV", "Form a field group with at least 150 fields."],
        ["Perfectionist I", "Score 25 perfect placements in total."],
        ["Perfectionist II", "Score 50 perfect placements in total."],
        ["Perfectionist III", "Score 150 perfect placements in total."],
        ["Perfectionist IV", "Score 250 perfect placements in total."],
        ["Perfectionist V", "Score 500 perfect placements in total."],
        ["Villager I", "Form a village with at least 50 houses."],
        ["Villager II", "Form a village with at least 100 houses."],
        ["Villager III", "Form a village with at least 150 houses."],
        ["Villager IV", "Form a village with at least 250 houses."],
        ["Puzzler I", "Place 25 consecutive tiles without connecting any incompatible edges."],
        ["Puzzler II", "Place 50 consecutive tiles without connecting any incompatible edges."],
        ["Puzzler III", "Place 75 consecutive tiles without connecting any incompatible edges."],
        ["Puzzler IV", "Place 100 consecutive tiles without connecting any incompatible edges."],
        ["Puzzler V", "Place 150 consecutive tiles without connecting any incompatible edges."],
        ["Green Thumb I", "Form a forest with at least 250 trees."],
        ["Green Thumb II", "Form a forest with at least 500 trees."],
        ["Green Thumb III", "Form a forest with at least 750 trees."],
        ["Green Thumb IV", "Form a forest with at least 1000 trees."],
        ["Green Thumb V", "Form a forest with at least 1500 trees."],
        ["Self-Sufficiency I", "Close 5 field groups with at least 10 fields in total."],
        ["Self-Sufficiency II", "Close 20 field groups with at least 10 fields in total."],
        ["Self-Sufficiency III", "Close 50 field groups with at least 10 fields in total."],
        ["First Steps", "Your first challenge! Finish the tutorial to unlock a new tile."],
        ["Landscaper IV", "Place down 1000 tiles in total."],
        ["Puzzler VI", "Place 200 consecutive tiles without connecting any incompatible edges."],
        ["Explorer I", "Connect 3 preplaced tiles in total."],
        ["Explorer II", "Connect 10 preplaced tiles in total."],
        ["Explorer III", "Connect 25 preplaced tiles in total."],
        ["Explorer IV", "Connect 50 preplaced tiles in total."],
        ["Planner I", "Score 2 perfect placements at once."],
        ["Planner II", "Score 3 perfect placements at once."],
        ["Planner III", "Score 4 perfect placements at once."],
        ["Planner IV", "Score 5 perfect placements at once."],
        ["Planner V", "Score 6 perfect placements at once."],
        ["Planner VI", "Score 7 perfect placements at once."],
        ["Quest Master I", "Complete 25 quests in total."],
        ["Quest Master II", "Complete 50 quests in total."],
        ["Quest Master III", "Complete 100 quests in total."],
        ["Quest Master IV", "Complete 250 quests in total."],
        ["Quest Master V", "Complete 400 quests in total."],
        ["Quest Master VI", "Complete 600 quests in total."],
        ["Heavy Weight I", "Place 25 consecutive tiles without rotating a tile."],
        ["Heavy Weight II", "Place 50 consecutive tiles without rotating a tile."],
        ["Heavy Weight III", "Place 75 consecutive tiles without rotating a tile."],
        ["Heavy Weight IV", "Place 100 consecutive tiles without rotating a tile."],
        ["Heavy Weight V", "Place 150 consecutive tiles without rotating a tile."],
        ["Heavy Weight VI", "Place 200 consecutive tiles without rotating a tile."],
        ["Analyst I", "Collect 120 points with a single tile placement."],
        ["Analyst II", "Collect 220 points with a single tile placement."],
        ["Analyst III", "Collect 330 points with a single tile placement."],
        ["Analyst IV", "Collect 440 points with a single tile placement."],
        ["Analyst V", "Collect 550 points with a single tile placement."],
        ["Analyst VI", "Collect 660 points with a single tile placement."],
        ["Overachiever I", "Collect 10000 points in total."],
        ["Overachiever II", "Collect 25000 points in total."],
        ["Overachiever III", "Collect 50000 points in total."],
        ["Overachiever IV", "Collect 100000 points in total."],
        ["Landscaper V", "Place down 1500 tiles in total."],
        ["Puzzler VII", "Place 250 consecutive tiles without connecting any incompatible edges."],
        ["Heavy Weight VII", "Place 250 consecutive tiles without rotating a tile."],
        ["Landscaper VI", "Place down 2000 tiles in total."]
    ];

    assert.strictEqual(officialAchievements.length, 85, "sanity check on this test's own reference list");

    const dataPairs = dorfromantik.achievements
        .map(a => [a.name, a.description])
        .sort((a, b) => a[0].localeCompare(b[0]));

    const expectedPairs = [...officialAchievements].sort((a, b) => a[0].localeCompare(b[0]));

    assert.deepStrictEqual(dataPairs, expectedPairs);

});
