import { test } from "node:test";
import assert from "node:assert";

import { getPlannerData } from "../utils/plannerCatalog.js";

// backend/catalog/games/assassins-creed-3.json - 44 real achievements sourced
// from a live ISteamUserStats/GetSchemaForGame/v2 response for appid
// 208480 (fetched through this app's own services/steamApi.js). None are
// hidden; every description is Steam's own real text.
// difficulty/estimatedTime/missable remain curatorial judgments.
const game = getPlannerData("assassins-creed-3");

test("getPlannerData('assassins-creed-3') returns real planner data with 44 curated achievements", () => {

    assert.ok(game, "expected real planner data for assassins-creed-3");
    assert.ok(Array.isArray(game.achievements));
    assert.strictEqual(game.achievements.length, 44);

});

test("every Assassin's Creed III achievement has a unique id from 1 to 44 and a unique apiname", () => {

    const ids = game.achievements.map(a => a.id);
    const apinames = game.achievements.map(a => a.apiname);

    assert.deepStrictEqual([...ids].sort((a, b) => a - b), Array.from({ length: 44 }, (_, i) => i + 1));
    assert.strictEqual(new Set(ids).size, 44);
    assert.strictEqual(new Set(apinames).size, 44);

});

test("every Assassin's Creed III achievement has a valid difficulty (1-5), a positive estimatedTime, and non-empty name/description", () => {

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

test("every one of the 44 Assassin's Creed III achievement name+description pairs matches the catalog data", () => {

    const officialAchievements = [
        ["A Complete Set", "See all the optional characters settled at the Homestead."],
        ["All Washed Up", "Complete all Naval Missions aboard the Aquila."],
        ["An Extraordinary Man", "Complete the Encyclopedia of the Common Man."],
        ["Blowing in the Wind", "Retrieve every page for one of Ben Franklin's Almanacs."],
        ["Bring Down the House", "Explore Fort Wolcott."],
        ["By Invitation Only", "Be invited to join a Club."],
        ["Caged Wolf", "Complete Sequence 8."],
        ["Circus Act", "Kill 15 guards with a single cannon shot."],
        ["Completionist", "Complete ALL progress tracker grid entries."],
        ["Coureur des Bois", "Exchange undamaged pelts at all different general stores."],
        ["Criss Cross", "Complete Present - Skyscraper."],
        ["Daddy Dearest", "Complete Present - Stadium."],
        ["Difficult End", "Complete Sequence 11."],
        ["Entrepreneur, not Pirate!", "Complete all 12 Privateer Contracts."],
        ["Eye Witness", "Witness a predator killing an enemy."],
        ["Fin", "Complete each of the epilogue missions unlocked after the credits roll."],
        ["Grim Expectations", "Complete Sequence 10."],
        ["Heroes are Born", "Complete Sequence 4."],
        ["House Party", "Recruit any of the Artisans and see them settled on the Homestead."],
        ["How D'ya Like Them Apples", "Complete Sequence 3."],
        ["In Good Standing", "Complete all challenges for any of the Clubs."],
        ["Jager Bomb", "After becoming fully Notorious, kill 10 Jagers before losing your notoriety."],
        ["Kidd Gloves", "Uncover the mystery of Oak Island."],
        ["Magna cum Laude", "Have a Trainee reach the Assassin Rank."],
        ["Man of the People", "Liberate all districts in Boston OR New York."],
        ["Monopoly Man", "Send a convoy to Boston, New York and the Frontier."],
        ["Multitasking", "Complete 50% of the Progress Tracker entries."],
        ["Mystery Guest", "Complete Sequence 1 & 2."],
        ["No Good Deed Goes Unpunished", "Open the Temple Door and learn Desmond's fate."],
        ["Original Gamer", "Win a game of Fanorona, Morris and Bowls on the Homestead."],
        ["Patent Not Pending", "Craft one of Franklin's inventions to decorate your Manor."],
        ["Perfectionist", "Complete 100% of all main mission constraints."],
        ["Predator", "Hang 5 enemies by using rope darts."],
        ["Prince of Thieves", "Loot a convoy without killing any of its guards."],
        ["Rude Awakening", "Re-Enter the Animus."],
        ["Spit Roast", "Perform a double assassination using a musket."],
        ["Tea is for Englishmen", "Complete Sequence 6."],
        ["The Day the Templars Cried", "Complete Sequence 5."],
        ["The End is Nigh", "Complete Present - Abstergo."],
        ["The Sum of Truth", "Complete Sequence 12."],
        ["The Whites of Their Eyes", "Complete Sequence 7."],
        ["Tumblehome", "Upgrade the Aquila."],
        ["Two if by Sea", "Complete Sequence 9."],
        ["Whit's fur ye'll no go by ye!", "Block a firing line 5 times by using a human shield."],
    ];

    assert.strictEqual(officialAchievements.length, 44, "sanity check on this test's own reference list");

    const dataPairs = game.achievements
        .map(a => [a.name, a.description])
        .sort((a, b) => a[0].localeCompare(b[0]));

    assert.deepStrictEqual(dataPairs, [...officialAchievements].sort((a, b) => a[0].localeCompare(b[0])));

});
