import { test } from "node:test";
import assert from "node:assert";

import { getPlannerData } from "../utils/plannerCatalog.js";

// backend/catalog/games/olliolli-world.json - 54 real achievements sourced
// from a live ISteamUserStats/GetSchemaForGame/v2 response for appid
// 1190170 (fetched through this app's own services/steamApi.js).
// Hidden achievements ship no Steam description; their description here is
// researched from community 100% guides and cited in the frontend guide
// header. difficulty/estimatedTime/missable are curatorial.
const game = getPlannerData("olliolli-world");

test("getPlannerData('olliolli-world') returns real planner data with 54 curated achievements", () => {

    assert.ok(game, "expected real planner data for olliolli-world");
    assert.ok(Array.isArray(game.achievements));
    assert.strictEqual(game.achievements.length, 54);

});

test("every OlliOlli World achievement has a unique id from 1 to 54 and a unique apiname", () => {

    const ids = game.achievements.map(a => a.id);
    const apinames = game.achievements.map(a => a.apiname);

    assert.deepStrictEqual([...ids].sort((a, b) => a - b), Array.from({ length: 54 }, (_, i) => i + 1));
    assert.strictEqual(new Set(ids).size, 54);
    assert.strictEqual(new Set(apinames).size, 54);

});

test("every OlliOlli World achievement has a valid difficulty (1-5), a positive estimatedTime, and non-empty name/description", () => {

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

test("every one of the 54 OlliOlli World achievement name+description pairs matches the catalog data", () => {

    const officialAchievements = [
        ["Anti-Grabity", "Achieve a total of 600 seconds air time"],
        ["Are You Dizzy?", "Achieve a total of 180,000 degrees of rotation"],
        ["Better Late Than Never", "Achieve 500 Late Tricks"],
        ["Blown Away", "Learn about Wind Zones"],
        ["Bossed Vulgas", "Finish the main path of Los Vulgas and meet Radysus"],
        ["Burnt-out-rock", "Finish the main path of Burntrock and meet The Mirage"],
        ["Burntrad", "Beat all Radysus Challenges in Burntrock"],
        ["Burntrock Hero", "Unlock and beat the Local Hero level in Burntrock"],
        ["Challenge 10", "Complete 10 Challenges"],
        ["Challenge 100", "Complete 100 Challenges"],
        ["Challenge 50", "Complete 50 Challenges"],
        ["Cloverbrook Hero", "Unlock and beat the Local Hero level in Cloverbrook"],
        ["Cloverrad", "Beat all Radysus Challenges in Cloverbrook"],
        ["Creature Collector", "Complete all the Lagoon Creature, Hairy Beast and Cow regular Challenges!"],
        ["Discovery of a Lifetime", "Find Radlantis City"],
        ["Done-shine Valley", "Finish the main path of Sunshine Valley and meet Technicolas"],
        ["Every Trick in the Book", "Perform one of every Trick"],
        ["First Try", "Finish a level without slamming or respawning"],
        ["Flattery", "Complete a V.O.I.D. Riders level wearing a V.O.I.D. Riders mask!"],
        ["Going Up", "Learn about Tractor Beams"],
        ["Hold It (I Like the Way You Tweak It)", "Achieve 500 Tweaked Grabs"],
        ["Hundreds Club", "Achieve a Combo multiplier of 100 and then land in a Career level"],
        ["I Think That's Everything", "Trick, tweak a Grab, rotate 180, Grind, Late Trick and Grind Switch in one Combo"],
        ["Known Round Here", "Win a League group"],
        ["Los Vulgas Hero", "Unlock and beat the Local Hero level in Los Vulgas"],
        ["Master", "Complete a Mastery"],
        ["Masterier", "Fully complete a set of Masteries for any Skate God"],
        ["Masteriest", "Fully complete all Masteries"],
        ["More Than a Tourist", "Fully complete a District"],
        ["Nail the Landing", "Get your first Combo over 1,000,000 points"],
        ["Opt In Drop In", "Finish any Optional level with all Perfect Grinds and Landings"],
        ["Over the Bolts", "Achieve 1,000 Perfect Landings"],
        ["Over-brook", "Finish the main path of Cloverbrook and meet Flora"],
        ["Primo", "Slam for the very first time"],
        ["Pro-motion", "Get promoted in Leagues"],
        ["Rad Vulgas", "Beat all Radysus Challenges in Los Vulgas"],
        ["Radlantis Rivals Champion", "Become the champion of the Radlantis Rivals Cup!"],
        ["Radside", "Beat all Radysus Challenges in Sketchside"],
        ["Ride the Beams", "Use Tractor Beams 200 times"],
        ["Side Hustle", "Beat all Sidequests"],
        ["Sketch-bye-d", "Finish the main path of Sketchside and meet Hazard Queen"],
        ["Sketchside Hero", "Unlock and beat the Local Hero level in Sketchside"],
        ["Sky High", "Beat every level, challenge, Local hero score and collect every customisation in the Flowzone"],
        ["So That's How You Do It", "Complete a level in one Combo"],
        ["Spot Finder", "Set a score on every Style of Gnarvana Portal level"],
        ["Sunshine Raddy", "Beat all Radysus Challenges in Sunshine Valley"],
        ["Sunshine Valley Hero", "Unlock and beat the Local Hero level in Sunshine Valley"],
        ["Switch Up", "Achieve 500 Grind Switches"],
        ["The Hyped One", "Show Nebulord how rad you are!"],
        ["The Whole V.O.I.D.", "Beat every level, challenge, Local Hero score and collect every customisation in V.O.I.D. Riders"],
        ["They Last Twice As Long", "Achieve 500 Perfect Manuals"],
        ["Too Grindy", "Achieve 1,000 Perfect Grinds"],
        ["Treasure Hunter", "Collect all of the Map Pieces"],
        ["Wind Walker", "Go through 200 wind zones"],
    ];

    assert.strictEqual(officialAchievements.length, 54, "sanity check on this test's own reference list");

    const dataPairs = game.achievements
        .map(a => [a.name, a.description])
        .sort((a, b) => a[0].localeCompare(b[0]));

    assert.deepStrictEqual(dataPairs, [...officialAchievements].sort((a, b) => a[0].localeCompare(b[0])));

});
