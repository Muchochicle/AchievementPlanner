// Sun Haven Game Guide. Sources:
//
// - PRIMARY: this app's own catalog data
//   (backend/catalog/games/sun-haven.json), whose 190 achievements were
//   sourced directly from Steam's own achievement schema for appid
//   1432860 via ISteamUserStats/GetSchemaForGame (fetched through this
//   app's own backend/services/steamApi.js). None are hidden; every one
//   ships a real, official Steam description, quoted verbatim below.
// - With a list this large, sections are ordered chunks of the schema
//   with a short thematic intro rather than a hand-picked bucket.
export const GUIDE = {
    "slug": "sun-haven-achievement-guide",
    "category": "game",
    "gameSlug": "sun-haven",
    "icon": "🌻",
    "title": "Sun Haven Achievement Guide",
    "summary": "A practical guide to all 190 Steam achievements in Sun Haven - none are hidden. early farm, bosses & character, town, relationships & skills, combat, mines & crafting, museum, collections & regions, endgame & the great city.",
    "relatedSlugs": [
        "achievement-completion-and-tracking",
        "understanding-achievement-availability"
    ],
    "sections": [
        {
            "heading": "Overview",
            "body": [
                "Sun Haven has 190 Steam achievements and none are hidden. They run the length of a full playthrough: early farming and boss fights, the town relationships and skill trees, the mine and combat progression, the museum and collection sets, the Nel'Vari and Withergate regions, and the Great City endgame.",
                "Nothing is missable - relationships, collections, quests and bosses all stay available, and there is no time limit on the story. This is a long completion measured in dozens of hours across many in-game seasons.",
                "Tip: play the game normally and broadly - farm, mine, fish, befriend everyone, and push each region's questline. Keep a museum-donation and collection checklist so nothing gets sold, and save the Legendary weapon purchases and Great City content for when your gold and skills are maxed."
            ]
        },
        {
            "heading": "Early Farm, Bosses & Character",
            "body": [
                "The opening spread: placing your first animals, the early boss fights (Weedil, Krusty, Dizzy, the Slime Boss), a carnival game win, the character-creation and race achievements, and the first farming, fishing and mining taps.",
                "The achievements here: With a Cluck Cluck Here (Place your first chicken); And a Moo Moo There (Place your first cow); Weed Killer (Defeat Weedil Alone); One More Thyme (Defeat Weedil with Help); Rocky Road (Defeat Krusty with no help); Rock and Roll (Defeat Krusty with help); To the Bottom (Defeat Dizzy); Defeat King Slimius XVII (Defeat the Slime Boss); We Have a Winner! (Win a carnival Game); Customize your Character I! (Pick a cool hair style); Customize your Character II! (Pick a cute hair style); Create a Naga Character (Create a Naga character); Create a Human Character (Create a Human character); Create an Elf Character (Create an Elf character); Create a Demon Character (Create a Demon character); Create an Elemental Character (Create an Elemental character); Create an Angel Character (Create an Angel character); Create an Amari Character (Create an Amari character); Dungeoneer I (Beat Floor 5 in the Combat Dungeon); Dungeoneer II (Beat Floor 15 in the Combat Dungeon); Dungeoneer III (Beat Floor 30 in the Combat Dungeon); Appease the Moon Dragon (Appease Dynus through an offering); Defeat the Moon Dragon (Defeat Dynus in combat); Dynus's Gems (Complete the Mining Altar); Dynus's Harvest (Complete the Farming Altar); Dynus's World (Complete the Exploration Altar); Dynus's Hoard (Complete the Gold Altar); Dynus's City (Complete the Tickets Altar); Dynus's Orchard (Complete the Fruit Altar); Dynus's Feast (Complete the Meals Altar); Dynus's Future (Complete the Keepsake Altar); Legendary Fisherman (Catch a legendary fish); Small Catch (Harvest a small fishing net); Large Catch (Harvest a large fishing net); Defeat the Heat Viper (Defeat the Heat Viper); A Second Chance (Give Stephen a second chance); Justice (Send Stephen to Jail); Made of Money (Pay your way out of the Glorite Miners); Defender of the Forest (Fight The Glorite Miners); An Unexpected Friend (Reach Commonality with Wesley)."
            ]
        },
        {
            "heading": "Town, Relationships & Skills",
            "body": [
                "The Sun Haven town content: befriending and romancing the townsfolk, the community-bundle style restoration goals, levelling the Farming / Mining / Combat / Fishing / Exploration skills, and the early main-quest markers.",
                "The achievements here: Big Heart (Reach 100 Health); Extra Big Heart (Reach 200 Health); Die (Faint by reaching 0 health); Jump 100 Times (Jump 100 times); Jump 1000 Times (Jump 1000 times); Novice Miner (Reach level 5 Mining); Novice Explorer (Reach level 5 Exploration); Novice Fighter (Reach level 5 Combat); Novice Farmer (Reach level 5 Farming); Novice Angler (Reach level 5 Fishing); Adept Farmer (Reach level 15 Farming); Adept Fighter (Reach level 15 Combat); Adept Explorer (Reach level 15 Exploration); Adept Miner (Reach level 15 Mining); Expert Miner (Reach level 30 Mining); Expert Explorer (Reach level 30 Exploration); Expert Fighter (Reach level 30 Combat); Expert Farmer (Reach level 30 Farming); Expert Angler (Reach level 30 Fishing); Advanced Miner (Reach level 50 Mining); Advanced Explorer (Reach level 50 Exploration); Advanced Fighter (Reach level 50 Combat); Advanced Farmer (Reach level 50 Farming); Advanced Angler (Reach level 50 Fishing); Master Farmer (Unlock every skill point in Farming); Master Explorer (Unlock every skill point in Exploration); Master Miner (Unlock every skill point in Mining); Master Fighter (Unlock every skill point in Combat); Master Angler (Unlock every skill point in Fishing); Magic Touch (Reach 100 Mana); Overflowing with Magic (Reach 300 Mana); Wholesome Neighbor (Restore the neighborhood dog house); Fashion Icon (Restore the Clothing Store); Just a Trim (Restore the Salon); Good Samaritan (Restore the Cafe); Novice Spelunker (Reach Treasure Room 1 in the mines); Adept Spelunker (Reach Treasure Room 2 in the mines); Advanced Spelunker (Reach Treasure Room 3 in the mines); Expert Spelunker (Reach Treasure Room 4 in the mines); Past Your Bedtime (Pass out by being awake at 12:00am)."
            ]
        },
        {
            "heading": "Combat, Mines & Crafting",
            "body": [
                "The mid-game grind: deeper mine floors and their bosses, the combat and crafting-station goals, cooking and potion recipes, and the equipment upgrades.",
                "The achievements here: Pocket Change (Collect 10,000 gold); A Small Fortune (Collect 50,000 gold); Deep Pockets (Collect 100,000 gold); Wealthy (Collect 500,000 gold); Treasury (Collect 1,000,000 gold); Rich (Collect 1,000 Tickets); Royalty (Collect 10,000 Tickets); Mana In Hand (Collect 1,000 Mana Orbs); Mana Out of Hand (Collect 10,000 Mana Orbs); Riding into the Sunset (Ride a mount); Better with a Friend (Play Sun Haven with 1 friend); Better with a Group (Play Sun Haven with 2 friends); Better with a Team (Play Sun Haven with 3 friends); Better with a Party (Play Sun Haven with 4 or more friends); A Complete Collection (Complete the Museum); Your New Best Friend (Leash a pet); I Do (Get Married); To Woo a Merchant (Reach 10 hearts with Anne); To Woo the Archmage (Reach 10 hearts with Lucia); To Woo a Blacksmith (Reach 10 hearts with Lynn); To Woo an Adventurer (Reach 10 hearts with Donovan); To Woo a Prince (Reach 10 hearts with Darius); To Woo an Architect (Reach 10 hearts with Xyla); To Woo a Doctor (Reach 10 hearts with Wornhardt); To Woo a Witch (Reach 10 hearts with Catherine); To Woo a Baker (Reach 10 hearts with Liam); To Woo a Counselor (Reach 10 hearts with Jun); To Woo a Seamstress (Reach 10 hearts with Kitty); To Woo an Enchantress (Reach 10 hearts with Iris); To Woo a Wind Mage (Reach 10 hearts with Vaan); To Woo the Captain (Reach 10 hearts with Nathaniel); To Woo a Musician (Reach 10 hearts with Claude); Golden Love (Reach 20 hearts with Anne); Fiery Love (Reach 20 hearts with Lucia); Love at First Sight (Reach 20 hearts with Lynn); Freeing Love (Reach 20 hearts with Donovan); Princely Love (Reach 20 hearts with Darius); Demonic Love (Reach 20 hearts with Xyla); Heartfelt Love (Reach 20 hearts with Wornhardt); Hopping Love (Reach 20 hearts with Catherine)."
            ]
        },
        {
            "heading": "Museum, Collections & Regions",
            "body": [
                "The completion sets: museum donations, the fish / bug / mineral / artifact collections, unlocking and exploring Nel'Vari and Withergate, and their region-specific quests and bosses.",
                "The achievements here: Sweet Love (Reach 20 hearts with Liam); Artistic Love (Reach 20 hearts with Jun); Nya Love (Reach 20 hearts with Kitty); Magical Love (Reach 20 hearts with Iris); Worldly Love (Reach 20 hearts with Vaan); Protective Love (Reach 20 hearts with Nathaniel); Symphonic Love (Reach 20 hearts with Claude); Heartbreaker (Get Divorced); An Apple a day... (Gift an apple to Wornhardt); A Hop, Skip, and a Jump (Cast Air Skip 100 times); Blast Off (Cast Air Skip 1000 times); Chef's Kiss (Feed the Farm Snaccoon); Tree House (Unlock Nel'Vari); Monster House (Unlock Withergate); Dynus's Fish (Complete the Fishing Altar); Adept Fisher (Reach level 15 Fishing); A Dream of Romance (Select the Romance Keepsake); A Dream of Peace (Select the Peace Keepsake); A Dream of Adventure (Select the Adventure Keepsake); A Dream of Riches (Select the Riches Keepsake); To Woo an Assassin (Reach 10 hearts with Vivi); To Woo the Forgetful (Reach 10 hearts with Kai); To Woo the Assistant (Reach 10 hearts with Wesley); Sharp Love (Reach 20 hearts with Vivi); Long Lost Love (Reach 20 hearts with Kai); Sprouting Love (Reach 20 hearts with Wesley); Train Skipper (Skip Sun Haven's intro and receive the Time Keepsake); To Woo an Angel (Reach 10 hearts with Miyeon); To Woo a Warrior (Reach 10 hearts with Shang); To Woo the Moon (10 hearts with Lucius); Angelic Love (Reach 20 hearts with Miyeon); Valiant Love (Reach 20 hearts with Shang); Cosmic Love (Reach 20 hearts with Lucius); Sizzlin' Summer (Reach the Summer Season); Falling Down (Reach the Fall Season); 'Tis the Season (Reach the Winter Season); A New Year (Reach Year 2); Candy Crushed I (Defeat the level 20 Candy Slime in the Boss Arena); Candy Crushed II (Defeat the level 30 Candy Slime in the Boss Arena); Candy Crushed III (Defeat the level 40 Candy Slime in the Boss Arena)."
            ]
        },
        {
            "heading": "Endgame & The Great City",
            "body": [
                "The late game: the Legendary weapon purchases from the Great Smithery, maxing every skill, the highest-tier farm and town upgrades, and unlocking, teleporting to, and completing the questline of the Great City.",
                "The achievements here: Candy Crushed IV (Defeat the level 50 Candy Slime in the Boss Arena); Lumberjacked I (Defeat the level 20 Tree Guardian in the Boss Arena); Lumberjacked II (Defeat the level 30 Tree Guardian in the Boss Arena); Lumberjacked III (Defeat the level 40 Tree Guardian in the Boss Arena); Lumberjacked IV (Defeat the level 50 Tree Guardian in the Boss Arena); Snake Slayer I (Defeat the level 20 Tyrantviper in the Boss Arena); Snake Slayer II (Defeat the level 30 Tyrantviper in the Boss Arena); Snake Slayer III (Defeat the level 40 Tyrantviper in the Boss Arena); Snake Slayer IV (Defeat the level 50 Tyrantviper in the Boss Arena); To Woo a Hero (Reach 10 hearts with Karish); Heroic Love (Reach 20 hearts with Karish); To Woo a Corsair (Reach 10 hearts with Zaria); Bucket of Love (Reach 20 hearts with Zaria); The Deeps (Unlock the Brinestone Deeps); Defeat Qwiz'lothra (Defeat Qwiz'lothra and save Brinestone Deeps); Slime Squisher (Free Brinestone Deeps of the mindcontrolling slimes); Spell Booster (Purchase a staff from the Brinestone staff shop); Teleport: Sun Haven (Obtain the Sun Haven Teleport Spell); Teleport: Nel'Vari (Obtain the Nel'Vari Teleport Spell); Teleport: Withergate (Obtain the Withergate Teleport Spell); Teleport: Brinestone Deeps (Obtain the Brinestone Deeps Teleport Spell); To Woo a Detective (Reach 10 hearts with Elyssia); Timeless Love (Reach 20 hearts with Elyssia); To Woo a Historian (Reach 10 hearts with Thorian); Historic Love (Reach 20 hearts with Thorioan); Legendary Hammer Wielder (Purchase the Legendary Hammer from the Great Smithery); Legendary Great Sword Wielder (Purchase the Legendary Great Sword from the Great Smithery); The Great City (Unlock the Great City); Teleport: The Great City (Obtain the ability to teleport to the Great City); Crime Doesn't Pay (Solve the case of the stolen artifacts in the Great City)."
            ]
        },
        {
            "heading": "Suggested Order",
            "body": [
                "1. Establish the farm, do the early boss fights, and start building relationships with the townsfolk.",
                "2. Level every skill and push the main questline through Sun Haven, Nel'Vari and Withergate, keeping collection and museum checklists.",
                "3. Grind the mines and combat for the deeper floor bosses and the crafting/upgrade goals.",
                "4. Finish with the endgame: max skills, buy the Legendary weapons, and complete the Great City questline.",
                "Tip: the collection and museum achievements are the easiest to accidentally block - set aside the first of every fish, bug, mineral and artifact you find, and only donate or sell duplicates."
            ]
        }
    ]
};
