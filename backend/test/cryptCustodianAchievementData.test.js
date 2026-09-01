import { test } from "node:test";
import assert from "node:assert";

import { getPlannerData } from "../utils/plannerCatalog.js";

// backend/catalog/games/crypt-custodian.json - 48 real achievements sourced
// from a live ISteamUserStats/GetSchemaForGame/v2 response for appid
// 2394650 (fetched through this app's own services/steamApi.js).
// Hidden achievements have no Steam description; where present, their
// description here is researched from community 100% guides and cited in
// the frontend guide header. difficulty/estimatedTime/missable are curatorial.
const game = getPlannerData("crypt-custodian");

test("getPlannerData('crypt-custodian') returns real planner data with 48 curated achievements", () => {

    assert.ok(game, "expected real planner data for crypt-custodian");
    assert.ok(Array.isArray(game.achievements));
    assert.strictEqual(game.achievements.length, 48);

});

test("every Crypt Custodian achievement has a unique id from 1 to 48 and a unique apiname", () => {

    const ids = game.achievements.map(a => a.id);
    const apinames = game.achievements.map(a => a.apiname);

    assert.deepStrictEqual([...ids].sort((a, b) => a - b), Array.from({ length: 48 }, (_, i) => i + 1));
    assert.strictEqual(new Set(ids).size, 48);
    assert.strictEqual(new Set(apinames).size, 48);

});

test("every Crypt Custodian achievement has a valid difficulty (1-5), a positive estimatedTime, and non-empty name/description", () => {

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

test("every one of the 48 Crypt Custodian achievement name+description pairs matches the catalog data", () => {

    const officialAchievements = [
        ["A Plan Forms...", "Meet Grizz"],
        ["A Small Haunt", "Release 5 trapped spirits"],
        ["Broom Basher", "Defeat 500 enemies"],
        ["Bug Catcher", "Catch the Gigantic Stormbeetle"],
        ["Creature Feature", "Watch the entirety of GHOST SLAUGHTER 3"],
        ["Crouton's Memory", "Collect all of Crouton's pictures"],
        ["Crumbling Towers", "Defeat Kendra"],
        ["Curse Crusher", "Break every curse"],
        ["Dagoberg's Memory", "Collect all of Dagoberg's pictures"],
        ["Fifty Slots", "Collect 50 upgrade slots"],
        ["First Slot", "Gain your first upgrade slot"],
        ["Gangs All Back Together", "Release all 20 trapped spirits"],
        ["Grizz's Memory", "Collect all of Grizz's pictures"],
        ["Halfway There", "Release 10 trapped spirits"],
        ["Heavy Hitter", "Use your special attack 100 times"],
        ["Hexed Hero", "Break a curse"],
        ["Kendra's Memory", "Collect all of Kendra's pictures"],
        ["Mess Master", "Defeat 1000 enemies"],
        ["Mira's Memory", "Collect all of Mira's pictures"],
        ["Over the Edge", "Defeat the Moon Man"],
        ["Pebble's Memory", "Collect all of Pebble's pictures"],
        ["Perfect Battle", "Achieve an S+ rank in boss rush mode"],
        ["Pot Full of Spiders", "Defeat the Pot Full of Spiders"],
        ["Rainy Days", "Defeat Grief"],
        ["Ready for Battle", "Equip a special attack"],
        ["Right Back at Ya", "Unlock the broom-erang"],
        ["Risky Ride", "Defeat the Rail Rider"],
        ["Roy's Memory", "Collect all of Roy's pictures"],
        ["Rusty's Memory", "Collect all of Rusty's pictures"],
        ["Sealed Shut", "Enter the Vault"],
        ["Skully's Memory", "Collect all of Skully's pictures"],
        ["Solid Sweeper", "Achieve 10 S+ ranks in boss rush mode"],
        ["Split Vision", "Unlock the Spirit Split"],
        ["Sticky Business", "Defeat the Gunk Goliath"],
        ["Stocked Up", "Reach 100% completion"],
        ["Strange Shopkeeper", "Defeat the Imposter"],
        ["Ten Slots", "Collect 10 upgrade slots"],
        ["The Band's Back Together", "Find out where Skully went"],
        ["The Little Guys' Memory", "Collect all of the little guys' pictures"],
        ["Tiny and Tidy", "Defeat 100 enemies"],
        ["Top of the Tower", "Unlock Broom-Dash"],
        ["Trapped Spirit", "Release a trapped spirit"],
        ["Twenty-Five Slots", "Collect 25 upgrade slots"],
        ["Undefeated", "Achieve an S+ rank in every boss at every difficulty in boss rush mode"],
        ["Unscathed", "Defeat a boss without taking damage"],
        ["Very Bad Cat", "Get banished from the Palace"],
        ["Very Important Pluto", "Enter the V.I.P. room"],
        ["Wailer's Memory", "Collect all of Wailer's pictures"],
    ];

    assert.strictEqual(officialAchievements.length, 48, "sanity check on this test's own reference list");

    const dataPairs = game.achievements
        .map(a => [a.name, a.description])
        .sort((a, b) => a[0].localeCompare(b[0]));

    assert.deepStrictEqual(dataPairs, [...officialAchievements].sort((a, b) => a[0].localeCompare(b[0])));

});
