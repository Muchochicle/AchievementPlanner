import { test } from "node:test";
import assert from "node:assert";

import { getPlannerData } from "../utils/plannerCatalog.js";

// backend/catalog/games/children-of-the-sun.json - 21 real achievements sourced
// from a live ISteamUserStats/GetSchemaForGame/v2 response for appid
// 1309950 (fetched through this app's own services/steamApi.js). None are
// hidden; every description is Steam's own real text.
// Hidden achievements have no Steam description; where present, their
// description here is researched from community 100% guides and cited in
// the frontend guide header. difficulty/estimatedTime/missable are curatorial.
const game = getPlannerData("children-of-the-sun");

test("getPlannerData('children-of-the-sun') returns real planner data with 21 curated achievements", () => {

    assert.ok(game, "expected real planner data for children-of-the-sun");
    assert.ok(Array.isArray(game.achievements));
    assert.strictEqual(game.achievements.length, 21);

});

test("every Children of the Sun achievement has a unique id from 1 to 21 and a unique apiname", () => {

    const ids = game.achievements.map(a => a.id);
    const apinames = game.achievements.map(a => a.apiname);

    assert.deepStrictEqual([...ids].sort((a, b) => a - b), Array.from({ length: 21 }, (_, i) => i + 1));
    assert.strictEqual(new Set(ids).size, 21);
    assert.strictEqual(new Set(apinames).size, 21);

});

test("every Children of the Sun achievement has a valid difficulty (1-5), a positive estimatedTime, and non-empty name/description", () => {

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

test("every one of the 21 Children of the Sun achievement name+description pairs matches the catalog data", () => {

    const officialAchievements = [
        ["A Vulture", "When it moves, it spreads"],
        ["Being Stuck", "Gas Tanks make the World burn brighter"],
        ["Breaking Contact", "The Sun shines through"],
        ["Broken Home", "The Virus is in their heads"],
        ["Bury your Past", "Avoid the Debris"],
        ["Enter the Heart", "Consecutive prayers kill"],
        ["Filled with Blood", "Drifting into their conclusion"],
        ["Gallery of Heads", "Two in One"],
        ["Gas Station", "Most can burn, but inside they can't"],
        ["Hiding Bodies", "Appealing views from the top"],
        ["Idolatry", "Precise deviation might gets things on fire"],
        ["Losing Track", "Just passing through"],
        ["Main Street", "350 meters are a long way"],
        ["Manufacturing Lies", "Some are on the run"],
        ["Occupied Village", "You can see them all"],
        ["Old Home", "Open Gates through their Hearts"],
        ["Open Mic Night in Hell", "He is blocking the entrance"],
        ["Removing Evidence", "Bullets that burn, are Bullets that hurt"],
        ["Surveil the Dead", "It's been a long time"],
        ["This is no Paradise", "Through their homes"],
        ["Valley Path", "Direct hits hit the hardest"],
    ];

    assert.strictEqual(officialAchievements.length, 21, "sanity check on this test's own reference list");

    const dataPairs = game.achievements
        .map(a => [a.name, a.description])
        .sort((a, b) => a[0].localeCompare(b[0]));

    assert.deepStrictEqual(dataPairs, [...officialAchievements].sort((a, b) => a[0].localeCompare(b[0])));

});
