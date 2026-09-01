import { test } from "node:test";
import assert from "node:assert";

import { getPlannerData } from "../utils/plannerCatalog.js";

// backend/catalog/games/the-final-station.json - 23 real achievements sourced
// from a live ISteamUserStats/GetSchemaForGame/v2 response for appid
// 435530 (fetched through this app's own services/steamApi.js).
// Hidden achievements have no Steam description; where present, their
// description here is researched from community 100% guides and cited in
// the frontend guide header. difficulty/estimatedTime/missable are curatorial.
const game = getPlannerData("the-final-station");

test("getPlannerData('the-final-station') returns real planner data with 23 curated achievements", () => {

    assert.ok(game, "expected real planner data for the-final-station");
    assert.ok(Array.isArray(game.achievements));
    assert.strictEqual(game.achievements.length, 23);

});

test("every The Final Station achievement has a unique id from 1 to 23 and a unique apiname", () => {

    const ids = game.achievements.map(a => a.id);
    const apinames = game.achievements.map(a => a.apiname);

    assert.deepStrictEqual([...ids].sort((a, b) => a - b), Array.from({ length: 23 }, (_, i) => i + 1));
    assert.strictEqual(new Set(ids).size, 23);
    assert.strictEqual(new Set(apinames).size, 23);

});

test("every The Final Station achievement has a valid difficulty (1-5), a positive estimatedTime, and non-empty name/description", () => {

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

test("every one of the 23 The Final Station achievement name+description pairs matches the catalog data", () => {

    const officialAchievements = [
        ["Bill's story", "Reach the game's epilogue with Bill alive as your passenger."],
        ["Bob's story", "Reach the game's epilogue with Bob alive as your passenger."],
        ["Brandon's story", "Reach the game's epilogue with Brandon alive as your passenger."],
        ["But why?", "Shoot the horse."],
        ["Charles's story", "Reach the game's epilogue with Charles alive as your passenger."],
        ["City of The Factories", "Take 6 passengers to Ristol"],
        ["Collateral Damager", "Take out 4 enemies with one exploding barrel"],
        ["Following Orders", "Take 6 passengers to Metropole"],
        ["Harry's story", "Reach the game's epilogue with Harry alive as your passenger."],
        ["Home Safe", "Get through the Metro Station without using a medkit"],
        ["Jesse's story", "Reach the game's epilogue with Jesse alive as your passenger."],
        ["Know When To Run", "Get through any corrupted station without firing a bullet"],
        ["Marc's story", "Reach the game's epilogue with Marc alive as your passenger."],
        ["Matthew's story", "Reach the game's epilogue with Matthew alive as your passenger."],
        ["Old friend's story", "Reach the game's epilogue with the Old Friend alive as your passenger."],
        ["Push Back", "Kill 10 enemies by throwing objects at them"],
        ["Side Effects", "Destroy 3 other enemies by shooting an exploding enemy"],
        ["Sociopath", "Reach the game's epilogue with no passengers surviving."],
        ["Soldier's story", "Reach the game's epilogue with the Soldier alive as your passenger."],
        ["Station A-45", "Take 3 passengers to Emergency Station A-45"],
        ["The L-abs Bunker", "Take 6 passengers to the L-abs Bunker"],
        ["Thomas's story", "Reach the game's epilogue with Thomas alive as your passenger."],
        ["Yes You Can", "Shoot a bird"],
    ];

    assert.strictEqual(officialAchievements.length, 23, "sanity check on this test's own reference list");

    const dataPairs = game.achievements
        .map(a => [a.name, a.description])
        .sort((a, b) => a[0].localeCompare(b[0]));

    assert.deepStrictEqual(dataPairs, [...officialAchievements].sort((a, b) => a[0].localeCompare(b[0])));

});
