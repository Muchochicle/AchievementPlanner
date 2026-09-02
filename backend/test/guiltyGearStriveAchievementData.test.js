import { test } from "node:test";
import assert from "node:assert";

import { getPlannerData } from "../utils/plannerCatalog.js";

// backend/catalog/games/guilty-gear-strive.json - 39 real achievements sourced
// from a live ISteamUserStats/GetSchemaForGame/v2 response for appid
// 1384160 (fetched through this app's own services/steamApi.js).
// Hidden achievements have no Steam description; where present, their
// description here is researched and cited in the frontend guide header.
// difficulty/estimatedTime/missable are curatorial.
const game = getPlannerData("guilty-gear-strive");

test("getPlannerData('guilty-gear-strive') returns real planner data with 39 curated achievements", () => {

    assert.ok(game, "expected real planner data for guilty-gear-strive");
    assert.ok(Array.isArray(game.achievements));
    assert.strictEqual(game.achievements.length, 39);

});

test("every GUILTY GEAR -STRIVE- achievement has a unique id from 1 to 39 and a unique apiname", () => {

    const ids = game.achievements.map(a => a.id);
    const apinames = game.achievements.map(a => a.apiname);

    assert.deepStrictEqual([...ids].sort((a, b) => a - b), Array.from({ length: 39 }, (_, i) => i + 1));
    assert.strictEqual(new Set(ids).size, 39);
    assert.strictEqual(new Set(apinames).size, 39);

});

test("every GUILTY GEAR -STRIVE- achievement has a valid difficulty (1-5), a positive estimatedTime, and non-empty name/description", () => {

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

test("every one of the 39 GUILTY GEAR -STRIVE- achievement name+description pairs matches the catalog data", () => {

    const officialAchievements = [
        ["A Pleasant Flight", "Perform 5 Homing Jumps against an opponent while in a match. (Excluding Tutorial Mode and Team of 3 Mode)"],
        ["Armor-Clad Faith", "[ARCADE] Reach the Extreme difficulty branch by completing the first 6 stages without losing a round."],
        ["Around the World", "Won matches with characters from 3 different regions of the world. (Excluding Tutorial Mode and Team of 3 Mode)"],
        ["At the End of the Struggle", "[MISSION] Completed 3 character match-up missions."],
        ["Battle Ready", "[TUTORIAL] Finished the tutorial until the end. (Excluding Team of 3 Mode)"],
        ["Beautiful Catch, Ain't It?", "Fished for the first time."],
        ["Begin Assessment of the Target", "[REPLAY] Watched 3 replays."],
        ["Behold the Power of My Lightning", "Defeated the opponent while in Dragon Install as Ky Kiske while in a match. (Excluding Tutorial Mode and Team of 3 Mode)"],
        ["Day 1 Bounty Hunter", "Reached character level 30 with one character."],
        ["Destruction and Creation", "Perform 10 Wall Breaks against an opponent while in a match. (Excluding Tutorial Mode and Team of 3 Mode)"],
        ["Everlasting Thirst", "Played 100 matches. (Excluding Tutorial Mode and Team of 3 Mode)"],
        ["Extinct Species", "Spent 100,000 World Dollars."],
        ["Extraordinary Defensive Instinct", "Successfully block an attack with Faultless Defense 100 times while in a match. (Excluding Tutorial Mode and Team of 3 Mode)"],
        ["Gateway to the Tower", "[ONLINE MATCH] Fought a match in the Rank Tower."],
        ["Gaze of the Strong", "[MISSION] Completed 3 combo missions."],
        ["Give It My All", "Defeated an opponent while at 30% or less health remaining while in a match. (Excluding Tutorial Mode and Team of 3 Mode)"],
        ["Gym Regular", "[TRAINING] Trained for more than 30 min."],
        ["Heart is Blazing", "[ARCADE] Reach the Hard difficulty branch and clear its harder, partner-assisted Stage 8."],
        ["I'll have a Little of Your Time", "[VERSUS] Win against a CPU opponent."],
        ["I'm Overflowing with Power", "Reached a Positive Bonus state without performing a Wall Break while in a match. (Excluding Tutorial Mode and Team of 3 Mode)"],
        ["I'm Your God Now", "Defeated the opponent with a perfect while in a match. (Excluding Tutorial Mode and Team of 3 Mode)"],
        ["In the Blink of an Eye", "Cancel a Roman Cancel with a special move 5 times while in a match. (Excluding Tutorial Mode and Team of 3 Mode)"],
        ["Knowledge is Power", "[MISSION] Completed 5 difficulty Lv.1 mission."],
        ["Manipulator of Time", "Perform Roman Cancel 100 times while in a match. (Excluding Tutorial Mode and Team of 3 Mode)"],
        ["Messiah Will Not Come", "[ARCADE] Defeat the powerful boss at the end of the Extreme or Hard difficulty branch."],
        ["No Return, High Risk", "Entered the Afro state after being hit by Faust's command grab while in a match. (Excluding Tutorial Mode and Team of 3 Mode)"],
        ["Not Missing an Opportunity", "Punish the opponent's ground throw whiff with a jumping attack 10 times while in a match. (Excluding Tutorial Mode and Team of 3 Mode)"],
        ["Nothing Personal, Kid", "Perform dash input Roman Cancel 10 times while in a match. (Excluding Tutorial Mode and Team of 3 Mode)"],
        ["Play the Hero till I Die", "[SURVIVAL] Win a round against the mysterious challenger."],
        ["Ready to Meet Your Maker?", "Successfully land a counter hit on an opponent with MAX R.I.S.C. Gauge  while in a match. (Excluding Tutorial Mode and Team of 3 Mode)"],
        ["Shine When Polished", "Successfully block an attack with Instant Block 100 times while in a match. (Excluding Tutorial Mode and Team of 3 Mode)"],
        ["Strike from Heaven", "Knock the opponent down during a Homing Jump while in a match. (Excluding Tutorial Mode and Team of 3 Mode)"],
        ["STRIVE", "Obtain all other achievements."],
        ["That's Heavy...", "[ARCADE] Defeated the Boss with 1 character."],
        ["The Room where Demons Dwell", "[ONLINE MATCH] Completed the Network Mode tutorial."],
        ["This Year's Fashion Trend", "Customize the hair, top, bottom, shoes, hat and equipment of your avatar."],
        ["To the World Outside", "[ONLINE MATCH] Fought a match in the Open Park."],
        ["Triple Cross", "Played matches using 3 different characters. (Excluding Tutorial Mode)"],
        ["You've Fallen Right into my Trap", "Successfully land a blue Psych Burst 10 times while in a match. (Excluding Tutorial Mode and Team of 3 Mode)"],
    ];

    assert.strictEqual(officialAchievements.length, 39, "sanity check on this test's own reference list");

    const dataPairs = game.achievements
        .map(a => [a.name, a.description])
        .sort((a, b) => a[0].localeCompare(b[0]));

    assert.deepStrictEqual(dataPairs, [...officialAchievements].sort((a, b) => a[0].localeCompare(b[0])));

});
