// Master of Orion Game Guide. Sources:
//
// - PRIMARY: this app's own catalog data
//   (backend/catalog/games/master-of-orion.json), whose 102 achievements were
//   sourced directly from Steam's own achievement schema for appid
//   298050 via ISteamUserStats/GetSchemaForGame (fetched through this
//   app's own backend/services/steamApi.js).
// - None of the achievements are hidden; every description is
//   Steam's own real text, quoted verbatim.
// - With a list this large, sections are ordered chunks of the schema
//   with a short thematic intro rather than a hand-picked bucket.
export const GUIDE = {
    "slug": "master-of-orion-achievement-guide",
    "category": "game",
    "gameSlug": "master-of-orion",
    "icon": "🌠",
    "title": "Master of Orion Achievement Guide",
    "summary": "A practical guide to all 102 Steam achievements in Master of Orion - none are hidden. Covers the early- and mid-game feats, the endgame and race-specific victory achievements, and the lifetime grind and per-race Mastery achievements.",
    "relatedSlugs": [
        "achievement-completion-and-tracking",
        "understanding-achievement-availability"
    ],
    "sections": [
        {
            "heading": "Overview",
            "body": [
                "Master of Orion (the 2016 reboot) has 102 Steam achievements and none of them are hidden. A cluster are early/mid-game feats done in a single match (colonize your first planet, block all warp points before turn 20, defeat Orion's Guardian before turn 150, win in under 100 turns). A large block are race-specific victories - win by a particular victory type with each of the game's races - and their culmination, winning all victory types with all races. The rest are lifetime grinds: 1,000 / 5,000 / 10,000 turns played, destroy 5,000 ships, invade 100 planets, establish 100 colonies, and a per-race \"Mastery\" achievement for winning every original victory type with each race.",
                "Nothing is missable - matches restart freely and the lifetime counters only accumulate. This is a very long completion: the per-race victory-type matrix plus the Mastery achievements is dozens of full games, and Obsession (10,000 turns played) is a huge time sink on its own.",
                "Tip: play small, fast games at a comfortable difficulty and plan each one around a specific race's victory type - a single game can knock out that race's victory achievement, several biome-colonization feats, and turn/ship counters all at once."
            ]
        },
        {
            "heading": "Early & Mid-Game Feats",
            "body": [
                "First planet, 15 pirate kills, anomalies, marine barracks, a spy center, 8 techs before turn 50, an on-arrival colonization, a tactical battle win, a trade deal, 15 population before turn 35, blocking all warp points before turn 20, a 20-food colony, declaring war, defeating Orion's Guardian before turn 150, visiting all systems, a sub-100-turn win, the Psilon/Darlok espionage feats, 10 asteroid mines, two fully populated planets, 20 ships before turn 100, a no-strike streak, espionage on 5 colonies, colonizing every biome, a 20-ship fleet, inciting revolt in 3 colonies, deporting and killing spies, 15 civilian transports, and buying 30 ships.",
                "The achievements here: One Small Step (Colonize your first planet); Royal Navy (Destroy 15 Pirate ships); Scavenger (Discover 3 Anomalies and Bombard 2 Pirate bases in a match); Duty Calls (Build 2 Marine Barracks); Classified (Build your first Spy Center); Crunch Time (Research 8 Technologies before turn 50); In a Hurry (Colonize the first planet your Colony Ship visits in a match); Real Time Commander (Command and win your first  Tactical Battle); Business is Business (Successful trade with another Race for the first time); Populous (Reach 15 Population Units before turn 35); You Shall not Pass (Block all warp points to your home planet before turn 20 ); Hungry Game (Develop a Colony that yields 20 Food Points per turn); War Never Changes (Declare War for the first time); Rush (Defeat Orion's Guardian before turn 150); eXplore (Visit all systems in the galaxy during a match); Dinner’s ready! (Win a match in less than 100 turns); Area 51 (Spy on the Humans as a Psilon); Right in the Heart (Successfully Incite Revolt on a Darlok Colony); Resource Maniac (Build 10 Asteroid mines inside your empire); No Vacancy (Have 2 planets fully populated); Megalomaniac (Build 20 Ships before turn 100); Peronism (Don’t have strikes in any of your colonies for 80 turns); Get Smart (Successfully gather information on 5 Colonies in a match via espionage); Collector (Colonize a planet in each possible biome in a match); The More the Merrier (Engage in combat using a fleet of 20 or more ships); Iran-Contra (Incite Revolt in 3 different opponents' colonies ); Get Off My Lawn (Deport 5 spies); Off With Their Heads (Kill 5 spies); Exodus (Use at least 15 Civilian Transports in a match); Turns are Relative (Buy 30 ships in a match)."
            ]
        },
        {
            "heading": "Endgame Feats & Race-Specific Victories",
            "body": [
                "Colonizing 5 systems fully, eliminating all Space Monsters, the Mrrshan/Alkari grudge, a multiplayer win, 20 planets destroyed with a Doomstar, an unscathed Conquest win, colonies on 20 stars, spying on all races, a full-tech-tree Conquest win, destroying a Homeworld with the Doomstar, colonizing 5 Oceanic / Volcanic / Desert planets, invading 10 colonies, and the per-race victory achievements - Economic with Alkari, Human, Klackon and Psilon; Technological with Bulrathi, Mrrshan and Sakkra; Military with Darlok; Diplomatic with Meklar, Sakkra and Silicoid - plus the jump-gate, tech-tree, 7-spy, GMF-shares, super-nova, planet-conversion, all-ally, 30-command-point, no-military-ship and 70-research-point feats.",
                "The achievements here: eXpand (Colonize every planet in 5 systems); Monster Hunter (Eliminate all Space Monsters in a match); Old Grudge (Eliminate the Alkari first while playing as Mrrshan); First Among Equals (Win a multiplayer match); I Am Become Death (Destroy 20 planets with a Doomstar in a match); Unscathed (Win by Conquest without losing a single colony); Master of The Universe (Have at least 1 colony on 20 different stars); Curious George (Spy on all races during a match); Dangerous Minds (Completely research the Tech Tree and win by Conquest); That's no star (Destroy an opponent's Homeworld using the Doomstar); Terror from the Deep (Colonize at least 5 Oceanic planets in a match); None Like It Hot (Colonize at least 5 Volcanic planets in a match); Wild, Wild West (Colonize at least 5 Desert planets in a match); Conqueror (Invade 10 colonies in a match); Trade Winds (Win by Economic Victory with the Alkari); Secrets of the Earth (Win by Technological Victory with the Bulrathi); Unseen Blade (Win by Military Victory with the Darlok); Manifest Destiny (Win by Economic Victory with Humans); Marxist Dystopia (Win by Economic Victory with Klackon); It is me, Your Brother!  (Win by Diplomatic Victory with Meklar); Itch to Scratch (Win by Technological Victory with Mrrshan); The Nash Ultimatum (Win by Economic victory with Psilon ); Rule of the Many (Win by Diplomatic Victory with Sakkra); Group Therapy (Win by Diplomatic Victory with Silicoid); Reptilians! (Win by Technological Victory with Sakkra); I Like it Small (Win by any victory with only 5 planets colonized including your homeworld); Jumper (Use your Jump Gates 100 times during a match); Science! (Complete the entire tech tree for the first time); \"007\" (Have 7 spies on 7 different races); Where we're going, we don't need Starlanes. (Build 15 Jumpgates in a match); Warren Buffet (Win by Economic Victory with 80% or more of the outstanding GMF Shares.); Alien Roommate (Have a colony with at least 1 Population Unit of another race in a match); Homeless (Get your capital planet blown up in a super nova); The Creator (Convert 10 Asteroid Fields / Gas Giants into Inhabitable Planets); Your Neutrality (Ally with all Races); This Ain't Cheap (Have a fleet that costs more than 30 Command Points); Flower Power (Win the game without building a single military ship); Terminus (Have a Colony yielding 70 Research Points )."
            ]
        },
        {
            "heading": "Lifetime Grinds & Race Masteries",
            "body": [
                "Renaming 100 and scrapping 600 Blueprints, invading 100 planets, destroying 5,000 ships and 100 planets, establishing 100 colonies, buying 1,000 structures/ships, breaking 150 pacts, watching the credits, converting 20 planets to Inferno / Tropical / Cavernous / Grassland, playing 1,000 / 5,000 / 10,000 turns, the first-time wins for each victory type (Excellence, Conquest, Technological, Economic, Diplomatic), winning all victory types with any race, the per-race \"Mastery\" achievements (Alkari, Bulrathi, Darlok, Human, Klackon, Meklar, Mrrshan, Psilon, Sakkra, Silicoid), Ironman (win with all races on Hard), and Master of Orion (all victory types with all races).",
                "The achievements here: A Rose By Any Other Name (Rename 100 Blueprints); Attila (Invade 100 planets); Moby Dick (Destroy 5000 ships); Galactus (Destroy 100 Planets); So Say We All (Establish 100 colonies); Can't Make Up Your Mind (Scrap 600 Blueprints); Shopaholic (Buy 1000 structures or ships); Backstabber (Break 150 pacts); Where Credit is Due (Watch the credits in full); Hell-O (Turn 20 planets into Inferno); Brazil (Turn 20 planets into Tropical); Cave-dweller (Turn 20 planets into Cavernous); Feline Paradise (Turn 20 planets into Grassland); One more turn! (Play 1000 turns); Still here (Play 5000 turns); Obsession (Play 10000 turns); This Is Just the Beginning (Win by all Victory types with any race); Top of the Class (Win by Excellence Victory for the first time); Kill many, and you're a conqueror (Win by Conquest Victory for the first time); Transcendental (Win by Technological Victory for the first time); Wolf of the Galaxy (Win by Economic Victory for the first time); With Quill and Word (Win by Diplomatic Victory for the first time); Alkari Mastery (Win all original victory types  with the Alkari); Bulrathi Mastery (Win all original victory types with the  Bulrathi); Darlok Mastery (Win all original victory types with the Darlok); Human Mastery (Win all original victory types with the Human); Klackon Mastery (Win all original victory types with the Klackon); Meklar Mastery (Win all original victory types with the Meklar); Mrrshan Mastery (Win all original victory types with the Mrrshan); Psilon Mastery (Win all original victory types with the Psilon); Master of Orion (Win all victory types with all races); Ironman (Win the game with all races at least once in Hard difficulty); Sakkra Mastery (Win all original victory types with the Sakkra); Silicoid Mastery (Win all original victory types with the Silicoid)."
            ]
        },
        {
            "heading": "Suggested Order",
            "body": [
                "1. Play one throwaway early game to tick off the many first-time and pre-turn-X feats (first planet, trade, tactical battle, warp-point block, Orion before turn 150).",
                "2. Play small fast games each planned around one race and one victory type, covering the race-specific victory achievements and stacking biome and turn counters.",
                "3. Do the endgame set-piece feats (Doomstar planet kills, unscathed Conquest, all-ally, no-military-ship win) in dedicated games.",
                "4. Work the per-race Mastery achievements - each is all original victory types with one race, so several games per race.",
                "5. Let the lifetime counters (5,000 ships, 100 colonies, turns played) accumulate, then grind whatever remains toward Obsession (10,000 turns) and Ironman.",
                "Tip: a no-military-ship Economic or Diplomatic win on a tiny map against one weak AI is the fastest single game in the whole list - build that template and reuse it for the race-specific Economic and Diplomatic victories."
            ]
        }
    ]
};
