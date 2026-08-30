import { test } from "node:test";
import assert from "node:assert";

import { getPlannerData } from "../utils/plannerCatalog.js";

// backend/catalog/games/subnautica.json - 17 real achievements sourced
// from a live ISteamUserStats/GetSchemaForGame/v2 response for appid
// 264710 (fetched through this app's own services/steamApi.js). 17 achievement(s) are hidden and ship with no official
// description; those keep a curatorial description instead, and every
// other one is Steam's own real text.
// difficulty/estimatedTime/missable remain curatorial judgments.
const game = getPlannerData("subnautica");

test("getPlannerData('subnautica') returns real planner data with 17 curated achievements", () => {

    assert.ok(game, "expected real planner data for subnautica");
    assert.ok(Array.isArray(game.achievements));
    assert.strictEqual(game.achievements.length, 17);

});

test("every Subnautica achievement has a unique id from 1 to 17 and a unique apiname", () => {

    const ids = game.achievements.map(a => a.id);
    const apinames = game.achievements.map(a => a.apiname);

    assert.deepStrictEqual([...ids].sort((a, b) => a - b), Array.from({ length: 17 }, (_, i) => i + 1));
    assert.strictEqual(new Set(ids).size, 17);
    assert.strictEqual(new Set(apinames).size, 17);

});

test("every Subnautica achievement has a valid difficulty (1-5), a positive estimatedTime, and non-empty name/description", () => {

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

test("every one of the 17 Subnautica achievement name+description pairs matches the catalog data", () => {

    const officialAchievements = [
        ["\"Man's Best Friend\"", "Hatch a Cuddlefish egg in an Alien Containment."],
        ["40-foot Sub For One", "Construct the Cyclops submarine."],
        ["Ancient Technologies", "Discover an Ancient Alien Precursor Gun, one of the Precursor race's abandoned technologies."],
        ["Extinction Event Avoided", "Repair the Aurora's damaged nuclear reactor before it melts down, averting an extinction-level event."],
        ["Follow the Degasi", "Find the Degasi survivors' base in the Jellyshroom Caves."],
        ["Follow the Lost River", "Find the Precursor facility hidden within the Lost River."],
        ["Fourteen Thousand Leagues Under the Sea", "Find the deep Precursor Prison Facility housing the planet's greatest threat."],
        ["Getting Your Feet Wet", "Enter the water for the first time after crash-landing on planet 4546B."],
        ["Go Among the Stars", "Build and launch the Neptune Escape Rocket to leave planet 4546B."],
        ["Leave Only Time Capsules", "Deploy a Time Capsule out into the ocean."],
        ["Optimal Health", "Cure yourself of the Kharaa Bacterium infection."],
        ["Ordered the Prawn", "Construct the Prawn Suit exosuit."],
        ["Personal Propulsion", "Construct the Seamoth submersible."],
        ["Seamonsters", "Find the Degasi survivors' base in the Deep Grand Reef."],
        ["Seaside Living with an Ocean View", "Find the Degasi survivors' base on the Floating Islands."],
        ["Settling in for the Long Haul", "Construct your first habitat base."],
        ["Thermal Activity", "Find the Precursor facility hidden within the planet's Lava Zone."],
    ];

    assert.strictEqual(officialAchievements.length, 17, "sanity check on this test's own reference list");

    const dataPairs = game.achievements
        .map(a => [a.name, a.description])
        .sort((a, b) => a[0].localeCompare(b[0]));

    assert.deepStrictEqual(dataPairs, [...officialAchievements].sort((a, b) => a[0].localeCompare(b[0])));

});
