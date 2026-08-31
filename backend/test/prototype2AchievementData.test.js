import { test } from "node:test";
import assert from "node:assert";

import { getPlannerData } from "../utils/plannerCatalog.js";

// backend/catalog/games/prototype-2.json - 43 real achievements sourced
// from a live ISteamUserStats/GetSchemaForGame/v2 response for appid
// 115320 (fetched through this app's own services/steamApi.js). None are
// hidden; every description is Steam's own real text.
// difficulty/estimatedTime/missable remain curatorial judgments.
const game = getPlannerData("prototype-2");

test("getPlannerData('prototype-2') returns real planner data with 43 curated achievements", () => {

    assert.ok(game, "expected real planner data for prototype-2");
    assert.ok(Array.isArray(game.achievements));
    assert.strictEqual(game.achievements.length, 43);

});

test("every Prototype 2 achievement has a unique id from 1 to 43 and a unique apiname", () => {

    const ids = game.achievements.map(a => a.id);
    const apinames = game.achievements.map(a => a.apiname);

    assert.deepStrictEqual([...ids].sort((a, b) => a - b), Array.from({ length: 43 }, (_, i) => i + 1));
    assert.strictEqual(new Set(ids).size, 43);
    assert.strictEqual(new Set(apinames).size, 43);

});

test("every Prototype 2 achievement has a valid difficulty (1-5), a positive estimatedTime, and non-empty name/description", () => {

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

test("every one of the 43 Prototype 2 achievement name+description pairs matches the catalog data", () => {

    const officialAchievements = [
        ["//BLACKNET Hacker", "Complete all //BLACKNET dossiers."],
        ["All Growed Up", "Fully upgrade Heller."],
        ["All Together Now", "10 or more kills with a single Black Hole attack."],
        ["Anger Management", "Destroy 5 vehicles using a Finisher. "],
        ["Arcade Action", "Karate kick a helicopter."],
        ["Back Atcha!", "Deflect 5 missiles at enemies using Shield Block."],
        ["Cannonball!", "20 or more kills with a single Hammerfist dive attack."],
        ["Compulsive Eater", "5 consumes in 10 seconds or less."],
        ["Do the Evolution", "Acquire 5 Mutations."],
        ["Eating Your Way to the Top", "Acquire 30 upgrades through Consumes."],
        ["Finally Full", "Acquire all 46 upgrades through Consumes."],
        ["Follow Your Nose", "Find all BlackBoxes."],
        ["Hard to Please", "Acquire a Mutation in each of the 5 categories."],
        ["Hijack Be Nimble", "Stealth hijack 5 tanks or APCs."],
        ["I Caught a Big One!", "Mount a helicopter using Whipfist."],
        ["I Want Some More", "Complete RESURRECTION."],
        ["Icarus", "Reach the highest point in the world."],
        ["It's an Epidemic", "Complete MEET YOUR MAKER."],
        ["Just a Flesh Wound", "Dismember a Brawler. "],
        ["Lair to Rest", "Destroy a single Lair."],
        ["Master Prototype", "Complete the game on HARD difficulty."],
        ["Murder your Maker?", "Complete the game."],
        ["One by One", "Stealth Consume 50 Blackwatch troopers."],
        ["Over-Equipped", "Weaponize 10 vehicles."],
        ["Project Closed", "Complete a //BLACKNET operation."],
        ["Religious Experience", "Meet Father Guerra."],
        ["Road Rage", "Destroy 10 Blackwatch tanks, APCs or helicopters using a single hijacked tank or APC."],
        ["Sic 'em!", "Destroy 5 helicopters using Pack Leader."],
        ["So Above It All", "Spend at least 25 consecutive seconds in the air (helicopters don't count)."],
        ["Something to Live For", "Complete FALL FROM GRACE."],
        ["Spindler's Search", "Destroy all Lairs."],
        ["Strike, You're Out.", "Destroy a Strike Team in 15 seconds or less."],
        ["The Best Offense", "Counter enemy attacks 20 times using Shield."],
        ["The Floor is Lava", "Travel a half mile using only Wall Run, Glide, Jump and Air Dash."],
        ["The Mad Scientist", "Complete NATURAL SELECTION."],
        ["This is a Knife", "Acquire a Prototype Power."],
        ["Two for the Price of One", "Simultaneously kill 2 Brawlers using a single Devastator."],
        ["Up to No Good", "Defeat all Field Ops teams."],
        ["Vitamin B-rains", "Acquire 10 upgrades through Consumes."],
        ["Wanted Man", "Trigger 50 alerts."],
        ["What a Bitch", "Complete LABOR OF LOVE."],
        ["Who Watches the Watchers? ", "Consume 10 //BLACKNET targets."],
        ["You're the Bomb", "10 or more kills using a single Bio-Bomb."],
    ];

    assert.strictEqual(officialAchievements.length, 43, "sanity check on this test's own reference list");

    const dataPairs = game.achievements
        .map(a => [a.name, a.description])
        .sort((a, b) => a[0].localeCompare(b[0]));

    assert.deepStrictEqual(dataPairs, [...officialAchievements].sort((a, b) => a[0].localeCompare(b[0])));

});
