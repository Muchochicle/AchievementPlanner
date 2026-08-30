import { test } from "node:test";
import assert from "node:assert";

import { getPlannerData } from "../utils/plannerCatalog.js";

// backend/catalog/games/dark-souls-remastered.json - 41 real achievements sourced
// from a live ISteamUserStats/GetSchemaForGame/v2 response for appid
// 570940 (fetched through this app's own services/steamApi.js). None are
// hidden; every description is Steam's own real text.
// difficulty/estimatedTime/missable remain curatorial judgments.
const game = getPlannerData("dark-souls-remastered");

test("getPlannerData('dark-souls-remastered') returns real planner data with 41 curated achievements", () => {

    assert.ok(game, "expected real planner data for dark-souls-remastered");
    assert.ok(Array.isArray(game.achievements));
    assert.strictEqual(game.achievements.length, 41);

});

test("every DARK SOULS: REMASTERED achievement has a unique id from 1 to 41 and a unique apiname", () => {

    const ids = game.achievements.map(a => a.id);
    const apinames = game.achievements.map(a => a.apiname);

    assert.deepStrictEqual([...ids].sort((a, b) => a - b), Array.from({ length: 41 }, (_, i) => i + 1));
    assert.strictEqual(new Set(ids).size, 41);
    assert.strictEqual(new Set(apinames).size, 41);

});

test("every DARK SOULS: REMASTERED achievement has a valid difficulty (1-5), a positive estimatedTime, and non-empty name/description", () => {

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

test("every one of the 41 DARK SOULS: REMASTERED achievement name+description pairs matches the catalog data", () => {

    const officialAchievements = [
        ["Art of Abysswalking", "Acquire the Art of Abysswalking."],
        ["Bond of a Pyromancer", "Acquire all pyromancies."],
        ["Chaos Weapon", "Acquire best weapon through chaos reinforcement."],
        ["Covenant: Blade of the Darkmoon", "Discover Blade of the Darkmoon covenant."],
        ["Covenant: Chaos Servant", "Discover Chaos Servant covenant."],
        ["Covenant: Darkwraith", "Discover Darkwraith covenant."],
        ["Covenant: Forest Hunter", "Discover Forest Hunter covenant."],
        ["Covenant: Gravelord Servant", "Discover Gravelord Servant covenant."],
        ["Covenant: Path of the Dragon", "Discover Path of the Dragon covenant."],
        ["Covenant: Princess's Guard", "Discover Princess's Guard covenant."],
        ["Covenant: Warrior of Sunlight", "Discover Warrior of Sunlight covenant."],
        ["Covenant: Way of White", "Discover Way of White covenant."],
        ["Crystal Weapon", "Acquire best weapon through crystal reinforcement."],
        ["Dark Lord", "Reach \"The Dark Lord\" ending."],
        ["Defeat Bed of Chaos", "Defeat the Soul Lord Bed of Chaos."],
        ["Defeat Crossbreed Priscilla", "Defeat Crossbreed Priscilla, the Lifehunter"],
        ["Defeat Gravelord Nito", "Defeat the Soul Lord Gravelord Nito."],
        ["Defeat Seath the Scaleless", "Defeat Seath the Scaleless, inheritors of souls."],
        ["Defeat the Dark Sun Gwyndolin", "Defeat Dark Sun Gwyndolin, the Darkmoon God."],
        ["Defeat the Four Kings", "Defeat the Four Kings, inheritors of souls."],
        ["Divine Weapon", "Acquire best weapon through divine reinforcement."],
        ["Enchanted Weapon", "Acquire best weapon through enchanted reinforcement."],
        ["Enkindle", "Light bonfire flame."],
        ["Estus Flask", "Acquire Estus Flask."],
        ["Fire Weapon", "Acquire best weapon through fire reinforcement."],
        ["Knight's Honor", "Acquire all rare weapons."],
        ["Lightning Weapon", "Acquire best weapon through lightning reinforcement."],
        ["Lordvessel", "Acquire the Lordvessel."],
        ["Magic Weapon", "Acquire best weapon through magic reinforcement."],
        ["Occult Weapon", "Acquire best weapon through occult reinforcement."],
        ["Prayer of a Maiden", "Acquire all miracles."],
        ["Raw Weapon", "Acquire best weapon through raw reinforcement."],
        ["Reach Anor Londo", "Arrive in Anor Londo."],
        ["Reach Lordran", "Arrive in Lordran."],
        ["Ring the Bell (Quelaag's Domain)", "Ring Bell of Awakening in Quelaag's domain."],
        ["Ring the Bell (Undead Church)", "Ring Bell of Awakening at Undead Church."],
        ["Rite of Kindling", "Acquire the Rite of Kindling."],
        ["Strongest Weapon", "Acquire best weapon through standard reinforcement."],
        ["The Dark Soul", "All achievements completed. Congratulations!"],
        ["To Link the Fire", "Reach \"To Link the Fire\" ending."],
        ["Wisdom of a Sage", "Acquire all sorceries."],
    ];

    assert.strictEqual(officialAchievements.length, 41, "sanity check on this test's own reference list");

    const dataPairs = game.achievements
        .map(a => [a.name, a.description])
        .sort((a, b) => a[0].localeCompare(b[0]));

    assert.deepStrictEqual(dataPairs, [...officialAchievements].sort((a, b) => a[0].localeCompare(b[0])));

});
