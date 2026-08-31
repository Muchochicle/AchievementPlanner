import { test } from "node:test";
import assert from "node:assert";

import { getPlannerData } from "../utils/plannerCatalog.js";

// backend/catalog/games/the-alters.json - 63 real achievements sourced
// from a live ISteamUserStats/GetSchemaForGame/v2 response for appid
// 1601570 (fetched through this app's own services/steamApi.js). None are
// hidden; every description is Steam's own real text.
// Hidden achievements have no Steam description; where present, their
// description here is researched from community 100% guides and cited in
// the frontend guide header. difficulty/estimatedTime/missable are curatorial.
const game = getPlannerData("the-alters");

test("getPlannerData('the-alters') returns real planner data with 63 curated achievements", () => {

    assert.ok(game, "expected real planner data for the-alters");
    assert.ok(Array.isArray(game.achievements));
    assert.strictEqual(game.achievements.length, 63);

});

test("every The Alters achievement has a unique id from 1 to 63 and a unique apiname", () => {

    const ids = game.achievements.map(a => a.id);
    const apinames = game.achievements.map(a => a.apiname);

    assert.deepStrictEqual([...ids].sort((a, b) => a - b), Array.from({ length: 63 }, (_, i) => i + 1));
    assert.strictEqual(new Set(ids).size, 63);
    assert.strictEqual(new Set(apinames).size, 63);

});

test("every The Alters achievement has a valid difficulty (1-5), a positive estimatedTime, and non-empty name/description", () => {

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

test("every one of the 63 The Alters achievement name+description pairs matches the catalog data", () => {

    const officialAchievements = [
        ["A place in people's hearts", "Complete the Worker’s storyline"],
        ["A Quantum Singularity", "Earn all trophies in the Alters"],
        ["Advanced industry", "Create the first portion of resources using the Refinery"],
        ["All By Myself", "Leave your Alters to the mercy of others"],
        ["All by myselves ", "Create all possible Alters"],
        ["Assertiveness", "Learn the Technician’s lesson - Assertiveness"],
        ["Awareness", "Keep the personality-less Tabula Rasa Alter living at your base into Act 3 (choose implants rather than sacrificing it)."],
        ["Baaa!", "Pet the sheep"],
        ["Bold Science", "Act 2 - start treating Jan's brain mutation with experimental therapy / the Tabula Rasa option (mutually exclusive with 'Corporate Plug')."],
        ["Caring after all", "Complete all Scientist's Alters' storylines"],
        ["Charisma", "Learn the Worker's lesson - Charisma"],
        ["Chill", "Learn the Shrink’s lesson - Chill"],
        ["Corporate Plug", "Act 2 - start treating Jan's brain mutation with implants (mutually exclusive with 'Bold Science')."],
        ["Dig Deeper", "Set up the first outpost"],
        ["Exceed all expectations", "Build the fifth Rapidium Ark"],
        ["Happy Sisyphus", "Complete the Doctor’s storyline"],
        ["Her last wish", "Complete the Technician’s storyline"],
        ["Hidden truth", "Complete the Scientist’s storyline"],
        ["I deserved this more", "Play on as Botanist Jan after swapping places (implants chosen, Botanist present), then reach any ending."],
        ["I Found You", "Find the rebel base"],
        ["In shield I trust", "Walk into an anomaly 20 times"],
        ["Integrity", "Learn the Doctor’s lesson - Integrity"],
        ["Into the storm", "Finish Act 2"],
        ["It ends in flames", "Blow up the base"],
        ["Jan Complete", "Learn all the lessons from your Alters"],
        ["Jan's Moving Village", "Expand the base to maximum capacity"],
        ["Joy of life", "Learn the Tabula Rasa’s lesson - Joy of Life"],
        ["Keeping him safe", "Complete the Refiner’s storyline"],
        ["Let's roll", "Finish the Prologue"],
        ["Look at all this new space!", "Expand the base for the first time"],
        ["Mastering Rapidium", "Start production of Phased Rapidium"],
        ["Maxwell's Path", "Finish the game with Maxwell's help - choose the Tabula Rasa option in Act 2 and keep Lena from discovering the Alters."],
        ["Mix and match", "Start production of Proxylium"],
        ["New perspective", "Get an alternative tattoo with Naranath Bhranthan"],
        ["Not Just An Object ", "Give every Alter at least one personal item"],
        ["Nothing's gonna stop us", "Finish Act 1"],
        ["Optimism", "Learn the Refiner’s lesson - Optimism"],
        ["Pragmatism ", "Learn the Scientist’s lesson - Pragmatism "],
        ["Provide more", "Build the second Rapidium Ark"],
        ["Reliance", "Learn the Botanist’s lesson - Reliance"],
        ["Remaking Himself", "Complete the Miner’s storyline"],
        ["Reunited ", "Choose implants in Act 2, reach the rebel hideout in Act 3, provide resources, and connect their base with pylons."],
        ["Shrewdness", "Learn the Guard’s lesson - Shrewdness"],
        ["Smart Management", "Start a production uphold"],
        ["Space Gardener", "Place the first Terraformer"],
        ["Substance Genius", "Start production of Megafluid"],
        ["Take it easy, Dude", "Complete the Shrink’s storyline"],
        ["The Bridge", "Build a bridge over the lava river"],
        ["The Corporate Way", "Finish the game with the corporation's help - choose implants in Act 2 and reach any ending."],
        ["The mission comes first", "Build the fourth Rapidium Ark"],
        ["The Other Man", "Complete the Botanist’s storyline"],
        ["The reason I stayed", "Finish the Last Variable DLC"],
        ["The survivor ", "Reach the base"],
        ["The things we do for love", "The Botanist betrayal ending - with implants chosen and Botanist Jan present, swap places at the end of Act 3."],
        ["The Ultimate Builder", "Build all possible modules"],
        ["Time to go home", "Finish Act 3"],
        ["Two of us", "Create the first Alter"],
        ["Vulnerability", "Learn the Miner’s lesson - Vulnerability"],
        ["Wait, you can do that?", "Create the same Alter a second time - possible if one is lost, or via the late-game advanced cloning option."],
        ["We Made It Together", "Survive the magnetic storm"],
        ["We needed that", "Build the third Rapidium Ark"],
        ["Who else is there?", "Upgrade the Quantum Computer"],
        ["You gotta be smart", "Complete the Guard’s storyline"],
    ];

    assert.strictEqual(officialAchievements.length, 63, "sanity check on this test's own reference list");

    const dataPairs = game.achievements
        .map(a => [a.name, a.description])
        .sort((a, b) => a[0].localeCompare(b[0]));

    assert.deepStrictEqual(dataPairs, [...officialAchievements].sort((a, b) => a[0].localeCompare(b[0])));

});
