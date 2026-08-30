import { test } from "node:test";
import assert from "node:assert";

import { getPlannerData } from "../utils/plannerCatalog.js";

// backend/catalog/games/just-cause-2.json - 50 real achievements sourced
// from a live ISteamUserStats/GetSchemaForGame/v2 response for appid
// 8190 (fetched through this app's own services/steamApi.js). None are
// hidden; every description is Steam's own real text.
// difficulty/estimatedTime/missable remain curatorial judgments.
const game = getPlannerData("just-cause-2");

test("getPlannerData('just-cause-2') returns real planner data with 50 curated achievements", () => {

    assert.ok(game, "expected real planner data for just-cause-2");
    assert.ok(Array.isArray(game.achievements));
    assert.strictEqual(game.achievements.length, 50);

});

test("every Just Cause 2 achievement has a unique id from 1 to 50 and a unique apiname", () => {

    const ids = game.achievements.map(a => a.id);
    const apinames = game.achievements.map(a => a.apiname);

    assert.deepStrictEqual([...ids].sort((a, b) => a - b), Array.from({ length: 50 }, (_, i) => i + 1));
    assert.strictEqual(new Set(ids).size, 50);
    assert.strictEqual(new Set(apinames).size, 50);

});

test("every Just Cause 2 achievement has a valid difficulty (1-5), a positive estimatedTime, and non-empty name/description", () => {

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

test("every one of the 50 Just Cause 2 achievement name+description pairs matches the catalog data", () => {

    const officialAchievements = [
        ["A Just Cause", "Complete story mission 7."],
        ["A Trusted Ally", "Complete 49 faction missions."],
        ["Body Count", "Kill 750 enemies."],
        ["Bridge Limbo", "Fly an airplane under 30 unique bridges in Panau."],
        ["Casino Bust", "Complete story mission 2."],
        ["Conqueror of Panau", "Complete 9 stronghold takeovers."],
        ["Destroyer", "Complete 1000 sabotages."],
        ["Destruction Frenzy", "Destroy 30 objects in 60 seconds."],
        ["Faction Benefactor", "Collect 150 faction items."],
        ["Finders Keepers", "Collect 100 resource items."],
        ["First Taste of Chaos", "Cause chaos for the first time."],
        ["Follow Me!", "Kill 5 enemies by dragging them behind a vehicle with the grappling hook."],
        ["Freeroamer 1", "Reach 100% complete in 15 locations."],
        ["Freeroamer 2", "Reach 100% complete in 100 locations."],
        ["Gaining a Foothold", "Complete 3 stronghold takeovers."],
        ["Globetrotter", "Discover 100 locations."],
        ["Gravity is a Bitch!", "Kill 30 enemies by using the grappling hook and making them fall to their death."],
        ["Halfway there", "Reach 50% completion in the normal mode or mercenary mode."],
        ["Hang 'em High!", "Kill 30 enemies while they're suspended in the air with the grappling hook."],
        ["Heroic Agent", "Bonus for completing the game on hard difficulty. Also gives you the bonus for normal difficulty."],
        ["I Believe I Can Fly", "Base jump 1000 meters."],
        ["Into the Den", "Complete story mission 6."],
        ["Invincible Warrior", "Kill 50 enemies in a row with inventory weapons without losing health."],
        ["Juggler", "Kill 30 enemies while they're falling through the air."],
        ["Killing Frenzy", "Kill 20 enemies in 60 seconds."],
        ["Leaving No Rock Unturned", "Collect 1000 resource items."],
        ["Legendary Agent", "Bonus for completing the game on extreme difficulty. Also gives you the bonus for hard and normal difficulties."],
        ["Low Flyer", "Fly an airplane close to the ground for 30 seconds."],
        ["Marksman", "Kill 50 enemies with headshots."],
        ["Mountain Rescue", "Complete story mission 4."],
        ["Parachute Climber", "Open the parachute and then land on foot 300 meters above the starting height."],
        ["Perfectionist", "Reach 75% completion in the normal mode or mercenary mode."],
        ["Piñata Party", "Kill 5 enemies with the melee attack while they're suspended with the grappling hook."],
        ["Please Step Out of the Vehicle", "Hijack 50 enemy vehicles."],
        ["Professional Hitman", "Assassinate 25 colonels."],
        ["Road Rage", "Kill 30 enemies by mowing them down with vehicles."],
        ["Road Trip", "Travel 75 kilometers by land vehicle."],
        ["Saboteur", "Complete 100 sabotages."],
        ["Stunt Driver", "Get 100 stunt driver points."],
        ["Test Driver", "Drive 30 different vehicles."],
        ["The White Tiger", "Complete story mission 3."],
        ["Three Kings", "Complete story mission 5."],
        ["Top Agent", "Bonus for completing the game on normal difficulty."],
        ["Top of the World", "Stand on foot at the highest point of Panau."],
        ["Trying Anything Once", "Drive all 104 vehicles."],
        ["Unarmed and Dangerous", "Kill 50 enemies using melee attacks."],
        ["Up to the Challenge 1", "Complete 10 challenges."],
        ["Up to the Challenge 2", "Complete 50 challenges."],
        ["Welcome to Panau", "Complete story mission 1."],
        ["Wrecking Ball", "Kill 5 enemies by smashing them with an object tethered to your vehicle with the grappling hook."],
    ];

    assert.strictEqual(officialAchievements.length, 50, "sanity check on this test's own reference list");

    const dataPairs = game.achievements
        .map(a => [a.name, a.description])
        .sort((a, b) => a[0].localeCompare(b[0]));

    assert.deepStrictEqual(dataPairs, [...officialAchievements].sort((a, b) => a[0].localeCompare(b[0])));

});
