import { test } from "node:test";
import assert from "node:assert";

import { getPlannerData } from "../utils/plannerCatalog.js";

// backend/catalog/games/south-of-midnight.json - 40 real achievements sourced
// from a live ISteamUserStats/GetSchemaForGame/v2 response for appid
// 1934570 (fetched through this app's own services/steamApi.js).
// Hidden achievements have no Steam description; where present, their
// description here is researched and cited in the frontend guide header.
// difficulty/estimatedTime/missable are curatorial.
const game = getPlannerData("south-of-midnight");

test("getPlannerData('south-of-midnight') returns real planner data with 40 curated achievements", () => {

    assert.ok(game, "expected real planner data for south-of-midnight");
    assert.ok(Array.isArray(game.achievements));
    assert.strictEqual(game.achievements.length, 40);

});

test("every South of Midnight achievement has a unique id from 1 to 40 and a unique apiname", () => {

    const ids = game.achievements.map(a => a.id);
    const apinames = game.achievements.map(a => a.apiname);

    assert.deepStrictEqual([...ids].sort((a, b) => a - b), Array.from({ length: 40 }, (_, i) => i + 1));
    assert.strictEqual(new Set(ids).size, 40);
    assert.strictEqual(new Set(apinames).size, 40);

});

test("every South of Midnight achievement has a valid difficulty (1-5), a positive estimatedTime, and non-empty name/description", () => {

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

test("every one of the 40 South of Midnight achievement name+description pairs matches the catalog data", () => {

    const officialAchievements = [
        ["A Barman is Hard to Find", "Reached at a specific point in the story."],
        ["A Big Fish", "Reached at a specific point in the story."],
        ["A Great Southern Tradition", "Find all tin flips"],
        ["A Little Goes a Long Way", "Collect a Health Filament"],
        ["A Living Loom", "Fully upgrade Weave"],
        ["An Owl for an Owl", "Defeat the Rougarou without taking damage."],
        ["Arachnophilia", "Defeat Huggin' Molly without taking damage."],
        ["Arachnophobia", "Defeat Huggin' Molly."],
        ["Cicada Tempest", "Unravel Haints after defeating them by throwing Larva Haints into them"],
        ["Clean Hands", "Unravel Haints after defeating them without using attacks"],
        ["Close Call", "Use Perfect Dodge while having low health"],
        ["Crouton of Joy", "Fully upgrade Crouton"],
        ["Everything that Rises", "Reached at a specific point in the story."],
        ["Finder's Keepers", "Perform a tin flip"],
        ["Fit as a Fiddle", "Fully upgrade Hazel's Health"],
        ["Floof Seeker", "Find all Floofs"],
        ["Gator Master", "Defeat Two-Toed Tom without taking damage."],
        ["Gator Tamer", "Defeat Two-Toed Tom."],
        ["Get Over Here", "Fully upgrade Strand Pull"],
        ["Going the Distance", "Unravel Haints after defeating them with the Amplified Rend"],
        ["Hush, Hush, Sweet Cherie ", "Reached at a specific point in the story."],
        ["In the Nick of Time", "Perform Perfect Dodges"],
        ["Just a Nudge", "Fully upgrade Strand Push"],
        ["Learning the Ropes", "Unlock an upgrade"],
        ["Light in the Darkness", "Reached at a specific point in the story."],
        ["Lore Master", "Find all Readables"],
        ["Mastering the Ropes", "Fully upgrade General"],
        ["Muddy Waters", "Reached at a specific point in the story."],
        ["Night of the Flood", "Reached at a specific point in the story."],
        ["Of Webs and Woman", "Reached at a specific point in the story."],
        ["Other Voices, Other Looms", "Reached at a specific point in the story."],
        ["Owl Do You Do", "Defeat the Rougarou."],
        ["Past Ain't Past", "Reached at a specific point in the story."],
        ["Stroke of Midnight", "Completed the full game."],
        ["Taking the High Road", "Interrupt Haint attacks with the Aerial Rend"],
        ["The Crossroads", "Reached at a specific point in the story."],
        ["Their Eyes Were Watching", "Reached at a specific point in the story."],
        ["Took 'em Down a Peg", "Defeat multiple Haints with the Cleansing Rend"],
        ["Unraveller", "Unravel a Haint"],
        ["Wicked Temper", "Reached at a specific point in the story."],
    ];

    assert.strictEqual(officialAchievements.length, 40, "sanity check on this test's own reference list");

    const dataPairs = game.achievements
        .map(a => [a.name, a.description])
        .sort((a, b) => a[0].localeCompare(b[0]));

    assert.deepStrictEqual(dataPairs, [...officialAchievements].sort((a, b) => a[0].localeCompare(b[0])));

});
