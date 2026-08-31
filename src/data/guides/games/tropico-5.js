// Tropico 5 Game Guide. Sources:
//
// - PRIMARY: this app's own catalog data
//   (backend/catalog/games/tropico-5.json), whose 70 achievements were
//   sourced directly from Steam's own achievement schema for appid
//   245620 via ISteamUserStats/GetSchemaForGame (fetched through this
//   app's own backend/services/steamApi.js).
// - 5 achievement(s) are Steam-hidden and ship no
//   Steam description; their description here is researched from community
//   100% guides (TrueAchievements / Steam Community / game wikis) and is a
//   curatorial summary. Every non-hidden description is Steam's own verbatim text.
// - Sections are ordered chunks of the schema with a short thematic
//   intro rather than a hand-picked bucket.
export const GUIDE = {
    "slug": "tropico-5-achievement-guide",
    "category": "game",
    "gameSlug": "tropico-5",
    "icon": "🏝",
    "title": "Tropico 5 Achievement Guide",
    "summary": "A practical guide to all 70 Steam achievements in Tropico 5 (5 hidden). Covers the tutorials and the five campaign missions, the multiplayer and economy milestones, the dynasty, survival and sandbox goals, and the Waterborne and Espionage DLC.",
    "relatedSlugs": [
        "achievement-completion-and-tracking",
        "understanding-achievement-availability"
    ],
    "sections": [
        {
            "heading": "Overview",
            "body": [
                "Tropico 5 has 70 Steam achievements and five are hidden - all five campaign-mission completions. The rest are open: the tutorials, multiplayer wins (by points, money, construction, docks, power sharing), a large block of single-game economy and city milestones (population, buildings, roads, Swiss bank account, exports, trade routes, tourists, happiness, research everything, advance eras early), the dynasty and survival achievements (skill levels, heirs, surviving coups / uprisings / a US invasion), and the Waterborne and Espionage DLC.",
                "Nothing is missable - the campaign, sandbox and DLC missions all replay and every counter is per-game or cumulative.",
                "Tip: many economy achievements are best set up on a single long Sandbox game on a large map with generous options - build wide, research everything, and let the population, building, road and export counters climb together."
            ]
        },
        {
            "heading": "Tutorials & Campaign",
            "body": [
                "Finishing all tutorials and completing each of the five campaign missions (A New Dawn, Day 0, Back to the Past, Leon Must Die!, Hope).",
                "The achievements here: Dictatorship 101 (Finish all tutorials); A New Dawn (Complete campaign mission 1.); Day 0 (Complete campaign mission 2.); Back to the Past (Complete campaign mission 3.); Leon Must Die! (Complete campaign mission 4.); Hope (Complete campaign mission 5 (the final campaign mission).)."
            ]
        },
        {
            "heading": "Multiplayer & Economy Milestones",
            "body": [
                "The multiplayer wins (points, money, construction, docks, power sharing), and the single-game economy and city milestones - trade ships, 100,000 minerals, 15 managers, faction relations, a 100-month colony, 100,000 Luxury Goods exported, plantations, 500 citizens, 150 buildings, a Swiss account, 2,000m of roads, China trade routes, 100 US relations, embassies, all tourist classes, entertainment revenue, industry variety, and happiness.",
                "The achievements here: Good Sportsmanship (Finish a multiplayer game); Project Beale (Win a multiplayer game by points); It Prints Money! (Win a multiplayer game by money); Architerissimo (Win a multiplayer game by construction); Naughty Docks (Connect a dock with that of another player); What Energy Crisis? (Produce and share 1 000 MW of power with another player); Sheep For Wood (Have a fleet of 12 trade ships); Mine! All Mine! (Mine 100 000 ores and coal in a single game); Middle Manager Of The Revolution (Have managers in more than 15 buildings in a single game); Friends With Benefits (Have relations higher than 90 with all factions in the Modern Era); Everlasting Colony (Rule for 100 months as a colonial governor); Made In Tropico (Export 100 000 Luxury Goods); Agricultural Community (Have more than 20 Plantations, Hydroponic Farms, Factory Farms and Ranches in a single game); The Madness Of Crowds (Have more than 500 citizens in a single game); The Town Of Cityville (Build 150 buildings in a single game); Pension Plan (Earn over $$200 000 Swiss bank account); Infrastructor (Build more than 2 000 meters of roads in a single game); The China Card (Successfully complete 5 trade routes with China in a single game); United States of Tropico (Finish a game with relations of 100 with the US); Globalist (Have 5 foreign powers in your Embassies at the same time); Booked Solid (Have Slob, Family, Cultural, Eco and Wealthy tourists at the same time on the island); A Barrel Of Monkeys (Earn $50 000 yearly revenue from Entertainment buildings); The Great Mogul (Have 10 different industry buildings in a single game); Extraordinary Popular Delusions (Have all happiness values above 50)."
            ]
        },
        {
            "heading": "Dynasty, Survival & Sandbox",
            "body": [
                "Executing a rebel leader, bribing a faction leader, the dynasty achievements (level 5 skill, a new heir, changing looks, 7 members), surviving a Palace attack, an uprising, a coup and a US invasion, army bases and guard towers, advancing to the Modern Era before 1960, researching everything before 2005, amending the constitution, 20 edicts, the Olympics, and the Tiny Island and Relentless Disasters Sandbox wins.",
                "The achievements here: In Seventh Heaven (Reach overall happiness of 77 ); Cause of Death (Execute a Rebel Leader); Greasing Palms (Bribe a Faction Leader); Overqualified (Have a dynasty member with a level 5 skill); Heir And Now (Recognize a new heir); Mirror, Mirror On The Wall (Change the looks of a dynasty member); Presidente's Seven (Have 7 Dynasty members); History Will Absolve Me (Survive a rebel attack against the Palace); Let Them Eat Cake (Survive an uprising); Putsch and Judy (Survive a Military Coup); The Bay Of Pigs (Survive an invasion from the USA); Think Tanks (Have 5 Army Bases in a single game); Tower Defense (Have 20 Guard Towers in a single game); Retro-futurism (Advance to the Modern Era before the year 1960); For Science! (Research all technologies at least once before the year 2005 in a single game); Fundamental Principles (Amend the Constitution 6 times in a single game); Bureaucrat (Issue 20 edicts in a single game); ... But To Take Part (Issue the \"Host the Olympics\" edict); Claustrophilia (Win a Sandbox game on a Tiny island); To Live In Interesting Times (Win a Sandbox game on an island with Relentless Disasters)."
            ]
        },
        {
            "heading": "Waterborne & Espionage DLC",
            "body": [
                "The Waterborne DLC (Treasure Hunt, the campaign, Captain Plant, the Black Pearl, Fishing Trawlers, Oyster Farms, the Nuclear Submarine, Floating Apartments, all waterborne buildings, Offshore Offices) and the Espionage DLC (the campaign, sabotage, exposing secrets, foreign spies, the Ministry of Information setup, Police Blimps, 13 spies, 20 prisoners, 20 drone kills).",
                "The achievements here: The Black Pearl (Complete \"Treasure Hunt\"); Surfin' Tropico! (Complete Waterborne campaign); Herbivore (Defeat Captain Plant in the final battle); My Precious (Finish the Waterborne campaign with the Black Pearl in your possession); Thanks for all the fish! (Have a fleet of 3 Fishing Trawlers); The King of Pearls (Have 3 Oyster Farms and a Jewelry Workshop); Do not press! (Fire missiles from a Nuclear Submarine during a battle against another player); Waterworld (Have 10 Floating Apartments and no residential buildings on land (excluding shacks)); Seasteading (Have 1 of each waterborne buildings in a single playthrough); Offshore Haven (Have 5 superpowers in Offshore Offices); The Maltese Toucan (Complete mission 1); Presidente 007 (Complete Espionage campaign); The Silent Front (Complete a Sabotage action in multiplayer); Tropicoleaks (Expose secrets of 2 different superpowers in a single game); Catch me a Spy (Deal with 10 foreign spies in a single game); Antiutopia (Have Ministry of Information, Dungeon and 10 Security Checkpoint); Big Brother (Have 5 Police Blimps); From Tropico with love (Have 13 loyal spies at the same time); The Greybar Hotel (Have 20 prisoners in Dungeons and Supermax Prisons); Kill all Humans (Eliminate 20 undesirable citizens with drones)."
            ]
        },
        {
            "heading": "Suggested Order",
            "body": [
                "1. Finish the tutorials, then play the five campaign missions to completion.",
                "2. Play a multiplayer game and win by each victory type (points, money, construction).",
                "3. Run one long Sandbox game on a large map to sweep the economy and city milestones (population, buildings, roads, exports, research everything, happiness).",
                "4. Do the dynasty and survival achievements - level 5 skills, heirs, and surviving a coup, uprising and US invasion.",
                "5. Play the Waterborne and Espionage DLC campaigns and their feats.",
                "Tip: \"For Science!\" (research everything before 2005) needs an early, research-focused game - build Colleges and a fast economy from the Colonial Era and prioritise the tech tree over expansion."
            ]
        }
    ]
};
