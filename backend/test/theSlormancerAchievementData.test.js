import { test } from "node:test";
import assert from "node:assert";

import { getPlannerData } from "../utils/plannerCatalog.js";

// backend/catalog/games/the-slormancer.json - 83 real achievements sourced
// from a live ISteamUserStats/GetSchemaForGame/v2 response for appid
// 1104280 (fetched through this app's own services/steamApi.js).
// Hidden achievements have no Steam description; where present, their
// description here is researched from community 100% guides and cited in
// the frontend guide header. difficulty/estimatedTime/missable are curatorial.
const game = getPlannerData("the-slormancer");

test("getPlannerData('the-slormancer') returns real planner data with 83 curated achievements", () => {

    assert.ok(game, "expected real planner data for the-slormancer");
    assert.ok(Array.isArray(game.achievements));
    assert.strictEqual(game.achievements.length, 83);

});

test("every The Slormancer achievement has a unique id from 1 to 83 and a unique apiname", () => {

    const ids = game.achievements.map(a => a.id);
    const apinames = game.achievements.map(a => a.apiname);

    assert.deepStrictEqual([...ids].sort((a, b) => a - b), Array.from({ length: 83 }, (_, i) => i + 1));
    assert.strictEqual(new Set(ids).size, 83);
    assert.strictEqual(new Set(apinames).size, 83);

});

test("every The Slormancer achievement has a valid difficulty (1-5), a positive estimatedTime, and non-empty name/description", () => {

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

test("every one of the 83 The Slormancer achievement name+description pairs matches the catalog data", () => {

    const officialAchievements = [
        ["A Beautiful Day for Pedro", "Complete all Missions from The Graveyard.."],
        ["A Forgotten Treasure", "Find your first Ultimatum in The Slorm Temple."],
        ["A Funny Recipe", "Accidentally murder the Champion of Arah."],
        ["A Pleasant Surprise!", "Evolve a Slorm Reaper."],
        ["A Sharpened Sword is Worth Two", "Kill 1 000 000 Enemies with The Mighty Knight."],
        ["Adreart's Best Runist", "Reach Max Level with all Reaper Runes."],
        ["Adrianne's War", "Increase your Adrianne Affinity to Level 100."],
        ["Always Two There Are", "Defeat The Traitor."],
        ["Amateur Slormitologist", "Find 10 000 Slormelines on Enemies."],
        ["Ancestral Rock Lover", "Unlock 7 Ancestral Stones."],
        ["Another Magical Rock!", "Unlock your first Ancestral Stone."],
        ["Artifact Hunter", "Find 15 Ultimatums in The Slorm Temple."],
        ["Astorias' Chaos", "Increase your Astorias Affinity to Level 100."],
        ["Battlefield Veteran", "Complete 2 500 Floors in Battlefield Expeditions."],
        ["Behind Bars", "Complete 250 Floors in The Prison."],
        ["Beigarth's Vigilance", "Increase your Beigarth Affinity to Level 100."],
        ["Bow Collection", "Find 120 Slorm Reapers for The Fierce Huntress."],
        ["Breach Predator", "Close 5 000 Breaches with The Fierce Huntress."],
        ["Break and Recycle", "Salvage 250 Items with Friedrich."],
        ["Bullseye", "Kill 1 000 000 Enemies with The Fierce Huntress."],
        ["Carpet Cleaner", "Complete 250 Floors in The Royal Wing."],
        ["Castle Renovations", "Complete all Missions from The Royal Wing."],
        ["Confirmed Slormitologist", "Find 10 000 Slormandrites on Enemies."],
        ["Cory Ironbender's Journey", "Increase your Cory Ironbender Affinity to Level 100."],
        ["Drawn to the Light", "Close 5 000 Breaches with The Mischievous Mage."],
        ["Elite Slayer", "Kill 10 000 Elite Enemies."],
        ["Equipment Finder", "Find 2 500 Pieces of Equipment on Enemies."],
        ["Excellence or Nothing", "Find 100 pieces of Equipment of Legendary Quality on Enemies."],
        ["First-Class Annihilator", "Kill 100 Battlefield Expeditions Bosses."],
        ["From Zero to Hero", "Reach Level 100 with any character."],
        ["Fulgurorn's Silence", "Increase your Fulgurorn Affinity to Level 100."],
        ["Galvanized Legacy", "Invest enough Slorm to reach Rank 10 with an Ancestral Legacy Upgrade."],
        ["Gather Pieces", "Find 1 000 000 Fragments on Enemies."],
        ["Hagan's Exile", "Increase your Hagan Affinity to Level 100."],
        ["Heat the Hammer!", "Reforge Equipment 1 000 times."],
        ["Infinite Power!", "Unlock a Primordial Slorm Reaper."],
        ["It Can Always Be Useful", "Purchase 100 Items from Jemma."],
        ["Legendary Object Collection", "Complete your Legendary Chest Collection."],
        ["Lift the Siege", "Defeat The Siege Leader in The Great Forge."],
        ["Master of Arms", "Reach the Max Level with 360 Slorm Reapers."],
        ["Master of Ferocity", "Reach Mastery 15 with all your Skills with The FIerce Huntress."],
        ["Master of Power", "Reach Mastery 15 with all your Skills with The Mighty Knight."],
        ["Master of the Arsenal", "Find All Slorm Reapers."],
        ["Master of the Primordial Arsenal", "Find All Primordial Slorm Reapers."],
        ["Master of Trickery", "Reach Mastery 15 with all your Skills with The Mischievous Mage."],
        ["Monster Slayer", "Kill 1 000 000 Enemies."],
        ["Negotiating with Crows", "Complete 250 Floors in The Graveyard."],
        ["Never Enough", "Complete 100 Waves in a single Expedition in The Great Forge."],
        ["Novice Slormitologist", "Find 10 000 Slormites on Enemies."],
        ["Perfection Achieved", "Purchase Every Upgrade from Olorin."],
        ["Pockets Full", "Find 10 000 000 Goldus on Enemies."],
        ["Primordial Bow Collection", "Find 120 Primordial Slorm Reapers for The Fierce Huntress."],
        ["Primordial Staff Collection", "Find 120 Primordial Slorm Reapers for The Mischievous Mage."],
        ["Primordial Sword Collection", "Find 120 Primordial Slorm Reapers for The Mighty Knight."],
        ["Putting into Practice", "Kill 1 000 000 Enemies with The Mischievous Mage."],
        ["Raking the Lawn", "Complete 250 Floors in The Luxurious Gardens."],
        ["Reinforce! It's Stronger!", "Reinforce Equipment 500 times."],
        ["Rune Raider", "Find your first Reaper Rune in The Great Forge."],
        ["School Vacations", "Complete all Missions from The Mage Academy."],
        ["Serenity and Torment", "Reach Level 100 with The Fierce Huntress."],
        ["Slorm Feast", "Reap 10 000 000 Slorm on Enemies."],
        ["Slorm Reaper Runes", "Find 28 Reaper Runes in The Great Forge."],
        ["Slormitologist Member Card", "Craft 1 000 Slormites by merging Slormites with Rick Manalan."],
        ["Smaloron's Betrayal", "Increase your Smaloron Affinity to Level 100."],
        ["Spell Class", "Reach Level 100 with The Mischievous Mage."],
        ["Staff Collection", "Find 120 Slorm Reapers for The Mischievous Mage."],
        ["Sword Collection", "Find 120 Slorm Reapers for The Mighty Knight."],
        ["The Almighty Knight", "Reach Level 100 with The Mighty Knight."],
        ["The Chain Breaker", "Complete all Missions from The Prison."],
        ["The End of the Slormancer", "Defeat Omh Agad, The Slormancer !"],
        ["The First of Many", "Find and equip your first piece of Equipment."],
        ["The First Trial", "Complete Part I of Adam Nostrus' Trials."],
        ["The Guillotine Falls", "Close 5 000 Breaches with The Mighty Knight."],
        ["The Last Trial", "Complete Part III of Adam Nostrus' Trials."],
        ["The Lord of Chests", "Loot the War Chest 50 times."],
        ["The New Temple Guardian", "Defeat The Temple Guardian at Floor 150 in The Slorm Temple."],
        ["The Second Trial", "Complete Part II of Adam Nostrus' Trials."],
        ["The Weapon of Champions", "Find a Slorm Reaper."],
        ["These Rocks Are Really Shiny", "Reach Max Level with all Ultimatums."],
        ["Ultimate Perfectionist", "Reach the Max Level with 360 Primordial Slorm Reapers."],
        ["Upgraded Upgrade", "Invest enough Slorm to reach Rank 10 with a Class Upgrade or Passive."],
        ["Well-Trimmed Hedges", "Complete all Missions from The Luxurious Gardens."],
        ["Wizarding School of Witchcraft", "Complete 250 Floors in The Mage Academy."],
    ];

    assert.strictEqual(officialAchievements.length, 83, "sanity check on this test's own reference list");

    const dataPairs = game.achievements
        .map(a => [a.name, a.description])
        .sort((a, b) => a[0].localeCompare(b[0]));

    assert.deepStrictEqual(dataPairs, [...officialAchievements].sort((a, b) => a[0].localeCompare(b[0])));

});
