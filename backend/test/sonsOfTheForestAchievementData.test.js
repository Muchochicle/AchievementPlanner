import { test } from "node:test";
import assert from "node:assert";

import { getPlannerData } from "../utils/plannerCatalog.js";

// backend/catalog/games/sons-of-the-forest.json - 32 real achievements sourced
// from a live ISteamUserStats/GetSchemaForGame/v2 response for appid
// 1326470 (fetched through this app's own services/steamApi.js).
// Hidden achievements have no Steam description; where present, their
// description here is researched from community 100% guides and cited in
// the frontend guide header. difficulty/estimatedTime/missable are curatorial.
const game = getPlannerData("sons-of-the-forest");

test("getPlannerData('sons-of-the-forest') returns real planner data with 32 curated achievements", () => {

    assert.ok(game, "expected real planner data for sons-of-the-forest");
    assert.ok(Array.isArray(game.achievements));
    assert.strictEqual(game.achievements.length, 32);

});

test("every Sons of the Forest achievement has a unique id from 1 to 32 and a unique apiname", () => {

    const ids = game.achievements.map(a => a.id);
    const apinames = game.achievements.map(a => a.apiname);

    assert.deepStrictEqual([...ids].sort((a, b) => a - b), Array.from({ length: 32 }, (_, i) => i + 1));
    assert.strictEqual(new Set(ids).size, 32);
    assert.strictEqual(new Set(apinames).size, 32);

});

test("every Sons of the Forest achievement has a valid difficulty (1-5), a positive estimatedTime, and non-empty name/description", () => {

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

test("every one of the 32 Sons of the Forest achievement name+description pairs matches the catalog data", () => {

    const officialAchievements = [
        ["1%", "Earn $1,000."],
        ["ARCHITECT", "Build a structure using more than 500 logs."],
        ["BADGER", "Dig 100 holes."],
        ["BLOCKBUSTER", "Watch all the found footage recordings"],
        ["CHIVALRY IS NOT DEAD", "Reach the maximum sentiment level with Virginia."],
        ["CITY PLANNER", "Build a structure using more than 1,000 logs."],
        ["COLLECTOR", "Pick up 50 Drogue watches."],
        ["CONTRACTOR", "Build a structure using more than 100 logs."],
        ["DYNAMO", "Complete and wear the full Tech Armor set."],
        ["EVERY MOVE YOU MAKE", "Give a GPS Locator to Virginia."],
        ["FASHIONISTA", "Own every piece of clothing in the game."],
        ["FIGHT DEMONS", "Choose to stay on the island (the other story ending)."],
        ["FOODIE", "Consume one of each type of edible."],
        ["FOUGHT DEMONS", "Escape the island successfully (one of the two story endings)."],
        ["GUMSHOE", "Collect all the note pages"],
        ["I DREAM OF SUSHI", "Consume 20 raw fish."],
        ["I LIKE BLISTERS", "Dig 1,000 holes."],
        ["INTERIOR DESIGNER", "Find all the discoverable blueprints"],
        ["KEEP YOUR FRIENDS CLOSE", "Complete the story without letting any friendly NPC (Kelvin or Virginia) die."],
        ["MAKER", "Print at least one of every item that can be printed from a 3D Printer."],
        ["MC CRAFTY", "Craft all weapons."],
        ["NEED A BIGGER BOAT", "Die from a shark attack."],
        ["NEVER GOING HOME", "Survive for 50 days."],
        ["OOOH SHINY", "Plate every valid weapon with Solafite using the Solafite Upgrader."],
        ["PINATA", "Make a Sluggy explode."],
        ["SUCKER FOR PUNISHMENT", "Be on the receiving end of five cannibal kicks."],
        ["SURVIVOR", "Survive one day."],
        ["THIS CAN’T BE HEALTHY", "Drink 50 cans of Fi-Z."],
        ["THIS PLACE ISN’T SO BAD", "Survive for 25 days."],
        ["TRADESMAN", "Build a structure using more than 50 logs."],
        ["TRUSTED", "Become a Trusted player in a multiplayer game (the host must grant the status)."],
        ["WHAT COULD GO WRONG", "Survive for 10 days."],
    ];

    assert.strictEqual(officialAchievements.length, 32, "sanity check on this test's own reference list");

    const dataPairs = game.achievements
        .map(a => [a.name, a.description])
        .sort((a, b) => a[0].localeCompare(b[0]));

    assert.deepStrictEqual(dataPairs, [...officialAchievements].sort((a, b) => a[0].localeCompare(b[0])));

});
