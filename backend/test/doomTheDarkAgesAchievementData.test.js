import { test } from "node:test";
import assert from "node:assert";

import { getPlannerData } from "../utils/plannerCatalog.js";

// backend/catalog/games/doom-the-dark-ages.json - 38 real achievements sourced
// from a live ISteamUserStats/GetSchemaForGame/v2 response for appid
// 3017860 (fetched through this app's own services/steamApi.js). None are
// hidden; every description is Steam's own real text.
// Hidden achievements have no Steam description; where present, their
// description here is researched from community 100% guides and cited in
// the frontend guide header. difficulty/estimatedTime/missable are curatorial.
const game = getPlannerData("doom-the-dark-ages");

test("getPlannerData('doom-the-dark-ages') returns real planner data with 38 curated achievements", () => {

    assert.ok(game, "expected real planner data for doom-the-dark-ages");
    assert.ok(Array.isArray(game.achievements));
    assert.strictEqual(game.achievements.length, 38);

});

test("every DOOM: The Dark Ages achievement has a unique id from 1 to 38 and a unique apiname", () => {

    const ids = game.achievements.map(a => a.id);
    const apinames = game.achievements.map(a => a.apiname);

    assert.deepStrictEqual([...ids].sort((a, b) => a - b), Array.from({ length: 38 }, (_, i) => i + 1));
    assert.strictEqual(new Set(ids).size, 38);
    assert.strictEqual(new Set(apinames).size, 38);

});

test("every DOOM: The Dark Ages achievement has a valid difficulty (1-5), a positive estimatedTime, and non-empty name/description", () => {

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

test("every one of the 38 DOOM: The Dark Ages achievement name+description pairs matches the catalog data", () => {

    const officialAchievements = [
        ["A Dark Beginning", "Complete the campaign chapter 'Village of Khalim'."],
        ["Agaddon Champion Down!", "Defeat the Agaddon Hunter at the end of the 'Abyssal Forest' chapter."],
        ["Ancestral Blessing", "Acquire your first Shield Rune (the Ground Fissure rune) at the end of the 'Ancestral Forge' chapter."],
        ["Archeologist", "Completely reassemble all Relics in a single save slot."],
        ["Argent Return", "Complete the campaign chapter 'Resurrection'."],
        ["Berserker", "Acquire all Shield Base, Shield Rune, and Melee Weapon upgrades."],
        ["Bringing the House Down", "Complete the campaign chapter 'The Holy City of Aratum'."],
        ["Challenge Completed", "Complete all Mission Challenges in the campaign."],
        ["Essential Ammo", "Acquire all Demonic Essence ammo upgrades."],
        ["Essential Armor", "Acquire all Demonic Essence armor upgrades."],
        ["Essential Health", "Acquire all Demonic Essence Health upgrades."],
        ["Essential Upgrade", "Acquire your first Demonic Essence upgrade."],
        ["Essentially Unstoppable", "Acquire all Demonic Essence upgrades."],
        ["Fully Loaded", "Complete the Mastery Challenge for a single weapon."],
        ["Game Complete", "Complete the campaign on any difficulty."],
        ["Gimme That", "Pick up the Ballistic Force Crossbow during the 'Spire of Nerathul' chapter."],
        ["Gunpletionist", "Complete the Mastery Challenge for all weapons."],
        ["Hello, Old Friend", "Acquire the '93 Shotgun."],
        ["Hellwalker", "Acquire the Praetor Suit."],
        ["Jailbreak", "Complete the campaign chapter 'Spire of Nerathul'."],
        ["Komodo Champion Down!", "Defeat the Komodo demon boss during the 'Spire of Nerathul' chapter."],
        ["Lore Nerd", "Acquire all Codex Lore pages."],
        ["Melee Expert", "Acquire all melee weapon upgrades."],
        ["Powerful Investment", "Fully upgrade every upgrade for a single Shield Rune, using materials from Sentinel Shrines."],
        ["Revelations Complete", "Complete the Revelations Campaign."],
        ["Shield Adept", "Acquire all shield upgrades under the base category."],
        ["Some Assembly Required", "Completely reassemble a five-piece Relic."],
        ["Spear Adept", "Acquire all upgrades for a single Chain Spear ability."],
        ["Spear Mastery", "Acquire all Chain Spear upgrades in a single save slot."],
        ["Supersized Brawl", "Complete the campaign chapter 'Barrier Core'."],
        ["The Only Thing They Fear", "Defeat The Old One and the Enhanced Ahzrak in the campaign's final boss fight."],
        ["Time is Money", "Complete a Ritual of Power."],
        ["Time to Hunt", "Acquire the Chain Spear."],
        ["Too Angry to Die", "Complete the campaign chapter 'Harbor of Souls'."],
        ["Toy Collector", "Acquire all Collectible demon toys."],
        ["Upgraded", "Acquire your first weapon upgrade."],
        ["Vagary Down!", "Defeat the Vagary Champion at the end of the 'Sentinel Barracks' chapter."],
        ["Xal’Goroth Defeated", "Defeat Xal’Goroth the Imprisoned."],
    ];

    assert.strictEqual(officialAchievements.length, 38, "sanity check on this test's own reference list");

    const dataPairs = game.achievements
        .map(a => [a.name, a.description])
        .sort((a, b) => a[0].localeCompare(b[0]));

    assert.deepStrictEqual(dataPairs, [...officialAchievements].sort((a, b) => a[0].localeCompare(b[0])));

});
