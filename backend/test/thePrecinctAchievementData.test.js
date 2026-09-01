import { test } from "node:test";
import assert from "node:assert";

import { getPlannerData } from "../utils/plannerCatalog.js";

// backend/catalog/games/the-precinct.json - 39 real achievements sourced
// from a live ISteamUserStats/GetSchemaForGame/v2 response for appid
// 490110 (fetched through this app's own services/steamApi.js).
// Hidden achievements have no Steam description; where present, their
// description here is researched from community 100% guides and cited in
// the frontend guide header. difficulty/estimatedTime/missable are curatorial.
const game = getPlannerData("the-precinct");

test("getPlannerData('the-precinct') returns real planner data with 39 curated achievements", () => {

    assert.ok(game, "expected real planner data for the-precinct");
    assert.ok(Array.isArray(game.achievements));
    assert.strictEqual(game.achievements.length, 39);

});

test("every The Precinct achievement has a unique id from 1 to 39 and a unique apiname", () => {

    const ids = game.achievements.map(a => a.id);
    const apinames = game.achievements.map(a => a.apiname);

    assert.deepStrictEqual([...ids].sort((a, b) => a - b), Array.from({ length: 39 }, (_, i) => i + 1));
    assert.strictEqual(new Set(ids).size, 39);
    assert.strictEqual(new Set(apinames).size, 39);

});

test("every The Precinct achievement has a valid difficulty (1-5), a positive estimatedTime, and non-empty name/description", () => {

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

test("every one of the 39 The Precinct achievement name+description pairs matches the catalog data", () => {

    const officialAchievements = [
        ["A Promising Career", "Reach the maximum Police Rank."],
        ["A Sharp Mind", "Recover every artifact."],
        ["Big Trouble in Chinatown", "Take down the Crimson Serpents gang and complete their storyline."],
        ["Book 'Em, Cordell", "Book 30 suspects."],
        ["Building a Case", "Submit 5 pieces of evidence against gangs."],
        ["Career Limiting Move", "Park in the Chief's Space."],
        ["Clean Slate", "Flush every toilet in The Precinct."],
        ["Cleaning the Streets", "Take down the August Gang (their storyline becomes a priority on your third day)."],
        ["Coming in Clutch", "Finish in 1st place in a Street Race."],
        ["Employee of the Day", "Earn 10,000 XP in a single shift."],
        ["Fast Responder", "Get a gold medal in every time trial."],
        ["Fine Work", "Issue 10 valid parking violation tickets in one shift."],
        ["Hidden in the Hood", "Discover and drive all the rare vehicles."],
        ["Historian", "Read every Plaque."],
        ["I See Everything", "Help ground officers arrest 20 suspects while you're in the helicopter."],
        ["I'm Fast, I'm Very Fast", "Finish in 1st place in all Street Races."],
        ["Is It a Bird?", "Complete 5 vehicle jumps."],
        ["Making Your Mark", "Achieve the rank of Police Officer 1."],
        ["Maxed Out", "Unlock every Player Upgrade in a category."],
        ["No, It's the Law", "Complete every vehicle jump."],
        ["Nowhere to hide", "Use three different support options to catch a single suspect."],
        ["On Top Form", "Achieve first place on the Shift scoreboard."],
        ["Partner in Law", "Reach the story beat where Kelly saves you from Warehouse 6 (unlocks automatically near the end of the main story)."],
        ["Pedal to the Metal", "Get a gold medal in a time trial."],
        ["Radio Responder", "Respond to and complete 50 callouts during your shifts."],
        ["Ready for the Real Thing", "Complete a time trial."],
        ["Ruined Their Day", "Issue 3 valid parking violation tickets."],
        ["Self Improvement", "Unlock a Player Upgrade."],
        ["Taking Out the Trash", "Commandeer a Garbage Truck."],
        ["The Most Hated Person in Averno City", "Issue 50 valid parking violation tickets."],
        ["The Secrets of the ACPD", "Complete the main story."],
        ["There's Gonna Be a Lot of Paperwork", "Arrest 100 suspects."],
        ["Thrown in the Deep End", "Complete your first shift on patrol."],
        ["Track Star", "Sprint for 30 seconds without stopping."],
        ["Unlucky, Punk", "Take down the Jawheads gang and complete their storyline."],
        ["We'll Pay for the Damage", "Commandeer every type of vehicle."],
        ["We're Gonna Need a Bigger Holding Cell", "Book 6 criminals in one shift."],
        ["What Are You in For?", "Have two suspects from different crimes in your police car at the same time."],
        ["What's in the Box?", "Recover an artifact."],
    ];

    assert.strictEqual(officialAchievements.length, 39, "sanity check on this test's own reference list");

    const dataPairs = game.achievements
        .map(a => [a.name, a.description])
        .sort((a, b) => a[0].localeCompare(b[0]));

    assert.deepStrictEqual(dataPairs, [...officialAchievements].sort((a, b) => a[0].localeCompare(b[0])));

});
