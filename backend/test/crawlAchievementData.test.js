import { test } from "node:test";
import assert from "node:assert";

import { getPlannerData } from "../utils/plannerCatalog.js";

// backend/catalog/games/crawl.json - 45 real achievements sourced
// from a live ISteamUserStats/GetSchemaForGame/v2 response for appid
// 293780 (fetched through this app's own services/steamApi.js). None are
// hidden; every description is Steam's own real text.
// difficulty/estimatedTime/missable remain curatorial judgments.
const game = getPlannerData("crawl");

test("getPlannerData('crawl') returns real planner data with 45 curated achievements", () => {

    assert.ok(game, "expected real planner data for crawl");
    assert.ok(Array.isArray(game.achievements));
    assert.strictEqual(game.achievements.length, 45);

});

test("every Crawl achievement has a unique id from 1 to 45 and a unique apiname", () => {

    const ids = game.achievements.map(a => a.id);
    const apinames = game.achievements.map(a => a.apiname);

    assert.deepStrictEqual([...ids].sort((a, b) => a - b), Array.from({ length: 45 }, (_, i) => i + 1));
    assert.strictEqual(new Set(ids).size, 45);
    assert.strictEqual(new Set(apinames).size, 45);

});

test("every Crawl achievement has a valid difficulty (1-5), a positive estimatedTime, and non-empty name/description", () => {

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

test("every one of the 45 Crawl achievement name+description pairs matches the catalog data", () => {

    const officialAchievements = [
        ["A Bloody Conquest", "Defeat a boss while bleeding for the entire fight"],
        ["A Death Feud", "Regain your humanity 50 times"],
        ["A Duel of Archers", "Win a 1 on 1 battle against the hero, while both wielding bows"],
        ["A Healthy Victory", "Defeat Ghidraak with more health than when you started"],
        ["A Piercing Bolt", "Kill 3 monsters with a single crossbow bolt"],
        ["A Taste For Revenge", "Regain your humanity 10 times"],
        ["A Vengeance Insatiable", "Regain your humanity 100 times"],
        ["Adequately Equipped", "Discover all weapons in the vault"],
        ["Altered Altered Beast", "Get two tombstone powerups on one monster"],
        ["Brain Haemorrhage", "Damage Kourok's exposed brain with a bomb creature"],
        ["Brute Force Alone", "Defeat Kourok without hitting any bombs into him"],
        ["Burrowing Terror", "Pass the Spikewurm challenge"],
        ["Dragon's Bane", "Kill a total of 666 monsters"],
        ["Gholoth Shunned", "Taunt Gholoth and win against 3 hard bots"],
        ["Glub Blasphemed", "Taunt Glub and win against 3 hard bots"],
        ["Goliath and Goliath", "Slay a giant monster with a boulder"],
        ["Gor Disavowed", "Taunt Gor and win against 3 hard bots"],
        ["Infinite Horror", "Achieve the victory screen title \"Infinite Horror\""],
        ["Lloyd and Goliath", "Slay a giant monster with a pebble"],
        ["Manic Greed", "Clear out a store by buying every item"],
        ["Pickpocket", "As a gnome, mine a total of 10 gold from heroes"],
        ["Qaahl Forgotten", "Taunt Qaahl and win against 3 hard bots"],
        ["Reanimator", "Pass the Necromancer challenge"],
        ["S'hrim Denied", "Taunt S'hrim and win against 3 hard bots"],
        ["Stone Awoken", "Pass the Gargoyle challenge"],
        ["The Acclaimed Collector", "Discover 50% of entries in the vault"],
        ["The Beast Beheaded", "Defeat Ghidraak, playing against 3 hard bots"],
        ["The Beastmaster", "Pass 10 vault challenges"],
        ["The Butcher", "Slay all other heroes in an intro battle with 3 hard bots"],
        ["The Demontamer", "Pass all the vault challenges"],
        ["The Gamekeeper", "Pass a vault challenge"],
        ["The Gilded Baron", "Spend a total of 10000 gold"],
        ["The Lonely Miser", "Spend a total of 1000 gold"],
        ["The Novice Scholar", "Discover 25% of entries in the vault"],
        ["The Renowned Antiquarian", "Discover all entries in the vault"],
        ["The Sickly Champion", "Defeat a boss while nauseated"],
        ["The Stone Shattered", "Defeat Tezekcal, playing against 3 hard bots"],
        ["The Tentacle Severed", "Defeat Kourok, playing against 3 hard bots"],
        ["The Wealthy Merchant", "Spend a total of 5000 gold"],
        ["Theatrical", "Win an intro battle without ever moving"],
        ["True Escape", "Win a game without ever dying"],
        ["Unceasing Lethargy", "Min your hero's agility"],
        ["Unfettered Strength", "Max out your hero's strength"],
        ["Unstoppable Force", "Get a kill streak of 12 against 3 hard bots"],
        ["Vermin's Scourge", "Kill a total of 100 monsters"],
    ];

    assert.strictEqual(officialAchievements.length, 45, "sanity check on this test's own reference list");

    const dataPairs = game.achievements
        .map(a => [a.name, a.description])
        .sort((a, b) => a[0].localeCompare(b[0]));

    assert.deepStrictEqual(dataPairs, [...officialAchievements].sort((a, b) => a[0].localeCompare(b[0])));

});
