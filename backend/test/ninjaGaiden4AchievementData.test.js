import { test } from "node:test";
import assert from "node:assert";

import { getPlannerData } from "../utils/plannerCatalog.js";

// backend/catalog/games/ninja-gaiden-4.json - 53 real achievements sourced
// from a live ISteamUserStats/GetSchemaForGame/v2 response for appid
// 2627260 (fetched through this app's own services/steamApi.js).
// Hidden achievements have no Steam description; where present, their
// description here is researched and cited in the frontend guide header.
// difficulty/estimatedTime/missable are curatorial.
const game = getPlannerData("ninja-gaiden-4");

test("getPlannerData('ninja-gaiden-4') returns real planner data with 53 curated achievements", () => {

    assert.ok(game, "expected real planner data for ninja-gaiden-4");
    assert.ok(Array.isArray(game.achievements));
    assert.strictEqual(game.achievements.length, 53);

});

test("every NINJA GAIDEN 4 achievement has a unique id from 1 to 53 and a unique apiname", () => {

    const ids = game.achievements.map(a => a.id);
    const apinames = game.achievements.map(a => a.apiname);

    assert.deepStrictEqual([...ids].sort((a, b) => a - b), Array.from({ length: 53 }, (_, i) => i + 1));
    assert.strictEqual(new Set(ids).size, 53);
    assert.strictEqual(new Set(apinames).size, 53);

});

test("every NINJA GAIDEN 4 achievement has a valid difficulty (1-5), a positive estimatedTime, and non-empty name/description", () => {

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

test("every one of the 53 NINJA GAIDEN 4 achievement name+description pairs matches the catalog data", () => {

    const officialAchievements = [
        ["A Life Dedicated to Duty", "Added by The Two Masters DLC. This achievement released too recently for any community guide to have published confirmed unlock criteria."],
        ["A New Master Ninja", "Purify the Dark Dragon and save the world."],
        ["Annihilator", "Complete all Purgatory trials"],
        ["Bloodraven Form", "Enter Bloodraven Form"],
        ["Bloodsoaked Fate", "Hold your own against Ryu Hayabusa."],
        ["Challenger of Challenges", "Complete all 14 Boss Trials, 18 Combat Trials, and 18 Purgatory Trials."],
        ["Combo Master", "Achieve a 2000-point combo"],
        ["Conqueror of the Abyss", "Added by The Two Masters DLC. This achievement released too recently for any community guide to have published confirmed unlock criteria."],
        ["Consumed by Corruption", "Complete Mission #29 to defeat Oniwaka in his final encounter."],
        ["Critter Collector", "Collect every Gourdy"],
        ["Free as a Bird", "Clear Chapter 06 without hitting any obstacles (Auto Movement must be turned OFF)"],
        ["It's a Dog! It's a Plane! It's...", "Defeat Kurobo and break the second seal."],
        ["Laser's Edge", "Clear Chapter 12 without being hit by a laser (Auto Movement must be turned OFF)"],
        ["Master of Combat", "Learn all Combat Skills"],
        ["Master of Kage-Hiruko", "Learn all Kage-Hiruko Weapon Skills"],
        ["Master of Magatsuhi", "Learn all Magatsuhi Weapon Skills"],
        ["Master of Takeminakata", "Learn all Takeminakata Weapon Skills"],
        ["Master of the Blade", "Use Takeminakata to attack 5 or more enemies at once"],
        ["Master of the Dark Dragon Blade", "Learn all 12 Dark Dragon Blade weapon skills."],
        ["Master of the Drill", "Use Yatousen to inflict massive damage in a short time"],
        ["Master of the Hammer", "Use Magatsuhi to Bloodbath Kill 5 or more enemies in a short time"],
        ["Master of the Toolbox", "Use Kage-Hiruko to defeat an enemy launched in the air"],
        ["Master of Yatousen", "Learn all Yatousen Weapon Skills"],
        ["More Machine than Fiend", "Added by The Two Masters DLC. This achievement released too recently for any community guide to have published confirmed unlock criteria."],
        ["Need, not Greed", "Obtain 30 items"],
        ["Ninja Business", "Complete 20 Missions"],
        ["Ninja Fortitude", "Reach maximum health with both Yakumo (20 items) and Ryu (3 items)."],
        ["NinjaCoin Miner", "Obtain 100,000 NinjaCoin"],
        ["Oh, Foxy Lady", "Defeat the Kitsune Courtesan and break the first seal."],
        ["Priestess of the Dark Dragon", "Revive the Dark Dragon in exchange for Seori's life."],
        ["Raven Gear: Caddis Wire", "Use the Caddis Wire traversal tool."],
        ["Raven Gear: Dragonfly Glider", "Use the Dragonfly Glider traversal tool."],
        ["Raven Gear: Pond Strider", "Use the Pond Strider traversal tool."],
        ["Return of the Super Ninja", "Start Ryu Hayabusa's story."],
        ["Scornful Mother of the Damned", "Added by The Two Masters DLC. This achievement released too recently for any community guide to have published confirmed unlock criteria."],
        ["Shadow Incarnate", "Complete any chapter without dying (excluding Chapters 00 and 14)"],
        ["Smile, You Son of a...", "Defeat Cetus and break the third seal."],
        ["Surf Ninja", "Clear Chapter 10 without hitting any obstacles (Auto Movement must be turned OFF)"],
        ["The Art of Obliteration", "Perform an Obliteration"],
        ["The Art of the Bloodbath Kill", "Perform a Bloodbath Kill"],
        ["The Art of the Bloodbath Slaughter", "Perform a Bloodbath Slaughter"],
        ["The Grind Never Stops", "Clear Chapter 02 without falling once (Auto Movement must be turned OFF)"],
        ["The One Who Obliterates", "Obliterate every enemy"],
        ["The Priestess's Wish", "Reach the final battle carrying Seori and Kureha's wishes."],
        ["The Pursuit of Duty", "Added by The Two Masters DLC. This achievement released too recently for any community guide to have published confirmed unlock criteria."],
        ["The Two Masters", "Added by The Two Masters DLC. This achievement released too recently for any community guide to have published confirmed unlock criteria."],
        ["True Ninja", "Acquire all achievements"],
        ["Ultimate Challenge", "Added by The Two Masters DLC. This achievement released too recently for any community guide to have published confirmed unlock criteria."],
        ["Way of the Dragon", "Defeat 3 enemies in a row with an Ultimate Technique"],
        ["Way of the Master Ninja", "Complete the game on MASTER NINJA difficulty"],
        ["Way of the New Master Ninja", "Added by The Two Masters DLC. This achievement released too recently for any community guide to have published confirmed unlock criteria."],
        ["Wielder of Darkness", "Complete Boss Trial #13 to unlock the Dark Dragon Blade."],
        ["Work Horse", "Complete all Missions"],
    ];

    assert.strictEqual(officialAchievements.length, 53, "sanity check on this test's own reference list");

    const dataPairs = game.achievements
        .map(a => [a.name, a.description])
        .sort((a, b) => a[0].localeCompare(b[0]));

    assert.deepStrictEqual(dataPairs, [...officialAchievements].sort((a, b) => a[0].localeCompare(b[0])));

});
