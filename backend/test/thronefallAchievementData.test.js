import { test } from "node:test";
import assert from "node:assert";

import { getPlannerData } from "../utils/plannerCatalog.js";

// backend/catalog/games/thronefall.json - 34 real achievements sourced
// from a live ISteamUserStats/GetSchemaForGame/v2 response for appid
// 2239150 (fetched through this app's own services/steamApi.js). None are
// hidden; every description is Steam's own real text.
// difficulty/estimatedTime/missable remain curatorial judgments.
const game = getPlannerData("thronefall");

test("getPlannerData('thronefall') returns real planner data with 34 curated achievements", () => {

    assert.ok(game, "expected real planner data for thronefall");
    assert.ok(Array.isArray(game.achievements));
    assert.strictEqual(game.achievements.length, 34);

});

test("every Thronefall achievement has a unique id from 1 to 34 and a unique apiname", () => {

    const ids = game.achievements.map(a => a.id);
    const apinames = game.achievements.map(a => a.apiname);

    assert.deepStrictEqual([...ids].sort((a, b) => a - b), Array.from({ length: 34 }, (_, i) => i + 1));
    assert.strictEqual(new Set(ids).size, 34);
    assert.strictEqual(new Set(apinames).size, 34);

});

test("every Thronefall achievement has a valid difficulty (1-5), a positive estimatedTime, and non-empty name/description", () => {

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

test("every one of the 34 Thronefall achievement name+description pairs matches the catalog data", () => {

    const officialAchievements = [
        ["10 Crowns", "Collect a total of 10 crowns."],
        ["20 Crowns", "Collect a total of 20 crowns."],
        ["30 Crowns", "Collect a total of 30 crowns."],
        ["40 Crowns", "Collect a total of 40 crowns."],
        ["5 Crowns", "Collect a total of 5 crowns."],
        ["50 Crowns", "Collect a total of 50 crowns."],
        ["A New King", "Complete your training."],
        ["All Equipment Unlocked", "Unlock all buildings, perks, mutators and weapons"],
        ["Durststein", "Win on Durststein"],
        ["Eternal Baron", "Win stage 4 in the eternal trials."],
        ["Eternal Conqueror", "Win stage 6 in the eternal trials."],
        ["Eternal Knight", "Win stage 3 in the eternal trials."],
        ["Eternal Legend", "Win stage 7 in the eternal trials."],
        ["Eternal Peasant", "Win stage 1 in the eternal trials."],
        ["Eternal Squire", "Win stage 2 in the eternal trials."],
        ["Eternal Warlord", "Win stage 5 in the eternal trials."],
        ["Freifort", "Win on Freifort"],
        ["Frostsee", "Win on Frostsee"],
        ["Moorweg", "Win on Moorweg"],
        ["Nordfels", "Win on Nordfels"],
        ["Ruler of Durststein", "Complete all quests on Durststein"],
        ["Ruler of Freifort", "Complete all quests on Freifort"],
        ["Ruler of Frostsee", "Complete all quests on Frostsee"],
        ["Ruler of Moorweg", "Complete all quests on Moorweg"],
        ["Ruler of Nordfels", "Complete all quests on Nordfels"],
        ["Ruler of Sturmklamm", "Complete all quests on Sturmklamm"],
        ["Ruler of Totend", "Complete all quests on Totend"],
        ["Ruler of Uferwind", "Complete all quests on Uferwind"],
        ["Ruler of Wildbach", "Complete all quests on Wildbach"],
        ["Sturmklamm", "Win on Sturmklamm"],
        ["Totend", "Win on Totend"],
        ["Uferwind", "Win on Uferwind"],
        ["Wildbach", "Win on Wildbach"],
        ["Your Throne Awaits", "Destroy a practice target in the tutorial."],
    ];

    assert.strictEqual(officialAchievements.length, 34, "sanity check on this test's own reference list");

    const dataPairs = game.achievements
        .map(a => [a.name, a.description])
        .sort((a, b) => a[0].localeCompare(b[0]));

    assert.deepStrictEqual(dataPairs, [...officialAchievements].sort((a, b) => a[0].localeCompare(b[0])));

});
