import { test } from "node:test";
import assert from "node:assert";

import { getPlannerData } from "../utils/plannerCatalog.js";

// backend/catalog/games/el-hijo-a-wild-west-tale.json - 22 real achievements sourced
// from a live ISteamUserStats/GetSchemaForGame/v2 response for appid
// 853050 (fetched through this app's own services/steamApi.js). None are
// hidden; every description is Steam's own real text.
// Hidden achievements have no Steam description; where present, their
// description here is researched from community 100% guides and cited in
// the frontend guide header. difficulty/estimatedTime/missable are curatorial.
const game = getPlannerData("el-hijo-a-wild-west-tale");

test("getPlannerData('el-hijo-a-wild-west-tale') returns real planner data with 22 curated achievements", () => {

    assert.ok(game, "expected real planner data for el-hijo-a-wild-west-tale");
    assert.ok(Array.isArray(game.achievements));
    assert.strictEqual(game.achievements.length, 22);

});

test("every El Hijo - A Wild West Tale achievement has a unique id from 1 to 22 and a unique apiname", () => {

    const ids = game.achievements.map(a => a.id);
    const apinames = game.achievements.map(a => a.apiname);

    assert.deepStrictEqual([...ids].sort((a, b) => a - b), Array.from({ length: 22 }, (_, i) => i + 1));
    assert.strictEqual(new Set(ids).size, 22);
    assert.strictEqual(new Set(apinames).size, 22);

});

test("every El Hijo - A Wild West Tale achievement has a valid difficulty (1-5), a positive estimatedTime, and non-empty name/description", () => {

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

test("every one of the 22 El Hijo - A Wild West Tale achievement name+description pairs matches the catalog data", () => {

    const officialAchievements = [
        ["Adventurer", "Walk 25000 steps in the game"],
        ["Air Freshener", "Hide from 20 opponents in pollen clouds."],
        ["Broad Daylight", "Complete level 8 without hiding inside any objects"],
        ["Daredevil", "Hang off the edge of a train"],
        ["Eel Hijo", "Complete the game without being caught"],
        ["El Cuarto", "Inspire 18 children."],
        ["El Fantasma", "Complete level 10 without being seen"],
        ["El Heroe", "Inspire all children"],
        ["El Hombre", "Complete the game"],
        ["El Muerto", "Spend 300 seconds hiding in a coffin."],
        ["El Primero", "Inspire a child"],
        ["Escape Artist", "Escape the monastery"],
        ["Flashbang", "Stun 3 opponents with one fireworks explosion"],
        ["Fool me Once", "Distract 50 opponents with stones"],
        ["Hole Up", "Hide in 30 pots"],
        ["Hunter", "Hit a chicken with a stone"],
        ["No Stones", "Complete level 16 without using the slingshot"],
        ["Pitch Black", "Shoot all uncaged lanterns in The Gold Mine."],
        ["Riding the Rails", "Ride 10 Mine Carts"],
        ["Survivor", "Reach the town"],
        ["Truant", "Start your journey"],
        ["Two Birds", "Distract 3 opponents with 1 stone"],
    ];

    assert.strictEqual(officialAchievements.length, 22, "sanity check on this test's own reference list");

    const dataPairs = game.achievements
        .map(a => [a.name, a.description])
        .sort((a, b) => a[0].localeCompare(b[0]));

    assert.deepStrictEqual(dataPairs, [...officialAchievements].sort((a, b) => a[0].localeCompare(b[0])));

});
