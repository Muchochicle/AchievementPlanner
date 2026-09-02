import { test } from "node:test";
import assert from "node:assert";

import { getPlannerData } from "../utils/plannerCatalog.js";

// backend/catalog/games/assassins-creed-odyssey.json - 93 real achievements sourced
// from a live ISteamUserStats/GetSchemaForGame/v2 response for appid
// 812140 (fetched through this app's own services/steamApi.js).
// Hidden achievements ship no Steam description; their description here is
// researched from community 100% guides and cited in the frontend guide
// header. difficulty/estimatedTime/missable are curatorial.
const game = getPlannerData("assassins-creed-odyssey");

test("getPlannerData('assassins-creed-odyssey') returns real planner data with 93 curated achievements", () => {

    assert.ok(game, "expected real planner data for assassins-creed-odyssey");
    assert.ok(Array.isArray(game.achievements));
    assert.strictEqual(game.achievements.length, 93);

});

test("every Assassin's Creed Odyssey achievement has a unique id from 1 to 93 and a unique apiname", () => {

    const ids = game.achievements.map(a => a.id);
    const apinames = game.achievements.map(a => a.apiname);

    assert.deepStrictEqual([...ids].sort((a, b) => a - b), Array.from({ length: 93 }, (_, i) => i + 1));
    assert.strictEqual(new Set(ids).size, 93);
    assert.strictEqual(new Set(apinames).size, 93);

});

test("every Assassin's Creed Odyssey achievement has a valid difficulty (1-5), a positive estimatedTime, and non-empty name/description", () => {

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

test("every one of the 93 Assassin's Creed Odyssey achievement name+description pairs matches the catalog data", () => {

    const officialAchievements = [
        ["1 Versus 100", "Defeat the Hekatonchires (The Fate of Atlantis, Episode 3: Judgment of Atlantis)."],
        ["A Brother's Seduction", "Complete A Brother's Seduction"],
        ["A Friend Worth Dying For", "Complete A Friend Worth Dying For"],
        ["A Pirate's Life for Me", "Complete Xenia's treasure-hunt questline."],
        ["A Poet's Legacy", "Complete A Poet's Legacy."],
        ["A True Ruler", "Dethrone the king (The Fate of Atlantis, Episode 2: Torment of Hades)."],
        ["A-maze-ing Victory!", "Defeat the Minotaur."],
        ["An Odyssey in the Making", "Complete Episode 1."],
        ["Aphrodite's Embrace", "Spend the night with another character."],
        ["Are You Not Entertained?", "Become Champion of the Arena."],
        ["Bad Dog!", "Defeat Cerberos."],
        ["Birthright", "Discover Atlantis and speak with Pythagoras."],
        ["Bittersweet Beginnings", "Secure your bloodline (Legacy of the First Blade, Episode 3: Bloodline)."],
        ["Blasphemer", "Destroy all of the Marble Maiden Tributes."],
        ["Blood of Leonidas", "Continue the bloodline (Legacy of the First Blade, Episode 2: Shadow Heritage)."],
        ["Blood Sport", "Defeat a Mercenary in the Arena."],
        ["Breaking the Limit", "Land a Rush Assassinate that chains 4 times with the Blade of the Lion"],
        ["Child of Poseidon", "Complete all underwater location objectives."],
        ["Demigod", "Reach Level 50."],
        ["Democracy Falls", "Complete Episode 6."],
        ["Divine Intervention", "Complete Divine Intervention."],
        ["Every Story Has an Ending", "Complete Every Story Has an Ending"],
        ["Everybody Benefits", "Complete Markos's questline."],
        ["Evil Unearthed", "Complete Episode 3."],
        ["Eye on the Prize", "Defeat the Cyclops."],
        ["Fashion's Creed", "Equip a Legendary Armor set."],
        ["Fire on Water", "Set 10 enemy ships on fire."],
        ["For Love of Persia", "Kill all the Ancients in the Order of Dominion in Messenia"],
        ["From the Ashes", "Complete Episode 5."],
        ["Gathering Full Strength", "Collect all the Keeper's Insights in Episode 3."],
        ["Gathering More Strength", "Collect all the Keeper's Insights in Episode 2."],
        ["Gathering Strength", "Collect all the Keeper's Insights in Episode 1."],
        ["Godly Power", "Acquire a Tier 3 active Ability."],
        ["Going For Gold", "Complete the Olympic questline in Elis."],
        ["Guardian of the Underworld", "Close all Tartaros Rifts."],
        ["Harder, Better, Faster, Stronger", "Upgrade the Adrestia for the first time."],
        ["Hephaistos's Apprentice", "Forge the 3 Legendary Weapons."],
        ["Hermes's Homie", "Unveil all sub-regions of Greece."],
        ["Hero for Hire", "Win your first on land conquest battle in any region (excluding Megaris in Hero's Journey)."],
        ["I am Legend", "Equip 1 Legendary melee weapon and 5 Legendary armor pieces."],
        ["I Have the Power", "Perform an Overpower Attack with every weapon type."],
        ["In Perseus's Image", "Defeat Medusa."],
        ["In the Face of the Gods", "Remember who you are (The Fate of Atlantis, Episode 1: Fields of Elysium)."],
        ["Infamous", "Raise your Bounty to the maximum level."],
        ["Island Hopper", "Complete 20 Quests on Pephka, Obsidian and Abantis islands."],
        ["Isu Bloodline", "Completely fill the Knowledge Sequence."],
        ["Kingmaker", "Acquire the Sword of Kings"],
        ["Legacy Restored", "Upgrade the Spear of Leonidas to Tier 6."],
        ["Legend in the Making", "Complete Episode 7."],
        ["Lightning Rod", "Defeat Steropes the Lightning Bringer."],
        ["Lone Lion", "Kill the Makedonian Lion"],
        ["Lord of the Seas", "Upgrade the Adrestia to Legendary Status."],
        ["Make It Your Own", "Engrave your first item."],
        ["Master of the Hunt", "Complete the Daughters of Artemis questline (hunt all the legendary animals)."],
        ["Misthios in Training", "Complete 20 Bounties, War Contracts, or Naval Quests from Message Boards."],
        ["No More Rulers", "Kill all Overseers in Elysium."],
        ["Odyssey's End", "Complete Episode 9 and the Epilogue."],
        ["Old Flames Burn Brighter", "Complete Old Flames Burn Brighter"],
        ["One Head Down…", "Defeat a full branch of the Cult of Kosmos family tree."],
        ["One Really, Really Bad Day", "Complete One Really, Really Bad Day"],
        ["Parry to Carry", "Heal by parrying 10 times with the Judgment of the Lion."],
        ["Past Mistakes", "Complete Episode 2."],
        ["Predator and Prey", "Kill all the Ancients in the Order of the Hunters in Makedonia"],
        ["Rain of Arrows", "Kill 10 enemies using the Rapid Fire ability."],
        ["Ramming Speed", "Cleave a ship in half."],
        ["Riddle Me This", "Outwit the Sphinx."],
        ["Scourge of the Aegean", "Sink your first Epic Ship."],
        ["Seeing Red", "Kill 10 enemies using the Fury of the Bloodline Ability."],
        ["Shiny!", "Acquire and equip your first Legendary item."],
        ["Stink Eye", "Recover the Cyclops's eye from a goat on Kephallonia."],
        ["Stormculler", "Kill all of the Ancients in the Order of the Storm in Achaia."],
        ["Surgical Sniper", "Heal by getting 10 headshot kills while you have the Golden Harbinger equipped."],
        ["Taking Back Athens", "Complete Episode 8."],
        ["The Argonauts", "Fully crew the Adrestia with Legendary Lieutenants."],
        ["The Bright Minds", "Complete Episode 4."],
        ["The Conqueror", "Win the conquest of Elysium with freed humans from the 3 main regions."],
        ["The Cult Unmasked", "Defeat every Cultist of Kosmos."],
        ["The Daughters of Lalaia", "Complete The Daughters of Lalaia"],
        ["The Heir of Memories", "Complete The Heir of Memories"],
        ["The Image of Faith", "Complete The Image of Faith"],
        ["The Midas Touch", "Engrave a Legendary Item with a Legendary Effect."],
        ["The One", "Defeat all of the Fallen."],
        ["The Show Must Go On", "Complete The Show Must Go On."],
        ["The Start of a Legacy", "Discover the truth about Darius's past (Legacy of the First Blade, Episode 1: Hunted)."],
        ["This is Sparta!", "Complete the Battle of 300 opening."],
        ["Top of the Food Chain", "Become the first Mercenary."],
        ["Trust Me, I'm a Doctor", "Complete the Hippokrates questline."],
        ["Volcanic Sunscreen", "Defeat Arges, the Bright One"],
        ["War Master", "Kill the Leader of any Region with Low Resources, other than Megaris."],
        ["Without a trace", "Kill 10 enemies using the Death Veil ability"],
        ["Wrath of the Amazons", "Cleave a ship in half while sailing with an all-women crew."],
        ["You Work for Me Now", "Recruit and assign a Legendary NPC for your ship."],
        ["Your Own Medicine", "Kill 10 Isu Soldiers with the Blessing of Kronos enhancement."],
    ];

    assert.strictEqual(officialAchievements.length, 93, "sanity check on this test's own reference list");

    const dataPairs = game.achievements
        .map(a => [a.name, a.description])
        .sort((a, b) => a[0].localeCompare(b[0]));

    assert.deepStrictEqual(dataPairs, [...officialAchievements].sort((a, b) => a[0].localeCompare(b[0])));

});
