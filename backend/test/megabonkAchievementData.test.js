import { test } from "node:test";
import assert from "node:assert";

import { getPlannerData } from "../utils/plannerCatalog.js";

// backend/catalog/games/megabonk.json - 139 real achievements sourced
// from a live ISteamUserStats/GetSchemaForGame/v2 response for appid
// 3405340 (fetched through this app's own services/steamApi.js).
// Hidden achievements have no Steam description; where present, their
// description here is researched from community 100% guides and cited in
// the frontend guide header. difficulty/estimatedTime/missable are curatorial.
const game = getPlannerData("megabonk");

test("getPlannerData('megabonk') returns real planner data with 139 curated achievements", () => {

    assert.ok(game, "expected real planner data for megabonk");
    assert.ok(Array.isArray(game.achievements));
    assert.strictEqual(game.achievements.length, 139);

});

test("every Megabonk achievement has a unique id from 1 to 139 and a unique apiname", () => {

    const ids = game.achievements.map(a => a.id);
    const apinames = game.achievements.map(a => a.apiname);

    assert.deepStrictEqual([...ids].sort((a, b) => a - b), Array.from({ length: 139 }, (_, i) => i + 1));
    assert.strictEqual(new Set(ids).size, 139);
    assert.strictEqual(new Set(apinames).size, 139);

});

test("every Megabonk achievement has a valid difficulty (1-5), a positive estimatedTime, and non-empty name/description", () => {

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

test("every one of the 139 Megabonk achievement name+description pairs matches the catalog data", () => {

    const officialAchievements = [
        ["Aegis", "Block 500 damage with Armor as Sir Oofie"],
        ["Amog", "Poison 50 000 enemies with Moldy Cheese"],
        ["Anvil", "Complete 3 Challenges"],
        ["Armor Tome", "Kill 5 000 enemies as Sir Oofie"],
        ["Athena", "Get the Thorns Tome to level 9"],
        ["Attraction Tome", "Use Shrine of Succ 8 times"],
        ["Aura", "Don't take any damage for 2 minutes"],
        ["Axe", "Kill 2 000 enemies using the Sword"],
        ["Bananarang", "Find the hidden Banana"],
        ["Bandit", "Find and defeat Bandit in the Desert"],
        ["Banish", "Complete 40 quests"],
        ["Battery", "Upgrade Cooldown Tome to Level 5"],
        ["Birdo", "Kill 100 enemies using the Tornado weapon while carried by a tornado on Desert "],
        ["Black Hole", "Get Knockback Tome to Level 10"],
        ["Blood Magic", "Get the Bloody Tome to Level 12"],
        ["Blood Tome", "Kill 12 500 enemies"],
        ["Bloody Cleaver", "Reach Level 50 as Vlad"],
        ["Blue Frog", "Find the frogs on Forest Stage 2"],
        ["Bob (Dead)", "Survive the Final Swarm for 2 minues"],
        ["Bob's Light", "Kill Big Bob on Graveyard using damage from charging a lamp as the finishing blow"],
        ["Boombox", "Find and activate all the boomboxes on Forest"],
        ["Boss Buster", "Defeat a Stage Boss in under 30 seconds"],
        ["Brass Knuckles", "Kill 5 000 enemies with the Sword"],
        ["Bush", "Find and defeat Bush in the Forest"],
        ["Cactus", "Kill 100 cactus enemies with Thorns damage"],
        ["Calcium", "Kill 1 000 Skeletons"],
        ["Cannon", "Kill 5 000 enemies using Rockets"],
        ["Challenges1", "Complete 5 Challenges"],
        ["Challenges2", "Complete 10 Challenges"],
        ["Challenges3", "Complete 20 Challenges"],
        ["Challenges4", "Complete 30 Challenges"],
        ["Chaos Tome", "Charge every Charge Shrine on a Tier 3 run across all 3 stages without leaving the charge zone"],
        ["Cheesy Hat", "As Amog, defeat a Tier 3 final boss with 8 Moldy Cheese and 1 Snek in your inventory"],
        ["Chonkplate", "Get Max HP to 500"],
        ["CL4NK", "Complete Forest Tier 1"],
        ["Clown", "As Athena, kill 500 enemies using Quin's Mask"],
        ["Corrupted Sword", "Get Cursed Tome to Level 20 in under 10 minutes"],
        ["Crown", "Get a gold star on every character (Rank 100)"],
        ["Cursed Doll", "Die 10 times"],
        ["Cursed Gloves", "Get the Cursed Tome to level 10"],
        ["Cursed Tome", "Beat the Stage Boss in under 5 minutes"],
        ["Demonic Blade", "Heal for 350 HP using Lifesteal"],
        ["Demonic Blood", "Increase Max HP with Blood Magic 400 times"],
        ["Demonic Soul", "Reach Level 30 as Calcium"],
        ["Desert", "Teleport to the 2nd stage on Forest Tier 2 as CL4NK"],
        ["Dexecutioner", "Kill 12 500 enemies using the sword"],
        ["Dice", "Get Luck Tome to Level 12"],
        ["Dicehead", "Complete 100 quests"],
        ["Dragon's Breath", "Kill 1 000 Wisps as Fox on Desert"],
        ["Dragonfire", "Kill 4 000 enemies using Fire damage"],
        ["Duration Tome", "Upgrade Axe to level 10"],
        ["Eagle Claw", "Kill 10 000 enemies as Birdo"],
        ["Echo Shard", "Upgrade XP Tome to Level 8"],
        ["Energy Core", "Defeat the Final Boss 2 times"],
        ["Forbidden Juice", "Crit 100 times"],
        ["Frostwalker", "Freeze 1 000 enemies with the Ice Cube"],
        ["Gamer Goggles", "Defeat a Stage Boss with less than 10% HP left"],
        ["Gas Mask", "Kill 5 000 enemies using amog"],
        ["Ghost", "Survive the Final Swarm for 60s"],
        ["Golden Sneakers", "Break 150 pots"],
        ["Grandma's Secret Tonic", "Kill 3 000 enemies using the Sniper Rifle"],
        ["Graveyard", "As Calcium on Desert Tier 2, summon and defeat the undead boss"],
        ["Green Frog", "Find the frogs on Forest Stage 1"],
        ["Head Pot", "As Roberto, obtain 4x Pot (stainless steel) in a single run"],
        ["Headset", "As Ninja, complete Desert Stage 1 with at least 2 Boss Curse shrines activated"],
        ["Hero Sword", "Defeat a Stage Boss without picking up any items, powerups or using shrines."],
        ["Holy Book", "Kill a first Stage Boss without taking any damage that run"],
        ["Ice Crystal", "Kill 50 enemies with the Frostwalker"],
        ["Idle Juice", "Kill 500 enemies while standing still"],
        ["Iron Helm", "As Sir Oofie, defeat the final boss of Forest 3 using Sword, Hero Sword, Corrupted Sword and Scythe"],
        ["Joe's Dagger", "Kill 10 000 enemies using the Dexecutioner"],
        ["Katana", "5% chance to find upon breaking a Tumbleweed on Desert Stage 1"],
        ["Kevin", "Obtain 3 Leeching Crystal in a run"],
        ["Kevin Hat", "Get punched by Kevin 100,000 times"],
        ["Key", "Purchase 25 chests"],
        ["Leeching Crystal", "Upgrade Regen Tome to Level 8"],
        ["Lightning Orb", "Kill 3 000 enemies using Lightning damage"],
        ["Looooong Top Hat", "Get 300,000 kills on Forest in a single run"],
        ["Luck Tome", "0.01% chance to drop when killing an enemy"],
        ["Magic hat", "As Fox, get Firestaff, Lightning Staff & Blood Magic to level 40"],
        ["Megachad", "Get the Damage Tome to Level 7"],
        ["Microwave", "Blow up 50 microwaves"],
        ["Mines", "Kill 7 500 enemies using Rockets"],
        ["Monke", "Find and release Monke in the Forest"],
        ["Ninja", "Complete Desert Tier 1"],
        ["Noelle", "Use a Microwave to duplicate Ice Crystal 3 times in a row"],
        ["Ogre", "Kill 15 000 Goblins"],
        ["Old Mask", "Find on Graveyard"],
        ["Pilot Helm", "As Birdo, kill 1000 enemies using Mines while flying in the air"],
        ["Poison Flask", "Kill Scorpionussy on Desert 3 times"],
        ["Poison Gloves", "Use a Microwave to duplicate Moldy Cheese 3 times in a row"],
        ["Pot (stainless steel)", "Open every chest and pot in the first crypt on Graveyard"],
        ["Pumpkin", "As Roberto, break every pumpkin on Graveyard"],
        ["Quantity Tome", "Fire 5 000 projectiles"],
        ["Quin's Mask", "Defeat a Stage Boss as Athena, landing the killing blow with Aegis"],
        ["Red Frog", "Find the frogs on Forest Stage 3"],
        ["Refresh", "Complete 20 quests"],
        ["Revolver", "Kill 7 500 enemies"],
        ["Roberto", "Kill Spooky Steve"],
        ["Robinette", "Complete Forest Tier 2"],
        ["Rockets", "Kill 15 000 enemies as CL4NK"],
        ["Santa Hat", "Open the present hidden on Forest"],
        ["Scythe", "Kill Big Bob on Graveyard"],
        ["Shady Hat (black)", "Buy 100 items from a Common Shady Guy"],
        ["Shady Hat (blue)", "Buy 80 items from a Rare Shady Guy"],
        ["Shady Hat (gold)", "Buy 50 items from a Legendary Shady Guy"],
        ["Shady Hat (pink)", "Buy 60 items from an Epic Shady Guy"],
        ["Shattered Knowledge", "Upgrade Attraction Tome to Level 8"],
        ["Sheriff's Hat", "As CL4NK, kill any boss or miniboss in under 1 second"],
        ["Shotgun", "5% chance to find upon breaking a Tumbleweed on Desert Stage 2"],
        ["Sir Chadwell", "Complete Forest Tier 3"],
        ["Skip", "Complete 30 quests"],
        ["Skuleg", "Obtain 40% Difficulty"],
        ["Snek", "Discover in the secret room in the crypt on Graveyard"],
        ["Sniper", "Get Precision Tome to Level 10"],
        ["Soul Harvester", "Survive the Final Swarm for 6 minutes"],
        ["Space Noodle", "Complete Desert Tier 2 as Tony McZoom"],
        ["Spaceman", "Complete 6 challenges"],
        ["Speedboi", "Complete a stage with at least 2 Boss Curse activated"],
        ["Sucky Magnet", "Complete every single Charge Shrine on the map"],
        ["Sunglasses", "As Calcium, finish the final boss fight on Graveyard in under 60 seconds"],
        ["Tactical Glasses", "Defeat a Miniboss in 25s"],
        ["Thorns Tome", "Block 250 attacks with Aegis"],
        ["Toggler", "Buy 40 unlocks"],
        ["Tome Slots", "Complete 35 quests"],
        ["Tome Slots 2", "Complete 55 quests"],
        ["Tony McZoom", "Complete 2 challenges"],
        ["Top Hat", "Get 100,000 kills on Forest in a single run"],
        ["Tornado", "Charge a total of 5 Charge Shrines during Sandstorms on Desert"],
        ["Toxic Barrel", "Kill 2 000 enemies using Poison damage"],
        ["Turbo Skates", "Upgrade both Cooldown and Agility Tome to level 5 in a run"],
        ["Turbo Socks", "Upgrade Agility Tome to Level 5"],
        ["Vlad", "Complete Desert Tier 2"],
        ["Wallhugger", "Avoid fall damage 10 times (across any number of runs) by hugging a wall as you fall."],
        ["Weapon Slots", "Complete 25 quests"],
        ["Weapon Slots 2", "Complete 45 quests"],
        ["Wireless Dagger", "Get the Lightning Staff to Level 15"],
        ["Wizard's Hat", "As Vlad, use Pot (stainless steel) to upgrade any weapon above its max level of 40"],
        ["XP Tome", "Break 20 pots in a single run"],
    ];

    assert.strictEqual(officialAchievements.length, 139, "sanity check on this test's own reference list");

    const dataPairs = game.achievements
        .map(a => [a.name, a.description])
        .sort((a, b) => a[0].localeCompare(b[0]));

    assert.deepStrictEqual(dataPairs, [...officialAchievements].sort((a, b) => a[0].localeCompare(b[0])));

});
