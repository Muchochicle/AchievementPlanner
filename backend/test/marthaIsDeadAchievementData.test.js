import { test } from "node:test";
import assert from "node:assert";

import { getPlannerData } from "../utils/plannerCatalog.js";

// backend/catalog/games/martha-is-dead.json - 22 real achievements sourced
// from a live ISteamUserStats/GetSchemaForGame/v2 response for appid
// 515960 (fetched through this app's own services/steamApi.js).
// Hidden achievements ship no Steam description; their description here is
// researched from community 100% guides and cited in the frontend guide
// header. difficulty/estimatedTime/missable are curatorial.
const game = getPlannerData("martha-is-dead");

test("getPlannerData('martha-is-dead') returns real planner data with 22 curated achievements", () => {

    assert.ok(game, "expected real planner data for martha-is-dead");
    assert.ok(Array.isArray(game.achievements));
    assert.strictEqual(game.achievements.length, 22);

});

test("every Martha Is Dead achievement has a unique id from 1 to 22 and a unique apiname", () => {

    const ids = game.achievements.map(a => a.id);
    const apinames = game.achievements.map(a => a.apiname);

    assert.deepStrictEqual([...ids].sort((a, b) => a - b), Array.from({ length: 22 }, (_, i) => i + 1));
    assert.strictEqual(new Set(ids).size, 22);
    assert.strictEqual(new Set(apinames).size, 22);

});

test("every Martha Is Dead achievement has a valid difficulty (1-5), a positive estimatedTime, and non-empty name/description", () => {

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

test("every one of the 22 Martha Is Dead achievement name+description pairs matches the catalog data", () => {

    const officialAchievements = [
        ["Death", "Completed the games story"],
        ["Judgement", "Taken all 4 IR photos of the lady"],
        ["Justice", "Taken a photo with every camera accessory"],
        ["Strength", "Taken all IR photos with hidden riddles"],
        ["Temperance", "Played the first puppet theatre sequence"],
        ["The Chariot", "Fixed the bike"],
        ["The Devil", "Played the second puppet theatre sequence"],
        ["The Emperor", "Observed an in-house object"],
        ["The Empress", "Taken 5 photos with no story link"],
        ["The Fool", "Completed all telephone calls for obtaining information"],
        ["The Hanged Man", "Collected all camera accessories"],
        ["The Hermit", "Entered the family crypt"],
        ["The Hierophant", "Developed the first photo"],
        ["The High Priestess", "All diary pages read"],
        ["The Lovers", "Completed Lapo's quest"],
        ["The Magician", "Dressed in Martha's clothes"],
        ["The Moon", "Communicated with the White Lady"],
        ["The Stars", "Every newspaper edition read"],
        ["The Sun", "Taken the first photo"],
        ["The Tower", "Discovered the house in the woods"],
        ["The Wheels of Fortune", "Carried out a divination every day"],
        ["The World", "Developed 10 photos with no story link"],
    ];

    assert.strictEqual(officialAchievements.length, 22, "sanity check on this test's own reference list");

    const dataPairs = game.achievements
        .map(a => [a.name, a.description])
        .sort((a, b) => a[0].localeCompare(b[0]));

    assert.deepStrictEqual(dataPairs, [...officialAchievements].sort((a, b) => a[0].localeCompare(b[0])));

});
