import { test } from "node:test";
import assert from "node:assert";

import { getPlannerData } from "../utils/plannerCatalog.js";

// backend/catalog/games/command-and-conquer-remastered.json - 33 real achievements sourced
// from a live ISteamUserStats/GetSchemaForGame/v2 response for appid
// 1213210 (fetched through this app's own services/steamApi.js). None are
// hidden; every description is Steam's own real text.
// difficulty/estimatedTime/missable remain curatorial judgments.
const game = getPlannerData("command-and-conquer-remastered");

test("getPlannerData('command-and-conquer-remastered') returns real planner data with 33 curated achievements", () => {

    assert.ok(game, "expected real planner data for command-and-conquer-remastered");
    assert.ok(Array.isArray(game.achievements));
    assert.strictEqual(game.achievements.length, 33);

});

test("every Command & Conquer Remastered Collection achievement has a unique id from 1 to 33 and a unique apiname", () => {

    const ids = game.achievements.map(a => a.id);
    const apinames = game.achievements.map(a => a.apiname);

    assert.deepStrictEqual([...ids].sort((a, b) => a - b), Array.from({ length: 33 }, (_, i) => i + 1));
    assert.strictEqual(new Set(ids).size, 33);
    assert.strictEqual(new Set(apinames).size, 33);

});

test("every Command & Conquer Remastered Collection achievement has a valid difficulty (1-5), a positive estimatedTime, and non-empty name/description", () => {

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

test("every one of the 33 Command & Conquer Remastered Collection achievement name+description pairs matches the catalog data", () => {

    const officialAchievements = [
        ["A Bit of Everything", "Capture an opposing Construction Yard of a different faction in Tiberian Dawn or Red Alert."],
        ["Act on Instinct", "Create a playlist in the Jukebox in Tiberian Dawn"],
        ["All of Everything", "Capture 20 structures across all sessions in Tiberian Dawn and Red Alert."],
        ["Ants?", "Complete all the \"It came from Red Alert\" missions"],
        ["Befriend the Robot Overlords", "Play 10 skirmish matches between Tiberian Dawn and Red Alert"],
        ["Capture X16-Y42", "Complete GDI Mission 1"],
        ["Cloak and Daggers", "Complete all Covert Operations missions in Tiberian Dawn"],
        ["Console Madness", "Complete all Spec Ops bonus missions in Tiberian Dawn"],
        ["Crush the Resistance", "Complete the Soviet Campaign"],
        ["Death From Above", "Use the Ion Cannon to finish off the Temple of Nod in the GDI campaign"],
        ["DEFCON None.", "Complete all the Red Alert campaigns missions on hardest difficulty"],
        ["Destroy the Robot Overlords", "Win 5 skirmish matches between Tiberian Dawn and Red Alert"],
        ["Electrotherapy", "Complete the Counterstrike Missions"],
        ["Hell March", "Create a playlist in the Jukebox in Red Alert"],
        ["High Anxiety", "Collectively build 500 aircraft across all sessions in Tiberian Dawn and Red Alert."],
        ["I did Nod See that Coming!", "Finish the final mission of the Nod campaign"],
        ["I've got a present for ya!", "Collectively destroy 100 buildings with C4 across all sessions using the Commando in Tiberian Dawn, or Tanya in Red Alert."],
        ["Life... Finds a Way", "Complete the Fun Park missions in Tiberian Dawn"],
        ["Making Friends", "Play 10 multiplayer matches (any settings, including comp stomp)"],
        ["Mission Casualties", "Destroy 100 units in a single mission"],
        ["Nikoomba's Demise", "Complete Nod Mission 1"],
        ["No Remorse", "Complete the Allied Campaign"],
        ["No Survivors", "Destroy the village and populace in Soviet Mission 1"],
        ["Red Alert Historian", "Unlock all Bonus Gallery content in Red Alert"],
        ["Ship Happens", "Collectively build 50 Navy ships across all sessions in Red Alert"],
        ["Short Fuse", "Collectively fire 100 super weapons across all sessions in Tiberian Dawn and Red Alert"],
        ["Tanks A Lot!", "Collectively build 500 tanks across all sessions between Tiberian Dawn and Red Alert."],
        ["The Best Around", "Complete all Tiberian Dawn missions on the hardest difficulty"],
        ["The Eagle has Landed", "Finish the final mission of the GDI campaign"],
        ["Tiberian Historian", "Unlock all Bonus Gallery content in Tiberian Dawn"],
        ["Time is only a concept", "Complete the Aftermath missions"],
        ["Time will Tell", "Rescue Einstein in Allies Mission 1"],
        ["To the Front Lines!", "Collectively build 1,000 infantry across all sessions between Tiberian Dawn and Red Alert"],
    ];

    assert.strictEqual(officialAchievements.length, 33, "sanity check on this test's own reference list");

    const dataPairs = game.achievements
        .map(a => [a.name, a.description])
        .sort((a, b) => a[0].localeCompare(b[0]));

    assert.deepStrictEqual(dataPairs, [...officialAchievements].sort((a, b) => a[0].localeCompare(b[0])));

});
