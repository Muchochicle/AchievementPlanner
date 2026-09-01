import { test } from "node:test";
import assert from "node:assert";

import { getPlannerData } from "../utils/plannerCatalog.js";

// backend/catalog/games/anger-foot.json - 30 real achievements sourced
// from a live ISteamUserStats/GetSchemaForGame/v2 response for appid
// 1978590 (fetched through this app's own services/steamApi.js). None are
// hidden; every description is Steam's own real text.
// Hidden achievements have no Steam description; where present, their
// description here is researched from community 100% guides and cited in
// the frontend guide header. difficulty/estimatedTime/missable are curatorial.
const game = getPlannerData("anger-foot");

test("getPlannerData('anger-foot') returns real planner data with 30 curated achievements", () => {

    assert.ok(game, "expected real planner data for anger-foot");
    assert.ok(Array.isArray(game.achievements));
    assert.strictEqual(game.achievements.length, 30);

});

test("every Anger Foot achievement has a unique id from 1 to 30 and a unique apiname", () => {

    const ids = game.achievements.map(a => a.id);
    const apinames = game.achievements.map(a => a.apiname);

    assert.deepStrictEqual([...ids].sort((a, b) => a - b), Array.from({ length: 30 }, (_, i) => i + 1));
    assert.strictEqual(new Set(ids).size, 30);
    assert.strictEqual(new Set(apinames).size, 30);

});

test("every Anger Foot achievement has a valid difficulty (1-5), a positive estimatedTime, and non-empty name/description", () => {

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

test("every one of the 30 Anger Foot achievement name+description pairs matches the catalog data", () => {

    const officialAchievements = [
        ["A New World", "At the final choice, end crime forever by kicking the shoes into the fire - one of the game's two mutually exclusive endings."],
        ["Bankruptcy", "Defeat the Business Gang."],
        ["Brogress Quest", "Finish a game of Broforce."],
        ["Captain Planet", "Defeat the Pollution Gang."],
        ["Completionist", "Earn every star."],
        ["Couldn't Resist", "Blow up the barrels in Trash Mountain."],
        ["Defiance", "Take the escalator In Upper Management."],
        ["Eye For Goal", "Kick the ball into the dumpster in The Back-Alleys."],
        ["Feedback Appreciated", "Lodge a complaint in Office Space."],
        ["Fire Prevention", "Set off all the fire extinguishers in Slum Life"],
        ["Fried And Battered", "Take a cheese bath in The Cult of The Pig."],
        ["Hide And Seek", "Find the hidden intern in Employee Wellness."],
        ["I Prefer Books", "Destroy your own TV in Homecoming."],
        ["Intervention Required", "Be under the influence of three different substances at once."],
        ["Make It Stop", "Release the tortured specimen in Green River Laboratory."],
        ["Movie Night", "At the final choice, maintain the status quo - one of the game's two mutually exclusive endings."],
        ["Not Impressed", "Critique the art in The Secret Entrance."],
        ["Peace Prevails", "Defeat the Violence Gang."],
        ["Pest Control", "Eradicate all the pidgeons in Smog Street."],
        ["Ponte Plunge", "Jump into the pool at the bottom of The Stairwell."],
        ["Prudish", "Defeat the Debauchery Gang."],
        ["Quick Draw", "Shoot a slice of toast before it hits the ground."],
        ["Rattle Me Bones", "Find 60 different skeletons."],
        ["Reptilian Recycling", "Recycle a lizard in Dumpster Town."],
        ["Sneaker Head", "Unlock every shoe."],
        ["Stress Test", "Dip below 20 FPS by using vending machines."],
        ["Thunderdome", "Turn the music up."],
        ["Unplugged", "Drain the water in A Fresh Start."],
        ["Where Do They Come From?", "Solve the sauce mystery in The Pizza District."],
        ["Where Do They Go?", "Follow the poles in The Clubs."],
    ];

    assert.strictEqual(officialAchievements.length, 30, "sanity check on this test's own reference list");

    const dataPairs = game.achievements
        .map(a => [a.name, a.description])
        .sort((a, b) => a[0].localeCompare(b[0]));

    assert.deepStrictEqual(dataPairs, [...officialAchievements].sort((a, b) => a[0].localeCompare(b[0])));

});
