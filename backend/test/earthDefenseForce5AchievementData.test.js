import { test } from "node:test";
import assert from "node:assert";

import { getPlannerData } from "../utils/plannerCatalog.js";

// backend/catalog/games/earth-defense-force-5.json - 39 real achievements sourced
// from a live ISteamUserStats/GetSchemaForGame/v2 response for appid
// 1007040 (fetched through this app's own services/steamApi.js). None are
// hidden; every description is Steam's own real text.
// difficulty/estimatedTime/missable remain curatorial judgments.
const game = getPlannerData("earth-defense-force-5");

test("getPlannerData('earth-defense-force-5') returns real planner data with 39 curated achievements", () => {

    assert.ok(game, "expected real planner data for earth-defense-force-5");
    assert.ok(Array.isArray(game.achievements));
    assert.strictEqual(game.achievements.length, 39);

});

test("every EARTH DEFENSE FORCE 5 achievement has a unique id from 1 to 39 and a unique apiname", () => {

    const ids = game.achievements.map(a => a.id);
    const apinames = game.achievements.map(a => a.apiname);

    assert.deepStrictEqual([...ids].sort((a, b) => a - b), Array.from({ length: 39 }, (_, i) => i + 1));
    assert.strictEqual(new Set(ids).size, 39);
    assert.strictEqual(new Set(apinames).size, 39);

});

test("every EARTH DEFENSE FORCE 5 achievement has a valid difficulty (1-5), a positive estimatedTime, and non-empty name/description", () => {

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

test("every one of the 39 EARTH DEFENSE FORCE 5 achievement name+description pairs matches the catalog data", () => {

    const officialAchievements = [
        ["Conquest 10%", "Main Story Total Completion Rate has reached 10%."],
        ["Conquest 100%", "Main Story Total Completion Rate has reached 100%."],
        ["Conquest 15%", "Main Story Total Completion Rate has reached 15%."],
        ["Conquest 20%", "Main Story Total Completion Rate has reached 20%."],
        ["Conquest 25%", "Main Story Total Completion Rate has reached 25%."],
        ["Conquest 30%", "Main Story Total Completion Rate has reached 30%."],
        ["Conquest 35%", "Main Story Total Completion Rate has reached 35%."],
        ["Conquest 40%", "Main Story Total Completion Rate has reached 40%."],
        ["Conquest 45%", "Main Story Total Completion Rate has reached 45%."],
        ["Conquest 5%", "Main Story Total Completion Rate has reached 5%."],
        ["Conquest 50%", "Main Story Total Completion Rate has reached 50%."],
        ["Conquest 55%", "Main Story Total Completion Rate has reached 55%."],
        ["Conquest 60%", "Main Story Total Completion Rate has reached 60%."],
        ["Conquest 62%", "Main Story Total Completion Rate has reached 62%."],
        ["Conquest 64%", "Main Story Total Completion Rate has reached 64%."],
        ["Conquest 66%", "Main Story Total Completion Rate has reached 66%."],
        ["Conquest 68%", "Main Story Total Completion Rate has reached 68%."],
        ["Conquest 70%", "Main Story Total Completion Rate has reached 70%."],
        ["Conquest 72%", "Main Story Total Completion Rate has reached 72%."],
        ["Conquest 74%", "Main Story Total Completion Rate has reached 74%."],
        ["Conquest 76%", "Main Story Total Completion Rate has reached 76%."],
        ["Conquest 78%", "Main Story Total Completion Rate has reached 78%."],
        ["Conquest 80%", "Main Story Total Completion Rate has reached 80%."],
        ["Conquest 82%", "Main Story Total Completion Rate has reached 82%."],
        ["Conquest 84%", "Main Story Total Completion Rate has reached 84%."],
        ["Conquest 86%", "Main Story Total Completion Rate has reached 86%."],
        ["Conquest 88%", "Main Story Total Completion Rate has reached 88%."],
        ["Conquest 90%", "Main Story Total Completion Rate has reached 90%."],
        ["Conquest 92%", "Main Story Total Completion Rate has reached 92%."],
        ["Conquest 94%", "Main Story Total Completion Rate has reached 94%."],
        ["Conquest 96%", "Main Story Total Completion Rate has reached 96%."],
        ["Conquest 98%", "Main Story Total Completion Rate has reached 98%."],
        ["Master Air Raider", "Air Raider's health has reached 1000."],
        ["Master Diver", "Wing Diver's health has reached 550."],
        ["Master Fencer", "Fencer's health has reached 1250."],
        ["Master Ranger", "Ranger's health has reached 1000."],
        ["Medic", "Healed another player in co-op play."],
        ["Rescue", "Rescued 5 other players in co-op play."],
        ["Super Rescue", "Rescued 50 other players in co-op play."],
    ];

    assert.strictEqual(officialAchievements.length, 39, "sanity check on this test's own reference list");

    const dataPairs = game.achievements
        .map(a => [a.name, a.description])
        .sort((a, b) => a[0].localeCompare(b[0]));

    assert.deepStrictEqual(dataPairs, [...officialAchievements].sort((a, b) => a[0].localeCompare(b[0])));

});
