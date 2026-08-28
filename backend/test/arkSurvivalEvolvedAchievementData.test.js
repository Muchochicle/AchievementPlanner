import { test } from "node:test";
import assert from "node:assert";

import { getPlannerData } from "../utils/plannerCatalog.js";

// backend/catalog/games/ark-survival-evolved.json - 32 real achievements sourced
// from a live ISteamUserStats/GetSchemaForGame/v2 response for appid
// 346110 (fetched through this app's own services/steamApi.js).
// All 32 ship a real, official Steam description. ARK: Survival Evolved has no
// Steam-hidden achievements.
// difficulty/estimatedTime remain curatorial judgments, same convention
// as every other planner difficulty/time field in this catalog.
const arkSurvivalEvolved = getPlannerData("ark-survival-evolved");

test("getPlannerData('ark-survival-evolved') returns real planner data with 32 curated achievements", () => {

    assert.ok(arkSurvivalEvolved, "expected real planner data for ark-survival-evolved");
    assert.ok(Array.isArray(arkSurvivalEvolved.achievements));
    assert.strictEqual(arkSurvivalEvolved.achievements.length, 32);

});

test("every ARK: Survival Evolved achievement has a unique id from 1 to 32 and a unique apiname", () => {

    const ids = arkSurvivalEvolved.achievements.map(a => a.id);
    const apinames = arkSurvivalEvolved.achievements.map(a => a.apiname);

    assert.deepStrictEqual([...ids].sort((a, b) => a - b), Array.from({ length: 32 }, (_, i) => i + 1));
    assert.strictEqual(new Set(ids).size, 32);
    assert.strictEqual(new Set(apinames).size, 32);

});

test("every ARK: Survival Evolved achievement has a valid difficulty (1-5), a positive estimatedTime, and non-empty name/description", () => {

    for (const achievement of arkSurvivalEvolved.achievements) {

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

test("every one of the 32 official ARK: Survival Evolved achievement name+description pairs matches the live GetSchemaForGame response", () => {

    const officialAchievements = [
        ["Veteran Paleontologist", "You found the Dossiers of each of ARK's initial Specimens!"],
        ["Veteran Survivor", "You defeated ARK's first Guardian!"],
        ["Artifact Archaeologist", "You personally retrieved all the Artifacts!"],
        ["Expert Survivor", "You defeated ARK's second Guardian!"],
        ["Master Survivor", "You defeated ARK's third Guardian!"],
        ["Survivor Evolved", "You've defeated ARK's three Guardians! And yet..."],
        ["Your first day...", "You Survived a full day and night on the ARK!"],
        ["Your first Dino...", "You Tamed a Dinosaur!"],
        ["Your first Ride...", "You Rode a Dinosaur!"],
        ["Maximum Survivor", "You reached the Maximum Survivor Level!"],
        ["Maximum Dinosaur", "One of your Dinosaurs reached Maximum Level!"],
        ["Rex Rider", "You rode on the back of a T-Rex!"],
        ["Giga Rider", "You rode on the back of a Giganotosaurus!"],
        ["Map Maker", "You uncovered more than 80% of the Mini-Map!"],
        ["Highest Peak", "You've reached the highest mountain peak of the ARK!"],
        ["Lowest Depth", "You've reached the bottom of the ARK's oceans!"],
        ["Cure-All", "You've cured yourself of Swamp Fever!"],
        ["Gamma Ascension", "You Ascended off the ARK, at Gamma level!"],
        ["Beta Ascension", "You Ascended off the ARK, at Beta level!"],
        ["Alpha Ascension", "You Ascended off the ARK, at Alpha level!"],
        ["Beginner Explorer", "You discovered 10% of the Explorer Notes on the ARK!"],
        ["Experienced Explorer", "You've discovered 20% of the Explorer Notes on the ARK!"],
        ["Adventurous Explorer", "You've discovered 30% of the Explorer Notes on the ARK!"],
        ["Studious Explorer", "You've discovered 40% of the Explorer Notes on the ARK!"],
        ["Veteran Explorer", "You've discovered 50% of the Explorer Notes on the ARK!"],
        ["Adept Explorer", "You've discovered 60% of the Explorer Notes on the ARK!"],
        ["Professional Explorer", "You've discovered 70% of the Explorer Notes on the ARK!"],
        ["Expert Explorer", "You've discovered 80% of the Explorer Notes on the ARK!"],
        ["Master Explorer", "You've discovered 90% of the Explorer Notes on the ARK!"],
        ["Perfect Explorer", "You've discovered 100% of the Explorer Notes on the ARK!"],
        ["Master Zoologist", "You tamed all of the domesticable creatures on the ARK!"],
        ["Survivor of The Center", "You defeated the Guardians of The Center!"],
    ];

    assert.strictEqual(officialAchievements.length, 32, "sanity check on this test's own reference list");

    const dataPairs = arkSurvivalEvolved.achievements
        .map(a => [a.name, a.description])
        .sort((a, b) => a[0].localeCompare(b[0]));

    const expectedPairs = [...officialAchievements].sort((a, b) => a[0].localeCompare(b[0]));

    assert.deepStrictEqual(dataPairs, expectedPairs);

});
