import { test } from "node:test";
import assert from "node:assert";

import { getPlannerData } from "../utils/plannerCatalog.js";

// backend/catalog/games/psychonauts.json - 37 real achievements sourced
// from a live ISteamUserStats/GetSchemaForGame/v2 response for appid
// 3830 (fetched through this app's own services/steamApi.js). 1 achievement(s) are hidden and ship with no official
// description; those keep a curatorial description instead, and every
// other one is Steam's own real text.
// difficulty/estimatedTime/missable remain curatorial judgments.
const game = getPlannerData("psychonauts");

test("getPlannerData('psychonauts') returns real planner data with 37 curated achievements", () => {

    assert.ok(game, "expected real planner data for psychonauts");
    assert.ok(Array.isArray(game.achievements));
    assert.strictEqual(game.achievements.length, 37);

});

test("every Psychonauts achievement has a unique id from 1 to 37 and a unique apiname", () => {

    const ids = game.achievements.map(a => a.id);
    const apinames = game.achievements.map(a => a.apiname);

    assert.deepStrictEqual([...ids].sort((a, b) => a - b), Array.from({ length: 37 }, (_, i) => i + 1));
    assert.strictEqual(new Set(ids).size, 37);
    assert.strictEqual(new Set(apinames).size, 37);

});

test("every Psychonauts achievement has a valid difficulty (1-5), a positive estimatedTime, and non-empty name/description", () => {

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

test("every one of the 37 Psychonauts achievement name+description pairs matches the catalog data", () => {

    const officialAchievements = [
        ["A Slice of History", "Discover the secret history of Whispering Rock."],
        ["A Victory for Good Taste", "Complete Sasha’s Shooting Gallery."],
        ["Advanced PSI Cadet", "Achieve Rank 60."],
        ["Camp Gossip", "Read many bulletin board messages."],
        ["Christmas Shopping", "Buy any item from the Camp Store while your system clock is set to December 25th (Christmas Day)."],
        ["Figgy Piggy", "Gather all Figments."],
        ["For Insurance Reasons", "Complete Lungfishopolis."],
        ["Happy Bags", "Sort all Emotional Baggage."],
        ["Height of Insanity", "Complete The Asylum."],
        ["Holiday Dinner", "Cook and consume two different kinds of roast in one sitting."],
        ["I Always Loved You More", "Complete Black Velvetopia."],
        ["I LOVE PUNCHING!", "Complete the Punchy Target mini-game."],
        ["I Think They Were Impressed", "Introduce all Camp Kids to Mr. Pokeylope."],
        ["I Thought That Was Unbeatable!", "Complete Meat Circus."],
        ["I'm Gonna Live Forever", "Find all Golden Helmets."],
        ["I'm Sure She's Over It", "Uncover Milla's Secret."],
        ["Junior PSI Cadet", "Achieve Rank 20."],
        ["Look at those Pansies!", "Find Edgar's Secret Garden."],
        ["Made Man", "Witness Maloof's transformation."],
        ["Math is Hard", "Achieve Rank 101."],
        ["Maybe It's the Hair", "Spy on Bobby's love life."],
        ["Mmm… Bacon!", "Use the bacon. A lot."],
        ["No More Secrets", "Crack all Vaults."],
        ["No Solid Food for Six Hours", "Re-brain the Children."],
        ["Regular PSI Cadet", "Achieve Rank 40."],
        ["Rolling Rock Star", "Complete Milla’s Dance Party."],
        ["Self Aware", "See yourself through the eyes of many others."],
        ["Stump Speech", "Give the Coach's speech on the stump."],
        ["Super PSI Cadet", "Achieve Rank 80."],
        ["Thanks for All the Snails", "Complete Waterloo World."],
        ["They Call Me the Hunter", "Redeem all 16 Scavenger Hunt Items."],
        ["They Should Totally Sell Those", "Earn all Merit Badges."],
        ["Time to Deliver the Milk", "Complete The Milkman Conspiracy."],
        ["Victory Tour", "Revisit all brains after completion."],
        ["Wolpaw Says Thanks", "Hear Vernon's Ghost Story."],
        ["You're All So Kind", "Complete Gloria’s Theater."],
        ["Your Last Chance to Chicken Out", "Complete Basic Braining."],
    ];

    assert.strictEqual(officialAchievements.length, 37, "sanity check on this test's own reference list");

    const dataPairs = game.achievements
        .map(a => [a.name, a.description])
        .sort((a, b) => a[0].localeCompare(b[0]));

    assert.deepStrictEqual(dataPairs, [...officialAchievements].sort((a, b) => a[0].localeCompare(b[0])));

});
