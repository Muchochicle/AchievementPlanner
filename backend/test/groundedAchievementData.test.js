import { test } from "node:test";
import assert from "node:assert";

import { getPlannerData } from "../utils/plannerCatalog.js";

// backend/catalog/games/grounded.json - 45 real achievements sourced
// from a live ISteamUserStats/GetSchemaForGame/v2 response for appid
// 962130 (fetched through this app's own services/steamApi.js).
// 30 of 45 ship a real, official Steam description, quoted
// verbatim below. The 15 hidden achievements ship no
// Steam description; their conditions here are curatorial, cross-checked
// against each game's wiki plus community 100% guides, and kept
// spoiler-light. difficulty/estimatedTime/missable remain curatorial.
const game = getPlannerData("grounded");

test("getPlannerData('grounded') returns real planner data with 45 curated achievements", () => {

    assert.ok(game, "expected real planner data for grounded");
    assert.ok(Array.isArray(game.achievements));
    assert.strictEqual(game.achievements.length, 45);

});

test("every Grounded achievement has a unique id from 1 to 45 and a unique apiname", () => {

    const ids = game.achievements.map(a => a.id);
    const apinames = game.achievements.map(a => a.apiname);

    assert.deepStrictEqual([...ids].sort((a, b) => a - b), Array.from({ length: 45 }, (_, i) => i + 1));
    assert.strictEqual(new Set(ids).size, 45);
    assert.strictEqual(new Set(apinames).size, 45);

});

test("every Grounded achievement has a valid difficulty (1-5), a positive estimatedTime, and non-empty name/description", () => {

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
        assert.ok(achievement.description?.trim().length > 0, `${achievement.name} is missing a description`);
        assert.ok(achievement.apiname?.length > 0, `${achievement.name} is missing an apiname`);

    }

});

test("every one of the 30 officially-described Grounded achievement name+description pairs matches the live GetSchemaForGame response", () => {

    const hiddenApinames = new Set([
        "NEW_ACHIEVEMENT_1_0",
        "NEW_ACHIEVEMENT_1_1",
        "NEW_ACHIEVEMENT_1_2",
        "NEW_ACHIEVEMENT_1_19",
        "NEW_ACHIEVEMENT_1_20",
        "NEW_ACHIEVEMENT_1_21",
        "NEW_ACHIEVEMENT_1_28",
        "NEW_ACHIEVEMENT_1_29",
        "NEW_ACHIEVEMENT_1_30",
        "NEW_ACHIEVEMENT_1_31",
        "NEW_ACHIEVEMENT_2_1",
        "NEW_ACHIEVEMENT_2_5",
        "NEW_ACHIEVEMENT_2_8",
        "NEW_ACHIEVEMENT_2_11",
        "NEW_ACHIEVEMENT_2_12",
    ]);

    assert.strictEqual(hiddenApinames.size, 15, "sanity check - Grounded has 15 hidden achievements");

    const officialAchievements = [
        ["Aim Small", "Kill a flying bug with an arrow from over 30 cm away"],
        ["Beefing Up", "Craft your first Tier 3 item"],
        ["Block Buster", "Perform 10 perfect blocks in a row"],
        ["Chillax", "Unwind at a base while experiencing max coziness"],
        ["Exoskeleton", "Equip a matching set of Tier 2 armor"],
        ["Face Your Fears", "Kill your first Wolf Spider"],
        ["Fine Dining", "Cook a bug on the Roasting Spit"],
        ["Flavorful", "Obtain 10 new SCA.B color schemes"],
        ["Fortified", "Construct your first Mushroom Brick building"],
        ["Friends in Low Places", "Tame a bug as a pet"],
        ["From Downtown", "Score a basket with the Basketball Hoop from over 40 cm away"],
        ["Get Yoked", "Infuse yourself with 20 regular Milk Molars"],
        ["Glob Job", "Upgrade a tier 3 item to the max level at the Smithing Station"],
        ["Go Big", "Grow big again!"],
        ["Gotta Peep Them All", "Unlock every Creature Card"],
        ["Growing Pains", "Obtain your first Mutation"],
        ["Lounging Around", "Lounge in a Chair"],
        ["Mini Mix-a-lot", "Defend all of the MIX.Rs and Super MIX.Rs"],
        ["No More Homework!", "Complete BURG.L's list of Quests"],
        ["Protein Shake", "Consume 5 Beefy memorized recipe Smoothies"],
        ["Resourceful", "Analyze 15 resources"],
        ["Royal Arrangements", "Deal with all of the Ant Queens"],
        ["Science Rules", "Purchase your first upgrade from an ASL Station"],
        ["Shrinky and the Brain", "Achieve level 10 Brainpower"],
        ["Snoopy", "Discover 20 Sites on the Map"],
        ["Splinter Master", "Craft tier 3 arrows"],
        ["Super Dupe", "Duplicate an item at the Super Duper"],
        ["Super Win", "Grow big again and score 100% on the end game Report Card"],
        ["Underexposed", "Snap a picture using Photo Mode"],
        ["Web Master", "Zip across a teen made Zipline longer than 100 cm"],
    ];

    assert.strictEqual(officialAchievements.length, 30, "sanity check on this test's own reference list");

    const dataPairs = game.achievements
        .filter(a => !hiddenApinames.has(a.apiname))
        .map(a => [a.name, a.description])
        .sort((a, b) => a[0].localeCompare(b[0]));

    const expectedPairs = [...officialAchievements].sort((a, b) => a[0].localeCompare(b[0]));

    assert.deepStrictEqual(dataPairs, expectedPairs);

});

test("the 15 hidden Grounded achievements each keep their real name and a non-empty curatorial description", () => {

    const names = [
        ["NEW_ACHIEVEMENT_1_0", "BURG.L Flipper"],
        ["NEW_ACHIEVEMENT_1_1", "Hedge Lab"],
        ["NEW_ACHIEVEMENT_1_2", "Pond Lab"],
        ["NEW_ACHIEVEMENT_1_19", "Mom Genes"],
        ["NEW_ACHIEVEMENT_1_20", "Sticky Hands"],
        ["NEW_ACHIEVEMENT_1_21", "Black Ant Hill Lab"],
        ["NEW_ACHIEVEMENT_1_28", "Raisin Man"],
        ["NEW_ACHIEVEMENT_1_29", "Tighty Whities"],
        ["NEW_ACHIEVEMENT_1_30", "Assassin Assassin"],
        ["NEW_ACHIEVEMENT_1_31", "The Best Part of Waking Up"],
        ["NEW_ACHIEVEMENT_2_1", "Ominent Schmominent"],
        ["NEW_ACHIEVEMENT_2_5", "A Muse Sting"],
        ["NEW_ACHIEVEMENT_2_8", "Creepy Crawler"],
        ["NEW_ACHIEVEMENT_2_11", "Did I Do That?"],
        ["NEW_ACHIEVEMENT_2_12", "Go Big Again"],
    ];

    assert.strictEqual(names.length, 15, "sanity check on this test's own reference list");

    for (const [apiname, name] of names) {

        const achievement = game.achievements.find(a => a.apiname === apiname);

        assert.ok(
            achievement && achievement.name === name && achievement.description.length > 0,
            `expected ${apiname} to be named "${name}" with a non-empty curatorial description`
        );

    }

});
