import { test } from "node:test";
import assert from "node:assert";

import { getPlannerData } from "../utils/plannerCatalog.js";

// backend/catalog/games/towa-and-the-guardians-of-the-sacred-tree.json - 22 real achievements sourced
// from a live ISteamUserStats/GetSchemaForGame/v2 response for appid
// 1910090 (fetched through this app's own services/steamApi.js). None are
// hidden; every description is Steam's own real text.
// Hidden achievements have no Steam description; where present, their
// description here is researched from community 100% guides and cited in
// the frontend guide header. difficulty/estimatedTime/missable are curatorial.
const game = getPlannerData("towa-and-the-guardians-of-the-sacred-tree");

test("getPlannerData('towa-and-the-guardians-of-the-sacred-tree') returns real planner data with 22 curated achievements", () => {

    assert.ok(game, "expected real planner data for towa-and-the-guardians-of-the-sacred-tree");
    assert.ok(Array.isArray(game.achievements));
    assert.strictEqual(game.achievements.length, 22);

});

test("every Towa and the Guardians of the Sacred Tree achievement has a unique id from 1 to 22 and a unique apiname", () => {

    const ids = game.achievements.map(a => a.id);
    const apinames = game.achievements.map(a => a.apiname);

    assert.deepStrictEqual([...ids].sort((a, b) => a - b), Array.from({ length: 22 }, (_, i) => i + 1));
    assert.strictEqual(new Set(ids).size, 22);
    assert.strictEqual(new Set(apinames).size, 22);

});

test("every Towa and the Guardians of the Sacred Tree achievement has a valid difficulty (1-5), a positive estimatedTime, and non-empty name/description", () => {

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

test("every one of the 22 Towa and the Guardians of the Sacred Tree achievement name+description pairs matches the catalog data", () => {

    const officialAchievements = [
        ["Ahhh, Pure Bliss", "Go for a dip in a hot spring."],
        ["At Time's End", "See the game's ending."],
        ["Baby's First Blade", "Forge a sword."],
        ["Dawn of a New Age", "See the game's true ending."],
        ["Draw Your Weapon!", "Win against a Wanderer."],
        ["Fluffy Fury", "Finish a Journey with Bampuku as the Tsurugi."],
        ["For the Village", "Finish a Journey with Koro as the Tsurugi."],
        ["Fuel for the Fight", "Eat something while on a Journey."],
        ["Guardian", "Finish a Journey with Towa herself as the Tsurugi - a secret ninth companion route."],
        ["Here I Come!", "Finish a Journey with Mutsumi as the Tsurugi."],
        ["I've Got It!", "Fulfill a request in the village."],
        ["I've Missed You", "Unclear from community guides beyond its name - likely progressing a companion's Journey through all of its Ages toward a reunion story beat."],
        ["It's a Big One!", "Catch 10 fish."],
        ["Jump Rope Honcho", "Jump rope 100 times in a row."],
        ["Lady Towa's Personal Guard", "Finish a Journey with Rekka as the Tsurugi."],
        ["Master of the Forge", "Create a sword using Artisan Forge."],
        ["Natural-Born Scholar", "Finish a Journey with Akazu as the Tsurugi."],
        ["Off on an Adventure", "Finish a Journey with Origami as the Tsurugi."],
        ["Path to Moniya", "Finish a Journey with Nishiki as the Tsurugi."],
        ["Revenge Is Sweet", "Finish a Journey with Shigin as the Tsurugi."],
        ["The First Sacred Rite", "Defeat a Magatsu-hi for the first time."],
        ["The Real Fight Starts Here", "Likely defeat a Magatsu-hi again on a harder 'Back Route' of a Journey, unlocked after your first clear - community guides confirm the achievement exists but not its exact trigger."],
    ];

    assert.strictEqual(officialAchievements.length, 22, "sanity check on this test's own reference list");

    const dataPairs = game.achievements
        .map(a => [a.name, a.description])
        .sort((a, b) => a[0].localeCompare(b[0]));

    assert.deepStrictEqual(dataPairs, [...officialAchievements].sort((a, b) => a[0].localeCompare(b[0])));

});
