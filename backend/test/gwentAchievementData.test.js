import { test } from "node:test";
import assert from "node:assert";

import { getPlannerData } from "../utils/plannerCatalog.js";

// backend/catalog/games/gwent.json - 46 real achievements sourced
// from a live ISteamUserStats/GetSchemaForGame/v2 response for appid
// 1284410 (fetched through this app's own services/steamApi.js). None are
// hidden; every description is Steam's own real text.
// difficulty/estimatedTime/missable remain curatorial judgments.
const game = getPlannerData("gwent");

test("getPlannerData('gwent') returns real planner data with 46 curated achievements", () => {

    assert.ok(game, "expected real planner data for gwent");
    assert.ok(Array.isArray(game.achievements));
    assert.strictEqual(game.achievements.length, 46);

});

test("every GWENT: The Witcher Card Game achievement has a unique id from 1 to 46 and a unique apiname", () => {

    const ids = game.achievements.map(a => a.id);
    const apinames = game.achievements.map(a => a.apiname);

    assert.deepStrictEqual([...ids].sort((a, b) => a - b), Array.from({ length: 46 }, (_, i) => i + 1));
    assert.strictEqual(new Set(ids).size, 46);
    assert.strictEqual(new Set(apinames).size, 46);

});

test("every GWENT: The Witcher Card Game achievement has a valid difficulty (1-5), a positive estimatedTime, and non-empty name/description", () => {

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

test("every one of the 46 GWENT: The Witcher Card Game achievement name+description pairs matches the catalog data", () => {

    const officialAchievements = [
        ["Agressor", "Deal a total of 30 damage to units in one multiplayer game."],
        ["Alchemist", "Transmute a card."],
        ["Art Of War", "Order at least 3 units in a single turn."],
        ["Artifanatic", "Have 4 artifacts in play at any time."],
        ["Baptized With Fire", "Play a card from 5 different factions during a match."],
        ["Basics Mastered", "Complete the basic tutorial."],
        ["Blacksmith", "Play a bronze and a gold card in a multiplayer game."],
        ["Blitz", "Play 5 cards in a single turn."],
        ["CatchEmAll", "Collect 50 unique cards from 1 faction."],
        ["Common Denominator", "Win a multiplayer game without Golden cards in your deck."],
        ["Destroyer", "Destroy 3 or more units with single card."],
        ["Fantastic Five", "Obtain at least one leader from each faction."],
        ["Gloves Off", "Finish 3 online matches."],
        ["Go All In", "Fully deplete your deck."],
        ["Greatest Admirer", "Send \"GG\" 50 times."],
        ["Had Enough Yet", "Win a game with 2 cards remaining in hand."],
        ["Hall Of Heroes", "Reach Prestige 1."],
        ["Head Start", "Start a round with 10 points on the board."],
        ["Head To Head", "Get a draw in a multiplayer game."],
        ["Heart Of Gold", "Win a battle without killing any of the opponent's units."],
        ["Hurricane Season", "Fill your opponent's side of the board with row effects."],
        ["Iron Fist", "Win a round with only Order units."],
        ["Kickin' Up Dust", "Play one ranked game."],
        ["Leviathan", "Boost unit to over a 30 points in a multiplayer game."],
        ["Master Tactician", "Have card advantage of 3 cards."],
        ["Milestone", "Reach level 15."],
        ["Mission Impossible", "Destroy a unit that is Immune."],
        ["Munchkin", "Reach level 40."],
        ["Napoleon Complex", "Destroy a Legendary enemy with a Common ally."],
        ["Next", "Have a winstreak of 3 in any multiplayer game mode."],
        ["No Man Left Behind", "Resurrect at least 5 cards in a match."],
        ["Nothing Wasted", "Mill 50 cards."],
        ["Overkill", "Win the final round of a multiplayer game by 50 or more points."],
        ["Quick, Before-", "Destroy a unit with Zeal before its triggered."],
        ["Quintuplets", "Control at least 5 cards with the same power."],
        ["Ready For Battle", "Equip a vanity leader skin, an avatar, a border and a title."],
        ["Romeo And Juliet", "Destroy a Doomed enemy with a Doomed ally."],
        ["Shiny!", "Own at least 150 premium cards."],
        ["Specialist", "Win a game using 15 special cards."],
        ["Tables Turned", "Win a round and game, after losing by 20 points."],
        ["Thanks, but No Thanks", "Win a Regular Battle without redrawing any cards."],
        ["The More The Merrier", "Play a maximum number of units into any single row."],
        ["Trouper", "Reach Rank 20."],
        ["Uman make smashsmash?!", "Smash 100 kegs."],
        ["We Are Legion", "Spawn five allies in a single turn."],
        ["Your wish is our command", "Use 10 order charges in a single turn."],
    ];

    assert.strictEqual(officialAchievements.length, 46, "sanity check on this test's own reference list");

    const dataPairs = game.achievements
        .map(a => [a.name, a.description])
        .sort((a, b) => a[0].localeCompare(b[0]));

    assert.deepStrictEqual(dataPairs, [...officialAchievements].sort((a, b) => a[0].localeCompare(b[0])));

});
