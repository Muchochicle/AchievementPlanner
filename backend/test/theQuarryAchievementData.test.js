import { test } from "node:test";
import assert from "node:assert";

import { getPlannerData } from "../utils/plannerCatalog.js";

// backend/catalog/games/the-quarry.json - 40 real achievements sourced
// from a live ISteamUserStats/GetSchemaForGame/v2 response for appid
// 1577120 (fetched through this app's own services/steamApi.js).
// Hidden achievements ship no Steam description; their description here is
// researched from community 100% guides and cited in the frontend guide
// header. difficulty/estimatedTime/missable are curatorial.
const game = getPlannerData("the-quarry");

test("getPlannerData('the-quarry') returns real planner data with 40 curated achievements", () => {

    assert.ok(game, "expected real planner data for the-quarry");
    assert.ok(Array.isArray(game.achievements));
    assert.strictEqual(game.achievements.length, 40);

});

test("every The Quarry achievement has a unique id from 1 to 40 and a unique apiname", () => {

    const ids = game.achievements.map(a => a.id);
    const apinames = game.achievements.map(a => a.apiname);

    assert.deepStrictEqual([...ids].sort((a, b) => a - b), Array.from({ length: 40 }, (_, i) => i + 1));
    assert.strictEqual(new Set(ids).size, 40);
    assert.strictEqual(new Set(apinames).size, 40);

});

test("every The Quarry achievement has a valid difficulty (1-5), a positive estimatedTime, and non-empty name/description", () => {

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

test("every one of the 40 The Quarry achievement name+description pairs matches the catalog data", () => {

    const officialAchievements = [
        ["Above the Law", "Travis and Laura agreed to work together"],
        ["Bizzare Yet Bonafide", "As Laura in Chapter 7, work out Travis's computer password from the birthday card and calendar upstairs, then listen to the 'Bizarre Yet Bonafide' podcast in his office."],
        ["Blood Pact", "Every playable character ended the night infected."],
        ["Chapter 1", "Completed Chapter 1"],
        ["Chapter 10", "Completed Chapter 10"],
        ["Chapter 2", "Completed Chapter 2"],
        ["Chapter 3", "Completed Chapter 3"],
        ["Chapter 4", "Completed Chapter 4"],
        ["Chapter 5", "Completed Chapter 5"],
        ["Chapter 6", "Completed Chapter 6"],
        ["Chapter 7", "Completed Chapter 7"],
        ["Chapter 8", "Completed Chapter 8"],
        ["Chapter 9", "Completed Chapter 9"],
        ["Conspiracy Theorist", "Collected all evidence"],
        ["Creature Feature", "Started a movie mode playthrough"],
        ["Decked Out", "Found all Tarot cards"],
        ["Epilogue", "Witnessed the Epilogue"],
        ["Family Matters", "Killed every member of the Hackett family."],
        ["Forewarned is Forearmed", "Got a Tarot reading"],
        ["Hackett's Quarry Massacre", "Killed everyone"],
        ["Hard Pass", "Refused Eliza's help at every fortune-telling interlude (widely reported as bugged - it asks for more refusals than the game provides opportunities)."],
        ["It's All Coming Together", "Found a matching clue"],
        ["Just a Flesh Wound", "Saved a friend from a werewolf infection."],
        ["Last Man Standing", "Ryan survived the night as the only survivor."],
        ["Lovers' Quarrel", "Nick killed Abi."],
        ["Meddling Kids!", "Collected all clues"],
        ["Mutually Assured", "Laura and Travis killed each other."],
        ["Nick of Time", "Took the fastest route to Nick in the chapter where he goes missing."],
        ["Nobody's Fool", "Jacob told Emma the truth."],
        ["Peanut Butter Butterpops!", "Never missed in a combat encounter"],
        ["Phlebotomy", "Accepted the bite of a werewolf."],
        ["Prologue", "Completed the Prologue"],
        ["Reactionist", "Activated 15 Interrupts"],
        ["Rough Night", "Kept everyone alive"],
        ["Should've Gone to the Motel", "Reunited Laura and Max"],
        ["The Final Girl", "Kaitlyn survived the night as the only survivor."],
        ["The Truth is Out There", "Collected first piece of evidence"],
        ["The White Wolf", "Killed Silas, the white wolf."],
        ["What's This?", "Collected first clue"],
        ["You're Breathtaking!", "Passed 5 Don't Breathe events"],
    ];

    assert.strictEqual(officialAchievements.length, 40, "sanity check on this test's own reference list");

    const dataPairs = game.achievements
        .map(a => [a.name, a.description])
        .sort((a, b) => a[0].localeCompare(b[0]));

    assert.deepStrictEqual(dataPairs, [...officialAchievements].sort((a, b) => a[0].localeCompare(b[0])));

});
