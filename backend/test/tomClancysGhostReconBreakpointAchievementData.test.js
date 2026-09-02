import { test } from "node:test";
import assert from "node:assert";

import { getPlannerData } from "../utils/plannerCatalog.js";

// backend/catalog/games/tom-clancys-ghost-recon-breakpoint.json - 50 real achievements sourced
// from a live ISteamUserStats/GetSchemaForGame/v2 response for appid
// 2231380 (fetched through this app's own services/steamApi.js).
// None are hidden; every description is Steam's own real text.
// difficulty/estimatedTime/missable are curatorial.
const game = getPlannerData("tom-clancys-ghost-recon-breakpoint");

test("getPlannerData('tom-clancys-ghost-recon-breakpoint') returns real planner data with 50 curated achievements", () => {

    assert.ok(game, "expected real planner data for tom-clancys-ghost-recon-breakpoint");
    assert.ok(Array.isArray(game.achievements));
    assert.strictEqual(game.achievements.length, 50);

});

test("every Tom Clancy's Ghost Recon Breakpoint achievement has a unique id from 1 to 50 and a unique apiname", () => {

    const ids = game.achievements.map(a => a.id);
    const apinames = game.achievements.map(a => a.apiname);

    assert.deepStrictEqual([...ids].sort((a, b) => a - b), Array.from({ length: 50 }, (_, i) => i + 1));
    assert.strictEqual(new Set(ids).size, 50);
    assert.strictEqual(new Set(apinames).size, 50);

});

test("every Tom Clancy's Ghost Recon Breakpoint achievement has a valid difficulty (1-5), a positive estimatedTime, and non-empty name/description", () => {

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

test("every one of the 50 Tom Clancy's Ghost Recon Breakpoint achievement name+description pairs matches the catalog data", () => {

    const officialAchievements = [
        ["A brutal stop", "Kill a convoy's driver with a sync shot drone."],
        ["A hero of our time", "Reach Level 30."],
        ["A Man of the World", "Discover 20 different Provinces."],
        ["A safe haven", "Reach the end of Act 1."],
        ["Absolute Mastery", "Reach Rank 10 with any class."],
        ["Attachments Master", "Find 30 Attachments and then equip one in the gunsmith."],
        ["Bang bang", "Get 3 headshots with a handgun in 5 seconds."],
        ["Bird watching", "Kill an helicopter's pilot with any weapon."],
        ["Born in the purple", "Wear all High-end equipment."],
        ["Breakpoint", "Reach the end of Act 4."],
        ["Change hurts", "Finish POINT OF NO RETURN."],
        ["Cry Wolves", "Finish SPEAK NO EVIL, HEAR NO EVIL, SEE NO EVIL."],
        ["David's Challenge", "Kill a Behemoth."],
        ["Death from above", "Kill an enemy 5 seconds after landing from a base jump."],
        ["Drone farmer", "Destroy 50 enemy drones."],
        ["Elite Guerrilla", "Finish 5 Elite Faction Missions."],
        ["End of Act 2", "Reach the end of Act 2."],
        ["End of Act 3", "Reach the end of Act 3."],
        ["Entry-level combat", "Win 1 match in Ghost War (Standard)."],
        ["Executive perks", "Unlock 10 Perks in the Skills menu."],
        ["Expert Herbalist", "Pick up 20 different natural resources."],
        ["Expert Marksman", "Kill 2 enemies more than 200m away with headshots in 3 seconds."],
        ["Four Honor", "Unlock 4 Classes."],
        ["Get it off me!", "Shoot a wasp while it is still on it's carrier's back."],
        ["Heart of Darkness", "Find all 8 mysterious carillons."],
        ["Here's your World 2.0", "Kill Walker."],
        ["Hunter becomes the Hunted", "Kill 50 Wolves."],
        ["In the belly of the beast", "Enter the Raid."],
        ["It's free real estate", "Discover 50 different Bivouacs."],
        ["Jack of all Guns", "Kill an enemy with every firearm type."],
        ["Lord of War", "Equip a legendary weapon."],
        ["Master Craftsman", "Find 40 Blueprints and then buy 5 Weapons on Demand at Maria's."],
        ["Prolific gunsmith", "Upgrade 20 weapon intermarks in total."],
        ["Simple Geometry", "Kill 2 enemies with a single rocket."],
        ["Snapping turtle", "Kill an enemy with CQC from prone camo."],
        ["Squad Goals", "Finish 3 missions in Coop."],
        ["Sting like a bee", "Kill a Breacher, a Rocket Gunner and a Sniper with CQC while in stealth."],
        ["Swiss Army Killer", "Kill an enemy in Ghost War as the Panther, Assault, Field Medic and Sharpshooter."],
        ["Synchronized and deadly", "Kill an enemy shortly after another player in Coop has killed one."],
        ["Tell your story", "Complete the optional dialog in Erewhon about your past."],
        ["The night is dark", "Kill 12 enemies without getting detected."],
        ["The woe of wit", "Find 20 clues in the world."],
        ["This one is mine", "Upgrade a weapon to Mark 3."],
        ["Totsiens!", "Finish A GREAT ESCAPE."],
        ["Two-faced", "Unlock 2 Classes."],
        ["War never ends", "Finish 8 Faction Missions in a single day."],
        ["What a maniac", "Kill 20 enemies by running them over."],
        ["Wildland Millionaire", "Spend 100.000 Skell Credits."],
        ["You can't stop us, Nomad!", "Finish FRIENDLY FIRE."],
        ["You Monster", "Destroy a Farmer drone."],
    ];

    assert.strictEqual(officialAchievements.length, 50, "sanity check on this test's own reference list");

    const dataPairs = game.achievements
        .map(a => [a.name, a.description])
        .sort((a, b) => a[0].localeCompare(b[0]));

    assert.deepStrictEqual(dataPairs, [...officialAchievements].sort((a, b) => a[0].localeCompare(b[0])));

});
