import { test } from "node:test";
import assert from "node:assert";

import { getPlannerData } from "../utils/plannerCatalog.js";

// backend/catalog/games/just-cause-2-multiplayer-mod.json - 20 real achievements sourced
// from a live ISteamUserStats/GetSchemaForGame/v2 response for appid
// 259080 (fetched through this app's own services/steamApi.js). None are
// hidden; every description is Steam's own real text.
// difficulty/estimatedTime/missable remain curatorial judgments.
const game = getPlannerData("just-cause-2-multiplayer-mod");

test("getPlannerData('just-cause-2-multiplayer-mod') returns real planner data with 20 curated achievements", () => {

    assert.ok(game, "expected real planner data for just-cause-2-multiplayer-mod");
    assert.ok(Array.isArray(game.achievements));
    assert.strictEqual(game.achievements.length, 20);

});

test("every Just Cause 2: Multiplayer Mod achievement has a unique id from 1 to 20 and a unique apiname", () => {

    const ids = game.achievements.map(a => a.id);
    const apinames = game.achievements.map(a => a.apiname);

    assert.deepStrictEqual([...ids].sort((a, b) => a - b), Array.from({ length: 20 }, (_, i) => i + 1));
    assert.strictEqual(new Set(ids).size, 20);
    assert.strictEqual(new Set(apinames).size, 20);

});

test("every Just Cause 2: Multiplayer Mod achievement has a valid difficulty (1-5), a positive estimatedTime, and non-empty name/description", () => {

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

test("every one of the 20 Just Cause 2: Multiplayer Mod achievement name+description pairs matches the catalog data", () => {

    const officialAchievements = [
        ["Careful Down There", "Stand on top of a plane in flight for a minute"],
        ["Cartographer", "Visit the undiscovered settlements on the PDA map"],
        ["Chaos Immigrant", "Play for a month"],
        ["Firestarter", "Kill 1,000 players by any means possible"],
        ["Hell on Wheels", "Cruise around with four other players in a MV880 with a mounted gun"],
        ["I Want To Break Free", "Reach the upper limit of the sky in a plane"],
        ["Incendiary Sightseer", "Play for an hour"],
        ["Indiscreet Infiltrator", "Play for a day"],
        ["Mile High Club", "Visit the Mile High Club with 20 other players"],
        ["Mom, Get The Camera", "Be on the same server as a JC2-MP developer"],
        ["Oil for Blood", "Kill 100 players at any offshore rig"],
        ["Only Human", "Kill any member of the JC2-MP team, or anyone with this achievement"],
        ["Power Surge", "Kill 10 players at Awan Sendawan Power Plant"],
        ["Sky Cause", "Parachute with 5 other players at the same time"],
        ["Socialite", "Play with 5 friends on the same server"],
        ["Stranded", "Meet 5 other players at Hantu Island"],
        ["Stuntshooter", "Kill five players who are standing on top of a moving plane"],
        ["Taxi Service", "Drive a taxi cab with 3 passengers for 10km in a single trip"],
        ["Welcome to Panau", "Connect to a server for the first time"],
        ["Wilful Wanderer", "Play for a week"],
    ];

    assert.strictEqual(officialAchievements.length, 20, "sanity check on this test's own reference list");

    const dataPairs = game.achievements
        .map(a => [a.name, a.description])
        .sort((a, b) => a[0].localeCompare(b[0]));

    assert.deepStrictEqual(dataPairs, [...officialAchievements].sort((a, b) => a[0].localeCompare(b[0])));

});
