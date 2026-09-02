import { test } from "node:test";
import assert from "node:assert";

import { getPlannerData } from "../utils/plannerCatalog.js";

// backend/catalog/games/nova-lands.json - 24 real achievements sourced
// from a live ISteamUserStats/GetSchemaForGame/v2 response for appid
// 1501610 (fetched through this app's own services/steamApi.js).
// Hidden achievements ship no Steam description; their description here is
// researched from community 100% guides and cited in the frontend guide
// header. difficulty/estimatedTime/missable are curatorial.
const game = getPlannerData("nova-lands");

test("getPlannerData('nova-lands') returns real planner data with 24 curated achievements", () => {

    assert.ok(game, "expected real planner data for nova-lands");
    assert.ok(Array.isArray(game.achievements));
    assert.strictEqual(game.achievements.length, 24);

});

test("every Nova Lands achievement has a unique id from 1 to 24 and a unique apiname", () => {

    const ids = game.achievements.map(a => a.id);
    const apinames = game.achievements.map(a => a.apiname);

    assert.deepStrictEqual([...ids].sort((a, b) => a - b), Array.from({ length: 24 }, (_, i) => i + 1));
    assert.strictEqual(new Set(ids).size, 24);
    assert.strictEqual(new Set(apinames).size, 24);

});

test("every Nova Lands achievement has a valid difficulty (1-5), a positive estimatedTime, and non-empty name/description", () => {

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

test("every one of the 24 Nova Lands achievement name+description pairs matches the catalog data", () => {

    const officialAchievements = [
        ["A big step for mankind", "Start a spacewalk"],
        ["A Fancy Calculator", "Produce your first Supercomputer"],
        ["Anthill", "Have 40 bots working at the same time"],
        ["Catch’Em All", "Capture a creature"],
        ["Comfy Flight", "Ride the tamed Moschy (a befriended Moschillar) as a flying mount."],
        ["Curious Explorer", "Discover 7 islands"],
        ["From Sticks to Computers", "Produce your first Computer"],
        ["Hanging Out With The Aliens", "Visit the space station"],
        ["Home Owner", "Unlock the player’s house"],
        ["Hyper Math", "Produce your first Hypercomputer"],
        ["I Found The Developers", "Collect the hidden developer skins scattered around the islands."],
        ["Industrial Life", "Produce 50 Steel"],
        ["Industrial Progress", "Produce your first Steel"],
        ["Knowledge Archive", "Complete the museum"],
        ["So Shiny", "Craft a Diamond Dash"],
        ["Special Knowledge", "Complete the tech tree on the Research"],
        ["Targets Found", "Find and shoot all of Armando's hidden targets."],
        ["The Automation Starts", "Connect a bot to a bot antenna"],
        ["The First Beast: Moschillar", "Defeat or befriend the Moschillar"],
        ["The Second Beast: Drameleon", "Defeat or befriend the Drameleon"],
        ["The Third Beast: Tunasa", "Defeat or befriend the Tunasa"],
        ["We Steel Need More", "Produce 1.000 Steel"],
        ["Will of Steel", "Produce 10.000 Steel"],
        ["You Look Amazing", "Unlock 25 skins"],
    ];

    assert.strictEqual(officialAchievements.length, 24, "sanity check on this test's own reference list");

    const dataPairs = game.achievements
        .map(a => [a.name, a.description])
        .sort((a, b) => a[0].localeCompare(b[0]));

    assert.deepStrictEqual(dataPairs, [...officialAchievements].sort((a, b) => a[0].localeCompare(b[0])));

});
