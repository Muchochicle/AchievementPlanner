import { test } from "node:test";
import assert from "node:assert";

import { getPlannerData } from "../utils/plannerCatalog.js";

// backend/catalog/games/hellblade-senuas-sacrifice.json - 14 real achievements sourced
// from a live ISteamUserStats/GetSchemaForGame/v2 response for appid
// 414340 (fetched through this app's own services/steamApi.js).
// Hidden achievements ship no Steam description; their description here is
// researched from community 100% guides and cited in the frontend guide
// header. difficulty/estimatedTime/missable are curatorial.
const game = getPlannerData("hellblade-senuas-sacrifice");

test("getPlannerData('hellblade-senuas-sacrifice') returns real planner data with 14 curated achievements", () => {

    assert.ok(game, "expected real planner data for hellblade-senuas-sacrifice");
    assert.ok(Array.isArray(game.achievements));
    assert.strictEqual(game.achievements.length, 14);

});

test("every Hellblade: Senua's Sacrifice achievement has a unique id from 1 to 14 and a unique apiname", () => {

    const ids = game.achievements.map(a => a.id);
    const apinames = game.achievements.map(a => a.apiname);

    assert.deepStrictEqual([...ids].sort((a, b) => a - b), Array.from({ length: 14 }, (_, i) => i + 1));
    assert.strictEqual(new Set(ids).size, 14);
    assert.strictEqual(new Set(apinames).size, 14);

});

test("every Hellblade: Senua's Sacrifice achievement has a valid difficulty (1-5), a positive estimatedTime, and non-empty name/description", () => {

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

test("every one of the 14 Hellblade: Senua's Sacrifice achievement name+description pairs matches the catalog data", () => {

    const officialAchievements = [
        ["Cure For The Plague", "Story progress marker - complete the plague-swamp sequence, described here spoiler-free."],
        ["Different Perspectives", "Story progress marker - complete the Tower's perspective puzzles, described here spoiler-free."],
        ["Escaped", "Story progress marker - escape the labyrinth, described here spoiler-free."],
        ["Extinguished", "Defeat Surtr's trial - a story boss sequence, described here spoiler-free."],
        ["Gram Released", "Story progress marker - obtain the sword Gram, described here spoiler-free."],
        ["Into the Mountain", "Story progress marker - reach Helheim, described here spoiler-free."],
        ["Master of Illusion", "Defeat Valravn's trial - a story boss sequence, described here spoiler-free."],
        ["Source of the Darkness", "Story progress marker - reached at a specific point in the journey, described here spoiler-free."],
        ["Stories From the North", "Find and study every Lorestone scattered through the journey."],
        ["Tamed the Beast", "Story progress marker - complete the Fenrir sequence, described here spoiler-free."],
        ["The Fight Begins", "Story progress marker - begin Senua's journey at the gate to Helheim, described here spoiler-free."],
        ["The Final Battle", "Story progress marker - reach the final battle, described here spoiler-free."],
        ["Trust Your Senses", "Story progress marker - complete the darkness sequence, described here spoiler-free."],
        ["Warrior", "Story progress marker - survive the Sea of Corpses, described here spoiler-free."],
    ];

    assert.strictEqual(officialAchievements.length, 14, "sanity check on this test's own reference list");

    const dataPairs = game.achievements
        .map(a => [a.name, a.description])
        .sort((a, b) => a[0].localeCompare(b[0]));

    assert.deepStrictEqual(dataPairs, [...officialAchievements].sort((a, b) => a[0].localeCompare(b[0])));

});
