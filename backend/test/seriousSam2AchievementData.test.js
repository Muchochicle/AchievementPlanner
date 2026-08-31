import { test } from "node:test";
import assert from "node:assert";

import { getPlannerData } from "../utils/plannerCatalog.js";

// backend/catalog/games/serious-sam-2.json - 30 real achievements sourced
// from a live ISteamUserStats/GetSchemaForGame/v2 response for appid
// 204340 (fetched through this app's own services/steamApi.js). None are
// hidden; every description is Steam's own real text.
// Hidden achievements have no Steam description; where present, their
// description here is researched from community 100% guides and cited in
// the frontend guide header. difficulty/estimatedTime/missable are curatorial.
const game = getPlannerData("serious-sam-2");

test("getPlannerData('serious-sam-2') returns real planner data with 30 curated achievements", () => {

    assert.ok(game, "expected real planner data for serious-sam-2");
    assert.ok(Array.isArray(game.achievements));
    assert.strictEqual(game.achievements.length, 30);

});

test("every Serious Sam 2 achievement has a unique id from 1 to 30 and a unique apiname", () => {

    const ids = game.achievements.map(a => a.id);
    const apinames = game.achievements.map(a => a.apiname);

    assert.deepStrictEqual([...ids].sort((a, b) => a - b), Array.from({ length: 30 }, (_, i) => i + 1));
    assert.strictEqual(new Set(ids).size, 30);
    assert.strictEqual(new Set(apinames).size, 30);

});

test("every Serious Sam 2 achievement has a valid difficulty (1-5), a positive estimatedTime, and non-empty name/description", () => {

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

test("every one of the 30 Serious Sam 2 achievement name+description pairs matches the catalog data", () => {

    const officialAchievements = [
        ["A Helping Hand", "Throw 200 hand grenades"],
        ["Atomic Firecracker", "Use Serious Bomb 10 times"],
        ["Bird Lover", "Send 100 Klodovics flying"],
        ["Cannon Expert", "Kill 300 enemies with the Cannon"],
        ["Chi Fang Champion", "Complete ChiFang Episode"],
        ["Dances with Kleer", "Complete Kleer Episode"],
        ["Don't Feed The Monkey!!!", "In 'Riverdance', after crossing the bridge, pick up the banana from between the stones on the right and throw it into the large monkey head on the left."],
        ["Double Trouble", "Complete a level on SERIOUS Difficulty with 2X Enemy Multiplier or higher"],
        ["Elvian Defender", "Complete Ellenier Episode"],
        ["Extra Life!", "Get 20 extra lives on one level"],
        ["Football Glory", "Find all football-related secrets"],
        ["Fun And Games", "In 'Floaterra', on the second island's arena, blow up the out-of-place blue stone and stand inside the teleporter in the cave behind it."],
        ["He Sure Had Me Fooled!", "In 'Road to Ursul', activate the secret spinning health item on the far left of the blue Rollerball vehicle."],
        ["How Unfortunate", "In 'Giant Junkyard', approach the match near the large dynamite blocking your path - the secret activates automatically."],
        ["Hugo Annihilator", "Complete Kronor Episode"],
        ["Look, It's A Secret", "Find at least 60 secrets"],
        ["Mental Institution Master", "Complete Mental Institution on SERIOUS difficulty without using dual weapons, sprinting and rocket jumping"],
        ["Mental Kicker", "Complete Sirius Episode"],
        ["My Old Love", "In the 'Jungle' level, find the secret Rocket Launcher near the waterfall - shoot the rope holding the wooden plank so it drops."],
        ["Powered Up", "Use Powerups for more than 20 Minutes"],
        ["Punk Rocker", "Complete Game on ANY Difficulty with 2X Enemy Multiplier or higher"],
        ["Sam I Am!", "Kill 20000 Enemies"],
        ["Serious Beginner", "Complete Jungle Level"],
        ["Serious Master", "Complete Game on SERIOUS Difficulty"],
        ["Serious Run", "Complete all of the levels, beating estimated time on each level"],
        ["Sherlock", "Find all secrets on one level"],
        ["Simba Defender", "Complete M'Digbo Episode"],
        ["Someone Pick Up The Phone...", "Find the red phone booth hidden behind a tree in 'Siriuspolis Downtown'."],
        ["Totally Serious", "Complete Game on ANY Difficulty"],
        ["Zixie Savior", "Complete Magnor Episode"],
    ];

    assert.strictEqual(officialAchievements.length, 30, "sanity check on this test's own reference list");

    const dataPairs = game.achievements
        .map(a => [a.name, a.description])
        .sort((a, b) => a[0].localeCompare(b[0]));

    assert.deepStrictEqual(dataPairs, [...officialAchievements].sort((a, b) => a[0].localeCompare(b[0])));

});
