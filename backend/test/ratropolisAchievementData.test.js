import { test } from "node:test";
import assert from "node:assert";

import { getPlannerData } from "../utils/plannerCatalog.js";

// backend/catalog/games/ratropolis.json - 46 real achievements sourced
// from a live ISteamUserStats/GetSchemaForGame/v2 response for appid
// 1108370 (fetched through this app's own services/steamApi.js). None are
// hidden; every description is Steam's own real text.
// difficulty/estimatedTime/missable remain curatorial judgments.
const game = getPlannerData("ratropolis");

test("getPlannerData('ratropolis') returns real planner data with 46 curated achievements", () => {

    assert.ok(game, "expected real planner data for ratropolis");
    assert.ok(Array.isArray(game.achievements));
    assert.strictEqual(game.achievements.length, 46);

});

test("every Ratropolis achievement has a unique id from 1 to 46 and a unique apiname", () => {

    const ids = game.achievements.map(a => a.id);
    const apinames = game.achievements.map(a => a.apiname);

    assert.deepStrictEqual([...ids].sort((a, b) => a - b), Array.from({ length: 46 }, (_, i) => i + 1));
    assert.strictEqual(new Set(ids).size, 46);
    assert.strictEqual(new Set(apinames).size, 46);

});

test("every Ratropolis achievement has a valid difficulty (1-5), a positive estimatedTime, and non-empty name/description", () => {

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

test("every one of the 46 Ratropolis achievement name+description pairs matches the catalog data", () => {

    const officialAchievements = [
        ["Builder", "Survive the 10th Wave"],
        ["Calculator", "Achieve victory with maintaining your Gold under 1,000."],
        ["Fair And Square", "Achieve victory without using non-melee military units"],
        ["Follow Me", "See the [All Hail!] Event"],
        ["Game of Thrones", "See the [Coronation] Event"],
        ["General", "Play 1 game"],
        ["Give Me All ", "Purchase every card sold by Merchant"],
        ["Glory", "Obtain all other Achievements"],
        ["Great Leader", "Acquire more than 10 Advisers in one game"],
        ["Harbor City", "Achieve victory as the Navigator Leader"],
        ["Hard Worker", "Use your Leader Ability more than 30 times in one game"],
        ["Hell", "Survive 90th Wave"],
        ["I'm in Charge", "Win a game with only one Advisor"],
        ["Lazybones", "Achieve victory without using your Leader Ability"],
        ["Let's Keep It", "See the [Rules of Rats] Event"],
        ["Level Up", "Reach Leader Level 10 in a game"],
        ["Life of Bureaucrat", "See the [A New Role] Event"],
        ["Madness", "Win the game in under 22 minutes"],
        ["Mafia", "Kill one unit that carries 999 Bounty."],
        ["Metropolis", "Achieve victory as the Builder Leader"],
        ["Military City", "Achieve victory as the General Leader"],
        ["Millionaire", "Hold 99999 Gold"],
        ["Navigator", "Win a game"],
        ["Nightmare", "Survive 60th Wave"],
        ["Old Rat's Wisdom", "See the [Council of Oligarchs] Event"],
        ["Oops", "Beat the final boss before he attacks"],
        ["Plaguelands", "Complete Pollution Level 20"],
        ["Quack-Quack", "Use the Duck Card"],
        ["Rats Rats Rats", "Have more than 100 Ratizens"],
        ["Religious City", "Achieve victory as the Shaman Leader"],
        ["Science City", "Achieve victory as the Scientist Leader"],
        ["Scientist", "Survive the 20th Wave"],
        ["Scrooge", "Achieve victory without spending any Golds for Redraw."],
        ["Shaman", "Play 10 game"],
        ["Shiny Chest!", "Intentionally disregard 5 Treasure Chests in a game."],
        ["Slayers", "Acquire the advisers \"Ironclad\", \"Silent\", and \"Defect\" in one game"],
        ["Strongest Rat", "Use the Royal Guard Card"],
        ["The Rat God", "Win with every Leader in every Region"],
        ["Time to Pray", "See the [Be Faithful] Event"],
        ["Torment", "Survive 120th Wave"],
        ["Trading City", "Achieve victory as the Merchant Leader"],
        ["Under the Shade", "Achieve victory with only 4 or less Defensive Walls."],
        ["Wanderer", "Your first defeat"],
        ["Wasteland", "Complete Pollution Level 10"],
        ["Why did you do that?", "Win the game without upgrading any cards"],
        ["World's End", "Expand to the maximum extent possible"],
    ];

    assert.strictEqual(officialAchievements.length, 46, "sanity check on this test's own reference list");

    const dataPairs = game.achievements
        .map(a => [a.name, a.description])
        .sort((a, b) => a[0].localeCompare(b[0]));

    assert.deepStrictEqual(dataPairs, [...officialAchievements].sort((a, b) => a[0].localeCompare(b[0])));

});
