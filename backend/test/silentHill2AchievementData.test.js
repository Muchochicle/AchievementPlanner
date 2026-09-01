import { test } from "node:test";
import assert from "node:assert";

import { getPlannerData } from "../utils/plannerCatalog.js";

// backend/catalog/games/silent-hill-2.json - 43 real achievements sourced
// from a live ISteamUserStats/GetSchemaForGame/v2 response for appid
// 2124490 (fetched through this app's own services/steamApi.js).
// Hidden achievements have no Steam description; where present, their
// description here is researched from community 100% guides and cited in
// the frontend guide header. difficulty/estimatedTime/missable are curatorial.
const game = getPlannerData("silent-hill-2");

test("getPlannerData('silent-hill-2') returns real planner data with 43 curated achievements", () => {

    assert.ok(game, "expected real planner data for silent-hill-2");
    assert.ok(Array.isArray(game.achievements));
    assert.strictEqual(game.achievements.length, 43);

});

test("every Silent Hill 2 achievement has a unique id from 1 to 43 and a unique apiname", () => {

    const ids = game.achievements.map(a => a.id);
    const apinames = game.achievements.map(a => a.apiname);

    assert.deepStrictEqual([...ids].sort((a, b) => a - b), Array.from({ length: 43 }, (_, i) => i + 1));
    assert.strictEqual(new Set(ids).size, 43);
    assert.strictEqual(new Set(apinames).size, 43);

});

test("every Silent Hill 2 achievement has a valid difficulty (1-5), a positive estimatedTime, and non-empty name/description", () => {

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

test("every one of the 43 Silent Hill 2 achievement name+description pairs matches the catalog data", () => {

    const officialAchievements = [
        ["A Human Being", "Kill Eddie in the final Labyrinth confrontation."],
        ["Admitted", "Reach Brookhaven Hospital (automatic on entering)."],
        ["All Seems in Order", "Discover the secret of Room 106 at Jack's Inn - a Silent Hill 3 reference, found by inspecting the damaged wall during the South Vale revisit."],
        ["Alone Again", "Survive the Pyramid Head chase sequence in Brookhaven Hospital."],
        ["Archivist", "Collect all memos in a single playthrough."],
        ["As Close as You Like", "Finish the game without killing enemies using ranged weapons."],
        ["Blunt Force Trauma", "Kill 75 enemies with melee weapons."],
        ["Defy Even Death", "Reach the 'Rebirth' ending (New Game Plus only - requires four special items)."],
        ["Echoes", "Witness every Glimpse of the Past in a single playthrough."],
        ["Enjoy Your Stay", "Reach Silent Hill (story unlock when you obtain the South Vale map)."],
        ["Faster Than Fog", "Finish the game in under 10 hours."],
        ["Glimmer of Hope", "Reach the Lakeview Hotel after rowing across Toluca Lake."],
        ["I Saw That Town", "Complete New Game Plus on any difficulty."],
        ["Inner Sanctum", "Find His room - enter Pyramid Head's octagonal chamber."],
        ["Into the Abyss", "Reach the end of the long staircase in the Silent Hill Historical Society."],
        ["It's Bread", "Interact with the bread tray in the kitchen of the Lakeview Hotel's employee section."],
        ["James of All Trades", "Kill at least one enemy with the Wooden Plank, Steel Pipe, Handgun, Shotgun and Rifle in a single playthrough."],
        ["Leftovers", "Find the pizza in Pete's Bowl-O-Rama - inspect the open pizza box on a table."],
        ["Let's NOT Party!", "Shoot all 11 balloons spelling 'Welcome Home' in Apartment 207 of Wood Side Apartments."],
        ["Lumberjack", "Find the chainsaw in a log stack near Silent Hill Ranch (New Game Plus only)."],
        ["Making Peace", "Reach the 'Leave' ending."],
        ["Merciless", "Finish off 50 enemies with a stomp attack."],
        ["Nice and Cozy", "Reach Wood Side Apartments (automatic on entering)."],
        ["Nightmare Fuel", "Defeat the Flesh Lip boss in Brookhaven Hospital."],
        ["No Big Deal", "Kill 75 enemies with ranged weapons."],
        ["No Turning Back Now", "Try to leave Silent Hill in the Observation Deck area at the start - turn around and follow the road to its end."],
        ["Obsolete", "Defeat the two Pyramid Heads in the Lakeview Hotel Otherworld."],
        ["Only Way Out", "Reach the 'In Water' ending."],
        ["Otherworldly", "Enter the Otherworld for the first time (after interacting with the red door in Apartment 201)."],
        ["Party Like It's 2001", "See all five classic endings - Leave, Maria, In Water, Rebirth and Dog."],
        ["Passed", "Make your way out of Blue Creek Apartments after defeating Pyramid Head there."],
        ["Pieces Unarranged", "Collect all Strange Photos in a single playthrough."],
        ["Radio Silence", "Complete the game without using the radio."],
        ["Scourge of Toluca Lake", "Spend 10 minutes out on Toluca Lake - idle on the water after the Eddie boss fight."],
        ["Shattered", "Destroy 50 windows."],
        ["That Part of Me", "Defeat Her - the final boss."],
        ["The Goodest Boi", "Reach the 'Dog' ending (New Game Plus only - requires the Dog Key)."],
        ["Tinfoil Hat", "Reach the 'UFO' ending (New Game Plus only - requires using the Blue Gem at four locations)."],
        ["Truly Special", "Reach Room 312 in the Lakeview Hotel."],
        ["Uncanny", "Meet Maria at Rosewater Park."],
        ["Unforgivable", "Defeat the Abstract Daddy boss in the Labyrinth."],
        ["Vicious Circle", "Reach the 'Maria' ending."],
        ["You Never Know...", "Try to open locked doors 50 times."],
    ];

    assert.strictEqual(officialAchievements.length, 43, "sanity check on this test's own reference list");

    const dataPairs = game.achievements
        .map(a => [a.name, a.description])
        .sort((a, b) => a[0].localeCompare(b[0]));

    assert.deepStrictEqual(dataPairs, [...officialAchievements].sort((a, b) => a[0].localeCompare(b[0])));

});
