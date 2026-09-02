import { test } from "node:test";
import assert from "node:assert";

import { getPlannerData } from "../utils/plannerCatalog.js";

// backend/catalog/games/battlefield-4.json - 67 real achievements sourced
// from a live ISteamUserStats/GetSchemaForGame/v2 response for appid
// 1238860 (fetched through this app's own services/steamApi.js).
// Hidden achievements ship no Steam description; their description here is
// researched from community 100% guides and cited in the frontend guide
// header. difficulty/estimatedTime/missable are curatorial.
const game = getPlannerData("battlefield-4");

test("getPlannerData('battlefield-4') returns real planner data with 67 curated achievements", () => {

    assert.ok(game, "expected real planner data for battlefield-4");
    assert.ok(Array.isArray(game.achievements));
    assert.strictEqual(game.achievements.length, 67);

});

test("every Battlefield 4 achievement has a unique id from 1 to 67 and a unique apiname", () => {

    const ids = game.achievements.map(a => a.id);
    const apinames = game.achievements.map(a => a.apiname);

    assert.deepStrictEqual([...ids].sort((a, b) => a - b), Array.from({ length: 67 }, (_, i) => i + 1));
    assert.strictEqual(new Set(ids).size, 67);
    assert.strictEqual(new Set(apinames).size, 67);

});

test("every Battlefield 4 achievement has a valid difficulty (1-5), a positive estimatedTime, and non-empty name/description", () => {

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

test("every one of the 67 Battlefield 4 achievement name+description pairs matches the catalog data", () => {

    const officialAchievements = [
        [".45 old school", "Perform 45 kills with the M1911 Handgun in Multiplayer"],
        ["2 Wheels", "Get a kill with the Dirtbike"],
        ["A one-man riot", "Obtain 11 000 points in the Shanghai mission in the Campaign"],
        ["Above and beyond the call", "Complete all Assignments in the Campaign"],
        ["Antediluvian", "Complete the Tashgar mission in the Campaign"],
        ["Blind Bomber", "In a round get 5 kills with air vehicles in Gulf of Oman"],
        ["Blood wake", "Get 30 headshots in the South China Sea mission in the Campaign"],
        ["Bomb squad", "Deliver 5 bombs in Obliteration"],
        ["Braving the storm", "Complete the Singapore mission in the Campaign"],
        ["Bulletproof. Sort Of...", "Spend 5 minutes using the Ballistic Shield"],
        ["Call me \"Sir\"", "Reach rank 25."],
        ["Cold Blooded", "Get a kill with an icicle on the Operation Whiteout map (Final Stand expansion)."],
        ["Dead by dawn", "Complete the Kunlun Mountains mission in the Campaign"],
        ["Death From Above", "Get a kill with the bomber"],
        ["Demolition man", "Obtain 15 000 points in the Tashgar mission in the Campaign"],
        ["Dirty Job", "Find the hidden tunnel in Caspian Border"],
        ["Done some searching", "Find 12 collectibles in the Campaign"],
        ["Dunn's pride", "Obtain 7 000 points in the Baku mission in the Campaign"],
        ["Every nook and cranny", "Find 21 collectibles in the Campaign"],
        ["Falling Down", "Kill an enemy with a ceiling collapse in Operation Metro"],
        ["Fish", "Complete the Campaign on Easy"],
        ["Fishing in Baku", "Complete the Baku mission in the Campaign"],
        ["Fledgling", "Play a round of Air Superiority"],
        ["Fly Swatter", "Kill an enemy with the AA Mine"],
        ["For the cause", "Sacrifice Hannah to save the Valkyrie in the Campaign"],
        ["For the people", "Sacrifice Irish to save the Valkyrie in the Campaign"],
        ["For tombstone", "Let the Valkyrie be destroyed in the Campaign"],
        ["Full arsenal", "Unlock all assignments and collectibles in the Campaign"],
        ["Gladiator", "Obtain 12 000 points in the Kunlun Mountains mission in the Campaign"],
        ["Guardian of the fleet", "Obtain 6 000 points in the Suez mission in the Campaign"],
        ["Guns at dawn", "Complete the Suez mission in the Campaign"],
        ["Has science gone too far?", "Get a kill using the HT-95 Levkov, XD-1 Accipiter, Rorsch Mk-1, and Schipunov 42"],
        ["Infiltrator", "Get 10 adrenaline kills in the Tashgar mission in the Campaign"],
        ["It was on the way...", "Find 6 collectibles in the Campaign"],
        ["Killing Me Softly", "Get a kill in the ACV"],
        ["King in the North", "Complete all Final Stand Assignments"],
        ["Link Repeater", "Win 2 rounds of Chainlink"],
        ["Methodical search", "Find 15 collectibles in the Campaign"],
        ["Mini Kamikaze", "Kill an enemy with the SUAV"],
        ["New Superpower", "Complete all China Rising Assignments"],
        ["No Parley", "Get a kill with the old cannon"],
        ["No stone left unturned", "Find 18 collectibles in the Campaign"],
        ["Patience is a virtue", "Experience all 3 endings in the Campaign"],
        ["RC Assassin", "Get 5 kills in a round with the RAWR"],
        ["Recon", "Find 28 collectibles in the Campaign"],
        ["Risky Business", "Kill an enemy flag carrier while carrying their flag in CTF"],
        ["Shawshank", "Get 5 kills with Shank in the Kunlun Mountains mission in the Campaign"],
        ["Snowbound", "Play all Final Stand maps"],
        ["Spotted", "Climb the highest point in Naval Strike"],
        ["Storm bringer", "Obtain 20 000 points in the Singapore mission in the Campaign"],
        ["Street Fighter", "Complete all Dragon's Teeth Assignments"],
        ["Stumbled over it", "Find 3 collectibles in the Campaign"],
        ["Terror of the deep", "Obtain 11 000 points in the South China Sea mission in the Campaign"],
        ["The Big Leagues", "Play a round of Carrier Assault"],
        ["The fall of a Titan", "Complete the South China Sea mission in the Campaign"],
        ["The Metropolitan", "Play a round on all Dragon's Teeth maps"],
        ["Tombstone", "Complete the Campaign on Hard"],
        ["Took a casual look around", "Find 9 collectibles in the Campaign"],
        ["Torched", "Ignite a brush fire using the repair tool in Operation Metro or Caspian Border"],
        ["Turn around...", "Perform 5 dog tag kills in Multiplayer"],
        ["War turtle", "Get 15 kills with RPG in the Singapore mission in the Campaign"],
        ["Well placed", "Get 10 kills with C4 in the Baku mission in the Campaign"],
        ["Wolf", "Complete the Campaign on Normal"],
        ["Wolves in sheep's clothing", "Complete the Shanghai mission in the Campaign"],
        ["Won them all", "Win a round of each game mode"],
        ["Wrecker", "Get 10 multi-kills in the Shanghai mission in the Campaign"],
        ["Your Titan is Ready", "Get a kill by activating the Titan Engines"],
    ];

    assert.strictEqual(officialAchievements.length, 67, "sanity check on this test's own reference list");

    const dataPairs = game.achievements
        .map(a => [a.name, a.description])
        .sort((a, b) => a[0].localeCompare(b[0]));

    assert.deepStrictEqual(dataPairs, [...officialAchievements].sort((a, b) => a[0].localeCompare(b[0])));

});
