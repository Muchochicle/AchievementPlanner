import { test } from "node:test";
import assert from "node:assert";

import { getPlannerData } from "../utils/plannerCatalog.js";

// backend/catalog/games/dinkum.json - 25 real achievements sourced
// from a live ISteamUserStats/GetSchemaForGame/v2 response for appid
// 1062520 (fetched through this app's own services/steamApi.js).
// 24 of 25 ship a real, official Steam description, quoted
// verbatim below. The 1 hidden achievement ship no Steam description;
// its condition here is curatorial, cross-checked against the game's
// wiki plus community 100% guides, and kept spoiler-light.
// difficulty/estimatedTime/missable remain curatorial judgments.
const game = getPlannerData("dinkum");

test("getPlannerData('dinkum') returns real planner data with 25 curated achievements", () => {

    assert.ok(game, "expected real planner data for dinkum");
    assert.ok(Array.isArray(game.achievements));
    assert.strictEqual(game.achievements.length, 25);

});

test("every Dinkum achievement has a unique id from 1 to 25 and a unique apiname", () => {

    const ids = game.achievements.map(a => a.id);
    const apinames = game.achievements.map(a => a.apiname);

    assert.deepStrictEqual([...ids].sort((a, b) => a - b), Array.from({ length: 25 }, (_, i) => i + 1));
    assert.strictEqual(new Set(ids).size, 25);
    assert.strictEqual(new Set(apinames).size, 25);

});

test("every Dinkum achievement has a valid difficulty (1-5), a positive estimatedTime, and non-empty name/description", () => {

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

test("every one of the 24 officially-described Dinkum achievement name+description pairs matches the live GetSchemaForGame response", () => {

    const hiddenApinames = new Set([
        "Thank_You",
    ]);

    assert.strictEqual(hiddenApinames.size, 1, "sanity check - Dinkum has 1 hidden achievement");

    const officialAchievements = [
        ["Big Heart", "Have 5 hearts with every NPC! (Creator: Minoentje)"],
        ["Buffed Up", "Have more than 10 buffs active at once (excluding stamina and health buffs)"],
        ["Bush Ranger", "Meet Ted Selly"],
        ["Chucking a Sickie", "Go back to bed before 8AM (Creator: Phoros)"],
        ["Cooked, Mate", "Decend to The Hot Hot Hot"],
        ["Crafting Master", "Learn every recipe and try to learn more from a Blueprint "],
        ["Creative Thinker", "Shoot down 10 Flying Lanterns with a slingshot at Sky Fest (Creator: baiye)"],
        ["Deep Miner", "Descend to the Deep Mines."],
        ["Dodgy Bloke", "Meet Jimmy"],
        ["Filthy Dinkin' Rich", "Earn 1,000,000 Dinks"],
        ["Fully Licenced", "Hold all Licences"],
        ["Island Getaway", "Take a trip to the Island Reef"],
        ["Island Life Expert", "Welcome Spring in the 5th year. (Creator: Newbie.)"],
        ["Jolly Swag Pack", "Open a Swag Pack"],
        ["Must… Keep… Moving…", "Move 500m cumulatively when exhausted  (Creator: Anylu)"],
        ["New Home", "Complete your first day"],
        ["On Ya Noggin'", "Wear something that isn’t clothing on your head"],
        ["Oops, Nevermind!", "Use mine pass to enter deep mine and travel back up without leaving elevator (Creator: MercuryCocktail)"],
        ["Pedia Completer", "Complete your Pedia"],
        ["Risky Behaviour", "Stay in the mines after midnight (Creator: BerLInuXXJJ)"],
        ["Snag Sizzle", "Eat a Snag"],
        ["Succulent Meals", "Eat one of every recipe that can be cooked at a Cooking Table in one day"],
        ["Undergrove Explorer", "Descend to the Undergrove"],
        ["Whats wrong, skip?", "Hunt a Jackaroo while wearing the Jackaroo Hood (Creator: Daid)"],
    ];

    assert.strictEqual(officialAchievements.length, 24, "sanity check on this test's own reference list");

    const dataPairs = game.achievements
        .filter(a => !hiddenApinames.has(a.apiname))
        .map(a => [a.name, a.description])
        .sort((a, b) => a[0].localeCompare(b[0]));

    assert.deepStrictEqual(dataPairs, [...officialAchievements].sort((a, b) => a[0].localeCompare(b[0])));

});

test("the 1 hidden Dinkum achievement each keep their real name and a non-empty curatorial description", () => {

    const names = [
        ["Thank_You", "Thanks, mate."],
    ];

    assert.strictEqual(names.length, 1, "sanity check on this test's own reference list");

    for (const [apiname, name] of names) {

        const achievement = game.achievements.find(a => a.apiname === apiname);

        assert.ok(
            achievement && achievement.name === name && achievement.description.length > 0,
            `expected ${apiname} to be named "${name}" with a non-empty curatorial description`
        );

    }

});
