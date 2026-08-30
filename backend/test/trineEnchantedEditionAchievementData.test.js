import { test } from "node:test";
import assert from "node:assert";

import { getPlannerData } from "../utils/plannerCatalog.js";

// backend/catalog/games/trine-enchanted-edition.json - 33 real achievements sourced
// from a live ISteamUserStats/GetSchemaForGame/v2 response for appid
// 35700 (fetched through this app's own services/steamApi.js). None are
// hidden; every description is Steam's own real text.
// difficulty/estimatedTime/missable remain curatorial judgments.
const game = getPlannerData("trine-enchanted-edition");

test("getPlannerData('trine-enchanted-edition') returns real planner data with 33 curated achievements", () => {

    assert.ok(game, "expected real planner data for trine-enchanted-edition");
    assert.ok(Array.isArray(game.achievements));
    assert.strictEqual(game.achievements.length, 33);

});

test("every Trine Enchanted Edition achievement has a unique id from 1 to 33 and a unique apiname", () => {

    const ids = game.achievements.map(a => a.id);
    const apinames = game.achievements.map(a => a.apiname);

    assert.deepStrictEqual([...ids].sort((a, b) => a - b), Array.from({ length: 33 }, (_, i) => i + 1));
    assert.strictEqual(new Set(ids).size, 33);
    assert.strictEqual(new Set(apinames).size, 33);

});

test("every Trine Enchanted Edition achievement has a valid difficulty (1-5), a positive estimatedTime, and non-empty name/description", () => {

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

test("every one of the 33 Trine Enchanted Edition achievement name+description pairs matches the catalog data", () => {

    const officialAchievements = [
        ["Academy Master", "Collect all experience in Astral Academy"],
        ["Astral Introduction", "Complete Astral Academy"],
        ["Better Than Developers!", "Complete Tower of Sarek without any deaths on hardest difficulty (Hardcore mode not required)"],
        ["Castle Master", "Collect all experience in Throne of the Lost"],
        ["Caverns Master", "Collect all experience in Crystal Caverns"],
        ["Completed!", "Complete the entire game"],
        ["Crypt Master", "Collect all experience in Crypt of the Damned"],
        ["Dead on arrival", "Complete a level with 25 or more character deaths"],
        ["Dungeon Master", "Collect all experience in Forsaken Dungeons"],
        ["Enchanted", "Launch the Enchanted Edition of the game"],
        ["Forest Master", "Collect all experience in Fangle Forest"],
        ["Forge Master", "Collect all experience in Iron Forge"],
        ["Graveyard Master", "Collect all experience in Dragon Graveyard"],
        ["Hallways Master", "Collect all experience in Academy Hallways"],
        ["Master Collector", "Collect all experience in the game"],
        ["Mines Master", "Collect all experience in Heartland Mines"],
        ["Ruins Master", "Collect all experience in Ruins of the Perished"],
        ["Spring master", "Complete at least 5 jumps (or 3 in Enchanted Edition) in a row on different skeletons without touching the ground"],
        ["Still no fireball", "Conjure 200 objects in a single level"],
        ["Summer Dip", "Stay underwater for more than 20 seconds without taking damage"],
        ["Survivalist", "Survive a level other than Astral Academy without any damage"],
        ["The Cool Way", "In a single level, kill one monster by jumping on it with the Knight, one with the Wizard's abilities and one with the Thief's grappling hook kick"],
        ["Thicket Master", "Collect all experience in Shadowthorn Thicket"],
        ["Tower Master", "Collect all experience in Tower of Sarek"],
        ["Treasure Hunter", "Find all secret items in every level"],
        ["Undead have rights, too!", "Complete a level other than Astral Academy without directly killing any enemies"],
        ["Village Master", "Collect all experience in Bramblestoke Village"],
        ["Way Out of the Trine", "Earn all Achievements in Trine"],
        ["What a View!", "Build a tower with at least 12 Wizard-created objects and stand on top of the tower without collapsing it"],
        ["What's next?", "Complete the entire game on hardest difficulty (Hardcore mode not required)"],
        ["Whoops!", "Kill 5 monsters (or 3 in Enchanted Edition) with a single physical object drop or throw"],
        ["Winter Secrets", "Find the Academic, Bony and Crystalline holiday secret gifts."],
        ["Wolvercote Master", "Collect all experience in Wolvercote Catacombs"],
    ];

    assert.strictEqual(officialAchievements.length, 33, "sanity check on this test's own reference list");

    const dataPairs = game.achievements
        .map(a => [a.name, a.description])
        .sort((a, b) => a[0].localeCompare(b[0]));

    assert.deepStrictEqual(dataPairs, [...officialAchievements].sort((a, b) => a[0].localeCompare(b[0])));

});
