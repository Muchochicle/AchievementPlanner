import { test } from "node:test";
import assert from "node:assert";

import { getPlannerData } from "../utils/plannerCatalog.js";

// backend/catalog/games/the-plucky-squire.json - 24 real achievements sourced
// from a live ISteamUserStats/GetSchemaForGame/v2 response for appid
// 1627570 (fetched through this app's own services/steamApi.js).
// Hidden achievements ship no Steam description; their description here is
// researched from community 100% guides and cited in the frontend guide
// header. difficulty/estimatedTime/missable are curatorial.
const game = getPlannerData("the-plucky-squire");

test("getPlannerData('the-plucky-squire') returns real planner data with 24 curated achievements", () => {

    assert.ok(game, "expected real planner data for the-plucky-squire");
    assert.ok(Array.isArray(game.achievements));
    assert.strictEqual(game.achievements.length, 24);

});

test("every The Plucky Squire achievement has a unique id from 1 to 24 and a unique apiname", () => {

    const ids = game.achievements.map(a => a.id);
    const apinames = game.achievements.map(a => a.apiname);

    assert.deepStrictEqual([...ids].sort((a, b) => a - b), Array.from({ length: 24 }, (_, i) => i + 1));
    assert.strictEqual(new Set(ids).size, 24);
    assert.strictEqual(new Set(apinames).size, 24);

});

test("every The Plucky Squire achievement has a valid difficulty (1-5), a positive estimatedTime, and non-empty name/description", () => {

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

test("every one of the 24 The Plucky Squire achievement name+description pairs matches the catalog data", () => {

    const officialAchievements = [
        ["Adventure Complete", "Complete the Adventure Mode."],
        ["Art Collector", "Find all Art Scrolls."],
        ["Brawl Buster", "Defeat every enemy in Deep Doom’s elevator room without dying in Challenge Mode."],
        ["Bust Buster", "Rearrange a sentence to blow up Humgrump's bust."],
        ["Challenge Mode Complete", "Complete the game in Challenge Mode"],
        ["Cheese Mushrooms", "Rearrange a sentence to make cheese mushrooms."],
        ["Cheese Pillar", "Rearrange a sentence to make a cheese pillar."],
        ["Cute Little Glitchbird", "Find a Glitchbird."],
        ["Huge Bridge", "Rearrange a sentence to make the bridge huge."],
        ["Huge Frog", "Rearrange a sentence to make the little frog huge."],
        ["Ironclad At Artia", "Reach Artia in Iron Squire Mode"],
        ["Metal Warrior", "Defeat the Mega Eagle."],
        ["Mighty Witch", "Defeat the Mage."],
        ["Minigame MaxiGrump", "Complete every Humgrump-corrupted minigame in Challenge Mode"],
        ["Optimistic Explorer", "Try jumping off the desk. Worth a go."],
        ["Perfect Fish Grab", "Catch Floatio on your first try."],
        ["Powerful Jot", "Fully upgrade Jot's abilities."],
        ["Powerful Puncher", "Defeat the Honey Badger in a boxing match."],
        ["Saviour of the Glitchbirds", "Rescue all Glitchbirds."],
        ["Star Walker", "Retrieve the scroll from the top of the star projector."],
        ["Story Complete", "Complete the Story Mode."],
        ["The Joy Of Art", "Find an Art Scroll."],
        ["Triumphant Squire", "Defeat the sorcerer Humgrump - the final boss, described here spoiler-free."],
        ["WRETCHED RODENT!!!", "Complete the infuriating rat-chase section."],
    ];

    assert.strictEqual(officialAchievements.length, 24, "sanity check on this test's own reference list");

    const dataPairs = game.achievements
        .map(a => [a.name, a.description])
        .sort((a, b) => a[0].localeCompare(b[0]));

    assert.deepStrictEqual(dataPairs, [...officialAchievements].sort((a, b) => a[0].localeCompare(b[0])));

});
