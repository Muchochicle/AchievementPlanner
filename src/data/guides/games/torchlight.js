// Torchlight Game Guide. Sources:
//
// - PRIMARY: this app's own catalog data
//   (backend/catalog/games/torchlight.json), whose 66 achievements were
//   sourced directly from Steam's own achievement schema for appid
//   41500 via ISteamUserStats/GetSchemaForGame (fetched through this
//   app's own backend/services/steamApi.js).
// - 3 achievement(s) are Steam-hidden and ship no
//   Steam description; their description here is researched from community
//   100% guides (TrueAchievements / Steam Community / game wikis) and is a
//   curatorial summary. Every non-hidden description is Steam's own verbatim text.
// - Sections are ordered chunks of the schema with a short thematic
//   intro rather than a hand-picked bucket.
export const GUIDE = {
    "slug": "torchlight-achievement-guide",
    "category": "game",
    "gameSlug": "torchlight",
    "icon": "🔦",
    "title": "Torchlight Achievement Guide",
    "summary": "A practical guide to all 66 Steam achievements in Torchlight (3 hidden). Covers the progress, wealth and pet achievements, the enchanting, quest, gambling and mod achievements, and the combat, boss and difficulty achievements. Three achievements are Steam-hidden and researched from community 100% guides.",
    "relatedSlugs": [
        "achievement-completion-and-tracking",
        "understanding-achievement-availability"
    ],
    "sections": [
        {
            "heading": "Overview",
            "body": [
                "Torchlight has 66 Steam achievements and three are Steam-hidden (turning your pet into a Mimic, pulling 100 levers, and clicking the town horse 100 times). The rest are collection and grind milestones (1,500 breakables, 250,000 gold, 1,000 fish, 5,000 potions, 50,000 monsters, 25,000 steps), pet feeding and enchanting, quests, gambling and mods, the seven boss kills, and the difficulty ladder for defeating Ordrak - Easy through Very Hard, and the four Hardcore variants up to 'Hardcore God'.",
                "The catalog marks it difficulty 4. 'Hardcore God' (Ordrak on Very Hard Hardcore - one death ends the run), 'Line of Kings' (300 retired character levels) and the 50,000-kill / 1,000-fish grinds are the real work.",
                "Tip: play the campaign with all three classes ('Hat Trick'), farming the mapworks and fishing for the grind counters, then do a Very Hard Hardcore run for 'Hardcore God'."
            ]
        },
        {
            "heading": "Progress, Wealth & Pet",
            "body": [
                "Finding the mine entrance, 1,500 breakables, filling your pet's inventory, 250,000 gold collected and 100,000 in your pocket, 25 critical gibs, dungeon floor 50, a 10,000-damage strike, level 100, 50 / 100 / 1,000 fish, equipping a pet spell, the Steam-hidden Mimic pet, enchanting one item 5 and 10 times, feeding the pet fish and permanently transforming it, and sending the pet to town.",
                "The achievements here: The Adventure Begins (Find the entrance to the mine); Master Smasher (Smash 1500 Breakables); Beast of Burden (Fill your pet's inventory); Rich (Collect 250,000 gold); Deep Pockets (Have 100,000 gold in your inventory); Gibbed (Blow 25 enemies to pieces with critical strikes); Deep Delver (Reach the 50th floor of a dungeon); Epic Strike (Do at least 10,000 damage to an enemy in a single strike); True Delver (Reach level 100); Angler (Catch 50 fish); Fisherman (Catch 100 fish); Fisher King (Catch 1000 fish); Pet Trainer (Equip a spell on your pet); Sorcelator's Servant (Transform your pet into a Mimic by feeding it the right fish.); Enchanted (Successfully enchant one item 5 times); Enchantment Overload (Successfully enchant one item 10 times); Shape-Shifter (Change your pet by feeding it fish); Transmogrifier (Permanently transform your pet); Fetch a Fair Price (Send your pet to town)."
            ]
        },
        {
            "heading": "Enchanting, Quests, Gambling & Mods",
            "body": [
                "20 disenchants and a first-try disenchant, 25 transmuter items, 200 quests, 50 Hatch quests, gambling 20 / 50 / 100 times, 1 / 5 / 10 mods at once, a gambled unique, player levels 65 and 100, retiring one and two characters, 300 retired levels, the Steam-hidden 100 levers, and 50 pet potions.",
                "The achievements here: The Need for Greed (Suffer 20 disenchants from the enchanter); Bum Luck (Have an item disenchanted on the first enchantment attempt); Sir Mixes-a-lot (Successfully create 25 items using the transmuter); Questor (Complete 200 Quests); Down the Hatch (Complete 50 Hatch Quests); Gambling Enthusiast (Gamble 20 times); Gambling Addict (Gamble 50 times); Gambling Fiend (Gamble 100 times); Mod Squad (1 game mod installed); Mod Maniac (5 mods installed at the same time); Modpocalypse (10 mods used at the same time); Lucky Gambler (Gamble a unique item); Pension Plan (Achieve player level 65); The Long Haul (Achieve player level 100); Passing the Torch (Retire a character); Noble Lineage (Retire two characters); Line of Kings (Retire over 300 levels worth of characters); Ka-Chunk! (Pull 100 levers.); Price of Loyalty (Use 50 potions on your pet)."
            ]
        },
        {
            "heading": "Combat, Bosses & Difficulty",
            "body": [
                "Max fame, 25,000 steps, 500 deaths, 25 champion trolls, 5,000 and 50,000 monsters, defeating Brink, the Overseer, the Root Golem, the Ember Colossus, Krag, Medea and Alric, a no-death Ordrak kill, Ordrak on Easy/Normal, Hard and Very Hard, the four Hardcore Ordrak clears, sub-8-hour and sub-5-hour finishes, beating the game with all three classes, 5,000 potions, 10,000 items sold, the Steam-hidden town horse, and 25 Gar quests.",
                "The achievements here: Superstar (Achieve maximum fame); Walkabout (Take 25,000 steps); Tormented (Die 500 times); Trolling for Punishment (Kill 25 champion trolls); Wabam! (Kill 5000 Monsters); Supreme Slayer (Kill 50,000 monsters); Over the Brink (Defeat Brink); A Lich to Scratch (Defeat the Overseer); Tree Hugger (Defeat the Root Golem); When this Town's a Rockin' (Defeat the Ember Colossus); Big and Green and Dead all Over (Defeat Krag); Purple People Defeater (Defeat Medea); Only a Master of Evil (Defeat Alric); Perfect Victory (Defeat Ordrak with no deaths); Beast Slayer I (Defeat Ordrak on Easy or Normal); Beast Slayer II (Defeat Ordrak on Hard); Beast Slayer III (Defeat Ordrak on Very Hard); Hardcore Victor (Defeat Ordrak on Easy Hardcore); Hardcore Hero (Defeat Ordrak on Normal Hardcore); Hardcore Champion (Defeat Ordrak on Hard Hardcore); Hardcore God (Defeat Ordrak on Very Hard Hardcore); Swift Execution (Defeat Ordrak in 8 hours or less); Speed King (Defeat Ordrak in less than 5 hours); Hat Trick (Beat the game with all three classes); Potion Whiz (Drink 5,000 potions); Cash for Trash (Sell 10,000 items to vendors); The Horse Whisperer (Click on the horse in town (next to the gem collectors Gorn and Furl) 100 times.); Universally Understood (Complete 25 Gar Quests)."
            ]
        },
        {
            "heading": "Suggested Order",
            "body": [
                "1. Play the campaign with each of the three classes for 'Hat Trick', doing the boss kills each time.",
                "2. Grind the mapworks and retire characters for the level, kill, gold and 'Line of Kings' counters.",
                "3. Fish heavily for the 1,000-fish achievement and the pet-transformation ones (including the hidden Mimic).",
                "4. Do a Very Hard Hardcore run and beat Ordrak for 'Hardcore God' (and the lower Hardcore tiers along the way).",
                "5. Pick up the hidden ones: 100 levers, 100 clicks on the town horse.",
                "Tip: the Hardcore Ordrak clears stack downward - a Very Hard Hardcore win also credits the Hard, Normal and Easy Hardcore achievements, so only the top run matters."
            ]
        }
    ]
};
