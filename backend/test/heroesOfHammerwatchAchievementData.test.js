import { test } from "node:test";
import assert from "node:assert";

import { getPlannerData } from "../utils/plannerCatalog.js";

// backend/catalog/games/heroes-of-hammerwatch.json - 114 real achievements sourced
// from a live ISteamUserStats/GetSchemaForGame/v2 response for appid
// 677120 (fetched through this app's own services/steamApi.js). None are
// hidden; every description is Steam's own real text.
// difficulty/estimatedTime/missable remain curatorial judgments.
const game = getPlannerData("heroes-of-hammerwatch");

test("getPlannerData('heroes-of-hammerwatch') returns real planner data with 114 curated achievements", () => {

    assert.ok(game, "expected real planner data for heroes-of-hammerwatch");
    assert.ok(Array.isArray(game.achievements));
    assert.strictEqual(game.achievements.length, 114);

});

test("every Heroes of Hammerwatch achievement has a unique id from 1 to 114 and a unique apiname", () => {

    const ids = game.achievements.map(a => a.id);
    const apinames = game.achievements.map(a => a.apiname);

    assert.deepStrictEqual([...ids].sort((a, b) => a - b), Array.from({ length: 114 }, (_, i) => i + 1));
    assert.strictEqual(new Set(ids).size, 114);
    assert.strictEqual(new Set(apinames).size, 114);

});

test("every Heroes of Hammerwatch achievement has a valid difficulty (1-5), a positive estimatedTime, and non-empty name/description", () => {

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

test("every one of the 114 Heroes of Hammerwatch achievement name+description pairs matches the catalog data", () => {

    const officialAchievements = [
        ["A Drinking Game", "Consume 10 drinks at the Tavern."],
        ["Agents", "Defeat the Agents."],
        ["Ancient Legends", "Construct 3 statues."],
        ["Arena Champion", "Reach rank 10 in the Arena."],
        ["Attunement", "Attune 10 items at the Magic Anvil."],
        ["Beast Slayer", "Kill 50,000 Beasts."],
        ["Blood Altar", "Use a Blood Altar."],
        ["Bolgarth", "Construct the statue of Bolgarth."],
        ["Book of Monsters", "Find Baltzar's Book of Monsters."],
        ["Calis", "Construct the statue of Calis."],
        ["Captain", "Reach Captain rank with a mercenary."],
        ["Cedric", "Construct the statue of Cedric."],
        ["Celestial Signs", "Solve the constellation puzzle."],
        ["Chapter of Light", "Unlock the Priest."],
        ["Colonel", "Reach Colonel rank with a mercenary."],
        ["Combo Killer", "Chain a combo of 500 kills."],
        ["Combo Sphere", "Unlock Combo."],
        ["Corporal", "Reach Corporal rank with a mercenary."],
        ["Craftsmanship", "Craft 10 items at the Magic Anvil."],
        ["Cursed Relics", "Loot a sarcophagus."],
        ["Daran", "Construct the statue of Daran."],
        ["Demolisher", "Kill 10,000 Constructs."],
        ["Desert Navigation", "Reach the Pyramid without encountering a great threat."],
        ["Elder Wisp", "Defeat the Elder Wisp."],
        ["Ewran", "Construct the statue of Ewran."],
        ["Exorcist", "Kill 75,000 Aberrations."],
        ["Expert Gladiator", "Reach level 20 with a Gladiator."],
        ["Expert Paladin", "Reach level 20 with a Paladin."],
        ["Expert Priest", "Reach level 20 with a Priest."],
        ["Expert Ranger", "Reach level 20 with a Ranger."],
        ["Expert Sorcerer", "Reach level 20 with a Sorcerer."],
        ["Expert Thief", "Reach level 20 with a Thief."],
        ["Expert Warlock", "Reach level 20 with a Warlock."],
        ["Expert Witch Hunter", "Reach level 20 with a Witch Hunter."],
        ["Expert Wizard", "Reach level 20 with a Wizard."],
        ["Exsanguination", "Obtain 10 Blood Rites at the same time."],
        ["Forsaken Tower", "Beat the Forsaken Tower."],
        ["Forsaken Tower Mercenary", "Beat the Forsaken Tower with a mercenary."],
        ["Forsaken Tower NG+", "Beat the Forsaken Tower in NG+."],
        ["Forsaken Tower NG++", "Beat the Forsaken Tower in NG++."],
        ["Forsaken Tower NG+++", "Beat the Forsaken Tower in NG+++."],
        ["Forsaken Tower NG++++", "Beat the Forsaken Tower in NG++++."],
        ["Forsaken Tower NG+++++", "Beat the Forsaken Tower in NG+++++."],
        ["Friends For Life", "Acquire a companion."],
        ["General", "Reach General rank with a mercenary."],
        ["Giant Crustworm", "Defeat the Giant Crustworm."],
        ["Gladiator", "Unlock the Gladiator."],
        ["Gold Digger", "Find 1,000,000 gold."],
        ["Good Fortune", "Spend 5000 gold on positive favor."],
        ["Grandmaster Gladiator", "Reach level 60 with a Gladiator."],
        ["Grandmaster Paladin", "Reach level 60 with a Paladin."],
        ["Grandmaster Priest", "Reach level 60 with a Priest."],
        ["Grandmaster Ranger", "Reach level 60 with a Ranger."],
        ["Grandmaster Sorcerer", "Reach level 60 with a Sorcerer."],
        ["Grandmaster Thief", "Reach level 60 with a Thief."],
        ["Grandmaster Warlock", "Reach level 60 with a Warlock."],
        ["Grandmaster Witch Hunter", "Reach level 60 with a Witch Hunter."],
        ["Grandmaster Wizard", "Reach level 60 with a Wizard."],
        ["Hidden Treasures", "Find 50 secrets."],
        ["Item Gambling", "Try your luck at item gambling."],
        ["Jailbreak", "Unlock the prison cells."],
        ["Krilith's Wolf", "Defeat Krilith's Wolf"],
        ["Kyra", "Construct the statue of Kyra."],
        ["Legacy Shop", "Purchase something at the Legacy Shop."],
        ["Legendary Winnings", "Win a legendary item by gambling."],
        ["Lieutenant", "Reach Lieutenant rank with a mercenary."],
        ["Lunar Shield", "Block ten damage instances with your Lunar Shield."],
        ["Magic Anvil", "Find the Magic Anvil."],
        ["Magic Furnace", "Craft an item using the Magic Furnace."],
        ["Major", "Reach Major rank with a mercenary."],
        ["Master Gladiator", "Reach level 40 with a Gladiator."],
        ["Master Paladin", "Reach level 40 with a Paladin."],
        ["Master Priest", "Reach level 40 with a Priest."],
        ["Master Ranger", "Reach level 40 with a Ranger."],
        ["Master Sorcerer", "Reach level 40 with a Sorcerer."],
        ["Master Thief", "Reach level 40 with a Thief."],
        ["Master Warlock", "Reach level 40 with a Warlock."],
        ["Master Witch Hunter", "Reach level 40 with a Witch Hunter."],
        ["Master Wizard", "Reach level 40 with a Wizard."],
        ["Miner", "Find 1,000 ore."],
        ["Moon Temple", "Beat the Moon Temple."],
        ["Moon Temple Mercenary", "Beat the Moon Temple with a mercenary."],
        ["Moon Temple NG+", "Beat the Moon Temple in NG+."],
        ["Moon Temple NG++", "Beat the Moon Temple in NG++."],
        ["Moon Temple NG+++", "Beat the Moon Temple in NG+++."],
        ["Moon Temple NG++++", "Beat the Moon Temple in NG++++."],
        ["Moon Temple NG+++++", "Beat the Moon Temple in NG+++++."],
        ["Mysterious Monolith", "Use a monolith."],
        ["Nerys", "Defeat Nerys."],
        ["Ozreth", "Construct the statue of Ozreth."],
        ["Phalarath", "Construct the statue of Phalarath."],
        ["Private", "Recruit a mercenary private."],
        ["Pyramid of Prophecy", "Beat the Pyramid of Prophecy."],
        ["Pyramid of Prophecy Mercenary", "Beat the Pyramid of Prophecy with a mercenary."],
        ["Pyramid of Prophecy NG+", "Beat the Pyramid of Prophecy in NG+."],
        ["Pyramid of Prophecy NG++", "Beat the Pyramid of Prophecy in NG++."],
        ["Pyramid of Prophecy NG+++", "Beat the Pyramid of Prophecy in NG+++."],
        ["Pyramid of Prophecy NG++++", "Beat the Pyramid of Prophecy in NG++++."],
        ["Pyramid of Prophecy NG+++++", "Beat the Pyramid of Prophecy in NG+++++."],
        ["Queen Iris", "Defeat Queen Iris."],
        ["Sanctifier", "Kill 100,000 Undead."],
        ["Sergeant", "Reach Sergeant rank with a mercenary."],
        ["Stone Guardian", "Defeat the Stone Guardian."],
        ["The Old Drunkard", "Unlock the Thief."],
        ["The Outlook Restored", "Fully upgrade the Town."],
        ["The Pointy Hat", "Unlock the Wizard."],
        ["The Three Councilors", "Defeat the Three Councilors."],
        ["Thundersnow", "Defeat Thundersnow."],
        ["Unexpected Gifts", "Receive a reward from the Imp."],
        ["Valuable Companion", "Have your companion collect 1,000,000 gold."],
        ["Vampire Lord", "Defeat the Vampire Lord."],
        ["Warden", "Defeat the Warden."],
        ["Watcher", "Defeat the Watcher."],
        ["Wylmir", "Construct the statue of Wylmir."],
    ];

    assert.strictEqual(officialAchievements.length, 114, "sanity check on this test's own reference list");

    const dataPairs = game.achievements
        .map(a => [a.name, a.description])
        .sort((a, b) => a[0].localeCompare(b[0]));

    assert.deepStrictEqual(dataPairs, [...officialAchievements].sort((a, b) => a[0].localeCompare(b[0])));

});
