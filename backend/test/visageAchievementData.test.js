import { test } from "node:test";
import assert from "node:assert";

import { getPlannerData } from "../utils/plannerCatalog.js";

// backend/catalog/games/visage.json - 27 real achievements sourced
// from a live ISteamUserStats/GetSchemaForGame/v2 response for appid
// 594330 (fetched through this app's own services/steamApi.js).
// Hidden achievements ship no Steam description; their description here is
// researched from community 100% guides and cited in the frontend guide
// header. difficulty/estimatedTime/missable are curatorial.
const game = getPlannerData("visage");

test("getPlannerData('visage') returns real planner data with 27 curated achievements", () => {

    assert.ok(game, "expected real planner data for visage");
    assert.ok(Array.isArray(game.achievements));
    assert.strictEqual(game.achievements.length, 27);

});

test("every Visage achievement has a unique id from 1 to 27 and a unique apiname", () => {

    const ids = game.achievements.map(a => a.id);
    const apinames = game.achievements.map(a => a.apiname);

    assert.deepStrictEqual([...ids].sort((a, b) => a - b), Array.from({ length: 27 }, (_, i) => i + 1));
    assert.strictEqual(new Set(ids).size, 27);
    assert.strictEqual(new Set(apinames).size, 27);

});

test("every Visage achievement has a valid difficulty (1-5), a positive estimatedTime, and non-empty name/description", () => {

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

test("every one of the 27 Visage achievement name+description pairs matches the catalog data", () => {

    const officialAchievements = [
        ["10 on the 10th", "Find all the pages from the appreciation book."],
        ["Chapter: Dolores", "Complete Dolores' chapter."],
        ["Chapter: Lucy", "Complete Lucy's chapter."],
        ["Chapter: Rakan", "Complete Rakan's chapter."],
        ["Dance, dance", "Find the hidden Room 302 (a rhythm-game easter egg)."],
        ["Dwayne's memento", "Find one VHS tape."],
        ["Dwayne's memento master", "Find all VHS tape."],
        ["Easy way out", "Use the revolver."],
        ["Family reunion", "Complete the family reunion ending."],
        ["First reaction", "Try to leave through the house's front door early on."],
        ["Gearing up!", "Find the hidden Shotgun."],
        ["George's memento", "Find one of George's audio cassette."],
        ["George's memento master", "Find all George's audio cassettes."],
        ["Gotcha, you little...", "You warped Bernard the Alien back to planet Ceiphe."],
        ["Hot chocolate", "Drink the hot chocolate."],
        ["Matryoshka doll", "Find a Matryoshka doll."],
        ["Matryoshka dolls master", "Find all Matryoshka dolls."],
        ["Mirror mask", "Find one piece of the mirror mask."],
        ["Mirror mask master", "Find all pieces of the mirror mask."],
        ["Novice electrician", "Replace a light bulb."],
        ["Psychological evaluation", "Find Rakan's psychological evaluation tape."],
        ["Smile!", "Find the smiley face sticker."],
        ["Special gift", "Find Johnny's gift."],
        ["Special recipe", "Attempt to use the kitchen microwave."],
        ["The Neighbors", "Find one of The Neighbors' page."],
        ["The Neighbors master", "Find all The Neighbors' pages."],
        ["Void", "Complete the void ending."],
    ];

    assert.strictEqual(officialAchievements.length, 27, "sanity check on this test's own reference list");

    const dataPairs = game.achievements
        .map(a => [a.name, a.description])
        .sort((a, b) => a[0].localeCompare(b[0]));

    assert.deepStrictEqual(dataPairs, [...officialAchievements].sort((a, b) => a[0].localeCompare(b[0])));

});
