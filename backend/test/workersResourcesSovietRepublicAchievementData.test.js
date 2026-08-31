import { test } from "node:test";
import assert from "node:assert";

import { getPlannerData } from "../utils/plannerCatalog.js";

// backend/catalog/games/workers-resources-soviet-republic.json - 17 real achievements sourced
// from a live ISteamUserStats/GetSchemaForGame/v2 response for appid
// 784150 (fetched through this app's own services/steamApi.js). None are
// hidden; every description is Steam's own real text.
// Hidden achievements have no Steam description; where present, their
// description here is researched from community 100% guides and cited in
// the frontend guide header. difficulty/estimatedTime/missable are curatorial.
const game = getPlannerData("workers-resources-soviet-republic");

test("getPlannerData('workers-resources-soviet-republic') returns real planner data with 17 curated achievements", () => {

    assert.ok(game, "expected real planner data for workers-resources-soviet-republic");
    assert.ok(Array.isArray(game.achievements));
    assert.strictEqual(game.achievements.length, 17);

});

test("every Workers & Resources: Soviet Republic achievement has a unique id from 1 to 17 and a unique apiname", () => {

    const ids = game.achievements.map(a => a.id);
    const apinames = game.achievements.map(a => a.apiname);

    assert.deepStrictEqual([...ids].sort((a, b) => a - b), Array.from({ length: 17 }, (_, i) => i + 1));
    assert.strictEqual(new Set(ids).size, 17);
    assert.strictEqual(new Set(apinames).size, 17);

});

test("every Workers & Resources: Soviet Republic achievement has a valid difficulty (1-5), a positive estimatedTime, and non-empty name/description", () => {

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

test("every one of the 17 Workers & Resources: Soviet Republic achievement name+description pairs matches the catalog data", () => {

    const officialAchievements = [
        ["Cableway Lover", "Operate at least 10 working cableways in one game."],
        ["Disciple of Planned Economy", "Play any single game for at least 2 game years"],
        ["Master of Research", "Complete all possible researches (in a single game)."],
        ["Nature Lover", "Produce at least 1,000 tons of plastic waste from separation (in a single game)."],
        ["Novice to Planned Economy", "Enter into the gameplay."],
        ["Nuclear Manufacturer", "Produce 10 tons of nuclear fuel in realistic mode."],
        ["Republic Founder", "Complete all missions from the first campaign."],
        ["Revolutionary of the Republic", "Complete all missions from the second campaign."],
        ["Right Communist", "Achieve at least 80% alcohol addiction with at least 10,000 citizens."],
        ["Soviet Airways", "Operate 5 airplanes to western or eastern countries."],
        ["Soviet Paradise", "Achieve a population of 50,000 citizens with at least 80% average happiness without inviting immigrants in the last 2 years."],
        ["Soviet Republic Expert", "Achieve a population of 30,000 citizens on the hardest difficulty, without inviting immigrants in the last 10 years."],
        ["Soviet Society", "Achieve a population of 25,000 citizens with at least 70% average happiness without inviting immigrants in the last 2 years."],
        ["Trabi Maker", "Manufacture and sell 100 Trabi personal cars to western countries (in a single game)."],
        ["Very Important Soviets", "Operate 5 domestic passenger helicopter lines."],
        ["Waste Incinerator", "Produce at least 1,000 tons of ash in incinerators (in a single game)."],
        ["Wrong Communist", "Achieve at least 80% religious sympathy with at least 20,000 citizens."],
    ];

    assert.strictEqual(officialAchievements.length, 17, "sanity check on this test's own reference list");

    const dataPairs = game.achievements
        .map(a => [a.name, a.description])
        .sort((a, b) => a[0].localeCompare(b[0]));

    assert.deepStrictEqual(dataPairs, [...officialAchievements].sort((a, b) => a[0].localeCompare(b[0])));

});
