import { test } from "node:test";
import assert from "node:assert";

import { getPlannerData } from "../utils/plannerCatalog.js";

// backend/catalog/games/exapunks.json - 16 real achievements sourced
// from a live ISteamUserStats/GetSchemaForGame/v2 response for appid
// 716490 (fetched through this app's own services/steamApi.js). None are
// hidden; every description is Steam's own real text.
// difficulty/estimatedTime/missable remain curatorial judgments.
const game = getPlannerData("exapunks");

test("getPlannerData('exapunks') returns real planner data with 16 curated achievements", () => {

    assert.ok(game, "expected real planner data for exapunks");
    assert.ok(Array.isArray(game.achievements));
    assert.strictEqual(game.achievements.length, 16);

});

test("every EXAPUNKS achievement has a unique id from 1 to 16 and a unique apiname", () => {

    const ids = game.achievements.map(a => a.id);
    const apinames = game.achievements.map(a => a.apiname);

    assert.deepStrictEqual([...ids].sort((a, b) => a - b), Array.from({ length: 16 }, (_, i) => i + 1));
    assert.strictEqual(new Set(ids).size, 16);
    assert.strictEqual(new Set(apinames).size, 16);

});

test("every EXAPUNKS achievement has a valid difficulty (1-5), a positive estimatedTime, and non-empty name/description", () => {

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

test("every one of the 16 EXAPUNKS achievement name+description pairs matches the catalog data", () => {

    const officialAchievements = [
        ["BLACKOUT", "Trigger an excessive service outage."],
        ["DISC_READ_ERROR", "It was just doing its job…"],
        ["DRIVING_TEST", "Keep a safe distance as you reverse into the space."],
        ["EXAPUNK", "Complete every task in the main campaign."],
        ["HOME_RUN", "Participate in America's new pastime."],
        ["KLEPTOMANCER", "Verily hath every item been unduly purloined."],
        ["PIZZA_PARTY", "Throw a rave at the pizza parlor."],
        ["RITE_OF_PASSAGE", "You have the bog witch’s approval. Now complete the rite of passage."],
        ["š  Ñ|  ö/ ~  öB  è[  å‡  ÑE  È‚ t   7Ò", "Complete every task in the bonus campaign."],
        ["TONER_LOW", "Place a high volume work order."],
        ["АГИТАТОР", "Win 1 game of ПАСЬЯНС."],
        ["ГЕРОЙ_НАРОДА", "Win 100 games of ПАСЬЯНС."],
        ["РЕВОЛЮЦИОНЕР", "Win 10 games of ПАСЬЯНС."],
        ["ゲーマー", "Score 10,000 points in a game of HACK*MATCH."],
        ["熟練ゲーマー", "Score 50,000 points in a game of HACK*MATCH."],
        ["究極のゲーマー", "Score 100,000 points in a game of HACK*MATCH."],
    ];

    assert.strictEqual(officialAchievements.length, 16, "sanity check on this test's own reference list");

    const dataPairs = game.achievements
        .map(a => [a.name, a.description])
        .sort((a, b) => a[0].localeCompare(b[0]));

    assert.deepStrictEqual(dataPairs, [...officialAchievements].sort((a, b) => a[0].localeCompare(b[0])));

});
