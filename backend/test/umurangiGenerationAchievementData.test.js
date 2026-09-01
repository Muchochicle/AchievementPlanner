import { test } from "node:test";
import assert from "node:assert";

import { getPlannerData } from "../utils/plannerCatalog.js";

// backend/catalog/games/umurangi-generation.json - 23 real achievements sourced
// from a live ISteamUserStats/GetSchemaForGame/v2 response for appid
// 1223500 (fetched through this app's own services/steamApi.js). None are
// hidden; every description is Steam's own real text.
// Hidden achievements have no Steam description; where present, their
// description here is researched from community 100% guides and cited in
// the frontend guide header. difficulty/estimatedTime/missable are curatorial.
const game = getPlannerData("umurangi-generation");

test("getPlannerData('umurangi-generation') returns real planner data with 23 curated achievements", () => {

    assert.ok(game, "expected real planner data for umurangi-generation");
    assert.ok(Array.isArray(game.achievements));
    assert.strictEqual(game.achievements.length, 23);

});

test("every Umurangi Generation achievement has a unique id from 1 to 23 and a unique apiname", () => {

    const ids = game.achievements.map(a => a.id);
    const apinames = game.achievements.map(a => a.apiname);

    assert.deepStrictEqual([...ids].sort((a, b) => a - b), Array.from({ length: 23 }, (_, i) => i + 1));
    assert.strictEqual(new Set(ids).size, 23);
    assert.strictEqual(new Set(apinames).size, 23);

});

test("every Umurangi Generation achievement has a valid difficulty (1-5), a positive estimatedTime, and non-empty name/description", () => {

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

test("every one of the 23 Umurangi Generation achievement name+description pairs matches the catalog data", () => {

    const officialAchievements = [
        ["Auto Focus", "Got the Auto Focus Mod"],
        ["Bird Master", "Take a photo with 3 different birds in it"],
        ["Break Time", "Take a photo of 2 cigarettes on The Strand using the Telephoto lens"],
        ["Dirty", "Got the Dirty Lens"],
        ["Fire Select", "Got the Fire Select Mod"],
        ["Fish Eye", "Got the Fish Eye Lens"],
        ["Flash Box", "Got the Flash Box Mod"],
        ["Generational Warfare", "Take the last photo"],
        ["Graffiti Everyday", "Take a photo of 5 spray cans using the Wide Angle lens"],
        ["Hidden Pyramid", "Take a photo of the Hidden Pyramid in Katikati"],
        ["Limited window", "Get a shot of the Jets flying overhead"],
        ["Macro", "Got the Macro Lens"],
        ["Mystery Pentagram", "Take a photo of the mystery pentagram using the Telephoto lens"],
        ["Penguin Friend", "Take a photo of your penguin friend."],
        ["Pizza Roll", "Take a close by photo of a Pizza Roll meal"],
        ["Showdown", "Take a photo of the showdown on Invasion"],
        ["Speed runner", "Make a delivery in under 10 minutes"],
        ["Sports", "Got the Sports Lens"],
        ["Telephoto", "Got the Telephoto Lens"],
        ["Ultimate Gamer", "Take a photo of the word Gamer 7 times"],
        ["Ultra Wide Angle", "Got the Ultra Wide Angle Lens"],
        ["Unseen Horror", "Bring up the exposure of a photo of the 'thing' in the shadows on Contact"],
        ["Wide Angle", "Got the Wide Angle Lens"],
    ];

    assert.strictEqual(officialAchievements.length, 23, "sanity check on this test's own reference list");

    const dataPairs = game.achievements
        .map(a => [a.name, a.description])
        .sort((a, b) => a[0].localeCompare(b[0]));

    assert.deepStrictEqual(dataPairs, [...officialAchievements].sort((a, b) => a[0].localeCompare(b[0])));

});
