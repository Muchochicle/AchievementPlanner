import { test } from "node:test";
import assert from "node:assert";

import { getPlannerData } from "../utils/plannerCatalog.js";

// backend/catalog/games/conan-exiles.json - 36 real achievements sourced
// from a live ISteamUserStats/GetSchemaForGame/v2 response for appid
// 440900 (fetched through this app's own services/steamApi.js). None are
// hidden; every description is Steam's own real text.
// difficulty/estimatedTime/missable remain curatorial judgments.
const game = getPlannerData("conan-exiles");

test("getPlannerData('conan-exiles') returns real planner data with 36 curated achievements", () => {

    assert.ok(game, "expected real planner data for conan-exiles");
    assert.ok(Array.isArray(game.achievements));
    assert.strictEqual(game.achievements.length, 36);

});

test("every Conan Exiles achievement has a unique id from 1 to 36 and a unique apiname", () => {

    const ids = game.achievements.map(a => a.id);
    const apinames = game.achievements.map(a => a.apiname);

    assert.deepStrictEqual([...ids].sort((a, b) => a - b), Array.from({ length: 36 }, (_, i) => i + 1));
    assert.strictEqual(new Set(ids).size, 36);
    assert.strictEqual(new Set(apinames).size, 36);

});

test("every Conan Exiles achievement has a valid difficulty (1-5), a positive estimatedTime, and non-empty name/description", () => {

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

test("every one of the 36 Conan Exiles achievement name+description pairs matches the catalog data", () => {

    const officialAchievements = [
        ["…A Champion…", "Reach level 60"],
        ["…A Reaver…", "Reach level 30"],
        ["…A Scavenger…", "Reach level 20"],
        ["…A Slayer…", "Reach level 40"],
        ["…A Warrior…", "Reach level 50"],
        ["Beyond the Wall of Sleep", "Enter the Maelstrom"],
        ["By this Axe I Rule!", "Get a Dedicated Weapon"],
        ["Dying Embers", "Reach the volcano"],
        ["From Beyond", "Memorize Seven Sigils at Once"],
        ["From What Hell Have You Crawled?", "Defeat the Giant Spider"],
        ["Gods of the North", "Defeat Hrungnir of the Frost"],
        ["Hither Came the Exile…", "Reach level 10"],
        ["In the Vault", "Explore a Vault"],
        ["Iron Shadows in the Moon", "Reach the skies above the Exiled Lands"],
        ["It is the King, or his ghost!", "Defeat the King Beneath"],
        ["Memory", "Memorize a Sigil"],
        ["O Sleeper Awake", "Sleep on a bed or bedroll"],
        ["The Cliffs Reel", "Fall for 3 seconds without dying"],
        ["The Devil in Iron", "Defeat the Kinscourge"],
        ["The Gem in the Tower", "Explore the Isle of Siptah"],
        ["The Gilt, The Craft and the Lie", "Place a thrall crafter in a crafting station"],
        ["The God in the Bowl", "Use a religious altar"],
        ["The Haunter of the Dark", "Reach the Tower"],
        ["The Haunter of the Pits", "Defeat the Sewer Abomination"],
        ["The Hour of the Dragon", "Defeat the Undead Dragon"],
        ["The Other Gods", "Draw Forth the Most Powerful Surge"],
        ["The Outsider", "Defeat a Surge Summons"],
        ["The Road of Kings", "Complete the first chapter of the Journey"],
        ["The Scarlet Citadel", "Create your first building"],
        ["The Shadow Out of Time", "Craft an Item Using Eldarium"],
        ["The Silver Key", "Obtain ?????"],
        ["The Snout in the Dark", "Defeat the Giant Crocodile"],
        ["The Temple", "Visit a Leyshrine"],
        ["The Tower of the Elephant", "Kill something by standing on its head"],
        ["What do I know of Cultured Ways?", "Put an enemy in the Wheel of Pain"],
        ["Wolves Beyond the Border", "Reach the highlands"],
    ];

    assert.strictEqual(officialAchievements.length, 36, "sanity check on this test's own reference list");

    const dataPairs = game.achievements
        .map(a => [a.name, a.description])
        .sort((a, b) => a[0].localeCompare(b[0]));

    assert.deepStrictEqual(dataPairs, [...officialAchievements].sort((a, b) => a[0].localeCompare(b[0])));

});
