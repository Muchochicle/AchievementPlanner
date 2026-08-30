import { test } from "node:test";
import assert from "node:assert";

import { getPlannerData } from "../utils/plannerCatalog.js";

// backend/catalog/games/ark-survival-ascended.json - 32 real achievements sourced
// from a live ISteamUserStats/GetSchemaForGame/v2 response for appid
// 2399830 (fetched through this app's own services/steamApi.js). None are
// hidden; every description is Steam's own real text.
// difficulty/estimatedTime/missable remain curatorial judgments.
const game = getPlannerData("ark-survival-ascended");

test("getPlannerData('ark-survival-ascended') returns real planner data with 32 curated achievements", () => {

    assert.ok(game, "expected real planner data for ark-survival-ascended");
    assert.ok(Array.isArray(game.achievements));
    assert.strictEqual(game.achievements.length, 32);

});

test("every ARK: Survival Ascended achievement has a unique id from 1 to 32 and a unique apiname", () => {

    const ids = game.achievements.map(a => a.id);
    const apinames = game.achievements.map(a => a.apiname);

    assert.deepStrictEqual([...ids].sort((a, b) => a - b), Array.from({ length: 32 }, (_, i) => i + 1));
    assert.strictEqual(new Set(ids).size, 32);
    assert.strictEqual(new Set(apinames).size, 32);

});

test("every ARK: Survival Ascended achievement has a valid difficulty (1-5), a positive estimatedTime, and non-empty name/description", () => {

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

test("every one of the 32 ARK: Survival Ascended achievement name+description pairs matches the catalog data", () => {

    const officialAchievements = [
        ["Adept Explorer", "You've discovered 60% of the Explorer Notes on the ARK!"],
        ["Adventurous Explorer", "You've discovered 30% of the Explorer Notes on the ARK!"],
        ["Alpha Ascension", "You Ascended off the ARK, at Alpha level!"],
        ["Artifact Archaeologist", "You personally retrieved all the Artifacts!"],
        ["Beginner Explorer", "You discovered 10% of the Explorer Notes on the ARK!"],
        ["Beta Ascension", "You Ascended off the ARK, at Beta level!"],
        ["Cure-All", "You've cured yourself of Swamp Fever!"],
        ["Experienced Explorer", "You've discovered 20% of the Explorer Notes on the ARK!"],
        ["Expert Explorer", "You've discovered 80% of the Explorer Notes on the ARK!"],
        ["Expert Survivor", "You defeated ARK's second Guardian!"],
        ["Gamma Ascension", "You Ascended off the ARK, at Gamma level!"],
        ["Giga Rider", "You rode on the back of a Giganotosaurus!"],
        ["Highest Peak", "You've reached the highest mountain peak of the ARK!"],
        ["Lowest Depth", "You've reached the bottom of the ARK's oceans!"],
        ["Map Maker", "You uncovered more than 80% of the Mini-Map!"],
        ["Master Explorer", "You've discovered 90% of the Explorer Notes on the ARK!"],
        ["Master Survivor", "You defeated ARK's third Guardian!"],
        ["Master Zoologist", "You tamed all of the domesticable creatures on the ARK!"],
        ["Maximum Dinosaur", "One of your Dinosaurs reached Maximum Level!"],
        ["Maximum Survivor", "You reached the Maximum Survivor Level!"],
        ["Perfect Explorer", "You've discovered 100% of the Explorer Notes on the ARK!"],
        ["Professional Explorer", "You've discovered 70% of the Explorer Notes on the ARK!"],
        ["Rex Rider", "You rode on the back of a T-Rex!"],
        ["Studious Explorer", "You've discovered 40% of the Explorer Notes on the ARK!"],
        ["Survivor Evolved", "You've defeated ARK's three Guardians! And yet..."],
        ["Survivor of The Center", "You defeated the Guardians of The Center!"],
        ["Veteran Explorer", "You've discovered 50% of the Explorer Notes on the ARK!"],
        ["Veteran Paleontologist", "You found the Dossiers of each of ARK's initial Specimens!"],
        ["Veteran Survivor", "You defeated ARK's first Guardian!"],
        ["Your first day...", "You Survived a full day and night on the ARK!"],
        ["Your first Dino...", "You Tamed a Dinosaur!"],
        ["Your first Ride...", "You Rode a Dinosaur!"],
    ];

    assert.strictEqual(officialAchievements.length, 32, "sanity check on this test's own reference list");

    const dataPairs = game.achievements
        .map(a => [a.name, a.description])
        .sort((a, b) => a[0].localeCompare(b[0]));

    assert.deepStrictEqual(dataPairs, [...officialAchievements].sort((a, b) => a[0].localeCompare(b[0])));

});
