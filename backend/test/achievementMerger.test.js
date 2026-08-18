import { test } from "node:test";
import assert from "node:assert";

import { mergeAchievements } from "../utils/achievementMerger.js";

test("matches an AP achievement to Steam by apiname and surfaces the player unlock", () => {

    const ap = [{ id: "ap1", apiname: "ACH_ONE", name: "One" }];

    const steam = [{
        apiname: "ACH_ONE",
        displayName: "One",
        description: "desc",
        hidden: false,
        icon: "icon.png",
        icongray: "icongray.png",
        globalPercent: 12.5
    }];

    const player = [{ apiname: "ACH_ONE", achieved: true, unlocktime: 1000 }];

    const result = mergeAchievements(ap, steam, player);

    assert.strictEqual(result.achievements.length, 1);

    const entry = result.achievements[0];

    assert.strictEqual(entry.matched, true);
    assert.strictEqual(entry.matchMethod, "apiname");
    assert.strictEqual(entry.apiname, "ACH_ONE");
    assert.deepStrictEqual(entry.steamUnlock, { achieved: true, unlocktime: 1000 });
    assert.strictEqual(entry.steam.displayName, "One");
    assert.strictEqual(entry.ap.id, "ap1");

});

test("falls back to a normalized name match when the AP achievement has no apiname", () => {

    const ap = [{ id: "ap1", apiname: null, name: "  The Big  Win " }];

    const steam = [{ apiname: "ACH_WIN", displayName: "the big win" }];

    const player = [];

    const result = mergeAchievements(ap, steam, player);

    const entry = result.achievements[0];

    assert.strictEqual(entry.matched, true);
    assert.strictEqual(entry.matchMethod, "name");
    assert.strictEqual(entry.apiname, "ACH_WIN");
    assert.strictEqual(entry.steamUnlock, null);

});

test("reports apiname-not-found when the AP apiname isn't in the Steam schema", () => {

    const ap = [{ id: "ap1", apiname: "ACH_MISSING", name: "Missing" }];

    const steam = [{ apiname: "ACH_OTHER", displayName: "Other" }];

    const result = mergeAchievements(ap, steam, []);

    const entry = result.achievements[0];

    assert.strictEqual(entry.matched, false);
    assert.strictEqual(entry.matchMethod, "apiname-not-found");
    assert.strictEqual(entry.apiname, "ACH_MISSING");
    assert.strictEqual(entry.steam, null);

});

test("reports none when neither apiname nor name matches anything in the Steam schema", () => {

    const ap = [{ id: "ap1", apiname: null, name: "Nonexistent" }];

    const steam = [{ apiname: "ACH_OTHER", displayName: "Other" }];

    const result = mergeAchievements(ap, steam, []);

    const entry = result.achievements[0];

    assert.strictEqual(entry.matched, false);
    assert.strictEqual(entry.matchMethod, "none");
    assert.strictEqual(entry.apiname, null);

});

test("treats a second AP achievement sharing an apiname as duplicate-apiname, even though the first claimed a real match", () => {

    const ap = [
        { id: "ap1", apiname: "ACH_DUP", name: "First" },
        { id: "ap2", apiname: "ACH_DUP", name: "Second" }
    ];

    const steam = [{ apiname: "ACH_DUP", displayName: "First" }];

    const result = mergeAchievements(ap, steam, []);

    assert.strictEqual(result.achievements[0].matched, true);
    assert.strictEqual(result.achievements[0].matchMethod, "apiname");

    const duplicate = result.achievements[1];

    assert.strictEqual(duplicate.matched, false);
    assert.strictEqual(duplicate.matchMethod, "duplicate-apiname");
    assert.strictEqual(duplicate.apiname, "ACH_DUP");
    assert.strictEqual(duplicate.ap.id, "ap2");

});

test("includes a Steam-only achievement that has no counterpart in the local catalog", () => {

    const ap = [];

    const steam = [{ apiname: "ACH_STEAM_ONLY", displayName: "Steam Only" }];

    const player = [{ apiname: "ACH_STEAM_ONLY", achieved: true, unlocktime: 500 }];

    const result = mergeAchievements(ap, steam, player);

    assert.strictEqual(result.achievements.length, 1);

    const entry = result.achievements[0];

    assert.strictEqual(entry.matched, false);
    assert.strictEqual(entry.apiname, "ACH_STEAM_ONLY");
    assert.strictEqual(entry.ap, null);
    assert.deepStrictEqual(entry.steamUnlock, { achieved: true, unlocktime: 500 });

});

test("keeps only the first occurrence when the Steam schema itself has a duplicate apiname", () => {

    const ap = [];

    const steam = [
        { apiname: "ACH_DUP_SCHEMA", displayName: "First Copy" },
        { apiname: "ACH_DUP_SCHEMA", displayName: "Second Copy" }
    ];

    const result = mergeAchievements(ap, steam, []);

    assert.strictEqual(result.achievements.length, 1);
    assert.strictEqual(result.achievements[0].steam.displayName, "First Copy");

});

test("computes steamDataAvailable/playerDataAvailable/matchedCount/apOnlyCount/steamOnlyCount for a combined scenario", () => {

    const ap = [
        { id: "ap1", apiname: "ACH_MATCHED", name: "Matched" },
        { id: "ap2", apiname: "ACH_NOT_FOUND", name: "Not Found" }
    ];

    const steam = [
        { apiname: "ACH_MATCHED", displayName: "Matched" },
        { apiname: "ACH_STEAM_ONLY", displayName: "Steam Only" }
    ];

    const player = [
        { apiname: "ACH_MATCHED", achieved: true, unlocktime: 1000 }
    ];

    const result = mergeAchievements(ap, steam, player);

    assert.strictEqual(result.steamDataAvailable, true);
    assert.strictEqual(result.playerDataAvailable, true);
    assert.strictEqual(result.matchedCount, 1);
    assert.strictEqual(result.apOnlyCount, 1);
    assert.strictEqual(result.steamOnlyCount, 1);
    assert.strictEqual(result.achievements.length, 3);

});

test("reports steamDataAvailable and playerDataAvailable as false when given empty input, without throwing on missing arguments", () => {

    const result = mergeAchievements(undefined, undefined, undefined);

    assert.strictEqual(result.steamDataAvailable, false);
    assert.strictEqual(result.playerDataAvailable, false);
    assert.strictEqual(result.matchedCount, 0);
    assert.strictEqual(result.apOnlyCount, 0);
    assert.strictEqual(result.steamOnlyCount, 0);
    assert.deepStrictEqual(result.achievements, []);

});
