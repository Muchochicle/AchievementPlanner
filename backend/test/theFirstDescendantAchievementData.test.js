import { test } from "node:test";
import assert from "node:assert";

import { getPlannerData } from "../utils/plannerCatalog.js";

// backend/catalog/games/the-first-descendant.json - 24 real achievements sourced
// from a live ISteamUserStats/GetSchemaForGame/v2 response for appid
// 2074920 (fetched through this app's own services/steamApi.js).
// This game has no hidden achievements: all 24 ship a real, official
// Steam description, quoted verbatim below.
// difficulty/estimatedTime/missable remain curatorial judgments.
const game = getPlannerData("the-first-descendant");

test("getPlannerData('the-first-descendant') returns real planner data with 24 curated achievements", () => {

    assert.ok(game, "expected real planner data for the-first-descendant");
    assert.ok(Array.isArray(game.achievements));
    assert.strictEqual(game.achievements.length, 24);

});

test("every The First Descendant achievement has a unique id from 1 to 24 and a unique apiname", () => {

    const ids = game.achievements.map(a => a.id);
    const apinames = game.achievements.map(a => a.apiname);

    assert.deepStrictEqual([...ids].sort((a, b) => a - b), Array.from({ length: 24 }, (_, i) => i + 1));
    assert.strictEqual(new Set(ids).size, 24);
    assert.strictEqual(new Set(apinames).size, 24);

});

test("every The First Descendant achievement has a valid difficulty (1-5), a positive estimatedTime, and non-empty name/description", () => {

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

test("every one of the 24 The First Descendant achievement name+description pairs matches the live GetSchemaForGame response", () => {

    const officialAchievements = [
        ["And Combining, to Boot", "Combine modules 7 times"],
        ["Descendants, Assemble", "Own 5 Descendants"],
        ["Execute Order 77", "Dismantle modules 77 times"],
        ["First Sweep Operation", "Complete all available missions and Descendant duties in Kingston"],
        ["Good Things Happen Twice", "Successfully remove Colossi parts 2 times (excluding Retrieve the Ironheart operation)"],
        ["Growing Possibility", "Enhance a weapon's Unique Ability for the first time"],
        ["Hope Within the Dust", "Complete all available missions and Descendant duties in The Sterile Land"],
        ["I Can See the Future of the Colossi", "Complete 10 Void Intercept Battles"],
        ["Is This How You Insert it?", "Equip a module for the first time"],
        ["Knock, Knock! Who is it? ", "Complete all available missions and Descendant duties in Vespers"],
        ["Modules Maketh Descendant", "Expand a Descendant's Module Capacity"],
        ["No Hope for the Vulgus", "Obtain an Ultimate tier weapon"],
        ["Out of Weapons", "Dismantle weapons 50 times"],
        ["Place for Something Special", "Expand the module capacity of a weapon that uses Special Rounds"],
        ["Power! O, Infinite Power!", "Reach Mastery Rank Level 10"],
        ["Pre-emptive Strike for the Future", "Complete a Void Intercept Battle for the first time"],
        ["Ready to Move On?", "Complete Retrieve the Ironheart operation and return to Albion"],
        ["Ready, Extract, Complete", "Level up a weapon through Weapon Transmission"],
        ["Slot Maketh Module", "Assign module socket types 10 times"],
        ["Special Operation Task Squad", "Clear up to Wave 7 in the Kingston Albion Resource Defense mission."],
        ["The Sensible Life of Research", "Complete research for the first time"],
        ["This Is Great, Sevenfold", "Enhance any module to +7"],
        ["This Reaction's a First", "Enhance a Reactor for the first time"],
        ["What Was Always Expected", "Reach Level 40 with any Descendant"],
    ];

    assert.strictEqual(officialAchievements.length, 24, "sanity check on this test's own reference list");

    const dataPairs = game.achievements
        .map(a => [a.name, a.description])
        .sort((a, b) => a[0].localeCompare(b[0]));

    assert.deepStrictEqual(dataPairs, [...officialAchievements].sort((a, b) => a[0].localeCompare(b[0])));

});
