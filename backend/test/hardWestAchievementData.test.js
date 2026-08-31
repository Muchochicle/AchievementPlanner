import { test } from "node:test";
import assert from "node:assert";

import { getPlannerData } from "../utils/plannerCatalog.js";

// backend/catalog/games/hard-west.json - 35 real achievements sourced
// from a live ISteamUserStats/GetSchemaForGame/v2 response for appid
// 307670 (fetched through this app's own services/steamApi.js). None are
// hidden; every description is Steam's own real text.
// Hidden achievements have no Steam description; where present, their
// description here is researched from community 100% guides and cited in
// the frontend guide header. difficulty/estimatedTime/missable are curatorial.
const game = getPlannerData("hard-west");

test("getPlannerData('hard-west') returns real planner data with 35 curated achievements", () => {

    assert.ok(game, "expected real planner data for hard-west");
    assert.ok(Array.isArray(game.achievements));
    assert.strictEqual(game.achievements.length, 35);

});

test("every Hard West achievement has a unique id from 1 to 35 and a unique apiname", () => {

    const ids = game.achievements.map(a => a.id);
    const apinames = game.achievements.map(a => a.apiname);

    assert.deepStrictEqual([...ids].sort((a, b) => a - b), Array.from({ length: 35 }, (_, i) => i + 1));
    assert.strictEqual(new Set(ids).size, 35);
    assert.strictEqual(new Set(apinames).size, 35);

});

test("every Hard West achievement has a valid difficulty (1-5), a positive estimatedTime, and non-empty name/description", () => {

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

test("every one of the 35 Hard West achievement name+description pairs matches the catalog data", () => {

    const officialAchievements = [
        ["A Gift Scorned", "Complete \"A Matter of Time\"."],
        ["Aces in the Hole", "Assemble the Five of a Kind hand."],
        ["Arizona Colts", "Complete any tactical encounter without firing weapons other than the Rusty Peashooter."],
        ["Army of Two", "Complete the train assault with just Libertee and Phineas in your posse."],
        ["Blind Justice", "Kill 10 enemies with blind shots (no line of sight)"],
        ["Brimstone Killer", "Kill a demon while your character is in demon form."],
        ["Daring but Careful", "Complete \"In Gold We Trust\" with no more than 50 peons dead."],
        ["Double Excellence", "Fully develop two technological domains during \"Method in Madness\"."],
        ["Dr Frankenstein", "Complete any of the 'Golem' hands on a character and complete at least one combat encounter with that character."],
        ["Drowned in Blood", "Complete \"Law & Order\"."],
        ["Everlasting Fame and Fortune", "Complete \"In Gold We Trust\"."],
        ["Fastest Gun in the West", "Kill an enemy in the very first action in a tactical encounter."],
        ["Fight No More Forever", "Complete any tactical mission without firing a shot."],
        ["High Stakes", "Win a liver in a game of dice."],
        ["His Leniency, The Inquisitor", "Complete \"Law & Order\" having committed at most 2 massacres."],
        ["Human Resources", "Collect at least 75 Ether from enemies fallen in one combat encounter."],
        ["On Earth, as It Is in Hell", "Establish Warren's new world order."],
        ["Once Upon a Time in the Weird West", "Complete all Scenarios."],
        ["Raw Deal", "Complete \"Hard Times\"."],
        ["Requiem for a Gunfighter", "Restore order in the Weird West."],
        ["Sanity Engineered", "Complete \"Method in Madness\"."],
        ["Scars of Freedom", "Complete 'Scars of Freedom'."],
        ["Sudden Death", "Use Equalization in the first combat turn, then complete the mission without raising your characters' Hit Points with items."],
        ["The Aspirton Incident", "Complete the Aspirton Bank Robbery in \"As Good as Dead\" before demons arrive."],
        ["The Meaning of Life", "Complete \"Graveyard Shift\"."],
        ["The Searcher", "Unlock all Trinkets in the game."],
        ["The Shootist", "Complete any tactical encounter firing sure shots (100% Chance to Hit) exclusively."],
        ["The Wild Bunch", "Use at least 30 different characters during tactical encounters throughout the game."],
        ["Through Thick and Thick", "Complete \"Graveyard Shift\" without anyone being hungry at any time."],
        ["Treasures of the Sierra Madre", "Use 25 different usable items at least once."],
        ["Trickshooter", "Kill an enemy with a bullet ricocheting off at least 3 different objects."],
        ["Vengeance Served Cold", "Complete \"As Good as Dead\"."],
        ["Welcome to Even Harder Times", "Complete every Scenario on Hard, every Scenario with Injuries and every Scenario with Ironman enabled."],
        ["Welcome to Hard Times", "Complete a single Scenario on Hard difficulty, with both Ironman and Injuries enabled."],
        ["What Goes Around, Comes Around", "Kill Joaquim Perez with the Cañón Calavera."],
    ];

    assert.strictEqual(officialAchievements.length, 35, "sanity check on this test's own reference list");

    const dataPairs = game.achievements
        .map(a => [a.name, a.description])
        .sort((a, b) => a[0].localeCompare(b[0]));

    assert.deepStrictEqual(dataPairs, [...officialAchievements].sort((a, b) => a[0].localeCompare(b[0])));

});
