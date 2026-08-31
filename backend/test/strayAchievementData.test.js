import { test } from "node:test";
import assert from "node:assert";

import { getPlannerData } from "../utils/plannerCatalog.js";

// backend/catalog/games/stray.json - 24 real achievements sourced
// from a live ISteamUserStats/GetSchemaForGame/v2 response for appid
// 1332010 (fetched through this app's own services/steamApi.js). None are
// hidden; every description is Steam's own real text.
// Hidden achievements have no Steam description; where present, their
// description here is researched from community 100% guides and cited in
// the frontend guide header. difficulty/estimatedTime/missable are curatorial.
const game = getPlannerData("stray");

test("getPlannerData('stray') returns real planner data with 24 curated achievements", () => {

    assert.ok(game, "expected real planner data for stray");
    assert.ok(Array.isArray(game.achievements));
    assert.strictEqual(game.achievements.length, 24);

});

test("every Stray achievement has a unique id from 1 to 24 and a unique apiname", () => {

    const ids = game.achievements.map(a => a.id);
    const apinames = game.achievements.map(a => a.apiname);

    assert.deepStrictEqual([...ids].sort((a, b) => a - b), Array.from({ length: 24 }, (_, i) => i + 1));
    assert.strictEqual(new Set(ids).size, 24);
    assert.strictEqual(new Set(apinames).size, 24);

});

test("every Stray achievement has a valid difficulty (1-5), a positive estimatedTime, and non-empty name/description", () => {

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

test("every one of the 24 Stray achievement name+description pairs matches the catalog data", () => {

    const officialAchievements = [
        ["A Little Chatty", "Meow 100 times."],
        ["Al-Cat-Raz", "Story: get thrown in jail."],
        ["Badges", "Collect all badges."],
        ["Boom Chat Kalaka", "Dunk the basketball."],
        ["Can't Cat-ch Me", "Complete the first Zurk chase without being caught."],
        ["Cat Got Your Tongue?", "Story: have B-12 translate a robot for you (during Chapter 4)."],
        ["Cat-a-Pult", "Jump 500 times."],
        ["Cat-a-strophe", "Try to play mahjong with the robots."],
        ["Cat's best friend", "Nuzzle up against 5 robots."],
        ["Catwalk", "Story: reach Midtown."],
        ["Curiosity Killed the Cat", "Wear the paper bag."],
        ["Eye Opener", "Story: finish the game and open the city."],
        ["I Am Speed", "Complete the game in less than 2 hours."],
        ["I Remember!", "Collect all of B-12's memories."],
        ["Meowlody", "Bring all the music sheets to Morusque."],
        ["Missed Jump", "Story: miss the pipe jump at the end of the first chapter and fall into the walled city."],
        ["No More Lives", "Die 9 times."],
        ["Not Alone", "Story: meet B-12."],
        ["Pacifist", "Complete the Sewers section without killing any Zurks."],
        ["Productive Day", "Sleep for more than one hour."],
        ["Scratch", "In the nightclub, take the record from a table to the main stage, place it on the record player and interact with it to scratch the vinyl."],
        ["Sneakitty", "Get through Midtown without being detected by the Sentinels."],
        ["Télé à chat", "Browse through all of the TV channels."],
        ["Territory", "Scratch in every chapter."],
    ];

    assert.strictEqual(officialAchievements.length, 24, "sanity check on this test's own reference list");

    const dataPairs = game.achievements
        .map(a => [a.name, a.description])
        .sort((a, b) => a[0].localeCompare(b[0]));

    assert.deepStrictEqual(dataPairs, [...officialAchievements].sort((a, b) => a[0].localeCompare(b[0])));

});
