import { test } from "node:test";
import assert from "node:assert";

import { getPlannerData } from "../utils/plannerCatalog.js";

// backend/catalog/games/burnout-paradise-remastered.json - 56 real achievements sourced
// from a live ISteamUserStats/GetSchemaForGame/v2 response for appid
// 1238080 (fetched through this app's own services/steamApi.js). None are
// hidden; every description is Steam's own real text.
// difficulty/estimatedTime/missable remain curatorial judgments.
const game = getPlannerData("burnout-paradise-remastered");

test("getPlannerData('burnout-paradise-remastered') returns real planner data with 56 curated achievements", () => {

    assert.ok(game, "expected real planner data for burnout-paradise-remastered");
    assert.ok(Array.isArray(game.achievements));
    assert.strictEqual(game.achievements.length, 56);

});

test("every Burnout Paradise Remastered achievement has a unique id from 1 to 56 and a unique apiname", () => {

    const ids = game.achievements.map(a => a.id);
    const apinames = game.achievements.map(a => a.apiname);

    assert.deepStrictEqual([...ids].sort((a, b) => a - b), Array.from({ length: 56 }, (_, i) => i + 1));
    assert.strictEqual(new Set(ids).size, 56);
    assert.strictEqual(new Set(apinames).size, 56);

});

test("every Burnout Paradise Remastered achievement has a valid difficulty (1-5), a positive estimatedTime, and non-empty name/description", () => {

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

test("every one of the 56 Burnout Paradise Remastered achievement name+description pairs matches the catalog data", () => {

    const officialAchievements = [
        ["All Pimped Out", "Win all Burning Routes"],
        ["Block Party", "Complete 2 whole sections of online Challenges (Timed & Bike challenges are not required to be finished)"],
        ["Boosting Around the World", "Get a x20 Boost Chain"],
        ["Bottom of the Class", "Get your D class license"],
        ["Burnout Skills", "In an 8 player online Freeburn lead 6 of the Today's Best Scores (6/11 for Cars) (6/6 for Bikes)"],
        ["Bustin' Out", "Collect all Billboards"],
        ["Car in a China Shop", "Get 500 Takedowns (either online or offline)"],
        ["Crash TV Air Time", "Land the Mega Jump from the Crash TV Ski Jump with at least 4.5 seconds of Air Time"],
        ["Crashin' All Over The World", "Set a Showtime Road Rule on every road"],
        ["Criterion Elite", "Get your Elite License, win every event, find all discoverables and beat every Road Rule"],
        ["Daredevil", "Land a 2 barrel roll jump"],
        ["Duckin' and Weavin'", "Win a Marked Man without being taken down"],
        ["Elite", "Win your Burnout Elite License"],
        ["Explorer", "Find all Events"],
        ["Firestarter", "Make 50 online Rivals"],
        ["First Win", "Win your first 8 player online race"],
        ["Flying Colours", "Get your A Class License"],
        ["Flying High", "Successfully land all Superjumps"],
        ["Golden", "Awarded for delivering the Gold to your team base in a Cops and Robbers game"],
        ["Great Start", "Win a Race"],
        ["Island Explorer", "Find all 15 Island events"],
        ["It's Showtime", "Set a Showtime Road Rule on East Crawford Drive"],
        ["Join the Party", "Complete 1 online Challenge (Timed & Bike challenges do not count)"],
        ["Just for Pics", "Make your first online Rival"],
        ["Learning to Fly", "Successfully land 5 Superjumps"],
        ["Lookin' Good", "Repair your first wrecked car"],
        ["Massive Party Game", "Complete a party game of 8 rounds with 8 players"],
        ["Millionaires' Club", "Score over 1,000,000 in Stunt Run"],
        ["Misdemeanor", "Collect 5 Billboards"],
        ["Must Try Harder", "Get your B Class License"],
        ["Off the Beaten Path", "Collect 25 Smashes"],
        ["Online and Kicking", "Complete 20 online Events"],
        ["Online Champion", "Win 10 online Races"],
        ["Online Racer", "Complete an online race"],
        ["Paid and Displayed", "Find all Carparks"],
        ["Paradise Won", "Win your Burnout Driving License"],
        ["Parallel Park", "Power Park with a 100% rating"],
        ["Party Animal", "Complete 250 online Challenges (Timed & Bike challenges do not count)"],
        ["Party Crasher", "Complete 25 online Challenges (Timed & Bike challenges do not count)"],
        ["People Person", "Awarded when you complete all 10 Island Freeburn Challenges (2 - 8 players)"],
        ["Perfect Party Game", "Complete a Party game where every player scores in every round"],
        ["Perfect Rage", "Get 10 Takedowns in Road Rage without Wrecking"],
        ["Rampage!", "Get a Takedown Rampage"],
        ["Rising From the Ashes", "Repair your car at critical damage in a Road Rage event"],
        ["Shopaholic", "Find all Drive Thrus and Car Parks"],
        ["Smash n' Grab", "Collect 20 Island Smashes"],
        ["Speed King", "Set a Time Road Rule on every road"],
        ["Spinnin' Around", "Perform a 360 Flatspin in any car"],
        ["Supercharged", "Win 25 Burning Routes"],
        ["Surf Boards", "Collect 15 Island Billboards"],
        ["The Gang Is Back In Town", "Awarded for being on the winning Robbers team in a Cops and Robbers game"],
        ["The Right Side of the Law", "Awarded for being on the winning Cops team in a Cops and Robbers game"],
        ["The Show Must Go On", "Get a x10 multiplier in Showtime"],
        ["Totally Smashed", "Collect all Smashes"],
        ["Underachiever", "Get your C Class License"],
        ["Watt?", "Set a Time Road Rule on Watt St"],
    ];

    assert.strictEqual(officialAchievements.length, 56, "sanity check on this test's own reference list");

    const dataPairs = game.achievements
        .map(a => [a.name, a.description])
        .sort((a, b) => a[0].localeCompare(b[0]));

    assert.deepStrictEqual(dataPairs, [...officialAchievements].sort((a, b) => a[0].localeCompare(b[0])));

});
