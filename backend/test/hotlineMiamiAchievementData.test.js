import { test } from "node:test";
import assert from "node:assert";

import { getPlannerData } from "../utils/plannerCatalog.js";

// backend/catalog/games/hotline-miami.json - 35 real achievements sourced
// from a live ISteamUserStats/GetSchemaForGame/v2 response for appid
// 219150 (fetched through this app's own services/steamApi.js).
// 26 of 35 ship a real, official Steam description, quoted
// verbatim below. The 9 hidden achievements ship no Steam
// description; their conditions here are curatorial, cross-checked against
// each game's wiki plus community 100% guides, and kept spoiler-light.
// difficulty/estimatedTime/missable remain curatorial judgments.
const game = getPlannerData("hotline-miami");

test("getPlannerData('hotline-miami') returns real planner data with 35 curated achievements", () => {

    assert.ok(game, "expected real planner data for hotline-miami");
    assert.ok(Array.isArray(game.achievements));
    assert.strictEqual(game.achievements.length, 35);

});

test("every Hotline Miami achievement has a unique id from 1 to 35 and a unique apiname", () => {

    const ids = game.achievements.map(a => a.id);
    const apinames = game.achievements.map(a => a.apiname);

    assert.deepStrictEqual([...ids].sort((a, b) => a - b), Array.from({ length: 35 }, (_, i) => i + 1));
    assert.strictEqual(new Set(ids).size, 35);
    assert.strictEqual(new Set(apinames).size, 35);

});

test("every Hotline Miami achievement has a valid difficulty (1-5), a positive estimatedTime, and non-empty name/description", () => {

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

test("every one of the 26 officially-described Hotline Miami achievement name+description pairs matches the live GetSchemaForGame response", () => {

    const hiddenApinames = new Set([
        "ACH_THE_END",
        "ACH_THATS_IT",
        "ACH_THAT_IS_IT",
        "ACH_SMELL_SOMETHING_BURNING",
        "ACH_BATMAN",
        "ACH_SEWER_ALLIGATOR",
        "ACH_CAT_FIGHT",
        "ACH_EYE_FOR_DETAILS",
        "ACH_THE_BOSS",
    ]);

    assert.strictEqual(hiddenApinames.size, 9, "sanity check - Hotline Miami has 9 hidden achievements");

    const officialAchievements = [
        ["1989", "Kill 1989 enemies"],
        ["60 To Car", "Go to the car 60 times"],
        ["Aced It", "Get an A+ on any chapter"],
        ["Achievement Whore", "Unlock all achievements"],
        ["Always On Top", "Perform every ground kill in the game"],
        ["Combo Beginner", "Perform a 4x combo"],
        ["Combo Intermediate", "Perform a 6x combo"],
        ["Combo King", "Perform a 12x combo"],
        ["Combo Master", "Perform a 10x combo"],
        ["Combo Pro", "Perform a 8x combo"],
        ["Dog Lover", "Kill 99 dogs"],
        ["Domino Effect", "Throw a weapon at an enemy so that his weapon hits another"],
        ["Get A Life", "Get A+ on all the chapters"],
        ["Guns For Show", "use all guns at least once"],
        ["I Got New Friends", "Unlock all weapons"],
        ["Karma", "Die 1000 times"],
        ["Knife For Pros", "use all melee weapon at least once"],
        ["Let In Some Air", "Destroy 200 glass panels"],
        ["Nigel Lowrie", "Use a human shield"],
        ["Pitcher", "use all throwing weapon at least once"],
        ["Plain Luck", "Kill three or more enemies with the same brick in one throw"],
        ["Playing Pool", "Kill an enemy with a brick bounced against a wall"],
        ["Sounds of Animals Fighting", "Wear all masks at least once"],
        ["These Are My Guns", "Complete chapter five barehanded"],
        ["Two Birds With One Stone", "Kill two enemies with the same brick in one throw"],
        ["Zoo Keeper", "Collect all the masks"],
    ];

    assert.strictEqual(officialAchievements.length, 26, "sanity check on this test's own reference list");

    const dataPairs = game.achievements
        .filter(a => !hiddenApinames.has(a.apiname))
        .map(a => [a.name, a.description])
        .sort((a, b) => a[0].localeCompare(b[0]));

    assert.deepStrictEqual(dataPairs, [...officialAchievements].sort((a, b) => a[0].localeCompare(b[0])));

});

test("the 9 hidden Hotline Miami achievements each keep their real name and a non-empty curatorial description", () => {

    const names = [
        ["ACH_THE_END", "The End?"],
        ["ACH_THATS_IT", "That's It?"],
        ["ACH_THAT_IS_IT", "This Is It"],
        ["ACH_SMELL_SOMETHING_BURNING", "Smell Something Burning"],
        ["ACH_BATMAN", "Batman"],
        ["ACH_SEWER_ALLIGATOR", "Sewer Alligator"],
        ["ACH_CAT_FIGHT", "Cat Fight"],
        ["ACH_EYE_FOR_DETAILS", "Eye For Details"],
        ["ACH_THE_BOSS", "The Boss"],
    ];

    assert.strictEqual(names.length, 9, "sanity check on this test's own reference list");

    for (const [apiname, name] of names) {

        const achievement = game.achievements.find(a => a.apiname === apiname);

        assert.ok(
            achievement && achievement.name === name && achievement.description.length > 0,
            `expected ${apiname} to be named "${name}" with a non-empty curatorial description`
        );

    }

});
