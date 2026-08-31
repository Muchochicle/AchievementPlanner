import { test } from "node:test";
import assert from "node:assert";

import { getPlannerData } from "../utils/plannerCatalog.js";

// backend/catalog/games/discstorm.json - 30 real achievements sourced
// from a live ISteamUserStats/GetSchemaForGame/v2 response for appid
// 330670 (fetched through this app's own services/steamApi.js). None are
// hidden; every description is Steam's own real text.
// difficulty/estimatedTime/missable remain curatorial judgments.
const game = getPlannerData("discstorm");

test("getPlannerData('discstorm') returns real planner data with 30 curated achievements", () => {

    assert.ok(game, "expected real planner data for discstorm");
    assert.ok(Array.isArray(game.achievements));
    assert.strictEqual(game.achievements.length, 30);

});

test("every DiscStorm achievement has a unique id from 1 to 30 and a unique apiname", () => {

    const ids = game.achievements.map(a => a.id);
    const apinames = game.achievements.map(a => a.apiname);

    assert.deepStrictEqual([...ids].sort((a, b) => a - b), Array.from({ length: 30 }, (_, i) => i + 1));
    assert.strictEqual(new Set(ids).size, 30);
    assert.strictEqual(new Set(apinames).size, 30);

});

test("every DiscStorm achievement has a valid difficulty (1-5), a positive estimatedTime, and non-empty name/description", () => {

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

test("every one of the 30 DiscStorm achievement name+description pairs matches the catalog data", () => {

    const officialAchievements = [
        ["4.0 Average", "Achieve A Rank on any 5 levels in single player"],
        ["Close Encounters", "Set phasers to Stun"],
        ["Crashed the Teddy Bear's Picnic", "Complete the Enchanted Forest in single player"],
        ["Dances with death", "What's the stupidest thing you could do with a Deathdisc?"],
        ["Dictatorship", "Grab the crown first, and hold on for dear life!"],
        ["Didn't even have to spend the night", "Complete the Museum Heist in single player"],
        ["Doing the Rounds!", "The longer you play, the more you unlock!"],
        ["Dug too deep", "Complete the Abandoned Mine in single player"],
        ["Eye see what you did there", "Complete the Robot Factory in single player"],
        ["Going Golem Gone", "Complete the Jungle Temple in single player"],
        ["I ain't afraid of no ghost", "Complete the Haunted Mansion in single player"],
        ["I think you dropped this", "Awarded for skilful use of Deflect"],
        ["I will survive", "Dominate in multiplayer Survival"],
        ["In the nick of time", "In Timebomb, make your move at the last possible second"],
        ["Long in the tooth", "Play multiplayer in the most walrus-like way you can"],
        ["Marathon Man", "The longer you play, the more you unlock!"],
        ["One in a million kid", "Play multiplayer, get the Deathdisc first, then pull off the perfect shot"],
        ["Plays well with others", "Try DiscStorm in multiplayer"],
        ["Return to sender", "Defeat the Ninja Master without using any of your own discs"],
        ["Save the Rhinos", "Good guys don't throw discs at rhino bots"],
        ["Student becomes the master", "Demonstrate complete mastery of the Tutorial Dojo"],
        ["The A Team", "Achieve A Rank on all levels in single player"],
        ["Too hot to handle", "Complete the Volcano Lair in single player"],
        ["Training Montage", "Complete the Tutorial Dojo in single player"],
        ["Trick shot", "Legends speak of a Discmaster who could hit 4 target dummies in a single shot..."],
        ["Two is enough thank you", "Deal with the Lava Lord, fast"],
        ["WEEEEEEEEEEEEEEEEEEE!", "Win from inside the minecart"],
        ["Where no disc has gone before", "Complete the Space Platform in single player"],
        ["You must be a Ninja", "Complete the Pirate Ship in single player"],
        ["You're out of here!", "Stun a player through a bookcase"],
    ];

    assert.strictEqual(officialAchievements.length, 30, "sanity check on this test's own reference list");

    const dataPairs = game.achievements
        .map(a => [a.name, a.description])
        .sort((a, b) => a[0].localeCompare(b[0]));

    assert.deepStrictEqual(dataPairs, [...officialAchievements].sort((a, b) => a[0].localeCompare(b[0])));

});
