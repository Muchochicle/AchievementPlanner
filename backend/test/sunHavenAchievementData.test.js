import { test } from "node:test";
import assert from "node:assert";

import { getPlannerData } from "../utils/plannerCatalog.js";

// backend/catalog/games/sun-haven.json - 190 real achievements sourced
// from a live ISteamUserStats/GetSchemaForGame/v2 response for appid
// 1432860 (fetched through this app's own services/steamApi.js).
// This game has no hidden achievements: all 190 ship a real, official
// Steam description, quoted verbatim below.
// difficulty/estimatedTime/missable remain curatorial judgments.
const game = getPlannerData("sun-haven");

test("getPlannerData('sun-haven') returns real planner data with 190 curated achievements", () => {

    assert.ok(game, "expected real planner data for sun-haven");
    assert.ok(Array.isArray(game.achievements));
    assert.strictEqual(game.achievements.length, 190);

});

test("every Sun Haven achievement has a unique id from 1 to 190 and a unique apiname", () => {

    const ids = game.achievements.map(a => a.id);
    const apinames = game.achievements.map(a => a.apiname);

    assert.deepStrictEqual([...ids].sort((a, b) => a - b), Array.from({ length: 190 }, (_, i) => i + 1));
    assert.strictEqual(new Set(ids).size, 190);
    assert.strictEqual(new Set(apinames).size, 190);

});

test("every Sun Haven achievement has a valid difficulty (1-5), a positive estimatedTime, and non-empty name/description", () => {

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

test("every one of the 190 Sun Haven achievement name+description pairs matches the live GetSchemaForGame response", () => {

    const officialAchievements = [
        ["'Tis the Season", "Reach the Winter Season"],
        ["A Complete Collection", "Complete the Museum"],
        ["A Dream of Adventure", "Select the Adventure Keepsake"],
        ["A Dream of Peace", "Select the Peace Keepsake"],
        ["A Dream of Riches", "Select the Riches Keepsake"],
        ["A Dream of Romance", "Select the Romance Keepsake"],
        ["A Hop, Skip, and a Jump", "Cast Air Skip 100 times"],
        ["A New Year", "Reach Year 2"],
        ["A Second Chance", "Give Stephen a second chance"],
        ["A Small Fortune", "Collect 50,000 gold"],
        ["Adept Explorer", "Reach level 15 Exploration"],
        ["Adept Farmer", "Reach level 15 Farming"],
        ["Adept Fighter", "Reach level 15 Combat"],
        ["Adept Fisher", "Reach level 15 Fishing"],
        ["Adept Miner", "Reach level 15 Mining"],
        ["Adept Spelunker", "Reach Treasure Room 2 in the mines"],
        ["Advanced Angler", "Reach level 50 Fishing"],
        ["Advanced Explorer", "Reach level 50 Exploration"],
        ["Advanced Farmer", "Reach level 50 Farming"],
        ["Advanced Fighter", "Reach level 50 Combat"],
        ["Advanced Miner", "Reach level 50 Mining"],
        ["Advanced Spelunker", "Reach Treasure Room 3 in the mines"],
        ["An Apple a day...", "Gift an apple to Wornhardt"],
        ["An Unexpected Friend", "Reach Commonality with Wesley"],
        ["And a Moo Moo There", "Place your first cow"],
        ["Angelic Love", "Reach 20 hearts with Miyeon"],
        ["Appease the Moon Dragon", "Appease Dynus through an offering"],
        ["Artistic Love", "Reach 20 hearts with Jun"],
        ["Better with a Friend", "Play Sun Haven with 1 friend"],
        ["Better with a Group", "Play Sun Haven with 2 friends"],
        ["Better with a Party", "Play Sun Haven with 4 or more friends"],
        ["Better with a Team", "Play Sun Haven with 3 friends"],
        ["Big Heart", "Reach 100 Health"],
        ["Blast Off", "Cast Air Skip 1000 times"],
        ["Bucket of Love", "Reach 20 hearts with Zaria"],
        ["Candy Crushed I", "Defeat the level 20 Candy Slime in the Boss Arena"],
        ["Candy Crushed II", "Defeat the level 30 Candy Slime in the Boss Arena"],
        ["Candy Crushed III", "Defeat the level 40 Candy Slime in the Boss Arena"],
        ["Candy Crushed IV", "Defeat the level 50 Candy Slime in the Boss Arena"],
        ["Chef's Kiss", "Feed the Farm Snaccoon"],
        ["Cosmic Love", "Reach 20 hearts with Lucius"],
        ["Create a Demon Character", "Create a Demon character"],
        ["Create a Human Character", "Create a Human character"],
        ["Create a Naga Character", "Create a Naga character"],
        ["Create an Amari Character", "Create an Amari character"],
        ["Create an Angel Character", "Create an Angel character"],
        ["Create an Elemental Character", "Create an Elemental character"],
        ["Create an Elf Character", "Create an Elf character"],
        ["Crime Doesn't Pay", "Solve the case of the stolen artifacts in the Great City"],
        ["Customize your Character I!", "Pick a cool hair style"],
        ["Customize your Character II!", "Pick a cute hair style"],
        ["Deep Pockets", "Collect 100,000 gold"],
        ["Defeat King Slimius XVII", "Defeat the Slime Boss"],
        ["Defeat Qwiz'lothra", "Defeat Qwiz'lothra and save Brinestone Deeps"],
        ["Defeat the Heat Viper", "Defeat the Heat Viper"],
        ["Defeat the Moon Dragon", "Defeat Dynus in combat"],
        ["Defender of the Forest", "Fight The Glorite Miners"],
        ["Demonic Love", "Reach 20 hearts with Xyla"],
        ["Die", "Faint by reaching 0 health"],
        ["Dungeoneer I", "Beat Floor 5 in the Combat Dungeon"],
        ["Dungeoneer II", "Beat Floor 15 in the Combat Dungeon"],
        ["Dungeoneer III", "Beat Floor 30 in the Combat Dungeon"],
        ["Dynus's City", "Complete the Tickets Altar"],
        ["Dynus's Feast", "Complete the Meals Altar"],
        ["Dynus's Fish", "Complete the Fishing Altar"],
        ["Dynus's Future", "Complete the Keepsake Altar"],
        ["Dynus's Gems", "Complete the Mining Altar"],
        ["Dynus's Harvest", "Complete the Farming Altar"],
        ["Dynus's Hoard", "Complete the Gold Altar"],
        ["Dynus's Orchard", "Complete the Fruit Altar"],
        ["Dynus's World", "Complete the Exploration Altar"],
        ["Expert Angler", "Reach level 30 Fishing"],
        ["Expert Explorer", "Reach level 30 Exploration"],
        ["Expert Farmer", "Reach level 30 Farming"],
        ["Expert Fighter", "Reach level 30 Combat"],
        ["Expert Miner", "Reach level 30 Mining"],
        ["Expert Spelunker", "Reach Treasure Room 4 in the mines"],
        ["Extra Big Heart", "Reach 200 Health"],
        ["Falling Down", "Reach the Fall Season"],
        ["Fashion Icon", "Restore the Clothing Store"],
        ["Fiery Love", "Reach 20 hearts with Lucia"],
        ["Freeing Love", "Reach 20 hearts with Donovan"],
        ["Golden Love", "Reach 20 hearts with Anne"],
        ["Good Samaritan", "Restore the Cafe"],
        ["Heartbreaker", "Get Divorced"],
        ["Heartfelt Love", "Reach 20 hearts with Wornhardt"],
        ["Heroic Love", "Reach 20 hearts with Karish"],
        ["Historic Love", "Reach 20 hearts with Thorioan"],
        ["Hopping Love", "Reach 20 hearts with Catherine"],
        ["I Do", "Get Married"],
        ["Jump 100 Times", "Jump 100 times"],
        ["Jump 1000 Times", "Jump 1000 times"],
        ["Just a Trim", "Restore the Salon"],
        ["Justice", "Send Stephen to Jail"],
        ["Large Catch", "Harvest a large fishing net"],
        ["Legendary Fisherman", "Catch a legendary fish"],
        ["Legendary Great Sword Wielder", "Purchase the Legendary Great Sword from the Great Smithery"],
        ["Legendary Hammer Wielder", "Purchase the Legendary Hammer from the Great Smithery"],
        ["Long Lost Love", "Reach 20 hearts with Kai"],
        ["Love at First Sight", "Reach 20 hearts with Lynn"],
        ["Lumberjacked I", "Defeat the level 20 Tree Guardian in the Boss Arena"],
        ["Lumberjacked II", "Defeat the level 30 Tree Guardian in the Boss Arena"],
        ["Lumberjacked III", "Defeat the level 40 Tree Guardian in the Boss Arena"],
        ["Lumberjacked IV", "Defeat the level 50 Tree Guardian in the Boss Arena"],
        ["Made of Money", "Pay your way out of the Glorite Miners"],
        ["Magic Touch", "Reach 100 Mana"],
        ["Magical Love", "Reach 20 hearts with Iris"],
        ["Mana In Hand", "Collect 1,000 Mana Orbs"],
        ["Mana Out of Hand", "Collect 10,000 Mana Orbs"],
        ["Master Angler", "Unlock every skill point in Fishing"],
        ["Master Explorer", "Unlock every skill point in Exploration"],
        ["Master Farmer", "Unlock every skill point in Farming"],
        ["Master Fighter", "Unlock every skill point in Combat"],
        ["Master Miner", "Unlock every skill point in Mining"],
        ["Monster House", "Unlock Withergate"],
        ["Novice Angler", "Reach level 5 Fishing"],
        ["Novice Explorer", "Reach level 5 Exploration"],
        ["Novice Farmer", "Reach level 5 Farming"],
        ["Novice Fighter", "Reach level 5 Combat"],
        ["Novice Miner", "Reach level 5 Mining"],
        ["Novice Spelunker", "Reach Treasure Room 1 in the mines"],
        ["Nya Love", "Reach 20 hearts with Kitty"],
        ["One More Thyme", "Defeat Weedil with Help"],
        ["Overflowing with Magic", "Reach 300 Mana"],
        ["Past Your Bedtime", "Pass out by being awake at 12:00am"],
        ["Pocket Change", "Collect 10,000 gold"],
        ["Princely Love", "Reach 20 hearts with Darius"],
        ["Protective Love", "Reach 20 hearts with Nathaniel"],
        ["Rich", "Collect 1,000 Tickets"],
        ["Riding into the Sunset", "Ride a mount"],
        ["Rock and Roll", "Defeat Krusty with help"],
        ["Rocky Road", "Defeat Krusty with no help"],
        ["Royalty", "Collect 10,000 Tickets"],
        ["Sharp Love", "Reach 20 hearts with Vivi"],
        ["Sizzlin' Summer", "Reach the Summer Season"],
        ["Slime Squisher", "Free Brinestone Deeps of the mindcontrolling slimes"],
        ["Small Catch", "Harvest a small fishing net"],
        ["Snake Slayer I", "Defeat the level 20 Tyrantviper in the Boss Arena"],
        ["Snake Slayer II", "Defeat the level 30 Tyrantviper in the Boss Arena"],
        ["Snake Slayer III", "Defeat the level 40 Tyrantviper in the Boss Arena"],
        ["Snake Slayer IV", "Defeat the level 50 Tyrantviper in the Boss Arena"],
        ["Spell Booster", "Purchase a staff from the Brinestone staff shop"],
        ["Sprouting Love", "Reach 20 hearts with Wesley"],
        ["Sweet Love", "Reach 20 hearts with Liam"],
        ["Symphonic Love", "Reach 20 hearts with Claude"],
        ["Teleport: Brinestone Deeps", "Obtain the Brinestone Deeps Teleport Spell"],
        ["Teleport: Nel'Vari", "Obtain the Nel'Vari Teleport Spell"],
        ["Teleport: Sun Haven", "Obtain the Sun Haven Teleport Spell"],
        ["Teleport: The Great City", "Obtain the ability to teleport to the Great City"],
        ["Teleport: Withergate", "Obtain the Withergate Teleport Spell"],
        ["The Deeps", "Unlock the Brinestone Deeps"],
        ["The Great City", "Unlock the Great City"],
        ["Timeless Love", "Reach 20 hearts with Elyssia"],
        ["To the Bottom", "Defeat Dizzy"],
        ["To Woo a Baker", "Reach 10 hearts with Liam"],
        ["To Woo a Blacksmith", "Reach 10 hearts with Lynn"],
        ["To Woo a Corsair", "Reach 10 hearts with Zaria"],
        ["To Woo a Counselor", "Reach 10 hearts with Jun"],
        ["To Woo a Detective", "Reach 10 hearts with Elyssia"],
        ["To Woo a Doctor", "Reach 10 hearts with Wornhardt"],
        ["To Woo a Hero", "Reach 10 hearts with Karish"],
        ["To Woo a Historian", "Reach 10 hearts with Thorian"],
        ["To Woo a Merchant", "Reach 10 hearts with Anne"],
        ["To Woo a Musician", "Reach 10 hearts with Claude"],
        ["To Woo a Prince", "Reach 10 hearts with Darius"],
        ["To Woo a Seamstress", "Reach 10 hearts with Kitty"],
        ["To Woo a Warrior", "Reach 10 hearts with Shang"],
        ["To Woo a Wind Mage", "Reach 10 hearts with Vaan"],
        ["To Woo a Witch", "Reach 10 hearts with Catherine"],
        ["To Woo an Adventurer", "Reach 10 hearts with Donovan"],
        ["To Woo an Angel", "Reach 10 hearts with Miyeon"],
        ["To Woo an Architect", "Reach 10 hearts with Xyla"],
        ["To Woo an Assassin", "Reach 10 hearts with Vivi"],
        ["To Woo an Enchantress", "Reach 10 hearts with Iris"],
        ["To Woo the Archmage", "Reach 10 hearts with Lucia"],
        ["To Woo the Assistant", "Reach 10 hearts with Wesley"],
        ["To Woo the Captain", "Reach 10 hearts with Nathaniel"],
        ["To Woo the Forgetful", "Reach 10 hearts with Kai"],
        ["To Woo the Moon", "10 hearts with Lucius"],
        ["Train Skipper", "Skip Sun Haven's intro and receive the Time Keepsake"],
        ["Treasury", "Collect 1,000,000 gold"],
        ["Tree House", "Unlock Nel'Vari"],
        ["Valiant Love", "Reach 20 hearts with Shang"],
        ["We Have a Winner!", "Win a carnival Game"],
        ["Wealthy", "Collect 500,000 gold"],
        ["Weed Killer", "Defeat Weedil Alone"],
        ["Wholesome Neighbor", "Restore the neighborhood dog house"],
        ["With a Cluck Cluck Here", "Place your first chicken"],
        ["Worldly Love", "Reach 20 hearts with Vaan"],
        ["Your New Best Friend", "Leash a pet"],
    ];

    assert.strictEqual(officialAchievements.length, 190, "sanity check on this test's own reference list");

    const dataPairs = game.achievements
        .map(a => [a.name, a.description])
        .sort((a, b) => a[0].localeCompare(b[0]));

    assert.deepStrictEqual(dataPairs, [...officialAchievements].sort((a, b) => a[0].localeCompare(b[0])));

});
