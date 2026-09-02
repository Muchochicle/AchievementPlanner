import { test } from "node:test";
import assert from "node:assert";

import { getPlannerData } from "../utils/plannerCatalog.js";

// backend/catalog/games/the-roottrees-are-dead.json - 22 real achievements sourced
// from a live ISteamUserStats/GetSchemaForGame/v2 response for appid
// 2754380 (fetched through this app's own services/steamApi.js).
// Hidden achievements ship no Steam description; their description here is
// researched from community 100% guides and cited in the frontend guide
// header. difficulty/estimatedTime/missable are curatorial.
const game = getPlannerData("the-roottrees-are-dead");

test("getPlannerData('the-roottrees-are-dead') returns real planner data with 22 curated achievements", () => {

    assert.ok(game, "expected real planner data for the-roottrees-are-dead");
    assert.ok(Array.isArray(game.achievements));
    assert.strictEqual(game.achievements.length, 22);

});

test("every The Roottrees are Dead achievement has a unique id from 1 to 22 and a unique apiname", () => {

    const ids = game.achievements.map(a => a.id);
    const apinames = game.achievements.map(a => a.apiname);

    assert.deepStrictEqual([...ids].sort((a, b) => a - b), Array.from({ length: 22 }, (_, i) => i + 1));
    assert.strictEqual(new Set(ids).size, 22);
    assert.strictEqual(new Set(apinames).size, 22);

});

test("every The Roottrees are Dead achievement has a valid difficulty (1-5), a positive estimatedTime, and non-empty name/description", () => {

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

test("every one of the 22 The Roottrees are Dead achievement name+description pairs matches the catalog data", () => {

    const officialAchievements = [
        ["Audiophile", "Listened to all musical evidence"],
        ["Branching Out", "Locked in everyone in the Next Generation photograph"],
        ["Call Screener", "After locking in 18 correct profiles in The Roottrees are Dead story, let the ringing phone go to voicemail instead of answering, then play the voicemail. (Missable.)"],
        ["Duckler County Denizen", "Use Spider Search for the phrase 'The Fluteknees are Bread'."],
        ["Establishing Roots", "Locked in the 5Pieces"],
        ["Extracurricular Activities", "Locked in Possible Infidelity 2"],
        ["Family Secrets", "Finished The Roottrees are Dead"],
        ["FamilyDoku!", "Completed every FamilyDoku! puzzle"],
        ["Genealogy Genie", "Filled in the entire family tree correctly"],
        ["It's All Connected!", "Use Spider Search on every conspiracy claim in the WRTD radio-station trail, including the Time Cube and brand-conspiracy leads."],
        ["Loose Ends: Part One", "Found all evidence in The Roottrees are Dead"],
        ["Loose Ends: Part Two", "Found all evidence in Roottreemania"],
        ["Old Flings", "Locked in Possible Infidelity 1"],
        ["Roottree Company Affairs", "Locked in Possible Infidelity 3"],
        ["Search Failure", "Try to search from your journal while the game's internet is off (highlight a term to search before SpiderSearch turns the connection back on)."],
        ["Take My Hand Beneath the Tree", "Locked in everyone in the Free Spirits photograph"],
        ["The Big Reveal", "Finished Roottreemania"],
        ["Thinking Outside the Box", "Use the in-game Spider Search to search for the word 'Achievement'."],
        ["Voracious Reader", "Discovered every Periodical"],
        ["What's the Deal With All These Roottrees?", "Use Spider Search on a Seinfeld-referencing phrase for the joke result."],
        ["Where There's Smoke...", "Found all the smoking guns"],
        ["You Deserve a Gold Star", "Locked in everyone on the Notable Roottrees list"],
    ];

    assert.strictEqual(officialAchievements.length, 22, "sanity check on this test's own reference list");

    const dataPairs = game.achievements
        .map(a => [a.name, a.description])
        .sort((a, b) => a[0].localeCompare(b[0]));

    assert.deepStrictEqual(dataPairs, [...officialAchievements].sort((a, b) => a[0].localeCompare(b[0])));

});
