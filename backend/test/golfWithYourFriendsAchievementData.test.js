import { test } from "node:test";
import assert from "node:assert";

import { getPlannerData } from "../utils/plannerCatalog.js";

// backend/catalog/games/golf-with-your-friends.json - 83 real achievements sourced
// from a live ISteamUserStats/GetSchemaForGame/v2 response for appid
// 431240 (fetched through this app's own services/steamApi.js).
// Hidden achievements ship no Steam description; their description here is
// researched from community 100% guides and cited in the frontend guide
// header. difficulty/estimatedTime/missable are curatorial.
const game = getPlannerData("golf-with-your-friends");

test("getPlannerData('golf-with-your-friends') returns real planner data with 83 curated achievements", () => {

    assert.ok(game, "expected real planner data for golf-with-your-friends");
    assert.ok(Array.isArray(game.achievements));
    assert.strictEqual(game.achievements.length, 83);

});

test("every Golf With Your Friends achievement has a unique id from 1 to 83 and a unique apiname", () => {

    const ids = game.achievements.map(a => a.id);
    const apinames = game.achievements.map(a => a.apiname);

    assert.deepStrictEqual([...ids].sort((a, b) => a - b), Array.from({ length: 83 }, (_, i) => i + 1));
    assert.strictEqual(new Set(ids).size, 83);
    assert.strictEqual(new Set(apinames).size, 83);

});

test("every Golf With Your Friends achievement has a valid difficulty (1-5), a positive estimatedTime, and non-empty name/description", () => {

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

test("every one of the 83 Golf With Your Friends achievement name+description pairs matches the catalog data", () => {

    const officialAchievements = [
        ["A History of Dunk ", "Play a full game of Museum on Dunk"],
        ["Amateur Putter", "Take 1000 shots"],
        ["Anchors aweigh!", "Play a full game of Pirate on Classic"],
        ["Back In Time For Tee", "Play a full game of Peaceful Pines on Classic"],
        ["Back of the Net", "Play a full game of Deep on Hockey"],
        ["Beginner Putter", "Take 100 shots"],
        ["Belle of the Ball", "Play a full game of Bouncy Castle on Dunk"],
        ["Blacklight Boss", "Get par or better on Deep Classic"],
        ["Blast off!", "Play a full game of Space Station on Classic"],
        ["BOO!", "Play a full game of Haunted on Classic"],
        ["Bouncing on Ice", "Play a full game of Bouncy Castle on Hockey"],
        ["Can't spook me!", "Get par or better on Haunted Classic"],
        ["CANNON BALL!!!", "Play a full game of Pirate on Dunk"],
        ["Castle Crashing", "Play a full game of Bouncy Castle on Classic"],
        ["Catch!", "Play a full game of Worms on Dunk"],
        ["Crash Landed", "Play a full game of Volcano on Classic"],
        ["Deep Dunker", "Play a full game of Deep on Dunk"],
        ["Dino defender", "Play a full game of Ancient on Hockey mode."],
        ["Dunking in the Dark", "Play a full game of Corrupted Forest on Dunk"],
        ["Dunks with Pharaohs", "Play a full game of Oasis on Dunk"],
        ["Eye See You!", "Get par or better on Corrupted Forest Classic"],
        ["Face off in the forest", "Play a full game of Forest on Hockey mode."],
        ["Fire Puck", "Play a full game of Volcano on Hockey"],
        ["Fly, fly away!", "Get 10 birdies"],
        ["Folly-oop", "Play a full game of Peaceful Pines on Dunk"],
        ["Friends in High Places", "Play a full game of Olympus Odyssey on Classic"],
        ["Friends With Pharaoh's", "Play a full game of Oasis on Classic"],
        ["Getting good!", "Get 10 albatross"],
        ["Golf With Your Friends", "Play a hotseat or online game"],
        ["Haunted Hat Trick", "Play a full game of Haunted on Hockey mode."],
        ["Hermes' Apprentice", "Play a full game of Olympus Odyssey on Dunk"],
        ["Historic Achievement", "Get par or better on Museum Classic"],
        ["Hockey Hand Grenade ", "Play a full game of Worms on Hockey"],
        ["Hockey, A History", "Play a full game of Museum on Hockey"],
        ["Hole in one!", "Get a hole in one!"],
        ["Howe Did I Get Here?", "Play a full game of Corrupted Forest on Hockey"],
        ["I'm The King of the Castle", "Get par or better on Bouncy Castle Classic"],
        ["Incoming!", "Play a full game Worms on Classic"],
        ["Into the Void", "Play a full game of Corrupted Forest on Classic"],
        ["Light the Lamp", "Play a full game of Twilight on Hockey mode."],
        ["Locked Up", "Play a full game of Escapists on Classic"],
        ["Magical!", "Play a full game of Twilight on Classic"],
        ["Master Putter", "Take 10000 shots"],
        ["Midnight swish", "Play a full game of Twilight on Dunk"],
        ["Nice shot!", "Get an albatross"],
        ["Nightmarish game of basketball ", "Play a full game of Haunted on Dunk"],
        ["No Prison Can Hold Me!", "Get par or better on Escapists Classic"],
        ["Not enough time in the day!", "Out of time"],
        ["Not enough time in the week!", "Out of time 50 times"],
        ["On par!", "Get 50 pars"],
        ["One small goal for man", "Play a full game of Space Station on Hockey"],
        ["Paaarrrrrrr!", "Get par or better on Pirate Classic"],
        ["Parfect!", "Get par or better on Oasis Classic"],
        ["Penalty shot with pirates", "Play a full game of Pirate Cove on Hockey mode."],
        ["Prehistoric lay-Up", "Play a full game of Ancient on Dunk"],
        ["Pride of Zeus", "Get par or better on Olympus Odyssey Classic"],
        ["Prison Yard Dunk", "Play a full game of Escapists on Dunk"],
        ["Raise the limit!", "Max shots reached"],
        ["Ring of Fire", "Play a full game of Volcano on Dunk"],
        ["Roar!", "Play a full game of Ancient on Classic"],
        ["Ruins or Rink?", "Play a full game of Peaceful Pines on Hockey"],
        ["Scientific Precision", "Get par or better on Space Station Classic"],
        ["Shoot out in the sand", "Play a full game of Oasis on Hockey mode."],
        ["Sin Binned", "Play a full game of Escapists on Hockey"],
        ["Slapshot that on a Vase!", "Play a full game of Olympus Odyssey on Hockey"],
        ["Space Jamming", "Play a full game of Space Station on Dunk"],
        ["Stay On Target", "Go out of bounds 50 times"],
        ["Sweet dunk!", "Play a full game of CandyLand on Dunk"],
        ["Sweet shot", "Play a full game of Candyland on Hockey mode."],
        ["Sweet tooth!", "Play a full game of CandyLand on Classic"],
        ["Targetted Destruction", "Get par or better on Worms Classic"],
        ["That was a rocky road", "Get par or better on Candyland Classic"],
        ["The Course Is That Way", "Go out of bounds"],
        ["The Highest Ground", "Get par or better on Volcano Classic"],
        ["Timber Hoops", "Play a full game of Forest on Dunk"],
        ["TIMBER!", "Play a full game of Forest on Classic"],
        ["Treemendous!", "Get par or better on Forest Classic"],
        ["Twinkle twinkle little par", "Get par or better on Twilight Classic"],
        ["Under the Sea", "Play a full game of Deep on Classic"],
        ["Unnatural History", "Play a full game of Museum on Classic"],
        ["Who's The Food Now?", "Get eaten by Gingy in the practice area"],
        ["You’re the Best, By Par", "Get par or better on Peaceful Pines Classic"],
        ["Your Ancestors would be proud", "Get par or better on Ancient Classic"],
    ];

    assert.strictEqual(officialAchievements.length, 83, "sanity check on this test's own reference list");

    const dataPairs = game.achievements
        .map(a => [a.name, a.description])
        .sort((a, b) => a[0].localeCompare(b[0]));

    assert.deepStrictEqual(dataPairs, [...officialAchievements].sort((a, b) => a[0].localeCompare(b[0])));

});
