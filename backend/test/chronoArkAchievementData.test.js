import { test } from "node:test";
import assert from "node:assert";

import { getPlannerData } from "../utils/plannerCatalog.js";

// backend/catalog/games/chrono-ark.json - 40 real achievements sourced
// from a live ISteamUserStats/GetSchemaForGame/v2 response for appid
// 1188930 (fetched through this app's own services/steamApi.js).
// Hidden achievements have no Steam description; where present, their
// description here is researched from community 100% guides and cited in
// the frontend guide header. difficulty/estimatedTime/missable are curatorial.
const game = getPlannerData("chrono-ark");

test("getPlannerData('chrono-ark') returns real planner data with 40 curated achievements", () => {

    assert.ok(game, "expected real planner data for chrono-ark");
    assert.ok(Array.isArray(game.achievements));
    assert.strictEqual(game.achievements.length, 40);

});

test("every Chrono Ark achievement has a unique id from 1 to 40 and a unique apiname", () => {

    const ids = game.achievements.map(a => a.id);
    const apinames = game.achievements.map(a => a.apiname);

    assert.deepStrictEqual([...ids].sort((a, b) => a - b), Array.from({ length: 40 }, (_, i) => i + 1));
    assert.strictEqual(new Set(ids).size, 40);
    assert.strictEqual(new Set(apinames).size, 40);

});

test("every Chrono Ark achievement has a valid difficulty (1-5), a positive estimatedTime, and non-empty name/description", () => {

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

test("every one of the 40 Chrono Ark achievement name+description pairs matches the catalog data", () => {

    const officialAchievements = [
        ["*Burps*", "Clear the game with Phoenix."],
        ["A New Challenge", "Challenge Blood Mist 1"],
        ["All Random", "Clear the game with the 'All Random' modifier (Steam ships this achievement with no description)."],
        ["Almighty Pressel...", "Clear the game with Pressel."],
        ["Another Step", "Challenge Blood Mist 2"],
        ["Best Friend", "Become friends with an Investigator."],
        ["Blood Mist Master", "Clear Blood Mist 4"],
        ["Burnnn!", "Clear the game with Miss Chain."],
        ["Clear Expert Difficulty", "Clear the game on Expert Difficulty."],
        ["Cutie of the Investigators", "Become friends with 5 Investigators."],
        ["End of Project", "Unlock the true ending - have at least one Investigator at gold-level friendship before the final battle, then choose 'I won't accept it'."],
        ["Everyone’s Friend", "Become friends with every Investigator."],
        ["Everything is Once", "Clear the game with the 'Everything is Once' modifier (Steam ships this achievement with no description)."],
        ["Fake Madness", "Clear the game with Hein."],
        ["Farewell", "View the post-game story ('Story of the Real World' in the Ark Archive)."],
        ["Happiness within the Birdcage", "Reach the first ending - the final battle without meeting the true-ending requirements (no gold-level friendship, or choosing 'I'll accept it')."],
        ["Illusion Sword!", "Clear the game with Azar."],
        ["Into the Abyss", "Challenge Blood Mist 3"],
        ["Irreplaceable Bonds", "See everyone’s true feelings."],
        ["Jump, but 4 times", "Press jump four times in a single stage (using three Vitality/Swiftness Scrolls to enable extra jumps)."],
        ["Jump!", "The most important game element"],
        ["Leap Through Time", "Clear the game with Leryn."],
        ["Little Evil(?) Friend", "Clear the game with Charon."],
        ["Lone but not Lonely Wolf", "Clear the game with the 'Lone Wolf' modifier - a single character (Steam ships this achievement with no description)."],
        ["Lucy's Adventure", "Clear the game in Lucy's Adventure mode (Steam ships this achievement with no description)."],
        ["Master Alchemist", "Clear the game with Joey."],
        ["Master Psychologist", "Clear the game with Narhan."],
        ["Momori☆Victory!", "Clear the game with Momori."],
        ["Parry Master", "Clear the game with Lian."],
        ["Perfect Rotation", "Clear the game with Selena & Helia."],
        ["Power of Frost, Thunder, and Vodka", "Clear the game with Ilya"],
        ["Push Your Limits", "Challenge Blood Mist 4"],
        ["Quick Building", "Clear the game with the 'Quick Building' modifier (Steam ships this achievement with no description)."],
        ["Shadow", "Clear the game with Trisha"],
        ["Sharpshooter", "Clear the game with Silverstein."],
        ["So, is her name Eve?", "Clear the game with Sizz."],
        ["That Sounds Perfect", "Clear the game with Huz."],
        ["Wanna Be Friends?", "Obtain a Token of Friendship for the first time."],
        ["War of Arrows", "Clear the game with Johan"],
        ["You Shall Not Pass!", "Clear the game with Iron Heart"],
    ];

    assert.strictEqual(officialAchievements.length, 40, "sanity check on this test's own reference list");

    const dataPairs = game.achievements
        .map(a => [a.name, a.description])
        .sort((a, b) => a[0].localeCompare(b[0]));

    assert.deepStrictEqual(dataPairs, [...officialAchievements].sort((a, b) => a[0].localeCompare(b[0])));

});
