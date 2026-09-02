import { test } from "node:test";
import assert from "node:assert";

import { getPlannerData } from "../utils/plannerCatalog.js";

// backend/catalog/games/warhammer-40k-sanctus-reach.json - 12 real achievements sourced
// from a live ISteamUserStats/GetSchemaForGame/v2 response for appid
// 502370 (fetched through this app's own services/steamApi.js).
// Hidden achievements ship no Steam description; their description here is
// researched from community 100% guides and cited in the frontend guide
// header. difficulty/estimatedTime/missable are curatorial.
const game = getPlannerData("warhammer-40k-sanctus-reach");

test("getPlannerData('warhammer-40k-sanctus-reach') returns real planner data with 12 curated achievements", () => {

    assert.ok(game, "expected real planner data for warhammer-40k-sanctus-reach");
    assert.ok(Array.isArray(game.achievements));
    assert.strictEqual(game.achievements.length, 12);

});

test("every Warhammer 40,000: Sanctus Reach achievement has a unique id from 1 to 12 and a unique apiname", () => {

    const ids = game.achievements.map(a => a.id);
    const apinames = game.achievements.map(a => a.apiname);

    assert.deepStrictEqual([...ids].sort((a, b) => a - b), Array.from({ length: 12 }, (_, i) => i + 1));
    assert.strictEqual(new Set(ids).size, 12);
    assert.strictEqual(new Set(apinames).size, 12);

});

test("every Warhammer 40,000: Sanctus Reach achievement has a valid difficulty (1-5), a positive estimatedTime, and non-empty name/description", () => {

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

test("every one of the 12 Warhammer 40,000: Sanctus Reach achievement name+description pairs matches the catalog data", () => {

    const officialAchievements = [
        ["All The Toys", "Win a sandbox game"],
        ["Chicken Dinner", "Win a battle"],
        ["Lupophobia", "Kill 100 Space Wolves"],
        ["Not So Thirsty Now!", "Destroy a Lord of Skulls"],
        ["Ork's Bane", "Kill 100 Orks"],
        ["Play Freeblade!", "Kill a Freeblade"],
        ["Quis Custodiet Ipsos Custodes?", "Kill 100 Astra Militarum"],
        ["Shazbot", "Kill a Morkanout"],
        ["Street Fighting", "Win a multiplayer game"],
        ["That’ll Tzeentch You!", "Kill 100 Chaos units"],
        ["That's Good Barbecue", "Kill 25 units with flame attacks"],
        ["That's Heavy Dude...", "Destroy a Shadowsword"],
    ];

    assert.strictEqual(officialAchievements.length, 12, "sanity check on this test's own reference list");

    const dataPairs = game.achievements
        .map(a => [a.name, a.description])
        .sort((a, b) => a[0].localeCompare(b[0]));

    assert.deepStrictEqual(dataPairs, [...officialAchievements].sort((a, b) => a[0].localeCompare(b[0])));

});
