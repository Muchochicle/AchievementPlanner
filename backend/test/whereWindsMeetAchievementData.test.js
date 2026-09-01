import { test } from "node:test";
import assert from "node:assert";

import { getPlannerData } from "../utils/plannerCatalog.js";

// backend/catalog/games/where-winds-meet.json - 61 real achievements sourced
// from a live ISteamUserStats/GetSchemaForGame/v2 response for appid
// 3564740 (fetched through this app's own services/steamApi.js). None are
// hidden; every description is Steam's own real text.
// Hidden achievements have no Steam description; where present, their
// description here is researched from community 100% guides and cited in
// the frontend guide header. difficulty/estimatedTime/missable are curatorial.
const game = getPlannerData("where-winds-meet");

test("getPlannerData('where-winds-meet') returns real planner data with 61 curated achievements", () => {

    assert.ok(game, "expected real planner data for where-winds-meet");
    assert.ok(Array.isArray(game.achievements));
    assert.strictEqual(game.achievements.length, 61);

});

test("every Where Winds Meet achievement has a unique id from 1 to 61 and a unique apiname", () => {

    const ids = game.achievements.map(a => a.id);
    const apinames = game.achievements.map(a => a.apiname);

    assert.deepStrictEqual([...ids].sort((a, b) => a - b), Array.from({ length: 61 }, (_, i) => i + 1));
    assert.strictEqual(new Set(ids).size, 61);
    assert.strictEqual(new Set(apinames).size, 61);

});

test("every Where Winds Meet achievement has a valid difficulty (1-5), a positive estimatedTime, and non-empty name/description", () => {

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

test("every one of the 61 Where Winds Meet achievement name+description pairs matches the catalog data", () => {

    const officialAchievements = [
        ["A Fish Out of Water", "A fish atop the tallest tree? In this desert, anything goes."],
        ["A Flawed Ascension", "Complete Hidden Mountain Campaign - Skyward City Ruins"],
        ["A Heart in Ruins", "Some wounds are not carved in flesh, but in the soul itself."],
        ["A Promise Fulfilled", "Finish the Granary of Plenty questline in full - defeat Zheng E, then place Zheng E's Notes and read Zheng E's Letter for its epilogue."],
        ["A Squeak to Remember", "The tiny squeak of a woodchuck sealed your defeat."],
        ["All Hail Me", "Your martial prowess is the stuff of legend. Someone fetch the imperial robes. They were made for you."],
        ["Alone in Chang'an", "Complete Hexi Jianghu Legacy: The Homeward Vow."],
        ["Boop the Snoot", "Just one little boop. What could go wrong?"],
        ["Broken Spear Victory", "Defeat the Nameless General."],
        ["Buddha's Afterglow", "Clear Campaign: Halo Peak."],
        ["Cat Fever", "Pet the cat at Kitty Posy in the Hexi region five times, after completing its prerequisite quests."],
        ["Echoes Unbound", "Reach Avg. Enhancement Lv.5."],
        ["Egg-cellent Luck", "Perform a 10x smash in Wang Quanyou's egg-smashing game."],
        ["Every Inch Covered - Kaifeng", "Collect 40 chests in Kaifeng."],
        ["Feline Riddler - Kaifeng", "Solve 5 Meow Meow Puzzles in Kaifeng."],
        ["First Resonance", "Enhance a piece of gear to Lv.2."],
        ["Goose Slayer", "Defeat the Demon Goose during the 'To Heal or Not to Heal' side quest near West Heaven's Pier on Moonveil Mountain - let its failed treatment 'defeat' you once, then return and slay it."],
        ["Healing Hands", "Master the Panacea Fan."],
        ["Heart of Gold", "Every story needs an ending. You chose to make this one gentle."],
        ["Hexi: Full Moon Rising", "Unlock all Tales and Echoes in Hexi."],
        ["Hexi: Paws on Point", "Solve 6 Meow Meow Puzzles in Hexi."],
        ["Hexi: Relentless Hunter", "Collect 20 chests of any quality in Hexi."],
        ["High Spirits", "Never fly a bird while drunk, unless you're in a dream."],
        ["Horizon Seeker", "Reach the highest point in Qinghe: Moonveil Mountain Tower."],
        ["Jinming Pool Secrets", "Clear Campaign: Jinming Pool."],
        ["King for a Day", "Complete the Imperial Palace quest 'Throne and Storm', then sit on the Emperor's throne in Chunyuan Hall."],
        ["Life Goes to Dogs", "Drink wine with the three stray dogs on the path to the Evercare Clinic to transform into a rural dog."],
        ["Mighty Wolf Rider", "Defeat Wolf Maiden."],
        ["Mountain of Skulls", "Add your enemies' heads to the macabre monument."],
        ["My Domain, My Rules", "Allow no one to sleep peacefully in your domain."],
        ["No Mountain High Enough", "I ask every mountain here: which of you dares stand taller?"],
        ["Past Secrets Unsung", "Clear Campaign: Palace of Annals."],
        ["Paws on Point - Qinghe", "Solve 10 Meow Meow Puzzles in Qinghe."],
        ["Peak of All Arts", "Reach the highest point, East of Beast Reverie, in the Fair Grounds of Kaifeng."],
        ["Perfect Harmony", "Tune an Epic gear to max level."],
        ["Power of Four", "Equip 4 Internal Arts."],
        ["Qinghe · Seeker of Melodies", "Complete 150 peculiar challenges in the Qinghe area."],
        ["Quick on the Uptake - Kaifeng", "Collect 250 Oddities in Kaifeng."],
        ["Quick on the Uptake - Qinghe", "Collect 40 chests."],
        ["Quirks of Fate - Kaifeng", "Complete 3 encounters in Southeast Kaifeng."],
        ["Quirks of Fate - Qinghe", "Complete 3 encounters in Qinghe."],
        ["Reflections of Obsession", "Clear Campaign - Dim Lamp Night."],
        ["Savior of Kaifeng", "Clear Campaign: Heavenfall."],
        ["Skill at Hand", "Upgrade a Martial Style to Lv. 30."],
        ["Sky's the Limit", "Always strive to fly higher, no matter the time or place."],
        ["Source of Still Shore", "Clear Campaign: Still Shore."],
        ["Speedrun in Granary", "Defeat Zheng E within 180s."],
        ["Strength of Character", "Anyone can win by force, but true loyalty can't be beaten into someone. Earn it."],
        ["Swift Annihilation", "Defeat Wucan within 180 seconds."],
        ["The Final Destiny - Qinghe", "Unlock the ending of main story of Qinghe."],
        ["The First Finding", "Unlock a Dark Surge story."],
        ["The Grand Strategist", "Master the Strategic Sword."],
        ["The Grand Tour", "If the Emperor can wander these halls, so can you. Every last room of them."],
        ["The Hero is the Voice of the World", "All achievements unlocked. With heroic compassion, we've journeyed thousands of miles together."],
        ["The Old Timer Got It", "Intentionally lose the early sparring match against Elder Gongsun at the General's Shrine."],
        ["The Real Treasure", "The palace holds more than silver and gold. Some things money simply can't buy."],
        ["The Unspeakable Victory", "A limited-time event achievement - perform the kneeling Goosy gesture in front of each 'Resting' Campaign Challenge boss."],
        ["Undercover Boss", "Enter Derndale for the first time while wearing the Infinite Truths mask."],
        ["Victory in the Abyss", "Defeat ​The Void King within 60s."],
        ["Voice of the Valiant", "Complete the 'Furnace of Righteousness' story content in the Kaifeng region."],
        ["We're Cool Now", "Cross blades with the Black-Clad Thief under the moonlight."],
    ];

    assert.strictEqual(officialAchievements.length, 61, "sanity check on this test's own reference list");

    const dataPairs = game.achievements
        .map(a => [a.name, a.description])
        .sort((a, b) => a[0].localeCompare(b[0]));

    assert.deepStrictEqual(dataPairs, [...officialAchievements].sort((a, b) => a[0].localeCompare(b[0])));

});
