import { test } from "node:test";
import assert from "node:assert";

import { getPlannerData } from "../utils/plannerCatalog.js";

// backend/catalog/games/kingdom-eighties.json - 31 real achievements sourced
// from a live ISteamUserStats/GetSchemaForGame/v2 response for appid
// 1956040 (fetched through this app's own services/steamApi.js).
// Hidden achievements have no Steam description; where present, their
// description here is researched from community 100% guides and cited in
// the frontend guide header. difficulty/estimatedTime/missable are curatorial.
const game = getPlannerData("kingdom-eighties");

test("getPlannerData('kingdom-eighties') returns real planner data with 31 curated achievements", () => {

    assert.ok(game, "expected real planner data for kingdom-eighties");
    assert.ok(Array.isArray(game.achievements));
    assert.strictEqual(game.achievements.length, 31);

});

test("every Kingdom Eighties achievement has a unique id from 1 to 31 and a unique apiname", () => {

    const ids = game.achievements.map(a => a.id);
    const apinames = game.achievements.map(a => a.apiname);

    assert.deepStrictEqual([...ids].sort((a, b) => a - b), Array.from({ length: 31 }, (_, i) => i + 1));
    assert.strictEqual(new Set(ids).size, 31);
    assert.strictEqual(new Set(apinames).size, 31);

});

test("every Kingdom Eighties achievement has a valid difficulty (1-5), a positive estimatedTime, and non-empty name/description", () => {

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

test("every one of the 31 Kingdom Eighties achievement name+description pairs matches the catalog data", () => {

    const officialAchievements = [
        ["1st Down", "Destroy a portal in a forest"],
        ["2nd Down", "Destroy another portal"],
        ["3rd Down", "Destroy a portal on the streets"],
        ["88 mph", "Get something back from the past"],
        ["An Excellent Adventure", "Complete Episode IV"],
        ["BMX Model 3003", "Uncredited professional BMX rider making it rain coins"],
        ["Calling Dr. Martha Lesh", "Complete Episode II"],
        ["Captain N", "Complete the game on Cursed"],
        ["Chief Technician", "Recruit someone handy"],
        ["Clumsy", "Lose the Crown, and take it back"],
        ["Confidence is an Illusion", "Find the missing trophy"],
        ["County Connection", "Wait for the bus"],
        ["Don't Smell the Flowers", "Complete the game in 50 days or less"],
        ["Falken's Maze", "Recruit someone smart"],
        ["George Burnett Had Twins", "Complete a level with only two workers"],
        ["Hail Mary", "Enter a cave"],
        ["I Miss Hill Valley", "Complete Episode III"],
        ["It Still Counts", "Destroy a portal on Peaceful"],
        ["It's Not a Wishing Well", "Lose 80 coins to the waters"],
        ["Letterman", "Recruit someone athletic"],
        ["Loner", "Complete a level with no more than 20 kids"],
        ["Muscle Machine", "Slap a monster truck"],
        ["My Little Horsey!", "Rainy day at Paradise Estate with Rainbows in tow"],
        ["No Camp Pinewood!", "Complete Episode I"],
        ["REALLY REALLY Personal", "Get eaten by a shark"],
        ["Rover-Rooby-Roo!", "Recruit someone friendly"],
        ["Saw Boss", "Clear all the trees on any level"],
        ["Stubborn", "Survive for 50 days in one level"],
        ["The Force of Freedom", "Defeat 10 greed with a machine gun"],
        ["Touchdown", "Destroy a portal around the mall"],
        ["Wizard", "Complete the game on Hard"],
    ];

    assert.strictEqual(officialAchievements.length, 31, "sanity check on this test's own reference list");

    const dataPairs = game.achievements
        .map(a => [a.name, a.description])
        .sort((a, b) => a[0].localeCompare(b[0]));

    assert.deepStrictEqual(dataPairs, [...officialAchievements].sort((a, b) => a[0].localeCompare(b[0])));

});
