import { test } from "node:test";
import assert from "node:assert";

import { mapSteamAchievements, mapPlayerAchievements } from "../utils/steamAchievementMapper.js";

test("mapSteamAchievements reports unavailable for null, undefined, or an empty schema", () => {

    for (const input of [null, undefined, []]) {

        assert.deepStrictEqual(mapSteamAchievements(input, []), { available: false, achievements: [] });

    }

});

test("mapSteamAchievements maps each schema achievement and merges in its global unlock percent by name", () => {

    const result = mapSteamAchievements(
        [
            { name: "ACH_A", displayName: "Achievement A", description: "desc A", hidden: 0, icon: "a.jpg", icongray: "a_gray.jpg" },
            { name: "ACH_B", displayName: "Achievement B", hidden: 1, icon: "b.jpg", icongray: "b_gray.jpg" }
        ],
        [
            { name: "ACH_A", percent: "12.5" },
            { name: "ACH_B", percent: 3.2 }
        ]
    );

    assert.strictEqual(result.available, true);
    assert.strictEqual(result.achievements.length, 2);

    assert.deepStrictEqual(result.achievements[0], {
        apiname: "ACH_A",
        displayName: "Achievement A",
        description: "desc A",
        hidden: false,
        icon: "a.jpg",
        icongray: "a_gray.jpg",
        globalPercent: 12.5
    });

    assert.deepStrictEqual(result.achievements[1], {
        apiname: "ACH_B",
        displayName: "Achievement B",
        description: null,
        hidden: true,
        icon: "b.jpg",
        icongray: "b_gray.jpg",
        globalPercent: 3.2
    });

});

test("mapSteamAchievements falls back displayName to the raw apiname when displayName is missing", () => {

    const result = mapSteamAchievements([{ name: "ACH_NO_DISPLAY_NAME" }], []);

    assert.strictEqual(result.achievements[0].displayName, "ACH_NO_DISPLAY_NAME");

});

test("mapSteamAchievements sets globalPercent to null when the achievement has no entry in globalPercentages", () => {

    const result = mapSteamAchievements([{ name: "ACH_UNKNOWN" }], [{ name: "SOME_OTHER_ACH", percent: 50 }]);

    assert.strictEqual(result.achievements[0].globalPercent, null);

});

test("mapSteamAchievements tolerates a missing/undefined globalPercentages array entirely", () => {

    const result = mapSteamAchievements([{ name: "ACH_A" }], undefined);

    assert.strictEqual(result.achievements[0].globalPercent, null);

});

test("mapSteamAchievements normalizes a non-numeric percent to null rather than NaN", () => {

    const result = mapSteamAchievements(
        [{ name: "ACH_A" }],
        [{ name: "ACH_A", percent: "not-a-number" }]
    );

    assert.strictEqual(result.achievements[0].globalPercent, null);

});

test("mapPlayerAchievements reports unavailable for null, undefined, or an empty list", () => {

    for (const input of [null, undefined, []]) {

        assert.deepStrictEqual(mapPlayerAchievements(input), { available: false, achievements: [] });

    }

});

test("mapPlayerAchievements maps achieved/unlocktime, treating unlocktime<=0 as never unlocked (null)", () => {

    const result = mapPlayerAchievements([
        { apiname: "ACH_A", achieved: 1, unlocktime: 1700000000 },
        { apiname: "ACH_B", achieved: 0, unlocktime: 0 },
        { apiname: "ACH_C", achieved: 1, unlocktime: -1 }
    ]);

    assert.deepStrictEqual(result.achievements, [
        { apiname: "ACH_A", achieved: true, unlocktime: 1700000000 },
        { apiname: "ACH_B", achieved: false, unlocktime: null },
        { apiname: "ACH_C", achieved: true, unlocktime: null }
    ]);

});

test("mapPlayerAchievements coerces truthy/falsy 'achieved' values to a real boolean", () => {

    const result = mapPlayerAchievements([
        { apiname: "ACH_TRUE", achieved: true, unlocktime: 1 },
        { apiname: "ACH_FALSE", achieved: false, unlocktime: 0 }
    ]);

    assert.strictEqual(result.achievements[0].achieved, true);
    assert.strictEqual(result.achievements[1].achieved, false);
    assert.strictEqual(typeof result.achievements[0].achieved, "boolean");

});
