import { test } from "node:test";
import assert from "node:assert";

import { getPlannerData } from "../utils/plannerCatalog.js";

// backend/catalog/games/marvels-spider-man-2.json - 43 real achievements sourced
// from a live ISteamUserStats/GetSchemaForGame/v2 response for appid
// 2651280 (fetched through this app's own services/steamApi.js). None are
// hidden; every description is Steam's own real text.
// Hidden achievements have no Steam description; where present, their
// description here is researched from community 100% guides and cited in
// the frontend guide header. difficulty/estimatedTime/missable are curatorial.
const game = getPlannerData("marvels-spider-man-2");

test("getPlannerData('marvels-spider-man-2') returns real planner data with 43 curated achievements", () => {

    assert.ok(game, "expected real planner data for marvels-spider-man-2");
    assert.ok(Array.isArray(game.achievements));
    assert.strictEqual(game.achievements.length, 43);

});

test("every Marvel's Spider-Man 2 achievement has a unique id from 1 to 43 and a unique apiname", () => {

    const ids = game.achievements.map(a => a.id);
    const apinames = game.achievements.map(a => a.apiname);

    assert.deepStrictEqual([...ids].sort((a, b) => a - b), Array.from({ length: 43 }, (_, i) => i + 1));
    assert.strictEqual(new Set(ids).size, 43);
    assert.strictEqual(new Set(apinames).size, 43);

});

test("every Marvel's Spider-Man 2 achievement has a valid difficulty (1-5), a positive estimatedTime, and non-empty name/description", () => {

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

test("every one of the 43 Marvel's Spider-Man 2 achievement name+description pairs matches the catalog data", () => {

    const officialAchievements = [
        ["A New Adventure", "Help Howard"],
        ["A New Suit", "Acquire the Black Suit, obtained automatically during Main Quest 15 'Good Men'."],
        ["Amazing", "Reach max level"],
        ["Another Way", "Complete Main Quest 23 'No Escape'."],
        ["Antidote", "Defeat a Symbiote that is under the Anti-Venom status effect during Main Quest 28."],
        ["Armed and Dangerous", "Defeat 100 enemies with Spider Arm abilities"],
        ["Behind the Masks", "Finish 'Grand Finale', the final Mysterium that spawns after completing all other Mysteriums."],
        ["Brooklyn Pride", "Complete \"A Gift\""],
        ["Co-Signing", "Complete all Tech Stashes"],
        ["Crimson Hour", "Finish 'It Was Meant for Me', the final Flame mission that spawns after completing all other Flame missions."],
        ["Data Collector", "Complete 'Target Identified', the final Unidentified Target that spawns after collecting all the others."],
        ["Dedicated", "Collect all Achievements"],
        ["Evolved", "Defeat 100 enemies with Evolved Venom abilities"],
        ["Exterminator", "Complete all 10 Symbiote Nests."],
        ["Foundational", "Complete all EMF Experiments"],
        ["Friendly Neighborhood Spider-Man", "Complete all FNSM requests"],
        ["Fully Loaded", "Purchase all of Spider-Man's Suit Tech upgrades"],
        ["Funky Wireless Protocols", "Solve the mystery of the Spider-Bots' origin"],
        ["Grains of Sand", "Find all 14 Marko's Memory collectibles."],
        ["Hang Ten", "Perform 30 Air Tricks in a row without touching the ground"],
        ["Heal the World", "Finish the main story"],
        ["Home Run!", "Round the bases at the Big Apple Ballers Stadium"],
        ["I Quit", "Complete Main Quest 28 'Set Things Right' (the final mission)."],
        ["Just Let Go", "As Miles, find the science trophy Miles and Phin won together"],
        ["Kitted Out", "Purchase all available Suits"],
        ["Leave Us Alone", "Complete Main Quest 25 'Don't Be Scared'."],
        ["Medicine", "Complete Main Quest 20 'It Chose You'."],
        ["My Community", "Complete \"Hard Bop\" "],
        ["New York, New York", "Complete all Photo Ops"],
        ["Once More, With Feeling", "Finish the main story in New Game+ mode"],
        ["Overdrive", "Use Reverse Flux to pull 6 or more enemies together at once as Miles (unlocks in Main Quest 23)."],
        ["Resourceful", "Collect a total of 10,000 Tech Parts"],
        ["Seek and Destroy", "Finish all 11 Hunter Blinds and all 4 Hunter Bases."],
        ["Slack Line", "Stealth takedown 25 enemies in stealth from the Web Line"],
        ["Soar", "Using only your Web Wings, glide from the Financial District to Astoria (Wind Tunnels are okay!)"],
        ["Splat", "Attempt and fail a trick before \"landing\" on the ground"],
        ["Stylish", "Equip a suit style"],
        ["Superior", "100% complete all districts"],
        ["Surge", "Use Symbiote Abilities 25 times during Symbiote Surge as Peter (unlocks after Main Quest 15)."],
        ["The Great Hunt", "Complete Main Quest 24 'Anything Can Be Broken'."],
        ["To the Max", "Purchase all Gadget upgrades"],
        ["You Know What to Do", "As Peter, visit Aunt May's grave"],
        ["You're Gonna Need Help", "Complete Main Quest 01 'Surface Tension' (the first story mission)."],
    ];

    assert.strictEqual(officialAchievements.length, 43, "sanity check on this test's own reference list");

    const dataPairs = game.achievements
        .map(a => [a.name, a.description])
        .sort((a, b) => a[0].localeCompare(b[0]));

    assert.deepStrictEqual(dataPairs, [...officialAchievements].sort((a, b) => a[0].localeCompare(b[0])));

});
