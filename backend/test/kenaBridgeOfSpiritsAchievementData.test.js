import { test } from "node:test";
import assert from "node:assert";

import { getPlannerData } from "../utils/plannerCatalog.js";

// backend/catalog/games/kena-bridge-of-spirits.json - 41 real achievements sourced
// from a live ISteamUserStats/GetSchemaForGame/v2 response for appid
// 1954200 (fetched through this app's own services/steamApi.js).
// Hidden achievements ship no Steam description; their description here is
// researched from community 100% guides and cited in the frontend guide
// header. difficulty/estimatedTime/missable are curatorial.
const game = getPlannerData("kena-bridge-of-spirits");

test("getPlannerData('kena-bridge-of-spirits') returns real planner data with 41 curated achievements", () => {

    assert.ok(game, "expected real planner data for kena-bridge-of-spirits");
    assert.ok(Array.isArray(game.achievements));
    assert.strictEqual(game.achievements.length, 41);

});

test("every Kena: Bridge of Spirits achievement has a unique id from 1 to 41 and a unique apiname", () => {

    const ids = game.achievements.map(a => a.id);
    const apinames = game.achievements.map(a => a.apiname);

    assert.deepStrictEqual([...ids].sort((a, b) => a - b), Array.from({ length: 41 }, (_, i) => i + 1));
    assert.strictEqual(new Set(ids).size, 41);
    assert.strictEqual(new Set(apinames).size, 41);

});

test("every Kena: Bridge of Spirits achievement has a valid difficulty (1-5), a positive estimatedTime, and non-empty name/description", () => {

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

test("every one of the 41 Kena: Bridge of Spirits achievement name+description pairs matches the catalog data", () => {

    const officialAchievements = [
        ["A Heavy Hammer", "Defeat the Corrupt Woodsmith boss and free Adira's spirit, described here spoiler-free."],
        ["A Leader Walks Alone", "Defeat the Corrupt Toshi boss, described here spoiler-free."],
        ["Adira's Fear", "Collect Adira's Hammer relic, found along the Woodsmith's questline."],
        ["Adira's Love", "Collect the Ox relic tied to the Woodsmith Adira's memories."],
        ["Adira's Regret", "Collect the Village Heart relic, the third of Adira's three memories."],
        ["Between the Eyes", "Destroy a Shield Sticks without breaking its shield."],
        ["Bow Master", "Hit 3 enemies with a single Multi-shot."],
        ["Crossing Over", "Unlock the Dash ability, Kena's forward dodge used for both traversal and combat."],
        ["Curse Collector", "Open all Cursed Chests."],
        ["Found a Friend", "Find the first Rot."],
        ["Good as New", "Restore a Flower Shrine."],
        ["Haikyo", "Discover the Village."],
        ["Harness Your Power", "Unlock the Rot Bomb ability, which lets the Rot lob explosives to detonate objects and stagger heavy enemies."],
        ["Hat Collector", "Collect 50 Rot Hats."],
        ["Hunter in the Forest", "Unlock the Spirit Bow, gained partway through the Forest area; it powers many later combat challenges."],
        ["Into the Woods", "Discover the Forest."],
        ["Master Spirit Guide", "Beat the game on Master difficulty."],
        ["No Stone Unturned", "Find all of the Rot."],
        ["Piercing Blow", "Hit 3 Enemies with a single Rot Infused Arrow."],
        ["Quick Draw", "Hit 3 critical hit spots in 3 seconds."],
        ["Restoration Master", "Restore all of the Flower Shrines."],
        ["Restore Balance", "Defeat the final boss and restore balance to the mountain - the end of the story, described here spoiler-free."],
        ["Return to Sender", "Destroy a Mage with its own bomb."],
        ["Rot Commander", "Use 5 Rot Actions in a single combat."],
        ["Say Cheese", "Capture a picture in Photo Mode."],
        ["Sharpshooter", "Destroy an enemy by shooting a Bomb out of the air."],
        ["Skillful Spirit Guide", "Unlock all ability upgrades."],
        ["Spirit Guide", "Defeat Corrupt Taro and free his spirit - the game's first major boss, described here spoiler-free."],
        ["Taro's Fear", "Collect the relic Taro's Knife, found along Taro's questline in the Forgotten Forest."],
        ["Taro's Love", "Collect Taro's food-offering relic, the last of the three memories tied to the lost boy Taro."],
        ["Taro's Regret", "Collect the relic Taro's Lantern, earned after the Corrupt Taro boss fight."],
        ["The Last Stop", "Deliver all Spirit Mail."],
        ["The Lonely Path", "Reach the Mountain Shrine."],
        ["The Open Range", "Discover the Farm."],
        ["Toshi's Fear", "Collect Toshi's Incense relic, found on his questline near the Mountain Shrine."],
        ["Toshi's Love", "Collect the Village Crest relic tied to the village leader Toshi's memories."],
        ["Toshi's Regret", "Collect Toshi's Harpoon relic, the last of his three memories."],
        ["Triple Tap", "Destroy 3 enemies with a single dash attack."],
        ["Triple Threat", "Destroy 3 enemies with a single Parry."],
        ["Weigh Them Down", "Destroy a Moth enemy with a Bomb."],
        ["Zen Master", "Meditate at all Meditation Spots."],
    ];

    assert.strictEqual(officialAchievements.length, 41, "sanity check on this test's own reference list");

    const dataPairs = game.achievements
        .map(a => [a.name, a.description])
        .sort((a, b) => a[0].localeCompare(b[0]));

    assert.deepStrictEqual(dataPairs, [...officialAchievements].sort((a, b) => a[0].localeCompare(b[0])));

});
