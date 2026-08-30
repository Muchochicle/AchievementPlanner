// Distant Worlds: Universe Game Guide. Sources:
//
// - PRIMARY: this app's own catalog data
//   (backend/catalog/games/distant-worlds-universe.json), whose 54 achievements were
//   sourced directly from Steam's own achievement schema for appid
//   261470 via ISteamUserStats/GetSchemaForGame (fetched through this
//   app's own backend/services/steamApi.js).
// - None of the achievements are hidden; every description is
//   Steam's own real text, quoted verbatim.
// - Sections are ordered chunks of the schema with a short thematic
//   intro rather than a hand-picked bucket.
export const GUIDE = {
    "slug": "distant-worlds-universe-achievement-guide",
    "category": "game",
    "gameSlug": "distant-worlds-universe",
    "icon": "🌌",
    "title": "Distant Worlds: Universe Achievement Guide",
    "summary": "A practical guide to all 54 Steam achievements in Distant Worlds: Universe - none are hidden. Covers the war, conquest and destruction-tier achievements, and the government, alliance and playstyle achievements.",
    "relatedSlugs": [
        "achievement-completion-and-tracking",
        "understanding-achievement-availability"
    ],
    "sections": [
        {
            "heading": "Overview",
            "body": [
                "Distant Worlds: Universe has 54 Steam achievements and none of them are hidden. Most are cumulative tiers - capture 10 / 50 / 100 enemy ships, conquer 10 / 50 / 100 colonies, destroy 50 / 100 / 1,000 military ships, eliminate 20 / 50 / 100 characters, run 25 / 100 / 1,000 espionage missions - alongside one-off feats (own a Planet Destroyer, defeat the Ancient Guardians, the Legendary Pirates and the Shakturi). The rest are playstyle choices: change government to the Way of the Ancients or Way of Darkness, join the Freedom Alliance or the Shakturi, and the mutually exclusive Peace through Peace (0% of time at war) and Galaxy in Flames (90%+).",
                "Nothing is missable within a game - the counters accumulate and the story events (Ancient Guardians, Shakturi) recur across games - but Peace through Peace and Galaxy in Flames pull in opposite directions and need separate games.",
                "Tip: play one long, aggressive galaxy-conquest game for the bulk of the war and destruction tiers and the story-boss achievements, then a separate peaceful game for the 0%-war achievement."
            ]
        },
        {
            "heading": "War, Conquest & Destruction Tiers",
            "body": [
                "Owning a Planet Destroyer, breaking 20 treaties, building 1 / 5 / 10 Galactic Wonders, capturing 10 / 50 / 100 enemy ships, conquering 10 / 50 / 100 colonies, defeating the Ancient Guardians, the Legendary Pirates and the Shakturi, destroying 50 / 100 / 1,000 civilian ships, 50 / 100 / 1,000 military ships, 50 / 100 / 1,000 troops, 10 / 50 / 100 SilverMists, 20 / 50 / 100 Space Monsters, and eliminating 20 / 50 / 100 characters, 1 / 5 / 10 empires and 5 / 10 / 20 pirate factions.",
                "The achievements here: Behold the Power! (Own an operational Planet Destroyer); Backstabber (Break 20 Treaties); Wunderworld (Build 1 Galactic Wonders); Wunderworld (Build 5 Galactic Wonders); Wunderworld (Build 10 Galactic Wonders); What's Yours is Mine (Capture 10 Enemy Ships and Bases); What's Yours is Mine (Capture 50 Enemy Ships and Bases); What's Yours is Mine (Capture 100 Enemy Ships and Bases); Conqueror (Conquer 10 Enemy Colonies); Conqueror (Conquer 50 Enemy Colonies); Conqueror (Conquer 100 Enemy Colonies); Galactic Downfall (Defeat the Ancient Guardians); Don't Tell me the Odds (Defeat the Legendary Pirates); The Final War (Defeat the Shakturi); Marauder (Destroy 50 Enemy Civilian Ships and Bases); Marauder (Destroy 100 Enemy Civilian Ships and Bases); Marauder (Destroy 1000 Enemy Civilian Ships and Bases); Veteran of the Galactic War (Destroy 50 Enemy Military Ships and Bases); Veteran of the Galactic War (Destroy 100 Enemy Military Ships and Bases); Veteran of the Galactic War (Destroy 1000 Enemy Military Ships and Bases); Planetary Warfare (Destroy 50 Enemy Troops); Planetary Warfare (Destroy 100 Enemy Troops); Planetary Warfare (Destroy 1000 Enemy Troops); Disassembler (Destroy 10 SilverMists); Disassembler (Destroy 50 SilverMists); Disassembler (Destroy 100 SilverMists); Monster Hunter (Destroy 20 Space Monsters); Monster Hunter (Destroy 50 Space Monsters); Monster Hunter (Destroy 100 Space Monsters); Assassin (Eliminate 20 Enemy Characters); Assassin (Eliminate 50 Enemy Characters); Assassin (Eliminate 100 Enemy Characters); New Galactic Order (Eliminate 1 Enemy Empires); New Galactic Order (Eliminate 5 Enemy Empires); New Galactic Order (Eliminate 10 Enemy Empires); I am the Law (Eliminate 5 Pirate Factions); I am the Law (Eliminate 10 Pirate Factions); I am the Law (Eliminate 20 Pirate Factions)."
            ]
        },
        {
            "heading": "Government, Alliances & Playstyle",
            "body": [
                "An empire splitting in civil war, changing government to the Way of the Ancients or Way of Darkness, joining the Freedom Alliance or the Shakturi, mining the most resources, the highest trade volume, starting 20 wars, 25 / 100 / 1,000 espionage missions, 10 / 50 / 100 colony raids, spending 0% of time at war, and spending 90%+ of time at war.",
                "The achievements here: A House Divided (Empire Splits (Civil War)); Ancient Order (Change Government to Way of the Ancients); Dark Times (Change Government to Way of Darkness); We Want You (Join the Freedom Alliance); If You Can't Beat 'Em (Join the Shakturi (Mutual Defense Pact)); Minecrafter (Mine Most Resources); Free Trader (Highest Trade Volume); Warmonger (Start 20 Wars); Cloak and Blaster (25 Successful Espionage and Sabotage Missions); Cloak and Blaster (100 Successful Espionage and Sabotage Missions); Cloak and Blaster (1000 Successful Espionage and Sabotage Missions); Raider (10 Successful Raids against enemy colonies and bases); Raider (50 Successful Raids against enemy colonies and bases); Raider (100 Successful Raids against enemy colonies and bases); Peace through Peace (Spend 0% of time at War); Galaxy in Flames (Spend at least 90% of time at War)."
            ]
        },
        {
            "heading": "Suggested Order",
            "body": [
                "1. Start one long game as an aggressive, expansionist empire on a large galaxy.",
                "2. Let the cumulative war and destruction tiers accumulate through normal conquest, and go out of your way to fight Space Monsters, SilverMists, pirates and the story bosses (Ancient Guardians, Legendary Pirates, Shakturi).",
                "3. Do the espionage and raid tiers by keeping intelligence agents and raiding fleets active.",
                "4. Do the playstyle choices in that game (Way of Darkness or the Ancients, join the Shakturi or Freedom Alliance) and aim for Galaxy in Flames (90%+ time at war).",
                "5. Play a second, deliberately peaceful game to spend 0% of it at war for Peace through Peace.",
                "Tip: the 1,000-kill tiers (civilian ships, military ships, troops, espionage missions) are the longest grind - keep automated fleets and a large intelligence budget running while you play, since they tick up passively over a long game."
            ]
        }
    ]
};
