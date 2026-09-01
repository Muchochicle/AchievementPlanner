import { test } from "node:test";
import assert from "node:assert";

import { getPlannerData } from "../utils/plannerCatalog.js";

// backend/catalog/games/ravenswatch.json - 45 real achievements sourced
// from a live ISteamUserStats/GetSchemaForGame/v2 response for appid
// 2071280 (fetched through this app's own services/steamApi.js). None are
// hidden; every description is Steam's own real text.
// Hidden achievements have no Steam description; where present, their
// description here is researched from community 100% guides and cited in
// the frontend guide header. difficulty/estimatedTime/missable are curatorial.
const game = getPlannerData("ravenswatch");

test("getPlannerData('ravenswatch') returns real planner data with 45 curated achievements", () => {

    assert.ok(game, "expected real planner data for ravenswatch");
    assert.ok(Array.isArray(game.achievements));
    assert.strictEqual(game.achievements.length, 45);

});

test("every Ravenswatch achievement has a unique id from 1 to 45 and a unique apiname", () => {

    const ids = game.achievements.map(a => a.id);
    const apinames = game.achievements.map(a => a.apiname);

    assert.deepStrictEqual([...ids].sort((a, b) => a - b), Array.from({ length: 45 }, (_, i) => i + 1));
    assert.strictEqual(new Set(ids).size, 45);
    assert.strictEqual(new Set(apinames).size, 45);

});

test("every Ravenswatch achievement has a valid difficulty (1-5), a positive estimatedTime, and non-empty name/description", () => {

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

test("every one of the 45 Ravenswatch achievement name+description pairs matches the catalog data", () => {

    const officialAchievements = [
        ["A Diary of Days ", "Unlock all Memoirs of Scarlet "],
        ["A Memoir of Dire Mirth ", "Unlock all Memoirs of Geppetto "],
        ["A Mermaid's Lullaby ", "Unlock all Memoirs of Melusine "],
        ["A Reinvigorating Journey ", "Use 6 or more Healing fountains in a single run "],
        ["A Swift Victory", "Achieve victory with 9 Magical Objects or more collected from the Hourglass of Dreams"],
        ["A Tale of Woe", "Unlock all Memoirs of Juliet"],
        ["All is well that ends well ", "Defeat Baba Yaga without using any Raven Feather."],
        ["Chapter 2 ", "Reach Chapter 2 "],
        ["Chapter 3 ", "Reach Chapter 3 "],
        ["Fulfillment ", "Select a Final Talent during a game "],
        ["Giant Slayer ", "Defeat 3 optional bosses in a single run "],
        ["Intense Shimmers", "Duplicate 4 objects using the Magical Mirror in a single run"],
        ["Jack O'Lantern", "Defeat Stingy Jack"],
        ["Legendary Hero ", "Have 9 Legendary talents in a single run."],
        ["Letters to Laura - Diary of a Dhampire ", "Unlock all Memoirs of Carmilla "],
        ["Loot Hoarder ", "Have 20 or more magical objects equiped during a single run "],
        ["Master of Challenges ", "Complete 5 challenges in Darkness difficulty or more "],
        ["Mercy of the Ravens ", "Buy 3 feathers from Altar of Heroes in a single run "],
        ["No one left behind ", "Complete 3 quests in a single run "],
        ["Object Compendium ", "Discover all Magical Objects and their collection effects "],
        ["Once upon a time ", "Level up a Hero during a game "],
        ["Open sesame! ", "Collect 5 or more keys in a single run "],
        ["Overpowered Nightmare", "Complete a chapter using the full overtime"],
        ["Predestined Fate ", "As Merlin, defeat Baba Yaga without using any Stars of Fate (rerolls) during the run."],
        ["Savior of the Day ", "Revive 3 Heroes at the same time."],
        ["Secret Technique ", "Select an Ultimate ability during a game "],
        ["Socialization ", "Interact with 6 or more Refugees in a single run "],
        ["Symphony of Reverie", "Discover all the Melodies"],
        ["Tale of Frightful Fife ", "Unlock all Memoirs of the Pied Piper "],
        ["The Annals of the Reign of Queen Nyss ", "Unlock all Memoirs of the Snow Queen "],
        ["The Cleansing of Reverie ", "Complete 3 or more Nightmare tumors in a single run "],
        ["The Curse of a Drake's Mother ", "Unlock all Memoirs of Beowulf "],
        ["The Curse of Merlin Farseer", "Unlock all Memoirs of Merlin"],
        ["The Cursed Lovers", "Achieve Victory in Multiplayer with Romeo or Juliet (together)"],
        ["The Epic Tragic Tale of Immortal Demise ", "Unlock all Memoirs of Sun Wukong "],
        ["The House of Nightmares ", "Reach Epilogue - Part 1."],
        ["The Leprechaun Treasure", "Get 400 Dreamshards or more from a Leprechaun's Cauldron"],
        ["The Ogress's Lair ", "Reach Epilogue - Part 2."],
        ["The Ravenswatch Oath ", "Achieve Victory in multiplayer "],
        ["The Thief Who Married a Princess ", "Unlock all Memoirs of Aladdin "],
        ["The Thirst for Knowledge ", "Complete 4 or more Grimoires in a single run "],
        ["The Thirst for Power ", "Use 6 or more Sacrificial Idols in a single run"],
        ["The Three Little Pigs ", "Complete all three Swyne brothers quests "],
        ["Three Wishes ", "Wish for 3 Magical Objects at a single Wishing Well "],
        ["Thy Letters to Thine Self", "Unlock all Memoirs of Romeo"],
    ];

    assert.strictEqual(officialAchievements.length, 45, "sanity check on this test's own reference list");

    const dataPairs = game.achievements
        .map(a => [a.name, a.description])
        .sort((a, b) => a[0].localeCompare(b[0]));

    assert.deepStrictEqual(dataPairs, [...officialAchievements].sort((a, b) => a[0].localeCompare(b[0])));

});
