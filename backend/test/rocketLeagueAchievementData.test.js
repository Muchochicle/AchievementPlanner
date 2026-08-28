import { test } from "node:test";
import assert from "node:assert";

import { getPlannerData } from "../utils/plannerCatalog.js";

// backend/catalog/games/rocket-league.json - 88 real achievements sourced
// from a live ISteamUserStats/GetSchemaForGame/v2 response for appid
// 252950 (fetched through this app's own services/steamApi.js).
// This game has no hidden achievements: all 88 ship a real, official
// Steam description, quoted verbatim below.
// difficulty/estimatedTime/missable remain curatorial judgments, the same
// convention as every other planner difficulty/time field in this catalog.
const game = getPlannerData("rocket-league");

test("getPlannerData('rocket-league') returns real planner data with 88 curated achievements", () => {

    assert.ok(game, "expected real planner data for rocket-league");
    assert.ok(Array.isArray(game.achievements));
    assert.strictEqual(game.achievements.length, 88);

});

test("every Rocket League achievement has a unique id from 1 to 88 and a unique apiname", () => {

    const ids = game.achievements.map(a => a.id);
    const apinames = game.achievements.map(a => a.apiname);

    assert.deepStrictEqual([...ids].sort((a, b) => a - b), Array.from({ length: 88 }, (_, i) => i + 1));
    assert.strictEqual(new Set(ids).size, 88);
    assert.strictEqual(new Set(apinames).size, 88);

});

test("every Rocket League achievement has a valid difficulty (1-5), a positive estimatedTime, and non-empty name/description", () => {

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

test("every one of the 88 Rocket League achievement name+description pairs matches the live GetSchemaForGame response", () => {

    const officialAchievements = [
        ["All Fours", "Win a 4v4 game"],
        ["An Inch and 6.2 Miles", "Drive 10 km with the Vortex, Cristiano, or Spinner Wheels"],
        ["Barras Bravas", "Play an Online game with someone in your Party"],
        ["Best of the Bunch", "Earn the MVP award in any Online Tournament match"],
        ["Brave the Elements", "Complete a match on wasted land, under the sea, and in outer space"],
        ["Break Shot", "Score a goal by hitting your opponent into the ball"],
        ["Buckminster x10", "Damage a total of 320 panels in Dropshot"],
        ["Budding Artist", "Collect a Painted Item"],
        ["Buzzer Beater", "With 30 seconds left, win a game of Hoops in which you were tied or trailing"],
        ["Car Collector", "Collect 5 cars"],
        ["Certifiable", "Earn Veteran status for your Certified Item"],
        ["Champion", "Win the Season Championship"],
        ["Clean Sheet", "Win a game without giving up a single Goal"],
        ["Coming On Strong", "Score or Assist a combined 30 goals or assists in Casual or Competitive Online matches"],
        ["Damage Control", "Win a Dropshot match via shutout"],
        ["Don't Look Back", "Use the Thermal, Burnout, or Nitrous Rocket Boost for a total of 10 minutes"],
        ["Double Up", "Win a 2v2 game"],
        ["Drift King", "Perform a 180 powerslide with Dominus or Takumi"],
        ["Drill Sergeant", "Complete every Practice Drill (any difficulty)"],
        ["Drops in the Bucket", "Collect 50 Items"],
        ["Family, Not Friends", "Play a complete game with Dominus or Takumi"],
        ["Far, Far Away...", "Drive a total of 50 km"],
        ["Fast Break", "Score at least 2 Dunks in the first minute of a Hoops game"],
        ["Feather in Your Recap", "Watch a save file in Replay mode"],
        ["First-Timer", "Score your first Goal"],
        ["Friendly", "Play an Exhibition match"],
        ["Full Course", "Score a total of 18 Goals in Dropshot"],
        ["Get Up, Mr. Bubbles!", "Score an Aerial goal while playing in AquaDome"],
        ["GG", "Win the MVP award in a game that goes to overtime"],
        ["Gladiator", "Play a game on Utopia Coliseum"],
        ["Good Times", "Head to Champions Field and complete an Online game"],
        ["Grease Monkey", "Customize the Decal, Topper, Rocket Boost and Wheel on a car"],
        ["Heartbreaker", "Win a game against All-Star Bots with a Decal equipped"],
        ["Helen's Pride", "Score 6 Goals in a single game"],
        ["Hot Shot, Part Two", "Win the MVP award using Backfire, Scarab, or Zippy"],
        ["Icing the Cake", "In Snow Day, score a goal from your own side of the ice"],
        ["Infinite Power!", "Activate every power-up in Rumble mode"],
        ["Join the Club!", "Create or Join a Rocket League Club"],
        ["Know the Drill", "Complete a Practice Drill"],
        ["Left Wing, Right Wing", "Win a Snow Day match with both the Blue and Orange teams"],
        ["Mad Scientist", "Play a complete match in 3 different Rocket Labs Arenas"],
        ["Metaverse", "Equip the Ion Rocket Boost or the Halo Topper and win a match on Starbase ARC"],
        ["Minute to Win it", "With only 60 seconds left, Win a game in which you were tied or trailing"],
        ["My World is Fire", "Equip the Flamethrower Boost and win a 4v4 Online match"],
        ["Natural Progression", "Win an Online Match with Backfire, Scarab, or Zippy"],
        ["New Challenger", "Join and complete an Online Tournament match"],
        ["New Profile Who This?", "Change your Player Banner, Avatar Border, and Player Title"],
        ["One Better", "Increase the level of a Certified Item"],
        ["People Person", "Play and complete 10 Online matches with one or more Clubmates"],
        ["Perfect Start", "Win your first game of the Season"],
        ["Pick-Me Up", "Collect 5 Items"],
        ["Pitch Veteran", "Play a total of 20 games across any game mode"],
        ["Psycho-Master Exploder", "Demolish 3 opposing bots in Wasteland"],
        ["Rank Up", "Complete all placement matches in any Competitive Playlist"],
        ["Registered Voter", "Head to 'Arena Preferences' and use all of your votes"],
        ["Ride or Die", "Equip Dominus or Takumi with any Decal, then win a game"],
        ["Rider's Block", "Make 20 Saves"],
        ["Rocket Repleter", "Make 535 Shots on Goal"],
        ["Rocketeer", "Complete the regular Season"],
        ["Ruthless", "Make 50 total Shots on Goal using Merc, Grog, or Ripper"],
        ["SARPBC Forever", "Play one game each with Octane and Backfire"],
        ["Savage", "With Ripper, Score 10 Goals against Pro-level Bots or higher"],
        ["Sea Turtle", "Head to AquaDome and score a goal while flipped on your back"],
        ["Singles Club", "Win a 1v1 game"],
        ["Sky High", "Score an Aerial Goal"],
        ["Spectacular", "With Merc or Grog, Score 10 Goals against Pro-Level Bots or higher"],
        ["Speed Demon", "Completely fill and then empty your Rocket Boost 10 times in a single match"],
        ["Squad Goals", "Score a Goal while in a Club Match (Online Matchmaking only)"],
        ["Still A Show-Off", "Score a goal while reversing"],
        ["Stocked", "Collect 150 Items"],
        ["Stopped Cold", "In Rumble, freeze an opponent's shot before it can score"],
        ["Storm Trooper", "Equip a Deluxe Item and complete a game in an Arena with turbulent weather"],
        ["Super Victorious", "Win a total of 30 games across any game mode"],
        ["Survival of the Fittest", "Equip a Topper and win an Unfair Bot Match"],
        ["Team Player", "Play against every team in a Season"],
        ["The Streak", "Win 10 games in a row across any mode"],
        ["Throwback", "Use the Standard or Accelerato Boost with Octane or Backfire while playing in Urban Central"],
        ["Tinkerer", "Customize one slot on a car"],
        ["Together is Better", "Play and complete an Online match with one or more Clubmates"],
        ["Trade Secret", "Trade In five items of the same quality to receive an item of the next-highest quality"],
        ["Traveler", "Play a game in six different Arenas"],
        ["Trifecta", "Score a Goal, Save a shot, and Assist a teammate in a single game"],
        ["Triple Threat", "Win a 3v3 game"],
        ["Turbocharger", "Use your Rocket Boost for a total of 5 minutes"],
        ["Virtuoso", "Unlock All Original Achievements"],
        ["Wall-Crawler", "Drive on the dome walls for a total of 5 minutes"],
        ["Winner", "Win a total of 5 games across any mode"],
        ["Winning is Winning", "Win a Season Championship using Dominus in every game"],
    ];

    assert.strictEqual(officialAchievements.length, 88, "sanity check on this test's own reference list");

    const dataPairs = game.achievements
        .map(a => [a.name, a.description])
        .sort((a, b) => a[0].localeCompare(b[0]));

    const expectedPairs = [...officialAchievements].sort((a, b) => a[0].localeCompare(b[0]));

    assert.deepStrictEqual(dataPairs, expectedPairs);

});
