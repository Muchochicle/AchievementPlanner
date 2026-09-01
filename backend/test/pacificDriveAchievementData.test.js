import { test } from "node:test";
import assert from "node:assert";

import { getPlannerData } from "../utils/plannerCatalog.js";

// backend/catalog/games/pacific-drive.json - 49 real achievements sourced
// from a live ISteamUserStats/GetSchemaForGame/v2 response for appid
// 1458140 (fetched through this app's own services/steamApi.js). None are
// hidden; every description is Steam's own real text.
// Hidden achievements have no Steam description; where present, their
// description here is researched from community 100% guides and cited in
// the frontend guide header. difficulty/estimatedTime/missable are curatorial.
const game = getPlannerData("pacific-drive");

test("getPlannerData('pacific-drive') returns real planner data with 49 curated achievements", () => {

    assert.ok(game, "expected real planner data for pacific-drive");
    assert.ok(Array.isArray(game.achievements));
    assert.strictEqual(game.achievements.length, 49);

});

test("every Pacific Drive achievement has a unique id from 1 to 49 and a unique apiname", () => {

    const ids = game.achievements.map(a => a.id);
    const apinames = game.achievements.map(a => a.apiname);

    assert.deepStrictEqual([...ids].sort((a, b) => a - b), Array.from({ length: 49 }, (_, i) => i + 1));
    assert.strictEqual(new Set(ids).size, 49);
    assert.strictEqual(new Set(apinames).size, 49);

});

test("every Pacific Drive achievement has a valid difficulty (1-5), a positive estimatedTime, and non-empty name/description", () => {

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

test("every one of the 49 Pacific Drive achievement name+description pairs matches the catalog data", () => {

    const officialAchievements = [
        ["A Leap of Faith", "Successfully test Oppy's theory and return to her Auto Shop."],
        ["Along for the Ride", "Equip the cryptid bobblehead item during the final mission, 'The Well', and escape back to the Auto Shop."],
        ["ARDA Lorekeeper", "Discover 600 Logbook entries"],
        ["ARDA Record-Keeper", "Discover 300 Logbook entries"],
        ["Car Of Theseus", "Replace all of your car's original doors, panels, wheels and engine so none remain the ones you started with."],
        ["Car Whisperer", "Diagnose and cure a Quirk."],
        ["Certified Mechanic", "Fix six status effects on the same car component"],
        ["DIY Expert", "Unlock quite a few things in the Fabrication Station"],
        ["DIY Master", "Unlock not everything, but really quite a lot of things in the Fabrication Station"],
        ["Driver's Ed Dropout", "Forget to put the car in drive before hitting the gas, twenty times."],
        ["Et tu?", "Get hit hard by your car"],
        ["Fly Homeward", "Escape through a Gateway while the car's wheels are airborne"],
        ["Fully Outfitted", "Equip or install something in every possible slot on the car"],
        ["Garage Barrage", "Upgrade the Auto Shop into its prime"],
        ["Graverobber", "Discover your Remnant Ghost from a previous death, and retrieve any lost items or equipment."],
        ["Great Scott!", "Reach 88mph"],
        ["Hack the Planet!", "Find Oppy's secret hideaway in the Auto Shop and deliver the hard drive she stashed there to Francis and Tobias."],
        ["I Don’t Know What I Expected", "Deconstruct a resource"],
        ["Into the Wilderness", "Install the Zone Scanner above the Auto Shop."],
        ["Investigate the Zone", "Return to the Auto Shop after scanning five Anomalies or resources."],
        ["It Would Take a Miracle", "Complete a run with at least four junctions, and without breaking or removing any car parts"],
        ["Juiced Up", "Complete a run with at least two junctions, and with twice the anchor charge necessary to escape through the Gateway"],
        ["Just Walk it Off", "Get electrocuted, acid-burned, and physically hurt all within a minute"],
        ["Long Haul", "Drive an exceptional distance"],
        ["Lumberjack", "Destroy 1,000 trees"],
        ["No Parking", "Complete a run with at least three junctions, and without the car ever being in park"],
        ["Nothing Personnel, Zone", "Kick a Tourist, Tour Bus, or Ticking Tumbler Anomaly."],
        ["Packrat", "Load enough items into your car to fill 150 inventory grid slots."],
        ["Patent Pending", "Invent something new after installing the Zone Scanner"],
        ["Personal Methods of Creative Expression are Highly Encouraged", "Fully decorate your car by equipping one of each kind of cosmetic item, and applying a paint or decal to installed car parts in every possible slot"],
        ["Renewable Power", "Fully charge a car battery from under 50% using only natural energy sources"],
        ["Running on Empty", "Complete a run with at least two junctions, and with the car always having a low or empty fuel tank"],
        ["Scientific Pursuit", "Scan an Anomaly while the storm is approaching"],
        ["Sleight of Hand", "Distract an Anomaly with a light source"],
        ["Stabilizing the Route", "Activate the Zone Stabilizers in the Outer Zone and escape back to the Auto Shop."],
        ["Streets Ahead", "Complete a run with at least seven junctions"],
        ["The Anomaly Barricade", "Overcharge the car's ARC Device and escape back to the Auto Shop."],
        ["The Auto Shop", "Make contact with Oppy and plan your first route into the Zone from her Auto Shop."],
        ["The Deep Zone Crossing", "Gain access to the Deep-Zone and escape from there to the Auto Shop."],
        ["The End of the Road", "Return from the Well."],
        ["The Eye of the Storm", "Escape through a Gateway after the storm has completely collapsed."],
        ["The Mid-Zone Crossing", "Gain access to the Mid-Zone and escape from there to the Auto Shop."],
        ["The Red Meadow Records", "Return to the Auto Shop after recovering data ARDA hid in the Red Meadow Research Facility."],
        ["The Visions", "Uncover some of the Zone's history in the Mid-Zone, then escape back to the Auto Shop."],
        ["They Weren't Using It", "Liberate and equip a part from an abandoned car"],
        ["Troubleshooting", "Give your car a few swift kicks."],
        ["Watch Out for Hop-ons!", "Drive several miles with a Bunny on your car"],
        ["Where We're Going, We Don't Need Roads", "While driving, remain airborne for six seconds"],
        ["With the Top Down", "Complete a run with at least three junctions, and without any panels, doors, or bumpers on the car at any point"],
    ];

    assert.strictEqual(officialAchievements.length, 49, "sanity check on this test's own reference list");

    const dataPairs = game.achievements
        .map(a => [a.name, a.description])
        .sort((a, b) => a[0].localeCompare(b[0]));

    assert.deepStrictEqual(dataPairs, [...officialAchievements].sort((a, b) => a[0].localeCompare(b[0])));

});
