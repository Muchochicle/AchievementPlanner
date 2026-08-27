import { test } from "node:test";
import assert from "node:assert";

import { getPlannerData } from "../utils/plannerCatalog.js";

// backend/catalog/games/rime.json - 31 real achievements sourced from a
// live ISteamUserStats/GetSchemaForGame/v2 response for appid 493200
// (fetched through this app's own services/steamApi.js) - all 31 ship a
// real, official Steam description (RiME has no hidden achievements at
// all). difficulty/estimatedTime remain curatorial judgments, same
// convention as every other planner difficulty/time field in this
// catalog.
const rime = getPlannerData("rime");

test("getPlannerData('rime') returns real planner data with 31 curated achievements", () => {

    assert.ok(rime, "expected real planner data for rime");
    assert.ok(Array.isArray(rime.achievements));
    assert.strictEqual(rime.achievements.length, 31);

});

test("every RiME achievement has a unique id from 1 to 31 and a unique apiname", () => {

    const ids = rime.achievements.map(a => a.id);
    const apinames = rime.achievements.map(a => a.apiname);

    assert.deepStrictEqual([...ids].sort((a, b) => a - b), Array.from({ length: 31 }, (_, i) => i + 1));
    assert.strictEqual(new Set(ids).size, 31);
    assert.strictEqual(new Set(apinames).size, 31);

});

test("every RiME achievement has a valid difficulty (1-5), a positive estimatedTime, and non-empty name/description", () => {

    for (const achievement of rime.achievements) {

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

test("every one of the 31 official RiME achievement name+description pairs matches the live GetSchemaForGame response", () => {

    // Unlike every other game in this catalog, RiME has zero hidden
    // achievements - the full list is checked here in one pass.
    const officialAchievements = [
        ["Toyful Child", "Collect all the toys."],
        ["Full Wardrobe", "Collect all the outfits."],
        ["Lost Lullaby", "Complete the lost lullaby."],
        ["The Truth", "Peek through all the keyholes."],
        ["It's a process", "Reassemble all the emblems."],
        ["Sweet Memory", "Reunite with the white shade."],
        ["Don't say no", "Leave your comfort zone."],
        ["Unbearable", "From victim to victor."],
        ["Ask for a miracle", "Pay it forward."],
        ["No hope", "Hit your lowest point."],
        ["Letting go", "Accept things as they are."],
        ["Without a trace", "Respect the past."],
        ["Bite the dust", "Break the five strange statues."],
        ["Jars in the sand", "Break lots of jars."],
        ["Lighten up", "Lit many lights."],
        ["The path of light", "Bring light to the labyrinth of darkness."],
        ["Ancient treasure", "Try to wake up the lost Sentinel."],
        ["Happy family", "Reunite the family."],
        ["Reckless cannonball", "The higher, the funnier!"],
        ["That went too far", "Throw something as far as you can."],
        ["Careful steps", "Don't smash the eggs."],
        ["Dark and quiet", "Complete the labyrinth without making a sound."],
        ["What lies in the deep", "Find the shark."],
        ["Hold your breath", "Use only one bubble in the underwater cave."],
        ["Funeral flowers", "Find a nice resting place."],
        ["Good intentions", "Try to undo a mistake."],
        ["Blend-in with the surroundings", "Move undetected amongst the shades."],
        ["From the sky to the abyss", "Witness the resting place of the once mighty."],
        ["Wrong direction", "The other way was safer."],
        ["Patience", "Turning your back to the truth and persevering will lead you nowhere."],
        ["Racing", "Be faster than the Sentinels."]
    ];

    assert.strictEqual(officialAchievements.length, 31, "sanity check on this test's own reference list");

    const dataPairs = rime.achievements
        .map(a => [a.name, a.description])
        .sort((a, b) => a[0].localeCompare(b[0]));

    const expectedPairs = [...officialAchievements].sort((a, b) => a[0].localeCompare(b[0]));

    assert.deepStrictEqual(dataPairs, expectedPairs);

});
