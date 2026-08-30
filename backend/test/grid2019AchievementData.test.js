import { test } from "node:test";
import assert from "node:assert";

import { getPlannerData } from "../utils/plannerCatalog.js";

// backend/catalog/games/grid-2019.json - 38 real achievements sourced
// from a live ISteamUserStats/GetSchemaForGame/v2 response for appid
// 703860 (fetched through this app's own services/steamApi.js). None are
// hidden; every description is Steam's own real text.
// difficulty/estimatedTime/missable remain curatorial judgments.
const game = getPlannerData("grid-2019");

test("getPlannerData('grid-2019') returns real planner data with 38 curated achievements", () => {

    assert.ok(game, "expected real planner data for grid-2019");
    assert.ok(Array.isArray(game.achievements));
    assert.strictEqual(game.achievements.length, 38);

});

test("every GRID (2019) achievement has a unique id from 1 to 38 and a unique apiname", () => {

    const ids = game.achievements.map(a => a.id);
    const apinames = game.achievements.map(a => a.apiname);

    assert.deepStrictEqual([...ids].sort((a, b) => a - b), Array.from({ length: 38 }, (_, i) => i + 1));
    assert.strictEqual(new Set(ids).size, 38);
    assert.strictEqual(new Set(apinames).size, 38);

});

test("every GRID (2019) achievement has a valid difficulty (1-5), a positive estimatedTime, and non-empty name/description", () => {

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

test("every one of the 38 GRID (2019) achievement name+description pairs matches the catalog data", () => {

    const officialAchievements = [
        ["A Fine Choice", "Purchase your first car"],
        ["A Wheely Good Time", "Complete the A Wheely Good Time Objective"],
        ["All-American", "Win the 'Showdown: Vulpini Racing' Career Event"],
        ["Around the Globe", "Drive a total distance equal to the circumference of the Earth"],
        ["Best of the Best", "Win the 'Showdown: Ravenwest' Career Event"],
        ["Brawler", "Beat your first Nemesis"],
        ["British Heritage", "Complete the British Heritage Objective"],
        ["Burning Rubber", "Complete the Burning Rubber Objective"],
        ["By Invitation Only", "Complete every Career Event in the Invitational category"],
        ["Content Tracker", "Own at least one car in each class available from launch"],
        ["Coupon Car", "Win an Event with at least 3 other racers using a loan car"],
        ["Cruise Control", "Complete every Career Event in the GT category"],
        ["Das Beste", "Win the 'Showdown: Euro Rand' Career Event"],
        ["Delta Time", "Complete the Delta Time Objective"],
        ["Down Under", "Win the 'Showdown: Hammerhead' Career Event"],
        ["FA Racing Specialist", "Complete every Career Event in the FA Racing category"],
        ["Fast for a Hatchback", "Complete the Fast for a Hatchback Objective"],
        ["Final Stretch", "Gain entry to the GRID World Series"],
        ["Fine Tuned", "Complete every Career Event in the Tuner category"],
        ["First Of Many", "Win your first Career Event"],
        ["Flights to Catch", "Complete the Flights to Catch Objective"],
        ["Gone in a Flash", "Complete the Gone in a Flash Objective"],
        ["High Altitude", "Complete the High Altitude Objective"],
        ["Mercenary", "Win the 'Showdown: Aurora Motorsport' Career Event"],
        ["Next Contestant Please", "Beat your first Career Rival"],
        ["Out Of Stock", "Complete every Career Event in the Stock category"],
        ["Painting the Track red", "Complete the Painting the Track red Objective"],
        ["Personal Touch", "Customise your first livery"],
        ["Pristine", "Finish a race with at least 3 other racers without taking any damage"],
        ["Pro Driver", "Reach player level 50"],
        ["Pro Tuned", "Win the 'Showdown: DisruptR' Career Event"],
        ["Race Driver", "Reach Player Level 99"],
        ["RavenBest", "Win a race in a Ravenwest livery with Nathan McKane as your team mate "],
        ["Show Off", "Win a race by crossing the line backwards"],
        ["Tour Guide", "Complete every Career Event in the Touring category"],
        ["Triple Crowned", "Win the 'Showdown: Fernando Alonso' Career Event"],
        ["Underdog", "Win an Event with a full grid having finished the first round in last place"],
        ["Worth its Weight", "Earn a gold trophy in every Career Event in the Career Tab"],
    ];

    assert.strictEqual(officialAchievements.length, 38, "sanity check on this test's own reference list");

    const dataPairs = game.achievements
        .map(a => [a.name, a.description])
        .sort((a, b) => a[0].localeCompare(b[0]));

    assert.deepStrictEqual(dataPairs, [...officialAchievements].sort((a, b) => a[0].localeCompare(b[0])));

});
