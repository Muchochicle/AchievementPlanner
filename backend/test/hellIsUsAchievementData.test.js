import { test } from "node:test";
import assert from "node:assert";

import { getPlannerData } from "../utils/plannerCatalog.js";

// backend/catalog/games/hell-is-us.json - 40 real achievements sourced
// from a live ISteamUserStats/GetSchemaForGame/v2 response for appid
// 1620730 (fetched through this app's own services/steamApi.js).
// Hidden achievements have no Steam description; where present, their
// description here is researched and cited in the frontend guide header.
// difficulty/estimatedTime/missable are curatorial.
const game = getPlannerData("hell-is-us");

test("getPlannerData('hell-is-us') returns real planner data with 40 curated achievements", () => {

    assert.ok(game, "expected real planner data for hell-is-us");
    assert.ok(Array.isArray(game.achievements));
    assert.strictEqual(game.achievements.length, 40);

});

test("every Hell is Us achievement has a unique id from 1 to 40 and a unique apiname", () => {

    const ids = game.achievements.map(a => a.id);
    const apinames = game.achievements.map(a => a.apiname);

    assert.deepStrictEqual([...ids].sort((a, b) => a - b), Array.from({ length: 40 }, (_, i) => i + 1));
    assert.strictEqual(new Set(ids).size, 40);
    assert.strictEqual(new Set(apinames).size, 40);

});

test("every Hell is Us achievement has a valid difficulty (1-5), a positive estimatedTime, and non-empty name/description", () => {

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

test("every one of the 40 Hell is Us achievement name+description pairs matches the catalog data", () => {

    const officialAchievements = [
        ["Accessorizing", "Imbue a Defensive Gear to Grade 4"],
        ["All the Rage", "Defeat all 3 Haze of Rage variants"],
        ["Amateur Detective", "Resolve a Mystery"],
        ["Antiquarian", "Acquire all Relics"],
        ["Big Game Hunter", "Defeat all 5 Hollow Walker variants"],
        ["Buzz Killer", "Defeat all 3 Haze of Ecstasy variants"],
        ["Conspiracy Theorist", "Collect every Conspiracy research item."],
        ["Curator", "Acquire 10 Relics"],
        ["Demonologist", "Collect every Lymbic Invasions research item."],
        ["Emotional Baggage", "Complete Act 2"],
        ["Emotional Damage", "Acquire at least one Glyph of each Lymbic Sphere"],
        ["Emotional Warfare", "Acquire all Glyphs of each Lymbic Sphere"],
        ["End the Suffering", "Close a Timeloop"],
        ["Ever After", "Ensure every possible NPC ends up at Lake Cynon."],
        ["Fear No Evil", "Defeat all 3 Haze of Terror variants"],
        ["Gentleman Scholar", "Collect every Order of the Eye research item."],
        ["Good Grief", "Defeat all 3 Haze of Grief variants"],
        ["Good Samaritan", "Accomplish a Good Deed"],
        ["Good Vibrations", "Upgrade one of each Weapon type to Grade 5"],
        ["Historian", "Collect every Hadea research item."],
        ["It's Mine Now", "Acquire a means of transportation."],
        ["Keymaster", "Solve 25 puzzles that require placing the right item."],
        ["Legend of the Phol", "Close all Timeloops and defeat all remaining entities"],
        ["Lend an Ear", "Converse with every NPC."],
        ["Long and (not so) Winding Road", "Traverse the tunnel from the Lymbic Forge to the Eye of God."],
        ["Man of the People", "Accomplish all Good Deeds"],
        ["Passion for Fashion", "Acquire and wear every baseball cap."],
        ["Phol Guy", "Defeat 40 Hazes of tier 2"],
        ["Redemption", "Complete Act 3"],
        ["Rise and Phol", "Defeat 40 Hazes of tier 1"],
        ["So It Begins", "Completed Act 1"],
        ["Super-Sleuth", "Resolve all Mysteries"],
        ["Sworn to Secrecy", "Collect every Vigil research item."],
        ["Tech-Savvy", "Acquire all Drone Modules"],
        ["The Harder They Phol", "Defeat 40 Hazes of tier 3"],
        ["To the Teeth", "Equip two Grade 5 Weapons and two Grade 4 Defensive Gear at once."],
        ["Vault Raider", "Unseal a Vault of Forbidden Knowledge."],
        ["War Correspondent", "Collect every Civil War research item."],
        ["Well-Read", "Collect every research item across every category."],
        ["Well-Travelled", "Visit every location."],
    ];

    assert.strictEqual(officialAchievements.length, 40, "sanity check on this test's own reference list");

    const dataPairs = game.achievements
        .map(a => [a.name, a.description])
        .sort((a, b) => a[0].localeCompare(b[0]));

    assert.deepStrictEqual(dataPairs, [...officialAchievements].sort((a, b) => a[0].localeCompare(b[0])));

});
