import { test } from "node:test";
import assert from "node:assert";

import { getPlannerData } from "../utils/plannerCatalog.js";

// backend/catalog/games/rivals-of-aether.json - 36 real achievements sourced
// from a live ISteamUserStats/GetSchemaForGame/v2 response for appid
// 383980 (fetched through this app's own services/steamApi.js).
// This game has no hidden achievements: all 36 ship a real, official
// Steam description, quoted verbatim below.
// difficulty/estimatedTime/missable remain curatorial judgments.
const game = getPlannerData("rivals-of-aether");

test("getPlannerData('rivals-of-aether') returns real planner data with 36 curated achievements", () => {

    assert.ok(game, "expected real planner data for rivals-of-aether");
    assert.ok(Array.isArray(game.achievements));
    assert.strictEqual(game.achievements.length, 36);

});

test("every Rivals of Aether achievement has a unique id from 1 to 36 and a unique apiname", () => {

    const ids = game.achievements.map(a => a.id);
    const apinames = game.achievements.map(a => a.apiname);

    assert.deepStrictEqual([...ids].sort((a, b) => a - b), Array.from({ length: 36 }, (_, i) => i + 1));
    assert.strictEqual(new Set(ids).size, 36);
    assert.strictEqual(new Set(apinames).size, 36);

});

test("every Rivals of Aether achievement has a valid difficulty (1-5), a positive estimatedTime, and non-empty name/description", () => {

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

test("every one of the 36 Rivals of Aether achievement name+description pairs matches the catalog data", () => {

    const officialAchievements = [
        ["A Fiery Tale", "Complete Zetterburn's Story Mode"],
        ["A Maypul Story", "Complete Maypul's Story Mode"],
        ["A Rocky Start", "Complete Kragg's Story Mode"],
        ["A Slippery Saga", "Complete Orcane's Story Mode"],
        ["A Smoldering Plot", "Complete Forsburn's Story Mode"],
        ["An Adverse Adventure", "Complete Wrastor's Story Mode"],
        ["Endless Creativity", "Download and play as a Workshop Character in any mode."],
        ["Into the Depths", "Complete Wave 15 of Abyss Mode"],
        ["Open the Gates", "Complete the Story Mode Epilogue"],
        ["The Apprentice Rival", "Complete the Beginner Tutorial Lessons"],
        ["The Ardent Rival", "Reach Level 10 with all 14 Abyss Characters"],
        ["The Boulder Barrage", "Get a KO with Kragg's rock shards."],
        ["The Calculated Strike", "Get a KO using Absa's cloud exploded Down Air."],
        ["The Deadly Catch", "Get a KO with Shovel Knight's Down Special"],
        ["The Deadly Deception", "Get a KO with Forsburn's Clone."],
        ["The Endless Abyss", "Complete Wave 45 of Abyss Mode"],
        ["The Flawless Fist", "Get a KO with Olympia's Down Air."],
        ["The Glamorous Showstopper", "Get a KO with Pomme's Up Special."],
        ["The Icy Plummet", "Get a KO with Etalus' Up Special."],
        ["The Light of Nibel", "Get a KO using Ori's Down Special"],
        ["The Lone Rival", "Defeat the Story Mode Epilogue without losing a stock"],
        ["The Master Rival", "Complete all Tutorial Lessons"],
        ["The Opulent Rival", "Earn 100,000 Aether Coins"],
        ["The Poisonous Storm", "Get a KO with Ranno's Up Special"],
        ["The Rebel's Strike", "Get a KO with the tip of Mollo's Down Special"],
        ["The Reckless Flame", "Get a KO with Zetterburn's Aerial Down Special"],
        ["The Relentless Seed", "Get a KO with Sylvanos' Neutral Special"],
        ["The Seasoned Rival", "Complete 300 Matches Locally or Online"],
        ["The Skeptical Rival", "Turn on Hitboxes in Practice Mode"],
        ["The Steampunk Sniper", "Get a KO with Elliana's Forward Special"],
        ["The Sweaty Smackdown", "Get a KO with Hodan's Parried Down Strong."],
        ["The Swift Rival", "Earn a Gold Medal on the 7 Story Modes"],
        ["The Terrible Tempest", "Get a KO with Wrastor's Neutral Special off the top."],
        ["The Unlimited Reach", "Get a KO with Clairen's Up Special"],
        ["The Vicious Vine", "Get a KO by using Maypul's tether into an aerial."],
        ["The Watery Trap", "Get a KO with Orcane's Up Special"],
    ];

    assert.strictEqual(officialAchievements.length, 36, "sanity check on this test's own reference list");

    const dataPairs = game.achievements
        .map(a => [a.name, a.description])
        .sort((a, b) => a[0].localeCompare(b[0]));

    assert.deepStrictEqual(dataPairs, [...officialAchievements].sort((a, b) => a[0].localeCompare(b[0])));

});
