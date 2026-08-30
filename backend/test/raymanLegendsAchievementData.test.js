import { test } from "node:test";
import assert from "node:assert";

import { getPlannerData } from "../utils/plannerCatalog.js";

// backend/catalog/games/rayman-legends.json - 42 real achievements sourced
// from a live ISteamUserStats/GetSchemaForGame/v2 response for appid
// 242550 (fetched through this app's own services/steamApi.js). None are
// hidden; every description is Steam's own real text.
// difficulty/estimatedTime/missable remain curatorial judgments.
const game = getPlannerData("rayman-legends");

test("getPlannerData('rayman-legends') returns real planner data with 42 curated achievements", () => {

    assert.ok(game, "expected real planner data for rayman-legends");
    assert.ok(Array.isArray(game.achievements));
    assert.strictEqual(game.achievements.length, 42);

});

test("every Rayman Legends achievement has a unique id from 1 to 42 and a unique apiname", () => {

    const ids = game.achievements.map(a => a.id);
    const apinames = game.achievements.map(a => a.apiname);

    assert.deepStrictEqual([...ids].sort((a, b) => a - b), Array.from({ length: 42 }, (_, i) => i + 1));
    assert.strictEqual(new Set(ids).size, 42);
    assert.strictEqual(new Set(apinames).size, 42);

});

test("every Rayman Legends achievement has a valid difficulty (1-5), a positive estimatedTime, and non-empty name/description", () => {

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

test("every one of the 42 Rayman Legends achievement name+description pairs matches the catalog data", () => {

    const officialAchievements = [
        ["Axe skater", "With Barbara or Elysia, slide on your axe for 30 meters"],
        ["Bad joke", "Destroy the parachutes of 5 enemies to make them fall"],
        ["Barbara's Free!", "Free The Barbarian princess"],
        ["Bouncing Island", "Collect all the lums flying above the bouncing island in \"The Mysterious Inflatable Island\""],
        ["Bronze Addict", "Win all the Bronze Cups from the paintings"],
        ["Diamond Addict", "Win all the Diamond Cups from the World paintings"],
        ["Dragon Rider!", "Complete the \"Dragon Slayer\" painting"],
        ["Gardener", "Pull 100 turnips out of the ground"],
        ["Gold Addict", "Win all the Gold Cups from the paintings"],
        ["I just love them!", "Win all the creatures"],
        ["Invaders!", "Save enough Teensies and get rid of the Dark Teensies to make all the Invasion paintings appear"],
        ["Journey to the moon", "Get rid of the five Dark Teensies"],
        ["Just kick it!", "Win one Kung Foot game"],
        ["Let him do the job", "In one run of \"Lucha Libre Get Away\", let the Luchador kill 10 enemies for you"],
        ["Lucky!", "Scratch 10 lucky tickets"],
        ["Mad world!", "Complete the \"Mariachi Madness\" painting"],
        ["Master of the locks", "Break all the locks on the worlds' and levels' paintings"],
        ["Nostalgia", "Finish your first \"Back to Origins\" painting"],
        ["Old school", "Finish all the \"Back to Origins\" paintings"],
        ["Orchestrate this!", "Complete the \"Orchestral Chaos\" painting"],
        ["Perfect!", "Get the 3 lums cups and the 3 Teensy cups of a painting"],
        ["Princess savior!", "Rescue the 10 princesses"],
        ["Rock that castle!", "Complete the \"Castle Rock\" painting"],
        ["Rubber Ducks", "Destroy 5 Rubber Ducks sent by Sharkmen"],
        ["Scratch me!", "Win and scratch all the lucky tickets"],
        ["Shoot them up!", "Get rid of 100 enemies with the Flying Punch"],
        ["Silver Addict", "Win all the Silver Cups from the paintings"],
        ["Sooo rich!", "Gather 1 million lums and unlock the final Hero"],
        ["Splash!", "Complete the \"Gloo Gloo\" painting"],
        ["Splinter Ray", "Go through \"Mansion of the Deep\" without crossing any light from a Dark Sentry or touching any laser"],
        ["Strike!", "Kill 5 enemies using turnips"],
        ["Swiped clean!", "Save all the Teensies in one world to win a Diamond Cup"],
        ["Teensies' friend", "Rescue 150 Teensies"],
        ["Teensies' hero", "Rescue 300 Teensies"],
        ["That was fast!", "Go fast enough to save 3 Teensies in an Invasion painting"],
        ["The chosen one", "Rescue all the kidnapped Teensies"],
        ["They're so cute!", "Win 30 creatures"],
        ["This ain't a platform!", "Stand on top of an enemy with a shield until he tries to attack you"],
        ["Turnip combo", "Pull a turnip out of the ground with a crush attack, then hit it with a jump kick"],
        ["Watch out!", "Kill 10 Toads using their electric projectiles"],
        ["We could be heroes", "Collect enough lums to unlock 10 Heroes paintings in the Heroes Gallery"],
        ["World Tour!", "Complete the \"Living Dead Party\" world"],
    ];

    assert.strictEqual(officialAchievements.length, 42, "sanity check on this test's own reference list");

    const dataPairs = game.achievements
        .map(a => [a.name, a.description])
        .sort((a, b) => a[0].localeCompare(b[0]));

    assert.deepStrictEqual(dataPairs, [...officialAchievements].sort((a, b) => a[0].localeCompare(b[0])));

});
