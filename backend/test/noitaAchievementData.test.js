import { test } from "node:test";
import assert from "node:assert";

import { getPlannerData } from "../utils/plannerCatalog.js";

// backend/catalog/games/noita.json - 14 real achievements sourced
// from a live ISteamUserStats/GetSchemaForGame/v2 response for appid
// 881100 (fetched through this app's own services/steamApi.js).
// Hidden achievements have no Steam description; where present, their
// description here is researched from community 100% guides and cited in
// the frontend guide header. difficulty/estimatedTime/missable are curatorial.
const game = getPlannerData("noita");

test("getPlannerData('noita') returns real planner data with 14 curated achievements", () => {

    assert.ok(game, "expected real planner data for noita");
    assert.ok(Array.isArray(game.achievements));
    assert.strictEqual(game.achievements.length, 14);

});

test("every Noita achievement has a unique id from 1 to 14 and a unique apiname", () => {

    const ids = game.achievements.map(a => a.id);
    const apinames = game.achievements.map(a => a.apiname);

    assert.deepStrictEqual([...ids].sort((a, b) => a - b), Array.from({ length: 14 }, (_, i) => i + 1));
    assert.strictEqual(new Set(ids).size, 14);
    assert.strictEqual(new Set(apinames).size, 14);

});

test("every Noita achievement has a valid difficulty (1-5), a positive estimatedTime, and non-empty name/description", () => {

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

test("every one of the 14 Noita achievement name+description pairs matches the catalog data", () => {

    const officialAchievements = [
        ["100% Enemy Progress", "Reach 100% enemy discovery (encounter every enemy at least once)."],
        ["100% Perk Progress", "Reach 100% perk discovery (see every perk at least once)."],
        ["100% Spell Progress", "Reach 100% spell discovery (find every spell at least once)."],
        ["Gathered All The Knowledge", "Discover every Orb of True Knowledge at least once."],
        ["Reached Coal Pits", "Reach the Coal Pits biome."],
        ["Reached Hiisi Base", "Reach the Hiisi Base biome."],
        ["Reached Snowy Depths", "Reach the Snowy Depths biome."],
        ["Reached Temple of the Art", "Reach the Temple of the Art biome."],
        ["Reached The Vault", "Reach The Vault biome."],
        ["Reached Underground Jungle", "Reach the Underground Jungle biome."],
        ["The Gods Are Afraid", "Deal over 1,000,000 damage in a single hit ('The Gods Are Afraid')."],
        ["The Gods Are Enraged", "Anger the gods, then kill three of the Stevari guardians that spawn in the Holy Mountains ('The Gods Are Enraged')."],
        ["The Gods Are Impressed", "Fire a spell with an infinite duration ('The Gods Are Impressed')."],
        ["Victory", "Victory"],
    ];

    assert.strictEqual(officialAchievements.length, 14, "sanity check on this test's own reference list");

    const dataPairs = game.achievements
        .map(a => [a.name, a.description])
        .sort((a, b) => a[0].localeCompare(b[0]));

    assert.deepStrictEqual(dataPairs, [...officialAchievements].sort((a, b) => a[0].localeCompare(b[0])));

});
