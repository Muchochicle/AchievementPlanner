import { test } from "node:test";
import assert from "node:assert";

import { getPlannerData } from "../utils/plannerCatalog.js";

// backend/catalog/games/book-of-demons.json - 202 real achievements sourced
// from a live ISteamUserStats/GetSchemaForGame/v2 response for appid
// 449960 (fetched through this app's own services/steamApi.js). None are
// hidden; every description is Steam's own real text.
// difficulty/estimatedTime/missable remain curatorial judgments.
const game = getPlannerData("book-of-demons");

test("getPlannerData('book-of-demons') returns real planner data with 202 curated achievements", () => {

    assert.ok(game, "expected real planner data for book-of-demons");
    assert.ok(Array.isArray(game.achievements));
    assert.strictEqual(game.achievements.length, 202);

});

test("every Book of Demons achievement has a unique id from 1 to 202 and a unique apiname", () => {

    const ids = game.achievements.map(a => a.id);
    const apinames = game.achievements.map(a => a.apiname);

    assert.deepStrictEqual([...ids].sort((a, b) => a - b), Array.from({ length: 202 }, (_, i) => i + 1));
    assert.strictEqual(new Set(ids).size, 202);
    assert.strictEqual(new Set(apinames).size, 202);

});

test("every Book of Demons achievement has a valid difficulty (1-5), a positive estimatedTime, and non-empty name/description", () => {

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

test("every one of the 202 Book of Demons achievement name+description pairs matches the catalog data", () => {

    const officialAchievements = [
        ["'Tis but a Scratch!", "Resurect yourself once in Rogulike mode playing one character"],
        ["1 Step Back", "Downgrade 1 card"],
        ["2 Steps Back", "Downgrade 1 magic card"],
        ["3 Steps Back", "Downgrade 1 legendary card"],
        ["A-maze-ing!", "Finish maze without dying"],
        ["A! A! A! A! Stayin' Alive", "Finish 20 games in a row without dying"],
        ["Adept Bone Collector", "Defeat 10 Skeletons"],
        ["Adept Exorcist", "Defeat 10 Demons"],
        ["Adept Exterminator", "Defeat 10 Spiders"],
        ["Adept Ghostbuster", "Defeat 10 Ghosts"],
        ["Adept Goatherd", "Defeat 10 Goatmen"],
        ["Adept Mason", "Defeat 10 Gargoyles"],
        ["Adept Survivor", "Defeat 10 Zombies"],
        ["All Hail the New King", "Defeat the Archdemon with any hero"],
        ["Always Ahead", "Finish 5 dungeon levels without backtracing your steps"],
        ["Arcane Library", "Upgrade all Mages's Cards to level 2"],
        ["Arcane Sweep", "Pick 1000 mana globes from the ground"],
        ["Averting the Sacrilege", "Defeat the Antipope with any second hero"],
        ["Badger", "Finish a big Freeplay game on Hard difficulty receiving all the badges"],
        ["Badger, Badger", "Finish a big Freeplay game on Nightmare difficulty receiving all the badges"],
        ["Badger, Badger, Badger", "Finish a big Freeplay game on Massacre difficulty receiving all the badges"],
        ["Bash!", "Destroy 1000 enemy's shields"],
        ["Battering Ram", "Bash 3 monsters with a single Charge card use (Warrior only)"],
        ["Birthday Suit", "Finish a medium or longer Freeplay game on Nightmare difficulty without equipping any card"],
        ["Blast!", "Throw bombs 10 times (Warrior only)"],
        ["Blind as a Bat", "Miss 5000 times"],
        ["Boom!", "Throw bombs 100 times (Warrior only)"],
        ["Breaking the Ice", "Defeat 30 monsters that are frozen"],
        ["Breaking the Ritual", "Defeat the Antipope with any hero"],
        ["Bronze Division", "Gain all other bronze level achievements in Book of Demons"],
        ["Bull's Eye!", "Unlock all 10 card slots"],
        ["Captain Planet", "By your powers combined I am Captain Planet"],
        ["Cata-bomb!", "Finish catacombs without dying"],
        ["Chit Chat", "Talk 5 times with villagers"],
        ["Cleanser", "Clear 5 dungeon levels"],
        ["Cleansing Fire", "Burn 300 monsters to ashes"],
        ["Cleansing Flame", "Burn 100 monsters to ashes"],
        ["Cleansing Spark", "Burn 30 monsters to ashes"],
        ["Clumsy as an Ox", "Miss 500 times"],
        ["Commando", "Finish a big Freeplay game on Hard difficulty without any form of healing"],
        ["Crash!", "Destroy 100 enemy's shields"],
        ["Craving Battle", "Defeat Cook without purchasing Cauldron"],
        ["Cursed", "Destroy 5000 empty barrels in the dungeon"],
        ["Cutthroat Kitchen", "Defeat the Cook with any second hero"],
        ["Deck Shuffle", "Equip a slot with a card 10 times in total"],
        ["Deck Strategy", "Equip a slot with a card 500 times in total"],
        ["Deck Tactics", "Equip a slot with a card 100 times in total"],
        ["Delicious Stew", "Buy content of the Magical Cauldron 10 times"],
        ["Dirty Hands", "Pick up 100 crap"],
        ["Don't Boss Around", "Defeat 50 boss monsters"],
        ["Don't Die Hard", "Finish a big game on Hard difficulty without dying"],
        ["Don't Die Hard with a Vengeance", "Finish a big game on Massacre difficulty without dying"],
        ["Don't Die Harder", "Finish a big game on Nightmare difficulty without dying"],
        ["Don't Look Back", "Finish a dungeon level without backtracing your steps"],
        ["Easy Come, Easy Go", "Spent 1000 gold"],
        ["Eeny, Meeny, Miny, Moe", "Barrel, barrel, Zombie, barrel. Barrel, barrel, Zombie, crap!"],
        ["Ending the Blasphemy", "Defeat the Antipope with all three heroes"],
        ["Epic Armory", "Upgrade all Warrior's Cards to level 3"],
        ["Fancy Stash", "Upgrade all Rogue's Cards to level 2"],
        ["Fantastic Three", "Reach a level cap with all three class heroes"],
        ["Fast & Furious", "Defeat 100 monsters in 20 seconds"],
        ["Faster & Furier", "Defeat 150 monsters in 15 seconds"],
        ["First Riddle", "Identify your first card with Sage"],
        ["Frequent Client", "Charge your cards 50 times at the Fortune Teller's"],
        ["Frequent Patient", "Let the Healer heal you 100 times"],
        ["Full Armory", "Find all of Warrior's Cards"],
        ["Full Library", "Find all of Mage's Cards"],
        ["Full Stash", "Find all of Rogue's Cards"],
        ["Game of Crows", "The crows are singing, winter must be coming..."],
        ["Getting Better", "Finish 25 games"],
        ["Golden Bowl", "Have 2 golden awards in cauldron"],
        ["Golden Division", "Gain all other gold level achievements in Book of Demons"],
        ["Golden Pot", "Have 1 golden award in cauldron"],
        ["Golden Vessel", "Have 3 golden awards in cauldron"],
        ["Gossip Girl", "Talk 25 times with villagers"],
        ["Grand Armory", "Upgrade all Warrior's Cards to level 2"],
        ["Hardcore Nudist", "Finish a medium or longer Freeplay game on Massacre difficulty without equipping any card"],
        ["Heart Hoarder", "Pick 500 hearts from the ground"],
        ["Heartbreaker", "Destroy 1000 monster hearts in total"],
        ["Heartcracker", "Destroy 10000 monster hearts in total"],
        ["Heartpicker", "Pick 50 hearts from the ground"],
        ["Heartripper", "Destroy 100000 monster hearts in total"],
        ["Hell Yeah!", "Finish hell without dying"],
        ["Hell's Kitchen", "Defeat the Cook with any hero"],
        ["Hellraiser", "Unlock Nightmare difficulty with all heroes"],
        ["Highway to Hell", "Leave 200000 footprints in the dungeon"],
        ["Holy Light", "Spent 100 000 gold on healing and restoring mana at Healer's"],
        ["Horrifying", "Scare 50 monsters with a single Fear card use (Rogue only)"],
        ["Hungry Campaign", "Defeat Antipope without purchasing Cauldron"],
        ["Hypochondriac", "Let the Healer heal you 300 times"],
        ["I'll Never Wash It Off", "Pick up 1000 crap"],
        ["I'm Invincible!", "Resurect yourself 8 times in Rogulike mode playing one character"],
        ["Ice Ice Baby", "Defeat 300 monsters that are frozen"],
        ["In Good Hands", "Let the Healer heal you 30 times"],
        ["Inter-raptor", "Interrupt 10 enemy's spells or skills"],
        ["Inter-raptor Evolved", "Interrupt 100 enemy's spells or skills"],
        ["Inter-raptor Rex", "Interrupt 500 enemy's spells or skills"],
        ["Jinxed", "Destroy 500 empty barrels in the dungeon"],
        ["Just a Flesh Wound", "Resurect yourself 5 times in Rogulike mode playing one character"],
        ["KABOOM!", "Throw bombs 500 times (Warrior only) "],
        ["Keep It Cool", "Defeat 100 monsters that are frozen"],
        ["King Cobra", "Defeat 300 monsters with poison"],
        ["Kitchen Nightmare", "Defeat the Cook with all three heroes"],
        ["Lay on Hands", "Spent 10 000 gold on healing and restoring mana at Healer's"],
        ["Legendary Bone Collector", "Defeat 1000 Skeletons"],
        ["Legendary Exorcist", "Defeat 1000 Demons"],
        ["Legendary Exterminator", "Defeat 1000 Spiders"],
        ["Legendary Ghostbuster", "Defeat 1000 Ghosts"],
        ["Legendary Goatherd", "Defeat 1000 Goatmen"],
        ["Legendary Mason", "Defeat 1000 Gargoyles"],
        ["Legendary Stash", "Upgrade all Rogue's Cards to level 3"],
        ["Legendary Survivor", "Defeat 1000 Zombies"],
        ["Lightwell", "Spent 50 000 gold on healing and restoring mana at Healer's"],
        ["Loads of Ammo", "Shoot 100 equiped arrows (Rogue only)"],
        ["Loyal Customer", "Charge your cards 100 times at the Fortune Teller's"],
        ["Lucky 7", "Unlock the 7th cards slot"],
        ["Mages Companion", "Summon a golem 50 times (Mage only)"],
        ["Magic Friend", "Summon a golem 5 times (Mage only)"],
        ["Magic Sweep", "Pick 50 mana globes from the ground"],
        ["Magnificent Duo", "Reach a level cap with two different class heroes"],
        ["Master Bone Collector", "Defeat 100 Skeletons"],
        ["Master Chef", "Master any quest for 1 star"],
        ["Master Exorcist", "Defeat 100 Demons"],
        ["Master Exterminator", "Defeat 100 Spiders"],
        ["Master Ghostbuster", "Defeat 100 Ghosts"],
        ["Master Goatherd", "Defeat 100 Goatmen"],
        ["Master Mason", "Defeat 100 Gargoyles"],
        ["Master of Disaster", "Master any quest for 3 stars"],
        ["Master of Puppets", "Master a quest for 2 stars"],
        ["Master Survivor", "Defeat 100 Zombies"],
        ["Money Isn't Everything", "Spent 100000 gold"],
        ["Mystic Sweep", "Pick 500 mana globes from the ground"],
        ["Nightmare on Elm Street", "Unlock Hard difficulty with all heroes"],
        ["No More Secrets", "Identify 50 cards with Sage"],
        ["Not the Boss of Me", "Defeat 500 boss monsters"],
        ["Nothing More to Learn", "Reach a level cap (level 50) with any hero"],
        ["Obsessive–Compulsive", "Clear 500 dungeon levels"],
        ["Occasional Buyer", "Charge your cards 10 times at the Fortune Teller's"],
        ["Odyssey", "Unlock very big flexiscope game size"],
        ["Organ Harvester", "Pick 1000 hearts from the ground"],
        ["Path to Hell", "Leave 10000 footprints in the dungeon"],
        ["Pedantic", "Clear 50 dungeon levels"],
        ["Piles of Ammo", "Shoot 1000 equiped arrows (Rogue only)"],
        ["Poison Ivy", "Defeat 30 monsters with poison"],
        ["Predator", "Finish a big Freeplay game on Nightmare difficulty without any form of healing"],
        ["Push It to the Limit", "Bash 9 monsters with a single Charge card use (Warrior only)"],
        ["Quest Champion", "Master all level 2 quests"],
        ["Quest Genius", "Master all level 3 quests"],
        ["Quest Master", "Master all level 1 quests"],
        ["Ready for Action", "Equip all the card slots with at least level 1 cards"],
        ["Ready for Anything", "Equip all the card slots with at least level 3 cards"],
        ["Ready for Legends", "Equip all the card slots with level 3 legendary cards"],
        ["Ready for Magic", "Equip all the card slots with at least level 1 magic card"],
        ["Ready for Sorcery", "Equip all the card slots with at least level 2 magic cards"],
        ["Ready for Stories", "Equip all the card slots with at least level 1 legendary card"],
        ["Ready for Tales", "Equip all the card slots with at least level 2 legendary cards"],
        ["Ready for War", "Equip all the card slots with at least level 2 cards"],
        ["Ready for Wizardry", "Equip all the card slots with level 3 magic cards"],
        ["Riches Have Wings", "Spent 1000000 gold"],
        ["Road to Hell", "Leave 100000 footprints in the dungeon"],
        ["Roguelike", "Reach and defeat Archdemon in Roguelike mode without using any fountain"],
        ["Roguelikelike", "Reach and defeat Antipope in Roguelike mode  without using any fountain"],
        ["Roguelite", "Reach and defeat Cook in Roguelike mode without using fountains"],
        ["Scary", "Scare 10 monsters with a single Fear card use (Rogue only)"],
        ["Shrouded in Mysteries", "Identify 20 cards with Sage"],
        ["Silver Division", "Gain all other silver level achievements in Book of Demons"],
        ["Slow as a Turtle", "Miss 50 times"],
        ["Smash!", "Destroy 500 enemy's shields"],
        ["Smelly Fingers", "Pick up 10 crap"],
        ["So Far So Good", "Finish 5 games"],
        ["Starving War", "Defeat Archdemon without purchasing Cauldron"],
        ["Stayin' Alive", "Finish 5 games in a row without dying"],
        ["Stayin' Alive, Stayin' Alive", "Finish 10 games in a row without dying"],
        ["Stomp Better", "Destroy 50 Slimy Spores before they explode"],
        ["Stomp Harder", "Destroy 5 Slimy Spores before they explode"],
        ["Stomp Stronger", "Destroy 500 Slimy Spores before they explode"],
        ["Storm of Silence", "Dispell 6 spells and skills with a single Mass Dispell card use (Mage only)"],
        ["Straight to the Point", "Finish 3 dungeon levels without backtracing your steps"],
        ["Tasty Soup", "Buy content of the Magical Cauldron for the first time"],
        ["Terminator", "Finish a big Freeplay game on Massacre difficulty without any form of healing"],
        ["Terrifying", "Scare 75 monsters with a single Fear card use (Rogue only)"],
        ["Texas Massacre", "Unlock a Massacre difficulty with all heroes"],
        ["The Alchemist", "Only 5 ingredients and the achievement might be yours!"],
        ["The Fastest & the Furiest", "Defeat 200 monsters in 10 seconds"],
        ["The Fun Goes On", "Finish 100 games"],
        ["Third Time's a Charm", "Defeat the Archdemon with all three heroes"],
        ["Tons of Ammo", "Shoot 10000 equiped arrows (Rogue only)"],
        ["Trek", "Unlock medium flexiscope game size"],
        ["Tsunami of Silence", "Dispell 9 spells and skills with a single Mass Dispell card use (Mage only)"],
        ["Twice the Fun", "Defeat the Archdemon with any second hero"],
        ["Unbelievable Library", "Upgrade all Mage's Cards to level 3"],
        ["Unlucky", "Destroy 50 empty barrels in the dungeon"],
        ["Venomous Spider", "Defeat 100 monsters with poison"],
        ["Voyage", "Unlock big flexiscope game size"],
        ["Warming Up", "Unlock fourth card slot"],
        ["Wave of Silence", "Dispell 3 spells and skills with a single Mass Dispell card use (Mage only)"],
        ["Wearing Only a Smile", "Finish a medium or longer Freeplay game on Hard difficulty without equipping any card"],
        ["Who's the Boss?", "Defeat 5 boss monsters"],
        ["With All One's Strength", "Bash 6 monsters with a single Charge card use (Warrior only)"],
        ["Wizards BFF", "Summon a golem 200 times (Mage only)"],
        ["You Have Your Way with Words!", "Talk 50 times with villagers"],
        ["Yummy Brew", "Buy content of the Magical Cauldron 5 times"],
    ];

    assert.strictEqual(officialAchievements.length, 202, "sanity check on this test's own reference list");

    const dataPairs = game.achievements
        .map(a => [a.name, a.description])
        .sort((a, b) => a[0].localeCompare(b[0]));

    assert.deepStrictEqual(dataPairs, [...officialAchievements].sort((a, b) => a[0].localeCompare(b[0])));

});
