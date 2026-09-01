import { test } from "node:test";
import assert from "node:assert";

import { getPlannerData } from "../utils/plannerCatalog.js";

// backend/catalog/games/haiku-the-robot.json - 40 real achievements sourced
// from a live ISteamUserStats/GetSchemaForGame/v2 response for appid
// 1231880 (fetched through this app's own services/steamApi.js).
// Hidden achievements have no Steam description; where present, their
// description here is researched from community 100% guides and cited in
// the frontend guide header. difficulty/estimatedTime/missable are curatorial.
const game = getPlannerData("haiku-the-robot");

test("getPlannerData('haiku-the-robot') returns real planner data with 40 curated achievements", () => {

    assert.ok(game, "expected real planner data for haiku-the-robot");
    assert.ok(Array.isArray(game.achievements));
    assert.strictEqual(game.achievements.length, 40);

});

test("every Haiku, the Robot achievement has a unique id from 1 to 40 and a unique apiname", () => {

    const ids = game.achievements.map(a => a.id);
    const apinames = game.achievements.map(a => a.apiname);

    assert.deepStrictEqual([...ids].sort((a, b) => a - b), Array.from({ length: 40 }, (_, i) => i + 1));
    assert.strictEqual(new Set(ids).size, 40);
    assert.strictEqual(new Set(apinames).size, 40);

});

test("every Haiku, the Robot achievement has a valid difficulty (1-5), a positive estimatedTime, and non-empty name/description", () => {

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

test("every one of the 40 Haiku, the Robot achievement name+description pairs matches the catalog data", () => {

    const officialAchievements = [
        ["Another Adventure", "Bid farewell to Rusty"],
        ["Balanced", "Defeat all three Creators"],
        ["Balancing Act", "Verse sacrifice"],
        ["Beep - Bop", "Get hit by 100 water drops"],
        ["Bomb-tastic!", "Buy all of Echo's items"],
        ["Brave Little Toaster", "Help Splunk find purpose"],
        ["Capsule Fragments", "Acquire 3 health fragments"],
        ["Completionist", "100% the game"],
        ["Computer Chip", "Acquire your first chip"],
        ["Electron", "Free the third Creator"],
        ["Enhanced System", "Acquire half the chips"],
        ["Evolution", "Discover a mysterious egg"],
        ["Family", "Reunite Lune and Rondel"],
        ["Finely Tuned", "Listen to Melody's song"],
        ["For Safekeeping", "Deposit some spare parts"],
        ["In Too Deep", "See Limerick pass"],
        ["Literate", "Listen to all of Lunes poems"],
        ["Mundooooo", "Talk to Mundo"],
        ["Neutron", "Free the first Creator"],
        ["No Manual Repairs", "Complete the game without picking up the wrench"],
        ["No More Mischief", "Destroy all map disruptors"],
        ["Origins", "Find the betrayed Creator"],
        ["Poetic Justice", "Kill 575 enemies"],
        ["Proton", "Free the second Creator"],
        ["Quatern's Project Complete", "Collect all the power cells"],
        ["Quatern's Project In Progress", "Collect half the power cells"],
        ["Quatern's Project Initiated", "Collect one Power Cell"],
        ["Save The Children", "In Steam Town, free the mother bot's children trapped in the house behind her, then talk to her again (also gives the D3 Chip)."],
        ["Scavenger!", "Buy all of the Reaper's items"],
        ["Sold out!", "Buy all of Sonnet's items"],
        ["Symptom", "Defeat the Virus"],
        ["That Wasn't Nice", "Destroy Splunks house"],
        ["The Graveyard Shift", "Interact with every backer message/tomb"],
        ["The Last Of Humankind", "Visit the Catacombs"],
        ["Trainspotter", "Discover all the train stations"],
        ["Trepid Explorer", "100% the map"],
        ["Two Minutes To Midnight", "Fix the clock"],
        ["Two Points!", "Jump through the basketball hoop"],
        ["Upgrades, People - Upgrades", "Acquire all the chips"],
        ["Well-Oiled Machine", "Achieve maximum health"],
    ];

    assert.strictEqual(officialAchievements.length, 40, "sanity check on this test's own reference list");

    const dataPairs = game.achievements
        .map(a => [a.name, a.description])
        .sort((a, b) => a[0].localeCompare(b[0]));

    assert.deepStrictEqual(dataPairs, [...officialAchievements].sort((a, b) => a[0].localeCompare(b[0])));

});
