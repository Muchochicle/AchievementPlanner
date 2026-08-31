import { test } from "node:test";
import assert from "node:assert";

import { getPlannerData } from "../utils/plannerCatalog.js";

// backend/catalog/games/mountain.json - 31 real achievements sourced
// from a live ISteamUserStats/GetSchemaForGame/v2 response for appid
// 313340 (fetched through this app's own services/steamApi.js). None are
// hidden; every description is Steam's own real text.
// difficulty/estimatedTime/missable remain curatorial judgments.
const game = getPlannerData("mountain");

test("getPlannerData('mountain') returns real planner data with 31 curated achievements", () => {

    assert.ok(game, "expected real planner data for mountain");
    assert.ok(Array.isArray(game.achievements));
    assert.strictEqual(game.achievements.length, 31);

});

test("every Mountain achievement has a unique id from 1 to 31 and a unique apiname", () => {

    const ids = game.achievements.map(a => a.id);
    const apinames = game.achievements.map(a => a.apiname);

    assert.deepStrictEqual([...ids].sort((a, b) => a - b), Array.from({ length: 31 }, (_, i) => i + 1));
    assert.strictEqual(new Set(ids).size, 31);
    assert.strictEqual(new Set(apinames).size, 31);

});

test("every Mountain achievement has a valid difficulty (1-5), a positive estimatedTime, and non-empty name/description", () => {

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

test("every one of the 31 Mountain achievement name+description pairs matches the catalog data", () => {

    const officialAchievements = [
        ["Am I Being Organized?", "Mountain organizes itself"],
        ["Am I Interesting?", "Mountain is alive for a short time"],
        ["At least I know I'm alive", "Mountain experiences a lot of pain"],
        ["Getting Used to This", "Mountain goes on dying"],
        ["Hello There", "Mountain is home to something new"],
        ["I am Music!", "Mountain plays a lot of music"],
        ["I Can Sing!", "Mountain sings"],
        ["I Can't Stop Thinking", "Mountain thinks quite a lot"],
        ["I Look Beautiful", "Mountain keeps organizing itself"],
        ["I Love To Sing!", "Mountain sings quite a lot"],
        ["I Must Dry Off", "Mountain makes it unrain"],
        ["I Must Go On", "Mountain keeps surviving death"],
        ["I'm a Living Target", "Mountain is bombarded by things"],
        ["I'm A Musician?", "Mountain plays music"],
        ["I'm Still Here", "Mountain sees it all come and go"],
        ["I'm Thinking", "Mountain thinks"],
        ["Is This Cheating?", "Mountain cannot predict the weather"],
        ["Is This Normal?", "Mountain has unusual weather"],
        ["It Happens", "Mountain experiences death"],
        ["It's Never Over", "Mountain thinks it is invincible"],
        ["Not Done Yet", "Mountain survives death"],
        ["Ok, Fine", "Mountain no longer trusts the weather"],
        ["Ouch!", "Mountain experiences pain"],
        ["The Days Keep Coming...", "Mountain watches the days go by"],
        ["These Thoughts Never End", "Mountain cannot stop thinking"],
        ["This Is Me!", "Mountain has a lot of alone time"],
        ["Turn the Other Peak", "Mountain dies several times"],
        ["Welcome, Welcome", "Mountain is home to many things"],
        ["Who's Doing This?", "Mountain has some alone time"],
        ["YOU ARE GOD", "Mountain lives forever"],
        ["YOU ARE MOUNTAIN", "Mountain lives for a long time"],
    ];

    assert.strictEqual(officialAchievements.length, 31, "sanity check on this test's own reference list");

    const dataPairs = game.achievements
        .map(a => [a.name, a.description])
        .sort((a, b) => a[0].localeCompare(b[0]));

    assert.deepStrictEqual(dataPairs, [...officialAchievements].sort((a, b) => a[0].localeCompare(b[0])));

});
