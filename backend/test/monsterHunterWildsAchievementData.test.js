import { test } from "node:test";
import assert from "node:assert";

import { getPlannerData } from "../utils/plannerCatalog.js";

// backend/catalog/games/monster-hunter-wilds.json - 50 real achievements sourced
// from a live ISteamUserStats/GetSchemaForGame/v2 response for appid
// 2246340 (fetched through this app's own services/steamApi.js). None are
// hidden; every description is Steam's own real text.
// Hidden achievements have no Steam description; where present, their
// description here is researched from community 100% guides and cited in
// the frontend guide header. difficulty/estimatedTime/missable are curatorial.
const game = getPlannerData("monster-hunter-wilds");

test("getPlannerData('monster-hunter-wilds') returns real planner data with 50 curated achievements", () => {

    assert.ok(game, "expected real planner data for monster-hunter-wilds");
    assert.ok(Array.isArray(game.achievements));
    assert.strictEqual(game.achievements.length, 50);

});

test("every Monster Hunter Wilds achievement has a unique id from 1 to 50 and a unique apiname", () => {

    const ids = game.achievements.map(a => a.id);
    const apinames = game.achievements.map(a => a.apiname);

    assert.deepStrictEqual([...ids].sort((a, b) => a - b), Array.from({ length: 50 }, (_, i) => i + 1));
    assert.strictEqual(new Set(ids).size, 50);
    assert.strictEqual(new Set(apinames).size, 50);

});

test("every Monster Hunter Wilds achievement has a valid difficulty (1-5), a positive estimatedTime, and non-empty name/description", () => {

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

test("every one of the 50 Monster Hunter Wilds achievement name+description pairs matches the catalog data", () => {

    const officialAchievements = [
        ["A Bitter Environment", "Complete the story mission 'Wyvern Sparks and Rose Thorns'."],
        ["A Keen-eyed Observation", "Used the binoculars to spot a gold-crown large monster."],
        ["A Legacy Restored", "Craft an Artian Weapon of Rarity 8."],
        ["A Prize Held High", "Catch a Curioshell Crab - which bears an Ancient Wyvern Coin - at the Flowering Rocks in the Scarlet Forest."],
        ["A Step Toward Mutual Understanding", "Completed your first side mission."],
        ["A True Hunter Is Never Satisfied", "Completed 50 quests."],
        ["A-fish-ionado", "Reeled in 30 whoppers while fishing."],
        ["Angling for a Bite", "Successfully fished for the first time."],
        ["Beyond the Black Wings", "Complete the story mission 'A World Turned Upside Down'."],
        ["Bourgeois Hunter", "Possessed 1,000,000 zenny."],
        ["Bringer of Harmony", "Complete the story mission 'Monster Hunter'."],
        ["Campmaster", "Established Pop-up Camps in 10 places."],
        ["Capture Pro", "Captured 50 monsters."],
        ["East to West, A Hunter Never Rests", "Completed 30 different side missions."],
        ["Eastward Wings", "Obtained all other awards."],
        ["Established Hunter", "Reached Hunter Rank 100."],
        ["Explorer of the Eastlands", "Obtained 10 different special items of Rarity 6."],
        ["Giant Crown", "Obtained your first silver crown or higher in the Hunting Log."],
        ["Giant Crown Collector", "Obtained a gold crown for 10 or more monsters in the Hunting Log."],
        ["Giant Crown Master", "Obtained a gold crown for many monsters in the Hunting Log."],
        ["Glamper", "Customized a Pop-up Camp for the first time."],
        ["Gossip Hunter", "Viewed 30 different Hunter Profiles."],
        ["Guardians of the Forge", "Complete the story mission 'Long-forgotten Flame' (the Oilwell Basin chapter)."],
        ["Hit 'Em Where It Hurts!", "Landed 50 successful attacks on weak points or wounds in Focus Mode."],
        ["Hunter-Assassin", "Performed your first successful Sneak Attack."],
        ["Hunters United", "Completed a quest via multiplayer."],
        ["Hunters United Forever", "Completed 100 quests via multiplayer."],
        ["I Caught a Shooting Star!", "Catch a Baunos, the desert creature that shines like a shooting star, in the Windward Plains at night."],
        ["Impregnable Defense", "Forged five different pieces of armor with Rarity 7 or higher."],
        ["Let the Investigations Begin!", "Completed your first investigation."],
        ["Miniature Crown", "Obtained your first miniature crown in the Hunting Log."],
        ["Miniature Crown Collector", "Obtained a miniature crown for 10 or more monsters in the Hunting Log."],
        ["Miniature Crown Master", "Obtained a miniature crown for many monsters in the Hunting Log."],
        ["Mmm, So Tasty!", "Successfully cooked a well-done steak for the first time."],
        ["Monster (Squid) Hunter", "Caught a giant squid while fishing."],
        ["Monster Ph.D.", "Hunted many different large monsters."],
        ["Monster Slayer", "Hunted 100 large monsters."],
        ["New Ecosystems", "Complete the story mission 'New Ecosystems' (the start of High Rank)."],
        ["Newly Forged Bonds", "Followed someone for the first time."],
        ["One Corner of the World", "Complete the final story mission 'What Lies Ahead' and see the ending."],
        ["Power Is Everything", "Forged five different weapons with Rarity 7 or higher."],
        ["Ride-or-die Companion", "Customized your Seikret or changed its decorations for the first time."],
        ["Seasoned Hunter", "Hunt 50 Tempered monsters."],
        ["Shadow in the Downpour", "Complete the story mission 'Beyond the Deluge' (the Scarlet Forest chapter)."],
        ["Someone Worth Following", "Completed 100 quests with your Palico deployed."],
        ["The Bigger They Are...", "Successfully mounted a monster for the first time."],
        ["The Hunt Is On!", "Completed your first Field Survey."],
        ["Top of the Food Chain", "Hunt 50 Apex Predators."],
        ["Was It a Meal to Remember?", "Cooked over the BBQ Grill for the first time."],
        ["Windward Lands", "Complete the story mission 'The Desert Trotters' (reaching the Windward Plains)."],
    ];

    assert.strictEqual(officialAchievements.length, 50, "sanity check on this test's own reference list");

    const dataPairs = game.achievements
        .map(a => [a.name, a.description])
        .sort((a, b) => a[0].localeCompare(b[0]));

    assert.deepStrictEqual(dataPairs, [...officialAchievements].sort((a, b) => a[0].localeCompare(b[0])));

});
