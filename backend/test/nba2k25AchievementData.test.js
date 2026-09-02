import { test } from "node:test";
import assert from "node:assert";

import { getPlannerData } from "../utils/plannerCatalog.js";

// backend/catalog/games/nba-2k25.json - 46 real achievements sourced
// from a live ISteamUserStats/GetSchemaForGame/v2 response for appid
// 2878980 (fetched through this app's own services/steamApi.js).
// None are hidden; every description is Steam's own real text.
// difficulty/estimatedTime/missable are curatorial.
const game = getPlannerData("nba-2k25");

test("getPlannerData('nba-2k25') returns real planner data with 46 curated achievements", () => {

    assert.ok(game, "expected real planner data for nba-2k25");
    assert.ok(Array.isArray(game.achievements));
    assert.strictEqual(game.achievements.length, 46);

});

test("every NBA 2K25 achievement has a unique id from 1 to 46 and a unique apiname", () => {

    const ids = game.achievements.map(a => a.id);
    const apinames = game.achievements.map(a => a.apiname);

    assert.deepStrictEqual([...ids].sort((a, b) => a - b), Array.from({ length: 46 }, (_, i) => i + 1));
    assert.strictEqual(new Set(ids).size, 46);
    assert.strictEqual(new Set(apinames).size, 46);

});

test("every NBA 2K25 achievement has a valid difficulty (1-5), a positive estimatedTime, and non-empty name/description", () => {

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

test("every one of the 46 NBA 2K25 achievement name+description pairs matches the catalog data", () => {

    const officialAchievements = [
        ["100K Club", "Have a MyTEAM Point balance of 100,000."],
        ["5 in a Row", "Earn a win streak in Triple Threat Park."],
        ["A Dynasty Begins", "Make the Dynasty List."],
        ["All-Timer", "Unlock all 30 All-Time teams."],
        ["Baaaaaaah!", "Reach the GOAT league in 3 different seasons."],
        ["Back-to-Back", "Win 2 straight NBA Championships with the same team."],
        ["Bet On Woman", "Reach tier 10 in all pillars in The W."],
        ["Big Timer", "Unlock all 15 All-Time teams."],
        ["Come With Me…", "Activate and enter a warp in any type of Breakout game."],
        ["Crown Me", "Win a game of King of the Court."],
        ["Dynasty Gold", "Earn two Gold Dynasty badges."],
        ["Full Potential", "Reach Hall of Fame on a GOAT Skill."],
        ["Goal Setter", "Complete a 1st or 2nd Half Game Goal with 3 stars."],
        ["Going Once...Going Twice...", "Win an Auction and collect your card."],
        ["Holo", "Use a Holo Player in Triple Threat Park."],
        ["It's a Season Thing", "Win a Seasonal Signature Challenge."],
        ["It's All About the W", "Win a WNBA game in The W."],
        ["Jersey Swap", "Complete a Jersey Swap challenge with an extra kicker."],
        ["Keep Your Distance", "Make 10 three-point shots in any one game."],
        ["Making Mends", "Retain the player that you made unhappy when you became a starter."],
        ["Old-School Pro", "Win a game with every ERAs team."],
        ["Origin Story", "Get 12 stars in the Heart of a Dynasty flashbacks."],
        ["Qualified", "Qualify for King of the Court."],
        ["She Got Game", "Reach Progression tier 10 in The W."],
        ["Showing Off", "Open any pack on the billboard in Triple Threat Park."],
        ["SOLD!", "Sell any player card in the Auction House."],
        ["Spreading The Love", "Finish a game in which all 5 starters score double-digit points."],
        ["Streaker", "Earn a Win Streak in Showdown."],
        ["Streetball Co-Op", "Finish the Streetball Co-op Challenge."],
        ["Team Chemistry", "Max out your Team Chemistry meter in either NBA, Online, or Streetball."],
        ["The Dunes", "Defeat all bosses in Streetball at The Dunes."],
        ["The G.O.A.T.", "Reach the Overall #1 spot on the GOAT List."],
        ["The Sideline", "Defeat all bosses in Streetball at The Sideline."],
        ["The Temple", "Defeat all bosses in Streetball at The Temple."],
        ["The Ultimate Dynasty", "Reach #1 on the Dynasty List."],
        ["Three-peat", "Win 3 straight NBA Championships with the same team."],
        ["Time Traveler", "Unlock all ERAs teams."],
        ["Timeless", "Win a game with every All-Time team."],
        ["Top of the World", "Make it to the highest level in Showdown."],
        ["Trash Talker", "Successfully complete a Trash Talk quest."],
        ["Tycoon", "Complete a Full, Triple Threat, and Clutch Time run in Breakout."],
        ["Ultimate POWAH!", "Apply a Diamond Shoe with a Gold Takeover to any player."],
        ["Watch Me Work", "Win a game in The W Online."],
        ["Well-Traveled", "Win a game with every regular NBA team."],
        ["Winning", "Win a game."],
        ["World Tour", "Complete 100 Exhibitions."],
    ];

    assert.strictEqual(officialAchievements.length, 46, "sanity check on this test's own reference list");

    const dataPairs = game.achievements
        .map(a => [a.name, a.description])
        .sort((a, b) => a[0].localeCompare(b[0]));

    assert.deepStrictEqual(dataPairs, [...officialAchievements].sort((a, b) => a[0].localeCompare(b[0])));

});
