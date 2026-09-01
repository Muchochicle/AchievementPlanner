import { test } from "node:test";
import assert from "node:assert";

import { getPlannerData } from "../utils/plannerCatalog.js";

// backend/catalog/games/half-life-alyx.json - 42 real achievements sourced
// from a live ISteamUserStats/GetSchemaForGame/v2 response for appid
// 546560 (fetched through this app's own services/steamApi.js).
// Hidden achievements have no Steam description; where present, their
// description here is researched from community 100% guides and cited in
// the frontend guide header. difficulty/estimatedTime/missable are curatorial.
const game = getPlannerData("half-life-alyx");

test("getPlannerData('half-life-alyx') returns real planner data with 42 curated achievements", () => {

    assert.ok(game, "expected real planner data for half-life-alyx");
    assert.ok(Array.isArray(game.achievements));
    assert.strictEqual(game.achievements.length, 42);

});

test("every Half-Life: Alyx achievement has a unique id from 1 to 42 and a unique apiname", () => {

    const ids = game.achievements.map(a => a.id);
    const apinames = game.achievements.map(a => a.apiname);

    assert.deepStrictEqual([...ids].sort((a, b) => a - b), Array.from({ length: 42 }, (_, i) => i + 1));
    assert.strictEqual(new Set(ids).size, 42);
    assert.strictEqual(new Set(apinames).size, 42);

});

test("every Half-Life: Alyx achievement has a valid difficulty (1-5), a positive estimatedTime, and non-empty name/description", () => {

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

test("every one of the 42 Half-Life: Alyx achievement name+description pairs matches the catalog data", () => {

    const officialAchievements = [
        ["Blast From the Past", "Defuse a roomful of explosive barrels."],
        ["Checking In", "Reach the Northern Star."],
        ["Combine Harvester", "Use the gravity gloves to loot an item off a living Combine soldier."],
        ["Consequences", "Make your choice (the ending)."],
        ["Cord-Cutter", "Shut down the substation."],
        ["Crustacean Frustration", "Kill the annoying headcrab before it breaks everything."],
        ["Dead Giveaway", "Loot a corpse."],
        ["Deadliest Catch", "Use the gravity gloves to intercept an incoming enemy grenade in mid-flight."],
        ["Eye of the Geiger", "Measure Russell with the Geiger counter."],
        ["Flat Note", "Kill Jeff."],
        ["Freshly Squeezed", "Test your grip on a headcrab heart."],
        ["Gnome Alone", "If you are reading this achievement, Gabe Newell has successfully launched Gnome Chompski into space. If you did not also receive the achievement 'Manufacturing Ascent', Newell has abandoned his plans to shoot Noam Chomsky into space."],
        ["Gnome Vault of My Own", "Bring a garden gnome with you all the way to the Vault."],
        ["Good Grub", "Feed the snark."],
        ["Heart-Breaker Hotel", "Get creative turning the hotel power back on."],
        ["High Water March", "Start climbing the water tower."],
        ["Hit and Run", "Break out of the Combine prisoner transport vehicle."],
        ["Hold Your Liquor", "Catch a bottle falling out of a cupboard before it breaks and alerts Jeff."],
        ["Indirect Approach", "Kill a Combine Heavy while their shield is up."],
        ["Little Slugger", "Represent yourself with a specific prop on Russell's map."],
        ["Mag-Snagger", "Catch Russell's ammo magazine before it hits the ground."],
        ["Mazel Tov", "Pick up and smash 50 glass bottles."],
        ["Near-Jeff Experience", "Stay close to Jeff for 10 seconds - but not too close."],
        ["Off the Rails", "Stop the prisoner transport train."],
        ["On a Roll", "Interact with the playground somehow."],
        ["Point Extraction", "Get to the superweapon."],
        ["Pro-Pain", "Kill a grunt by shooting their gas tank."],
        ["Quaranta Giorni", "Enter the Quarantine Zone."],
        ["Safe Trip", "Use the multitool to hack a tripmine."],
        ["Sea Level", "Reach the aquatic exhibits."],
        ["Smash and Grab", "Break open a supply crate with your hands."],
        ["Sound Strategy", "Escape the distillery without killing Jeff."],
        ["Surface Tension", "Escape the underground pit."],
        ["Sustenance", "Receive a tasty treat."],
        ["Team Spirit", "Bring Russell a bottle of vodka."],
        ["Textbook Jinxing", "Wake the Strider."],
        ["Triple Bypass", "Solve the tanker yard's electrical puzzle and escape."],
        ["Unbonded", "Collect the SMG."],
        ["Up in Arms", "Install your first pistol upgrade."],
        ["Xen Garden", "Enter the explosive Xen infestation."],
        ["Xen Lootism", "Snatch a Xen grenade from its resting place."],
        ["Zombie with a Shotgun", "Collect the shotgun."],
    ];

    assert.strictEqual(officialAchievements.length, 42, "sanity check on this test's own reference list");

    const dataPairs = game.achievements
        .map(a => [a.name, a.description])
        .sort((a, b) => a[0].localeCompare(b[0]));

    assert.deepStrictEqual(dataPairs, [...officialAchievements].sort((a, b) => a[0].localeCompare(b[0])));

});
