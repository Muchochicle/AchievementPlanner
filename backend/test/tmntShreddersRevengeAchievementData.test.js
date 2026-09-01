import { test } from "node:test";
import assert from "node:assert";

import { getPlannerData } from "../utils/plannerCatalog.js";

// backend/catalog/games/tmnt-shredders-revenge.json - 30 real achievements sourced
// from a live ISteamUserStats/GetSchemaForGame/v2 response for appid
// 1361510 (fetched through this app's own services/steamApi.js).
// Hidden achievements have no Steam description; where present, their
// description here is researched from community 100% guides and cited in
// the frontend guide header. difficulty/estimatedTime/missable are curatorial.
const game = getPlannerData("tmnt-shredders-revenge");

test("getPlannerData('tmnt-shredders-revenge') returns real planner data with 30 curated achievements", () => {

    assert.ok(game, "expected real planner data for tmnt-shredders-revenge");
    assert.ok(Array.isArray(game.achievements));
    assert.strictEqual(game.achievements.length, 30);

});

test("every TMNT: Shredder's Revenge achievement has a unique id from 1 to 30 and a unique apiname", () => {

    const ids = game.achievements.map(a => a.id);
    const apinames = game.achievements.map(a => a.apiname);

    assert.deepStrictEqual([...ids].sort((a, b) => a - b), Array.from({ length: 30 }, (_, i) => i + 1));
    assert.strictEqual(new Set(ids).size, 30);
    assert.strictEqual(new Set(apinames).size, 30);

});

test("every TMNT: Shredder's Revenge achievement has a valid difficulty (1-5), a positive estimatedTime, and non-empty name/description", () => {

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

test("every one of the 30 TMNT: Shredder's Revenge achievement name+description pairs matches the catalog data", () => {

    const officialAchievements = [
        ["A + B", "Defeat a boss with a Super Attack."],
        ["Beware Lawbreakers!", "Play as Casey Jones."],
        ["Biggest Fan!", "Find all cameos in Story Mode."],
        ["Breaking Out!", "Destroy 200 breakable objects."],
        ["Buffoons!", "Complete Episode 7 (defeat Bebop and Rocksteady)."],
        ["Button Masher", "Win the balloon minigame in Episode 9."],
        ["Classic Couch Memories", "Complete the Arcade Mode in Multiplayer."],
        ["Clean Up in Aisle 4", "Complete Episode 13 (stop Chrome Dome rebuilding the Technodrome)."],
        ["Come On!", "Get hit while taunting."],
        ["Complete Cast!", "See all of the different endings in Story Mode."],
        ["Complete Season", "Complete the Story Mode."],
        ["Cowabunga It Is", "Perform a 250-hits string."],
        ["Empire Strikes Out", "Complete Episode 11 (turn back the Triceraton empire)."],
        ["Finally Getting Along!", "Cheer up Raphael while playing as Casey Jones."],
        ["INEFFECTIVE!", "Defeat the Rat King while playing as Splinter."],
        ["Kind Brother", "Revive a teammate in multiplayer."],
        ["Like the Old Days!", "Complete the Arcade Mode on the hardest difficulty."],
        ["Master of One Quarter", "Complete the Arcade Mode without using a credit."],
        ["Mode 7 ", "Throw 16 enemies toward the camera."],
        ["Most Fearsome Fighting Team!", "Complete a Stage in any mode in multiplayer."],
        ["Multitasker", "Complete all of the special requests in Story Mode."],
        ["No need for Mutagen!", "Bring all characters to max Power Level in Story Mode."],
        ["Opening an Antique Store?", "Find 5 different collectibles in Story Mode."],
        ["Piped Piper! ", "Complete Episode 5 (defeat the Rat King in the NYC sewers)."],
        ["Pizza Time! ", "Eat 20 pizzas."],
        ["Return to Sender", "Deflect 10 projectiles. "],
        ["Sharing is Caring!", "Cheer up the same teammate 3 times in a single stage."],
        ["Special Report", "Complete Episode 1 (stop the rogue Channel 6 broadcast)."],
        ["Teamwork", "Perform 10 Team Attacks in multiplayer."],
        ["Who Needs A Dock?", "Defeat Super Shredder without taking damage."],
    ];

    assert.strictEqual(officialAchievements.length, 30, "sanity check on this test's own reference list");

    const dataPairs = game.achievements
        .map(a => [a.name, a.description])
        .sort((a, b) => a[0].localeCompare(b[0]));

    assert.deepStrictEqual(dataPairs, [...officialAchievements].sort((a, b) => a[0].localeCompare(b[0])));

});
